import { ReactElement } from "react";
import ProgressBar from "../charts/ProgressBar";

interface Props {
  span: number;
}

export default function main({ span }: Props): ReactElement {
  return (
    <div
      className={`border border-gray-600 shadow bg-secondary px-4 py-3 col-span-1 md:col-span-${span}`}
    >
      <p className="text-lg leading-6 tracking-wider text-primary pb-6">
        Average Metabolic Score
      </p>
      <ProgressBar value={86} />
    </div>
  );
}
