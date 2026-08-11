import {type Meta, StoryObj} from "@storybook/react-vite";
import Carousel from "./Carousel";
import { INITIAL_VIEWPORTS } from "storybook/viewport";


const carouselMeta: Meta<typeof Carousel> = {
  title: "Layout/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    viewport: {options: INITIAL_VIEWPORTS},
    layout: "fullscreen",
  },
};

export default carouselMeta;

type CarouselStory = StoryObj<typeof carouselMeta>;

export const Default: CarouselStory = {
    args: {
        items: ["Item 1", "Item 2"]
    }
}


export const CustomElements: CarouselStory = {
    args: {
        items: [
            <div style={{width: "100%", height: "200px", padding: "10px", borderRadius: "10px"}}>Item 1</div>,
            <div style={{width: "100%", height: "200px", padding: "10px", borderRadius: "10px"}}>Item 2</div>,
            <div style={{width: "100%", height: "200px", padding: "10px", borderRadius: "10px"}}>Item 3</div>
        ]
    }
}
