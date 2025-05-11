import React, { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";

const useIsSmallScreen = (breakpoint = 768) => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isSmall;
};

const GaugeChart = ({ value = 90 }) => {
  const isSmallScreen = useIsSmallScreen();
  const cappedValue = Math.min(value, 100);
  const stroke = 15;

  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(1); 

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  const strokeDashoffset = pathLength * (1 - cappedValue / 100);

  return (
    <Card className="p-3 text-center border-0 shadow-sm h-100">
      <div className="d-flex justify-content-between">
        <div>
          <h6 className="fw-bold mb-1 text-muted" style={{ textAlign: "left" }}>
            Fleet Score
          </h6>
          <small className="text-muted">
            Average of all driver scores in the fleet
          </small>
        </div>
        <img src="/Vector (4).svg" style={{ height: "27px", width: "24px" }} />
      </div>

      <div style={{ position: "relative", height: "220px", marginTop: "10px" }}>
        <svg width="100%" height="150" viewBox="0 0 200 100">
          <defs>
            <linearGradient
              id="gaugeGradient"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FF5A5F" />
              <stop offset="100%" stopColor="#9AC76D" />
            </linearGradient>
          </defs>

          {/* Background arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#e6e6e6"
            strokeWidth={stroke}
          />

          {/* Foreground arc */}
          <path
            ref={pathRef}
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth={stroke}
            strokeDasharray={pathLength}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        {/* Center value */}
        <div
          style={{
            position: "absolute",
            top: "48%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: isSmallScreen ? "38px" : "40px",
            color: "#6C964D",
            fontWeight: "bold",
          }}
        >
          {Math.round(cappedValue)}
        </div>
      </div>

      <p
        className="text-success"
        style={{ fontSize: "0.9rem", marginTop: "4px" }}
      >
        See how the score is calculated &gt;
      </p>
    </Card>
  );
};

export default GaugeChart;
