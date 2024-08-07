import{o as l,i as p,a as e,T as t,k as i,g as n,H as m,B as d}from"./index.ae6bb42f.js";import{C as g}from"./CodeSnippet.efa60d35.js";import{P as u,a as b}from"./PageTitle.cd5064fe.js";import{P as r}from"./Preview.eeb17944.js";import{S as f}from"./SectionSubtitle.23d2739c.js";import{S as s}from"./SectionTitle.94f12b47.js";import{I as x}from"./IconPhone.699c2b78.js";import"./Footer.382a3b06.js";const C='import { Center } from "@hope-ui/solid"',w=`<Center bg="tomato" h="100px" color="white">
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
</HStack>`,o={importComponent:C,basicUsage:w,withIcons:S};function B(){const a={href:"/docs/layout/box",label:"Box"},c={href:"/docs/layout/container",label:"Container"},h=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#with-icons",label:"With icons",indent:!0}];return l(()=>{p.highlightAll()}),e(b,{previousLink:a,nextLink:c,contextualNavLinks:h,get children(){return[e(u,{children:"Center"}),e(t,{mb:"$5",children:"Center is a layout component that centers its child within itself."}),e(s,{id:"import",children:"Import"}),e(g,{get snippet(){return o.importComponent},mb:"$12"}),e(s,{id:"usage",children:"Usage"}),e(t,{mb:"$5",get children(){return["Put any child element inside it, give it any ",e(i,{children:"width"})," or/and ",e(i,{children:"height"}),", it'll ensure the child is centered."]}}),e(r,{get snippet(){return o.basicUsage},mb:"$10",get children(){return e(n,{bg:"tomato",h:"100px",color:"white",children:"This is the Center"})}}),e(f,{id:"with-icons",children:"With icons"})," ",e(t,{mb:"$5",children:"Center can be used to create frames around icons or numbers."}),e(r,{get snippet(){return o.withIcons},get children(){return e(m,{spacing:"$2",get children(){return[e(n,{w:"40px",h:"40px",bg:"tomato",color:"white",get children(){return e(x,{})}}),e(n,{w:"40px",h:"40px",bg:"tomato",color:"white",get children(){return e(d,{as:"span",fontWeight:"$bold",fontSize:"$lg",children:"1"})}})]}})}})]}})}export{B as default};
