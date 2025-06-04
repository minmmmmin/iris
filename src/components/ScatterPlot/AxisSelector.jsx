import Dropdown from "./Dropdown";

const options = [
  "sepal length",
  "sepal width",
  "petal length",
  "petal width",
];

export default function AxisSelector({ axisLabel, selected, setSelected }) {
  return (
    <div style={{ marginRight: "2rem" }}>
      <label className="label">{axisLabel}</label>
      <Dropdown options={options} selected={selected} setSelected={setSelected} />
    </div>
  );
}
