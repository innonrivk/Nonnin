import React, { useState } from "react";
import "./NoninFragment.css"
import Co2Screen from "../../../Assets/Components/SimulationScreenComponents/NonninDeviceComponents/Co2Components/Co2Screen"
import MainScreen from "../../../Assets/Components/SimulationScreenComponents/NonninDeviceComponents/MainScreenComponent/MainScreen"
import ButtonsFrag from "./ButtonsFrag/ButtonsFrag.js";
function NoninFragment(props) {
  const [co2Level, setCo2Level] = useState(77)

  return (
    <div className="nonnin-container-div">
      <div className="container-grid-nonnin">
        <div className="main-screen-area">
            <MainScreen></MainScreen>
        </div>

        <div class="co2-screen-area">
          <Co2Screen co2Level={co2Level} ></Co2Screen>
        </div>
        <div class="btns-scrren-area">
            <ButtonsFrag></ButtonsFrag>
        </div>
      </div>
    </div>
  );

}

export default NoninFragment;
