import React, { useEffect, useState } from "react";
import "./Co2Screen.css"
import RedBlock from "../../../../res/Images/SimulationScreen/Noonin/redBlock.png"


function Co2Screen(props) {
  const [numberBlock, setNumberBlock] = useState([]);
  useEffect(() => {
      if (props.co2Level > 0 && props.co2Level <= 2){
        setNumberBlock( [0])
      }
      else if (props.co2Level > 2 && props.co2Level <= 6){
        setNumberBlock(Array.from(Array(2).keys()))
      }
      else if (props.co2Level > 6 && props.co2Level <= 10){
        setNumberBlock( Array.from(Array(3).keys()))
      }

      else if (props.co2Level > 10 && props.co2Level <= 20){
        setNumberBlock( Array.from(Array(4).keys()))
      }

      else if (props.co2Level > 20 && props.co2Level <= 30){
        setNumberBlock( Array.from(Array(5).keys()))
      }

      else if (props.co2Level > 30 && props.co2Level <= 50){
        setNumberBlock( Array.from(Array(6).keys()))
      }

      else if (props.co2Level > 50 && props.co2Level <= 75){
        setNumberBlock(  Array.from(Array(7).keys()))
      }

      else if (props.co2Level > 75 && props.co2Level <= 100){
        setNumberBlock( Array.from(Array(8).keys()))
      }
      else{
        setNumberBlock([])

      }

     


      
      

    }, [props.co2Level])

  useEffect(() => {

  })
  return (
    <div className="co2-contianer-div">
      <div className="co2-grid">
        {numberBlock.map((key, index) => (<div className={`block-${key}`} key={key}> <img src={RedBlock} className="block-image" alt="img"></img> </div>))}
      </div>
    </div>
  );

}


export default Co2Screen;
