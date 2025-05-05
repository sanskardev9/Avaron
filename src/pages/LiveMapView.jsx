import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import VehicleCard from "../components/VehicleCard";
import LiveMap from "../components/LiveMap";

const LiveMapView = () => {
  const vehicleData = [
    {
      vehicleNumber: "DL 9SG4 6106",
      driverName: "Aakash Sharma",
      coordinates: { lat: 28.6139, lng: 77.209 }, // Delhi
      load: 4000,
      utilization: 71,
    },
    {
      vehicleNumber: "HR 26DA 2330",
      driverName: "Ravi Mehta",
      coordinates: { lat: 28.4595, lng: 77.0266 }, // Gurugram
      load: 3000,
      utilization: 60,
    },
    {
      vehicleNumber: "UP 16BC 5123",
      driverName: "Sunil Kumar",
      coordinates: { lat: 28.4089, lng: 77.3178 }, // Noida
      load: 3500,
      utilization: 65,
    },
    {
      vehicleNumber: "RJ 14AB 7745",
      driverName: "Mohit Verma",
      coordinates: { lat: 26.9124, lng: 75.7873 }, // Jaipur
      load: 2800,
      utilization: 58,
    },
    {
      vehicleNumber: "PB 10CD 9988",
      driverName: "Harpreet Singh",
      coordinates: { lat: 30.7333, lng: 76.7794 }, // Chandigarh
      load: 4100,
      utilization: 75,
    },
    {
      vehicleNumber: "UK 07EF 5566",
      driverName: "Vikas Rawat",
      coordinates: { lat: 30.3165, lng: 78.0322 }, // Dehradun
      load: 3200,
      utilization: 68,
    },
    {
      vehicleNumber: "HP 12GH 3344",
      driverName: "Rohit Thakur",
      coordinates: { lat: 31.1048, lng: 77.1734 }, // Shimla
      load: 2600,
      utilization: 52,
    },
    {
      vehicleNumber: "DL 3CJK 1234",
      driverName: "Nitin Kapoor",
      coordinates: { lat: 28.7041, lng: 77.1025 }, // New Delhi
      load: 3900,
      utilization: 70,
    },
  ];

  const [selectedVehicle, setSelectedVehicle] = useState(vehicleData[0]);

  return (
    <Container fluid className="mt-4 mb-4">
      <Row>
        <Col
          md={4}
          style={{ maxHeight: "72vh", overflowY: "auto" }}
          className="mb-1"
        >
          {vehicleData.map((v, i) => (
            <div
              key={i}
              onClick={() => setSelectedVehicle(v)}
              style={{ cursor: "pointer" }}
            >
              <VehicleCard
                vehicleNumber={v.vehicleNumber}
                driverName={v.driverName}
                isActive={v.vehicleNumber === selectedVehicle.vehicleNumber}
              />
            </div>
          ))}
        </Col>

        <Col md={8}>
          <Card className="mb-3 p-3">
            <div className="d-flex justify-content-between">
              <div style={{ color: "#777777" }}>
                Vehicle Number <br />
                <h4
                  style={{
                    color: "#3856A6",
                    fontSize: "24px",
                    fontWeight: "500",
                  }}
                >
                  {selectedVehicle.vehicleNumber}
                </h4>
              </div>
              <div>
                Driver Name
                <br />
                <div className="d-flex align-items-center gap-1">
                  <img
                    src="/Driver.png"
                    style={{ height: "24px", width: "24px" }}
                    alt="Driver"
                  />
                  <h4
                    style={{
                      color: "#3856A6",
                      fontSize: "24px",
                      fontWeight: "500",
                    }}
                  >
                    {selectedVehicle.driverName}
                  </h4>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <LiveMap coordinates={selectedVehicle.coordinates} />
            </div>
          </Card>

          <Card
            className="p-4 border-0 shadow-sm mb-4"
            style={{ borderRadius: "16px" }}
          >
            <h5
              className="mb-4"
              style={{ color: "#555555", fontWeight: "500" }}
            >
              Vehicle Info
            </h5>
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <img
                src="/Group 256.png"
                alt="vehicle"
                style={{ height: "90px", marginRight: "20px" }}
              />
              <div className="flex-grow-1 me-4">
                <div className="d-flex justify-content-between mb-2">
                  <div className="d-flex align-items-center">
                    <img
                      src="/Tata.png"
                      alt="brand"
                      height="20"
                      className="me-2"
                    />
                    <span className="fw-semibold text-dark">Tata Ace</span>
                  </div>
                  <span className="text-muted">
                    {selectedVehicle.vehicleNumber}
                  </span>
                </div>

                <hr className="my-2" />
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="text-muted">Active Load</div>
                    <div className="d-flex flex-column ">
                      <div
                        className="fw-bold mt-2"
                        style={{ fontSize: "28px", color: "#3856A6" }}
                      >
                        {selectedVehicle.load}
                      </div>
                      <div
                        className="text-muted fw-normal"
                        style={{ fontSize: "14px" }}
                      >
                        kg
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="text-muted">Weight Utilized</div>
                    <div
                      className="fw-bold mt-2"
                      style={{ fontSize: "28px", color: "#3856A6" }}
                    >
                      {selectedVehicle.utilization}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LiveMapView;
