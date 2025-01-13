import {User} from '../../domain/entities/user'
import type {IUserRepository} from '../../domain/repositories/iUserRepository'
import type {AddUserCommand} from '../commands/addUserCommand'
import {UserDTO} from '../dto/userDTO'
import type {ICommandHandler} from './commandHandler'

export class AddUserHandler implements ICommandHandler<AddUserCommand> {
  constructor(private userRepository: IUserRepository) {}

  async handle(command: AddUserCommand): Promise<UserDTO> {
    const user: User = User.create({
      name: command.name,
      email: command.email,
    })

    await this.userRepository.save(user)

    return UserDTO.fromDomain(user)
  }
}
