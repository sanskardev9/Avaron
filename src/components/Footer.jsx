import React from "react";

const Footer = () => {
  const footerStyle = {
    background: "linear-gradient(to right, #57b847, #1e3c72)",
    color: "#fff",
    padding: "20px",
    fontSize: "14px",
  };

  return (
    <footer className="container-fluid" style={footerStyle}>
      <div className="row text-center text-md-start">
        <div className="col-12 col-md-6 mb-2 mb-md-0">
          Copyright 2025, All Rights Reserved | <strong>TADS</strong>
        </div>
        <div className="col-12 col-md-6 text-md-end">
          Powered by <strong>TADS</strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
