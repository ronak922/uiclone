import type { Meta, StoryObj } from "@storybook/react";


import ServicesSection from "./services-section";

const meta: Meta<typeof ServicesSection> = {
  title: "Components/Sections/ServicesSection",
  component: ServicesSection,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ServicesSection>;

export const Default: Story = {
  args: {},
};