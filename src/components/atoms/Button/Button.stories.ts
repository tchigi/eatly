import Button from "./Button.tsx"
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof Button> = {
    component: Button,
    argTypes: {
        theme: {
            control: {type: "radio"},
            options: ["primary", "inverted"]
        },
        iconType: {
            control: {type: 'select'},
            options: ["arrowRight", "none"]
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        label: "Button",
        theme: "primary",
    },
}
export const Inverted: Story = {
    args: {
        label: "Button",
        theme: "inverted",
    },
}

export const withIcon: Story = {
    args: {
        label: "Button",
        theme: "primary",
        iconType: "arrowRight"
    },
}