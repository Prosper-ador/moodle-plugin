import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import wasm from '@rollup/plugin-wasm';

export default {
  input: 'main.js',
  output: {
    file: 'amd/src/bundle.js', // for Moodle AMD module
    format: 'amd',
    name: 'hello_world_lib'    // Moodle will load it as 'local_wasmplugin/hello_world_lib'
  },
  plugins: [
    resolve(),
    commonjs(),
    wasm()
  ]
};
