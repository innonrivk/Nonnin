import React from "react";
import returnBtnImage from "../res/Images/returnBtn.png"
import "./ReturnBtn.css"
import { useNavigate } from "react-router-dom";

function ReturnBtn(props) {
    const navigate = useNavigate()
    function clickHandle() {
      navigate("/")
    }
    
    return (
      <div>
            <button className="return-btn" onClick={clickHandle}>
                <img alt="Return" className="return-btn-image" src={returnBtnImage}></img>
            </button>
            </div>
    );

}

export default ReturnBtn;
