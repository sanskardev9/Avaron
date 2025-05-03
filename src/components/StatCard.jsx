import React from "react";
import { Card } from "react-bootstrap";

const StatCard = ({ title, value, unit, icon, chart, percentage, note }) => {
  return (
    <Card className="p-3 border-0 shadow-sm h-100 w-100">
      <h6>
        <div
          className="d-flex justify-content-between text-muted "
          style={{ fontWeight: "bold" }}
        >
          {title}
          {icon && <img src={icon} alt="icon" />}
        </div>
      </h6>

      {chart ? (
        <div className="d-flex flex-row justify-content-between mt-2">
          <div>
            <h2 style={{ color: "#3856A6" }}>{value}</h2>
            <p style={{color:'#777777'}}>{unit}</p>
          </div>

          <div>
            <img
              src={chart}
              alt="chart"
              style={{ height: "100px", width: "100px" }}
            />
            <p className="mt-2 text-muted">{note}</p>
          </div>
        </div>
      ) : (
        <>
          <h3 className="text-primary">{value}</h3>
          {percentage && <p className="text-success">{percentage}</p>}
        </>
      )}
    </Card>
  );
};

export default StatCard;
