import{o as p,c as e,d as t,R as s,M as h,D as d,C as o,q as u}from"./index.3c654a9e.js";import{C as n}from"./CodeSnippet.27230f78.js";import{P as f,a as g}from"./PageTitle.05cba558.js";import{S as l}from"./SectionSubtitle.9a34e78b.js";import{S as r}from"./SectionTitle.7cf37368.js";import"./Footer.80959b85.js";const y=`// 1. Import the \`HopeThemeConfig\` type
import { HopeThemeConfig, HopeProvider } from "@hope-ui/solid"

// 2. Create a theme config and pass your custom values
const config: HopeThemeConfig = {
  initialColorMode: "system",
  lightTheme: {
    colors: {
      primary1: "#fefcff",
      // ...
      primary12: "#340c3b", 
    }
  },
  darkTheme: {
    colors: {
      primary1: "#1d131d",
      // ...
      primary12: "#fbecfc", 
    }
  },
  components: {
    // Components base styles...
  }
}

// 3. Pass the config to \`HopeProvider\`
<HopeProvider config={config}>
  <App />
</HopeProvider>

// 4. Now you can use these colors in your components
function Usage() {
  return <Box bg="$primary1">Welcome</Box>
}`,b=`// example theme config
const config: HopeThemeConfig = {
  lightTheme: {
    colors: {
      appBg: "#ffffff",
    }
  },
  darkTheme: {
    colors: {
      appBg: "$neutral3",  // Use the \`$\` prefix to refer to another token in the theme
    }
  },
}`,k=`// example theme config
const config: HopeThemeConfig = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: "$full",
        textTransform: "uppercase",
      },
      defaultProps: {
        variant: "subtle",
        colorScheme: "success",
      }
    }
  }
}`,C=`// example theme config
const config: HopeThemeConfig = {
  components: {
    Alert: {
      baseStyle: {
        // Base style for the <Alert /> component
        root: {
          borderRadius: "$full",
        },
        // Base style for the <AlertIcon /> component
        icon: {
          boxSize: "$8",
        },
        // Base style for the <AlertTitle /> component
        title: {
          fontWeight: "$semibold",
          textTransform: "uppercase",
        },
        // Base style for the <AlertDescription /> component
        description: {
          fontSize: "14px",
        }
      },
      defaultProps: {
        // Default props for the <Alert /> component
        root: {
          variant: "solid",
        },
      }
    }
  }
}`,i={overrideThemeColors:y,tokenAliases:b,singlePartComponentStyles:k,multiPartsComponentStyles:C};function x(){const a={href:"/docs/theming/default-theme",label:"Default theme"},m={href:"/docs/theming/css-variables",label:"CSS variables"},c=[{href:"#customizing-theme-tokens",label:"Customizing theme tokens"},{href:"#token-aliases",label:"Token aliases"},{href:"#customizing-component-styles",label:"Customizing component styles"},{href:"#styling-single-part-components",label:"Styling single-part components",indent:!0},{href:"#styling-muti-parts-components",label:"Styling multi-parts components",indent:!0}];return p(()=>{u.highlightAll()}),e(g,{previousLink:a,nextLink:m,contextualNavLinks:c,get children(){return[e(f,{children:"Customize theme"}),e(t,{mb:"$5",children:"By default, all Hope UI components inherit values from the default theme. In some scenarios, you might need to customize the theme tokens to match your design requirements."}),e(t,{mb:"$3",children:"Here are some options depending on your goals:"}),e(s.ul,{ps:"$5",mb:"$12",get children(){return[e(s.li,{mb:"$2",children:"Customize the theme tokens like colors, font sizes, line heights, etc."}),e(s.li,{children:"Customize components base styles."})]}}),e(r,{id:"customizing-theme-tokens",children:"Customizing theme tokens"}),e(t,{mb:"$5",children:"To override a token in the default theme, create a theme config and add the keys you'd like to override. You can also add new values to the theme."}),e(t,{mb:"$5",children:"For example, if you'd like to override the primary color palette in the theme, here's what you'll do:"}),e(n,{get snippet(){return i.overrideThemeColors},mb:"$5"}),e(h,{status:"warning",mb:"$12",get children(){return e(d,{children:"Custom keys added to the Hope UI theme are not inferred by Typescript and won't appears in IntelliSense."})}}),e(r,{id:"token-aliases",children:"Token aliases"}),e(t,{mb:"$5",get children(){return["Hope UI supports token aliases (aka semantic tokens) in it's theme configuration. For example, you can create an ",e(o,{children:"appBg"})," token representing your application"," ",e(o,{children:"background-color"})," which is ",e(o,{children:"white"})," in light mode and refers to Hope UI ",e(o,{children:"neutral3"})," color token in dark mode:"]}}),e(n,{get snippet(){return i.tokenAliases},mb:"$12"}),e(r,{id:"customizing-component-styles",children:"Customizing component styles"}),e(t,{mb:"$10",get children(){return["Hope UI provides a ",e(o,{children:"components"})," option in it's theme configuration allowing you to globally set base style and default props for each Hope UI components."]}}),e(l,{id:"styling-single-part-components",children:"Styling single-part components"}),e(t,{mb:"$5",get children(){return["Let's say you want all ",e(o,{children:"Button"}),' to have a "pill shape", be uppercased and apply the ',e(o,{children:"subtle"})," variant and ",e(o,{children:"success"})," colorScheme by default, here's what you'll do:"]}}),e(n,{get snippet(){return i.singlePartComponentStyles},mb:"$12"}),e(l,{id:"styling-muti-parts-components",children:"Styling multi-parts components"}),e(t,{mb:"$5",get children(){return["Some Hope UI components are composed of multiple parts that you can stylize. Below is and example for the ",e(o,{children:"Alert"})," component."]}}),e(n,{get snippet(){return i.multiPartsComponentStyles},mb:"$5"}),e(t,{mb:"$5",children:"To know which part of a component can be stylized in the Hope UI theme configuration, please refer to it's documentation."})]}})}export{x as default};
