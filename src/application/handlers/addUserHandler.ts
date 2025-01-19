import {User} from '../../domain/entities/user'
import type {IUserRepository} from '../../domain/repositories/iUserRepository'
import type {
  AddUserCommand,
  AddUserCommandOutput,
} from '../commands/addUserCommand'
import {UserDTO} from '../dto/userDTO'
import type {ICommandHandler} from './commandHandler'

export class AddUserHandler implements ICommandHandler<AddUserCommand> {
  constructor(private userRepository: IUserRepository) {}

  async handle(command: AddUserCommand): Promise<AddUserCommandOutput> {
    const user: User = User.create({
      name: command.input.name,
      email: command.input.email,
    })

    await this.userRepository.save(user)

    const output = UserDTO.fromDomain(user)
    return {output}
  }
}
