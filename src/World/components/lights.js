import { DirectionalLight, HemisphereLight } from 'three';

function createLights() {

  const directionalLight = new DirectionalLight('white', 4);
  directionalLight.position.set(100, 100, 100);
  directionalLight.castShadow = true;
  directionalLight.shadow.camera.near = 0.1;
  directionalLight.shadow.camera.near = 50;

  // Increases Fidelity of shadow
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  directionalLight.shadow.bias = 0.001;

  // Expands the limit of a shadow cast, allowing an animation to move out of bounds
  directionalLight.shadow.camera.left = -100;
  directionalLight.shadow.camera.right = 100;
  directionalLight.shadow.camera.top = 100;
  directionalLight.shadow.camera.bottom = -100;

  const ambienLight = new HemisphereLight('white', 'darkslategrey', 2);

  return { directionalLight, ambienLight };
}

export { createLights }