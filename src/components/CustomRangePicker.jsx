import React, { useState, useEffect } from "react";
import { DateRangePicker } from "rsuite";

const useIsSmallScreen = (breakpoint = 768) => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const updateSize = () => setIsSmall(window.innerWidth < breakpoint);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [breakpoint]);

  return isSmall;
};

const CustomRangePicker = () => {
  const [range, setRange] = useState([new Date(), new Date()]);
  const isSmallScreen = useIsSmallScreen();

  return (
    <div
      style={{
        position:'relative',
        zIndex:'1051',
        borderRadius: "99px",
        background: "#f8f9fa",
        display: "flex",
        alignItems: "center",
        padding: "8px 16px",
        width: "fit-content",
        // border: "1px solid #EDEFF2",
        minWidth: "150px",
        maxWidth:'300px'
      }}
    >
      <DateRangePicker
        value={range}
        onChange={setRange}
        appearance="subtle"
        style={{
          border: "none",
          background: "transparent",
          // backgroundColor:'black',
          minWidth: isSmallScreen ? 120 : 180,
        }}
        placeholder="Select Range"
        format={isSmallScreen ? "dd MMM ": "dd MMM yyyy"} 
        cleanable={false}
        placement="bottomEnd"
        showOneCalendar
      />
    </div>
  );
};

export default CustomRangePicker;
