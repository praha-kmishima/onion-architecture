import type {UserDTO} from '../dto/userDTO'
import type {ICommand} from './command'

export interface AddUserCommandInput {
  name: string
  email: string
}

export interface AddUserCommandOutput {
  output: UserDTO
}

export class AddUserCommand
  implements ICommand<AddUserCommandInput, AddUserCommandOutput>
{
  constructor(readonly input: AddUserCommandInput) {}
  getOutputType(): AddUserCommandOutput {
    throw new Error(
      'This method is for type inference only and should not be called.',
    )
  }
}
