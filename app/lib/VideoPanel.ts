import * as THREE from 'three';
import { vertexShader, fragmentShader } from './shaders';

interface VideoPanelOptions {
  videoSrc: string;
  startElementId?: string;
  endElementId?: string;
  endParentId?: string;
  tintColor?: THREE.Color;
  borderRadius?: number;
}

export class VideoPanel extends THREE.Group {
  camera: THREE.OrthographicCamera;
  startElementId: string;
  endElementId: string;
  endParentId: string;
  animateProgress: { value: number };
  borderRadius: { value: number };
  tintColour: { value: THREE.Color };
  video: HTMLVideoElement;
  material: THREE.ShaderMaterial;
  mesh: THREE.Mesh;
  scrollPositionAnimStart: number = 0;
  scrollPositionAnimEnd: number = 0;
  scrollPositionAnimFollowEnd: number = 0;
  followDistanceWorld: number = 0;
  
  // Smooth animation
  targetProgress: number = 0;
  currentProgress: number = 0;
  targetMeshY: number = 0;
  currentMeshY: number = 0;

  constructor(camera: THREE.OrthographicCamera, options: VideoPanelOptions) {
    super();

    const {
      videoSrc,
      startElementId = 'video-panel-start',
      endElementId = 'video-panel-end',
      endParentId = 'video-panel-end-parent',
      tintColor = new THREE.Color(0.6, 0.6, 1.0),
      borderRadius = 0.085
    } = options;

    this.camera = camera;
    this.startElementId = startElementId;
    this.endElementId = endElementId;
    this.endParentId = endParentId;

    this.animateProgress = { value: 0 };
    this.borderRadius = { value: borderRadius };
    this.tintColour = { value: tintColor };

    // Create video texture
    this.video = document.createElement('video');
    this.video.src = videoSrc;
    this.video.loop = true;
    this.video.muted = true;
    this.video.playsInline = true;
    this.video.play();

    const videoTexture = new THREE.VideoTexture(this.video);
    videoTexture.colorSpace = THREE.SRGBColorSpace;

    // Get element positions
    const startWorldRect = this.elementToWorldRect(startElementId);
    this.position.copy(startWorldRect.position);

    const startRectLocal = this.elementToLocalRect(startElementId);
    const endRectLocal = this.elementToLocalRect(endElementId);

    // Create material
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        startRect: { value: this.rectToVec4(startRectLocal) },
        endRect: { value: this.rectToVec4(endRectLocal) },
        animateProgress: this.animateProgress,
        borderRadius: this.borderRadius,
        tintColour: this.tintColour,
        map: { value: videoTexture }
      },
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    // Create mesh
    this.mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1, 32, 32),
      this.material
    );
    this.mesh.frustumCulled = false;
    this.add(this.mesh);

    this.calculateElementValues();

    this.onScroll = this.onScroll.bind(this);
    window.addEventListener('scroll', this.onScroll);
  }

  calculateElementValues() {
    this.scrollPositionAnimStart = this.getElementPageCoords(this.startElementId).y + window.scrollY - window.innerHeight;
    this.scrollPositionAnimEnd = this.getElementPageCoords(this.endElementId).y + window.scrollY - window.innerHeight * 0.5;
    this.scrollPositionAnimFollowEnd = this.getElementPageCoords(this.endParentId).y + window.scrollY - window.innerHeight * 0.5;
    this.followDistanceWorld = this.pagePixelsToWorldUnit(this.scrollPositionAnimFollowEnd - this.scrollPositionAnimEnd);
  }

  onScroll() {
    this.targetProgress = THREE.MathUtils.clamp(
      THREE.MathUtils.inverseLerp(this.scrollPositionAnimStart, this.scrollPositionAnimEnd, window.scrollY),
      0, 1
    );

    const distanceWorld = this.pagePixelsToWorldUnit(this.scrollPositionAnimFollowEnd - this.scrollPositionAnimEnd);
    const positionFollowAmount = THREE.MathUtils.clamp(
      THREE.MathUtils.inverseLerp(this.scrollPositionAnimEnd, this.scrollPositionAnimFollowEnd, window.scrollY),
      0, 1
    );

    this.targetMeshY = -positionFollowAmount * distanceWorld;
  }

  resize() {
    this.calculateElementValues();

    const startRectLocal = this.elementToLocalRect(this.startElementId);
    const endRectLocal = this.elementToLocalRect(this.endElementId);

    this.material.uniforms.startRect.value = this.rectToVec4(startRectLocal);
    this.material.uniforms.endRect.value = this.rectToVec4(endRectLocal);

    this.onScroll();
  }

  update() {
    const smoothness = 0.15;
    
    this.currentProgress += (this.targetProgress - this.currentProgress) * smoothness;
    this.currentMeshY += (this.targetMeshY - this.currentMeshY) * smoothness;

    this.animateProgress.value = this.currentProgress;
    this.mesh.position.y = this.currentMeshY;
  }

  dispose() {
    window.removeEventListener('scroll', this.onScroll);
    this.video.pause();
    this.video.src = '';
    this.material.dispose();
    this.mesh.geometry.dispose();
  }

  rectToVec4(rect: { position: THREE.Vector3; width: number; height: number }) {
    return new THREE.Vector4(
      rect.position.x,
      rect.position.y,
      rect.height,
      rect.width
    );
  }

  getElementPageCoords(elementId: string, anchor = { x: 0.5, y: 0.5 }) {
    const element = document.getElementById(elementId);
    if (!element) return { x: 0, y: 0, width: 0, height: 0 };
    
    const rect = element.getBoundingClientRect();
    return {
      x: rect.left + rect.width * anchor.x,
      y: rect.top + rect.height * anchor.y,
      width: rect.width,
      height: rect.height
    };
  }

  pageToWorldCoords(pageX: number, pageY: number) {
    const normX = (pageX / window.innerWidth) * 2 - 1;
    const normY = -(pageY / window.innerHeight) * 2 + 1;

    const nearRelativeToCam = this.camera.near + this.camera.position.z;
    const farRelativeToCam = -this.camera.far - this.camera.position.z;
    const t = THREE.MathUtils.inverseLerp(farRelativeToCam, nearRelativeToCam, -this.camera.position.z);

    const screenPos = new THREE.Vector3(normX, normY, -t);
    screenPos.unproject(this.camera);

    return screenPos;
  }

  pagePixelsToWorldUnit(pagePixels: number) {
    const camViewHeight = this.camera.top - this.camera.bottom;
    return pagePixels * (camViewHeight / window.innerHeight);
  }

  elementToWorldRect(elementId: string, anchor = { x: 0.5, y: 0.5 }) {
    const coords = this.getElementPageCoords(elementId, anchor);
    const position = this.pageToWorldCoords(coords.x, coords.y);
    const width = this.pagePixelsToWorldUnit(coords.width);
    const height = this.pagePixelsToWorldUnit(coords.height);

    return { position, width, height };
  }

  elementToLocalRect(elementId: string) {
    const worldRect = this.elementToWorldRect(elementId, { x: 0, y: 0 });
    this.worldToLocal(worldRect.position);
    return worldRect;
  }
}
