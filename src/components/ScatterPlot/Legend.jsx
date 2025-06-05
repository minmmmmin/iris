export default function Legend({ visibleSpecies, toggleSpecies, colors }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        margin: "40px 0",
      }}
    >
      {Object.keys(visibleSpecies).map((species) => (
        <div
          key={species}
          onClick={() => toggleSpecies(species)}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            opacity: visibleSpecies[species] ? 1 : 0.4,
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              backgroundColor: colors[species],
              marginRight: 8,
              border: "none",
            }}
          />
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            {species}
          </span>
        </div>
      ))}
    </div>
  );
}
