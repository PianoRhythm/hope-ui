import{o as a,i as c,a as e,T as o,k as t,A as u}from"./index.89d43b35.js";import{C as n}from"./CodeSnippet.021fadc0.js";import{P as h,a as p}from"./PageTitle.0ac24377.js";import{S as g}from"./SectionTitle.160463b3.js";import"./Footer.a89cc95f.js";const m='import { globalCss } from "@hope-ui/solid"',b=`import { globalCss } from "@hope-ui/solid"

const globalStyles = globalCss({
  '*': { 
    margin: 0, 
    padding: 0 
  },
});

function App() {
  globalStyles();

  return <MyApp />
}`,s={importGlobalCssFunction:m,usingGlobalCssFunction:b};function x(){const l={href:"/docs/features/responsive-styles",label:"Responsive styles"},i={href:"/docs/features/hope-factory",label:"Hope factory"},r=[{href:"#the-globalcss-function",label:"The `globalCss` function"}];return a(()=>{c.highlightAll()}),e(p,{previousLink:l,nextLink:i,contextualNavLinks:r,get children(){return[e(h,{children:"Global styles"}),e(o,{mb:"$8",children:"For handling things like global resets, you can write global CSS styles."}),e(g,{id:"the-globalcss-function",get children(){return["The ",e(t,{children:"globalCss"})," function"]}}),e(o,{mb:"$5",get children(){return["Hope UI expose the ",e(t,{children:"globalCss"})," function from ",e(t,{children:"@stitches/core"}),"."]}}),e(n,{get snippet(){return s.importGlobalCssFunction},mb:"$8"}),e(o,{mb:"$5",children:"This function will return another function, which you must call in your app."}),e(n,{get snippet(){return s.usingGlobalCssFunction},mb:"$8"}),e(o,{get children(){return["If you want to learn more, check out"," ",e(u,{href:"https://stitches.dev/docs/framework-agnostic#global-styles",external:!0,color:"$primary11",fontWeight:"$semibold",children:"stitches"})," ","documentation."]}})]}})}export{x as default};
