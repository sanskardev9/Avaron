import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Drivers from "./pages/Drivers";
import Reports from "./pages/Reports";
import "bootstrap/dist/css/bootstrap.min.css";
import 'leaflet/dist/leaflet.css';

import { Navbar } from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import LiveMapView from "./pages/LiveMapView";

const App = () => {

  return (
    <div style={{backgroundColor:'#F8F9FA', height:'auto'}}>
      <Router>
        <Navbar/>
        <div
          style={{ maxWidth: "1440px", margin: "0 auto"}}
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Dashboard />
                </>
              }
            />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/livemap" element={<LiveMapView/>} />
          </Routes>
        </div>
        <></>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;



// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Drivers from "./pages/Drivers";
// import Reports from "./pages/Reports";
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'leaflet/dist/leaflet.css';

// import { Navbar } from "./components/Navbar";
// import Dashboard from "./components/Dashboard";
// import Footer from "./components/Footer";
// import LiveMapView from "./pages/LiveMapView";

// // List of drivers
// const driverList = [
//   { name: "All Drivers", rank: 0, image: "https://randomuser.me/api/portraits/men/1.jpg" },
//   { name: "Mohan Roy", rank: 1, image: "https://randomuser.me/api/portraits/men/2.jpg" },
//   { name: "Akash Sharma", rank: 2, image: "https://randomuser.me/api/portraits/men/3.jpg" },
//   { name: "Didar Ahmad", rank: 3, image: "https://randomuser.me/api/portraits/men/4.jpg" },
// ];

// const App = () => {
//   const [selectedDriver, setSelectedDriver] = useState("all");

//   const selectedDriverObj =
//     driverList.find((d) => d.name === selectedDriver) || driverList[0];

//   return (
//     <div style={{ backgroundColor: '#F8F9FA', height: 'auto' }}>
//       <Router>
//         <Navbar selectedDriver={selectedDriverObj} />
//         <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route
//               path="/drivers"
//               element={
//                 <Drivers
//                   selectedDriver={selectedDriver}
//                   setSelectedDriver={setSelectedDriver}
//                 />
//               }
//             />
//             <Route path="/reports" element={<Reports />} />
//             <Route path="/livemap" element={<LiveMapView />} />
//           </Routes>
//         </div>
//         <Footer />
//       </Router>
//     </div>
//   );
// };

// export default App;
