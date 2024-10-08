import{o as d,c as e,d as i,bk as n,C as r,S as g,q as u}from"./index.5fab0308.js";import{C as p}from"./CodeSnippet.0a69b940.js";import{P as f,a as S}from"./PageTitle.fca7b064.js";import{P as o}from"./Preview.cec92af7.js";import{P as b}from"./PropsTable.8cc40d64.js";import{S as l}from"./SectionSubtitle.cc8e906a.js";import{S as s}from"./SectionTitle.35eb7e89.js";import"./Footer.dc4a5085.js";const y='import { Spinner } from "@hope-ui/solid"',z="<Spinner />",C='<Spinner color="tomato" />',k=`<Spinner 
  thickness="4px" 
  speed="0.65s" 
  emptyColor="$neutral4" 
  color="$info10" 
  size="xl" 
/>`,x=`<HStack spacing="$4">
  <Spinner size="xs" />
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
  <Spinner size="xl" />
</HStack>`,$=`const config: HopeThemeConfig = {
  components: {
    Spinner: {
      baseStyle: SystemStyleObject,
      defaultProps: ThemeableSpinnerOptions
    }
  }
}`,t={importComponent:y,basicUsage:z,color:C,emptyAreaColor:k,sizes:x,theming:$};function I(){const a={href:"/docs/feedback/skeleton",label:"Skeleton"},c={href:"/docs/feedback/notification",label:"Notification"},h=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#color",label:"Spinner color",indent:!0},{href:"#empty-area-color",label:"Spinner empty area color",indent:!0},{href:"#sizes",label:"Spinner sizes",indent:!0},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"}],m=[{name:"size",description:"The size of the spinner.",type:'"xs" | "sm" | "md" | "lg" | "xl"',defaultValue:'"md"'},{name:"emptyColor",description:"The color of the empty area in the spinner.",type:"Property.Color | ColorScaleValue"},{name:"color",description:"The color of the spinner.",type:"Property.Color | ColorScaleValue"},{name:"thickness",description:"The thickness of the spinner.",type:"Property.BorderWidth<SizeScaleValue>"},{name:"speed",description:"The speed of the spinner.",type:"Property.TransitionDuration"},{name:"label",description:"For accessibility, the fallback loading text. This text will be visible to screen readers.",type:"string",defaultValue:"Loading..."}];return d(()=>{u.highlightAll()}),e(S,{previousLink:a,nextLink:c,contextualNavLinks:h,get children(){return[e(f,{children:"Spinner"}),e(i,{mb:"$5",children:"Spinners provide a visual cue that an action is either processing, awaiting a course of change or a result."}),e(s,{id:"import",children:"Import"}),e(p,{get snippet(){return t.importComponent},mb:"$12"}),e(s,{id:"usage",children:"Usage"}),e(o,{get snippet(){return t.basicUsage},mb:"$10",get children(){return e(n,{})}}),e(l,{id:"color",children:"Spinner color"}),e(i,{mb:"$5",get children(){return["Use the ",e(r,{children:"color"})," prop to change the color of the Spinner."]}}),e(o,{get snippet(){return t.color},mb:"$10",get children(){return e(n,{color:"tomato"})}}),e(l,{id:"empty-area-color",children:"Spinner empty area color"}),e(i,{mb:"$5",get children(){return["Use the ",e(r,{children:"emptyColor"})," prop to change the background color of the Spinner."]}}),e(o,{get snippet(){return t.emptyAreaColor},mb:"$10",get children(){return e(n,{thickness:"4px",speed:"0.65s",emptyColor:"$neutral4",color:"$info10",size:"xl"})}}),e(l,{id:"sizes",children:"Spinner sizes"}),e(i,{mb:"$5",get children(){return["Use the ",e(r,{children:"size"})," prop to change the size of the Button. You can set the value to"," ",e(r,{children:"xs"}),", ",e(r,{children:"sm"}),", ",e(r,{children:"md"}),", ",e(r,{children:"lg"})," or ",e(r,{children:"xl"}),"."]}}),e(o,{get snippet(){return t.sizes},mb:"$12",get children(){return e(g,{spacing:"$4",get children(){return[e(n,{size:"xs"}),e(n,{size:"sm"}),e(n,{size:"md"}),e(n,{size:"lg"}),e(n,{size:"xl"})]}})}}),e(s,{id:"theming",children:"Theming"}),e(i,{mb:"$5",get children(){return[e(r,{children:"Spinner"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(p,{lang:"js",get snippet(){return t.theming},mb:"$12"}),e(s,{id:"props",children:"Props"}),e(b,{items:m})]}})}export{I as default};