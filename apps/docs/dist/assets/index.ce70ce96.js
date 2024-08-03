import{o as p,i as h,a as e,T as o,k as t,E as m,j as d,J as u,A as g,L as b,t as s}from"./index.89d43b35.js";import{C as r}from"./CodeSnippet.021fadc0.js";import{P as y,a as f}from"./PageTitle.0ac24377.js";import{P as $}from"./Preview.d747c394.js";import{S as k}from"./SectionSubtitle.3a7a6cd4.js";import{S as i}from"./SectionTitle.160463b3.js";import"./Footer.a89cc95f.js";const x='import { hope } from "@hope-ui/solid"',S=`<hope.button 
  px="$3" 
  py="$2" 
  bg="$success7"
  rounded="$md" 
  _hover={{ bg: "$success8" }}
>
  Click me
</hope.button>`,w=`import { hope } from "@hope-ui/solid"
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
`,L=`const Card = hope("div", {
  baseClass: "my-card",
  baseStyle: {
    shadow: "$lg",
    rounded: "$lg",
    bg: "white",
  },
})`,n={importHopeFactory:x,hopeJsxElements:S,hopeFactoryFunction:w,attachingStyles:C,attachingStylesJsxElement:L},H=s("<strong>object of hope enabled JSX elements</strong>"),v=s("<strong>function that can be used to enable custom component</strong>"),T=s("<strong>non-hope components</strong>"),J=s("<strong>jsx element</strong>"),F=s("<strong>baseClass</strong>");function U(){const a={href:"/docs/features/global-styles",label:"Global styles"},c={href:"/docs/theming/default-theme",label:"Default theme"},l=[{href:"#hope-jsx-elements",label:"Hope JSX elements"},{href:"#hope-factory-function",label:"Hope factory function"}];return p(()=>{h.highlightAll()}),e(f,{previousLink:a,nextLink:c,contextualNavLinks:l,get children(){return[e(y,{children:"Hope factory"}),e(o,{mb:"$5",get children(){return["Hope factory serves as an ",H.cloneNode(!0),", and also a"," ",v.cloneNode(!0)," receive hope's style props."]}}),e(r,{get snippet(){return n.importHopeFactory},mb:"$12"}),e(i,{id:"hope-jsx-elements",children:"Hope JSX elements"}),e(o,{mb:"$5",get children(){return["Create base html elements with theme-aware style props using"," ",e(t,{children:"hope.<element>"})," notation. For example, if you want a plain html button with ability to pass Hope UI styles, you can write ",e(t,{children:"<hope.button />"}),"."]}}),e($,{get snippet(){return n.hopeJsxElements},mb:"$5",get children(){return e(m.button,{px:"$3",py:"$2",bg:"$success7",rounded:"$md",_hover:{bg:"$success8"},children:"Click me"})}}),e(o,{mb:"$8",children:"This reduces the need to create custom component wrappers and name them. This syntax is available for any html elements."}),e(i,{id:"hope-factory-function",children:"Hope factory function"}),e(o,{mb:"$5",get children(){return["This is a function that converts ",T.cloneNode(!0)," or"," ",J.cloneNode(!0)," to hope-enabled components so you can pass style props to them."]}}),e(o,{mb:"$5",get children(){return["Consider the ",e(t,{children:"Link"})," component of the ",e(t,{children:"solid-app-router"})," package, let's use the hope factory function to make possible to pass style props to it."]}}),e(r,{get snippet(){return n.hopeFactoryFunction},mb:"$5"}),e(d,{status:"warning",mb:"$10",get children(){return e(u,{get children(){return["Considering that Hope UI uses ",e(t,{children:"stitches"})," under the hood, ensure the non-hope component accepts ",e(t,{children:"class"})," as props for this to work correctly"]}})}}),e(k,{children:"Attaching styles"}),e(o,{mb:"$5",children:"In some instances, you might need to attach specific styles to the component wrapped in the hope factory"}),e(r,{get snippet(){return n.attachingStyles},mb:"$8"}),e(o,{mb:"$5",children:"You can also use the hope factory on jsx elements as well."}),e(r,{get snippet(){return n.attachingStylesJsxElement},mb:"$5"}),e(o,{mb:"$5",get children(){return["The ",F.cloneNode(!0)," property is the CSS class to use when targeting this component in a css selector. This class will be applied to the rendered dom element."]}}),e(o,{get children(){return["Taking the above example, in stitches ",e(t,{children:"css()"})," method or Hope UI ",e(t,{children:"css"})," ","prop, if you want to target all ",e(t,{children:"p"})," in the ",e(t,{children:"Card"})," component you can use the css selector ",e(t,{children:"${Card} p"})," and it will evaluate to"," ",e(t,{children:".my-card p"}),'. If you want to learn more, check out "Targeting other SolidJS components" in the'," ",e(g,{as:b,href:"/docs/features/css-prop#targeting-other-solid-components",color:"$primary11",fontWeight:"$semibold",children:"css prop"})," ","documentation."]}})]}})}export{U as default};
