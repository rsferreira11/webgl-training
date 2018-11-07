#version 300 es

// fragment shaders don't have a default precision so we need
// to pick one. mediump is a good default. It means "medium precision"
precision mediump float;

// Texture
uniform sampler2D u_image;

// the texCoords passed in from the vertex shader
in vec2 v_texCoord;

// we need to declare an output for the fragment shader
out vec4 outColor;

void main() {
  // Just set the output to a constant redish-purple
  vec4 tex = texture(u_image, v_texCoord).rgba;

  // if (abs(tex.r - tex.b) < 0.1 && abs(tex.r - tex.g) < 0.1) {
  //   outColor = tex;
  // }
  // else {
  //   float strongestColor = max(max(tex.r, tex.g), tex.b);
  //   outColor = vec4(strongestColor, strongestColor, strongestColor, tex.a);
  // }

  outColor = tex;
}
