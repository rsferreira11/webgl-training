import fragmentShaderSource from './shader.frag';
import vertexShaderSource from './shader.vert';

import { createCanvas } from 'utils/createCanvas';

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

  if (success) {
    return shader;
  }

  gl.deleteShader(shader);
  return null;
}

function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  const success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }

  gl.deleteProgram(program);
  return null;
}

const executeShader = (gl, image) => {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  const program = createProgram(gl, vertexShader, fragmentShader);

  // Create a Vertex Array Object
  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  // Attributes
  const positionAttributeLocation = gl.getAttribLocation(program, "a_position");

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      0,   360,
      640, 0,
      640, 360,

      0,   360,
      640, 360,
      640, 720,

      640, 360,
      1280, 360,
      640, 720,

      640, 360,
      640, 0,
      1280, 360
    ]),
    gl.STATIC_DRAW
  );

  gl.enableVertexAttribArray(positionAttributeLocation);
  gl.vertexAttribPointer(...Object.values({
    attributeLocation: positionAttributeLocation,
    size: 2,
    type: gl.FLOAT,
    normalize: false,
    stride: 0,
    offset: 0,
  }));

  // Provide texture coordinates for the rectangle
  const texCoordAttributeLocation = gl.getAttribLocation(program, "a_texCoord");
  const texCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    0.0, 0.5,
    0.5, 0.0,
    0.5, 0.5,

    0.0, 0.5,
    0.5, 0.5,
    0.5, 1.0,

    0.5, 0.5,
    1.0, 0.5,
    0.5, 1.0,

    0.5, 0.5,
    0.5,   0,
    1.0, 0.5,
  ]), gl.STATIC_DRAW);

  gl.enableVertexAttribArray(texCoordAttributeLocation);
  gl.vertexAttribPointer(...Object.values({
    attributeLocation: texCoordAttributeLocation,
    size: 2,
    type: gl.FLOAT,
    normalize: false,
    stride: 0,
    offset: 0,
  }));

  // Create Texture
  const texture = gl.createTexture();
  gl.activeTexture(gl.TEXTURE0 + 0);
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Set the Texture to not to repeat
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  // Set mipmap to not use it
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);

  // Upload the image into the texture
  gl.texImage2D(...Object.values({
    textureType: gl.TEXTURE_2D,
    mipLevel: 0,
    internalFormat: gl.RGBA,
    srcFormat: gl.RGBA,
    srcType: gl.UNSIGNED_BYTE,
    domImage: image
  }));

  // Tell webgl how to convert from clipspace to pixels
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  // Clear Canvas
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  gl.useProgram(program);

  // Uniforms
  const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
  gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);

  const imageLocation = gl.getUniformLocation(program, "u_image");
  gl.uniform1i(imageLocation, 0);

  const primitiveType = gl.TRIANGLES;
  const offset = 0;
  const count =  12;
  gl.drawArrays(primitiveType, offset, count);
}

export const setup = function() {
  const canvas = createCanvas();
  document.body.appendChild(canvas);

  const gl = canvas.getContext("webgl2");
  if (!gl) {
    alert('Your browser does not support webGl 2');
  }
  else {
    const image = new Image();
    image.src = "demo.jpg";
    image.onload = function () {
      executeShader(gl, image);
    }
  }
}
