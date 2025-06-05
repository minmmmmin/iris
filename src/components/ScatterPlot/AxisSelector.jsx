export default function AxisSelector({
  axisLabel,
  options,
  selected,
  setSelected,
}) {
  return (
    <div
      style={{
        margin: "8px 0",
        padding: "12px", //要素内側の余白
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
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
