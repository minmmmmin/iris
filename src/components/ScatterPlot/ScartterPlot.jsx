import { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import { fetchIris } from "../../api";

const width = 500;
const height = 500;
const padding = 40;

const colors = {
  setosa: "#1f77b4",
  versicolor: "#ff7f0e",
  virginica: "#2ca02c",
};

export default function ScatterPlot() {
  const [data, setData] = useState([]);

useEffect(() => {
  fetchIris().then(setData);
}, []);

  // 軸に使うキー
  const xKey = "sepalLength";
  const yKey = "sepalWidth";

  // d3 スケール
  const xScale = scaleLinear()
    .domain([
      Math.min(...data.map((d) => d[xKey])),
      Math.max(...data.map((d) => d[xKey])),
    ])
    .range([padding, width - padding]);

  const yScale = scaleLinear()
    .domain([
      Math.min(...data.map((d) => d[yKey])),
      Math.max(...data.map((d) => d[yKey])),
    ])
    .range([height - padding, padding]); // 上下反転

  return (
    <svg width={width} height={height} style={{ background: "#f9f9f9" }}>
      {data.map((d, i) => (
        <circle
          key={i}
          cx={xScale(d[xKey])}
          cy={yScale(d[yKey])}
          r={5}
          fill={colors[d.species]}
          opacity={0.8}
        />
      ))}
    </svg>
  );
}
