import React, { useState, useEffect } from "react";
import { SelectPicker } from "rsuite";
import { useNavigate, useLocation } from "react-router-dom";
import AlertSummaryChart from "../components/AlertSummaryChart";
import OngoingTrip from "../components/OngoingTrip";
import Fleet from "../components/Fleet";
import { Container } from "react-bootstrap";
import RecentTripsAndChallan from "../components/RecentTripsAndChallan";
import DriverProgressChart from "../components/DriverProgressChart";

const Drivers = () => {
  const [selectedDriver, setSelectedDriver] = useState("all");
  const navigate = useNavigate();
  const location = useLocation();

  const driverList = [
    { label: "All Drivers", value: "all" },
    { label: "Mohan Roy", value: "Mohan Roy" },
    { label: "Akash Sharma", value: "Akash Sharma" },
    { label: "Didar Ahmad", value: "Didar Ahmad" },
  ];

  // Load selected driver from URL query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const driver = params.get("driver");
    if (driver) setSelectedDriver(driver);
  }, [location.search]);

  // Update driver and URL query on change
  const handleDriverChange = (value) => {
    setSelectedDriver(value);
    const params = new URLSearchParams(location.search);
    params.set("driver", value);
    navigate({ pathname: "/drivers", search: params.toString() });
  };

  const statData = {
    all: [
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
    ],
    "Mohan Roy": [
      {
        title: "Total Distance Travelled",
        value: "600",
        unit: "km",
        icon: "/Vector.svg",
        chart: "/Linechart.svg",
        note: "since last month",
      },
      {
        title: "Total Cargo Transported",
        value: "1500",
        unit: "kg",
        icon: "/Vector (1).svg",
        chart: "/Linechart.svg",
        note: "since last month",
      },
      {
        title: "Total Driving Hours",
        value: "80",
        unit: "hours",
        icon: "/Vector (2).svg",
        chart: "/Linechart.svg",
        note: "since last month",
      },
      {
        title: "Total Carbon Savings",
        value: "180",
        unit: "kg",
        icon: "/Vector (3).svg",
        chart: "/Linechart.svg",
        note: "since last month",
      },
    ],
    "Akash Sharma": [
      {
        title: "Total Distance Travelled",
        value: "800",
        unit: "km",
        icon: "/Vector.svg",
        chart: "/Linechart.svg",
        note: "since last month",
      },
      {
        title: "Total Cargo Transported",
        value: "2000",
        unit: "kg",
        icon: "/Vector (1).svg",
        chart: "/Linechart.svg",
        note: "since last month",
      },
      {
        title: "Total Driving Hours",
        value: "100",
        unit: "hours",
        icon: "/Vector (2).svg",
        chart: "/Linechart.svg",
        note: "since last month",
      },
      {
        title: "Total Carbon Savings",
        value: "250",
        unit: "kg",
        icon: "/Vector (3).svg",
        chart: "/Linechart.svg",
        note: "since last month",
      },
    ],
    "Didar Ahmad": [
      {
        title: "Total Distance Travelled",
        value: "200",
        unit: "km",
        icon: "/Vector.svg",
        chart: "/Linechart.svg",
        note: "since last month",
      },
      {
        title: "Total Cargo Transported",
        value: "500",
        unit: "kg",
        icon: "/Vector (1).svg",
        chart: "/Linechart.svg",
        note: "since last month",
      },
      {
        title: "Total Driving Hours",
        value: "30",
        unit: "hours",
        icon: "/Vector (2).svg",
        chart: "/Linechart.svg",
        note: "since last month",
      },
      {
        title: "Total Carbon Savings",
        value: "70",
        unit: "kg",
        icon: "/Vector (3).svg",
        chart: "/Linechart.svg",
        note: "since last month",
      },
    ],
  };

  return (
    <Container className="p-4" style={{ maxWidth: "1440px" }}>
      <div className="d-flex justify-content-end mt-4 ">
        <SelectPicker
          data={driverList}
          cleanable={false}
          value={selectedDriver}
          onChange={handleDriverChange}
          style={{
            width: "100%",
            maxWidth: "200px",
            marginBottom: 20,
            marginRight: "10px",
          }}
          placeholder="Select an individual driver"
        />
      </div>

      <Fleet data={statData[selectedDriver] || []} />

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "20px",
        }}
        className="mt-5 mb-5"
      >
        <AlertSummaryChart />
      </div>
        <OngoingTrip />
      <RecentTripsAndChallan/>
      <DriverProgressChart/>
    </Container>
  );
};

export default Drivers;
