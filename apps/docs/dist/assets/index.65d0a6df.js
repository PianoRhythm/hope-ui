import{o as p,i as u,a as e,T as t,$ as r,k as a,H as c}from"./index.7bc4cfce.js";import{C as d}from"./CodeSnippet.9d0018a6.js";import{P as B,a as b}from"./PageTitle.820b2a05.js";import{P as o}from"./Preview.caf91258.js";import{P as f}from"./PropsTable.f3bd7324.js";import{S as l}from"./SectionSubtitle.73732abe.js";import{S as i}from"./SectionTitle.3477b9ce.js";import"./Footer.43391ad4.js";const S='import { Badge } from "@hope-ui/solid"',v="<Badge>Badge</Badge>",y=`<HStack spacing="$4">
  <Badge colorScheme="primary">Badge</Badge>
  <Badge colorScheme="accent">Badge</Badge>
  <Badge colorScheme="neutral">Badge</Badge>
  <Badge colorScheme="success">Badge</Badge>
  <Badge colorScheme="info">Badge</Badge>
  <Badge colorScheme="warning">Badge</Badge>
  <Badge colorScheme="danger">Badge</Badge>
</HStack>`,k=`<HStack spacing="$4">
  <Badge variant="solid">Badge</Badge>
  <Badge variant="subtle">Badge</Badge>
  <Badge variant="outline">Badge</Badge>
</HStack>`,$=`const config: HopeThemeConfig = {
  components: {
    Badge: {
      baseStyle: SystemStyleObject,
      defaultProps: ThemeableBadgeOptions
    }
  }
}`,n={importComponent:S,basicUsage:v,colors:y,variants:k,theming:$};function I(){const s={href:"/docs/data-display/avatar",label:"Avatar"},g={href:"/docs/data-display/icon",label:"Icon"},h=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#colors",label:"Badge colors",indent:!0},{href:"#variants",label:"Badge variants",indent:!0},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"}],m=[{name:"variant",description:"The visual style of the badge.",type:'"solid" | "subtle" | "outline"',defaultValue:'"subtle"'},{name:"colorScheme",description:"The color of the badge.",type:'"primary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger"',defaultValue:'"neutral"'}];return p(()=>{u.highlightAll()}),e(b,{previousLink:s,nextLink:g,contextualNavLinks:h,get children(){return[e(B,{children:"Badge"}),e(t,{mb:"$5",children:"Badges are used to highlight an item's status for quick recognition."}),e(i,{id:"import",children:"Import"}),e(d,{get snippet(){return n.importComponent},mb:"$12"}),e(i,{id:"usage",children:"Usage"}),e(o,{get snippet(){return n.basicUsage},mb:"$12",get children(){return e(r,{children:"Badge"})}}),e(l,{id:"colors",children:"Badge colors"}),e(t,{mb:"$5",get children(){return["Use the ",e(a,{children:"colorScheme"})," prop to change the color of the Badge. You can set the value to ",e(a,{children:"primary"}),", ",e(a,{children:"accent"}),", ",e(a,{children:"neutral"}),","," ",e(a,{children:"success"}),", ",e(a,{children:"info"}),", ",e(a,{children:"warning"})," or ",e(a,{children:"danger"}),"."]}}),e(o,{get snippet(){return n.colors},mb:"$10",get children(){return e(c,{spacing:"$4",get children(){return[e(r,{colorScheme:"primary",children:"Badge"}),e(r,{colorScheme:"accent",children:"Badge"}),e(r,{colorScheme:"neutral",children:"Badge"}),e(r,{colorScheme:"success",children:"Badge"}),e(r,{colorScheme:"info",children:"Badge"}),e(r,{colorScheme:"warning",children:"Badge"}),e(r,{colorScheme:"danger",children:"Badge"})]}})}}),e(l,{id:"variants",children:"Badge variants"}),e(t,{mb:"$5",get children(){return["Use the ",e(a,{children:"variant"})," prop to change the visual style of the Badge. You can set the value to ",e(a,{children:"solid"}),", ",e(a,{children:"subtle"})," or ",e(a,{children:"outline"}),"."]}}),e(o,{get snippet(){return n.variants},mb:"$10",get children(){return e(c,{spacing:"$4",get children(){return[e(r,{variant:"solid",children:"Badge"}),e(r,{variant:"subtle",children:"Badge"}),e(r,{variant:"outline",children:"Badge"})]}})}}),e(i,{id:"theming",children:"Theming"}),e(t,{mb:"$5",get children(){return[e(a,{children:"Badge"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(d,{lang:"js",get snippet(){return n.theming},mb:"$12"}),e(i,{id:"props",children:"Props"}),e(f,{items:m})]}})}export{I as default};
