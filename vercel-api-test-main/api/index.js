import { Hono } from 'hono'
import { usersRouter } from './users/user.controller.js'

const app = new Hono()

app.route('/users', usersRouter)

export default app
