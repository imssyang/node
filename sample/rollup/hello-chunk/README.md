
# 打包

```bash
rollup src/main.js -f cjs -d dist
rollup src/main.js src/main2.js -f cjs -d dist
```

# 测试

```bash
node -e "require('./dist/main.js')()"
node test/test_bundle.js
```
