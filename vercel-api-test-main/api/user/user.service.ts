import { makeError } from '../errors/error'
import { UsersRepository } from './user.repository'
import type { User } from './user.types'

export class UsersService {
  private usersRepository: UsersRepository = new UsersRepository()

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.getAllUsers()
  }

  async addUser(user: User): Promise<User> {
    if (!user.uuid || !user.fullName || !user.age || !user.email) {
      throw makeError('UserError', 400, 'Invalid user data')
    }
    return this.usersRepository.addUser(user)
  }
}
