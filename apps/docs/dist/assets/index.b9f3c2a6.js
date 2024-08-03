import{c as _,t as p,a1 as N,o as U,i as H,a as e,T as o,U as b,W as r,k as t,aH as m,aI as i,l as c,aJ as l,aK as d,aL as a,j as L,J as O,H as M,e as $,aD as f,A as y,L as w}from"./index.257138b9.js";import{C}from"./CodeSnippet.770d5f1c.js";import{P as R,a as E}from"./PageTitle.3ce5e388.js";import{P as g}from"./Preview.680bc5b4.js";import{P}from"./PropsTable.ba1383de.js";import{S as s}from"./SectionSubtitle.8d9ca36f.js";import{S as A}from"./SectionTitle.01cca1ff.js";import{I as j}from"./IconPlus.db92f465.js";import"./Footer.69976eff.js";const D=p('<svg><path d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>',4,!0),J=_({viewBox:"0 0 15 15",path:()=>D.cloneNode(!0)}),K=`import { 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@hope-ui/solid"`,z=`<Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Text flex={1} fontWeight="$medium" textAlign="start">
          Composable
        </Text>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      Compose your application interface with reusable building blocks.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Text flex={1} fontWeight="$medium" textAlign="start">
          Accessible
        </Text>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      Hope UI follows WAI-ARIA standards, 
      helping you to reach the largest audience possible with less effort.
    </AccordionPanel>
  </AccordionItem>
</Accordion>`,X=`<Accordion defaultIndex={1}>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Text flex={1} fontWeight="$medium" textAlign="start">
          Composable
        </Text>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      Compose your application interface with reusable building blocks.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Text flex={1} fontWeight="$medium" textAlign="start">
          Accessible
        </Text>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      Hope UI follows WAI-ARIA standards, 
      helping you to reach the largest audience possible with less effort.
    </AccordionPanel>
  </AccordionItem>
</Accordion>`,V=`<Accordion allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Text flex={1} fontWeight="$medium" textAlign="start">
          Composable
        </Text>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      Compose your application interface with reusable building blocks.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Text flex={1} fontWeight="$medium" textAlign="start">
          Accessible
        </Text>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      Hope UI follows WAI-ARIA standards, 
      helping you to reach the largest audience possible with less effort.
    </AccordionPanel>
  </AccordionItem>
</Accordion>`,Z=`<Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
        <Text flex={1} fontWeight="$medium" textAlign="start">
          Composable
        </Text>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      Compose your application interface with reusable building blocks.
    </AccordionPanel>
  </AccordionItem>
</Accordion>`,q=`<Accordion>
  <AccordionItem>
    {({ expanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Text flex={1} fontWeight="$medium" textAlign="start">
              Composable
            </Text>
            <AccordionIcon 
              fontSize="1em" 
              as={expanded() ? IconMinus : IconPlus} 
            />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          Compose your application interface with reusable building blocks.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>`,F=`function ControlledExample() {
  const [itemIndex, setItemIndex] = createSignal(-1);

  return (
    <>
      <HStack spacing="$4" mb="$4">
        <Button 
          variant="subtle" 
          colorScheme="neutral" 
          onClick={() => setItemIndex(0)}
        >
          Open item 1
        </Button>
        <Button 
          variant="subtle" 
          colorScheme="neutral" 
          onClick={() => setItemIndex(1)}
        >
          Open item 2
        </Button>
      </HStack>
      <Accordion 
        index={itemIndex()} 
        onChange={value => setItemIndex(value as number)}
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Text flex={1} fontWeight="$medium" textAlign="start">
                Composable
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Compose your application interface with reusable building blocks.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Text flex={1} fontWeight="$medium" textAlign="start">
                Accessible
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Hope UI follows WAI-ARIA standards, 
            helping you to reach the largest audience possible with less effort.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}`,G=`const config: HopeThemeConfig = {
  components: {
    Accordion: {
      baseStyle: {
        root: SystemStyleObject,
        item: SystemStyleObject,
        button: SystemStyleObject,
        icon: SystemStyleObject,
        panel: SystemStyleObject,
      },
    }
  }
}`,u={importComponent:K,basicUsage:z,defaultIndex:X,allowMultiple:V,stylingExpandedState:Z,internalState:q,controlled:F,theming:G},Q=p("<strong>Accordion:</strong>"),Y=p("<strong>AccordionItem:</strong>"),ee=p("<strong>AccordionButton:</strong>"),te=p("<strong>AccordionIcon:</strong>"),ne=p("<strong>AccordionPanel:</strong>"),h=p("<h2></h2>");function ue(){const[T,x]=N(-1),B={href:"/docs/data-entry/textarea",label:"Textarea"},S={href:"/docs/data-display/avatar",label:"Avatar"},v=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#default-expanded-item",label:"Default expanded item",indent:!0},{href:"#expand-multiple-items",label:"Expand multiple items at once",indent:!0},{href:"#styling-expanded-state",label:"Styling the expanded state",indent:!0},{href:"#accessing-internal-state",label:"Accessing the internal state",indent:!0},{href:"#controlled-accordion",label:"Controlled accordion",indent:!0},{href:"#accessibility",label:"Accessibility"},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"},{href:"#accordion-props",label:"Accordion props",indent:!0},{href:"#accordion-item-props",label:"AccordionItem props",indent:!0},{href:"#other-components-props",label:"Other components props",indent:!0}],W=[{name:"allowMultiple",description:"If `true`, multiple accordion items can be expanded at once.",type:"boolean",defaultValue:"false"},{name:"index",description:"The index(es) of the expanded accordion item (in controlled mode).",type:"number | number[]"},{name:"defaultIndex",description:"The initial index(es) of the expanded accordion item (in uncontrolled mode).",type:"number | number[]"},{name:"onChange",description:"The callback invoked when accordion items are expanded or collapsed.",type:"(expandedIndex: number | number[]) => void"}],k=[{name:"disabled",description:"If `true`, the accordion item will be disabled.",type:"boolean"},{name:"children",description:"The children of the accordion item. Can be a render props that exposes the internal `expanded` and `disabled` state.",type:"JSX.Element | (props: { expanded: Accessor<boolean>; disabled: Accessor<boolean>; }) => JSX.Element"}];return U(()=>{H.highlightAll()}),e(E,{previousLink:B,nextLink:S,contextualNavLinks:v,get children(){return[e(R,{children:"Accordion"}),e(o,{mb:"$5",children:"Accordions display a list of high-level options that can expand/collapse to reveal more information."}),e(A,{id:"import",children:"Import"}),e(C,{get snippet(){return u.importComponent},mb:"$6"}),e(b,{spacing:"$2",mb:"$12",get children(){return[e(r,{get children(){return[Q.cloneNode(!0)," The wrapper components that provides context for all its children."]}}),e(r,{get children(){return[Y.cloneNode(!0)," A single accordion item."]}}),e(r,{get children(){return[ee.cloneNode(!0)," The button that toggles the expand/collapse state of the accordion item. This button must be wrapped in an element with role ",e(t,{children:"heading"}),"."]}}),e(r,{get children(){return[te.cloneNode(!0)," A ",e(t,{children:"caret-down"})," icon that rotates based on the expanded/collapsed state."]}}),e(r,{get children(){return[ne.cloneNode(!0)," The container for the details to be revealed."]}})]}}),e(A,{id:"usage",children:"Usage"}),e(g,{get snippet(){return u.basicUsage},mb:"$10",get children(){return e(m,{get children(){return[e(i,{get children(){return[(()=>{const n=h.cloneNode(!0);return c(n,e(l,{get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Composable"}),e(d,{})]}})),n})(),e(a,{children:"Compose your application interface with reusable building blocks."})]}}),e(i,{get children(){return[(()=>{const n=h.cloneNode(!0);return c(n,e(l,{get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Accessible"}),e(d,{})]}})),n})(),e(a,{children:"Hope UI follows WAI-ARIA standards, helping you to reach the largest audience possible with less effort."})]}})]}})}}),e(s,{id:"default-expanded-item",children:"Default expanded item"}),e(o,{mb:"$5",get children(){return["Use the ",e(t,{children:"defaultIndex"})," prop to set an item expanded by default."]}}),e(g,{get snippet(){return u.defaultIndex},mb:"$10",get children(){return e(m,{defaultIndex:1,get children(){return[e(i,{get children(){return[(()=>{const n=h.cloneNode(!0);return c(n,e(l,{get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Composable"}),e(d,{})]}})),n})(),e(a,{children:"Compose your application interface with reusable building blocks."})]}}),e(i,{get children(){return[(()=>{const n=h.cloneNode(!0);return c(n,e(l,{get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Accessible"}),e(d,{})]}})),n})(),e(a,{children:"Hope UI follows WAI-ARIA standards, helping you to reach the largest audience possible with less effort."})]}})]}})}}),e(s,{id:"expand-multiple-items",children:"Expand multiple items at once"}),e(o,{mb:"$5",get children(){return["Use the ",e(t,{children:"allowMultiple"})," prop to permit multiple items to be expanded at once."]}}),e(g,{get snippet(){return u.allowMultiple},mb:"$6",get children(){return e(m,{allowMultiple:!0,get children(){return[e(i,{get children(){return[(()=>{const n=h.cloneNode(!0);return c(n,e(l,{get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Composable"}),e(d,{})]}})),n})(),e(a,{children:"Compose your application interface with reusable building blocks."})]}}),e(i,{get children(){return[(()=>{const n=h.cloneNode(!0);return c(n,e(l,{get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Accessible"}),e(d,{})]}})),n})(),e(a,{children:"Hope UI follows WAI-ARIA standards, helping you to reach the largest audience possible with less effort."})]}})]}})}}),e(L,{status:"warning",mb:"$10",get children(){return e(O,{get children(){return["If you pass this prop, ensure that the ",e(t,{children:"index"})," or ",e(t,{children:"defaultIndex"})," ","prop is an array."]}})}}),e(s,{id:"styling-expanded-state",children:"Styling the expanded state"}),e(o,{mb:"$5",get children(){return["The ",e(t,{children:"AccordionButton"})," component has ",e(t,{children:"aria-expanded"})," set to"," ",e(t,{children:"true"})," or ",e(t,{children:"false"})," depending on the state of the"," ",e(t,{children:"AccordionItem"}),". That means you can use the ",e(t,{children:"_expanded"})," style prop to style this state."]}}),e(g,{get snippet(){return u.stylingExpandedState},mb:"$10",get children(){return e(m,{get children(){return e(i,{get children(){return[(()=>{const n=h.cloneNode(!0);return c(n,e(l,{_expanded:{bg:"tomato",color:"white"},get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Composable"}),e(d,{})]}})),n})(),e(a,{children:"Compose your application interface with reusable building blocks."})]}})}})}}),e(s,{id:"accessing-internal-state",children:"Accessing the internal state"}),e(o,{mb:"$5",get children(){return["If you need access to the internal state of each accordion item, you can use a render prop. It provides 2 internal state props: ",e(t,{children:"expanded"})," and ",e(t,{children:"disabled"}),"."]}}),e(g,{get snippet(){return u.internalState},mb:"$10",get children(){return e(m,{get children(){return e(i,{children:({expanded:n})=>[(()=>{const I=h.cloneNode(!0);return c(I,e(l,{get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Composable"}),e(d,{fontSize:"1em",get as(){return n()?J:j}})]}})),I})(),e(a,{children:"Compose your application interface with reusable building blocks."})]})}})}}),e(s,{id:"controlled-accordion",children:"Controlled accordion"}),e(o,{mb:"$5",get children(){return["Use the ",e(t,{children:"index"})," and ",e(t,{children:"onChange"})," props to control the"," ",e(t,{children:"Accordion"}),"."]}}),e(g,{get snippet(){return u.controlled},mb:"$12",get children(){return[e(M,{spacing:"$4",mb:"$4",get children(){return[e($,{variant:"subtle",colorScheme:"neutral",onClick:()=>x(0),children:"Open item 1"}),e($,{variant:"subtle",colorScheme:"neutral",onClick:()=>x(1),children:"Open item 2"})]}}),e(m,{get index(){return T()},onChange:n=>x(n),get children(){return[e(i,{get children(){return[(()=>{const n=h.cloneNode(!0);return c(n,e(l,{get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Composable"}),e(d,{})]}})),n})(),e(a,{children:"Compose your application interface with reusable building blocks."})]}}),e(i,{get children(){return[(()=>{const n=h.cloneNode(!0);return c(n,e(l,{get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Accessible"}),e(d,{})]}})),n})(),e(a,{children:"Hope UI follows WAI-ARIA standards, helping you to reach the largest audience possible with less effort."})]}})]}})]}}),e(A,{id:"accessibility",children:"Accessibility"}),e(s,{children:"ARIA roles and attributes"}),e(b,{spacing:"$2",mb:"$8",get children(){return[e(r,{get children(){return["Each ",e(t,{children:"AccordionButton"})," should be wrapped in an element with role"," ",e(t,{children:"heading"}),"."]}}),e(r,{get children(){return[e(t,{children:"AccordionButton"})," as ",e(t,{children:"role"})," set to ",e(t,{children:"button"}),"."]}}),e(r,{get children(){return[e(t,{children:"AccordionButton"})," as ",e(t,{children:"aria-controls"})," set to the ",e(t,{children:"id"})," of its associated ",e(t,{children:"AccordionPanel"}),"."]}}),e(r,{get children(){return[e(t,{children:"AccordionButton"})," as ",e(t,{children:"aria-expanded"})," set to ",e(t,{children:"true"})," when its associated ",e(t,{children:"AccordionPanel"})," is expanded, ",e(t,{children:"false"})," otherwise."]}}),e(r,{get children(){return[e(t,{children:"AccordionPanel"})," as ",e(t,{children:"role"})," set to ",e(t,{children:"region"}),"."]}}),e(r,{get children(){return[e(t,{children:"AccordionPanel"})," as ",e(t,{children:"aria-labelledby"})," set to the ",e(t,{children:"id"})," of its associated ",e(t,{children:"AccordionButton"}),"."]}})]}}),e(s,{children:"Keyboard support"}),e(b,{spacing:"$2",mb:"$12",get children(){return[e(r,{get children(){return[e(f,{children:"\u2191"})," moves focus to the previous accordion button."]}}),e(r,{get children(){return[e(f,{children:"\u2193"})," moves focus to the next accordion button."]}}),e(r,{get children(){return[e(f,{children:"home"})," moves focus to the first accordion button."]}}),e(r,{get children(){return[e(f,{children:"end"})," moves focus to the last accordion button."]}})]}}),e(A,{id:"theming",children:"Theming"}),e(o,{mb:"$5",get children(){return[e(t,{children:"Accordion"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(C,{lang:"js",get snippet(){return u.theming},mb:"$12"}),e(A,{id:"props",children:"Props"}),e(s,{id:"accordion-props",children:"Accordion props"}),e(P,{items:W,mb:"$10"}),e(s,{id:"accordion-item-props",children:"AccordionItem props"}),e(P,{items:k,mb:"$10"}),e(s,{id:"other-components-props",children:"Other components props"}),e(b,{spacing:"$2",get children(){return[e(r,{get children(){return[e(t,{children:"AccordionButton"})," and ",e(t,{children:"AccordionPanel"})," composes"," ",e(y,{as:w,href:"/docs/layout/box",external:!0,color:"$primary11",fontWeight:"$semibold",children:"Box"}),"."]}}),e(r,{get children(){return[e(t,{children:"AccordionIcon"})," composes"," ",e(y,{as:w,href:"/docs/data-display/icon",external:!0,color:"$primary11",fontWeight:"$semibold",children:"Icon"}),"."]}})]}})]}})}export{ue as default};
