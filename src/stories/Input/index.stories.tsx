import React from "react";
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Input, {IBasicInput} from "../../component/Input";

export default {
    component: Input,
    title: 'custom Input'
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args: IBasicInput) => <Input {...args} />

export const Default = Template.bind({});

Default.args = {
    text: "",
    placeholder: "placeHolder",
    changeText: () => {
    },
    icon: null,
    highlightText: "비밀번호"
}

// 텍스박스 안에 버튼이 있는 경우
export const TextBoxInButton = Template.bind({});
TextBoxInButton.args ={
    text: "",
    placeholder: "텍스트박스 안에 버튼이 있는 경우",
    changeText: () => {
    },
    icon: null,
    highlightText: "버튼버튼"
}

export const TextBoxInIcon = Template.bind({});
TextBoxInIcon.args = {
    text: "",
    placeholder: "텍스트박스 안에 버튼이 있는 경우",
    changeText: () => {
    },
    icon: null,
    highlightText: "버튼버튼"
}