import { Clock } from 'three';

const clock = new Clock();

class Loop {
  constructor(camera, scene, renderer) {
    this.updatables = [];
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.paused = false;
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.paused) {
          clock.start();
          this.start();
          this.paused = false;
        } else {
          clock.stop();
          this.stop();
          this.paused = true;
        }
      }
    })
  }
  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick();
      this.renderer.render(this.scene, this.camera);
    })
  }
  stop() {
    this.renderer.setAnimationLoop(null)
  }
  tick() {
    const delta = clock.getDelta();
    for (const object of this.updatables) {
      object.tick(delta);
    }
  }
}

export { Loop }