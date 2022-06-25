import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter, Routes } from "react-router-dom";
import Card from "./";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <BrowserRouter>
    <Card {...args} />
    <Routes></Routes>
  </BrowserRouter>
);

export const Primary = Template.bind({});

Primary.args = {
  title: "Naruto",
  onClick: () => console.log("clicked"),
  image:
    "https://img1.ak.crunchyroll.com/i/spire4/5568ffb263f6bcba85a639980b80dd9a1612993223_full.jpg",
};
