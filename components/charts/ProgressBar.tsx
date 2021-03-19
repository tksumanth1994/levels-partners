import { ReactElement, useEffect } from "react";
import ProgressBar from "progressbar.js";

interface Props {
  value: number;
}

export default function main({ value }: Props): ReactElement {
  useEffect(() => {
    const circle = new ProgressBar.SemiCircle("#average", {
      strokeWidth: 6,
      easing: "easeInOut",
      duration: 1400,
      color: "#5d7763",
      trailColor: "#333",
      trailWidth: 6,
      svgStyle: null,
    });

    circle.animate(value / 100);
  }, []);

  return (
    <div>
      <div className="block w-full h-56" id="average"></div>
    </div>
  );
}
