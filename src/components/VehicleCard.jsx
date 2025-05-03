import React from "react";
import { Card, Badge } from "react-bootstrap";

const VehicleCard = ({ vehicleNumber, driverName, isActive }) => {
  return (
    <Card
      className={`mb-3 shadow-sm `}
      style={{
        borderRadius: "16px",
        border: isActive ? "1px solid black" : "none",
      }}
    >
      <Card.Body>
        <div className="mb-4">
          <Badge
            bg=""
            style={{
              backgroundColor: "#C2F1EF",
              color: "#3B9C9A",
              borderRadius: "10px",
              fontSize: "13px",
              padding: "5px 12px",
              fontWeight: "500",
            }}
          >
            In Transit
          </Badge>
        </div>

        <div className="d-flex justify-content-between">
          <span className="text-muted">Vehicle Number</span>
          <span className="fw-semibold text-dark">{vehicleNumber}</span>
        </div>

        <div className="d-flex justify-content-between mt-3 mb-4">
          <span className="text-muted">Driver Name</span>
          <span className="fw-semibold text-dark">{driverName}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default VehicleCard;
