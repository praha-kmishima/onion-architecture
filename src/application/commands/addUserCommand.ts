import type {ICommand} from './command'

export interface AddUserCommandProps {
  name: string
  email: string
}

export class AddUserCommand implements ICommand {
  public readonly name: string
  public readonly email: string

  constructor(props: AddUserCommandProps) {
    this.name = props.name
    this.email = props.email
  }
}
