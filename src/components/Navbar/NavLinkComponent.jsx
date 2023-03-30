import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
const NavLinkComponent = ({ url, label }) => {
  return (
    <NavLink to={url}>
      {({ isActive }) => (
        <Typography
          sx={{
            my: 2,
            display: "block",
            p: 2,
          }}
          color={isActive ? "error" : "info"}
        >
          {label}
        </Typography>
      )}
    </NavLink>
  );
};

export default NavLinkComponent;
