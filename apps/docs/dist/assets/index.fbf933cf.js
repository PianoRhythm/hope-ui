import{o as b,i as m,a as e,T as n,A as f,L as w,k as r,E as i,F as o,g as h,B as t,a0 as a,N as S,H as B,d as F,e as p,t as d}from"./index.257138b9.js";import{C as v}from"./CodeSnippet.770d5f1c.js";import{P as k,a as y}from"./PageTitle.3ce5e388.js";import{P as c}from"./Preview.680bc5b4.js";import{P as T}from"./PropsTable.ba1383de.js";import{S as C}from"./SectionSubtitle.8d9ca36f.js";import{S as s}from"./SectionTitle.01cca1ff.js";import"./Footer.69976eff.js";const H='import { Flex, Spacer } from "@hope-ui/solid"',P=`<Flex color="white">
  <Center w="100px" bg="$success10">
    <Text>Box 1</Text>
  </Center>
  <Center boxSize="150px" bg="$info10">
    <Text>Box 2</Text>
  </Center>
  <Box flex="1" bg="tomato">
    <Text>Box 3</Text>
  </Box>
</Flex>`,L=`<Flex>
  <Box p="$4" bg="$danger9">
    Box 1
  </Box>
  <Spacer />
  <Box p="$4" bg="$success9">
    Box 2
  </Box>
</Flex>`,U=`<Box>
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
</Box>`,G=`<Flex>
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
</Flex>`,l={importComponent:H,basicUsage:P,usingSpacer:L,vs:U,spacerUseCase:G},q=d("<strong>Flex:</strong>"),A=d("<strong>Spacer:</strong>");function M(){const g={href:"/docs/layout/divider",label:"Divider"},x={href:"/docs/layout/grid",label:"Grid"},u=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#using-the-spacer",label:"Using the Spacer",indent:!0},{href:"#vs",label:"Flex and Spacer vs Grid vs Stack"},{href:"#props",label:"Props"}],$=[{name:"direction",description:"Shorthand for flexDirection style prop.",type:"Property.FlexDirection"},{name:"wrap",description:"Shorthand for flexWrap style prop.",type:"Property.FlexWrap"}];return b(()=>{m.highlightAll()}),e(y,{previousLink:g,nextLink:x,contextualNavLinks:u,get children(){return[e(k,{children:"Flex"}),e(n,{mb:"$5",get children(){return["Flex is"," ",e(f,{as:w,href:"/docs/layout/box",color:"$primary11",fontWeight:"$semibold",children:"Box"})," ","with ",e(r,{children:"display: flex"})," and comes with helpful style shorthand. It renders a"," ",e(r,{children:"div"})," element."]}}),e(s,{id:"import",children:"Import"}),e(v,{get snippet(){return l.importComponent},mb:"$6"}),e(i.ul,{ps:"$6",mb:"$12",get children(){return[e(i.li,{mb:"$2",get children(){return[q.cloneNode(!0)," A ",e(r,{children:"Box"})," with ",e(r,{children:"display: flex"}),"."]}}),e(i.li,{get children(){return[A.cloneNode(!0)," Creates an adjustable, empty space that can be used to tune the spacing between child elements within ",e(r,{children:"Flex"}),"."]}})]}}),e(s,{id:"usage",children:"Usage"}),e(n,{mb:"$3",children:"Using the Flex components, here are some helpful shorthand props:"}),e(i.ul,{ps:"$6",mb:"$5",get children(){return[e(i.li,{mb:"$2",get children(){return[e(r,{children:"flexDirection"})," is ",e(r,{children:"direction"}),"."]}}),e(i.li,{get children(){return[e(r,{children:"flexWrap"})," is ",e(r,{children:"wrap"}),"."]}})]}}),e(n,{mb:"$5",children:"While you can pass the verbose props, using the shorthand can save you some time."}),e(c,{get snippet(){return l.basicUsage},mb:"$10",get children(){return e(o,{color:"white",get children(){return[e(h,{w:"100px",bg:"$success10",get children(){return e(n,{children:"Box 1"})}}),e(h,{boxSize:"150px",bg:"$info10",get children(){return e(n,{children:"Box 2"})}}),e(t,{flex:"1",bg:"tomato",get children(){return e(n,{children:"Box 3"})}})]}})}}),e(C,{id:"using-the-spacer",children:"Using the Spacer"}),e(n,{mb:"$5",get children(){return["As an alternative to ",e(r,{children:"Stack"}),", you can combine ",e(r,{children:"Flex"})," and"," ",e(r,{children:"Spacer"})," to create stackable and responsive layouts."]}}),e(c,{get snippet(){return l.usingSpacer},mb:"$12",get children(){return e(o,{get children(){return[e(t,{p:"$4",bg:"$danger9",children:"Box 1"}),e(a,{}),e(t,{p:"$4",bg:"$success9",children:"Box 2"})]}})}}),e(s,{id:"vs",children:"Flex and Spacer vs Grid vs Stack"}),e(n,{mb:"$4",get children(){return["The ",e(r,{children:"Flex"})," and ",e(r,{children:"Spacer"})," components, ",e(r,{children:"Grid"})," and"," ",e(r,{children:"HStack"})," treat children of different widths differently."]}}),e(i.ul,{ps:"$6",mb:"$6",get children(){return[e(i.li,{mb:"$2",get children(){return["With ",e(r,{children:"Flex"})," and ",e(r,{children:"Spacer"}),", the children will span the entire width of the container and also have equal spacing between them."]}}),e(i.li,{mb:"$2",get children(){return["In ",e(r,{children:"Grid"}),", the starting points of the children will be equally spaced but the gaps between them will not be equal."]}}),e(i.li,{get children(){return["In ",e(r,{children:"HStack"}),", the children will have equal spacing between them but they won't span the entire width of the container."]}})]}}),e(c,{get snippet(){return l.vs},mb:"$8",get children(){return e(t,{get children(){return[e(n,{children:"Flex and Spacer: Full width, equal spacing"}),e(o,{get children(){return[e(t,{w:"70px",h:"$10",bg:"$danger9"}),e(a,{}),e(t,{w:"170px",h:"$10",bg:"$danger9"}),e(a,{}),e(t,{w:"180px",h:"$10",bg:"$danger9"})]}}),e(n,{mt:"$4",children:"Grid: The children start at the beginning, the 1/3 mark and 2/3 mark"}),e(S,{templateColumns:"repeat(3, 1fr)",gap:"$6",get children(){return[e(t,{w:"70px",h:"$10",bg:"$info9"}),e(t,{w:"170px",h:"$10",bg:"$info9"}),e(t,{w:"180px",h:"$10",bg:"$info9"})]}}),e(n,{mt:"$4",children:"HStack: The children have equal spacing but don't span the whole container"}),e(B,{spacing:"24px",get children(){return[e(t,{w:"70px",h:"$10",bg:"$success9"}),e(t,{w:"170px",h:"$10",bg:"$success9"}),e(t,{w:"180px",h:"$10",bg:"$success9"})]}})]}})}}),e(n,{mb:"$5",get children(){return["A good use case for ",e(r,{children:"Spacer"})," is to create a navbar with a signup/login button aligned to the right."]}}),e(c,{get snippet(){return l.spacerUseCase},mb:"$12",get children(){return e(o,{get children(){return[e(t,{p:"$2",get children(){return e(F,{size:"xl",fontWeight:"$bold",children:"Hope App"})}}),e(a,{}),e(t,{get children(){return[e(p,{mr:"$4",children:"Sign Up"}),e(p,{children:"Log in"})]}})]}})}}),e(s,{id:"props",children:"Props"}),e(T,{items:$})]}})}export{M as default};
