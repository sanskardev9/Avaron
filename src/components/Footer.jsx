import React, { useEffect, useState } from "react";

const useIsSmallScreen = (breakpoint = 768) => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isSmall;
};

const Footer = () => {

  const isSmallScreen = useIsSmallScreen(); 

  const footerStyle = {
    background: "linear-gradient(to right, #57b847, #1e3c72)",
    color: "#fff",
    padding: "20px",
    fontSize: "14px",
    marginBottom: "70px",
  };

  

  return (
    <footer className="container-fluid mb-lg-0" style={footerStyle}>
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
