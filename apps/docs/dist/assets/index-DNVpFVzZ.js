import{$ as b,t as y,o as g,c as e,i as l,C as r,J as c,Q as t,aT as f,aU as $,aV as s,K as a,L as m,p as k}from"./index-Nxbfex4q.js";import{C}from"./CodeSnippet-BKIkSwFL.js";import{P as v,a as w}from"./PageTitle-D0rjqxl5.js";import{P as d}from"./Preview-Dv-XfG_3.js";import{P as S}from"./PropsTable-b7KBJ81X.js";import{S as p}from"./SectionSubtitle-BnAf6Y1E.js";import{S as o}from"./SectionTitle-D4b_6ZYs.js";import{I as n}from"./IconCheck-2Fv8QvNU.js";import"./Footer-DCmuVtpk.js";var P=y('<svg><path fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3"></svg>',!1,!0);const T=b({path:()=>P()}),U=`import { 
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@hope-ui/solid"`,q=`<UnorderedList>
  <ListItem>Clone or download repository from GitHub</ListItem>
  <ListItem>Install dependencies with npm</ListItem>
  <ListItem>To start development server run npm start command</ListItem>
  <ListItem>Run tests to make sure your changes do not break the build</ListItem>
  <ListItem>Submit a pull request once you are done</ListItem>
</UnorderedList>`,O=`<OrderedList>
  <ListItem>Clone or download repository from GitHub</ListItem>
  <ListItem>Install dependencies with npm</ListItem>
  <ListItem>To start development server run npm start command</ListItem>
  <ListItem>Run tests to make sure your changes do not break the build</ListItem>
  <ListItem>Submit a pull request once you are done</ListItem>
</OrderedList>`,R=`<List spacing="$3">
  <ListItem>
    <ListIcon as={IconCheck} color="$success9" />
    Clone or download repository from GitHub
  </ListItem>
  <ListItem>
    <ListIcon as={IconCheck} color="$success9" />
    Install dependencies with npm
  </ListItem>
  <ListItem>
    <ListIcon as={IconCheck} color="$success9" />
    To start development server run npm start command
  </ListItem>
  <ListItem>
    <ListIcon as={IconCheck} color="$success9" />
    Run tests to make sure your changes do not break the build
  </ListItem>
  <ListItem>
    <ListIcon as={IconCircleDashed} color="$info9" />
    Submit a pull request once you are done
  </ListItem>
</List>`,i={importComponent:U,unorderedList:q,orderedList:O,unstyledListWithIcon:R};function j(){const u={href:"/docs/data-display/kbd",label:"Kbd"},h={href:"/docs/data-display/table",label:"Table"},L=[{href:"#import",label:"Import"},{href:"#unordered-list",label:"Unordered List"},{href:"#ordered-list",label:"Ordered List"},{href:"#unstyled-list",label:"Unstyled List with icon"},{href:"#props",label:"Props"},{href:"#list-props",label:"List props",indent:!0},{href:"#other-components-props",label:"Other components props",indent:!0}],I=[{name:"spacing",description:"The space between each list item.",type:'ResponsiveValue<MarginProps["margin"]>'},{name:"styleType",description:"Shorthand for the `list-style-type` css property.",type:"Property.ListStyleType"},{name:"stylePosition",description:"Shorthand for the `list-style-position` css property.",type:"Property.ListStylePosition"}];return g(()=>{k.highlightAll()}),e(w,{previousLink:u,nextLink:h,contextualNavLinks:L,get children(){return[e(v,{children:"List"}),e(l,{mb:"$5",get children(){return[e(r,{children:"List"})," component is used to display list items. It renders a ",e(r,{children:"ul"})," ","element by default."]}}),e(o,{id:"import",children:"Import"}),e(C,{get snippet(){return i.importComponent},mb:"$12"}),e(o,{id:"unordered-list",children:"Unordered List"}),e(d,{get snippet(){return i.unorderedList},mb:"$12",get children(){return e(c,{get children(){return[e(t,{children:"Clone or download repository from GitHub"}),e(t,{children:"Install dependencies with npm"}),e(t,{children:"To start development server run npm start command"}),e(t,{children:"Run tests to make sure your changes do not break the build"}),e(t,{children:"Submit a pull request once you are done"})]}})}}),e(o,{id:"ordered-list",children:"Ordered List"}),e(d,{get snippet(){return i.orderedList},mb:"$12",get children(){return e(f,{get children(){return[e(t,{children:"Clone or download repository from GitHub"}),e(t,{children:"Install dependencies with npm"}),e(t,{children:"To start development server run npm start command"}),e(t,{children:"Run tests to make sure your changes do not break the build"}),e(t,{children:"Submit a pull request once you are done"})]}})}}),e(o,{id:"unstyled-list",children:"Unstyled List with icon"}),e(l,{mb:"$5",get children(){return["Add icons to the list items by using the ",e(r,{children:"ListIcon"})," component. The size of the icon is relative to the font size of the list item."]}}),e(d,{get snippet(){return i.unstyledListWithIcon},mb:"$12",get children(){return e($,{spacing:"$3",get children(){return[e(t,{get children(){return[e(s,{as:n,color:"$success9"}),"Clone or download repository from GitHub"]}}),e(t,{get children(){return[e(s,{as:n,color:"$success9"}),"Install dependencies with npm"]}}),e(t,{get children(){return[e(s,{as:n,color:"$success9"}),"To start development server run npm start command"]}}),e(t,{get children(){return[e(s,{as:n,color:"$success9"}),"Run tests to make sure your changes do not break the build"]}}),e(t,{get children(){return[e(s,{as:T,color:"$info9"}),"Submit a pull request once you are done"]}})]}})}}),e(o,{id:"props",children:"Props"}),e(p,{id:"list-props",children:"List props"}),e(S,{items:I,mb:"$10"}),e(p,{id:"other-components-props",children:"Other components props"}),e(c,{spacing:"$2",get children(){return[e(t,{get children(){return[e(r,{children:"ListItem"})," composes"," ",e(a,{as:m,href:"/docs/layout/box",color:"$primary11",fontWeight:"$semibold",children:"Box"})," ","component."]}}),e(t,{get children(){return[e(r,{children:"ListIcon"})," composes"," ",e(a,{as:m,href:"/docs/data-display/icon",color:"$primary11",fontWeight:"$semibold",children:"Icon"})," ","component."]}})]}})]}})}export{j as default};
