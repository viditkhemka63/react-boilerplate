import { useAuth } from "src/modules/auth/data/useAuth";
import type { ReactElement } from "react";
import { Navigate } from "react-router";
import { ROUTES } from "src/config/routes";

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  // Replace with your auth condition
  const { isAuthenticated } = useAuth();
  console.log("IS  auth in private route", isAuthenticated);
  return isAuthenticated ? children : <Navigate to={ROUTES.AUTH.LOGIN} />;
};

export default PrivateRoute;
