// Common shader functions
const common = `
vec2 getNdcUV(vec2 uv) {
  return uv * 2.0 - 1.0;
}

float roundedCornerMask(vec2 uv, float borderRadius, float aspect, float taper) {
  vec2 uv_ndc = getNdcUV(uv);
  uv_ndc = abs(uv_ndc);

  vec2 corner;
  corner.x = uv_ndc.x - (1.0 - borderRadius - taper);
  corner.y = uv_ndc.y - (1.0 - borderRadius);

  corner = max(corner, vec2(0.0, 0.0));
  corner.x *= aspect;

  float distanceFromCorner = length(corner);
  return step(distanceFromCorner, borderRadius);
}

float roundedCornerMask(vec2 uv, float borderRadius, float aspect) {
  return roundedCornerMask(uv, borderRadius, aspect, 0.0);
}

vec2 rotate(vec2 pos, float radians) {
  float cosTheta = cos(radians);
  float sinTheta = sin(radians);
  mat2 rotMat = mat2(cosTheta, -sinTheta, sinTheta, cosTheta);
  return rotMat * pos;
}
`;

// Vertex Shader with 3D rotation and translate effects
export const vertexShader = `
#define PI 3.14159265358979

uniform float animateProgress;
uniform vec4 startRect;
uniform vec4 endRect;

varying vec2 vUv;

${common}

vec2 getRectPos(vec4 rect, vec2 uv) {
  vec2 pos;
  pos.x = mix(rect.x, rect.x + rect.w, uv.x);
  pos.y = mix(rect.y - rect.z, rect.y, uv.y);
  return pos;
}

void main() {
  vec3 pos = position;

  float rotateStepEdgeCurve = 1.0 - sin(animateProgress * PI) * 2.0;
  float startEndCurve = smoothstep(0.2, 1.0, animateProgress);
  float rotateCurve = (smoothstep(0.1, 0.4, animateProgress) - smoothstep(0.6, 0.9, animateProgress)) * 0.4;
  float translateCurve = smoothstep(0.0, 0.2, animateProgress) - smoothstep(0.2, 0.8, animateProgress);

  vec2 videoPanelStartPos = getRectPos(startRect, uv);
  vec2 videoPanelEndPos = getRectPos(endRect, uv);

  float rotateMask = smoothstep(rotateStepEdgeCurve, 1.0, uv.x);
  rotateMask *= smoothstep(rotateStepEdgeCurve, 1.0, uv.y);

  float translateMask = smoothstep(0.6, 1.0, uv.x);
  translateMask *= smoothstep(0.5, 1.0, uv.y);

  pos.xy = mix(videoPanelStartPos, videoPanelEndPos, startEndCurve);
  pos.xy = rotate(pos.xy, rotateCurve * rotateMask);
  pos.x *= 1.0 + 0.3 * translateCurve * translateMask;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  vUv = uv;
}
`;

// Fragment Shader
export const fragmentShader = `
#define REFERENCE_ASPECT 1.77777777778

uniform float animateProgress;
uniform float borderRadius;
uniform vec4 startRect;
uniform vec4 endRect;
uniform vec3 tintColour;
uniform sampler2D map;

varying vec2 vUv;

${common}

float getAspect() {
  float width = mix(startRect.w, endRect.w, animateProgress);
  float height = mix(startRect.z, endRect.z, animateProgress);
  return width / height;
}

void main() {
  vec2 uv = vUv;

  float aspect = getAspect();
  float aspectScale = (aspect / REFERENCE_ASPECT) - 1.0;
  aspectScale /= aspect;

  uv.y = mix(aspectScale, 1.0 - aspectScale, vUv.y);

  vec4 albedo = texture2D(map, uv);

  float tintCurve = 1.0 - smoothstep(1.0, 0.0, animateProgress);

  albedo.a = roundedCornerMask(vUv, borderRadius, aspect);
  albedo.rgb = mix(albedo.rgb * tintColour, albedo.rgb, tintCurve);

  gl_FragColor = albedo;
}
`;
