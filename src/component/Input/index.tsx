import React from "react";
import "./index.css";


export interface IBasicInput {
    text: string
    placeholder: string
    changeText: () => void
    icon:string | null
    highlightText:string | null
}

const BasicInput = ({text, placeholder, changeText,icon,highlightText}: IBasicInput) => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="input-data">
                    <label className={`input-label ${text.length === 0 ? 'caseDown' : 'caseUp'}`}>{placeholder}</label>
                    <div className={`input-wrap`}>
                        <input type="text" value={text}/>
                        <span>{highlightText}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BasicInput;