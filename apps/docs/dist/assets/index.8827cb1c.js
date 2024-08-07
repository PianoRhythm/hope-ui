import{o as l,i as a,a as e,j as d,T as o,k as t,t as c}from"./index.ae6bb42f.js";import{C as n}from"./CodeSnippet.efa60d35.js";import{P as h,a as u}from"./PageTitle.cd5064fe.js";import{S as r}from"./SectionTitle.94f12b47.js";import"./Footer.382a3b06.js";const m="npm install @hope-ui/solid @stitches/core solid-transition-group",g="yarn add @hope-ui/solid @stitches/core solid-transition-group",f="pnpm add @hope-ui/solid @stitches/core solid-transition-group",b=`// 1. import \`HopeProvider\` component
import { HopeProvider } from '@hope-ui/solid'

// 2. Wrap HopeProvider at the root of your app
function App() {
  return (
    <HopeProvider>
      <MyApp />
    </HopeProvider>
  )
}`,v=`// 1. Import the \`HopeThemeConfig\` type
import { HopeThemeConfig, HopeProvider } from '@hope-ui/solid'

// 2. Create a theme config to include custom colors, fonts, etc
const config: HopeThemeConfig = {
  lightTheme: {
    colors: {
      primary9: "salmon"
    }
  }
}

// 3. Pass the \`config\` prop to the \`HopeProvider\`
function App() {
  return (
    <HopeProvider config={config}>
      <MyApp />
    </HopeProvider>
  )
}`,i={npmInstall:m,yarnAdd:g,pnpmAdd:f,providerSetup:b,customizeTheme:v},P=c("<strong>Warning:</strong>");function T(){const p={href:"/docs/changelog",label:"Changelog"},s=[{href:"#installation",label:"Installlation"},{href:"#provider-setup",label:"Provider setup"},{href:"#optional-setup",label:"Optional setup"}];return l(()=>{a.highlightAll()}),e(u,{nextLink:p,contextualNavLinks:s,get children(){return[e(h,{children:"Getting Started"}),e(d,{status:"warning",mb:"$4",get children(){return[P.cloneNode(!0),"\xA0Hope UI v0.x is not compatible with Solid Start and doesn't support SSR."]}}),e(r,{id:"installation",children:"Installation"}),e(o,{mb:"$5",children:"Inside your SolidJS project, install Hope UI by running either of the following:"}),e(n,{lang:"bash",get snippet(){return i.npmInstall},mb:"$3"}),e(n,{lang:"bash",get snippet(){return i.yarnAdd},mb:"$3"}),e(n,{lang:"bash",get snippet(){return i.pnpmAdd},mb:"$12"}),e(r,{id:"provider-setup",children:"Provider setup"}),e(o,{mb:"$5",get children(){return["After installing Hope UI, you need to set up the ",e(t,{children:"HopeProvider"})," at the root of your application. This can be either in your ",e(t,{children:"index.jsx"})," or"," ",e(t,{children:"index.tsx"})]}}),e(o,{mb:"$5",children:"Put in the following code:"}),e(n,{get snippet(){return i.providerSetup},mb:"$12"}),e(r,{id:"optional-setup",children:"Optional setup"}),e(o,{mb:"$3",get children(){return["If you intend to customise the default theme to match your design requirements, you can extend the ",e(t,{children:"theme"})," from ",e(t,{children:"@hope-ui/solid"}),"."]}}),e(o,{mb:"$5",get children(){return["The HopeProvider accept a ",e(t,{children:"config"})," prop that deep merges the default theme with your customizations."]}}),e(n,{get snippet(){return i.customizeTheme}})]}})}export{T as default};
