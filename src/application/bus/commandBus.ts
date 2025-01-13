import type {ICommand} from '../commands/command'
import type {ICommandHandler} from '../handlers/commandHandler'

export class CommandBus {
  private handlers = new Map<string, ICommandHandler<ICommand>>()

  register<T extends ICommand>(
    // biome-ignore lint/suspicious/noExplicitAny: Arguments vary by command, so any is necessary
    commandType: new (...args: any[]) => T,
    handler: ICommandHandler<T>,
  ): void {
    this.handlers.set(commandType.name, handler as ICommandHandler<ICommand>)
  }

  async execute<T extends ICommand>(command: T): Promise<unknown> {
    const handler = this.handlers.get(command.constructor.name)
    if (!handler) {
      throw new Error(
        `Handler not found for command: ${command.constructor.name}`,
      )
    }
    return await handler.handle(command)
  }
}
