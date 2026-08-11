import {type Meta, StoryObj} from "@storybook/react-vite";
import {Header} from "./Header";

const meta: Meta<typeof Header> = {
    title: "Layout/Header",
    component: Header,
    tags: ['autodocs'],
    parameters: {
        layout: "fullscreen"
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        brandName: "Brand",
        highlight: "Brand Highlight",
        isFixed: true,
        items: [
            {text: "Home", URL: "#"},
            {text: "Pricing", URL: "#"},
            {text: "Contact", URL: "#"}
        ]
    }
}