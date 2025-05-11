import React from "react";
import DriverListCard from "./DriversListCard";
import DriverRatingSummary from "./DriverRatingSummary";

const driverList = [
  {
    name: "Mohan Roy",
    score: 80,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Akash Sharma",
    score: 90,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Didar Ahmad",
    score: 20,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Mohan Roy",
    score: 60,
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Akash Sharma",
    score: 58,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Akash Sharma",
    score: 58,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Akash Sharma",
    score: 58,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Akash Sharma",
    score: 58,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Akash Sharma",
    score: 58,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Akash Sharma",
    score: 58,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Akash Sharma",
    score: 58,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Akash Sharma",
    score: 58,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Akash Sharma",
    score: 58,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Akash Sharma",
    score: 58,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Akash Sharma",
    score: 58,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Akash Sharma",
    score: 58,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const topDrivers = [
  {
    name: "Akash Sharma",
    score: 90,
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Mohan Roy",
    score: 88,
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Didar Ahmad",
    score: 87,
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Raju Kumar",
    score: 86,
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    name: "Anil Bose",
    score: 85,
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
  },
];

const leastDrivers = [
  {
    name: "Akash Sharma",
    score: 50,
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Mohan Roy",
    score: 60,
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Didar Ahmad",
    score: 62,
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Raju Kumar",
    score: 63,
    avatar: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    name: "Anil Bose",
    score: 65,
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
  },
];

const DriverCardsGrid = () => (
  <div
    style={{ backgroundColor: "white", padding: "20px", color: "#555555" }}
    className="mt-5"
  >
    <h3 style={{ fontSize: "24px", fontWeight: "500" }} className="mb-3">
      Drivers Summary
    </h3>
    <div>
      {/* First Row: Card + Rating Summary */}
      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center row mb-4 ">
        <div className="row d-flex align-items-stretch">
          <div className="col-md-4 d-flex ">
            <div className="w-100">
              <DriverListCard
                title="Total Fleet Drivers"
                iconPath="/Vector (8).svg"
                drivers={driverList}
                type="basic"
                driversLength={driverList.length}
              />
            </div>
          </div>
          <div className="col-md-8 d-flex">
            <div className="w-100">
              <DriverRatingSummary />
            </div>
          </div>
        </div>
      </div>

      {/* Second Row: Top & Least Performing */}
      <div className="row">
        <div className="col-md-6 mb-4">
          <DriverListCard
            title="Top Performing Drivers"
            iconPath="/emoji_events.svg"
            drivers={topDrivers}
            type="ranked"
          />
        </div>
        <div className="col-md-6 mb-4">
          <DriverListCard
            title="Least Performing Drivers"
            iconPath="/exclamation.svg"
            drivers={leastDrivers}
            type="ranked"
          />
        </div>
      </div>
    </div>
  </div>
);

export default DriverCardsGrid;
