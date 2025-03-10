import{v as f,s as b,c as e,m as x,q as y,g as w,b as $,a as A,d as S,r as m,w as W,o as z,i as a,C as n,K as u,n as g,E as k,p as I}from"./index-Nxbfex4q.js";import{C as i}from"./CodeSnippet-BKIkSwFL.js";import{P as v,a as B}from"./PageTitle-D0rjqxl5.js";import{S as t}from"./SectionSubtitle-BnAf6Y1E.js";import{S as l}from"./SectionTitle-D4b_6ZYs.js";import"./Footer-DCmuVtpk.js";function o(h){const c=f(),[p,r]=b(h,["scale"]);return e(W,x({templateColumns:{"@initial":"repeat(2, minmax(0, 1fr))","@md":"repeat(3, minmax(0, 1fr))"},gap:"$6"},r,{get children(){return e(y,{get each(){return p.scale},children:d=>e(w,{get children(){return e($,{spacing:"$3",get children(){return[e(A,{boxSize:{"@initial":"$10","@sm":"$12"},rounded:"$md",shadow:"$inner",get bg(){return c().colors[d.token].value}}),e(S,{alignItems:"flex-start",get children(){return[e(m.span,{fontSize:"$sm",fontWeight:"$semibold",get children(){return d.name}}),e(m.span,{fontSize:"$sm",textTransform:"uppercase",get children(){return c().colors[d.token].value}})]}})]}})}})})}}))}const C=`<Box bg="$primary9" w="$40" p="$4" color="$whiteAlpha12">
  This is the Box
</Box>`,P=`// example theme object
export default {
  colors: {
    primary1: "#fefcff",
    primary2: "#fff8ff",
    primary3: "#fceffc",
    primary4: "#f9e5f9",
    primary5: "#f3d9f4",
    primary6: "#ebc8ed",
    primary7: "#dfafe3",
    primary8: "#cf91d8",
    primary9: "#ab4aba",
    primary10: "#a43cb4",
    primary11: "#9c2bad",
    primary12: "#340c3b", 
  }
}`,N=`// example theme object
export default {
  fonts: {
    sans: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  fontSizes: {
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: 2,
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  }
}`,T=`// example theme object
export default {
  space: {
    px: "1px",
    "0_5": "0.125rem",
    "1": "0.25rem",
    "1_5": "0.375rem",
    "2": "0.5rem",
    "2_5": "0.625rem",
    "3": "0.75rem",
    "3_5": "0.875rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
    "12": "3rem",
    "14": "3.5rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "28": "7rem",
    "32": "8rem",
    "36": "9rem",
    "40": "10rem",
    "44": "11rem",
    "48": "12rem",
    "52": "13rem",
    "56": "14rem",
    "60": "15rem",
    "64": "16rem",
    "72": "18rem",
    "80": "20rem",
    "96": "24rem",
  }
}`,j=`// example theme object
export default {
  sizes: {
    ...space,
    prose: "65ch",
    max: "max-content",
    min: "min-content",
    full: "100%",
    screenW: "100vw",
    screenH: "100vh",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    containerSm: "640px",
    containerMd: "768px",
    containerLg: "1024px",
    containerXl: "1280px",
    container2xl: "1536px",
  }
}`,D=`// example theme object
export default {
  radii: {
    none: "0",
    xs: "0.125rem",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  }
}`,H=`// example theme object
export default {
  shadows: {
    none: "0 0 #0000",
    xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    sm: "0 1px 3px 0 rgb(0 0 0 / 0.09), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.09), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.09), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.09), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.24)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.06)",
  }
}`,U=`// example theme object
export default {
  zIndices: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    sticky: 1000,
    banner: 1100,
    overlay: 1200,
    modal: 1300,
    dropdown: 1400,
    popover: 1500,
    tooltip: 1600,
    skipLink: 1700,
    toast: 1800,
  }
}`,s={usage:C,colors:P,typography:N,space:T,sizes:j,radii:D,shadows:H,zIndices:U};function K(){const h={href:"/docs/features/hope-factory",label:"Hope factory"},c={href:"/docs/theming/customize-theme",label:"Customize theme"},p=[{href:"#usage",label:"Usage"},{href:"#colors",label:"Colors"},{href:"#black-alpha",label:"Black alpha",indent:!0},{href:"#white-alpha",label:"White alpha",indent:!0},{href:"#primary",label:"Primary",indent:!0},{href:"#accent",label:"Accent",indent:!0},{href:"#neutral",label:"Neutral",indent:!0},{href:"#success",label:"Success",indent:!0},{href:"#info",label:"Info",indent:!0},{href:"#warning",label:"Warning",indent:!0},{href:"#danger",label:"Danger",indent:!0},{href:"#typography",label:"Typography"},{href:"#space",label:"Space"},{href:"#sizes",label:"Sizes"},{href:"#radii",label:"Radii (Border radius)"},{href:"#shadows",label:"Shadows"},{href:"#z-indices",label:"z-index values"}],r={blackAlpha:[{name:"Black alpha 1",token:"blackAlpha1"},{name:"Black alpha 2",token:"blackAlpha2"},{name:"Black alpha 3",token:"blackAlpha3"},{name:"Black alpha 4",token:"blackAlpha4"},{name:"Black alpha 5",token:"blackAlpha5"},{name:"Black alpha 6",token:"blackAlpha6"},{name:"Black alpha 7",token:"blackAlpha7"},{name:"Black alpha 8",token:"blackAlpha8"},{name:"Black alpha 9",token:"blackAlpha9"},{name:"Black alpha 10",token:"blackAlpha10"},{name:"Black alpha 11",token:"blackAlpha11"},{name:"Black alpha 12",token:"blackAlpha12"}],whiteAlpha:[{name:"White alpha 1",token:"whiteAlpha1"},{name:"White alpha 2",token:"whiteAlpha2"},{name:"White alpha 3",token:"whiteAlpha3"},{name:"White alpha 4",token:"whiteAlpha4"},{name:"White alpha 5",token:"whiteAlpha5"},{name:"White alpha 6",token:"whiteAlpha6"},{name:"White alpha 7",token:"whiteAlpha7"},{name:"White alpha 8",token:"whiteAlpha8"},{name:"White alpha 9",token:"whiteAlpha9"},{name:"White alpha 10",token:"whiteAlpha10"},{name:"White alpha 11",token:"whiteAlpha11"},{name:"White alpha 12",token:"whiteAlpha12"}],primary:[{name:"Primary 1",token:"primary1"},{name:"Primary 2",token:"primary2"},{name:"Primary 3",token:"primary3"},{name:"Primary 4",token:"primary4"},{name:"Primary 5",token:"primary5"},{name:"Primary 6",token:"primary6"},{name:"Primary 7",token:"primary7"},{name:"Primary 8",token:"primary8"},{name:"Primary 9",token:"primary9"},{name:"Primary 10",token:"primary10"},{name:"Primary 11",token:"primary11"},{name:"Primary 12",token:"primary12"}],accent:[{name:"Accent 1",token:"accent1"},{name:"Accent 2",token:"accent2"},{name:"Accent 3",token:"accent3"},{name:"Accent 4",token:"accent4"},{name:"Accent 5",token:"accent5"},{name:"Accent 6",token:"accent6"},{name:"Accent 7",token:"accent7"},{name:"Accent 8",token:"accent8"},{name:"Accent 9",token:"accent9"},{name:"Accent 10",token:"accent10"},{name:"Accent 11",token:"accent11"},{name:"Accent 12",token:"accent12"}],neutral:[{name:"Neutral 1",token:"neutral1"},{name:"Neutral 2",token:"neutral2"},{name:"Neutral 3",token:"neutral3"},{name:"Neutral 4",token:"neutral4"},{name:"Neutral 5",token:"neutral5"},{name:"Neutral 6",token:"neutral6"},{name:"Neutral 7",token:"neutral7"},{name:"Neutral 8",token:"neutral8"},{name:"Neutral 9",token:"neutral9"},{name:"Neutral 10",token:"neutral10"},{name:"Neutral 11",token:"neutral11"},{name:"Neutral 12",token:"neutral12"}],success:[{name:"Success 1",token:"success1"},{name:"Success 2",token:"success2"},{name:"Success 3",token:"success3"},{name:"Success 4",token:"success4"},{name:"Success 5",token:"success5"},{name:"Success 6",token:"success6"},{name:"Success 7",token:"success7"},{name:"Success 8",token:"success8"},{name:"Success 9",token:"success9"},{name:"Success 10",token:"success10"},{name:"Success 11",token:"success11"},{name:"Success 12",token:"success12"}],info:[{name:"Info 1",token:"info1"},{name:"Info 2",token:"info2"},{name:"Info 3",token:"info3"},{name:"Info 4",token:"info4"},{name:"Info 5",token:"info5"},{name:"Info 6",token:"info6"},{name:"Info 7",token:"info7"},{name:"Info 8",token:"info8"},{name:"Info 9",token:"info9"},{name:"Info 10",token:"info10"},{name:"Info 11",token:"info11"},{name:"Info 12",token:"info12"}],warning:[{name:"Warning 1",token:"warning1"},{name:"Warning 2",token:"warning2"},{name:"Warning 3",token:"warning3"},{name:"Warning 4",token:"warning4"},{name:"Warning 5",token:"warning5"},{name:"Warning 6",token:"warning6"},{name:"Warning 7",token:"warning7"},{name:"Warning 8",token:"warning8"},{name:"Warning 9",token:"warning9"},{name:"Warning 10",token:"warning10"},{name:"Warning 11",token:"warning11"},{name:"Warning 12",token:"warning12"}],danger:[{name:"Danger 1",token:"danger1"},{name:"Danger 2",token:"danger2"},{name:"Danger 3",token:"danger3"},{name:"Danger 4",token:"danger4"},{name:"Danger 5",token:"danger5"},{name:"Danger 6",token:"danger6"},{name:"Danger 7",token:"danger7"},{name:"Danger 8",token:"danger8"},{name:"Danger 9",token:"danger9"},{name:"Danger 10",token:"danger10"},{name:"Danger 11",token:"danger11"},{name:"Danger 12",token:"danger12"}]};return z(()=>{I.highlightAll()}),e(B,{previousLink:h,nextLink:c,contextualNavLinks:p,get children(){return[e(v,{children:"Default theme"}),e(a,{mb:"$8",children:"The theme object is where you define your application's color palette, type scale, font stacks, border radius values, and more."}),e(l,{id:"usage",children:"Usage"}),e(a,{mb:"$5",get children(){return["Many CSS properties used in style props or stitches's ",e(n,{children:"css"})," function are mapped to a scale from the Hope UI theme. The list of CSS property / theme token mapping is available on the"," ",e(u,{href:"https://stitches.dev/docs/tokens#property-mapping",external:!0,color:"$primary11",fontWeight:"$semibold",children:"stitches"})," ","documentation."]}}),e(a,{mb:"$5",get children(){return["To apply a token you need to prefix it with a ",e(n,{children:"$"})," sign."]}}),e(i,{get snippet(){return s.usage},mb:"$12"}),e(l,{id:"colors",children:"Colors"}),e(a,{mb:"$5",get children(){return["The ",e(n,{children:"colors"})," key allows you to customize the color palettes for your project."]}}),e(a,{mb:"$5",get children(){return["Hope UI uses"," ",e(u,{href:"https://www.radix-ui.com/colors",external:!0,color:"$primary11",fontWeight:"$semibold",children:"Radix Colors"})," ","in its default theme. Radix Colors are designed to be accessible, well-balanced, harmonious and provide light and dark palette for each of their colors."]}}),e(g,{status:"warning",mb:"$5",get children(){return e(k,{children:"Since Hope UI components are built with Radix Colors, unless you have any design skills, the recommended way of customizing colors is to pick a light and dark scale from Radix Colors in order to keep all components accessible and dark mode friendly."})}}),e(i,{get snippet(){return s.colors},mb:"$8"}),e(a,{mb:"$8",get children(){return["Below are the list of all colors available in the default Hope UI theme. For semantic colors like ",e(n,{children:"primary"}),", switching to dark mode will show the proper hex values from the dark palette."]}}),e(t,{id:"black-alpha",children:"Black alpha"}),e(o,{get scale(){return r.blackAlpha},mb:"$10"}),e(t,{id:"white-alpha",children:"White alpha"}),e(o,{get scale(){return r.whiteAlpha},mb:"$10"}),e(t,{id:"primary",children:"Primary"}),e(o,{get scale(){return r.primary},mb:"$10"}),e(t,{id:"accent",children:"Accent"}),e(o,{get scale(){return r.accent},mb:"$10"}),e(t,{id:"neutral",children:"Neutral"}),e(o,{get scale(){return r.neutral},mb:"$10"}),e(t,{id:"success",children:"Success"}),e(o,{get scale(){return r.success},mb:"$10"}),e(t,{id:"info",children:"Info"}),e(o,{get scale(){return r.info},mb:"$10"}),e(t,{id:"warning",children:"Warning"}),e(o,{get scale(){return r.warning},mb:"$10"}),e(t,{id:"danger",children:"Danger"}),e(o,{get scale(){return r.danger},mb:"$12"}),e(l,{id:"typography",children:"Typography"}),e(a,{mb:"$2",children:"To manage typography options, the theme object supports the following keys:"}),e(m.ul,{ps:"$5",mb:"$5",get children(){return[e(m.li,{mb:"$2",get children(){return[e(n,{children:"fonts"})," (font families)"]}}),e(m.li,{mb:"$2",get children(){return e(n,{children:"fontSizes"})}}),e(m.li,{mb:"$2",get children(){return e(n,{children:"fontWeights"})}}),e(m.li,{mb:"$2",get children(){return e(n,{children:"lineHeights"})}}),e(m.li,{mb:"$2",get children(){return e(n,{children:"letterSpacings"})}})]}}),e(i,{get snippet(){return s.typography},mb:"$12"}),e(l,{id:"space",children:"Space"}),e(a,{mb:"$5",get children(){return["The ",e(n,{children:"space"})," key allows you to customize the global spacing scale for your project."]}}),e(i,{get snippet(){return s.space},mb:"$5"}),e(g,{status:"info",mb:"$12",get children(){return e(k,{get children(){return[e(n,{children:"0_5"})," actually means ",e(n,{children:"0.5"}),", unfortunately stitches doesn't allow dots in theme token names."]}})}}),e(l,{id:"sizes",children:"Sizes"}),e(a,{mb:"$5",get children(){return["The ",e(n,{children:"sizes"})," key allows you to customize the global sizing of components you build for your project."]}}),e(i,{get snippet(){return s.sizes},mb:"$12"}),e(l,{id:"radii",children:"Radii (Border radius)"}),e(a,{mb:"$5",get children(){return["Hope UI provides a set of smooth corner radius values. The ",e(n,{children:"radii"})," key allows you to customize the global radii scale for your project."]}}),e(i,{get snippet(){return s.radii},mb:"$12"}),e(l,{id:"shadows",children:"Shadows"}),e(a,{mb:"$5",get children(){return["Hope UI provides a default set of shadows. The ",e(n,{children:"shadows"})," key allows you to customize the global shadow scale for your project."]}}),e(i,{get snippet(){return s.shadows},mb:"$12"}),e(l,{id:"z-indices",children:"z-index values"}),e(a,{mb:"$5",children:"hope UI provides a set of z-indices out of the box to help control the stacking order of components."}),e(i,{get snippet(){return s.zIndices}})]}})}export{K as default};
