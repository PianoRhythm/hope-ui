import{k as u,t as g,o as $,c as e,d as n,C as o,R as i,H as t,a0 as b,K as a,F as x,q as f}from"./index.5fab0308.js";import{C as B}from"./CodeSnippet.0a69b940.js";import{P as w,a as y}from"./PageTitle.fca7b064.js";import{P as s}from"./Preview.cec92af7.js";import{S as p}from"./SectionTitle.35eb7e89.js";import"./Footer.dc4a5085.js";var C=g('<svg><path d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"fill=currentColor></svg>',!1,!0);const v=u({viewBox:"0 0 15 15",path:()=>C()}),L='import { Box } from "@hope-ui/solid"',S=`<Box bg="tomato" w="100%" p="$4" color="white">
  This is the Box
</Box>`,A=`// Sample card from Airbnb

function AirbnbExample() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Box
      maxW="$sm"
      borderWidth="1px"
      borderColor="$neutral6"
      borderRadius="$lg"
      overflow="hidden"
    >
      <Box as="img" src={property.imageUrl} alt={property.imageAlt} />
      <Box p="$6">
        <Box display="flex" alignItems="baseline">
          <Badge px="$2" colorScheme="primary" rounded="$full">
            New
          </Badge>
          <Box
            color="$neutral9"
            fontWeight="$bold"
            letterSpacing="$wide"
            fontSize="$xs"
            textTransform="uppercase"
            ml="$2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box mt="$1" fontWeight="$semibold" as="h4" lineHeight="$tight" noOfLines={1}>
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="$neutral11" fontSize="$sm">
            / wk
          </Box>
        </Box>

        <Box display="flex" mt="$2" alignItems="center">
          <For each={Array(5).fill("")}>
            {(_, i) => <IconStar color={i() < property.rating ? "$warning9" : "$neutral3"} />}
          </For>
          <Box as="span" ml="$2" color="$neutral11" fontSize="$sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  )
}`,P=`<Box as="button" borderRadius="$md" bg="tomato" color="white" px="$4" h="$8">
  Button
</Box>`,l={importComponent:L,basicUsage:S,complexeExample:A,asProp:P};function F(){const c={href:"/docs/layout/aspect-ratio",label:"AspectRatio"},m={href:"/docs/layout/center",label:"Center"},h=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#as-prop",label:"The `as` prop"}],r={imageUrl:"https://bit.ly/2Z4KKcF",imageAlt:"Rear view of modern home with pool",beds:3,baths:2,title:"Modern home in city center in the heart of historic Los Angeles",formattedPrice:"$1,900.00",reviewCount:34,rating:4};return $(()=>{f.highlightAll()}),e(y,{previousLink:c,nextLink:m,contextualNavLinks:h,get children(){return[e(w,{children:"Box"}),e(n,{mb:"$5",get children(){return["Box is the most abstract component on top of which all other Hope UI components are built. By default, it renders a ",e(o,{children:"div"})," element."]}}),e(n,{mb:"$2",children:"The Box component is useful because it helps with 3 common use cases:"}),e(i.ul,{ps:"$6",mb:"$8",get children(){return[e(i.li,{mb:"$2",children:"Create responsive layouts with ease."}),e(i.li,{mb:"$2",children:"Provide a shorthand way to pass styles via props."}),e(i.li,{get children(){return["Compose new component and allow for override using the ",e(o,{children:"as"})," prop."]}})]}}),e(p,{id:"import",children:"Import"}),e(B,{get snippet(){return l.importComponent},mb:"$12"}),e(p,{id:"usage",children:"Usage"}),e(s,{get snippet(){return l.basicUsage},mb:"$8",get children(){return e(t,{bg:"tomato",w:"100%",p:"$4",color:"white",children:"This is the Box"})}}),e(n,{mb:"$5",get children(){return["A more complexe example of composing with ",e(o,{children:"Box"}),":"]}}),e(s,{get snippet(){return l.complexeExample},mb:"$12",get children(){return e(t,{maxW:"$sm",borderWidth:"1px",borderColor:"$neutral6",borderRadius:"$lg",overflow:"hidden",get children(){return[e(t,{as:"img",get src(){return r.imageUrl},get alt(){return r.imageAlt}}),e(t,{p:"$6",get children(){return[e(t,{display:"flex",alignItems:"baseline",get children(){return[e(b,{px:"$2",colorScheme:"primary",rounded:"$full",children:"New"}),e(t,{color:"$neutral9",fontWeight:"$bold",letterSpacing:"$wide",fontSize:"$xs",textTransform:"uppercase",ml:"$2",get children(){return[a(()=>r.beds)," beds \u2022 ",a(()=>r.baths)," baths"]}})]}}),e(t,{mt:"$1",fontWeight:"$semibold",as:"h4",lineHeight:"$tight",noOfLines:1,get children(){return r.title}}),e(t,{get children(){return[a(()=>r.formattedPrice),e(t,{as:"span",color:"$neutral11",fontSize:"$sm",children:"/ wk"})]}}),e(t,{display:"flex",mt:"$2",alignItems:"center",get children(){return[e(x,{get each(){return Array(5).fill("")},children:(I,d)=>e(v,{get color(){return d()<r.rating?"$warning9":"$neutral3"}})}),e(t,{as:"span",ml:"$2",color:"$neutral11",fontSize:"$sm",get children(){return[a(()=>r.reviewCount)," reviews"]}})]}})]}})]}})}}),e(p,{id:"as-prop",get children(){return["The ",e(o,{children:"as"})," prop"]}}),e(n,{mb:"$5",get children(){return["You can use the ",e(o,{children:"as"})," prop to change the element render, just like styled-components."]}}),e(s,{get snippet(){return l.asProp},get children(){return e(t,{as:"button",borderRadius:"$md",bg:"tomato",color:"white",px:"$4",h:"$8",children:"Button"})}})]}})}export{F as default};
