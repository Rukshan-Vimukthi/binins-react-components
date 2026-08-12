import {type Meta, StoryObj} from "@storybook/react-vite";
import { Rating } from ".";

const meta: Meta<typeof Rating> = {
    title: "controls/Rating",
    component: Rating,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    }
}

export default meta;

type RatingStory = StoryObj<typeof meta>;

export const Default: RatingStory = {
    args: {}
}

export const CustomText: RatingStory = {
    render: (args) => {
        return <Rating {...args}/>
    },

    args: {
        text: "Tell us about how was your experience?",
        onChange: (ratingLevel: number) => {console.log(ratingLevel)}
    }
}