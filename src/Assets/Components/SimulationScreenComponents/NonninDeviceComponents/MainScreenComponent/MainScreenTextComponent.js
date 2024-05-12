import React from "react";
import "./MainScreenTextComponent.css"


function MainScreenTextComponent(props) {


  return (
    <div className="container-main-screen-text">
      <div className="main-screen-text">
        {props.text}
      </div>
    </div>
  );

}


export default MainScreenTextComponent;
