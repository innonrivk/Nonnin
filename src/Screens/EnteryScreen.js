import React from "react";
import "./EnteryScreen.css"
import NoninLogo from "../Assets/Components/EntryScreenCopmponents/NoninLogo";
import SimulationBtn from "../Assets/Components/EntryScreenCopmponents/SimulationBtn";
import InfoBtn from "../Assets/Components/EntryScreenCopmponents/InfoBtn";

function EnteryScreen() {


    return (
        <div className="home-screen-frame">
            <div className="logo-div">
            <NoninLogo></NoninLogo>
            </div>

            <div className="simulation-btn-div">
            <SimulationBtn></SimulationBtn>
            </div>
            <div className="info-btn-div">
                <InfoBtn></InfoBtn>
            </div>

        </div>
    );

}

export default EnteryScreen;
