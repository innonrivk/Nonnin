import React from "react";

import NoninFragment from "./Fragments/NoninFrag/NoninFragment.js";
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
