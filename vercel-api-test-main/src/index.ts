import { Hono } from 'hono'
import { usersRouter } from './user/user.controller.ts'

const app = new Hono()

app.route('/users', usersRouter)

export default app
