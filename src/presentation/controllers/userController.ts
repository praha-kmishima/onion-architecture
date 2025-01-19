import type {CommandBus} from '../../application/bus/commandBus'
import {AddUserCommand} from '../../application/commands/addUserCommand'
import {ListUsersCommand} from '../../application/commands/listUsersCommand'
import type {UserDTO} from '../../application/dto/userDTO'

export class UserController {
  constructor(private commandBus: CommandBus) {}

  async addUser(name: string, email: string): Promise<void> {
    const command = new AddUserCommand({name, email})
    await this.commandBus.execute(command)
  }

  async listUsers(): Promise<void> {
    const command = new ListUsersCommand({})
    const {output: users} = await this.commandBus.execute(command)

    console.log('📄 User List:')
    for (const user of users) {
      console.log(
        `🆔 ID: ${user.id}, 👤 Name: ${user.name}, 📧 Email: ${user.email}`,
      )
    }
  }
}
