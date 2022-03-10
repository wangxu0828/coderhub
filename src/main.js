const app = require('./app')
const Router = require('koa-router')

const { APP_PORT } = require('./app/config')
const userRouter = new Router({ prefix: '/user' })

userRouter.post('/', (ctx, next) => {
  ctx.body = '创建用户成功'
})
app.use(userRouter.routes())
app.use(userRouter.middleware())

app.listen(APP_PORT, (req, res) => {
  console.log('服务器启动成功了')
})
