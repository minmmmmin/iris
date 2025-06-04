import { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import { fetchIris } from "../../api";
import AxisSelector from "./AxisSelector";
import Legend from "./Legend";
import XAxis from "./XAxis";
import YAxis from "./YAxis";
import "../../style/style.css";

const width = 540;
const height = 540;
const padding = 60;

const colors = {
  setosa: "#ff6f91", // ピンクっぽい赤
  versicolor: "#fcbf49", // 明るいオレンジイエロー
  virginica: "#3da4ab", // 明るい青緑
};

const labelToKey = {
  "sepal length": "sepalLength",
  "sepal width": "sepalWidth",
  "petal length": "petalLength",
  "petal width": "petalWidth",
};

export default function ScatterPlot() {
  const [data, setData] = useState([]);
  const [xLabel, setXLabel] = useState("sepal length");
  const [yLabel, setYLabel] = useState("sepal width");

  const [visibleSpecies, setVisibleSpecies] = useState({
    setosa: true,
    versicolor: true,
    virginica: true,
  });

  const toggleSpecies = (species) => {
    setVisibleSpecies((prev) => ({
      ...prev,
      [species]: !prev[species],
    }));
  };

  const xKey = labelToKey[xLabel];
  const yKey = labelToKey[yLabel];

  useEffect(() => {
    fetchIris().then(setData);
  }, []);

  const xValues = data.map((d) => d[xKey]);
  const yValues = data.map((d) => d[yKey]);

  const xScale = scaleLinear()
    .domain([Math.min(...xValues), Math.max(...xValues)])
    .range([padding, width - padding]);

  const yScale = scaleLinear()
    .domain([Math.min(...yValues), Math.max(...yValues)])
    .range([height - padding, padding]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          marginBottom: "1rem",
          marginLeft: "30px",
        }}
      >
        <AxisSelector
          axisLabel="x property"
          selected={xLabel}
          setSelected={setXLabel}
        />
        <AxisSelector
          axisLabel="y property"
          selected={yLabel}
          setSelected={setYLabel}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginLeft: "30px",
        }}
      >
        <svg
          width={width}
          height={height}
          style={{
            background: "",
          }}
        >
          {data
            .filter((d) => visibleSpecies[d.species])
            .map((d, i) => (
              <circle
                key={`${d.species}-${d[xKey]}-${d[yKey]}-${i}`}
                className="scatter-dot"
                cx={xScale(d[xKey])}
                cy={yScale(d[yKey])}
                r={5}
                fill={colors[d.species]}
              />
            ))}

          <XAxis
            scale={xScale}
            height={height}
            label={xLabel}
            transform={`translate(0, ${height - padding})`}
          />
          <YAxis
            scale={yScale}
            label={yLabel}
            transform={`translate(${padding}, 0)`}
          />
        </svg>
        <div
          style={{ marginLeft: "1rem", display: "flex", alignItems: "center" }}
        >
          <Legend
            visibleSpecies={visibleSpecies}
            toggleSpecies={toggleSpecies}
            colors={colors}
          />
        </div>
      </div>
    </div>
  );
}
