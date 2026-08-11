import {type Meta, StoryObj} from "@storybook/react-vite";
import Footer from "./Footer";
import "./Footer.css";

const meta = {
    title: "Layout/Footer",
    component: Footer,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen"
    }
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        brandName: "Brand",
        brandHighlight: "Brand Highlight",
        copyrightText: "Company",
        brandDescription: "The brand description goes here",
        sections: [
            {
                title: "Section Title", 
                links: [
                    {text: "Link 1", url: "#"}
                ]}
        ]
    }
}

export const Compound: Story = {
    render: (args) => {
        return (
            <Footer {...args}>

                <Footer.Section 
                    title="Section Title"
                    links={[
                        {text: "Link 1", url: "#"}
                    ]}
                />

            </Footer>
        )
    },

    args: {
        brandName: "Brand",
        brandHighlight: "Brand Highlight",
        copyrightText: "Company",
        brandDescription: "The brand description goes here"
    }
}