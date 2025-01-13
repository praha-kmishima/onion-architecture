import type {User} from '../../domain/entities/user'

export class UserDTO {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
  ) {}

  // Convert domain entity to DTO
  static fromDomain(user: User): UserDTO {
    return new UserDTO(user.id, user.name, user.email)
  }
}
