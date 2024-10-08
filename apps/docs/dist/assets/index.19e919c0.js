import{o as p,c as e,d as o,C as t,R as h,M as m,D as d,Q as u,e as g,t as s,q as b}from"./index.3c654a9e.js";import{C as r}from"./CodeSnippet.27230f78.js";import{P as y,a as f}from"./PageTitle.05cba558.js";import{P as $}from"./Preview.c3f3de7a.js";import{S}from"./SectionSubtitle.9a34e78b.js";import{S as i}from"./SectionTitle.7cf37368.js";import"./Footer.80959b85.js";const k='import { hope } from "@hope-ui/solid"',w=`<hope.button 
  px="$3" 
  py="$2" 
  bg="$success7"
  rounded="$md" 
  _hover={{ bg: "$success8" }}
>
  Click me
</hope.button>`,x=`import { hope } from "@hope-ui/solid"
import { Link } from "solid-app-router"

const HopeLink = hope(Link)

function Example() {
  return <HopeLink href="#" bg="$danger3" fontSize="12px" />
}`,C=`const HopeLink = hope(Link, {
  baseClass: "my-link",
  baseStyle: {
    color: "$primary9"
  }
})
`,H=`const Card = hope("div", {
  baseClass: "my-card",
  baseStyle: {
    shadow: "$lg",
    rounded: "$lg",
    bg: "white",
  },
})`,n={importHopeFactory:k,hopeJsxElements:w,hopeFactoryFunction:x,attachingStyles:C,attachingStylesJsxElement:H};var v=s("<strong>object of hope enabled JSX elements"),L=s("<strong>function that can be used to enable custom component"),T=s("<strong>non-hope components"),F=s("<strong>jsx element"),J=s("<strong>baseClass");function X(){const a={href:"/docs/features/global-styles",label:"Global styles"},c={href:"/docs/theming/default-theme",label:"Default theme"},l=[{href:"#hope-jsx-elements",label:"Hope JSX elements"},{href:"#hope-factory-function",label:"Hope factory function"}];return p(()=>{b.highlightAll()}),e(f,{previousLink:a,nextLink:c,contextualNavLinks:l,get children(){return[e(y,{children:"Hope factory"}),e(o,{mb:"$5",get children(){return["Hope factory serves as an ",v(),", and also a"," ",L()," receive hope's style props."]}}),e(r,{get snippet(){return n.importHopeFactory},mb:"$12"}),e(i,{id:"hope-jsx-elements",children:"Hope JSX elements"}),e(o,{mb:"$5",get children(){return["Create base html elements with theme-aware style props using"," ",e(t,{children:"hope.<element>"})," notation. For example, if you want a plain html button with ability to pass Hope UI styles, you can write ",e(t,{children:"<hope.button />"}),"."]}}),e($,{get snippet(){return n.hopeJsxElements},mb:"$5",get children(){return e(h.button,{px:"$3",py:"$2",bg:"$success7",rounded:"$md",_hover:{bg:"$success8"},children:"Click me"})}}),e(o,{mb:"$8",children:"This reduces the need to create custom component wrappers and name them. This syntax is available for any html elements."}),e(i,{id:"hope-factory-function",children:"Hope factory function"}),e(o,{mb:"$5",get children(){return["This is a function that converts ",T()," or"," ",F()," to hope-enabled components so you can pass style props to them."]}}),e(o,{mb:"$5",get children(){return["Consider the ",e(t,{children:"Link"})," component of the ",e(t,{children:"solid-app-router"})," package, let's use the hope factory function to make possible to pass style props to it."]}}),e(r,{get snippet(){return n.hopeFactoryFunction},mb:"$5"}),e(m,{status:"warning",mb:"$10",get children(){return e(d,{get children(){return["Considering that Hope UI uses ",e(t,{children:"stitches"})," under the hood, ensure the non-hope component accepts ",e(t,{children:"class"})," as props for this to work correctly"]}})}}),e(S,{children:"Attaching styles"}),e(o,{mb:"$5",children:"In some instances, you might need to attach specific styles to the component wrapped in the hope factory"}),e(r,{get snippet(){return n.attachingStyles},mb:"$8"}),e(o,{mb:"$5",children:"You can also use the hope factory on jsx elements as well."}),e(r,{get snippet(){return n.attachingStylesJsxElement},mb:"$5"}),e(o,{mb:"$5",get children(){return["The ",J()," property is the CSS class to use when targeting this component in a css selector. This class will be applied to the rendered dom element."]}}),e(o,{get children(){return["Taking the above example, in stitches ",e(t,{children:"css()"})," method or Hope UI ",e(t,{children:"css"})," ","prop, if you want to target all ",e(t,{children:"p"})," in the ",e(t,{children:"Card"})," component you can use the css selector ",e(t,{children:"${Card} p"})," and it will evaluate to"," ",e(t,{children:".my-card p"}),'. If you want to learn more, check out "Targeting other SolidJS components" in the'," ",e(u,{as:g,href:"/docs/features/css-prop#targeting-other-solid-components",color:"$primary11",fontWeight:"$semibold",children:"css prop"})," ","documentation."]}})]}})}export{X as default};
