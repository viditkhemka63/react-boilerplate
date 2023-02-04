import { useAuth } from "src/modules/auth/data/useAuth";
import type { ReactElement } from "react";
import { Navigate } from "react-router";
import { ROUTES } from "src/config/routes";

interface Props {
  children: ReactElement;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  // Replace with your auth condition
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to={ROUTES.COCKPIT.LIST} /> : children;
};

export default PublicRoute;
