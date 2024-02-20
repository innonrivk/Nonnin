import React from "react";
import { useNavigate , Link } from "react-router-dom";
import NoninTextLogoImg from "../../res/Images/EnteryScreen/NoninTextLogo.svg"
import NoninLogoImg from "../../res/Images/EnteryScreen/NoninLogo.svg"
import "./NoninLogo.css"

function NoninLogo(props) {

    return (
        <div>
        <img  className="nonin-white-text-logo" src={NoninTextLogoImg} alt="NoninTextLogo"/>
        <img  className="nonin-logo" src={NoninLogoImg} alt="NoninLogo"/>
         </div>
    );

}

export default NoninLogo;
            