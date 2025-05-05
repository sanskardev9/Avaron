import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Dropdown,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FleetPerformanceReports = () => {
  const reportCards = [
    "Abuse Events",
    "Driver Performance",
    "Cargo Load Utilization",
    "Fleet Summary",
  ];

  return (
    <div className="p-4" style={{marginBottom:'92px'}}>
      <p className="fs-6 fs-sm-3">
        Reports will be downloaded for the timeline selected. To download
        reports for a specific timeline, edit the timeline from the menu.
      </p>
      <Row>
        {/* Left: Report Cards */}
        <Col md={8} className="mt-5 rounded bg-white">
          <h5
            className=" mb-4 p-3"
            style={{ fontWeight: "500", color: "#555555" }}
          >
            Fleet Performance Reports
          </h5>
          <Row className="g-3">
            {reportCards.map((title, idx) => (
              <Col xs={12} sm={6} key={idx}>
                <Card
                  className="bg-light rounded shadow-sm p-3 d-flex justify-content-between align-items-start"
                  style={{
                    minHeight: "220px",
                    border: "none",
                    color: "#555555",
                  }}
                >
                  <div className="fw-semibold">{title}</div>
                  <div className="ms-auto fs-3 text-muted"><img src="/add_2.png"/></div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Right: Download Reports Panel */}
        <Col md={4} className="mt-5">
          <Card
            className="bg-white rounded shadow-sm p-3 h-100 "
            style={{ border: "none" }}
          >
            <h6
              className=" mb-3"
              style={{ fontWeight: "500", color: "#555555" }}
            >
              Download Reports
            </h6>
            <p className="mb-1 small" style={{ color: "#555555" }}>
              Download report for{" "}
              <a href="#!" className="text-primary text-decoration-none">
                whole fleet
              </a>
            </p>
            <p className="small mb-2" style={{ color: "#555555" }}>
              Or
            </p>
            <Form.Select className="mb-3">
              <option>Select a driver</option>
              <option>Driver A</option>
              <option>Driver B</option>
            </Form.Select>
            <div className="d-flex gap-2 align-items-center">
              <p className="small mb-1" style={{ color: "#555555" }}>
                Download format
              </p>
              <div className="mb-3">
                <button className="badge bg-success me-2">.xls</button>
                <button className="badge bg-light text-success border me-2">
                  .pdf
                </button>
                <button className="badge bg-light text-success border">.csv</button>
              </div>
            </div>

            <Button
              className="w-100"
              style={{ backgroundColor: "#3856A6", borderColor: "#3856A6" }}
            >
              Download Reports
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FleetPerformanceReports;
