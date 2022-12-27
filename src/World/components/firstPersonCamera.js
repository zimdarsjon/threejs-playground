import {
  Quaternion,
  Vector3,
  clamp
} from 'three';

class InputController {
  constructor() {
    this.current = {};
    this.current.leftButton = false;
    this.current.rightButton = false;
    this.current.mouseX = 0;
    this.current.mouseY = 0;
    this.previous = null;
    this.keys = {};
    this.previousKeys = {};
    document.addEventListener('mousedown', (e) => this.onMouseDown(e));
    document.addEventListener('mouseup', (e) => this.onMouseUp(e));
    document.addEventListener('mousemove', (e) => this.onMouseMove(e));
  }
  onMouseDown(e) {
    switch(e.button) {
      case 0: {
        this.current.leftButton = true;
        break;
      }
      case 2: {
        this.current.rightButton = true;
        break;
      }
    }
  }
  onMouseUp(e) {
    switch(e.button) {
      case 0: {
        this.current.leftButton = false;
        break;
      }
      case 2: {
        this.current.rightButton = false;
        break;
      }
    }
  }
  onMouseMove(e) {
     this.current.mouseX = e.pageX - window.innerWidth / 2;
     this.current.mouseY = e.pageY - window.innerHeight / 2;

     // Check to call this more often
     if (this.previous === null) {
      this.previous = {...this.current};
     }

     this.current.mouseXDelta = this.current.mouseX - this.previous.mouseX;
     this.current.mouseYDelta = this.current.mouseY - this.previous.mouseY;
  }
  tick() {
    this.previous = {...this.current};
  }
}

class FirstPersonCamera {
  constructor(camera) {
    this.camera = camera;
    this.input = new InputController();
    this.rotation = new Quaternion();
    this.translation = new Vector3();
    this.phi = 0;
    this.theta = 0;
  }
  tick(delta) {
    this.updateRotation(delta);
    this.updateCamera();
    //this.input.tick();
  }
  updateRotation(delta) {
    const xh = this.input.current.mouseXDelta / window.innerWidth;
    const yh = this.input.current.mouseYDelta / window.innerHeight;

    this.phi += -xh * 5;
    //this.theta = this.theta + -yh * 5 -Math.PI / 3;// Math.PI / 3

    const xRotation = new Quaternion();
    //const yRotation = new Quaternion();

    xRotation.setFromAxisAngle(new Vector3( 0, 1, 0), this.phi);
    //yRotation.setFromAxisAngle(new Vector3( 1, 0, 0), this.theta);

    const newRotation = new Quaternion();
    newRotation.multiply(xRotation);
    //newRotation.multiply(yRotation);

    console.log(newRotation)
    this.rotation.copy(newRotation);
  }
  updateCamera() {
    //console.log(this.rotation)
    this.camera.quaternion.copy(this.rotation);
  }
}

export { FirstPersonCamera }