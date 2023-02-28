import "./App.css";
import FirstComponent from "./components/FirstComponent";
import GridComponent from "./components/GridComponent";
import ListComponent from "./components/ListComponent";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <FirstComponent /> */}
      {/* <ListComponent /> */}
      <GridComponent />
    </div>
  );
}

export default App;
