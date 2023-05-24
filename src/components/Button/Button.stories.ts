import { StoryObj, Meta } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,

  args: {
    label: "Button",
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Hover: Story = {
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["products", "repair", "shop"],
    },
    active: { table: { disable: true } }, // Disable the control for Hover story
  },
};

export const Nav: Story = {
  argTypes: {
    icon: {
      control: "inline-radio",
      options: ["cart", "wish"],
    },
    active: { table: { disable: true } }, // Disable the control for Hover story
  },
  args: {
    icon: "cart",
    variant: "nav",
  },
};

export const Click: Story = {
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["category", "size", "color"],
    },
    active: { control: "boolean" }, // Enable the control for Click story
  },
  args: {
    variant: "category",
    active: false,
  },
};
