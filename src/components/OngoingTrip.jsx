import React from "react";
import LiveMap from "./LiveMap";
import { Container, Row, Col } from "react-bootstrap";

const OngoingTrip = () => {
  return (
    <Container fluid className="p-4 bg-white rounded shadow-sm">
      {/* Flex container for Info + Map */}
      <div className="d-flex flex-column flex-md-row gap-3">
        {/* Left Panel: Header + Pickup/Drop */}
        <div
          className=" d-flex flex-column justify-content-between p-3 bg-white rounded"
          style={{ minHeight: "400px" }}
        >
          <div>
            <h5 className="fw-semibold">Ongoing Trip Payback</h5>
            <div className="text-danger fw-semibold mt-4 mb-4">🔴 LIVE</div>

            {/* Pickup */}
            <div className="mb-4">
              <div className="fw-semibold mb-2"><img src="/distance.svg" /> Pickup</div>
              <p className="mb-1 small text-muted">
                B-167, Sector 43, DSIIDC Bawana Industrial Area, Delhi-110036,
                India <br />
                Lat: 1253.1515 Long: 1253.1515
              </p>
              <p className="small text-secondary">12:56 | 6 Feb 2025</p>
            </div>

            {/* Drop */}
            <div>
              <div className="fw-semibold mb-2"><img src="/distance (1).svg" />  Drop</div>
              <p className="mb-1 small text-muted">
                B-167, Sector 43, DSIIDC Bawana Industrial Area, Delhi-110036,
                India <br />
                Lat: 1253.1515 Long: 1253.1515
              </p>
              <p className="small text-secondary">12:00 | 7 Feb 2025 (ETA)</p>
            </div>
          </div>
        </div>

        {/* Right Panel: Map (Wider than left) */}
        <div
          className="d-flex align-items-center bg-white rounded p-2"
          style={{ minHeight: "400px", flex: "2" }}
        >
          <LiveMap />
        </div>
      </div>

      {/* Stats */}
      <Row className="text-center mt-4 mb-2">
        <Col md={4}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex gap-2 align-items-center">
              <img src="/Vector (9).svg" alt="cargo" />
              <p
                className="mb-1 fw-semibold"
                style={{ color: "#555555", fontSize: "20px" }}
              >
                Cargo load
              </p>
            </div>
            <h6
              className="fw-bold"
              style={{ color: "#3856A6", fontSize: "24px" }}
            >
              100{" "}
              <span style={{ color: "#555555", fontSize: "14px" }}>ton</span>
            </h6>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex gap-2 align-items-center">
              <img src="/Vector (10).svg" alt="distance" />
              <p
                className="mb-1 fw-semibold"
                style={{ color: "#555555", fontSize: "20px" }}
              >
                Distance travelled
              </p>
            </div>
            <h6
              className="fw-bold"
              style={{ color: "#3856A6", fontSize: "24px" }}
            >
              24 <span style={{ color: "#555555", fontSize: "14px" }}>km</span>
            </h6>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex gap-2 align-items-center">
              <img src="Vector (11).svg" alt="hours" />
              <p
                className="mb-1 fw-semibold"
                style={{ color: "#555555", fontSize: "20px" }}
              >
                Driving hours
              </p>
            </div>
            <h6
              className="fw-bold"
              style={{ color: "#3856A6", fontSize: "24px" }}
            >
              3{" "}
              <span style={{ color: "#555555", fontSize: "14px" }}>hours</span>
            </h6>
          </div>
        </Col>
      </Row>

      {/* Event Stats */}
      <div className="bg-light rounded mt-4 p-3">
        <Row className="text-center">
          {[
            ["Speed bump", 2],
            ["Harsh acceleration", 2],
            ["Over speeding", 1],
            ["Over loading", 1],
            ["Sharp acceleration", 0],
            ["Hand brake while driving", 0],
            ["Low SoC", 0],
            ["Low departure", 2],
            ["Seat belt", 4],
            ["High battery consumption", 2],
          ].map(([label, count], i, arr) => (
            <Col
              key={i}
              className={`py-2 ${i !== arr.length - 1 ? "border-end" : ""}`}
              style={{ flex: "1 0 10%", maxWidth: "10%" }}
            >
              <small className="text-muted">{label}</small>
              <div className="fw-semibold fs-5" style={{color:"#3856A6"}}>{count}</div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default OngoingTrip;
