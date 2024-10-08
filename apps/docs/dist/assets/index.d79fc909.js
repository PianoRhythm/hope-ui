import{o as f,c as e,d as r,C as t,Q as k,e as v,U as $,N as h,aF as i,S as a,aG as C,h as y,H as x,aH as T,t as o,a7 as d,q as P}from"./index.e26fbb2f.js";import{C as p}from"./CodeSnippet.a0a5b4c5.js";import{P as I,a as H}from"./PageTitle.fa1a65f3.js";import{P as c}from"./Preview.c934444f.js";import{P as u}from"./PropsTable.beb954c1.js";import{S as l}from"./SectionSubtitle.c7dcad95.js";import{S as s}from"./SectionTitle.1f136890.js";import"./Footer.09caf936.js";const z=`import { 
  SwitchPrimitive,
  SwitchPrimitiveThumb,
  Switch 
} from "@hope-ui/solid"`,U="<Switch defaultChecked>Switch</Switch>",A=`<HStack spacing="$4">
  <Switch defaultChecked colorScheme="primary" />
  <Switch defaultChecked colorScheme="accent" />
  <Switch defaultChecked colorScheme="neutral" />
  <Switch defaultChecked colorScheme="success" />
  <Switch defaultChecked colorScheme="info" />
  <Switch defaultChecked colorScheme="warning" />
  <Switch defaultChecked colorScheme="danger" />
</HStack>`,E=`<HStack spacing="$4">
  <Switch defaultChecked size="sm">Switch</Switch>
  <Switch defaultChecked size="md">Switch</Switch>
  <Switch defaultChecked size="lg">Switch</Switch>
</HStack>`,L=`<HStack spacing="$4">
  <Switch variant="filled">Switch</Switch>
  <Switch variant="outline">Switch</Switch>
</HStack>`,_=`<HStack spacing="$4">
  <Switch LabelPlacement="start">Switch</Switch>
  <Switch LabelPlacement="end">Switch</Switch>
</HStack>`,V=`<HStack spacing="$4">
  <Switch disabled>Switch</Switch>
  <Switch variant="outline" disabled>Switch</Switch>
  <Switch defaultChecked disabled>Switch</Switch>
</HStack>`,R=`<HStack spacing="$4">
  <Switch invalid>Switch</Switch>
  <Switch variant="outline" invalid>Switch</Switch>
  <Switch defaultChecked invalid>Switch</Switch>
</HStack>`,Y=`import { css } from "@hope-ui/solid"

const switchRootClass = css({
  display: "inline-flex",
  alignItems: "center",
  border: "1px solid $neutral7",
  rounded: "$sm",
  px: "$5",
  py: "$3",
  w: "$full",
  cursor: "pointer",
  userSelect: "none",
  transition: "box-shadow 250ms",

  _focus: {
    borderColor: "$primary7",
    shadow: "0 0 0 3px $colors$primary5",
  },
});

const switchControlClass = css({
  all: "unset",
  width: 34,
  height: 12,
  backgroundColor: "$blackAlpha9",
  borderRadius: "9999px",
  position: "relative",
  boxShadow: "0 2px 10px $colors$blackAlpha7",
  transition: "background-color 250ms",

  _groupChecked: {
    backgroundColor: "$primary9",
  },
});

const switchThumbClass = css({
  display: "block",
  width: 20,
  height: 20,
  backgroundColor: "white",
  borderRadius: "9999px",
  boxShadow: "0 0 2px $colors$blackAlpha7",
  transition: "transform 250ms",
  transform: "translate(-4px, -4px)",
  willChange: "transform",

  _checked: {
    transform: "translate(16px, -4px)",
  },
});

function HeadlessExample() {
  return (
    <SwitchPrimitive class={switchRootClass()}>
      <VStack w="$full" alignItems="flex-start">
        <Text size="sm" fontWeight="$semibold">
          Annual billing
        </Text>
        <Text size="xs" color="$neutral11">
          Save 10%
        </Text>
      </VStack>
      <Box class={switchControlClass()}>
        <SwitchPrimitiveThumb class={switchThumbClass()} />
      </Box>
    </SwitchPrimitive>
  );
}
`,D=`const config: HopeThemeConfig = {
  components: {
    Switch: {
      baseStyle: {
        root: SystemStyleObject,
        control: SystemStyleObject,
        label: SystemStyleObject,
      },
      defaultProps: {
        root: ThemeableSwitchOptions,
      }
    }
  }
}`,n={importComponent:z,basicUsage:U,switchColors:A,switchSizes:E,switchVariants:L,switchLabelPlacement:_,switchDisabled:V,switchInvalid:R,headless:Y,theming:D};var J=o("<strong>SwitchPrimitive:"),O=o("<strong>SwitchPrimitiveThumb:"),X=o("<strong>Switch:");const j=d({display:"inline-flex",alignItems:"center",border:"1px solid $neutral7",rounded:"$sm",px:"$5",py:"$3",w:"$full",cursor:"pointer",userSelect:"none",transition:"box-shadow 250ms",_focus:{borderColor:"$primary7",shadow:"0 0 0 3px $colors$primary5"}}),q=d({all:"unset",width:34,height:12,backgroundColor:"$blackAlpha9",borderRadius:"9999px",position:"relative",boxShadow:"0 2px 10px $colors$blackAlpha7",transition:"background-color 250ms",_groupChecked:{backgroundColor:"$primary9"}}),B=d({display:"block",width:20,height:20,backgroundColor:"white",borderRadius:"9999px",boxShadow:"0 0 2px $colors$blackAlpha7",transition:"transform 250ms",transform:"translate(-4px, -4px)",willChange:"transform",_checked:{transform:"translate(16px, -4px)"}});function ee(){const m={href:"/docs/data-entry/select",label:"Select"},w={href:"/docs/data-entry/textarea",label:"Textarea"},S=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#colors",label:"Switch colors",indent:!0},{href:"#sizes",label:"Switch sizes",indent:!0},{href:"#variants",label:"Switch variants",indent:!0},{href:"#label-placement",label:"Switch label placement",indent:!0},{href:"#disabled",label:"Disabled state",indent:!0},{href:"#invalid",label:"Invalid state",indent:!0},{href:"#headless-api",label:"Headless API"},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"},{href:"#switch-primitive-props",label:"SwitchPrimitive props",indent:!0},{href:"#switch-props",label:"Switch props",indent:!0}],b=[{name:"id",description:"The id to be passed to the internal <input> tag.",type:"string"},{name:"name",description:"The name to be passed to the internal <input> tag.",type:"string"},{name:"value",description:"The value to be used in the switch input. This is the value that will be returned on form submission.",type:"string | number"},{name:"checked",description:"If `true`, the switch will be checked. You'll need to pass `onChange` to update its value (since it is now controlled).",type:"boolean"},{name:"defaultChecked",description:"If `true`, the switch will be initially checked.",type:"boolean"},{name:"required",description:"If `true`, the switch is marked as required, and `required` attribute will be added",type:"boolean"},{name:"disabled",description:"If `true`, the switch will be disabled.",type:"boolean"},{name:"invalid",description:"If `true`, the switch will have `aria-invalid` set to `true`.",type:"boolean"},{name:"readOnly",description:"If `true`, the switch will be readonly.",type:"boolean"},{name:"children",description:"The children of the switch. If used as a render props, the internal state will be passed.",type:"JSX.Element | (props: { state: Accessor<SwitchState> }) => JSX.Element"},{name:"onChange",description:"The callback invoked when the checked state of the `Switch` changes.",type:"JSX.EventHandlerUnion<HTMLInputElement, Event>"},{name:"onFocus",description:"The callback invoked when the switch is focused.",type:"JSX.EventHandlerUnion<HTMLInputElement, FocusEvent>"},{name:"onBlur",description:"The callback invoked when the switch is blurred (loses focus).",type:"JSX.EventHandlerUnion<HTMLInputElement, FocusEvent>"}],g=[{name:"variant",description:"The visual style of the switch.",type:'"outline" | "filled"',defaultValue:'"filled"'},{name:"colorScheme",description:"The color of the switch.",type:'"primary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger"',defaultValue:'"primary"'},{name:"size",description:"The size of the switch.",type:'"sm" | "md" | "lg"',defaultValue:'"md"'},{name:"labelPlacement",description:"The placement of the switch label.",type:'"start" | "end"',defaultValue:'"start"'}];return f(()=>{P.highlightAll()}),e(H,{previousLink:m,nextLink:w,contextualNavLinks:S,get children(){return[e(I,{children:"Switch"}),e(r,{mb:"$5",get children(){return["The ",e(t,{children:"Switch"})," component is used as an alternative for the"," ",e(k,{as:v,href:"/docs/data-entry/checkbox",color:"$primary11",fontWeight:"$semibold",children:"Checkbox"})," ","component. You can switch between enabled or disabled states."]}}),e(s,{id:"import",children:"Import"}),e(p,{get snippet(){return n.importComponent},mb:"$6"}),e($,{spacing:"$2",mb:"$12",get children(){return[e(h,{get children(){return[J()," Unstyled component containing all the parts of a switch. It renders a ",e(t,{children:"label"})," and a visualy hidden ",e(t,{children:"input"})," with type set to"," ",e(t,{children:"checkbox"})," and role set to ",e(t,{children:"switch"}),"."]}}),e(h,{get children(){return[O()," The thumb that is used to visually indicate whether the switch is on or off."]}}),e(h,{get children(){return[X()," The Hope UI styled switch component based on"," ",e(t,{children:"SwitchPrimitive"}),"."]}})]}}),e(s,{id:"usage",children:"Usage"}),e(r,{mb:"$5"}),e(c,{get snippet(){return n.basicUsage},mb:"$12",get children(){return e(i,{defaultChecked:!0,children:"Switch"})}}),e(l,{id:"colors",children:"Switch colors"}),e(r,{mb:"$5",get children(){return["Use the ",e(t,{children:"colorScheme"})," prop to change the color of the Switch. You can set the value to ",e(t,{children:"primary"}),", ",e(t,{children:"accent"}),", ",e(t,{children:"neutral"}),","," ",e(t,{children:"success"}),", ",e(t,{children:"info"}),", ",e(t,{children:"warning"})," or ",e(t,{children:"danger"}),"."]}}),e(c,{get snippet(){return n.switchColors},mb:"$10",get children(){return e(a,{spacing:"$4",get children(){return[e(i,{defaultChecked:!0,colorScheme:"primary"}),e(i,{defaultChecked:!0,colorScheme:"accent"}),e(i,{defaultChecked:!0,colorScheme:"neutral"}),e(i,{defaultChecked:!0,colorScheme:"success"}),e(i,{defaultChecked:!0,colorScheme:"info"}),e(i,{defaultChecked:!0,colorScheme:"warning"}),e(i,{defaultChecked:!0,colorScheme:"danger"})]}})}}),e(l,{id:"sizes",children:"Switch sizes"}),e(r,{mb:"$5",get children(){return["Use the ",e(t,{children:"size"})," prop to change the size of the Switch. You can set the value to"," ",e(t,{children:"sm"}),", ",e(t,{children:"md"})," or ",e(t,{children:"lg"}),"."]}}),e(c,{get snippet(){return n.switchSizes},mb:"$10",get children(){return e(a,{spacing:"$4",get children(){return[e(i,{defaultChecked:!0,size:"sm",children:"Switch"}),e(i,{defaultChecked:!0,size:"md",children:"Switch"}),e(i,{defaultChecked:!0,size:"lg",children:"Switch"})]}})}}),e(l,{id:"variants",children:"Switch variants"}),e(r,{mb:"$5",get children(){return["Use the ",e(t,{children:"variant"})," prop to change the visual style of the Switch. You can set the value to ",e(t,{children:"outline"})," or ",e(t,{children:"filled"}),"."]}}),e(c,{get snippet(){return n.switchVariants},mb:"$10",get children(){return e(a,{spacing:"$4",get children(){return[e(i,{variant:"filled",children:"Switch"}),e(i,{variant:"outline",children:"Switch"})]}})}}),e(l,{id:"label-placement",children:"Switch label placement"}),e(r,{mb:"$5",get children(){return["Use the ",e(t,{children:"labelPlacement"})," prop to change the placement of the label. You can set the value to ",e(t,{children:"start"})," or ",e(t,{children:"end"}),"."]}}),e(c,{get snippet(){return n.switchLabelPlacement},mb:"$10",get children(){return e(a,{spacing:"$4",get children(){return[e(i,{labelPlacement:"start",children:"Switch"}),e(i,{labelPlacement:"end",children:"Switch"})]}})}}),e(l,{id:"disabled",children:"Disabled state"}),e(r,{mb:"$5",get children(){return["Use the ",e(t,{children:"disabled"})," prop to disable the Switch."]}}),e(c,{get snippet(){return n.switchDisabled},mb:"$10",get children(){return e(a,{spacing:"$4",get children(){return[e(i,{disabled:!0,children:"Switch"}),e(i,{variant:"outline",disabled:!0,children:"Switch"}),e(i,{defaultChecked:!0,disabled:!0,children:"Switch"})]}})}}),e(l,{id:"invalid",children:"Invalid state"}),e(r,{mb:"$5",get children(){return["Use the ",e(t,{children:"invalid"})," prop to mark the Switch as invalid."]}}),e(c,{get snippet(){return n.switchInvalid},mb:"$12",get children(){return e(a,{spacing:"$4",get children(){return[e(i,{invalid:!0,children:"Switch"}),e(i,{variant:"outline",invalid:!0,children:"Switch"}),e(i,{defaultChecked:!0,invalid:!0,children:"Switch"})]}})}}),e(s,{id:"headless-api",children:"Headless API"}),e(r,{mb:"$5",get children(){return["Use the unstyled ",e(t,{children:"SwitchPrimitive"})," component to achieve your desired design. You can pair it with your styling solution of choice. The below example uses style props and the"," ",e(t,{children:"css"})," function."]}}),e(c,{get snippet(){return n.headless},mb:"$12",get children(){return e(C,{get class(){return j()},get children(){return[e(y,{w:"$full",alignItems:"flex-start",get children(){return[e(r,{size:"sm",fontWeight:"$semibold",children:"Annual billing"}),e(r,{size:"xs",color:"$neutral11",children:"Save 10%"})]}}),e(x,{get class(){return q()},get children(){return e(T,{get class(){return B()}})}})]}})}}),e(s,{id:"theming",children:"Theming"}),e(r,{mb:"$5",get children(){return[e(t,{children:"Switch"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(p,{lang:"js",get snippet(){return n.theming},mb:"$12"}),e(s,{id:"props",children:"Props"}),e(l,{id:"switch-primitive-props",children:"SwitchPrimitive props"}),e(u,{items:b,mb:"$10"}),e(l,{id:"switch-props",children:"Switch props"}),e(r,{mb:"$5",get children(){return[e(t,{children:"Switch"})," composes the ",e(t,{children:"SwitchPrimitive"})," component, so you can pass all its props. These are props specific to the ",e(t,{children:"Switch"})," component:"]}}),e(u,{items:g})]}})}export{ee as default};
