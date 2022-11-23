
[Example: Bundling with Rollup](https://codemirror.net/examples/bundle/)

# 项目文件

```bash
npm init -y  初始化项目
vi editor.js
vi styles.css
vi index.html
npm i codemirror @codemirror/lang-javascript  项目依赖
```

# 打包

```bash
npm i rollup @rollup/plugin-node-resolve      打包工具
vi rollup.config.js                           打包配置
vi package.json                               打包脚本
  add "bundle": "rollup -c"
npm run bundle                  打包成editor.bundle.js
```

# 运行

[http-server](https://www.npmjs.com/package/http-server)

```bash
npm i http-server
npx http-server -p 8000
```

