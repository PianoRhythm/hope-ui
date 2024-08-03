import{o as k,i as C,bk as o,a as t,T as e,U as g,W as c,k as i,e as a,H as m,aM as P,V as H,t as s}from"./index.f26a4b39.js";import{C as h}from"./CodeSnippet.bd4db86c.js";import{P as I,a as B}from"./PageTitle.eadfe653.js";import{P as d}from"./Preview.1bca36d5.js";import{P as f}from"./PropsTable.2d19b9dd.js";import{S as n}from"./SectionSubtitle.1faf0cd9.js";import{S as p}from"./SectionTitle.16614efa.js";import"./Footer.d4a39ef1.js";const x=`import { 
  NotificationsProvider, 
  Notification,
  NotificationIcon,
  NotificationTitle,
  NotificationDescription,
  notificationService,
} from "@hope-ui/solid"`,A=`// 1. import \`NotificationsProvider\` component
import { HopeProvider, NotificationsProvider } from '@hope-ui/solid'

// 2. Wrap NotificationsProvider at the root of your app
function App() {
  return (
    <HopeProvider>
      <NotificationsProvider>
        <MyApp />
      </NotificationsProvider>
    </HopeProvider>
  )
}`,_=`import { notificationService } from '@hope-ui/solid'

function NotificationExample() {
  const showNotification = () => {
    notificationService.show({
      title: "Default notification",
      description: "Hey there, your code is awesome! \u{1F925}",
    })
  }

  return (
    <Button onClick={showNotification}>
      Show notification
    </Button>
  );
}`,q=`<Button
  onClick={() =>
      notificationService.show({
        status: "info", /* or success, warning, danger */
        title: "Info notification",
        description: "Hey there, your code is awesome! \u{1F925}",
      });
  }
>
  Show notification
</Button>`,U=`import { HopeProvider, NotificationsProvider } from '@hope-ui/solid'

function App() {
  return (
    <HopeProvider>
      <NotificationsProvider placement="bottom-end">
        <MyApp />
      </NotificationsProvider>
    </HopeProvider>
  )
}`,E=`<Button
  onClick={() =>
    notificationService.show({
      title: "Custom duration",
      description: "notification will be closed in 10 seconds",
      duration: 10_000, /* duration in ms */
    })
  }
>
  Show 10 seconds notification
</Button>`,L=`<Button
  onClick={() =>
    notificationService.show({
      title: "I will never close",
      description: "unless you click X",
      persistent: true,
    })
  }
>
  Show persistent notification
</Button>`,V=`<Button
  onClick={() =>
    notificationService.show({
      render: props => (
        <HStack
          bg="$loContrast"
          rounded="$md"
          border="1px solid $neutral7"
          shadow="$lg"
          p="$4"
          w="$full"
        >
          <Avatar name="Courtney Watson" src="https://bit.ly/3w2rgom" mr="$3" />
          <VStack alignItems="flex-start">
            <Text size="sm" fontWeight="$medium">
              Courtney Watson
            </Text>
            <Text size="sm" color="$neutral11">
              Sure! 8:30pm works great!
            </Text>
          </VStack>
          <Button
            variant="ghost"
            colorScheme="accent"
            size="sm"
            ml="auto"
            onClick={() => props.close()}
          >
            Reply
          </Button>
        </HStack>
      ),
    })
  }
>
  Show custom notification
</Button>`,D=`<HStack spacing="$4">
  <Button
    onClick={() =>
      notificationService.show({
        id: "notification-id", /* set a custom id */
        title: "Hidding notification",
        description: "Hey, you can't hide me...unless using the 'Hide' button",
        persistent: true,
        closable: false,
      })
    }
  >
    Show notification
  </Button>
  <Button
    variant="subtle"
    colorScheme="neutral"
    onClick={() => notificationService.hide("notification-id")} // use the same id
  >
    Hide notification
  </Button>
</HStack>`,W=`<Button
  onClick={() => {
    notificationService.show({
      id: "notification-id",
      title: "Loading your data",
      description: "Data will be loaded in 3 seconds, you cannot close this yet",
      persistent: true,
      closable: false,
      loading: true,
    });

    setTimeout(() => {
      notificationService.update({
        id: "notification-id",
        status: "success",
        title: "Data was loaded",
        description: "Notification will close in 2 seconds",
        duration: 2_000,
      });
    }, 3_000);
  }}
>
  Show upadate notification
</Button>`,z=`import { HopeProvider, NotificationsProvider } from '@hope-ui/solid'

function App() {
  return (
    <HopeProvider>
      <NotificationsProvider limit={10}>
        <MyApp />
      </NotificationsProvider>
    </HopeProvider>
  )
}`,Q=`<HStack spacing="$4">
  <Button
    onClick={() => {
      Array(20).fill(0).forEach((_, index) => {
        notificationService.show({
          title: \`Notification \${index + 1}\`,
          description: "Most notifications are added to queue",
        });
      });
    }}
  >
    Show 20 notifications
  </Button>
  <Button
    colorScheme="neutral"
    variant="subtle"
    onClick={() => notificationService.clearQueue()}
  >
    Clear queue
  </Button>
  <Button 
    colorScheme="danger" 
    variant="subtle" 
    onClick={() => notificationService.clear()}
  >
    Clear all
  </Button>
</HStack>`,M=`const config: HopeThemeConfig = {
  components: {
    Notification: {
      baseStyle: {
        root: SystemStyleConfig,
        icon: SystemStyleConfig,
        title: SystemStyleConfig,
        description: SystemStyleConfig,
      },
      defaultProps: {
        root: ThemeableNotificationOptions,
      }
    }
  }
}`,r={importComponent:x,setup:A,basicUsage:_,status:q,placement:U,duration:E,persistent:L,customComponent:V,hidding:D,updating:W,limitAndQueueSetup:z,limitAndQueue:Q,theming:M},R=s("<strong>NotificationsProvider:</strong>"),Y=s("<strong>Notification:</strong>"),j=s("<strong>NotificationIcon:</strong>"),O=s("<strong>NotificationTitle:</strong>"),X=s("<strong>NotificationDescription:</strong>"),F=s("<strong>notificationService:</strong>"),G=s("<strong>show:</strong>"),J=s("<strong>update:</strong>"),K=s("<strong>hide:</strong>"),Z=s("<strong>clear:</strong>"),tt=s("<strong>clearQueue:</strong>");function dt(){const b={href:"/docs/feedback/spinner",label:"Spinner"},v={href:"/docs/overlay/drawer",label:"Drawer"},w=[{href:"#import",label:"Import"},{href:"#usage",label:"Usage"},{href:"#notification-service-api",label:"The `notificationService` API",indent:!0},{href:"#notification-status",label:"Notification status",indent:!0},{href:"#notification-placement",label:"Notification placement",indent:!0},{href:"#notification-duration",label:"Notification duration",indent:!0},{href:"#persistent-notification",label:"Persistent notification",indent:!0},{href:"#using-custom-component",label:"Using custom component",indent:!0},{href:"#updating-notification",label:"Updating notification",indent:!0},{href:"#hidding-notification",label:"Hidding notification",indent:!0},{href:"#limit-and-queue",label:"Limit and queue",indent:!0},{href:"#theming",label:"Theming"},{href:"#props",label:"Props"},{href:"#notifications-provider-props",label:"NotificationsProvider props",indent:!0},{href:"#notification-props",label:"Notification props",indent:!0},{href:"#notification-service-show",label:"notificationService.show",indent:!0},{href:"#notification-service-update",label:"notificationService.update",indent:!0},{href:"#notification-service-hide",label:"notificationService.hide",indent:!0}],S=[{name:"placement",description:"The placement of all notifications",type:'"top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end"',defaultValue:'"top-end"'},{name:"limit",description:"Maximum amount of notifications displayed at a time, other new notifications will be added to queue.",type:"number",defaultValue:"10"},{name:"duration",description:"The delay (in ms) before notifications hides.",type:"number",defaultValue:"5000"},{name:"persistent",description:"If `true`, duration will be ignored and notifications will never dismiss.",type:"boolean",defaultValue:"false"},{name:"closable",description:"If `true`, notifications will show a close button.",type:"boolean",defaultValue:"true"},{name:"zIndex",description:"The `z-index` css property of the notifications container.",type:'PositionProps["zIndex"]',defaultValue:"$notification"}],y=[{name:"status",description:"The status of the notification. This affects the color scheme and icon used.",type:'"success" | "info" | "warning" | "danger"'}],$=[{name:"id",description:"The id of the notification, used to update and remove notification. By default, a unique id is generated for each notification.",type:"string"},{name:"status",description:"The status of the notification.",type:'"success" | "info" | "warning" | "danger"'},{name:"title",description:"The title of the notification.",type:"string"},{name:"description",description:"The description of the notification.",type:"string"},{name:"duration",description:"The delay (in ms) before the notification hides.",type:"number",defaultValue:"5000"},{name:"persistent",description:"If `true`, duration will be ignored and the notification will never dismiss.",type:"boolean",defaultValue:"false"},{name:"closable",description:"If `true`, the notification will show a close button.",type:"boolean",defaultValue:"true"},{name:"loading",description:"If `true`, the notification will show a loader.",type:"boolean"},{name:"onClose",description:"Callback function to run side effects after the notification has closed.",type:"(id: string) => void"},{name:"render",description:"Render a custom component. It will receive the notification `id` and a `close` function as render props.",type:"(props: NotificationConfigRenderProps) => JSX.Element"}],N=[{required:!0,name:"id",description:"The `id` of the notification.",type:"string"}];return k(()=>{C.highlightAll(),Array(3).fill(0).forEach((l,u)=>{let T=o.show({id:"notification-test-load",title:`Notification Test ${u+1}`,duration:2e3,description:"TEST TEST TEST"});console.log("SHOWING!",u,T)})}),t(B,{previousLink:b,nextLink:v,contextualNavLinks:w,get children(){return[t(I,{children:"Notification"}),t(e,{mb:"$5",children:"Notification give feedback to users after an action has taken place."}),t(p,{id:"import",children:"Import"}),t(h,{get snippet(){return r.importComponent},mb:"$6"}),t(g,{spacing:"$2",mb:"$12",get children(){return[t(c,{get children(){return[R.cloneNode(!0)," The component that provides the notification system."]}}),t(c,{get children(){return[Y.cloneNode(!0)," The wrapper for notification components."]}}),t(c,{get children(){return[j.cloneNode(!0)," The visual icon for the notification that changes based on the ",t(i,{children:"status"})," prop."]}}),t(c,{get children(){return[O.cloneNode(!0)," The title of the notification."]}}),t(c,{get children(){return[X.cloneNode(!0)," The description of the notification."]}}),t(c,{get children(){return[F.cloneNode(!0)," An utility object used to show/hide notifications."]}})]}}),t(p,{id:"usage",children:"Usage"}),t(e,{mb:"$5",get children(){return["Wrap your application with the ",t(i,{children:"NotificationsProvider"}),":"]}}),t(h,{get snippet(){return r.setup},mb:"$6"}),t(e,{mb:"$5",get children(){return["Then use the ",t(i,{children:"notificationService"})," anywhere in your application:"]}}),t(d,{get snippet(){return r.basicUsage},mb:"$10",get children(){return t(a,{onClick:()=>o.show({title:"Default notification",description:"Hey there, your code is awesome! \u{1F925}"}),children:"Show notification"})}}),t(n,{id:"notification-service-api",get children(){return["The ",t(i,{children:"notificationService"})," API"]}}),t(e,{mb:"$3",get children(){return["The notification system is based on custom events, Hope UI exports the following methods through the ",t(i,{children:"notificationService"})," object:"]}}),t(g,{spacing:"$2",mb:"$10",get children(){return[t(c,{get children(){return[G.cloneNode(!0)," adds given notification to notifications list or queue depending on current state and limit."]}}),t(c,{get children(){return[J.cloneNode(!0)," updates notification that was previously added to the state or queue."]}}),t(c,{get children(){return[K.cloneNode(!0)," removes notification with given id from notifications state and queue."]}}),t(c,{get children(){return[Z.cloneNode(!0)," removes all notifications from notifications state and queue."]}}),t(c,{get children(){return[tt.cloneNode(!0)," removes all notifications from queue."]}})]}}),t(n,{id:"notification-status",children:"Notification status"}),t(e,{mb:"$5",get children(){return["Use the ",t(i,{children:"status"})," parameter to change the status of the notification, this affects the icon used. You can set the value to ",t(i,{children:"success"}),", ",t(i,{children:"info"}),","," ",t(i,{children:"warning"})," or ",t(i,{children:"danger"}),"."]}}),t(d,{get snippet(){return r.status},mb:"$10",get children(){return t(a,{onClick:()=>["success","info","warning","danger"].forEach(l=>{o.show({status:l,title:`${l} notification`,description:"Hey there, your code is awesome! \u{1F925}"})}),children:"Show all notification statuses"})}}),t(n,{id:"notification-placement",children:"Notification placement"}),t(e,{mb:"$5",get children(){return[t(i,{children:"NotificationsProvider"})," renders notifications with fixed position inside a Portal. Position cannot be changed per notification. Use the ",t(i,{children:"placement"})," prop to define the placement. You can set the value to ",t(i,{children:"top-start"}),", ",t(i,{children:"top"}),","," ",t(i,{children:"top-end"}),", ",t(i,{children:"bottom-start"}),", ",t(i,{children:"bottom"})," or"," ",t(i,{children:"bottom-end"}),"."]}}),t(h,{get snippet(){return r.placement},mb:"$10"}),t(n,{id:"notification-duration",children:"Notification duration"}),t(e,{mb:"$5",get children(){return["Use the ",t(i,{children:"duration"})," parameter to change the duration of the notification. By default, notitification will dismiss after 5 seconds."]}}),t(d,{get snippet(){return r.duration},mb:"$10",get children(){return t(a,{onClick:()=>o.show({title:"Custom duration",description:"notification will be closed in 10 seconds",duration:1e4}),children:"Show 10 seconds notification"})}}),t(n,{id:"persistent-notification",children:"Persistent notification"}),t(e,{mb:"$5",get children(){return["Use the ",t(i,{children:"persistent"})," parameter to make the notification persistent. the duration will be ignored."]}}),t(d,{get snippet(){return r.persistent},mb:"$10",get children(){return t(a,{onClick:()=>o.show({title:"I will never close",description:"unless you click X",persistent:!0}),children:"Show persistent notification"})}}),t(n,{id:"using-custom-component",children:"Using custom component"}),t(e,{mb:"$5",get children(){return["Use the ",t(i,{children:"render"})," parameter to display a custom component instead of the default Hope UI ",t(i,{children:"Notification"}),"."]}}),t(d,{get snippet(){return r.customComponent},mb:"$10",get children(){return t(a,{onClick:()=>o.show({render:l=>t(m,{bg:"$loContrast",rounded:"$md",border:"1px solid $neutral7",shadow:"$lg",p:"$4",w:"$full",get children(){return[t(P,{name:"Courtney Watson",src:"https://bit.ly/3w2rgom",mr:"$3"}),t(H,{alignItems:"flex-start",get children(){return[t(e,{size:"sm",fontWeight:"$medium",children:"Courtney Watson"}),t(e,{size:"sm",color:"$neutral11",children:"Sure! 8:30pm works great!"})]}}),t(a,{variant:"ghost",colorScheme:"accent",size:"sm",ml:"auto",onClick:()=>l.close(),children:"Reply"})]}})}),children:"Show custom notification"})}}),t(n,{id:"updating-notification",children:"Updating notification"}),t(e,{mb:"$5",get children(){return["Use the ",t(i,{children:"update"})," method to update a specific notification. This method takes the same parameters as the ",t(i,{children:"show"})," method except that ",t(i,{children:"id"})," is required."]}}),t(d,{get snippet(){return r.updating},mb:"$10",get children(){return t(a,{onClick:()=>{o.show({id:"notification-id",title:"Loading your data",description:"Data will be loaded in 3 seconds, you cannot close this yet",persistent:!0,closable:!1,loading:!0}),setTimeout(()=>{o.update({id:"notification-id",status:"success",title:"Data was loaded",description:"Notification will close in 2 seconds",duration:2e3})},2e3)},children:"Show update notification"})}}),t(n,{id:"hidding-notification",children:"Hidding notification"}),t(e,{mb:"$5",get children(){return["Use the ",t(i,{children:"hide"})," method to dismiss a specific notification by passing its notification id."]}}),t(d,{get snippet(){return r.hidding},mb:"$10",get children(){return t(m,{spacing:"$4",get children(){return[t(a,{onClick:()=>o.show({id:"notification-id",title:"Hidding notification",description:"Hey, you can't hide me...unless using the 'Hide' button",persistent:!0,closable:!1}),children:"Show notification"}),t(a,{variant:"subtle",colorScheme:"neutral",onClick:()=>o.hide("notification-id"),children:"Hide notification"})]}})}}),t(n,{id:"limit-and-queue",children:" Limit and queue"}),t(e,{mb:"$5",get children(){return[t(i,{children:"NotificationsProvider"})," uses a queue to manage its state. You can limit maximum amount of notifications that can be displayed by setting the ",t(i,{children:"limit"})," prop."]}}),t(h,{get snippet(){return r.limitAndQueueSetup},mb:"$6"}),t(e,{mb:"$3",children:"All notifications added after limit was reached will be added into queue and displayed when notification from current state is closed."}),t(e,{mb:"$5",get children(){return["You can use the ",t(i,{children:"clearQueue"})," method to remove all notifications that are not currently displayed and the ",t(i,{children:"clear"})," method to remove all notifications from state and queue."]}}),t(d,{get snippet(){return r.limitAndQueue},mb:"$12",get children(){return t(m,{spacing:"$4",get children(){return[t(a,{onClick:()=>{Array(3).fill(0).forEach((l,u)=>{o.show({id:"notification-test",title:`Notification Test ${u+1}`,duration:1250,loading:!0,description:"TEST TEST TEST"})}),Array(3).fill(0).forEach((l,u)=>{o.show({id:"notification-test2",title:`Notification Test ${u+1}`,duration:2250,loading:!0,description:"TEST TEST TEST"})}),setTimeout(()=>{o.hide("notification-test"),o.hide("notification-test"),console.log("CLOSING!")},2e3)},children:"Show 20 notifications"}),t(a,{colorScheme:"neutral",variant:"subtle",onClick:()=>o.clearQueue(),children:"Clear queue"}),t(a,{colorScheme:"danger",variant:"subtle",onClick:()=>o.clear(),children:"Clear all"})]}})}}),t(p,{id:"theming",children:"Theming"}),t(e,{mb:"$5",get children(){return[t(i,{children:"Notification"})," base styles and default props can be overridden in the Hope UI theme configuration like below:"]}}),t(h,{lang:"js",get snippet(){return r.theming},mb:"$12"}),t(p,{id:"props",children:"Props"}),t(n,{id:"notifications-provider-props",children:"NotificationsProvider props"}),t(f,{items:S,mb:"$10"}),t(n,{id:"notification-props",children:"Notification props"}),t(f,{items:y,mb:"$10"}),t(n,{id:"notification-service-show",get children(){return["notificationService.",t(i,{children:"show"})]}}),t(f,{items:$,mb:"$10"}),t(n,{id:"notification-service-update",get children(){return["notificationService.",t(i,{children:"update"})]}}),t(e,{mb:"$10",get children(){return["The ",t(i,{children:"update"})," method takes the same parameters as the ",t(i,{children:"show"})," method except that ",t(i,{children:"id"})," is required."]}}),t(n,{id:"notification-service-hide",get children(){return["notificationService.",t(i,{children:"hide"})]}}),t(f,{items:N,mb:"$10"})]}})}export{dt as default};
