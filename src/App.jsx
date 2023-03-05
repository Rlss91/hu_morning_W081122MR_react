import { Container } from "@mui/material";
import "./App.css";
import CardComponent from "./components/CardComponent";
import FirstComponent from "./components/FirstComponent";
import GridComponent from "./components/GridComponent";
import ListComponent from "./components/ListComponent";
import MuiNavbar from "./components/Navbar/MuiNavbar";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Container>
      <MuiNavbar />
      {/* <Navbar /> */}
      {/* <FirstComponent /> */}
      {/* <ListComponent /> */}
      {/* <GridComponent /> */}
      <HomePage />
    </Container>
  );
}

export default App;
