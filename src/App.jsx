import * as d3 from "d3";

function App() {
  const scale = d3.scaleLinear();
  scale.domain([100, 500]);
  scale.range([10, 350]);
  console.log(scale(100));
}

export default App;
