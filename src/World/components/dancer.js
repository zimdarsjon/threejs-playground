import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { AnimationMixer } from 'three';

async function createDancer () {
  const loader = new FBXLoader();
  const dancer = await loader.loadAsync('/assets/dancer/dancer.fbx');
  const clip = dancer.animations[0];

  const mixer = new AnimationMixer(dancer);
  const action = mixer.clipAction(clip);
  action.play();

  dancer.scale.setScalar(0.1);

  dancer.children[1].castShadow = true;
  // Animation will appear paused if no delta
  dancer.tick = (delta) => mixer.update(delta);
  return dancer;
}

export { createDancer }