import type {IUserRepository} from '../../domain/repositories/iUserRepository'
import type {ListUsersCommand} from '../commands/listUsersCommand'
import {UserDTO} from '../dto/userDTO'
import type {ICommandHandler} from './commandHandler'

export class ListUsersHandler implements ICommandHandler<ListUsersCommand> {
  constructor(private userRepository: IUserRepository) {}

  async handle(_: ListUsersCommand): Promise<UserDTO[]> {
    const users = await this.userRepository.findAll()
    return users.map(UserDTO.fromDomain)
  }
}
