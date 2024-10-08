import{a2 as S,o as E,c as e,d as r,C as t,af as n,h as p,an as a,ao as d,ap as x,aq as c,ar as V,K as k,q as L}from"./index.be940cb8.js";import{C as h}from"./CodeSnippet.dd91e945.js";import{P,a as T}from"./PageTitle.3ffaedfc.js";import{P as l}from"./Preview.9897c9d6.js";import{P as m}from"./PropsTable.b8c324b3.js";import{S as o}from"./SectionSubtitle.76891ec8.js";import{S as s}from"./SectionTitle.da850280.js";import{I as G}from"./IconCheck.4d31b857.js";import{I as w}from"./IconPhone.1ad4c460.js";import"./Footer.9ce04e25.js";const A=`import { 
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
} from "@hope-ui/solid"`,C='<Input placeholder="Basic usage" />',U=`<VStack spacing="$4">
  <Input placeholder="extra small size" size="xs" />
  <Input placeholder="small size" size="sm" />
  <Input placeholder="medium size" size="md" />
  <Input placeholder="large size" size="lg" />
</VStack>`,H='<Input htmlSize={4} width="auto" />',O=`<VStack spacing="$4">
  <Input placeholder="Outline" variant="outline" />
  <Input placeholder="Filled" variant="filled" />
  <Input placeholder="Unstyled" variant="unstyled" />
</VStack>`,R=`<VStack spacing="$4">
  <InputGroup>
    <InputLeftAddon>+234</InputLeftAddon>
    <Input type="tel" placeholder="phone number" />
  </InputGroup>

  {/* 
    * If you add the size prop to \`InputGroup\`,
    * it'll pass it to all its children. 
    */}
  <InputGroup size="sm">
    <InputLeftAddon>https://</InputLeftAddon>
    <Input placeholder="mysite" />
    <InputRightAddon>.com</InputRightAddon>
  </InputGroup>
</VStack>`,D=`<VStack spacing="$4">
  <InputGroup>
    <InputLeftElement pointerEvents="none">
      <IconPhone color="$neutral8" />
    </InputLeftElement>
    <Input type="tel" placeholder="Phone number" />
  </InputGroup>

  <InputGroup>
    <InputLeftElement 
      pointerEvents="none" 
      color="$neutral8" 
      fontSize="1.2em"
    >
      $
    </InputLeftElement>
    <Input placeholder="Enter amount" />
    <InputRightElement pointerEvents="none">
      <IconCheck boxSize="20px" color="$success9" />
    </InputRightElement>
  </InputGroup>
</VStack>`,j='<Input disabled placeholder="Here is a sample placeholder" />',q='<Input invalid placeholder="Here is a sample placeholder" />',F=`function Example() {
  const [value, setValue] = createSignal("");
  const handleInput = event => setValue(event.target.value);

  return (
    <>
      <Text mb="$2">Value: {value()}</Text>
      <Input
        value={value()}
        onInput={handleInput}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
    </>
  )
}`,M=`const config: HopeThemeConfig = {
  components: {
    Input: {
      baseStyle: {
        input: SystemStyleObject,
        group: SystemStyleObject,
        element: SystemStyleObject,
        addon: SystemStyleObject,
      },
      defaultProps: {
        input: ThemeableInputOptions,
        group: ThemeableInputGroupOptions,
      }
    }
  }
}`,i={importComponent:A,basicUsage:C,inputSizes:U,inputDomSize:H,inputVariants:O,inputAddons:R,inputElements:D,inputDisabled:j,inputInvalid:q,controlledInput:F,theming:M};function ee(){const[u,I]=S(""),g=$=>I($.target.value),b={href:"/docs/data-entry/form-control",label:"FormControl"},f={href:"/docs/data-entry/radio",label:"Radio"},v=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#sizes",label:"Input sizes",indent:!0},{href:"#variants",label:"Input variants",indent:!0},{href:"#addons",label:"Input addons",indent:!0},{href:"#elements",label:"Input elements",indent:!0},{href:"#disabled",label:"Disabled state",indent:!0},{href:"#invalid",label:"Invalid state",indent:!0},{href:"#controlled",label:"Controlled input",indent:!0},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"},{href:"#input-props",label:"Input props",indent:!0},{href:"#input-group-props",label:"InputGroup props",indent:!0}],y=[{name:"variant",description:"The visual style of the input.",type:'"outline" | "filled" | "unstyled"',defaultValue:'"outline"'},{name:"size",description:"The size of the input.",type:'"xs" | "sm" | "md" | "lg"',defaultValue:'"md"'},{name:"required",description:"If `true`, the input is marked as required, and `required` attribute will be added",type:"boolean"},{name:"disabled",description:"If `true`, the input will be disabled.",type:"boolean"},{name:"invalid",description:"If `true`, the input will have `aria-invalid` set to `true`.",type:"boolean"},{name:"readOnly",description:"If `true`, the input will be readonly.",type:"boolean"},{name:"htmlSize",description:"The native HTML `size` attribute to be passed to the `input`.",type:"string | number"}],z=[{name:"variant",description:"The visual style of the input.",type:'"outline" | "filled" | "unstyled"',defaultValue:'"outline"'},{name:"size",description:"The size of the input.",type:'"xs" | "sm" | "md" | "lg"',defaultValue:'"md"'}];return E(()=>{L.highlightAll()}),e(T,{previousLink:b,nextLink:f,contextualNavLinks:v,get children(){return[e(P,{children:"Input"}),e(r,{mb:"$5",get children(){return["The ",e(t,{children:"Input"})," component is a component that is used to get user input in a text field."]}}),e(s,{id:"import",children:"Import"}),e(h,{get snippet(){return i.importComponent},mb:"$12"}),e(s,{id:"usage",children:"Usage"}),e(l,{get snippet(){return i.basicUsage},mb:"$12",get children(){return e(n,{placeholder:"Basic usage"})}}),e(o,{id:"sizes",children:"Input sizes"}),e(r,{mb:"$5",get children(){return["Use the ",e(t,{children:"size"})," prop to change the size of the Input. You can set the value to"," ",e(t,{children:"xs"}),", ",e(t,{children:"sm"}),", ",e(t,{children:"md"})," or ",e(t,{children:"lg"}),"."]}}),e(l,{get snippet(){return i.inputSizes},mb:"$8",get children(){return e(p,{spacing:"$4",get children(){return[e(n,{placeholder:"extra small size",size:"xs"}),e(n,{placeholder:"small size",size:"sm"}),e(n,{placeholder:"medium size",size:"md"}),e(n,{placeholder:"large size",size:"lg"})]}})}}),e(r,{mb:"$5",get children(){return["If you want to use the native DOM ",e(t,{children:"size"})," attribute you can use the"," ",e(t,{children:"htmlSize"})," prop. For it to work as expected you will also need to provide the"," ",e(t,{children:"width"})," prop set to ",e(t,{children:"auto"}),"."]}}),e(l,{get snippet(){return i.inputDomSize},mb:"$10",get children(){return e(n,{htmlSize:4,width:"auto"})}}),e(o,{id:"variants",children:"Input variants"}),e(r,{mb:"$5",get children(){return["Use the ",e(t,{children:"variant"})," prop to change the visual style of the Input. You can set the value to ",e(t,{children:"outline"}),", ",e(t,{children:"filled"})," or ",e(t,{children:"unstyled"}),"."]}}),e(l,{get snippet(){return i.inputVariants},mb:"$10",get children(){return e(p,{spacing:"$4",get children(){return[e(n,{placeholder:"Outline",variant:"outline"}),e(n,{placeholder:"Filled",variant:"filled"}),e(n,{placeholder:"Unstyled",variant:"unstyled"})]}})}}),e(o,{id:"addons",children:"Input addons"}),e(r,{mb:"$5",get children(){return["You can add addons to the left and right of the ",e(t,{children:"Input"})," component. Hope UI exports ",e(t,{children:"InputGroup"}),", ",e(t,{children:"InputLeftAddon"})," and"," ",e(t,{children:"InputRightAddon"})," to help with this use case."]}}),e(l,{get snippet(){return i.inputAddons},mb:"$10",get children(){return e(p,{spacing:"$4",get children(){return[e(a,{get children(){return[e(d,{children:"+234"}),e(n,{type:"tel",placeholder:"phone number"})]}}),e(a,{size:"sm",get children(){return[e(d,{children:"https://"}),e(n,{placeholder:"mysite"}),e(x,{children:".com"})]}})]}})}}),e(o,{id:"elements",children:"Input elements"}),e(r,{mb:"$5",get children(){return["In some scenarios, you might need to add an icon or button inside the input component. Hope UI exports ",e(t,{children:"InputLeftElement"})," and ",e(t,{children:"InputRightElement"})," to help with this use case."]}}),e(r,{mb:"$5",get children(){return["If the left or right is an icon or text, you can pass ",e(t,{children:'pointerEvents="none"'})," to"," ",e(t,{children:"InputLeftElement"})," or ",e(t,{children:"InputRightElement"})," to ensure that clicking on them focused the input."]}}),e(l,{get snippet(){return i.inputElements},mb:"$10",get children(){return e(p,{spacing:"$4",get children(){return[e(a,{get children(){return[e(c,{pointerEvents:"none",get children(){return e(w,{color:"$neutral8"})}}),e(n,{type:"tel",placeholder:"Phone number"})]}}),e(a,{get children(){return[e(c,{pointerEvents:"none",color:"$neutral8",fontSize:"1.2em",children:"$"}),e(n,{placeholder:"Enter amount"}),e(V,{pointerEvents:"none",get children(){return e(G,{boxSize:"20px",color:"$success9"})}})]}})]}})}}),e(o,{id:"disabled",children:"Disabled state"}),e(r,{mb:"$5",get children(){return["Use the ",e(t,{children:"disabled"})," prop to disable the Input."]}}),e(l,{get snippet(){return i.inputDisabled},mb:"$10",get children(){return e(n,{disabled:!0,placeholder:"Here is a sample placeholder"})}}),e(o,{id:"invalid",children:"Invalid state"}),e(r,{mb:"$5",get children(){return["Use the ",e(t,{children:"invalid"})," prop to mark the Input as invalid."]}}),e(l,{get snippet(){return i.inputInvalid},mb:"$10",get children(){return e(n,{invalid:!0,placeholder:"Here is a sample placeholder"})}}),e(o,{id:"controlled",children:"Controlled input"}),e(l,{get snippet(){return i.controlledInput},mb:"$12",get children(){return[e(r,{mb:"$2",get children(){return["Value: ",k(()=>u())]}}),e(n,{get value(){return u()},onInput:g,placeholder:"Here is a sample placeholder",size:"sm"})]}}),e(s,{id:"theming",children:"Theming"}),e(r,{mb:"$5",get children(){return[e(t,{children:"Input"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(h,{lang:"js",get snippet(){return i.theming},mb:"$12"}),e(s,{id:"props",children:"Props"}),e(o,{id:"input-props",children:"Input props"}),e(m,{items:y,mb:"$10"}),e(o,{id:"input-group-props",children:"InputGroup props"}),e(m,{items:z})]}})}export{ee as default};
