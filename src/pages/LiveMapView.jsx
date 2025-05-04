import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import VehicleCard from "../components/VehicleCard";
import LiveMap from "../components/LiveMap";

const LiveMapView = () => {
  const vehicleData = [
    { vehicleNumber: "DL 9SG4 6106", driverName: "Aakash Sharma" },
    { vehicleNumber: "DL 9SG4 6106", driverName: "Aakash Sharma" },
    { vehicleNumber: "DL 9SG4 6106", driverName: "Aakash Sharma" },
    { vehicleNumber: "DL 9SG4 6106", driverName: "Aakash Sharma" },
    { vehicleNumber: "DL 9SG4 6106", driverName: "Aakash Sharma" },
    { vehicleNumber: "DL 9SG4 6106", driverName: "Aakash Sharma" },
    { vehicleNumber: "DL 9SG4 6106", driverName: "Aakash Sharma" },
    { vehicleNumber: "DL 9SG4 6106", driverName: "Aakash Sharma" },
  ];

  return (
    <Container fluid className="mt-4 ">
      <Row>
        <Col md={4} style={{ maxHeight: "72vh", overflowY: "auto" }}>
          {vehicleData.map((v, i) => (
            <VehicleCard
              key={i}
              vehicleNumber={v.vehicleNumber}
              driverName={v.driverName}
              isActive={i === 0}
            />
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
                    fontSize: "24",
                    fontWeight: "500",
                  }}
                >
                  DL 9SG4 6106
                </h4>
              </div>
              <div>
                Driver Name
                <br />
                <div className="d-flex align-items-center gap-1">
                  <img
                    src="/Driver.png"
                    style={{ height: "24px", width: "24px" }}
                  />
                  <h4
                    style={{
                      color: "#3856A6",
                      fontSize: "24px",
                      fontWeight: "500",
                    }}
                  >
                    Aakash Sharma
                  </h4>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <LiveMap />
            </div>
          </Card>

          <Card
            className="p-4 border-0 shadow-sm mb-3"
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
                  <span className="text-muted">DL 9SG4 6106</span>
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
                        4000{" "}
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
                    <div className="text-muted ">Weight Utilized</div>
                    <div
                      className="fw-bold mt-2"
                      style={{ fontSize: "28px", color: "#3856A6" }}
                    >
                      71%
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
