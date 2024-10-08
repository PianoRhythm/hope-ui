import{o as u,c as t,d as e,Q as s,C as o,q as a}from"./index.7fce6435.js";import{C as n}from"./CodeSnippet.08181d9e.js";import{P as h,a as p}from"./PageTitle.ae31f383.js";import{S as d}from"./SectionTitle.028d68a7.js";import"./Footer.0b307416.js";const m='import { css } from "@hope-ui/solid"',f=`import { css } from "@hope-ui/solid"

const myButtonStyles = css({
  backgroundColor: "gainsboro",
  borderRadius: "9999px",
  fontSize: "13px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "lightgray",
  },
})

function MyButton() {
  return <button class={myButtonStyles()}>Button</button>
}`,r={importCssFunction:m,usingCssFunction:f};function v(){const i={href:"/docs/features/css-prop",label:"The css prop"},c={href:"/docs/features/responsive-styles",label:"Responsive styles"},l=[{href:"#the-css-function",label:"The `css` function"}];return u(()=>{a.highlightAll()}),t(p,{previousLink:i,nextLink:c,contextualNavLinks:l,get children(){return[t(h,{children:"Create styles"}),t(e,{mb:"$8",get children(){return["All Hope UI components are built with the"," ",t(s,{href:"https://stitches.dev",external:!0,color:"$primary11",fontWeight:"$semibold",children:"stitches"})," ","css-in-js libary. Meaning you can use all tools available in stitches to create styles in Hope UI."]}}),t(d,{id:"the-css-function",get children(){return["The ",t(o,{children:"css"})," function"]}}),t(e,{mb:"$5",get children(){return["Hope UI expose the ",t(o,{children:"css"})," function from ",t(o,{children:"@stitches/core"})," configured with the Hope UI theme."]}}),t(n,{get snippet(){return r.importCssFunction},mb:"$8"}),t(e,{mb:"$5",children:"If you don't like the style props API or your HTML is comming too verbose the css function is a great way to extract your styles plus you get the full power of the stitches API."}),t(n,{get snippet(){return r.usingCssFunction},mb:"$5"}),t(e,{get children(){return["If you want to learn more, check out"," ",t(s,{href:"https://stitches.dev/docs/framework-agnostic",external:!0,color:"$primary11",fontWeight:"$semibold",children:"stitches"})," ","documentation."]}})]}})}export{v as default};
