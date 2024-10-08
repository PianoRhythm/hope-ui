import{o as p,c as e,d as t,C as i,h as l,t as m,n as u}from"./index.68a83398.js";import{C as a}from"./CodeSnippet.dcbd435f.js";import{P as T,a as f}from"./PageTitle.32c0d196.js";import{P as r}from"./Preview.69e3d182.js";import{P as g}from"./PropsTable.3ee1b950.js";import{S as s}from"./SectionSubtitle.826cc245.js";import{S as o}from"./SectionTitle.6fcae084.js";import"./Footer.58752801.js";const b='import { Text } from "@hope-ui/solid"',k="<Text>I'm a Text</Text>",z=`<VStack spacing="$3" alignItems="flex-start">
  <Text size="9xl">(9xl) The quick brown fox</Text>
  <Text size="8xl">(8xl) The quick brown fox</Text>
  <Text size="7xl">(7xl) The quick brown fox</Text>
  <Text size="6xl">(6xl) The quick brown fox</Text>
  <Text size="5xl">(5xl) The quick brown fox</Text>
  <Text size="4xl">(4xl) The quick brown fox</Text>
  <Text size="3xl">(3xl) The quick brown fox</Text>
  <Text size="2xl">(2xl) The quick brown fox</Text>
  <Text size="xl">(xl) The quick brown fox</Text>
  <Text size="lg">(lg) The quick brown fox</Text>
  <Text size="base">(base) The quick brown fox</Text>
  <Text size="sm">(sm) The quick brown fox</Text>
  <Text size="xs">(xs) The quick brown fox</Text>
</VStack>`,w=`<Text noOfLines={1}>
  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
  industries for previewing layouts and visual mockups.
</Text>`,q=`<Text fontSize="50px" color="tomato">
  I'm using a custom font-size value for this text
</Text>`,v=`<VStack alignItems="flex-start">
  <Text as="i">Italic</Text>
  <Text as="u">Underline</Text>
  <Text as="abbr">I18N</Text>
  <Text as="cite">Citation</Text>
  <Text as="del">Deleted</Text>
  <Text as="em">Emphasis</Text>
  <Text as="ins">Inserted</Text>
  <Text as="kbd">Ctrl + C</Text>
  <Text as="mark">Highlighted</Text>
  <Text as="s">Strikethrough</Text>
  <Text as="samp">Sample</Text>
  <Text as="sub">sub</Text>
  <Text as="sup">sup</Text>
</VStack>`,y=`const config: HopeThemeConfig = {
  components: {
    Text: {
      baseStyle: SystemStyleObject,
      defaultProps: ThemeableTextOptions
    }
  }
}`,n={importComponent:b,basicUsage:k,sizes:z,truncateText:w,overrideStyle:q,overrideElement:v,theming:y};var I=m("<strong>Inspect Element");function E(){const h={href:"/docs/typography/heading",label:"Heading"},x={href:"/docs/data-entry/checkbox",label:"Checkbox"},c=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#changing-font-size",label:"Changing the font size",indent:!0},{href:"#truncate-text",label:"Truncate text",indent:!0},{href:"#override-style",label:"Override style",indent:!0},{href:"#override-element",label:"Override the element",indent:!0},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"}],d=[{name:"size",description:"The size of the text. It apply a combination of `font-size` and `line-height`.",type:'"xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"'}];return p(()=>{u.highlightAll()}),e(f,{previousLink:h,nextLink:x,contextualNavLinks:c,get children(){return[e(T,{children:"Text"}),e(t,{mb:"$8",get children(){return[e(i,{children:"Text"})," component is the used to render text and paragraphs within an interface. It renders a ",e(i,{children:"p"})," tag by default."]}}),e(o,{id:"import",children:"Import"}),e(a,{get snippet(){return n.importComponent},mb:"$12"}),e(o,{id:"usage",children:"Usage"}),e(r,{get snippet(){return n.basicUsage},mb:"$12",get children(){return e(t,{children:"I'm a Text"})}}),e(s,{id:"changing-font-size",children:"Changing the font size"}),e(t,{mb:"$5",get children(){return["To increase the font size of the text, you can pass the ",e(i,{children:"size"})," prop. It apply a combination of ",e(i,{children:"fontSize"})," and ",e(i,{children:"lineHeight"})," for an optimal reading experience."]}}),e(r,{get snippet(){return n.sizes},mb:"$12",get children(){return e(l,{spacing:"$3",alignItems:"flex-start",get children(){return[e(t,{size:"9xl",noOfLines:1,children:"(9xl) The quick brown fox"}),e(t,{size:"8xl",noOfLines:1,children:"(8xl) The quick brown fox"}),e(t,{size:"7xl",noOfLines:1,children:"(7xl) The quick brown fox"}),e(t,{size:"6xl",children:"(6xl) The quick brown fox"}),e(t,{size:"5xl",children:"(5xl) The quick brown fox"}),e(t,{size:"4xl",children:"(4xl) The quick brown fox"}),e(t,{size:"3xl",children:"(3xl) The quick brown fox"}),e(t,{size:"2xl",children:"(2xl) The quick brown fox"}),e(t,{size:"xl",children:"(xl) The quick brown fox"}),e(t,{size:"lg",children:"(lg) The quick brown fox"}),e(t,{size:"base",children:"(base) The quick brown fox"}),e(t,{size:"sm",children:"(sm) The quick brown fox"}),e(t,{size:"xs",children:"(xs) The quick brown fox"})]}})}}),e(s,{id:"truncate-text",children:"Truncate text"}),e(t,{mb:"$5",get children(){return["If you'd like to truncate the text after a specific number of lines, pass the"," ",e(i,{children:"noOfLines"})," prop and set it to the desired number of lines. It will render an ellipsis when the text exceeds the width of the viewport or ",e(i,{children:"maxWidth"})," prop."]}}),e(r,{get snippet(){return n.truncateText},mb:"$12",get children(){return e(t,{noOfLines:1,children:"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."})}}),e(s,{id:"override-style",children:"Override style"}),e(t,{mb:"$5",get children(){return["You can change the entire style of the text via props. For example, to change the font size, pass the ",e(i,{children:"fontSize"})," prop."]}}),e(r,{get snippet(){return n.overrideStyle},mb:"$12",get children(){return e(t,{fontSize:"50px",color:"tomato",children:"I'm using a custom font-size value for this text"})}}),e(s,{id:"override-element",children:"Override the element"}),e(t,{mb:"$5",get children(){return["To override the element that gets rendered, pass the ",e(i,{children:"as"})," prop. Use"," ",I()," to see the element that gets rendered in html."]}}),e(r,{get snippet(){return n.overrideElement},mb:"$12",get children(){return e(l,{alignItems:"flex-start",get children(){return[e(t,{as:"i",children:"Italic"}),e(t,{as:"u",children:"Underline"}),e(t,{as:"abbr",children:"I18N"}),e(t,{as:"cite",children:"Citation"}),e(t,{as:"del",children:"Deleted"}),e(t,{as:"em",children:"Emphasis"}),e(t,{as:"ins",children:"Inserted"}),e(t,{as:"kbd",children:"Ctrl + C"}),e(t,{as:"mark",children:"Highlighted"}),e(t,{as:"s",children:"Strikethrough"}),e(t,{as:"samp",children:"Sample"}),e(t,{as:"sub",children:"sub"}),e(t,{as:"sup",children:"sup"})]}})}}),e(o,{id:"theming",children:"Theming"}),e(t,{mb:"$5",get children(){return[e(i,{children:"Text"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(a,{lang:"js",get snippet(){return n.theming},mb:"$12"}),e(o,{id:"props",children:"Props"}),e(g,{items:d})]}})}export{E as default};
