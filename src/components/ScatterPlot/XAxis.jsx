export default function XAxis({ scale, rangeMax }) {
  const ticks = scale.ticks();
  const tickHeight = 10;
  const tickY = rangeMax;
  return (
    <g>
      <line x1="0" y1={rangeMax} x2={rangeMax} y2={rangeMax} stroke="black" />
      {ticks.map((tick, i) => {
        const tickX = scale(tick);
        return (
          <g key={i}>
            <line
              x1={tickX}
              y1={tickY}
              x2={tickX}
              y2={tickY + tickHeight}
              stroke="black"
            />
            <text
              x={tickX}
              y={tickY + tickHeight}
              textAnchor="middle"
              dominantBaseline="hanging"
            >
              {tick}
            </text>
          </g>
        );
      })}
    </g>
  );
}
