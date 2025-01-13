import type {User} from '../entities/user'

export interface IUserRepository {
  findAll(): User[] | Promise<User[]>
  findById(id: string): User | undefined | Promise<User | undefined>
  save(user: User): void | Promise<void>
  delete(id: string): void | Promise<void>
}
