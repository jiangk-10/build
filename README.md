# 前端项目打包并部署--本地实践

## 1、项目打包---dist.js

## 2、当前项目路径下，初始化包管理工具(从当前目录中提取的信息生成默认的 package.json)---npm init

## 3、安装 express 库---npm install express

## 4、在项目下，创建 app.js 文件---app.js

```javaScript
// 导入 express 包
const express = require('express')
// 创建应用 app
const app = express()
//指定静态资源对象
app.use(express.static('./dist'))
// 监听 80 端口
app.listen(80, () => {
 console.log("服务已经启动，127.0.0.1:80 端口")
 })
```
