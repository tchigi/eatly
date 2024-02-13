import type { Meta, StoryObj } from '@storybook/react';

import  Badge  from './Badge.tsx';

const meta: Meta<typeof Badge> = {
    component: Badge,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        label: "Badge",
    }
}


