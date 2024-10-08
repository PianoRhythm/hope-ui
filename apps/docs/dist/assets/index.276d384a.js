import{s as f,c as e,m as x,O as k,y as w,A as u,V as l,W as v,F as T,B as h,R as B,o as S,d as i,M as m,D as g,C as p,f as y,e as _,q as $}from"./index.5fab0308.js";import{C as s}from"./CodeSnippet.0a69b940.js";import{P as C,a as z}from"./PageTitle.fca7b064.js";import{P as b}from"./Preview.cec92af7.js";import{S as o}from"./SectionSubtitle.cc8e906a.js";import{S as P}from"./SectionTitle.35eb7e89.js";import"./Footer.dc4a5085.js";function t(d){const[n,c]=f(d,["items"]);return e(B.div,x({overflowX:"auto"},c,{get children(){return e(k,{dense:!0,get children(){return[e(w,{bg:"$neutral2",get children(){return e(u,{get children(){return[e(l,{children:"Prop"}),e(l,{children:"CSS property"}),e(l,{css:{whiteSpace:"nowrap"},children:"Theme token"})]}})}}),e(v,{color:"$primary11",fontFamily:"$mono",get children(){return e(T,{get each(){return n.items},children:a=>e(u,{get children(){return[e(h,{get children(){return a.prop}}),e(h,{get children(){return a.cssProperty}}),e(h,{get color(){return a.themeToken?"inherit":"$neutral12"},get children(){return a.themeToken||"none"}})]}})})}})]}})}}))}const R=`<Button as="a" target="_blank" href="https://solidjs.com">
  Go to SolidJS website
</Button>`,F=`import { Link } from "solid-app-router";

<Button as={Link} href="/">
  Back to home
</Button>`,L=`import { Box } from "@hope-ui/solid"

// $2 refers to the value of \`theme().space[2]\`
<Box m="$2">Tomato</Box>

// You can also use custom values
<Box maxW="960px" mx="auto" />

// sets margin \`8px\` on all viewports and \`12px\` from the first breakpoint and up
<Box m={{ "@initial": "$2", "@sm": "$3" }} />
`,W=`import { Box } from "@hope-ui/solid"

// $neutral9 refers to the value of \`theme().colors.neutral9\`
<Box color="$neutral9" />

// raw CSS color value
<Box color="#f00" />

// background colors
<Box bg="tomato" />

// verbose prop
<Box backgroundColor="tomato" />`,A=`import { Text } from "@hope-ui/solid"

// font-size of \`theme().fontSizes.base\`
<Text fontSize="$base" />

// font-size \`32px\`
<Text fontSize={32} />

// font-size \`"2em"\`
<Text fontSize="2em" />

// text-align \`left\` on all viewports and \`center\` from the first breakpoint and up
<Text textAlign={{ "@initial": "left", "@sm": "center" }} />`,G=`import { Box } from "@hope-ui/solid"

// verbose
<Box display="flex" />

// shorthand
<Box d="flex" />`,I=`import { Box } from "@hope-ui/solid"

// verbose
<Box width="100%" height={32} />

// shorthand
<Box w="100%" h="32px" />

// use theme sizing
<Box boxSize="$sm" />

// width \`256px\`
<Box w={256} />

// width \`"40px"\`
<Box w="40px" />`,H=`import { Box, Flex } from "@hope-ui/solid"

// verbose
<Box display="flex" alignItems="center" justifyContent="space-between">
  Box with Flex props
</Box>

// shorthand using the \`Flex\` component
<Flex alignItems="center" justifyContent="center">
  Flex Container
</Flex>`,j=`import { Box, Grid } from "@hope-ui/solid"

// verbose
<Box display="grid" gap={2} gridAutoFlow="row dense">
  Grid
</Box>

// shorthand using the \`Grid\` component
<Grid gap={2} autoFlow="row dense">
  Grid
</Grid>`,E=`import { Box } from "@hope-ui/solid"

<Box border="1px" borderColor="$neutral6">
  Card
</Box>`,M=`import { Button } from "@hope-ui/solid"

// This button will have no right borderRadius
<Button borderRightRadius="0">Button 1</Button>

// This button will have no left borderRadius
<Button borderLeftRadius="0">Button 2</Button>

// top left and top right radius will be \`theme().radii.md\` => 6px
<Button borderTopRadius="$md">Button 3</Button>`,D=`import { Box } from "@hope-ui/solid"

// verbose
<Box position="absolute">Cover</Box>

// shorthand
<Box pos="absolute">Cover</Box>
<Box pos="absolute" top="0" left="0">
  Absolute with top and left
</Box>

<Box pos="fixed" w="100%" zIndex={2}>
  Fixed with zIndex
</Box>`,O=`import { Box } from "@hope-ui/solid"

// use \`theme().shadows.md\`
<Box boxShadow="$md">
  md
</Box>
`,V=`import { Button } from "@hope-ui/solid"

// :hover style
<Button
  colorScheme="primary"
  _hover={{
    background: "white",
    color: "$danger9",
  }}
>
  Hover me
</Button>

// apply :hover over parent element
<Box role="group">
  <Box
    _hover={{ fontWeight: "semibold" }}
    _groupHover={{ color: "tomato" }}
  >
  </Box>
</Box>`,r={asPropWithHTMLElement:R,asPropWithComponent:F,marginPadding:L,colors:W,typography:A,layout:G,size:I,flexbox:H,grid:j,borders:E,borderRadius:M,position:D,shadow:O,pseudo:V},Y=[{prop:"m, margin",cssProperty:"margin",themeToken:"space"},{prop:"mt, marginTop",cssProperty:"margin-top",themeToken:"space"},{prop:"mr, marginRight",cssProperty:"margin-right",themeToken:"space"},{prop:"ms, marginStart",cssProperty:"margin-inline-start",themeToken:"space"},{prop:"mb, marginBottom",cssProperty:"margin-bottom",themeToken:"space"},{prop:"ml, marginLeft",cssProperty:"margin-left",themeToken:"space"},{prop:"me, marginEnd",cssProperty:"margin-inline-end",themeToken:"space"},{prop:"mx",cssProperty:"margin-inline-start + margin-inline-end",themeToken:"space"},{prop:"my",cssProperty:"margin-top + margin-bottom",themeToken:"space"},{prop:"p, padding",cssProperty:"padding",themeToken:"space"},{prop:"pt, paddingTop",cssProperty:"padding-top",themeToken:"space"},{prop:"pr, paddingRight",cssProperty:"padding-right",themeToken:"space"},{prop:"ps, paddingStart",cssProperty:"padding-inline-start",themeToken:"space"},{prop:"pb, paddingBottom",cssProperty:"padding-bottom",themeToken:"space"},{prop:"pl, paddingLeft",cssProperty:"padding-left",themeToken:"space"},{prop:"pe, paddingEnd",cssProperty:"padding-inline-end",themeToken:"space"},{prop:"px",cssProperty:"padding-inline-start + padding-inline-end",themeToken:"space"},{prop:"py",cssProperty:"padding-top + padding-bottom",themeToken:"space"}],J=[{prop:"color",cssProperty:"color",themeToken:"colors"},{prop:"bg, background",cssProperty:"background",themeToken:"colors"},{prop:"bgColor, backgroundColor",cssProperty:"background-color",themeToken:"colors"},{prop:"opacity",cssProperty:"opacity"}],X=[{prop:"fontFamily",cssProperty:"font-family",themeToken:"fonts"},{prop:"fontSize",cssProperty:"font-size",themeToken:"fontSizes"},{prop:"fontWeight",cssProperty:"font-weight",themeToken:"fontWeights"},{prop:"lineHeight",cssProperty:"line-height",themeToken:"lineHeights"},{prop:"letterSpacing",cssProperty:"letter-spacing",themeToken:"letterSpacings"},{prop:"textAlign",cssProperty:"text-align"},{prop:"fontStyle",cssProperty:"font-style"},{prop:"textTransform",cssProperty:"text-transform"},{prop:"textDecoration",cssProperty:"text-decoration"}],q=[{prop:"d, display",cssProperty:"display"},{prop:"verticalAlign",cssProperty:"vertical-align"},{prop:"overflow",cssProperty:"overflow"},{prop:"overflowX",cssProperty:"overflow-x"},{prop:"overflowY",cssProperty:"overflow-y"}],N=[{prop:"w, width",cssProperty:"width",themeToken:"sizes"},{prop:"h, height",cssProperty:"height",themeToken:"sizes"},{prop:"minW, minWidth",cssProperty:"min-width",themeToken:"sizes"},{prop:"maxW, maxWidth",cssProperty:"max-width",themeToken:"sizes"},{prop:"minH, minHeight",cssProperty:"min-height",themeToken:"sizes"},{prop:"maxH, maxHeight",cssProperty:"max-height",themeToken:"sizes"},{prop:"boxSize",cssProperty:"width + height",themeToken:"sizes"}],U=[{prop:"alignItems",cssProperty:"align-items"},{prop:"alignContent",cssProperty:"align-content"},{prop:"justifyItems",cssProperty:"justify-items"},{prop:"justifyContent",cssProperty:"justify-content"},{prop:"flexDirection, *direction",cssProperty:"flex-direction"},{prop:"flexWrap, *wrap",cssProperty:"flex-wrap"},{prop:"flex",cssProperty:"flex"},{prop:"flexGrow",cssProperty:"flex-grow"},{prop:"flexShrink",cssProperty:"flex-shrink"},{prop:"flexBasis",cssProperty:"flex-basis"},{prop:"alignSelf",cssProperty:"align-self"},{prop:"justifySelf",cssProperty:"justify-self"},{prop:"order",cssProperty:"order"}],K=[{prop:"gap",cssProperty:"gap",themeToken:"space"},{prop:"rowGap",cssProperty:"row-gap",themeToken:"space"},{prop:"columnGap",cssProperty:"column-gap",themeToken:"space"},{prop:"gridTemplate",cssProperty:"grid-template"},{prop:"gridTemplateColumns, *templateColumns",cssProperty:"grid-template-columns"},{prop:"gridTemplateRows, *templateRows",cssProperty:"grid-template-rows"},{prop:"gridTemplateAreas, *templateAreas",cssProperty:"grid-template-areas"},{prop:"gridArea, *area",cssProperty:"grid-area"},{prop:"gridRow",cssProperty:"grid-row"},{prop:"gridRowStart, *rowStart",cssProperty:"grid-row-start"},{prop:"gridRowEnd, *rowEnd",cssProperty:"grid-row-end"},{prop:"gridColumn",cssProperty:"grid-column"},{prop:"gridColumnStart, *colStart",cssProperty:"grid-column-start"},{prop:"gridColumnEnd, *colEnd",cssProperty:"grid-column-end"},{prop:"gridAutoFlow, *autoFlow",cssProperty:"grid-auto-flow"},{prop:"gridAutoColumns, *autoColumns",cssProperty:"grid-auto-columns"},{prop:"gridAutoRows, *autoRows",cssProperty:"grid-auto-rows"},{prop:"placeItems",cssProperty:"place-items"},{prop:"placeContent",cssProperty:"place-content"},{prop:"placeSelf",cssProperty:"place-self"}],Q=[{prop:"border",cssProperty:"border"},{prop:"borderStyle",cssProperty:"border-style"},{prop:"borderWidth",cssProperty:"border-width",themeToken:"sizes"},{prop:"borderColor",cssProperty:"border-color",themeToken:"colors"},{prop:"borderTop",cssProperty:"border-top"},{prop:"borderTopStyle",cssProperty:"border-top-style"},{prop:"borderTopWidth",cssProperty:"border-top-width",themeToken:"sizes"},{prop:"borderTopColor",cssProperty:"border-top-color",themeToken:"colors"},{prop:"borderRight",cssProperty:"border-right"},{prop:"borderRightStyle",cssProperty:"border-right-style"},{prop:"borderRightWidth",cssProperty:"border-right-width",themeToken:"sizes"},{prop:"borderRightColor",cssProperty:"border-right-color",themeToken:"colors"},{prop:"borderBottom",cssProperty:"border-bottom"},{prop:"borderBottomStyle",cssProperty:"border-bottom-style"},{prop:"borderBottomWidth",cssProperty:"border-bottom-width",themeToken:"sizes"},{prop:"borderBottomColor",cssProperty:"border-bottom-color",themeToken:"colors"},{prop:"borderLeft",cssProperty:"border-left"},{prop:"borderLeftStyle",cssProperty:"border-left-style"},{prop:"borderLeftWidth",cssProperty:"border-left-width",themeToken:"sizes"},{prop:"borderLeftColor",cssProperty:"border-left-color",themeToken:"colors"},{prop:"borderX",cssProperty:"border-right + border-left"},{prop:"borderY",cssProperty:"border-top + border-bottom"}],Z=[{prop:"borderRadius, rounded",cssProperty:"border-radius",themeToken:"radii"},{prop:"borderTopLeftRadius",cssProperty:"border-top-left-radius",themeToken:"radii"},{prop:"borderTopRightRadius",cssProperty:"border-top-right-radius",themeToken:"radii"},{prop:"borderBottomRightRadius",cssProperty:"border-bottom-right-radius",themeToken:"radii"},{prop:"borderBottomLeftRadius",cssProperty:"border-bottom-left-radius",themeToken:"radii"},{prop:"borderTopRadius",cssProperty:"border-top-left-radius + border-top-right-radius",themeToken:"radii"},{prop:"borderRightRadius",cssProperty:"border-top-right-radius + border-bottom-right-radius",themeToken:"radii"},{prop:"borderBottomRadius",cssProperty:"border-bottom-left-radius + border-bottom-right-radius",themeToken:"radii"},{prop:"borderLeftRadius",cssProperty:"border-top-left-radius + border-bottom-left-radius",themeToken:"radii"}],ee=[{prop:"pos, position",cssProperty:"position"},{prop:"zIndex",cssProperty:"z-index",themeToken:"zIndices"},{prop:"top",cssProperty:"top",themeToken:"space"},{prop:"right",cssProperty:"right",themeToken:"space"},{prop:"bottom",cssProperty:"bottom",themeToken:"space"},{prop:"left",cssProperty:"left",themeToken:"space"}],re=[{prop:"textShadow",cssProperty:"text-shadow",themeToken:"shadows"},{prop:"shadow, boxShadow",cssProperty:"box-shadow",themeToken:"shadows"}],oe=[{prop:"_hover",cssProperty:"&:hover, &[data-hover]"},{prop:"_active",cssProperty:"&:active, &[data-active]"},{prop:"_focus",cssProperty:"&:focus, &[data-focus]"},{prop:"_highlighted",cssProperty:"&[data-highlighted]"},{prop:"_focusWithin",cssProperty:"&:focus-within"},{prop:"_focusVisible",cssProperty:"&:focus-visible"},{prop:"_disabled",cssProperty:"&[disabled], &[aria-disabled=true], &[data-disabled]"},{prop:"_readOnly",cssProperty:"&[aria-readonly=true], &[readonly], &[data-readonly]"},{prop:"_before",cssProperty:"&::before"},{prop:"_after",cssProperty:"&::after"},{prop:"_empty",cssProperty:"&:empty"},{prop:"_expanded",cssProperty:"&[aria-expanded=true], &[data-expanded]"},{prop:"_checked",cssProperty:"&[aria-checked=true], &[data-checked]"},{prop:"_grabbed",cssProperty:"&[aria-grabbed=true], &[data-grabbed]"},{prop:"_pressed",cssProperty:"&[aria-pressed=true], &[data-pressed]"},{prop:"_invalid",cssProperty:"&[aria-invalid=true], &[data-invalid]"},{prop:"_valid",cssProperty:"&[data-valid], &[data-state=valid]"},{prop:"_loading",cssProperty:"&[data-loading], &[aria-busy=true]"},{prop:"_selected",cssProperty:"&[aria-selected=true], &[data-selected]"},{prop:"_hidden",cssProperty:"&[hidden], &[data-hidden]"},{prop:"_even",cssProperty:"&:nth-of-type(even)"},{prop:"_odd",cssProperty:"&:nth-of-type(odd)"},{prop:"_first",cssProperty:"&:first-of-type"},{prop:"_last",cssProperty:"&:last-of-type"},{prop:"_notFirst",cssProperty:"&:not(:first-of-type)"},{prop:"_notLast",cssProperty:"&:not(:last-of-type)"},{prop:"_visited",cssProperty:"&:visited"},{prop:"_activeLink",cssProperty:"&[aria-current=page]"},{prop:"_activeStep",cssProperty:"&[aria-current=step]"},{prop:"_indeterminate",cssProperty:"&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]"},{prop:"_groupHover",cssProperty:"[role=group]:hover &, [role=group][data-hover] &, [data-group]:hover &, [data-group][data-hover] &, .group:hover &, .group[data-hover] &"},{prop:"_peerHover",cssProperty:"[data-peer]:hover ~ &, [data-peer][data-hover] ~ &, .peer:hover ~ &, .peer[data-hover] ~ &"},{prop:"_groupFocus",cssProperty:"[role=group]:focus &, [role=group][data-focus] &, [data-group]:focus &, [data-group][data-focus] &, .group:focus &, .group[data-focus] &"},{prop:"_peerFocus",cssProperty:"[data-peer]:focus ~ &, [data-peer][data-focus] ~ &, .peer:focus ~ &, .peer[data-focus] ~ &"},{prop:"_groupFocusVisible",cssProperty:"[role=group]:focus-visible &, [data-group]:focus-visible &, .group:focus-visible &"},{prop:"_peerFocusVisible",cssProperty:"[data-peer]:focus-visible ~ &, .peer:focus-visible ~ &"},{prop:"_groupActive",cssProperty:"[role=group]:active &, [role=group][data-active] &, [data-group]:active &, [data-group][data-active] &, .group:active &, .group[data-active] &"},{prop:"_peerActive",cssProperty:"[data-peer]:active ~ &, [data-peer][data-active] ~ &, .peer:active ~ &, .peer[data-active] ~ &"},{prop:"_groupSelected",cssProperty:"[role=group][aria-selected=true] &, [role=group][data-selected] &, [data-group][aria-selected=true] &, [data-group][data-selected] &, .group[aria-selected=true] &, .group[data-selected] &"},{prop:"_peerSelected",cssProperty:"[data-peer][aria-selected=true] ~ &, [data-peer][data-selected] ~ &, .peer[aria-selected=true] ~ &, .peer[data-selected] ~ &"},{prop:"_groupDisabled",cssProperty:"[role=group]:disabled &, [role=group][data-disabled] &, [data-group]:disabled &, [data-group][data-disabled] &, .group:disabled &, .group[data-disabled] &"},{prop:"_peerDisabled",cssProperty:"[data-peer]:disabled ~ &, [data-peer][data-disabled] ~ &, .peer:disabled ~ &, .peer[data-disabled] ~ &"},{prop:"_groupInvalid",cssProperty:"[role=group]:invalid &, [role=group][data-invalid] &, [data-group]:invalid &, [data-group][data-invalid] &, .group:invalid &, .group[data-invalid] &"},{prop:"_peerInvalid",cssProperty:"[data-peer]:invalid ~ &, [data-peer][data-invalid] ~ &, .peer:invalid ~ &, .peer[data-invalid] ~ &"},{prop:"_groupChecked",cssProperty:"[role=group]:checked &, [role=group][data-checked] &, [data-group]:checked &, [data-group][data-checked] &, .group:checked &, .group[data-checked] &"},{prop:"_peerChecked",cssProperty:"[data-peer]:checked ~ &, [data-peer][data-checked] ~ &, .peer:checked ~ &, .peer[data-checked] ~ &"},{prop:"_groupFocusWithin",cssProperty:"[role=group]:focus-within &, [data-group]:focus-within &, .group:focus-within &"},{prop:"_peerFocusWithin",cssProperty:"[data-peer]:focus-within ~ &, .peer:focus-within ~ &"},{prop:"_peerPlaceholderShown",cssProperty:"[data-peer]:placeholder-shown ~ &, .peer:placeholder-shown ~ &"},{prop:"_placeholder",cssProperty:"&::placeholder"},{prop:"_placeholderShown",cssProperty:"&:placeholder-shown"},{prop:"_fullScreen",cssProperty:"&:fullscreen"},{prop:"_selection",cssProperty:"&::selection"},{prop:"_mediaDark",cssProperty:"@media (prefers-color-scheme: dark)"},{prop:"_mediaReduceMotion",cssProperty:"@media (prefers-reduced-motion: reduce)"},{prop:"_dark",cssProperty:".hope-ui-dark &"},{prop:"_light",cssProperty:".hope-ui-light &"}],te=[{prop:"appearance",cssProperty:"appearance"},{prop:"userSelect",cssProperty:"user-select"},{prop:"pointerEvents",cssProperty:"pointer-events"},{prop:"transition",cssProperty:"transition"},{prop:"resize",cssProperty:"resize"},{prop:"cursor",cssProperty:"cursor"},{prop:"outline",cssProperty:"outline"},{prop:"outlineOffset",cssProperty:"outline-offset"},{prop:"outlineColor",cssProperty:"outline-color"}];function le(){const d={href:"/docs/changelog",label:"Changelog"},n={href:"/docs/features/css-prop",label:"The css prop"},c=[{href:"#margin-padding",label:"Margin and padding"},{href:"#colors",label:"Colors"},{href:"#typography",label:"Typography"},{href:"#layout",label:"Layout"},{href:"#size",label:"Size"},{href:"#flexbox",label:"Flexbox"},{href:"#grid-layout",label:"Grid layout"},{href:"#border",label:"Borders"},{href:"#border-radius",label:"Border radius"},{href:"#position",label:"Position"},{href:"#shadow",label:"Shadow"},{href:"#pseudo",label:"Pseudo selectors"},{href:"#others",label:"Others"},{href:"#as-prop",label:"The `as` prop"}];return S(()=>{$.highlightAll()}),e(z,{previousLink:d,nextLink:n,contextualNavLinks:c,get children(){return[e(C,{children:"Style props"}),e(i,{mb:"$6",children:"Style props are a way to alter the style of a component by simply passing props to it. It helps to save time by providing helpful shorthand ways to style components."}),e(P,{children:"Reference"}),e(i,{mb:"$5",children:"The following table shows a list of every style prop and the properties within each group."}),e(o,{id:"margin-padding",children:"Margin and padding"}),e(s,{get snippet(){return r.marginPadding},mb:"$8"}),e(t,{items:Y,mb:"$12"}),e(o,{id:"colors",children:"Color"}),e(s,{get snippet(){return r.colors},mb:"$8"}),e(t,{items:J,mb:"$12"}),e(o,{id:"typography",children:"Typography"}),e(s,{get snippet(){return r.typography},mb:"$8"}),e(t,{items:X,mb:"$12"}),e(o,{id:"layout",children:"Layout"}),e(s,{get snippet(){return r.layout},mb:"$8"}),e(t,{items:q,mb:"$12"}),e(o,{id:"size",children:"Size"}),e(s,{get snippet(){return r.size},mb:"$8"}),e(t,{items:N,mb:"$12"}),e(o,{id:"flexbox",children:"Flexbox"}),e(s,{get snippet(){return r.flexbox},mb:"$4"}),e(m,{status:"warning",mb:"$8",get children(){return e(g,{get children(){return["Props marked with an ",e(p,{children:"*"})," will only work if you use the ",e(p,{children:"Flex"})," or"," ",e(p,{children:"Stack"})," components."]}})}}),e(t,{items:U,mb:"$12"}),e(o,{id:"grid-layout",children:"Grid layout"}),e(s,{get snippet(){return r.grid},mb:"$4"}),e(m,{status:"warning",mb:"$8",get children(){return e(g,{get children(){return["Props marked with an ",e(p,{children:"*"})," will only work if you use the ",e(p,{children:"Grid"})," and"," ",e(p,{children:"GridItem"})," components."]}})}}),e(t,{items:K,mb:"$12"}),e(o,{id:"border",children:"Borders"}),e(s,{get snippet(){return r.borders},mb:"$8"}),e(t,{items:Q,mb:"$12"}),e(o,{id:"border-radius",children:"Border radius"}),e(s,{get snippet(){return r.borderRadius},mb:"$8"}),e(t,{items:Z,mb:"$12"}),e(o,{id:"position",children:"Position"}),e(s,{get snippet(){return r.position},mb:"$8"}),e(t,{items:ee,mb:"$12"}),e(o,{id:"shadow",children:"Shadow"}),e(s,{get snippet(){return r.shadow},mb:"$8"}),e(t,{items:re,mb:"$12"}),e(o,{id:"pseudo",children:"Pseudo selectors"}),e(s,{get snippet(){return r.pseudo},mb:"$8"}),e(t,{items:oe,mb:"$12"}),e(o,{id:"others",children:"Others"}),e(t,{items:te,mb:"$12"}),e(P,{id:"as-prop",get children(){return["The ",e(p,{children:"as"})," prop"]}}),e(i,{mb:"$5",get children(){return["All Hope UI components are polymorphic, meaning you can use the ",e(p,{children:"as"})," prop to change the rendered element."]}}),e(i,{mb:"$5",get children(){return["For example, say you are using a ",e(p,{children:"Button"})," component, and you need to make it a link instead. You can compose ",e(p,{children:"a"})," and ",e(p,{children:"Button"})," like this:"]}}),e(b,{get snippet(){return r.asPropWithHTMLElement},mb:"$8",get children(){return e(y,{as:"a",target:"_blank",href:"https://solidjs.com/",children:"Go to SolidJS website"})}}),e(i,{mb:"$5",children:"And it works with SolidJS components too:"}),e(b,{get snippet(){return r.asPropWithComponent},mb:"$5",get children(){return e(y,{as:_,href:"/",children:"Back to home"})}}),e(i,{get children(){return["If you are using TypeScript you will get proper auto-completion based on the value of the"," ",e(p,{children:"as"})," prop."]}})]}})}export{le as default};
