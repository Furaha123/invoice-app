import MyImage from "../src/components/images/sideimage.png";
import MyImage1 from "../src/components/images/profile1.png";
import "./Side.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import React from "react";
import Invoice from "./Invoice";
import Paid from "./Paid";

function App() {
  return (
    <div>
      <div className="image-container">
        <div className="first-image">
          <img src={MyImage} alt="image one" />
        </div>
        <div className="second-image">
          <img src={MyImage1} alt="image two" className="circle-image" />
        </div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Invoice />
              </div>
            }
          />

          <Route
            path="paid"
            element={
              <div>
                <Paid />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
