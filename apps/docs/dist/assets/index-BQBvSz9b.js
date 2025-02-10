import{o as v,c as e,i,C as r,J as g,Q as l,t as d,bf as t,bg as s,d as $,bh as y,p as I}from"./index-Nxbfex4q.js";import{C as p}from"./CodeSnippet-BKIkSwFL.js";import{P as z,a as k}from"./PageTitle-D0rjqxl5.js";import{P as a}from"./Preview-Dv-XfG_3.js";import{P as h}from"./PropsTable-b7KBJ81X.js";import{S as n}from"./SectionSubtitle-BnAf6Y1E.js";import{S as c}from"./SectionTitle-D4b_6ZYs.js";import"./Footer-DCmuVtpk.js";const x='import { Progress, ProgressIndicator, ProgressLabel } from "@hope-ui/solid"',T=`<Progress value={80}>
  <ProgressIndicator />
</Progress>`,w=`<Progress trackColor="$info3" value={64}>
  <ProgressIndicator color="$info9" />
</Progress>`,S=`<VStack alignItems="stretch" spacing="$5">
  <Progress size="xs" value={20}>
    <ProgressIndicator />
  </Progress>
  <Progress size="sm" value={20}>
    <ProgressIndicator />
  </Progress>
  <Progress size="md" value={20}>
    <ProgressIndicator />
  </Progress>
  <Progress size="lg" value={20}>
    <ProgressIndicator />
  </Progress>
  <Progress height="32px" value={20}>
    <ProgressIndicator />
  </Progress>
</VStack>`,C=`<Progress size="lg" value={80}>
  <ProgressIndicator />
  <ProgressLabel />
</Progress>`,L=`<Progress value={64}>
  <ProgressIndicator striped />
</Progress>`,U=`<Progress value={64}>
  <ProgressIndicator striped animated />
</Progress>`,V=`<Progress size="xs" indeterminate>
  <ProgressIndicator />
</Progress>`,A=`const config: HopeThemeConfig = {
  components: {
    Progress: {
      baseStyle: {
        track: SystemStyleObject,
        indicator: SystemStyleObject,
        label: SystemStyleObject
      },
      defaultProps: {
        root: ThemeableProgressOptions
      }
    }
  }
}`,o={importComponent:x,basicUsage:T,colors:w,sizes:S,withLabel:C,striped:L,animated:U,indeterminate:V,theming:A};var O=d("<strong>Progress:"),j=d("<strong>ProgressIndicator:"),Y=d("<strong>ProgressLabel:");function K(){const u={href:"/docs/feedback/circular-progress",label:"CircularProgress"},m={href:"/docs/feedback/skeleton",label:"Skeleton"},b=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#colors",label:"Progress color",indent:!0},{href:"#sizes",label:"Progress sizes",indent:!0},{href:"#with-label",label:"Progress with label",indent:!0},{href:"#striped",label:"Progress with stripes",indent:!0},{href:"#animated",label:"Animated progress",indent:!0},{href:"#indeterminate",label:"Indeterminate progress",indent:!0},{href:"#accessibility",label:"Accessibility"},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"},{href:"#progress-props",label:"Progress props",indent:!0},{href:"#progress-indicator-props",label:"ProgressIndicator props",indent:!0}],P=[{name:"trackColor",description:"The color of the progress track.",type:'ColorProps["color"]',defaultValue:"$neutral4"},{name:"size",description:"The size of the progress.",type:'"xs" | "sm" | "md" | "lg"',defaultValue:'"md"'},{name:"value",description:"The `value` of the progress indicator.",type:"number"},{name:"indeterminate",description:"If `true`, the progress will be indeterminate and the `value` prop will be ignored.",type:"boolean"},{name:"min",description:"The minimum value of the progress.",type:"number",defaultValue:"0"},{name:"max",description:"The maximum value of the progress.",type:"number",defaultValue:"100"},{name:"valueText",description:"The desired `aria-valuetext` to use in place of the value.",type:"string"},{name:"getValueText",description:"A function that returns the desired `aria-valuetext` to use in place of the value.",type:"(value: number, percent: number) => string"}],f=[{name:"color",description:"The color of the progress indicator.",type:'ColorProps["color"]',defaultValue:"$primary9"},{name:"striped",description:"If `true`, the progress indicator will show stripes.",type:"boolean"},{name:"animated",description:"If `true`, and striped is `true`, the stripes will be animated.",type:"boolean"}];return v(()=>{I.highlightAll()}),e(k,{previousLink:u,nextLink:m,contextualNavLinks:b,get children(){return[e(z,{children:"Progress"}),e(i,{mb:"$5",get children(){return[e(r,{children:"Progress"})," is used to display the progress status for a task that takes a long time or consists of several steps."]}}),e(c,{id:"import",children:"Import"}),e(p,{get snippet(){return o.importComponent},mb:"$6"}),e(g,{spacing:"$2",mb:"$12",get children(){return[e(l,{get children(){return[O()," The wrapper that provides context for its children."]}}),e(l,{get children(){return[j()," The visual indicator of the progress."]}}),e(l,{get children(){return[Y()," The textual representation of the progress."]}})]}}),e(c,{id:"usage",children:"Usage"}),e(a,{get snippet(){return o.basicUsage},mb:"$10",get children(){return e(t,{value:80,get children(){return e(s,{})}})}}),e(n,{id:"colors",children:"Progress color"}),e(i,{mb:"$5",get children(){return["Use the ",e(r,{children:"color"})," prop to change the color of the ",e(r,{children:"ProgressIndicator"})," ","and the ",e(r,{children:"trackColor"})," prop to change the color of the progress track (background)."]}}),e(a,{get snippet(){return o.colors},mb:"$10",get children(){return e(t,{trackColor:"$info3",value:64,get children(){return e(s,{color:"$info9"})}})}}),e(n,{id:"sizes",children:"Progress sizes"}),e(i,{mb:"$2",get children(){return["Use the ",e(r,{children:"size"})," prop to change the size of the Progress. You can set the value to"," ",e(r,{children:"xs"}),", ",e(r,{children:"sm"}),", ",e(r,{children:"md"})," or ",e(r,{children:"lg"}),"."]}}),e(i,{mb:"$5",get children(){return["You can also use the ",e(r,{children:"height"})," prop to manually set a height."]}}),e(a,{get snippet(){return o.sizes},mb:"$10",get children(){return e($,{alignItems:"stretch",spacing:"$5",get children(){return[e(t,{size:"xs",value:20,get children(){return e(s,{})}}),e(t,{size:"sm",value:20,get children(){return e(s,{})}}),e(t,{size:"md",value:20,get children(){return e(s,{})}}),e(t,{size:"lg",value:20,get children(){return e(s,{})}}),e(t,{height:"32px",value:20,get children(){return e(s,{})}})]}})}}),e(n,{id:"with-label",children:"Progress with label"}),e(i,{mb:"$5",get children(){return["You can set a label inside the propgress by using the ",e(r,{children:"ProgressLabel"})," component. By default it will display the progress percentage."]}}),e(a,{get snippet(){return o.withLabel},mb:"$12",get children(){return e(t,{size:"lg",value:80,get children(){return[e(s,{}),e(y,{})]}})}}),e(n,{id:"striped",children:"Progress with stripes"}),e(i,{mb:"$5",get children(){return["Use the ",e(r,{children:"striped"})," prop to apply stripes on the ",e(r,{children:"ProgressIndicator"}),"."]}}),e(a,{get snippet(){return o.striped},mb:"$10",get children(){return e(t,{value:64,get children(){return e(s,{striped:!0})}})}}),e(n,{id:"animated",children:"Animated progress"}),e(i,{mb:"$5",get children(){return["Use the ",e(r,{children:"animated"})," prop to animate the progress stripes."]}}),e(a,{get snippet(){return o.animated},mb:"$10",get children(){return e(t,{value:64,get children(){return e(s,{striped:!0,animated:!0})}})}}),e(n,{id:"indeterminate",children:"Indeterminate progress"}),e(i,{mb:"$5",get children(){return["Use the ",e(r,{children:"indeterminate"})," prop to set the progress in an indeterminate state."]}}),e(a,{get snippet(){return o.indeterminate},mb:"$10",get children(){return e(t,{size:"xs",indeterminate:!0,get children(){return e(s,{})}})}}),e(c,{id:"accessibility",children:"Accessibility"}),e(g,{spacing:"$2",mb:"$12",get children(){return[e(l,{get children(){return[e(r,{children:"Progress"})," has a ",e(r,{children:"role"})," set to ",e(r,{children:"progressbar"})," to denote that it is a progress."]}}),e(l,{get children(){return[e(r,{children:"Progress"})," has ",e(r,{children:"aria-valuenow"})," set to the percentage completion value passed to the component, to ensure the progress percent is visible to screen readers."]}})]}}),e(c,{id:"theming",children:"Theming"}),e(i,{mb:"$5",get children(){return[e(r,{children:"Progress"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(p,{lang:"js",get snippet(){return o.theming},mb:"$12"}),e(c,{id:"props",children:"Props"}),e(n,{id:"progress-props",children:"Progress props"}),e(h,{items:P,mb:"$10"}),e(n,{id:"progress-indicator-props",children:"ProgressIndicator props"}),e(h,{items:f})]}})}export{K as default};
