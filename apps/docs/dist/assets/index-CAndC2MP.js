import{o as b,c as e,i as t,C as i,n as c,E as d,r as y,A as $,F as x,N as h,W as u,M as w,q as v,O as m,K as o,t as k,a,B,p as S}from"./index-Nxbfex4q.js";import{C as s}from"./CodeSnippet-BKIkSwFL.js";import{P as W,a as T}from"./PageTitle-D0rjqxl5.js";import{P as C}from"./Preview-Dv-XfG_3.js";import{S as n}from"./SectionTitle-D4b_6ZYs.js";import"./Footer-DCmuVtpk.js";const H=`<Box bg="$primary9" w="400px">
  This is a box
</Box>`,I=`<Box bg="$primary9" w={{ "@initial": "300px", "@sm": "400px", "@md": "500px"}}>
  This is a box
</Box>`,j=`<Box
  css={{
    bg: "$primary9", // no need to wrap inside \`@initial\`
    "@sm": {
      bg: "$success9",
    },
    "@md": {
      bg: "$info9",
    },
  }}
>
  Box
</Box>`,F=`import { css } from "@hope-ui/solid";

const cardStyles = css({
  borderRadius: "$lg",
  backgroundColor: "white",

  variants: {
    elevation: {
      sm: {
        boxShadow: "$sm",
      },
      md: {
        boxShadow: "$md",
      },
    },
  },
});

// Inside your component, use the same object syntax as style props
cardStyles({
  elevation: {
    "@initial": "sm", // <- initial value, no breakpoint
    "@lg": "md", // <- value at breakpoint "lg"
  },
});`,P=`<Box p="$4" display={{ "@md": "flex" }}>
  <Box flexShrink={0}>
    <Image
      borderRadius="$lg"
      width={{ "@md": "$40" }}
      src="https://bit.ly/2jYM25F"
      alt="Woman paying for a purchase"
    />
  </Box>
  <Box mt={{ "@initial": "$4", "@md": 0 }} ml={{ "@md": "$6" }}>
    <Text
      fontWeight="$bold"
      textTransform="uppercase"
      fontSize="$sm"
      letterSpacing="$wide"
      color="$primary9"
    >
      Marketing
    </Text>
    <Anchor
      mt="$1"
      display="block"
      fontSize="$lg"
      lineHeight="$normal"
      fontWeight="$semibold"
      href="#"
    >
      Finding customers for your new business
    </Anchor>
    <Text mt="$2" color="$neutral11">
      Getting a new business off the ground is a lot of hard work. Here are five ideas you
      can use to find your first customers.
    </Text>
  </Box>
</Box>`,r={initialBox:H,boxWithResponsiveWidth:I,usageWithCssProp:j,usageWithCssFunction:F,demo:P};var U=k("<strong>(resize your browser to see it in action):");const R=[{name:"@initial",value:"none"},{name:"@sm",value:"@media (min-width: 640px)"},{name:"@md",value:"@media (min-width: 768px)"},{name:"@lg",value:"@media (min-width: 1024px)"},{name:"@xl",value:"@media (min-width: 1280px)"},{name:"@2xl",value:"@media (min-width: 1536px)"}];function G(){const p={href:"/docs/features/create-styles",label:"Create styles"},g={href:"/docs/features/global-styles",label:"Global styles"},f=[{href:"#the-object-syntax",label:"The object syntax"},{href:"#usage-with-css-prop",label:"Usage with the `css` prop"},{href:"#usage-with-css-function",label:"Usage with stitches `css` function"},{href:"#demo",label:"Demo"}];return b(()=>{S.highlightAll()}),e(T,{previousLink:p,nextLink:g,contextualNavLinks:f,get children(){return[e(W,{children:"Responsive styles"}),e(t,{mb:"$5",get children(){return["Hope UI supports responsive styles out of the box. Instead of manually adding"," ",e(i,{children:"@media"})," queries and adding nested styles throughout your code, Hope UI allows you to use an object syntax to add mobile-first responsive styles."]}}),e(c,{status:"info",mb:"$5",get children(){return e(d,{get children(){return["Hope UI use the ",e(i,{children:"@media(min-width)"})," media query to ensure your interfaces are mobile-first."]}})}}),e(t,{mb:"$5",children:"Responsive syntax relies on the following breakpoints defined in the Hope UI theme:"}),e(y.div,{overflowX:"auto",mb:"$8",get children(){return e($,{dense:!0,get children(){return[e(x,{bg:"$neutral2",get children(){return e(h,{get children(){return[e(u,{children:"Name"}),e(u,{children:"Value"})]}})}}),e(w,{color:"$primary11",fontFamily:"$mono",get children(){return e(v,{each:R,children:l=>e(h,{get children(){return[e(m,{get children(){return l.name}}),e(m,{get children(){return l.value}})]}})})}})]}})}}),e(c,{status:"warning",mb:"$8",get children(){return e(d,{get children(){return["Breakpoints are created during the ",e(i,{children:"createStitches"})," call which occurs internally in Hope UI, for this reason it is currently not possible to customize breakpoint values."]}})}}),e(n,{id:"the-object-syntax",children:"The object syntax"}),e(t,{mb:"$4",children:"All style props accept an object as value for mobile-first responsive styles."}),e(t,{mb:"$5",get children(){return["Let's say you have a ",e(i,{children:"Box"})," with the following properties:"]}}),e(s,{get snippet(){return r.initialBox},mb:"$8"}),e(t,{mb:"$5",children:"To make the width responsive here's what you need to do:"}),e(s,{get snippet(){return r.boxWithResponsiveWidth},mb:"$12"}),e(n,{id:"usage-with-css-prop",get children(){return["Usage with the ",e(i,{children:"css"})," prop"]}}),e(t,{mb:"$5",get children(){return["When using responsive styles with the ",e(i,{children:"css"})," prop you don't need the"," ",e(i,{children:"@initial"})," breakpoint. It's like the normal way of creating mobile-first responsive styles in CSS."]}}),e(s,{get snippet(){return r.usageWithCssProp},mb:"$5"}),e(t,{mb:"$8",get children(){return["If you want to learn more, check out the"," ",e(o,{href:"https://stitches.dev/docs/breakpoints#using-breakpoints-in-the-style-objects",external:!0,color:"$primary11",fontWeight:"$semibold",children:"stitches"})," ","documentation."]}}),e(n,{id:"usage-with-css-function",get children(){return["Usage with stitches ",e(i,{children:"css"})," function"]}}),e(t,{mb:"$5",get children(){return["Like style props, variant created with stitches ",e(i,{children:"css"})," function support responsive styles."]}}),e(s,{get snippet(){return r.usageWithCssFunction},mb:"$5"}),e(t,{mb:"$8",get children(){return["If you want to learn more, check out the"," ",e(o,{href:"https://stitches.dev/docs/breakpoints#setting-an-initial-variant",external:!0,color:"$primary11",fontWeight:"$semibold",children:"stitches"})," ","documentation."]}}),e(n,{id:"demo",children:"Demo"}),e(t,{mb:"$5",get children(){return["Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens"," ",U()]}}),e(C,{get snippet(){return r.demo},get children(){return e(a,{p:"$4",display:{"@md":"flex"},get children(){return[e(a,{flexShrink:0,get children(){return e(B,{borderRadius:"$lg",width:{"@md":"$40"},src:"https://bit.ly/2jYM25F",alt:"Woman paying for a purchase"})}}),e(a,{mt:{"@initial":"$4","@md":0},ml:{"@md":"$6"},get children(){return[e(t,{fontWeight:"$bold",textTransform:"uppercase",fontSize:"$sm",letterSpacing:"$wide",color:"$primary9",children:"Marketing"}),e(o,{mt:"$1",display:"block",fontSize:"$lg",lineHeight:"$normal",fontWeight:"$semibold",href:"#",children:"Finding customers for your new business"}),e(t,{mt:"$2",color:"$neutral11",children:"Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers."})]}})]}})}})]}})}export{G as default};
