import type {ICommand} from '../commands/command'

export interface ICommandHandler<T extends ICommand> {
  handle(command: T): Promise<unknown>
}
