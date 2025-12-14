import express from 'express'
import { formatAppError, isAppError, makeError } from './error.js'
import { UsersService } from './users/user.service.js'

const app = express()
const userService = new UsersService()

app.use(express.json())

app.get('/', async (_req, res) => {
  try {
    const users = await userService.getAllUsers()
    res.status(200).json(users)
  } catch (err) {
    handleError(res, err)
  }
})

app.post('/', async (req, res) => {
  try {
    const newUser = await userService.addUser(req.body ?? {})
    res.status(201).json(newUser)
  } catch (err) {
    handleError(res, err)
  }
})

app.use((_req, res) => {
  res.status(405).json({ message: 'Method Not Allowed' })
})

function handleError(res, err) {
  if (isAppError(err)) {
    res.status(err.status).json(formatAppError(err))
  } else {
    const fallback = makeError('UnknownError', 500, 'An unknown error occurred.')
    res.status(fallback.status).json(formatAppError(fallback))
  }
}

export default app
