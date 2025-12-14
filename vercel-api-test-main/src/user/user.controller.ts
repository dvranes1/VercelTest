import { Hono } from 'hono'
import { handleError } from '../lib/http'
import { UsersService } from './user.service'
import type { User } from './user.types'

const router = new Hono()
const userService = new UsersService()

router.get('/', async ctx => {
  try {
    const users: User[] = await userService.getAllUsers()
    return ctx.json(users)
  } catch (error) {
    handleError(ctx, error)
  }
})

router.post('/', async ctx => {
  try {
    const payload = await ctx.req.json()
    const newUser = userService.addUser(payload as User)
    return ctx.json(newUser, 201)
  } catch (error) {
    handleError(ctx, error)
  }
})

export { router as usersRouter }
