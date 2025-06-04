export default function Dropdown({
  options,
  selected,
  setSelected,
  isFocused,
}) {
  return (
    <div className={`select ${isFocused ? "has-focused-border" : ""}`}>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
