import{o as g,i as f,a as e,T as l,k as a,A as w,bQ as t,e as o,V as T,H as p,F as y,t as B}from"./index.ae6bb42f.js";import{C as s}from"./CodeSnippet.efa60d35.js";import{P as S,a as k}from"./PageTitle.cd5064fe.js";import{P as r}from"./Preview.eeb17944.js";import{P as I}from"./PropsTable.d971dacf.js";import{S as c}from"./SectionSubtitle.23d2739c.js";import{S as i}from"./SectionTitle.94f12b47.js";import{I as h}from"./IconSearch.ef018580.js";import"./Footer.382a3b06.js";const $='import { Tooltip } from "@hope-ui/solid"',C=`<Tooltip label="Hey, I'm here!">
  <span>Hover me</span>
</Tooltip>`,x=`<Tooltip withArrow label="Search places">
  <IconSearch />
</Tooltip>`,v=`<Tooltip label="Search places">
  <Button>Button</Button>
</Tooltip>`,A=`<Tooltip disabled>
  <IconSearch />
</Tooltip>`,L=`<VStack spacing="$6">
  <HStack spacing="$6">
    <Tooltip label="Top start" placement="top-start">
      <Button>Top-Start</Button>
    </Tooltip>

    <Tooltip label="Top" placement="top">
      <Button>Top</Button>
    </Tooltip>

    <Tooltip label="Top end" placement="top-end">
      <Button>Top-End</Button>
    </Tooltip>
  </HStack>

  <HStack spacing="$6">
    <Tooltip label="Right start" placement="right-start">
      <Button>Right-Start</Button>
    </Tooltip>

    <Tooltip label="Right" placement="right">
      <Button>Right</Button>
    </Tooltip>

    <Tooltip label="Right end" placement="right-end">
      <Button>Right-End</Button>
    </Tooltip>
  </HStack>

  <HStack spacing="$6">
    <Tooltip label="Bottom start" placement="bottom-start">
      <Button>Bottom Start</Button>
    </Tooltip>

    <Tooltip label="Bottom" placement="bottom">
      <Button>Bottom</Button>
    </Tooltip>

    <Tooltip label="Bottom end" placement="bottom-end">
      <Button>Bottom End</Button>
    </Tooltip>
  </HStack>

  <HStack spacing="$6">
    <Tooltip label="Left start" placement="left-start">
      <Button>Left-Start</Button>
    </Tooltip>

    <Tooltip label="Left" placement="left">
      <Button>Left</Button>
    </Tooltip>

    <Tooltip label="Left end" placement="left-end">
      <Button>Left-End</Button>
    </Tooltip>
  </HStack>
</VStack>`,O=`<Flex wrap="wrap" gap="$6">
  <Tooltip label="I close on click">
    <Button>Close on Click - true(default)</Button>
  </Tooltip>

  <Tooltip label="I don't close on click" closeOnClick={false}>
    <Button>Close on Click - false</Button>
  </Tooltip>

  <Tooltip label="I am always open" placement="top" opened>
    <Button>Always Open</Button>
  </Tooltip>

  <Tooltip label="I am open by default" placement="left" defaultOpened>
    <Button>Open on startup</Button>
  </Tooltip>

  <Tooltip label="Opened after 500ms" openDelay={500}>
    <Button>Delay Open - 500ms</Button>
  </Tooltip>

  <Tooltip label="Closed after 500ms" closeDelay={500}>
    <Button>Delay Close - 500ms</Button>
  </Tooltip>

  <Tooltip label="I have 12px arrow" withArrow arrowSize={12}>
    <Button>Arrow size - 12px</Button>
  </Tooltip>
</Flex>`,P=`const config: HopeThemeConfig = {
  components: {
    Tooltip: {
      baseStyle: SystemStyleObject,
      defaultProps: ThemeableTooltipOptions
    }
  }
}`,n={importComponent:$,basicUsage:C,withArrow:x,withFocusableContent:v,disabled:A,placement:L,moreExamples:O,theming:P},D=B("<span>Hover me</span>");function N(){const d={href:"/docs/overlay/popover",label:"Popover"},u={href:"/docs/others/close-button",label:"CloseButton"},m=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#with-arrow",label:"Tooltip with arrow",indent:!0},{href:"#with-focusable-content",label:"Tooltip with focusable content",indent:!0},{href:"#disabled-tooltip",label:"Disabled tooltip",indent:!0},{href:"#placement",label:"Placement"},{href:"#more-examples",label:"More examples"},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"}],b=[{name:"opened",description:"If `true`, the tooltip will be shown (in controlled mode).",type:"boolean"},{name:"defaultOpened",description:"If `true`, the tooltip will be initially shown.",type:"boolean"},{name:"label",description:"The label of the tooltip.",type:"JSX.Element"},{name:"aria-label",description:"The accessible, human friendly label to use for screen readers. If passed, tooltip will show the content `label` but expose only `aria-label` to assistive technologies",type:"string"},{name:"id",description:"The id of the tooltip.",type:"string"},{name:"placement",description:"The placement of the tooltip relative to its reference.",type:"Placement",defaultValue:'"bottom"'},{name:"offset",description:"The offset between the tooltip and the reference (trigger) element.",type:"number",defaultValue:"8"},{name:"inline",description:"If `true`, apply @floating-ui/dom `inline` middleware. Useful for inline reference elements that span over multiple lines, such as hyperlinks or range selections.",type:"boolean"},{name:"disabled",description:"If `true`, the tooltip will not show.",type:"boolean"},{name:"withArrow",description:"If `true`, the tooltip will show an arrow tip.",type:"boolean",defaultValue:"false"},{name:"arrowSize",description:"Size of the arrow.",type:"number",defaultValue:"8"},{name:"arrowPadding",description:"The padding between the arrow and the edges of the tooltip.",type:"number",defaultValue:"8"},{name:"openDelay",description:"Delay (in ms) before showing the tooltip.",type:"number",defaultValue:"0"},{name:"closeDelay",description:"Delay (in ms) before hiding the tooltip.",type:"number",defaultValue:"0"},{name:"closeOnClick",description:"If `true`, the tooltip will hide on click.",type:"boolean",defaultValue:"true"},{name:"closeOnMouseDown",description:"If `true`, the tooltip will hide while the mouse is down.",type:"boolean",defaultValue:"false"},{name:"onOpen",description:"Callback to run when the tooltip shows.",type:"() => void"},{name:"onClose",description:"Callback to run when the tooltip hides.",type:"() => void"}];return g(()=>{f.highlightAll()}),e(k,{previousLink:d,nextLink:u,contextualNavLinks:m,get children(){return[e(S,{children:"Tooltip"}),e(l,{mb:"$5",children:"A tooltip is a brief, informative message that appears when a user interacts with an element. Tooltips are usually initiated in one of two ways: through a mouse-hover gesture or through a keyboard-hover gesture."}),e(l,{mb:"$5",get children(){return["The ",e(a,{children:"Tooltip"})," component follows the"," ",e(w,{href:"https://www.w3.org/TR/wai-aria-practices/#tooltip",external:!0,color:"$primary11",fontWeight:"$semibold",children:"WAI-ARIA"})," ","Tooltip Pattern."]}}),e(i,{id:"import",children:"Import"}),e(s,{get snippet(){return n.importComponent},mb:"$12"}),e(i,{id:"usage",children:"Usage"}),e(l,{mb:"$5"}),e(r,{get snippet(){return n.basicUsage},mb:"$10",get children(){return e(t,{label:"Hey, I'm here!",get children(){return D.cloneNode(!0)}})}}),e(c,{id:"with-arrow",children:"Tooltip with arrow"}),e(l,{mb:"$5",get children(){return["Use the ",e(a,{children:"withArrow"})," prop to add an arrow to the tooltip."]}}),e(r,{get snippet(){return n.withArrow},mb:"$10",get children(){return e(t,{withArrow:!0,label:"Search places",get children(){return e(h,{boxSize:"20px"})}})}}),e(c,{id:"with-focusable-content",children:"Tooltip with focusable content"}),e(l,{mb:"$5",children:"If the children of the tooltip is a focusable element, the tooltip will show when you focus or hover on the element, and will hide when you blur or move cursor out of the element."}),e(r,{get snippet(){return n.withFocusableContent},mb:"$10",get children(){return e(t,{label:"Search places",get children(){return e(o,{children:"Button"})}})}}),e(c,{id:"disabled-tooltip",children:"Disabled tooltip"}),e(l,{mb:"$5",get children(){return["Use the ",e(a,{children:"disabled"})," prop to prevent the tooltip from showing up."]}}),e(r,{get snippet(){return n.disabled},mb:"$12",get children(){return e(t,{disabled:!0,get children(){return e(h,{boxSize:"20px"})}})}}),e(i,{id:"placement",children:"Placement"}),e(l,{mb:"$5",get children(){return["Using the ",e(a,{children:"placement"})," prop you can adjust where your tooltip will be displayed."]}}),e(r,{get snippet(){return n.placement},mb:"$12",get children(){return e(T,{spacing:"$6",get children(){return[e(p,{spacing:"$6",get children(){return[e(t,{label:"Top start",placement:"top-start",get children(){return e(o,{children:"Top-Start"})}}),e(t,{label:"Top",placement:"top",get children(){return e(o,{children:"Top"})}}),e(t,{label:"Top end",placement:"top-end",get children(){return e(o,{children:"Top-End"})}})]}}),e(p,{spacing:"$6",get children(){return[e(t,{label:"Right start",placement:"right-start",get children(){return e(o,{children:"Right-Start"})}}),e(t,{label:"Right",placement:"right",get children(){return e(o,{children:"Right"})}}),e(t,{label:"Right end",placement:"right-end",get children(){return e(o,{children:"Right-End"})}})]}}),e(p,{spacing:"$6",get children(){return[e(t,{label:"Bottom start",placement:"bottom-start",get children(){return e(o,{children:"Bottom Start"})}}),e(t,{label:"Bottom",placement:"bottom",get children(){return e(o,{children:"Bottom"})}}),e(t,{label:"Bottom end",placement:"bottom-end",get children(){return e(o,{children:"Bottom End"})}})]}}),e(p,{spacing:"$6",get children(){return[e(t,{label:"Left start",placement:"left-start",get children(){return e(o,{children:"Left-Start"})}}),e(t,{label:"Left",placement:"left",get children(){return e(o,{children:"Left"})}}),e(t,{label:"Left end",placement:"left-end",get children(){return e(o,{children:"Left-End"})}})]}})]}})}}),e(i,{id:"more-examples",children:"More examples"}),e(r,{get snippet(){return n.moreExamples},mb:"$12",get children(){return e(y,{wrap:"wrap",gap:"$6",get children(){return[e(t,{label:"I close on click",get children(){return e(o,{children:"Close on Click - true(default)"})}}),e(t,{label:"I don't close on click",closeOnClick:!1,get children(){return e(o,{children:"Close on Click - false"})}}),e(t,{label:"I am always open",placement:"top",opened:!0,get children(){return e(o,{children:"Always Open"})}}),e(t,{label:"I am open by default",placement:"left",defaultOpened:!0,get children(){return e(o,{children:"Open on startup"})}}),e(t,{label:"Opened after 500ms",openDelay:500,get children(){return e(o,{children:"Delay Open - 500ms"})}}),e(t,{label:"Closed after 500ms",closeDelay:500,get children(){return e(o,{children:"Delay Close - 500ms"})}}),e(t,{label:"I have 12px arrow",withArrow:!0,arrowSize:12,get children(){return e(o,{children:"Arrow size - 12px"})}})]}})}}),e(i,{id:"theming",children:"Theming"}),e(l,{mb:"$5",get children(){return[e(a,{children:"Tooltip"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(s,{lang:"js",get snippet(){return n.theming},mb:"$12"}),e(i,{id:"props",children:"Props"}),e(I,{items:b})]}})}export{N as default};
