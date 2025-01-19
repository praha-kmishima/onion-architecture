import type {IUserRepository} from '../../domain/repositories/iUserRepository'
import type {
  ListUserCommandOutput,
  ListUsersCommand,
} from '../commands/listUsersCommand'
import {UserDTO} from '../dto/userDTO'
import type {ICommandHandler} from './commandHandler'

export class ListUsersHandler implements ICommandHandler<ListUsersCommand> {
  constructor(private userRepository: IUserRepository) {}

  async handle(_: ListUsersCommand): Promise<ListUserCommandOutput> {
    const users = await this.userRepository.findAll()
    const output = users.map(UserDTO.fromDomain)
    return {output}
  }
}
