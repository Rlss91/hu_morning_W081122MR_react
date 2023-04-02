import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import { CircularProgress } from "@mui/material";

const LogoutPage = () => {
  //   const dispatch = useDispatch();
  //   localStorage.clear();
  //   dispatch(authActions.logout());
  //   return <Navigate to={ROUTES.HOME} />;
  return <CircularProgress />;
};
export default LogoutPage;
