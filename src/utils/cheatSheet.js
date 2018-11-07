// Possible ways to declare uniforms
gl.uniform1f(floatUniformLoc, v);                 // for float
gl.uniform1fv(floatUniformLoc, [v]);               // for float or float array
gl.uniform2f(vec2UniformLoc, v0, v1);            // for vec2
gl.uniform2fv(vec2UniformLoc, [v0, v1]);          // for vec2 or vec2 array
gl.uniform3f(vec3UniformLoc, v0, v1, v2);        // for vec3
gl.uniform3fv(vec3UniformLoc, [v0, v1, v2]);      // for vec3 or vec3 array
gl.uniform4f(vec4UniformLoc, v0, v1, v2, v4);    // for vec4
gl.uniform4fv(vec4UniformLoc, [v0, v1, v2, v4]);  // for vec4 or vec4 array

gl.uniformMatrix2fv(mat2UniformLoc, false, [4x element array])  // for mat2 or mat2 array
gl.uniformMatrix3fv(mat3UniformLoc, false, [9x element array])  // for mat3 or mat3 array
gl.uniformMatrix4fv(mat4UniformLoc, false, [16x element array])  // for mat4 or mat4 array

gl.uniform1i(intUniformLoc, v);                 // for int
gl.uniform1iv(intUniformLoc, [v]);                 // for int or int array
gl.uniform2i(ivec2UniformLoc, v0, v1);            // for ivec2
gl.uniform2iv(ivec2UniformLoc, [v0, v1]);          // for ivec2 or ivec2 array
gl.uniform3i(ivec3UniformLoc, v0, v1, v2);        // for ivec3
gl.uniform3iv(ivec3UniformLoc, [v0, v1, v2]);      // for ivec3 or ivec3 array
gl.uniform4i(ivec4UniformLoc, v0, v1, v2, v4);    // for ivec4
gl.uniform4iv(ivec4UniformLoc, [v0, v1, v2, v4]);  // for ivec4 or ivec4 array

gl.uniform1u(intUniformLoc, v);                 // for uint
gl.uniform1uv(intUniformLoc, [v]);                 // for uint or uint array
gl.uniform2u(ivec2UniformLoc, v0, v1);            // for uvec2
gl.uniform2uv(ivec2UniformLoc, [v0, v1]);          // for uvec2 or uvec2 array
gl.uniform3u(ivec3UniformLoc, v0, v1, v2);        // for uvec3
gl.uniform3uv(ivec3UniformLoc, [v0, v1, v2]);      // for uvec3 or uvec3 array
gl.uniform4u(ivec4UniformLoc, v0, v1, v2, v4);    // for uvec4
gl.uniform4uv(ivec4UniformLoc, [v0, v1, v2, v4]);  // for uvec4 or uvec4 array

// for sampler2D, sampler3D, samplerCube, samplerCubeShader, sampler2DShadow,
// sampler2DArray, sampler2DArrayShadow
gl.uniform1i(samplerUniformLoc, v);
gl.uniform1iv(samplerUniformLoc, [v]);