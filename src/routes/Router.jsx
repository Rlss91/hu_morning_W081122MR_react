import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import ROUTES from "./ROUTES";
import LoginPage from "../pages/LoginPage";
import EditCardPage from "../pages/EditCardPage";
import ReRenderPage from "../pages/ReRenderPage/ReRenderPage";
import UseMemoPage from "../pages/ReRenderPage/UseMemoPage";
import RP1 from "../pages/RP1";
import RP2 from "../pages/RP2";
import ProtectedRoute from "../components/ProtectedRoute";
import ProfilePage from "../pages/ProfilePage";
import SuperProtectedRoute from "../components/SuperProtectedRoute";
import LogoutPage from "../pages/LogoutPage";

//element={<ProtectedRoute element={<LogoutPage />} />}

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.FAKEHOME} element={<Navigate to={ROUTES.HOME} />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route
        path={ROUTES.LOGOUT}
        element={<ProtectedRoute element={<LogoutPage />} />}
      />
      <Route
        path="/edit/:id"
        element={
          <SuperProtectedRoute
            isAdmin={true}
            isBiz={true}
            element={<EditCardPage />}
          />
        }
      />
      <Route
        path={ROUTES.PROFILE}
        element={<ProtectedRoute element={<ProfilePage />} />}
      />
      <Route
        path="/createcard"
        element={
          <SuperProtectedRoute
            isAdmin={false}
            isBiz={true}
            element={<h1>Create card</h1>}
          />
        }
      />
      <Route path="/rrp" element={<ReRenderPage />} />
      <Route path="/usememo" element={<UseMemoPage />} />
      <Route path="/rp1" element={<RP1 />} />
      <Route path="/rp2" element={<RP2 />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default Router;
