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
      text: {
        value: value,
        alignToBottom: true,
      },
    });
    circle.text.style.fontFamily = '"TT Hoves", sans-serif';
    circle.text.style.fontSize = "3rem";
    circle.text.style.fontWeight = "700";
    circle.text.style.paddingBottom = "3rem";

    circle.animate(value / 100);
  }, []);

  return <div className="flex items-center w-full h-full" id="average"></div>;
}
