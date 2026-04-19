import './style.css';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

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
camera.position.set(2,4,7);

// レンダラー作成
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// 板ポリ作成
const geometry = new THREE.PlaneGeometry(2,2,20,20);
const material = new THREE.MeshBasicMaterial({
  color: 0x66aaff,
  side: THREE.DoubleSide,
  wireframe: false,
});
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

// ワイヤーフレーム表示切替ボタン
const toggleWireframeButton = document.getElementById("toggleWireframe") as HTMLButtonElement;

// 状態管理
let isWireframe = false;

toggleWireframeButton.addEventListener("click", () =>{
  isWireframe = !isWireframe;

  material.wireframe = isWireframe;
  toggleWireframeButton.textContent = `ワイヤーフレーム: ${isWireframe ? "ON" : "OFF"}`;
});

// 補助グリッド表示
const grid = new THREE.GridHelper(10, 10);
scene.add(grid);

// カメラ操作
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0,0,0);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// アニメーション
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();

// リサイズ対応
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});