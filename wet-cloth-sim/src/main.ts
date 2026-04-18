import './style.css';
import * as THREE from "three";

// シーン作成
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202025);

// カメラ作成
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(0,0,3);

// レンダラー作成
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// 板ポリ作成
const geometry = new THREE.PlaneGeometry(2,2,1,1);
const material = new THREE.MeshBasicMaterial({
  color: 0x66aaff,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

// 向きが分かりやすいように少し回転
plane.rotation.x = -0.3;
plane.rotation.y = 0.4;

// アニメーション
function animate() {
  requestAnimationFrame(animate);

  plane.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

// リサイズ対応
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});