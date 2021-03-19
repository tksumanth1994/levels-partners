import { ReactElement } from "react";

interface Props {
  span: number;
}

export default function main({ span }: Props): ReactElement {
  return (
    <div
      className={`border border-gray-600 shadow bg-secondary px-4 py-3 col-span-1 md:col-span-${span}`}
    >
      <p className="text-lg leading-6 tracking-wider text-primary">
        Metabolic Score - Frequency Distribution
      </p>
    </div>
  );
}
