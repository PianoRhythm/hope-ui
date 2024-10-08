import{o as d,c as e,d as r,C as t,Q as o,n as u}from"./index.1414c08e.js";import{C as l}from"./CodeSnippet.bb3ff5ae.js";import{P as g,a as b}from"./PageTitle.18e7662f.js";import{P as a}from"./Preview.ec1cdeec.js";import{P as f}from"./PropsTable.bd819f41.js";import{S as h}from"./SectionSubtitle.b53bbec6.js";import{S as i}from"./SectionTitle.1a1b8a04.js";import{I as x}from"./IconExternalLink.d1fd86a4.js";import"./Footer.54289f30.js";const k='import { Anchor } from "@hope-ui/solid"',y="<Anchor>Hope UI</Anchor>",A=`<Anchor href="https://hope-ui.com" external>
  Hope UI <IconExternalLink ml="2px" verticalAlign="text-bottom" />
</Anchor>`,w=`<Text>
  Did you know that{" "}
  <Anchor color="$primary10" href="#">
    Anchors can live inline with text
  </Anchor>
</Text>`,I=`// 1. import the \`Link\` component
import { Link } from "solid-app-router"

// 2. Then use it like this
<Anchor as={Link} href="/home">Home</Anchor>`,T=`const config: HopeThemeConfig = {
  components: {
    Anchor: {
      baseStyle: SystemStyleObject,
      defaultProps: ThemeableAnchorOptions
    }
  }
}`,n={importComponent:k,basicUsage:y,externalLink:A,anchorWithInlineText:w,usageWithRoutingLibrary:I,theming:T};function W(){const s={href:"/docs/data-display/tag",label:"Tag"},c={href:"/docs/navigation/breadcrumb",label:"Breadcrumb"},p=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#external-link",label:"External link",indent:!0},{href:"#anchor-inline-with-text",label:"Anchor inline with text",indent:!0},{href:"#usage-with-routing-library",label:"Usage with routing library"},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"}],m=[{name:"external",description:"If `true`, the link will open in a new tab.",type:"boolean"}];return d(()=>{u.highlightAll()}),e(b,{previousLink:s,nextLink:c,contextualNavLinks:p,get children(){return[e(g,{children:"Anchor"}),e(r,{mb:"$5",get children(){return["Anchors are accessible elements used primarily for navigation. This component is styled to resemble a hyperlink and semantically renders an ",e(t,{children:"a"}),"."]}}),e(i,{id:"import",children:"Import"}),e(l,{get snippet(){return n.importComponent},mb:"$12"}),e(i,{id:"usage",children:"Usage"}),e(a,{get snippet(){return n.basicUsage},mb:"$10",get children(){return e(o,{children:"Hope UI"})}}),e(h,{id:"external-link",children:"External link"}),e(r,{mb:"$5",get children(){return["Use the ",e(t,{children:"external"})," prop to open the link in a new tab."]}}),e(a,{get snippet(){return n.externalLink},mb:"$10",get children(){return e(o,{href:"https://hope-ui.com",external:!0,get children(){return["Hope UI ",e(x,{ml:"2px",verticalAlign:"text-bottom"})]}})}}),e(h,{id:"anchor-inline-with-text",children:"Anchor inline with text"}),e(a,{get snippet(){return n.anchorWithInlineText},mb:"$12",get children(){return e(r,{get children(){return["Did you know that"," ",e(o,{color:"$primary10",href:"#",children:"Anchors can live inline with text"})]}})}}),e(i,{id:"usage-with-routing-library",children:"Usage with routing library"}),e(r,{mb:"$5",get children(){return["To use the ",e(t,{children:"Anchor"})," with a routing library like ",e(t,{children:"solid-app-router"}),", all you need to do is pass the ",e(t,{children:"as"})," prop. It'll replace the rendered"," ",e(t,{children:"a"})," tag with the router's ",e(t,{children:"Link"}),"."]}}),e(l,{get snippet(){return n.usageWithRoutingLibrary},mb:"$12"}),e(i,{id:"theming",children:"Theming"}),e(r,{mb:"$5",get children(){return[e(t,{children:"Anchor"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(l,{lang:"js",get snippet(){return n.theming},mb:"$12"}),e(i,{id:"props",children:"Props"}),e(f,{items:m})]}})}export{W as default};
