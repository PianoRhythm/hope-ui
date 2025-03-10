import{o as a,c as e,n as l,t as d,i as o,C as t,p as h}from"./index-Nxbfex4q.js";import{C as i}from"./CodeSnippet-BKIkSwFL.js";import{P as c,a as u}from"./PageTitle-D0rjqxl5.js";import{S as r}from"./SectionTitle-D4b_6ZYs.js";import"./Footer-DCmuVtpk.js";const m="npm install @hope-ui/solid @stitches/core solid-transition-group",g="yarn add @hope-ui/solid @stitches/core solid-transition-group",f="pnpm add @hope-ui/solid @stitches/core solid-transition-group",b=`// 1. import \`HopeProvider\` component
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
}`,n={npmInstall:m,yarnAdd:g,pnpmAdd:f,providerSetup:b,customizeTheme:v};var P=d("<strong>Warning:");function A(){const p={href:"/docs/changelog",label:"Changelog"},s=[{href:"#installation",label:"Installlation"},{href:"#provider-setup",label:"Provider setup"},{href:"#optional-setup",label:"Optional setup"}];return a(()=>{h.highlightAll()}),e(u,{nextLink:p,contextualNavLinks:s,get children(){return[e(c,{children:"Getting Started"}),e(l,{status:"warning",mb:"$4",get children(){return[P()," Hope UI v0.x is not compatible with Solid Start and doesn't support SSR."]}}),e(r,{id:"installation",children:"Installation"}),e(o,{mb:"$5",children:"Inside your SolidJS project, install Hope UI by running either of the following:"}),e(i,{lang:"bash",get snippet(){return n.npmInstall},mb:"$3"}),e(i,{lang:"bash",get snippet(){return n.yarnAdd},mb:"$3"}),e(i,{lang:"bash",get snippet(){return n.pnpmAdd},mb:"$12"}),e(r,{id:"provider-setup",children:"Provider setup"}),e(o,{mb:"$5",get children(){return["After installing Hope UI, you need to set up the ",e(t,{children:"HopeProvider"})," at the root of your application. This can be either in your ",e(t,{children:"index.jsx"})," or"," ",e(t,{children:"index.tsx"})]}}),e(o,{mb:"$5",children:"Put in the following code:"}),e(i,{get snippet(){return n.providerSetup},mb:"$12"}),e(r,{id:"optional-setup",children:"Optional setup"}),e(o,{mb:"$3",get children(){return["If you intend to customise the default theme to match your design requirements, you can extend the ",e(t,{children:"theme"})," from ",e(t,{children:"@hope-ui/solid"}),"."]}}),e(o,{mb:"$5",get children(){return["The HopeProvider accept a ",e(t,{children:"config"})," prop that deep merges the default theme with your customizations."]}}),e(i,{get snippet(){return n.customizeTheme}})]}})}export{A as default};
