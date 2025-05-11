import React from "react"
import GaugeChart from "./GaugeChart"
import StatCard from "./StatCard"
import { Row, Col } from "react-bootstrap";

const Fleet = ({data}) => {
    
    return (
        <div>
          <Row className="g-3">
            <Col md={3}>
              <GaugeChart value={100} />
            </Col>
    
            <Col md={9}>
              <Row className="g-3">
                {data.map((stat, index) => (
                  <Col md={6} className="d-flex" key={index}>
                    <StatCard {...stat} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      );
}

export default Fleet
