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
        <Col md={4} style={{ maxHeight: "70vh", overflowY: "auto" }}>
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
              <div>
                <strong>Vehicle Number:</strong>{" "}
                <span className="text-primary">DL 9SG4 6106</span>
              </div>
              <div>
                <strong>Driver Name:</strong>{" "}
                <span className="text-primary">Aakash Sharma</span>
              </div>
            </div>
            <div className="mt-3">
              <LiveMap />
            </div>
          </Card>

          <Card
            className="p-4 border-0 shadow-sm"
            style={{ borderRadius: "16px" }}
          >
            <h5 className="mb-4 fw-semibold text-dark">Vehicle Info</h5>
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
                    <div
                      className="fw-bold text-primary"
                      style={{ fontSize: "18px" }}
                    >
                      4000{" "}
                      <span
                        className="text-muted fw-normal"
                        style={{ fontSize: "14px" }}
                      >
                        kg
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-muted">Weight Utilized</div>
                    <div
                      className="fw-bold text-primary"
                      style={{ fontSize: "18px" }}
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
