import { IStore } from "./../../../types/store";
export interface IAuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: any;
}

export enum IAuthAction {
  INIT = "INIT",
  PURGE = "PURGE",
}

export interface IAuthStore extends IStore {
  state: IAuthState;
}
