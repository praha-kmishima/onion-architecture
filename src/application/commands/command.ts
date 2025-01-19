export interface ICommandInput {}

export interface ICommandOutput {}

export interface ICommand<I extends ICommandInput, O extends ICommandOutput> {
  input: I
  getOutputType(): O
}
