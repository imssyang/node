# node

```
REPL (read-eval-print-loop)                          读取求值列印循环
apt install rlwrap                                   将GNU-readline库的功能添加至命令行
env NODE_NO_READLINE=1 rlwrap -ppurple -S "::>" node 使用rlwrap将提示符设置为紫色的'::>'
ln -s /opt/node/bin/node /usr/local/bin/node
ln -s /opt/node/bin/npm /usr/local/bin/npm
ln -s /opt/node/bin/npx /usr/local/bin/npx

npm config set registry https://registry.npm.taobao.org 更换国内源仓库
npm install express-generator -g                     安装Express应用生成器
ln -s /opt/node/bin/express /usr/local/bin/express
npm install nodemon -g                               自动化工具（文件改动时重启服务器）
ln -s /opt/node/bin/nodemon /usr/local/bin/nodemon
npm install hexo-cli -g                              Blog构建工具
ln -s /opt/node/bin/hexo /usr/local/bin/hexo
npm install yarn -g
ln -s /opt/node/bin/yarn /usr/local/bin/yarn
yarn config list --verbose
yarn config set prefix "/opt/node/yarn"
yarn config set cache-folder "/opt/node/yarn/cache"
yarn config set registry https://registry.npm.taobao.org
yarn config set registry https://registry.yarnpkg.com
yarn global bin 查看全局bin目录
yarn cache clean
```

### Cloudflare/wrangler

```
npm install @cloudflare/wrangler -g --unsafe-perm=true --allow-root
ln -s /opt/node/bin/wrangler /usr/local/bin/wrangler
wrangler --help --allow-root
wrangler config    配置cloudflare API token
```

### JsSIP-tryit

```
npm install -g gulp-cli  构建app(gulpfile file)
gulp prod  构建app(production/minified mode)
gulp dev   构建app(development mode)
gulp live  构建app(development mode调试运行）
```

### AsyncMode

- waterfall `所有函数按照顺序被依次调用执行，所有的处理结果以数组形式传递给最后一个回调函数（也叫series或者sequence）。`
- series    `所有函数按照顺序被依次调用执行，所有的处理结果随机的以数组形式传递给最后一个回调函数。`
- parallel  `所有函数被并发执行，在处理完成后，处理结果被传递给最后一个回调函数。`
- whilst    `重复调用一个函数，除非某些预设的起始条件返回false或者发生错误后才调用最后一个回调函数。`
- queue     `函数被并行调用执行，但是同一时间可并行执行的函数总数有一定限制，没有被执行的函数会被队列起来等待执行。`
- until     `重复调用一个函数，直到后处理判断规则返回false或者发生错误后才调用最后一个回调函数。`
- auto      `按需调用函数，每个函数会接收并处理上一个函数的处理结果。`
- iterator  `每一个函数会调用下一个，并且每一个函数都有访问next迭代器的能力。`
- apply     `根据参数创建一个函数，与其他控制流功能结合使用。`
- nextTick  `在Node的下一轮事件循环中调用回调函数，该模式基于process.nextTick实现。`


[ECMAScript features](https://node.green/)

