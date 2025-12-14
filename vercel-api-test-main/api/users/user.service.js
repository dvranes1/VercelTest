import { makeError } from '../error.js'
import { UsersRepository } from './user.repository.js'

export class UsersService {
  constructor() {
    this.usersRepository = new UsersRepository()
  }

  async getAllUsers() {
    return this.usersRepository.getAllUsers()
  }

  async addUser(user) {
    if (
      !user ||
      !user.uuid ||
      !user.fullName ||
      typeof user.age !== 'number' ||
      !user.email
    ) {
      throw makeError('UserError', 400, 'Invalid user data')
    }

    return this.usersRepository.addUser(user)
  }
}
