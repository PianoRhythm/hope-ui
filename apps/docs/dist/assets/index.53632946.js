import{a2 as T,bm as u,o as V,c as e,d as a,C as r,U as $,N as t,f as o,bn as p,bo as m,bp as w,bq as x,br as g,bs as f,af as B,bt as H,aj as N,S as Q,ak as D,ad as P,ae as I,M as L,D as R,F as G,Q as v,e as S,t as n,q as Y}from"./index.7fce6435.js";import{C as F}from"./CodeSnippet.08181d9e.js";import{P as Z,a as J}from"./PageTitle.ae31f383.js";import{P as b}from"./Preview.57b819a9.js";import{P as K}from"./PropsTable.7a791e85.js";import{S as s}from"./SectionSubtitle.86e40de8.js";import{S as c}from"./SectionTitle.028d68a7.js";import{I as X}from"./IconPlus.05891946.js";import"./Footer.0b307416.js";const ee=`import { 
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@hope-ui/solid"`,re=`function DrawerExample() {
  const { isOpen, onOpen, onClose } = createDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Drawer
        opened={isOpen()}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr="$3" onClick={onClose}>
              Cancel
            </Button>
            <Button>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}`,te=`function PlacementExample() {
  const [placement, setPlacement] = createSignal<DrawerPlacement>("right");
  const { isOpen, onOpen, onClose } = createDisclosure()

  return (
    <>
      <RadioGroup
        defaultValue={placement()}
        onChange={value => setPlacement(value as DrawerPlacement)}
      >
        <HStack spacing="$4" mb="$4">
          <Radio value="top">Top</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
        </HStack>
      </RadioGroup>
      <Button onClick={onOpen}>Open</Button>
      <Drawer
        opened={isOpen()}
        placement={placement()}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}`,ne=`function InitialFocusExample() {
  const { isOpen, onOpen, onClose } = createDisclosure()

  return (
    <>
      <Button leftIcon={<IconPlus />} onClick={onOpen}>
        Create user
      </Button>
      <Drawer
        opened={isOpen()}
        initialFocus="#firstname" // Focus on the element with id \`firstname\`
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create user</DrawerHeader>

          <DrawerBody>
            <FormControl id="firstname" mb="$4">
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" />
            </FormControl>
            <FormControl id="lastname">
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr="$3" onClick={onClose}>
              Cancel
            </Button>
            <Button>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}`,oe=`function SizeExample() {
  const [size, setSize] = createSignal<DrawerProps["size"]>("md");
  const { isOpen, onOpen, onClose } = createDisclosure()

  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

  return (
    <>
      <For each={sizes}>
        {size => (
          <Button 
            onClick={() => handleClick(size)} 
            m="$4"
          >
            {\`Open \${size} Drawer\`}
          </Button>
        )}
      </For>

      <Drawer isOpen={isOpen()} size={size()} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>{\`\${size()} drawer contents\`}</DrawerHeader>
          <DrawerBody>
            {size === 'full'
              ? \`You're trapped \u{1F606} , refresh the page to leave or press 'Esc' key.\`
              : null}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}`,ae=`function FormExample() {
  const { isOpen, onOpen, onClose } = createDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Drawer isOpen={isOpen()} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <form
              id='my-form'
              onSubmit={(e) => {
                e.preventDefault()
                console.log('submitted')
              }}
            >
              <Input name='username' placeholder='Type here...' />
            </form>
          </DrawerBody>

          <DrawerFooter>
            <Button type='submit' form='my-form'>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}`,ie=`const config: HopeThemeConfig = {
  components: {
    Drawer: {
      baseStyle: {
        overlay: SystemStyleObject,
        content: SystemStyleObject,
        closeButton: SystemStyleObject,
        header: SystemStyleObject,
        body: SystemStyleObject,
        footer: SystemStyleObject
      },
      defaultProps: {
        root: ThemeableDrawerOptions,
        closeButton: ThemeableCloseButtonOptions
      }
    }
  }
}`,i={importComponent:ee,basicUsage:re,placement:te,initialFocus:ne,drawerSizes:oe,usingForm:ae,theming:ie};var le=n("<strong>Drawer:"),se=n("<strong>DrawerOverlay:"),ce=n("<strong>DrawerContent:"),de=n("<strong>DrawerHeader:"),he=n("<strong>DrawerBody:"),ue=n("<strong>DrawerFooter:"),pe=n("<strong>DrawerCloseButton:"),z=n("<p>Some contents..."),me=n("<strong>first focusable element");function Be(){const[k,U]=T("right"),[C,j]=T("md"),_=["xs","sm","md","lg","xl","full"],d=u(),y=u(),h=u(),O=u(),E=l=>{j(()=>l),O.onOpen()},M={href:"/docs/feedback/notification",label:"Notification"},W={href:"/docs/overlay/menu",label:"Menu"},A=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#drawer-placement",label:"Drawer placement",indent:!0},{href:"#focus-on-specific-element",label:"Focus on specific element",indent:!0},{href:"#drawer-sizes",label:"Drawer sizes",indent:!0},{href:"#using-form-in-drawer",label:"Using a form in a Drawer",indent:!0},{href:"#accessibility",label:"Accessibility"},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"},{href:"#drawer-props",label:"Drawer props",indent:!0},{href:"#other-components-props",label:"Other components props",indent:!0}],q=[{name:"size",description:"The size of the drawer.",type:'"xs" | "sm" | "md" | "lg" | "xl" | "full"',defaultValue:'"xs"'},{name:"placement",description:"The placement of the drawer.",type:'"top" | "right" | "bottom" | "left"',defaultValue:'"right"'},{name:"fullHeight",description:"If `true` and drawer's placement is top or bottom, the drawer will occupy the viewport height (100vh).",type:"boolean"},{name:"disableMotion",description:"If `true`, the drawer will appear without any transition.",type:"boolean"}];return V(()=>{Y.highlightAll()}),e(J,{previousLink:M,nextLink:W,contextualNavLinks:A,get children(){return[e(Z,{children:"Drawer"}),e(a,{mb:"$5",get children(){return["The ",e(r,{children:"Drawer"})," component is a panel that slides out from the edge of the screen. It can be useful when you need users to complete a task or view some details without leaving the current page."]}}),e(c,{id:"import",children:"Import"}),e(F,{get snippet(){return i.importComponent},mb:"$6"}),e($,{spacing:"$2",mb:"$12",get children(){return[e(t,{get children(){return[le()," The wrapper that provides context for its children."]}}),e(t,{get children(){return[se()," The dimmed overlay behind the drawer content."]}}),e(t,{get children(){return[ce()," The container for the drawer's content."]}}),e(t,{get children(){return[de()," The header that labels the drawer."]}}),e(t,{get children(){return[he()," The wrapper that houses the drawer's main content."]}}),e(t,{get children(){return[ue()," The footer that houses the drawer actions."]}}),e(t,{get children(){return[pe()," The button that closes the drawer."]}})]}}),e(c,{id:"usage",children:"Usage"}),e(b,{get snippet(){return i.basicUsage},mb:"$10",get children(){return[e(o,{get onClick(){return d.onOpen},children:"Open"}),e(p,{get opened(){return d.isOpen()},placement:"right",get onClose(){return d.onClose},get children(){return[e(m,{}),e(w,{get children(){return[e(x,{}),e(g,{children:"Create your account"}),e(f,{get children(){return e(B,{placeholder:"Type here..."})}}),e(H,{get children(){return[e(o,{variant:"outline",mr:"$3",get onClick(){return d.onClose},children:"Cancel"}),e(o,{children:"Save"})]}})]}})]}})]}}),e(s,{id:"drawer-placement",children:"Drawer placement"}),e(a,{mb:"$5",get children(){return["The Drawer can appear from any edge of the screen. Pass the ",e(r,{children:"placement"})," prop and set it to ",e(r,{children:"top"}),", ",e(r,{children:"right"}),", ",e(r,{children:"bottom"}),", or ",e(r,{children:"left"}),"."]}}),e(b,{get snippet(){return i.placement},mb:"$10",get children(){return[e(N,{get value(){return k()},onChange:l=>U(l),get children(){return e(Q,{spacing:"$4",mb:"$4",get children(){return[e(D,{value:"top",children:"Top"}),e(D,{value:"right",children:"Right"}),e(D,{value:"bottom",children:"Bottom"}),e(D,{value:"left",children:"Left"})]}})}}),e(o,{get onClick(){return y.onOpen},children:"Open"}),e(p,{get opened(){return y.isOpen()},get placement(){return k()},get onClose(){return y.onClose},get children(){return[e(m,{}),e(w,{get children(){return[e(g,{children:"Basic Drawer"}),e(f,{get children(){return[z(),z(),z()]}})]}})]}})]}}),e(s,{id:"focus-on-specific-element",children:"Focus on specific element"}),e(a,{mb:"$5",get children(){return["Hope UI automatically sets focus on the first tabbable element in the drawer. However, there might be scenarios where you need to manually control where focus goes. To do this, pass a CSS query selector to the ",e(r,{children:"initialFocus"})," prop."]}}),e(b,{get snippet(){return i.initialFocus},mb:"$6",get children(){return[e(o,{get leftIcon(){return e(X,{})},get onClick(){return h.onOpen},children:"Create user"}),e(p,{get opened(){return h.isOpen()},initialFocus:"#firstname",get onClose(){return h.onClose},get children(){return[e(m,{}),e(w,{get children(){return[e(x,{}),e(g,{children:"Create user"}),e(f,{get children(){return[e(P,{id:"firstname",mb:"$4",get children(){return[e(I,{children:"First name"}),e(B,{placeholder:"First name"})]}}),e(P,{id:"lastname",get children(){return[e(I,{children:"Last name"}),e(B,{placeholder:"Last name"})]}})]}}),e(H,{get children(){return[e(o,{variant:"outline",mr:"$3",get onClick(){return h.onClose},children:"Cancel"}),e(o,{children:"Save"})]}})]}})]}})]}}),e(L,{status:"warning",mb:"$10",get children(){return e(R,{get children(){return["Without the ",e(r,{children:"initialFocus"})," prop, the drawer will set focus on the"," ",me()," when it opens."]}})}}),e(s,{id:"drawer-sizes",children:"Drawer sizes"}),e(a,{mb:"$5",get children(){return["Pass the ",e(r,{children:"size"})," prop if you need to adjust the size of the drawer. Values can be"," ",e(r,{children:"xs"}),", ",e(r,{children:"sm"}),", ",e(r,{children:"md"}),", ",e(r,{children:"lg"}),", ",e(r,{children:"xl"}),", or"," ",e(r,{children:"full"}),"."]}}),e(b,{get snippet(){return i.drawerSizes},mb:"$10",get children(){return[e(G,{each:_,children:l=>e(o,{onClick:()=>E(l),m:"$4",children:`Open ${l} Drawer`})}),e(p,{get opened(){return O.isOpen()},get size(){return C()},get onClose(){return O.onClose},get children(){return[e(m,{}),e(w,{get children(){return[e(g,{get children(){return`${C()} drawer contents`}}),e(f,{get children(){return C()==="full"?"You're trapped \u{1F606} , refresh the page to leave or press 'Esc' key.":null}})]}})]}})]}}),e(s,{id:"using-form-in-drawer",children:"Using a form in a Drawer"}),e(a,{mb:"$5",children:"If you need to but a form within the Drawer and place the sumit button in the drawer's footer, here's the recommended way to do it:"}),e(F,{get snippet(){return i.usingForm},mb:"$6"}),e(L,{status:"warning",mb:"$12",get children(){return e(R,{get children(){return["Because the button is located outside the form, you have to leverage its native HTML"," ",e(r,{children:"form"})," attribute and refer to the ",e(r,{children:"id"})," of the ",e(r,{children:"form"}),"."]}})}}),e(c,{id:"accessibility",children:"Accessibility"}),e($,{spacing:"$2",mb:"$12",get children(){return[e(t,{children:"When opening the Drawer, focus is trapped inside the Drawer."}),e(t,{get children(){return["By default, the drawer sets focus on the first focusable element. If the"," ",e(r,{children:"initialFocus"})," prop is passed, the drawer sets focus on the element that matches the CSS query selector."]}}),e(t,{children:"After the drawer closes, it'll return focus to the element that triggered it."})]}}),e(c,{id:"theming",children:"Theming"}),e(a,{mb:"$5",get children(){return[e(r,{children:"Drawer"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(F,{lang:"js",get snippet(){return i.theming},mb:"$12"}),e(c,{id:"props",children:"Props"}),e(s,{id:"drawer-props",children:"Drawer props"}),e(a,{mb:"$5",get children(){return[e(r,{children:"Drawer"})," composes the"," ",e(v,{as:S,href:"/docs/overlay/modal",color:"$primary11",fontWeight:"$semibold",children:"Modal"})," ","component with these extra props:"]}}),e(K,{items:q,mb:"$10"}),e(s,{id:"other-components-props",children:"Other components props"}),e($,{spacing:"$2",get children(){return[e(t,{get children(){return[e(r,{children:"DrawerOverlay"}),", ",e(r,{children:"DrawerContent"}),", ",e(r,{children:"DrawerHeader"}),","," ",e(r,{children:"DrawerBody"})," and ",e(r,{children:"DrawerFooter"})," composes"," ",e(v,{as:S,href:"/docs/layout/box",color:"$primary11",fontWeight:"$semibold",children:"Box"})," ","component."]}}),e(t,{get children(){return[e(r,{children:"DrawerCloseButton"})," composes"," ",e(v,{as:S,href:"/docs/others/close-button",color:"$primary11",fontWeight:"$semibold",children:"CloseButton"}),"."]}})]}})]}})}export{Be as default};
