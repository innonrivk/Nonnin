import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./InputField.css"

function InputField(props) {
    const [text, setText] = useState("")

    function handleInput(event) {
        setText(event.target.value)
        props.setInput(parseInt(event.target.value))
    }
    return (
        <div className="container-input">
            <div className="input-div" >
                <input  className="input" type="number" value={text}
                    onChange={handleInput}>
                </input>
                <a className="input-text">:{props.text}</a>
            </div>
        </div>
    );

}

export default InputField;
