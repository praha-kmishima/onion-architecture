import type {ICommand, ICommandInput, ICommandOutput} from '../commands/command'
import type {ICommandHandler} from '../handlers/commandHandler'

export class CommandBus {
  // biome-ignore lint/suspicious/noExplicitAny: Arguments vary by command, so any is necessary
  private handlers = new Map<string, ICommandHandler<ICommand<any, any>>>()

  register<
    C extends ICommand<I, O>,
    // biome-ignore lint/suspicious/noExplicitAny: Arguments vary by command, so any is necessary
    I extends ICommandInput = C extends ICommand<infer I, any> ? I : never,
    O extends ICommandOutput = C extends ICommand<I, infer O> ? O : never,
  >(commandType: new (input: I) => C, handler: ICommandHandler<C, I, O>): void {
    this.handlers.set(commandType.name, handler)
  }

  execute<
    C extends ICommand<I, O>,
    // biome-ignore lint/suspicious/noExplicitAny: Arguments vary by command, so any is necessary
    I extends ICommandInput = C extends ICommand<infer I, any> ? I : never,
    O extends ICommandOutput = C extends ICommand<I, infer O> ? O : never,
  >(command: C): O | Promise<O> {
    const handler = this.handlers.get(
      command.constructor.name,
    ) as ICommandHandler<C, I, O>
    if (!handler) {
      throw new Error(
        `Handler not found for command: ${command.constructor.name}`,
      )
    }
    return handler.handle(command)
  }
}
