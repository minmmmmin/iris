import { useEffect, useRef } from "react";
import { axisLeft } from "d3-axis";
import { select } from "d3-selection";

export default function YAxis({ scale, label, transform }) {
  const axisRef = useRef();

useEffect(() => {
  const axis = axisLeft(scale).ticks(10);
  select(axisRef.current).call(axis);
  select(axisRef.current)
    .selectAll("text")
    .style("font-size", "12px")
    .style("font-weight", "bold");
}, [scale]);

  return (
    <g ref={axisRef} transform={transform}>
      <text
        transform="rotate(-90)"
        x={-(scale.range()[0] + scale.range()[1]) / 2}
        y={-40}
        fill="black"
        textAnchor="middle"
        fontSize="12"
      >
        {label}
      </text>
    </g>
  );
}
