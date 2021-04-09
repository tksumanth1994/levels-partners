import React, { ReactElement } from "react";
import { Line } from "react-chartjs-2";

interface Props {
  value: number;
}

export default function main({ value }: Props): ReactElement {
  console.log("🚀 ~ file: Histogram.tsx ~ line 9 ~ main ~ value", value);

  const labels = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "User 1",
        fill: false,
        borderColor: "rgba(93, 119, 99, 0.4)",
        hoverBorderColor: "#5d7763",
        hoverBackgroundColor: "#5d7763",
        pointRadius: 0,
        borderWidth: 1,
        hoverBorderWidth: 4,
        data: [
          51,
          58,
          22,
          49,
          96,
          11,
          42,
          34,
          5,
          59,
          49,
          60,
          56,
          59,
          62,
          85,
          80,
          83,
          8,
          90,
          44,
          18,
          5,
          16,
          73,
        ],
      },
      {
        label: "User 2",
        fill: false,
        borderColor: "rgba(93, 119, 99, 0.4)",
        hoverBorderColor: "#5d7763",
        hoverBackgroundColor: "#5d7763",
        pointRadius: 0,
        borderWidth: 1,
        hoverBorderWidth: 4,
        data: [
          92,
          25,
          27,
          32,
          87,
          54,
          80,
          4,
          52,
          81,
          87,
          28,
          37,
          90,
          57,
          42,
          3,
          49,
          25,
          11,
          20,
          67,
          88,
          37,
          74,
        ],
      },
      {
        label: "User 3",
        fill: false,
        borderColor: "rgba(93, 119, 99, 0.4)",
        hoverBorderColor: "#5d7763",
        hoverBackgroundColor: "#5d7763",
        pointRadius: 0,
        borderWidth: 1,
        hoverBorderWidth: 4,
        data: [
          13,
          30,
          24,
          41,
          76,
          97,
          71,
          27,
          6,
          41,
          89,
          28,
          4,
          90,
          39,
          19,
          26,
          56,
          20,
          68,
          10,
          12,
          16,
          88,
          57,
        ],
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          min: 0,
          max: 100,
          ticks: {
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
          ticks: {
            fontColor: "#5d7763",
            fontSize: 11,
            fontFamily: '"TT Hoves", sans-serif',
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      datalabels: {
        display: false,
      },
    },
  };

  return (
    <>
      <Line data={data} options={options} height={97.8}></Line>
    </>
  );
}
