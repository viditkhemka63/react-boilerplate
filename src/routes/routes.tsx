import { LoginPage } from "../modules/auth/components/Login";
import { CockpitPage } from "../modules/cockpit/components/Cockpit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoute from "./public";
import PrivateRoute from "./private";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/auth/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/cockpit"
        element={
          <PrivateRoute>
            <CockpitPage />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
