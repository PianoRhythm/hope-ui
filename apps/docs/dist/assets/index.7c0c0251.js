import{o as b,c as e,d as n,Q as m,e as f,C as r,R as i,n as a,j as h,H as t,a1 as o,G as w,S,L as B,f as p,t as d,q as F}from"./index.5fab0308.js";import{C as v}from"./CodeSnippet.0a69b940.js";import{P as y,a as T}from"./PageTitle.fca7b064.js";import{P as c}from"./Preview.cec92af7.js";import{P as k}from"./PropsTable.8cc40d64.js";import{S as C}from"./SectionSubtitle.cc8e906a.js";import{S as s}from"./SectionTitle.35eb7e89.js";import"./Footer.dc4a5085.js";const P='import { Flex, Spacer } from "@hope-ui/solid"',H=`<Flex color="white">
  <Center w="100px" bg="$success10">
    <Text>Box 1</Text>
  </Center>
  <Center boxSize="150px" bg="$info10">
    <Text>Box 2</Text>
  </Center>
  <Box flex="1" bg="tomato">
    <Text>Box 3</Text>
  </Box>
</Flex>`,U=`<Flex>
  <Box p="$4" bg="$danger9">
    Box 1
  </Box>
  <Spacer />
  <Box p="$4" bg="$success9">
    Box 2
  </Box>
</Flex>`,G=`<Box>
  <Text>Flex and Spacer: Full width, equal spacing</Text>
  <Flex>
    <Box w="70px" h="$10" bg="$danger9" />
    <Spacer />
    <Box w="170px" h="$10" bg="$danger9" />
    <Spacer />
    <Box w="180px" h="$10" bg="$danger9" />
  </Flex>

  <Text>Grid: The children start at the beginning, the 1/3 mark and 2/3 mark</Text>
  <Grid templateColumns="repeat(3, 1fr)" gap="$6">
    <Box w="70px" h="$10" bg="$info9" />
    <Box w="170px" h="$10" bg="$info9" />
    <Box w="180px" h="$10" bg="$info9" />
  </Grid>

  <Text>HStack: The children have equal spacing but don't span the whole container</Text>
  <HStack spacing="24px">
    <Box w="70px" h="$10" bg="$success9" />
    <Box w="170px" h="$10" bg="$success9" />
    <Box w="180px" h="$10" bg="$success9" />
  </HStack>
</Box>`,q=`<Flex>
  <Box p="$2">
    <Heading size="xl" fontWeight="$bold">
      Hope App
    </Heading>
  </Box>
  <Spacer />
  <Box>
    <Button mr="$4">Sign Up</Button>
    <Button>Log in</Button>
  </Box>
</Flex>`,l={importComponent:P,basicUsage:H,usingSpacer:U,vs:G,spacerUseCase:q};var L=d("<strong>Flex:"),W=d("<strong>Spacer:");function N(){const g={href:"/docs/layout/divider",label:"Divider"},x={href:"/docs/layout/grid",label:"Grid"},u=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#using-the-spacer",label:"Using the Spacer",indent:!0},{href:"#vs",label:"Flex and Spacer vs Grid vs Stack"},{href:"#props",label:"Props"}],$=[{name:"direction",description:"Shorthand for flexDirection style prop.",type:"Property.FlexDirection"},{name:"wrap",description:"Shorthand for flexWrap style prop.",type:"Property.FlexWrap"}];return b(()=>{F.highlightAll()}),e(T,{previousLink:g,nextLink:x,contextualNavLinks:u,get children(){return[e(y,{children:"Flex"}),e(n,{mb:"$5",get children(){return["Flex is"," ",e(m,{as:f,href:"/docs/layout/box",color:"$primary11",fontWeight:"$semibold",children:"Box"})," ","with ",e(r,{children:"display: flex"})," and comes with helpful style shorthand. It renders a"," ",e(r,{children:"div"})," element."]}}),e(s,{id:"import",children:"Import"}),e(v,{get snippet(){return l.importComponent},mb:"$6"}),e(i.ul,{ps:"$6",mb:"$12",get children(){return[e(i.li,{mb:"$2",get children(){return[L()," A ",e(r,{children:"Box"})," with ",e(r,{children:"display: flex"}),"."]}}),e(i.li,{get children(){return[W()," Creates an adjustable, empty space that can be used to tune the spacing between child elements within ",e(r,{children:"Flex"}),"."]}})]}}),e(s,{id:"usage",children:"Usage"}),e(n,{mb:"$3",children:"Using the Flex components, here are some helpful shorthand props:"}),e(i.ul,{ps:"$6",mb:"$5",get children(){return[e(i.li,{mb:"$2",get children(){return[e(r,{children:"flexDirection"})," is ",e(r,{children:"direction"}),"."]}}),e(i.li,{get children(){return[e(r,{children:"flexWrap"})," is ",e(r,{children:"wrap"}),"."]}})]}}),e(n,{mb:"$5",children:"While you can pass the verbose props, using the shorthand can save you some time."}),e(c,{get snippet(){return l.basicUsage},mb:"$10",get children(){return e(a,{color:"white",get children(){return[e(h,{w:"100px",bg:"$success10",get children(){return e(n,{children:"Box 1"})}}),e(h,{boxSize:"150px",bg:"$info10",get children(){return e(n,{children:"Box 2"})}}),e(t,{flex:"1",bg:"tomato",get children(){return e(n,{children:"Box 3"})}})]}})}}),e(C,{id:"using-the-spacer",children:"Using the Spacer"}),e(n,{mb:"$5",get children(){return["As an alternative to ",e(r,{children:"Stack"}),", you can combine ",e(r,{children:"Flex"})," and"," ",e(r,{children:"Spacer"})," to create stackable and responsive layouts."]}}),e(c,{get snippet(){return l.usingSpacer},mb:"$12",get children(){return e(a,{get children(){return[e(t,{p:"$4",bg:"$danger9",children:"Box 1"}),e(o,{}),e(t,{p:"$4",bg:"$success9",children:"Box 2"})]}})}}),e(s,{id:"vs",children:"Flex and Spacer vs Grid vs Stack"}),e(n,{mb:"$4",get children(){return["The ",e(r,{children:"Flex"})," and ",e(r,{children:"Spacer"})," components, ",e(r,{children:"Grid"})," and"," ",e(r,{children:"HStack"})," treat children of different widths differently."]}}),e(i.ul,{ps:"$6",mb:"$6",get children(){return[e(i.li,{mb:"$2",get children(){return["With ",e(r,{children:"Flex"})," and ",e(r,{children:"Spacer"}),", the children will span the entire width of the container and also have equal spacing between them."]}}),e(i.li,{mb:"$2",get children(){return["In ",e(r,{children:"Grid"}),", the starting points of the children will be equally spaced but the gaps between them will not be equal."]}}),e(i.li,{get children(){return["In ",e(r,{children:"HStack"}),", the children will have equal spacing between them but they won't span the entire width of the container."]}})]}}),e(c,{get snippet(){return l.vs},mb:"$8",get children(){return e(t,{get children(){return[e(n,{children:"Flex and Spacer: Full width, equal spacing"}),e(a,{get children(){return[e(t,{w:"70px",h:"$10",bg:"$danger9"}),e(o,{}),e(t,{w:"170px",h:"$10",bg:"$danger9"}),e(o,{}),e(t,{w:"180px",h:"$10",bg:"$danger9"})]}}),e(n,{mt:"$4",children:"Grid: The children start at the beginning, the 1/3 mark and 2/3 mark"}),e(w,{templateColumns:"repeat(3, 1fr)",gap:"$6",get children(){return[e(t,{w:"70px",h:"$10",bg:"$info9"}),e(t,{w:"170px",h:"$10",bg:"$info9"}),e(t,{w:"180px",h:"$10",bg:"$info9"})]}}),e(n,{mt:"$4",children:"HStack: The children have equal spacing but don't span the whole container"}),e(S,{spacing:"24px",get children(){return[e(t,{w:"70px",h:"$10",bg:"$success9"}),e(t,{w:"170px",h:"$10",bg:"$success9"}),e(t,{w:"180px",h:"$10",bg:"$success9"})]}})]}})}}),e(n,{mb:"$5",get children(){return["A good use case for ",e(r,{children:"Spacer"})," is to create a navbar with a signup/login button aligned to the right."]}}),e(c,{get snippet(){return l.spacerUseCase},mb:"$12",get children(){return e(a,{get children(){return[e(t,{p:"$2",get children(){return e(B,{size:"xl",fontWeight:"$bold",children:"Hope App"})}}),e(o,{}),e(t,{get children(){return[e(p,{mr:"$4",children:"Sign Up"}),e(p,{children:"Log in"})]}})]}})}}),e(s,{id:"props",children:"Props"}),e(k,{items:$})]}})}export{N as default};
