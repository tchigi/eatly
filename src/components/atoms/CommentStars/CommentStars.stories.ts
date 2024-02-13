import CommentStars from "./CommentStars.tsx"
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommentStars> = {
    component: CommentStars,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        count: 1,
    }
}

export const FiveStar: Story = {
    args: {
        count: 5,
    }
}