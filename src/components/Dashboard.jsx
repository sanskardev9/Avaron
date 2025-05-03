import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import GaugeChart from "./GaugeChart";
import StatCard from "./StatCard";
import LiveLoadTracking from "./LiveLoadTracking";
import AlertSummaryChart from "./AlertSummaryChart";
import DriversSummary from "./DriverSummary";
const Dashboard = () => {
  return (
    <Container className="p-4" style={{ maxWidth: "1440px" }}>
      <div>
        <Row className="g-3">
          {/* Left */}
          <Col md={3}>
            <GaugeChart value={90} />
          </Col>
          <Col md={9}>
            <Row className="g-3">
              <Col md={6} className="d-flex">
                <StatCard
                  title="Total Distance Travelled"
                  value="1200"
                  unit="km"
                  icon="/Vector.svg"
                  chart="/Linechart.svg"
                  note="since last month"
                />
              </Col>

              <Col md={6} className="d-flex">
                <StatCard
                  title="Total Cargo Transported"
                  value="3500"
                  unit="kg"
                  icon="/Vector (1).svg"
                  chart="/Linechart.svg"
                  note="since last month"
                />
              </Col>

              <Col md={6} className="d-flex">
                <StatCard
                  title="Total Driving Hours"
                  value="120"
                  unit="hours"
                  icon="/Vector (2).svg"
                  chart="/Linechart.svg"
                  note="since last month"
                />
              </Col>

              <Col md={6} className="d-flex">
                <StatCard
                  title="Total Carbon Savings"
                  value="350"
                  unit="kg"
                  icon="/Vector (3).svg"
                  chart="/Linechart.svg"
                  note="since last month"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
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
