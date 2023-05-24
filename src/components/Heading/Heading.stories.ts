import { StoryObj, Meta } from "@storybook/react";

import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const Primary: Story = {
  args: {
    title: "I am the big jacked title",
    subtitle: "I am the skinny little subtitle",
  },
};
