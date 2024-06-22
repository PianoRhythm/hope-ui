import{o as d,c as e,d as i,C as o,z as n,H as t,M as c,D as x,q as u}from"./index.b24ef594.js";import{C as b}from"./CodeSnippet.e0f59e1c.js";import{P as B,a as f}from"./PageTitle.689b44d7.js";import{P as a}from"./Preview.83a5c34f.js";import{P as S}from"./PropsTable.036b0dae.js";import{S as p}from"./SectionSubtitle.146d6d0d.js";import{S as h}from"./SectionTitle.29cc967c.js";import"./Footer.c8485bf8.js";const G='import { SimpleGrid } from "@hope-ui/solid"',v=`<SimpleGrid columns={2} gap="$10">
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
</SimpleGrid>`,w=`<SimpleGrid columns={{ "@initial": 2, "@md": 3 }} gap="40px">
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
</SimpleGrid>`,y=`<SimpleGrid minChildWidth="120px" gap="40px">
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
</SimpleGrid>`,C=`<SimpleGrid columns={2} columnGap="40px" rowGap="20px">
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
</SimpleGrid>`,r={importComponent:G,basicUsage:v,responsiveColumns:w,autoResponsive:y,spacing:C};function M(){const s={href:"/docs/layout/grid",label:"Grid"},g={href:"/docs/layout/stack",label:"Stack"},m=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#auto-responsive-grid",label:"Auto-responsive grid",indent:!0},{href:"#spacing",label:"Changing the spacing for columns and rows",indent:!0},{href:"#props",label:"Props"}],l=[{name:"minChildWidth",description:"The width at which child elements will break into columns. Pass a number for pixel values or a string for any other valid CSS length.",type:"ResponsiveValue<Property.MinWidth>"},{name:"columns",description:"The number of columns.",type:"ResponsiveValue<number>"}];return d(()=>{u.highlightAll()}),e(f,{previousLink:s,nextLink:g,contextualNavLinks:m,get children(){return[e(B,{children:"SimpleGrid"}),e(i,{mb:"$8",get children(){return["SimpleGrid provides a friendly interface to create responsive grid layouts with ease. It renders a ",e(o,{children:"div"})," element with ",e(o,{children:"display: grid"}),"."]}}),e(h,{id:"import",children:"Import"}),e(b,{get snippet(){return r.importComponent},mb:"$12"}),e(h,{id:"usage",children:"Usage"}),e(i,{mb:"$5",children:"Specifying the number of columns for the grid layout."}),e(a,{get snippet(){return r.basicUsage},mb:"$8",get children(){return e(n,{columns:2,gap:"$10",get children(){return[e(t,{bg:"tomato",height:"80px"}),e(t,{bg:"tomato",height:"80px"}),e(t,{bg:"tomato",height:"80px"}),e(t,{bg:"tomato",height:"80px"}),e(t,{bg:"tomato",height:"80px"})]}})}}),e(i,{mb:"$5",get children(){return["You can also make it responsive by passing an object value into the ",e(o,{children:"columns"})," ","prop."]}}),e(a,{get snippet(){return r.responsiveColumns},mb:"$10",get children(){return e(n,{columns:{"@initial":2,"@md":3},gap:"40px",get children(){return[e(t,{bg:"tomato",height:"80px"}),e(t,{bg:"tomato",height:"80px"}),e(t,{bg:"tomato",height:"80px"}),e(t,{bg:"tomato",height:"80px"}),e(t,{bg:"tomato",height:"80px"})]}})}}),e(p,{id:"auto-responsive-grid",children:"Auto-responsive grid"}),e(i,{mb:"$5",get children(){return["To make the grid responsive and adjust automatically without passing ",e(o,{children:"columns"}),", simply pass the ",e(o,{children:"minChildWidth"})," prop to specify the ",e(o,{children:"min-width"})," a child should have before adjusting the layout."]}}),e(i,{mb:"$5",get children(){return["This uses css grid ",e(o,{children:"auto-fit"})," and ",e(o,{children:"minmax()"})," internally."]}}),e(a,{get snippet(){return r.autoResponsive},mb:"$10",get children(){return e(n,{minChildWidth:"120px",gap:"40px",get children(){return[e(t,{bg:"tomato",height:"80px"}),e(t,{bg:"tomato",height:"80px"}),e(t,{bg:"tomato",height:"80px"}),e(t,{bg:"tomato",height:"80px"}),e(t,{bg:"tomato",height:"80px"}),e(t,{bg:"tomato",height:"80px"})]}})}}),e(p,{id:"spacing",children:"Changing the spacing for columns and rows"}),e(i,{mb:"$5",get children(){return["Simply pass the ",e(o,{children:"gap"})," prop to change the row and column spacing between the grid items. ",e(o,{children:"SimpleGrid"})," also allows you pass ",e(o,{children:"columnGap"})," and"," ",e(o,{children:"rowGap"})," to define the space between columns and rows respectively."]}}),e(a,{get snippet(){return r.spacing},mb:"$6",get children(){return e(n,{columns:2,columnGap:"40px",rowGap:"20px",get children(){return[e(t,{bg:"tomato",height:"80px"}),e(t,{bg:"tomato",height:"80px"}),e(t,{bg:"tomato",height:"80px"}),e(t,{bg:"tomato",height:"80px"}),e(t,{bg:"tomato",height:"80px"})]}})}}),e(c,{status:"warning",mb:"$12",get children(){return e(x,{get children(){return["CSS gap properties can be confusing, ",e(o,{children:"columnGap"})," add space on the X axis whereas ",e(o,{children:"rowGap"})," add space on the Y axis."]}})}}),e(h,{id:"props",children:"Props"}),e(i,{mb:"$5",get children(){return["SimpleGrid composes ",e(o,{children:"Grid"})," so you can pass all the ",e(o,{children:"Grid"})," props and css grid props with addition of these:"]}}),e(S,{items:l})]}})}export{M as default};
