import{c as S,t as b,o as y,i as v,a as r,T as c,U as l,W as o,k as e,a_ as d,a$ as t,b0 as a,b1 as n,A as p,L as h}from"./index.61b35639.js";import{C as B}from"./CodeSnippet.f9ebac2c.js";import{P,a as w}from"./PageTitle.eda168cf.js";import{P as m}from"./Preview.66990927.js";import{P as g}from"./PropsTable.ee5f9067.js";import{S as u}from"./SectionSubtitle.bdd9df20.js";import{S as s}from"./SectionTitle.562e61ef.js";import"./Footer.fe217195.js";const T=b('<svg><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>',4,!0),C=S({viewBox:"0 0 15 15",path:()=>T.cloneNode(!0)}),H=`import { 
  Breadcrumb, 
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator
} from "@hope-ui/solid"`,D=`<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Home</BreadcrumbLink>
    <BreadcrumbSeparator />
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Docs</BreadcrumbLink>
    <BreadcrumbSeparator />
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink currentPage>Breadcrumb</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>`,U=`<Breadcrumb separator="-">
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Home</BreadcrumbLink>
    <BreadcrumbSeparator />
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Docs</BreadcrumbLink>
    <BreadcrumbSeparator />
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink currentPage>Breadcrumb</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>`,x=`<Breadcrumb separator={<IconChevronRight color="$neutral11" />}>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Home</BreadcrumbLink>
    <BreadcrumbSeparator />
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Docs</BreadcrumbLink>
    <BreadcrumbSeparator />
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink currentPage>Breadcrumb</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>`,_=`<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Home</BreadcrumbLink>
    <BreadcrumbSeparator />
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Docs</BreadcrumbLink>
    <BreadcrumbSeparator />
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink currentPage>Breadcrumb</BreadcrumbLink>
    <BreadcrumbSeparator />
  </BreadcrumbItem>
</Breadcrumb>`,A=`<Breadcrumb spacing="$4">
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Home</BreadcrumbLink>
    <BreadcrumbSeparator />
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Docs</BreadcrumbLink>
    <BreadcrumbSeparator />
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink currentPage>Breadcrumb</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>`,N=`<Breadcrumb fontWeight="$medium" fontSize="$sm" spacing="$4">
  <BreadcrumbItem>
    <BreadcrumbLink href="#" _hover={{ color: "tomato" }}>
      Home
    </BreadcrumbLink>
    <BreadcrumbSeparator />
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href="#" _hover={{ color: "tomato" }}>
      Docs
    </BreadcrumbLink>
    <BreadcrumbSeparator />
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink currentPage _hover={{ color: "$success10" }}>
      Breadcrumb
    </BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>`,O=`import { Link } from "solid-app-router"

<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink as={Link} href="#">Home</BreadcrumbLink>
    <BreadcrumbSeparator />
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink as={Link} href="#">Docs</BreadcrumbLink>
    <BreadcrumbSeparator />
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink currentPage>Breadcrumb</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
`,j=`const config: HopeThemeConfig = {
  components: {
    Breadcrumb: {
      baseStyle: {
        root: SystemStyleObject,
        item: SystemStyleObject,
        link: SystemStyleObject,
        separator: SystemStyleObject,
      },
      defaultProps: {
        root: ThemeableBreadcrumbOptions
      }
    }
  }
}`,i={importComponent:H,basicUsage:D,separator:U,iconSeparator:x,withEndSeparator:_,spacing:A,composition:N,withRoutingLibrary:O,theming:j},W=b("<strong>Breadcrumb:</strong>"),R=b("<strong>BreadcrumbItem:</strong>"),E=b("<strong>BreadcrumbLink:</strong>"),V=b("<strong>BreadcrumbSeparator:</strong>");function F(){const f={href:"/docs/navigation/anchor",label:"Anchor"},L={href:"/docs/navigation/tabs",label:"Tabs"},k=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#separator",label:"Breadcrumb separator",indent:!0},{href:"#icon-as-separator",label:"Using icon as separator",indent:!0},{href:"#with-end-separator",label:"Using end separator",indent:!0},{href:"#spacing",label:"Separator spacing",indent:!0},{href:"#composition",label:"Composition"},{href:"#with-routing-library",label:"Usage with routing library"},{href:"#accessibility",label:"Accessibility"},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"},{href:"#breadcrumb-props",label:"Breadcrumb props",indent:!0},{href:"#breadcrumb-link-props",label:"BreadcrumbLink props",indent:!0},{href:"#other-components-props",label:"Other components props",indent:!0}],I=[{name:"spacing",description:"The left and right space applied to each separator.",type:'ResponsiveValue<GridLayoutProps["gap"]>',defaultValue:"0.5rem"},{name:"separator",description:"The visual separator between each breadcrumb item.",type:"string | JSX.Element",defaultValue:"/"}],$=[{name:"currentPage",description:"If `true`, renders a span with `aria-current` set to `page` instead of an anchor element.",type:"boolean"}];return y(()=>{v.highlightAll()}),r(w,{previousLink:f,nextLink:L,contextualNavLinks:k,get children(){return[r(P,{children:"Breadcrumb"}),r(c,{mb:"$5",children:"Breadcrumbs, or a breadcrumb navigation, can help enhance how users navigate to previous page levels of a website, especially if that website has many pages or products."}),r(s,{id:"import",children:"Import"}),r(B,{get snippet(){return i.importComponent},mb:"$6"}),r(l,{spacing:"$2",mb:"$12",get children(){return[r(o,{get children(){return[W.cloneNode(!0)," The parent container for breadcrumbs."]}}),r(o,{get children(){return[R.cloneNode(!0)," Individual breadcrumb element containing a link and separator."]}}),r(o,{get children(){return[E.cloneNode(!0)," The breadcrumb link."]}}),r(o,{get children(){return[V.cloneNode(!0)," The visual separator between each breadcrumb."]}})]}}),r(s,{id:"usage",children:"Usage"}),r(c,{mb:"$5",get children(){return["Add the ",r(e,{children:"currentPage"})," prop to the ",r(e,{children:"BreadcrumbLink"})," that matches the current path. When this prop is present, the ",r(e,{children:"BreadcrumbLink"})," renders a"," ",r(e,{children:"span"})," with ",r(e,{children:"aria-current"})," set to ",r(e,{children:"page"})," instead of an anchor element."]}}),r(m,{get snippet(){return i.basicUsage},mb:"$10",get children(){return r(d,{get children(){return[r(t,{get children(){return[r(a,{href:"#",children:"Home"}),r(n,{})]}}),r(t,{get children(){return[r(a,{href:"#",children:"Docs"}),r(n,{})]}}),r(t,{get children(){return r(a,{currentPage:!0,children:"Breadcrumb"})}})]}})}}),r(u,{id:"separator",children:"Breadcrumb separator"}),r(c,{mb:"$5",get children(){return["Use the ",r(e,{children:"separator"})," prop to change the separator used in the breadcrumb."]}}),r(m,{get snippet(){return i.separator},mb:"$10",get children(){return r(d,{separator:"-",get children(){return[r(t,{get children(){return[r(a,{href:"#",children:"Home"}),r(n,{})]}}),r(t,{get children(){return[r(a,{href:"#",children:"Docs"}),r(n,{})]}}),r(t,{get children(){return r(a,{currentPage:!0,children:"Breadcrumb"})}})]}})}}),r(u,{id:"icon-as-separator",children:"Using icon as separator"}),r(c,{mb:"$5",get children(){return["You can pass any ",r(e,{children:"JSX.Element"})," to the ",r(e,{children:"separator"})," prop."]}}),r(m,{get snippet(){return i.iconSeparator},mb:"$10",get children(){return r(d,{get separator(){return r(C,{color:"$neutral11"})},get children(){return[r(t,{get children(){return[r(a,{href:"#",children:"Home"}),r(n,{})]}}),r(t,{get children(){return[r(a,{href:"#",children:"Docs"}),r(n,{})]}}),r(t,{get children(){return r(a,{currentPage:!0,children:"Breadcrumb"})}})]}})}}),r(u,{id:"with-end-separator",children:"Using end separator"}),r(c,{mb:"$5",get children(){return["To append a separator to the last breadcrumb item, just add a"," ",r(e,{children:"BreadcrumbSeparator"})," component."]}}),r(m,{get snippet(){return i.withEndSeparator},mb:"$10",get children(){return r(d,{get children(){return[r(t,{get children(){return[r(a,{href:"#",children:"Home"}),r(n,{})]}}),r(t,{get children(){return[r(a,{href:"#",children:"Docs"}),r(n,{})]}}),r(t,{get children(){return[r(a,{currentPage:!0,children:"Breadcrumb"}),r(n,{})]}})]}})}}),r(u,{id:"spacing",children:"Separator spacing"}),r(c,{mb:"$5",get children(){return["Use the ",r(e,{children:"spacing"})," prop to apply left and right margin to each separator."]}}),r(m,{get snippet(){return i.spacing},mb:"$12",get children(){return r(d,{spacing:"$4",get children(){return[r(t,{get children(){return[r(a,{href:"#",children:"Home"}),r(n,{})]}}),r(t,{get children(){return[r(a,{href:"#",children:"Docs"}),r(n,{})]}}),r(t,{get children(){return r(a,{currentPage:!0,children:"Breadcrumb"})}})]}})}}),r(s,{id:"composition",children:"Composition"}),r(c,{mb:"$5",get children(){return["Breadcrumb composes"," ",r(p,{as:h,href:"/docs/layout/box",color:"$primary11",fontWeight:"$semibold",children:"Box"})," ","so you can pass all ",r(e,{children:"Box"})," props to change the style of the breadcrumbs."]}}),r(m,{get snippet(){return i.composition},mb:"$12",get children(){return r(d,{fontWeight:"$medium",fontSize:"$sm",spacing:"$4",get children(){return[r(t,{get children(){return[r(a,{href:"#",_hover:{color:"tomato"},children:"Home"}),r(n,{})]}}),r(t,{get children(){return[r(a,{href:"#",_hover:{color:"tomato"},children:"Docs"}),r(n,{})]}}),r(t,{get children(){return r(a,{currentPage:!0,_hover:{color:"$success10"},children:"Breadcrumb"})}})]}})}}),r(s,{id:"with-routing-library",children:"Usage with routing library"}),r(c,{mb:"$5",get children(){return["To use the Breadcrumb with a routing Library like ",r(e,{children:"solid-app-router"}),", all you need to do is to pass the ",r(e,{children:"as"})," prop to the ",r(e,{children:"BreadcrumbLink"})," component."]}}),r(m,{get snippet(){return i.withRoutingLibrary},mb:"$12",get children(){return r(d,{get children(){return[r(t,{get children(){return[r(a,{as:h,href:"#",children:"Home"}),r(n,{})]}}),r(t,{get children(){return[r(a,{as:h,href:"#",children:"Docs"}),r(n,{})]}}),r(t,{get children(){return r(a,{currentPage:!0,children:"Breadcrumb"})}})]}})}}),r(s,{id:"accessibility",children:"Accessibility"}),r(l,{spacing:"$2",mb:"$12",get children(){return[r(o,{get children(){return["The Breadcrumbs are rendered in a ",r(e,{children:"nav"})," to denote that it is a navigation landmark."]}}),r(o,{get children(){return["The Breadcrumb ",r(e,{children:"nav"})," has ",r(e,{children:"aria-label"})," set to ",r(e,{children:"breadcrumb"}),"."]}}),r(o,{get children(){return["The ",r(e,{children:"BreadcrumbLink"})," with ",r(e,{children:"currentPage"})," prop has"," ",r(e,{children:"aria-current"})," set to ",r(e,{children:"page"}),"."]}}),r(o,{get children(){return["The separator has ",r(e,{children:"role"})," set to ",r(e,{children:"presentation"})," to denote that its for presentation purposes."]}})]}}),r(s,{id:"theming",children:"Theming"}),r(c,{mb:"$5",get children(){return[r(e,{children:"Breadcrumb"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),r(B,{lang:"js",get snippet(){return i.theming},mb:"$12"}),r(s,{id:"props",children:"Props"}),r(u,{id:"breadcrumb-props",children:"Breadcrumb props"}),r(g,{items:I,mb:"$10"}),r(u,{id:"breadcrumb-link-props",children:"BreadcrumbLink props"}),r(g,{items:$,mb:"$10"}),r(u,{id:"other-components-props",children:"Other components props"}),r(c,{get children(){return[r(e,{children:"BreadcrumbItem"})," and ",r(e,{children:"BreadcrumbSeparator"})," composes"," ",r(p,{as:h,href:"/docs/layout/box",color:"$primary11",fontWeight:"$semibold",children:"Box"})," ","component."]}})]}})}export{F as default};
