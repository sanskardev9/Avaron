import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import CustomRangePicker from "./CustomRangePicker";
import DropDown from "./DropDown";
import SearchBar from "./SearchInput";

const useIsSmallScreen = (breakpoint = 768) => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isSmall;
};

export const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isSmallScreen = useIsSmallScreen();

  const selectedDriver = {
    name: "Akash Sharma",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rank: 1,
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white  px-3 py-1  shadow-sm "
        style={{ position: "sticky", top: 0, zIndex: 1020 }}
      >
        <div className="container-fluid d-flex flex-column">
          <div className="d-flex flex-column justify-content-between align-items-center w-100 flex-sm-row">
            {!isSmallScreen && (
              <div className="d-flex flex-row gap-5">
                <Link
                  to={"/"}
                  style={{
                    fontWeight: "500",
                    textDecoration: "none",
                    color: currentPath === "/" ? "#3856A6" : "#777777",
                    fontSize: "22px",
                  }}
                >
                  <MdOutlinePeopleAlt size={29} />
                  Overview
                </Link>

                <Link
                  to={"/drivers"}
                  style={{
                    fontWeight: "500",
                    textDecoration: "none",
                    color: currentPath === "/drivers" ? "#3856A6" : "#777777",
                    fontSize: "22px",
                  }}
                >
                  <MdPersonOutline size={29} />
                  Drivers
                </Link>
                <Link
                  to={"/reports"}
                  style={{
                    fontWeight: "500",
                    textDecoration: "none",
                    color: currentPath === "/reports" ? "#3856A6" : "#777777",
                    fontSize: "22px",
                  }}
                >
                  <FaRegFileAlt size={29} />
                  Reports
                </Link>
              </div>
            )}

            <div className="d-flex flex-row gap-5 items-center justify-center">
              {isSmallScreen ? (
                <div className="d-flex flex-column gap-3">
                  <SearchBar />
                  <div className="d-flex gap-2">
                    <DropDown />
                    <CustomRangePicker />
                  </div>
                </div>
              ) : (
                <>
                  <SearchBar />

                  <CustomRangePicker />
                  <DropDown />
                </>
              )}
            </div>
          </div>

          {/* <div
          className="d-flex flex-row justify-content-between align-items-center mt-5 "
          style={{ maxWidth: "1440px", width: "100%", marginRight: "10px" }}
        >
          {currentPath === "/" ? (
            <img
              src={Frame}
              alt="Fleet"
              style={{
                height: "40px",
                marginRight: "10px",
              }}
            />
          ) : currentPath === "/drivers" ? (
            <div
              className="d-flex rounded me-2"
              style={{ backgroundColor: "F8F9FA", maxHeight: "60px" }}
            >
              <img
                src={selectedDriver.image}
                alt={selectedDriver.name}
                className="rounded-circle"
                style={{
                  width: "56px",
                  height: "56px",
                  objectFit: "cover",
                  marginRight: "12px",
                }}
              />
              <div className="d-flex flex-column align-items-start gap-2">
                <div className="fw-semibold fs-4 fs-sm-5 fs-md-2 fs-lg-1 w-100">
                  {selectedDriver.name}
                </div>
                {selectedDriver.name !== "All Drivers" && (
                  <div className="d-flex align-items-center fs-4 fs-sm-6 fs-md-4 fs-lg-3 w-100">
                    Rank:{" "}
                    <span
                      className="ms-1"
                      style={{ color: "#2CA4A4", fontWeight: "bold" }}
                    >
                      #{selectedDriver.rank}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ) : currentPath === "/reports" ? (
            <div className="d-flex flex-column">
              <div className="fs-4 fs-sm-1">Downloadable Reports</div>
            </div>
          ) : (
            <div>
              <Link to={"/"}>
                <img
                  src="/angleBracket.png"
                  style={{ width: "32px", height: "32px", marginRight: "80px" }}
                />{" "}
              </Link>
            </div>
          )}
        </div> */}
        </div>
      </nav>
      {isSmallScreen && (
        <div
          className="d-flex d-md-none justify-content-around align-items-center p-3 bg-white border-top shadow-sm"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1050,
          }}
        >
          <Link
            to="/"
            style={{
              color: currentPath === "/" ? "#3856A6" : "#777777",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "12px",
            }}
          >
            <MdOutlinePeopleAlt size={24} />
            Overview
          </Link>
          <Link
            to="/drivers"
            style={{
              color: currentPath === "/drivers" ? "#3856A6" : "#777777",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "12px",
            }}
          >
            <MdPersonOutline size={24} />
            Drivers
          </Link>
          <Link
            to="/reports"
            style={{
              color: currentPath === "/reports" ? "#3856A6" : "#777777",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "12px",
            }}
          >
            <FaRegFileAlt size={24} />
            Reports
          </Link>
        </div>
      )}
    </>
  );
};

// import React, { useState } from "react";
// import { DatePicker } from "rsuite";
// import { Input, InputGroup } from "rsuite";
// import SearchIcon from "@rsuite/icons/Search";
// import Frame from "../../public/Frame.png";
// import { useLocation, Link } from "react-router-dom";
// import { MdOutlinePeopleAlt } from "react-icons/md";
// import { MdPersonOutline } from "react-icons/md";
// import { FaRegFileAlt } from "react-icons/fa";

