import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { IAuthAction, IAuthStore } from "./auth.type";
import { AuthService } from "./auth.service";
import { useMutation } from "react-query";
import { AuthStore } from "./auth.store";
import { ROUTES } from "src/config/routes";

export const useAuth = () => {
  const { isAuthenticated, user, dispatch } = AuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsub = AuthStore.subscribe((state: IAuthStore) => {
      console.log("Location is ", location.pathname);
      const currentRoute: string = location.pathname;
      const { isAuthenticated } = state;

      if (isAuthenticated && currentRoute === ROUTES.AUTH.LOGIN) {
        navigate(ROUTES.COCKPIT.LIST);
      } else if (!isAuthenticated && currentRoute !== ROUTES.AUTH.LOGIN) {
        navigate(ROUTES.AUTH.LOGIN);
      }
    });

    return () => {
      unsub();
    };
    //
  }, []);

  const {
    isLoading,
    mutateAsync: login,
    isError,
    status,
  } = useMutation(AuthService.login, {
    onSuccess: (data: any) => {
      dispatch({
        payload: data,
        type: IAuthAction.INIT,
      });
    },
    onError: (error: any) => {
      console.log("Error is", error);
    },
  });

  const handleLogin = async (email: string, password: string) => {
    const res: any = await login({ email, password });
    const { user, token } = res.data;

    dispatch({
      type: IAuthAction.INIT,
      payload: {
        isAuthenticated: true,
        token,
        user,
      },
    });
  };

  const handleLogout = () => {
    dispatch({
      type: IAuthAction.PURGE,
      payload: {},
    });
  };

  return {
    isAuthenticated,
    user,
    loginState: {
      isLoading,
      isError,
      status,
    },
    handleLogin,
    handleLogout,
  };
};
