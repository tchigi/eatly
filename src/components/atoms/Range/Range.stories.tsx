import Range from "./Range.tsx"
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Range> = {
    component: Range,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        value: 80
    }
}

export const Red: Story = {
    args: {
        value: 20
    }
}

export const Yellow: Story = {
    args: {
        value: 40
    }
}