import init, { greet } from './pkg/hello_world_lib.js';

export const initRust = async () => {
  await init('/local/wasmplugin/amd/src/hello_world_lib_bg.wasm');
  const msg = greet("Moodle from Rust");
  const div = document.getElementById("rust-output");
  if (div) div.textContent = msg;
};

initRust();