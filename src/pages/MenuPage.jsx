import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Avatar, IconButton } from "@mui/material";

const MenuPage = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl2(null);
  };

  return (
    <div>
      {/* <Button onClick={handleClick}>Dashboard</Button> */}
      <IconButton onClick={handleClick}>
        <Avatar src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" />
      </IconButton>
      <Menu
        anchorEl={anchorEl2}
        open={anchorEl2 ? true : false}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};
export default MenuPage;
