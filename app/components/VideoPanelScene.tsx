'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { VideoPanel } from '../lib/VideoPanel';

interface VideoPanelSceneProps {
  videoSrc: string;
  tintColor?: { r: number; g: number; b: number };
  borderRadius?: number;
  startElementId?: string;
  endElementId?: string;
  endParentId?: string;
}

export default function VideoPanelScene({ 
  videoSrc, 
  tintColor = { r: 0.6, g: 0.6, b: 1.0 },
  borderRadius = 0.085,
  startElementId = 'video-panel-start',
  endElementId = 'video-panel-end',
  endParentId = 'video-panel-end-parent'
}: VideoPanelSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const frustumSize = 10;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      canvas: canvasRef.current,
      alpha: true 
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Camera
    const camera = new THREE.OrthographicCamera();
    camera.near = 0;
    camera.far = 1000;
    camera.position.z = 10;

    const updateCamera = () => {
      const aspect = window.innerWidth / window.innerHeight;
      const horizontal = frustumSize * aspect / 2;
      const vertical = frustumSize / 2;
      camera.left = -horizontal;
      camera.right = horizontal;
      camera.top = vertical;
      camera.bottom = -vertical;
      camera.updateMatrixWorld();
      camera.updateProjectionMatrix();
    };
    updateCamera();

    // Scene
    const scene = new THREE.Scene();

    // Video Panel
    const videoPanel = new VideoPanel(camera, {
      videoSrc,
      startElementId,
      endElementId,
      endParentId,
      tintColor: new THREE.Color(tintColor.r, tintColor.g, tintColor.b),
      borderRadius
    });
    scene.add(videoPanel);

    // Scroll handler
    const onScroll = () => {
      camera.position.y = -window.scrollY / window.innerHeight * frustumSize;
    };

    // Resize handler
    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      updateCamera();
      videoPanel.resize();
    };

    // Animation loop
    let animationId: number;
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      videoPanel.update();
      renderer.render(scene, camera);
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      videoPanel.dispose();
    };
  }, [videoSrc, tintColor, borderRadius, startElementId, endElementId, endParentId]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none"
    />
  );
}
