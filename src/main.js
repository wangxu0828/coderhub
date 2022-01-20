const koa = require('koa')

const app = new koa()

app.listen(8000, () => {
  console.log('服务启动成功了')
})
