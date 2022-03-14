import React from "react";
import styled from "styled-components";
import Input from "./index";

const InputContainer = styled("div")`
  height:36px;
  display:flex;
  
`;

const SpanWrap = styled('span')`
  transform: scale(.83333) translateY(-10px);
`;

const InputWrap = styled('input')`
`;



export interface IBasicInput {
    text: string
    placeholder: string
    changeText: () => void
}

const BasicInput = ({text, placeholder, changeText}: IBasicInput) => {
    return (
        <InputContainer>
            <label>
                <SpanWrap>{placeholder}</SpanWrap>
                <InputWrap value={text}  onChange={changeText}/>
            </label>
        </InputContainer>
    );
}

export default BasicInput;