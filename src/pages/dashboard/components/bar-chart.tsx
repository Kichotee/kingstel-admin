import { useState } from "react";
import ReactApexChart from "react-apexcharts";

type Props = {
  data: any;
};

export const BarChart = ({ data }: Props) => {
  const [state, setState] = useState({
    series: [
      {
        name: "January",
        data: [44, 55, 41, 67, 22, 43, 67, 22, 43, 67, 22, 43],
      },
      {
        name: "february",
        data: [13, 23, 20, 8, 13, 27, 13, 78, 13, 28, 13],
      },
      //   {
      //     name: "March",
      //     data: [13, 23, 20, 8, 13, 27, 13, 78, 13, 28, 13],
      //   },
      //   {
      //     name: "March",
      //     data: [11, 17, 15, 15, 21, 14],
      //   },
      //   {
      //     name: "April",
      //     data: [21, 7, 25, 13, 22, 8],
      //   },
      //   {
      //     name: "June",
      //     data: [11, 17, 15, 15, 21, 14],
      //   },
      //   {
      //     name: "July",
      //     data: [21, 7, 25, 13, 22, 8],
      //   },
      //   {
      //     name: "August",
      //     data: [11, 17, 15, 15, 21, 14],
      //   },
      //   {
      //     name: "September",
      //     data: [21, 7, 25, 13, 22, 8],
      //   },
      //   {
      //     name: "October",
      //     data: [11, 17, 15, 15, 21, 14],
      //   },
      //   {
      //     name: "November",
      //     data: [21, 7, 25, 13, 22, 8],
      //   },
      //   {
      //     name: "December",
      //     data: [21, 7, 25, 13, 22, 8],
      //   },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          width: "25px",
          borderRadius: 1,
          borderRadiusApplication: "end", // 'around', 'end'
          borderRadiusWhenStacked: "last", // 'all', 'last'
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
      },
      xaxis: {
        type: "month",
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
      fill: {
        colors: ["#0F00BD", "#D1DFFE"],
        // opacity: 1,
      },
    },
  });
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};
