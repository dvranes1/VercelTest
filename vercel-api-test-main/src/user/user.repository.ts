import type { User } from './user.types'

export class UsersRepository {
  private users: User[] = []

  getAllUsers(): User[] {
    return this.users
  }

  addUser(user: User): User {
    this.users.push(user)
    return user
  }
}
