import{o as m,c as e,d as n,C as t,g as r,M as p,D as u,H as g,q as b}from"./index.5fab0308.js";import{C as f}from"./CodeSnippet.0a69b940.js";import{P as y,a as C}from"./PageTitle.fca7b064.js";import{P as o}from"./Preview.cec92af7.js";import{P as w}from"./PropsTable.8cc40d64.js";import{S as a}from"./SectionSubtitle.cc8e906a.js";import{S as s}from"./SectionTitle.35eb7e89.js";import"./Footer.dc4a5085.js";const v='import { Container } from "@hope-ui/solid"',$=`<Container>
  There are many benefits to a joint design and development system. Not only does it bring
  benefits to the design team, but it also brings benefits to engineering teams. It makes
  sure that our experiences have a consistent look and feel, not just in our design specs,
  but in production
</Container>`,x=`<Container p="$4" bg="tomato" color="white" maxW="$xl" centered={false}>
  There are many benefits to a joint design and development system. Not only does it bring
  benefits to the design team.
</Container>`,T=`<Container bg="salmon" centerContent>
  <Box p="$4" bg="tomato" color="white" maxW="$xl">
    There are many benefits to a joint design and development system. Not only does it bring
    benefits to the design team.
  </Box>
</Container>`,i={importComponent:v,basicUsage:$,centerContainer:x,centerContent:T};function B(){const c={href:"/docs/layout/center",label:"Center"},d={href:"/docs/layout/divider",label:"Divider"},l=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#centering-the-container",label:"Centering the container",indent:!0},{href:"#centering-the-children",label:"Centering the children",indent:!0},{href:"#props",label:"Props"}],h=[{name:"centered",description:"If `true`, container itself will be centered on the page.",type:"ResponsiveValue<boolean>",defaultValue:"true"},{name:"centerContent",description:"If `true`, container will center its children regardless of their width.",type:"ResponsiveValue<boolean>",defaultValue:"false"}];return m(()=>{b.highlightAll()}),e(C,{previousLink:c,nextLink:d,contextualNavLinks:l,get children(){return[e(y,{children:"Container"}),e(n,{mb:"$5",children:"Containers are used to constrain a content's width to the current breakpoint, while keeping it fluid."}),e(n,{mb:"$5",get children(){return["By default, it sets the ",e(t,{children:"max-width"})," of the content to match the"," ",e(t,{children:"min-width"})," of the current breakpoint. This is useful if you\u2019d prefer to design for a fixed set of screen sizes instead of trying to accommodate a fully fluid viewport."]}}),e(n,{mb:"$5",get children(){return["You can customize this behavior by passing custom ",e(t,{children:"maxWidth"})," values."]}}),e(s,{id:"import",children:"Import"}),e(f,{get snippet(){return i.importComponent},mb:"$12"}),e(s,{id:"usage",children:"Usage"}),e(n,{mb:"$5",get children(){return["To contain any piece of content, wrap it in the ",e(t,{children:"Container"})," component."]}}),e(o,{get snippet(){return i.basicUsage},mb:"$5",get children(){return e(r,{children:"There are many benefits to a joint design and development system. Not only does it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent look and feel, not just in our design specs, but in production"})}}),e(p,{status:"info",mb:"$12",get children(){return e(u,{get children(){return["The whole Hope UI docs is inside a ",e(t,{children:"Container"}),", try resize your browser to see it in action."]}})}}),e(a,{id:"centering-the-container",children:"Centering the container"}),e(n,{mb:"$5",get children(){return["By default the container is centered within its parent with a margin ",e(t,{children:"auto"})," on left and right, you can disabled this behavior by setting the ",e(t,{children:"centered"})," prop to"," ",e(t,{children:"false"}),"."]}}),e(o,{get snippet(){return i.centerContainer},mb:"$12",get children(){return e(r,{p:"$4",bg:"tomato",color:"white",maxW:"$xl",centered:!1,children:"There are many benefits to a joint design and development system. Not only does it bring benefits to the design team."})}}),e(a,{id:"centering-the-children",children:"Centering the children"}),e(n,{mb:"$5",get children(){return["In some cases, the width of the content can be smaller than the container's width, you can use the ",e(t,{children:"centerContent"})," prop to center the content."]}}),e(o,{get snippet(){return i.centerContent},mb:"$12",get children(){return e(r,{bg:"salmon",centerContent:!0,get children(){return e(g,{p:"$4",bg:"tomato",color:"white",maxW:"$xl",children:"There are many benefits to a joint design and development system. Not only does it bring benefits to the design team."})}})}}),e(s,{id:"props",children:"Props"}),e(w,{items:h})]}})}export{B as default};