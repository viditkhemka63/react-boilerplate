import { LoginPage } from "../modules/auth/components/Login";
import { CockpitPage } from "../modules/cockpit/components/Cockpit";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/auth/login"
        element={
          // <PublicRoute>
          <LoginPage />
          // </PublicRoute>
        }
      />
      <Route path="/cockpit" element={<CockpitPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
