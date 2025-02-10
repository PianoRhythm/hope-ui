import { HopeWrapper } from "../storybook-utils";
import { Tab } from "./tab";
import { TabPanel } from "./tab-panel";
import { Tabs } from "./tabs";
import { TabList } from "./tab-list";

export default {
  title: "Navigation/Tabs",
  component: Tabs,
  parameters: { layout: "centered" },
  decorators: [
    (Story: any) => (
      <HopeWrapper>
        <Story />
      </HopeWrapper>
    ),
  ],
};

export const Default = (args: any) => {
  return (
    <Tabs defaultIndex={0} {...args}>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>

      <TabPanel>Content 1</TabPanel>
      <TabPanel>Content 2</TabPanel>
      <TabPanel>Content 3</TabPanel>
    </Tabs>
  );
};