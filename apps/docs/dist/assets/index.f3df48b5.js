import{a2 as P,o as q,c as e,d as n,C as t,U as y,N as r,as as u,at as p,au as g,av as S,aw as m,ax as b,ay as f,F as c,az as d,aA as s,aB as v,h as I,aC as T,aD as C,K as R,R as X,A as F,p as z,M as _,D as U,ah as Y,ai as w,Q as k,aE as i,b as K,t as O,n as Q}from"./index.65470585.js";import{C as j}from"./CodeSnippet.f7739050.js";import{P as Z,a as ee}from"./PageTitle.a7317606.js";import{P as h}from"./Preview.6ed400d6.js";import{P as V}from"./PropsTable.a2f6bc4a.js";import{S as o}from"./SectionSubtitle.07878c29.js";import{S as $}from"./SectionTitle.613f5b08.js";import{I as te}from"./IconCaretDown.c4eddb11.js";import"./Footer.4711f8eb.js";const le=`import { 
  Select,
  SelectTrigger,
  SelectPlaceholder,
  SelectValue,
  SelectTag,
  SelectTagCloseButton,
  SelectIcon,
  SelectContent,
  SelectListbox,
  SelectOptGroup,
  SelectLabel,
  SelectOption,
  SelectOptionText,
  SelectOptionIndicator,
} from "@hope-ui/solid"`,re=`<Select>
  <SelectTrigger>
    <SelectPlaceholder>Choose a framework</SelectPlaceholder>
    <SelectValue />
    <SelectIcon />
  </SelectTrigger>
  <SelectContent>
    <SelectListbox>
      <For each={["React", "Angular", "Vue", "Svelte", "Solid"]}>
        {item => (
          <SelectOption value={item}>
            <SelectOptionText>{item}</SelectOptionText>
            <SelectOptionIndicator />
          </SelectOption>
        )}
      </For>
    </SelectListbox>
  </SelectContent>
</Select>`,ne=`<VStack spacing="$4">
  <Select size="xs">...</Select>
  <Select size="sm">...</Select>
  <Select size="md">...</Select>
  <Select size="lg">...</Select>
</VStack>`,ie=`<VStack spacing="$4">
  <Select variant="outline">...</Select>
  <Select variant="filled">...</Select>
  <Select variant="unstyled">...</Select>
</VStack>`,oe=`<Select disabled>
  <SelectTrigger>
    <SelectPlaceholder>Choose a framework</SelectPlaceholder>
    <SelectValue />
    <SelectIcon />
  </SelectTrigger>
  <SelectContent>
    <SelectListbox>
      <For each={["React", "Angular", "Vue", "Svelte", "Solid"]}>
        {item => (
          <SelectOption value={item}>
            <SelectOptionText>{item}</SelectOptionText>
            <SelectOptionIndicator />
          </SelectOption>
        )}
      </For>
    </SelectListbox>
  </SelectContent>
</Select>`,ce=`<Select invalid>
  <SelectTrigger>
    <SelectPlaceholder>Choose a framework</SelectPlaceholder>
    <SelectValue />
    <SelectIcon />
  </SelectTrigger>
  <SelectContent>
    <SelectListbox>
      <For each={["React", "Angular", "Vue", "Svelte", "Solid"]}>
        {item => (
          <SelectOption value={item}>
            <SelectOptionText>{item}</SelectOptionText>
            <SelectOptionIndicator />
          </SelectOption>
        )}
      </For>
    </SelectListbox>
  </SelectContent>
</Select>`,ae=`<Select defaultValue="Solid">
  <SelectTrigger>
    <SelectPlaceholder>Choose a framework</SelectPlaceholder>
    <SelectValue />
    <SelectIcon />
  </SelectTrigger>
  <SelectContent>
    <SelectListbox>
      <For each={["React", "Angular", "Vue", "Svelte", "Solid"]}>
        {item => (
          <SelectOption value={item}>
            <SelectOptionText>{item}</SelectOptionText>
            <SelectOptionIndicator />
          </SelectOption>
        )}
      </For>
    </SelectListbox>
  </SelectContent>
</Select>`,de=`<Select>
  <SelectTrigger>
    <SelectPlaceholder>Choose a framework</SelectPlaceholder>
    <SelectValue />
    <SelectIcon />
  </SelectTrigger>
  <SelectContent>
    <SelectListbox>
      <For each={["React", "Angular", "Vue", "Svelte", "Solid"]}>
        {item => (
          <SelectOption value={item} disabled={item === "Angular"}>
            <SelectOptionText>{item}</SelectOptionText>
            <SelectOptionIndicator />
          </SelectOption>
        )}
      </For>
    </SelectListbox>
  </SelectContent>
</Select>`,se=`<Select>
  <SelectTrigger>
    <SelectPlaceholder>Choose a framework</SelectPlaceholder>
    <SelectValue />
    <SelectIcon />
  </SelectTrigger>
  <SelectContent>
    <SelectListbox maxH="$96">
      <SelectOptGroup>
        <SelectLabel>Old school</SelectLabel>
        <For each={["React", "Angular", "Vue"]}>
          {item => (
            <SelectOption value={item}>
              <SelectOptionText>{item}</SelectOptionText>
              <SelectOptionIndicator />
            </SelectOption>
          )}
        </For>
      </SelectOptGroup>
      <SelectOptGroup>
        <SelectLabel>New school</SelectLabel>
        <For each={["Svelte", "Solid"]}>
          {item => (
            <SelectOption value={item}>
              <SelectOptionText>{item}</SelectOptionText>
              <SelectOptionIndicator />
            </SelectOption>
          )}
        </For>
      </SelectOptGroup>
    </SelectListbox>
  </SelectContent>
</Select>`,he=`const frameworks = [
  { 
    id: 1,
    name: "React", 
    tagLine: "A JavaScript library for building user interfaces" 
  },
  { 
    id: 2, 
    name: "Angular", 
    tagLine: "The modern web developer's platform" 
  },
  { 
    id: 3, 
    name: "Vue", 
    tagLine: "The progressive javaScript framework" 
  },
  { 
    id: 4, 
    name: "Svelte",
     tagLine: "Cybernetically enhanced web apps"
  },
  {
    id: 5,
    name: "Solid",
    tagLine: "Simple and performant reactivity for building user interfaces",
  },
];

function ComplexTypeaheadExample() {
  return (
    <Select>
      <SelectTrigger>
        <SelectPlaceholder>Choose a framework</SelectPlaceholder>
        <SelectValue />
        <SelectIcon />
      </SelectTrigger>
      <SelectContent>
        <SelectListbox maxH="$xs">
          <For each={frameworks}>
            {item => (
              <SelectOption value={item.id} textValue={item.name} px="$3" py="$1">
                <VStack alignItems="flex-start">
                  <Text>{item.name}</Text>
                  <Text size="sm" color="$neutral11">
                    {item.tagLine}
                  </Text>
                </VStack>
                <SelectOptionIndicator />
              </SelectOption>
            )}
          </For>
        </SelectListbox>
      </SelectContent>
    </Select>
  )
}`,ue=`function Example() {
  const [value, setValue] = createSignal("");

  return (
    <>
      <Text mb="$2">Value: {value()}</Text>
      <Select value={value()} onChange={setValue}>
        <SelectTrigger>
          <SelectPlaceholder>Choose a framework</SelectPlaceholder>
          <SelectValue />
          <SelectIcon />
        </SelectTrigger>
        <SelectContent>
          <SelectListbox>
            <For each={["React", "Angular", "Vue", "Svelte", "Solid"]}>
              {item => (
                <SelectOption value={item}>
                  <SelectOptionText>{item}</SelectOptionText>
                  <SelectOptionIndicator />
                </SelectOption>
              )}
            </For>
          </SelectListbox>
        </SelectContent>
      </Select>
    </>
  )
}`,pe=`<Select multiple>
  <SelectTrigger>
    <SelectPlaceholder>Choose some frameworks</SelectPlaceholder>
    <SelectValue />
    <SelectIcon />
  </SelectTrigger>
  <SelectContent>
    <SelectListbox>
      <For each={["React", "Angular", "Vue", "Svelte", "Solid"]}>
        {item => (
          <SelectOption value={item}>
            <SelectOptionText>{item}</SelectOptionText>
            <SelectOptionIndicator />
          </SelectOption>
        )}
      </For>
    </SelectListbox>
  </SelectContent>
</Select>`,ge=`<Select multiple defaultValue={["React", "Solid"]}>
  <SelectTrigger>
    <SelectPlaceholder>Choose some frameworks</SelectPlaceholder>
    <SelectValue />
    <SelectIcon />
  </SelectTrigger>
  <SelectContent>
    <SelectListbox>
      <For each={["React", "Angular", "Vue", "Svelte", "Solid"]}>
        {item => (
          <SelectOption value={item}>
            <SelectOptionText>{item}</SelectOptionText>
            <SelectOptionIndicator />
          </SelectOption>
        )}
      </For>
    </SelectListbox>
  </SelectContent>
</Select>`,Se=`function Example() {
  const [value, setValue] = createSignal([]);

  return (
    <>
      <Text mb="$2">Value: {JSON.stringify(value())}</Text>
      <Select multiple value={value()} onChange={setValue}>
        <SelectTrigger>
          <SelectPlaceholder>Choose some frameworks</SelectPlaceholder>
          <SelectValue />
          <SelectIcon />
        </SelectTrigger>
        <SelectContent>
          <SelectListbox>
            <For each={["React", "Angular", "Vue", "Svelte", "Solid"]}>
              {item => (
                <SelectOption value={item}>
                  <SelectOptionText>{item}</SelectOptionText>
                  <SelectOptionIndicator />
                </SelectOption>
              )}
            </For>
          </SelectListbox>
        </SelectContent>
      </Select>
    </>
  )
}`,me=`<SimpleSelect placeholder="Choose a framework">
  <SimpleOption value="react">React</SimpleOption>
  <SimpleOption value="angular" disabled>Angular</SimpleOption>
  <SimpleOption value="vue">Vue</SimpleOption>
  <SimpleOption value="svelte">Svelte</SimpleOption>
  <SimpleOption value="solid">Solid</SimpleOption>
</SimpleSelect>`,be=`<Select multiple offset={-1}>
  <SelectTrigger 
    rounded="$none" 
    _focus={{ 
      shadow: "$none", 
      borderColor: "$warning7" 
    }}
  >
    <SelectPlaceholder color="$neutral12" fontSize="$sm">
      Choose some frameworks
    </SelectPlaceholder>
    <SelectValue>
      {({ selectedOptions }) => (
        <hope.span fontSize="$sm">
          {selectedOptions
            .map(option => option.textValue)
            .join(", ")
            .trim()}
        </hope.span>
      )}
    </SelectValue>
    <SelectIcon 
      as={IconCaretDown} 
      rotateOnOpen 
      boxSize="$6" 
      color="$warning10" 
    />
  </SelectTrigger>
  <SelectContent rounded="$none" shadow="$xl" borderColor="$warning7">
    <Box px="$3" py="$2">
      You can put a header here
    </Box>
    <Divider />
    <SelectListbox px="0" py="$1" maxH="$96">
      <SelectOptGroup>
        <SelectLabel>Old school</SelectLabel>
        <For each={["React", "Angular", "Vue"]}>
          {option => (
            <SelectOption
              value={option}
              rounded="$none"
              fontSize="$sm"
              _active={{ bg: "$warning3", color: "$warning11" }}
              _selected={{ bg: "$warning9", color: "white" }}
            >
              <SelectOptionText _groupSelected={{ fontWeight: "$medium" }}>
                {option}
              </SelectOptionText>
            </SelectOption>
          )}
        </For>
      </SelectOptGroup>
      <SelectOptGroup>
        <SelectLabel>New school</SelectLabel>
        <For each={["Svelte", "Solid"]}>
          {option => (
            <SelectOption
              value={option}
              rounded="$none"
              fontSize="$sm"
              _active={{ bg: "$warning3", color: "$warning11" }}
              _selected={{ bg: "$warning9", color: "white" }}
            >
              <SelectOptionText _groupSelected={{ fontWeight: "$medium" }}>
                {option}
              </SelectOptionText>
            </SelectOption>
          )}
        </For>
      </SelectOptGroup>
    </SelectListbox>
    <Divider />
    <Box px="$3" py="$2">
      Or put a footer here
    </Box>
  </SelectContent>
</Select>`,fe=`const config: HopeThemeConfig = {
  components: {
    Select: {
      baseStyle: {
        trigger: SystemStyleObject
        placeholder: SystemStyleObject
        singleValue: SystemStyleObject
        multiValue: SystemStyleObject
        tag: SystemStyleObject
        tagCloseButton: SystemStyleObject
        icon: SystemStyleObject
        content: SystemStyleObject
        listbox: SystemStyleObject
        optgroup: SystemStyleObject
        label: SystemStyleObject
        option: SystemStyleObject
        optionText: SystemStyleObject
        optionIndicator: SystemStyleObject
      },
      defaultProps: {
        root: ThemeableSelectOptions
      }
    }
  }
}`,a={importComponent:le,basicUsage:re,triggerSizes:ne,triggerVariants:ie,disabledState:oe,invalidState:ce,defaultValue:ae,disabledOption:de,optionGroup:se,typeaheadComplexOption:he,controlled:ue,multiSelectBasicUsage:pe,multiSelectDefaultValues:ge,multiSelectControlled:Se,simpleSelect:me,composition:be,theming:fe};var ve=O("<strong>Select:"),Oe=O("<strong>SelectTrigger:"),$e=O("<strong>SelectPlaceholder:"),xe=O("<strong>SelectValue:"),ye=O("<strong>SelectTag:"),we=O("<strong>SelectTagCloseButton:"),Te=O("<strong>SelectIcon:"),Ce=O("<strong>SelectContent:"),Ve=O("<strong>SelectListbox:"),Ie=O("<strong>SelectOptGroup:"),ke=O("<strong>SelectLabel:"),Le=O("<strong>SelectOption:"),Ae=O("<strong>SelectOptionText:"),Pe=O("<strong>SelectOptionIndicator:");const Re=[{id:1,name:"React",tagLine:"A JavaScript library for building user interfaces"},{id:2,name:"Angular",tagLine:"The modern web developer's platform"},{id:3,name:"Vue",tagLine:"The progressive javaScript framework"},{id:4,name:"Svelte",tagLine:"Cybernetically enhanced web apps"},{id:5,name:"Solid",tagLine:"Simple and performant reactivity for building user interfaces"}];function Ge(){const[L,B]=P(""),[A,D]=P([]),H={href:"/docs/data-entry/radio",label:"Radio"},E={href:"/docs/data-entry/switch",label:"Switch"},G=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#sizes",label:"Trigger sizes",indent:!0},{href:"#variants",label:"Trigger variants",indent:!0},{href:"#disabled",label:"Disabled state",indent:!0},{href:"#invalid",label:"Invalid state",indent:!0},{href:"#default-value",label:"Default value",indent:!0},{href:"#disabled-option",label:"Make an option disabled",indent:!0},{href:"#option-group",label:"Option group",indent:!0},{href:"#typeahead-complex-option",label:"Typeahead with complex option",indent:!0},{href:"#controlled",label:"Controlled select",indent:!0},{href:"#multi-select",label:"Multi select"},{href:"#multi-default-value",label:"Default values",indent:!0},{href:"#multi-controlled",label:"Controlled multi-select",indent:!0},{href:"#composition",label:"Composition"},{href:"#simple-select",label:"Simple select"},{href:"#accessibility",label:"Accessibility"},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"},{href:"#select-props",label:"Select props",indent:!0},{href:"#select-option-props",label:"SelectOption props",indent:!0},{href:"#select-value-props",label:"SelectValue props",indent:!0},{href:"#select-icon-props",label:"SelectIcon props",indent:!0},{href:"#other-components-props",label:"Other components props",indent:!0}],M=[{name:"variant",description:"The visual style of the select trigger.",type:'"outline" | "filled" | "unstyled"',defaultValue:'"outline"'},{name:"size",description:"The size of the select trigger.",type:'"xs" | "sm" | "md" | "lg"',defaultValue:'"md"'},{name:"offset",description:"Offset between the listbox and the reference (trigger) element.",type:"number"},{name:"id",description:"The `id` of the select.",type:"string"},{name:"multiple",description:"If `true`, allow multi-selection.",type:"boolean",defaultValue:"false"},{name:"value",description:"The value of the select (in controlled mode).",type:"string | number | (string | number)[]"},{name:"defaultValue",description:"The value of the select when initially rendered (in uncontrolled mode).",type:"string | number | (string | number)[]"},{name:"required",description:"If `true`, the select will be required.",type:"boolean"},{name:"disabled",description:"If `true`, the select trigger will be disabled.",type:"boolean"},{name:"invalid",description:"If `true`, the select trigger will have `aria-invalid` set to `true`.",type:"boolean"},{name:"readOnly",description:"If `true`, the select will be readonly.",type:"boolean"},{name:"onChange",description:"Callback invoked when the selected value changes (in controlled mode).",type:"(value: string | number | (string | number)[]) => void"},{name:"onFocus",description:"Callback invoked when the select trigger gain focus.",type:"JSX.EventHandlerUnion<HTMLButtonElement, FocusEvent>"},{name:"onBlur",description:"Callback invoked when the select trigger loose focus.",type:"JSX.EventHandlerUnion<HTMLButtonElement, FocusEvent>"}],W=[{required:!0,name:"value",description:"The value of the option.",type:"string | number"},{name:"textValue",description:"Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the `SelectOption`. Use this when the content is complex, or you have non-textual content inside.",type:"string"},{name:"disabled",description:"If `true`, the option will be disabled.",type:"boolean"}],J=[{name:"children",description:"A custom content to use in place of the select value. The array of selected options will be passed to the render prop.",type:"JSX.Element | (props: { selectedOptions: SelectOptionData[] }) => JSX.Element"}],N=[{name:"rotateOnOpen",description:"If `true`, the icon will perform a 180deg rotation when the select is open",type:"boolean",defaultValue:"false"}];return q(()=>{Q.highlightAll()}),e(ee,{previousLink:H,nextLink:E,contextualNavLinks:G,get children(){return[e(Z,{children:"Select"}),e(n,{mb:"$5",get children(){return[e(t,{children:"Select"})," component is a component that allows users pick a value from predefined options. Ideally, it should be used when there are more than 5 options, otherwise you might consider using a radio group instead."]}}),e($,{id:"import",children:"Import"}),e(j,{get snippet(){return a.importComponent},mb:"$6"}),e(y,{spacing:"$2",mb:"$12",get children(){return[e(r,{get children(){return[ve()," The wrapper component that provides context for all its children."]}}),e(r,{get children(){return[Oe()," The trigger that toggles the select."]}}),e(r,{get children(){return[$e()," The component used to display a placeholder when no option is selected."]}}),e(r,{get children(){return[xe()," The part that reflects the selected value in the trigger."]}}),e(r,{get children(){return[ye()," The component used to display a selected value in a multi-select."]}}),e(r,{get children(){return[we()," The button used to remove a selected option in a multi-select."]}}),e(r,{get children(){return[Te()," The container for the select dropdown icon."]}}),e(r,{get children(){return[Ce()," The component that pops out when the select is open."]}}),e(r,{get children(){return[Ve()," The scrolling viewport that contains all of the options."]}}),e(r,{get children(){return[Ie()," The component used to group multiple options."]}}),e(r,{get children(){return[ke()," The label of an options group."]}}),e(r,{get children(){return[Le()," The component that contains a selectable option."]}}),e(r,{get children(){return[Ae()," The textual part of the option."]}}),e(r,{get children(){return[Pe()," A visual indicator rendered when the option is selected."]}})]}}),e($,{id:"usage",children:"Usage"}),e(h,{get snippet(){return a.basicUsage},mb:"$10",get children(){return e(u,{get children(){return[e(p,{get children(){return[e(g,{children:"Choose a framework"}),e(S,{}),e(m,{})]}}),e(b,{get children(){return e(f,{get children(){return e(c,{each:["React","Angular","Vue","Svelte","Solid"],children:l=>e(d,{value:l,get children(){return[e(s,{children:l}),e(v,{})]}})})}})}})]}})}}),e(o,{id:"sizes",children:"Trigger sizes"}),e(n,{mb:"$5",get children(){return["Use the ",e(t,{children:"size"})," prop to change the size of the ",e(t,{children:"SelectTrigger"}),". You can set the value to ",e(t,{children:"xs"}),", ",e(t,{children:"sm"}),", ",e(t,{children:"md"})," or ",e(t,{children:"lg"}),"."]}}),e(h,{get snippet(){return a.triggerSizes},mb:"$10",get children(){return e(I,{spacing:"$4",get children(){return e(c,{each:["xs","sm","md","lg"],children:l=>e(u,{size:l,get children(){return[e(p,{get children(){return[e(g,{children:"Choose a framework"}),e(S,{}),e(m,{})]}}),e(b,{get children(){return e(f,{get children(){return e(c,{each:["React","Angular","Vue","Svelte","Solid"],children:x=>e(d,{value:x,get children(){return[e(s,{children:x}),e(v,{})]}})})}})}})]}})})}})}}),e(o,{id:"variants",children:"Trigger variants"}),e(n,{mb:"$5",get children(){return["Use the ",e(t,{children:"variant"})," prop to change the visual style of the"," ",e(t,{children:"SelectTrigger"}),". You can set the value to ",e(t,{children:"outline"}),","," ",e(t,{children:"filled"})," or ",e(t,{children:"unstyled"}),"."]}}),e(h,{get snippet(){return a.triggerVariants},mb:"$10",get children(){return e(I,{spacing:"$4",get children(){return e(c,{each:["outline","filled","unstyled"],children:l=>e(u,{variant:l,get children(){return[e(p,{get children(){return[e(g,{children:"Choose a framework"}),e(S,{}),e(m,{})]}}),e(b,{get children(){return e(f,{get children(){return e(c,{each:["React","Angular","Vue","Svelte","Solid"],children:x=>e(d,{value:x,get children(){return[e(s,{children:x}),e(v,{})]}})})}})}})]}})})}})}}),e(o,{id:"disabled",children:"Disabled state"}),e(n,{mb:"$5",get children(){return["Use the ",e(t,{children:"disabled"})," prop to disable the Select."]}}),e(h,{get snippet(){return a.disabledState},mb:"$10",get children(){return e(u,{disabled:!0,get children(){return[e(p,{get children(){return[e(g,{children:"Choose a framework"}),e(S,{}),e(m,{})]}}),e(b,{get children(){return e(f,{get children(){return e(c,{each:["React","Angular","Vue","Svelte","Solid"],children:l=>e(d,{value:l,get children(){return[e(s,{children:l}),e(v,{})]}})})}})}})]}})}}),e(o,{id:"invalid",children:"Invalid state"}),e(n,{mb:"$5",get children(){return["Use the ",e(t,{children:"invalid"})," prop to mark the Select as invalid."]}}),e(h,{get snippet(){return a.invalidState},mb:"$10",get children(){return e(u,{invalid:!0,get children(){return[e(p,{get children(){return[e(g,{children:"Choose a framework"}),e(S,{}),e(m,{})]}}),e(b,{get children(){return e(f,{get children(){return e(c,{each:["React","Angular","Vue","Svelte","Solid"],children:l=>e(d,{value:l,get children(){return[e(s,{children:l}),e(v,{})]}})})}})}})]}})}}),e(o,{id:"default-value",children:"Default value"}),e(n,{mb:"$5",get children(){return["Use the ",e(t,{children:"defaultValue"})," prop to make an option selected by default."]}}),e(h,{get snippet(){return a.defaultValue},mb:"$10",get children(){return e(u,{defaultValue:"Solid",get children(){return[e(p,{get children(){return[e(g,{children:"Choose a framework"}),e(S,{}),e(m,{})]}}),e(b,{get children(){return e(f,{get children(){return e(c,{each:["React","Angular","Vue","Svelte","Solid"],children:l=>e(d,{value:l,get children(){return[e(s,{children:l}),e(v,{})]}})})}})}})]}})}}),e(o,{id:"disabled-option",children:"Make an option disabled"}),e(n,{mb:"$5",get children(){return["Use the ",e(t,{children:"disabled"})," prop on ",e(t,{children:"SelectOption"})," to make an option disabled."]}}),e(h,{get snippet(){return a.disabledOption},mb:"$10",get children(){return e(u,{get children(){return[e(p,{get children(){return[e(g,{children:"Choose a framework"}),e(S,{}),e(m,{})]}}),e(b,{get children(){return e(f,{get children(){return e(c,{each:["React","Angular","Vue","Svelte","Solid"],children:l=>e(d,{value:l,disabled:l==="Angular",get children(){return[e(s,{children:l}),e(v,{})]}})})}})}})]}})}}),e(o,{id:"option-group",children:"Option group"}),e(n,{mb:"$5",get children(){return["Use the ",e(t,{children:"SelectOptGroup"})," and ",e(t,{children:"SelectLabel"})," to visualy group options."]}}),e(h,{get snippet(){return a.optionGroup},mb:"$10",get children(){return e(u,{get children(){return[e(p,{get children(){return[e(g,{children:"Choose a framework"}),e(S,{}),e(m,{})]}}),e(b,{get children(){return e(f,{maxH:"$96",get children(){return[e(T,{get children(){return[e(C,{children:"Old school"}),e(c,{each:["React","Angular","Vue"],children:l=>e(d,{value:l,get children(){return[e(s,{children:l}),e(v,{})]}})})]}}),e(T,{get children(){return[e(C,{children:"New school"}),e(c,{each:["Svelte","Solid"],children:l=>e(d,{value:l,get children(){return[e(s,{children:l}),e(v,{})]}})})]}})]}})}})]}})}}),e(o,{id:"typeahead-complex-option",children:"Typeahead with complex option"}),e(n,{mb:"$3",get children(){return["By default the typeahead behavior will use the ",e(t,{children:".textContent"})," of the"," ",e(t,{children:"SelectOption"}),"."]}}),e(n,{mb:"$5",get children(){return["However, when the content is more complex than just a text, Use the ",e(t,{children:"textValue"})," ","prop on ",e(t,{children:"SelectOption"})," to define which text should be used for typeahead purposes."]}}),e(h,{get snippet(){return a.typeaheadComplexOption},mb:"$10",get children(){return e(u,{get children(){return[e(p,{get children(){return[e(g,{children:"Choose a framework"}),e(S,{}),e(m,{})]}}),e(b,{get children(){return e(f,{maxH:"$xs",get children(){return e(c,{each:Re,children:l=>e(d,{get value(){return l.id},get textValue(){return l.name},px:"$3",py:"$1",get children(){return[e(I,{alignItems:"flex-start",get children(){return[e(n,{get children(){return l.name}}),e(n,{size:"sm",color:"$neutral11",get children(){return l.tagLine}})]}}),e(v,{})]}})})}})}})]}})}}),e(o,{id:"controlled",children:"Controlled select"}),e(n,{mb:"$5",get children(){return["Use the ",e(t,{children:"value"})," and ",e(t,{children:"onChange"})," props to control the select."]}}),e(h,{get snippet(){return a.controlled},mb:"$12",get children(){return[e(n,{mb:"$2",get children(){return["Value: ",R(()=>L())]}}),e(u,{get value(){return L()},onChange:B,get children(){return[e(p,{get children(){return[e(g,{children:"Choose a framework"}),e(S,{}),e(m,{})]}}),e(b,{get children(){return e(f,{get children(){return e(c,{each:["React","Angular","Vue","Svelte","Solid"],children:l=>e(d,{value:l,get children(){return[e(s,{children:l}),e(v,{})]}})})}})}})]}})]}}),e($,{id:"multi-select",children:"Multi select"}),e(n,{mb:"$5",get children(){return["Use the ",e(t,{children:"multiple"})," prop to allow multi-selection."]}}),e(h,{get snippet(){return a.multiSelectBasicUsage},mb:"$10",get children(){return e(u,{multiple:!0,get children(){return[e(p,{get children(){return[e(g,{children:"Choose some frameworks"}),e(S,{}),e(m,{})]}}),e(b,{get children(){return e(f,{get children(){return e(c,{each:["React","Angular","Vue","Svelte","Solid"],children:l=>e(d,{value:l,get children(){return[e(s,{children:l}),e(v,{})]}})})}})}})]}})}}),e(o,{id:"multi-default-value",children:"Default values"}),e(n,{mb:"$5",get children(){return["In a multi-select pass an array to the ",e(t,{children:"defaultValue"})," prop to make some options selected by default."]}}),e(h,{get snippet(){return a.multiSelectDefaultValues},mb:"$10",get children(){return e(u,{multiple:!0,defaultValue:["React","Solid"],get children(){return[e(p,{get children(){return[e(g,{children:"Choose some frameworks"}),e(S,{}),e(m,{})]}}),e(b,{get children(){return e(f,{get children(){return e(c,{each:["React","Angular","Vue","Svelte","Solid"],children:l=>e(d,{value:l,get children(){return[e(s,{children:l}),e(v,{})]}})})}})}})]}})}}),e(o,{id:"multi-controlled",children:"Controlled multi-select"}),e(n,{mb:"$5",get children(){return["In a multi-select ",e(t,{children:"value"})," and ",e(t,{children:"onChange"})," props uses arrays."]}}),e(h,{get snippet(){return a.multiSelectControlled},mb:"$12",get children(){return[e(n,{mb:"$2",get children(){return["Value: ",R(()=>JSON.stringify(A()))]}}),e(u,{multiple:!0,get value(){return A()},onChange:D,get children(){return[e(p,{get children(){return[e(g,{children:"Choose some frameworks"}),e(S,{}),e(m,{})]}}),e(b,{get children(){return e(f,{get children(){return e(c,{each:["React","Angular","Vue","Svelte","Solid"],children:l=>e(d,{value:l,get children(){return[e(s,{children:l}),e(v,{})]}})})}})}})]}})]}}),e($,{id:"composition",children:"Composition"}),e(n,{mb:"$5",get children(){return[e(t,{children:"Select"})," is made up of several components that you can customize to achieve your desired design."]}}),e(h,{get snippet(){return a.composition},mb:"$6",get children(){return e(u,{multiple:!0,offset:-1,get children(){return[e(p,{rounded:"$none",_focus:{shadow:"$none",borderColor:"$warning7"},get children(){return[e(g,{color:"$neutral12",fontSize:"$sm",children:"Choose some frameworks"}),e(S,{children:({selectedOptions:l})=>e(X.span,{fontSize:"$sm",get children(){return l.map(x=>x.textValue).join(", ").trim()}})}),e(m,{as:te,rotateOnOpen:!0,boxSize:"$6",color:"$warning10"})]}}),e(b,{rounded:"$none",shadow:"$xl",borderColor:"$warning7",get children(){return[e(F,{px:"$3",py:"$2",children:"You can put a header here"}),e(z,{}),e(f,{px:"0",py:"$1",maxH:"$96",get children(){return[e(T,{get children(){return[e(C,{children:"Old school"}),e(c,{each:["React","Angular","Vue"],children:l=>e(d,{value:l,rounded:"$none",fontSize:"$sm",_active:{bg:"$warning3",color:"$warning11"},_selected:{bg:"$warning9",color:"white"},get children(){return e(s,{_groupSelected:{fontWeight:"$medium"},children:l})}})})]}}),e(T,{get children(){return[e(C,{children:"New school"}),e(c,{each:["Svelte","Solid"],children:l=>e(d,{value:l,rounded:"$none",fontSize:"$sm",_active:{bg:"$warning3",color:"$warning11"},_selected:{bg:"$warning9",color:"white"},get children(){return e(s,{_groupSelected:{fontWeight:"$medium"},children:l})}})})]}})]}}),e(z,{}),e(F,{px:"$3",py:"$2",children:"Or put a footer here"})]}})]}})}}),e(_,{status:"warning",mb:"$12",get children(){return e(U,{children:"Obviously, don't make ugly design like the above example \u{1F605}."})}}),e($,{id:"simple-select",children:"Simple select"}),e(n,{mb:"$5",get children(){return["If you don't need to customize every parts of ",e(t,{children:"Select"})," and want a simpler API, Hope UI exposes the ",e(t,{children:"SimpleSelect"})," and ",e(t,{children:"SimpleOption"})," components. Those are just abstraction over the base ",e(t,{children:"Select"})," component."]}}),e(h,{get snippet(){return a.simpleSelect},mb:"$5",get children(){return e(Y,{placeholder:"Choose a framework",get children(){return[e(w,{value:"react",children:"React"}),e(w,{value:"angular",disabled:!0,children:"Angular"}),e(w,{value:"vue",children:"Vue"}),e(w,{value:"svelte",children:"Svelte"}),e(w,{value:"solid",children:"Solid"})]}})}}),e(_,{status:"warning",mb:"$12",get children(){return e(U,{get children(){return["If you want to build your own abstraction you can look at the"," ",e(k,{href:"https://github.com/fabien-ml/hope-ui/tree/main/src/components/simple-select",external:!0,color:"$primary11",fontWeight:"$semibold",children:"SimpleSelect implementation"}),"."]}})}}),e($,{id:"accessibility",children:"Accessibility"}),e(n,{mb:"$5",get children(){return[e(t,{children:"Select"})," follow the"," ",e(k,{href:"https://www.w3.org/TR/wai-aria-practices-1.2/examples/combobox/combobox-select-only.html",external:!0,color:"$primary11",fontWeight:"$semibold",children:"WAI ARIA Select-Only Combobox"})," ","design pattern."]}}),e(o,{children:"ARIA roles and attributes"}),e(y,{spacing:"$2",mb:"$8",get children(){return[e(r,{get children(){return[e(t,{children:"SelectTrigger"})," has ",e(t,{children:"role"})," of ",e(t,{children:"combobox"}),"."]}}),e(r,{get children(){return[e(t,{children:"SelectTrigger"})," has ",e(t,{children:"aria-haspopup"})," set to ",e(t,{children:"listbox"}),"."]}}),e(r,{get children(){return[e(t,{children:"SelectTrigger"})," has ",e(t,{children:"aria-controls"})," set to the ",e(t,{children:"id"})," of"," ",e(t,{children:"SelectListbox"}),"."]}}),e(r,{get children(){return[e(t,{children:"SelectTrigger"})," has ",e(t,{children:"aria-expanded"})," set to ",e(t,{children:"true"})," when the listbox is displayed and ",e(t,{children:"false"})," otherwise."]}}),e(r,{get children(){return["When the select is open, ",e(t,{children:"SelectTrigger"})," has ",e(t,{children:"aria-activedescendant"})," ","set to the ",e(t,{children:"id"})," of the active ",e(t,{children:"SelectOption"}),"."]}}),e(r,{get children(){return[e(t,{children:"SelectListbox"})," has ",e(t,{children:"role"})," of ",e(t,{children:"listbox"}),"."]}}),e(r,{get children(){return[e(t,{children:"SelectOption"})," has ",e(t,{children:"role"})," of ",e(t,{children:"option"}),"."]}}),e(r,{get children(){return["The selected ",e(t,{children:"SelectOption"})," has ",e(t,{children:"aria-selected"})," set to"," ",e(t,{children:"true"}),"."]}})]}}),e(o,{children:"Keyboard support (closed select)"}),e(y,{spacing:"$2",mb:"$8",get children(){return[e(r,{get children(){return[e(i,{children:"enter"}),", ",e(i,{children:"space"})," , ",e(i,{children:"\u2193"})," and ",e(i,{children:"\u2191"})," opens the select and move visual focus to the first option or the selected one."]}}),e(r,{get children(){return[e(i,{children:"home"})," open the select and move visual focus to the first option."]}}),e(r,{get children(){return[e(i,{children:"end"})," open the select and move visual focus to the last option."]}}),e(r,{get children(){return["In multi-select, ",e(i,{children:"backspace"})," remove the last selected option."]}})]}}),e(o,{children:"Keyboard support (opened select)"}),e(y,{spacing:"$2",mb:"$8",get children(){return[e(r,{get children(){return[e(i,{children:"enter"}),", ",e(i,{children:"space"})," or ",e(i,{children:"alt"})," + ",e(i,{children:"\u2191"})," select the option and close the select."]}}),e(r,{get children(){return[e(i,{children:"\u2193"})," move visual focus to the next option."]}}),e(r,{get children(){return[e(i,{children:"\u2191"})," move visual focus to the previous option."]}}),e(r,{get children(){return[e(i,{children:"home"})," and ",e(i,{children:"pageup"})," move visual focus to the first option."]}}),e(r,{get children(){return[e(i,{children:"end"})," and ",e(i,{children:"pagedown"})," move visual focus to the last option."]}}),e(r,{get children(){return[e(i,{children:"tab"})," closes the select and moves focus to the next focusable element."]}}),e(r,{get children(){return[e(i,{children:"esc"})," closes the select."]}}),e(r,{get children(){return["In multi-select, ",e(i,{children:"backspace"})," remove the last selected option."]}})]}}),e(o,{children:"Typeahead behavior"}),e(y,{spacing:"$2",mb:"$12",get children(){return[e(r,{children:"Any printable characters move visual focus to the first option that matches the typed character."}),e(r,{children:"If multiple keys are typed in quick succession, visual focus moves to the first option that matches the full string."}),e(r,{children:"If the same character is typed in succession, visual focus cycles among the options starting with that character."})]}}),e($,{id:"theming",children:"Theming"}),e(n,{mb:"$5",get children(){return[e(t,{children:"Select"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(j,{lang:"js",get snippet(){return a.theming},mb:"$12"}),e($,{id:"props",children:"Props"}),e(o,{id:"select-props",children:"Select props"}),e(V,{items:M,mb:"$10"}),e(o,{id:"select-option-props",children:"SelectOption props"}),e(V,{items:W,mb:"$10"}),e(o,{id:"select-value-props",children:"SelectValue props"}),e(V,{items:J,mb:"$10"}),e(o,{id:"select-icon-props",children:"SelectIcon props"}),e(V,{items:N,mb:"$10"}),e(o,{id:"other-components-props",children:"Other components props"}),e(n,{get children(){return["All other components composes"," ",e(k,{as:K,href:"/docs/layout/box",color:"$primary11",fontWeight:"$semibold",children:"Box"}),"."]}})]}})}export{Ge as default};
