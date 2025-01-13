import {randomUUID} from 'node:crypto'

interface UserProps {
  id: string
  name: string
  email: string
}

export interface CreateUserProps extends Omit<UserProps, 'id'> {}

export class User {
  readonly id: string
  name: string
  email: string

  private constructor(props: UserProps) {
    this.id = props.id
    this.name = props.name
    this.email = props.email
  }

  static create(props: CreateUserProps): User {
    return new User({
      id: randomUUID(),
      name: props.name,
      email: props.email,
    })
  }
}
