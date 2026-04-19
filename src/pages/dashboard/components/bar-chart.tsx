import ReactApexChart from "react-apexcharts";
import { AnalyticsResponse } from "../queries";

type Props = {
  data: AnalyticsResponse;
};

export const BarChart = ({ data }: Props) => {
  const categories = data?.map((item) => item.month) || [];
  const series = [
    {
      name: "Inactive",
      data: data?.map((item) => Number(item?.active_customers ?? 0)) || [],
    },
    {
      name: "Active",
      data: data?.map((item) => Number(item?.inactive_customers ?? 0)) || [],
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      parentHeightOffset: 0,
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 320,
          },
          plotOptions: {
            bar: {
              columnWidth: "50%",
            },
          },
          xaxis: {
            labels: {
              rotate: -45,
              trim: true,
              hideOverlappingLabels: true,
            },
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 280,
          },
          grid: {
            padding: {
              left: 0,
              right: 0,
            },
          },
          plotOptions: {
            bar: {
              columnWidth: "60%",
              borderRadius: 4,
            },
          },
          xaxis: {
            labels: {
              rotate: -45,
              rotateAlways: true,
              trim: true,
              style: {
                fontSize: "10px",
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                fontSize: "10px",
              },
            },
          },
        },
      },
    ],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 4,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "38%",
        borderRadius: 6,
      },
    },
    xaxis: {
      categories,
      labels: {
        trim: true,
        hideOverlappingLabels: false,
        style: {
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontSize: "12px",
    },
    fill: {
      colors: ["#0F00BD", "#D1DFFE"],
      opacity: 1,
    },
  };

  return (
    <div className="w-full">
      <div id="chart" className="w-full">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
          width="100%"
        />
      </div>
    </div>
  );
};
