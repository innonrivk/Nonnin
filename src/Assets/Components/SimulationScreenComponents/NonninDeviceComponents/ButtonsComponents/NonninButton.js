import React from "react";
import "./NonninButton.css"

function NonninButton(props) {
   
  function clickHandle(){
    props.setPressedBtn(props.buttonName)
  }  

    return (
      <div className="container-button">
          <button className="button-nonin" onClick={clickHandle}>
                <img alt={`${props.buttonName}`} className="nonnin-button-image" src={props.imageSource}></img>
            </button>
      </div>
    );

}

export default NonninButton;
