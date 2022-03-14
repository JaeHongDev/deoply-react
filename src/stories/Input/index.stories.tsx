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
    }
}