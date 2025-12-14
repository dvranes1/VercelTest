import { Hono } from 'hono'
import { handleError } from '../http.js'
import { UsersService } from './user.service.js'

const router = new Hono()
const userService = new UsersService()

router.get('/', async ctx => {
  try {
    const users = await userService.getAllUsers()
    return ctx.json(users)
  } catch (error) {
    return handleError(ctx, error)
  }
})

router.post('/', async ctx => {
  try {
    const payload = await ctx.req.json()
    const newUser = await userService.addUser(payload)
    return ctx.json(newUser, 201)
  } catch (error) {
    return handleError(ctx, error)
  }
})

export { router as usersRouter }
