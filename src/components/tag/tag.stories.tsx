import { action } from "@storybook/addon-actions";

import { TagCloseButton } from "@/components/tag/tag-close-button";
import { HopeWrapper } from "@/utils/storybook";

import { IconInfoCircle } from "../icons/IconInfoCircle";
import { HStack } from "../stack/stack";
import { Tag } from "./tag";
import { TagLeftIcon, TagRightIcon } from "./tag-icon";
import { TagLabel } from "./tag-label";

export default {
  title: "Data display/Tag",
  component: Tag,
  parameters: { layout: "centered" },
  decorators: [
    (Story: any) => (
      <HopeWrapper>
        <Story />
      </HopeWrapper>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "subtle", "outline", "dot"],
    },
    colorScheme: {
      control: { type: "select" },
      options: ["primary", "neutral", "success", "info", "warning", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    children: {
      control: "text",
    },
  },
  args: {
    variant: "subtle",
    colorScheme: "primary",
    size: "sm",
    children: "Tag",
  },
};

export const Default = (args: any) => <Tag {...args} />;

export const WithIcon = (args: any) => (
  <HStack spacing="$4">
    <Tag {...args}>
      <TagLeftIcon as={IconInfoCircle} />
      <TagLabel>Tag</TagLabel>
    </Tag>
    <Tag {...args}>
      <TagLabel>Tag</TagLabel>
      <TagRightIcon as={IconInfoCircle} />
    </Tag>
  </HStack>
);
WithIcon.storyName = "With icon";

export const WithCloseButton = (args: any) => (
  <Tag {...args}>
    <TagLabel>Tag</TagLabel>
    <TagCloseButton onClick={action("clicked close button")} />
  </Tag>
);
WithCloseButton.storyName = "With close button";
WithCloseButton.args = { children: "Close" };