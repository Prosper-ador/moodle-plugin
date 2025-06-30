import init, { greet } from './pkg/hello_world_lib.js';

function initRust() {
  return init('/local/wasmplugin/amd/src/hello_world_lib_bg.wasm').then(() => {
    const msg = greet("Moodle from Rust");
    const div = document.getElementById("rust-output");
    if (div) div.textContent = msg;
  });
}

export { initRust };