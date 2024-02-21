import React from "react";
import { useNavigate } from "react-router-dom";
import "./InfoBtn.css"

function InfoBtn(props) {
    const navigate = useNavigate()

    return (
        <div >
            <button onClick={() =>  navigate("/infoscreen")} className="info-btn">הוראות שימוש</button>
        </div>
    );

}

export default InfoBtn;
