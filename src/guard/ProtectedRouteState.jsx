import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import ROUTES from "../routes/ROUTES";

const ProtectedRouteState = ({ element }) => {
  let location = useLocation();
  console.log("location from protected", location);
  //* logic section
  const isLoggedIn = useSelector((bigState) => bigState.authSlice.isLoggedIn);
  const payload = useSelector((bigState) => bigState.authSlice.payload);
  //* html section
  if (isLoggedIn && location.state.userId === payload._id) {
    return element;
  } else {
    return <Navigate to={ROUTES.LOGIN} />;
  }
};
export default ProtectedRouteState;
