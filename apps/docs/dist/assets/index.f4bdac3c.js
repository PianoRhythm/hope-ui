import{o as v,i as x,a as e,T as s,U as y,W as a,k as t,j as r,b7 as n,b8 as u,J as d,b9 as h,V as m,B as T,t as p}from"./index.ae6bb42f.js";import{C as g}from"./CodeSnippet.efa60d35.js";import{P as I,a as S}from"./PageTitle.cd5064fe.js";import{P as l}from"./Preview.eeb17944.js";import{P as w}from"./PropsTable.d971dacf.js";import{S as o}from"./SectionSubtitle.23d2739c.js";import{S as c}from"./SectionTitle.94f12b47.js";import"./Footer.382a3b06.js";const _=`import { 
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@hope-ui/solid"`,D=`<Alert status="danger">
  <AlertIcon mr="$2_5" />
  <AlertTitle mr="$2_5">Your browser is outdated!</AlertTitle>
  <AlertDescription>Your Hope UI experience may be degraded.</AlertDescription>
  <CloseButton position="absolute" right="8px" top="8px" />
</Alert>`,k=`<VStack alignItems="stretch" spacing="$4">
  <Alert status="info">
    <AlertIcon mr="$2_5" />
    Hope UI is going live on April 7th. Get ready!
  </Alert>

  <Alert status="success">
    <AlertIcon mr="$2_5" />
    Data uploaded to the server. Fire on!
  </Alert>

  <Alert status="warning">
    <AlertIcon mr="$2_5" />
    Seems your account is about expire, upgrade now
  </Alert>

  <Alert status="danger">
    <AlertIcon mr="$2_5" />
    There was an error processing your request
  </Alert>
</VStack>`,C=`<VStack alignItems="stretch" spacing="$4">
  <Alert status="success" variant="solid">
    <AlertIcon mr="$2_5" />
    Data uploaded to the server. Fire on!
  </Alert>

  <Alert status="success" variant="subtle">
    <AlertIcon mr="$2_5" />
    Data uploaded to the server. Fire on!
  </Alert>

  <Alert status="success" variant="left-accent">
    <AlertIcon mr="$2_5" />
    Data uploaded to the server. Fire on!
  </Alert>

  <Alert status="success" variant="top-accent">
    <AlertIcon mr="$2_5" />
    Data uploaded to the server. Fire on!
  </Alert>
</VStack>`,U=`<Alert
  status="success"
  variant="subtle"
  flexDirection="column"
  justifyContent="center"
  textAlign="center"
  height="200px"
>
  <AlertIcon boxSize="40px" mr="0" />
  <AlertTitle mt="$4" mb="$1" fontSize="$lg">
    Application submitted!
  </AlertTitle>
  <AlertDescription maxWidth="$sm">
    Thanks for submitting your application. Our team will get back to you soon.
  </AlertDescription>
</Alert>`,P=`<Alert status="success">
  <AlertIcon mr="$2_5" />
  <Box flex="1">
    <AlertTitle>Success!</AlertTitle>
    <AlertDescription display="block">
      Your application has been received. 
      We will review your application and respond within the next 48 hours.
    </AlertDescription>
  </Box>
  <CloseButton position="absolute" right="8px" top="8px" />
</Alert>`,F=`const config: HopeThemeConfig = {
  components: {
    Alert: {
      baseStyle: {
        root: SystemStyleConfig,
        icon: SystemStyleConfig,
        title: SystemStyleConfig,
        description: SystemStyleConfig,
      },
      defaultProps: {
        root: ThemeableAlertOptions,
      }
    }
  }
}`,i={importComponent:_,basicUsage:D,status:k,variants:C,composition:U,compositionTwo:P,theming:F},B=p("<strong>Alert:</strong>"),H=p("<strong>AlertIcon:</strong>"),L=p("<strong>AlertTitle:</strong>"),Y=p("<strong>AlertDescription:</strong>");function J(){const A={href:"/docs/navigation/tabs",label:"Tabs"},b={href:"/docs/feedback/circular-progress",label:"CircularProgress"},f=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#statuses",label:"Alert statuses",indent:!0},{href:"#variants",label:"Alert variants",indent:!0},{href:"#composition",label:"Composition",indent:!0},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"},{href:"#alert-props",label:"Alert props",indent:!0},{href:"#alert-icon-props",label:"AlertIcon props",indent:!0},{href:"#alert-title-props",label:"AlertTitle props",indent:!0},{href:"#alert-description-props",label:"AlertDescription props",indent:!0}],$=[{name:"variant",description:"The visual style of the alert.",type:'"solid" | "subtle" | "left-accent" | "top-accent"',defaultValue:'"subtle"'},{name:"status",description:"The status of the alert. This affects the color scheme and icon used.",type:'"success" | "info" | "warning" | "danger"',defaultValue:'"info"'}];return v(()=>{x.highlightAll()}),e(S,{previousLink:A,nextLink:b,contextualNavLinks:f,get children(){return[e(I,{children:"Alert"}),e(s,{mb:"$5",children:"Alerts are used to communicate a state that affects a system, feature or page."}),e(c,{id:"import",children:"Import"}),e(g,{get snippet(){return i.importComponent},mb:"$6"}),e(y,{spacing:"$2",mb:"$12",get children(){return[e(a,{get children(){return[B.cloneNode(!0)," The wrapper for alert components."]}}),e(a,{get children(){return[H.cloneNode(!0)," The visual icon for the alert that changes based on the"," ",e(t,{children:"status"})," prop."]}}),e(a,{get children(){return[L.cloneNode(!0)," The title of the alert to be announced by screen readers."]}}),e(a,{get children(){return[Y.cloneNode(!0)," The description of the alert to be announced by screen readers."]}})]}}),e(c,{id:"usage",children:"Usage"}),e(s,{mb:"$5"}),e(l,{get snippet(){return i.basicUsage},mb:"$10",get children(){return e(r,{status:"danger",get children(){return[e(n,{mr:"$2_5"}),e(u,{mr:"$2_5",children:"Your browser is outdated!"}),e(d,{children:"Your Hope UI experience may be degraded."}),e(h,{position:"absolute",right:"8px",top:"8px"})]}})}}),e(o,{id:"statuses",children:"Alert statuses"}),e(s,{mb:"$5",get children(){return["Use the ",e(t,{children:"status"})," prop to change the status of the alert. This affects the color scheme and icon used. You can set the value to ",e(t,{children:"success"}),", ",e(t,{children:"info"}),","," ",e(t,{children:"warning"})," or ",e(t,{children:"danger"}),"."]}}),e(l,{get snippet(){return i.status},mb:"$10",get children(){return e(m,{alignItems:"stretch",spacing:"$4",get children(){return[e(r,{status:"info",get children(){return[e(n,{mr:"$2_5"}),"Hope UI is going live on April 7th. Get ready!"]}}),e(r,{status:"success",get children(){return[e(n,{mr:"$2_5"}),"Data uploaded to the server. Fire on!"]}}),e(r,{status:"warning",get children(){return[e(n,{mr:"$2_5"}),"Seems your account is about expire, upgrade now"]}}),e(r,{status:"danger",get children(){return[e(n,{mr:"$2_5"}),"There was an error processing your request"]}})]}})}}),e(o,{id:"variants",children:"Alert variants"}),e(s,{mb:"$5",get children(){return["Use the ",e(t,{children:"variant"})," prop to change the visual style of the Alert You can set the value to ",e(t,{children:"solid"}),", ",e(t,{children:"subtle"}),", ",e(t,{children:"left-accent"})," or"," ",e(t,{children:"top-accent"}),"."]}}),e(l,{get snippet(){return i.variants},mb:"$10",get children(){return e(m,{alignItems:"stretch",spacing:"$4",get children(){return[e(r,{status:"success",variant:"solid",get children(){return[e(n,{mr:"$2_5"}),"Data uploaded to the server. Fire on!"]}}),e(r,{status:"success",variant:"subtle",get children(){return[e(n,{mr:"$2_5"}),"Data uploaded to the server. Fire on!"]}}),e(r,{status:"success",variant:"left-accent",get children(){return[e(n,{mr:"$2_5"}),"Data uploaded to the server. Fire on!"]}}),e(r,{status:"success",variant:"top-accent",get children(){return[e(n,{mr:"$2_5"}),"Data uploaded to the server. Fire on!"]}})]}})}}),e(o,{id:"composition",children:"Composition"}),e(s,{mb:"$5",get children(){return[e(t,{children:"Alert"})," ships with smaller components to allow for flexibility in creating all kinds of layouts. Here's an example of a custom alert style and layout:"]}}),e(l,{get snippet(){return i.composition},mb:"$8",get children(){return e(r,{status:"success",variant:"subtle",flexDirection:"column",justifyContent:"center",textAlign:"center",height:"200px",get children(){return[e(n,{boxSize:"40px",mr:"0"}),e(u,{mt:"$4",mb:"$1",fontSize:"$lg",children:"Application submitted!"}),e(d,{maxWidth:"$sm",children:"Thanks for submitting your application. Our team will get back to you soon."})]}})}}),e(s,{mb:"$5",get children(){return[e(t,{children:"Alert"})," can also incorporate other Hope UI components. Here's an example of an alert with wrapping description text:"]}}),e(l,{get snippet(){return i.compositionTwo},mb:"$12",get children(){return e(r,{status:"success",get children(){return[e(n,{mr:"$2_5"}),e(T,{flex:"1",get children(){return[e(u,{children:"Success!"}),e(d,{display:"block",children:"Your application has been received. We will review your application and respond within the next 48 hours."})]}}),e(h,{position:"absolute",right:"8px",top:"8px"})]}})}}),e(c,{id:"theming",children:"Theming"}),e(s,{mb:"$5",get children(){return[e(t,{children:"Alert"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(g,{lang:"js",get snippet(){return i.theming},mb:"$12"}),e(c,{id:"props",children:"Props"}),e(o,{id:"alert-props",children:"Alert props"}),e(w,{items:$,mb:"$10"}),e(o,{id:"alert-icon-props",children:"AlertIcon props"}),e(s,{mb:"$10",get children(){return[e(t,{children:"AlertIcon"})," composes ",e(t,{children:"Icon"})," and changes the icon based on the"," ",e(t,{children:"status"})," prop. You can use the ",e(t,{children:"as"})," prop to render a custom icon."]}}),e(o,{id:"alert-title-props",children:"AlertTitle props"}),e(s,{mb:"$10",get children(){return[e(t,{children:"AlertTitle"})," composes the ",e(t,{children:"Box"})," component."]}}),e(o,{id:"alert-description-props",children:"AlertDescription props"}),e(s,{mb:"$10",get children(){return[e(t,{children:"AlertDescription"})," composes the ",e(t,{children:"Box"})," component."]}})]}})}export{J as default};
