
# 基本

npm install --global rollup

browsers:
rollup main.js --file bundle.js --format iife

Node.js (CommonJS):
rollup main.js --file bundle.js --format cjs

For both browsers and Node.js:
rollup main.js --file bundle.js --format umd --name "myBundle"

# 配置

rollup.config.js (=mjs)
rollup.config.mjs (es6)
rollup.config.cjs (node)
rollup.config.ts (TypeScript)

rollup --config (rollup.config.mjs -> rollup.config.cjs -> rollup.config.js)
rollup --config node:my-special-config
  (loading configuration files from packages installed into node_modules)
  (rollup-config-my-special-config -> my-special-config)

```js
// rollup.config.js
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};
```

```js
// rollup.config.js (building more than one bundle)
export default [
  {
    input: 'main-a.js',
    output: {
      file: 'dist/bundle-a.js',
      format: 'cjs'
    }
  },
  {
    input: 'main-b.js',
    output: [
      {
        file: 'dist/bundle-b1.js',
        format: 'cjs'
      },
      {
        file: 'dist/bundle-b2.js',
        format: 'es'
      }
    ]
  }
];
```

npm i @rollup/plugin-typescript
rollup --config rollup.config.ts --configPlugin typescript


