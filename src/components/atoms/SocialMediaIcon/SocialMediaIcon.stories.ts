import SocialMediaIcon from "./SocialMediaIcon.tsx"
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof SocialMediaIcon> = {
    component: SocialMediaIcon,
    argTypes: {
        id: {
            control: {type: "radio"},
            options: ["instagram", "linkedin", "facebook", "twitter"]
        },
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        id: "instagram",
    },
}
export const Linkedin: Story = {
    args: {
        id: "linkedin",
    },
}

export const Facebook: Story = {
    args: {
        id: "facebook",
    },
}

export const Twitter: Story = {
    args: {
        id: "twitter",
    },
}