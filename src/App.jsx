import { Container } from "@mui/material";

import "./App.css";
import MuiNavbar from "./components/Navbar/MuiNavbar";
import Router from "./routes/Router";

function App() {
  return (
    <Container>
      <header>
        <MuiNavbar />
      </header>
      <main>
        <Router />
      </main>
      <footer></footer>
    </Container>
  );
}

export default App;
