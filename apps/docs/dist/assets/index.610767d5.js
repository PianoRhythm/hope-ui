import{o as p,c as e,d as t,a0 as r,C as a,S as c,q as u}from"./index.5fab0308.js";import{C as d}from"./CodeSnippet.0a69b940.js";import{P as B,a as b}from"./PageTitle.fca7b064.js";import{P as i}from"./Preview.cec92af7.js";import{P as f}from"./PropsTable.8cc40d64.js";import{S as l}from"./SectionSubtitle.cc8e906a.js";import{S as o}from"./SectionTitle.35eb7e89.js";import"./Footer.dc4a5085.js";const S='import { Badge } from "@hope-ui/solid"',v="<Badge>Badge</Badge>",y=`<HStack spacing="$4">
  <Badge colorScheme="primary">Badge</Badge>
  <Badge colorScheme="accent">Badge</Badge>
  <Badge colorScheme="neutral">Badge</Badge>
  <Badge colorScheme="success">Badge</Badge>
  <Badge colorScheme="info">Badge</Badge>
  <Badge colorScheme="warning">Badge</Badge>
  <Badge colorScheme="danger">Badge</Badge>
</HStack>`,$=`<HStack spacing="$4">
  <Badge variant="solid">Badge</Badge>
  <Badge variant="subtle">Badge</Badge>
  <Badge variant="outline">Badge</Badge>
</HStack>`,P=`const config: HopeThemeConfig = {
  components: {
    Badge: {
      baseStyle: SystemStyleObject,
      defaultProps: ThemeableBadgeOptions
    }
  }
}`,n={importComponent:S,basicUsage:v,colors:y,variants:$,theming:P};function x(){const s={href:"/docs/data-display/avatar",label:"Avatar"},g={href:"/docs/data-display/icon",label:"Icon"},h=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#colors",label:"Badge colors",indent:!0},{href:"#variants",label:"Badge variants",indent:!0},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"}],m=[{name:"variant",description:"The visual style of the badge.",type:'"solid" | "subtle" | "outline"',defaultValue:'"subtle"'},{name:"colorScheme",description:"The color of the badge.",type:'"primary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger"',defaultValue:'"neutral"'}];return p(()=>{u.highlightAll()}),e(b,{previousLink:s,nextLink:g,contextualNavLinks:h,get children(){return[e(B,{children:"Badge"}),e(t,{mb:"$5",children:"Badges are used to highlight an item's status for quick recognition."}),e(o,{id:"import",children:"Import"}),e(d,{get snippet(){return n.importComponent},mb:"$12"}),e(o,{id:"usage",children:"Usage"}),e(i,{get snippet(){return n.basicUsage},mb:"$12",get children(){return e(r,{children:"Badge"})}}),e(l,{id:"colors",children:"Badge colors"}),e(t,{mb:"$5",get children(){return["Use the ",e(a,{children:"colorScheme"})," prop to change the color of the Badge. You can set the value to ",e(a,{children:"primary"}),", ",e(a,{children:"accent"}),", ",e(a,{children:"neutral"}),","," ",e(a,{children:"success"}),", ",e(a,{children:"info"}),", ",e(a,{children:"warning"})," or ",e(a,{children:"danger"}),"."]}}),e(i,{get snippet(){return n.colors},mb:"$10",get children(){return e(c,{spacing:"$4",get children(){return[e(r,{colorScheme:"primary",children:"Badge"}),e(r,{colorScheme:"accent",children:"Badge"}),e(r,{colorScheme:"neutral",children:"Badge"}),e(r,{colorScheme:"success",children:"Badge"}),e(r,{colorScheme:"info",children:"Badge"}),e(r,{colorScheme:"warning",children:"Badge"}),e(r,{colorScheme:"danger",children:"Badge"})]}})}}),e(l,{id:"variants",children:"Badge variants"}),e(t,{mb:"$5",get children(){return["Use the ",e(a,{children:"variant"})," prop to change the visual style of the Badge. You can set the value to ",e(a,{children:"solid"}),", ",e(a,{children:"subtle"})," or ",e(a,{children:"outline"}),"."]}}),e(i,{get snippet(){return n.variants},mb:"$10",get children(){return e(c,{spacing:"$4",get children(){return[e(r,{variant:"solid",children:"Badge"}),e(r,{variant:"subtle",children:"Badge"}),e(r,{variant:"outline",children:"Badge"})]}})}}),e(o,{id:"theming",children:"Theming"}),e(t,{mb:"$5",get children(){return[e(a,{children:"Badge"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(d,{lang:"js",get snippet(){return n.theming},mb:"$12"}),e(o,{id:"props",children:"Props"}),e(f,{items:m})]}})}export{x as default};
