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

  const selectedDriver = {
    name: "Akash Sharma",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rank: 1,
  };

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
                <Input placeholder="Search individual driver" />
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
              <Link to={"/"} ><img src="/angleBracket.png" style={{width:'32px', height:'32px', marginRight:'80px'}}  /> </Link>
            </div>
          )}

          <div className="d-flex flex-row gap-3">
            <Link
              to={"/"}
              style={{
                fontWeight: "500",
                textDecoration: "none",
                color: currentPath === "/" ? "#3856A6" : "#777777",
              }}
            >
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
              <FaRegFileAlt size={32} />
              Reports
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
