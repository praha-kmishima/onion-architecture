import type {ICommand, ICommandInput, ICommandOutput} from '../commands/command'

export interface ICommandHandler<
  C extends ICommand<I, O>,
  // biome-ignore lint/suspicious/noExplicitAny: Arguments vary by command, so any is necessary
  I extends ICommandInput = C extends ICommand<infer I, any> ? I : never,
  O extends ICommandOutput = C extends ICommand<I, infer O> ? O : never,
> {
  execute(command: C): O | Promise<O>
}
