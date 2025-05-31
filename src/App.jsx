import * as d3 from "d3";

function App() {
  const dataset = [
    [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
    [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
  ];
  const w = 500;
  const h = 500;
  const xScale = d3.scaleLinear()
  .domain([0,d3.max(dataset,function(d){return d[0];})])
  .range([0,w]);
  const yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, function(d) { return d[1]; })])
  .range([0, h]);
}

export default App;
