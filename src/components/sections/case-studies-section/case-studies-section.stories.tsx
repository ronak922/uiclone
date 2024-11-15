import type { Meta, StoryObj } from "@storybook/react";
import CaseStudiesSection from "./case-studies-section";

const meta = {
  title: "Components/Sections/CaseStudiesSection",
  component: CaseStudiesSection,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof CaseStudiesSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
