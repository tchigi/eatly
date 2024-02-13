import OrderStatus from "./OrderStatus.tsx"
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof OrderStatus> = {
    component: OrderStatus,
    argTypes: {
        status: {
            control: {type: "radio"},
            options: ["Delivered", "On The Way", "Cancelled"]
        },
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        status: "On The Way",
    },
}
export const Cancelled: Story = {
    args: {
        status: "Cancelled",
    },
}