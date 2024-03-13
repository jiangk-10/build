// 导入express包
const express = require('express')
// 创建应用app
const app = express()
//指定静态资源对象
app.use(express.static('./dist'))
// 监听80端口
app.listen(80, () => {
    console.log("服务已经启动，127.0.0.1:80端口")
})