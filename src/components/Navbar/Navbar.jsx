import { AppBar, Toolbar, Button, Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Navbar.css";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        Link to home page
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <MoreVertIcon />
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Box
            sx={{ display: { xs: "flex", sm: "block" } }}
            flexDirection="column"
          >
            <Button variant="text" color="secondary">
              link
            </Button>
            <Button variant="text" color="secondary">
              link
            </Button>
            <Button variant="text" color="secondary">
              link
            </Button>
            <Button variant="text" color="secondary">
              link
            </Button>
            <Button variant="text" color="secondary">
              link
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
