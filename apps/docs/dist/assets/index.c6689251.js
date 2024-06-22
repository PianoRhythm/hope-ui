import{o as O,c as e,d as o,C as i,O as c,aV as h,y as T,A as n,V as t,W as m,B as r,aW as s,q as P}from"./index.b24ef594.js";import{C as b}from"./CodeSnippet.e0f59e1c.js";import{P as $,a as w}from"./PageTitle.689b44d7.js";import{P as a}from"./Preview.83a5c34f.js";import{P as p}from"./PropsTable.036b0dae.js";import{S as u}from"./SectionSubtitle.146d6d0d.js";import{S as l}from"./SectionTitle.29cc967c.js";import"./Footer.c8485bf8.js";const j=`import { 
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td
} from "@hope-ui/solid"`,H=`<Table>
  <TableCaption>Imperial to metric conversion factors</TableCaption>
  <Thead>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th numeric>multiply by</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>inches</Td>
      <Td>millimetres (mm)</Td>
      <Td numeric>25.4</Td>
    </Tr>
    <Tr>
      <Td>feet</Td>
      <Td>centimetres (cm)</Td>
      <Td numeric>30.48</Td>
    </Tr>
    <Tr>
      <Td>yards</Td>
      <Td>metres (m)</Td>
      <Td numeric>0.91444</Td>
    </Tr>
  </Tbody>
  <Tfoot>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th numeric>multiply by</Th>
    </Tr>
  </Tfoot>
</Table>`,U=`<Table striped="odd">
  <TableCaption>Imperial to metric conversion factors</TableCaption>
  <Thead>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th numeric>multiply by</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>inches</Td>
      <Td>millimetres (mm)</Td>
      <Td numeric>25.4</Td>
    </Tr>
    <Tr>
      <Td>feet</Td>
      <Td>centimetres (cm)</Td>
      <Td numeric>30.48</Td>
    </Tr>
    <Tr>
      <Td>yards</Td>
      <Td>metres (m)</Td>
      <Td numeric>0.91444</Td>
    </Tr>
  </Tbody>
  <Tfoot>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th numeric>multiply by</Th>
    </Tr>
  </Tfoot>
</Table>`,k=`<Table dense>
  <TableCaption>Imperial to metric conversion factors</TableCaption>
  <Thead>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th numeric>multiply by</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>inches</Td>
      <Td>millimetres (mm)</Td>
      <Td numeric>25.4</Td>
    </Tr>
    <Tr>
      <Td>feet</Td>
      <Td>centimetres (cm)</Td>
      <Td numeric>30.48</Td>
    </Tr>
    <Tr>
      <Td>yards</Td>
      <Td>metres (m)</Td>
      <Td numeric>0.91444</Td>
    </Tr>
  </Tbody>
  <Tfoot>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th numeric>multiply by</Th>
    </Tr>
  </Tfoot>
</Table>`,L=`<Table highlightOnHover>
  <TableCaption>Imperial to metric conversion factors</TableCaption>
  <Thead>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th numeric>multiply by</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>inches</Td>
      <Td>millimetres (mm)</Td>
      <Td numeric>25.4</Td>
    </Tr>
    <Tr>
      <Td>feet</Td>
      <Td>centimetres (cm)</Td>
      <Td numeric>30.48</Td>
    </Tr>
    <Tr>
      <Td>yards</Td>
      <Td>metres (m)</Td>
      <Td numeric>0.91444</Td>
    </Tr>
  </Tbody>
  <Tfoot>
    <Tr>
      <Th>To convert</Th>
      <Th>into</Th>
      <Th numeric>multiply by</Th>
    </Tr>
  </Tfoot>
</Table>`,A=`const config: HopeThemeConfig = {
  components: {
    Table: {
      baseStyle: {
        root: SystemStyleObject,
        caption: SystemStyleObject,
        thead: SystemStyleObject,
        tbody: SystemStyleObject,
        tfoot: SystemStyleObject,
        tr: SystemStyleObject,
        th: SystemStyleObject,
        td: SystemStyleObject,
      },
      defaultProps: {
        root: TableOptions,
        caption: ThemeableTableCaptionOptions,
      }
    }
  }
}`,d={importComponent:j,basicUsage:H,striped:U,dense:k,highlightOnHover:L,theming:A};function B(){const g={href:"/docs/data-display/list",label:"List"},y={href:"/docs/data-display/tag",label:"Tag"},f=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#striped",label:"Striped table",indent:!0},{href:"#dense",label:"Dense table",indent:!0},{href:"#row-highlight",label:"Row highlight",indent:!0},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"},{href:"#table-props",label:"Table props",indent:!0},{href:"#table-caption-props",label:"TableCaption props",indent:!0},{href:"#th-props",label:"Th props",indent:!0},{href:"#td-props",label:"Td props",indent:!0}],v=[{name:"striped",description:"Set a neutral background color on odd or even row of table.",type:'"odd" | "even"'},{name:"dense",description:"If `true`, row will have less padding and smaller font size.",type:"boolean"},{name:"highlightOnHover",description:"If `true`, row will have hover color.",type:"boolean"}],S=[{name:"placement",description:"The placement of the table caption. This sets the `caption-side` CSS attribute.",type:'"top" | "bottom"',defaultValue:'"bottom"'}],C=[{name:"numeric",description:"Aligns the cell content to the right.",type:"boolean"}],I=[{name:"numeric",description:"Aligns the cell content to the right.",type:"boolean"}];return O(()=>{P.highlightAll()}),e(w,{previousLink:g,nextLink:y,contextualNavLinks:f,get children(){return[e($,{children:"Table"}),e(o,{mb:"$5",get children(){return["Tables are used to organize and display data efficiently. It renders a ",e(i,{children:"table"})," ","element by default."]}}),e(l,{id:"import",children:"Import"}),e(b,{get snippet(){return d.importComponent},mb:"$12"}),e(l,{id:"usage",children:"Usage"}),e(a,{get snippet(){return d.basicUsage},mb:"$12",get children(){return e(c,{get children(){return[e(h,{children:"Imperial to metric conversion factors"}),e(T,{get children(){return e(n,{get children(){return[e(t,{children:"To convert"}),e(t,{children:"into"}),e(t,{numeric:!0,children:"multiply by"})]}})}}),e(m,{get children(){return[e(n,{get children(){return[e(r,{children:"inches"}),e(r,{children:"millimetres (mm)"}),e(r,{numeric:!0,children:"25.4"})]}}),e(n,{get children(){return[e(r,{children:"feet"}),e(r,{children:"centimetres (cm)"}),e(r,{numeric:!0,children:"30.48"})]}}),e(n,{get children(){return[e(r,{children:"yards"}),e(r,{children:"metres (m)"}),e(r,{numeric:!0,children:"0.91444"})]}})]}}),e(s,{get children(){return e(n,{get children(){return[e(t,{children:"To convert"}),e(t,{children:"into"}),e(t,{numeric:!0,children:"multiply by"})]}})}})]}})}}),e(l,{id:"striped",children:"Striped table"}),e(o,{mb:"$5",get children(){return["Use the ",e(i,{children:"striped"})," prop to render striped rows. You can set the value to"," ",e(i,{children:"even"})," or ",e(i,{children:"odd"}),"."]}}),e(a,{get snippet(){return d.striped},mb:"$12",get children(){return e(c,{striped:"odd",get children(){return[e(h,{children:"Imperial to metric conversion factors"}),e(T,{get children(){return e(n,{get children(){return[e(t,{children:"To convert"}),e(t,{children:"into"}),e(t,{numeric:!0,children:"multiply by"})]}})}}),e(m,{get children(){return[e(n,{get children(){return[e(r,{children:"inches"}),e(r,{children:"millimetres (mm)"}),e(r,{numeric:!0,children:"25.4"})]}}),e(n,{get children(){return[e(r,{children:"feet"}),e(r,{children:"centimetres (cm)"}),e(r,{numeric:!0,children:"30.48"})]}}),e(n,{get children(){return[e(r,{children:"yards"}),e(r,{children:"metres (m)"}),e(r,{numeric:!0,children:"0.91444"})]}})]}}),e(s,{get children(){return e(n,{get children(){return[e(t,{children:"To convert"}),e(t,{children:"into"}),e(t,{numeric:!0,children:"multiply by"})]}})}})]}})}}),e(l,{id:"dense",children:"Dense table"}),e(o,{mb:"$5",get children(){return["Use the ",e(i,{children:"dense"})," prop to reduce the table size."]}}),e(a,{get snippet(){return d.dense},mb:"$12",get children(){return e(c,{dense:!0,get children(){return[e(h,{children:"Imperial to metric conversion factors"}),e(T,{get children(){return e(n,{get children(){return[e(t,{children:"To convert"}),e(t,{children:"into"}),e(t,{numeric:!0,children:"multiply by"})]}})}}),e(m,{get children(){return[e(n,{get children(){return[e(r,{children:"inches"}),e(r,{children:"millimetres (mm)"}),e(r,{numeric:!0,children:"25.4"})]}}),e(n,{get children(){return[e(r,{children:"feet"}),e(r,{children:"centimetres (cm)"}),e(r,{numeric:!0,children:"30.48"})]}}),e(n,{get children(){return[e(r,{children:"yards"}),e(r,{children:"metres (m)"}),e(r,{numeric:!0,children:"0.91444"})]}})]}}),e(s,{get children(){return e(n,{get children(){return[e(t,{children:"To convert"}),e(t,{children:"into"}),e(t,{numeric:!0,children:"multiply by"})]}})}})]}})}}),e(l,{id:"row-highlight",children:"Row highlight"}),e(o,{mb:"$5",get children(){return["Use the ",e(i,{children:"highlightOnHover"})," prop to highlight row on hover."]}}),e(a,{get snippet(){return d.highlightOnHover},mb:"$12",get children(){return e(c,{highlightOnHover:!0,get children(){return[e(h,{children:"Imperial to metric conversion factors"}),e(T,{get children(){return e(n,{get children(){return[e(t,{children:"To convert"}),e(t,{children:"into"}),e(t,{numeric:!0,children:"multiply by"})]}})}}),e(m,{get children(){return[e(n,{get children(){return[e(r,{children:"inches"}),e(r,{children:"millimetres (mm)"}),e(r,{numeric:!0,children:"25.4"})]}}),e(n,{get children(){return[e(r,{children:"feet"}),e(r,{children:"centimetres (cm)"}),e(r,{numeric:!0,children:"30.48"})]}}),e(n,{get children(){return[e(r,{children:"yards"}),e(r,{children:"metres (m)"}),e(r,{numeric:!0,children:"0.91444"})]}})]}}),e(s,{get children(){return e(n,{get children(){return[e(t,{children:"To convert"}),e(t,{children:"into"}),e(t,{numeric:!0,children:"multiply by"})]}})}})]}})}}),e(l,{id:"theming",children:"Theming"}),e(o,{mb:"$5",get children(){return[e(i,{children:"Table"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),e(b,{lang:"js",get snippet(){return d.theming},mb:"$12"}),e(l,{id:"props",children:"Props"}),e(u,{id:"table-props",children:"Table props"}),e(p,{items:v,mb:"$10"}),e(u,{id:"table-caption-props",children:"TableCaption props"}),e(p,{items:S,mb:"$10"}),e(u,{id:"th-props",children:"Th props"}),e(p,{items:C,mb:"$10"}),e(u,{id:"td-props",children:"Td props"}),e(p,{items:I})]}})}export{B as default};
