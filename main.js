import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.js';;

const scene = new THREE.Scene(); // Base scene
scene.background = new THREE.Color(0xffffff);

const view = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // Camera

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Set renderer size
document.body.appendChild(renderer.domElement); // Append renderer to HTML

// Create a box
const geo = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xdedede }); // Set color using hexadecimal code
const box = new THREE.Mesh(geo, material);

// Create the edges (border) for the box
const boxEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(box.geometry), 
    new THREE.LineBasicMaterial({ color: 0x000000 }) // Black border
);

// Add box and its border to the scene
scene.add(box);
scene.add(boxEdges);

// Create a cylinder
const cylinder_geo = new THREE.CylinderGeometry();
const cylinder = new THREE.Mesh(cylinder_geo, material);
cylinder.position.x = 2;

// Create the edges (border) for the cylinder
const cylinderEdges = new THREE.LineSegments(
    new THREE.EdgesGeometry(cylinder.geometry), 
    new THREE.LineBasicMaterial({ color: 0x000000 }) // Black border
);

// Add cylinder and its border to the scene
scene.add(cylinder);
scene.add(cylinderEdges);

view.position.set(5, 5, 5); // Position camera
view.lookAt(box.position);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, view); // Render the scene from the perspective of the camera
}

animate();
