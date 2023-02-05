import { IAction } from "src/types/store";
import { create } from "zustand";
import { IAuthAction, IAuthState, IAuthStore } from "./auth.type";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const DEFAULT_AUTH_STATE: IAuthState = {
  isAuthenticated: false,
  token: null,
  user: {},
};

const reducer = (state: IAuthStore, action: IAction) => {
  const { type, payload } = action;

  switch (type) {
    case IAuthAction.INIT:
      return {
        ...state,
        ...payload,
      };

    case IAuthAction.PURGE:
      return {
        ...state,
        ...DEFAULT_AUTH_STATE,
      };

    default: {
      return {
        ...state,
      };
    }
  }
};

export const AuthStore = create<IAuthStore>()(
  persist(
    immer((set) => ({
      isAuthenticated: DEFAULT_AUTH_STATE.isAuthenticated,
      token: DEFAULT_AUTH_STATE.token,
      user: DEFAULT_AUTH_STATE.user,
      dispatch: (payload: any) => set((state) => reducer(state, payload)),
    })),
    {
      name: "auth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
