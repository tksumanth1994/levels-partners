import React, { ReactElement, useEffect } from "react";
import { Chart, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

interface Props {
  value: number;
}

export default function main({ value }: Props): ReactElement {
  console.log("🚀 ~ file: Histogram.tsx ~ line 9 ~ main ~ value", value);

  const data = {
    labels: [
      "0 - 10",
      "10 - 20",
      "20 - 30",
      "30 - 40",
      "40 - 50",
      "50 - 60",
      "60 - 70",
      "70 - 80",
      "80 - 90",
      "90 - 100",
    ],
    datasets: [
      {
        label: "Number of Users",
        data: [1, 3, 6, 7, 13, 19, 21, 22, 18, 10],
        backgroundColor: "#5d7763",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          display: false,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "#5d7763",
            fontSize: 12,
            fontFamily: '"TT Hoves", sans-serif',
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    plugins: {
      datalabels: {
        color: "#5d7763",
        align: "top",
        anchor: "end",
        offset: 0,
        font: {
          family: '"TT Hoves", sans-serif',
          size: 14,
          weight: 700,
        },
        formatter: function (value: number, context: any) {
          if (context.dataset.data.length === context.dataIndex + 1) {
            return `${value} users`;
          }
          return value;
        },
      },
    },
  };

  useEffect(() => {
    Chart.pluginService.register(ChartDataLabels);
  }, []);

  return (
    <>
      <Bar data={data} options={options} height={77.8}></Bar>
    </>
  );
}
