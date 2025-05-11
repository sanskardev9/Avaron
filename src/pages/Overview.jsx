import React from "react";
import { Container } from "react-bootstrap";
import LiveLoadTracking from "../components/LiveLoadTracking";
import AlertSummaryChart from "../components/AlertSummaryChart";
import DriversSummary from "../components/DriverSummary";
import Fleet from "../components/Fleet";
const Dashboard = () => {

  const statData = [
    {
      title: "Total Distance Travelled",
      value: "1200",
      unit: "km",
      icon: "/Vector.svg",
      chart: "/Linechart.svg",
      note: "since last month",
    },
    {
      title: "Total Cargo Transported",
      value: "3500",
      unit: "kg",
      icon: "/Vector (1).svg",
      chart: "/Linechart.svg",
      note: "since last month",
    },
    {
      title: "Total Driving Hours",
      value: "120",
      unit: "hours",
      icon: "/Vector (2).svg",
      chart: "/Linechart.svg",
      note: "since last month",
    },
    {
      title: "Total Carbon Savings",
      value: "350",
      unit: "kg",
      icon: "/Vector (3).svg",
      chart: "/Linechart.svg",
      note: "since last month",
    },
  ];

  return (
    <Container className="p-4" style={{ maxWidth: "1440px" }}>
      <Fleet data={statData}/>
      <LiveLoadTracking />
      <div
        style={{
          backgroundColor: "white",
          marginTop: "70px",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <AlertSummaryChart />
      </div>
      <DriversSummary />
    </Container>
  );
};

export default Dashboard;
