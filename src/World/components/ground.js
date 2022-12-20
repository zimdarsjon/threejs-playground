import { PlaneGeometry, Mesh, MeshStandardMaterial } from 'three';

const createGround = () => {
  const geometry = new PlaneGeometry(100, 100, 1, 1);
  const material = new MeshStandardMaterial({color: 'white'});
  const ground = new Mesh(geometry, material);
  ground.rotation.x = - Math.PI / 2;
  ground.receiveShadow = true;
  return ground;
}

export { createGround }