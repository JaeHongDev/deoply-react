import React from "react";
import "./index.css";


export interface IBasicInput {
    text: string
    placeholder: string
    changeText: () => void
}

const BasicInput = ({text, placeholder, changeText}: IBasicInput) => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="input-data">
                    <input type="text" required onChange={changeText} value={text}/>
                    <label>{placeholder}</label>
                </div>
            </div>
        </div>
    );
}

export default BasicInput;