import * as THREE from "https://unpkg.com/three@0.158.0/build/three.module.js";

// Function to initialize and animate the cube
function createCube() {
  // Set up the scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(300, 300); // Set the size of the cube

  // Append the renderer to the cube container
  const cubeContainer = document.getElementById("cube-container");
  if (cubeContainer) {
    cubeContainer.appendChild(renderer.domElement);
  }

  // Create the geometry and material for the cube
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x800080 }); // Purple color
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Position the camera
  camera.position.z = 2;

  // Animation loop to rotate the cube
  function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
}

// Export the function to be used in the HTML file
export { createCube };
