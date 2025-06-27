import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import wasm from 'rollup-plugin-wasm';

export default {
  input: './main.js',
  output: {
    file: 'bundle.js',
    format: 'amd', // Required for Moodle
  },
  plugins: [resolve(), commonjs(), wasm()],
};
