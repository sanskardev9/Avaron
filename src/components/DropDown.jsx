import React, { useState, useEffect } from "react";
import { Whisper, Popover, Dropdown } from "rsuite";
import { ChevronDown } from "lucide-react";

const companies = [
  { name: "SwiftCargo", role: "Fleet", logo: "/logo1.png" },
  { name: "FastTrack", role: "Fleet", logo: "/logo2.png" },
  { name: "LogiXpress", role: "Manager", logo: "/logo3.png" },
];

const useIsSmallScreen = (breakpoint = 768) => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isSmall;
};

const CompanySelector = () => {
  const isSmallScreen = useIsSmallScreen();

  const [activeCompany, setActiveCompany] = useState(companies[0]);

  const renderPopover = (
    <Popover full className="mt-5">
      <Dropdown.Menu>
        {companies.map((company, index) => (
          <Dropdown.Item
            key={index}
            onClick={() => setActiveCompany(company)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 12px",
              width: "200px",
            }}
          >
            <div className="d-flex gap-3">
              <img
                src="/DropDown.png"
                alt={company.name}
                style={{ width: 32, height: 32, borderRadius: "50%" }}
              />
              <div>
                <div style={{ fontWeight: 600 }}>{company.name}</div>
                <small style={{ color: "#888" }}>{company.role}</small>
              </div>
            </div>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Popover>
  );

  return (
    <Whisper placement="bottomStart" trigger="click" speaker={renderPopover}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "8px 12px",
          background: "#fff",
          borderRadius: "50px",
          cursor: "pointer",
          width: isSmallScreen ? 160 : 250,
        }}
      >
        <img
          src="/DropDown.png"
          alt={activeCompany.name}
          style={{
            width: isSmallScreen ? 35 : 45,
            height: isSmallScreen ? 35 : 45,
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: 12,
          }}
        />
        <div>
          {isSmallScreen ? (
            <></>
          ) : (
            <>
              <div style={{ fontWeight: 600 }}>{activeCompany.name}</div>
              <div style={{ fontSize: "13px", color: "#888" }}>
                {activeCompany.role}
              </div>
            </>
          )}
        </div>
        <ChevronDown size="18" />
      </div>
    </Whisper>
  );
};

export default CompanySelector;
