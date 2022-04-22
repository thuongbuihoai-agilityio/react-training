import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/button/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["success", "danger"],
      backgroundColor: { control: "color" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const Success = Template.bind({});
Success.args = {
  variant: false,
  children: "Success",
  label: "button"
};

const Danger = Template.bind({});
Danger.args = {
  variant: true,
  children: "Success",
  label: "button"
};

export { Success, Danger };
