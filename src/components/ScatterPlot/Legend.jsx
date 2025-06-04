export default function Legend() {
  const colors = {
    setosa: "#1f77b4",
    versicolor: "#ff7f0e",
    virginica: "#2ca02c",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {Object.entries(colors).map(([species, color]) => (
        <div
          key={species}
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: color,
            }}
          />
          <span>{species}</span>
        </div>
      ))}
    </div>
  );
}
