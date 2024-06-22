import { action } from "@storybook/addon-actions";
import { For, JSX } from "solid-js";

import { HopeWrapper } from "../storybook-utils";
import { Button } from "./button";
import { Box } from "../box";
import { VStack } from "../stack";
import { CloseButton } from "../close-button";
import { Select, SelectTrigger, SelectPlaceholder, SelectValue, SelectIcon, SelectContent, SelectListbox, SelectOption, SelectOptionText, SelectOptionIndicator } from "../select";

function IconCart(props: JSX.SvgSVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g fill="none">
        <path
          d="M3 1a1 1 0 0 0 0 2h1.22l.305 1.222a.997.997 0 0 0 .01.042l1.358 5.43l-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 0 0 0-2H6.414l1-1H14a1 1 0 0 0 .894-.553l3-6A1 1 0 0 0 17 3H6.28l-.31-1.243A1 1 0 0 0 5 1H3z"
          fill="currentColor"
        ></path>
        <path d="M16 16.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z" fill="currentColor"></path>
        <path d="M6.5 18a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3z" fill="currentColor"></path>
      </g>
    </svg>
  );
}

export default {
  title: "General/Button",
  component: Button,
  parameters: { layout: "centered" },
  decorators: [
    (Story: any) => (
      <HopeWrapper>
        <div style={{ display: "flex", "justify-content": "center", width: "90vw" }}>
          <Story />
        </div>
      </HopeWrapper>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "subtle", "outline", "dashed", "ghost"],
    },
    colorScheme: {
      control: { type: "select" },
      options: ["primary", "neutral", "success", "info", "warning", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    loaderPlacement: {
      control: { type: "inline-radio" },
      options: ["start", "end"],
    },
    compact: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    loadingText: {
      control: "text",
    },
    children: {
      control: "text",
    },
  },
  args: {
    variant: "solid",
    colorScheme: "primary",
    size: "md",
    loaderPlacement: "start",
    compact: false,
    fullWidth: false,
    loading: false,
    disabled: false,
    loadingText: "",
    children: "Button",
  },
};

export const Default = (args: any) =>
  <>
    <Box w="100vw" h="1000px" background={"lightblue"}>
      <Select>
        <SelectTrigger
          w="200px"
          position={"absolute"}
          top={40}
          left={200}
        >
          <SelectPlaceholder>Choose a framework</SelectPlaceholder>
          <SelectValue />
          <SelectIcon />
        </SelectTrigger>
        <SelectContent>
          <SelectListbox>
            <For each={["React", "Angular", "Vue", "Svelte", "Solid"]}>
              {item => (
                <SelectOption value={item}>
                  <SelectOptionText>{item}</SelectOptionText>
                  <SelectOptionIndicator />
                </SelectOption>
              )}
            </For>
          </SelectListbox>
        </SelectContent>
      </Select>
      <VStack spacing={"$1"}>
        <Button>Hello1</Button>
        <Button>Hello1</Button>
        <Button>Hello1</Button>
        <CloseButton />
        <Button
          __tooltip_title={<VStack>
            <Box>hello world!</Box>
            <Box>hello world!</Box>
            <Box>hello world!</Box>
            <Box>hello world!</Box>
          </VStack>}
          __tooltip_placement="left"
          __tooltip_open_delay={500}
          {...args} onClick={action("clicked")} />
        <Button>Hello1</Button>
        <Button>Hello1</Button>
        <Button>Hello1</Button>
      </VStack>
    </Box>
  </>
  ;

export const WithLeftIcon = (args: any) => (
  <Button leftIcon={<IconCart />} onClick={action("clicked")} {...args} />
);
WithLeftIcon.storyName = "With left icon";

export const WithRightIcon = (args: any) => (
  <Button rightIcon={<IconCart />} onClick={action("clicked")} {...args} />
);
WithRightIcon.storyName = "With right icon";
