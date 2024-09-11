import * as THREE from 'three';

const scene = new THREE.Scene(); // Base scene
const view = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // Camera

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Set renderer size
document.body.appendChild(renderer.domElement); // Append renderer to HTML

const geo = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xffc0cb }); // Set color to pink using hexadecimal code
const box = new THREE.Mesh(geo, material);
scene.add(box);

view.position.z = 5; // Position camera

function animate() {
    requestAnimationFrame(animate);
    box.rotation.x += 0.01; // Rotate the box
    box.rotation.y += 0.01; // Rotate the box

    renderer.render(scene, view); // Render the scene from the perspective of the camera
}

animate();
