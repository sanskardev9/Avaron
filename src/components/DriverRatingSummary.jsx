// components/DriverRatingSummary.js
import React from "react";

const DriverRatingSummary = () => {
  return (
    <div
      className="d-flex flex-column shadow-sm"
      style={{
        padding: "10px",
        borderRadius: "12px",
        backgroundColor: "#F7F8FA",
      }}
    >
      <div className="d-flex justify-content-between">
        <h3 style={{ fontSize: "20px", fontWeight: "500", color: "#555555" }}>
          Driver Rating Summary
        </h3>
        <img src="/Vector (7).svg" />
      </div>
      <div className="d-flex justify-content-center align-items-center ">
        <img
          src="/Frame 222.png"
          className="img-fluid"
          style={{ maxHeight: "350px" }}
        />
      </div>
    </div>
  );
};

export default DriverRatingSummary;
