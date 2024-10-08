import{k as T,t as s,a2 as H,o as z,c as e,d as n,C as t,U,N as b,a3 as c,S as h,h as u,a4 as C,F as G,a5 as V,j,a6 as E,a7 as f,q as L}from"./index.3c654a9e.js";import{C as x}from"./CodeSnippet.27230f78.js";import{P as _,a as O}from"./PageTitle.05cba558.js";import{P as i}from"./Preview.c3f3de7a.js";import{P as k}from"./PropsTable.f913c6d8.js";import{S as r}from"./SectionSubtitle.9a34e78b.js";import{S as d}from"./SectionTitle.7cf37368.js";import{I as A}from"./IconCheck.8064b2d0.js";import{I as F}from"./IconPlus.5af30a36.js";import"./Footer.80959b85.js";var J=s('<svg><path d="M5.07505 4.10001C5.07505 2.91103 6.25727 1.92502 7.50005 1.92502C8.74283 1.92502 9.92505 2.91103 9.92505 4.10001C9.92505 5.19861 9.36782 5.71436 8.61854 6.37884L8.58757 6.4063C7.84481 7.06467 6.92505 7.87995 6.92505 9.5C6.92505 9.81757 7.18248 10.075 7.50005 10.075C7.81761 10.075 8.07505 9.81757 8.07505 9.5C8.07505 8.41517 8.62945 7.90623 9.38156 7.23925L9.40238 7.22079C10.1496 6.55829 11.075 5.73775 11.075 4.10001C11.075 2.12757 9.21869 0.775024 7.50005 0.775024C5.7814 0.775024 3.92505 2.12757 3.92505 4.10001C3.92505 4.41758 4.18249 4.67501 4.50005 4.67501C4.81761 4.67501 5.07505 4.41758 5.07505 4.10001ZM7.50005 13.3575C7.9833 13.3575 8.37505 12.9657 8.37505 12.4825C8.37505 11.9992 7.9833 11.6075 7.50005 11.6075C7.0168 11.6075 6.62505 11.9992 6.62505 12.4825C6.62505 12.9657 7.0168 13.3575 7.50005 13.3575Z"fill=currentColor stroke=currentColor stroke-width=1 fill-rule=evenodd clip-rule=evenodd></svg>',!1,!0);const M=T({viewBox:"0 0 15 15",path:()=>J()}),X=`import { 
  CheckboxPrimitive,
  CheckboxPrimitiveIndicator,
  Checkbox, 
  CheckboxGroup
} from "@hope-ui/solid"`,q="<Checkbox defaultChecked>Checkbox</Checkbox>",B=`<HStack spacing="$4">
  <Checkbox defaultChecked colorScheme="primary" />
  <Checkbox defaultChecked colorScheme="accent" />
  <Checkbox defaultChecked colorScheme="neutral" />
  <Checkbox defaultChecked colorScheme="success" />
  <Checkbox defaultChecked colorScheme="info" />
  <Checkbox defaultChecked colorScheme="warning" />
  <Checkbox defaultChecked colorScheme="danger" />
</HStack>`,Y=`<HStack spacing="$4">
  <Checkbox defaultChecked size="sm">Checkbox</Checkbox>
  <Checkbox defaultChecked size="md">Checkbox</Checkbox>
  <Checkbox defaultChecked size="lg">Checkbox</Checkbox>
</HStack>`,D=`<HStack spacing="$4">
  <Checkbox variant="outline">Checkbox</Checkbox>
  <Checkbox variant="filled">Checkbox</Checkbox>
</HStack>`,Q=`<HStack spacing="$4">
  <Checkbox LabelPlacement="start">Checkbox</Checkbox>
  <Checkbox LabelPlacement="end">Checkbox</Checkbox>
</HStack>`,Z=`<HStack spacing="$4">
  <Checkbox disabled>Checkbox</Checkbox>
  <Checkbox variant="filled" disabled>Checkbox</Checkbox>
  <Checkbox defaultChecked disabled>Checkbox</Checkbox>
</HStack>`,N=`<HStack spacing="$4">
  <Checkbox invalid>Checkbox</Checkbox>
  <Checkbox variant="filled" invalid>Checkbox</Checkbox>
  <Checkbox defaultChecked invalid>Checkbox</Checkbox>
</HStack>`,R=`function IndeterminateExample() {
  const [checkedItems, setCheckedItems] = createSignal([false, false]);

  const allChecked = () => checkedItems().every(Boolean);
  const isIndeterminate = () => checkedItems().some(Boolean) && !allChecked();
  
  return (
    <>
      <Checkbox
        checked={allChecked()}
        indeterminate={isIndeterminate()}
        onChange={e => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Parent Checkbox
      </Checkbox>
      <VStack alignItems="flex-start" pl="$6" mt="$1" spacing="$1">
        <Checkbox
          checked={checkedItems()[0]}
          onChange={e => setCheckedItems([e.target.checked, checkedItems()[1]])}
        >
          Child Checkbox 1
        </Checkbox>
        <Checkbox
          checked={checkedItems()[1]}
          onChange={e => setCheckedItems([checkedItems()[0], e.target.checked])}
        >
          Child Checkbox 2
        </Checkbox>
      </VStack>
    </>
  )
}`,W=`<HStack spacing="$4">
  <Checkbox defaultChecked iconChecked={<IconPlus />}>
    Checkbox
  </Checkbox>
  <Checkbox indeterminate iconIndeterminate={<IconQuestionMark />}>
    Checkbox
  </Checkbox>
</HStack>`,K=`<CheckboxGroup colorScheme="success" defaultValue={["luffy", "sanji"]}>
  <HStack spacing="$5">
    <Checkbox value="luffy">Luffy</Checkbox>
    <Checkbox value="zoro">Zoro</Checkbox>
    <Checkbox value="sanji">Sanji</Checkbox>
  </HStack>
</CheckboxGroup>`,ee=`import { css } from "@hope-ui/solid"

const checkboxRootStyles = css({
  rounded: "$md",
  border: "1px solid $neutral7",
  shadow: "$sm",
  bg: "$loContrast",
  px: "$4",
  py: "$3",
  w: "$full",
  cursor: "pointer",

  _focus: {
    borderColor: "$info7",
    shadow: "0 0 0 3px $colors$info5",
  },

  _checked: {
    borderColor: "transparent",
    bg: "#0c4a6e",
    color: "white",
  },
});

const checkboxIndicatorStyles = css({
  rounded: "$sm",
  border: "1px solid $neutral7",
  bg: "$whiteAlpha7",
  boxSize: "$5",

  _groupChecked: {
    borderColor: "transparent",
  },
});

function HeadlessExample() {
  const preferences = [
    {
      id: 1,
      name: "Comments",
      description: "Get notified when someones posts a comment on a posting.",
    },
    {
      id: 2,
      name: "Candidates",
      description: "Get notified when a candidate applies for a job.",
    },
    {
      id: 3,
      name: "Offers",
      description: "Get notified when a candidate accepts or rejects an offer.",
    },
  ];

  return (
    <CheckboxGroup>
      <VStack spacing="$4">
        <For each={preferences}>
          {preference => (
            <CheckboxPrimitive 
              value={preference.id} 
              class={checkboxRootStyles()}
            >
              <HStack justifyContent="space-between" w="$full">
                <VStack alignItems="flex-start">
                  <Text size="sm" fontWeight="$semibold">
                    {preference.name}
                  </Text>
                  <Text
                    size="sm"
                    color="$neutral11"
                    _groupChecked={{
                      color: "$whiteAlpha12",
                    }}
                  >
                    {preference.description}
                  </Text>
                </VStack>
                <Center class={checkboxIndicatorStyles()}>
                  <CheckboxPrimitiveIndicator>
                    <IconCheck display="block" boxSize="$4" />
                  </CheckboxPrimitiveIndicator>
                </Center>
              </HStack>
            </CheckboxPrimitive>
          )}
        </For>
      </VStack>
    </CheckboxGroup>
  );
}`,te=`const config: HopeThemeConfig = {
  components: {
    Checkbox: {
      baseStyle: {
        root: SystemStyleObject,
        group: SystemStyleObject,
        control: SystemStyleObject,
        label: SystemStyleObject,
      },
      defaultProps: {
        root: ThemeableCheckboxOptions,
        group: ThemeableCheckboxOptions,
      }
    }
  }
}`,o={importComponent:X,basicUsage:q,checkboxColors:B,checkboxSizes:Y,checkboxVariants:D,checkboxLabelPlacement:Q,checkboxDisabled:Z,checkboxInvalid:N,checkboxIndeterminate:R,checkboxCustomIcon:W,checkboxGroup:K,headless:ee,theming:te};var ce=s("<strong>CheckboxPrimitive:"),ne=s("<strong>CheckboxPrimitiveIndicator:"),oe=s("<strong>Checkbox:"),re=s("<strong>CheckboxGroup:");const ie=f({rounded:"$md",border:"1px solid $neutral7",shadow:"$sm",bg:"$loContrast",px:"$4",py:"$3",w:"$full",cursor:"pointer",_focus:{borderColor:"$info7",shadow:"0 0 0 3px $colors$info5"},_checked:{borderColor:"transparent",bg:"#0c4a6e",color:"white"}}),ae=f({rounded:"$sm",border:"1px solid $neutral7",bg:"$whiteAlpha7",boxSize:"$5",_groupChecked:{borderColor:"transparent"}});function xe(){const g=[{id:1,name:"Comments",description:"Get notified when someones posts a comment on a posting."},{id:2,name:"Candidates",description:"Get notified when a candidate applies for a job."},{id:3,name:"Offers",description:"Get notified when a candidate accepts or rejects an offer."}],v={href:"/docs/typography/text",label:"Text"},y={href:"/docs/data-entry/form-control",label:"FormControl"},$=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#colors",label:"Checkbox colors",indent:!0},{href:"#sizes",label:"Checkbox sizes",indent:!0},{href:"#variants",label:"Checkbox variants",indent:!0},{href:"#label-placement",label:"Checkbox label placement",indent:!0},{href:"#disabled",label:"Disabled state",indent:!0},{href:"#invalid",label:"Invalid state",indent:!0},{href:"#indeterminate",label:"Indeterminate state",indent:!0},{href:"#custom-icon",label:"Custom icon",indent:!0},{href:"#checkbox-group",label:"CheckboxGroup",indent:!0},{href:"#headless-api",label:"Headless API"},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"},{href:"#checkbox-primitive-props",label:"CheckboxPrimitive props",indent:!0},{href:"#checkbox-props",label:"Checkbox props",indent:!0},{href:"#checkbox-group-props",label:"CheckboxGroup props",indent:!0}],S=[{name:"id",description:"The id to be passed to the internal <input> tag.",type:"string"},{name:"name",description:"The name of the input field in a checkbox (Useful for form submission).",type:"string"},{name:"value",description:"The value to be used in the checkbox input. This is the value that will be returned on form submission.",type:"string | number"},{name:"checked",description:"If `true`, the checkbox will be checked. You'll need to pass `onChange` to update its value (since it is now controlled).",type:"boolean"},{name:"defaultChecked",description:"If `true`, the checkbox will be initially checked.",type:"boolean"},{name:"indeterminate",description:"If `true`, the checkbox will be indeterminate. This only affects the icon shown inside checkbox and does not modify the checked property.",type:"boolean"},{name:"required",description:"If `true`, the checkbox is marked as required, and `required` attribute will be added",type:"boolean"},{name:"disabled",description:"If `true`, the checkbox will be disabled.",type:"boolean"},{name:"invalid",description:"If `true`, the checkbox will have `aria-invalid` set to `true`.",type:"boolean"},{name:"readOnly",description:"If `true`, the checkbox will be readonly.",type:"boolean"},{name:"children",description:"The children of the checkbox. If used as a render props, the internal state will be passed.",type:"JSX.Element | (props: { state: Accessor<CheckboxState> }) => JSX.Element"},{name:"onChange",description:"The callback invoked when the checked state of the `Checkbox` changes.",type:"JSX.EventHandlerUnion<HTMLInputElement, Event>"},{name:"onFocus",description:"The callback invoked when the checkbox is focused.",type:"JSX.EventHandlerUnion<HTMLInputElement, FocusEvent>"},{name:"onBlur",description:"The callback invoked when the checkbox is blurred (loses focus).",type:"JSX.EventHandlerUnion<HTMLInputElement, FocusEvent>"}],I=[{name:"variant",description:"The visual style of the checkbox.",type:'"outline" | "filled"',defaultValue:'"outline"'},{name:"colorScheme",description:"The color of the checkbox.",type:'"primary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger"',defaultValue:'"primary"'},{name:"size",description:"The size of the checkbox.",type:'"sm" | "md" | "lg"',defaultValue:'"md"'},{name:"labelPlacement",description:"The placement of the checkbox label.",type:'"start" | "end"',defaultValue:'"end"'},{name:"iconChecked",description:"The icon to use when the checkbox is checked.",type:"JSX.Element"},{name:"iconIndeterminate",description:"The icon to use when the checkbox is in indeterminate state.",type:"JSX.Element"},{name:"children",description:"The children of the checkbox.",type:"JSX.Element"}],w=[{name:"variant",description:"The visual style of the checkboxes.",type:'"outline" | "filled"',defaultValue:'"outline"'},{name:"colorScheme",description:"The color of the checkboxes.",type:'"primary" | "accent" | "neutral" | "success" | "info" | "warning" | "danger"',defaultValue:'"primary"'},{name:"size",description:"The size of the checkboxes.",type:'"sm" | "md" | "lg"',defaultValue:'"md"'},{name:"labelPlacement",description:"The placement of the checkboxes labels.",type:'"start" | "end"',defaultValue:'"end"'},{name:"name",description:"The `name` attribute forwarded to each `checkbox` element.",type:"string"},{name:"value",description:"The value of the checkbox group (in controlled mode).",type:"(string | number)[]"},{name:"defaultValue",description:"The initial value of the checkbox group (in uncontrolled mode).",type:"(string | number)[]"},{name:"required",description:"If `true`, all wrapped checkbox inputs will be marked as required, and `required` attribute will be added.",type:"boolean"},{name:"disabled",description:"If `true`, all wrapped checkbox inputs will be disabled.",type:"boolean"},{name:"invalid",description:"If `true`, all wrapped checkbox inputs will have `aria-invalid` set to `true`.",type:"boolean"},{name:"readOnly",description:"If `true`, all wrapped checkbox inputs will be readonly.",type:"boolean"},{name:"onChange",description:"The callback invoked when a checkbox is checked.",type:"(value: (string | number)[]) => void"}],[l,p]=H([!1,!1]),m=()=>l().every(Boolean),P=()=>l().some(Boolean)&&!m();return z(()=>{L.highlightAll()}),e(O,{previousLink:v,nextLink:y,contextualNavLinks:$,get children(){return[e(_,{children:"Checkbox"}),e(n,{mb:"$5",get children(){return["The ",e(t,{children:"Checkbox"})," component is used in forms when a user needs to select multiple values from several options."]}}),e(d,{id:"import",children:"Import"}),e(x,{get snippet(){return o.importComponent},mb:"$6"}),e(U,{spacing:"$2",mb:"$12",get children(){return[e(b,{get children(){return[ce()," Unstyled component containing all the parts of a checkbox. It renders a ",e(t,{children:"label"})," and a visualy hidden ",e(t,{children:"input"})," with type set to ",e(t,{children:"checkbox"}),"."]}}),e(b,{get children(){return[ne()," Unstyled component rendered when the"," ",e(t,{children:"CheckboxPrimitive"})," is in a ",e(t,{children:"checked"})," or ",e(t,{children:"indeterminate"})," ","state."]}}),e(b,{get children(){return[oe()," The Hope UI styled checkbox component based on"," ",e(t,{children:"CheckboxPrimitive"}),"."]}}),e(b,{get children(){return[re()," Component to help manage the checked state of its children"," ",e(t,{children:"Checkbox"})," components and conveniently pass a few shared style props to each."]}})]}}),e(d,{id:"usage",children:"Usage"}),e(n,{mb:"$5"}),e(i,{get snippet(){return o.basicUsage},mb:"$12",get children(){return e(c,{defaultChecked:!0,children:"Checkbox"})}}),e(r,{id:"colors",children:"Checkbox colors"}),e(n,{mb:"$5",get children(){return["Use the ",e(t,{children:"colorScheme"})," prop to change the color of the Checkbox. You can set the value to ",e(t,{children:"primary"}),", ",e(t,{children:"accent"}),", ",e(t,{children:"neutral"}),","," ",e(t,{children:"success"}),", ",e(t,{children:"info"}),", ",e(t,{children:"warning"})," or ",e(t,{children:"danger"}),"."]}}),e(i,{get snippet(){return o.checkboxColors},mb:"$10",get children(){return e(h,{spacing:"$4",get children(){return[e(c,{defaultChecked:!0,colorScheme:"primary"}),e(c,{defaultChecked:!0,colorScheme:"accent"}),e(c,{defaultChecked:!0,colorScheme:"neutral"}),e(c,{defaultChecked:!0,colorScheme:"success"}),e(c,{defaultChecked:!0,colorScheme:"info"}),e(c,{defaultChecked:!0,colorScheme:"warning"}),e(c,{defaultChecked:!0,colorScheme:"danger"})]}})}}),e(r,{id:"sizes",children:"Checkbox sizes"}),e(n,{mb:"$5",get children(){return["Use the ",e(t,{children:"size"})," prop to change the size of the Checkbox. You can set the value to"," ",e(t,{children:"sm"}),", ",e(t,{children:"md"})," or ",e(t,{children:"lg"}),"."]}}),e(i,{get snippet(){return o.checkboxSizes},mb:"$10",get children(){return e(h,{spacing:"$4",get children(){return[e(c,{defaultChecked:!0,size:"sm",children:"Checkbox"}),e(c,{defaultChecked:!0,size:"md",children:"Checkbox"}),e(c,{defaultChecked:!0,size:"lg",children:"Checkbox"})]}})}}),e(r,{id:"variants",children:"Checkbox variants"}),e(n,{mb:"$5",get children(){return["Use the ",e(t,{children:"variant"})," prop to change the visual style of the Checkbox. You can set the value to ",e(t,{children:"outline"})," or ",e(t,{children:"filled"}),"."]}}),e(i,{get snippet(){return o.checkboxVariants},mb:"$10",get children(){return e(h,{spacing:"$4",get children(){return[e(c,{variant:"outline",children:"Checkbox"}),e(c,{variant:"filled",children:"Checkbox"})]}})}}),e(r,{id:"label-placement",children:"Checkbox label placement"}),e(n,{mb:"$5",get children(){return["Use the ",e(t,{children:"labelPlacement"})," prop to change the placement of the label. You can set the value to ",e(t,{children:"start"})," or ",e(t,{children:"end"}),"."]}}),e(i,{get snippet(){return o.checkboxLabelPlacement},mb:"$10",get children(){return e(h,{spacing:"$4",get children(){return[e(c,{labelPlacement:"start",children:"Checkbox"}),e(c,{labelPlacement:"end",children:"Checkbox"})]}})}}),e(r,{id:"disabled",children:"Disabled state"}),e(n,{mb:"$5",get children(){return["Use the ",e(t,{children:"disabled"})," prop to disable the Checkbox."]}}),e(i,{get snippet(){return o.checkboxDisabled},mb:"$10",get children(){return e(h,{spacing:"$4",get children(){return[e(c,{disabled:!0,children:"Checkbox"}),e(c,{variant:"filled",disabled:!0,children:"Checkbox"}),e(c,{defaultChecked:!0,disabled:!0,children:"Checkbox"})]}})}}),e(r,{id:"invalid",children:"Invalid state"}),e(n,{mb:"$5",get children(){return["Use the ",e(t,{children:"invalid"})," prop to mark the Checkbox as invalid."]}}),e(i,{get snippet(){return o.checkboxInvalid},mb:"$10",get children(){return e(h,{spacing:"$4",get children(){return[e(c,{invalid:!0,children:"Checkbox"}),e(c,{variant:"filled",invalid:!0,children:"Checkbox"}),e(c,{defaultChecked:!0,invalid:!0,children:"Checkbox"})]}})}}),e(r,{id:"indeterminate",children:"Indeterminate state"}),e(n,{mb:"$5",get children(){return["Use the ",e(t,{children:"indeterminate"})," prop to mark the Checkbox as indeterminate."]}}),e(i,{get snippet(){return o.checkboxIndeterminate},mb:"$10",get children(){return[e(c,{get checked(){return m()},get indeterminate(){return P()},onChange:a=>p([a.target.checked,a.target.checked]),children:"Parent Checkbox"}),e(u,{alignItems:"flex-start",pl:"$6",mt:"$1",spacing:"$1",get children(){return[e(c,{get checked(){return l()[0]},onChange:a=>p([a.target.checked,l()[1]]),children:"Child Checkbox 1"}),e(c,{get checked(){return l()[1]},onChange:a=>p([l()[0],a.target.checked]),children:"Child Checkbox 2"})]}})]}}),e(r,{id:"custom-icon",children:"Custom icon"}),e(n,{mb:"$5",get children(){return["Use the ",e(t,{children:"iconChecked"})," and ",e(t,{children:"iconIndeterminate"})," prop on"," ",e(t,{children:"CheckboxControl"})," to change the Checkbox icon."]}}),e(i,{get snippet(){return o.checkboxCustomIcon},mb:"$12",get children(){return e(h,{spacing:"$4",get children(){return[e(c,{defaultChecked:!0,get iconChecked(){return e(F,{})},children:"Checkbox"}),e(c,{indeterminate:!0,get iconIndeterminate(){return e(M,{})},children:"Checkbox"})]}})}}),e(r,{id:"checkbox-group",children:"CheckboxGroup"}),e(n,{mb:"$5",get children(){return["You can use the ",e(t,{children:"CheckboxGroup"})," component to manage the checked state of related"," ",e(t,{children:"Checkbox"})," components and conveniently pass a few shared style props to each. See the props table at the bottom of this page for a list of the shared styling props."]}}),e(i,{get snippet(){return o.checkboxGroup},mb:"$12",get children(){return e(C,{colorScheme:"success",defaultValue:["luffy","sanji"],get children(){return e(h,{spacing:"$5",get children(){return[e(c,{value:"luffy",children:"Luffy"}),e(c,{value:"zoro",children:"Zoro"}),e(c,{value:"sanji",children:"Sanji"})]}})}})}})," ",e(d,{id:"headless-api",children:"Headless API"}),e(n,{mb:"$5",get children(){return["Use the unstyled ",e(t,{children:"CheckboxPrimitive"})," component to achieve your desired design. You can pair it with your styling solution of choice. The below example uses style props and the ",e(t,{children:"css"})," function."]}}),e(i,{get snippet(){return o.headless},mb:"$12",get children(){return e(C,{get children(){return e(u,{spacing:"$4",get children(){return e(G,{each:g,children:a=>e(V,{get value(){return a.id},get class(){return ie()},get children(){return e(h,{justifyContent:"space-between",w:"$full",get children(){return[e(u,{alignItems:"flex-start",get children(){return[e(n,{size:"sm",fontWeight:"$semibold",get children(){return a.name}}),e(n,{size:"sm",color:"$neutral11",_groupChecked:{color:"$whiteAlpha12"},get children(){return a.description}})]}}),e(j,{get class(){return ae()},get children(){return e(E,{get children(){return e(A,{display:"block",boxSize:"$4"})}})}})]}})}})})}})}})}}),e(d,{id:"theming",children:"Theming"}),e(n,{mb:"$5",get children(){return[e(t,{children:"Checkbox"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(x,{lang:"js",get snippet(){return o.theming},mb:"$12"}),e(d,{id:"props",children:"Props"}),e(r,{id:"checkbox-primitive-props",children:"CheckboxPrimitive props"}),e(k,{items:S,mb:"$10"}),e(r,{id:"checkbox-props",children:"Checkbox props"}),e(n,{mb:"$5",get children(){return[e(t,{children:"Checkbox"})," composes the ",e(t,{children:"CheckboxPrimitive"})," component, so you can pass all its props. These are props specific to the ",e(t,{children:"Checkbox"})," component:"]}}),e(k,{items:I,mb:"$10"}),e(r,{id:"checkbox-group-props",children:"CheckboxGroup props"}),e(k,{items:w})]}})}export{xe as default};
