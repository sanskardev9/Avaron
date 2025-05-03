import React from "react";
import { DatePicker } from "rsuite";
import { Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import Frame from "../../public/Frame.png";
import { useLocation, Link } from "react-router-dom";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";



export const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 py-3">
      <div className="container-fluid d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center w-100">
          <h3
            className=" fst-italic custom-tads"
            style={{ color: "#F1C231", marginRight: "2rem" }}
          >
            TADS
          </h3>
          <div className="d-flex flex-row gap-3">
            <div style={{ color: "white" }}>
              <DatePicker />
            </div>
            <div style={{ color: "white" }}>
              <InputGroup>
                <Input placeholder="Search" />
                <InputGroup.Button>
                  <SearchIcon />
                </InputGroup.Button>
              </InputGroup>
            </div>
          </div>
        </div>

        <div
          className="d-flex flex-row justify-content-between align-items-center mt-5"
          style={{ maxWidth: "1440px", width: "100%", margin: "0 auto" }}
        >
          <img
            src={Frame}
            alt="Fleet"
            style={{ height: "40px", marginRight: "1rem" }}
          />
          <div className="d-flex flex-row gap-3 ">
              <Link
                to={"/"}
                style={{
                  fontWeight: "500",
                  textDecoration: "none",
                  color: currentPath === "/" ? "#3856A6" : "#777777",
                }}
              >
                {/* <img
                  src={OverviewImg}
                  style={{ height: "32px", width: "32px" }}
                />{" "} */}
                <MdOutlinePeopleAlt size={32} />
                Overview
              </Link>

            <Link
              to={"/drivers"}
              style={{
                fontWeight: "500",
                textDecoration: "none",
                color: currentPath === "/drivers" ? "#3856A6" : "#777777",
              }}
            >
              {/* <img src={PersonImg} style={{ height: "32px", width: "32px" }} />{" "} */}
              <MdPersonOutline size={32} />
              Drivers
            </Link>
            <Link
              to={"/reports"}
              style={{
                fontWeight: "500",
                textDecoration: "none",
                color: currentPath === "/reports" ? "#3856A6" : "#777777",
              }}
            >
              {/* <img src={ReportsImg} style={{ height: "32px", width: "32px" }} />{" "} */}
              <FaRegFileAlt size={32} />
              Reports
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
