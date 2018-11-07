import { setup as textureExample } from './examples/texture-example/main';

window.__executeExample = (id) => {
  switch(id) {
    case 'texture-example': {
      textureExample()
      break;
    }
    case 'two-dimensions-transform': {
      break;
    }
  }
}