// export const Navbar = () => {
//   const location = useLocation();
//   const currentPath = location.pathname;

//   const selectedDriver = {
//     name: "Akash Sharma",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//     rank: 1,
//   };

//   const [fromDate, setFromDate] = useState(null);
//   const [toDate, setToDate] = useState(null);

//   // Run this whenever dates are updated
//   const handleDateChange = (from, to) => {
//     if (from && to && from <= to) {
//       onFilter(from, to);
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 py-3">
//       <div className="container-fluid d-flex flex-column">
//         <div className="d-flex justify-content-between align-items-center w-100">
//           <h3
//             className=" fst-italic custom-tads"
//             style={{ color: "#F1C231", marginRight: "2rem" }}
//           >
//             DRISHTI
//           </h3>

//           <div className="d-flex flex-row gap-3">
//           <div style={{ color: "white" }}>
//               <InputGroup>
//                 <Input placeholder="Search individual driver" />
//                 <InputGroup.Button>
//                   <SearchIcon />
//                 </InputGroup.Button>
//               </InputGroup>
//             </div>
//             <div style={{ display: "flex", gap: "1rem" }}>
//               <DatePicker
//                 placeholder="From Date"
//                 value={fromDate}
//                 onChange={(date) => {
//                   setFromDate(date);
//                   handleDateChange(date, toDate);
//                 }}
//                 shouldDisableDate={(date) => toDate && date > toDate}
//               />

//               <DatePicker
//                 placeholder="To Date"
//                 value={toDate}
//                 onChange={(date) => {
//                   setToDate(date);
//                   handleDateChange(fromDate, date);
//                 }}
//                 shouldDisableDate={(date) => fromDate && date < fromDate}
//               />
//             </div>

//           </div>
//         </div>

//         <div
//           className="d-flex flex-row justify-content-between align-items-center mt-5 "
//           style={{ maxWidth: "1440px", width: "100%", marginRight: "10px" }}
//         >
//           {currentPath === "/" ? (
//             <img
//               src={Frame}
//               alt="Fleet"
//               style={{
//                 height: "40px",
//                 marginRight: "10px",
//               }}
//             />
//           ) : currentPath === "/drivers" ? (
//             <div
//               className="d-flex rounded me-2"
//               style={{ backgroundColor: "F8F9FA", maxHeight: "60px" }}
//             >
//               <img
//                 src={selectedDriver.image}
//                 alt={selectedDriver.name}
//                 className="rounded-circle"
//                 style={{
//                   width: "56px",
//                   height: "56px",
//                   objectFit: "cover",
//                   marginRight: "12px",
//                 }}
//               />
//               <div className="d-flex flex-column align-items-start gap-2">
//                 <div className="fw-semibold fs-4 fs-sm-5 fs-md-2 fs-lg-1 w-100">
//                   {selectedDriver.name}
//                 </div>
//                 {selectedDriver.name !== "All Drivers" && (
//                   <div className="d-flex align-items-center fs-4 fs-sm-6 fs-md-4 fs-lg-3 w-100">
//                     Rank:{" "}
//                     <span
//                       className="ms-1"
//                       style={{ color: "#2CA4A4", fontWeight: "bold" }}
//                     >
//                       #{selectedDriver.rank}
//                     </span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ) : currentPath === "/reports" ? (
//             <div className="d-flex flex-column">
//               <div className="fs-4 fs-sm-1">Downloadable Reports</div>
//             </div>
//           ) : (
//             <div>
//               <Link to={"/"}>
//                 <img
//                   src="/angleBracket.png"
//                   style={{ width: "32px", height: "32px", marginRight: "80px" }}
//                 />{" "}
//               </Link>
//             </div>
//           )}

//           <div className="d-flex flex-row gap-3">
//             <Link
//               to={"/"}
//               style={{
//                 fontWeight: "500",
//                 textDecoration: "none",
//                 color: currentPath === "/" ? "#3856A6" : "#777777",
//               }}
//             >
//               <MdOutlinePeopleAlt size={32} />
//               Overview
//             </Link>

//             <Link
//               to={"/drivers"}
//               style={{
//                 fontWeight: "500",
//                 textDecoration: "none",
//                 color: currentPath === "/drivers" ? "#3856A6" : "#777777",
//               }}
//             >
//               <MdPersonOutline size={32} />
//               Drivers
//             </Link>
//             <Link
//               to={"/reports"}
//               style={{
//                 fontWeight: "500",
//                 textDecoration: "none",
//                 color: currentPath === "/reports" ? "#3856A6" : "#777777",
//               }}
//             >
//               <FaRegFileAlt size={32} />
//               Reports
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

{
  /* <div style={{ display: "flex", gap: "1rem" }}> */
}
{
  /* <DatePicker
                style={{ width: "100px" }}
                placeholder="From"
                value={fromDate}
                onChange={(date) => {
                  setFromDate(date);
                  handleDateChange(date, toDate);
                }}
                shouldDisableDate={(date) => toDate && date > toDate}
              />

              <DatePicker
                style={{ width: "100px" }}
                placeholder="To Date"
                value={toDate}
                onChange={(date) => {
                  setToDate(date);
                  handleDateChange(fromDate, date);
                }}
                shouldDisableDate={(date) => fromDate && date < fromDate}
              /> */
  // </div>
}
