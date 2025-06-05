import { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import { fetchIris } from "../../api";
import AxisSelector from "./AxisSelector";
import Legend from "./Legend";
import XAxis from "./XAxis";
import YAxis from "./YAxis";
import "../../style/style.css";

const width = 500;
const height = 500;
const padding = 60;

const colors = {
  setosa: "#ff6f91",
  versicolor: "#fcbf49",
  virginica: "#3da4ab",
};

// UIで選択する軸名をデータのキー名に変換
const labelToKey = {
  "sepal length": "sepalLength",
  "sepal width": "sepalWidth",
  "petal length": "petalLength",
  "petal width": "petalWidth",
};

export default function ScatterPlot() {
  // APIで取得したIrisデータを格納
  const [data, setData] = useState([]);
  // 現在選ばれているX軸・Y軸のラベル
  const [xLabel, setXLabel] = useState("sepal length");
  const [yLabel, setYLabel] = useState("sepal width");

  // 各品種が表示されるかどうかをブール値で保持
  const [visibleSpecies, setVisibleSpecies] = useState({
    setosa: true,
    versicolor: true,
    virginica: true,
  });

  // 軸キーの決定
  const xKey = labelToKey[xLabel];
  const yKey = labelToKey[yLabel];

  // コンポーネント初回描画時にIrisデータを取得
  useEffect(() => {
    const loadData = async () => {
      const rawData = await fetchIris();
      const dataWithId = rawData.map((d, i) => ({ ...d, id: i }));
      setData(dataWithId);
    };
    loadData();
  }, []);

  // 万が一データがうまく取れなかった時
  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  // スケールの計算
  const xValues = data.map((d) => d[xKey]);
  const yValues = data.map((d) => d[yKey]);

  const xScale = scaleLinear()
    .domain([Math.min(...xValues), Math.max(...xValues)])
    .range([padding, width - padding]);

  const yScale = scaleLinear()
    .domain([Math.min(...yValues), Math.max(...yValues)])
    .range([height - padding, padding]);

  // 表示切り替え関数
  const toggleSpecies = (species) => {
    setVisibleSpecies((prev) => {
      // 現在の状態をコピー
      const updated = { ...prev };
      // 該当の種だけ true/false を反転
      updated[species] = !prev[species];
      return updated;
    });
  };

  // 軸ラベルの文字列
  const options = Object.keys(labelToKey);

  // データ点の生成
  const scatterDots = data.map((d) => {
    const isVisible = visibleSpecies[d.species];
    let className = "scatter-dot";
    if (!isVisible) {
      className += " hidden";
    }

    return (
      <circle
        // なんかkeyをiにするとミスった
        key={d.id}
        className={className}
        cx={xScale(d[xKey])}
        cy={yScale(d[yKey])}
        r={5}
        fill={colors[d.species]}
      />
    );
  });

  // レンダリング
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
          options={options}
          selected={xLabel}
          setSelected={setXLabel}
        />
        <AxisSelector
          axisLabel="y property"
          options={options}
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
        <svg width={width} height={height}>
          {scatterDots}
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
