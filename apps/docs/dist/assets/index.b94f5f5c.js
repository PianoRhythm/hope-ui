import{o as h,c as e,d as r,C as t,E as i,S as g,R as a,q as b}from"./index.5fab0308.js";import{C as u}from"./CodeSnippet.0a69b940.js";import{P as f,a as y}from"./PageTitle.fca7b064.js";import{P as n}from"./Preview.cec92af7.js";import{P as S}from"./PropsTable.8cc40d64.js";import{S as s}from"./SectionSubtitle.cc8e906a.js";import{S as l}from"./SectionTitle.35eb7e89.js";import"./Footer.dc4a5085.js";const k='import { Image } from "@hope-ui/solid"',I=`<Image 
  boxSize="$sm" 
  src="https://bit.ly/3pq0AcS" 
  alt="Monkey D. Luffy" 
  objectFit="cover"
/>`,v=`<HStack alignItems="flex-start" spacing="$4">
  <Image
    boxSize="100px"
    src="https://bit.ly/3pq0AcS"
    alt="Monkey D. Luffy"
    objectFit="cover"
  />
  <Image
    boxSize="150px"
    src="https://bit.ly/3pq0AcS"
    alt="Monkey D. Luffy"
    objectFit="cover"
  />
  <Image
    boxSize="200px"
    src="https://bit.ly/3pq0AcS"
    alt="Monkey D. Luffy"
    objectFit="cover"
  />
</HStack>`,w=`<Image
  boxSize="150px"
  borderRadius="$full"
  src="https://bit.ly/3pq0AcS"
  alt="Monkey D. Luffy"
  objectFit="cover"
/>`,x='<Image src="gibberish.png" fallbackSrc="https://via.placeholder.com/150" />',o={importComponent:k,basicUsage:I,size:v,borderRadius:w,fallbackSupport:x};function H(){const c={href:"/docs/data-display/icon",label:"Icon"},p={href:"/docs/data-display/kbd",label:"Kbd"},d=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#image-size",label:"Image size",indent:!0},{href:"#image-with-border-radius",label:"Image with border radius",indent:!0},{href:"#image-fallback",label:"Image fallback",indent:!0},{href:"#props",label:"Props"}],m=[{name:"src",description:"The image `src` attribute.",type:"string"},{name:"srcSet",description:"The image `srcset` attribute.",type:"string"},{name:"sizes",description:" The image `sizes` attribute.",type:"string"},{name:"crossOrigin",description:"The key used to set the crossOrigin on the HTMLImageElement into which the image will be loaded. This tells the browser to request cross-origin access when trying to download the image data.",type:'"" | "anonymous" | "use-credentials"'},{name:"loading",description:"The image loading strategy.",type:'"eager" | "lazy"'},{name:"fallbackSrc",description:"Fallback image `src` to show if image is loading or image fails. Using a local image is recommended.",type:"string"},{name:"fallback",description:"Fallback element to show if image is loading or image fails.",type:"JSX.Element"},{name:"ignoreFallback",description:"If `true`, opt out of the `fallbackSrc` logic.",type:"boolean",defaultValue:"false"},{name:"align",description:"How to align the image within its bounds. It maps to css `object-position` property.",type:"Property.ObjectPosition"},{name:"fit",description:"How the image to fit within its bounds. It maps to css `object-fit` property.",type:"Property.ObjectFit"},{name:"onLoad",description:"A callback for when the image `src` has been loaded.",type:"JSX.EventHandlerUnion<HTMLImageElement, Event>"},{name:"onError",description:"A callback for when there was an error loading the image `src`.",type:"JSX.EventHandlerUnion<HTMLImageElement, Event>"},{name:"htmlWidth",description:"The native HTML `width` attribute to the passed to the `img`",type:"string | number"},{name:"htmlHeight",description:"The native HTML `height` attribute to the passed to the `img`",type:"string | number"}];return h(()=>{b.highlightAll()}),e(y,{previousLink:c,nextLink:p,contextualNavLinks:d,get children(){return[e(f,{children:"Image"}),e(r,{mb:"$5",get children(){return["The ",e(t,{children:"Image"})," component is used to display images."]}}),e(l,{id:"import",children:"Import"}),e(u,{get snippet(){return o.importComponent},mb:"$12"}),e(l,{id:"usage",children:"Usage"}),e(n,{get snippet(){return o.basicUsage},mb:"$10",get children(){return e(i,{boxSize:"$sm",src:"https://bit.ly/3pq0AcS",alt:"Monkey D. Luffy",objectFit:"cover"})}}),e(s,{id:"image-size",children:"Image size"}),e(r,{mb:"$5",get children(){return["The size of the image can be adjusted using the ",e(t,{children:"boxSize"})," prop."]}}),e(n,{get snippet(){return o.size},mb:"$10",get children(){return e(g,{alignItems:"flex-start",spacing:"$4",get children(){return[e(i,{boxSize:"100px",src:"https://bit.ly/3pq0AcS",alt:"Monkey D. Luffy",objectFit:"cover"}),e(i,{boxSize:"150px",src:"https://bit.ly/3pq0AcS",alt:"Monkey D. Luffy",objectFit:"cover"}),e(i,{boxSize:"200px",src:"https://bit.ly/3pq0AcS",alt:"Monkey D. Luffy",objectFit:"cover"})]}})}}),e(s,{id:"image-with-border-radius",children:"Image with border radius"}),e(r,{mb:"$5",get children(){return["The radius of the image can be adjusted using the ",e(t,{children:"borderRadius"})," prop."]}}),e(n,{get snippet(){return o.borderRadius},mb:"$10",get children(){return e(i,{boxSize:"150px",borderRadius:"$full",src:"https://bit.ly/3pq0AcS",alt:"Monkey D. Luffy",objectFit:"cover"})}}),e(s,{id:"image-fallback",children:"Image fallback"}),e(r,{mb:"$2",get children(){return["The ",e(t,{children:"Image"})," component allows you provide a fallback placeholder. The placeholder is displayed when:"]}}),e(a.ul,{ps:"$6",mb:"$5",get children(){return[e(a.li,{mb:"$2",get children(){return["The ",e(t,{children:"fallback"})," or ",e(t,{children:"fallbackSrc"})," prop is provided."]}}),e(a.li,{mb:"$2",get children(){return["The image provided in ",e(t,{children:"src"})," is currently loading."]}}),e(a.li,{mb:"$2",get children(){return["An error occurred while loading the image ",e(t,{children:"src"}),"."]}}),e(a.li,{get children(){return["No ",e(t,{children:"src"})," prop was passed."]}})]}}),e(r,{mb:"$5",get children(){return["You can also opt out of this behavior by passing the ",e(t,{children:"ignoreFallback"})," prop."]}}),e(n,{get snippet(){return o.fallbackSupport},mb:"$12",get children(){return e(i,{src:"gibberish.png",fallbackSrc:"https://via.placeholder.com/150"})}}),e(l,{id:"props",children:"Props"}),e(S,{items:m})]}})}export{H as default};
