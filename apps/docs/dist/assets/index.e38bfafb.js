import{o as h,c as e,C as r,d as t,Q as u,e as g,H as s,L as c,q as m}from"./index.3c654a9e.js";import{C as a}from"./CodeSnippet.27230f78.js";import{P as y,a as S}from"./PageTitle.05cba558.js";import{P as i}from"./Preview.c3f3de7a.js";import{S as n}from"./SectionTitle.7cf37368.js";import"./Footer.80959b85.js";const b=`<Box 
  as="img"
  src='http://placekitten.com/200/300'
  alt='a kitten'
  css={{ filter: 'blur(8px)' }}
/>
`,f=`<Box css={{ "--my-color": "#53c8c4" }}>
  <Heading color="var(--my-color)" size="4xl">
    This uses CSS Custom Properties!
  </Heading>
</Box>`,C=`<Box borderWidth={2} borderColor="$primary9" p="$5" class="my-box">
  <Heading size="4xl">
    Hover the box...
    <Box
      as="span"
      color="$danger9"
      css={{
        ".my-box:hover &": {
          color: "$success9",
        },
      }}
    >
      And I will turn green!
    </Box>
  </Heading>
</Box>`,x=`<Center>
  <Button
    css={{
      [\`\${Center} &\`]: {
        bg: "red",
      },
    }}
  >
    Button
  </Button>
</Center>`,$=`function MyButton() {
  return <button className="my-button">My Button</button>
}

// Add a \`toString\` method which map to a css selector inside your component
// Here we use the underlying button class name
MyButton.toString = () => ".my-button"

<Center
  css={{
    [\`& \${MyButton}\`]: {
      bg: "red",
    },
  }}
>
  <MyButton />
</Center>`,w=`<Box
  css={{
    '@media print': {
      display: 'none',
    },
  }}
>
  This text won't be shown when printing this page.
</Box>`,o={defineStandardCSSProperty:b,defineCustomCSSProperty:f,createNestingSelectors:C,targetingOtherHopeComponent:x,targetingOtherSolidComponent:$,customMediaQueries:w};function I(){const l={href:"/docs/features/style-props",label:"Style props"},p={href:"/docs/features/create-styles",label:"Create styles"},d=[{href:"#defining-any-standard-css-property",label:"Defining any standard CSS property"},{href:"#defining-css-custom-properties",label:"Defining CSS custom properties"},{href:"#creating-nested-selectors",label:"Creating nested selectors"},{href:"#targeting-other-hope-components",label:"tageting other Hope UI components"},{href:"#targeting-other-solid-components",label:"tageting other SolidJS components"},{href:"#custom-media-queries",label:"Custom media queries"}];return h(()=>{m.highlightAll()}),e(S,{previousLink:l,nextLink:p,contextualNavLinks:d,get children(){return[e(y,{get children(){return["The ",e(r,{children:"css"})," prop"]}}),e(t,{mb:"$5",get children(){return["With ",e(r,{children:"css"})," you can provide any valid CSS to an element and utilize tokens from your theme to ensure consistency and that you are utilizing constraint-based design principles when styling your application."]}}),e(t,{mb:"$5",children:"This prop provides a superset of CSS (contains all CSS properties/selectors in addition to custom ones) that maps values directly from the theme, depending on the CSS property used. Also, it allows a simple way of defining responsive values that correspond to the breakpoints defined in the theme."}),e(t,{mb:"$5",get children(){return["To find out which properties are theme-aware, see the"," ",e(u,{as:g,href:"/docs/features/style-props",color:"$primary11",fontWeight:"$semibold",children:"Style Props"}),"."]}}),e(t,{mb:"$8",get children(){return["Although the ",e(r,{children:"css"})," prop is considered an escape hatch, there are few cases where it is needed."]}}),e(n,{id:"defining-any-standard-css-property",children:"Defining any standard CSS property"}),e(t,{mb:"$5",get children(){return["In case you need to set a CSS property that is not listed in the Style Props list, you can use the ",e(r,{children:"css"})," prop and pass it whatever CSS property you desire."]}}),e(t,{mb:"$5",get children(){return["One such example is the ",e(r,{children:"filter"})," property:"]}}),e(i,{get snippet(){return o.defineStandardCSSProperty},mb:"$12",get children(){return e(s,{as:"img",src:"http://placekitten.com/200/300",alt:"a kitten",css:{filter:"blur(8px)"}})}}),e(n,{id:"defining-css-custom-properties",children:"Defining CSS custom properties"}),e(t,{mb:"$5",get children(){return["Custom CSS properties can be defined via the ",e(r,{children:"css"})," prop as well:"]}}),e(i,{get snippet(){return o.defineCustomCSSProperty},mb:"$12",get children(){return e(s,{css:{"--my-color":"#53c8c4"},get children(){return e(c,{color:"var(--my-color)",size:"4xl",children:"This uses CSS Custom Properties!"})}})}}),e(n,{id:"creating-nested-selectors",children:"Creating nested selectors"}),e(t,{mb:"$5",get children(){return["To create complex, nested selectors, you can use the ",e(r,{children:"&"})," operator like in sass."]}}),e(i,{get snippet(){return o.createNestingSelectors},mb:"$12",get children(){return e(s,{borderWidth:2,borderColor:"$primary9",p:"$5",class:"my-box",get children(){return e(c,{size:"4xl",get children(){return["Hover the box...",e(s,{as:"span",color:"$danger9",css:{".my-box:hover &":{color:"$success9"}},children:"And I will turn green!"})]}})}})}}),e(n,{id:"targeting-other-hope-components",children:"Targeting other Hope UI components"}),e(t,{mb:"$5",get children(){return["Inside the ",e(r,{children:"css"})," prop you can target other Hope UI components using string interpolation in the selector."]}}),e(a,{get snippet(){return o.targetingOtherHopeComponent},mb:"$12"}),e(n,{id:"targeting-other-solid-components",children:"Targeting other SolidJS components"}),e(t,{mb:"$5",get children(){return["Inside the ",e(r,{children:"css"})," prop you can target other SolidJS components using string interpolation in the selector."]}}),e(a,{get snippet(){return o.targetingOtherSolidComponent},mb:"$12"}),e(n,{id:"custom-media-queries",children:"Custom media queries"}),e(i,{get snippet(){return o.customMediaQueries},get children(){return e(s,{css:{"@media print":{display:"none"}},children:"This text won't be shown when printing this page."})}})]}})}export{I as default};
