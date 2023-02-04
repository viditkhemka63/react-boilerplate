import { IAction } from "src/types/store";
import { create } from "zustand";
import { IAuthAction, IAuthState, IAuthStore } from "./auth.type";
import { persist } from "zustand/middleware";

const DEFAULT_AUTH_STATE: IAuthState = {
  isAuthenticated: false,
  token: null,
  user: {},
};

const reducer = (state: IAuthState, action: IAction) => {
  const { type, payload } = action;

  console.log("State in reducer is::", state);
  switch (type) {
    case IAuthAction.INIT:
      return {
        state: {
          ...state,
          ...payload,
        },
      };

    case IAuthAction.PURGE:
      return {
        state: {
          ...DEFAULT_AUTH_STATE,
        },
      };

    default: {
      return {
        state: {
          ...state,
        },
      };
    }
  }
};

export const AuthStore = create<IAuthStore>()(
  persist(
    (set) => ({
      state: DEFAULT_AUTH_STATE,
      dispatch: (payload) => set((store) => reducer(store.state, payload)),
    }),
    {
      name: "auth",
    }
  )
);
