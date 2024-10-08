import{X as v,J as i,o as y,c as e,d as r,M as d,D as a,C as o,f as s,K as $,q as c,A as k,t as w,n as H}from"./index.68a83398.js";import{C as T}from"./CodeSnippet.dcbd435f.js";import{P,a as S}from"./PageTitle.32c0d196.js";import{P as h}from"./Preview.69e3d182.js";import{S as u}from"./SectionSubtitle.826cc245.js";import{S as g}from"./SectionTitle.6fcae084.js";import"./Footer.58752801.js";const x=`import { HopeThemeConfig, HopeProvider } from "@hope-ui/solid"

// 1. Create a theme config
const config: HopeThemeConfig = {
  initialColorMode: "system", // 2. Add your color mode
  // rest of the config...
}

// 3. Pass the \`config\` prop to the \`HopeProvider\`
function App() {
  return (
    <HopeProvider config={config}>
      <MyApp />
    </HopeProvider>
  )
}`,V=`function ColorModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode() === 'light' ? 'dark' : 'light'}
    </Button>
  )
}`,A=`function StyleColorMode() {
  const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue("$danger9", "$info9")
  const color = useColorModeValue("white", "$blackAlpha12")

  return (
    <>
      <Box mb="$4" p="$2" bg={bg()} color={color()}>
        This box's style will change based on the color mode.
      </Box>
      <Button size="sm" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </>
  )
}`,l={initialColorMode:x,useColorMode:V,useColorModeValue:A};var I=w("<div>");function q(){const{colorMode:m,toggleColorMode:n}=v(),p=i("$danger9","$info9"),C=i("white","$blackAlpha12"),b={href:"/docs/theming/css-variables",label:"CSS variables"},f={href:"/docs/general/button",label:"Button"},M=[{href:"#initial-color-mode",label:"Initial color mode"},{href:"#changing-color-mode",label:"Changing color mode"},{href:"#use-color-mode",label:"useColorMode",indent:!0},{href:"#use-color-mode-value",label:"useColorModeValue",indent:!0}];return y(()=>{H.highlightAll()}),e(S,{previousLink:b,nextLink:f,contextualNavLinks:M,get children(){return[e(P,{children:"Color mode"}),e(r,{mb:"$5",children:"Hope UI comes with built-in support for managing color mode in your applications. All Hope UI components are color-mode aware."}),e(d,{status:"info",mb:"$12",get children(){return e(a,{get children(){return["Hope UI stores the color mode in ",e(o,{children:"localStorage"})," and appends a className to the"," ",e(o,{children:"body"})," to ensure the color mode is persistent."]}})}}),e(g,{id:"initial-color-mode",children:"Initial color mode"}),e(r,{mb:"$5",get children(){return["The default color mode used by Hope UI is ",e(o,{children:"light"}),". To set the initial color mode your application should start with, create a theme config, set the"," ",e(o,{children:"initialColorMode"})," to either ",e(o,{children:"light"}),", ",e(o,{children:"dark"})," or"," ",e(o,{children:"system"})," and pass the config to the HopeProvider."]}}),e(T,{get snippet(){return l.initialColorMode},mb:"$6"}),e(d,{status:"warning",mb:"$12",get children(){return e(a,{get children(){return["When using ",e(o,{children:"system"})," as initial color mode, the theme will change with the system preference. However, if another theme is manually selected by the user then that theme will be used on the next page load. To reset it to system preference, simply remove the ",e(o,{children:"hope-ui-color-mode"})," entry from localStorage."]}})}}),e(g,{id:"changing-color-mode",children:"Changing color mode"}),e(r,{mb:"$10",get children(){return["To manage color mode in your application, Hope UI exposes the ",e(o,{children:"useColorMode"})," and"," ",e(o,{children:"useColorModeValue"})," hooks."]}}),e(u,{id:"use-color-mode",children:"useColorMode"}),e(r,{mb:"$5",get children(){return[e(o,{children:"useColorMode"})," is a custom hook that gives you an accessor to get the current color mode, and a function to toggle it."]}}),e(h,{get snippet(){return l.useColorMode},mb:"$5",get children(){return e(s,{onClick:n,get children(){return["Toggle ",$(()=>m()==="light"?"dark":"light")]}})}}),e(r,{mb:"$10",get children(){return["Calling ",e(o,{children:"toggleColorMode"})," anywhere in your app tree toggles the color mode from",e(o,{children:"light"})," or ",e(o,{children:"dark"})," and vice versa."]}}),e(u,{id:"use-color-mode-value",children:"useColorModeValue"}),e(r,{mb:"$5",get children(){return[e(o,{children:"useColorModeValue"})," is a custom hook used to change any value or style based on the color mode. It takes 2 arguments: the value in light mode, the value in dark mode and returns a derived signal with the correct value based on the color mode."]}}),e(r,{mb:"$5",get children(){return["Here's an example that changes the ",e(o,{children:"background-color"})," and ",e(o,{children:"color"})," ","using the ",e(o,{children:"useColorModeValue"})," hook."]}}),e(h,{get snippet(){return l.useColorModeValue},get children(){var t=I();return c(t,e(k,{mb:"$4",p:"$2",get bg(){return p()},get color(){return C()},children:"This box's style will change based on the color mode."}),null),c(t,e(s,{size:"sm",onClick:n,children:"Toggle Mode"}),null),t}})]}})}export{q as default};
