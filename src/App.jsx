import Header from "./components/Header";
import Footer from "./components/Footer";
import Dropdown from "./components/ScatterPlot/Dropdown";
import ScatterPlot from "./components/ScatterPlot/ScatterPlot.jsx";

function App() {
  return (
    <div>
      <Header />
      <Dropdown />
      <ScatterPlot />
      <Footer />
    </div>
  );
}

export default App;
