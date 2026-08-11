import {type Meta, StoryObj} from "@storybook/react-vite";
import { FAQCard } from "./FAQCard";

const meta: Meta<typeof FAQCard> = {
    title: "Cards/FAQCard",
    component: FAQCard,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen"
    }
}

export default meta;

type Story = StoryObj<typeof FAQCard>;
export const Default: Story = {
    args: {
        question: "question",
        answer: "answer",
        width: 30
    }
}