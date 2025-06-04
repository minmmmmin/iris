import { axisBottom } from "d3-axis";
import { select } from "d3-selection";
import { useEffect, useRef } from "react";

export default function XAxis({ scale, height, label, transform }) {
  const axisRef = useRef();

  useEffect(() => {
    const axis = axisBottom(scale).ticks(10);
    select(axisRef.current).call(axis);
  }, [scale]);

  return (
    <g ref={axisRef} transform={transform}>
      <text
        x={(scale.range()[1] - scale.range()[0]) / 2}
        y={40}
        fill="black"
        textAnchor="middle"
        fontSize="12"
      >
        {label}
      </text>
    </g>
  );
}
