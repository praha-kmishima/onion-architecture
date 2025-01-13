import type {User} from '../../domain/entities/user'
import type {IUserRepository} from '../../domain/repositories/iUserRepository'

export class InMemoryUserRepository implements IUserRepository {
  private users: User[] = []

  findAll(): User[] {
    return this.users
  }

  findById(id: string): User | undefined {
    return this.users.find((item) => item.id === id)
  }

  save(user: User): void {
    const index = this.users.findIndex((item) => item.id === user.id)
    if (index !== -1) {
      this.users[index] = user // Update
    } else {
      this.users.push(user) // Insert
    }
  }

  delete(id: string): void {
    this.users = this.users.filter((item) => item.id !== id)
  }
}
