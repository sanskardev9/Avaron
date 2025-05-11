import { React, useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const useIsSmallScreen = (breakpoint = 768) => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isSmall;
};

const AlertSummaryChart = () => {
  const isSmallScreen = useIsSmallScreen();

  const option = {
    title: {
      text: "Alert Summary",
      left: "left",
      textStyle: {
        fontSize: 24,
        fontWeight: "500",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: [
        "6 Jan - 12 Jan",
        "13 Jan - 19 Jan",
        "20 Jan - 26 Jan",
        "27 Jan - 2 Feb",
      ],
      top: 30,
      type: "scroll",
      icon: "circle",
      itemWidth: 20,
      itemHeight: 20,
      left: "right",
    },
    grid: {
      top: 80,
      left: "3%",
      right: "55",
      bottom: 50,
      containLabel: true,
    },
    [isSmallScreen ? "xAxis" : "yAxis"]: {
      type: "value",
      name: "Alerts",
      splitLine: { show: false },
      axisLabel: {
        margin: 10,
        fontSize: isSmallScreen ? 10 : 12,
        fontWeight: "bold",
      },
    },

    [isSmallScreen ? "yAxis" : "xAxis"]: {
      type: "category",
      name: "Events",
      data: [
        "Speed bump",
        "Harsh acceleration",
        "Over Speeding",
        "Over loading",
        "Sharp cornering",
        `Hand brake \n while driving`,
        "Low SoC",
        "Low departure",
        "Seat belt",
        "High battery consumption",
      ],
      axisLabel: {
        fontSize: isSmallScreen ? 10 : 12,
        fontWeight: "bold",
        interval: 0,
        margin: 10,
        formatter: function (value) {
          if (value.includes("\n")) return value; // Keep manual breaks
          const lastSpaceIndex = value.lastIndexOf(" ");
          if (lastSpaceIndex !== -1) {
            return (
              value.substring(0, lastSpaceIndex) +
              "\n" +
              value.substring(lastSpaceIndex + 1)
            );
          }
          return value;
        },
      },
    },
    series: [
      {
        name: "6 Jan - 12 Jan",
        type: "bar",
        data: [5, 4, 5, 4, 2, 4, 6, 5, 6, 4],
        itemStyle: { color: "#cce5ff" },
        label: {
          show: true,
          position: isSmallScreen ? "right" : "top",
          fontSize: isSmallScreen ? 8 : 12,
          color: "#555555",
          fontWeight: "bold",
        },
      },
      {
        name: "13 Jan - 19 Jan",
        type: "bar",
        data: [5, 4, 5, 4, 2, 4, 6, 5, 6, 4],
        itemStyle: { color: "#66b3ff" },
        label: {
          show: true,
          position: isSmallScreen ? "right" : "top",
          fontSize: isSmallScreen ? 8 : 12,
          color: "#555555",
          fontWeight: "bold",
        },
      },
      {
        name: "20 Jan - 26 Jan",
        type: "bar",
        data: [5, 4, 5, 4, 2, 4, 6, 5, 6, 4],
        itemStyle: { color: "#007bff" },
        label: {
          show: true,
          position: isSmallScreen ? "right" : "top",
          fontSize: isSmallScreen ? 8 : 12,
          color: "#555555",
          fontWeight: "bold",
        },
      },
      {
        name: "27 Jan - 2 Feb",
        type: "bar",
        data: [5, 4, 5, 4, 2, 4, 6, 5, 6, 4],
        itemStyle: { color: "#004080" },
        label: {
          show: true,
          position: isSmallScreen ? "right" : "top",
          fontSize: isSmallScreen ? 8 : 12,
          color: "#555555",
          fontWeight: "bold",
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: "600px", width: "100%" }} />
  );
};

export default AlertSummaryChart;










// const AlertSummaryChart = () => {

//   const option = {
//     title: {
//       text: "Alert Summary",
//       left: "left",
//       textStyle: {
//         fontSize: 24,
//         fontWeight: "500",
//       },
//     },
//     tooltip: {
//       trigger: "axis",
//       axisPointer: {
//         type: "shadow",
//       },
//     },
//     legend: {
//       data: [
//         "6 Jan - 12 Jan",
//         "13 Jan - 19 Jan",
//         "20 Jan - 26 Jan",
//         "27 Jan - 2 Feb",
//       ],
//       top: "25",
//       type: "scroll",
//       orient: "horizontal",
//       icon: "circle",
//       itemWidth: 20,
//       itemHeight: 20,
//       left: "right",
//     },
//     grid: {
//       top: 80,
//       left: "3%",
//       right: "4%",
//       bottom: "3%",
//       containLabel: true,
//     },
//     xAxis: {
//       name: "Events",
//       type: "category",

//       data: [
//         "Speed bump",
//         "Harsh acceleration",
//         "Over Speeding",
//         "Over loading",
//         "Sharp cornering",
//         "Hand brake while driving",
//         "Low SoC",
//         "Low departure",
//         "Seat belt",
//         "High battery consumption",
//       ],
//       axisLabel: {
//         interval: 0,
//         margin:"10",
//         // rotate:30,
//         formatter: function (value) {
//           const lastSpaceIndex = value.lastIndexOf(" ");
//           if (lastSpaceIndex !== -1) {
//             return (
//               value.substring(0, lastSpaceIndex) +
//               "\n" +
//               value.substring(lastSpaceIndex + 1)
//             );
//           }
//         },
//       },
//     },

//     // xAxis: {
//     //   type: "value",
//     //   name: "Alerts",
//     //   splitLine: { show: false },
//     // },

//     yAxis: {
//       type: "value",
//       name: "Alerts",
//       splitLine: { show: false },
//     },

//     // yAxis: {
//     //   type: "category",
//     //   name: "Events",
//     //   data: [
//     //     "Speed bump",
//     //     "Harsh acceleration",
//     //     "Over Speeding",
//     //     "Over loading",
//     //     "Sharp cornering",
//     //     "Hand brake while driving",
//     //     "Low SoC",
//     //     "Low departure",
//     //     "Seat belt",
//     //     "High battery consumption",
//     //   ],
//     //   axisLabel: {
//     //     rotate: 0,
//     //     formatter: function (value) {
//     //       const lastSpaceIndex = value.lastIndexOf(" ");
//     //       if (lastSpaceIndex !== -1) {
//     //         return (
//     //           value.substring(0, lastSpaceIndex) +
//     //           "\n" +
//     //           value.substring(lastSpaceIndex + 1)
//     //         );
//     //       }
//     //       return value;
//     //     },
//     //   },
//     // },

    // dataZoom: [
    //   {
    //     type: "slider",
    //     show: true,
    //     start: 0,
    //     end: 40,
    //     xAxisIndex: 0,
    //     handleSize: "100%",
    //     height: 20,
    //     bottom: 0,
    //   },
    // ],
//     series: [
//       {
//         name: "6 Jan - 12 Jan",
//         type: "bar",
//         data: [5, 4, 5, 4, 2, 4, 6, 5, 6, 4],
//         itemStyle: {
//           color: "#cce5ff",
//         },
//         label: {
//           show: true,
//           position: "right",
//           fontSize: 12,
//           color: "#555555",
//         },
//       },
//       {
//         name: "13 Jan - 19 Jan",
//         type: "bar",
//         data: [8, 5, 6, 5, 6, 5, 7, 6, 8, 5],
//         itemStyle: {
//           color: "#66b3ff",
//         },
//         label: {
//           show: true,
//           position: "top",
//           fontSize: 12,
//           color: "#555555",
//         },
//       },
//       {
//         name: "20 Jan - 26 Jan",
//         type: "bar",
//         data: [11, 2, 11, 2, 11, 7, 11, 2, 11, 6],
//         itemStyle: {
//           color: "#007bff",
//         },
//         label: {
//           show: true,
//           position: "top",
//           fontSize: 12,
//           color: "#555555",
//         },
//       },
//       {
//         name: "27 Jan - 2 Feb",
//         type: "bar",
//         data: [7, 6, 8, 6, 8, 6, 8, 5, 7, 6],
//         itemStyle: {
//           color: "#004080",
//         },
//         label: {
//           show: true,
//           position: "top",
//           fontSize: 12,
//           color: "#555555",
//         },
//       },
//     ],
//   };

//   return (
//     <ReactECharts option={option} style={{ height: "500px", width: "100%" }} />
//   );
// };
