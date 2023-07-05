# resistor-optimization

### Requirements

- git
- cmake
- Emscripten SDK
- Node.js

### Building
Make sure that you've activated Emscripten SDK.

```bash
git submodule update --init --recursive
npm install --omit=dev
npm run wasm-build
NODE_ENV=production npm run generate
```
