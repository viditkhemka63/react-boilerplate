export interface IAction {
  type: string;
  payload: any;
}

export interface IStore {
  dispatch: (action: IAction) => any;
}
