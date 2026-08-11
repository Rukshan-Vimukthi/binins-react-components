import {type Meta, StoryObj} from "@storybook/react-vite";
import {AddOnCard} from "./AddOnCard";

const meta: Meta<typeof AddOnCard> = {
    title: "Cards/AddOnCard",
    component: AddOnCard,
    tags: ['autodocs'],
    // parameters: {
    //     layout: "fullscreen"
    // }
}

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
    args: {
        title: "Add-On Name",
        price: "$55"
    }
}