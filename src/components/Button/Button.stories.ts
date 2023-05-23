import { StoryObj, Meta } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Botona",
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
