import{o as l,c as e,d as t,C as i,i as n,S as p,A as m,n as d}from"./index.68a83398.js";import{C as g}from"./CodeSnippet.dcbd435f.js";import{P as u,a as b}from"./PageTitle.32c0d196.js";import{P as r}from"./Preview.69e3d182.js";import{S as f}from"./SectionSubtitle.826cc245.js";import{S as s}from"./SectionTitle.6fcae084.js";import{I as C}from"./IconPhone.27a7ea66.js";import"./Footer.58752801.js";const w='import { Center } from "@hope-ui/solid"',x=`<Center bg="tomato" h="100px" color="white">
  This is the Center
</Center>`,S=`<HStack spacing="$2">
  <Center w="40px" h="40px" bg="tomato" color="white">
    <IconPhone />
  </Center>
  <Center w="40px" h="40px" bg="tomato" color="white">
    <Box as="span" fontWeight="$bold" fontSize="$lg">
      1
    </Box>
  </Center>
</HStack>`,o={importComponent:w,basicUsage:x,withIcons:S};function U(){const a={href:"/docs/layout/box",label:"Box"},c={href:"/docs/layout/container",label:"Container"},h=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#with-icons",label:"With icons",indent:!0}];return l(()=>{d.highlightAll()}),e(b,{previousLink:a,nextLink:c,contextualNavLinks:h,get children(){return[e(u,{children:"Center"}),e(t,{mb:"$5",children:"Center is a layout component that centers its child within itself."}),e(s,{id:"import",children:"Import"}),e(g,{get snippet(){return o.importComponent},mb:"$12"}),e(s,{id:"usage",children:"Usage"}),e(t,{mb:"$5",get children(){return["Put any child element inside it, give it any ",e(i,{children:"width"})," or/and ",e(i,{children:"height"}),", it'll ensure the child is centered."]}}),e(r,{get snippet(){return o.basicUsage},mb:"$10",get children(){return e(n,{bg:"tomato",h:"100px",color:"white",children:"This is the Center"})}}),e(f,{id:"with-icons",children:"With icons"})," ",e(t,{mb:"$5",children:"Center can be used to create frames around icons or numbers."}),e(r,{get snippet(){return o.withIcons},get children(){return e(p,{spacing:"$2",get children(){return[e(n,{w:"40px",h:"40px",bg:"tomato",color:"white",get children(){return e(C,{})}}),e(n,{w:"40px",h:"40px",bg:"tomato",color:"white",get children(){return e(m,{as:"span",fontWeight:"$bold",fontSize:"$lg",children:"1"})}})]}})}})]}})}export{U as default};
