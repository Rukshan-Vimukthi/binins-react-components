import {type Meta, StoryObj} from "@storybook/react-vite";
import Footer from "./Footer";
import "./Footer.css";


const sectionMeta: Meta<typeof Footer.Section> = {
    title: "Layout/FooterSection",
    component: Footer.Section,
    tags: ['autodocs'],
    parameters: {
        layout: "fullscreen"
    }
}

export default sectionMeta;

type FooterSectionStory = StoryObj<typeof sectionMeta>;

export const Default: FooterSectionStory = {
    args: {
        title: "Section Title",
        links: [
            {text: "Link 1", url: "#"}
        ]
    }
}