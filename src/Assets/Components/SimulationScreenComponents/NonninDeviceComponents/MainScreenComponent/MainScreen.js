import React, { useEffect, useState } from "react";
import "./MainScreen.css"
import MainScreenTextComponent from "./MainScreenTextComponent";


function MainScreen(props) {
    
 
    
  return (
    <div className="main-screen-contianer-div">
    <div className="main-screen-grid">
     <div className="upper-grid-screen">
        <MainScreenTextComponent text={props.saturationInBlood}></MainScreenTextComponent>
     </div>
     <div className="bottom-grid-screen">
     <MainScreenTextComponent text={props.heartBeat}></MainScreenTextComponent>
     </div>
    </div>
  </div>
  );

}


export default MainScreen;
