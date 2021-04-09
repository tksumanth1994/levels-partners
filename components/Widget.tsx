import { ReactElement } from "react";
import ProgressBar from "./charts/ProgressBar";
import Histogram from "./charts/Histogram";
import Line from "./charts/Line";
import Bar from "./charts/Bar";

interface Props {
  span: number;
  title: string;
  chartType?: string;
  height?: number;
}

export default function main({
  span,
  title,
  chartType,
  height,
}: Props): ReactElement {
  return (
    <div
      className={`border border-gray-600 shadow bg-secondary px-4 py-3 col-span-1 md:col-span-${span}`}
    >
      <p className="text-lg leading-6 tracking-wider text-primary pb-6">
        {title}
      </p>
      <div className={`h-${height || 56}`}>
        {(chartType === "progressBar" && <ProgressBar value={86} />) ||
          (chartType === "histogram" && <Histogram value={15} />) ||
          (chartType === "line" && <Line value={10} />) ||
          (chartType === "bar" && <Bar value={11} />)}
      </div>
    </div>
  );
}
