import { UsersRepository } from './user.repository'
import type { User } from './user.types'

export class UsersService {
  private usersRepository: UsersRepository = new UsersRepository()

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.getAllUsers()
  }

  async addUser(user: User): Promise<User> {
    return this.usersRepository.addUser(user)
  }
}
