import{o as a,c as e,d as o,C as t,Q as c,q as u}from"./index.5fab0308.js";import{C as s}from"./CodeSnippet.0a69b940.js";import{P as h,a as p}from"./PageTitle.fca7b064.js";import{S as g}from"./SectionTitle.35eb7e89.js";import"./Footer.dc4a5085.js";const m='import { globalCss } from "@hope-ui/solid"',b=`import { globalCss } from "@hope-ui/solid"

const globalStyles = globalCss({
  '*': { 
    margin: 0, 
    padding: 0 
  },
});

function App() {
  globalStyles();

  return <MyApp />
}`,n={importGlobalCssFunction:m,usingGlobalCssFunction:b};function $(){const l={href:"/docs/features/responsive-styles",label:"Responsive styles"},i={href:"/docs/features/hope-factory",label:"Hope factory"},r=[{href:"#the-globalcss-function",label:"The `globalCss` function"}];return a(()=>{u.highlightAll()}),e(p,{previousLink:l,nextLink:i,contextualNavLinks:r,get children(){return[e(h,{children:"Global styles"}),e(o,{mb:"$8",children:"For handling things like global resets, you can write global CSS styles."}),e(g,{id:"the-globalcss-function",get children(){return["The ",e(t,{children:"globalCss"})," function"]}}),e(o,{mb:"$5",get children(){return["Hope UI expose the ",e(t,{children:"globalCss"})," function from ",e(t,{children:"@stitches/core"}),"."]}}),e(s,{get snippet(){return n.importGlobalCssFunction},mb:"$8"}),e(o,{mb:"$5",children:"This function will return another function, which you must call in your app."}),e(s,{get snippet(){return n.usingGlobalCssFunction},mb:"$8"}),e(o,{get children(){return["If you want to learn more, check out"," ",e(c,{href:"https://stitches.dev/docs/framework-agnostic#global-styles",external:!0,color:"$primary11",fontWeight:"$semibold",children:"stitches"})," ","documentation."]}})]}})}export{$ as default};
