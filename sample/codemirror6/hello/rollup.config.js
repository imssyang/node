import {nodeResolve} from "@rollup/plugin-node-resolve"
export default [{
    input: "./src/editor.basic.js",
    output: {
      file: "./dist/editor.basic.js",
      format: "iife"
    },
    plugins: [nodeResolve()]
  }, {
    input: "./src/editor.language.js",
    output: {
      file: "./dist/editor.language.js",
      format: "iife"
    },
    plugins: [nodeResolve()]
  }
]
