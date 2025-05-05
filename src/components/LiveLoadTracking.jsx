import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const vehicleLoadData = [
  { vehicle: "UP TSRE 2244", load: 1100, capacity: 1000 },
  { vehicle: "DL 95FE 4565", load: 900, capacity: 1000 },
  { vehicle: "DL 95FE 4585", load: 700, capacity: 1000 },
  { vehicle: "UP 1234 5678", load: 1400, capacity: 1200 },
  { vehicle: "MP 8765 4321", load: 800, capacity: 1000 },
  { vehicle: "MH 5432 9876", load: 600, capacity: 1000 },
  { vehicle: "GJ 1234 5678", load: 1200, capacity: 1000 },
  { vehicle: "RJ 4321 8765", load: 950, capacity: 1000 },
  { vehicle: "PB 9876 1234", load: 750, capacity: 1000 },
  { vehicle: "HR 5678 4321", load: 850, capacity: 1000 },
];

const getBarColor = (percentage) => {
  if (percentage > 100) return "#E6B0B4";
  if (percentage < 80) return "#F4DECD";
  return "#B8E5E0";
};

const LiveLoadChart = () => {

  const [sortOrder, setSortOrder] = useState("underload");

  const sortedData = (() => {
    const underload = [],
      normal = [],
      overload = [];
    vehicleLoadData.forEach((v) => {
      const perc = (v.load / v.capacity) * 100;
      if (perc < 80) underload.push(v);
      else if (perc > 100) overload.push(v);
      else normal.push(v);
    });
    return sortOrder === "underload"
      ? [...underload, ...normal, ...overload]
      : [...overload, ...normal, ...underload];
  })();

  const chartData = sortedData.map((vehicle) => {
    const percentage = (vehicle.load / vehicle.capacity) * 100;
    return {
      name: vehicle.vehicle,
      value: percentage,
      capacity: vehicle.capacity,
      itemStyle: { color: getBarColor(percentage) },
    };
  });

  const gaugeOption = {
    series: [
      {
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        radius: "80%",
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: { color: "#3856A6" },
          itemStyle: {
            color: "#3856A6",
          },
        },
        axisLine: {
          lineStyle: {
            width: 12,
          },
        },
        pointer: {
          show: false,
        },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        data: [{ value: 76 }],
        title: {
          fontSize: 14,
          offsetCenter: ["0%", "80%"],
        },
        detail: {
          valueAnimation: true,
          fontSize: 12,
          offsetCenter: ["0%", "0%"],
          formatter: function () {
            return "Percent acquired";
          },
        },
      },
    ],
  };

  const totalActive = 12;
  const totalAvailable = 16;
  const totalLoad = 350;

  return (
    <div className="mt-5 p-4" style={{ backgroundColor: "white" }}>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <h4 style={{ color: "#555555", fontSize: "24px", fontWeight: "500" }}>
          Live Load Tracking
        </h4>
        <Link to={"/livemap"}
          className="btn btn-sm"
          style={{
            backgroundColor: "#3856A6",
            borderRadius: "10px",
            color:'white',
            fontWeight: "bold",
            textDecoration:'none'
          }}
        >
          <img src="/delivery_truck_speed.svg" alt="icon" className="me-2" />
          View live map
        </Link>
      </div>

      <h5 className="mt-4">
        <img src="/Redball.svg" alt="red ball" className="me-2" />
        LIVE
      </h5>

      <Row className="mt-2 g-3">
        <Col md={4}>
          <Card
            className=" d-flex flex-column justify-content-between p-4 border-0 shadow-sm  h-100"
            style={{ backgroundColor: "#F7F8FA" }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h5
                style={{
                  color: "#555555",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                Total Active Vehicle
              </h5>
              <img src="/Vector (5).svg" alt="truck" className="ms-2" />
            </div>
            <h2
              className=" mt-4"
              style={{ color: "#3856A6", fontSize: "48px" }}
            >
              {totalActive}
            </h2>
            <p className="mt-5" style={{ fontSize: "16px", color: "#777777" }}>
              Total available are{" "}
              <span style={{ color: "#61BB46" }}>{totalAvailable}</span>
            </p>
          </Card>
        </Col>

        <Col md={8}>
          <Card
            className="p-4 border-0 shadow-sm "
            style={{ backgroundColor: "#F7F8FA" }}
          >
            <div className="d-flex justify-content-between">
              <Row>
                <p
                  style={{
                    color: "#555555",
                    fontWeight: "500",
                    fontSize: "20px",
                  }}
                >
                  Current Load
                </p>
              </Row>
              <img
                src="/Vector (6).svg"
                alt="icon"
                style={{
                  height: "30px",
                  width: "32px",
                  top: "0",
                  right: "0",
                }}
              />
            </div>
            <Row>
              <div className="d-flex flex-column flex-sm-row justify-content-between">
                <div className="d-flex align-items-center ">
                  <div className="d-flex flex-column mt-4 mt-sm-3">
                    <h2 style={{ fontSize: "48px", color: "#3856A6" }}>
                      {totalLoad}
                    </h2>
                    <span className="text-muted">tons</span>
                  </div>
                </div>

                <div className="d-flex flex-column flex-sm-row align-items-center ">
                  <div
                    style={{ width: "250px", height: "250px" }}
                    className="mt-2"
                  >
                    <ReactECharts
                      option={gaugeOption}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <h2
                      style={{
                        marginLeft: "10px",
                        fontSize: "48px",
                        color: "#3856A6",
                      }}
                    >
                      76%
                    </h2>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#777777",
                        fontWeight: "400",
                      }}
                    >
                      average aquired
                    </p>
                  </div>
                </div>
              </div>

              <p
                style={{ fontSize: "16px", color: "#777777" }}
                className=" mt-5 mt-sm-0"
              >
                Total load capacity of{" "}
                <span style={{ color: "#61BB46", fontWeight: "400" }}>
                  {totalActive} (tons)
                </span>
              </p>
            </Row>
          </Card>
        </Col>
      </Row>

      <div className="d-flex justify-content-end mt-4 align-items-center">
        <p style={{ marginRight: ".5rem" }}>Show first</p>
        <Button
          className="btn btn-sm"
          style={{
            backgroundColor: sortOrder === "underload" ? "#61BB46" : "white",
            color: sortOrder === "underload" ? "white" : "#61BB46",
            border: "1px solid #61BB46",
            borderRadius: "5px 0 0 5px",
          }}
          onClick={() => setSortOrder("underload")}
        >
          Underload
        </Button>
        <Button
          className="btn btn-sm"
          style={{
            backgroundColor: sortOrder === "overload" ? "#61BB46" : "white",
            color: sortOrder === "overload" ? "white" : "#61BB46",
            border: "1px solid #61BB46",
            borderRadius: "0 5px 5px 0",
          }}
          onClick={() => setSortOrder("overload")}
        >
          Overload
        </Button>
      </div>

      <ReactECharts
        option={{
          tooltip: {
            trigger: "axis",
            axisPointer: { type: "shadow" },
            formatter: (params) => {
              const { name, value, data } = params[0];
              return `
                <strong>${name}</strong><br/>
                Load: ${value.toFixed(1)}%<br/>
                Capacity: ${data.capacity} tons
              `;
            },
          },
          xAxis: {
            type: "category",
            data: chartData.map((v) => v.name),
            axisLabel: {
              interval: 0,
              formatter: function (value) {
                const lastSpaceIndex = value.lastIndexOf(" ");
                if (lastSpaceIndex !== -1) {
                  return value.substring(0, lastSpaceIndex) + "\n" + value.substring(lastSpaceIndex + 1);
                }
                return value;
              },
            },
          },
          yAxis: {
            type: "value",
            name: "Percentage \n acquired",
            max: 140,
          },
          series: [
            {
              name: "Load % Achieved",
              type: "bar",
              data: chartData,
              label: {
                show: true,
                position: "top",
                formatter: (params) =>
                  `${params.data.capacity} ton`,
              },
              barMaxWidth: 40,
            },
          ],
        }}
        style={{ height: "500px", width: "100%" }}
      />
    </div>
  );
};

export default LiveLoadChart;
