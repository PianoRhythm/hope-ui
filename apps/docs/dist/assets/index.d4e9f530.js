import{k as _,t as p,a2 as U,o as H,c as e,d as o,U as b,N as r,C as t,aI as m,aJ as i,r as c,aK as l,aL as d,aM as a,M,D as O,S as R,f as $,aE as f,Q as y,e as w,q as E}from"./index.3c654a9e.js";import{C}from"./CodeSnippet.27230f78.js";import{P as j,a as L}from"./PageTitle.05cba558.js";import{P as g}from"./Preview.c3f3de7a.js";import{P as v}from"./PropsTable.f913c6d8.js";import{S as s}from"./SectionSubtitle.9a34e78b.js";import{S as A}from"./SectionTitle.7cf37368.js";import{I as D}from"./IconPlus.5af30a36.js";import"./Footer.80959b85.js";var J=p('<svg><path d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"fill=currentColor fill-rule=evenodd clip-rule=evenodd></svg>',!1,!0);const N=_({viewBox:"0 0 15 15",path:()=>J()}),Q=`import { 
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
</Accordion>`,K=`<Accordion defaultIndex={1}>
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
</Accordion>`,X=`<Accordion allowMultiple>
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
</Accordion>`,q=`<Accordion>
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
</Accordion>`,V=`<Accordion>
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
</Accordion>`,Z=`function ControlledExample() {
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
}`,F=`const config: HopeThemeConfig = {
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
}`,u={importComponent:Q,basicUsage:z,defaultIndex:K,allowMultiple:X,stylingExpandedState:q,internalState:V,controlled:Z,theming:F};var G=p("<strong>Accordion:"),Y=p("<strong>AccordionItem:"),ee=p("<strong>AccordionButton:"),te=p("<strong>AccordionIcon:"),ne=p("<strong>AccordionPanel:"),h=p("<h2>");function ue(){const[P,x]=U(-1),S={href:"/docs/data-entry/textarea",label:"Textarea"},T={href:"/docs/data-display/avatar",label:"Avatar"},B=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#default-expanded-item",label:"Default expanded item",indent:!0},{href:"#expand-multiple-items",label:"Expand multiple items at once",indent:!0},{href:"#styling-expanded-state",label:"Styling the expanded state",indent:!0},{href:"#accessing-internal-state",label:"Accessing the internal state",indent:!0},{href:"#controlled-accordion",label:"Controlled accordion",indent:!0},{href:"#accessibility",label:"Accessibility"},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"},{href:"#accordion-props",label:"Accordion props",indent:!0},{href:"#accordion-item-props",label:"AccordionItem props",indent:!0},{href:"#other-components-props",label:"Other components props",indent:!0}],W=[{name:"allowMultiple",description:"If `true`, multiple accordion items can be expanded at once.",type:"boolean",defaultValue:"false"},{name:"index",description:"The index(es) of the expanded accordion item (in controlled mode).",type:"number | number[]"},{name:"defaultIndex",description:"The initial index(es) of the expanded accordion item (in uncontrolled mode).",type:"number | number[]"},{name:"onChange",description:"The callback invoked when accordion items are expanded or collapsed.",type:"(expandedIndex: number | number[]) => void"}],k=[{name:"disabled",description:"If `true`, the accordion item will be disabled.",type:"boolean"},{name:"children",description:"The children of the accordion item. Can be a render props that exposes the internal `expanded` and `disabled` state.",type:"JSX.Element | (props: { expanded: Accessor<boolean>; disabled: Accessor<boolean>; }) => JSX.Element"}];return H(()=>{E.highlightAll()}),e(L,{previousLink:S,nextLink:T,contextualNavLinks:B,get children(){return[e(j,{children:"Accordion"}),e(o,{mb:"$5",children:"Accordions display a list of high-level options that can expand/collapse to reveal more information."}),e(A,{id:"import",children:"Import"}),e(C,{get snippet(){return u.importComponent},mb:"$6"}),e(b,{spacing:"$2",mb:"$12",get children(){return[e(r,{get children(){return[G()," The wrapper components that provides context for all its children."]}}),e(r,{get children(){return[Y()," A single accordion item."]}}),e(r,{get children(){return[ee()," The button that toggles the expand/collapse state of the accordion item. This button must be wrapped in an element with role ",e(t,{children:"heading"}),"."]}}),e(r,{get children(){return[te()," A ",e(t,{children:"caret-down"})," icon that rotates based on the expanded/collapsed state."]}}),e(r,{get children(){return[ne()," The container for the details to be revealed."]}})]}}),e(A,{id:"usage",children:"Usage"}),e(g,{get snippet(){return u.basicUsage},mb:"$10",get children(){return e(m,{get children(){return[e(i,{get children(){return[(()=>{var n=h();return c(n,e(l,{get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Composable"}),e(d,{})]}})),n})(),e(a,{children:"Compose your application interface with reusable building blocks."})]}}),e(i,{get children(){return[(()=>{var n=h();return c(n,e(l,{get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Accessible"}),e(d,{})]}})),n})(),e(a,{children:"Hope UI follows WAI-ARIA standards, helping you to reach the largest audience possible with less effort."})]}})]}})}}),e(s,{id:"default-expanded-item",children:"Default expanded item"}),e(o,{mb:"$5",get children(){return["Use the ",e(t,{children:"defaultIndex"})," prop to set an item expanded by default."]}}),e(g,{get snippet(){return u.defaultIndex},mb:"$10",get children(){return e(m,{defaultIndex:1,get children(){return[e(i,{get children(){return[(()=>{var n=h();return c(n,e(l,{get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Composable"}),e(d,{})]}})),n})(),e(a,{children:"Compose your application interface with reusable building blocks."})]}}),e(i,{get children(){return[(()=>{var n=h();return c(n,e(l,{get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Accessible"}),e(d,{})]}})),n})(),e(a,{children:"Hope UI follows WAI-ARIA standards, helping you to reach the largest audience possible with less effort."})]}})]}})}}),e(s,{id:"expand-multiple-items",children:"Expand multiple items at once"}),e(o,{mb:"$5",get children(){return["Use the ",e(t,{children:"allowMultiple"})," prop to permit multiple items to be expanded at once."]}}),e(g,{get snippet(){return u.allowMultiple},mb:"$6",get children(){return e(m,{allowMultiple:!0,get children(){return[e(i,{get children(){return[(()=>{var n=h();return c(n,e(l,{get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Composable"}),e(d,{})]}})),n})(),e(a,{children:"Compose your application interface with reusable building blocks."})]}}),e(i,{get children(){return[(()=>{var n=h();return c(n,e(l,{get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Accessible"}),e(d,{})]}})),n})(),e(a,{children:"Hope UI follows WAI-ARIA standards, helping you to reach the largest audience possible with less effort."})]}})]}})}}),e(M,{status:"warning",mb:"$10",get children(){return e(O,{get children(){return["If you pass this prop, ensure that the ",e(t,{children:"index"})," or ",e(t,{children:"defaultIndex"})," ","prop is an array."]}})}}),e(s,{id:"styling-expanded-state",children:"Styling the expanded state"}),e(o,{mb:"$5",get children(){return["The ",e(t,{children:"AccordionButton"})," component has ",e(t,{children:"aria-expanded"})," set to"," ",e(t,{children:"true"})," or ",e(t,{children:"false"})," depending on the state of the"," ",e(t,{children:"AccordionItem"}),". That means you can use the ",e(t,{children:"_expanded"})," style prop to style this state."]}}),e(g,{get snippet(){return u.stylingExpandedState},mb:"$10",get children(){return e(m,{get children(){return e(i,{get children(){return[(()=>{var n=h();return c(n,e(l,{_expanded:{bg:"tomato",color:"white"},get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Composable"}),e(d,{})]}})),n})(),e(a,{children:"Compose your application interface with reusable building blocks."})]}})}})}}),e(s,{id:"accessing-internal-state",children:"Accessing the internal state"}),e(o,{mb:"$5",get children(){return["If you need access to the internal state of each accordion item, you can use a render prop. It provides 2 internal state props: ",e(t,{children:"expanded"})," and ",e(t,{children:"disabled"}),"."]}}),e(g,{get snippet(){return u.internalState},mb:"$10",get children(){return e(m,{get children(){return e(i,{children:({expanded:n})=>[(()=>{var I=h();return c(I,e(l,{get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Composable"}),e(d,{fontSize:"1em",get as(){return n()?N:D}})]}})),I})(),e(a,{children:"Compose your application interface with reusable building blocks."})]})}})}}),e(s,{id:"controlled-accordion",children:"Controlled accordion"}),e(o,{mb:"$5",get children(){return["Use the ",e(t,{children:"index"})," and ",e(t,{children:"onChange"})," props to control the"," ",e(t,{children:"Accordion"}),"."]}}),e(g,{get snippet(){return u.controlled},mb:"$12",get children(){return[e(R,{spacing:"$4",mb:"$4",get children(){return[e($,{variant:"subtle",colorScheme:"neutral",onClick:()=>x(0),children:"Open item 1"}),e($,{variant:"subtle",colorScheme:"neutral",onClick:()=>x(1),children:"Open item 2"})]}}),e(m,{get index(){return P()},onChange:n=>x(n),get children(){return[e(i,{get children(){return[(()=>{var n=h();return c(n,e(l,{get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Composable"}),e(d,{})]}})),n})(),e(a,{children:"Compose your application interface with reusable building blocks."})]}}),e(i,{get children(){return[(()=>{var n=h();return c(n,e(l,{get children(){return[e(o,{flex:1,fontWeight:"$medium",textAlign:"start",children:"Accessible"}),e(d,{})]}})),n})(),e(a,{children:"Hope UI follows WAI-ARIA standards, helping you to reach the largest audience possible with less effort."})]}})]}})]}}),e(A,{id:"accessibility",children:"Accessibility"}),e(s,{children:"ARIA roles and attributes"}),e(b,{spacing:"$2",mb:"$8",get children(){return[e(r,{get children(){return["Each ",e(t,{children:"AccordionButton"})," should be wrapped in an element with role"," ",e(t,{children:"heading"}),"."]}}),e(r,{get children(){return[e(t,{children:"AccordionButton"})," as ",e(t,{children:"role"})," set to ",e(t,{children:"button"}),"."]}}),e(r,{get children(){return[e(t,{children:"AccordionButton"})," as ",e(t,{children:"aria-controls"})," set to the ",e(t,{children:"id"})," of its associated ",e(t,{children:"AccordionPanel"}),"."]}}),e(r,{get children(){return[e(t,{children:"AccordionButton"})," as ",e(t,{children:"aria-expanded"})," set to ",e(t,{children:"true"})," when its associated ",e(t,{children:"AccordionPanel"})," is expanded, ",e(t,{children:"false"})," otherwise."]}}),e(r,{get children(){return[e(t,{children:"AccordionPanel"})," as ",e(t,{children:"role"})," set to ",e(t,{children:"region"}),"."]}}),e(r,{get children(){return[e(t,{children:"AccordionPanel"})," as ",e(t,{children:"aria-labelledby"})," set to the ",e(t,{children:"id"})," of its associated ",e(t,{children:"AccordionButton"}),"."]}})]}}),e(s,{children:"Keyboard support"}),e(b,{spacing:"$2",mb:"$12",get children(){return[e(r,{get children(){return[e(f,{children:"\u2191"})," moves focus to the previous accordion button."]}}),e(r,{get children(){return[e(f,{children:"\u2193"})," moves focus to the next accordion button."]}}),e(r,{get children(){return[e(f,{children:"home"})," moves focus to the first accordion button."]}}),e(r,{get children(){return[e(f,{children:"end"})," moves focus to the last accordion button."]}})]}}),e(A,{id:"theming",children:"Theming"}),e(o,{mb:"$5",get children(){return[e(t,{children:"Accordion"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(C,{lang:"js",get snippet(){return u.theming},mb:"$12"}),e(A,{id:"props",children:"Props"}),e(s,{id:"accordion-props",children:"Accordion props"}),e(v,{items:W,mb:"$10"}),e(s,{id:"accordion-item-props",children:"AccordionItem props"}),e(v,{items:k,mb:"$10"}),e(s,{id:"other-components-props",children:"Other components props"}),e(b,{spacing:"$2",get children(){return[e(r,{get children(){return[e(t,{children:"AccordionButton"})," and ",e(t,{children:"AccordionPanel"})," composes"," ",e(y,{as:w,href:"/docs/layout/box",external:!0,color:"$primary11",fontWeight:"$semibold",children:"Box"}),"."]}}),e(r,{get children(){return[e(t,{children:"AccordionIcon"})," composes"," ",e(y,{as:w,href:"/docs/data-display/icon",external:!0,color:"$primary11",fontWeight:"$semibold",children:"Icon"}),"."]}})]}})]}})}export{ue as default};
