import { DirectionalLight, HemisphereLight } from 'three';

function createLights() {

  const directionalLight = new DirectionalLight('white', 4);
  directionalLight.position.set(100, 100, 100);

  const ambienLight = new HemisphereLight('white', 'darkslategrey', 2);

  return { directionalLight, ambienLight };
}

export { createLights }