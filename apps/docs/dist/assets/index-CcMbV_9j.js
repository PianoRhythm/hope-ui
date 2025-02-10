import{bn as z,o as U,c as e,i as n,J as P,Q as r,t as g,C as o,bI as p,bJ as c,e as t,bK as s,bL as v,bM as a,bN as h,bO as d,n as C,ba as j,E as T,bP as b,a as f,R as $,b as R,bQ as V,ab as _,D as E,S as D,bR as N,aF as y,K as B,L as w,p as L}from"./index-Nxbfex4q.js";import{C as S}from"./CodeSnippet-BKIkSwFL.js";import{P as K,a as G}from"./PageTitle-D0rjqxl5.js";import{P as u}from"./Preview-Dv-XfG_3.js";import{P as q}from"./PropsTable-b7KBJ81X.js";import{S as i}from"./SectionSubtitle-BnAf6Y1E.js";import{S as m}from"./SectionTitle-D4b_6ZYs.js";import"./Footer-DCmuVtpk.js";const J=`import {
  Popover,
  PopoverTrigger,
  PopoverAnchor,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
} from "@hope-ui/solid"`,Q=`<Popover>
  <PopoverTrigger as={Button} variant="subtle" colorScheme="neutral">
    Trigger
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>`,Y=`<Popover triggerMode="hover">
  <PopoverTrigger as={Button} variant="subtle" colorScheme="neutral">
    Trigger
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>`,X=`<Popover initialFocus="#next">
  <PopoverTrigger as={Button} variant="subtle" colorScheme="neutral">
    Trigger
  </PopoverTrigger>
  <PopoverContent maxW="$sm">
    <PopoverHeader border="0">Running the app</PopoverHeader>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody>
      To start the development server run npm start command
    </PopoverBody>
    <PopoverFooter
      border="0"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      pb="$4"
    >
      <Box fontSize="$sm">Step 2 of 4</Box>
      <ButtonGroup size="sm">
        <Button colorScheme="neutral" variant="subtle">
          Previous
        </Button>
        <Button id="next" colorScheme="info">
          Next
        </Button>
      </ButtonGroup>
    </PopoverFooter>
  </PopoverContent>
</Popover>`,Z=`<Popover trapFocus>
  <PopoverTrigger as={Button} variant="subtle" colorScheme="neutral">
    Trigger
  </PopoverTrigger>
  <PopoverContent maxW="$sm">
    <PopoverHeader border="0">Running the app</PopoverHeader>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody>
      To start the development server run npm start command
    </PopoverBody>
    <PopoverFooter
      border="0"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      pb="$4"
    >
      <Box fontSize="$sm">Step 2 of 4</Box>
      <ButtonGroup size="sm">
        <Button colorScheme="neutral" variant="subtle">
          Previous
        </Button>
        <Button colorScheme="info">
          Next
        </Button>
      </ButtonGroup>
    </PopoverFooter>
  </PopoverContent>
</Popover>`,ee=`<Popover placement="top-start">
  <PopoverTrigger as={Button} variant="subtle" colorScheme="neutral">
    Trigger
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>`,oe=`<Popover>
  <HStack spacing="$2">
    <PopoverAnchor
      as={Input}
      w="auto"
      display="inline-flex"
      placeholder="I am the anchor"
    />
    <PopoverTrigger as={Button}>Trigger</PopoverTrigger>
  </HStack>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>`,re=`<Popover closeOnBlur={false} placement="left" initialFocus="#close-btn">
  {({ opened, onClose }) => (
    <>
      <PopoverTrigger as={Button} variant="subtle" colorScheme="neutral">
        Click to {opened() ? "close" : "open"}
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>This is the header</PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          <Box>Hello. Nice to meet you! This is the body of the popover</Box>
          <Button id="close-btn" mt="$4" colorScheme="info" onClick={onClose}>
            Close
          </Button>
        </PopoverBody>
        <PopoverFooter>This is the footer</PopoverFooter>
      </PopoverContent>
    </>
  )}
</Popover>`,te=`function ControlledExample() {
  const { isOpen, onClose, onToggle } = createDisclosure();

  return (
    <>
      <Button variant="subtle" colorScheme="neutral" mr="$2" onClick={onToggle}>
        Trigger
      </Button>
      <Popover 
        placement="right" 
        opened={isOpen()} 
        onClose={onClose}
        closeOnBlur={false} 
      >
        <PopoverTrigger as={Button}>Popover Target</PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}`,ne=`<Popover offset={24}>
  <PopoverTrigger
    as={IconButton}
    icon={<IconMenu />}
    aria-label="trigger"
    variant="outline"
    colorScheme="accent"
  />
  <PopoverContent 
    borderColor="$accent3" 
    bg="$accent3" 
    color="$accent11" 
    maxW="$sm"
  >
    <PopoverHeader fontWeight="$semibold" border="none" pb="0">
      Confirmation!
    </PopoverHeader>
    <PopoverArrow borderColor="$accent3" boxSize="24px" />
    <PopoverCloseButton bg="$accent4" />
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>`,ie=`const config: HopeThemeConfig = {
  components: {
    Popover: {
      baseStyle: {
        content: SystemStyleObject,
        arrow: SystemStyleObject,
        closeButton: SystemStyleObject,
        header: SystemStyleObject,
        body: SystemStyleObject,
        footer: SystemStyleObject,
      },
      defaultProps: {
        root: ThemeablePopoverOptions,
        closeButton: ThemeableCloseButtonOptions,
      };
    }
  }
}`,l={importComponent:J,basicUsage:Q,triggerOnHover:Y,initialFocus:X,focusTrap:Z,placement:ee,anchor:oe,internalState:re,controlled:te,composition:ne,theming:ie};var le=g("<strong>Popover:"),pe=g("<strong>PopoverTrigger:"),ce=g("<strong>PopoverAnchor:"),se=g("<strong>PopoverContent:"),ae=g("<strong>PopoverArrow:"),he=g("<strong>PopoverCloseButton:"),de=g("<strong>PopoverHeader:"),ue=g("<strong>PopoverBody:"),ge=g("<strong>PopoverFooter:");function $e(){const{isOpen:k,onClose:x,onToggle:A}=z(),H={href:"/docs/overlay/modal",label:"Modal"},I={href:"/docs/overlay/tooltip",label:"Tooltip"},O=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#trigger-mode",label:"Trigger mode",indent:!0},{href:"#initial-focus",label:"Initial focus",indent:!0},{href:"#focus-trap",label:"Trapping focus within popover",indent:!0},{href:"#popover-placement",label:"Popover placement",indent:!0},{href:"#popover-anchor",label:"Popover anchor",indent:!0},{href:"#accessing-internal-state",label:"Accessing internal state",indent:!0},{href:"#controlled-popover",label:"Controlled popover",indent:!0},{href:"#composition",label:"Composition"},{href:"#accessibility",label:"Accessibility"},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"},{href:"#popover-props",label:"Popover props",indent:!0},{href:"#other-components-props",label:"Other components props",indent:!0}],F=[{name:"placement",description:"Placement of the popover.",type:"Placement",defaultValue:"bottom"},{name:"offset",description:"Offset between the popover and the reference (trigger) element.",type:"number",defaultValue:"8"},{name:"shiftPadding",description:"The amount of padding to apply when the popover might go off screen. @see https://floating-ui.com/docs/shift.",type:"number"},{name:"id",description:"The id of the popover content.",type:"string"},{name:"opened",description:"If `true`, the popover will be shown (in controlled mode).",type:"boolean"},{name:"defaultOpened",description:"If `true`, the popover will be initially shown (in uncontrolled mode).",type:"boolean"},{name:"triggerMode",description:"The interaction that triggers the popover. `hover` means the popover will open when you hover with mouse or focus with keyboard on the popover trigger. `click` means the popover will open on click or press `Enter` to `Space` on keyboard.",type:'"hover" | "click"',defaultValue:'"click"'},{name:"inline",description:"If `true`, apply floating-ui `inline` middleware. Useful for inline reference elements that span over multiple lines, such as hyperlinks or range selections.",type:"boolean"},{name:"arrowPadding",description:"The padding between the arrow and the edges of the popover.",type:"number",defaultValue:"8"},{name:"openDelay",description:"Delay (in ms) before showing the popover.",type:"number",defaultValue:"0"},{name:"closeDelay",description:"Delay (in ms) before hiding the popover.",type:"number",defaultValue:"100"},{name:"closeOnBlur",description:"If `true`, the popover will close when the user blur out it by clicking outside or tabbing out.",type:"boolean",defaultValue:"true"},{name:"closeOnEsc",description:"If `true`, the popover will close when the user hit the `Esc` key.",type:"boolean",defaultValue:"true"},{name:"trapFocus",description:"If `true`, the focus will be locked into the popover.",type:"boolean",defaultValue:"false"},{name:"initialFocus",description:"A query selector string targeting the element to receive focus when the popover opens.",type:"string"},{name:"motionPreset",description:"Popover opening/closing transition.",type:"PopoverMotionPreset",defaultValue:'"scale"'},{name:"children",description:"Children of the popover.",type:"JSX.Element | PopoverChildrenRenderProp"},{name:"onOpen",description:"Callback fired when the popover opens.",type:"() => void"},{name:"onClose",description:"Callback fired when the popover closes.",type:"() => void"}];return U(()=>{L.highlightAll()}),e(G,{previousLink:H,nextLink:I,contextualNavLinks:O,get children(){return[e(K,{children:"Popover"}),e(n,{mb:"$5",children:"Popover is a non-modal dialog that floats around a trigger. It is used to display contextual information to the user, and should be paired with a clickable trigger element."}),e(m,{id:"import",children:"Import"}),e(S,{get snippet(){return l.importComponent},mb:"$6"}),e(P,{spacing:"$2",mb:"$12",get children(){return[e(r,{get children(){return[le()," The wrapper that provides props, state, and context to its children."]}}),e(r,{get children(){return[pe()," The component that opens/closes the popover."]}}),e(r,{get children(){return[ce()," The component to use as positioning reference instead of the trigger."]}}),e(r,{get children(){return[se()," The popover itself."]}}),e(r,{get children(){return[ae()," A visual arrow that points to the reference (trigger or anchor) element."]}}),e(r,{get children(){return[he()," A button to close the popover."]}}),e(r,{get children(){return[de()," The header of the popover."]}}),e(r,{get children(){return[ue()," The body of the popover."]}}),e(r,{get children(){return[ge()," The footer of the popover."]}})]}}),e(m,{id:"usage",children:"Usage"}),e(n,{mb:"$5",get children(){return[e(o,{children:"PopoverTrigger"})," renders an unstyled ",e(o,{children:"button"})," by default. For accessiblity reason, when using the ",e(o,{children:"as"})," prop ensure the element passed in is focusable."]}}),e(u,{get snippet(){return l.basicUsage},mb:"$6",get children(){return e(p,{get children(){return[e(c,{as:t,variant:"subtle",colorScheme:"neutral",children:"Trigger"}),e(s,{get children(){return[e(v,{}),e(a,{}),e(h,{children:"Confirmation!"}),e(d,{children:"Are you sure you want to have that milkshake?"})]}})]}})}}),e(C,{status:"warning",mb:"$10",get children(){return[e(j,{children:"Accessibility:"}),e(T,{ml:"$2",get children(){return["When the popover opens, focus is sent to ",e(o,{children:"PopoverContent"}),"."]}})]}}),e(i,{id:"trigger-mode",children:"Trigger mode"}),e(n,{mb:"$5",get children(){return["Use the ",e(o,{children:"triggerMode"})," prop to change the way of opening the popover. You can set the value to ",e(o,{children:"hover"})," or ",e(o,{children:"click"}),"."]}}),e(u,{get snippet(){return l.triggerOnHover},mb:"$10",get children(){return e(p,{triggerMode:"hover",get children(){return[e(c,{as:t,variant:"subtle",colorScheme:"neutral",children:"Trigger"}),e(s,{get children(){return[e(v,{}),e(a,{}),e(h,{children:"Confirmation!"}),e(d,{children:"Are you sure you want to have that milkshake?"})]}})]}})}}),e(i,{id:"initial-focus",children:"Initial focus"}),e(n,{mb:"$5",get children(){return["By default, focus is sent to ",e(o,{children:"PopoverContent"})," when it opens. Use the"," ",e(o,{children:"initialFocus"})," prop to send focus to a specific element instead."]}}),e(u,{get snippet(){return l.initialFocus},mb:"$10",get children(){return e(p,{initialFocus:"#next",get children(){return[e(c,{as:t,variant:"subtle",colorScheme:"neutral",children:"Trigger"}),e(s,{maxW:"$sm",get children(){return[e(h,{border:"0",children:"Running the app"}),e(v,{}),e(a,{}),e(d,{children:"To start the development server run npm start command"}),e(b,{border:"0",d:"flex",alignItems:"center",justifyContent:"space-between",pb:"$4",get children(){return[e(f,{fontSize:"$sm",children:"Step 2 of 4"}),e($,{size:"sm",get children(){return[e(t,{colorScheme:"neutral",variant:"subtle",children:"Previous"}),e(t,{id:"next",colorScheme:"info",children:"Next"})]}})]}})]}})]}})}}),e(i,{id:"focus-trap",children:"Trapping focus within popover"}),e(n,{mb:"$5",get children(){return["Use the ",e(o,{children:"trapFocus"})," prop to lock focus inside the ",e(o,{children:"PopoverContent"}),"."]}}),e(u,{get snippet(){return l.focusTrap},mb:"$10",get children(){return e(p,{trapFocus:!0,get children(){return[e(c,{as:t,variant:"subtle",colorScheme:"neutral",children:"Trigger"}),e(s,{maxW:"$sm",get children(){return[e(h,{border:"0",children:"Running the app"}),e(v,{}),e(a,{}),e(d,{children:"To start the development server run npm start command"}),e(b,{border:"0",d:"flex",alignItems:"center",justifyContent:"space-between",pb:"$4",get children(){return[e(f,{fontSize:"$sm",children:"Step 2 of 4"}),e($,{size:"sm",get children(){return[e(t,{colorScheme:"neutral",variant:"subtle",children:"Previous"}),e(t,{colorScheme:"info",children:"Next"})]}})]}})]}})]}})}}),e(i,{id:"popover-placement",children:"Popover placement"}),e(n,{mb:"$5",get children(){return["Use the ",e(o,{children:"placement"})," prop to set the preferred popover placement. You can set the value to ",e(o,{children:"top"}),", ",e(o,{children:"right"}),", ",e(o,{children:"left"}),", ",e(o,{children:"bottom"})," and their ",e(o,{children:"-start"})," or ",e(o,{children:"-end"})," variants."]}}),e(u,{get snippet(){return l.placement},mb:"$6",get children(){return e(p,{placement:"top-start",get children(){return[e(c,{as:t,variant:"subtle",colorScheme:"neutral",children:"Trigger"}),e(s,{get children(){return[e(v,{}),e(a,{}),e(h,{children:"Confirmation!"}),e(d,{children:"Are you sure you want to have that milkshake?"})]}})]}})}}),e(C,{status:"warning",mb:"$10",get children(){return e(T,{children:"Even though you specified the placement, Popover will try to reposition itself in the event that available space at the specified placement isn't enough."})}}),e(i,{id:"popover-anchor",children:"Popover anchor"}),e(n,{mb:"$3",get children(){return["Use the ",e(o,{children:"PopoverAnchor"})," component if you want to use a different element for the popover positioning reference."]}}),e(n,{mb:"$5",get children(){return["In the example below, the ",e(o,{children:"Button"})," is the trigger that opens/closes the popover and the ",e(o,{children:"Input"})," is the reference element that the popover will position relative to."]}}),e(u,{get snippet(){return l.anchor},mb:"$10",get children(){return e(p,{get children(){return[e(R,{spacing:"$2",get children(){return[e(V,{as:_,w:"auto",display:"inline-flex",placeholder:"I am the anchor"}),e(c,{as:t,children:"Trigger"})]}}),e(s,{get children(){return[e(v,{}),e(a,{}),e(h,{children:"Confirmation!"}),e(d,{children:"Are you sure you want to have that milkshake?"})]}})]}})}}),e(i,{id:"accessing-internal-state",children:"Accessing internal state"}),e(n,{mb:"$5",get children(){return["Popover provides access to its internal state ",e(o,{children:"opened"})," state and an"," ",e(o,{children:"onClose"})," method that you can access via a render prop."]}}),e(u,{get snippet(){return l.internalState},mb:"$10",get children(){return e(p,{closeOnBlur:!1,placement:"left",initialFocus:"#close-btn",children:({opened:W,onClose:M})=>[e(c,{as:t,variant:"subtle",colorScheme:"neutral",get children(){return["Click to ",E(()=>W()?"close":"open")]}}),e(s,{get children(){return[e(h,{children:"This is the header"}),e(a,{}),e(d,{get children(){return[e(f,{children:"Hello. Nice to meet you! This is the body of the popover"}),e(t,{id:"close-btn",mt:"$4",colorScheme:"info",onClick:M,children:"Close"})]}}),e(b,{children:"This is the footer"})]}})]})}}),e(i,{id:"controlled-popover",children:"Controlled popover"}),e(n,{mb:"$5",get children(){return["Use the ",e(o,{children:"opened"})," and ",e(o,{children:"onClose"})," props to control the opening and closing of the popover."]}}),e(u,{get snippet(){return l.controlled},mb:"$12",get children(){return[e(t,{variant:"subtle",colorScheme:"neutral",mr:"$2",onClick:A,children:"Trigger"}),e(p,{placement:"right",closeOnBlur:!1,get opened(){return k()},onClose:x,get children(){return[e(c,{as:t,children:"Popover Target"}),e(s,{get children(){return[e(v,{}),e(a,{}),e(h,{children:"Confirmation!"}),e(d,{children:"Are you sure you want to have that milkshake?"})]}})]}})]}}),e(m,{id:"composition",children:"Composition"}),e(n,{mb:"$5",get children(){return[e(o,{children:"Popover"})," is made up of several components that you can customize to achieve your desired design."]}}),e(u,{get snippet(){return l.composition},mb:"$12",get children(){return e(p,{offset:24,get children(){return[e(c,{as:D,get icon(){return e(N,{})},"aria-label":"trigger",variant:"outline",colorScheme:"accent"}),e(s,{borderColor:"$accent3",bg:"$accent3",color:"$accent11",maxW:"$sm",get children(){return[e(h,{fontWeight:"$semibold",border:"none",pb:"0",children:"Confirmation!"}),e(v,{borderColor:"$accent3",boxSize:"24px"}),e(a,{bg:"$accent4"}),e(d,{children:"Are you sure you want to have that milkshake?"})]}})]}})}}),e(m,{id:"accessibility",children:"Accessibility"}),e(i,{children:"ARIA roles and attributes"}),e(P,{spacing:"$2",mb:"$8",get children(){return[e(r,{get children(){return[e(o,{children:"PopoverTrigger"})," has ",e(o,{children:"aria-haspopup"})," set to ",e(o,{children:"dialog"})," to denote that it triggers a popover."]}}),e(r,{get children(){return[e(o,{children:"PopoverTrigger"})," has ",e(o,{children:"aria-controls"})," set to the ",e(o,{children:"id"})," of the ",e(o,{children:"PopoverContent"}),"."]}}),e(r,{get children(){return[e(o,{children:"PopoverTrigger"})," has ",e(o,{children:"aria-expanded"})," set to ",e(o,{children:"true"})," or"," ",e(o,{children:"false"})," depending on the open/closed state of the popover."]}}),e(r,{get children(){return[e(o,{children:"PopoverContent"})," has ",e(o,{children:"aria-labelledby"})," set to the ",e(o,{children:"id"})," of the ",e(o,{children:"PopoverHeader"}),"."]}}),e(r,{get children(){return[e(o,{children:"PopoverContent"})," has ",e(o,{children:"aria-describedby"})," set to the ",e(o,{children:"id"})," ","of the ",e(o,{children:"PopoverBody"}),"."]}}),e(r,{get children(){return["When the ",e(o,{children:"triggerMode"})," is set to ",e(o,{children:"hover"}),","," ",e(o,{children:"PopoverContent"})," has ",e(o,{children:"role"})," set to ",e(o,{children:"tooltip"}),", otherwise"," ",e(o,{children:"role"})," is set to ",e(o,{children:"dialog"}),"."]}})]}}),e(i,{children:"Keyboard support (closed popover)"}),e(P,{spacing:"$2",mb:"$8",get children(){return[e(r,{get children(){return["When the ",e(o,{children:"triggerMode"})," prop is set to ",e(o,{children:"click"}),", clicking the"," ",e(o,{children:"PopoverTrigger"})," or pressing ",e(y,{children:"space"})," or ",e(y,{children:"enter"})," when focus is on the trigger will open the popover."]}}),e(r,{get children(){return["When the ",e(o,{children:"triggerMode"})," prop is set to ",e(o,{children:"hover"}),", focusing on or mousing over the ",e(o,{children:"PopoverTrigger"})," will open the popover."]}})]}}),e(i,{children:"Keyboard support (opened popover)"}),e(P,{spacing:"$2",mb:"$12",get children(){return[e(r,{get children(){return["When the ",e(o,{children:"initialFocus"})," prop is set, focus is moved to the matching element, otherwise focus moves to the ",e(o,{children:"PopoverContent"}),"."]}}),e(r,{get children(){return["When the ",e(o,{children:"triggerMode"})," prop is set to ",e(o,{children:"click"}),", clicking the"," ",e(o,{children:"PopoverTrigger"})," closes the popover."]}}),e(r,{get children(){return["When the ",e(o,{children:"triggerMode"})," prop is set to ",e(o,{children:"hover"}),", blurring or mousing out of the ",e(o,{children:"PopoverTrigger"})," will close the popover. If you move your mouse into the ",e(o,{children:"PopoverContent"}),", it'll remain visible."]}}),e(r,{get children(){return["When focus is within the ",e(o,{children:"PopoverContent"})," and ",e(o,{children:"closeOnEsc"})," prop is set to ",e(o,{children:"true"}),", pressing ",e(y,{children:"esc"})," closes the popover."]}}),e(r,{get children(){return["When ",e(o,{children:"closeOnBur"})," prop is set to ",e(o,{children:"true"}),", clicking outside or blurring out of the ",e(o,{children:"PopoverContent"})," closes the popover."]}})]}}),e(m,{id:"theming",children:"Theming"}),e(n,{mb:"$5",get children(){return[e(o,{children:"Popover"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(S,{lang:"js",get snippet(){return l.theming},mb:"$12"}),e(m,{id:"props",children:"Props"}),e(i,{id:"popover-props",children:"Popover props"}),e(q,{items:F,mb:"$10"}),e(i,{id:"other-components-props",children:"Other components props"}),e(P,{spacing:"$2",get children(){return[e(r,{get children(){return[e(o,{children:"PopoverContent"}),", ",e(o,{children:"PopoverArrow"}),", ",e(o,{children:"PopoverHeader"}),","," ",e(o,{children:"PopoverBody"})," and ",e(o,{children:"PopoverFooter"})," composes"," ",e(B,{as:w,href:"/docs/layout/box",external:!0,color:"$primary11",fontWeight:"$semibold",children:"Box"}),"."]}}),e(r,{get children(){return[e(o,{children:"PopoverCloseButton"})," composes"," ",e(B,{as:w,href:"/docs/others/close-button",external:!0,color:"$primary11",fontWeight:"$semibold",children:"CloseButton"}),"."]}})]}})]}})}export{$e as default};
