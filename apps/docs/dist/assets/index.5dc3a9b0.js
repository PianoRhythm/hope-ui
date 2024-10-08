import{bm as a,a2 as z,o as Z,c as e,d as l,U as M,N as t,C as o,f as n,bA as s,bB as d,bC as c,bD as u,bE as h,bF as p,bG as m,ad as I,ae as D,af as P,M as E,D as A,Q as T,aj as J,S as X,ak as L,F as ee,aE as oe,b as W,t as b,n as te}from"./index.68a83398.js";import{C as U}from"./CodeSnippet.dcbd435f.js";import{P as ne,a as le}from"./PageTitle.32c0d196.js";import{P as g}from"./Preview.69e3d182.js";import{P as ie}from"./PropsTable.3ee1b950.js";import{S as i}from"./SectionSubtitle.826cc245.js";import{S as f}from"./SectionTitle.6fcae084.js";import"./Footer.58752801.js";const re=`import { 
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@hope-ui/solid"`,ae=`function ModalExample() {
  const { isOpen, onOpen, onClose } = createDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal opened={isOpen()} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <p>Some contents...</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}`,se=`function BlockScrollExample() {
  const { isOpen, onOpen, onClose } = createDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal
        blockScrollOnMount={false}
        opened={isOpen()}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <Text fontWeight="$bold">
              You can scroll the content behind the modal
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}`,de=`function InitialFocusExample() {
  const { isOpen, onOpen, onClose } = createDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal
        opened={isOpen()}
        initialFocus="#firstname"  // Focus on the element with id \`firstname\`
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Create your account</ModalHeader>
          <ModalBody>
            <FormControl id="firstname" mb="$4">
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" />
            </FormControl>
            <FormControl id="lastname">
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}`,ce=`function CloseOnOverlayClickExample() {
  const { isOpen, onOpen, onClose } = createDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal
        closeOnOverlayClick={false}
        opened={isOpen()}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <p>Some contents...</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}`,ue=`function CenteredExample() {
  const { isOpen, onOpen, onClose } = createDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal centered opened={isOpen()} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <p>Some contents...</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}`,he=`function TransitionExample() {
  const { isOpen, onOpen, onClose } = createDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal 
        motionPreset="fade-in-bottom" 
        opened={isOpen()} 
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <p>Some contents...</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}`,pe=`function OverflowExample() {
  const [scrollBehavior, setScrollBehavior] = createSignal("inside");
  const { isOpen, onOpen, onClose } = createDisclosure()

  return (
    <>
      <RadioGroup value={scrollBehavior()} onChange={setScrollBehavior}>
        <HStack spacing="$4" mb="$4">
          <Radio value="inside">Inside</Radio>
          <Radio value="outside">Outside</Radio>
        </HStack>
      </RadioGroup>

      <Button onClick={onOpen}>Open Modal</Button>
      <Modal 
        scrollBehavior={scrollBehavior()}
        opened={isOpen()} 
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <p>Lorem ipsum...</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}`,me=`function SizeExample() {
  const [size, setSize] = createSignal<ModalProps["size"]>("md");
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
            {\`Open \${size} Modal\`}
          </Button>
        )}
      </For>

      <Modal size={size()} opened={isOpen()} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <p>Some contents...</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}`,ge=`function TrapFocusExample() {
  const { isOpen, onOpen, onClose } = createDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal 
        trapFocus={false}
        opened={isOpen()} 
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <Text fontWeight="$bold">
              You can focus on the content behind the modal
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}`,be=`function BackdropStyleExample() {
  const { isOpen, onOpen, onClose } = createDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal opened={isOpen()} onClose={onClose}>
        <ModalOverlay
          bg="$blackAlpha3"
          css={{
            backdropFilter: "blur(10px) hue-rotate(90deg)",
          }}
        />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <p>Some contents...</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}`,Ce=`const config: HopeThemeConfig = {
  components: {
    Modal: {
      baseStyle: {
        overlay: SystemStyleObject,
        content: SystemStyleObject,
        closeButton: SystemStyleObject,
        header: SystemStyleObject,
        body: SystemStyleObject,
        footer: SystemStyleObject
      },
      defaultProps: {
        root: ThemeableModalOptions,
        closeButton: ThemeableCloseButtonOptions
      }
    }
  }
}`,r={importComponent:re,basicUsage:ae,blockScroll:se,initialFocus:de,closeOnOverlayClick:ce,centered:ue,transition:he,overflow:pe,sizes:me,trapFocus:ge,backdropStyle:be,theming:Ce};var Me=b("<strong>Modal:"),fe=b("<strong>ModalOverlay:"),ye=b("<strong>ModalContent:"),ve=b("<strong>ModalHeader:"),Oe=b("<strong>ModalBody:"),ke=b("<strong>ModalFooter:"),Be=b("<strong>ModalCloseButton:"),C=b("<p>Some contents..."),qe=b("<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos blanditiis accusamus in praesentium dolorem, sunt quia sit sequi minima maxime? Eius natus, aut omnis deserunt nostrum fugiat! Totam magni sapiente maxime maiores aut doloremque veniam excepturi, id quae veritatis est omnis, nesciunt ipsum, voluptate adipisci nam sed ea inventore facere nulla optio aliquid? Aliquid iure, optio et fuga quo dicta ratione impedit praesentium mollitia maiores ipsa, magni sapiente reiciendis perspiciatis. Molestiae quisquam eveniet aliquam consequatur accusantium quasi ut sint animi reiciendis. Suscipit numquam commodi fuga provident? Voluptatem dicta exercitationem nemo beatae cum consequuntur pariatur quidem magni sed tempore. Eaque itaque totam quae incidunt quidem officia atque libero placeat? Obcaecati, ullam dolores velit sequi magni animi inventore earum error maiores et, sunt numquam illo fugiat ducimus in aspernatur possimus minus, placeat blanditiis alias. Deleniti corrupti eaque debitis adipisci, doloremque rerum temporibus saepe error! Fugiat inventore possimus doloribus, nemo qui, nostrum alias non tempora nam itaque quae maiores tempore, quasi blanditiis incidunt aut. Sapiente sit distinctio adipisci. Consectetur numquam ratione facere fuga ipsum quasi aliquam velit illum iure consequuntur, repellat cumque quibusdam dolorem asperiores perspiciatis ducimus. Quod earum alias nihil voluptate inventore dolores mollitia natus saepe esse. Aut assumenda nulla maxime recusandae nihil iusto dicta commodi pariatur veritatis? Impedit nam deserunt optio aspernatur praesentium totam illum facere id exercitationem veniam eveniet vitae obcaecati minima, similique rerum suscipit dolorum tempora perferendis voluptatem ex ipsam! Ut ea, sapiente cum, adipisci ab voluptatem enim, explicabo illo sunt exercitationem ipsum doloribus? Consectetur impedit voluptatibus culpa aperiam facere, animi placeat ea corrupti quidem repellendus sed saepe accusamus autem delectus enim, in soluta minus laboriosam adipisci! Numquam quod dolorem eum tempora totam, assumenda nostrum eligendi aliquam rerum dignissimos autem quo. Qui fugit, aperiam sequi quis exercitationem quisquam nobis facilis debitis placeat quia temporibus distinctio maiores animi nisi voluptatum accusamus laudantium non dolore? Dolorem eum vitae modi ipsam quibusdam tempora natus obcaecati in, expedita fugit. Explicabo quae accusantium porro unde dolores maxime ullam optio enim quibusdam fugit veritatis excepturi ad, molestias natus tenetur esse rerum et ab rem cupiditate, dicta aspernatur corrupti deleniti iste. Aspernatur repellendus, voluptates omnis, hic quod minima laudantium officiis aliquam quasi voluptatibus voluptatum provident soluta suscipit ea illum amet fugit blanditiis velit exercitationem assumenda inventore rerum nihil! Inventore reprehenderit distinctio non veniam eum beatae nihil reiciendis nemo est molestias qui, dolorum praesentium explicabo id culpa nostrum repudiandae recusandae! Vero ut placeat, fugiat, aliquam quos omnis similique temporibus iusto nulla non rerum repellat repudiandae illum sit sapiente. Iusto et qui eaque odit eum culpa ipsa, libero, perspiciatis voluptatem quaerat aperiam assumenda. Architecto minus doloremque sed numquam aperiam, ratione dolorem dolores odio obcaecati quis nemo sit delectus voluptatum possimus ad maxime et officia minima nulla illum eum quos molestiae laboriosam. Nihil harum voluptates, ea consequatur tenetur, nulla explicabo fugiat earum veritatis doloribus maxime deleniti nostrum quos praesentium voluptate commodi quas assumenda fuga et placeat? Quam repudiandae, tempore consequuntur aperiam itaque in omnis et ut unde, temporibus alias maiores distinctio, nihil culpa. Fugiat quasi quisquam eaque facilis totam."),we=b("<strong>While strongly discourage this use case");function De(){const y=a(),v=a(),O=a(),k=a(),B=a(),q=a(),w=a(),$=a(),S=a(),F=a(),[H,V]=z("inside"),[_,j]=z("md"),R=x=>{j(()=>x),$.onOpen()},Q=["xs","sm","md","lg","xl","full"],N={href:"/docs/overlay/menu",label:"Menu"},Y={href:"/docs/overlay/popover",label:"Popover"},G=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#block-scrolling",label:"Block scrolling when modal opens",indent:!0},{href:"#focus-on-specific-element",label:"Focus on specific element",indent:!0},{href:"#close-on-overlay-click",label:"Close modal on overlay click",indent:!0},{href:"#modal-vertically-centered",label:"Make modal vertically centered",indent:!0},{href:"#changing-transition",label:"Changing the transition",indent:!0},{href:"#overflow-behavior",label:"Modal overflow behavior",indent:!0},{href:"#modal-sizes",label:"Modal sizes",indent:!0},{href:"#prevent-focus-trapping",label:"Prevent focus trapping",indent:!0},{href:"#styling-backdrop",label:"Styling the backdrop",indent:!0},{href:"#accessibility",label:"Accessibility"},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"},{href:"#modal-props",label:"Modal props",indent:!0},{href:"#other-components-props",label:"Other components props",indent:!0}],K=[{required:!0,name:"opened",description:"If `true`, the modal will be open.",type:"boolean"},{required:!0,name:"onClose",description:"Callback invoked to close the modal.",type:"() => void"},{name:"size",description:"The size of the modal.",type:'"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "full"',defaultValue:'"md"'},{name:"scrollBehavior",description:"Defines how scrolling should happen when content overflows beyond the viewport.",type:'"inside" | "outside"',defaultValue:'"outside"'},{name:"centered",description:"If `true`, the modal will be centered on screen.",type:"boolean",defaultValue:"false"},{name:"closeOnOverlayClick",description:"If `true`, the modal will close when the overlay is clicked.",type:"boolean",defaultValue:"true"},{name:"closeOnEsc",description:"If `true`, the modal will close when the `Esc` key is pressed.",type:"boolean",defaultValue:"true"},{name:"trapFocus",description:"If `false`, focus lock will be disabled completely. This is useful in situations where you still need to interact with other surrounding elements. Warning: We don't recommend doing this because it hurts the accessibility of the modal, based on WAI-ARIA specifications.",type:"boolean",defaultValue:"true"},{name:"blockScrollOnMount",description:"If `true`, scrolling will be disabled on the `body` when the modal opens.",type:"boolean",defaultValue:"true"},{name:"motionPreset",description:"The transition that should be used for the modal.",type:'"fade-in-bottom" | "scale" | "none"',defaultValue:'"scale"'},{name:"initialFocus",description:"A query selector string targeting the element to receive focus when the modal opens.",type:"string"},{name:"id",description:"The `id` of the modal dialog.",type:"string"},{name:"onOverlayClick",description:"Callback fired when the overlay is clicked.",type:"() => void"},{name:"onEsc",description:"Callback fired when the escape key is pressed and focus is within modal.",type:"() => void"}];return Z(()=>{te.highlightAll()}),e(le,{previousLink:N,nextLink:Y,contextualNavLinks:G,get children(){return[e(ne,{children:"Modal"}),e(l,{mb:"$5",children:"A modal dialog is a window overlaid on either the primary window or another dialog window. Content behind a modal dialog is inert, meaning that users cannot interact with it."}),e(f,{id:"import",children:"Import"}),e(U,{get snippet(){return r.importComponent},mb:"$6"}),e(M,{spacing:"$2",mb:"$12",get children(){return[e(t,{get children(){return[Me()," The wrapper that provides context for its children."]}}),e(t,{get children(){return[fe()," The dimmed overlay behind the modal dialog."]}}),e(t,{get children(){return[ye()," The container for the modal dialog's content."]}}),e(t,{get children(){return[ve()," The header that labels the modal dialog."]}}),e(t,{get children(){return[Oe()," The wrapper that houses the modal's main content."]}}),e(t,{get children(){return[ke()," The footer that houses the modal actions."]}}),e(t,{get children(){return[Be()," The button that closes the modal."]}})]}}),e(f,{id:"usage",children:"Usage"}),e(l,{mb:"$5",get children(){return["When the modal opens, focus is sent into the modal and set to the first tabbable element. If there are no tabbled elements, focus is set on ",e(o,{children:"ModalContent"}),"."]}}),e(g,{get snippet(){return r.basicUsage},mb:"$10",get children(){return[e(n,{get onClick(){return y.onOpen},children:"Open Modal"}),e(s,{get opened(){return y.isOpen()},get onClose(){return y.onClose},get children(){return[e(d,{}),e(c,{get children(){return[e(u,{}),e(h,{children:"Modal Title"}),e(p,{get children(){return C()}}),e(m,{get children(){return e(n,{get onClick(){return y.onClose},children:"Close"})}})]}})]}})]}}),e(i,{id:"block-scrolling",children:"Block scrolling when modal opens"}),e(l,{mb:"$5",get children(){return["For accessibility, it is recommended to block scrolling on the main document behind the modal. Hope UI does this by default but you can set ",e(o,{children:"blockScrollOnMount"})," to"," ",e(o,{children:"false"})," to allow scrolling behind the modal."]}}),e(g,{get snippet(){return r.blockScroll},mb:"$10",get children(){return[e(n,{get onClick(){return v.onOpen},children:"Open Modal"}),e(s,{blockScrollOnMount:!1,get opened(){return v.isOpen()},get onClose(){return v.onClose},get children(){return[e(d,{}),e(c,{get children(){return[e(u,{}),e(h,{children:"Modal Title"}),e(p,{get children(){return e(l,{fontWeight:"$bold",children:"You can scroll the content behind the modal"})}}),e(m,{get children(){return e(n,{get onClick(){return v.onClose},children:"Close"})}})]}})]}})]}}),e(i,{id:"focus-on-specific-element",children:"Focus on specific element"}),e(l,{mb:"$5",get children(){return["Hope UI automatically sets focus on the first tabbable element in the modal. However, there might be scenarios where you need to manually control where focus goes. To do this, pass a CSS query selector to the ",e(o,{children:"initialFocus"})," prop."]}}),e(g,{get snippet(){return r.initialFocus},mb:"$10",get children(){return[e(n,{get onClick(){return O.onOpen},children:"Open Modal"}),e(s,{get opened(){return O.isOpen()},initialFocus:"#firstname",get onClose(){return O.onClose},get children(){return[e(d,{}),e(c,{get children(){return[e(u,{}),e(h,{children:"Create your account"}),e(p,{get children(){return[e(I,{id:"firstname",mb:"$4",get children(){return[e(D,{children:"First name"}),e(P,{placeholder:"First name"})]}}),e(I,{id:"lastname",get children(){return[e(D,{children:"Last name"}),e(P,{placeholder:"Last name"})]}})]}}),e(m,{get children(){return e(n,{get onClick(){return O.onClose},children:"Save"})}})]}})]}})]}}),e(i,{id:"close-on-overlay-click",children:"Close modal on overlay click"}),e(l,{mb:"$5",get children(){return["By default, the modal closes when you click its overlay. You can set"," ",e(o,{children:"closeOnOverlayClick"})," to ",e(o,{children:"false"})," if you want the modal to stay visible."]}}),e(g,{get snippet(){return r.closeOnOverlayClick},mb:"$10",get children(){return[e(n,{get onClick(){return k.onOpen},children:"Open Modal"}),e(s,{closeOnOverlayClick:!1,get opened(){return k.isOpen()},get onClose(){return k.onClose},get children(){return[e(d,{}),e(c,{get children(){return[e(u,{}),e(h,{children:"Modal Title"}),e(p,{get children(){return C()}}),e(m,{get children(){return e(n,{get onClick(){return k.onClose},children:"Close"})}})]}})]}})]}}),e(i,{id:"modal-vertically-centered",children:"Make modal vertically centered"}),e(l,{mb:"$5",get children(){return["By default the modal has a vertical offset of ",e(o,{children:"3.75rem"})," which you can change by passing ",e(o,{children:"top"})," to the ",e(o,{children:"ModalContent"}),". If you need to vertically center the modal, pass the ",e(o,{children:"centered"})," prop."]}}),e(g,{get snippet(){return r.centered},mb:"$6",get children(){return[e(n,{get onClick(){return B.onOpen},children:"Open Modal"}),e(s,{centered:!0,get opened(){return B.isOpen()},get onClose(){return B.onClose},get children(){return[e(d,{}),e(c,{get children(){return[e(u,{}),e(h,{children:"Modal Title"}),e(p,{get children(){return C()}}),e(m,{get children(){return e(n,{get onClick(){return B.onClose},children:"Close"})}})]}})]}})]}}),e(E,{status:"warning",mb:"$10",get children(){return e(A,{get children(){return["If the content within the modal overflows beyond the viewport, don't use this prop. Try setting the"," ",e(T,{href:"#overflow-behavior",color:"$primary11",fontWeight:"$semibold",children:"overflow behavior"})," ","instead."]}})}}),e(i,{id:"changing-transition",children:"Changing the transition"}),e(l,{mb:"$5",get children(){return["The ",e(o,{children:"Modal"})," comes with a scale transition by default but you can change it by passing the ",e(o,{children:"motionPreset"})," prop, and set its value to either"," ",e(o,{children:"fade-in-bottom"}),", ",e(o,{children:"scale"})," or ",e(o,{children:"none"}),"."]}}),e(g,{get snippet(){return r.transition},mb:"$10",get children(){return[e(n,{get onClick(){return q.onOpen},children:"Open Modal"}),e(s,{motionPreset:"fade-in-bottom",get opened(){return q.isOpen()},get onClose(){return q.onClose},get children(){return[e(d,{}),e(c,{get children(){return[e(u,{}),e(h,{children:"Modal Title"}),e(p,{get children(){return C()}}),e(m,{get children(){return e(n,{get onClick(){return q.onClose},children:"Close"})}})]}})]}})]}}),e(i,{id:"overflow-behavior",children:"Modal overflow behavior"}),e(l,{mb:"$3",get children(){return["If the content within the modal overflows beyond the viewport, you can use the",e(o,{children:"scrollBehavior"})," to control how scrolling should happen."]}}),e(M,{spacing:"$2",mb:"$5",get children(){return[e(t,{get children(){return["If set to ",e(o,{children:"inside"}),", scroll only occurs within the ",e(o,{children:"ModalBody"}),"."]}}),e(t,{get children(){return["If set to ",e(o,{children:"outside"}),", the entire ",e(o,{children:"ModalContent"})," will scroll within the viewport."]}})]}}),e(g,{get snippet(){return r.overflow},mb:"$10",get children(){return[e(J,{get value(){return H()},onChange:V,get children(){return e(X,{spacing:"$4",mb:"$4",get children(){return[e(L,{value:"inside",children:"Inside"}),e(L,{value:"outside",children:"Outside"})]}})}}),e(n,{get onClick(){return w.onOpen},children:"Open Modal"}),e(s,{get scrollBehavior(){return H()},get opened(){return w.isOpen()},get onClose(){return w.onClose},get children(){return[e(d,{}),e(c,{get children(){return[e(u,{}),e(h,{children:"Modal Title"}),e(p,{get children(){return qe()}}),e(m,{get children(){return e(n,{get onClick(){return w.onClose},children:"Close"})}})]}})]}})]}}),e(i,{id:"modal-sizes",children:"Modal sizes"}),e(l,{mb:"$5",get children(){return["Pass the ",e(o,{children:"size"})," prop if you need to adjust the size of the modal. Values can be"," ",e(o,{children:"xs"}),", ",e(o,{children:"sm"}),", ",e(o,{children:"md"}),", ",e(o,{children:"lg"}),", ",e(o,{children:"xl...8xl"}),", or ",e(o,{children:"full"}),"."]}}),e(g,{get snippet(){return r.sizes},mb:"$10",get children(){return[e(ee,{each:Q,children:x=>e(n,{onClick:()=>R(x),m:"$4",children:`Open ${x} Modal`})}),e(s,{get opened(){return $.isOpen()},get size(){return _()},get onClose(){return $.onClose},get children(){return[e(d,{}),e(c,{get children(){return[e(u,{}),e(h,{children:"Modal Title"}),e(p,{get children(){return C()}}),e(m,{get children(){return e(n,{get onClick(){return $.onClose},children:"Close"})}})]}})]}})]}}),e(i,{id:"prevent-focus-trapping",children:"Prevent focus trapping"}),e(l,{mb:"$5",children:"By default the modal and drawer locks the focus inside them. Normally this is what you want to maintain accessibility standards."}),e(l,{mb:"$5",get children(){return[we()," due to the accessibility impacts, there are certain situations where you might not want the modal to trap focus."]}}),e(l,{mb:"$5",get children(){return["To prevent focus trapping, pass ",e(o,{children:"trapFocus"})," and set its value to"," ",e(o,{children:"false"}),"."]}}),e(g,{get snippet(){return r.trapFocus},mb:"$10",get children(){return[e(n,{get onClick(){return S.onOpen},children:"Open Modal"}),e(s,{trapFocus:!1,get opened(){return S.isOpen()},get onClose(){return S.onClose},get children(){return[e(d,{}),e(c,{get children(){return[e(u,{}),e(h,{children:"Modal Title"}),e(p,{get children(){return e(l,{fontWeight:"$bold",children:"You can focus on the content behind the modal"})}}),e(m,{get children(){return e(n,{get onClick(){return S.onClose},children:"Close"})}})]}})]}})]}}),e(i,{id:"styling-backdrop",children:"Styling the backdrop"}),e(l,{mb:"$5",get children(){return["The backdrop's background by default is set to ",e(o,{children:"$blackAlpha11"}),", but if you want to achieve a different style you can use style props."]}}),e(g,{get snippet(){return r.backdropStyle},mb:"$6",get children(){return[e(n,{get onClick(){return F.onOpen},children:"Open Modal"}),e(s,{get opened(){return F.isOpen()},get onClose(){return F.onClose},get children(){return[e(d,{bg:"$blackAlpha3",css:{backdropFilter:"blur(10px) hue-rotate(90deg)"}}),e(c,{get children(){return[e(u,{}),e(h,{children:"Modal Title"}),e(p,{get children(){return C()}}),e(m,{get children(){return e(n,{get onClick(){return F.onClose},children:"Close"})}})]}})]}})]}}),e(E,{status:"warning",mb:"$12",get children(){return e(A,{get children(){return["Please be aware that not every browser supports the ",e(o,{children:"backdrop-filter"})," CSS property, used in the example above."]}})}}),e(f,{id:"accessibility",children:"Accessibility"}),e(i,{children:"ARIA roles and attributes"}),e(M,{spacing:"$2",mb:"$8",get children(){return[e(t,{get children(){return["The ",e(o,{children:"ModalContent"})," has ",e(o,{children:"aria-modal"})," set to ",e(o,{children:"true"}),"."]}}),e(t,{get children(){return["The ",e(o,{children:"ModalContent"})," has ",e(o,{children:"aria-labelledby"})," set to the ",e(o,{children:"id"})," ","of the ",e(o,{children:"ModalHeader"}),"."]}}),e(t,{get children(){return["The ",e(o,{children:"ModalContent"})," has ",e(o,{children:"aria-describedby"})," set to the ",e(o,{children:"id"})," ","of the ",e(o,{children:"ModalBody"}),"."]}})]}}),e(i,{children:"Keyboard support and Focus management"}),e(M,{spacing:"$2",mb:"$12",get children(){return[e(t,{children:"When the modal opens, focus is trapped within it."}),e(t,{get children(){return["When the modal opens, focus is automatically set to the first enabled element, or the element from ",e(o,{children:"initialFocus"}),"."]}}),e(t,{children:"Clicking on the overlay closes the Modal."}),e(t,{get children(){return["Pressing ",e(oe,{children:"esc"})," closes the Modal."]}}),e(t,{children:"Scrolling is blocked on the elements behind the modal."}),e(t,{get children(){return["The modal is rendered in a portal attached to the end of ",e(o,{children:"document.body"})," to break it out of the source order."]}})]}}),e(f,{id:"theming",children:"Theming"}),e(l,{mb:"$5",get children(){return[e(o,{children:"Modal"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(U,{lang:"js",get snippet(){return r.theming},mb:"$12"}),e(f,{id:"props",children:"Props"}),e(i,{id:"modal-props",children:"Modal props"}),e(ie,{items:K,mb:"$10"}),e(i,{id:"other-components-props",children:"Other components props"}),e(M,{spacing:"$2",get children(){return[e(t,{get children(){return[e(o,{children:"ModalOverlay"}),", ",e(o,{children:"ModalContent"}),", ",e(o,{children:"ModalHeader"}),","," ",e(o,{children:"ModalBody"})," and ",e(o,{children:"ModalFooter"})," composes"," ",e(T,{as:W,href:"/docs/layout/box",color:"$primary11",fontWeight:"$semibold",children:"Box"}),"."]}}),e(t,{get children(){return[e(o,{children:"ModalCloseButton"})," composes"," ",e(T,{as:W,href:"/docs/others/close-button",color:"$primary11",fontWeight:"$semibold",children:"CloseButton"}),"."]}})]}})]}})}export{De as default};
