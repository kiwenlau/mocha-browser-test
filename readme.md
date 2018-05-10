### 使用浏览器运行测试

使用浏览器打开[index.html](./test/index.html)即可：

![](./result.png)

### 使用mocha-phantomjs运行测试

安装phantomjs和mocha-phantomjs(phantomjs模块更名为phantomjs-prebuilt)：

```bash
sudo cnpm install -g phantomjs-prebuilt mocha-phantomjs
```

运行测试：

```bash
mocha-phantomjs --path /usr/local/bin/phantomjs ./test/index.html


  测试add函数
    ✓ 1加1等于2
    ✓ 1加2等于3


  2 passing (7ms)
```

### 使用npm test运行测试

因为[package.json](./package.json)中配置npm的test脚本，因此可以直接使用npm test运行测试：


```bash
npm test
```


