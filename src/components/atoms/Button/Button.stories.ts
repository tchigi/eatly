import Button from "./Button.tsx"
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        label: "Button",
    }
}