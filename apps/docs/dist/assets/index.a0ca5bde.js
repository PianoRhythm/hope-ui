import{o as y,c as e,d as r,C as n,R as o,aR as d,S as $,Q as a,t as v,m as C,q as w}from"./index.be940cb8.js";import{C as i}from"./CodeSnippet.dd91e945.js";import{P as x,a as S}from"./PageTitle.3ffaedfc.js";import{P as p}from"./Preview.9897c9d6.js";import{P as m}from"./PropsTable.b8c324b3.js";import{S as c}from"./SectionSubtitle.76891ec8.js";import{S as l}from"./SectionTitle.da850280.js";import"./Footer.9ce04e25.js";const P='import { Icon } from "@hope-ui/solid"',T=`// 1. Import
import { Icon } from "@hope-ui/solid"
import { SettingsIcon } from "some-icon-library"

// 2. Use the \`as\` prop
function Example() {
  return <Icon as={SettingsIcon} />
}`,k='import { Icon, createIcon } from "@hope-ui/solid"',U=`<Icon viewBox="0 0 200 200" color="$danger9">
  <path
    fill="currentColor"
    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
  />
</Icon>`,z=`function CircleIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 200 200" {...props}>
      <path 
        fill="currentColor" 
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" 
      />
    </Icon>
  );
}`,B=`<HStack>
  {/* The default icon size is 1em (16px) */}
  <CircleIcon />

  {/* Use the \`boxSize\` prop to change the icon size */}
  <CircleIcon boxSize="$6" />

  {/* Use the \`color\` prop to change the icon color */}
  <CircleIcon boxSize="$8" color="$danger9" />
</HStack>`,A=`import { createIcon } from "@hope-ui/solid"

export const CircleIcon = createIcon({
  viewBox: "0 0 200 200",
  // path is a function that returns JSX
  path: () => (
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  ),
})
`,E="<Icon />",t={importComponent:P,usingThirdPartyIconLibrary:T,importIconAndCreateIcon:k,customIconWithIconComponent:U,customIconAsComponent:z,customIconAsComponentUsage:B,createIconExample:A,fallbackIcon:E};var u=v('<svg><path fill=currentColor d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"></svg>',!1,!0);function h(s){return e(d,C({viewBox:"0 0 200 200"},s,{get children(){return u()}}))}function D(){const s={href:"/docs/data-display/badge",label:"Badge"},g={href:"/docs/data-display/image",label:"Image"},f=[{href:"#import",label:"Import"},{href:"#using-third-party-icon-library",label:"Using a third-party icon library"},{href:"#creating-custom-icons",label:"Creating your custom icons"},{href:"#using-icon-component",label:"Using the `Icon` component",indent:!0},{href:"#using-create-icon-function",label:"Using the `createIcon` function",indent:!0},{href:"#tips",label:"Tips for generating your own icons",indent:!0},{href:"#fallback-icon",label:"Fallback icon"},{href:"#props",label:"Props"},{href:"#icon-props",label:"Icon props",indent:!0},{href:"#create-icon-options",label:"createIcon options",indent:!0}],b=[{name:"viewBox",description:"The viewBox of the icon.",type:"string",defaultValue:"0 0 24 24"},{name:"boxSize",description:"The size (width and height) of the icon.",type:"string",defaultValue:"1em"},{name:"color",description:"The color of the icon.",type:"string",defaultValue:"currentColor"}],I=[{name:"viewBox",description:"The viewBox of the icon.",type:"string",defaultValue:"0 0 24 24"},{name:"path",description:"A function that return the `svg` path or group element.",type:"() => JSX.Element | JSX.Element[]"},{name:"defaultProps",description:"Default props automatically passed to the component; overwriteable.",type:"IconProps"}];return y(()=>{w.highlightAll()}),e(S,{previousLink:s,nextLink:g,contextualNavLinks:f,get children(){return[e(x,{children:"Icon"}),e(r,{mb:"$5",get children(){return["The ",e(n,{children:"Icon"})," component is used to render ",e(n,{children:"svg"}),"."]}}),e(l,{id:"import",children:"Import"}),e(i,{get snippet(){return t.importComponent},mb:"$12"}),e(l,{id:"using-third-party-icon-library",children:"Using a third-party icon library"}),e(r,{mb:"$3",children:"To use third-party icon libraries, here are the steps:"}),e(o.ul,{ps:"$6",mb:"$5",get children(){return[e(o.li,{mb:"$2",get children(){return["Import the ",e(n,{children:"Icon"})," component from ",e(n,{children:"@hope-ui/solid"}),"."]}}),e(o.li,{get children(){return["Pass the desired third party icon into the ",e(n,{children:"as"})," prop."]}})]}}),e(i,{get snippet(){return t.usingThirdPartyIconLibrary},mb:"$12"}),e(l,{id:"creating-custom-icons",children:"Creating your custom icons"}),e(r,{mb:"$3",children:"Hope UI provides two methods for creating your custom icons:"}),e(o.ul,{ps:"$6",mb:"$5",get children(){return[e(o.li,{mb:"$2",get children(){return["Using the ",e(n,{children:"Icon"})," component."]}}),e(o.li,{get children(){return["Using the ",e(n,{children:"createIcon"})," function."]}})]}}),e(r,{mb:"$5",get children(){return["They can be imported from ",e(n,{children:"@hope-ui/solid"}),":"]}}),e(i,{get snippet(){return t.importIconAndCreateIcon},mb:"$10"}),e(c,{id:"using-icon-component",get children(){return["Using the ",e(n,{children:"Icon"})," component"]}}),e(r,{mb:"$5",get children(){return["The ",e(n,{children:"Icon"})," component renders as an ",e(n,{children:"svg"})," element."]}}),e(p,{get snippet(){return t.customIconWithIconComponent},mb:"$8",get children(){return e(d,{viewBox:"0 0 200 200",color:"$danger9",get children(){return u()}})}}),e(r,{mb:"$5",children:"This enables you to define your own custom icon components:"}),e(i,{get snippet(){return t.customIconAsComponent},mb:"$8"}),e(r,{mb:"$5",children:"And style them with style props:"}),e(p,{get snippet(){return t.customIconAsComponentUsage},mb:"$10",get children(){return e($,{get children(){return[e(h,{}),e(h,{boxSize:"$6"}),e(h,{boxSize:"$8",color:"$danger9"})]}})}}),e(c,{id:"using-create-icon-function",get children(){return["Using the ",e(n,{children:"createIcon"})," function"]}}),e(r,{mb:"$5",get children(){return["The ",e(n,{children:"createIcon"})," function is a convenience wrapper around the process of generating icons with ",e(n,{children:"Icon"}),", allowing you to achieve the same functionality with less effort."]}}),e(i,{get snippet(){return t.createIconExample},mb:"$10"}),e(c,{id:"tips",children:"Tips for generating your own icons"}),e(o.ul,{ps:"$6",mb:"$12",get children(){return[e(o.li,{mb:"$2",get children(){return["Export icons as ",e(n,{children:"svg"})," from"," ",e(a,{href:"https://www.figma.com/",external:!0,color:"$primary11",fontWeight:"$semibold",children:"Figma"}),","," ",e(a,{href:"https://www.sketch.com/",external:!0,color:"$primary11",fontWeight:"$semibold",children:"Sketch"}),", etc."]}}),e(o.li,{mb:"$2",get children(){return["Use a tool like"," ",e(a,{href:"https://jakearchibald.github.io/svgomg/",external:!0,color:"$primary11",fontWeight:"$semibold",children:"SvgOmg"})," ","to reduce the size and minify the markup."]}}),e(o.li,{get children(){return["To use the ",e(n,{children:"color"})," style prop, set the ",e(n,{children:"fill"})," or ",e(n,{children:"stroke"})," ","prop of your svg ",e(n,{children:"path"})," to ",e(n,{children:"currentColor"}),"."]}})]}}),e(l,{id:"fallback-icon",children:"Fallback icon"}),e(r,{mb:"$5",get children(){return["When ",e(n,{children:"children"})," is not provided, the ",e(n,{children:"Icon"})," component renders a fallback icon."]}}),e(p,{get snippet(){return t.fallbackIcon},mb:"$12",get children(){return e(d,{})}}),e(l,{id:"props",children:"Props"}),e(r,{mb:"$5",get children(){return[e(n,{children:"Icon"})," render an ",e(n,{children:"svg"}),", you can use any ",e(n,{children:"svg"})," attributes."]}}),e(c,{id:"icon-props",get children(){return[e(n,{children:"Icon"})," props"]}}),e(m,{items:b,mb:"$10"}),e(c,{id:"create-icon-options",get children(){return[e(n,{children:"createIcon"})," options"]}}),e(m,{items:I})]}})}export{D as default};
