

import { createRenderer } from './systems/renderer.js';
import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { setSize, Resizer } from './systems/Resizer.js';
import { createLights } from './components/lights.js';
import { Loop } from './systems/Loop.js';
import { createControls } from './systems/controls.js';
import { createGround } from './components/ground.js';
import { createDancer } from './components/dancer.js';

let camera;
let controls;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();

    // Attaches itself to the DOM Element of the renderer
    controls = createControls(camera, renderer);

    // Add render to screen
    container.append(renderer.domElement);

    const { directionalLight, ambienLight } = createLights();

    scene.add(directionalLight, ambienLight, createGround());


    // Sets size initially and watches for resizing of screen
    const resizer = new Resizer(container, camera, renderer);

    // Rerenders the scene, ticking on updatables on its list
    loop = new Loop(camera, scene, renderer);

    // Add Updatables to loop
    loop.updatables.push(controls);

    // Renders Initially, but loop provides continuous rendering
    renderer.render(scene, camera);
  }
  start() {
    loop.start();
  }
  end() {
    loop.end();
  }
  async init() {
    const dancer = await createDancer();
    loop.updatables.push(dancer);
    scene.add(dancer);
  }
}

export { World }