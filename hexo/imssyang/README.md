
# Hexo

### 初始化

```
npm install hexo-cli -g
hexo init imssyang
cd imssyang
hexo --version
```

### 安装依赖

```
vim package.json
  "dependencies": {
    "hexo-generator-sitemap": "^2.0.0",
    "hexo-related-popular-posts": "^5.0.0",
    "hexo-word-counter": "^0.0.3",
    "hexo-theme-next": "^8.2.0"
  }
npm install
hexo clean
cp node_modules/hexo-theme-next/_config.yml _config.next.yml
```

### 修改配置

···
vim _config.yml
vim _config.next.yml
···

### 运行

```
hexo clean    清理缓存
hexo --debug  调试模式
hexo server --ip 192.168.5.220
```

### 404-page

```
hexo new page 404   创建source/404/index.md
hexo new page tags
hexo new page categories 
```

[hexo](https://hexo.io/)
[theme-next](https://theme-next.js.org/)
[Favicon Generator](https://realfavicongenerator.net/)


