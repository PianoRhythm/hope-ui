import{a2 as A,o as z,c as e,d as s,Q as v,U as m,N as r,C as t,b3 as h,b4 as d,b5 as n,b6 as a,h as p,F as g,af as y,r as V,aE as T,b as U,t as b,b7 as F,n as _}from"./index.68a83398.js";import{C as $}from"./CodeSnippet.dcbd435f.js";import{P as Y,a as E}from"./PageTitle.32c0d196.js";import{P as o}from"./Preview.69e3d182.js";import{P as w}from"./PropsTable.3ee1b950.js";import{S as l}from"./SectionSubtitle.826cc245.js";import{S as u}from"./SectionTitle.6fcae084.js";import"./Footer.58752801.js";const W=`import { 
  Tabs, 
  TabList, 
  Tab,
  TabPanel
} from "@hope-ui/solid"`,j=`<Tabs>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>
  <TabPanel>1</TabPanel>
  <TabPanel>2</TabPanel>
  <TabPanel>3</TabPanel>
</Tabs>`,R=`<VStack alignItems="stretch" spacing="$4">
  <For each={
    ["primary", "accent", "neutral", "success", "info", "warning", "danger"]
  }>
    {colorScheme => (
      <Tabs colorScheme={colorScheme}>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
      </Tabs>
    )}
  </For>
</VStack>`,B=`<VStack alignItems="stretch" spacing="$4">
  <For each={["sm", "md", "lg"]}>
    {size => (
      <Tabs size={size}>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
      </Tabs>
    )}
  </For>
</VStack>`,D=`<VStack alignItems="stretch" spacing="$4">
  <For each={["underline", "outline", "cards", "pills"]}>
    {variant => (
      <Tabs variant={variant}>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
      </Tabs>
    )}
  </For>
</VStack>`,K=`<VStack alignItems="stretch" spacing="$4">
  <For each={["start", "center", "apart", "end"]}>
    {alignment => (
      <Tabs alignment={alignment}>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
      </Tabs>
    )}
  </For>
</VStack>`,M=`<Tabs orientation="vertical">
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>
  <TabPanel>1</TabPanel>
  <TabPanel>2</TabPanel>
  <TabPanel>3</TabPanel>
</Tabs>`,N=`<Tabs fitted>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>
  <TabPanel>1</TabPanel>
  <TabPanel>2</TabPanel>
  <TabPanel>3</TabPanel>
</Tabs>`,Q=`<Tabs>
  <TabList>
    <Tab>One</Tab>
    <Tab disabled>Two</Tab>
    <Tab>Three</Tab>
  </TabList>
  <TabPanel>1</TabPanel>
  <TabPanel>2</TabPanel>
  <TabPanel>3</TabPanel>
</Tabs>`,H=`<Tabs defaultIndex={1}>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>
  <TabPanel>1</TabPanel>
  <TabPanel>2</TabPanel>
  <TabPanel>3</TabPanel>
</Tabs>`,G=`<VStack alignItems="stretch" spacing="$4">
  <Tabs>
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
      <Tab>Three</Tab>
    </TabList>
    <TabPanel>
      <Input placeholder="Try typing, I lose my value when switching tabs" />
    </TabPanel>
    <TabPanel>2</TabPanel>
    <TabPanel>3</TabPanel>
  </Tabs>
  <Tabs keepAlive>
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
      <Tab>Three</Tab>
    </TabList>
    <TabPanel>
      <Input placeholder="Try typing, I stay alive when switching tabs" />
    </TabPanel>
    <TabPanel>2</TabPanel>
    <TabPanel>3</TabPanel>
  </Tabs>
</VStack>`,J=`function ControlledExample() {
  const [tabIndex, setTabIndex] = createSignal(0);

  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <>
      <input 
        type="range" 
        min="0" 
        max="2" 
        value={tabIndex()} 
        onInput={handleSliderChange} 
      />
      <Tabs index={tabIndex()} onChange={handleTabsChange}>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanel>
          <p>Click the tabs or pull the slider around</p>
        </TabPanel>
        <TabPanel>
          <p>Yeah yeah. What's up?</p>
        </TabPanel>
        <TabPanel>
          <p>Oh, hello there.</p>
        </TabPanel>
      </Tabs>
    </>
  )
}`,Z=`const config: HopeThemeConfig = {
  components: {
    Tabs: {
      baseStyle: {
        root: SystemStyleObject,
        tabList: SystemStyleObject,
        tab: SystemStyleObject,
        tabPanel: SystemStyleObject,
      },
      defaultProps: {
        root: ThemeableTabsOptions
      }
    }
  }
}`,c={importComponent:W,basicUsage:j,colors:R,sizes:B,variants:D,aligments:K,orientation:M,fitted:N,disabled:Q,initialActive:H,keepAlive:G,controlled:J,theming:Z};var q=b("<strong>Tabs:"),X=b("<strong>TabList:"),ee=b("<strong>Tab:"),te=b("<strong>TabPanel:"),ne=b("<input type=range min=0 max=2>"),ae=b("<p>Click the tabs or pull the slider around"),re=b("<p>Yeah yeah. What's up?"),ie=b("<p>Oh, hello there.");function pe(){const[f,P]=A(0),I=i=>{P(parseInt(i.target.value,10))},x=i=>{P(i)},k={href:"/docs/navigation/breadcrumb",label:"Breadcrumb"},L={href:"/docs/feedback/alert",label:"Alert"},S=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#colors",label:"Tabs colors",indent:!0},{href:"#sizes",label:"Tabs sizes",indent:!0},{href:"#variants",label:"Tabs variants",indent:!0},{href:"#aligments",label:"Tabs aligments",indent:!0},{href:"#orientation",label:"Tabs orientation",indent:!0},{href:"#fitted-tabs",label:"Fitted tabs",indent:!0},{href:"#disabled-tab",label:"Disabled tab",indent:!0},{href:"#initial-active-tab",label:"Make a tab initially active",indent:!0},{href:"#keep-alive",label:"Keeping tab panels alive",indent:!0},{href:"#controlled-tabs",label:"Controlled tabs",indent:!0},{href:"#accessibility",label:"Accessibility"},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"},{href:"#tabs-props",label:"Tabs props",indent:!0},{href:"#tab-props",label:"Tab props",indent:!0},{href:"#other-components-props",label:"Other components props",indent:!0}],O=[{name:"variant",description:"The visual style of the tabs.",type:'"underline" | "outline" | "cards" | "pills"',defaultValue:'"underline"'},{name:"colorScheme",description:"The color of the tabs.",type:'"primary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger"',defaultValue:'"primary"'},{name:"size",description:"The size of the tabs.",type:'"sm" | "md" | "lg"',defaultValue:'"md"'},{name:"alignment",description:"The alignment of the tabs.",type:'"start" | "center" | "apart" |\xA0"end"',defaultValue:'"start"'},{name:"orientation",description:"The orientation of the tabs.",type:'"horizontal" | "vertical"',defaultValue:'"horizontal"'},{name:"fitted",description:"If `true`, the tabs will stretch to fit the container.",type:"boolean",defaultValue:"false"},{name:"keepAlive",description:"If `true`, the content of inactive tab panels stays mounted when unselected.",type:"boolean",defaultValue:"false"},{name:"index",description:"The index of the selected tab (in controlled mode).",type:"number"},{name:"defaultIndex",description:"The initial index of the selected tab (in uncontrolled mode).",type:"number",defaultValue:"0"},{name:"id",description:"The id of the tabs component.",type:"string"},{name:"onChange",description:"Callback invoked when the tabs index changes (in controlled or un-controlled modes).",type:"(index: number) => void"}],C=[{name:"id",description:"The `id` of the tab.",type:"string"},{name:"panelId",description:"The `id` of the tab panel associated to this tab.",type:"string"},{name:"disabled",description:"If `true`, the tab will be disabled.",type:"boolean"}];return z(()=>{_.highlightAll()}),e(E,{previousLink:k,nextLink:L,contextualNavLinks:S,get children(){return[e(Y,{children:"Tabs"}),e(s,{mb:"$5",get children(){return["An accessible tabs component that provides keyboard interactions and ARIA attributes described in the"," ",e(v,{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel",external:!0,color:"$primary11",fontWeight:"$semibold",children:"WAI-ARIA Tabs"})," ","design pattern."]}}),e(u,{id:"import",children:"Import"}),e($,{get snippet(){return c.importComponent},mb:"$6"}),e(m,{spacing:"$2",mb:"$12",get children(){return[e(r,{get children(){return[q()," Provides context for all its children."]}}),e(r,{get children(){return[X()," Wrapper for the ",e(t,{children:"Tab"})," components."]}}),e(r,{get children(){return[ee()," Element that serves as a label for one of the tab panels and can be activated to display that panel."]}}),e(r,{get children(){return[te()," Element that contains the content associated with a tab."]}})]}}),e(u,{id:"usage",children:"Usage"}),e(s,{mb:"$5"}),e(o,{get snippet(){return c.basicUsage},mb:"$10",get children(){return e(h,{get children(){return[e(d,{get children(){return[e(n,{children:"One"}),e(n,{children:"Two"}),e(n,{children:"Three"})]}}),e(a,{children:"1"}),e(a,{children:"2"}),e(a,{children:"3"})]}})}}),e(l,{id:"colors",children:"Tabs colors"}),e(s,{mb:"$5",get children(){return["Use the ",e(t,{children:"colorScheme"})," prop to change the color of the Tabs. You can set the value to ",e(t,{children:"primary"}),", ",e(t,{children:"accent"}),", ",e(t,{children:"neutral"}),", ",e(t,{children:"success"}),","," ",e(t,{children:"info"}),", ",e(t,{children:"warning"})," or ",e(t,{children:"danger"}),"."]}}),e(o,{get snippet(){return c.colors},mb:"$10",get children(){return e(p,{alignItems:"stretch",spacing:"$4",get children(){return e(g,{each:["primary","accent","neutral","success","info","warning","danger"],children:i=>e(h,{colorScheme:i,get children(){return[e(d,{get children(){return[e(n,{children:"One"}),e(n,{children:"Two"}),e(n,{children:"Three"})]}}),e(a,{children:"1"}),e(a,{children:"2"}),e(a,{children:"3"})]}})})}})}}),e(l,{id:"sizes",children:"Tabs sizes"}),e(s,{mb:"$5",get children(){return["Use the ",e(t,{children:"size"})," prop to change the size of the Tabs. You can set the value to"," ",e(t,{children:"sm"}),", ",e(t,{children:"md"})," or ",e(t,{children:"lg"}),"."]}}),e(o,{get snippet(){return c.sizes},mb:"$10",get children(){return e(p,{alignItems:"stretch",spacing:"$4",get children(){return e(g,{each:["sm","md","lg"],children:i=>e(h,{size:i,get children(){return[e(d,{get children(){return[e(n,{children:"One"}),e(n,{children:"Two"}),e(n,{children:"Three"})]}}),e(a,{children:"1"}),e(a,{children:"2"}),e(a,{children:"3"})]}})})}})}}),e(l,{id:"variants",children:"Tabs variants"}),e(s,{mb:"$5",get children(){return["Use the ",e(t,{children:"variant"})," prop to change the visual style of the Tabs. You can set the value to ",e(t,{children:"underline"}),", ",e(t,{children:"outline"}),", ",e(t,{children:"cards"})," or"," ",e(t,{children:"pills"}),"."]}}),e(o,{get snippet(){return c.variants},mb:"$10",get children(){return e(p,{alignItems:"stretch",spacing:"$4",get children(){return e(g,{each:["underline","outline","cards","pills"],children:i=>e(h,{variant:i,get children(){return[e(d,{get children(){return[e(n,{children:"One"}),e(n,{children:"Two"}),e(n,{children:"Three"})]}}),e(a,{children:"1"}),e(a,{children:"2"}),e(a,{children:"3"})]}})})}})}}),e(l,{id:"aligments",children:"Tabs aligments"}),e(s,{mb:"$5",get children(){return["Use the ",e(t,{children:"aligment"})," prop to change the alignment of the ",e(t,{children:"TabList"}),". You can set the value to ",e(t,{children:"start"}),", ",e(t,{children:"center"}),", ",e(t,{children:"apart"})," or"," ",e(t,{children:"end"}),"."]}}),e(o,{get snippet(){return c.aligments},mb:"$10",get children(){return e(p,{alignItems:"stretch",spacing:"$4",get children(){return e(g,{each:["start","center","apart","end"],children:i=>e(h,{alignment:i,get children(){return[e(d,{get children(){return[e(n,{children:"One"}),e(n,{children:"Two"}),e(n,{children:"Three"})]}}),e(a,{children:"1"}),e(a,{children:"2"}),e(a,{children:"3"})]}})})}})}}),e(l,{id:"orientation",children:"Tabs orientation"}),e(s,{mb:"$5",get children(){return["Use the ",e(t,{children:"orientation"})," prop to change the orientation of the Tabs. You can set the value to ",e(t,{children:"horizontal"})," or ",e(t,{children:"vertical"}),"."]}}),e(o,{get snippet(){return c.orientation},mb:"$10",get children(){return e(h,{orientation:"vertical",get children(){return[e(d,{get children(){return[e(n,{children:"One"}),e(n,{children:"Two"}),e(n,{children:"Three"})]}}),e(a,{children:"1"}),e(a,{children:"2"}),e(a,{children:"3"})]}})}}),e(l,{id:"fitted-tabs",children:"Fitted tabs"}),e(s,{mb:"$5",get children(){return["Use the ",e(t,{children:"fitted"})," prop to stretch the tab list to fit the container."]}}),e(o,{get snippet(){return c.fitted},mb:"$10",get children(){return e(h,{fitted:!0,get children(){return[e(d,{get children(){return[e(n,{children:"One"}),e(n,{children:"Two"}),e(n,{children:"Three"})]}}),e(a,{children:"1"}),e(a,{children:"2"}),e(a,{children:"3"})]}})}}),e(l,{id:"disabled-tab",children:"Disabled tab"}),e(s,{mb:"$5",get children(){return["Use the ",e(t,{children:"disabled"})," prop to disabled a ",e(t,{children:"Tab"}),". When a ",e(t,{children:"Tab"})," ","is disabled, it is skipped during keyboard navigation and it is not clickable."]}}),e(o,{get snippet(){return c.disabled},mb:"$10",get children(){return e(h,{get children(){return[e(d,{get children(){return[e(n,{children:"One"}),e(n,{disabled:!0,children:"Two"}),e(n,{children:"Three"})]}}),e(a,{children:"1"}),e(a,{children:"2"}),e(a,{children:"3"})]}})}}),e(l,{id:"initial-active-tab",children:"Make a tab initially active"}),e(s,{mb:"$5",get children(){return["Use the ",e(t,{children:"defaultIndex"})," prop to set a ",e(t,{children:"Tab"})," initially active. Indexes start at 0."]}}),e(o,{get snippet(){return c.initialActive},mb:"$10",get children(){return e(h,{defaultIndex:1,get children(){return[e(d,{get children(){return[e(n,{children:"One"}),e(n,{children:"Two"}),e(n,{children:"Three"})]}}),e(a,{children:"1"}),e(a,{children:"2"}),e(a,{children:"3"})]}})}}),e(l,{id:"keep-alive",children:"Keeping tab panels alive"}),e(s,{mb:"$5",get children(){return["By default, when you switch between tabs the state of the tab panels are lost, use the"," ",e(t,{children:"keepAlive"})," prop to keep tab panels alive even when there's not visible."]}}),e(o,{get snippet(){return c.keepAlive},mb:"$10",get children(){return e(p,{alignItems:"stretch",spacing:"$4",get children(){return[e(h,{get children(){return[e(d,{get children(){return[e(n,{children:"One"}),e(n,{children:"Two"}),e(n,{children:"Three"})]}}),e(a,{get children(){return e(y,{placeholder:"Try typing, I lose my value when switching tabs"})}}),e(a,{children:"2"}),e(a,{children:"3"})]}}),e(h,{keepAlive:!0,get children(){return[e(d,{get children(){return[e(n,{children:"One"}),e(n,{children:"Two"}),e(n,{children:"Three"})]}}),e(a,{get children(){return e(y,{placeholder:"Try typing, I stay alive when switching tabs"})}}),e(a,{children:"2"}),e(a,{children:"3"})]}})]}})}}),e(l,{id:"controlled-tabs",children:"Controlled tabs"}),e(s,{mb:"$5",get children(){return["Use the ",e(t,{children:"index"})," and ",e(t,{children:"onChange"})," props to control the ",e(t,{children:"Tabs"})," ","like form inputs."]}}),e(o,{get snippet(){return c.controlled},mb:"$12",get children(){return[(()=>{var i=ne();return i.$$input=I,V(()=>i.value=f()),i})(),e(h,{get index(){return f()},onChange:x,get children(){return[e(d,{get children(){return[e(n,{children:"One"}),e(n,{children:"Two"}),e(n,{children:"Three"})]}}),e(a,{get children(){return ae()}}),e(a,{get children(){return re()}}),e(a,{get children(){return ie()}})]}})]}}),e(u,{id:"accessibility",children:"Accessibility"}),e(l,{children:"ARIA roles and attributes"}),e(m,{spacing:"$2",mb:"$8",get children(){return[e(r,{get children(){return[e(t,{children:"TabList"})," as ",e(t,{children:"role"})," set to ",e(t,{children:"tablist"}),"."]}}),e(r,{get children(){return[e(t,{children:"TabList"})," as ",e(t,{children:"aria-orientation"})," set to ",e(t,{children:"horizontal"})," or"," ",e(t,{children:"vertical"})," based on the value of the ",e(t,{children:"orientation"})," prop."]}}),e(r,{get children(){return[e(t,{children:"Tab"})," as ",e(t,{children:"role"})," set to ",e(t,{children:"tab"}),"."]}}),e(r,{get children(){return[e(t,{children:"Tab"})," as ",e(t,{children:"aria-selected"})," set to ",e(t,{children:"true"})," when its selected."]}}),e(r,{get children(){return[e(t,{children:"Tab"})," as ",e(t,{children:"aria-controls"})," set to the ",e(t,{children:"id"})," of its associated ",e(t,{children:"TabPanel"}),"."]}}),e(r,{get children(){return[e(t,{children:"TabPanel"})," as ",e(t,{children:"role"})," set to ",e(t,{children:"tabpanel"}),"."]}}),e(r,{get children(){return[e(t,{children:"TabPanel"})," as ",e(t,{children:"aria-labelledby"})," set to the ",e(t,{children:"id"})," of the"," ",e(t,{children:"Tab"})," that labels it."]}})]}}),e(l,{children:"Keyboard support"}),e(m,{spacing:"$2",mb:"$12",get children(){return[e(r,{get children(){return[e(T,{children:"\u2190"})," moves focus to the previous tab (in horizontal orientation)."]}}),e(r,{get children(){return[e(T,{children:"\u2192"})," moves focus to the next tab (in horizontal orientation)."]}}),e(r,{get children(){return[e(T,{children:"\u2191"})," moves focus to the previous tab (in vertical orientation)."]}}),e(r,{get children(){return[e(T,{children:"\u2193"})," moves focus to the next tab (in vertical orientation)."]}}),e(r,{get children(){return[e(T,{children:"home"})," moves focus to the first tab."]}}),e(r,{get children(){return[e(T,{children:"end"})," moves focus to the last tab."]}}),e(r,{get children(){return[e(T,{children:"tab"})," when focus moves into the tab list, places focus on the active tab element."]}})]}}),e(u,{id:"theming",children:"Theming"}),e(s,{mb:"$5",get children(){return[e(t,{children:"Tabs"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e($,{lang:"js",get snippet(){return c.theming},mb:"$12"}),e(u,{id:"props",children:"Props"}),e(l,{id:"tabs-props",children:"Tabs props"}),e(w,{items:O,mb:"$10"}),e(l,{id:"tab-props",children:"Tab props"}),e(w,{items:C,mb:"$10"}),e(l,{id:"other-components-props",children:"Other components props"}),e(s,{get children(){return[e(t,{children:"TabList"}),", ",e(t,{children:"TabPanels"})," and ",e(t,{children:"TabPanel"})," composes"," ",e(v,{as:U,href:"/docs/layout/box",external:!0,color:"$primary11",fontWeight:"$semibold",children:"Box"}),"."]}})]}})}F(["input"]);export{pe as default};
