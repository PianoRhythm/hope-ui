import{o as f,i as y,a as e,T as t,k as i,j as c,J as d,E as $,r as x,v as w,w as h,x as u,y as v,p as k,z as m,A as o,B as a,K as T,t as B}from"./index.a444b6d0.js";import{C as s}from"./CodeSnippet.2c4cc430.js";import{P as S,a as W}from"./PageTitle.a673b96d.js";import{P as I}from"./Preview.53e3dd3e.js";import{S as n}from"./SectionTitle.b364acd5.js";import"./Footer.ecd1aa5f.js";const j=`<Box bg="$primary9" w="400px">
  This is a box
</Box>`,C=`<Box bg="$primary9" w={{ "@initial": "300px", "@sm": "400px", "@md": "500px"}}>
  This is a box
</Box>`,H=`<Box
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
</Box>`,L=`import { css } from "@hope-ui/solid";

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
});`,U=`<Box p="$4" display={{ "@md": "flex" }}>
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
</Box>`,r={initialBox:j,boxWithResponsiveWidth:C,usageWithCssProp:H,usageWithCssFunction:L,demo:U},A=B("<strong>(resize your browser to see it in action):</strong>"),F=[{name:"@initial",value:"none"},{name:"@sm",value:"@media (min-width: 640px)"},{name:"@md",value:"@media (min-width: 768px)"},{name:"@lg",value:"@media (min-width: 1024px)"},{name:"@xl",value:"@media (min-width: 1280px)"},{name:"@2xl",value:"@media (min-width: 1536px)"}];function G(){const p={href:"/docs/features/create-styles",label:"Create styles"},g={href:"/docs/features/global-styles",label:"Global styles"},b=[{href:"#the-object-syntax",label:"The object syntax"},{href:"#usage-with-css-prop",label:"Usage with the `css` prop"},{href:"#usage-with-css-function",label:"Usage with stitches `css` function"},{href:"#demo",label:"Demo"}];return f(()=>{y.highlightAll()}),e(W,{previousLink:p,nextLink:g,contextualNavLinks:b,get children(){return[e(S,{children:"Responsive styles"}),e(t,{mb:"$5",get children(){return["Hope UI supports responsive styles out of the box. Instead of manually adding"," ",e(i,{children:"@media"})," queries and adding nested styles throughout your code, Hope UI allows you to use an object syntax to add mobile-first responsive styles."]}}),e(c,{status:"info",mb:"$5",get children(){return e(d,{get children(){return["Hope UI use the ",e(i,{children:"@media(min-width)"})," media query to ensure your interfaces are mobile-first."]}})}}),e(t,{mb:"$5",children:"Responsive syntax relies on the following breakpoints defined in the Hope UI theme:"}),e($.div,{overflowX:"auto",mb:"$8",get children(){return e(x,{dense:!0,get children(){return[e(w,{bg:"$neutral2",get children(){return e(h,{get children(){return[e(u,{children:"Name"}),e(u,{children:"Value"})]}})}}),e(v,{color:"$primary11",fontFamily:"$mono",get children(){return e(k,{each:F,children:l=>e(h,{get children(){return[e(m,{get children(){return l.name}}),e(m,{get children(){return l.value}})]}})})}})]}})}}),e(c,{status:"warning",mb:"$8",get children(){return e(d,{get children(){return["Breakpoints are created during the ",e(i,{children:"createStitches"})," call which occurs internally in Hope UI, for this reason it is currently not possible to customize breakpoint values."]}})}}),e(n,{id:"the-object-syntax",children:"The object syntax"}),e(t,{mb:"$4",children:"All style props accept an object as value for mobile-first responsive styles."}),e(t,{mb:"$5",get children(){return["Let's say you have a ",e(i,{children:"Box"})," with the following properties:"]}}),e(s,{get snippet(){return r.initialBox},mb:"$8"}),e(t,{mb:"$5",children:"To make the width responsive here's what you need to do:"}),e(s,{get snippet(){return r.boxWithResponsiveWidth},mb:"$12"}),e(n,{id:"usage-with-css-prop",get children(){return["Usage with the ",e(i,{children:"css"})," prop"]}}),e(t,{mb:"$5",get children(){return["When using responsive styles with the ",e(i,{children:"css"})," prop you don't need the"," ",e(i,{children:"@initial"})," breakpoint. It's like the normal way of creating mobile-first responsive styles in CSS."]}}),e(s,{get snippet(){return r.usageWithCssProp},mb:"$5"}),e(t,{mb:"$8",get children(){return["If you want to learn more, check out the"," ",e(o,{href:"https://stitches.dev/docs/breakpoints#using-breakpoints-in-the-style-objects",external:!0,color:"$primary11",fontWeight:"$semibold",children:"stitches"})," ","documentation."]}}),e(n,{id:"usage-with-css-function",get children(){return["Usage with stitches ",e(i,{children:"css"})," function"]}}),e(t,{mb:"$5",get children(){return["Like style props, variant created with stitches ",e(i,{children:"css"})," function support responsive styles."]}}),e(s,{get snippet(){return r.usageWithCssFunction},mb:"$5"}),e(t,{mb:"$8",get children(){return["If you want to learn more, check out the"," ",e(o,{href:"https://stitches.dev/docs/breakpoints#setting-an-initial-variant",external:!0,color:"$primary11",fontWeight:"$semibold",children:"stitches"})," ","documentation."]}}),e(n,{id:"demo",children:"Demo"}),e(t,{mb:"$5",get children(){return["Here's a simple example of a marketing page component that uses a stacked layout on small screens, and a side-by-side layout on larger screens"," ",A.cloneNode(!0)]}}),e(I,{get snippet(){return r.demo},get children(){return e(a,{p:"$4",display:{"@md":"flex"},get children(){return[e(a,{flexShrink:0,get children(){return e(T,{borderRadius:"$lg",width:{"@md":"$40"},src:"https://bit.ly/2jYM25F",alt:"Woman paying for a purchase"})}}),e(a,{mt:{"@initial":"$4","@md":0},ml:{"@md":"$6"},get children(){return[e(t,{fontWeight:"$bold",textTransform:"uppercase",fontSize:"$sm",letterSpacing:"$wide",color:"$primary9",children:"Marketing"}),e(o,{mt:"$1",display:"block",fontSize:"$lg",lineHeight:"$normal",fontWeight:"$semibold",href:"#",children:"Finding customers for your new business"}),e(t,{mt:"$2",color:"$neutral11",children:"Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers."})]}})]}})}})]}})}export{G as default};
