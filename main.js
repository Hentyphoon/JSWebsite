import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.js';;

const scene = new THREE.Scene(); // Base scene
scene.background = new THREE.Color(0x87CEEB);
const view = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // Camera

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Set renderer size
document.body.appendChild(renderer.domElement); // Append renderer to HTML

const geo = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Set color to pink using hexadecimal code
const box = new THREE.Mesh(geo, material);
scene.add(box);

view.position.set(5,5,5); // Position camera
view.lookAt(box.position);

function animate() {
    renderer.render(scene, view); // Render the scene from the perspective of the camera
}

animate();
