import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three';

const createBox = () => {
  const geometry = new BoxGeometry( 1, 1, 1 );
  const material = new MeshStandardMaterial({color: 'red'});
  const mesh = new Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.position.y = 1;
  return mesh;
}

export { createBox }