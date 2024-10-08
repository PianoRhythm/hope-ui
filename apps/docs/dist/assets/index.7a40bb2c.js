import{k as S,t as v,o as $,c as t,d as o,f as n,C as e,S as l,O as y,D as w,Q as z,e as x,U as I,N as c,Y as d,Z as C,R as s,q as T}from"./index.3c2ed9be.js";import{B as P}from"./BeatLoader.e7d0c65c.js";import{C as h}from"./CodeSnippet.a0013414.js";import{P as k,I as L,a as V}from"./PageTitle.3c4dcbe1.js";import{P as i}from"./Preview.6d08b5e8.js";import{P as p}from"./PropsTable.7234e50b.js";import{S as a}from"./SectionSubtitle.01c35d15.js";import{S as u}from"./SectionTitle.19741b5c.js";import{I as H}from"./IconPlus.8d586e68.js";import"./Footer.c6428b49.js";var G=v('<svg><path d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"fill=currentColor fill-rule=evenodd clip-rule=evenodd></svg>',!1,!0);const U=S({viewBox:"0 0 15 15",path:()=>G()}),A='import { Button } from "@hope-ui/solid"',R="<Button>Button</Button>",W=`<HStack spacing="$4">
  <Button colorScheme="primary">Button</Button>
  <Button colorScheme="accent">Button</Button>
  <Button colorScheme="neutral">Button</Button>
  <Button colorScheme="success">Button</Button>
  <Button colorScheme="info">Button</Button>
  <Button colorScheme="warning">Button</Button>
  <Button colorScheme="danger">Button</Button>
</HStack>`,Y=`<HStack spacing="$4">
  <Button size="xs">Button</Button>
  <Button size="sm">Button</Button>
  <Button size="md">Button</Button>
  <Button size="lg">Button</Button>
  <Button size="xl">Button</Button>
</HStack>`,E=`<HStack spacing="$4">
  <Button size="xs" compact>Button</Button>
  <Button size="sm" compact>Button</Button>
  <Button size="md" compact>Button</Button>
  <Button size="lg" compact>Button</Button>
  <Button size="xl" compact>Button</Button>
</HStack>`,M=`<HStack spacing="$4">
  <Button variant="solid">Button</Button>
  <Button variant="subtle">Button</Button>
  <Button variant="outline">Button</Button>
  <Button variant="dashed">Button</Button>
  <Button variant="ghost">Button</Button>
</HStack>`,O=`<HStack spacing="$4">
  <Button leftIcon={<IconEmail boxSize={18} />}>Email</Button>
  <Button rightIcon={<IconArrowRight />} variant="outline">
    Call us
  </Button>
</HStack>`,j=`<HStack spacing="$4">
  <Button loading>Loading</Button>
  <Button variant="outline" loading loadingText="Submitting">
    Submit
  </Button>
</HStack>`,D=`<Button loading loader={<BeatLoader boxSize="$8" />}>
  Button
</Button>`,Z=`<HStack spacing="$4">
  <Button variant="outline" loading loadingText="Loading" loaderPlacement="start">
    Submit
  </Button>
  <Button variant="outline" loading loadingText="Loading" loaderPlacement="end">
    Continue
  </Button>
</HStack>`,J=`<ButtonGroup variant="outline" spacing="$6">
  <Button colorScheme="info">Save</Button>
  <Button>Cancel</Button>
</ButtonGroup>`,Q=`<ButtonGroup size="sm" variant="outline" attached>
  <Button mr="-1px">Save</Button>
  <IconButton aria-label="Add to friends" icon={<IconPlus />} />
</ButtonGroup>`,X=`// The size prop affects the height of the button
// It can still be overridden by passing a custom height
<Button
  variant="default"
  size="md"
  height="48px"
  width="200px"
  borderWidth="2px"
  borderColor="$success8"
>
  Button
</Button>`,q=`const config: HopeThemeConfig = {
  components: {
    Button: {
      baseStyle: {
        root: SystemStyleObject,
        group: SystemStyleObject,
      },
      defaultProps: {
        root: ThemeableButtonOptions,
        group: ThemeableButtonGroupOptions,
      };
    }
  }
}`,r={importComponent:A,basicUsage:R,buttonColors:W,buttonSizes:Y,buttonSizesCompact:E,buttonVariants:M,buttonWithIcon:O,buttonLoadingState:j,buttonCustomLoader:D,buttonLoaderPlacement:Z,buttonGroup:J,buttonGroupAttached:Q,composition:X,theming:q};function at(){const m={href:"/docs/theming/color-mode",label:"Color mode"},g={href:"/docs/general/icon-button",label:"IconButton"},b=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#button-colors",label:"Button colors",indent:!0},{href:"#button-sizes",label:"Button sizes",indent:!0},{href:"#button-variants",label:"Button variants",indent:!0},{href:"#button-with-icon",label:"Button with icon",indent:!0},{href:"#button-loading-state",label:"Button loading state",indent:!0},{href:"#button-group",label:"Grouping buttons",indent:!0},{href:"#accessibility",label:"Accessibility"},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"},{href:"#button-props",label:"Button props",indent:!0},{href:"#button-group-props",label:"ButtonGroup props",indent:!0}],B=[{name:"variant",description:"The visual style of the button.",type:'"solid" | "subtle" | "outline" | "dashed" | "ghost"',defaultValue:'"solid"'},{name:"colorScheme",description:"The color of the button.",type:'"primary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger"',defaultValue:'"primary"'},{name:"size",description:"The size of the button.",type:'"xs" | "sm" | "md" | "lg" | "xl"',defaultValue:'"md"'},{name:"compact",description:"If `true`, Reduces the button padding.",type:"boolean",defaultValue:"false"},{name:"fullWidth",description:"If `true`, the button will take up the full width of its container.",type:"boolean",defaultValue:"false"},{name:"disabled",description:"If `true`, the button will be disabled.",type:"boolean",defaultValue:"false"},{name:"loading",description:"If `true`, the button will show a loader.",type:"boolean",defaultValue:"false"},{name:"loadingText",description:"The label to show in the button when `loading` is true.",type:"string",defaultValue:""},{name:"loader",description:"Replace the loader component when `loading` is `true`.",type:"JSX.Element",defaultValue:""},{name:"loaderPlacement",description:"Determines the placement of the loader when `loading` is `true`.",type:'"start" | "end"',defaultValue:'"start"'},{name:"iconSpacing",description:"The space between the button icon and label.",type:"Property.MarginRight<SpaceScaleValue>",defaultValue:"0.5rem"},{name:"leftIcon",description:"If added, the button will show an icon before the button's label.",type:"JSX.Element",defaultValue:""},{name:"rightIcon",description:"If added, the button will show an icon after the button's label.",type:"JSX.Element",defaultValue:""}],f=[{name:"spacing",description:"The spacing between each buttons.",type:'MarginProps["marginRight"]',defaultValue:"0.5rem"},{name:"attached",description:"If `true`, the borderRadius of button that are direct children will be altered to look flushed together.",type:"boolean",defaultValue:"false"},{name:"variant",description:"The visual style of all wrapped buttons.",type:'"solid" | "subtle" | "outline" | "dashed" | "ghost"'},{name:"colorScheme",description:"The color of all wrapped buttons.",type:'"primary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger"'},{name:"size",description:"The size of all wrapped buttons.",type:'"xs" | "sm" | "md" | "lg" | "xl"'},{name:"disabled",description:"If `true`, all wrapped buttons will be disabled.",type:"boolean"}];return $(()=>{T.highlightAll()}),t(V,{previousLink:m,nextLink:g,contextualNavLinks:b,get children(){return[t(k,{children:"Button"}),t(o,{mb:"$8",children:"The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."}),t(u,{id:"import",children:"Import"}),t(h,{get snippet(){return r.importComponent},mb:"$12"}),t(u,{id:"usage",children:"Usage"}),t(i,{get snippet(){return r.basicUsage},mb:"$10",get children(){return t(n,{children:"Button"})}}),t(a,{id:"button-colors",children:"Button colors"}),t(o,{mb:"$5",get children(){return["Use the ",t(e,{children:"colorScheme"})," prop to change the color of the Button. You can set the value to ",t(e,{children:"primary"}),", ",t(e,{children:"accent"}),", ",t(e,{children:"neutral"}),","," ",t(e,{children:"success"}),", ",t(e,{children:"info"}),", ",t(e,{children:"warning"})," or ",t(e,{children:"danger"}),"."]}}),t(i,{get snippet(){return r.buttonColors},mb:"$10",get children(){return t(l,{spacing:"$4",get children(){return[t(n,{colorScheme:"primary",children:"Button"}),t(n,{colorScheme:"accent",children:"Button"}),t(n,{colorScheme:"neutral",children:"Button"}),t(n,{colorScheme:"success",children:"Button"}),t(n,{colorScheme:"info",children:"Button"}),t(n,{colorScheme:"warning",children:"Button"}),t(n,{colorScheme:"danger",children:"Button"})]}})}}),t(a,{id:"button-sizes",children:"Button sizes"}),t(o,{mb:"$5",get children(){return["Use the ",t(e,{children:"size"})," prop to change the size of the Button. You can set the value to"," ",t(e,{children:"xs"}),", ",t(e,{children:"sm"}),", ",t(e,{children:"md"}),", ",t(e,{children:"lg"})," or ",t(e,{children:"xl"}),"."]}}),t(i,{get snippet(){return r.buttonSizes},mb:"$8",get children(){return t(l,{spacing:"$4",get children(){return[t(n,{size:"xs",children:"Button"}),t(n,{size:"sm",children:"Button"}),t(n,{size:"md",children:"Button"}),t(n,{size:"lg",children:"Button"}),t(n,{size:"xl",children:"Button"})]}})}}),t(o,{mb:"$5",get children(){return["Use the ",t(e,{children:"compact"})," prop to reduces the Button padding."]}}),t(i,{get snippet(){return r.buttonSizesCompact},mb:"$10",get children(){return t(l,{spacing:"$4",get children(){return[t(n,{size:"xs",compact:!0,children:"Button"}),t(n,{size:"sm",compact:!0,children:"Button"}),t(n,{size:"md",compact:!0,children:"Button"}),t(n,{size:"lg",compact:!0,children:"Button"}),t(n,{size:"xl",compact:!0,children:"Button"})]}})}}),t(a,{id:"button-variants",children:"Button variants"}),t(o,{mb:"$5",get children(){return["Use the ",t(e,{children:"variant"})," prop to change the visual style of the Button. You can set the value to ",t(e,{children:"solid"}),", ",t(e,{children:"subtle"}),", ",t(e,{children:"outline"}),", ",t(e,{children:"dashed"})," ","or ",t(e,{children:"ghost"}),"."]}}),t(i,{get snippet(){return r.buttonVariants},mb:"$10",get children(){return t(l,{spacing:"$4",get children(){return[t(n,{variant:"solid",children:"Button"}),t(n,{variant:"subtle",children:"Button"}),t(n,{variant:"outline",children:"Button"}),t(n,{variant:"dashed",children:"Button"}),t(n,{variant:"ghost",children:"Button"})]}})}}),t(a,{id:"button-with-icon",children:"Button with icon"}),t(o,{mb:"$5",get children(){return["You can add left and right icons to the Button component using the ",t(e,{children:"leftIcon"})," and"," ",t(e,{children:"rightIcon"})," props respectively."]}}),t(y,{status:"warning",mb:"$5",get children(){return t(w,{get children(){return["The ",t(e,{children:"leftIcon"})," and ",t(e,{children:"rightIcon"})," prop values should be jsx elements not strings."]}})}}),t(i,{get snippet(){return r.buttonWithIcon},mb:"$5",get children(){return t(l,{spacing:"$4",get children(){return[t(n,{get leftIcon(){return t(U,{boxSize:18})},children:"Email"}),t(n,{get rightIcon(){return t(L,{})},variant:"outline",children:"Call us"})]}})}}),t(o,{mb:"$10",get children(){return["If you want to create your own icon components check out Hope UI"," ",t(z,{as:x,href:"/docs/data-display/icon",color:"$primary11",fontWeight:"$semibold",children:"Icon"})," ","documentation."]}}),t(a,{id:"button-loading-state",children:"Button loading state"}),t(o,{mb:"$5",get children(){return["Pass the ",t(e,{children:"loading"})," prop to show its loading state. By default, the button will show a spinner and leave the button's width unchanged. You can also pass the"," ",t(e,{children:"loadingText"})," prop to show a spinner and the loading text."]}}),t(i,{get snippet(){return r.buttonLoadingState},mb:"$8",get children(){return t(l,{spacing:"$4",get children(){return[t(n,{loading:!0,children:"Loading"}),t(n,{variant:"outline",loading:!0,loadingText:"Submitting",children:"Submit"})]}})}}),t(o,{mb:"$5",get children(){return["You can change the loader element to use custom loaders as per your design requirements. Pass the ",t(e,{children:"loader"})," prop and set it to a custom jsx element."]}}),t(i,{get snippet(){return r.buttonCustomLoader},mb:"$8",get children(){return t(n,{loading:!0,get loader(){return t(P,{boxSize:"$8"})},children:"Button"})}}),t(o,{mb:"$5",get children(){return["When a ",t(e,{children:"loaderText"})," is present, you can change the placement of the loader element to either ",t(e,{children:"start"})," or ",t(e,{children:"end"}),"."]}}),t(i,{get snippet(){return r.buttonLoaderPlacement},mb:"$10",get children(){return t(l,{spacing:"$4",get children(){return[t(n,{variant:"outline",loading:!0,loadingText:"Loading",loaderPlacement:"start",children:"Submit"}),t(n,{variant:"outline",loading:!0,loadingText:"Loading",loaderPlacement:"end",children:"Continue"})]}})}}),t(a,{id:"button-group",children:"Grouping buttons"}),t(o,{mb:"$3",get children(){return["You can use the ",t(e,{children:"Stack"})," or ",t(e,{children:"ButtonGroup"})," component to group buttons. When you use the ",t(e,{children:"ButtonGroup"})," component, it allows you to:"]}}),t(I,{spacing:"$2",mb:"$5",get children(){return[t(c,{get children(){return["Set the ",t(e,{children:"variant"}),", ",t(e,{children:"colorScheme"}),", ",t(e,{children:"size"})," and"," ",t(e,{children:"disabled"})," state of all buttons within it."]}}),t(c,{get children(){return["Add ",t(e,{children:"spacing"})," between the buttons."]}}),t(c,{children:"Flush the buttons together by removing the border radius of its children as needed."})]}}),t(i,{get snippet(){return r.buttonGroup},mb:"$6",get children(){return t(d,{variant:"outline",spacing:"$6",get children(){return[t(n,{colorScheme:"info",children:"Save"}),t(n,{children:"Cancel"})]}})}}),t(o,{mb:"$5",get children(){return["To flush the buttons, pass the ",t(e,{children:"attached"})," prop."]}}),t(i,{get snippet(){return r.buttonGroupAttached},mb:"$12",get children(){return t(d,{size:"sm",variant:"outline",attached:!0,get children(){return[t(n,{mr:"-1px",children:"Save"}),t(C,{"aria-label":"Add to friends",get icon(){return t(H,{})}})]}})}}),t(u,{id:"accessibility",children:"Accessibility"}),t(s.ul,{ps:"$5",mb:"$12",get children(){return[t(s.li,{mb:"$2",get children(){return["Button has ",t(e,{children:"role"})," of ",t(e,{children:"button"}),"."]}}),t(s.li,{children:"When Button has focus, Space or Enter activates it."})]}}),t(u,{id:"composition",children:"Composition"}),t(o,{mb:"$5",children:"You can override any style of the Button via style props."}),t(i,{get snippet(){return r.composition},mb:"$12",get children(){return t(n,{variant:"ghost",colorScheme:"neutral",size:"md",height:"48px",width:"200px",borderWidth:"2px",borderColor:"$success8",children:"Button"})}}),t(u,{id:"theming",children:"Theming"}),t(o,{mb:"$5",get children(){return[t(e,{children:"Button"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),t(h,{lang:"js",get snippet(){return r.theming},mb:"$12"}),t(u,{id:"props",children:"Props"}),t(a,{id:"button-props",children:"Button props"}),t(p,{items:B,mb:"$10"}),t(a,{id:"button-group-props",children:"ButtonGroup props"}),t(p,{items:f})]}})}export{at as default};