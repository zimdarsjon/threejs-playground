import { World } from './World/World.js';

async function main() {
  const container = document.querySelector('#root');
  const world = new World(container);
  await world.init();
  world.start();
}

main().catch(err => console.log(err));