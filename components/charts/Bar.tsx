import React, { ReactElement } from "react";
import { Bar } from "react-chartjs-2";

interface Props {
  value: number;
}

export default function main({ value }: Props): ReactElement {
  console.log("🚀 ~ file: Histogram.tsx ~ line 9 ~ main ~ value", value);

  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Zone 1",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "#ff808a",
      },
      {
        label: "Zone 2",
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: "#db959a",
      },
      {
        label: "Zone 3",
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: "#909e92",
      },
      {
        label: "Zone 4",
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: "#739078",
      },
      {
        label: "Zone 5",
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: "#5d7763",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            count: 6,
            maxTicksLimit: 6,
            fontColor: "#5d7763",
            fontSize: 12,
            fontFamily: '"TT Hoves", sans-serif',
          },
          gridLines: {
            color: "rgba(255,255,255,0.1)",
            drawBorder: false,
            drawTicks: false,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            fontColor: "#5d7763",
            fontSize: 12,
            fontFamily: '"TT Hoves", sans-serif',
          },
        },
      ],
    },
    legend: {
      label: {
        color: "#5d7763",
        font: {
          size: 16,
          family: '"TT Hoves", sans-serif',
        },
      },
    },
    plugins: {
      datalabels: {
        display: false,
      },
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "index",
      intersect: false,
    },
  };

  return (
    <>
      <Bar data={data} options={options} height={97.8}></Bar>
    </>
  );
}
