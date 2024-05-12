import React from "react";
import "./CablesFragmentt.css"
import GreyCableImage from "../../../Assets/res/Images/SimulationScreen/cables/greyCable.png"
import BlackCableImage from "../../../Assets/res/Images/SimulationScreen/cables/blackCable.png"
import GreyCableImagePressed from "../../../Assets/res/Images/SimulationScreen/cables/greyCablePressed.png"
import BlackCableImagePressed from "../../../Assets/res/Images/SimulationScreen/cables/blackCablePressed.png"
import GreyCable from "../../../Assets/Components/SimulationScreenComponents/CablesComponents/GreyCable";
function CablesFragment(props) {


    return (
        <div className="container-cable-fregments">
            <div className="container-cable-divs" style={{backgroundColor: ""}}>
          
                <div className="grey-cable">
                <GreyCable  cbFunction={props.setIsGreyCable} image={GreyCableImage} imagePressed={GreyCableImagePressed} ></GreyCable>
                </div>
                <div className="black-cable">
                <GreyCable  cbFunction={props.setIsBlackCable} image={BlackCableImage} imagePressed={BlackCableImagePressed} ></GreyCable>
                </div>
                
            </div>
            
        </div>
    );

}

export default CablesFragment;
