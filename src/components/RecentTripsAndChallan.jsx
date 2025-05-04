import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RecentTripsAndChallan = () => {
  const trips = [
    {
      from: "Noida Electronic City",
      to: "Dasna Industrial Area",
      time: "18:45 . 1 Feb 2025 – 07:00 . 2 Feb 2025",
    },
    {
      from: "Okhla Industrial Area",
      to: "Shalimar Bagh Industrial Area",
      time: "19:53 . 2 Feb 2025 – 05:00 . 3 Feb 2025",
    },
    {
      from: "Noida Electronic City",
      to: "Dasna Industrial Area",
      time: "18:45 . 1 Feb 2025 – 07:00 . 2 Feb 2025",
    },
  ];

  const challans = new Array(4).fill({
    number: "DL254545464",
    location: "Crown Plaza Red Light, Okhla, Delhi-110056",
    time: "18:45 . 1 Feb 2025",
    amount: "Rs. 1000",
  });

  return (
    <div className="my-4">
      <div className="row align-items-stretch">
        {/* Recent Trips */}
        <div className="col-md-4">
          <div className="rounded p-3 shadow-sm bg-white h-100 d-flex flex-column">
          <div className="d-flex justify-content-between">
            <h6 style={{ fontWeight: "500", color: "#555555" }}>
              Recent Trips
            </h6>
            <img src="/search_activity.svg" />
            </div>
            <p className="text-muted small">
              Trips completed by driver in past month
            </p>
            <div className="mt-auto">
              {trips.map((trip, idx) => (
                <div key={idx} className="border-top py-2">
                  <p className="mb-1">
                    {trip.from} to {trip.to}
                  </p>
                  <p className="text-muted small mb-1">{trip.time}</p>
                  <div className="text-end">
                    <a
                      href="#"
                      className="small text-decoration-none"
                      style={{ color: "#61BB46" }}
                    >
                      See details &gt;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Challans */}
        <div className="col-md-8">
          <div className="bg-white shadow-sm p-3 rounded h-100 d-flex flex-column">
            <div className="d-flex justify-content-between">
              <h6
                className="mb-3"
                style={{ color: "#555555", fontWeight: "500" }}
              >
                Recent Challans
              </h6>
              <img
                src="/content_paste.svg"
                style={{ height: "24px", width: "24px" }}
              />
            </div>

            <div className="row mt-auto">
              {challans.map((challan, idx) => (
                <div
                  key={idx}
                  className="col-md-6 mb-3"
                  style={{ color: "#777777", fontWeight: "400" }}
                >
                  <div
                    className="rounded p-3 shadow-sm"
                    style={{ backgroundColor: "#F7F8FA" }}
                  >
                    <p className="mb-1">Challan No.</p>
                    <a
                      href="#"
                      className=" fw-bold text-decoration-none"
                      style={{ color: "#3856A6" }}
                    >
                      {challan.number}
                    </a>
                    <p className="text-muted small mb-1">{challan.location}</p>
                    <p className="text-muted small mb-2">{challan.time}</p>
                    <p className="fw-semibold text-end"> {challan.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTripsAndChallan;
