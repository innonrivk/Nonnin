import React, { useEffect, useState } from "react";
import GreyCableImage from "../Assets/res/Images/SimulationScreen/cables/greyCable.png"
import BlackCableImage from "../Assets/res/Images/SimulationScreen/cables/blackCable.png"
import GreyCableImagePressed from "../Assets/res/Images/SimulationScreen/cables/greyCablePressed.png"
import BlackCableImagePressed from "../Assets/res/Images/SimulationScreen/cables/blackCablePressed.png"
import CablesFragment from "./Fragments/CablesFragment";
import GreyCable from "../Assets/Components/SimulationScreenComponents/CablesComponents/GreyCable.js";
import NoninFragment from "./Fragments/NoninFragment";
import ReturnBtn from "../Assets/Components/ReturnBtn"
function InfoScreen() {
  

  return (
    <div style={{width : "100vw", height: "100vh"}}>
        <ReturnBtn></ReturnBtn>
      <NoninFragment></NoninFragment>
    </div>
  );

}

export default InfoScreen;
