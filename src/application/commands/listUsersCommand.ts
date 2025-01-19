import type {UserDTO} from '../dto/userDTO'
import type {ICommand} from './command'

export interface ListUserCommandInput {}

export interface ListUserCommandOutput {
  output: UserDTO[]
}

export class ListUsersCommand
  implements ICommand<ListUserCommandInput, ListUserCommandOutput>
{
  constructor(readonly input: ListUserCommandInput) {}

  getOutputType(): ListUserCommandOutput {
    throw new Error(
      'This method is for type inference only and should not be called.',
    )
  }
}
