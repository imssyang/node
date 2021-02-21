# node

```
REPL (read-eval-print-loop)                          读取求值列印循环
apt install rlwrap                                   将GNU-readline库的功能添加至命令行
env NODE_NO_READLINE=1 rlwrap -ppurple -S "::>" node 使用rlwrap将提示符设置为紫色的'::>'
ln -s /opt/node/bin/node /usr/local/bin/node
ln -s /opt/node/bin/npm /usr/local/bin/npm
ln -s /opt/node/bin/npx /usr/local/bin/npx
```

### AsyncMode

- waterfall
 - 所有函数按照顺序被依次调用执行，所有的处理结果以数组形式传递给最后一个回调函数（也叫series或者sequence）。
- series
 - 所有函数按照顺序被依次调用执行，所有的处理结果随机的以数组形式传递给最后一个回调函数。


[ECMAScript features](https://node.green/)

