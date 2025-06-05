export default function AxisSelector({
  axisLabel,
  options,
  selected,
  setSelected,
}) {
  return (
    <div style={{ marginRight: "2rem" }}>
      <label className="label">{axisLabel}</label>
      <div className="select">
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
