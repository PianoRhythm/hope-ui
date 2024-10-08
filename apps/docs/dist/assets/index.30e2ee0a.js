import{a2 as v,o as f,c as e,d as l,C as t,al as a,h as o,K as T,n as z}from"./index.65470585.js";import{C as c}from"./CodeSnippet.f7739050.js";import{P as y,a as $}from"./PageTitle.a7317606.js";import{P as i}from"./Preview.6ed400d6.js";import{P as S}from"./PropsTable.a2f6bc4a.js";import{S as n}from"./SectionSubtitle.07878c29.js";import{S as s}from"./SectionTitle.613f5b08.js";import"./Footer.4711f8eb.js";const I='import { Textarea } from "@hope-ui/solid"',V='<Textarea placeholder="Basic usage" />',P=`<VStack spacing="$4">
  <Textarea placeholder="extra small size" size="xs" />
  <Textarea placeholder="small size" size="sm" />
  <Textarea placeholder="medium size" size="md" />
  <Textarea placeholder="large size" size="lg" />
</VStack>`,U=`<VStack spacing="$4">
  <Textarea placeholder="Outline" variant="outline" />
  <Textarea placeholder="Filled" variant="filled" />
  <Textarea placeholder="Unstyled" variant="unstyled" />
</VStack>`,k='<Textarea disabled placeholder="Here is a sample placeholder" />',C='<Textarea invalid placeholder="Here is a sample placeholder" />',w=`function Example() {
  const [value, setValue] = createSignal("");
  const handleInput = event => setValue(event.target.value);

  return (
    <>
      <Text mb="$2">Value: {value()}</Text>
      <Textarea
        value={value()}
        onInput={handleInput}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
    </>
  )
}`,H=`const config: HopeThemeConfig = {
  components: {
    Textarea: {
      baseStyle: SystemStyleObject,
      defaultProps: ThemeableTextareaOptions
    }
  }
}`,r={importComponent:I,basicUsage:V,textareaSizes:P,textareaVariants:U,textareaDisabled:k,textareaInvalid:C,controlledTextarea:w,theming:H};function Y(){const[d,p]=v(""),h=b=>p(b.target.value),u={href:"/docs/data-entry/switch",label:"Switch"},m={href:"/docs/data-display/accordion",label:"Accordion"},g=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#sizes",label:"Textarea sizes",indent:!0},{href:"#variants",label:"Textarea variants",indent:!0},{href:"#disabled",label:"Disabled state",indent:!0},{href:"#invalid",label:"Invalid state",indent:!0},{href:"#controlled",label:"Controlled textarea",indent:!0},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"}],x=[{name:"variant",description:"The visual style of the textarea.",type:'"outline" | "filled" | "unstyled"',defaultValue:'"outline"'},{name:"size",description:"The size of the textarea's text.",type:'"xs" | "sm" | "md" | "lg"',defaultValue:'"md"'},{name:"required",description:"If `true`, the textarea is marked as required, and `required` attribute will be added",type:"boolean"},{name:"disabled",description:"If `true`, the textarea will be disabled.",type:"boolean"},{name:"invalid",description:"If `true`, the textarea will have `aria-invalid` set to `true`.",type:"boolean"},{name:"readOnly",description:"If `true`, the textarea will be readonly.",type:"boolean"}];return f(()=>{z.highlightAll()}),e($,{previousLink:u,nextLink:m,contextualNavLinks:g,get children(){return[e(y,{children:"Textarea"}),e(l,{mb:"$5",get children(){return["The ",e(t,{children:"Textarea"})," component allows you to easily create multi-line text textareas."]}}),e(s,{id:"import",children:"Import"}),e(c,{get snippet(){return r.importComponent},mb:"$12"}),e(s,{id:"usage",children:"Usage"}),e(i,{get snippet(){return r.basicUsage},mb:"$12",get children(){return e(a,{placeholder:"Basic usage"})}}),e(n,{id:"sizes",children:"Textarea sizes"}),e(l,{mb:"$5",get children(){return["Use the ",e(t,{children:"size"})," prop to change the size of the Textarea's text. You can set the value to ",e(t,{children:"xs"}),", ",e(t,{children:"sm"}),", ",e(t,{children:"md"})," or ",e(t,{children:"lg"}),"."]}}),e(i,{get snippet(){return r.textareaSizes},mb:"$10",get children(){return e(o,{spacing:"$4",get children(){return[e(a,{placeholder:"extra small size",size:"xs"}),e(a,{placeholder:"small size",size:"sm"}),e(a,{placeholder:"medium size",size:"md"}),e(a,{placeholder:"large size",size:"lg"})]}})}}),e(n,{id:"variants",children:"Textarea variants"}),e(l,{mb:"$5",get children(){return["Use the ",e(t,{children:"variant"})," prop to change the visual style of the Textarea. You can set the value to ",e(t,{children:"outline"}),", ",e(t,{children:"filled"})," or ",e(t,{children:"unstyled"}),"."]}}),e(i,{get snippet(){return r.textareaVariants},mb:"$10",get children(){return e(o,{spacing:"$4",get children(){return[e(a,{placeholder:"Outline",variant:"outline"}),e(a,{placeholder:"Filled",variant:"filled"}),e(a,{placeholder:"Unstyled",variant:"unstyled"})]}})}}),e(n,{id:"disabled",children:"Disabled state"}),e(l,{mb:"$5",get children(){return["Use the ",e(t,{children:"disabled"})," prop to disable the Textarea."]}}),e(i,{get snippet(){return r.textareaDisabled},mb:"$10",get children(){return e(a,{disabled:!0,placeholder:"Here is a sample placeholder"})}}),e(n,{id:"invalid",children:"Invalid state"}),e(l,{mb:"$5",get children(){return["Use the ",e(t,{children:"invalid"})," prop to mark the Textarea as invalid."]}}),e(i,{get snippet(){return r.textareaInvalid},mb:"$10",get children(){return e(a,{invalid:!0,placeholder:"Here is a sample placeholder"})}}),e(n,{id:"controlled",children:"Controlled textarea"}),e(i,{get snippet(){return r.controlledTextarea},mb:"$12",get children(){return[e(l,{mb:"$2",get children(){return["Value: ",T(()=>d())]}}),e(a,{get value(){return d()},onInput:h,placeholder:"Here is a sample placeholder",size:"sm"})]}}),e(s,{id:"theming",children:"Theming"}),e(l,{mb:"$5",get children(){return[e(t,{children:"Textarea"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(c,{lang:"js",get snippet(){return r.theming},mb:"$12"}),e(s,{id:"props",children:"Props"}),e(S,{items:x})]}})}export{Y as default};
