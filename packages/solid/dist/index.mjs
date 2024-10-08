import { isServer as Rt, createComponent as i, Dynamic as Ct, mergeProps as b, Portal as it, ssr as le, ssrHydrationKey as ce, ssrAttribute as j, escape as Q } from "solid-js/web";
import { createContext as ae, mergeProps as Z, createSignal as oe, createEffect as ve, useContext as re, splitProps as v, createMemo as we, Show as O, createUniqueId as de, onMount as ue, onCleanup as be, children as lt, createRenderEffect as Hs, Switch as Ar, Match as $t, on as ft, For as Er, Index as As } from "solid-js";
import { createStore as ie } from "solid-js/store";
import { createStitches as Es, defaultThemeMap as Ms } from "@stitches/core";
import Cr from "lodash.merge";
import { offset as yt, flip as wt, shift as _t, autoUpdate as It, computePosition as Wt, inline as Mr, arrow as Or, hide as Rr, size as Os } from "@floating-ui/dom";
import { useFloating as Rs } from "solid-floating-ui";
import { Transition as Oe, TransitionGroup as Ws } from "solid-transition-group";
import { createFocusTrap as Wr } from "focus-trap";
const Fr = process.env.NODE_ENV !== "production";
function Fs(e) {
  return typeof e == "number";
}
function pt(e) {
  return Array.isArray(e);
}
function Ft(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !pt(e);
}
function Ae(e) {
  return typeof e == "function";
}
function Nr(e) {
  return e == null;
}
function Ns(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function wp(e) {
  return typeof e > "u" || e === void 0;
}
function $r() {
}
function _p(e) {
  return e;
}
function Vs(e, t) {
  return Ft(e) ? Object.keys(e).reduce((r, o) => (r[o] = t(e[o]), r), {}) : e != null ? t(e) : null;
}
function he(e, t) {
  return e && (Ae(e) ? e(t) : e[0](e[1], t)), t == null ? void 0 : t.defaultPrevented;
}
function me(...e) {
  return function(t) {
    e.some((r) => he(r, t));
  };
}
function qs(e) {
  return Array(e).fill(1).map((t, r) => r + 1);
}
const js = {
  classList: { add: $r, remove: $r }
}, Vr = () => typeof Storage < "u", qr = "hope-ui-color-mode", ht = {
  light: "hope-ui-light",
  dark: "hope-ui-dark"
};
function Ks() {
  if (!Vr())
    return null;
  try {
    return localStorage.getItem(qr);
  } catch (e) {
    return Fr && console.log(e), null;
  }
}
function Us(e) {
  if (!!Vr())
    try {
      localStorage.setItem(qr, e);
    } catch (t) {
      Fr && console.log(t);
    }
}
function Xs(e) {
  const t = Ks();
  return t || (e === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e);
}
function Qs(e) {
  return e ? ht.dark : ht.light;
}
function Ys(e) {
  const t = Rt ? js : document.body;
  t.classList.add(Qs(e)), t.classList.remove(e ? ht.light : ht.dark);
}
const jr = {
  px: "1px",
  "0_5": "0.125rem",
  1: "0.25rem",
  "1_5": "0.375rem",
  2: "0.5rem",
  "2_5": "0.625rem",
  3: "0.75rem",
  "3_5": "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
}, Le = {
  ...jr,
  prose: "65ch",
  max: "max-content",
  min: "min-content",
  full: "100%",
  screenW: "100vw",
  screenH: "100vh",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  containerDesktopS: "492px",
  containerMobileS: "320px",
  containerMobileM: "375px",
  containerMobileL: "425px",
  containerSm: "640px",
  containerMd: "768px",
  containerLg: "1024px",
  containerXl: "1280px",
  container2xl: "1536px"
}, Zs = {
  desktop_s: `(min-width: ${Le.containerDesktopS})`,
  mobile_s: `(min-width: ${Le.containerMobileS})`,
  mobile_m: `(min-width: ${Le.containerMobileM})`,
  mobile_l: `(min-width: ${Le.containerMobileL})`,
  sm: `(min-width: ${Le.containerSm})`,
  md: `(min-width: ${Le.containerMd})`,
  lg: `(min-width: ${Le.containerLg})`,
  xl: `(min-width: ${Le.containerXl})`,
  "2xl": `(min-width: ${Le.container2xl})`,
  "reduce-motion": "(prefers-reduced-motion: reduce)",
  light: "(prefers-color-scheme: light)",
  dark: "(prefers-color-scheme: dark)"
}, Js = {
  bg: (e) => ({ background: e }),
  bgColor: (e) => ({ backgroundColor: e })
}, Gs = {
  borderX: (e) => ({
    borderLeft: e,
    borderRight: e
  }),
  borderY: (e) => ({
    borderTop: e,
    borderBottom: e
  })
}, ei = {
  d: (e) => ({ display: e })
}, ti = {
  m: (e) => ({ margin: e }),
  mt: (e) => ({ marginTop: e }),
  mr: (e) => ({ marginRight: e }),
  marginStart: (e) => ({ marginInlineStart: e }),
  ms: (e) => ({ marginInlineStart: e }),
  mb: (e) => ({ marginBottom: e }),
  ml: (e) => ({ marginLeft: e }),
  marginEnd: (e) => ({ marginInlineEnd: e }),
  me: (e) => ({ marginInlineEnd: e }),
  mx: (e) => ({
    marginInlineStart: e,
    marginInlineEnd: e
  }),
  my: (e) => ({ marginTop: e, marginBottom: e }),
  spaceX: (e) => ({
    "& > * + *": {
      marginLeft: e
    }
  }),
  spaceY: (e) => ({
    "& > * + *": {
      marginTop: e
    }
  })
}, ri = {
  p: (e) => ({ padding: e }),
  pt: (e) => ({ paddingTop: e }),
  pr: (e) => ({ paddingRight: e }),
  paddingStart: (e) => ({ paddingInlineStart: e }),
  ps: (e) => ({ paddingInlineStart: e }),
  pb: (e) => ({ paddingBottom: e }),
  pl: (e) => ({ paddingLeft: e }),
  pe: (e) => ({ paddingInlineEnd: e }),
  paddingEnd: (e) => ({ paddingInlineEnd: e }),
  px: (e) => ({
    paddingInlineStart: e,
    paddingInlineEnd: e
  }),
  py: (e) => ({ paddingTop: e, paddingBottom: e })
}, oi = {
  pos: (e) => ({ position: e })
};
function Ee(...e) {
  return e.map((t) => `[role=group]${t} &, [data-group]${t} &, .group${t} &`).join(", ");
}
function Be(...e) {
  return e.map((t) => `[data-peer]${t} ~ &, .peer${t} ~ &`).join(", ");
}
const ni = {
  _hover: (e) => ({
    "&:hover, &[data-hover]": e
  }),
  _active: (e) => ({
    "&:active, &[data-active]": e
  }),
  _focus: (e) => ({
    "&:focus, &[data-focus]": e
  }),
  _highlighted: (e) => ({
    "&[data-highlighted]": e
  }),
  _focusWithin: (e) => ({
    "&:focus-within": e
  }),
  _focusVisible: (e) => ({
    "&:focus-visible": e
  }),
  _disabled: (e) => ({
    "&[disabled], &[aria-disabled=true], &[data-disabled]": e
  }),
  _readOnly: (e) => ({
    "&[aria-readonly=true], &[readonly], &[data-readonly]": e
  }),
  _before: (e) => ({
    "&::before": e
  }),
  _after: (e) => ({
    "&::after": e
  }),
  _empty: (e) => ({
    "&:empty": e
  }),
  _expanded: (e) => ({
    "&[aria-expanded=true], &[data-expanded]": e
  }),
  _checked: (e) => ({
    "&[aria-checked=true], &[data-checked]": e
  }),
  _grabbed: (e) => ({
    "&[aria-grabbed=true], &[data-grabbed]": e
  }),
  _pressed: (e) => ({
    "&[aria-pressed=true], &[data-pressed]": e
  }),
  _invalid: (e) => ({
    "&[aria-invalid=true], &[data-invalid]": e
  }),
  _valid: (e) => ({
    "&[data-valid], &[data-state=valid]": e
  }),
  _loading: (e) => ({
    "&[data-loading], &[aria-busy=true]": e
  }),
  _selected: (e) => ({
    "&[aria-selected=true], &[data-selected]": e
  }),
  _hidden: (e) => ({
    "&[hidden], &[data-hidden]": e
  }),
  _even: (e) => ({
    "&:nth-of-type(even)": e
  }),
  _odd: (e) => ({
    "&:nth-of-type(odd)": e
  }),
  _first: (e) => ({
    "&:first-of-type": e
  }),
  _last: (e) => ({
    "&:last-of-type": e
  }),
  _notFirst: (e) => ({
    "&:not(:first-of-type)": e
  }),
  _notLast: (e) => ({
    "&:not(:last-of-type)": e
  }),
  _visited: (e) => ({
    "&:visited": e
  }),
  _activeLink: (e) => ({
    "&[aria-current=page]": e
  }),
  _activeStep: (e) => ({
    "&[aria-current=step]": e
  }),
  _indeterminate: (e) => ({
    "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]": e
  }),
  _groupHover: (e) => ({
    [Ee(":hover", "[data-hover]")]: e
  }),
  _peerHover: (e) => ({
    [Be(":hover", "[data-hover]")]: e
  }),
  _groupFocus: (e) => ({
    [Ee(":focus", "[data-focus]")]: e
  }),
  _peerFocus: (e) => ({
    [Be(":focus", "[data-focus]")]: e
  }),
  _groupFocusVisible: (e) => ({
    [Ee(":focus-visible")]: e
  }),
  _peerFocusVisible: (e) => ({
    [Be(":focus-visible")]: e
  }),
  _groupActive: (e) => ({
    [Ee(":active", "[data-active]")]: e
  }),
  _peerActive: (e) => ({
    [Be(":active", "[data-active]")]: e
  }),
  _groupSelected: (e) => ({
    [Ee("[aria-selected=true]", "[data-selected]")]: e
  }),
  _peerSelected: (e) => ({
    [Be("[aria-selected=true]", "[data-selected]")]: e
  }),
  _groupDisabled: (e) => ({
    [Ee(":disabled", "[data-disabled]")]: e
  }),
  _peerDisabled: (e) => ({
    [Be(":disabled", "[data-disabled]")]: e
  }),
  _groupInvalid: (e) => ({
    [Ee(":invalid", "[data-invalid]")]: e
  }),
  _peerInvalid: (e) => ({
    [Be(":invalid", "[data-invalid]")]: e
  }),
  _groupChecked: (e) => ({
    [Ee(":checked", "[data-checked]")]: e
  }),
  _peerChecked: (e) => ({
    [Be(":checked", "[data-checked]")]: e
  }),
  _groupFocusWithin: (e) => ({
    [Ee(":focus-within")]: e
  }),
  _peerFocusWithin: (e) => ({
    [Be(":focus-within")]: e
  }),
  _peerPlaceholderShown: (e) => ({
    [Be(":placeholder-shown")]: e
  }),
  _placeholder: (e) => ({
    "&::placeholder": e
  }),
  _placeholderShown: (e) => ({
    "&:placeholder-shown": e
  }),
  _fullScreen: (e) => ({
    "&:fullscreen": e
  }),
  _selection: (e) => ({
    "&::selection": e
  }),
  _mediaDark: (e) => ({
    "@media (prefers-color-scheme: dark)": e
  }),
  _mediaReduceMotion: (e) => ({
    "@media (prefers-reduced-motion: reduce)": e
  }),
  _dark: (e) => ({
    ".hope-ui-dark &": e
  }),
  _light: (e) => ({
    ".hope-ui-light &": e
  })
}, ai = {
  borderTopRadius: (e) => ({
    borderTopLeftRadius: e,
    borderTopRightRadius: e
  }),
  borderRightRadius: (e) => ({
    borderTopRightRadius: e,
    borderBottomRightRadius: e
  }),
  borderStartRadius: (e) => ({
    borderStartStartRadius: e,
    borderEndStartRadius: e
  }),
  borderBottomRadius: (e) => ({
    borderBottomLeftRadius: e,
    borderBottomRightRadius: e
  }),
  borderLeftRadius: (e) => ({
    borderTopLeftRadius: e,
    borderBottomLeftRadius: e
  }),
  borderEndRadius: (e) => ({
    borderStartEndRadius: e,
    borderEndEndRadius: e
  }),
  rounded: (e) => ({
    borderRadius: e
  }),
  roundedTop: (e) => ({
    borderTopLeftRadius: e,
    borderTopRightRadius: e
  }),
  roundedRight: (e) => ({
    borderTopRightRadius: e,
    borderBottomRightRadius: e
  }),
  roundedStart: (e) => ({
    borderStartStartRadius: e,
    borderEndStartRadius: e
  }),
  roundedBottom: (e) => ({
    borderBottomLeftRadius: e,
    borderBottomRightRadius: e
  }),
  roundedLeft: (e) => ({
    borderTopLeftRadius: e,
    borderBottomLeftRadius: e
  }),
  roundedEnd: (e) => ({
    borderStartEndRadius: e,
    borderEndEndRadius: e
  })
}, si = {
  shadow: (e) => ({ boxShadow: e })
}, ii = {
  w: (e) => ({ width: e }),
  minW: (e) => ({ minWidth: e }),
  maxW: (e) => ({ maxWidth: e }),
  h: (e) => ({ height: e }),
  minH: (e) => ({ minHeight: e }),
  maxH: (e) => ({ maxHeight: e }),
  boxSize: (e) => ({ width: e, height: e })
}, li = {
  noOfLines: (e) => ({
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": e
  })
}, ci = {
  ...Js,
  ...Gs,
  ...ei,
  ...oi,
  ...ni,
  ...ai,
  ...ti,
  ...ri,
  ...si,
  ...ii,
  ...li
}, Kr = {
  tooltipContent: "#00000090",
  tooltipArrow: "#00000090"
}, di = {
  blackAlpha1: "#00000003",
  blackAlpha2: "#00000007",
  blackAlpha3: "#0000000c",
  blackAlpha4: "#00000012",
  blackAlpha5: "#00000017",
  blackAlpha6: "#0000001d",
  blackAlpha7: "#00000024",
  blackAlpha8: "#00000038",
  blackAlpha9: "#00000070",
  blackAlpha10: "#0000007a",
  blackAlpha11: "#00000090",
  blackAlpha12: "#000000e8"
}, ui = {
  whiteAlpha1: "#ffffff00",
  whiteAlpha2: "#ffffff03",
  whiteAlpha3: "#ffffff09",
  whiteAlpha4: "#ffffff0e",
  whiteAlpha5: "#ffffff16",
  whiteAlpha6: "#ffffff20",
  whiteAlpha7: "#ffffff2d",
  whiteAlpha8: "#ffffff3f",
  whiteAlpha9: "#ffffff62",
  whiteAlpha10: "#ffffff72",
  whiteAlpha11: "#ffffff97",
  whiteAlpha12: "#ffffffeb"
}, gi = {
  ...di,
  ...ui
}, fi = {
  primary1: "#fafdfe",
  primary2: "#f2fcfd",
  primary3: "#e7f9fb",
  primary4: "#d8f3f6",
  primary5: "#c4eaef",
  primary6: "#aadee6",
  primary7: "#84cdda",
  primary8: "#3db9cf",
  primary9: "#05a2c2",
  primary10: "#0894b3",
  primary11: "#0c7792",
  primary12: "#04313c"
}, pi = {
  accent1: "#fdfcfe",
  accent2: "#fbfaff",
  accent3: "#f5f2ff",
  accent4: "#ede9fe",
  accent5: "#e4defc",
  accent6: "#d7cff9",
  accent7: "#c4b8f3",
  accent8: "#aa99ec",
  accent9: "#6e56cf",
  accent10: "#644fc1",
  accent11: "#5746af",
  accent12: "#20134b"
}, hi = {
  neutral1: "#fbfcfd",
  neutral2: "#f8f9fa",
  neutral3: "#f1f3f5",
  neutral4: "#eceef0",
  neutral5: "#e6e8eb",
  neutral6: "#dfe3e6",
  neutral7: "#d7dbdf",
  neutral8: "#c1c8cd",
  neutral9: "#889096",
  neutral10: "#7e868c",
  neutral11: "#687076",
  neutral12: "#11181c"
}, bi = {
  success1: "#fbfefc",
  success2: "#f2fcf5",
  success3: "#e9f9ee",
  success4: "#ddf3e4",
  success5: "#ccebd7",
  success6: "#b4dfc4",
  success7: "#92ceac",
  success8: "#5bb98c",
  success9: "#30a46c",
  success10: "#299764",
  success11: "#18794e",
  success12: "#153226"
}, mi = {
  info1: "#fbfdff",
  info2: "#f5faff",
  info3: "#edf6ff",
  info4: "#e1f0ff",
  info5: "#cee7fe",
  info6: "#b7d9f8",
  info7: "#96c7f2",
  info8: "#5eb0ef",
  info9: "#0091ff",
  info10: "#0081f1",
  info11: "#006adc",
  info12: "#00254d"
}, vi = {
  warning1: "#fefdfb",
  warning2: "#fff9ed",
  warning3: "#fff4d5",
  warning4: "#ffecbc",
  warning5: "#ffe3a2",
  warning6: "#ffd386",
  warning7: "#f3ba63",
  warning8: "#ee9d2b",
  warning9: "#ffb224",
  warning10: "#ffa01c",
  warning11: "#ad5700",
  warning12: "#4e2009"
}, Si = {
  danger1: "#fffcfc",
  danger2: "#fff8f8",
  danger3: "#ffefef",
  danger4: "#ffe5e5",
  danger5: "#fdd8d8",
  danger6: "#f9c6c6",
  danger7: "#f3aeaf",
  danger8: "#eb9091",
  danger9: "#e5484d",
  danger10: "#dc3d43",
  danger11: "#cd2b31",
  danger12: "#381316"
}, xi = {
  loContrast: "white",
  background: "$loContrast",
  focusRing: "#96c7f2",
  closeButtonHoverBackground: "$blackAlpha4",
  closeButtonActiveBackground: "$blackAlpha5",
  progressStripe: "$whiteAlpha6"
}, Ci = {
  ...Kr,
  ...fi,
  ...pi,
  ...hi,
  ...bi,
  ...mi,
  ...vi,
  ...Si,
  ...xi
}, $i = {
  primary1: "#07191d",
  primary2: "#061e24",
  primary3: "#072830",
  primary4: "#07303b",
  primary5: "#073844",
  primary6: "#064150",
  primary7: "#045063",
  primary8: "#00647d",
  primary9: "#05a2c2",
  primary10: "#00b1cc",
  primary11: "#00c2d7",
  primary12: "#e1f8fa"
}, yi = {
  accent1: "#17151f",
  accent2: "#1c172b",
  accent3: "#251e40",
  accent4: "#2c2250",
  accent5: "#32275f",
  accent6: "#392c72",
  accent7: "#443592",
  accent8: "#5842c3",
  accent9: "#6e56cf",
  accent10: "#7c66dc",
  accent11: "#9e8cfc",
  accent12: "#f1eefe"
}, wi = {
  neutral1: "#151718",
  neutral2: "#1a1d1e",
  neutral3: "#202425",
  neutral4: "#26292b",
  neutral5: "#2b2f31",
  neutral6: "#313538",
  neutral7: "#3a3f42",
  neutral8: "#4c5155",
  neutral9: "#697177",
  neutral10: "#787f85",
  neutral11: "#9ba1a6",
  neutral12: "#ecedee"
}, _i = {
  success1: "#0d1912",
  success2: "#0c1f17",
  success3: "#0f291e",
  success4: "#113123",
  success5: "#133929",
  success6: "#164430",
  success7: "#1b543a",
  success8: "#236e4a",
  success9: "#30a46c",
  success10: "#3cb179",
  success11: "#4cc38a",
  success12: "#e5fbeb"
}, Ii = {
  info1: "#0f1720",
  info2: "#0f1b2d",
  info3: "#10243e",
  info4: "#102a4c",
  info5: "#0f3058",
  info6: "#0d3868",
  info7: "#0a4481",
  info8: "#0954a5",
  info9: "#0091ff",
  info10: "#369eff",
  info11: "#52a9ff",
  info12: "#eaf6ff"
}, ki = {
  warning1: "#1f1300",
  warning2: "#271700",
  warning3: "#341c00",
  warning4: "#3f2200",
  warning5: "#4a2900",
  warning6: "#573300",
  warning7: "#693f05",
  warning8: "#824e00",
  warning9: "#ffb224",
  warning10: "#ffcb47",
  warning11: "#f1a10d",
  warning12: "#fef3dd"
}, Pi = {
  danger1: "#1f1315",
  danger2: "#291415",
  danger3: "#3c181a",
  danger4: "#481a1d",
  danger5: "#541b1f",
  danger6: "#671e22",
  danger7: "#822025",
  danger8: "#aa2429",
  danger9: "#e5484d",
  danger10: "#f2555a",
  danger11: "#ff6369",
  danger12: "#feecee"
}, Ti = {
  loContrast: "$neutral1",
  background: "$loContrast",
  focusRing: "#0a4481",
  closeButtonHoverBackground: "$whiteAlpha4",
  closeButtonActiveBackground: "$whiteAlpha5",
  progressStripe: "$blackAlpha6"
}, zi = {
  ...Kr,
  ...$i,
  ...yi,
  ...wi,
  ..._i,
  ...Ii,
  ...ki,
  ...Pi,
  ...Ti
}, Bi = {
  none: "0",
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, Li = {
  none: "0 0 #0000",
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  sm: "0 1px 3px 0 rgb(0 0 0 / 0.09), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.09), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.09), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.09), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.24)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.06)",
  outline: "0 0 0 3px $colors$focusRing"
}, Di = {
  lg: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
}, Hi = {
  sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol","Noto Color Emoji"',
  serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
}, Ai = {
  "2xs": "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem"
}, Ei = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
}, Mi = {
  normal: "normal",
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: 2,
  3: ".75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem"
}, Oi = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em"
}, Ri = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  sticky: 1e3,
  banner: 1100,
  overlay: 1200,
  modal: 1300,
  dropdown: 1400,
  popover: 1500,
  tooltip: 1600,
  skipLink: 1700,
  notification: 1800
}, Wi = {
  colors: {
    ...gi,
    ...Ci
  },
  space: jr,
  sizes: Le,
  fonts: Hi,
  fontSizes: Ai,
  fontWeights: Ei,
  letterSpacings: Oi,
  lineHeights: Mi,
  radii: Bi,
  shadows: Li,
  zIndices: Ri
}, Fi = {
  colors: zi,
  shadows: Di
}, {
  theme: Ni,
  css: S,
  globalCss: Ne,
  config: Ip,
  createTheme: Vi,
  getCssText: kp,
  keyframes: bt
} = Es({
  prefix: "hope",
  themeMap: {
    ...Ms,
    borderWidth: "sizes",
    borderTopWidth: "sizes",
    borderRightWidth: "sizes",
    borderBottomWidth: "sizes",
    borderLeftWidth: "sizes",
    strokeWidth: "sizes"
  },
  theme: Wi,
  media: Zs,
  utils: ci
}), fe = {
  fade: "hope-modal-fade-transition",
  fadeInBottom: "hope-modal-fade-in-bottom-transition",
  scale: "hope-modal-scale-transition"
}, qi = Ne({
  [`.${fe.fade}-enter, .${fe.fade}-exit-to`]: {
    opacity: 0
  },
  [`.${fe.fade}-enter-to, .${fe.fade}-exit`]: {
    opacity: 1
  },
  [`.${fe.fade}-enter-active`]: {
    transition: "opacity 300ms ease-out"
  },
  [`.${fe.fade}-exit-active`]: {
    transition: "opacity 200ms ease-in"
  },
  [`.${fe.fadeInBottom}-enter, .${fe.fadeInBottom}-exit-to`]: {
    opacity: 0,
    transform: "translateY(16px)"
  },
  [`.${fe.fadeInBottom}-enter-to, .${fe.fadeInBottom}-exit`]: {
    opacity: 1,
    transform: "translateY(0)"
  },
  [`.${fe.fadeInBottom}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-out"
  },
  [`.${fe.fadeInBottom}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-in"
  },
  [`.${fe.scale}-enter, .${fe.scale}-exit-to`]: {
    opacity: 0,
    transform: "scale(0.95)"
  },
  [`.${fe.scale}-enter-to, .${fe.scale}-exit`]: {
    opacity: 1,
    transform: "scale(1)"
  },
  [`.${fe.scale}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-out"
  },
  [`.${fe.scale}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-in"
  }
}), Ur = S({
  zIndex: "$overlay",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "hsl(0 0% 0% / 65%)"
}), Xr = S({
  zIndex: "$modal",
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  width: "100vw",
  height: "100vh",
  "@supports(height: -webkit-fill-available)": {
    height: "-webkit-fill-available"
  },
  outline: "none",
  "&:focus": {
    outline: "none"
  }
}), ji = S(Xr, {
  justifyContent: "center",
  variants: {
    centered: {
      true: {
        alignItems: "center"
      },
      false: {
        alignItems: "flex-start"
      }
    },
    scrollBehavior: {
      inside: {
        overflow: "hidden"
      },
      outside: {
        overflow: "auto"
      }
    }
  }
}), Qr = S({
  zIndex: "$modal",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  outline: "none",
  boxShadow: "$lg",
  backgroundColor: "$loContrast",
  color: "inherit",
  "&:focus": {
    outline: "none"
  }
}), Ki = S(Qr, {
  justifyContent: "center",
  my: "3.75rem",
  borderRadius: "$sm",
  variants: {
    size: {
      xs: {
        maxWidth: "$xs"
      },
      sm: {
        maxWidth: "$sm"
      },
      md: {
        maxWidth: "$md"
      },
      lg: {
        maxWidth: "$lg"
      },
      xl: {
        maxWidth: "$xl"
      },
      "2xl": {
        maxWidth: "$2xl"
      },
      "3xl": {
        maxWidth: "$3xl"
      },
      "4xl": {
        maxWidth: "$4xl"
      },
      "5xl": {
        maxWidth: "$5xl"
      },
      "6xl": {
        maxWidth: "$6xl"
      },
      "7xl": {
        maxWidth: "$7xl"
      },
      "8xl": {
        maxWidth: "$8xl"
      },
      full: {
        maxWidth: "100vw",
        minHeight: "100vh",
        "@supports(min-height: -webkit-fill-available)": {
          minHeight: "-webkit-fill-available"
        },
        my: 0,
        borderRadius: "$none"
      }
    },
    scrollBehavior: {
      inside: {
        maxHeight: "calc(100% - 7.5rem)"
      },
      outside: {
        maxHeight: "none"
      }
    }
  }
}), Ui = S({
  flex: 0,
  pt: "$5",
  px: "$5",
  pb: "$3",
  fontSize: "$lg",
  fontWeight: "$medium"
}), Xi = S({
  flex: 1,
  px: "$5",
  py: "$2",
  variants: {
    scrollBehavior: {
      inside: {
        overflow: "auto"
      },
      outside: {
        overflow: void 0
      }
    }
  }
}), Qi = S({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  pt: "$3",
  px: "$5",
  pb: "$5"
}), Yi = S({
  position: "absolute",
  top: "$4",
  insetInlineEnd: "$4"
}), G = {
  fade: "hope-drawer-fade-transition",
  slideInTop: "hope-drawer-slide-in-top-transition",
  slideInRight: "hope-drawer-slide-in-right-transition",
  slideInBottom: "hope-drawer-slide-in-bottom-transition",
  slideInLeft: "hope-drawer-slide-in-left-transition"
}, Zi = Ne({
  [`.${G.fade}-enter, .${G.fade}-exit-to`]: {
    opacity: 0
  },
  [`.${G.fade}-enter-to, .${G.fade}-exit`]: {
    opacity: 1
  },
  [`.${G.fade}-enter-active, .${G.fade}-exit-active`]: {
    transition: "opacity 500ms ease-in-out"
  },
  [`.${G.slideInTop}-enter-active, .${G.slideInTop}-exit-active,
    .${G.slideInRight}-enter-active, .${G.slideInRight}-exit-active,
    .${G.slideInBottom}-enter-active, .${G.slideInBottom}-exit-active,
    .${G.slideInLeft}-enter-active, .${G.slideInLeft}-exit-active`]: {
    transition: "transform 500ms ease-in-out"
  },
  [`.${G.slideInTop}-enter, .${G.slideInTop}-exit-to`]: {
    transform: "translateY(-100%)"
  },
  [`.${G.slideInTop}-enter-to, .${G.slideInTop}-exit`]: {
    transform: "translateY(0)"
  },
  [`.${G.slideInRight}-enter, .${G.slideInRight}-exit-to`]: {
    transform: "translateX(100%)"
  },
  [`.${G.slideInRight}-enter-to, .${G.slideInRight}-exit`]: {
    transform: "translateX(0)"
  },
  [`.${G.slideInBottom}-enter, .${G.slideInBottom}-exit-to`]: {
    transform: "translateY(100%)"
  },
  [`.${G.slideInBottom}-enter-to, .${G.slideInBottom}-exit`]: {
    transform: "translateY(0)"
  },
  [`.${G.slideInLeft}-enter, .${G.slideInLeft}-exit-to`]: {
    transform: "translateX(-100%)"
  },
  [`.${G.slideInLeft}-enter-to, .${G.slideInLeft}-exit`]: {
    transform: "translateX(0)"
  }
}), Ji = S(Xr, {
  overflow: "hidden",
  variants: {
    placement: {
      top: {
        alignItems: "flex-start",
        justifyContent: "stretch"
      },
      right: {
        alignItems: "stretch",
        justifyContent: "flex-end"
      },
      bottom: {
        alignItems: "flex-end",
        justifyContent: "stretch"
      },
      left: {
        alignItems: "stretch",
        justifyContent: "flex-start"
      }
    }
  }
}), Gi = S(Qr, {
  maxHeight: "100vh",
  variants: {
    size: {
      xs: {
        maxWidth: "$xs"
      },
      sm: {
        maxWidth: "$md"
      },
      md: {
        maxWidth: "$lg"
      },
      lg: {
        maxWidth: "$2xl"
      },
      xl: {
        maxWidth: "$4xl"
      },
      full: {
        maxWidth: "100vw",
        height: "100vh"
      }
    },
    placement: {
      top: {},
      right: {},
      bottom: {},
      left: {}
    },
    fullHeight: {
      true: {
        height: "100vh"
      },
      false: {}
    }
  },
  compoundVariants: [
    { placement: "top", size: "xs", css: { maxWidth: "100vw" } },
    { placement: "top", size: "sm", css: { maxWidth: "100vw" } },
    { placement: "top", size: "md", css: { maxWidth: "100vw" } },
    { placement: "top", size: "lg", css: { maxWidth: "100vw" } },
    { placement: "top", size: "xl", css: { maxWidth: "100vw" } },
    { placement: "bottom", size: "xs", css: { maxWidth: "100vw" } },
    { placement: "bottom", size: "sm", css: { maxWidth: "100vw" } },
    { placement: "bottom", size: "md", css: { maxWidth: "100vw" } },
    { placement: "bottom", size: "lg", css: { maxWidth: "100vw" } },
    { placement: "bottom", size: "xl", css: { maxWidth: "100vw" } }
  ]
}), Fe = {
  scaleTopLeft: "hope-menu-scale-top-left-transition",
  scaleTopRight: "hope-menu-scale-top-right-transition",
  scaleBottomLeft: "hope-menu-scale-bottom-left-transition",
  scaleBottomRight: "hope-menu-scale-bottom-right-transition"
};
function zt(e, t) {
  return {
    [`.${e}-enter, .${e}-exit-to`]: {
      opacity: 0,
      transform: "scale(0.8)"
    },
    [`.${e}-enter-to, .${e}-exit`]: {
      opacity: 1,
      transform: "scale(1)"
    },
    [`.${e}-enter-active`]: {
      transformOrigin: t,
      transitionProperty: "opacity, transform",
      transitionDuration: "200ms",
      transitionTimingFunction: "ease-out"
    },
    [`.${e}-exit-active`]: {
      transformOrigin: t,
      transitionProperty: "opacity, transform",
      transitionDuration: "100ms",
      transitionTimingFunction: "ease-in"
    }
  };
}
const el = Ne({
  ...zt(Fe.scaleTopLeft, "top left"),
  ...zt(Fe.scaleTopRight, "top right"),
  ...zt(Fe.scaleBottomLeft, "bottom left"),
  ...zt(Fe.scaleBottomRight, "bottom right")
}), tl = S({
  appearance: "none",
  display: "inline-flex",
  alignItems: "center",
  outline: "none"
}), rl = S({
  zIndex: "$dropdown",
  position: "absolute",
  left: 0,
  top: "100%",
  display: "flex",
  flexDirection: "column",
  minWidth: "$56",
  overflowY: "auto",
  outline: "none",
  margin: 0,
  boxShadow: "$md",
  border: "1px solid $colors$neutral7",
  borderRadius: "$sm",
  backgroundColor: "$loContrast",
  px: 0,
  py: "$1",
  "&:focus": {
    outline: "none"
  }
}), ol = S({}), nl = S({
  display: "flex",
  alignItems: "center",
  mx: "$1",
  py: "$2",
  px: "$3",
  color: "$neutral11",
  fontSize: "$xs",
  fontWeight: "$medium",
  lineHeight: "$4"
});
function Ke(e) {
  return {
    color: e.color,
    ["&[data-active]"]: {
      backgroundColor: e.bgColorActive
    }
  };
}
const al = S({
  position: "relative",
  display: "flex",
  alignItems: "center",
  mx: "$1",
  borderRadius: "$sm",
  py: "$2",
  px: "$3",
  fontSize: "$base",
  fontWeight: "$normal",
  lineHeight: "$6",
  cursor: "pointer",
  userSelect: "none",
  transition: "color 250ms, background-color 250ms",
  "&[data-disabled]": {
    color: "$neutral8",
    cursor: "not-allowed"
  },
  variants: {
    colorScheme: {
      primary: Ke({ color: "$primary11", bgColorActive: "$primary3" }),
      accent: Ke({ color: "$accent11", bgColorActive: "$accent3" }),
      neutral: Ke({ color: "$neutral12", bgColorActive: "$neutral4" }),
      success: Ke({ color: "$success11", bgColorActive: "$success3" }),
      info: Ke({ color: "$info11", bgColorActive: "$info3" }),
      warning: Ke({ color: "$warning11", bgColorActive: "$warning3" }),
      danger: Ke({ color: "$danger11", bgColorActive: "$danger3" })
    }
  },
  defaultVariants: {
    colorScheme: "neutral"
  }
}), sl = S({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}), il = S({
  flexGrow: 1
}), ll = S({
  flexShrink: 0,
  color: "$neutral11",
  fontSize: "$sm",
  lineHeight: "$none"
}), Nt = bt({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
}), cl = bt({
  from: { opacity: 0 },
  to: { opacity: 1 }
}), Te = {
  slideInTop: "hope-notification-slide-in-top-transition",
  slideInRight: "hope-notification-slide-in-right-transition",
  slideInBottom: "hope-notification-slide-in-bottom-transition",
  slideInLeft: "hope-notification-slide-in-left-transition"
};
function Bt(e) {
  return {
    [`.${e.name}-enter, .${e.name}-exit-to`]: {
      opacity: 0,
      transform: e.enterTransform
    },
    [`.${e.name}-enter-to, .${e.name}-exit`]: {
      opacity: 1,
      transform: e.leaveTransform
    },
    [`.${e.name}-enter-active`]: {
      transitionProperty: "opacity, transform",
      transitionTimingFunction: "cubic-bezier(.51,.3,0,1.21)",
      transitionDuration: "300ms"
    },
    [`.${e.name}-exit-active`]: {
      transitionProperty: "opacity, transform",
      transitionTimingFunction: "ease-in",
      transitionDuration: "200ms"
    }
  };
}
const dl = Ne({
  ...Bt({
    name: Te.slideInTop,
    enterTransform: "translateY(-100%)",
    leaveTransform: "translateY(0)"
  }),
  ...Bt({
    name: Te.slideInRight,
    enterTransform: "translateX(100%)",
    leaveTransform: "translateX(0)"
  }),
  ...Bt({
    name: Te.slideInBottom,
    enterTransform: "translateY(100%)",
    leaveTransform: "translateY(0)"
  }),
  ...Bt({
    name: Te.slideInLeft,
    enterTransform: "translateX(-100%)",
    leaveTransform: "translateX(0)"
  })
}), ul = S({
  position: "fixed",
  zIndex: "$notification",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "$4",
  width: "calc(100% - 32px)",
  maxWidth: "$md",
  variants: {
    placement: {
      "top-start": {
        top: "$4",
        left: "$4"
      },
      top: {
        top: "$4",
        left: "50%",
        transform: "translateX(-50%)"
      },
      "top-end": {
        top: "$4",
        right: "$4"
      },
      "bottom-start": {
        bottom: "$4",
        left: "$4"
      },
      bottom: {
        bottom: "$4",
        left: "50%",
        transform: "translateX(-50%)"
      },
      "bottom-end": {
        bottom: "$4",
        right: "$4"
      }
    }
  },
  defaultVariants: {
    placement: "top-end"
  }
}), gl = S({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: "$md",
  borderRadius: "$sm",
  border: "1px solid $colors$neutral5",
  boxShadow: "$lg",
  backgroundColor: "$loContrast",
  padding: "$3",
  fontSize: "$sm",
  lineHeight: "$5",
  variants: {
    status: {
      success: {},
      info: {},
      warning: {},
      danger: {}
    }
  }
}), fl = S({
  animation: `1s linear infinite ${Nt}`
}), pl = S({
  flexShrink: 0,
  variants: {
    status: {
      success: { color: "$success9" },
      info: { color: "$info9" },
      warning: { color: "$warning9" },
      danger: { color: "$danger9" }
    }
  }
}), hl = S({
  fontWeight: "$medium"
}), bl = S({
  display: "inline-block",
  color: "$neutral11"
}), rt = {
  scale: "hope-popover-scale-transition"
}, ml = Ne({
  [`.${rt.scale}-enter, .${rt.scale}-exit-to`]: {
    opacity: 0,
    transform: "scale(0.95)"
  },
  [`.${rt.scale}-enter-to, .${rt.scale}-exit`]: {
    opacity: 1,
    transform: "scale(1)"
  },
  [`.${rt.scale}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease"
  },
  [`.${rt.scale}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-in-out"
  }
}), vl = S({
  zIndex: "$popover",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  maxWidth: "$xs",
  outline: "none",
  boxShadow: "$md",
  border: "1px solid $colors$neutral7",
  borderRadius: "$sm",
  backgroundColor: "$loContrast",
  color: "inherit",
  "&:focus": {
    outline: "none"
  }
}), Sl = S({
  display: "flex",
  alignItems: "center",
  flex: 0,
  borderColor: "inherit",
  borderBottomWidth: "1px",
  px: "$3",
  py: "$2",
  fontSize: "$base",
  fontWeight: "$medium"
}), xl = S({
  flex: 1,
  px: "$3",
  py: "$2"
}), Cl = S({
  display: "flex",
  alignItems: "center",
  borderColor: "inherit",
  borderTopWidth: "1px",
  px: "$3",
  py: "$2"
}), $l = S({
  position: "absolute",
  top: "$2",
  insetInlineEnd: "$2"
}), yl = S({
  zIndex: "$popover",
  position: "absolute",
  boxSize: "8px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "inherit",
  backgroundColor: "inherit",
  transform: "rotate(45deg)",
  variants: {
    popoverPlacement: {
      left: {
        borderLeft: 0,
        borderBottom: 0
      },
      top: {
        borderLeft: 0,
        borderTop: 0
      },
      right: {
        borderTop: 0,
        borderRight: 0
      },
      bottom: {
        borderRight: 0,
        borderBottom: 0
      }
    }
  }
});
function Lt(e) {
  return {
    minHeight: e.minHeight,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight
  };
}
const He = {
  xs: Lt({ fontSize: "$xs", lineHeight: "$4", minHeight: "$6" }),
  sm: Lt({ fontSize: "$sm", lineHeight: "$5", minHeight: "$8" }),
  md: Lt({ fontSize: "$base", lineHeight: "$6", minHeight: "$10" }),
  lg: Lt({ fontSize: "$lg", lineHeight: "$7", minHeight: "$12" })
}, yr = {
  "&:disabled": {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  "&:focus": {
    boxShadow: "0 0 0 3px $colors$primary5",
    borderColor: "$primary8"
  },
  "&[aria-invalid=true]": {
    borderColor: "$danger8"
  },
  "&[aria-invalid=true]:focus": {
    boxShadow: "0 0 0 3px $colors$danger5"
  }
}, lr = S({
  appearance: "none",
  position: "relative",
  width: "100%",
  minWidth: 0,
  outline: "none",
  borderRadius: "$sm",
  backgroundColor: "transparent",
  padding: 0,
  color: "$neutral12",
  fontSize: "$base",
  lineHeight: "$base",
  transition: "color 250ms, border-color 250ms, background-color 250ms, box-shadow 250ms",
  "&[readonly]": {
    boxShadow: "none !important",
    userSelect: "all",
    cursor: "default"
  },
  "&::placeholder": {
    color: "$neutral9",
    opacity: 1
  },
  variants: {
    variant: {
      outline: {
        border: "1px solid $neutral7",
        backgroundColor: "transparent",
        "&:hover": {
          borderColor: "$neutral8"
        },
        ...yr
      },
      filled: {
        border: "1px solid transparent",
        backgroundColor: "$neutral3",
        "&:hover, &:focus": {
          backgroundColor: "$neutral4"
        },
        ...yr
      },
      unstyled: {
        border: "1px solid transparent",
        backgroundColor: "transparent"
      }
    },
    size: {
      ...He
    }
  }
});
function _e(e) {
  return [
    {
      variant: e.variant,
      size: e.size,
      css: { px: e.paddingX }
    },
    {
      withLeftElement: !0,
      variant: e.variant,
      size: e.size,
      css: { paddingInlineStart: e.paddingWithElement }
    },
    {
      withRightElement: !0,
      variant: e.variant,
      size: e.size,
      css: { paddingInlineEnd: e.paddingWithElement }
    }
  ];
}
const wl = S(lr, {
  variants: {
    withLeftElement: {
      true: {}
    },
    withRightElement: {
      true: {}
    },
    withLeftAddon: {
      true: {
        borderLeftRadius: 0
      }
    },
    withRightAddon: {
      true: {
        borderRightRadius: 0
      }
    }
  },
  compoundVariants: [
    ..._e({
      variant: "outline",
      size: "xs",
      paddingX: "$2",
      paddingWithElement: "$6"
    }),
    ..._e({
      variant: "outline",
      size: "sm",
      paddingX: "$2_5",
      paddingWithElement: "$8"
    }),
    ..._e({
      variant: "outline",
      size: "md",
      paddingX: "$3",
      paddingWithElement: "$10"
    }),
    ..._e({
      variant: "outline",
      size: "lg",
      paddingX: "$4",
      paddingWithElement: "$12"
    }),
    ..._e({
      variant: "filled",
      size: "xs",
      paddingX: "$2",
      paddingWithElement: "$6"
    }),
    ..._e({
      variant: "filled",
      size: "sm",
      paddingX: "$2_5",
      paddingWithElement: "$8"
    }),
    ..._e({
      variant: "filled",
      size: "md",
      paddingX: "$3",
      paddingWithElement: "$10"
    }),
    ..._e({
      variant: "filled",
      size: "lg",
      paddingX: "$4",
      paddingWithElement: "$12"
    }),
    ..._e({
      variant: "unstyled",
      size: "xs",
      paddingX: 0,
      paddingWithElement: "$6"
    }),
    ..._e({
      variant: "unstyled",
      size: "sm",
      paddingX: 0,
      paddingWithElement: "$8"
    }),
    ..._e({
      variant: "unstyled",
      size: "md",
      paddingX: 0,
      paddingWithElement: "$10"
    }),
    ..._e({
      variant: "unstyled",
      size: "lg",
      paddingX: 0,
      paddingWithElement: "$12"
    })
  ]
}), _l = S({
  position: "relative",
  display: "flex",
  width: "100%"
}), Il = S({
  position: "absolute",
  top: "0",
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    placement: {
      left: { insetInlineStart: "0" },
      right: { insetInlineEnd: "0" }
    },
    size: {
      xs: {
        ...He.xs,
        width: He.xs.minHeight
      },
      sm: {
        ...He.sm,
        width: He.sm.minHeight
      },
      md: {
        ...He.md,
        width: He.md.minHeight
      },
      lg: {
        ...He.lg,
        width: He.lg.minHeight
      }
    }
  }
});
function Ie(e) {
  return {
    variant: e.variant,
    size: e.size,
    css: { px: e.paddingX }
  };
}
const kl = S({
  display: "flex",
  alignItems: "center",
  flex: "0 0 auto",
  width: "auto",
  whiteSpace: "nowrap",
  variants: {
    placement: {
      left: {
        marginEnd: "-1px"
      },
      right: {
        marginStart: "-1px"
      }
    },
    variant: {
      outline: {
        borderRadius: "$sm",
        border: "1px solid $neutral7",
        backgroundColor: "$neutral3",
        color: "$neutral12"
      },
      filled: {
        borderRadius: "$sm",
        border: "1px solid transparent",
        backgroundColor: "$neutral3",
        color: "$neutral12"
      },
      unstyled: {
        border: "1px solid transparent",
        backgroundColor: "transparent"
      }
    },
    size: {
      ...He
    }
  },
  compoundVariants: [
    {
      variant: "outline",
      placement: "left",
      css: {
        borderRightRadius: 0,
        borderInlineEndColor: "transparent"
      }
    },
    {
      variant: "outline",
      placement: "right",
      css: {
        borderLeftRadius: 0,
        borderInlineStartColor: "transparent"
      }
    },
    {
      variant: "filled",
      placement: "left",
      css: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        borderInlineEndColor: "transparent"
      }
    },
    {
      variant: "filled",
      placement: "right",
      css: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
        borderInlineStartColor: "transparent"
      }
    },
    Ie({
      variant: "outline",
      size: "xs",
      paddingX: "$2"
    }),
    Ie({
      variant: "outline",
      size: "sm",
      paddingX: "$2_5"
    }),
    Ie({
      variant: "outline",
      size: "md",
      paddingX: "$3"
    }),
    Ie({
      variant: "outline",
      size: "lg",
      paddingX: "$4"
    }),
    Ie({
      variant: "filled",
      size: "xs",
      paddingX: "$2"
    }),
    Ie({
      variant: "filled",
      size: "sm",
      paddingX: "$2_5"
    }),
    Ie({
      variant: "filled",
      size: "md",
      paddingX: "$3"
    }),
    Ie({
      variant: "filled",
      size: "lg",
      paddingX: "$4"
    }),
    Ie({
      variant: "unstyled",
      size: "xs",
      paddingX: 0
    }),
    Ie({
      variant: "unstyled",
      size: "sm",
      paddingX: 0
    }),
    Ie({
      variant: "unstyled",
      size: "md",
      paddingX: 0
    }),
    Ie({
      variant: "unstyled",
      size: "lg",
      paddingX: 0
    })
  ]
}), ot = {
  fadeInTop: "hope-select-fade-in-top-transition"
}, Pl = Ne({
  [`.${ot.fadeInTop}-enter, .${ot.fadeInTop}-exit-to`]: {
    opacity: 0,
    transform: "translateY(-16px)"
  },
  [`.${ot.fadeInTop}-enter-to, .${ot.fadeInTop}-exit`]: {
    opacity: 1,
    transform: "translateY(0)"
  },
  [`.${ot.fadeInTop}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-out"
  },
  [`.${ot.fadeInTop}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "100ms",
    transitionTimingFunction: "ease-in"
  }
});
function Zt(e, t, r) {
  return Object.entries({
    xs: {
      start: t != null ? t : "$2",
      end: r != null ? r : "$1"
    },
    sm: {
      start: t != null ? t : "$2_5",
      end: r != null ? r : "$1_5"
    },
    md: {
      start: t != null ? t : "$3",
      end: r != null ? r : "$2"
    },
    lg: {
      start: t != null ? t : "$4",
      end: r != null ? r : "$3"
    }
  }).map(([o, a]) => ({
    variant: e,
    size: o,
    css: {
      paddingInlineStart: a.start,
      paddingInlineEnd: a.end
    }
  }));
}
const Tl = S(lr, {
  appearance: "none",
  display: "inline-flex",
  alignItems: "center",
  outline: "none",
  cursor: "pointer",
  "&:focus": {
    outline: "none"
  },
  compoundVariants: [
    ...Zt("outline"),
    ...Zt("filled"),
    ...Zt("unstyled", 0, 0)
  ]
}), Yr = S({
  flexGrow: 1,
  flexShrink: 1,
  textAlign: "start",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}), zl = S({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  flexGrow: 1,
  flexShrink: 1,
  variants: {
    size: {
      xs: {
        gap: "$0_5",
        py: "$0_5"
      },
      sm: {
        gap: "$1",
        py: "$1"
      },
      md: {
        gap: "$1_5",
        py: "$1_5"
      },
      lg: {
        gap: "$2",
        py: "$2"
      }
    }
  }
}), Bl = S({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$0_5",
  borderRadius: "$sm",
  py: 0,
  pl: "$2",
  lineHeight: "$none",
  variants: {
    variant: {
      subtle: {
        backgroundColor: "$neutral4",
        color: "$neutral12"
      },
      outline: {
        border: "1px solid $colors$neutral7",
        backgroundColor: "$loContrast",
        color: "$neutral12"
      }
    },
    size: {
      xs: {
        height: "$4",
        fontSize: "$2xs"
      },
      sm: {
        height: "$5",
        fontSize: "$xs"
      },
      md: {
        height: "$6",
        fontSize: "$sm"
      },
      lg: {
        height: "$7",
        fontSize: "$base"
      }
    }
  }
}), Ll = S({
  appearance: "none",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  outline: "none",
  borderRightRadius: "$sm",
  backgroundColor: "transparent",
  px: "$1",
  color: "inherit",
  lineHeight: "$none",
  textDecoration: "none",
  cursor: "pointer",
  userSelect: "none",
  transition: "color 250ms, background-color 250ms, box-shadow 250ms",
  "&:hover": {
    backgroundColor: "$neutral7"
  },
  "&:focus": {
    outline: "none",
    boxShadow: "$outline"
  }
}), Dl = S(Yr, {
  color: "$neutral9",
  opacity: 1
}), Hl = S({
  flexGrow: 0,
  flexShrink: 0,
  marginInlineStart: "auto",
  color: "$neutral11",
  fontSize: "1.25em",
  pointerEvents: "none",
  transition: "transform 250ms",
  transformOrigin: "center",
  variants: {
    opened: {
      true: {
        transform: "rotate(-180deg)"
      }
    }
  }
}), Al = S({
  zIndex: "$dropdown",
  position: "absolute",
  left: 0,
  top: "100%",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  overflow: "hidden",
  margin: 0,
  boxShadow: "$md",
  border: "1px solid $colors$neutral7",
  borderRadius: "$sm",
  backgroundColor: "$loContrast",
  padding: 0
}), El = S({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  maxHeight: "$60",
  width: "100%",
  overflowY: "auto",
  margin: 0,
  padding: "$1",
  listStyle: "none"
}), Ml = S({}), Ol = S({
  display: "flex",
  alignItems: "center",
  py: "$2",
  px: "$3",
  color: "$neutral11",
  fontSize: "$xs",
  lineHeight: "$4"
}), Rl = S({
  position: "relative",
  display: "flex",
  alignItems: "center",
  borderRadius: "$sm",
  color: "$neutral12",
  fontSize: "$base",
  fontWeight: "$normal",
  lineHeight: "$6",
  cursor: "pointer",
  userSelect: "none",
  "&[data-disabled]": {
    color: "$neutral8",
    cursor: "not-allowed"
  },
  ["&[data-active]"]: {
    backgroundColor: "$neutral4"
  }
}), Wl = S({
  display: "inline-flex",
  alignItems: "center",
  py: "$2",
  paddingInlineStart: "$3",
  paddingInlineEnd: "$6"
}), Fl = S({
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  paddingInlineEnd: "$3",
  color: "$primary10",
  pointerEvents: "none"
}), nt = {
  scale: "hope-tooltip-scale-transition"
}, Nl = Ne({
  [`.${nt.scale}-enter, .${nt.scale}-exit-to`]: {
    opacity: 0,
    transform: "scale(0.90)"
  },
  [`.${nt.scale}-enter-to, .${nt.scale}-exit`]: {
    opacity: 1,
    transform: "scale(1)"
  },
  [`.${nt.scale}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease"
  },
  [`.${nt.scale}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "150ms",
    transitionTimingFunction: "ease-in-out"
  }
}), Vl = S({
  zIndex: "$tooltip",
  position: "absolute",
  maxWidth: "$96",
  boxShadow: "$md",
  borderRadius: "$sm",
  backgroundColor: "$neutral12",
  px: "$2",
  py: "$1",
  color: "$neutral1",
  fontSize: "$sm",
  fontWeight: "$normal",
  lineHeight: "$4"
}), ql = S({
  zIndex: "$tooltip",
  position: "absolute",
  boxSize: "8px",
  backgroundColor: "inherit",
  transform: "rotate(45deg)"
}), jl = Ne({
  "*, ::before, ::after": {
    boxSizing: "border-box",
    borderWidth: "0",
    borderStyle: "solid"
  },
  "*": {
    margin: 0
  },
  "html, body": {
    height: "100%"
  },
  html: {
    fontFamily: "$sans",
    lineHeight: "$base",
    fontSize: "16px"
  },
  body: {
    backgroundColor: "$background",
    color: "$neutral12",
    fontFamily: "inherit",
    lineHeight: "inherit",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale"
  },
  "h1, h2, h3, h4, h5, h6": {
    fontSize: "inherit",
    fontWeight: "inherit"
  },
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word"
  },
  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%"
  },
  "button, input, textarea, select, optgroup": {
    fontFamily: "inherit",
    fontSize: "100%"
  },
  "button:focus": {
    outline: "5px auto -webkit-focus-ring-color"
  },
  fieldset: {
    margin: 0,
    padding: 0
  },
  "ol, ul": {
    margin: 0,
    padding: 0
  },
  a: {
    backgroundColor: "transparent",
    color: "inherit",
    textDecoration: "inherit"
  },
  "[data-corvu-tooltip-content]": {
    "border-radius": "0.25rem",
    "background-color": "var(--hope-colors-tooltipContent)",
    "padding-left": "0.25rem",
    "padding-right": "0.25rem",
    "padding-top": "0.15rem",
    "padding-bottom": "0.15rem"
  },
  "[data-corvu-tooltip-arrow][arrow-top='true']": {
    width: 0,
    height: 0,
    "border-left": "10px solid transparent",
    "border-right": "10px solid transparent",
    "border-top": "10px solid var(--hope-colors-tooltipArrow)",
    left: "calc(50% - 10px)",
    bottom: "-10px"
  },
  "[data-corvu-tooltip-arrow][arrow-bottom='true']": {
    width: 0,
    height: 0,
    "border-left": "10px solid transparent",
    "border-right": "10px solid transparent",
    "border-bottom": "10px solid var(--hope-colors-tooltipArrow)",
    left: "calc(50% - 10px)",
    top: "-10px"
  },
  "[data-corvu-tooltip-arrow][arrow-left='true']": {
    width: 0,
    height: 0,
    "border-top": "10px solid transparent",
    "border-bottom": "10px solid transparent",
    "border-left": "10px solid var(--hope-colors-tooltipArrow)",
    right: "-10px",
    top: "calc(50% - 10px)"
  },
  "[data-corvu-tooltip-arrow][arrow-right='true']": {
    width: 0,
    height: 0,
    "border-top": "10px solid transparent",
    "border-bottom": "10px solid transparent",
    "border-right": "10px solid var(--hope-colors-tooltipArrow)",
    left: "-10px",
    top: "calc(50% - 10px)"
  },
  "[data-corvu-tooltip-arrow]": {
    position: "absolute",
    color: "var(--hope-colors-tooltipArrow)"
  },
  "[data-corvu-tooltip-content][data-open]": {
    "animation-name": "corvu-tooltip-enter",
    "animation-duration": "150ms",
    "--tw-enter-opacity": "initial",
    "--tw-enter-scale": "initial",
    "--tw-enter-rotate": "initial",
    "--tw-enter-translate-x": "initial",
    "--tw-enter-translate-y": "initial",
    "--tw-enter-opacity": "0.5",
    "--tw-enter-translate-y": "0.25rem"
  },
  "[data-corvu-tooltip-content][data-closed]": {
    "animation-name": "corvu-tooltip-exit",
    "animation-duration": "150ms",
    "--tw-exit-opacity": "initial",
    "--tw-exit-scale": "initial",
    "--tw-exit-rotate": "initial",
    "--tw-exit-translate-x": "initial",
    "--tw-exit-translate-y": "initial",
    "--tw-exit-opacity": "0.5",
    "--tw-exit-translate-y": "0.25rem"
  },
  "@keyframes corvu-tooltip-enter": {
    from: {
      opacity: "var(--tw-enter-opacity, 1)",
      transform: "translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))"
    }
  },
  "@keyframes corvu-tooltip-exit": {
    to: {
      opacity: "var(--tw-exit-opacity, 1)",
      transform: "translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))"
    }
  }
});
function wr(e, t, r) {
  Object.entries(e).forEach(([o, a]) => {
    if (Ft(a))
      if (o in r) {
        const n = o;
        r[n] = {
          ...r[n],
          ...a
        };
      } else
        t[o] = {
          ...t[o],
          ...a
        };
    else
      t[o] = a;
  });
}
function Kl(e, t) {
  const r = {}, o = {
    "@desktop_s": {},
    "@mobile_s": {},
    "@mobile_m": {},
    "@mobile_l": {},
    "@sm": {},
    "@md": {},
    "@lg": {},
    "@xl": {},
    "@2xl": {},
    "@reduce-motion": {},
    "@light": {},
    "@dark": {}
  };
  return t == null || t.forEach(
    (a) => a && wr(a, r, o)
  ), Object.entries(e).forEach(([a, n]) => {
    n != null && a !== "css" && (a.startsWith("_") ? r[a] = n : Ft(n) ? Object.keys(n).forEach((s) => {
      if (s === "@initial")
        r[a] = n[s];
      else if (s in o) {
        const l = s;
        o[l] = {
          ...o[l],
          [a]: n[l]
        };
      }
    }) : r[a] = n);
  }), e.css && wr(e.css, r, o), { ...r, ...o };
}
function _r(e, t) {
  const r = e === "dark", o = r ? ht.dark : ht.light, a = r ? Cr({}, Fi, t) : t, n = Vi(o, a);
  return Cr({}, Ni, n);
}
function cr(e, t) {
  return Ft(e) ? Object.keys(e).reduce((r, o) => (r[o] = t(e[o]), r), {}) : e != null ? t(e) : null;
}
function Ir(e) {
  return e.startsWith("$") ? `var(--hope-colors-${e.substring(1)})` : e;
}
const Vt = S({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0"
}), qt = ae();
function Ul() {
  Zi(), el(), qi(), dl(), ml(), Pl(), Nl();
}
function Pp(e) {
  var C, z, h, y, w, x, k, L;
  e = Z({
    enableCssReset: !0
  }, e);
  const r = _r("light", (z = (C = e.config) == null ? void 0 : C.lightTheme) != null ? z : {}), o = _r("dark", (y = (h = e.config) == null ? void 0 : h.darkTheme) != null ? y : {}), a = Xs((x = (w = e.config) == null ? void 0 : w.initialColorMode) != null ? x : "light"), n = a === "dark" ? o : r, [s, l] = oe(a), [c, d] = oe(n), g = () => s() === "dark", f = (H) => {
    l(H), Us(H);
  }, u = () => {
    f(g() ? "light" : "dark");
  }, p = {
    components: (L = (k = e.config) == null ? void 0 : k.components) != null ? L : {},
    theme: c,
    colorMode: s,
    setColorMode: f,
    toggleColorMode: u
  };
  return ve(() => {
    d(g() ? o : r), Ys(g());
  }), e.enableCssReset && jl(), Ul(), i(qt.Provider, {
    value: p,
    get children() {
      return e.children;
    }
  });
}
function Tp() {
  const e = re(qt);
  if (!e)
    throw new Error("[Hope UI]: useTheme must be used within a HopeProvider");
  return e.theme;
}
function _() {
  const e = re(qt);
  if (!e)
    throw new Error("[Hope UI]: useStyleConfig must be used within a HopeProvider");
  return e.components;
}
function Xl() {
  const e = re(qt);
  if (!e)
    throw new Error("[Hope UI]: useColorMode must be used within a HopeProvider");
  return {
    colorMode: e.colorMode,
    setColorMode: e.setColorMode,
    toggleColorMode: e.toggleColorMode
  };
}
function zp(e, t) {
  const {
    colorMode: r
  } = Xl();
  return () => r() === "dark" ? t : e;
}
function $(e) {
  return `.${e}`;
}
function m(...e) {
  return e.filter(Boolean).join(" ");
}
function Zr(e, t, r) {
  return (e - t) * 100 / (r - t);
}
function Ht(e, t, r) {
  let o = e + 1;
  return o > t && (o = r ? 0 : t), o;
}
function At(e, t, r) {
  let o = e - 1;
  return o < 0 && (o = r ? t : 0), o;
}
const Ql = {
  border: !0,
  borderWidth: !0,
  borderStyle: !0,
  borderColor: !0,
  borderTop: !0,
  borderTopWidth: !0,
  borderTopStyle: !0,
  borderTopColor: !0,
  borderRight: !0,
  borderRightWidth: !0,
  borderRightStyle: !0,
  borderRightColor: !0,
  borderBottom: !0,
  borderBottomWidth: !0,
  borderBottomStyle: !0,
  borderBottomColor: !0,
  borderLeft: !0,
  borderLeftWidth: !0,
  borderLeftStyle: !0,
  borderLeftColor: !0,
  borderX: !0,
  borderY: !0
}, Yl = {
  color: !0,
  background: !0,
  bg: !0,
  backgroundColor: !0,
  bgColor: !0,
  opacity: !0
}, Zl = { css: !0 }, Jl = {
  alignItems: !0,
  alignContent: !0,
  alignSelf: !0,
  justifyItems: !0,
  justifyContent: !0,
  justifySelf: !0,
  flexDirection: !0,
  flexWrap: !0,
  flex: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: !0,
  order: !0
}, Gl = {
  gridTemplate: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowStart: !0,
  gridRowEnd: !0,
  gridColumn: !0,
  gridColumnStart: !0,
  gridColumnEnd: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridAutoRows: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: !0,
  rowGap: !0,
  columnGap: !0
}, ec = {
  appearance: !0,
  userSelect: !0,
  pointerEvents: !0,
  resize: !0,
  cursor: !0,
  outline: !0,
  outlineOffset: !0,
  outlineColor: !0
}, tc = {
  display: !0,
  d: !0,
  verticalAlign: !0,
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  objectFit: !0,
  objectPosition: !0
}, rc = {
  margin: !0,
  m: !0,
  marginTop: !0,
  mt: !0,
  marginRight: !0,
  mr: !0,
  marginStart: !0,
  ms: !0,
  marginBottom: !0,
  mb: !0,
  marginLeft: !0,
  ml: !0,
  marginEnd: !0,
  me: !0,
  mx: !0,
  my: !0
}, oc = {
  padding: !0,
  p: !0,
  paddingTop: !0,
  pt: !0,
  paddingRight: !0,
  pr: !0,
  paddingStart: !0,
  ps: !0,
  paddingBottom: !0,
  pb: !0,
  paddingLeft: !0,
  pl: !0,
  paddingEnd: !0,
  pe: !0,
  px: !0,
  py: !0
}, nc = {
  position: !0,
  pos: !0,
  zIndex: !0,
  top: !0,
  right: !0,
  bottom: !0,
  left: !0
}, ac = {
  _hover: !0,
  _active: !0,
  _focus: !0,
  _highlighted: !0,
  _focusWithin: !0,
  _focusVisible: !0,
  _disabled: !0,
  _readOnly: !0,
  _before: !0,
  _after: !0,
  _empty: !0,
  _expanded: !0,
  _checked: !0,
  _grabbed: !0,
  _pressed: !0,
  _invalid: !0,
  _valid: !0,
  _loading: !0,
  _selected: !0,
  _hidden: !0,
  _even: !0,
  _odd: !0,
  _first: !0,
  _last: !0,
  _notFirst: !0,
  _notLast: !0,
  _visited: !0,
  _activeLink: !0,
  _activeStep: !0,
  _indeterminate: !0,
  _groupHover: !0,
  _peerHover: !0,
  _groupFocus: !0,
  _peerFocus: !0,
  _groupFocusVisible: !0,
  _peerFocusVisible: !0,
  _groupActive: !0,
  _peerActive: !0,
  _groupSelected: !0,
  _peerSelected: !0,
  _groupDisabled: !0,
  _peerDisabled: !0,
  _groupInvalid: !0,
  _peerInvalid: !0,
  _groupChecked: !0,
  _peerChecked: !0,
  _groupFocusWithin: !0,
  _peerFocusWithin: !0,
  _peerPlaceholderShown: !0,
  _placeholder: !0,
  _placeholderShown: !0,
  _fullScreen: !0,
  _selection: !0,
  _mediaDark: !0,
  _mediaReduceMotion: !0,
  _dark: !0,
  _light: !0
}, sc = {
  borderRadius: !0,
  borderTopRightRadius: !0,
  borderTopLeftRadius: !0,
  borderBottomRightRadius: !0,
  borderBottomLeftRadius: !0,
  borderTopRadius: !0,
  borderRightRadius: !0,
  borderStartRadius: !0,
  borderBottomRadius: !0,
  borderLeftRadius: !0,
  borderEndRadius: !0,
  rounded: !0,
  roundedTop: !0,
  roundedRight: !0,
  roundedStart: !0,
  roundedBottom: !0,
  roundedLeft: !0,
  roundedEnd: !0
}, ic = {
  textShadow: !0,
  boxShadow: !0,
  shadow: !0
}, lc = {
  width: !0,
  w: !0,
  minWidth: !0,
  minW: !0,
  maxWidth: !0,
  maxW: !0,
  height: !0,
  h: !0,
  minHeight: !0,
  minH: !0,
  maxHeight: !0,
  maxH: !0,
  boxSize: !0
}, cc = {
  transform: !0,
  transformOrigin: !0,
  clipPath: !0
}, dc = {
  transition: !0,
  transitionProperty: !0,
  transitionTimingFunction: !0,
  transitionDuration: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0
}, uc = {
  fontFamily: !0,
  fontSize: !0,
  fontWeight: !0,
  lineHeight: !0,
  letterSpacing: !0,
  textAlign: !0,
  fontStyle: !0,
  textTransform: !0,
  textDecoration: !0,
  noOfLines: !0
}, gc = {
  ...Ql,
  ...Yl,
  ...Jl,
  ...Gl,
  ...ec,
  ...tc,
  ...rc,
  ...oc,
  ...nc,
  ...sc,
  ...ic,
  ...lc,
  ...cc,
  ...dc,
  ...uc,
  ...ac,
  ...Zl
}, fc = S({});
function pc(e, t) {
  return fc({ css: Kl(e, t) });
}
function hc(e) {
  return Object.keys(e).filter((t) => t in gc);
}
const Jt = (e, t) => {
  const r = (o) => {
    const a = hc(o), n = Z({
      as: e
    }, o), [s, l, c] = v(n, ["__tooltip_title", "__tooltip_show_arrow", "__tooltip_placement", "__tooltip_id", "__tooltip_context_id", "__tooltip_open_delay", "__tooltip_close_delay", "__tooltip_open_on_focus", "__tooltip_skip_delay_duration", "__tooltip_open_on_hover", "__tooltip_close_on_escape", "__tooltip_close_on_pointer_down", "__tooltip_open", "__tooltip_close_on_scroll", "__tooltip_hoverable_content", "as", "class", "className", "__baseStyle"], a), d = we(() => [Ae(t == null ? void 0 : t.baseStyle) ? t == null ? void 0 : t.baseStyle(o) : t == null ? void 0 : t.baseStyle, s.__baseStyle]), g = () => m(
      t == null ? void 0 : t.baseClass,
      s.class,
      s.className,
      pc(l, d())
    );
    let f = () => i(Ct, b({
      get component() {
        var p;
        return (p = s.as) != null ? p : "div";
      },
      get class() {
        return g();
      }
    }, c)), u = () => {
      var W;
      const [p, C] = oe(!1), [z, h] = oe(), [y, w] = oe();
      let x = de(), k = de(), L = ((W = s.__tooltip_placement) != null ? W : "top").toLowerCase(), H = Rs(z, y, {
        open: p,
        placement: L,
        middleware: [yt(10), wt(), _t()],
        whileElementsMounted: It
      });
      ue(() => {
        h(document.querySelector(`[unique-id="${x}"]`));
      }), ve(() => {
        w(document.querySelector(`[unique-id="${k}"]`)), console.log("tooltip", p(), y(), H);
      });
      const q = (I) => {
        C(!1);
      }, D = () => {
        let I;
        return ue(() => {
          console.log("tooltip mounted", I), w(I);
        }), i(Ct, {
          component: "div",
          "unique-id": k,
          get style() {
            var T, E;
            return {
              position: H.strategy,
              "z-index": "var(--hope-zIndices-tooltip, 1000)",
              top: `${(T = H.y) != null ? T : 0}px`,
              left: `${(E = H.x) != null ? E : 0}px`,
              width: "max-content"
            };
          },
          onMouseOver: () => C(!0),
          onMouseOut: q,
          onBlur: q,
          onClick: q,
          onMouseDown: q,
          get ["data-open"]() {
            return p();
          },
          "data-corvu-tooltip-content": !0,
          get children() {
            var T;
            return [s.__tooltip_title, ((T = s.__tooltip_show_arrow) != null ? T : !0) && i(Ct, {
              component: "div",
              style: {
                "z-index": "var(--hope-zIndices-tooltip, 1000)"
              },
              "data-corvu-tooltip-arrow": !0,
              "arrow-left": L == "left",
              "arrow-top": L == "top",
              "arrow-right": L == "right",
              "arrow-bottom": L == "bottom"
            })];
          }
        });
      };
      return [i(Ct, b({
        get component() {
          var I;
          return (I = s.as) != null ? I : "div";
        },
        get class() {
          return g();
        }
      }, c, {
        "unique-id": x,
        onMouseOver: (I) => {
          var T, E;
          C(!0), (E = (T = c.onMouseOver) != null ? T : c.onmouseover) == null || E(I);
        },
        onMouseOut: (I) => {
          var T, E;
          C(!1), (E = (T = c.onMouseOut) != null ? T : c.onmouseout) == null || E(I);
        },
        onBlur: (I) => {
          var T, E;
          C(!1), (E = (T = c.onBlur) != null ? T : c.onblur) == null || E(I);
        },
        onClick: (I) => {
          var T, E;
          C(!1), (E = (T = c.onClick) != null ? T : c.onclick) == null || E(I);
        },
        onMouseDown: (I) => {
          var T, E;
          C(!1), (E = (T = c.onMouseDown) != null ? T : c.onmousedown) == null || E(I);
        }
      })), i(it, {
        get children() {
          return p() && i(D, {});
        }
      })];
    };
    return i(O, {
      get when() {
        return s.__tooltip_title;
      },
      get fallback() {
        return i(f, {});
      },
      get children() {
        return i(u, {});
      }
    });
  };
  return r.toString = () => t != null && t.baseClass ? $(t.baseClass) : "", r;
};
function bc() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Jt, {
    apply(t, r, o) {
      return Jt(...o);
    },
    get(t, r) {
      return e.has(r) || e.set(r, Jt(r)), e.get(r);
    }
  });
}
const R = bc(), A = R.div, Jr = "hope-accordion";
function mc(e) {
  var x;
  const t = _().Accordion, [r, o] = oe([]), [a, n] = ie({
    _expandedIndex: (x = e.defaultIndex) != null ? x : e.allowMultiple ? [] : -1,
    focusedIndex: -1,
    get isControlled() {
      return e.index !== void 0;
    },
    get expandedIndex() {
      return this.isControlled ? e.index : this._expandedIndex;
    }
  }), [s, l] = v(e, ["class", "allowMultiple", "index", "defaultIndex", "onChange"]), c = we(() => r().slice().reverse()), d = (k) => {
    n("focusedIndex", k);
  }, g = (k, L) => {
    var q;
    let H = -1;
    s.allowMultiple && pt(a.expandedIndex) ? H = L ? [...a.expandedIndex, k] : a.expandedIndex.filter((D) => D !== k) : L ? H = k : H = -1, n("_expandedIndex", H), (q = s.onChange) == null || q.call(s, H);
  }, f = (k) => pt(a.expandedIndex) ? a.expandedIndex.includes(k) : a.expandedIndex === k, u = (k) => o((L) => [...L, k]).length - 1, p = () => {
    const k = r().length - 1;
    let L = Ht(a.focusedIndex, k, !0), H = r()[L];
    for (; H.disabled; )
      L = Ht(L, k, !0), H = r()[L];
    H.focus();
  }, C = () => {
    const k = r().length - 1;
    let L = At(a.focusedIndex, k, !0), H = r()[L];
    for (; H.disabled; )
      L = At(L, k, !0), H = r()[L];
    H.focus();
  }, z = () => {
    var k;
    (k = r().find((L) => !L.disabled)) == null || k.focus();
  }, h = () => {
    var k;
    (k = c().find((L) => !L.disabled)) == null || k.focus();
  }, y = () => m(s.class, Jr);
  be(() => {
    d(-1);
  });
  const w = {
    state: a,
    setFocusedIndex: d,
    setExpandedIndex: g,
    isExpandedIndex: f,
    registerAccordionButton: u,
    focusNextAccordionButton: p,
    focusPrevAccordionButton: C,
    focusFirstAccordionButton: z,
    focusLastAccordionButton: h
  };
  return i(Gr.Provider, {
    value: w,
    get children() {
      return i(A, b({
        get class() {
          return y();
        },
        get __baseStyle() {
          var k;
          return (k = t == null ? void 0 : t.baseStyle) == null ? void 0 : k.root;
        }
      }, l));
    }
  });
}
mc.toString = () => $(Jr);
const Gr = ae();
function vc() {
  const e = re(Gr);
  if (!e)
    throw new Error("[Hope UI]: useAccordionContext must be used within a `<Accordion />` component");
  return e;
}
const Sc = S({
  borderTopWidth: "1px",
  borderColor: "$neutral7",
  overflowAnchor: "none",
  "&:last-of-type": {
    borderBottomWidth: "1px"
  }
}), xc = S({
  appearance: "none",
  display: "flex",
  alignItems: "center",
  width: "100%",
  outline: "none",
  backgroundColor: "transparent",
  px: "$4",
  py: "$2",
  color: "inherit",
  fontSize: "$base",
  lineHeight: "$6",
  cursor: "pointer",
  transition: "background-color 250ms",
  "&:disabled": {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  "&:hover": {
    backgroundColor: "$neutral4"
  },
  "&:focus": {
    outline: "none",
    boxShadow: "$outline"
  }
}), Cc = S({
  flexGrow: 0,
  flexShrink: 0,
  fontSize: "1.25em",
  pointerEvents: "none",
  transition: "transform 250ms",
  transformOrigin: "center",
  variants: {
    expanded: {
      true: {
        transform: "rotate(-180deg)"
      }
    },
    disabled: {
      true: {
        opacity: 0.4
      }
    }
  }
}), $c = S({
  pt: "$2",
  px: "$4",
  pb: "$4"
});
function eo(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function yc(e) {
  var r;
  if (!eo(e))
    return !1;
  const t = (r = e.ownerDocument.defaultView) != null ? r : window;
  return e instanceof t.HTMLElement;
}
function Et(e) {
  var t;
  return eo(e) && (t = e.ownerDocument) != null ? t : document;
}
function Gt(e, t) {
  const r = e.target;
  return e.button > 0 || r && !Et(r).body.contains(r) ? !1 : !(t != null && t.contains(r));
}
function to(e) {
  const { key: t, keyCode: r } = e;
  return r >= 37 && r <= 40 && t.indexOf("Arrow") !== 0 ? `Arrow${t}` : t;
}
function wc(e) {
  const t = Et(e);
  return t == null ? void 0 : t.activeElement;
}
function at(e, t) {
  return e ? e === t || e.contains(t) : !1;
}
function Mt(e) {
  var o, a;
  const t = (o = e.target) != null ? o : e.currentTarget, r = wc(t);
  return (a = e.relatedTarget) != null ? a : r;
}
function ro(e) {
  return e && e.clientHeight < e.scrollHeight;
}
function oo(e, t) {
  const { offsetHeight: r, offsetTop: o } = e, { offsetHeight: a, scrollTop: n } = t, s = o < n, l = o + r > n + a;
  s ? t.scrollTo(0, o) : l && t.scrollTo(0, o - a + r);
}
function kt(e) {
  const t = Object.getOwnPropertyDescriptor(e, "children");
  return t == null ? !1 : Ae(t.value);
}
const no = "hope-accordion__item";
function _c(e) {
  const t = `hope-accordion-item-${de()}`, r = _().Accordion, o = vc(), [a, n] = ie({
    index: -1,
    get buttonId() {
      return `${t}-button`;
    },
    get panelId() {
      return `${t}-panel`;
    },
    get expanded() {
      return o.isExpandedIndex(this.index);
    },
    get disabled() {
      var y;
      return (y = e.disabled) != null ? y : !1;
    }
  }), [s, l] = v(e, ["class", "children"]), c = (y) => {
    const w = o.registerAccordionButton(y);
    n("index", w);
  }, d = () => {
    o.setFocusedIndex(a.index);
  }, g = () => {
    o.setExpandedIndex(a.index, !a.expanded);
  }, f = we(() => ({
    ArrowDown: o.focusNextAccordionButton,
    ArrowUp: o.focusPrevAccordionButton,
    Home: o.focusFirstAccordionButton,
    End: o.focusLastAccordionButton
  })), u = (y) => {
    const w = to(y), x = f()[w];
    x && (y.preventDefault(), he(x, y));
  }, p = () => a.expanded, C = () => a.disabled, z = () => m(s.class, no, Sc()), h = {
    state: a,
    registerButton: c,
    setFocusedIndex: d,
    toggleExpandedState: g,
    onButtonKeyDown: u
  };
  return i(ao.Provider, {
    value: h,
    get children() {
      return i(A, b({
        get class() {
          return z();
        },
        get __baseStyle() {
          var y;
          return (y = r == null ? void 0 : r.baseStyle) == null ? void 0 : y.item;
        }
      }, l, {
        get children() {
          return i(O, {
            get when() {
              return kt(s);
            },
            get fallback() {
              return s.children;
            },
            get children() {
              var y;
              return (y = s.children) == null ? void 0 : y.call(s, {
                expanded: p,
                disabled: C
              });
            }
          });
        }
      }));
    }
  });
}
_c.toString = () => $(no);
const ao = ae();
function dr() {
  const e = re(ao);
  if (!e)
    throw new Error("[Hope UI]: useAccordionItemContext must be used within a `<AccordionItem />` component");
  return e;
}
const so = "hope-accordion__button";
function Ic(e) {
  const t = _().Accordion, r = dr(), [o, a] = v(e, ["ref", "class", "disabled", "onClick", "onFocus", "onKeyDown"]), n = (d) => {
    he(o.onClick, d), r.toggleExpandedState();
  }, s = (d) => {
    he(o.onFocus, d), r.setFocusedIndex();
  }, l = (d) => {
    me(o.onKeyDown, r.onButtonKeyDown)(d);
  }, c = () => m(o.class, so, xc());
  return i(R.button, b({
    role: "button",
    type: "button",
    get id() {
      return r.state.buttonId;
    },
    get ["aria-controls"]() {
      return r.state.panelId;
    },
    get ["aria-expanded"]() {
      return r.state.expanded;
    },
    get disabled() {
      return r.state.disabled;
    },
    get class() {
      return c();
    },
    get __baseStyle() {
      var d;
      return (d = t == null ? void 0 : t.baseStyle) == null ? void 0 : d.button;
    },
    onClick: n,
    onFocus: s,
    onKeyDown: l
  }, a));
}
Ic.toString = () => $(so);
const kc = S({
  display: "inline-block",
  flexShrink: 0,
  boxSize: "1em",
  color: "currentColor",
  lineHeight: "1em",
  verticalAlign: "middle"
});
var Pc = ["<path", ' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>'];
const kr = {
  viewBox: "0 0 24 24",
  path: () => le(Pc, ce())
}, ur = "hope-icon";
function ct(e) {
  const t = {
    viewBox: kr.viewBox
  }, r = Z(t, e), [o, a] = v(r, ["as", "class", "children", "viewBox"]), n = () => m(o.class, ur, kc()), s = () => o.as && !Ns(o.as);
  return i(O, {
    get when() {
      return s();
    },
    get fallback() {
      return i(R.svg, b({
        get class() {
          return n();
        },
        get viewBox() {
          return o.viewBox;
        }
      }, a, {
        get children() {
          return i(O, {
            get when() {
              return o.children;
            },
            get fallback() {
              return kr.path();
            },
            get children() {
              return o.children;
            }
          });
        }
      }));
    },
    get children() {
      return i(A, b({
        get as() {
          return o.as;
        },
        get class() {
          return n();
        }
      }, a));
    }
  });
}
ct.toString = () => $(ur);
function ke(e) {
  const {
    viewBox: t = "0 0 24 24",
    defaultProps: r = {}
  } = e, o = (a) => i(ct, b({
    viewBox: t
  }, r, a, {
    get children() {
      return e.path;
    }
  }));
  return o.toString = () => $(ur), o;
}
var Tc = ["<path", ' d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>'];
const zc = ke({
  viewBox: "0 0 15 15",
  path: () => le(Tc, ce())
}), io = "hope-accordion__icon";
function Bc(e) {
  const t = _().Accordion, r = dr(), [o, a] = v(e, ["class"]), n = () => m(o.class, io, Cc({
    expanded: r.state.expanded,
    disabled: r.state.disabled
  }));
  return i(zc, b({
    "aria-hidden": !0,
    get class() {
      return n();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.icon;
    }
  }, a));
}
Bc.toString = () => $(io);
const Lc = S({
  overflow: "hidden"
}), lo = "hope-collapse";
function co(e) {
  const r = Z({
    animateOpacity: !0,
    expandDuration: 300,
    expandTimingFunction: "ease",
    collapseDuration: 300,
    collapseTimingFunction: "ease",
    keepAlive: !0
  }, e), [o, a] = v(r, ["class", "children", "expanded", "animateOpacity", "expandDuration", "expandTimingFunction", "collapseDuration", "collapseTimingFunction", "keepAlive"]), n = lt(() => o.children), s = () => m(o.class, lo, Lc()), l = () => {
    const f = {
      height: 0
    };
    return o.animateOpacity ? {
      ...f,
      opacity: 0
    } : f;
  }, c = (f) => {
    const u = {
      height: `${f.scrollHeight}px`
    };
    return o.animateOpacity ? {
      ...u,
      opacity: 1
    } : u;
  };
  return i(Oe, {
    onEnter: (f, u) => {
      f.animate([l(), c(f)], {
        duration: o.expandDuration,
        easing: o.expandTimingFunction
      }).finished.then(u);
    },
    onExit: (f, u) => {
      f.animate([c(f), l()], {
        duration: o.collapseDuration,
        easing: o.collapseTimingFunction
      }).finished.then(u);
    },
    get children() {
      return i(O, {
        get when() {
          return o.expanded;
        },
        get children() {
          return i(A, b({
            get class() {
              return s();
            }
          }, a, {
            get children() {
              return i(O, {
                get when() {
                  return o.keepAlive;
                },
                get fallback() {
                  return o.children;
                },
                get children() {
                  return n();
                }
              });
            }
          }));
        }
      });
    }
  });
}
co.toString = () => $(lo);
const uo = "hope-accordion__panel";
function Dc(e) {
  const t = _().Accordion, r = dr(), [o, a] = v(e, ["class"]), n = () => m(o.class, uo, $c());
  return i(co, {
    get expanded() {
      return r.state.expanded;
    },
    get children() {
      return i(A, b({
        role: "region",
        get id() {
          return r.state.panelId;
        },
        get ["aria-labelledby"]() {
          return r.state.buttonId;
        },
        get class() {
          return n();
        },
        get __baseStyle() {
          var s;
          return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.panel;
        }
      }, a));
    }
  });
}
Dc.toString = () => $(uo);
const ye = S({
  flexShrink: 0
}), Hc = S({
  fontWeight: "$semibold"
}), Ac = S({
  display: "inline-block"
}), Ec = S({
  position: "relative",
  display: "flex",
  alignItems: "center",
  borderRadius: "$sm",
  px: "$4",
  py: "$3",
  fontSize: "$base",
  lineHeight: "$6",
  variants: {
    variant: {
      solid: {},
      subtle: {},
      "left-accent": {
        borderLeftStyle: "solid",
        borderLeftWidth: "$sizes$1"
      },
      "top-accent": {
        borderTopStyle: "solid",
        borderTopWidth: "$sizes$1"
      }
    },
    status: {
      success: {},
      info: {},
      warning: {},
      danger: {}
    }
  },
  compoundVariants: [
    {
      variant: "solid",
      status: "success",
      css: {
        backgroundColor: "$success9",
        color: "white"
      }
    },
    {
      variant: "solid",
      status: "info",
      css: {
        backgroundColor: "$info9",
        color: "white"
      }
    },
    {
      variant: "solid",
      status: "warning",
      css: {
        backgroundColor: "$warning9",
        color: "$blackAlpha12"
      }
    },
    {
      variant: "solid",
      status: "danger",
      css: {
        backgroundColor: "$danger9",
        color: "white"
      }
    },
    {
      variant: "subtle",
      status: "success",
      css: {
        backgroundColor: "$success3",
        color: "$success11",
        [`& .${ye}`]: {
          color: "$success9"
        }
      }
    },
    {
      variant: "subtle",
      status: "info",
      css: {
        backgroundColor: "$info3",
        color: "$info11",
        [`& .${ye}`]: {
          color: "$info9"
        }
      }
    },
    {
      variant: "subtle",
      status: "warning",
      css: {
        backgroundColor: "$warning3",
        color: "$warning11",
        [`& .${ye}`]: {
          color: "$warning9"
        }
      }
    },
    {
      variant: "subtle",
      status: "danger",
      css: {
        backgroundColor: "$danger3",
        color: "$danger11",
        [`& .${ye}`]: {
          color: "$danger9"
        }
      }
    },
    {
      variant: "left-accent",
      status: "success",
      css: {
        borderLeftColor: "$success9",
        backgroundColor: "$success3",
        color: "$success11",
        [`& .${ye}`]: {
          color: "$success9"
        }
      }
    },
    {
      variant: "left-accent",
      status: "info",
      css: {
        borderLeftColor: "$info9",
        backgroundColor: "$info3",
        color: "$info11",
        [`& .${ye}`]: {
          color: "$info9"
        }
      }
    },
    {
      variant: "left-accent",
      status: "warning",
      css: {
        borderLeftColor: "$warning9",
        backgroundColor: "$warning3",
        color: "$warning11",
        [`& .${ye}`]: {
          color: "$warning9"
        }
      }
    },
    {
      variant: "left-accent",
      status: "danger",
      css: {
        borderLeftColor: "$danger9",
        backgroundColor: "$danger3",
        color: "$danger11",
        [`& .${ye}`]: {
          color: "$danger9"
        }
      }
    },
    {
      variant: "top-accent",
      status: "success",
      css: {
        borderTopColor: "$success9",
        backgroundColor: "$success3",
        color: "$success11",
        [`& .${ye}`]: {
          color: "$success9"
        }
      }
    },
    {
      variant: "top-accent",
      status: "info",
      css: {
        borderTopColor: "$info9",
        backgroundColor: "$info3",
        color: "$info11",
        [`& .${ye}`]: {
          color: "$info9"
        }
      }
    },
    {
      variant: "top-accent",
      status: "warning",
      css: {
        borderTopColor: "$warning9",
        backgroundColor: "$warning3",
        color: "$warning11",
        [`& .${ye}`]: {
          color: "$warning9"
        }
      }
    },
    {
      variant: "top-accent",
      status: "danger",
      css: {
        borderTopColor: "$danger9",
        backgroundColor: "$danger3",
        color: "$danger11",
        [`& .${ye}`]: {
          color: "$danger9"
        }
      }
    }
  ]
}), go = "hope-alert";
function Mc(e) {
  var d, g, f, u, p, C;
  const t = _().Alert, r = {
    variant: (f = (g = (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.root) == null ? void 0 : g.variant) != null ? f : "subtle",
    status: (C = (p = (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.root) == null ? void 0 : p.status) != null ? C : "info"
  }, o = Z(r, e), [a, n] = v(o, ["class", "variant", "status"]), s = () => m(a.class, go, Ec({
    variant: a.variant,
    status: a.status
  })), c = {
    status: () => a.status
  };
  return i(fo.Provider, {
    value: c,
    get children() {
      return i(A, b({
        role: "alert",
        get class() {
          return s();
        },
        get __baseStyle() {
          var z;
          return (z = t == null ? void 0 : t.baseStyle) == null ? void 0 : z.root;
        }
      }, n));
    }
  });
}
Mc.toString = () => $(go);
const fo = ae();
function Oc() {
  const e = re(fo);
  if (!e)
    throw new Error("[Hope UI]: useAlertContext must be used within an `<Alert />` component");
  return e;
}
const po = "hope-alert__description";
function Rc(e) {
  const t = _().Alert, [r, o] = v(e, ["class"]), a = () => m(r.class, po, Ac());
  return i(A, b({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.description;
    }
  }, o));
}
Rc.toString = () => $(po);
var Wc = ["<path", ' fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"></path>'], Fc = ["<path", ' fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z"></path>'];
const ho = ke({
  viewBox: "0 0 32 32",
  path: () => [le(Wc, ce()), le(Fc, ce())]
});
var Nc = ["<path", ' fill="currentColor" d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2zm-1.1 6h2.2v11h-2.2V8zM16 25c-.8 0-1.5-.7-1.5-1.5S15.2 22 16 22s1.5.7 1.5 1.5S16.8 25 16 25z"></path>'];
const bo = ke({
  viewBox: "0 0 32 32",
  path: () => le(Nc, ce())
});
var Vc = ["<path", ' fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M29.4898 29.8706C29.3402 29.9548 29.1713 29.9991 28.9996 29.9993H2.99961C2.82787 29.9991 2.65905 29.9548 2.5094 29.8706C2.35976 29.7864 2.23433 29.665 2.14521 29.5182C2.05608 29.3713 2.00626 29.2041 2.00055 29.0325C1.99485 28.8608 2.03344 28.6907 2.1126 28.5382L15.1126 3.53821C15.1971 3.37598 15.3245 3.23999 15.4808 3.14514C15.6372 3.05017 15.8167 3 15.9996 3C16.1825 3 16.362 3.05017 16.5184 3.14514C16.6748 3.23999 16.8021 3.37598 16.8866 3.53821L29.8866 28.5382C29.9658 28.6907 30.0044 28.8608 29.9986 29.0325C29.9929 29.2041 29.9431 29.3713 29.854 29.5182C29.7649 29.665 29.6395 29.7864 29.4898 29.8706ZM16.0016 6.16919V6.17029H15.9976V6.16919H16.0016ZM15.9996 25.9993C15.7029 25.9993 15.4129 25.9113 15.1662 25.7465C14.9196 25.5817 14.7273 25.3474 14.6138 25.0734C14.5996 25.0391 14.5867 25.0044 14.5752 24.9694C14.4942 24.724 14.4778 24.4613 14.5284 24.2067C14.5863 23.9156 14.7292 23.6484 14.9389 23.4386C14.9652 23.4124 14.9923 23.3872 15.0202 23.3632C15.2159 23.1945 15.4524 23.0787 15.707 23.0281C15.7433 23.0209 15.7799 23.015 15.8165 23.0105C16.0723 22.979 16.3326 23.014 16.572 23.1129L16.5736 23.1135C16.8477 23.2271 17.082 23.4193 17.2468 23.6659C17.2674 23.6968 17.2868 23.7283 17.305 23.7604C17.4322 23.9852 17.4996 24.2397 17.4996 24.4993C17.4996 24.8971 17.3416 25.2787 17.0603 25.5599C16.7789 25.8413 16.3974 25.9993 15.9996 25.9993ZM17.1246 20.9993H14.8746V11.9993H17.1246V20.9993Z"></path>'];
const mo = ke({
  viewBox: "0 0 32 32",
  path: () => le(Vc, ce())
});
var qc = ["<path", ' fill="none" d="M16 8a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8Zm4 13.875h-2.875v-8H13v2.25h1.875v5.75H12v2.25h8Z"></path>'], jc = ["<path", ' fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 6a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8Zm4 16.125h-8v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"></path>'];
const vo = ke({
  viewBox: "0 0 32 32",
  path: () => [le(qc, ce()), le(jc, ce())]
}), So = "hope-alert__icon";
function Kc(e) {
  const t = _().Alert, {
    status: r
  } = Oc(), a = Z({
    boxSize: "$6"
  }, e), [n, s] = v(a, ["as", "class"]), l = () => m(n.class, So, ye()), c = () => {
    if (n.as)
      return n.as;
    switch (r()) {
      case "success":
        return ho;
      case "info":
        return vo;
      case "warning":
        return mo;
      case "danger":
        return bo;
    }
  };
  return i(ct, b({
    get as() {
      return c();
    },
    get class() {
      return l();
    },
    get __baseStyle() {
      var d;
      return (d = t == null ? void 0 : t.baseStyle) == null ? void 0 : d.icon;
    }
  }, s));
}
Kc.toString = () => $(So);
const xo = "hope-alert__title";
function Uc(e) {
  const t = _().Alert, [r, o] = v(e, ["class"]), a = () => m(r.class, xo, Hc());
  return i(A, b({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.title;
    }
  }, o));
}
Uc.toString = () => $(xo);
const Xc = S({
  position: "relative",
  outline: "none",
  backgroundColor: "transparent",
  textDecoration: "none",
  cursor: "pointer",
  transition: "text-decoration 250ms",
  "&:hover": {
    textDecoration: "underline"
  },
  "&:focus": {
    boxShadow: "$outline"
  }
}), Co = "hope-anchor";
function Qc(e) {
  const t = _().Anchor, [r, o] = v(e, ["class", "external"]), a = () => m(r.class, Co, Xc());
  return i(R.a, b({
    get class() {
      return a();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    },
    get target() {
      return r.external ? "_blank" : void 0;
    },
    get rel() {
      return r.external ? "noopener noreferrer" : void 0;
    }
  }, o));
}
Qc.toString = () => $(Co);
const Yc = S({
  position: "relative",
  "&::before": {
    height: 0,
    content: "''",
    display: "block"
  },
  "& > *:not(style)": {
    overflow: "hidden",
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  "& > img, & > video": {
    objectFit: "cover"
  }
}), $o = "hope-aspect-ratio";
function Zc(e) {
  const r = Z({
    ratio: 1.3333333333333333
  }, e), [o, a] = v(r, ["class", "ratio"]), n = () => m(o.class, $o, Yc()), s = () => cr(o.ratio, (l) => `${1 / l * 100}%`);
  return i(A, b({
    get class() {
      return n();
    },
    get _before() {
      return {
        paddingBottom: s()
      };
    }
  }, a));
}
Zc.toString = () => $($o);
const jt = "hope-icon-button", Jc = S({
  display: "inline-flex",
  alignSelf: "center",
  flexShrink: 0
}), Gc = S({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  fontSize: "1em",
  lineHeight: "$normal",
  variants: {
    withLoadingText: {
      true: {
        position: "relative"
      }
    }
  }
}), ed = S({
  fontSize: "1.3em",
  animation: `1s linear infinite ${Nt}`
});
function St(e) {
  return {
    height: e.height,
    py: 0,
    px: e.paddingX,
    fontSize: e.fontSize,
    [`&.${jt}`]: {
      width: e.height,
      padding: "0"
    }
  };
}
function xt(e) {
  return {
    height: e.height,
    py: 0,
    px: e.paddingX,
    [`&.${jt}`]: {
      width: e.height,
      padding: "0"
    }
  };
}
function Ue(e) {
  return {
    backgroundColor: e.bgColor,
    color: e.color,
    "&:hover": {
      backgroundColor: e.bgColorHover
    }
  };
}
function Xe(e) {
  return {
    backgroundColor: e.bgColor,
    color: e.color,
    "&:hover": {
      backgroundColor: e.bgColorHover
    },
    "&:active": {
      backgroundColor: e.bgColorActive
    }
  };
}
function Ce(e) {
  return {
    borderColor: e.borderColor,
    color: e.color,
    "&:hover": {
      borderColor: e.borderColorHover,
      backgroundColor: e.bgColorHover
    },
    "&:active": {
      backgroundColor: e.bgColorActive
    }
  };
}
function Qe(e) {
  return {
    color: e.color,
    "&:hover": {
      backgroundColor: e.bgColorHover
    },
    "&:active": {
      backgroundColor: e.bgColorActive
    }
  };
}
const yo = S({
  appearance: "none",
  position: "relative",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  outline: "none",
  borderRadius: "$sm",
  padding: "0",
  fontWeight: "$medium",
  lineHeight: "$none",
  textDecoration: "none",
  cursor: "pointer",
  userSelect: "none",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  transition: "color 250ms, background-color 250ms, box-shadow 250ms",
  "&:focus": {
    outline: "none",
    boxShadow: "$outline"
  },
  "&:disabled, &:hover:disabled": {
    color: "$neutral7",
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      solid: {
        border: "1px solid transparent",
        "&:disabled, &:hover:disabled": {
          backgroundColor: "$neutral3"
        }
      },
      subtle: {
        border: "1px solid transparent",
        "&:disabled, &:hover:disabled": {
          backgroundColor: "$neutral3"
        }
      },
      outline: {
        borderStyle: "solid",
        borderWidth: "1px",
        backgroundColor: "transparent",
        "&:disabled, &:hover:disabled": {
          borderColor: "$neutral3"
        }
      },
      dashed: {
        borderStyle: "dashed",
        borderWidth: "1px",
        backgroundColor: "transparent",
        "&:disabled, &:hover:disabled": {
          borderColor: "$neutral3"
        }
      },
      ghost: {
        border: "1px solid transparent",
        backgroundColor: "transparent"
      }
    },
    colorScheme: {
      primary: {},
      accent: {},
      neutral: {},
      success: {},
      info: {},
      warning: {},
      danger: {}
    },
    size: {
      xs: St({
        height: "$6",
        paddingX: "$2",
        fontSize: "$xs",
        spacing: "$1"
      }),
      sm: St({
        height: "$8",
        paddingX: "$3",
        fontSize: "$sm",
        spacing: "$1_5"
      }),
      md: St({
        height: "$10",
        paddingX: "$4",
        fontSize: "$base",
        spacing: "$1_5"
      }),
      lg: St({
        height: "$12",
        paddingX: "$6",
        fontSize: "$lg",
        spacing: "$2"
      }),
      xl: St({
        height: "$16",
        paddingX: "$10",
        fontSize: "$xl",
        spacing: "$2"
      })
    },
    compact: {
      true: {},
      false: {}
    },
    fullWidth: {
      true: {
        display: "flex",
        width: "100%"
      },
      false: {
        display: "inline-flex",
        width: "auto"
      }
    },
    loading: {
      true: {
        opacity: "0.75",
        cursor: "default",
        pointerEvents: "none"
      },
      false: {}
    }
  },
  compoundVariants: [
    {
      variant: "solid",
      colorScheme: "primary",
      css: Ue({
        color: "white",
        bgColor: "$primary9",
        bgColorHover: "$primary10"
      })
    },
    {
      variant: "solid",
      colorScheme: "accent",
      css: Ue({
        color: "white",
        bgColor: "$accent9",
        bgColorHover: "$accent10"
      })
    },
    {
      variant: "solid",
      colorScheme: "neutral",
      css: Ue({
        color: "white",
        bgColor: "$neutral9",
        bgColorHover: "$neutral10"
      })
    },
    {
      variant: "solid",
      colorScheme: "success",
      css: Ue({
        color: "white",
        bgColor: "$success9",
        bgColorHover: "$success10"
      })
    },
    {
      variant: "solid",
      colorScheme: "info",
      css: Ue({
        color: "white",
        bgColor: "$info9",
        bgColorHover: "$info10"
      })
    },
    {
      variant: "solid",
      colorScheme: "warning",
      css: Ue({
        color: "$blackAlpha12",
        bgColor: "$warning9",
        bgColorHover: "$warning10"
      })
    },
    {
      variant: "solid",
      colorScheme: "danger",
      css: Ue({
        color: "white",
        bgColor: "$danger9",
        bgColorHover: "$danger10"
      })
    },
    {
      variant: "subtle",
      colorScheme: "primary",
      css: Xe({
        color: "$primary11",
        bgColor: "$primary4",
        bgColorHover: "$primary5",
        bgColorActive: "$primary6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "accent",
      css: Xe({
        color: "$accent11",
        bgColor: "$accent4",
        bgColorHover: "$accent5",
        bgColorActive: "$accent6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "neutral",
      css: Xe({
        color: "$neutral12",
        bgColor: "$neutral4",
        bgColorHover: "$neutral5",
        bgColorActive: "$neutral6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "success",
      css: Xe({
        color: "$success11",
        bgColor: "$success4",
        bgColorHover: "$success5",
        bgColorActive: "$success6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "info",
      css: Xe({
        color: "$info11",
        bgColor: "$info4",
        bgColorHover: "$info5",
        bgColorActive: "$info6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "warning",
      css: Xe({
        color: "$warning11",
        bgColor: "$warning4",
        bgColorHover: "$warning5",
        bgColorActive: "$warning6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "danger",
      css: Xe({
        color: "$danger11",
        bgColor: "$danger4",
        bgColorHover: "$danger5",
        bgColorActive: "$danger6"
      })
    },
    {
      variant: "outline",
      colorScheme: "primary",
      css: Ce({
        color: "$primary11",
        borderColor: "$primary7",
        borderColorHover: "$primary8",
        bgColorHover: "$primary4",
        bgColorActive: "$primary5"
      })
    },
    {
      variant: "outline",
      colorScheme: "accent",
      css: Ce({
        color: "$accent11",
        borderColor: "$accent7",
        borderColorHover: "$accent8",
        bgColorHover: "$accent4",
        bgColorActive: "$accent5"
      })
    },
    {
      variant: "outline",
      colorScheme: "neutral",
      css: Ce({
        color: "$neutral12",
        borderColor: "$neutral7",
        borderColorHover: "$neutral8",
        bgColorHover: "$neutral4",
        bgColorActive: "$neutral5"
      })
    },
    {
      variant: "outline",
      colorScheme: "success",
      css: Ce({
        color: "$success11",
        borderColor: "$success7",
        borderColorHover: "$success8",
        bgColorHover: "$success4",
        bgColorActive: "$success5"
      })
    },
    {
      variant: "outline",
      colorScheme: "info",
      css: Ce({
        color: "$info11",
        borderColor: "$info7",
        borderColorHover: "$info8",
        bgColorHover: "$info4",
        bgColorActive: "$info5"
      })
    },
    {
      variant: "outline",
      colorScheme: "warning",
      css: Ce({
        color: "$warning11",
        borderColor: "$warning7",
        borderColorHover: "$warning8",
        bgColorHover: "$warning4",
        bgColorActive: "$warning5"
      })
    },
    {
      variant: "outline",
      colorScheme: "danger",
      css: Ce({
        color: "$danger11",
        borderColor: "$danger7",
        borderColorHover: "$danger8",
        bgColorHover: "$danger4",
        bgColorActive: "$danger5"
      })
    },
    {
      variant: "dashed",
      colorScheme: "primary",
      css: Ce({
        color: "$primary11",
        borderColor: "$primary7",
        borderColorHover: "$primary8",
        bgColorHover: "$primary4",
        bgColorActive: "$primary5"
      })
    },
    {
      variant: "dashed",
      colorScheme: "accent",
      css: Ce({
        color: "$accent11",
        borderColor: "$accent7",
        borderColorHover: "$accent8",
        bgColorHover: "$accent4",
        bgColorActive: "$accent5"
      })
    },
    {
      variant: "dashed",
      colorScheme: "neutral",
      css: Ce({
        color: "$neutral12",
        borderColor: "$neutral7",
        borderColorHover: "$neutral8",
        bgColorHover: "$neutral4",
        bgColorActive: "$neutral5"
      })
    },
    {
      variant: "dashed",
      colorScheme: "success",
      css: Ce({
        color: "$success11",
        borderColor: "$success7",
        borderColorHover: "$success8",
        bgColorHover: "$success4",
        bgColorActive: "$success5"
      })
    },
    {
      variant: "dashed",
      colorScheme: "info",
      css: Ce({
        color: "$info11",
        borderColor: "$info7",
        borderColorHover: "$info8",
        bgColorHover: "$info4",
        bgColorActive: "$info5"
      })
    },
    {
      variant: "dashed",
      colorScheme: "warning",
      css: Ce({
        color: "$warning11",
        borderColor: "$warning7",
        borderColorHover: "$warning8",
        bgColorHover: "$warning4",
        bgColorActive: "$warning5"
      })
    },
    {
      variant: "dashed",
      colorScheme: "danger",
      css: Ce({
        color: "$danger11",
        borderColor: "$danger7",
        borderColorHover: "$danger8",
        bgColorHover: "$danger4",
        bgColorActive: "$danger5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "primary",
      css: Qe({
        color: "$primary11",
        bgColorHover: "$primary4",
        bgColorActive: "$primary5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "accent",
      css: Qe({
        color: "$accent11",
        bgColorHover: "$accent4",
        bgColorActive: "$accent5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "neutral",
      css: Qe({
        color: "$neutral12",
        bgColorHover: "$neutral4",
        bgColorActive: "$neutral5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "success",
      css: Qe({
        color: "$success11",
        bgColorHover: "$success4",
        bgColorActive: "$success5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "info",
      css: Qe({
        color: "$info11",
        bgColorHover: "$info4",
        bgColorActive: "$info5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "warning",
      css: Qe({
        color: "$warning11",
        bgColorHover: "$warning4",
        bgColorActive: "$warning5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "danger",
      css: Qe({
        color: "$danger11",
        bgColorHover: "$danger4",
        bgColorActive: "$danger5"
      })
    },
    {
      size: "xs",
      compact: "true",
      css: xt({ height: "$5", paddingX: "$1" })
    },
    {
      size: "sm",
      compact: "true",
      css: xt({ height: "$6", paddingX: "$1_5" })
    },
    {
      size: "md",
      compact: "true",
      css: xt({ height: "$7", paddingX: "$2" })
    },
    {
      size: "lg",
      compact: "true",
      css: xt({ height: "$8", paddingX: "$2_5" })
    },
    {
      size: "xl",
      compact: "true",
      css: xt({ height: "$10", paddingX: "$3_5" })
    }
  ]
}), td = S({
  display: "inline-flex",
  [`& .${yo}:focus`]: {
    zIndex: 1
  }
}), wo = "hope-button__group", _o = ae();
function rd(e) {
  var g, f, u, p, C, z;
  const t = _().Button, [r] = ie({
    get variant() {
      var h, y, w;
      return (w = e.variant) != null ? w : (y = (h = t == null ? void 0 : t.defaultProps) == null ? void 0 : h.group) == null ? void 0 : y.variant;
    },
    get colorScheme() {
      var h, y, w;
      return (w = e.colorScheme) != null ? w : (y = (h = t == null ? void 0 : t.defaultProps) == null ? void 0 : h.group) == null ? void 0 : y.colorScheme;
    },
    get size() {
      var h, y, w;
      return (w = e.size) != null ? w : (y = (h = t == null ? void 0 : t.defaultProps) == null ? void 0 : h.group) == null ? void 0 : y.size;
    },
    get disabled() {
      return e.disabled;
    }
  }), o = {
    attached: (u = (f = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.group) == null ? void 0 : f.attached) != null ? u : !1,
    spacing: (z = (C = (p = t == null ? void 0 : t.defaultProps) == null ? void 0 : p.group) == null ? void 0 : C.spacing) != null ? z : "0.5rem"
  }, a = Z(o, e), [n, s, l] = v(a, ["class", "attached", "spacing"], ["variant", "colorScheme", "size", "disabled"]), c = () => m(n.class, wo, td({
    css: n.attached ? {
      "> *:first-of-type:not(:last-of-type)": {
        borderRightRadius: 0
      },
      "> *:not(:first-of-type):not(:last-of-type)": {
        borderRadius: 0
      },
      "> *:not(:first-of-type):last-of-type": {
        borderLeftRadius: 0
      }
    } : {
      "& > *:not(style) ~ *:not(style)": {
        marginStart: n.spacing
      }
    }
  })), d = {
    state: r
  };
  return i(_o.Provider, {
    value: d,
    get children() {
      return i(A, b({
        role: "group",
        get class() {
          return c();
        },
        get __baseStyle() {
          var h;
          return (h = t == null ? void 0 : t.baseStyle) == null ? void 0 : h.group;
        }
      }, l));
    }
  });
}
rd.toString = () => $(wo);
function Io() {
  return re(_o);
}
const ko = "hope-button__icon";
function or(e) {
  const [t, r] = v(e, ["class", "children"]), o = () => m(t.class, ko, Jc());
  return i(R.span, b({
    get class() {
      return o();
    }
  }, r, {
    get children() {
      return t.children;
    }
  }));
}
or.toString = () => $(ko);
var od = ["<g", ' fill="none"><path opacity=".2" fill-rule="evenodd" clip-rule="evenodd" d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z" fill="currentColor"></path><path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2z" fill="currentColor"></path></g>'];
const Po = ke({
  path: () => le(od, ce())
}), To = "hope-button__loader";
function nr(e) {
  const t = {
    spacing: "0.5rem",
    children: i(Po, {
      get class() {
        return ed();
      }
    })
  }, r = Z(t, e), [o, a] = v(r, ["class", "children", "withLoadingText", "placement", "spacing"]), n = () => o.placement === "start" ? "marginEnd" : "marginStart", s = () => ({
    [n()]: o.withLoadingText ? o.spacing : 0
  }), l = () => m(o.class, To, Gc({
    withLoadingText: o.withLoadingText
  }));
  return i(R.div, b({
    get class() {
      return l();
    }
  }, s, a, {
    get children() {
      return o.children;
    }
  }));
}
nr.toString = () => $(To);
const gr = "hope-button";
function fr(e) {
  var g, f, u;
  const t = _().Button, r = Io(), o = {
    loaderPlacement: (u = (f = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.root) == null ? void 0 : f.loaderPlacement) != null ? u : "start",
    iconSpacing: "0.5rem",
    type: "button",
    role: "button"
  }, a = Z(o, e), [n, s, l] = v(a, ["class", "disabled", "loadingText", "loader", "loaderPlacement", "variant", "colorScheme", "size", "loading", "compact", "fullWidth"], ["children", "iconSpacing", "leftIcon", "rightIcon"]), c = () => {
    var p;
    return (p = n.disabled) != null ? p : r == null ? void 0 : r.state.disabled;
  }, d = () => {
    var p, C, z, h, y, w, x, k, L, H, q, D, W, I, T;
    return m(n.class, gr, yo({
      variant: (y = (h = (p = n.variant) != null ? p : r == null ? void 0 : r.state.variant) != null ? h : (z = (C = t == null ? void 0 : t.defaultProps) == null ? void 0 : C.root) == null ? void 0 : z.variant) != null ? y : "solid",
      colorScheme: (H = (L = (w = n.colorScheme) != null ? w : r == null ? void 0 : r.state.colorScheme) != null ? L : (k = (x = t == null ? void 0 : t.defaultProps) == null ? void 0 : x.root) == null ? void 0 : k.colorScheme) != null ? H : "primary",
      size: (T = (I = (q = n.size) != null ? q : r == null ? void 0 : r.state.size) != null ? I : (W = (D = t == null ? void 0 : t.defaultProps) == null ? void 0 : D.root) == null ? void 0 : W.size) != null ? T : "md",
      loading: n.loading,
      compact: n.compact,
      fullWidth: n.fullWidth
    }));
  };
  return i(R.button, b({
    get class() {
      return d();
    },
    get disabled() {
      return c();
    },
    get __baseStyle() {
      var p;
      return (p = t == null ? void 0 : t.baseStyle) == null ? void 0 : p.root;
    }
  }, l, {
    get children() {
      return [i(O, {
        get when() {
          return n.loading && n.loaderPlacement === "start";
        },
        get children() {
          return i(nr, {
            class: "hope-button__loader--start",
            get withLoadingText() {
              return !!n.loadingText;
            },
            placement: "start",
            get spacing() {
              return s.iconSpacing;
            },
            get children() {
              return n.loader;
            }
          });
        }
      }), i(O, {
        get when() {
          return n.loading;
        },
        get fallback() {
          return i(Pr, s);
        },
        get children() {
          return i(O, {
            get when() {
              return n.loadingText;
            },
            get fallback() {
              return i(R.span, {
                opacity: 0,
                get children() {
                  return i(Pr, s);
                }
              });
            },
            get children() {
              return n.loadingText;
            }
          });
        }
      }), i(O, {
        get when() {
          return n.loading && n.loaderPlacement === "end";
        },
        get children() {
          return i(nr, {
            class: "hope-button__loader--end",
            get withLoadingText() {
              return !!n.loadingText;
            },
            placement: "end",
            get spacing() {
              return s.iconSpacing;
            },
            get children() {
              return n.loader;
            }
          });
        }
      })];
    }
  }));
}
fr.toString = () => $(gr);
function Pr(e) {
  return [i(O, {
    get when() {
      return e.leftIcon;
    },
    get children() {
      return i(or, {
        get marginEnd() {
          return e.iconSpacing;
        },
        get children() {
          return e.leftIcon;
        }
      });
    }
  }), e.children, i(O, {
    get when() {
      return e.rightIcon;
    },
    get children() {
      return i(or, {
        get marginStart() {
          return e.iconSpacing;
        },
        get children() {
          return e.rightIcon;
        }
      });
    }
  })];
}
function nd(e) {
  const [t, r] = v(e, ["onClick"]), [o, a] = oe(!1);
  return i(fr, b({
    get loading() {
      return o();
    }
  }, r, {
    onClick: (s) => {
      t.onClick && (a(!0), t.onClick(s).finally(() => a(!1)));
    }
  }));
}
nd.toString = () => $(gr);
function Ye(e) {
  return {
    boxSize: e,
    fontSize: `calc(${e} / 2.5)`,
    lineHeight: e
  };
}
const pr = S({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  borderRadius: "$full",
  borderColor: "$loContrast",
  backgroundColor: "$neutral8",
  color: "$neutral12",
  fontWeight: "$medium",
  textAlign: "center",
  textTransform: "uppercase",
  verticalAlign: "top",
  variants: {
    size: {
      "2xs": Ye("$sizes$4"),
      xs: Ye("$sizes$6"),
      sm: Ye("$sizes$8"),
      md: Ye("$sizes$12"),
      lg: Ye("$sizes$16"),
      xl: Ye("$sizes$24"),
      "2xl": Ye("$sizes$32"),
      full: {
        boxSize: "$full",
        fontSize: "calc($sizes$full / 2.5)"
      }
    },
    withBorder: {
      true: {}
    }
  },
  compoundVariants: [
    {
      withBorder: !0,
      size: "2xs",
      css: { borderWidth: "1px" }
    },
    {
      withBorder: !0,
      size: "xs",
      css: { borderWidth: "1px" }
    },
    {
      withBorder: !0,
      size: "sm",
      css: { borderWidth: "2px" }
    },
    {
      withBorder: !0,
      size: "md",
      css: { borderWidth: "2px" }
    },
    {
      withBorder: !0,
      size: "lg",
      css: { borderWidth: "3px" }
    },
    {
      withBorder: !0,
      size: "xl",
      css: { borderWidth: "4px" }
    },
    {
      withBorder: !0,
      size: "2xl",
      css: { borderWidth: "5px" }
    },
    {
      withBorder: !0,
      size: "full",
      css: { borderWidth: "2px" }
    }
  ]
}), ad = S(pr), sd = S({
  boxSize: "$full",
  borderRadius: "$full",
  objectFit: "cover"
}), id = S({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$full",
  borderWidth: "0.2em",
  borderStyle: "solid",
  borderColor: "$loContrast",
  variants: {
    placement: {
      "top-start": {
        insetInlineStart: "0",
        top: "0",
        transform: "translate(-25%, -25%)"
      },
      "top-end": {
        insetInlineEnd: "0",
        top: "0",
        transform: "translate(25%, -25%)"
      },
      "bottom-start": {
        insetInlineStart: "0",
        bottom: "0",
        transform: "translate(-25%, 25%)"
      },
      "bottom-end": {
        insetInlineEnd: "0",
        bottom: "0",
        transform: "translate(25%, 25%)"
      }
    }
  }
}), ld = S({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  [`& .${pr}:first-child`]: {
    marginStart: "0"
  }
});
var cd = ["<path", ' fill="currentColor" d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"></path>'], dd = ["<path", ' fill="currentColor" d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"></path>'];
function ud(e) {
  const [t, r] = e.split(" ");
  return t && r ? `${t.charAt(0)}${r.charAt(0)}` : t.charAt(0);
}
function gd(e) {
  return i(R.svg, b({
    viewBox: "0 0 128 128",
    class: "hope-avatar__svg",
    color: "$loContrast",
    boxSize: "$full"
  }, e, {
    get children() {
      return [le(cd, ce()), le(dd, ce())];
    }
  }));
}
const zo = ae(), Bo = "hope-avatar__group";
function fd(e) {
  const t = _().Avatar, [r] = ie({
    get size() {
      var l, c, d, g;
      return (g = (d = e.size) != null ? d : (c = (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.group) == null ? void 0 : c.size) != null ? g : "md";
    },
    get spacing() {
      var l, c, d, g;
      return (g = (d = e.spacing) != null ? d : (c = (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.group) == null ? void 0 : c.spacing) != null ? g : "-1em";
    },
    get avatarBorderRadius() {
      var l, c, d;
      return (d = e.avatarBorderRadius) != null ? d : (c = (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.group) == null ? void 0 : c.avatarBorderRadius;
    },
    get avatarBorderColor() {
      var l, c, d;
      return (d = e.avatarBorderColor) != null ? d : (c = (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.group) == null ? void 0 : c.avatarBorderColor;
    },
    get avatarBorderWidth() {
      var l, c, d;
      return (d = e.avatarBorderWidth) != null ? d : (c = (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.group) == null ? void 0 : c.avatarBorderWidth;
    }
  }), [o, a] = v(e, ["class", "size", "spacing", "avatarBorderRadius", "avatarBorderColor", "avatarBorderWidth"]), n = () => m(o.class, Bo, ld()), s = {
    state: r
  };
  return i(zo.Provider, {
    value: s,
    get children() {
      return i(A, b({
        role: "group",
        get class() {
          return n();
        },
        get __baseStyle() {
          var l;
          return (l = t == null ? void 0 : t.baseStyle) == null ? void 0 : l.group;
        }
      }, a));
    }
  });
}
fd.toString = () => $(Bo);
function Lo() {
  return re(zo);
}
function Do(e) {
  const [t, r] = oe("pending"), o = () => e.ignoreFallback ? "loaded" : t();
  let a = null;
  const n = () => {
    a && (a.onload = null, a.onerror = null, a = null);
  }, s = () => {
    if (!e.src)
      return;
    n();
    const l = new Image();
    l.src = e.src, e.crossOrigin && (l.crossOrigin = e.crossOrigin), e.srcSet && (l.srcset = e.srcSet), e.sizes && (l.sizes = e.sizes), e.loading && (l.loading = e.loading), l.onload = (c) => {
      n(), r("loaded"), he(e.onLoad, c);
    }, l.onerror = (c) => {
      n(), r("failed"), he(e.onError, c);
    }, a = l;
  };
  return ve(() => {
    r(e.src ? "loading" : "pending");
  }), Hs(() => {
    e.ignoreFallback || (t() === "loading" && s(), be(() => {
      n();
    }));
  }), o;
}
const Ho = "hope-avatar__initials";
function Ao(e) {
  const t = _().Avatar, [r, o] = v(e, ["class", "getInitials", "name"]), a = () => m(r.class, Ho), n = () => {
    var s;
    return r.name && ((s = r.getInitials) == null ? void 0 : s.call(r, r.name));
  };
  return i(A, b({
    role: "img",
    get ["aria-label"]() {
      return r.name;
    },
    get class() {
      return a();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.initials;
    }
  }, o, {
    get children() {
      return n();
    }
  }));
}
Ao.toString = () => $(Ho);
const Eo = "hope-avatar__image";
function Mo(e) {
  const t = _().Avatar, [r, o] = v(e, ["class", "src", "srcSet", "getInitials", "name", "loading", "iconLabel", "icon", "ignoreFallback", "onError"]), a = we(() => Do({
    src: r.src,
    onError: r.onError,
    ignoreFallback: r.ignoreFallback
  })), n = () => m(r.class, Eo, sd()), s = () => !!r.src && a()() === "loaded", l = () => {
    var c;
    return {
      role: "img",
      "aria-label": (c = r.iconLabel) != null ? c : "avatar"
    };
  };
  return i(O, {
    get when() {
      return s();
    },
    get fallback() {
      return i(O, {
        get when() {
          return r.name;
        },
        get fallback() {
          var c;
          return (c = r.icon) == null ? void 0 : c.call(r, l());
        },
        get children() {
          return i(Ao, {
            get getInitials() {
              return r.getInitials;
            },
            get name() {
              return r.name;
            }
          });
        }
      });
    },
    get children() {
      return i(R.img, b({
        get class() {
          return n();
        },
        get src() {
          return r.src;
        },
        get srcSet() {
          return r.srcSet;
        },
        get alt() {
          return r.name;
        },
        get loading() {
          return r.loading;
        },
        get __baseStyle() {
          var c;
          return (c = t == null ? void 0 : t.baseStyle) == null ? void 0 : c.image;
        }
      }, o));
    }
  });
}
Mo.toString = () => $(Eo);
const Oo = "hope-avatar";
function pd(e) {
  var c, d, g, f, u, p, C, z, h, y, w, x, k, L;
  const t = _().Avatar, r = Lo(), o = {
    icon: (g = (d = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.root) == null ? void 0 : d.icon) != null ? g : (H) => i(gd, H),
    iconLabel: (p = (u = (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.root) == null ? void 0 : u.iconLabel) != null ? p : "avatar",
    getInitials: (h = (z = (C = t == null ? void 0 : t.defaultProps) == null ? void 0 : C.root) == null ? void 0 : z.getInitials) != null ? h : ud,
    ignoreFallback: (x = (w = (y = t == null ? void 0 : t.defaultProps) == null ? void 0 : y.root) == null ? void 0 : w.ignoreFallback) != null ? x : !1,
    loading: (L = (k = t == null ? void 0 : t.defaultProps) == null ? void 0 : k.root) == null ? void 0 : L.loading
  }, a = Z(o, e), [n, s] = v(a, ["class", "children", "size", "withBorder", "src", "srcSet", "name", "borderRadius", "onError", "getInitials", "icon", "iconLabel", "loading", "ignoreFallback", "imageProps"]), l = () => {
    var H, q, D, W, I, T, E, U, K, te;
    return m(n.class, Oo, pr({
      size: (I = (W = (H = n.size) != null ? H : r == null ? void 0 : r.state.size) != null ? W : (D = (q = t == null ? void 0 : t.defaultProps) == null ? void 0 : q.root) == null ? void 0 : D.size) != null ? I : "md",
      withBorder: (te = (K = (T = n.withBorder) != null ? T : !!r) != null ? K : (U = (E = t == null ? void 0 : t.defaultProps) == null ? void 0 : E.root) == null ? void 0 : U.withBorder) != null ? te : !1
    }));
  };
  return i(R.span, b({
    get class() {
      return l();
    },
    get __baseStyle() {
      var H;
      return (H = t == null ? void 0 : t.baseStyle) == null ? void 0 : H.root;
    },
    get borderRadius() {
      var H;
      return (H = n.borderRadius) != null ? H : r == null ? void 0 : r.state.avatarBorderRadius;
    },
    get borderColor() {
      return r == null ? void 0 : r.state.avatarBorderColor;
    },
    get borderWidth() {
      return r == null ? void 0 : r.state.avatarBorderWidth;
    },
    get marginStart() {
      return r == null ? void 0 : r.state.spacing;
    }
  }, s, {
    get children() {
      return [i(Mo, b({
        get src() {
          return n.src;
        },
        get srcSet() {
          return n.srcSet;
        },
        get loading() {
          return n.loading;
        },
        get getInitials() {
          return n.getInitials;
        },
        get name() {
          return n.name;
        },
        get icon() {
          return n.icon;
        },
        get iconLabel() {
          return n.iconLabel;
        },
        get ignoreFallback() {
          return n.ignoreFallback;
        },
        get borderRadius() {
          var H;
          return (H = n.borderRadius) != null ? H : r == null ? void 0 : r.state.avatarBorderRadius;
        },
        get onError() {
          return n.onError;
        }
      }, () => n.imageProps)), n.children];
    }
  }));
}
pd.toString = () => $(Oo);
const Ro = "hope-avatar__badge";
function hd(e) {
  const t = _().Avatar, [r, o] = v(e, ["class", "placement"]), a = () => {
    var n;
    return m(r.class, Ro, id({
      placement: (n = r.placement) != null ? n : "bottom-end"
    }));
  };
  return i(A, b({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.badge;
    }
  }, o));
}
hd.toString = () => $(Ro);
const Wo = "hope-avatar__excess";
function bd(e) {
  const t = _().Avatar, r = Lo(), [o, a] = v(e, ["class", "size", "withBorder"]), n = () => {
    var s, l, c, d, g, f, u, p, C, z;
    return m(o.class, Wo, ad({
      size: (g = (d = (s = o.size) != null ? s : r == null ? void 0 : r.state.size) != null ? d : (c = (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.root) == null ? void 0 : c.size) != null ? g : "md",
      withBorder: (z = (C = (f = o.withBorder) != null ? f : !!r) != null ? C : (p = (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.root) == null ? void 0 : p.withBorder) != null ? z : !1
    }));
  };
  return i(R.span, b({
    get class() {
      return n();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.excess;
    },
    get borderRadius() {
      return r == null ? void 0 : r.state.avatarBorderRadius;
    },
    get borderColor() {
      return r == null ? void 0 : r.state.avatarBorderColor;
    },
    get borderWidth() {
      return r == null ? void 0 : r.state.avatarBorderWidth;
    },
    get marginStart() {
      return r == null ? void 0 : r.state.spacing;
    }
  }, a));
}
bd.toString = () => $(Wo);
const md = S({
  display: "inline-block",
  borderRadius: "$sm",
  py: "$0_5",
  px: "$1",
  fontSize: "$xs",
  fontWeight: "$bold",
  lineHeight: "$none",
  letterSpacing: "$wide",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  variants: {
    variant: {
      solid: {
        border: "1px solid transparent",
        color: "white"
      },
      subtle: {
        border: "1px solid transparent"
      },
      outline: {
        borderStyle: "solid",
        borderWidth: "1px",
        backgroundColor: "transparent"
      }
    },
    colorScheme: {
      primary: {},
      accent: {},
      neutral: {},
      success: {},
      info: {},
      warning: {},
      danger: {}
    }
  },
  compoundVariants: [
    {
      variant: "solid",
      colorScheme: "primary",
      css: {
        color: "white",
        bgColor: "$primary9"
      }
    },
    {
      variant: "solid",
      colorScheme: "accent",
      css: {
        color: "white",
        bgColor: "$accent9"
      }
    },
    {
      variant: "solid",
      colorScheme: "neutral",
      css: {
        color: "white",
        bgColor: "$neutral9"
      }
    },
    {
      variant: "solid",
      colorScheme: "success",
      css: {
        color: "white",
        bgColor: "$success9"
      }
    },
    {
      variant: "solid",
      colorScheme: "info",
      css: {
        color: "white",
        bgColor: "$info9"
      }
    },
    {
      variant: "solid",
      colorScheme: "warning",
      css: {
        color: "$blackAlpha12",
        bgColor: "$warning9"
      }
    },
    {
      variant: "solid",
      colorScheme: "danger",
      css: {
        color: "white",
        bgColor: "$danger9"
      }
    },
    {
      variant: "subtle",
      colorScheme: "primary",
      css: {
        color: "$primary11",
        bgColor: "$primary4"
      }
    },
    {
      variant: "subtle",
      colorScheme: "accent",
      css: {
        color: "$accent11",
        bgColor: "$accent4"
      }
    },
    {
      variant: "subtle",
      colorScheme: "neutral",
      css: {
        color: "$neutral12",
        bgColor: "$neutral4"
      }
    },
    {
      variant: "subtle",
      colorScheme: "success",
      css: {
        color: "$success11",
        bgColor: "$success4"
      }
    },
    {
      variant: "subtle",
      colorScheme: "info",
      css: {
        color: "$info11",
        bgColor: "$info4"
      }
    },
    {
      variant: "subtle",
      colorScheme: "warning",
      css: {
        color: "$warning11",
        bgColor: "$warning4"
      }
    },
    {
      variant: "subtle",
      colorScheme: "danger",
      css: {
        color: "$danger11",
        bgColor: "$danger4"
      }
    },
    {
      variant: "outline",
      colorScheme: "primary",
      css: {
        color: "$primary11",
        borderColor: "$primary7"
      }
    },
    {
      variant: "outline",
      colorScheme: "accent",
      css: {
        color: "$accent11",
        borderColor: "$accent7"
      }
    },
    {
      variant: "outline",
      colorScheme: "neutral",
      css: {
        color: "$neutral12",
        borderColor: "$neutral7"
      }
    },
    {
      variant: "outline",
      colorScheme: "success",
      css: {
        color: "$success11",
        borderColor: "$success7"
      }
    },
    {
      variant: "outline",
      colorScheme: "info",
      css: {
        color: "$info11",
        borderColor: "$info7"
      }
    },
    {
      variant: "outline",
      colorScheme: "warning",
      css: {
        color: "$warning11",
        borderColor: "$warning7"
      }
    },
    {
      variant: "outline",
      colorScheme: "danger",
      css: {
        color: "$danger11",
        borderColor: "$danger7"
      }
    }
  ]
}), Fo = "hope-badge";
function vd(e) {
  var c, d, g, f;
  const t = _().Badge, r = {
    variant: (d = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.variant) != null ? d : "subtle",
    colorScheme: (f = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.colorScheme) != null ? f : "neutral"
  }, o = Z(r, e), [a, n, s] = v(o, ["class"], ["variant", "colorScheme"]), l = () => m(a.class, Fo, md(n));
  return i(R.span, b({
    get class() {
      return l();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    }
  }, s));
}
vd.toString = () => $(Fo);
const Sd = S({
  display: "block",
  fontSize: "$base",
  lineHeight: "$6"
}), xd = S({
  display: "flex",
  alignItems: "center",
  margin: 0,
  padding: 0,
  listStyle: "none"
}), Cd = S({
  display: "inline-flex",
  alignItems: "center"
}), $d = S({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
}), yd = S({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  outline: "none",
  backgroundColor: "transparent",
  color: "$neutral11",
  textDecoration: "none",
  cursor: "pointer",
  transition: "color 250ms, text-decoration 250ms",
  "&:focus": {
    boxShadow: "$outline"
  },
  variants: {
    currentPage: {
      true: {
        color: "$neutral12",
        cursor: "default"
      },
      false: {
        "&:hover": {
          color: "$primary11"
        }
      }
    }
  }
}), No = ae(), Vo = "hope-breadcrumb", wd = "hope-breadcrumb__list";
function _d(e) {
  const t = _().Breadcrumb, [r] = ie({
    get spacing() {
      var c, d, g, f;
      return (f = (g = e.spacing) != null ? g : (d = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.root) == null ? void 0 : d.spacing) != null ? f : "0.5rem";
    },
    get separator() {
      var c, d, g, f;
      return (f = (g = e.separator) != null ? g : (d = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.root) == null ? void 0 : d.separator) != null ? f : "/";
    }
  }), [o, a] = v(e, ["class", "children", "separator", "spacing"]), n = () => m(o.class, Vo, Sd()), s = () => m(wd, xd()), l = {
    state: r
  };
  return i(No.Provider, {
    value: l,
    get children() {
      return i(R.nav, b({
        "aria-label": "breadcrumb",
        get class() {
          return n();
        },
        get __baseStyle() {
          var c;
          return (c = t == null ? void 0 : t.baseStyle) == null ? void 0 : c.root;
        }
      }, a, {
        get children() {
          return i(R.ol, {
            get class() {
              return s();
            },
            get gap() {
              return r.spacing;
            },
            get children() {
              return o.children;
            }
          });
        }
      }));
    }
  });
}
_d.toString = () => $(Vo);
function qo() {
  const e = re(No);
  if (!e)
    throw new Error("[Hope UI]: useBreadcrumbContext must be used within a `<Breadcrumb />` component");
  return e;
}
const jo = "hope-breadcrumb__item";
function Id(e) {
  const t = _().Breadcrumb, r = qo(), [o, a] = v(e, ["class"]), n = () => m(o.class, jo, Cd());
  return i(R.li, b({
    get class() {
      return n();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.item;
    },
    get gap() {
      return r.state.spacing;
    }
  }, a));
}
Id.toString = () => $(jo);
const Ko = "hope-breadcrumb__link";
function kd(e) {
  const t = _().Breadcrumb, [r, o] = v(e, ["class", "currentPage", "href"]), a = () => m(r.class, Ko, yd({
    currentPage: r.currentPage === !0
  }));
  return i(O, {
    get when() {
      return r.currentPage;
    },
    get fallback() {
      return i(R.a, b({
        get href() {
          return r.href;
        },
        get class() {
          return a();
        },
        get __baseStyle() {
          var n;
          return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.link;
        }
      }, o));
    },
    get children() {
      return i(R.span, b({
        "aria-current": "page",
        get class() {
          return a();
        },
        get __baseStyle() {
          var n;
          return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.link;
        }
      }, o));
    }
  });
}
kd.toString = () => $(Ko);
const Uo = "hope-breadcrumb__separator";
function Pd(e) {
  const t = _().Breadcrumb, r = qo(), [o, a] = v(e, ["class", "children"]), n = () => m(o.class, Uo, $d());
  return i(R.span, b({
    role: "presentation",
    get class() {
      return n();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.separator;
    }
  }, a, {
    get children() {
      return i(O, {
        get when() {
          return o.children;
        },
        get fallback() {
          return r.state.separator;
        },
        get children() {
          return o.children;
        }
      });
    }
  }));
}
Pd.toString = () => $(Uo);
const Td = S({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}), Xo = "hope-center";
function zd(e) {
  const [t, r] = v(e, ["class"]), o = () => m(t.class, Xo, Td());
  return i(A, b({
    get class() {
      return o();
    }
  }, r));
}
zd.toString = () => $(Xo);
function Ze(e) {
  return {
    color: e.color,
    "&[data-disabled]": {
      color: "$neutral10"
    },
    "&[data-focus]": {
      boxShadow: `0 0 0 3px $colors${e.boxShadowColorFocus}`,
      borderColor: e.borderColorFocus
    }
  };
}
const hr = S({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  gap: "$2",
  cursor: "pointer",
  userSelect: "none",
  "&[data-disabled]": {
    opacity: "0.5",
    cursor: "not-allowed"
  },
  variants: {
    size: {
      sm: {
        fontSize: "$sm",
        lineHeight: "$5"
      },
      md: {
        fontSize: "$base",
        lineHeight: "$6"
      },
      lg: {
        fontSize: "$lg",
        lineHeight: "$7"
      }
    }
  }
}), br = S({
  cursor: "pointer",
  userSelect: "none",
  "&[data-disabled]": {
    opacity: "0.5",
    cursor: "not-allowed"
  }
}), mr = S({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  height: "100%",
  outline: "none",
  padding: 0,
  verticalAlign: "middle",
  cursor: "pointer",
  userSelect: "none",
  transition: "border-color 250ms, box-shadow 250ms",
  "&[data-disabled]": {
    opacity: "0.5",
    cursor: "not-allowed"
  },
  "&[data-invalid]": {
    borderColor: "$danger8",
    color: "$danger9"
  },
  "&[data-focus][data-invalid]": {
    boxShadow: "0 0 0 3px $colors$danger5",
    borderColor: "$danger8"
  },
  "&[data-checked], &[data-focus][data-checked]": {
    borderColor: "transparent",
    backgroundColor: "currentColor"
  },
  variants: {
    variant: {
      outline: {
        border: "1px solid $colors$neutral8",
        backgroundColor: "transparent"
      },
      filled: {
        border: "1px solid transparent",
        backgroundColor: "$neutral7"
      }
    },
    colorScheme: {
      primary: Ze({
        color: "$primary9",
        boxShadowColorFocus: "$primary5",
        borderColorFocus: "$primary8"
      }),
      accent: Ze({
        color: "$accent9",
        boxShadowColorFocus: "$accent5",
        borderColorFocus: "$accent8"
      }),
      neutral: Ze({
        color: "$neutral9",
        boxShadowColorFocus: "$neutral5",
        borderColorFocus: "$neutral8"
      }),
      success: Ze({
        color: "$success9",
        boxShadowColorFocus: "$success5",
        borderColorFocus: "$success8"
      }),
      info: Ze({
        color: "$info9",
        boxShadowColorFocus: "$info5",
        borderColorFocus: "$info8"
      }),
      warning: Ze({
        color: "$warning9",
        boxShadowColorFocus: "$warning5",
        borderColorFocus: "$warning8"
      }),
      danger: Ze({
        color: "$danger9",
        boxShadowColorFocus: "$danger5",
        borderColorFocus: "$danger8"
      })
    },
    size: {
      sm: {
        boxSize: "$3"
      },
      md: {
        boxSize: "$4"
      },
      lg: {
        boxSize: "$5"
      }
    }
  }
}), Bd = S(hr, {
  variants: {
    labelPlacement: {
      start: {
        flexDirection: "row-reverse"
      },
      end: {
        flexDirection: "row"
      }
    }
  }
}), Ld = S(br), Dd = S(mr, {
  borderRadius: "$sm",
  "& svg": {
    color: "$loContrast"
  },
  "&[data-indeterminate], &[data-focus][data-indeterminate]": {
    borderColor: "transparent",
    backgroundColor: "currentColor"
  }
}), Qo = "hope-checkbox__group";
function Hd(e) {
  var f;
  const t = `hope-checkbox-group-${de()}--checkbox`, r = _().Checkbox, [o, a] = ie({
    _value: (f = e.defaultValue) != null ? f : [],
    get isControlled() {
      return e.value !== void 0;
    },
    get value() {
      return this.isControlled ? e.value : this._value;
    },
    get name() {
      var u;
      return (u = e.name) != null ? u : t;
    },
    get required() {
      return e.required;
    },
    get disabled() {
      return e.disabled;
    },
    get invalid() {
      return e.invalid;
    },
    get readOnly() {
      return e.readOnly;
    },
    get variant() {
      var u, p, C;
      return (C = e.variant) != null ? C : (p = (u = r == null ? void 0 : r.defaultProps) == null ? void 0 : u.group) == null ? void 0 : p.variant;
    },
    get colorScheme() {
      var u, p, C;
      return (C = e.colorScheme) != null ? C : (p = (u = r == null ? void 0 : r.defaultProps) == null ? void 0 : u.group) == null ? void 0 : p.colorScheme;
    },
    get size() {
      var u, p, C;
      return (C = e.size) != null ? C : (p = (u = r == null ? void 0 : r.defaultProps) == null ? void 0 : u.group) == null ? void 0 : p.size;
    },
    get labelPlacement() {
      var u, p, C;
      return (C = e.labelPlacement) != null ? C : (p = (u = r == null ? void 0 : r.defaultProps) == null ? void 0 : u.group) == null ? void 0 : p.labelPlacement;
    }
  }), [n, s, l] = v(e, ["class", "onChange"], ["value", "defaultValue", "name", "required", "disabled", "readOnly", "invalid"]), c = (u) => {
    var z;
    if (!o.value)
      return;
    const p = u.target, C = p.checked ? [...o.value, p.value] : o.value.filter((h) => String(h) !== String(p.value));
    a("_value", C), (z = n.onChange) == null || z.call(n, C);
  }, d = () => m(n.class, Qo), g = {
    state: o,
    onChange: c
  };
  return i(Yo.Provider, {
    value: g,
    get children() {
      return i(A, b({
        get class() {
          return d();
        },
        get __baseStyle() {
          var u;
          return (u = r == null ? void 0 : r.baseStyle) == null ? void 0 : u.group;
        }
      }, l));
    }
  });
}
Hd.toString = () => $(Qo);
const Yo = ae();
function Zo() {
  return re(Yo);
}
const Ad = S({
  position: "relative",
  width: "$full"
}), Ed = S({
  display: "inline-block",
  marginBottom: "$1",
  color: "$neutral12",
  fontWeight: "$medium",
  fontSize: "$sm",
  lineHeight: "$5",
  textAlign: "start",
  opacity: 1,
  "&[data-disabled]": {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}), Md = S({
  marginInlineStart: "$1",
  color: "$danger9",
  fontSize: "$base"
}), Od = S({
  display: "inline-block",
  marginTop: "$1",
  color: "$neutral11",
  fontWeight: "$normal",
  fontSize: "$sm",
  lineHeight: "$5",
  textAlign: "start",
  opacity: 1,
  "&[data-disabled]": {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}), Rd = S({
  display: "inline-block",
  marginTop: "$1",
  color: "$danger9",
  fontWeight: "$normal",
  fontSize: "$sm",
  lineHeight: "$5",
  textAlign: "start",
  opacity: 1,
  "&[data-disabled]": {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}), Jo = ae(), Go = "hope-form-control";
function Wd(e) {
  const t = `hope-field-${de()}`, r = _().FormControl, [o, a] = ie({
    get id() {
      var p;
      return (p = e.id) != null ? p : t;
    },
    get labelId() {
      return `${this.id}-label`;
    },
    get helperTextId() {
      return `${this.id}-helper-text`;
    },
    get errorMessageId() {
      return `${this.id}-error-message`;
    },
    get required() {
      return e.required;
    },
    get disabled() {
      return e.disabled;
    },
    get invalid() {
      return e.invalid;
    },
    get readOnly() {
      return e.readOnly;
    },
    get ["data-focus"]() {
      return this.isFocused ? "" : void 0;
    },
    get ["data-disabled"]() {
      return this.disabled ? "" : void 0;
    },
    get ["data-invalid"]() {
      return this.invalid ? "" : void 0;
    },
    get ["data-readonly"]() {
      return this.readOnly ? "" : void 0;
    },
    hasHelperText: !1,
    hasErrorMessage: !1,
    isFocused: !1
  }), [n, s] = v(e, ["id", "required", "disabled", "invalid", "readOnly", "class"]), l = (p) => a("hasHelperText", p), c = (p) => a("hasErrorMessage", p), d = () => a("isFocused", !0), g = () => a("isFocused", !1), f = () => ({
    state: o,
    setHasHelperText: l,
    setHasErrorMessage: c,
    onFocus: d,
    onBlur: g
  }), u = () => m(n.class, Go, Ad());
  return i(Jo.Provider, {
    get value() {
      return f();
    },
    get children() {
      return i(A, b({
        role: "group",
        get class() {
          return u();
        },
        get __baseStyle() {
          var p;
          return (p = r == null ? void 0 : r.baseStyle) == null ? void 0 : p.root;
        }
      }, s));
    }
  });
}
Wd.toString = () => $(Go);
function mt() {
  return re(Jo);
}
function vt(e) {
  const t = mt(), r = we(() => me(t == null ? void 0 : t.onFocus, e.onFocus)), o = we(() => me(t == null ? void 0 : t.onBlur, e.onBlur)), [a] = ie({
    get id() {
      var n;
      return (n = e.id) != null ? n : t == null ? void 0 : t.state.id;
    },
    get required() {
      var n;
      return (n = e.required) != null ? n : t == null ? void 0 : t.state.required;
    },
    get disabled() {
      var n;
      return (n = e.disabled) != null ? n : t == null ? void 0 : t.state.disabled;
    },
    get invalid() {
      var n;
      return (n = e.invalid) != null ? n : t == null ? void 0 : t.state.invalid;
    },
    get readOnly() {
      var n;
      return (n = e.readOnly) != null ? n : t == null ? void 0 : t.state.readOnly;
    },
    get ["aria-required"]() {
      return this.required ? !0 : void 0;
    },
    get ["aria-disabled"]() {
      return this.disabled ? !0 : void 0;
    },
    get ["aria-invalid"]() {
      return this.invalid ? !0 : void 0;
    },
    get ["aria-readonly"]() {
      return this.readOnly ? !0 : void 0;
    },
    get ["aria-describedby"]() {
      const n = e["aria-describedby"] ? [e["aria-describedby"]] : [];
      return (t == null ? void 0 : t.state.hasErrorMessage) && (t == null ? void 0 : t.state.invalid) && n.push(t.state.errorMessageId), t != null && t.state.hasHelperText && n.push(t.state.helperTextId), n.join(" ") || void 0;
    },
    get onFocus() {
      return r;
    },
    get onBlur() {
      return o;
    }
  });
  return a;
}
var Fd = ["<input", ' type="checkbox"', "", "", "", ">"];
function Nd(e) {
  const t = `hope-checkbox-${de()}`, r = mt(), o = Zo(), a = vt(e), [n, s] = ie({
    _checked: !!e.defaultChecked,
    isFocused: !1,
    get isControlled() {
      return e.checked !== void 0;
    },
    get checked() {
      if (o) {
        const p = o.state.value;
        return p != null ? p.some((C) => String(e.value) === String(C)) : !1;
      }
      return this.isControlled ? !!e.checked : this._checked;
    },
    get id() {
      var p;
      return r && !o ? a.id : (p = e.id) != null ? p : t;
    },
    get name() {
      var p;
      return (p = e.name) != null ? p : o == null ? void 0 : o.state.name;
    },
    get value() {
      return e.value;
    },
    get indeterminate() {
      return e.indeterminate;
    },
    get required() {
      var p;
      return (p = a.required) != null ? p : o == null ? void 0 : o.state.required;
    },
    get disabled() {
      var p;
      return (p = a.disabled) != null ? p : o == null ? void 0 : o.state.disabled;
    },
    get invalid() {
      var p;
      return (p = a.invalid) != null ? p : o == null ? void 0 : o.state.invalid;
    },
    get readOnly() {
      var p;
      return (p = a.readOnly) != null ? p : o == null ? void 0 : o.state.readOnly;
    },
    get ["aria-required"]() {
      return this.required ? !0 : void 0;
    },
    get ["aria-disabled"]() {
      return this.disabled ? !0 : void 0;
    },
    get ["aria-invalid"]() {
      return this.invalid ? !0 : void 0;
    },
    get ["aria-readonly"]() {
      return this.readOnly ? !0 : void 0;
    },
    get ["aria-label"]() {
      return e["aria-label"];
    },
    get ["aria-labelledby"]() {
      return e["aria-labelledby"];
    },
    get ["aria-describedby"]() {
      return e["aria-describedby"];
    },
    get ["data-indeterminate"]() {
      return this.indeterminate ? "" : void 0;
    },
    get ["data-focus"]() {
      return this.isFocused ? "" : void 0;
    },
    get ["data-checked"]() {
      return this.checked ? "" : void 0;
    },
    get ["data-required"]() {
      return this.required ? "" : void 0;
    },
    get ["data-disabled"]() {
      return this.disabled ? "" : void 0;
    },
    get ["data-invalid"]() {
      return this.invalid ? "" : void 0;
    },
    get ["data-readonly"]() {
      return this.readOnly ? "" : void 0;
    }
  }), [l, c, d] = v(e, ["inputClass", "children", "ref", "tabIndex", "onChange"], ["id", "name", "value", "indeterminate", "checked", "defaultChecked", "required", "disabled", "invalid", "readOnly", "onFocus", "onBlur"]), g = () => m(l.inputClass, Vt()), f = () => n, u = {
    state: n
  };
  return i(en.Provider, {
    value: u,
    get children() {
      return i(R.label, b({
        get for() {
          return n.id;
        },
        "data-group": !0,
        get ["data-indeterminate"]() {
          return n["data-indeterminate"];
        },
        get ["data-focus"]() {
          return n["data-focus"];
        },
        get ["data-checked"]() {
          return n["data-checked"];
        },
        get ["data-required"]() {
          return n["data-required"];
        },
        get ["data-disabled"]() {
          return n["data-disabled"];
        },
        get ["data-invalid"]() {
          return n["data-invalid"];
        },
        get ["data-readonly"]() {
          return n["data-readonly"];
        }
      }, d, {
        get children() {
          return [le(Fd, ce(), j("class", Q(g(), !0), !1) + j("tabindex", Q(l.tabIndex, !0), !1) + j("value", Q(n.value, !0), !1) + j("id", Q(n.id, !0), !1) + j("name", Q(n.name, !0), !1), j("checked", n.checked, !0), j("required", n.required, !0), j("disabled", n.disabled, !0) + j("readonly", Q(n.readOnly, !0), !1) + j("aria-required", Q(n["aria-required"], !0), !1) + j("aria-disabled", Q(n["aria-disabled"], !0), !1) + j("aria-invalid", Q(n["aria-invalid"], !0), !1) + j("aria-readonly", Q(n["aria-readonly"], !0), !1) + j("aria-label", Q(n["aria-label"], !0), !1) + j("aria-labelledby", Q(n["aria-labelledby"], !0), !1) + j("aria-describedby", Q(n["aria-describedby"], !0), !1)), i(O, {
            get when() {
              return Ae(l.children);
            },
            get fallback() {
              return l.children;
            },
            get children() {
              var p;
              return (p = l.children) == null ? void 0 : p.call(l, {
                state: f
              });
            }
          })];
        }
      }));
    }
  });
}
const en = ae();
function Vd() {
  const e = re(en);
  if (!e)
    throw new Error("[Hope UI]: useCheckboxPrimitiveContext must be used within a `<CheckboxPrimitive />` component");
  return e;
}
var qd = ["<path", ' d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" stroke="currentColor" stroke-width="1" fill-rule="evenodd" clip-rule="evenodd"></path>'], jd = ["<path", ' d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z" fill="currentColor" stroke="currentColor" stroke-width="1" fill-rule="evenodd" clip-rule="evenodd"></path>'];
const tn = "hope-checkbox", Kd = "hope-checkbox__input", Ud = "hope-checkbox__control", Xd = "hope-checkbox__label";
function Qd(e) {
  var g, f, u, p, C, z, h, y, w, x, k, L, H, q, D, W, I, T, E, U;
  const t = _().Checkbox, r = Zo(), o = {
    variant: (C = (p = (g = r == null ? void 0 : r.state) == null ? void 0 : g.variant) != null ? p : (u = (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.root) == null ? void 0 : u.variant) != null ? C : "outline",
    colorScheme: (x = (w = (z = r == null ? void 0 : r.state) == null ? void 0 : z.colorScheme) != null ? w : (y = (h = t == null ? void 0 : t.defaultProps) == null ? void 0 : h.root) == null ? void 0 : y.colorScheme) != null ? x : "primary",
    size: (D = (q = (k = r == null ? void 0 : r.state) == null ? void 0 : k.size) != null ? q : (H = (L = t == null ? void 0 : t.defaultProps) == null ? void 0 : L.root) == null ? void 0 : H.size) != null ? D : "md",
    labelPlacement: (U = (E = (W = r == null ? void 0 : r.state) == null ? void 0 : W.labelPlacement) != null ? E : (T = (I = t == null ? void 0 : t.defaultProps) == null ? void 0 : I.root) == null ? void 0 : T.labelPlacement) != null ? U : "end"
  }, a = Z(o, e), [n, s] = v(a, ["children", "class", "variant", "colorScheme", "size", "labelPlacement", "iconChecked", "iconIndeterminate"]), l = () => m(n.class, tn, Bd({
    size: n.size,
    labelPlacement: n.labelPlacement
  })), c = () => m(Ud, Dd({
    variant: n.variant,
    colorScheme: n.colorScheme,
    size: n.size
  })), d = () => m(Xd, Ld());
  return i(Nd, b({
    get class() {
      return l();
    },
    inputClass: Kd,
    get __baseStyle() {
      var K;
      return (K = t == null ? void 0 : t.baseStyle) == null ? void 0 : K.root;
    }
  }, s, {
    children: ({
      state: K
    }) => [i(R.span, {
      "aria-hidden": !0,
      get class() {
        return c();
      },
      get __baseStyle() {
        var te;
        return (te = t == null ? void 0 : t.baseStyle) == null ? void 0 : te.control;
      },
      get ["data-indeterminate"]() {
        return K()["data-indeterminate"];
      },
      get ["data-focus"]() {
        return K()["data-focus"];
      },
      get ["data-checked"]() {
        return K()["data-checked"];
      },
      get ["data-required"]() {
        return K()["data-required"];
      },
      get ["data-disabled"]() {
        return K()["data-disabled"];
      },
      get ["data-invalid"]() {
        return K()["data-invalid"];
      },
      get ["data-readonly"]() {
        return K()["data-readonly"];
      },
      get children() {
        return i(Ar, {
          get children() {
            return [i($t, {
              get when() {
                return K().indeterminate;
              },
              get children() {
                return i(O, {
                  get when() {
                    return n.iconIndeterminate;
                  },
                  get fallback() {
                    return i(Zd, {});
                  },
                  get children() {
                    return n.iconIndeterminate;
                  }
                });
              }
            }), i($t, {
              get when() {
                return K().checked && !K().indeterminate;
              },
              get children() {
                return i(O, {
                  get when() {
                    return n.iconChecked;
                  },
                  get fallback() {
                    return i(Yd, {});
                  },
                  get children() {
                    return n.iconChecked;
                  }
                });
              }
            })];
          }
        });
      }
    }), i(R.span, {
      get class() {
        return d();
      },
      get __baseStyle() {
        var te;
        return (te = t == null ? void 0 : t.baseStyle) == null ? void 0 : te.label;
      },
      get ["data-indeterminate"]() {
        return K()["data-indeterminate"];
      },
      get ["data-focus"]() {
        return K()["data-focus"];
      },
      get ["data-checked"]() {
        return K()["data-checked"];
      },
      get ["data-required"]() {
        return K()["data-required"];
      },
      get ["data-disabled"]() {
        return K()["data-disabled"];
      },
      get ["data-invalid"]() {
        return K()["data-invalid"];
      },
      get ["data-readonly"]() {
        return K()["data-readonly"];
      },
      get children() {
        return n.children;
      }
    })]
  }));
}
Qd.toString = () => $(tn);
const Yd = ke({
  viewBox: "0 0 15 15",
  path: () => le(qd, ce())
}), Zd = ke({
  viewBox: "0 0 15 15",
  path: () => le(jd, ce())
});
function Bp(e) {
  const t = Vd();
  return i(O, {
    get when() {
      return t.state.checked || t.state.indeterminate;
    },
    get children() {
      return i(R.span, b({
        "aria-hidden": !0,
        get ["data-indeterminate"]() {
          return t.state["data-indeterminate"];
        },
        get ["data-focus"]() {
          return t.state["data-focus"];
        },
        get ["data-checked"]() {
          return t.state["data-checked"];
        },
        get ["data-required"]() {
          return t.state["data-required"];
        },
        get ["data-disabled"]() {
          return t.state["data-disabled"];
        },
        get ["data-invalid"]() {
          return t.state["data-invalid"];
        },
        get ["data-readonly"]() {
          return t.state["data-readonly"];
        }
      }, e));
    }
  });
}
const Jd = bt({
  "0%": {
    strokeDasharray: "1, 400",
    strokeDashoffset: "0"
  },
  "50%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-100"
  },
  "100%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-260"
  }
}), Gd = S({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle"
}), eu = S({
  fill: "transparent",
  stroke: "currentColor"
}), tu = S({
  position: "absolute",
  top: 0,
  left: 0,
  variants: {
    spin: {
      true: {
        animation: `${Nt} 2s linear infinite`
      }
    }
  }
}), ru = S({
  fill: "transparent",
  stroke: "currentColor",
  opacity: 1,
  variants: {
    hidden: {
      true: {
        opacity: 0
      }
    },
    withRoundCaps: {
      true: { strokeLinecap: "round" }
    },
    indeterminate: {
      true: {
        animation: `${Jd} 2s linear infinite`
      },
      false: {
        strokeDashoffset: 66,
        transitionProperty: "stroke-dasharray, stroke, opacity",
        transitionDuration: "600ms",
        transitionTimingFunction: "ease"
      }
    }
  }
}), ou = S({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  color: "$neutral12",
  fontSize: "$xs",
  lineHeight: "$none",
  fontWeight: "$bold",
  textAlign: "center",
  transform: "translate(-50%, -50%)"
}), rn = ae(), on = "hope-circular-progress", nu = "hope-circular-progress__track";
function au(e) {
  var f, u, p, C, z, h, y, w, x;
  const t = _().CircularProgress, [r] = ie({
    get size() {
      var k, L, H, q;
      return (q = (H = e.size) != null ? H : (L = (k = t == null ? void 0 : t.defaultProps) == null ? void 0 : k.root) == null ? void 0 : L.size) != null ? q : "$12";
    },
    get thickness() {
      var k, L, H, q;
      return (q = (H = e.thickness) != null ? H : (L = (k = t == null ? void 0 : t.defaultProps) == null ? void 0 : k.root) == null ? void 0 : L.thickness) != null ? q : "$2_5";
    },
    get min() {
      var k;
      return (k = e.min) != null ? k : 0;
    },
    get max() {
      var k;
      return (k = e.max) != null ? k : 100;
    },
    get value() {
      var k;
      return (k = e.value) != null ? k : 0;
    },
    get percent() {
      return Zr(this.value, this.min, this.max);
    },
    get indeterminate() {
      var k;
      return (k = e.indeterminate) != null ? k : !1;
    },
    get ariaValueText() {
      var k;
      if (!this.indeterminate)
        return Ae(this.getValueText) ? this.getValueText(this.value, this.percent) : (k = e.valueText) != null ? k : `${this.percent}%`;
    },
    get getValueText() {
      return e.getValueText;
    },
    get isIndicatorVisible() {
      return !!(this.value > 0 || this.indeterminate);
    }
  }), o = {
    size: (p = (u = (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.root) == null ? void 0 : u.size) != null ? p : "$12",
    thickness: (h = (z = (C = t == null ? void 0 : t.defaultProps) == null ? void 0 : C.root) == null ? void 0 : z.thickness) != null ? h : "$2_5",
    trackColor: (x = (w = (y = t == null ? void 0 : t.defaultProps) == null ? void 0 : y.root) == null ? void 0 : w.trackColor) != null ? x : "$neutral4"
  }, a = Z(o, e), [n, s, l] = v(a, ["class", "children", "trackColor"], ["size", "thickness", "min", "max", "getValueText"]), c = () => m(n.class, on, Gd()), d = () => m(nu, eu({
    css: {
      color: n.trackColor,
      strokeWidth: r.thickness
    }
  })), g = {
    state: r
  };
  return i(rn.Provider, {
    value: g,
    get children() {
      return i(A, b({
        role: "progressbar",
        get ["data-indeterminate"]() {
          return r.indeterminate ? "" : void 0;
        },
        get ["aria-valuemin"]() {
          return r.min;
        },
        get ["aria-valuemax"]() {
          return r.max;
        },
        get ["aria-valuenow"]() {
          return r.indeterminate ? void 0 : r.value;
        },
        get ["aria-valuetext"]() {
          return r.ariaValueText;
        },
        get class() {
          return c();
        },
        get __baseStyle() {
          var k;
          return (k = t == null ? void 0 : t.baseStyle) == null ? void 0 : k.root;
        }
      }, l, {
        get children() {
          return [i(R.svg, {
            viewBox: "0 0 100 100",
            get boxSize() {
              return r.size;
            },
            get children() {
              return i(R.circle, {
                cx: 50,
                cy: 50,
                r: 42,
                get class() {
                  return d();
                },
                get __baseStyle() {
                  var k;
                  return (k = t == null ? void 0 : t.baseStyle) == null ? void 0 : k.track;
                }
              });
            }
          }), n.children];
        }
      }));
    }
  });
}
au.toString = () => $(on);
function nn() {
  const e = re(rn);
  if (!e)
    throw new Error("[Hope UI]: useCircularProgressContext must be used within a `<CircularProgress />` component");
  return e;
}
const an = "hope-circular-progress__indicator";
function su(e) {
  var g, f, u, p, C, z;
  const t = _().CircularProgress, r = nn(), o = {
    color: (u = (f = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.indicator) == null ? void 0 : f.color) != null ? u : "$primary9",
    withRoundCaps: (z = (C = (p = t == null ? void 0 : t.defaultProps) == null ? void 0 : p.indicator) == null ? void 0 : C.withRoundCaps) != null ? z : !1
  }, a = Z(o, e), [n, s] = v(a, ["class", "children", "color", "withRoundCaps"]), l = () => {
    if (r.state.indeterminate)
      return;
    const h = r.state.percent * 2.64;
    return `${h} ${264 - h}`;
  }, c = () => m(n.class, an, tu({
    spin: r.state.indeterminate
  })), d = () => ru({
    hidden: !r.state.isIndicatorVisible,
    indeterminate: r.state.indeterminate === !0,
    withRoundCaps: n.withRoundCaps,
    css: {
      color: n.color,
      strokeWidth: r.state.thickness,
      strokeDasharray: l()
    }
  });
  return i(R.svg, b({
    viewBox: "0 0 100 100",
    get class() {
      return c();
    },
    get boxSize() {
      return r.state.size;
    }
  }, s, {
    get children() {
      return i(R.circle, {
        cx: 50,
        cy: 50,
        r: 42,
        get class() {
          return d();
        },
        get __baseStyle() {
          var h;
          return (h = t == null ? void 0 : t.baseStyle) == null ? void 0 : h.indicator;
        }
      });
    }
  }));
}
su.toString = () => $(an);
const sn = "hope-circular-progress__label";
function iu(e) {
  const t = _().CircularProgress, r = nn(), [o, a] = v(e, ["class", "children"]), n = () => m(o.class, sn, ou());
  return i(A, b({
    get class() {
      return n();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.label;
    }
  }, a, {
    get children() {
      return i(O, {
        get when() {
          return o.children;
        },
        get fallback() {
          return r.state.ariaValueText;
        },
        get children() {
          return o.children;
        }
      });
    }
  }));
}
iu.toString = () => $(sn);
var lu = ["<path", ' fill="currentColor" d="M2.64 1.27L7.5 6.13l4.84-4.84A.92.92 0 0 1 13 1a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l4.89 4.89A.9.9 0 0 1 14 13a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-4.85 4.85A.92.92 0 0 1 2 14a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L1.27 2.61A.9.9 0 0 1 1 2a1 1 0 0 1 1-1c.24.003.47.1.64.27z"></path>'];
const cu = ke({
  viewBox: "0 0 15 15",
  path: () => le(lu, ce())
}), du = S({
  appearance: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  outline: "none",
  borderWidth: 0,
  borderRadius: "$sm",
  backgroundColor: "transparent",
  padding: 0,
  color: "currentColor",
  cursor: "pointer",
  userSelect: "none",
  transition: "color 250ms, background-color 250ms",
  "&:disbaled": {
    opacity: "0.5",
    cursor: "not-allowed",
    boxShadow: "none"
  },
  "&:hover": {
    backgroundColor: "$closeButtonHoverBackground"
  },
  "&:active": {
    backgroundColor: "$closeButtonActiveBackground"
  },
  "&:focus": {
    outline: "none",
    boxShadow: "$outline"
  },
  variants: {
    size: {
      sm: {
        boxSize: "24px",
        fontSize: "10px"
      },
      md: {
        boxSize: "32px",
        fontSize: "12px"
      },
      lg: {
        boxSize: "40px",
        fontSize: "16px"
      }
    }
  }
}), ln = "hope-close-button";
function Kt(e) {
  var l, c, d, g, f, u;
  const t = _().CloseButton, r = {
    "aria-label": (c = (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l["aria-label"]) != null ? c : "Close",
    icon: (g = (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.icon) != null ? g : i(cu, {}),
    size: (u = (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.size) != null ? u : "md"
  }, o = Z(r, e), [a, n] = v(o, ["class", "children", "size", "icon"]), s = () => m(a.class, ln, du({
    size: a.size
  }));
  return i(R.button, b({
    type: "button",
    get class() {
      return s();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    }
  }, n, {
    get children() {
      return i(O, {
        get when() {
          return a.children;
        },
        get fallback() {
          return a.icon;
        },
        get children() {
          return a.children;
        }
      });
    }
  }));
}
Kt.toString = () => $(ln);
const uu = S({
  width: "100%",
  "@desktop_s": { maxWidth: "$containerDesktopS" },
  "@mobile_s": { maxWidth: "$containerMobileS" },
  "@mobile_m": { maxWidth: "$containerMobileM" },
  "@mobile_l": { maxWidth: "$containerMobileL" },
  "@sm": { maxWidth: "$containerSm" },
  "@md": { maxWidth: "$containerMd" },
  "@lg": { maxWidth: "$containerLg" },
  "@xl": { maxWidth: "$containerXl" },
  "@2xl": { maxWidth: "$container2xl" },
  variants: {
    centered: {
      true: {
        mx: "auto"
      }
    },
    centerContent: {
      true: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }
  }
}), cn = "hope-container";
function gu(e) {
  const r = Z({
    centered: !0,
    centerContent: !1
  }, e), [o, a, n] = v(r, ["class"], ["centered", "centerContent"]), s = () => m(o.class, cn, uu(a));
  return i(A, b({
    get class() {
      return s();
    }
  }, n));
}
gu.toString = () => $(cn);
const fu = S({
  border: 0,
  borderColor: "currentColor",
  variants: {
    variant: {
      solid: {
        borderStyle: "solid"
      },
      dashed: {
        borderStyle: "dashed"
      },
      dotted: {
        borderStyle: "dotted"
      }
    },
    orientation: {
      vertical: {
        height: "100%"
      },
      horizontal: {
        width: "100%"
      }
    }
  }
}), dn = "hope-divider";
function pu(e) {
  const r = Z({
    as: "div",
    variant: "solid",
    orientation: "horizontal",
    color: "$neutral6",
    thickness: "1px"
  }, e), [o, a] = v(r, ["class", "variant", "orientation", "thickness"]), n = () => m(o.class, dn, fu({
    variant: o.variant,
    orientation: o.orientation,
    css: {
      borderLeftWidth: o.orientation === "vertical" ? o.thickness : 0,
      borderBottomWidth: o.orientation === "horizontal" ? o.thickness : 0
    }
  }));
  return i(A, b({
    get class() {
      return n();
    }
  }, a));
}
pu.toString = () => $(dn);
function hu(e) {
  const t = `hope-modal-${de()}`, r = _().Modal, [o, a] = ie({
    headerMounted: !1,
    bodyMounted: !1,
    get opened() {
      return e.opened;
    },
    get dialogId() {
      var h;
      return (h = e.id) != null ? h : t;
    },
    get headerId() {
      return `${this.dialogId}--header`;
    },
    get bodyId() {
      return `${this.dialogId}--body`;
    },
    get initialFocus() {
      return e.initialFocus;
    },
    get motionPreset() {
      var h, y, w, x;
      return (x = (w = e.motionPreset) != null ? w : (y = (h = r == null ? void 0 : r.defaultProps) == null ? void 0 : h.root) == null ? void 0 : y.motionPreset) != null ? x : "scale";
    },
    get size() {
      var h, y, w, x;
      return (x = (w = e.size) != null ? w : (y = (h = r == null ? void 0 : r.defaultProps) == null ? void 0 : h.root) == null ? void 0 : y.size) != null ? x : "md";
    },
    get centered() {
      var h, y, w, x;
      return (x = (w = e.centered) != null ? w : (y = (h = r == null ? void 0 : r.defaultProps) == null ? void 0 : h.root) == null ? void 0 : y.centered) != null ? x : !1;
    },
    get scrollBehavior() {
      var h, y, w, x;
      return (x = (w = e.scrollBehavior) != null ? w : (y = (h = r == null ? void 0 : r.defaultProps) == null ? void 0 : h.root) == null ? void 0 : y.scrollBehavior) != null ? x : "outside";
    },
    get closeOnOverlayClick() {
      var h, y, w, x;
      return (x = (w = e.closeOnOverlayClick) != null ? w : (y = (h = r == null ? void 0 : r.defaultProps) == null ? void 0 : h.root) == null ? void 0 : y.closeOnOverlayClick) != null ? x : !0;
    },
    get closeOnEsc() {
      var h, y, w, x;
      return (x = (w = e.closeOnEsc) != null ? w : (y = (h = r == null ? void 0 : r.defaultProps) == null ? void 0 : h.root) == null ? void 0 : y.closeOnEsc) != null ? x : !0;
    },
    get trapFocus() {
      var h, y, w, x;
      return (x = (w = e.trapFocus) != null ? w : (y = (h = r == null ? void 0 : r.defaultProps) == null ? void 0 : h.root) == null ? void 0 : y.trapFocus) != null ? x : !0;
    },
    get blockScrollOnMount() {
      var h, y, w, x;
      return (x = (w = e.blockScrollOnMount) != null ? w : (y = (h = r == null ? void 0 : r.defaultProps) == null ? void 0 : h.root) == null ? void 0 : y.blockScrollOnMount) != null ? x : !0;
    },
    get preserveScrollBarGap() {
      var h, y, w, x;
      return (x = (w = e.preserveScrollBarGap) != null ? w : (y = (h = r == null ? void 0 : r.defaultProps) == null ? void 0 : h.root) == null ? void 0 : y.preserveScrollBarGap) != null ? x : !1;
    }
  }), [n, s] = oe(!1);
  ve(() => {
    o.opened ? s(!0) : o.motionPreset === "none" && s(!1);
  });
  const l = () => s(!1), c = () => e.onClose(), d = (h) => a("headerMounted", h), g = (h) => a("bodyMounted", h);
  let f = null;
  const z = {
    state: o,
    unmountPortal: l,
    onClose: c,
    onMouseDown: (h) => {
      f = h.target;
    },
    onKeyDown: (h) => {
      var y;
      h.key === "Escape" && (h.stopPropagation(), o.closeOnEsc && c(), (y = e.onEsc) == null || y.call(e));
    },
    onOverlayClick: (h) => {
      var y;
      h.stopPropagation(), f === h.target && (o.closeOnOverlayClick && c(), (y = e.onOverlayClick) == null || y.call(e));
    },
    setHeaderMounted: d,
    setBodyMounted: g
  };
  return i(O, {
    get when() {
      return n();
    },
    get children() {
      return i(un.Provider, {
        value: z,
        get children() {
          return i(it, {
            get children() {
              return e.children;
            }
          });
        }
      });
    }
  });
}
const un = ae();
function Ve() {
  const e = re(un);
  if (!e)
    throw new Error("[Hope UI]: useModalContext must be used within a `<Modal />` component");
  return e;
}
const gn = "hope-modal__body";
function fn(e) {
  const t = _().Modal, r = Ve(), [o, a] = v(e, ["class"]), n = () => m(o.class, gn, Xi({
    scrollBehavior: r.state.scrollBehavior
  }));
  return ue(() => r.setBodyMounted(!0)), be(() => r.setBodyMounted(!1)), i(A, b({
    get class() {
      return n();
    },
    get id() {
      return r.state.bodyId;
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.body;
    }
  }, a));
}
fn.toString = () => $(gn);
const pn = "hope-modal__close-button";
function hn(e) {
  var d, g, f, u, p, C, z, h;
  const t = _().Modal, r = Ve(), o = {
    "aria-label": (f = (g = (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.closeButton) == null ? void 0 : g["aria-label"]) != null ? f : "Close modal",
    size: (C = (p = (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.closeButton) == null ? void 0 : p.size) != null ? C : "md",
    icon: (h = (z = t == null ? void 0 : t.defaultProps) == null ? void 0 : z.closeButton) == null ? void 0 : h.icon
  }, a = Z(o, e), [n, s] = v(a, ["class", "onClick"]), l = () => m(n.class, pn, Yi());
  return i(Kt, b({
    get class() {
      return l();
    },
    get __baseStyle() {
      var y;
      return (y = t == null ? void 0 : t.baseStyle) == null ? void 0 : y.closeButton;
    },
    onClick: (y) => {
      me(n.onClick, (w) => {
        w.stopPropagation(), r.onClose();
      })(y);
    }
  }, s));
}
hn.toString = () => $(pn);
const bn = "hope-modal__footer";
function mn(e) {
  const t = _().Modal, [r, o] = v(e, ["class"]), a = () => m(r.class, bn, Qi());
  return i(A, b({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.footer;
    }
  }, o));
}
mn.toString = () => $(bn);
const vn = "hope-modal__header";
function Sn(e) {
  const t = _().Modal, r = Ve(), [o, a] = v(e, ["class"]), n = () => m(o.class, vn, Ui());
  return ue(() => r.setHeaderMounted(!0)), be(() => r.setHeaderMounted(!1)), i(A, b({
    get class() {
      return n();
    },
    get id() {
      return r.state.headerId;
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.header;
    }
  }, a));
}
Sn.toString = () => $(vn);
const xn = ae();
function Lp(e) {
  const t = _().Drawer, [, r] = v(e, ["opened", "onClose", "placement", "size", "fullHeight", "disableMotion"]), [o] = ie({
    get placement() {
      var a, n, s, l;
      return (l = (s = e.placement) != null ? s : (n = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : n.placement) != null ? l : "right";
    },
    get size() {
      var a, n, s, l;
      return (l = (s = e.size) != null ? s : (n = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : n.size) != null ? l : "xs";
    },
    get fullHeight() {
      var a, n, s, l;
      return (l = (s = e.fullHeight) != null ? s : (n = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : n.fullHeight) != null ? l : !1;
    },
    get disableMotion() {
      var a, n, s, l;
      return (l = (s = e.disableMotion) != null ? s : (n = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : n.disableMotion) != null ? l : !1;
    }
  });
  return i(xn.Provider, {
    value: o,
    get children() {
      return i(hu, b({
        scrollBehavior: "inside",
        get blockScrollOnMount() {
          var a, n;
          return (n = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : n.blockScrollOnMount;
        },
        get closeOnEsc() {
          var a, n;
          return (n = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : n.closeOnEsc;
        },
        get closeOnOverlayClick() {
          var a, n;
          return (n = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : n.closeOnOverlayClick;
        },
        get preserveScrollBarGap() {
          var a, n;
          return (n = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : n.preserveScrollBarGap;
        },
        get trapFocus() {
          var a, n;
          return (n = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : n.trapFocus;
        },
        get opened() {
          return e.opened;
        },
        get onClose() {
          return e.onClose;
        }
      }, r));
    }
  });
}
function Cn() {
  const e = re(xn);
  if (!e)
    throw new Error("[Hope UI]: useDrawerContext must be used within a `<Drawer />` component");
  return e;
}
function Dp(e) {
  var a, n, s, l, c, d, g, f;
  const t = _().Drawer, r = {
    "aria-label": (s = (n = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.closeButton) == null ? void 0 : n["aria-label"]) != null ? s : "Close drawer",
    size: (d = (c = (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.closeButton) == null ? void 0 : c.size) != null ? d : "md",
    icon: (f = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.closeButton) == null ? void 0 : f.icon
  }, o = Z(r, e);
  return i(hn, b({
    get __baseStyle() {
      var u;
      return (u = t == null ? void 0 : t.baseStyle) == null ? void 0 : u.closeButton;
    }
  }, o));
}
function Hp(e) {
  const t = _().Drawer;
  return i(fn, b({
    get __baseStyle() {
      var r;
      return (r = t == null ? void 0 : t.baseStyle) == null ? void 0 : r.body;
    }
  }, e));
}
function Ap(e) {
  const t = _().Drawer;
  return i(Sn, b({
    get __baseStyle() {
      var r;
      return (r = t == null ? void 0 : t.baseStyle) == null ? void 0 : r.header;
    }
  }, e));
}
function Ep(e) {
  const t = _().Drawer;
  return i(mn, b({
    get __baseStyle() {
      var r;
      return (r = t == null ? void 0 : t.baseStyle) == null ? void 0 : r.footer;
    }
  }, e));
}
function $n(e) {
  const t = Ve();
  let r, o;
  const a = (f) => {
    r = f;
  }, n = () => t.state.headerMounted ? t.state.headerId : void 0, s = () => t.state.bodyMounted ? t.state.bodyId : void 0, l = (f) => {
    me(e.onClick, (u) => u.stopPropagation())(f);
  }, c = () => `[id='${t.state.dialogId}']`, d = () => {
    !r || (t.state.trapFocus && (o = Wr(r, {
      initialFocus: t.state.initialFocus,
      fallbackFocus: c(),
      allowOutsideClick: !0
    }), o.activate()), t.state.blockScrollOnMount);
  }, g = () => {
    o == null || o.deactivate();
  };
  return ue(() => {
    d();
  }), be(() => {
    g();
  }), {
    assignContainerRef: a,
    ariaLabelledBy: n,
    ariaDescribedBy: s,
    onDialogClick: l
  };
}
const bu = "hope-modal__content-container", yn = "hope-modal__content";
function mu(e) {
  const t = _().Modal, r = Ve(), [o, a] = v(e, ["ref", "class", "role", "aria-labelledby", "aria-describedby", "onClick"]), {
    assignContainerRef: n,
    ariaLabelledBy: s,
    ariaDescribedBy: l,
    onDialogClick: c
  } = $n(o), d = () => {
    const u = ji({
      centered: r.state.centered,
      scrollBehavior: r.state.scrollBehavior
    });
    return m(bu, u);
  }, g = () => {
    const u = Ki({
      size: r.state.size,
      scrollBehavior: r.state.scrollBehavior
    });
    return m(o.class, yn, u);
  }, f = () => {
    switch (r.state.motionPreset) {
      case "fade-in-bottom":
        return fe.fadeInBottom;
      case "scale":
        return fe.scale;
      case "none":
        return "hope-none";
    }
  };
  return i(Oe, {
    get name() {
      return f();
    },
    appear: !0,
    get onAfterExit() {
      return r.unmountPortal;
    },
    get children() {
      return i(O, {
        get when() {
          return r.state.opened;
        },
        get children() {
          return i(A, {
            get class() {
              return d();
            },
            tabIndex: -1,
            get onMouseDown() {
              return r.onMouseDown;
            },
            get onKeyDown() {
              return r.onKeyDown;
            },
            get onClick() {
              return r.onOverlayClick;
            },
            get children() {
              return i(R.section, b({
                get class() {
                  return g();
                },
                get __baseStyle() {
                  var u;
                  return (u = t == null ? void 0 : t.baseStyle) == null ? void 0 : u.content;
                },
                get id() {
                  return r.state.dialogId;
                },
                get role() {
                  var u;
                  return (u = o.role) != null ? u : "dialog";
                },
                tabIndex: -1,
                "aria-modal": !0,
                get ["aria-labelledby"]() {
                  return s();
                },
                get ["aria-describedby"]() {
                  return l();
                },
                onClick: c
              }, a));
            }
          });
        }
      });
    }
  });
}
mu.toString = () => $(yn);
const wn = "hope-modal__overlay";
function vu(e) {
  const t = _().Modal, r = Ve(), [o, a] = v(e, ["class"]), n = () => m(o.class, wn, Ur()), s = () => r.state.motionPreset === "none" ? "hope-none" : fe.fade;
  return i(Oe, {
    get name() {
      return s();
    },
    appear: !0,
    get children() {
      return i(O, {
        get when() {
          return r.state.opened;
        },
        get children() {
          return i(A, b({
            get class() {
              return n();
            },
            get __baseStyle() {
              var l;
              return (l = t == null ? void 0 : t.baseStyle) == null ? void 0 : l.overlay;
            }
          }, a));
        }
      });
    }
  });
}
vu.toString = () => $(wn);
const Su = "hope-drawer__content-container", _n = "hope-drawer__content";
function xu(e) {
  const t = _().Drawer, r = Cn(), o = Ve(), [a, n] = v(e, ["ref", "class", "role", "aria-labelledby", "aria-describedby", "onClick"]), {
    assignContainerRef: s,
    ariaLabelledBy: l,
    ariaDescribedBy: c,
    onDialogClick: d
  } = $n(a), g = () => m(Su, Ji({
    placement: r.placement
  })), f = () => {
    const p = Gi({
      size: r.size,
      placement: r.placement,
      fullHeight: r.fullHeight
    });
    return m(a.class, _n, p);
  }, u = () => {
    if (r.disableMotion)
      return "hope-none";
    switch (r.placement) {
      case "top":
        return G.slideInTop;
      case "right":
        return G.slideInRight;
      case "bottom":
        return G.slideInBottom;
      case "left":
        return G.slideInLeft;
    }
  };
  return i(Oe, {
    get name() {
      return u();
    },
    appear: !0,
    get onAfterExit() {
      return o.unmountPortal;
    },
    get children() {
      return i(O, {
        get when() {
          return o.state.opened;
        },
        get children() {
          return i(A, {
            get class() {
              return g();
            },
            tabIndex: -1,
            get onMouseDown() {
              return o.onMouseDown;
            },
            get onKeyDown() {
              return o.onKeyDown;
            },
            get onClick() {
              return o.onOverlayClick;
            },
            get children() {
              return i(R.section, b({
                get class() {
                  return f();
                },
                get __baseStyle() {
                  var p;
                  return (p = t == null ? void 0 : t.baseStyle) == null ? void 0 : p.content;
                },
                get id() {
                  return o.state.dialogId;
                },
                get role() {
                  var p;
                  return (p = a.role) != null ? p : "dialog";
                },
                tabIndex: -1,
                "aria-modal": !0,
                get ["aria-labelledby"]() {
                  return l();
                },
                get ["aria-describedby"]() {
                  return c();
                },
                onClick: d
              }, n));
            }
          });
        }
      });
    }
  });
}
xu.toString = () => $(_n);
const In = "hope-drawer__overlay";
function Cu(e) {
  const t = _().Drawer, r = Cn(), o = Ve(), [a, n] = v(e, ["class"]), s = () => m(a.class, In, Ur()), l = () => r.disableMotion ? "hope-none" : G.fade;
  return i(Oe, {
    get name() {
      return l();
    },
    appear: !0,
    get children() {
      return i(O, {
        get when() {
          return o.state.opened;
        },
        get children() {
          return i(A, b({
            get class() {
              return s();
            },
            get __baseStyle() {
              var c;
              return (c = t == null ? void 0 : t.baseStyle) == null ? void 0 : c.overlay;
            }
          }, n));
        }
      });
    }
  });
}
Cu.toString = () => $(In);
const kn = "hope-flex";
function Pn(e) {
  const [t, r] = v(e, ["class", "direction", "wrap"]), o = () => m(t.class, kn);
  return i(A, b({
    get class() {
      return o();
    },
    display: "flex",
    get flexDirection() {
      return t.direction;
    },
    get flexWrap() {
      return t.wrap;
    }
  }, r));
}
Pn.toString = () => $(kn);
const Tn = "hope-form-error-message";
function $u(e) {
  const t = _().FormControl, r = mt(), [o, a] = v(e, ["ref", "id", "class"]), n = () => {
    var l;
    return (l = o.id) != null ? l : r == null ? void 0 : r.state.errorMessageId;
  }, s = () => m(o.class, Tn, Rd());
  return ue(() => r == null ? void 0 : r.setHasErrorMessage(!0)), be(() => r == null ? void 0 : r.setHasErrorMessage(!1)), i(O, {
    get when() {
      return r == null ? void 0 : r.state.invalid;
    },
    get children() {
      return i(A, b({
        "aria-live": "polite",
        get id() {
          return n();
        },
        get class() {
          return s();
        },
        get __baseStyle() {
          var l;
          return (l = t == null ? void 0 : t.baseStyle) == null ? void 0 : l.errorMessage;
        },
        get ["data-disabled"]() {
          return r == null ? void 0 : r.state["data-disabled"];
        },
        get ["data-readonly"]() {
          return r == null ? void 0 : r.state["data-readonly"];
        }
      }, a));
    }
  });
}
$u.toString = () => $(Tn);
const zn = "hope-form-helper-text";
function yu(e) {
  const t = _().FormControl, r = mt(), [o, a] = v(e, ["ref", "id", "class"]), n = () => {
    var l;
    return (l = o.id) != null ? l : r == null ? void 0 : r.state.helperTextId;
  }, s = () => m(o.class, zn, Od());
  return ue(() => r == null ? void 0 : r.setHasHelperText(!0)), be(() => r == null ? void 0 : r.setHasHelperText(!1)), i(A, b({
    get id() {
      return n();
    },
    get class() {
      return s();
    },
    get __baseStyle() {
      var l;
      return (l = t == null ? void 0 : t.baseStyle) == null ? void 0 : l.helperText;
    },
    get ["data-disabled"]() {
      return r == null ? void 0 : r.state["data-disabled"];
    },
    get ["data-readonly"]() {
      return r == null ? void 0 : r.state["data-readonly"];
    }
  }, a));
}
yu.toString = () => $(zn);
var wu = ["<span", ' role="presentation" aria-hidden="true">*</span>'];
const Bn = "hope-form-label";
function _u(e) {
  var g, f, u;
  const t = _().FormControl, r = mt(), o = {
    withRequiredIndicator: (u = (f = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.label) == null ? void 0 : f.withRequiredIndicator) != null ? u : !0
  }, a = Z(o, e), [n, s] = v(a, ["id", "for", "class", "children", "withRequiredIndicator"]), l = () => {
    var p;
    return (p = n.id) != null ? p : r == null ? void 0 : r.state.labelId;
  }, c = () => {
    var p;
    return (p = n.for) != null ? p : r == null ? void 0 : r.state.id;
  }, d = () => m(n.class, Bn, Ed());
  return i(R.label, b({
    get id() {
      return l();
    },
    get for() {
      return c();
    },
    get class() {
      return d();
    },
    get __baseStyle() {
      var p;
      return (p = t == null ? void 0 : t.baseStyle) == null ? void 0 : p.label;
    },
    get ["data-focus"]() {
      return r == null ? void 0 : r.state["data-focus"];
    },
    get ["data-disabled"]() {
      return r == null ? void 0 : r.state["data-disabled"];
    },
    get ["data-invalid"]() {
      return r == null ? void 0 : r.state["data-invalid"];
    },
    get ["data-readonly"]() {
      return r == null ? void 0 : r.state["data-readonly"];
    }
  }, s, {
    get children() {
      return [n.children, i(O, {
        get when() {
          return (r == null ? void 0 : r.state.required) && n.withRequiredIndicator;
        },
        get children() {
          return le(wu, ce() + j("class", Q(Md(), !0), !1));
        }
      })];
    }
  }));
}
_u.toString = () => $(Bn);
const Ln = "hope-grid";
function Dn(e) {
  const [t, r] = v(e, ["class", "autoFlow", "autoColumns", "autoRows", "templateAreas", "templateColumns", "templateRows"]), o = () => m(t.class, Ln);
  return i(A, b({
    get class() {
      return o();
    },
    display: "grid",
    get gridAutoFlow() {
      return t.autoFlow;
    },
    get gridAutoColumns() {
      return t.autoColumns;
    },
    get gridAutoRows() {
      return t.autoRows;
    },
    get gridTemplateAreas() {
      return t.templateAreas;
    },
    get gridTemplateColumns() {
      return t.templateColumns;
    },
    get gridTemplateRows() {
      return t.templateRows;
    }
  }, r));
}
Dn.toString = () => $(Ln);
function Tr(e) {
  if (e != null)
    return Vs(e, (t) => {
      switch (t) {
        case "auto":
          return "auto";
        case "full":
          return "1 / -1";
        default:
          return `span ${t} / span ${t}`;
      }
    });
}
const Hn = "hope-grid-item";
function Iu(e) {
  const [t, r] = v(e, ["class", "area", "colSpan", "colStart", "colEnd", "rowSpan", "rowStart", "rowEnd"]), o = () => m(t.class, Hn);
  return i(A, b({
    get class() {
      return o();
    },
    get gridArea() {
      return t.area;
    },
    get gridColumn() {
      return Tr(t.colSpan);
    },
    get gridRow() {
      return Tr(t.rowSpan);
    },
    get gridColumnStart() {
      return t.colStart;
    },
    get gridColumnEnd() {
      return t.colEnd;
    },
    get gridRowStart() {
      return t.rowStart;
    },
    get gridRowEnd() {
      return t.rowEnd;
    }
  }, r));
}
Iu.toString = () => $(Hn);
const An = "hope-simple-grid";
function ku(e) {
  return Fs(e) ? `${e}px` : e;
}
function Pu(e) {
  return cr(e, (t) => Nr(t) ? null : `repeat(auto-fit, minmax(${ku(t)}, 1fr))`);
}
function Tu(e) {
  return cr(e, (t) => Nr(t) ? null : `repeat(${t}, minmax(0, 1fr))`);
}
function zu(e) {
  const [t, r] = v(e, ["class", "minChildWidth", "columns"]), o = () => m(t.class, An), a = () => t.minChildWidth ? Pu(t.minChildWidth) : Tu(t.columns);
  return i(Dn, b({
    get class() {
      return o();
    },
    get templateColumns() {
      return a();
    }
  }, r));
}
zu.toString = () => $(An);
const En = S({
  variants: {
    size: {
      xs: {
        fontSize: "$xs",
        lineHeight: "$4"
      },
      sm: {
        fontSize: "$sm",
        lineHeight: "$5"
      },
      base: {
        fontSize: "$base",
        lineHeight: "$6"
      },
      lg: {
        fontSize: "$lg",
        lineHeight: "$7"
      },
      xl: {
        fontSize: "$xl",
        lineHeight: "$7"
      },
      "2xl": {
        fontSize: "$2xl",
        lineHeight: "$8"
      },
      "3xl": {
        fontSize: "$3xl",
        lineHeight: "$9"
      },
      "4xl": {
        fontSize: "$4xl",
        lineHeight: "$10"
      },
      "5xl": {
        fontSize: "$5xl",
        lineHeight: "$none"
      },
      "6xl": {
        fontSize: "$6xl",
        lineHeight: "$none"
      },
      "7xl": {
        fontSize: "$7xl",
        lineHeight: "$none"
      },
      "8xl": {
        fontSize: "$8xl",
        lineHeight: "$none"
      },
      "9xl": {
        fontSize: "$9xl",
        lineHeight: "$none"
      }
    }
  }
}), Bu = S(En, {
  fontWeight: "$semibold"
}), Mn = "hope-heading";
function Lu(e) {
  var c, d;
  const t = _().Heading, r = {
    as: "h2",
    level: (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.level,
    size: (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.size
  }, o = Z(r, e), [a, n] = v(o, ["class", "as", "level", "size"]), s = () => m(a.class, Mn, Bu({
    size: a.size
  })), l = () => a.level ? `h${a.level}` : a.as;
  return i(A, b({
    get as() {
      return l();
    },
    get class() {
      return s();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    }
  }, n));
}
Lu.toString = () => $(Mn);
function Du(e) {
  const t = _().IconButton, r = Io(), [o, a] = v(e, ["class", "className", "children", "icon", "variant", "colorScheme", "size", "disabled"]), n = () => {
    var g, f, u, p;
    return (p = (u = (g = o.variant) != null ? g : r == null ? void 0 : r.state.variant) != null ? u : (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.variant) != null ? p : "solid";
  }, s = () => {
    var g, f, u, p;
    return (p = (u = (g = o.colorScheme) != null ? g : r == null ? void 0 : r.state.colorScheme) != null ? u : (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.colorScheme) != null ? p : "primary";
  }, l = () => {
    var g, f, u, p;
    return (p = (u = (g = o.size) != null ? g : r == null ? void 0 : r.state.size) != null ? u : (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.size) != null ? p : "md";
  }, c = () => {
    var g;
    return (g = o.disabled) != null ? g : r == null ? void 0 : r.state.disabled;
  }, d = () => m(o.class, jt);
  return i(fr, b({
    get class() {
      return d();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    },
    get variant() {
      return n();
    },
    get colorScheme() {
      return s();
    },
    get size() {
      return l();
    },
    get disabled() {
      return c();
    }
  }, a, {
    get children() {
      return i(O, {
        get when() {
          return o.icon;
        },
        get fallback() {
          return o.children;
        },
        get children() {
          return o.icon;
        }
      });
    }
  }));
}
Du.toString = () => $(jt);
const On = "hope-image";
function Hu(e) {
  const [t, r, o] = v(e, ["class", "htmlWidth", "htmlHeight", "fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin"], ["onError", "onLoad"]), a = () => t.loading != null || t.ignoreFallback || t.fallbackSrc === void 0 && t.fallback === void 0, n = we(() => Do({
    ...e,
    ignoreFallback: a()
  })), s = () => ({
    objectFit: t.fit,
    objectPosition: t.align,
    width: t.htmlWidth,
    height: t.htmlHeight,
    ...a() ? r : {},
    ...o
  }), l = () => m(t.class, On);
  return i(O, {
    get when() {
      return n()() === "loaded";
    },
    get fallback() {
      return i(O, {
        get when() {
          return t.fallback;
        },
        get fallback() {
          return i(A, b({
            as: "img",
            get src() {
              return t.fallbackSrc;
            },
            class: "hope-image__placeholder"
          }, s));
        },
        get children() {
          return t.fallback;
        }
      });
    },
    get children() {
      return i(A, b({
        as: "img",
        get src() {
          return t.src;
        },
        get srcSet() {
          return t.srcSet;
        },
        get crossOrigin() {
          return t.crossOrigin;
        },
        get loading() {
          return t.loading;
        },
        get class() {
          return l();
        }
      }, s));
    }
  });
}
Hu.toString = () => $(On);
const Rn = ae();
function Pt() {
  return re(Rn);
}
const Wn = "hope-input-group";
function Au(e) {
  const t = _().Input, [r, o] = ie({
    get variant() {
      var u, p, C, z;
      return (z = (C = e.variant) != null ? C : (p = (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.group) == null ? void 0 : p.variant) != null ? z : "outline";
    },
    get size() {
      var u, p, C, z;
      return (z = (C = e.size) != null ? C : (p = (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.group) == null ? void 0 : p.size) != null ? z : "md";
    },
    hasLeftElement: !1,
    hasRightElement: !1,
    hasLeftAddon: !1,
    hasRightAddon: !1
  }), [a, n] = v(e, ["variant", "size", "class"]), s = () => m(a.class, Wn, _l()), f = {
    state: r,
    setHasLeftElement: (u) => o("hasLeftElement", u),
    setHasRightElement: (u) => o("hasRightElement", u),
    setHasLeftAddon: (u) => o("hasLeftAddon", u),
    setHasRightAddon: (u) => o("hasRightAddon", u)
  };
  return i(Rn.Provider, {
    value: f,
    get children() {
      return i(A, b({
        get class() {
          return s();
        },
        get __baseStyle() {
          var u;
          return (u = t == null ? void 0 : t.baseStyle) == null ? void 0 : u.group;
        }
      }, n));
    }
  });
}
Au.toString = () => $(Wn);
const Fn = "hope-input";
function Eu(e) {
  const t = _().Input, r = Pt(), o = vt(e), [a, n] = v(e, ["class", "htmlSize", "variant", "size"]), s = () => {
    var l, c, d, g, f, u, p, C, z, h, y, w, x, k;
    return m(a.class, Fn, wl({
      variant: (f = (g = (l = a.variant) != null ? l : r == null ? void 0 : r.state.variant) != null ? g : (d = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.input) == null ? void 0 : d.variant) != null ? f : "outline",
      size: (h = (z = (u = a.size) != null ? u : r == null ? void 0 : r.state.size) != null ? z : (C = (p = t == null ? void 0 : t.defaultProps) == null ? void 0 : p.input) == null ? void 0 : C.size) != null ? h : "md",
      withLeftElement: (y = r == null ? void 0 : r.state.hasLeftElement) != null ? y : !1,
      withRightElement: (w = r == null ? void 0 : r.state.hasRightElement) != null ? w : !1,
      withLeftAddon: (x = r == null ? void 0 : r.state.hasLeftAddon) != null ? x : !1,
      withRightAddon: (k = r == null ? void 0 : r.state.hasRightAddon) != null ? k : !1
    }));
  };
  return i(R.input, b({
    type: "text",
    get class() {
      return s();
    },
    get size() {
      return a.htmlSize;
    },
    get __baseStyle() {
      var l;
      return (l = t == null ? void 0 : t.baseStyle) == null ? void 0 : l.input;
    }
  }, o, n));
}
Eu.toString = () => $(Fn);
function Nn(e) {
  const t = _().Input, [r, o, a] = v(e, ["class"], ["placement", "variant", "size"]), n = () => m(r.class, kl(o));
  return i(A, b({
    get class() {
      return n();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.addon;
    }
  }, a));
}
const Vn = "hope-input-left-addon";
function Mu(e) {
  const t = Pt(), [r, o] = v(e, ["class"]), a = () => m(r.class, Vn);
  return ue(() => t == null ? void 0 : t.setHasLeftAddon(!0)), be(() => t == null ? void 0 : t.setHasLeftAddon(!1)), i(Nn, b({
    get class() {
      return a();
    },
    placement: "left",
    get variant() {
      var n;
      return (n = t == null ? void 0 : t.state.variant) != null ? n : "outline";
    },
    get size() {
      var n;
      return (n = t == null ? void 0 : t.state.size) != null ? n : "md";
    }
  }, o));
}
Mu.toString = () => $(Vn);
const qn = "hope-input-right-addon";
function Ou(e) {
  const t = Pt(), [r, o] = v(e, ["class"]), a = () => m(r.class, qn);
  return ue(() => t == null ? void 0 : t.setHasRightAddon(!0)), be(() => t == null ? void 0 : t.setHasRightAddon(!1)), i(Nn, b({
    get class() {
      return a();
    },
    placement: "right",
    get variant() {
      var n;
      return (n = t == null ? void 0 : t.state.variant) != null ? n : "outline";
    },
    get size() {
      var n;
      return (n = t == null ? void 0 : t.state.size) != null ? n : "md";
    }
  }, o));
}
Ou.toString = () => $(qn);
function jn(e) {
  const t = _().Input, [r, o, a] = v(e, ["class"], ["placement", "size"]), n = () => m(r.class, Il(o));
  return i(A, b({
    get class() {
      return n();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.element;
    }
  }, a));
}
const Kn = "hope-input-left-element";
function Ru(e) {
  const t = Pt(), [r, o] = v(e, ["class"]), a = () => m(r.class, Kn);
  return ue(() => t == null ? void 0 : t.setHasLeftElement(!0)), be(() => t == null ? void 0 : t.setHasLeftElement(!1)), i(jn, b({
    get class() {
      return a();
    },
    placement: "left",
    get size() {
      var n;
      return (n = t == null ? void 0 : t.state.size) != null ? n : "md";
    }
  }, o));
}
Ru.toString = () => $(Kn);
const Un = "hope-input-right-element";
function Wu(e) {
  const t = Pt(), [r, o] = v(e, ["class"]), a = () => m(r.class, Un);
  return ue(() => t == null ? void 0 : t.setHasRightElement(!0)), be(() => t == null ? void 0 : t.setHasRightElement(!1)), i(jn, b({
    get class() {
      return a();
    },
    placement: "right",
    get size() {
      var n;
      return (n = t == null ? void 0 : t.state.size) != null ? n : "md";
    }
  }, o));
}
Wu.toString = () => $(Un);
const Fu = S({
  borderRadius: "$md",
  borderColor: "$neutral7",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  backgroundColor: "$neutral2",
  px: "0.4em",
  fontFamily: "$mono",
  fontSize: "0.8em",
  fontWeight: "$bold",
  lineHeight: "$normal",
  whiteSpace: "nowrap"
}), Xn = "hope-kbd";
function Nu(e) {
  const t = _().Kbd, [r, o] = v(e, ["class"]), a = () => m(r.class, Xn, Fu());
  return i(R.kbd, b({
    get class() {
      return a();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    }
  }, o));
}
Nu.toString = () => $(Xn);
const Vu = S({
  listStyleType: "none"
}), qu = S({
  marginEnd: "0.5rem"
}), Qn = "hope-list", ju = "& > *:not(style) ~ *:not(style)";
function vr(e) {
  const [t, r] = v(e, ["class", "styleType", "stylePosition", "spacing"]), o = () => t.spacing ? {
    [ju]: {
      mt: t.spacing
    }
  } : {}, a = () => m(t.class, Qn, Vu({
    css: {
      listStyleType: t.styleType,
      listStylePosition: t.stylePosition,
      ...o()
    }
  }));
  return i(R.ul, b({
    role: "list",
    get class() {
      return a();
    }
  }, r));
}
vr.toString = () => $(Qn);
const Yn = "hope-ordered-list";
function Ku(e) {
  const [t, r] = v(e, ["class"]), o = () => m(t.class, Yn);
  return i(vr, b({
    as: "ol",
    get class() {
      return o();
    },
    styleType: "decimal",
    marginStart: "1em"
  }, r));
}
Ku.toString = () => $(Yn);
const Zn = "hope-unordered-list";
function Uu(e) {
  const [t, r] = v(e, ["class"]), o = () => m(t.class, Zn);
  return i(vr, b({
    as: "ul",
    get class() {
      return o();
    },
    styleType: "initial",
    marginStart: "1em"
  }, r));
}
Uu.toString = () => $(Zn);
const Jn = "hope-list__icon";
function Xu(e) {
  const [t, r] = v(e, ["class"]), o = () => m(t.class, Jn, qu());
  return i(ct, b({
    role: "presentation",
    get class() {
      return o();
    },
    verticalAlign: "text-bottom"
  }, r));
}
Xu.toString = () => $(Jn);
const Gn = "hope-list__item";
function Qu(e) {
  const [t, r] = v(e, ["class"]), o = () => m(t.class, Gn);
  return i(R.li, b({
    get class() {
      return o();
    }
  }, r));
}
Qu.toString = () => $(Gn);
var De = /* @__PURE__ */ ((e) => (e[e.Close = 0] = "Close", e[e.SelectAndClose = 1] = "SelectAndClose", e[e.First = 2] = "First", e[e.Last = 3] = "Last", e[e.Next = 4] = "Next", e[e.Open = 5] = "Open", e[e.OpenAndFocusLast = 6] = "OpenAndFocusLast", e[e.Previous = 7] = "Previous", e[e.Select = 8] = "Select", e[e.Type = 9] = "Type", e))(De || {});
function zr(e = [], t, r = []) {
  return e.filter((o) => o.disabled ? !1 : o.textValue.toLowerCase().indexOf(t.toLowerCase()) === 0 && r.indexOf(o.textValue) < 0);
}
function Yu(e, t, r = 0) {
  const o = [...e.slice(r), ...e.slice(0, r)], a = zr(o, t)[0], n = (s) => s.every((l) => l === s[0]);
  if (a)
    return e.indexOf(a);
  if (n(t.split(""))) {
    const s = zr(o, t[0]);
    return e.indexOf(s[0]);
  } else
    return -1;
}
function Zu(e, t) {
  const { key: r, altKey: o, ctrlKey: a, metaKey: n } = e;
  if (!t && ["ArrowDown", "Enter", " "].includes(r))
    return 5;
  if (!t && r === "ArrowUp")
    return 6;
  if (r === "Home")
    return 2;
  if (r === "End")
    return 3;
  if (r === "Backspace" || r === "Clear" || r.length === 1 && r !== " " && !o && !a && !n)
    return 9;
  if (t) {
    if (r === "ArrowDown")
      return 4;
    if (r === "ArrowUp")
      return 7;
    if (r === "Escape")
      return 0;
    if (r === "Enter" || r === " ")
      return 1;
  }
}
function Br(e, t, r) {
  switch (r) {
    case 2:
      return 0;
    case 3:
      return t;
    case 7:
      return e - 1 < 0 ? t : e - 1;
    case 4:
      return e + 1 > t ? 0 : e + 1;
    default:
      return e;
  }
}
function Ju(e) {
  const { currentIndex: t, maxIndex: r, initialAction: o, isItemDisabled: a } = e;
  let n = Br(t, r, o);
  for (; a(n); ) {
    let s = o;
    const l = n === 0, c = n === r;
    if (o === 2 && (s = 4), o === 3 && (s = 7), o === 7 && l) {
      n = t;
      break;
    }
    if (o === 4 && c) {
      n = t;
      break;
    }
    n = Br(n, r, s);
  }
  return n;
}
function Mp(e) {
  const t = `hope-menu-${de()}`, r = _().Menu, [o, a] = oe([]), [n, s] = ie({
    get triggerId() {
      var M;
      return (M = e.id) != null ? M : `${t}-trigger`;
    },
    get menuContentId() {
      return `${t}-content`;
    },
    get labelIdPrefix() {
      return `${t}-label`;
    },
    get itemIdPrefix() {
      return `${t}-item`;
    },
    get activeDescendantId() {
      return this.opened ? `${this.itemIdPrefix}-${this.activeIndex}` : void 0;
    },
    get closeOnSelect() {
      var M, J, Y, P;
      return (P = (Y = e.closeOnSelect) != null ? Y : (J = (M = r == null ? void 0 : r.defaultProps) == null ? void 0 : M.root) == null ? void 0 : J.closeOnSelect) != null ? P : !0;
    },
    get motionPreset() {
      var M, J, Y, P, N;
      return e.motionPreset ? e.motionPreset : (J = (M = r == null ? void 0 : r.defaultProps) == null ? void 0 : M.root) != null && J.motionPreset ? (P = (Y = r == null ? void 0 : r.defaultProps) == null ? void 0 : Y.root) == null ? void 0 : P.motionPreset : (N = e.placement) != null && N.startsWith("top") ? "scale-bottom-left" : "scale-top-left";
    },
    get items() {
      return o();
    },
    opened: !1,
    activeIndex: 0,
    ignoreBlur: !1,
    searchString: "",
    searchTimeoutId: void 0
  });
  let l, c, d;
  const g = async () => {
    var Y, P, N, V, X, Se, Pe, ze;
    if (!l || !c)
      return;
    const {
      x: M,
      y: J
    } = await Wt(l, c, {
      placement: (V = (N = e.placement) != null ? N : (P = (Y = r == null ? void 0 : r.defaultProps) == null ? void 0 : Y.root) == null ? void 0 : P.placement) != null ? V : "bottom-start",
      middleware: [yt((ze = (Pe = e.offset) != null ? Pe : (Se = (X = r == null ? void 0 : r.defaultProps) == null ? void 0 : X.root) == null ? void 0 : Se.offset) != null ? ze : 5), wt(), _t()]
    });
    !c || Object.assign(c.style, {
      left: `${Math.round(M)}px`,
      top: `${Math.round(J)}px`
    });
  }, f = (M) => {
    n.searchTimeoutId && window.clearTimeout(n.searchTimeoutId);
    const J = window.setTimeout(() => {
      s("searchString", "");
    }, 500);
    return s("searchTimeoutId", J), s("searchString", (Y) => Y += M), n.searchString;
  }, u = (M) => {
    s("activeIndex", M);
  }, p = (M) => n.items[M].disabled, C = (M) => {
    var Y;
    u(M);
    const J = n.items[M];
    (Y = J.onSelect) == null || Y.call(J), J.closeOnSelect ? D(!1) : z();
  }, z = () => {
    l == null || l.focus();
  }, h = (M) => {
    if (!at(l, Mt(M))) {
      if (n.ignoreBlur) {
        s("ignoreBlur", !1);
        return;
      }
      n.opened && D(!1, !1);
    }
  }, y = () => {
    D(!n.opened, !1);
  }, w = (M) => {
    const {
      key: J
    } = M, Y = n.items.length - 1, P = Zu(M, n.opened);
    switch (P) {
      case De.Last:
      case De.First:
      case De.Next:
      case De.Previous:
        return M.preventDefault(), u(Ju({
          currentIndex: n.activeIndex,
          maxIndex: Y,
          initialAction: P,
          isItemDisabled: p
        }));
      case De.SelectAndClose:
        M.preventDefault(), C(n.activeIndex);
        return;
      case De.Close:
        return M.preventDefault(), D(!1);
      case De.Type:
        return x(J);
      case De.Open:
        return M.preventDefault(), D(!0);
      case De.OpenAndFocusLast:
        return M.preventDefault(), D(!0, !0, !0);
    }
  }, x = (M) => {
    D(!0);
    const J = f(M), Y = Yu(n.items, J, n.activeIndex + 1);
    Y >= 0 ? u(Y) : (window.clearTimeout(n.searchTimeoutId), s("searchString", ""));
  }, k = (M) => {
    if (n.items[M].disabled) {
      z();
      return;
    }
    C(M);
  }, L = (M) => {
    n.activeIndex !== M && u(M);
  }, H = () => {
    s("ignoreBlur", !0);
  }, q = () => {
    n.opened ? (g(), l && c && (d = It(l, c, g))) : d == null || d();
  }, D = (M, J = !0, Y = !1) => {
    n.opened !== M && (s("opened", M), s("activeIndex", Y ? n.items.length - 1 : 0), q(), J && z());
  }, W = () => {
    u(-1);
  }, I = (M) => {
    at(l, M) || D(!1, !1);
  }, T = (M) => M === n.activeIndex, E = (M) => {
    l = M;
  }, U = (M) => {
    c = M;
  }, K = (M) => {
    !c || ro(c) && oo(M, c);
  }, te = (M) => {
    const J = n.items.findIndex((P) => P.key === M.key);
    return J != -1 ? J : a((P) => [...P, M]).length - 1;
  }, xe = () => n.opened, $e = {
    state: n,
    isItemActiveDescendant: T,
    assignTriggerRef: E,
    assignContentRef: U,
    registerItem: te,
    scrollToItem: K,
    onTriggerBlur: h,
    onTriggerClick: y,
    onTriggerKeyDown: w,
    onContentMouseLeave: W,
    onContentClickOutside: I,
    onItemClick: k,
    onItemMouseMove: L,
    onItemMouseDown: H
  };
  return i(ea.Provider, {
    value: $e,
    get children() {
      return i(O, {
        get when() {
          return kt(e);
        },
        get fallback() {
          return e.children;
        },
        get children() {
          var M;
          return (M = e.children) == null ? void 0 : M.call(e, {
            opened: xe
          });
        }
      });
    }
  });
}
const ea = ae();
function Ut() {
  const e = re(ea);
  if (!e)
    throw new Error("[Hope UI]: useMenuContext must be used within a `<Menu />` component");
  return e;
}
function Gu(e) {
  const [t, r] = ie({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), o = (s) => {
    Gt(s, e.element()) && r("isPointerDown", !0);
  }, a = (s) => {
    if (t.ignoreEmulatedMouseEvents) {
      r("ignoreEmulatedMouseEvents", !1);
      return;
    }
    t.isPointerDown && e.handler && Gt(s, e.element()) && (r("isPointerDown", !1), e.handler(s));
  }, n = (s) => {
    r("ignoreEmulatedMouseEvents", !0), e.handler && t.isPointerDown && Gt(s, e.element()) && (r("isPointerDown", !1), e.handler(s));
  };
  ue(() => {
    const s = Et(e.element());
    s.addEventListener("mousedown", o, !0), s.addEventListener("mouseup", a, !0), s.addEventListener("touchstart", o, !0), s.addEventListener("touchend", n, !0);
  }), be(() => {
    const s = Et(e.element());
    s.removeEventListener("mousedown", o, !0), s.removeEventListener("mouseup", a, !0), s.removeEventListener("touchstart", o, !0), s.removeEventListener("touchend", n, !0);
  });
}
function ta(e) {
  const t = lt(() => e.children);
  return Gu({
    element: () => t(),
    handler: (r) => e.onClickOutside(r)
  }), t;
}
const ra = "hope-menu__content";
function eg(e) {
  const t = _().Menu, r = Ut(), [o, a] = v(e, ["ref", "class", "children"]), [n, s] = oe(!1);
  ve(ft(() => r.state.opened, () => {
    r.state.opened ? s(!0) : r.state.motionPreset === "none" && s(!1);
  }));
  const l = () => s(!1), c = lt(() => o.children), d = (u) => {
    r.onContentClickOutside(u.target);
  }, g = () => m(o.class, ra, rl()), f = () => {
    switch (r.state.motionPreset) {
      case "scale-top-left":
        return Fe.scaleTopLeft;
      case "scale-top-right":
        return Fe.scaleTopRight;
      case "scale-bottom-left":
        return Fe.scaleBottomLeft;
      case "scale-bottom-right":
        return Fe.scaleBottomRight;
      case "none":
        return "hope-none";
    }
  };
  return i(O, {
    get when() {
      return n();
    },
    get children() {
      return i(it, {
        get children() {
          return i(Oe, {
            get name() {
              return f();
            },
            appear: !0,
            onAfterExit: l,
            get children() {
              return i(O, {
                get when() {
                  return r.state.opened;
                },
                get children() {
                  return i(ta, {
                    onClickOutside: d,
                    get children() {
                      return i(A, b({
                        role: "menu",
                        tabindex: "-1",
                        get id() {
                          return r.state.menuContentId;
                        },
                        get ["aria-activedescendant"]() {
                          return r.state.activeDescendantId;
                        },
                        get ["aria-labelledby"]() {
                          return r.state.triggerId;
                        },
                        "aria-orientation": "vertical",
                        get class() {
                          return g();
                        },
                        get __baseStyle() {
                          var u;
                          return (u = t == null ? void 0 : t.baseStyle) == null ? void 0 : u.content;
                        },
                        get onMouseLeave() {
                          return r.onContentMouseLeave;
                        }
                      }, a, {
                        get children() {
                          return c();
                        }
                      }));
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
}
eg.toString = () => $(ra);
const oa = ae(), na = "hope-menu__group";
function tg(e) {
  const t = _().Menu, [r, o] = oe(), [a, n] = v(e, ["class", "children"]), s = () => m(a.class, na, ol()), l = {
    setAriaLabelledBy: o
  };
  return i(oa.Provider, {
    value: l,
    get children() {
      return i(A, b({
        role: "group",
        get ["aria-labelledby"]() {
          return r();
        },
        get class() {
          return s();
        },
        get __baseStyle() {
          var c;
          return (c = t == null ? void 0 : t.baseStyle) == null ? void 0 : c.group;
        }
      }, n, {
        get children() {
          return a.children;
        }
      }));
    }
  });
}
tg.toString = () => $(na);
function rg() {
  return re(oa);
}
const aa = "hope-menu__item", og = "hope-menu__item__icon-wrapper", ng = "hope-menu__item__text", ag = "hope-menu__item__command";
function sg(e) {
  const t = de(), r = _().Menu, o = Ut(), [a, n] = oe(-1);
  let s;
  const [l, c] = v(e, ["ref", "class", "children", "colorScheme", "icon", "iconSpacing", "command", "commandSpacing", "textValue", "disabled", "closeOnSelect", "onSelect", "onClick"]), d = () => {
    var w, x;
    return {
      key: t,
      textValue: (x = (w = l.textValue) != null ? w : s == null ? void 0 : s.textContent) != null ? x : "",
      disabled: !!l.disabled,
      closeOnSelect: l.closeOnSelect != null ? !!l.closeOnSelect : o.state.closeOnSelect,
      onSelect: l.onSelect
    };
  }, g = () => `${o.state.itemIdPrefix}-${a()}`, f = () => o.isItemActiveDescendant(a()), u = (w) => {
    w.stopPropagation(), o.onItemClick(a());
  }, p = (w) => {
    if (l.disabled && o.onItemMouseMove(-1), f() || l.disabled) {
      w.preventDefault(), w.stopPropagation();
      return;
    }
    o.onItemMouseMove(a());
  }, C = () => m(l.class, aa, al({
    colorScheme: l.colorScheme
  })), z = () => m(og, sl()), h = () => m(ng, il()), y = () => m(ag, ll());
  return ue(() => {
    n(o.registerItem(d()));
  }), ve(() => {
    f() && s && o.scrollToItem(s);
  }), i(A, b({
    role: "menuitem",
    get id() {
      return g();
    },
    get ["data-active"]() {
      return f() ? "" : void 0;
    },
    get ["data-disabled"]() {
      return l.disabled ? "" : void 0;
    },
    "data-group": !0,
    get class() {
      return C();
    },
    get __baseStyle() {
      var w;
      return (w = r == null ? void 0 : r.baseStyle) == null ? void 0 : w.item;
    },
    onClick: u,
    onMouseMove: p,
    get onMouseDown() {
      return o.onItemMouseDown;
    }
  }, c, {
    get children() {
      return [i(O, {
        get when() {
          return l.icon;
        },
        get children() {
          return i(R.span, {
            "aria-hidden": "true",
            get class() {
              return z();
            },
            get __baseStyle() {
              var w;
              return (w = r == null ? void 0 : r.baseStyle) == null ? void 0 : w.itemIconWrapper;
            },
            get mr() {
              var w;
              return (w = l.iconSpacing) != null ? w : "0.5rem";
            },
            get children() {
              return l.icon;
            }
          });
        }
      }), i(O, {
        get when() {
          return l.children;
        },
        get children() {
          return i(R.span, {
            get class() {
              return h();
            },
            get __baseStyle() {
              var w;
              return (w = r == null ? void 0 : r.baseStyle) == null ? void 0 : w.itemText;
            },
            get children() {
              return l.children;
            }
          });
        }
      }), i(O, {
        get when() {
          return l.command;
        },
        get children() {
          return i(R.span, {
            get class() {
              return y();
            },
            get __baseStyle() {
              var w;
              return (w = r == null ? void 0 : r.baseStyle) == null ? void 0 : w.itemCommand;
            },
            get ml() {
              var w;
              return (w = l.commandSpacing) != null ? w : "0.5rem";
            },
            get children() {
              return l.command;
            }
          });
        }
      })];
    }
  }));
}
sg.toString = () => $(aa);
const sa = "hope-menu__label";
function ig(e) {
  const t = de(), r = _().Menu, o = Ut(), a = rg(), [n, s] = v(e, ["class", "id"]), l = () => {
    var d;
    return (d = n.id) != null ? d : `${o.state.labelIdPrefix}-${t}`;
  }, c = () => m(n.class, sa, nl());
  return ue(() => {
    a == null || a.setAriaLabelledBy(l());
  }), i(A, b({
    get id() {
      return l();
    },
    get class() {
      return c();
    },
    get __baseStyle() {
      var d;
      return (d = r == null ? void 0 : r.baseStyle) == null ? void 0 : d.label;
    }
  }, s));
}
ig.toString = () => $(sa);
const ia = "hope-menu__trigger";
function lg(e) {
  const t = _().Menu, r = Ut(), [o, a] = v(e, ["ref", "class", "onClick", "onKeyDown", "onBlur"]), n = (d) => {
    me(r.onTriggerClick, o.onClick)(d);
  }, s = (d) => {
    me(r.onTriggerKeyDown, o.onKeyDown)(d);
  }, l = (d) => {
    me(r.onTriggerBlur, o.onBlur)(d);
  }, c = () => m(o.class, ia, tl());
  return i(R.button, b({
    get id() {
      return r.state.triggerId;
    },
    type: "button",
    "aria-haspopup": "menu",
    get ["aria-controls"]() {
      return r.state.menuContentId;
    },
    get ["aria-expanded"]() {
      return r.state.opened;
    },
    get class() {
      return c();
    },
    get __baseStyle() {
      var d;
      return (d = t == null ? void 0 : t.baseStyle) == null ? void 0 : d.trigger;
    },
    onClick: n,
    onKeyDown: s,
    onBlur: l
  }, a));
}
lg.toString = () => $(ia);
const la = "hope-notification";
function ca(e) {
  const t = _().Notification, o = Z({}, e), [a, n] = v(o, ["class", "status"]), s = () => m(a.class, la, gl({
    status: a.status
  })), c = {
    status: () => a.status
  };
  return i(da.Provider, {
    value: c,
    get children() {
      return i(A, b({
        role: "alert",
        get class() {
          return s();
        },
        get __baseStyle() {
          var d;
          return (d = t == null ? void 0 : t.baseStyle) == null ? void 0 : d.root;
        }
      }, n));
    }
  });
}
ca.toString = () => $(la);
const da = ae();
function cg() {
  const e = re(da);
  if (!e)
    throw new Error("[Hope UI]: useNotificationContext must be used within an `<Notification />` component");
  return e;
}
const pe = {
  show: "hope-ui:show-notification",
  update: "hope-ui:update-notification",
  hide: "hope-ui:hide-notification",
  clear: "hope-ui:clear-notifications",
  clearQueue: "hope-ui:clear-notifications-queue",
  addToNotificationQueue: "hope-ui:add-to-notification-queue",
  setDebugMode: "hope-ui:set-debug-mode"
};
function dt(e, t) {
  return new CustomEvent(e, { detail: t });
}
function dg(e) {
  window.dispatchEvent(dt(pe.show, e));
}
function ug(e) {
  window.dispatchEvent(dt(pe.update, e));
}
function gg(e) {
  window.dispatchEvent(dt(pe.hide, e));
}
function fg() {
  window.dispatchEvent(dt(pe.clear));
}
function pg() {
  window.dispatchEvent(dt(pe.clearQueue));
}
function hg(e) {
  window.dispatchEvent(dt(pe.addToNotificationQueue, e));
}
function bg(e) {
  window.dispatchEvent(dt(pe.setDebugMode, e));
}
const Op = {
  show: dg,
  update: ug,
  hide: gg,
  clear: fg,
  clearQueue: pg,
  addToNotificationQueue: hg,
  setDebugMode: bg
}, ua = "hope-notification__description";
function ar(e) {
  const t = _().Notification, [r, o] = v(e, ["class"]), a = () => m(r.class, ua, bl());
  return i(A, b({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.description;
    }
  }, o));
}
ar.toString = () => $(ua);
const ga = "hope-notification__icon";
function fa(e) {
  const t = _().Notification, {
    status: r
  } = cg(), a = Z({
    boxSize: "$7"
  }, e), [n, s] = v(a, ["as", "class"]), l = () => m(n.class, ga, pl({
    status: r()
  })), c = () => {
    if (n.as)
      return n.as;
    switch (r()) {
      case "success":
        return ho;
      case "info":
        return vo;
      case "warning":
        return mo;
      case "danger":
        return bo;
    }
  };
  return i(ct, b({
    get as() {
      return c();
    },
    get class() {
      return l();
    },
    get __baseStyle() {
      var d;
      return (d = t == null ? void 0 : t.baseStyle) == null ? void 0 : d.icon;
    }
  }, s));
}
fa.toString = () => $(ga);
const pa = "hope-notification__title";
function sr(e) {
  const t = _().Notification, [r, o] = v(e, ["class"]), a = () => m(r.class, pa, hl());
  return i(A, b({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.title;
    }
  }, o));
}
sr.toString = () => $(pa);
function mg(e) {
  var g, f, u, p;
  const [t, r] = oe(
    (f = (g = e.initialValues) == null ? void 0 : g.slice(0, e.limit)) != null ? f : []
  ), [o, a] = oe((p = (u = e.initialValues) == null ? void 0 : u.slice(e.limit)) != null ? p : []), n = () => e.limit;
  return {
    state: {
      current: t,
      queue: o,
      limit: n
    },
    add: (...C) => {
      const z = [...t(), ...o(), ...C];
      r(z.slice(0, n())), a(z.slice(n()));
    },
    update: (C) => {
      const z = C([...t(), ...o()]);
      r(z.slice(0, n())), a(z.slice(n()));
    },
    clearQueue: () => {
      a([]);
    }
  };
}
const vg = S({
  display: "flex"
}), Xt = "hope-stack";
function Sr(e) {
  const [t, r] = v(e, ["class", "direction", "wrap", "spacing"]), o = () => m(t.class, Xt, vg());
  return i(A, b({
    get class() {
      return o();
    },
    get flexDirection() {
      return t.direction;
    },
    get flexWrap() {
      return t.wrap;
    },
    get gap() {
      return t.spacing;
    }
  }, r));
}
Sr.toString = () => $(Xt);
function Sg(e) {
  const [t, r] = v(e, ["spacing"]);
  return i(Sr, b({
    direction: "row",
    alignItems: "center",
    get columnGap() {
      return t.spacing;
    }
  }, r));
}
Sg.toString = () => $(Xt);
function ha(e) {
  const [t, r] = v(e, ["spacing"]);
  return i(Sr, b({
    direction: "column",
    alignItems: "center",
    get rowGap() {
      return t.spacing;
    }
  }, r));
}
ha.toString = () => $(Xt);
const ba = ae();
function xg() {
  const e = re(ba);
  if (!e)
    throw new Error(
      "[Hope UI]: useNotificationsProviderContext must be used within a `<NotificationsProvider />` component"
    );
  return e;
}
function Cg(e) {
  const t = xg(), [r] = v(e, ["render", "id", "status", "title", "description", "duration", "persistent", "closable", "loading", "onMouseEnter", "onMouseLeave", "queuedNotificationUpdates"]);
  let o;
  const a = () => {
    window.clearTimeout(o), o = void 0;
  }, n = (g = !1) => {
    var f, u;
    !g && ((u = (f = r.queuedNotificationUpdates) == null ? void 0 : f.length) != null ? u : 0) > 0 || o && (t.debugMode() && console.log("NotificationContainer: clearTimeout called.", o, r.id, {
      ...r
    }), a());
  }, s = () => {
    var g;
    a(), t.debugMode() && console.log("NotificationContainer: [_closeNotification]", r.id, {
      ...r
    }), t.hideNotification(r.id), (g = e.onClose) == null || g.call(e, r.id);
  }, l = (g) => {
    var u;
    let f = r.queuedNotificationUpdates;
    if (f && f.length > 0) {
      let p = f[0], C = t.updateNotification(g != null ? g : r.id, p);
      if (!C) {
        t.debugMode() && console.error("NotificationContainer: Failed to update queued notification", g != null ? g : r.id, p, f), s();
        return;
      }
      a(), (u = e.onCloseWithNotificationQueued) == null || u.call(e, p), t.debugMode() && console.log("NotificationContainer: Update queued notifications", C, p, f), c();
    } else
      s();
  }, c = () => {
    var g, f;
    if (r.persistent && ((f = (g = r.queuedNotificationUpdates) == null ? void 0 : g.length) != null ? f : 0) > 0 || r.duration == null) {
      t.debugMode() && console.log("NotificationContainer: Persistent notification - setTimeout not called.", r.id, {
        ...r
      });
      return;
    }
    o = window.setTimeout(() => l(r.id), r.duration), t.debugMode() && console.log("NotificationContainer: [closeWithDelay] setTimeout called.", o, r.duration, r.id, {
      ...r
    });
  }, d = () => r.status && !r.loading;
  return ue(() => {
    t.debugMode() && console.log("NotificationContainer: onMount", r.id, {
      ...r
    }), c();
  }), be(() => {
    a();
  }), i(O, {
    get when() {
      return r.render;
    },
    get fallback() {
      return i(ca, {
        get status() {
          return r.status;
        },
        get pr() {
          return r.closable ? "$9" : "$3";
        },
        onMouseEnter: () => n(),
        onMouseLeave: c,
        get children() {
          return [i(O, {
            get when() {
              return d();
            },
            get children() {
              return i(fa, {
                mr: "$2_5"
              });
            }
          }), i(O, {
            get when() {
              return r.loading;
            },
            get children() {
              return i(Po, {
                color: "$primary10",
                boxSize: "$8",
                mr: "$2_5",
                get class() {
                  return fl();
                }
              });
            }
          }), i(Ar, {
            get children() {
              return [i($t, {
                get when() {
                  return r.title && r.description;
                },
                get children() {
                  return i(ha, {
                    alignItems: "flex-start",
                    spacing: "$1",
                    get children() {
                      return [i(sr, {
                        get children() {
                          return r.title;
                        }
                      }), i(ar, {
                        get children() {
                          return r.description;
                        }
                      })];
                    }
                  });
                }
              }), i($t, {
                get when() {
                  return r.title;
                },
                get children() {
                  return i(sr, {
                    get children() {
                      return r.title;
                    }
                  });
                }
              }), i($t, {
                get when() {
                  return r.description;
                },
                get children() {
                  return i(ar, {
                    get children() {
                      return r.description;
                    }
                  });
                }
              })];
            }
          }), i(O, {
            get when() {
              return r.closable;
            },
            get children() {
              return i(Kt, {
                size: "sm",
                position: "absolute",
                top: "$1_5",
                right: "$1_5",
                onClick: () => l()
              });
            }
          })];
        }
      });
    },
    get children() {
      return i(Pn, {
        w: "$full",
        justifyContent: "flex-end",
        onMouseEnter: () => n(),
        onMouseLeave: c,
        get children() {
          var g;
          return (g = r.render) == null ? void 0 : g.call(r, {
            id: r.id,
            close: l
          });
        }
      });
    }
  });
}
const $g = "hope-notification__list", yg = 5e3;
function Rp(e) {
  var q;
  const [t, r] = oe((q = e.debugMode) != null ? q : !1), [o] = v(e, ["children", "placement", "duration", "persistent", "closable", "limit", "zIndex"]), a = we(() => {
    var D;
    return mg({
      initialValues: [],
      limit: (D = o.limit) != null ? D : 10
    });
  }), n = () => {
    var D;
    return (D = o.placement) != null ? D : "top-end";
  }, s = () => a().state.current(), l = () => a().state.queue(), c = (D) => {
    var K, te, xe, $e, M, J, Y, P;
    const W = (K = D.id) != null ? K : `hope-notification-${de()}`, I = (xe = (te = D.persistent) != null ? te : o.persistent) != null ? xe : !1, T = (M = ($e = D.duration) != null ? $e : o.duration) != null ? M : yg, E = (Y = (J = D.closable) != null ? J : o.closable) != null ? Y : !0, U = (P = D.queuedNotificationUpdates) != null ? P : [];
    return a().update((N) => {
      const V = {
        ...D,
        queuedNotificationUpdates: U,
        id: W,
        persistent: I,
        duration: T,
        closable: E
      };
      return V.id && N.some((X) => X[0].id === V.id) ? (t() && console.log("[showNotification] Notification with the same id already exists, adding to queue", V.id, {
        ...V
      }), f(V.id, V), N) : (t() && console.log("[showNotification] Adding to list and showing notification.", {
        ...V
      }), [...N, ie(V)]);
    }), W;
  }, d = (D, W) => {
    let I = !1;
    return a().update((T) => {
      var xe, $e, M, J, Y, P, N, V, X;
      const E = T.findIndex((Se) => Se[0].id === D);
      if (E === -1)
        return T;
      const U = [...T];
      let K = U[E][0], te = U[E][1];
      return te("description", (xe = W.description) != null ? xe : K.description), te("title", ($e = W.title) != null ? $e : K.title), te("status", (M = W.status) != null ? M : K.status), te("loading", (J = W.loading) != null ? J : K.loading), te("persistent", (Y = W.persistent) != null ? Y : K.persistent), te("duration", (P = W.duration) != null ? P : K.duration), te("closable", (N = W.closable) != null ? N : K.closable), te("onClose", (V = W.onClose) != null ? V : K.onClose), te("render", (X = W.render) != null ? X : K.render), t() && console.log("[updateNotification] Notification found in list, updating", D, W), I = !0, U;
    }), I;
  }, g = (D) => {
    let W = !1;
    a().update((I) => I.filter((T) => {
      var E, U;
      return T[0].id === D ? (t() && console.log("[hideNotification] Hiding notification.", D, {
        ...T[0]
      }), T[1]("queuedNotificationUpdates", []), (U = (E = T[0]).onClose) == null || U.call(E, T[0].id), !1) : (!W && t() && (console.warn("[hideNotification] Keeping notification since it was not found in list.", D, {
        ...T[0]
      }), W = !0), !0);
    }));
  }, f = (D, W) => {
    !D || !W || a().update((I) => {
      var K;
      const T = I.findIndex((te) => te[0].id === D);
      if (T === -1)
        return t() && console.log("[addToNotificationQueue] Notification not found in list.", D, W), I;
      let E = I[T], U = E[1];
      return U("queuedNotificationUpdates", [...(K = E[0].queuedNotificationUpdates) != null ? K : [], W]), t() && console.log("[addToNotificationQueue] Notification found in list, updating", D, W), [...I];
    });
  }, u = (D) => {
    a().update((W) => {
      var U;
      const I = W.findIndex((K) => K[0].id === D);
      if (I === -1)
        return t() && console.log("[removeNotificationFromQueue] Notification not found in list.", D), W;
      let T = W[I], E = T[1];
      return E("queuedNotificationUpdates", (U = T[0].queuedNotificationUpdates) == null ? void 0 : U.slice(1)), t() && console.log("[removeNotificationFromQueue] Queued Notification found in list, removing...", D), [...W];
    });
  }, p = () => a().update(() => []), C = () => a().clearQueue(), z = () => m($g, ul({
    placement: n()
  })), h = () => {
    switch (n()) {
      case "top-start":
        return Te.slideInLeft;
      case "top":
        return Te.slideInTop;
      case "top-end":
        return Te.slideInRight;
      case "bottom-start":
        return Te.slideInLeft;
      case "bottom":
        return Te.slideInBottom;
      case "bottom-end":
        return Te.slideInRight;
      default:
        return Te.slideInRight;
    }
  }, y = {
    notifications: s,
    queue: l,
    showNotification: c,
    updateNotification: d,
    hideNotification: g,
    clear: p,
    clearQueue: C,
    addToNotificationQueue: f,
    debugMode: t
  }, w = (D) => c(D.detail), x = (D) => d(D.detail.id, D.detail), k = (D) => g(D.detail), L = (D) => f(D.detail.id, D.detail), H = (D) => {
    var W;
    r((W = D.detail) != null ? W : !1);
  };
  return ue(() => {
    window.addEventListener(pe.show, w), window.addEventListener(pe.update, x), window.addEventListener(pe.hide, k), window.addEventListener(pe.clear, p), window.addEventListener(pe.clearQueue, C), window.addEventListener(pe.addToNotificationQueue, L), window.addEventListener(pe.setDebugMode, H);
  }), be(() => {
    window.removeEventListener(pe.show, w), window.removeEventListener(pe.update, x), window.removeEventListener(pe.hide, k), window.removeEventListener(pe.clear, p), window.removeEventListener(pe.clearQueue, C), window.removeEventListener(pe.addToNotificationQueue, L), window.removeEventListener(pe.setDebugMode, H);
  }), i(ba.Provider, {
    value: y,
    get children() {
      return [i(it, {
        get children() {
          return i(A, {
            get class() {
              return z();
            },
            get zIndex() {
              return o.zIndex;
            },
            get children() {
              return i(Ws, {
                get name() {
                  return h();
                },
                get children() {
                  return i(Er, {
                    get each() {
                      return y.notifications();
                    },
                    children: (D) => i(Cg, b(() => D[0], {
                      onCloseWithNotificationQueued: (W) => {
                        u(W.id);
                      },
                      onClose: (W) => {
                      }
                    }))
                  });
                }
              });
            }
          });
        }
      }), o.children];
    }
  });
}
const wg = (e) => e.hasAttribute("tabindex");
function ma(e) {
  return e.parentElement && ma(e.parentElement) ? !0 : e.hidden;
}
function _g(e) {
  return Boolean(e.getAttribute("disabled")) === !0 || Boolean(e.getAttribute("aria-disabled")) === !0;
}
function Ig(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function kg(e) {
  if (!yc(e) || ma(e) || _g(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const o = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in o ? o[t]() : Ig(e) ? !0 : wg(e);
}
function Wp(e) {
  const t = `hope-popover-${de()}`, r = _().Popover, [o, a] = ie({
    _opened: !!e.defaultOpened,
    isHovering: !1,
    headerMounted: !1,
    bodyMounted: !1,
    finalPlacement: "bottom",
    get isControlled() {
      return e.opened !== void 0;
    },
    get opened() {
      return this.isControlled ? !!e.opened : this._opened;
    },
    get contentId() {
      var P;
      return (P = e.id) != null ? P : t;
    },
    get triggerId() {
      return `${this.contentId}--trigger`;
    },
    get headerId() {
      return `${this.contentId}--header`;
    },
    get bodyId() {
      return `${this.contentId}--body`;
    },
    get triggerMode() {
      var P;
      return (P = e.triggerMode) != null ? P : "click";
    },
    get triggerOnClick() {
      return this.triggerMode === "click";
    },
    get triggerOnHover() {
      return this.triggerMode === "hover";
    },
    get initialFocus() {
      return e.initialFocus;
    },
    get inline() {
      var P;
      return (P = e.inline) != null ? P : !1;
    },
    get initialPlacement() {
      var P, N, V, X;
      return (X = (V = e.placement) != null ? V : (N = (P = r == null ? void 0 : r.defaultProps) == null ? void 0 : P.root) == null ? void 0 : N.placement) != null ? X : "bottom";
    },
    get offset() {
      var P, N, V, X;
      return (X = (V = e.offset) != null ? V : (N = (P = r == null ? void 0 : r.defaultProps) == null ? void 0 : P.root) == null ? void 0 : N.offset) != null ? X : 8;
    },
    get arrowPadding() {
      var P, N, V, X;
      return (X = (V = e.arrowPadding) != null ? V : (N = (P = r == null ? void 0 : r.defaultProps) == null ? void 0 : P.root) == null ? void 0 : N.arrowPadding) != null ? X : 8;
    },
    get openDelay() {
      var P, N, V, X;
      return (X = (V = e.openDelay) != null ? V : (N = (P = r == null ? void 0 : r.defaultProps) == null ? void 0 : P.root) == null ? void 0 : N.openDelay) != null ? X : 0;
    },
    get closeDelay() {
      var P, N, V, X;
      return (X = (V = e.closeDelay) != null ? V : (N = (P = r == null ? void 0 : r.defaultProps) == null ? void 0 : P.root) == null ? void 0 : N.closeDelay) != null ? X : 100;
    },
    get motionPreset() {
      var P, N, V, X;
      return (X = (V = e.motionPreset) != null ? V : (N = (P = r == null ? void 0 : r.defaultProps) == null ? void 0 : P.root) == null ? void 0 : N.motionPreset) != null ? X : "scale";
    },
    get closeOnBlur() {
      var P, N, V, X;
      return (X = (V = e.closeOnBlur) != null ? V : (N = (P = r == null ? void 0 : r.defaultProps) == null ? void 0 : P.root) == null ? void 0 : N.closeOnBlur) != null ? X : !0;
    },
    get closeOnEsc() {
      var P, N, V, X;
      return (X = (V = e.closeOnEsc) != null ? V : (N = (P = r == null ? void 0 : r.defaultProps) == null ? void 0 : P.root) == null ? void 0 : N.closeOnEsc) != null ? X : !0;
    },
    get trapFocus() {
      var P, N, V, X;
      return (X = (V = e.trapFocus) != null ? V : (N = (P = r == null ? void 0 : r.defaultProps) == null ? void 0 : P.root) == null ? void 0 : N.trapFocus) != null ? X : !1;
    }
  });
  let n, s, l, c, d, g, f, u;
  const p = () => `[id='${o.contentId}']`, C = (P) => {
    n = P;
  }, z = (P) => {
    s = P;
  }, h = (P) => {
    l = P;
  }, y = (P) => {
    c = P;
  };
  async function w() {
    var ee, se, We;
    const P = n != null ? n : s;
    if (!P || !l)
      return;
    const N = [yt(o.offset)];
    o.inline && N.push(Mr()), N.push(wt()), N.push(_t({
      padding: e.shiftPadding
    })), c && N.push(Or({
      element: c,
      padding: o.arrowPadding
    })), N.push(Rr());
    const {
      x: V,
      y: X,
      placement: Se,
      middlewareData: Pe
    } = await Wt(P, l, {
      placement: o.initialPlacement,
      middleware: N
    });
    if (Se !== o.finalPlacement && a("finalPlacement", Se), !l)
      return;
    const ze = (ee = Pe.hide) == null ? void 0 : ee.referenceHidden;
    if (Object.assign(l.style, {
      left: `${Math.round(V)}px`,
      top: `${Math.round(X)}px`,
      visibility: ze ? "hidden" : "visible"
    }), !c)
      return;
    const qe = (se = Pe.arrow) == null ? void 0 : se.x, je = (We = Pe.arrow) == null ? void 0 : We.y, B = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right"
    }[Se.split("-")[0]], F = `${(Math.round(c.clientWidth / 2) + 1) * -1}px`;
    Object.assign(c.style, {
      left: qe != null ? `${Math.round(qe)}px` : "",
      top: je != null ? `${Math.round(je)}px` : "",
      right: "",
      bottom: "",
      [B]: F
    });
  }
  const x = () => {
    var P;
    o.isControlled || a("_opened", !0), (P = e.onOpen) == null || P.call(e), w();
  }, k = () => {
    var P;
    o.isControlled || a("_opened", !1), (P = e.onClose) == null || P.call(e);
  }, L = () => {
    !o.isHovering && k();
  }, H = () => {
    g = window.setTimeout(x, o.openDelay);
  }, q = () => {
    g && window.clearTimeout(g), f = window.setTimeout(k, o.closeDelay);
  }, D = () => {
    if (Rt)
      return;
    const P = n != null ? n : s;
    !P || !l || (u = It(P, l, w));
  }, W = () => {
    if (!o.initialFocus) {
      l == null || l.focus();
      return;
    }
    const P = document.querySelector(o.initialFocus);
    P && kg(P) && (P == null || P.focus());
  }, I = (P) => {
    const N = Mt(P), V = !at(l, N);
    o.opened && o.closeOnBlur && V && q();
  }, T = () => {
    xe(!1), g && window.clearTimeout(g), f = window.setTimeout(L, o.closeDelay);
  }, E = (P) => {
    const N = Mt(P), V = at(l, N), X = at(s, N), Se = !V && !X;
    o.opened && o.closeOnBlur && Se && q();
  }, U = T, K = () => {
    D(), o.trapFocus && l ? (d = Wr(l, {
      initialFocus: o.initialFocus,
      fallbackFocus: p(),
      allowOutsideClick: !1
    }), d.activate()) : W();
  }, te = () => {
    d == null || d.deactivate(), u == null || u();
  }, xe = (P) => a("isHovering", P), $e = (P) => a("headerMounted", P), M = (P) => a("bodyMounted", P), J = () => o.opened;
  be(() => {
    window.clearTimeout(g), window.clearTimeout(f);
  });
  const Y = {
    state: o,
    assignAnchorRef: C,
    assignTriggerRef: z,
    assignPopoverRef: h,
    assignArrowRef: y,
    openWithDelay: H,
    closeWithDelay: q,
    onTriggerBlur: I,
    onTriggerMouseLeave: T,
    onPopoverFocusOut: E,
    onPopoverMouseLeave: U,
    updatePopoverPosition: w,
    afterPopoverOpen: K,
    afterPopoverClose: te,
    setIsHovering: xe,
    setHeaderMounted: $e,
    setBodyMounted: M
  };
  return i(va.Provider, {
    value: Y,
    get children() {
      return i(O, {
        get when() {
          return kt(e);
        },
        get fallback() {
          return e.children;
        },
        get children() {
          var P;
          return (P = e.children) == null ? void 0 : P.call(e, {
            opened: J,
            onClose: q
          });
        }
      });
    }
  });
}
const va = ae();
function ut() {
  const e = re(va);
  if (!e)
    throw new Error("[Hope UI]: usePopoverContext must be used within a `<Popover />` component");
  return e;
}
function Fp(e) {
  ut();
  const [t, r] = v(e, ["ref", "as"]);
  return i(Ct, b({
    get component() {
      return t.as;
    }
  }, r));
}
const Sa = "hope-popover__arrow";
function Pg(e) {
  const t = _().Popover, r = ut(), [o, a] = v(e, ["class"]), n = we(() => r.state.finalPlacement.split("-")[0]), s = () => m(o.class, Sa, yl({
    popoverPlacement: n()
  }));
  return i(A, b({
    get class() {
      return s();
    },
    get __baseStyle() {
      var l;
      return (l = t == null ? void 0 : t.baseStyle) == null ? void 0 : l.arrow;
    }
  }, a));
}
Pg.toString = () => $(Sa);
const xa = "hope-popover__body";
function Tg(e) {
  const t = _().Popover, r = ut(), [o, a] = v(e, ["class"]), n = () => m(o.class, xa, xl());
  return ue(() => r.setBodyMounted(!0)), be(() => r.setBodyMounted(!1)), i(A, b({
    get class() {
      return n();
    },
    get id() {
      return r.state.bodyId;
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.body;
    }
  }, a));
}
Tg.toString = () => $(xa);
const Ca = "hope-popover__close-button";
function zg(e) {
  var d, g, f, u, p, C, z, h;
  const t = _().Popover, r = ut(), o = {
    "aria-label": (f = (g = (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.closeButton) == null ? void 0 : g["aria-label"]) != null ? f : "Close popover",
    size: (C = (p = (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.closeButton) == null ? void 0 : p.size) != null ? C : "sm",
    icon: (h = (z = t == null ? void 0 : t.defaultProps) == null ? void 0 : z.closeButton) == null ? void 0 : h.icon
  }, a = Z(o, e), [n, s] = v(a, ["class", "onClick"]), l = () => m(n.class, Ca, $l());
  return i(Kt, b({
    get class() {
      return l();
    },
    get __baseStyle() {
      var y;
      return (y = t == null ? void 0 : t.baseStyle) == null ? void 0 : y.closeButton;
    },
    onClick: (y) => {
      me(n.onClick, (w) => {
        w.stopPropagation(), r.closeWithDelay();
      })(y);
    }
  }, s));
}
zg.toString = () => $(Ca);
const $a = "hope-popover__content";
function Bg(e) {
  const t = _().Popover, r = ut(), [o, a] = oe(!1), [n, s] = v(e, ["ref", "class", "onKeyDown", "onFocusOut", "onMouseEnter", "onMouseLeave"]), l = (h) => {
    r.state.closeOnEsc && h.key === "Escape" && r.closeWithDelay();
  }, c = (h) => {
    me(n.onKeyDown, l)(h);
  }, d = (h) => {
    me(n.onFocusOut, r.onPopoverFocusOut)(h);
  }, g = (h) => {
    he(n.onMouseEnter, h), r.setIsHovering(!0);
  }, f = (h) => {
    he(n.onMouseLeave, h), r.onPopoverMouseLeave();
  }, u = () => {
    Rt || (document.addEventListener("keydown", l), r.afterPopoverOpen());
  }, p = () => {
    document.removeEventListener("keydown", l), r.afterPopoverClose(), a(!1);
  }, C = () => m(n.class, $a, vl()), z = () => {
    switch (r.state.motionPreset) {
      case "scale":
        return rt.scale;
      case "none":
        return "hope-none";
    }
  };
  return ve(() => {
    r.state.opened ? a(!0) : r.state.motionPreset === "none" && a(!1);
  }), i(O, {
    get when() {
      return o();
    },
    get children() {
      return i(it, {
        get children() {
          return i(Oe, {
            get name() {
              return z();
            },
            appear: !0,
            get onBeforeEnter() {
              return r.updatePopoverPosition;
            },
            onAfterEnter: u,
            onAfterExit: p,
            get children() {
              return i(O, {
                get when() {
                  return r.state.opened;
                },
                get children() {
                  return i(R.section, b({
                    tabIndex: -1,
                    get id() {
                      return r.state.contentId;
                    },
                    get role() {
                      return r.state.triggerOnHover ? "tooltip" : "dialog";
                    },
                    get ["aria-labelledby"]() {
                      return r.state.headerMounted ? r.state.headerId : void 0;
                    },
                    get ["aria-describedby"]() {
                      return r.state.bodyMounted ? r.state.bodyId : void 0;
                    },
                    get class() {
                      return C();
                    },
                    get __baseStyle() {
                      var h;
                      return (h = t == null ? void 0 : t.baseStyle) == null ? void 0 : h.content;
                    },
                    onKeyDown: c,
                    onFocusOut: d,
                    get onMouseEnter() {
                      return r.state.triggerOnHover ? g : void 0;
                    },
                    get onMouseLeave() {
                      return r.state.triggerOnHover ? f : void 0;
                    }
                  }, s));
                }
              });
            }
          });
        }
      });
    }
  });
}
Bg.toString = () => $($a);
const ya = "hope-popover__footer";
function Lg(e) {
  const t = _().Popover, [r, o] = v(e, ["class"]), a = () => m(r.class, ya, Cl());
  return i(A, b({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.footer;
    }
  }, o));
}
Lg.toString = () => $(ya);
const wa = "hope-popover__header";
function Dg(e) {
  const t = _().Popover, r = ut(), [o, a] = v(e, ["class"]), n = () => m(o.class, wa, Sl());
  return ue(() => r.setHeaderMounted(!0)), be(() => r.setHeaderMounted(!1)), i(A, b({
    get class() {
      return n();
    },
    get id() {
      return r.state.headerId;
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.header;
    }
  }, a));
}
Dg.toString = () => $(wa);
function Np(e) {
  const t = ut(), [r, o] = v(e, ["ref", "onClick", "onKeyDown", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave"]), a = (g) => {
    he(r.onClick, g), t.state.opened ? t.closeWithDelay() : t.openWithDelay();
  }, n = (g) => {
    he(r.onKeyDown, g), g.key === "Escape" && t.closeWithDelay();
  }, s = (g) => {
    he(r.onFocus, g), t.openWithDelay();
  }, l = (g) => {
    me(r.onBlur, t.onTriggerBlur)(g);
  }, c = (g) => {
    he(r.onMouseEnter, g), t.setIsHovering(!0), t.openWithDelay();
  }, d = (g) => {
    he(r.onMouseLeave, g), t.onTriggerMouseLeave();
  };
  return i(R.button, b({
    get id() {
      return t.state.triggerId;
    },
    type: "button",
    "aria-haspopup": "dialog",
    get ["aria-controls"]() {
      return t.state.contentId;
    },
    get ["aria-expanded"]() {
      return t.state.opened;
    },
    get onClick() {
      return t.state.triggerOnClick ? a : void 0;
    },
    get onKeyDown() {
      return t.state.triggerOnHover ? n : void 0;
    },
    get onFocus() {
      return t.state.triggerOnHover ? s : void 0;
    },
    get onBlur() {
      return t.state.triggerOnHover ? l : void 0;
    },
    get onMouseEnter() {
      return t.state.triggerOnHover ? c : void 0;
    },
    get onMouseLeave() {
      return t.state.triggerOnHover ? d : void 0;
    }
  }, o));
}
const Hg = bt({
  "0%": { left: "-40%" },
  "100%": { left: "100%" }
}), Ag = bt({
  from: { backgroundPosition: "1rem 0" },
  to: { backgroundPosition: "0 0" }
}), Eg = S({
  position: "relative",
  overflow: "hidden",
  variants: {
    size: {
      xs: {
        height: "$1",
        fontSize: "4px"
      },
      sm: {
        height: "$2",
        fontSize: "6px"
      },
      md: {
        height: "$3",
        fontSize: "8px"
      },
      lg: {
        height: "$4",
        fontSize: "10px"
      }
    }
  }
}), Mg = S({
  position: "relative",
  height: "100%",
  transition: "width 600ms ease",
  variants: {
    striped: {
      true: {}
    },
    animated: {
      true: {}
    },
    indeterminate: {
      true: {
        position: "absolute",
        willChange: "left",
        minWidth: "50%",
        animation: `${Hg} 1200ms ease infinite normal none running`
      }
    }
  },
  compoundVariants: [
    {
      indeterminate: !1,
      striped: !0,
      css: {
        backgroundImage: "linear-gradient(45deg, $colors$progressStripe 25%, transparent 25%, transparent 50%, $colors$progressStripe 50%,  $colors$progressStripe 75%, transparent 75%, transparent)",
        backgroundSize: "1rem 1rem"
      }
    },
    {
      indeterminate: !1,
      striped: !0,
      animated: !0,
      css: {
        animation: `${Ag} 750ms linear infinite`
      }
    }
  ]
}), Og = S({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  color: "$neutral12",
  lineHeight: "$none",
  fontWeight: "$bold",
  textAlign: "center",
  transform: "translate(-50%, -50%)"
}), _a = ae(), Ia = "hope-progress";
function Rg(e) {
  var g, f, u, p, C, z;
  const t = _().Progress, [r] = ie({
    get min() {
      var h;
      return (h = e.min) != null ? h : 0;
    },
    get max() {
      var h;
      return (h = e.max) != null ? h : 100;
    },
    get value() {
      var h;
      return (h = e.value) != null ? h : 0;
    },
    get percent() {
      return Zr(this.value, this.min, this.max);
    },
    get indeterminate() {
      var h;
      return (h = e.indeterminate) != null ? h : !1;
    },
    get ariaValueText() {
      var h;
      if (!this.indeterminate)
        return Ae(this.getValueText) ? this.getValueText(this.value, this.percent) : (h = e.valueText) != null ? h : `${this.percent}%`;
    },
    get getValueText() {
      return e.getValueText;
    }
  }), o = {
    size: (u = (f = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.root) == null ? void 0 : f.size) != null ? u : "md",
    trackColor: (z = (C = (p = t == null ? void 0 : t.defaultProps) == null ? void 0 : p.root) == null ? void 0 : C.trackColor) != null ? z : "$neutral4"
  }, a = Z(o, e), [n, s, l] = v(a, ["class", "size", "trackColor"], ["min", "max", "value", "indeterminate", "valueText", "getValueText"]), c = () => m(n.class, Ia, Eg({
    size: n.size
  })), d = {
    state: r
  };
  return i(_a.Provider, {
    value: d,
    get children() {
      return i(A, b({
        role: "progressbar",
        get ["data-indeterminate"]() {
          return r.indeterminate ? "" : void 0;
        },
        get ["aria-valuemin"]() {
          return r.min;
        },
        get ["aria-valuemax"]() {
          return r.max;
        },
        get ["aria-valuenow"]() {
          return r.indeterminate ? void 0 : r.value;
        },
        get ["aria-valuetext"]() {
          return r.ariaValueText;
        },
        get class() {
          return c();
        },
        get __baseStyle() {
          var h;
          return (h = t == null ? void 0 : t.baseStyle) == null ? void 0 : h.root;
        },
        get backgroundColor() {
          return n.trackColor;
        }
      }, l));
    }
  });
}
Rg.toString = () => $(Ia);
function ka() {
  const e = re(_a);
  if (!e)
    throw new Error("[Hope UI]: useProgressContext must be used within a `<Progress />` component");
  return e;
}
const Pa = "hope-progress__indicator";
function Wg(e) {
  const t = _().Progress, r = ka(), a = Z({
    color: "$primary9"
  }, e), [n, s] = v(a, ["class", "color", "striped", "animated"]), l = () => r.state.indeterminate ? {
    backgroundImage: `linear-gradient(to right, transparent 0%, ${n.color} 50%, transparent 100%)`
  } : {
    backgroundColor: n.color
  }, c = () => m(n.class, Pa, Mg({
    striped: n.striped,
    animated: n.animated,
    indeterminate: r.state.indeterminate === !0,
    css: {
      ...l(),
      width: `${r.state.percent}%`
    }
  }));
  return i(A, b({
    get class() {
      return c();
    },
    get __baseStyle() {
      var d;
      return (d = t == null ? void 0 : t.baseStyle) == null ? void 0 : d.indicator;
    }
  }, s));
}
Wg.toString = () => $(Pa);
const Ta = "hope-progress__label";
function Fg(e) {
  const t = _().Progress, r = ka(), [o, a] = v(e, ["class", "children"]), n = () => m(o.class, Ta, Og());
  return i(A, b({
    get class() {
      return n();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.label;
    }
  }, a, {
    get children() {
      return i(O, {
        get when() {
          return o.children;
        },
        get fallback() {
          return r.state.ariaValueText;
        },
        get children() {
          return o.children;
        }
      });
    }
  }));
}
Fg.toString = () => $(Ta);
const Ng = S(hr, {
  variants: {
    labelPlacement: {
      start: {
        flexDirection: "row-reverse"
      },
      end: {
        flexDirection: "row"
      }
    }
  }
}), Vg = S(br), qg = S(mr, {
  borderRadius: "$full",
  "&[data-checked]::before": {
    content: "",
    display: "inline-block",
    position: "relative",
    boxSize: "calc(50% + 1px)",
    borderRadius: "$full",
    backgroundColor: "$loContrast"
  }
}), za = "hope-radio-group";
function jg(e) {
  const t = `hope-radio-group-${de()}--radio`, r = _().Radio, [o, a] = ie({
    _value: e.defaultValue,
    get isControlled() {
      return e.value !== void 0;
    },
    get value() {
      return this.isControlled ? e.value : this._value;
    },
    get name() {
      var f;
      return (f = e.name) != null ? f : t;
    },
    get required() {
      return e.required;
    },
    get disabled() {
      return e.disabled;
    },
    get invalid() {
      return e.invalid;
    },
    get readOnly() {
      return e.readOnly;
    },
    get variant() {
      var f, u, p;
      return (p = e.variant) != null ? p : (u = (f = r == null ? void 0 : r.defaultProps) == null ? void 0 : f.group) == null ? void 0 : u.variant;
    },
    get colorScheme() {
      var f, u, p;
      return (p = e.colorScheme) != null ? p : (u = (f = r == null ? void 0 : r.defaultProps) == null ? void 0 : f.group) == null ? void 0 : u.colorScheme;
    },
    get size() {
      var f, u, p;
      return (p = e.size) != null ? p : (u = (f = r == null ? void 0 : r.defaultProps) == null ? void 0 : f.group) == null ? void 0 : u.size;
    }
  }), [n, s, l] = v(e, ["class", "onChange"], ["value", "defaultValue", "name", "required", "disabled", "readOnly", "invalid"]), c = (f) => {
    var p;
    const u = f.target.value;
    a("_value", u), (p = n.onChange) == null || p.call(n, String(u));
  }, d = () => m(n.class, za), g = {
    state: o,
    onChange: c
  };
  return i(Ba.Provider, {
    value: g,
    get children() {
      return i(A, b({
        role: "radiogroup",
        get class() {
          return d();
        },
        get __baseStyle() {
          var f;
          return (f = r == null ? void 0 : r.baseStyle) == null ? void 0 : f.group;
        }
      }, l));
    }
  });
}
jg.toString = () => $(za);
const Ba = ae();
function Kg() {
  return re(Ba);
}
var Ug = ["<input", ' type="radio"', "", "", "", ">"];
const La = "hope-radio", Xg = "hope-radio__input", Qg = "hope-radio__control", Yg = "hope-radio__label";
function Zg(e) {
  const t = `hope-radio-${de()}`, r = _().Radio, o = mt(), a = Kg(), n = vt(e), [s, l] = ie({
    _checked: !!e.defaultChecked,
    isFocused: !1,
    get isControlled() {
      return e.checked !== void 0;
    },
    get checked() {
      if (a) {
        const x = a.state.value;
        return x != null ? String(e.value) === String(x) : !1;
      }
      return this.isControlled ? !!e.checked : this._checked;
    },
    get variant() {
      var x, k, L, H, q, D;
      return (D = (q = (k = e.variant) != null ? k : (x = a == null ? void 0 : a.state) == null ? void 0 : x.variant) != null ? q : (H = (L = r == null ? void 0 : r.defaultProps) == null ? void 0 : L.root) == null ? void 0 : H.variant) != null ? D : "outline";
    },
    get colorScheme() {
      var x, k, L, H, q, D;
      return (D = (q = (k = e.colorScheme) != null ? k : (x = a == null ? void 0 : a.state) == null ? void 0 : x.colorScheme) != null ? q : (H = (L = r == null ? void 0 : r.defaultProps) == null ? void 0 : L.root) == null ? void 0 : H.colorScheme) != null ? D : "primary";
    },
    get size() {
      var x, k, L, H, q, D;
      return (D = (q = (k = e.size) != null ? k : (x = a == null ? void 0 : a.state) == null ? void 0 : x.size) != null ? q : (H = (L = r == null ? void 0 : r.defaultProps) == null ? void 0 : L.root) == null ? void 0 : H.size) != null ? D : "md";
    },
    get labelPlacement() {
      var x, k, L, H, q, D;
      return (D = (q = (k = e.labelPlacement) != null ? k : (x = a == null ? void 0 : a.state) == null ? void 0 : x.labelPlacement) != null ? q : (H = (L = r == null ? void 0 : r.defaultProps) == null ? void 0 : L.root) == null ? void 0 : H.labelPlacement) != null ? D : "end";
    },
    get id() {
      var x;
      return o && !a ? n.id : (x = e.id) != null ? x : t;
    },
    get name() {
      var x;
      return (x = e.name) != null ? x : a == null ? void 0 : a.state.name;
    },
    get value() {
      return e.value;
    },
    get required() {
      var x;
      return (x = n.required) != null ? x : a == null ? void 0 : a.state.required;
    },
    get disabled() {
      var x;
      return (x = n.disabled) != null ? x : a == null ? void 0 : a.state.disabled;
    },
    get invalid() {
      var x;
      return (x = n.invalid) != null ? x : a == null ? void 0 : a.state.invalid;
    },
    get readOnly() {
      var x;
      return (x = n.readOnly) != null ? x : a == null ? void 0 : a.state.readOnly;
    },
    get ["aria-required"]() {
      return this.required ? !0 : void 0;
    },
    get ["aria-disabled"]() {
      return this.disabled ? !0 : void 0;
    },
    get ["aria-invalid"]() {
      return this.invalid ? !0 : void 0;
    },
    get ["aria-readonly"]() {
      return this.readOnly ? !0 : void 0;
    },
    get ["aria-label"]() {
      return e["aria-label"];
    },
    get ["aria-labelledby"]() {
      return e["aria-labelledby"];
    },
    get ["aria-describedby"]() {
      return e["aria-describedby"];
    },
    get ["data-focus"]() {
      return this.isFocused ? "" : void 0;
    },
    get ["data-checked"]() {
      return this.checked ? "" : void 0;
    },
    get ["data-required"]() {
      return this.required ? "" : void 0;
    },
    get ["data-disabled"]() {
      return this.disabled ? "" : void 0;
    },
    get ["data-invalid"]() {
      return this.invalid ? "" : void 0;
    },
    get ["data-readonly"]() {
      return this.readOnly ? "" : void 0;
    }
  }), [c, d, g] = v(e, ["class", "children", "ref", "tabIndex", "onChange"], ["variant", "colorScheme", "size", "labelPlacement", "id", "name", "value", "checked", "defaultChecked", "required", "disabled", "invalid", "readOnly", "onFocus", "onBlur"]), f = (x) => {
    if (s.readOnly || s.disabled) {
      x.preventDefault();
      return;
    }
    if (!s.isControlled) {
      const k = x.target;
      l("_checked", k.checked);
    }
    me(a == null ? void 0 : a.onChange, c.onChange)(x);
  }, u = (x) => {
    l("isFocused", !0), he(n.onFocus, x);
  }, p = (x) => {
    l("isFocused", !1), he(n.onBlur, x);
  }, C = () => m(c.class, La, Ng({
    size: s.size,
    labelPlacement: s.labelPlacement
  })), z = () => m(Xg, Vt()), h = () => m(Qg, qg({
    variant: s.variant,
    colorScheme: s.colorScheme,
    size: s.size
  })), y = () => m(Yg, Vg()), w = {
    state: s,
    onChange: f,
    onFocus: u,
    onBlur: p
  };
  return i(Da.Provider, {
    value: w,
    get children() {
      return i(R.label, b({
        get class() {
          return C();
        },
        get __baseStyle() {
          var x;
          return (x = r == null ? void 0 : r.baseStyle) == null ? void 0 : x.root;
        },
        get for() {
          return s.id;
        },
        "data-group": !0,
        get ["data-focus"]() {
          return s["data-focus"];
        },
        get ["data-checked"]() {
          return s["data-checked"];
        },
        get ["data-required"]() {
          return s["data-required"];
        },
        get ["data-disabled"]() {
          return s["data-disabled"];
        },
        get ["data-invalid"]() {
          return s["data-invalid"];
        },
        get ["data-readonly"]() {
          return s["data-readonly"];
        }
      }, g, {
        get children() {
          return [le(Ug, ce(), j("class", Q(z(), !0), !1) + j("tabindex", Q(c.tabIndex, !0), !1) + j("value", Q(s.value, !0), !1) + j("id", Q(s.id, !0), !1) + j("name", Q(s.name, !0), !1), j("checked", s.checked, !0), j("required", s.required, !0), j("disabled", s.disabled, !0) + j("readonly", Q(s.readOnly, !0), !1) + j("aria-required", Q(s["aria-required"], !0), !1) + j("aria-disabled", Q(s["aria-disabled"], !0), !1) + j("aria-invalid", Q(s["aria-invalid"], !0), !1) + j("aria-readonly", Q(s["aria-readonly"], !0), !1) + j("aria-label", Q(s["aria-label"], !0), !1) + j("aria-labelledby", Q(s["aria-labelledby"], !0), !1) + j("aria-describedby", Q(s["aria-describedby"], !0), !1)), i(R.span, b({
            "aria-hidden": !0,
            get class() {
              return h();
            },
            get __baseStyle() {
              var x;
              return (x = r == null ? void 0 : r.baseStyle) == null ? void 0 : x.control;
            },
            get ["data-focus"]() {
              return s["data-focus"];
            },
            get ["data-checked"]() {
              return s["data-checked"];
            },
            get ["data-required"]() {
              return s["data-required"];
            },
            get ["data-disabled"]() {
              return s["data-disabled"];
            },
            get ["data-invalid"]() {
              return s["data-invalid"];
            },
            get ["data-readonly"]() {
              return s["data-readonly"];
            }
          }, g)), i(R.span, {
            get class() {
              return y();
            },
            get __baseStyle() {
              var x;
              return (x = r == null ? void 0 : r.baseStyle) == null ? void 0 : x.label;
            },
            get ["data-focus"]() {
              return s["data-focus"];
            },
            get ["data-checked"]() {
              return s["data-checked"];
            },
            get ["data-required"]() {
              return s["data-required"];
            },
            get ["data-disabled"]() {
              return s["data-disabled"];
            },
            get ["data-invalid"]() {
              return s["data-invalid"];
            },
            get ["data-readonly"]() {
              return s["data-readonly"];
            },
            get children() {
              return i(O, {
                get when() {
                  return kt(c);
                },
                get fallback() {
                  return c.children;
                },
                get children() {
                  var x;
                  return (x = c.children) == null ? void 0 : x.call(c, {
                    checked: s.checked
                  });
                }
              });
            }
          })];
        }
      }));
    }
  });
}
Zg.toString = () => $(La);
const Da = ae();
function Vp() {
  const e = re(Da);
  if (!e)
    throw new Error("[Hope UI]: useRadioContext must be used within a `<Radio />` component");
  return e;
}
var Me = /* @__PURE__ */ ((e) => (e[e.Close = 0] = "Close", e[e.SelectAndClose = 1] = "SelectAndClose", e[e.First = 2] = "First", e[e.Last = 3] = "Last", e[e.Next = 4] = "Next", e[e.Open = 5] = "Open", e[e.Previous = 6] = "Previous", e[e.Select = 7] = "Select", e[e.Type = 8] = "Type", e))(Me || {});
function Lr(e = [], t, r = []) {
  return e.filter((o) => o.disabled ? !1 : o.textValue.toLowerCase().indexOf(t.toLowerCase()) === 0 && r.indexOf(o.textValue) < 0);
}
function Jg(e, t, r = 0) {
  const o = [...e.slice(r), ...e.slice(0, r)], a = Lr(o, t)[0], n = (s) => s.every((l) => l === s[0]);
  if (a)
    return e.indexOf(a);
  if (n(t.split(""))) {
    const s = Lr(o, t[0]);
    return e.indexOf(s[0]);
  } else
    return -1;
}
function Gg(e, t) {
  const { key: r, altKey: o, ctrlKey: a, metaKey: n } = e;
  if (!t && ["ArrowDown", "ArrowUp", "Enter", " "].includes(r))
    return 5;
  if (r === "Home" || r === "PageUp")
    return 2;
  if (r === "End" || r === "PageDown")
    return 3;
  if (r === "Backspace" || r === "Clear" || r.length === 1 && r !== " " && !o && !a && !n)
    return 8;
  if (t) {
    if (r === "ArrowUp" && o)
      return 1;
    if (r === "ArrowDown" && !o)
      return 4;
    if (r === "ArrowUp")
      return 6;
    if (r === "Escape")
      return 0;
    if (r === "Enter" || r === " ")
      return 1;
  }
}
function Dr(e, t, r) {
  switch (r) {
    case 2:
      return 0;
    case 3:
      return t;
    case 6:
      return Math.max(0, e - 1);
    case 4:
      return Math.min(t, e + 1);
    default:
      return e;
  }
}
function ef(e) {
  const { currentIndex: t, maxIndex: r, initialAction: o, isOptionDisabled: a } = e;
  let n = Dr(t, r, o);
  for (; a(n); ) {
    let s = o;
    const l = n === 0, c = n === r;
    if (o === 2 && (s = 4), o === 3 && (s = 6), o === 6 && l) {
      n = t;
      break;
    }
    if (o === 4 && c) {
      n = t;
      break;
    }
    n = Dr(n, r, s);
  }
  return n;
}
function Dt(e, t) {
  return String(e.value) === String(t.value);
}
function tf(e) {
  const t = `hope-select-${de()}`, r = _().Select, o = vt(e), [a, n] = oe(!1), [s, l] = oe([]), [c, d] = ie({
    get isControlled() {
      return e.value !== void 0;
    },
    get value() {
      var B;
      return this.isControlled ? e.value : this.multiple ? this.selectedOptions.map((F) => F.value) : (B = this.selectedOptions[0].value) != null ? B : void 0;
    },
    get multiple() {
      return e.multiple;
    },
    get baseId() {
      var B, F;
      return (F = (B = e.id) != null ? B : o.id) != null ? F : t;
    },
    get triggerId() {
      return `${this.baseId}-trigger`;
    },
    get listboxId() {
      return `${this.baseId}-listbox`;
    },
    get labelIdPrefix() {
      return `${this.baseId}-label`;
    },
    get optionIdPrefix() {
      return `${this.baseId}-option`;
    },
    get disabled() {
      var B;
      return (B = e.disabled) != null ? B : o.disabled;
    },
    get invalid() {
      var B;
      return (B = e.invalid) != null ? B : o.invalid;
    },
    get variant() {
      var B, F, ee, se;
      return (se = (ee = e.variant) != null ? ee : (F = (B = r == null ? void 0 : r.defaultProps) == null ? void 0 : B.root) == null ? void 0 : F.variant) != null ? se : "outline";
    },
    get size() {
      var B, F, ee, se;
      return (se = (ee = e.size) != null ? ee : (F = (B = r == null ? void 0 : r.defaultProps) == null ? void 0 : B.root) == null ? void 0 : F.size) != null ? se : "md";
    },
    get motionPreset() {
      var B, F, ee, se;
      return (se = (ee = e.motionPreset) != null ? ee : (F = (B = r == null ? void 0 : r.defaultProps) == null ? void 0 : B.root) == null ? void 0 : F.motionPreset) != null ? se : "fade-in-top";
    },
    get activeDescendantId() {
      return this.opened ? `${this.optionIdPrefix}-${this.activeIndex}` : void 0;
    },
    get hasSelectedOptions() {
      return this.selectedOptions.length > 0;
    },
    get options() {
      return s();
    },
    selectedOptions: [],
    opened: !1,
    activeIndex: 0,
    ignoreBlur: !1,
    searchString: "",
    searchTimeoutId: void 0
  });
  let g, f, u, p;
  const C = async () => {
    var F, ee, se, We;
    if (!g || !f)
      return;
    const B = await Wt(g, f, {
      placement: "bottom",
      middleware: [yt((We = (se = e.offset) != null ? se : (ee = (F = r == null ? void 0 : r.defaultProps) == null ? void 0 : F.root) == null ? void 0 : ee.offset) != null ? We : 5), wt(), _t(), Os({
        apply(Tt) {
          !f || Object.assign(f.style, {
            width: `${Tt.rects.reference.width}px`
          });
        }
      })]
    });
    !f || Object.assign(f.style, {
      left: `${Math.round(B.x)}px`,
      top: `${Math.round(B.y)}px`
    });
  }, z = (B) => {
    c.searchTimeoutId && window.clearTimeout(c.searchTimeoutId);
    const F = window.setTimeout(() => {
      d("searchString", "");
    }, 500);
    return d("searchTimeoutId", F), d("searchString", (ee) => ee += B), c.searchString;
  }, h = () => {
    g == null || g.focus();
  }, y = () => c.isControlled ? e.value == null ? [] : pt(e.value) ? e.value : [e.value] : e.defaultValue == null ? [] : pt(e.defaultValue) ? e.defaultValue : [e.defaultValue], w = () => {
    if (a())
      return;
    const B = y().map((F) => c.options.find((ee) => ee.value === F)).filter(Boolean);
    d("selectedOptions", (F) => [...F, ...B]), n(!0);
  }, x = (B) => {
    d("activeIndex", B);
  }, k = (B) => c.selectedOptions.length <= 0 ? !1 : c.multiple ? !!c.selectedOptions.find((F) => Dt(B, F)) : Dt(B, c.selectedOptions[0]), L = (B) => {
    d("selectedOptions", (F) => F.filter((ee) => !Dt(B, ee)));
  }, H = (B) => {
    const F = c.options[B];
    c.multiple ? k(F) ? L(F) : d("selectedOptions", (ee) => [...ee, F]) : d("selectedOptions", [F]);
  }, q = () => {
    var B;
    return c.multiple ? c.selectedOptions.map((F) => F.value) : (B = c.selectedOptions[0].value) != null ? B : void 0;
  }, D = (B) => {
    var F;
    x(B), H(B), (F = e.onChange) == null || F.call(e, q());
  }, W = (B) => {
    var F;
    L(B), (F = e.onChange) == null || F.call(e, q()), h();
  }, I = (B) => c.options[B].disabled, T = (B) => {
    if (!at(g, Mt(B))) {
      if (c.ignoreBlur) {
        d("ignoreBlur", !1);
        return;
      }
      c.opened && Y(!1, !1);
    }
  }, E = () => {
    o.readOnly || Y(!c.opened, !1);
  }, U = (B) => {
    if (o.readOnly)
      return;
    const {
      key: F
    } = B;
    if (c.hasSelectedOptions && c.multiple && F === "Backspace") {
      W(c.selectedOptions[c.selectedOptions.length - 1]);
      return;
    }
    const ee = c.options.length - 1, se = Gg(B, c.opened);
    switch (se) {
      case Me.Last:
      case Me.First:
        Y(!0);
      case Me.Next:
      case Me.Previous:
        return B.preventDefault(), x(ef({
          currentIndex: c.activeIndex,
          maxIndex: ee,
          initialAction: se,
          isOptionDisabled: I
        }));
      case Me.SelectAndClose:
        return B.preventDefault(), D(c.activeIndex), c.multiple ? void 0 : Y(!1);
      case Me.Close:
        return B.preventDefault(), Y(!1);
      case Me.Type:
        return K(F);
      case Me.Open:
        return B.preventDefault(), Y(!0);
    }
  }, K = (B) => {
    if (o.readOnly)
      return;
    Y(!0);
    const F = z(B), ee = Jg(c.options, F, c.activeIndex + 1);
    ee >= 0 ? x(ee) : (window.clearTimeout(c.searchTimeoutId), d("searchString", ""));
  }, te = (B) => {
    if (c.options[B].disabled) {
      h();
      return;
    }
    D(B), c.multiple ? h() : Y(!1);
  }, xe = (B) => {
    c.activeIndex !== B && x(B);
  }, $e = () => {
    d("ignoreBlur", !0);
  }, M = () => {
    c.selectedOptions.length > 0 ? d("activeIndex", c.options.findIndex((B) => k(B))) : d("activeIndex", 0);
  }, J = () => {
    c.opened ? (C(), g && f && (p = It(g, f, C))) : p == null || p();
  }, Y = (B, F = !0) => {
    c.opened !== B && (d("opened", B), M(), J(), F && h());
  }, P = () => {
    x(-1);
  }, N = (B) => {
    at(g, B) || Y(!1, !1);
  }, V = (B) => B === c.activeIndex, X = (B) => {
    g = B;
  }, Se = (B) => {
    f = B;
  }, Pe = (B) => {
    u = B;
  }, ze = (B) => {
    !u || ro(u) && oo(B, u);
  }, qe = (B) => {
    const F = c.options.findIndex((se) => Dt(se, B));
    return F != -1 ? F : l((se) => [...se, B]).length - 1;
  };
  ve(ft(() => c.options, () => w(), {
    defer: !0
  })), ve(ft(() => e.value, () => {
    if (!c.isControlled)
      return;
    const F = (pt(e.value) ? e.value : [e.value]).map((ee) => c.options.find((se) => se.value === ee)).filter(Boolean);
    d("selectedOptions", F);
  }, {
    defer: !0
  })), ve(ft(() => c.opened, (B) => {
    !B || setTimeout(() => {
      const F = u == null ? void 0 : u.querySelector("[role='option'][aria-selected='true']");
      F && ze(F);
    }, 0);
  }));
  const je = {
    state: c,
    isOptionSelected: k,
    unselectOption: W,
    isOptionActiveDescendant: V,
    formControlProps: o,
    assignTriggerRef: X,
    assignContentRef: Se,
    assignListboxRef: Pe,
    registerOption: qe,
    scrollToOption: ze,
    onContentClickOutside: N,
    onTriggerBlur: T,
    onTriggerClick: E,
    onTriggerKeyDown: U,
    onOptionClick: te,
    onOptionMouseMove: xe,
    onOptionMouseDown: $e,
    onListboxMouseLeave: P
  };
  return i(Ha.Provider, {
    value: je,
    get children() {
      return e.children;
    }
  });
}
const Ha = ae();
function Re() {
  const e = re(Ha);
  if (!e)
    throw new Error("[Hope UI]: useSelectContext must be used within a `<Select />` component");
  return e;
}
const Aa = "hope-select__content";
function Ea(e) {
  let t = de();
  const r = _().Select, o = Re(), [a, n] = v(e, ["ref", "class", "children"]), [s, l] = oe(!1);
  ve(ft(() => o.state.opened, () => {
    o.state.opened ? l(!0) : o.state.motionPreset === "none" && l(!1);
  }));
  const c = () => l(!1), d = () => m(a.class, Aa, Al()), g = lt(() => a.children), f = (C) => {
    !C || (o.assignContentRef(C), Ae(a.ref) ? a.ref(C) : a.ref = C);
  };
  ve(() => {
    !s() || f(document.querySelector(`[unique-id="${t}"]`));
  });
  const u = (C) => {
    o.onContentClickOutside(C.target);
  }, p = () => {
    switch (o.state.motionPreset) {
      case "fade-in-top":
        return ot.fadeInTop;
      case "none":
        return "hope-none";
    }
  };
  return i(O, {
    get when() {
      return s();
    },
    get children() {
      return i(it, {
        get children() {
          return i(Oe, {
            get name() {
              return p();
            },
            appear: !0,
            onAfterExit: c,
            get children() {
              return i(O, {
                get when() {
                  return o.state.opened;
                },
                get children() {
                  return i(ta, {
                    onClickOutside: u,
                    get children() {
                      return i(A, b({
                        get class() {
                          return d();
                        },
                        get __baseStyle() {
                          var C;
                          return (C = r == null ? void 0 : r.baseStyle) == null ? void 0 : C.content;
                        },
                        "unique-id": t
                      }, n, {
                        get children() {
                          return g();
                        }
                      }));
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
}
Ea.toString = () => $(Aa);
var rf = ["<path", ' d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>'];
const of = ke({
  viewBox: "0 0 15 15",
  path: () => le(rf, ce())
}), Ma = "hope-select__icon";
function Oa(e) {
  const t = _().Select, r = Re(), [o, a] = v(e, ["class", "rotateOnOpen"]), n = () => m(o.class, Ma, Hl(o.rotateOnOpen ? {
    opened: r.state.opened
  } : void 0));
  return i(of, b({
    "aria-hidden": !0,
    get class() {
      return n();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.icon;
    }
  }, a));
}
Oa.toString = () => $(Ma);
const Ra = ae(), Wa = "hope-select__optgroup";
function nf(e) {
  const t = _().Select, [r, o] = oe(), [a, n] = v(e, ["class", "children"]), s = () => m(a.class, Wa, Ml()), l = {
    setAriaLabelledBy: o
  };
  return i(Ra.Provider, {
    value: l,
    get children() {
      return i(A, b({
        role: "group",
        get ["aria-labelledby"]() {
          return r();
        },
        get class() {
          return s();
        },
        get __baseStyle() {
          var c;
          return (c = t == null ? void 0 : t.baseStyle) == null ? void 0 : c.optgroup;
        }
      }, n, {
        get children() {
          return a.children;
        }
      }));
    }
  });
}
nf.toString = () => $(Wa);
function af() {
  return re(Ra);
}
const Fa = "hope-select__label";
function sf(e) {
  const t = de(), r = _().Select, o = Re(), a = af(), [n, s] = v(e, ["class", "id"]), l = () => {
    var d;
    return (d = n.id) != null ? d : `${o.state.labelIdPrefix}-${t}`;
  }, c = () => m(n.class, Fa, Ol());
  return ue(() => {
    a == null || a.setAriaLabelledBy(l());
  }), i(A, b({
    get id() {
      return l();
    },
    get class() {
      return c();
    },
    get __baseStyle() {
      var d;
      return (d = r == null ? void 0 : r.baseStyle) == null ? void 0 : d.label;
    }
  }, s));
}
sf.toString = () => $(Fa);
const Na = "hope-select__listbox";
function Va(e) {
  const t = _().Select, r = Re(), [o, a] = v(e, ["ref", "class"]), n = () => m(o.class, Na, El());
  return i(A, b({
    role: "listbox",
    tabindex: "-1",
    get id() {
      return r.state.listboxId;
    },
    get class() {
      return n();
    },
    get __baseStyle() {
      var l;
      return (l = t == null ? void 0 : t.baseStyle) == null ? void 0 : l.listbox;
    },
    get onMouseLeave() {
      return r.onListboxMouseLeave;
    },
    onMouseDown: (l) => {
      l.preventDefault();
    }
  }, a));
}
Va.toString = () => $(Na);
const qa = ae(), ja = "hope-select__option";
function Ka(e) {
  const t = _().Select, r = Re(), [o, a] = oe(-1);
  let n;
  const [s, l] = v(e, ["ref", "class", "value", "textValue", "disabled"]), c = () => {
    var h, y;
    return {
      value: s.value,
      textValue: (y = (h = s.textValue) != null ? h : n == null ? void 0 : n.textContent) != null ? y : String(s.value),
      disabled: !!s.disabled
    };
  }, d = () => `${r.state.optionIdPrefix}-${o()}`, g = () => r.isOptionSelected(c()), f = () => r.isOptionActiveDescendant(o()), u = () => m(s.class, ja, Rl()), p = (h) => {
    h.stopPropagation(), r.onOptionClick(o());
  }, C = (h) => {
    if (s.disabled && r.onOptionMouseMove(-1), f() || s.disabled) {
      h.preventDefault(), h.stopPropagation();
      return;
    }
    r.onOptionMouseMove(o());
  }, z = {
    selected: g
  };
  return ue(() => {
    a(r.registerOption(c()));
  }), ve(() => {
    f() && n && r.scrollToOption(n);
  }), i(qa.Provider, {
    value: z,
    get children() {
      return i(A, b({
        role: "option",
        get id() {
          return d();
        },
        get ["aria-selected"]() {
          return g();
        },
        get ["data-active"]() {
          return f() ? "" : void 0;
        },
        get ["data-disabled"]() {
          return s.disabled ? "" : void 0;
        },
        "data-group": !0,
        get class() {
          return u();
        },
        get __baseStyle() {
          var h;
          return (h = t == null ? void 0 : t.baseStyle) == null ? void 0 : h.option;
        },
        onClick: p,
        onMouseMove: C,
        get onMouseDown() {
          return r.onOptionMouseDown;
        }
      }, l));
    }
  });
}
Ka.toString = () => $(ja);
function lf() {
  const e = re(qa);
  if (!e)
    throw new Error("[Hope UI]: useSelectOptionContext must be used within a `<Select.Option />` component");
  return e;
}
var cf = ["<g", ' fill="none"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></g>'];
const df = ke({
  viewBox: "0 0 15 15",
  path: () => le(cf, ce())
}), Ua = "hope-select__option-indicator";
function Xa(e) {
  const t = _().Select, r = lf(), [o, a] = v(e, ["class", "children"]), n = () => m(o.class, Ua, Fl());
  return i(O, {
    get when() {
      return r.selected();
    },
    get children() {
      return i(R.span, b({
        get class() {
          return n();
        },
        get __baseStyle() {
          var s;
          return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.optionIndicator;
        }
      }, a, {
        get children() {
          return i(O, {
            get when() {
              return o.children;
            },
            get fallback() {
              return i(df, {
                "aria-hidden": "true",
                boxSize: "$5"
              });
            },
            get children() {
              return o.children;
            }
          });
        }
      }));
    }
  });
}
Xa.toString = () => $(Ua);
const Qa = "hope-select__option-text";
function Ya(e) {
  const t = _().Select, [r, o] = v(e, ["class"]), a = () => m(r.class, Qa, Wl());
  return i(R.span, b({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.optionText;
    }
  }, o));
}
Ya.toString = () => $(Qa);
const Za = "hope-select__placeholder";
function Ja(e) {
  const t = _().Select, r = Re(), [o, a] = v(e, ["class"]), n = () => m(o.class, Za, Dl());
  return i(O, {
    get when() {
      return !r.state.hasSelectedOptions;
    },
    get children() {
      return i(R.span, b({
        get class() {
          return n();
        },
        get __baseStyle() {
          var s;
          return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.placeholder;
        }
      }, a));
    }
  });
}
Ja.toString = () => $(Za);
const Ga = "hope-select__tag";
function es(e) {
  const t = _().Select, r = Re(), [o, a] = v(e, ["class", "size", "variant"]), n = () => {
    var s, l, c;
    return m(o.class, Ga, Bl({
      size: (l = (s = o.size) != null ? s : r.state.size) != null ? l : "md",
      variant: ((c = o.variant) != null ? c : r.state.variant === "filled") ? "outline" : "subtle"
    }));
  };
  return i(R.span, b({
    get class() {
      return n();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.tag;
    }
  }, a));
}
es.toString = () => $(Ga);
var uf = ["<g", ' fill="none"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></g>'];
const ts = ke({
  viewBox: "0 0 15 15",
  path: () => le(uf, ce())
}), rs = "hope-select__tag-close-button";
function os(e) {
  const t = _().Select, [r, o] = v(e, ["class", "children"]), a = () => m(r.class, rs, Ll());
  return i(R.button, b({
    role: "button",
    type: "button",
    "aria-label": "Delete",
    tabIndex: "-1",
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.tagCloseButton;
    }
  }, o, {
    get children() {
      return i(O, {
        get when() {
          return r.children;
        },
        get fallback() {
          return i(ts, {});
        },
        get children() {
          return r.children;
        }
      });
    }
  }));
}
os.toString = () => $(rs);
const ns = "hope-select__trigger";
function as(e) {
  let t = de();
  const r = _().Select, o = Re(), [a, n] = v(e, ["ref", "class", "onClick", "onKeyDown", "onFocus", "onBlur"]), s = () => m(a.class, ns, Tl({
    variant: o.state.variant,
    size: o.state.size
  })), l = (u) => {
    !u || (o.assignTriggerRef(u), Ae(a.ref) ? a.ref(u) : a.ref = u);
  };
  ue(() => {
    l(document.querySelector(`[unique-id="${t}"]`));
  });
  const c = (u) => {
    me(o.onTriggerClick, a.onClick)(u);
  }, d = (u) => {
    me(o.onTriggerKeyDown, a.onKeyDown)(u);
  }, g = (u) => {
    me(o.formControlProps.onFocus, a.onFocus)(u);
  }, f = (u) => {
    me(o.onTriggerBlur, o.formControlProps.onBlur, a.onBlur)(u);
  };
  return i(R.button, b({
    get id() {
      return o.state.triggerId;
    },
    "unique-id": t,
    get disabled() {
      return o.state.disabled;
    },
    role: "combobox",
    type: "button",
    tabindex: "0",
    "aria-haspopup": "listbox",
    get ["aria-activedescendant"]() {
      return o.state.activeDescendantId;
    },
    get ["aria-controls"]() {
      return o.state.listboxId;
    },
    get ["aria-expanded"]() {
      return o.state.opened;
    },
    get ["aria-required"]() {
      return o.formControlProps["aria-required"];
    },
    get ["aria-invalid"]() {
      return o.formControlProps["aria-invalid"];
    },
    get ["aria-readonly"]() {
      return o.formControlProps["aria-readonly"];
    },
    get ["aria-describedby"]() {
      return o.formControlProps["aria-describedby"];
    },
    get class() {
      return s();
    },
    get __baseStyle() {
      var u;
      return (u = r == null ? void 0 : r.baseStyle) == null ? void 0 : u.trigger;
    },
    onClick: c,
    onKeyDown: d,
    onFocus: g,
    onBlur: f
  }, n));
}
as.toString = () => $(ns);
var gf = ["<span", ">", "</span>"];
const ir = "hope-select__value";
function ss(e) {
  const t = _().Select, r = Re(), [o, a] = v(e, ["class", "children"]), n = () => m(o.class, ir, Yr()), s = () => m(o.class, ir, zl({
    size: r.state.size
  })), l = (d, g) => {
    d.preventDefault(), d.stopPropagation(), r.unselectOption(g);
  }, c = lt(() => {
    var d;
    return kt(o) ? (d = o.children) == null ? void 0 : d.call(o, {
      selectedOptions: r.state.selectedOptions
    }) : o.children;
  });
  return i(O, {
    get when() {
      return r.state.hasSelectedOptions;
    },
    get children() {
      return i(O, {
        get when() {
          return !c();
        },
        get fallback() {
          return c();
        },
        get children() {
          return i(O, {
            get when() {
              return r.state.multiple;
            },
            get fallback() {
              return i(A, b({
                get class() {
                  return n();
                },
                get __baseStyle() {
                  var d;
                  return (d = t == null ? void 0 : t.baseStyle) == null ? void 0 : d.singleValue;
                }
              }, a, {
                get children() {
                  return r.state.selectedOptions[0].textValue;
                }
              }));
            },
            get children() {
              return i(A, b({
                get class() {
                  return s();
                },
                get __baseStyle() {
                  var d;
                  return (d = t == null ? void 0 : t.baseStyle) == null ? void 0 : d.multiValue;
                }
              }, a, {
                get children() {
                  return i(Er, {
                    get each() {
                      return r.state.selectedOptions;
                    },
                    children: (d) => i(es, {
                      get children() {
                        return [le(gf, ce(), Q(d.textValue)), i(os, {
                          onClick: (g) => l(g, d)
                        })];
                      }
                    })
                  });
                }
              }));
            }
          });
        }
      });
    }
  });
}
ss.toString = () => $(ir);
function qp(e) {
  const [t, r] = v(e, ["children", "value"]);
  return i(Ka, b({
    get value() {
      return t.value;
    }
  }, r, {
    get children() {
      return [i(Ya, {
        get children() {
          return t.children;
        }
      }), i(Xa, {})];
    }
  }));
}
function jp(e) {
  const [t, r, o] = v(e, ["children", "placeholder"], ["variant", "size", "offset", "id", "multiple", "value", "defaultValue", "required", "disabled", "invalid", "readOnly", "onChange", "onFocus", "onBlur"]);
  return i(tf, b(r, {
    get children() {
      return [i(as, b(o, {
        get children() {
          return [i(O, {
            get when() {
              return t.placeholder;
            },
            get children() {
              return i(Ja, {
                get children() {
                  return t.placeholder;
                }
              });
            }
          }), i(ss, {}), i(Oa, {})];
        }
      })), i(Ea, {
        get children() {
          return i(Va, {
            get children() {
              return t.children;
            }
          });
        }
      })];
    }
  }));
}
const ff = bt({
  from: {
    borderColor: "$$startColor",
    background: "$$startColor"
  },
  to: {
    borderColor: "$$endColor",
    background: "$$endColor"
  }
}), pf = S({
  $$startColor: "$colors$neutral2",
  $$endColor: "$colors$neutral8",
  opacity: "0.7",
  borderRadius: "2px",
  borderColor: "$$startColor",
  boxShadow: "$none",
  background: "$$endColor",
  backgroundClip: "padding-box",
  color: "transparent",
  cursor: "default",
  pointerEvents: "none",
  userSelect: "none",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
  animationDirection: "alternate",
  animationName: `${ff()}`,
  "&::before, &::after, *": {
    visibility: "hidden"
  }
}), Qt = "hope-skeleton";
function Ot(e) {
  const [t, r] = oe("none"), a = Z({
    speed: "800ms",
    fadeDuration: "400ms"
  }, e), [n, s] = v(a, ["class", "startColor", "endColor", "loaded", "speed", "fadeDuration"]), l = () => {
    var c, d;
    return m(n.class, Qt, n.loaded ? void 0 : pf({
      css: {
        $$startColor: Ir((c = n.startColor) != null ? c : "$neutral2"),
        $$endColor: Ir((d = n.endColor) != null ? d : "$neutral8"),
        animationDuration: n.speed
      }
    }));
  };
  return ve(ft(() => n.loaded, (c, d) => r(d === !0 ? "none" : `${cl()} ${n.fadeDuration}`), {
    defer: !0
  })), i(O, {
    get when() {
      return n.loaded;
    },
    get fallback() {
      return i(A, b({
        get class() {
          return l();
        }
      }, s));
    },
    get children() {
      return i(A, b({
        get class() {
          return l();
        },
        get animation() {
          return t();
        }
      }, s));
    }
  });
}
Ot.toString = () => $(Qt);
function hf(e) {
  return i(Ot, b({
    borderRadius: "$full",
    get boxSize() {
      var t;
      return (t = e.size) != null ? t : "2rem";
    }
  }, e));
}
hf.toString = () => $(Qt);
function bf(e) {
  const r = Z({
    noOfLines: 3,
    spacing: "0.5rem",
    skeletonHeight: "0.5rem"
  }, e), [o, a, n] = v(r, ["class", "children", "noOfLines", "spacing", "skeletonHeight"], ["startColor", "endColor", "loaded", "speed", "fadeDuration", "borderRadius", "rounded"]), s = () => {
    var g;
    return (g = o.noOfLines) != null ? g : 3;
  }, l = we(() => qs(s())), c = (g) => s() > 1 && g === l().length - 1 ? "80%" : "100%", d = () => m(o.class, "hope-skeleton__group");
  return i(O, {
    get when() {
      return a.loaded;
    },
    get fallback() {
      return i(A, b({
        get class() {
          return d();
        },
        d: "flex",
        flexDirection: "column",
        get gap() {
          return o.spacing;
        }
      }, n, {
        get children() {
          return i(As, {
            get each() {
              return l();
            },
            children: (g, f) => i(Ot, b({
              get width() {
                return c(f);
              },
              get height() {
                return o.skeletonHeight;
              }
            }, a))
          });
        }
      }));
    },
    get children() {
      return i(Ot, b({
        get class() {
          return o.class;
        }
      }, a, n, {
        get children() {
          return o.children;
        }
      }));
    }
  });
}
bf.toString = () => $(Qt);
const mf = S({
  flex: 1,
  justifySelf: "stretch",
  alignSelf: "stretch"
}), is = "hope-spacer";
function vf(e) {
  const [t, r] = v(e, ["class"]), o = () => m(t.class, is, mf());
  return i(A, b({
    get class() {
      return o();
    }
  }, r));
}
vf.toString = () => $(is);
const Sf = S({
  display: "inline-block",
  borderColor: "currentColor",
  borderStyle: "solid",
  borderRadius: "$full",
  borderWidth: "2px",
  borderBottomColor: "transparent",
  borderLeftColor: "transparent",
  animationName: `${Nt}`,
  animationDuration: "0.45s",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
  variants: {
    size: {
      xs: {
        boxSize: "0.75rem"
      },
      sm: {
        boxSize: "1rem"
      },
      md: {
        boxSize: "1.5rem"
      },
      lg: {
        boxSize: "2rem"
      },
      xl: {
        boxSize: "3rem"
      }
    }
  }
});
var xf = ["<span", ">", "</span>"];
const ls = "hope-spinner";
function Cf(e) {
  var l, c, d, g, f, u, p, C;
  const t = _().Spinner, r = {
    label: (c = (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.label) != null ? c : "Loading...",
    size: (g = (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.size) != null ? g : "md",
    emptyColor: (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.emptyColor,
    color: (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.color,
    thickness: (p = t == null ? void 0 : t.defaultProps) == null ? void 0 : p.thickness,
    speed: (C = t == null ? void 0 : t.defaultProps) == null ? void 0 : C.speed
  }, o = Z(r, e), [a, n] = v(o, ["class", "children", "label", "size", "emptyColor", "color", "thickness", "speed"]), s = () => m(a.class, ls, Sf({
    size: a.size,
    css: {
      color: a.color,
      borderWidth: a.thickness,
      borderBottomColor: a.emptyColor,
      borderLeftColor: a.emptyColor,
      animationDuration: a.speed
    }
  }));
  return i(A, b({
    get class() {
      return s();
    }
  }, n, {
    get children() {
      return i(O, {
        get when() {
          return a.label;
        },
        get children() {
          return le(xf, ce() + j("class", Q(Vt(), !0), !1), Q(a.label));
        }
      });
    }
  }));
}
Cf.toString = () => $(ls);
const $f = S(hr, {
  variants: {
    labelPlacement: {
      start: {
        flexDirection: "row"
      },
      end: {
        flexDirection: "row-reverse"
      }
    }
  }
}), yf = S(br), wf = S(mr, {
  borderRadius: "$full",
  transition: "background-color 250ms, border-color 250ms, box-shadow 250ms",
  "&::before": {
    content: "''",
    position: "absolute",
    top: "2px",
    left: "2px",
    zIndex: "1",
    borderRadius: "$full",
    boxShadow: "$sm",
    transition: "250ms"
  },
  variants: {
    variant: {
      outline: {
        "&::before": {
          backgroundColor: "$neutral7"
        },
        "&[data-checked]::before": {
          backgroundColor: "$loContrast"
        }
      },
      filled: {
        "&::before": {
          backgroundColor: "$loContrast"
        }
      }
    },
    size: {
      sm: {
        height: "16px",
        width: "26px",
        "&::before": {
          boxSize: "10px"
        },
        "&[data-checked]::before": {
          transform: "translateX(10px)"
        }
      },
      md: {
        columnGap: "2px",
        height: "20px",
        width: "34px",
        "&::before": {
          boxSize: "14px"
        },
        "&[data-checked]::before": {
          transform: "translateX(14px)"
        }
      },
      lg: {
        columnGap: "4px",
        height: "28px",
        width: "50px",
        "&::before": {
          boxSize: "22px"
        },
        "&[data-checked]::before": {
          transform: "translateX(22px)"
        }
      }
    }
  }
});
var _f = ["<input", ' type="checkbox" role="switch"', "", "", "", ">"];
function If(e) {
  const t = `hope-switch-${de()}`, r = vt(e), [o, a] = ie({
    _checked: !!e.defaultChecked,
    isFocused: !1,
    get isControlled() {
      return e.checked !== void 0;
    },
    get checked() {
      return this.isControlled ? !!e.checked : this._checked;
    },
    get id() {
      var f;
      return (f = r.id) != null ? f : t;
    },
    get name() {
      return e.name;
    },
    get value() {
      return e.value;
    },
    get required() {
      return r.required;
    },
    get disabled() {
      return r.disabled;
    },
    get invalid() {
      return r.invalid;
    },
    get readOnly() {
      return r.readOnly;
    },
    get ["aria-required"]() {
      return this.required ? !0 : void 0;
    },
    get ["aria-disabled"]() {
      return this.disabled ? !0 : void 0;
    },
    get ["aria-invalid"]() {
      return this.invalid ? !0 : void 0;
    },
    get ["aria-readonly"]() {
      return this.readOnly ? !0 : void 0;
    },
    get ["data-focus"]() {
      return this.isFocused ? "" : void 0;
    },
    get ["data-checked"]() {
      return this.checked ? "" : void 0;
    },
    get ["data-required"]() {
      return this.required ? "" : void 0;
    },
    get ["data-disabled"]() {
      return this.disabled ? "" : void 0;
    },
    get ["data-invalid"]() {
      return this.invalid ? "" : void 0;
    },
    get ["data-readonly"]() {
      return this.readOnly ? "" : void 0;
    }
  }), [n, s, l] = v(e, ["inputClass", "children", "ref", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "onChange"], ["id", "name", "value", "checked", "defaultChecked", "required", "disabled", "invalid", "readOnly", "onFocus", "onBlur"]), c = () => m(n.inputClass, Vt()), d = () => o, g = {
    state: o
  };
  return i(cs.Provider, {
    value: g,
    get children() {
      return i(R.label, b({
        get for() {
          return o.id;
        },
        "data-group": !0,
        get ["data-focus"]() {
          return o["data-focus"];
        },
        get ["data-checked"]() {
          return o["data-checked"];
        },
        get ["data-required"]() {
          return o["data-required"];
        },
        get ["data-disabled"]() {
          return o["data-disabled"];
        },
        get ["data-invalid"]() {
          return o["data-invalid"];
        },
        get ["data-readonly"]() {
          return o["data-readonly"];
        }
      }, l, {
        get children() {
          return [le(_f, ce(), j("class", Q(c(), !0), !1) + j("tabindex", Q(n.tabIndex, !0), !1) + j("value", Q(o.value, !0), !1) + j("id", Q(o.id, !0), !1) + j("name", Q(o.name, !0), !1), j("checked", o.checked, !0), j("required", o.required, !0), j("disabled", o.disabled, !0) + j("readonly", Q(o.readOnly, !0), !1) + j("aria-required", Q(o["aria-required"], !0), !1) + j("aria-disabled", Q(o["aria-disabled"], !0), !1) + j("aria-invalid", Q(o["aria-invalid"], !0), !1) + j("aria-readonly", Q(o["aria-readonly"], !0), !1) + j("aria-label", Q(n["aria-label"], !0), !1) + j("aria-labelledby", Q(n["aria-labelledby"], !0), !1) + j("aria-describedby", Q(n["aria-describedby"], !0), !1)), i(O, {
            get when() {
              return Ae(n.children);
            },
            get fallback() {
              return n.children;
            },
            get children() {
              var f;
              return (f = n.children) == null ? void 0 : f.call(n, {
                state: d
              });
            }
          })];
        }
      }));
    }
  });
}
const cs = ae();
function kf() {
  const e = re(cs);
  if (!e)
    throw new Error("[Hope UI]: useSwitchPrimitivehContext must be used within a `<SwitchPrimitive />` component");
  return e;
}
const ds = "hope-switch", Pf = "hope-checkbox__input", Tf = "hope-switch__control", zf = "hope-switch__label";
function Bf(e) {
  var d, g, f, u, p, C, z, h, y, w, x, k;
  const t = _().Switch, r = {
    variant: (f = (g = (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.root) == null ? void 0 : g.variant) != null ? f : "filled",
    colorScheme: (C = (p = (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.root) == null ? void 0 : p.colorScheme) != null ? C : "primary",
    size: (y = (h = (z = t == null ? void 0 : t.defaultProps) == null ? void 0 : z.root) == null ? void 0 : h.size) != null ? y : "md",
    labelPlacement: (k = (x = (w = t == null ? void 0 : t.defaultProps) == null ? void 0 : w.root) == null ? void 0 : x.labelPlacement) != null ? k : "start"
  }, o = Z(r, e), [a, n] = v(o, ["children", "class", "variant", "colorScheme", "size", "labelPlacement"]), s = () => m(a.class, ds, $f({
    size: a.size,
    labelPlacement: a.labelPlacement
  })), l = () => m(Tf, wf({
    variant: a.variant,
    colorScheme: a.colorScheme,
    size: a.size
  })), c = () => m(zf, yf());
  return i(If, b({
    get class() {
      return s();
    },
    inputClass: Pf,
    get __baseStyle() {
      var L;
      return (L = t == null ? void 0 : t.baseStyle) == null ? void 0 : L.root;
    }
  }, n, {
    children: ({
      state: L
    }) => [i(R.span, {
      get class() {
        return c();
      },
      get __baseStyle() {
        var H;
        return (H = t == null ? void 0 : t.baseStyle) == null ? void 0 : H.label;
      },
      get ["data-focus"]() {
        return L()["data-focus"];
      },
      get ["data-checked"]() {
        return L()["data-checked"];
      },
      get ["data-required"]() {
        return L()["data-required"];
      },
      get ["data-disabled"]() {
        return L()["data-disabled"];
      },
      get ["data-invalid"]() {
        return L()["data-invalid"];
      },
      get ["data-readonly"]() {
        return L()["data-readonly"];
      },
      get children() {
        return a.children;
      }
    }), i(R.span, {
      "aria-hidden": !0,
      get class() {
        return l();
      },
      get __baseStyle() {
        var H;
        return (H = t == null ? void 0 : t.baseStyle) == null ? void 0 : H.control;
      },
      get ["data-focus"]() {
        return L()["data-focus"];
      },
      get ["data-checked"]() {
        return L()["data-checked"];
      },
      get ["data-required"]() {
        return L()["data-required"];
      },
      get ["data-disabled"]() {
        return L()["data-disabled"];
      },
      get ["data-invalid"]() {
        return L()["data-invalid"];
      },
      get ["data-readonly"]() {
        return L()["data-readonly"];
      }
    })]
  }));
}
Bf.toString = () => $(ds);
function Kp(e) {
  const t = kf();
  return i(R.span, b({
    "aria-hidden": !0,
    get ["data-focus"]() {
      return t.state["data-focus"];
    },
    get ["data-checked"]() {
      return t.state["data-checked"];
    },
    get ["data-required"]() {
      return t.state["data-required"];
    },
    get ["data-disabled"]() {
      return t.state["data-disabled"];
    },
    get ["data-invalid"]() {
      return t.state["data-invalid"];
    },
    get ["data-readonly"]() {
      return t.state["data-readonly"];
    }
  }, e));
}
const Lf = S({
  width: "100%",
  borderCollapse: "collapse",
  fontVariantNumeric: "lining-nums tabular-nums"
}), Df = S({
  px: "$6",
  py: "$4",
  color: "$neutral11",
  fontSize: "$sm",
  fontWeight: "$medium",
  lineHeight: "$5",
  textAlign: "center",
  variants: {
    dense: {
      true: {
        px: "$4",
        py: "$3",
        fontSize: "$xs",
        lineHeight: "$4"
      }
    },
    placement: {
      top: {
        captionSide: "top"
      },
      bottom: {
        captionSide: "bottom"
      }
    }
  }
});
function Hr(e) {
  return {
    "& td": {
      borderBottomWidth: 0
    },
    "& tr:last-of-type td": {
      borderBottomWidth: "1px"
    },
    [`& tr:nth-of-type(${e}) td`]: {
      backgroundColor: "$neutral3"
    }
  };
}
const Hf = S({
  variants: {
    striped: {
      odd: Hr("odd"),
      even: Hr("even")
    },
    highlightOnHover: {
      true: {
        "& tr:hover td": {
          backgroundColor: "$neutral4"
        }
      }
    }
  },
  compoundVariants: [
    {
      striped: "odd",
      highlightOnHover: !0,
      css: {
        "& tr:nth-of-type(odd):hover td": {
          backgroundColor: "$neutral4"
        }
      }
    },
    {
      striped: "even",
      highlightOnHover: !0,
      css: {
        "& tr:nth-of-type(even):hover td": {
          backgroundColor: "$neutral4"
        }
      }
    }
  ]
}), Af = S({
  "& tr:last-of-type th": {
    borderBottomWidth: 0
  }
}), Ef = S({
  borderBottom: "1px solid $colors$neutral6",
  px: "$6",
  py: "$3",
  fontSize: "$xs",
  fontWeight: "$semibold",
  lineHeight: "$4",
  letterSpacing: "$wider",
  textAlign: "start",
  textTransform: "uppercase",
  variants: {
    dense: {
      true: {
        px: "$4",
        py: "$1_5"
      }
    },
    numeric: {
      true: {
        textAlign: "end"
      }
    }
  }
}), Mf = S({
  borderBottom: "1px solid $colors$neutral6",
  px: "$6",
  py: "$4",
  fontSize: "$base",
  lineHeight: "$6",
  textAlign: "start",
  transition: "background-color 250ms",
  variants: {
    dense: {
      true: {
        px: "$4",
        py: "$2",
        fontSize: "$sm",
        lineHeight: "$5"
      }
    },
    numeric: {
      true: {
        textAlign: "end"
      }
    }
  }
}), us = ae(), gs = "hope-table";
function Of(e) {
  const t = _().Table, [r] = ie({
    get striped() {
      var s, l, c;
      return (c = e.striped) != null ? c : (l = (s = t == null ? void 0 : t.defaultProps) == null ? void 0 : s.root) == null ? void 0 : l.striped;
    },
    get dense() {
      var s, l, c, d;
      return (d = (c = e.dense) != null ? c : (l = (s = t == null ? void 0 : t.defaultProps) == null ? void 0 : s.root) == null ? void 0 : l.dense) != null ? d : !1;
    },
    get highlightOnHover() {
      var s, l, c, d;
      return (d = (c = e.highlightOnHover) != null ? c : (l = (s = t == null ? void 0 : t.defaultProps) == null ? void 0 : s.root) == null ? void 0 : l.highlightOnHover) != null ? d : !1;
    }
  }), [o, a] = v(e, ["class", "striped", "dense", "highlightOnHover"]), n = () => m(o.class, gs, Lf(r));
  return i(us.Provider, {
    value: r,
    get children() {
      return i(A, b({
        as: "table",
        role: "table",
        get class() {
          return n();
        },
        get __baseStyle() {
          var s;
          return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.root;
        }
      }, a));
    }
  });
}
Of.toString = () => $(gs);
function Yt() {
  const e = re(us);
  if (!e)
    throw new Error("[Hope UI]: useTableContext must be used within a `<Table/>` component");
  return e;
}
const fs = "hope-table-caption";
function Rf(e) {
  var c, d, g;
  const t = _().Table, r = Yt(), o = {
    placement: (g = (d = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.caption) == null ? void 0 : d.placement) != null ? g : "bottom"
  }, a = Z(o, e), [n, s] = v(a, ["class", "placement"]), l = () => m(n.class, fs, Df({
    dense: r.dense,
    placement: n.placement
  }));
  return i(R.caption, b({
    get class() {
      return l();
    },
    get __baseStyle() {
      var f;
      return (f = t == null ? void 0 : t.baseStyle) == null ? void 0 : f.caption;
    }
  }, s));
}
Rf.toString = () => $(fs);
const ps = "hope-tbody";
function Wf(e) {
  const t = _().Table, r = Yt(), [o, a] = v(e, ["class"]), n = () => m(o.class, ps, Hf({
    striped: r.striped,
    highlightOnHover: r.highlightOnHover
  }));
  return i(A, b({
    as: "tbody",
    role: "rowgroup",
    get class() {
      return n();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.tbody;
    }
  }, a));
}
Wf.toString = () => $(ps);
const hs = "hope-td";
function Ff(e) {
  const t = _().Table, r = Yt(), [o, a] = v(e, ["class", "numeric"]), n = () => m(o.class, hs, Mf({
    dense: r.dense,
    numeric: o.numeric
  }));
  return i(A, b({
    as: "td",
    role: "cell",
    get class() {
      return n();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.td;
    }
  }, a));
}
Ff.toString = () => $(hs);
const bs = "hope-tfoot";
function Nf(e) {
  const t = _().Table, [r, o] = v(e, ["class"]), a = () => m(r.class, bs, Af());
  return i(A, b({
    as: "tfoot",
    role: "rowgroup",
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.tfoot;
    }
  }, o));
}
Nf.toString = () => $(bs);
const ms = "hope-th";
function Vf(e) {
  const t = _().Table, r = Yt(), [o, a] = v(e, ["class", "numeric"]), n = () => m(o.class, ms, Ef({
    dense: r.dense,
    numeric: o.numeric
  }));
  return i(A, b({
    as: "th",
    role: "columnheader",
    get class() {
      return n();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.th;
    }
  }, a));
}
Vf.toString = () => $(ms);
const vs = "hope-thead";
function qf(e) {
  const t = _().Table, [r, o] = v(e, ["class"]), a = () => m(r.class, vs);
  return i(A, b({
    as: "thead",
    role: "rowgroup",
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.thead;
    }
  }, o));
}
qf.toString = () => $(vs);
const Ss = "hope-tr";
function jf(e) {
  const t = _().Table, [r, o] = v(e, ["class"]), a = () => m(r.class, Ss);
  return i(A, b({
    as: "tr",
    role: "row",
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.tr;
    }
  }, o));
}
jf.toString = () => $(Ss);
const Kf = S({
  variants: {
    orientation: {
      horizontal: {
        display: "block"
      },
      vertical: {
        display: "flex"
      }
    }
  }
}), Uf = S({
  display: "flex",
  color: "$neutral11",
  fontWeight: "$normal",
  variants: {
    variant: {
      underline: {
        borderWidth: 0,
        borderStyle: "solid",
        borderColor: "$neutral7"
      },
      outline: {
        borderStyle: "solid",
        borderColor: "$neutral7"
      },
      cards: {
        borderStyle: "solid",
        borderColor: "$neutral7"
      },
      pills: {
        gap: "$1_5"
      }
    },
    alignment: {
      start: {
        justifyContent: "flex-start"
      },
      end: {
        justifyContent: "flex-end"
      },
      center: {
        justifyContent: "center"
      },
      apart: {
        justifyContent: "space-between"
      }
    },
    orientation: {
      horizontal: {
        flexDirection: "row"
      },
      vertical: {
        flexDirection: "column"
      }
    }
  },
  compoundVariants: [
    {
      variant: "underline",
      orientation: "horizontal",
      css: {
        borderBottomWidth: "1px"
      }
    },
    {
      variant: "underline",
      orientation: "vertical",
      css: {
        borderInlineEndWidth: "1px"
      }
    },
    {
      variant: "outline",
      orientation: "horizontal",
      css: {
        mb: "-1px",
        borderBottomWidth: "1px"
      }
    },
    {
      variant: "outline",
      orientation: "vertical",
      css: {
        marginInlineEnd: "-1px",
        borderInlineEndWidth: "1px"
      }
    },
    {
      variant: "cards",
      orientation: "horizontal",
      css: {
        mb: "-1px",
        borderBottomWidth: "1px"
      }
    },
    {
      variant: "cards",
      orientation: "vertical",
      css: {
        marginInlineEnd: "-1px",
        borderInlineEndWidth: "1px"
      }
    }
  ]
});
function ge(e) {
  return {
    "&[aria-selected='true']": {
      color: e
    }
  };
}
function Je(e) {
  return {
    "&[aria-selected='true']": {
      color: e.color,
      backgroundColor: e.bgColor
    },
    "&[aria-selected='true']:hover": {
      backgroundColor: e.bgColorHover
    }
  };
}
const Xf = S({
  appearance: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  border: "$none",
  backgroundColor: "transparent",
  px: "$4",
  color: "inherit",
  fontWeight: "inherit",
  cursor: "pointer",
  transitionProperty: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  transitionDuration: "250ms",
  "&:focus": {
    zIndex: 1,
    outline: "none",
    boxShadow: "$outline"
  },
  "&:disabled": {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      underline: {
        borderWidth: 0,
        borderStyle: "solid",
        borderColor: "transparent",
        "&[aria-selected='true']": {
          borderColor: "currentColor"
        },
        "&:active": {
          backgroundColor: "$neutral4"
        }
      },
      outline: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "transparent",
        "&[aria-selected='true']": {
          borderColor: "inherit"
        }
      },
      cards: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "inherit",
        backgroundColor: "$neutral3",
        "&[aria-selected='true']": {
          borderColor: "inherit",
          backgroundColor: "$loContrast"
        }
      },
      pills: {
        borderRadius: "$sm",
        "&:hover": {
          backgroundColor: "$neutral3"
        },
        "&:hover:disabled": {
          backgroundColor: "transparent"
        }
      }
    },
    colorScheme: {
      primary: {},
      accent: {},
      neutral: {},
      success: {},
      info: {},
      warning: {},
      danger: {}
    },
    size: {
      sm: {
        py: "$1",
        fontSize: "$sm"
      },
      md: {
        py: "$2",
        fontSize: "$base"
      },
      lg: {
        py: "$3",
        fontSize: "$lg"
      }
    },
    orientation: {
      horizontal: {},
      vertical: {}
    },
    fitted: {
      true: {
        flex: 1
      }
    }
  },
  compoundVariants: [
    {
      variant: "underline",
      colorScheme: "primary",
      css: ge("$primary11")
    },
    {
      variant: "underline",
      colorScheme: "accent",
      css: ge("$accent11")
    },
    {
      variant: "underline",
      colorScheme: "neutral",
      css: ge("$neutral12")
    },
    {
      variant: "underline",
      colorScheme: "success",
      css: ge("$success11")
    },
    {
      variant: "underline",
      colorScheme: "info",
      css: ge("$info11")
    },
    {
      variant: "underline",
      colorScheme: "warning",
      css: ge("$warning11")
    },
    {
      variant: "underline",
      colorScheme: "danger",
      css: ge("$danger11")
    },
    {
      variant: "outline",
      colorScheme: "primary",
      css: ge("$primary11")
    },
    {
      variant: "outline",
      colorScheme: "accent",
      css: ge("$accent11")
    },
    {
      variant: "outline",
      colorScheme: "neutral",
      css: ge("$neutral12")
    },
    {
      variant: "outline",
      colorScheme: "success",
      css: ge("$success11")
    },
    {
      variant: "outline",
      colorScheme: "info",
      css: ge("$info11")
    },
    {
      variant: "outline",
      colorScheme: "warning",
      css: ge("$warning11")
    },
    {
      variant: "outline",
      colorScheme: "danger",
      css: ge("$danger11")
    },
    {
      variant: "cards",
      colorScheme: "primary",
      css: ge("$primary11")
    },
    {
      variant: "cards",
      colorScheme: "accent",
      css: ge("$accent11")
    },
    {
      variant: "cards",
      colorScheme: "neutral",
      css: ge("$neutral12")
    },
    {
      variant: "cards",
      colorScheme: "success",
      css: ge("$success11")
    },
    {
      variant: "cards",
      colorScheme: "info",
      css: ge("$info11")
    },
    {
      variant: "cards",
      colorScheme: "warning",
      css: ge("$warning11")
    },
    {
      variant: "cards",
      colorScheme: "danger",
      css: ge("$danger11")
    },
    {
      variant: "pills",
      colorScheme: "primary",
      css: Je({
        color: "$primary11",
        bgColor: "$primary3",
        bgColorHover: "$primary4"
      })
    },
    {
      variant: "pills",
      colorScheme: "accent",
      css: Je({
        color: "$accent11",
        bgColor: "$accent3",
        bgColorHover: "$accent4"
      })
    },
    {
      variant: "pills",
      colorScheme: "neutral",
      css: Je({
        color: "$neutral12",
        bgColor: "$neutral3",
        bgColorHover: "$neutral4"
      })
    },
    {
      variant: "pills",
      colorScheme: "success",
      css: Je({
        color: "$success11",
        bgColor: "$success3",
        bgColorHover: "$success4"
      })
    },
    {
      variant: "pills",
      colorScheme: "info",
      css: Je({
        color: "$info11",
        bgColor: "$info3",
        bgColorHover: "$info4"
      })
    },
    {
      variant: "pills",
      colorScheme: "warning",
      css: Je({
        color: "$warning11",
        bgColor: "$warning3",
        bgColorHover: "$warning4"
      })
    },
    {
      variant: "pills",
      colorScheme: "danger",
      css: Je({
        color: "$danger11",
        bgColor: "$danger3",
        bgColorHover: "$danger4"
      })
    },
    {
      variant: "underline",
      orientation: "horizontal",
      css: {
        borderBottomWidth: "2px",
        marginBottom: "-1px"
      }
    },
    {
      variant: "underline",
      orientation: "vertical",
      css: {
        borderInlineEndWidth: "2px",
        marginInlineEnd: "-1px"
      }
    },
    {
      variant: "outline",
      orientation: "horizontal",
      css: {
        mb: "-1px",
        borderTopRadius: "$sm",
        "&[aria-selected='true']": {
          borderBottomColor: "$loContrast"
        }
      }
    },
    {
      variant: "outline",
      orientation: "vertical",
      css: {
        marginInlineEnd: "-1px",
        borderStartRadius: "$radii$sm",
        "&[aria-selected='true']": {
          borderInlineEndColor: "$colors$loContrast"
        }
      }
    },
    {
      variant: "cards",
      orientation: "horizontal",
      css: {
        mb: "-1px",
        borderBottomWidth: "1px",
        "&:not(:last-of-type)": {
          marginInlineEnd: "-1px"
        },
        "&[aria-selected='true']": {
          borderTopColor: "currentColor",
          borderBottomColor: "transparent"
        }
      }
    },
    {
      variant: "cards",
      orientation: "vertical",
      css: {
        marginInlineEnd: "-1px",
        borderInlineEndWidth: "1px",
        "&:not(:last-of-type)": {
          mb: "-1px"
        },
        "&[aria-selected='true']": {
          borderInlineStartColor: "currentColor",
          borderInlineEndColor: "transparent"
        }
      }
    }
  ]
}), Qf = S({
  outline: "none",
  padding: "$4"
}), xs = "hope-tabs";
function Yf(e) {
  var W;
  const t = `hope-tabs-${de()}`, r = _().Tabs, [o, a] = oe([]), [n, s] = oe([]), [l, c] = ie({
    _selectedIndex: (W = e.defaultIndex) != null ? W : 0,
    get isControlled() {
      return e.index !== void 0;
    },
    get selectedIndex() {
      return this.isControlled ? e.index : this._selectedIndex;
    },
    get baseId() {
      var I;
      return (I = e.id) != null ? I : t;
    },
    get orientation() {
      var I;
      return (I = e.orientation) != null ? I : "horizontal";
    },
    get keepAlive() {
      var I, T, E, U;
      return (U = (E = e.keepAlive) != null ? E : (T = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : T.keepAlive) != null ? U : !1;
    },
    get alignment() {
      var I, T, E, U;
      return (U = (E = e.alignment) != null ? E : (T = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : T.alignment) != null ? U : "start";
    },
    get variant() {
      var I, T, E, U;
      return (U = (E = e.variant) != null ? E : (T = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : T.variant) != null ? U : "underline";
    },
    get colorScheme() {
      var I, T, E, U;
      return (U = (E = e.colorScheme) != null ? E : (T = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : T.colorScheme) != null ? U : "primary";
    },
    get size() {
      var I, T, E, U;
      return (U = (E = e.size) != null ? E : (T = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : T.size) != null ? U : "md";
    },
    get fitted() {
      var I, T, E, U;
      return (U = (E = e.fitted) != null ? E : (T = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : T.fitted) != null ? U : !1;
    }
  }), [d, g, f] = v(e, ["class", "onChange"], ["index", "defaultIndex", "keepAlive", "alignment", "orientation", "variant", "colorScheme", "size", "fitted"]), u = we(() => o().slice().reverse()), p = (I) => {
    var T;
    c("_selectedIndex", I), (T = d.onChange) == null || T.call(d, I);
  }, C = (I) => I === l.selectedIndex, z = (I) => `${l.baseId}--tab-${I}`, h = (I) => `${l.baseId}--tabpanel-${I}`, y = (I) => a((T) => [...T, I]).length - 1, w = (I) => s((T) => [...T, I]).length - 1, x = () => {
    const I = o().length - 1;
    let T = Ht(l.selectedIndex, I, !0), E = o()[T];
    for (; E.disabled; )
      T = Ht(T, I, !0), E = o()[T];
    E.focus();
  }, k = () => {
    const I = o().length - 1;
    let T = At(l.selectedIndex, I, !0), E = o()[T];
    for (; E.disabled; )
      T = At(T, I, !0), E = o()[T];
    E.focus();
  }, L = () => {
    var I;
    (I = o().find((T) => !T.disabled)) == null || I.focus();
  }, H = () => {
    var I;
    (I = u().find((T) => !T.disabled)) == null || I.focus();
  }, q = () => m(d.class, xs, Kf({
    orientation: l.orientation
  })), D = {
    state: l,
    setSelectedIndex: p,
    isSelectedIndex: C,
    getTabId: z,
    getTabPanelId: h,
    registerTab: y,
    registerTabPanel: w,
    focusPrevTab: k,
    focusNextTab: x,
    focusFirstTab: L,
    focusLastTab: H
  };
  return i(Cs.Provider, {
    value: D,
    get children() {
      return i(A, b({
        get class() {
          return q();
        },
        get __baseStyle() {
          var I;
          return (I = r == null ? void 0 : r.baseStyle) == null ? void 0 : I.root;
        }
      }, f));
    }
  });
}
Yf.toString = () => $(xs);
const Cs = ae();
function xr() {
  const e = re(Cs);
  if (!e)
    throw new Error("[Hope UI]: useTabsContext must be used within a `<Tabs />` component");
  return e;
}
const $s = "hope-tabs__tab";
function Zf(e) {
  const t = _().Tabs, r = xr(), [o, a] = oe(-1), [n, s] = v(e, ["ref", "class", "disabled", "onClick", "onFocus"]), l = () => r.isSelectedIndex(o()), c = () => r.getTabId(o()), d = () => r.getTabPanelId(o()), g = (p) => {
    r.setSelectedIndex(o()), he(n.onClick, p);
  }, f = (p) => {
    r.setSelectedIndex(o()), he(n.onFocus, p);
  }, u = () => m(n.class, $s, Xf({
    orientation: r.state.orientation,
    variant: r.state.variant,
    colorScheme: r.state.colorScheme,
    size: r.state.size,
    fitted: r.state.fitted
  }));
  return i(R.button, b({
    role: "tab",
    type: "button",
    get id() {
      return c();
    },
    get tabIndex() {
      return l() ? 0 : -1;
    },
    get disabled() {
      return n.disabled;
    },
    get ["aria-selected"]() {
      return l();
    },
    get ["aria-controls"]() {
      return d();
    },
    get class() {
      return u();
    },
    get __baseStyle() {
      var p;
      return (p = t == null ? void 0 : t.baseStyle) == null ? void 0 : p.tab;
    },
    onClick: g,
    onFocus: f
  }, s));
}
Zf.toString = () => $($s);
const ys = "hope-tabs__tablist";
function Jf(e) {
  const t = _().Tabs, r = xr(), [o, a] = v(e, ["class", "onKeyDown"]), n = () => r.state.orientation === "horizontal", s = () => r.state.orientation === "vertical", l = () => n() && r.focusPrevTab(), c = () => n() && r.focusNextTab(), d = () => s() && r.focusNextTab(), g = () => s() && r.focusPrevTab(), f = we(() => ({
    ArrowLeft: l,
    ArrowRight: c,
    ArrowDown: d,
    ArrowUp: g,
    Home: r.focusFirstTab,
    End: r.focusLastTab
  })), u = (C) => {
    he(o.onKeyDown, C);
    const z = to(C), h = f()[z];
    h && (C.preventDefault(), he(h, C));
  }, p = () => m(o.class, ys, Uf({
    alignment: r.state.alignment,
    orientation: r.state.orientation,
    variant: r.state.variant
  }));
  return i(A, b({
    role: "tablist",
    get ["aria-orientation"]() {
      return r.state.orientation;
    },
    get class() {
      return p();
    },
    get __baseStyle() {
      var C;
      return (C = t == null ? void 0 : t.baseStyle) == null ? void 0 : C.tabList;
    },
    onKeyDown: u
  }, a));
}
Jf.toString = () => $(ys);
const ws = "hope-tabs__tab-panel";
function Gf(e) {
  const t = _().Tabs, r = xr(), [o, a] = oe(-1), [n, s] = v(e, ["ref", "class", "children"]), l = () => r.isSelectedIndex(o()), c = () => r.getTabId(o()), d = () => r.getTabPanelId(o()), g = lt(() => n.children), f = () => m(n.class, ws, Qf());
  return i(A, b({
    role: "tabpanel",
    tabIndex: "0",
    get id() {
      return d();
    },
    get ["aria-labelledby"]() {
      return c();
    },
    get hidden() {
      return !l();
    },
    get class() {
      return f();
    },
    get __baseStyle() {
      var u;
      return (u = t == null ? void 0 : t.baseStyle) == null ? void 0 : u.tabPanel;
    }
  }, s, {
    get children() {
      return i(O, {
        get when() {
          return l();
        },
        get children() {
          return i(O, {
            get when() {
              return r.state.keepAlive;
            },
            get fallback() {
              return n.children;
            },
            get children() {
              return g();
            }
          });
        }
      });
    }
  }));
}
Gf.toString = () => $(ws);
const ep = S({
  marginInlineStart: "$2"
}), tp = S({
  marginInlineEnd: "$2"
}), rp = S({
  noOfLines: 1
}), st = S({
  appearance: "none",
  position: "relative",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  outline: "none",
  border: "1px solid transparent",
  borderRadius: "$full",
  backgroundColor: "transparent",
  padding: "0",
  lineHeight: "$none",
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
  userSelect: "none",
  transition: "color 250ms, background-color 250ms, opacity 250ms, box-shadow 250ms",
  "&:focus": {
    outline: "none",
    boxShadow: "$outline"
  },
  "&:disabled": {
    border: "1px solid transparent",
    backgroundColor: "transparent",
    color: "$neutral3",
    cursor: "not-allowed"
  },
  variants: {
    size: {
      sm: {
        marginInlineStart: "0.35rem",
        marginInlineEnd: "-3px"
      },
      md: {
        marginInlineStart: "$1_5",
        marginInlineEnd: "calc(0.15rem * -1)"
      },
      lg: {
        marginInlineStart: "$1_5",
        marginInlineEnd: "calc($1 * -1)"
      }
    }
  }
});
function er(e) {
  return {
    height: e.height,
    py: 0,
    px: e.paddingX,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    [`& .${st}`]: {
      boxSize: e.closeButtonSize
    }
  };
}
function Ge(e) {
  return {
    backgroundColor: e.bgColor,
    color: e.color,
    [`& .${st}:not(:disabled):hover`]: {
      backgroundColor: e.closeButtonBgColorHover
    }
  };
}
function et(e) {
  return {
    backgroundColor: e.bgColor,
    color: e.color,
    [`& .${st}:not(:disabled):hover`]: {
      backgroundColor: e.closeButtonBgColorHover
    }
  };
}
function tt(e) {
  return {
    borderColor: e.borderColor,
    color: e.color,
    [`& .${st}:not(:disabled):hover`]: {
      backgroundColor: e.closeButtonBgColorHover
    }
  };
}
function tr(e) {
  return {
    "&::before,  &::after": {
      boxSize: e
    },
    "&::before": {
      marginRight: e
    },
    "&::after": {
      marginLeft: e
    }
  };
}
const op = S({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "$full",
  fontWeight: "$medium",
  lineHeight: "$none",
  variants: {
    variant: {
      solid: {
        border: "1px solid transparent",
        color: "white"
      },
      subtle: {
        border: "1px solid transparent"
      },
      outline: {
        borderStyle: "solid",
        borderWidth: "1px",
        backgroundColor: "transparent"
      },
      dot: {
        border: "1px solid $neutral7",
        backgroundColor: "transparent",
        color: "$neutral12",
        "&::before,  &::after": {
          content: "''",
          borderRadius: "$full"
        },
        "&::before": {
          display: "block"
        },
        "&::after": {
          display: "none"
        },
        [`& .${st}:not(:disabled):hover`]: {
          backgroundColor: "$neutral4"
        },
        [`& .${st}:not(:disabled):active`]: {
          backgroundColor: "$neutral5"
        }
      }
    },
    colorScheme: {
      primary: {},
      accent: {},
      neutral: {},
      success: {},
      info: {},
      warning: {},
      danger: {}
    },
    size: {
      sm: er({
        height: "$5",
        paddingX: "$2",
        fontSize: "$xs",
        lineHeight: "$4",
        closeButtonSize: "$4"
      }),
      md: er({
        height: "$6",
        paddingX: "$2",
        fontSize: "$sm",
        lineHeight: "$5",
        closeButtonSize: "$5"
      }),
      lg: er({
        height: "$8",
        paddingX: "$3",
        fontSize: "$base",
        lineHeight: "$6",
        closeButtonSize: "$6"
      })
    },
    dotPlacement: {
      start: {},
      end: {}
    }
  },
  compoundVariants: [
    {
      variant: "solid",
      colorScheme: "primary",
      css: Ge({
        color: "white",
        bgColor: "$primary9",
        closeButtonBgColorHover: "$primary10"
      })
    },
    {
      variant: "solid",
      colorScheme: "accent",
      css: Ge({
        color: "white",
        bgColor: "$accent9",
        closeButtonBgColorHover: "$accent10"
      })
    },
    {
      variant: "solid",
      colorScheme: "neutral",
      css: Ge({
        color: "white",
        bgColor: "$neutral9",
        closeButtonBgColorHover: "$neutral11"
      })
    },
    {
      variant: "solid",
      colorScheme: "success",
      css: Ge({
        color: "white",
        bgColor: "$success9",
        closeButtonBgColorHover: "$success10"
      })
    },
    {
      variant: "solid",
      colorScheme: "info",
      css: Ge({
        color: "white",
        bgColor: "$info9",
        closeButtonBgColorHover: "$info10"
      })
    },
    {
      variant: "solid",
      colorScheme: "warning",
      css: Ge({
        color: "$blackAlpha12",
        bgColor: "$warning9",
        closeButtonBgColorHover: "$warning10"
      })
    },
    {
      variant: "solid",
      colorScheme: "danger",
      css: Ge({
        color: "white",
        bgColor: "$danger9",
        closeButtonBgColorHover: "$danger10"
      })
    },
    {
      variant: "subtle",
      colorScheme: "primary",
      css: et({
        color: "$primary11",
        bgColor: "$primary4",
        closeButtonBgColorHover: "$primary6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "accent",
      css: et({
        color: "$accent11",
        bgColor: "$accent4",
        closeButtonBgColorHover: "$accent6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "neutral",
      css: et({
        color: "$neutral12",
        bgColor: "$neutral4",
        closeButtonBgColorHover: "$neutral7"
      })
    },
    {
      variant: "subtle",
      colorScheme: "success",
      css: et({
        color: "$success11",
        bgColor: "$success4",
        closeButtonBgColorHover: "$success6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "info",
      css: et({
        color: "$info11",
        bgColor: "$info4",
        closeButtonBgColorHover: "$info6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "warning",
      css: et({
        color: "$warning11",
        bgColor: "$warning4",
        closeButtonBgColorHover: "$warning6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "danger",
      css: et({
        color: "$danger11",
        bgColor: "$danger4",
        closeButtonBgColorHover: "$danger6"
      })
    },
    {
      variant: "outline",
      colorScheme: "primary",
      css: tt({
        color: "$primary11",
        borderColor: "$primary7",
        closeButtonBgColorHover: "$primary4"
      })
    },
    {
      variant: "outline",
      colorScheme: "accent",
      css: tt({
        color: "$accent11",
        borderColor: "$accent7",
        closeButtonBgColorHover: "$accent4"
      })
    },
    {
      variant: "outline",
      colorScheme: "neutral",
      css: tt({
        color: "$neutral12",
        borderColor: "$neutral7",
        closeButtonBgColorHover: "$neutral4"
      })
    },
    {
      variant: "outline",
      colorScheme: "success",
      css: tt({
        color: "$success11",
        borderColor: "$success7",
        closeButtonBgColorHover: "$success4"
      })
    },
    {
      variant: "outline",
      colorScheme: "info",
      css: tt({
        color: "$info11",
        borderColor: "$info7",
        closeButtonBgColorHover: "$info4"
      })
    },
    {
      variant: "outline",
      colorScheme: "warning",
      css: tt({
        color: "$warning11",
        borderColor: "$warning7",
        closeButtonBgColorHover: "$warning4"
      })
    },
    {
      variant: "outline",
      colorScheme: "danger",
      css: tt({
        color: "$danger11",
        borderColor: "$danger7",
        closeButtonBgColorHover: "$danger4"
      })
    },
    {
      variant: "dot",
      colorScheme: "primary",
      css: {
        "&::before, &::after": {
          backgroundColor: "$primary9"
        }
      }
    },
    {
      variant: "dot",
      colorScheme: "accent",
      css: {
        "&::before, &::after": {
          backgroundColor: "$accent9"
        }
      }
    },
    {
      variant: "dot",
      colorScheme: "neutral",
      css: {
        "&::before, &::after": {
          backgroundColor: "$neutral9"
        }
      }
    },
    {
      variant: "dot",
      colorScheme: "success",
      css: {
        "&::before, &::after": {
          backgroundColor: "$success9"
        }
      }
    },
    {
      variant: "dot",
      colorScheme: "info",
      css: {
        "&::before, &::after": {
          backgroundColor: "$info9"
        }
      }
    },
    {
      variant: "dot",
      colorScheme: "warning",
      css: {
        "&::before, &::after": {
          backgroundColor: "$warning9"
        }
      }
    },
    {
      variant: "dot",
      colorScheme: "danger",
      css: {
        "&::before, &::after": {
          backgroundColor: "$danger9"
        }
      }
    },
    {
      variant: "dot",
      size: "sm",
      css: tr("$1_5")
    },
    {
      variant: "dot",
      size: "md",
      css: tr("$2")
    },
    {
      variant: "dot",
      size: "lg",
      css: tr("$2_5")
    },
    {
      variant: "dot",
      dotPlacement: "start",
      css: {
        "&::before": {
          display: "block"
        },
        "&::after": {
          display: "none"
        }
      }
    },
    {
      variant: "dot",
      dotPlacement: "end",
      css: {
        "&::before": {
          display: "none"
        },
        "&::after": {
          display: "block"
        }
      }
    }
  ]
}), _s = "hope-tag", Is = ae();
function np(e) {
  var g, f, u, p, C, z, h, y, w;
  const t = _().Tag, r = {
    variant: (u = (f = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.root) == null ? void 0 : f.variant) != null ? u : "subtle",
    colorScheme: (z = (C = (p = t == null ? void 0 : t.defaultProps) == null ? void 0 : p.root) == null ? void 0 : C.colorScheme) != null ? z : "neutral",
    size: (w = (y = (h = t == null ? void 0 : t.defaultProps) == null ? void 0 : h.root) == null ? void 0 : y.size) != null ? w : "md"
  }, o = Z(r, e), [a, n, s] = v(o, ["class"], ["variant", "colorScheme", "size", "dotPlacement"]), l = () => m(a.class, _s, op(n)), d = {
    size: () => n.size
  };
  return i(Is.Provider, {
    value: d,
    get children() {
      return i(R.span, b({
        get class() {
          return l();
        },
        get __baseStyle() {
          var x;
          return (x = t == null ? void 0 : t.baseStyle) == null ? void 0 : x.root;
        }
      }, s));
    }
  });
}
np.toString = () => $(_s);
function ap() {
  const e = re(Is);
  if (!e)
    throw new Error("[Hope UI]: useTagContext must be used within a `<Tag />` component");
  return e;
}
const ks = "hope-tag-close-button";
function sp(e) {
  const t = _().Tag, r = ap(), a = Z({
    type: "button",
    role: "button",
    "aria-label": "Close"
  }, e), [n, s] = v(a, ["class", "children"]), l = () => m(n.class, ks, st({
    size: r.size()
  }));
  return i(R.button, b({
    get class() {
      return l();
    },
    get __baseStyle() {
      var c;
      return (c = t == null ? void 0 : t.baseStyle) == null ? void 0 : c.closeButton;
    }
  }, s, {
    get children() {
      return i(ts, {});
    }
  }));
}
sp.toString = () => $(ks);
const Ps = "hope-tag-left-icon";
function ip(e) {
  const t = _().Tag, [r, o] = v(e, ["class"]), a = () => m(r.class, Ps, tp());
  return i(ct, b({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.icon;
    }
  }, o));
}
ip.toString = () => $(Ps);
const Ts = "hope-tag-right-icon";
function lp(e) {
  const t = _().Tag, [r, o] = v(e, ["class"]), a = () => m(r.class, Ts, ep());
  return i(ct, b({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.icon;
    }
  }, o));
}
lp.toString = () => $(Ts);
const zs = "hope-tag-label";
function cp(e) {
  const t = _().Tag, [r, o] = v(e, ["class"]), a = () => m(r.class, zs, rp());
  return i(R.span, b({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.label;
    }
  }, o));
}
cp.toString = () => $(zs);
const Bs = "hope-text";
function dp(e) {
  var l;
  const t = _().Text, r = {
    size: (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.size
  }, o = Z(r, e), [a, n] = v(o, ["class", "size"]), s = () => m(a.class, Bs, En({
    size: a.size
  }));
  return i(R.p, b({
    get class() {
      return s();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    }
  }, n));
}
dp.toString = () => $(Bs);
function rr(e, t) {
  return Object.entries({
    xs: t != null ? t : "$2",
    sm: t != null ? t : "$2_5",
    md: t != null ? t : "$3",
    lg: t != null ? t : "$4"
  }).map(([r, o]) => ({
    variant: e,
    size: r,
    css: { px: o }
  }));
}
const up = S(lr, {
  minHeight: "80px",
  py: "$2",
  compoundVariants: [
    ...rr("outline"),
    ...rr("filled"),
    ...rr("unstyled", 0)
  ]
}), Ls = "hope-textarea";
function gp(e) {
  var c, d, g, f;
  const t = _().Textarea, r = {
    variant: (d = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.variant) != null ? d : "outline",
    size: (f = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.size) != null ? f : "md"
  }, o = Z(r, e), [a, n] = v(o, ["class", "variant", "size"]), s = vt(e), l = () => m(a.class, Ls, up({
    variant: a.variant,
    size: a.size
  }));
  return i(A, b({
    as: "textarea",
    get class() {
      return l();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    }
  }, s, n));
}
gp.toString = () => $(Ls);
const Ds = "hope-tooltip", fp = "hope-tooltip__arrow";
function pp(e) {
  var M, J, Y, P, N, V, X, Se, Pe, ze, qe, je, B, F, ee, se, We, Tt;
  const t = `hope-tooltip-${de()}`, r = _().Tooltip, o = {
    id: t,
    placement: (J = (M = r == null ? void 0 : r.defaultProps) == null ? void 0 : M.placement) != null ? J : "bottom",
    offset: (P = (Y = r == null ? void 0 : r.defaultProps) == null ? void 0 : Y.offset) != null ? P : 8,
    withArrow: (V = (N = r == null ? void 0 : r.defaultProps) == null ? void 0 : N.withArrow) != null ? V : !1,
    arrowSize: (Se = (X = r == null ? void 0 : r.defaultProps) == null ? void 0 : X.arrowSize) != null ? Se : 8,
    arrowPadding: (ze = (Pe = r == null ? void 0 : r.defaultProps) == null ? void 0 : Pe.arrowPadding) != null ? ze : 8,
    openDelay: (je = (qe = r == null ? void 0 : r.defaultProps) == null ? void 0 : qe.openDelay) != null ? je : 0,
    closeDelay: (F = (B = r == null ? void 0 : r.defaultProps) == null ? void 0 : B.closeDelay) != null ? F : 0,
    closeOnClick: (se = (ee = r == null ? void 0 : r.defaultProps) == null ? void 0 : ee.closeOnClick) != null ? se : !0,
    closeOnMouseDown: (Tt = (We = r == null ? void 0 : r.defaultProps) == null ? void 0 : We.closeOnMouseDown) != null ? Tt : !1
  }, a = Z(o, e), [n, s] = v(a, ["class", "children", "id", "label", "opened", "defaultOpened", "inline", "disabled", "placement", "offset", "withArrow", "arrowSize", "arrowPadding", "openDelay", "closeDelay", "closeOnClick", "closeOnMouseDown", "onOpen", "onClose"]), [l, c] = oe(!!n.defaultOpened), [d, g] = oe(!1);
  let f, u, p, C;
  const z = () => n.opened !== void 0, h = () => z() ? !!n.opened : l(), y = () => m(n.class, Ds, Vl()), w = () => m(fp, ql());
  let x;
  const k = lt(() => n.children), L = we(() => {
    let ne = k();
    for (; Ae(ne); )
      ne = ne();
    return ne;
  });
  async function H() {
    const ne = L();
    if (!ne || !f)
      return;
    const gt = [yt(n.offset)];
    n.inline && gt.push(Mr()), gt.push(wt()), gt.push(_t()), n.withArrow && u && gt.push(Or({
      element: u,
      padding: n.arrowPadding
    })), gt.push(Rr()), await Wt(ne, f, {
      placement: n.placement,
      middleware: gt
    });
  }
  const q = () => {
    var ne;
    z() || c(!0), (ne = n.onOpen) == null || ne.call(n), H();
  }, D = () => {
    var ne;
    z() || c(!1), (ne = n.onClose) == null || ne.call(n);
  }, W = () => {
    n.disabled || (p = window.setTimeout(q, n.openDelay));
  }, I = () => {
    p && window.clearTimeout(p), C = window.setTimeout(D, n.closeDelay);
  }, T = () => {
    n.closeOnClick && I();
  }, E = () => {
    n.closeOnMouseDown && I();
  }, U = (ne) => {
    h() && ne.key === "Escape" && I();
  }, K = () => {
    const ne = L();
    ne.addEventListener("mouseenter", W), ne.addEventListener("focus", W), ne.addEventListener("click", T), ne.addEventListener("mousedown", E), ne.addEventListener("mouseleave", I), ne.addEventListener("blur", I);
  }, te = () => {
    const ne = L();
    ne.removeEventListener("mouseenter", W), ne.removeEventListener("focus", W), ne.removeEventListener("click", T), ne.removeEventListener("mousedown", E), ne.removeEventListener("mouseleave", I), ne.removeEventListener("blur", I);
  }, xe = () => {
    Rt || !f || (document.addEventListener("keydown", U), x = It(L(), f, H));
  }, $e = () => {
    document.removeEventListener("keydown", U), x == null || x(), g(!1);
  };
  return ue(() => {
    K();
  }), be(() => {
    te(), window.clearTimeout(p), window.clearTimeout(C);
  }), ve(() => {
    h() ? (g(!0), n.id && L().setAttribute("aria-describedby", n.id)) : L().removeAttribute("aria-describedby");
  }), [L, i(O, {
    get when() {
      return d();
    },
    get children() {
      return i(it, {
        get children() {
          return i(Oe, {
            get name() {
              return nt.scale;
            },
            appear: !0,
            onBeforeEnter: H,
            onAfterEnter: xe,
            onAfterExit: $e,
            get children() {
              return i(O, {
                get when() {
                  return h();
                },
                get children() {
                  return i(A, b({
                    role: "tooltip",
                    get id() {
                      return n.id;
                    },
                    get class() {
                      return y();
                    },
                    get __baseStyle() {
                      return r == null ? void 0 : r.baseStyle;
                    }
                  }, s, {
                    get children() {
                      return [n.label, i(O, {
                        get when() {
                          return n.withArrow;
                        },
                        get children() {
                          return i(A, {
                            get class() {
                              return w();
                            },
                            get boxSize() {
                              return n.arrowSize;
                            }
                          });
                        }
                      })];
                    }
                  }));
                }
              });
            }
          });
        }
      });
    }
  })];
}
pp.toString = () => $(Ds);
function Up(e = {}) {
  const t = `disclosure-${de()}`, [r, o] = oe(e.defaultIsOpen || !1), a = () => e.isOpen !== void 0, n = () => a() ? !!e.isOpen : r(), s = () => {
    var f;
    a() || o(!1), (f = e.onClose) == null || f.call(e);
  }, l = () => {
    var f;
    a() || o(!0), (f = e.onOpen) == null || f.call(e);
  };
  return {
    isControlled: a,
    isOpen: n,
    onOpen: l,
    onClose: s,
    onToggle: () => {
      n() ? s() : l();
    },
    triggerProps: () => ({
      "aria-expanded": n(),
      "aria-controls": t
    }),
    disclosureProps: () => ({
      id: t,
      hidden: !n()
    })
  };
}
function Xp(e) {
  let t = !1;
  const r = (l) => {
    var d;
    const { once: c } = e;
    c && t || (t = !0, (d = e.handler) == null || d.call(e, l));
  }, o = (l, c, d, g) => {
    c && l && l.addEventListener && l.addEventListener(c, r, {
      capture: d,
      passive: g
    });
  }, a = () => {
    const { element: l, eventName: c, capture: d, passive: g } = e;
    o(l, c, d, g);
  }, n = (l, c) => {
    c && l && l.removeEventListener && l.removeEventListener(c, r);
  }, s = () => {
    const { element: l, eventName: c } = e;
    n(l, c);
  };
  return ve((l) => {
    const { element: c, eventName: d, capture: g, passive: f } = e;
    return l && n(l.element, l.eventName), o(c, d, g, f), {
      element: c,
      eventName: d
    };
  }), be(() => {
    const { element: l, eventName: c } = e;
    n(l, c);
  }), {
    active: a,
    inactive: s
  };
}
export {
  mc as Accordion,
  Ic as AccordionButton,
  Bc as AccordionIcon,
  _c as AccordionItem,
  Dc as AccordionPanel,
  Mc as Alert,
  Rc as AlertDescription,
  Kc as AlertIcon,
  Uc as AlertTitle,
  Qc as Anchor,
  Zc as AspectRatio,
  nd as AsyncButton,
  pd as Avatar,
  hd as AvatarBadge,
  bd as AvatarExcess,
  fd as AvatarGroup,
  vd as Badge,
  A as Box,
  _d as Breadcrumb,
  Id as BreadcrumbItem,
  kd as BreadcrumbLink,
  Pd as BreadcrumbSeparator,
  fr as Button,
  rd as ButtonGroup,
  zd as Center,
  Qd as Checkbox,
  Hd as CheckboxGroup,
  Nd as CheckboxPrimitive,
  Bp as CheckboxPrimitiveIndicator,
  au as CircularProgress,
  su as CircularProgressIndicator,
  iu as CircularProgressLabel,
  Kt as CloseButton,
  co as Collapse,
  gu as Container,
  pu as Divider,
  Lp as Drawer,
  Hp as DrawerBody,
  Dp as DrawerCloseButton,
  xu as DrawerContent,
  Ep as DrawerFooter,
  Ap as DrawerHeader,
  Cu as DrawerOverlay,
  Pn as Flex,
  Wd as FormControl,
  Jo as FormControlContext,
  $u as FormErrorMessage,
  yu as FormHelperText,
  _u as FormLabel,
  Dn as Grid,
  Iu as GridItem,
  Sg as HStack,
  Lu as Heading,
  qt as HopeContext,
  Pp as HopeProvider,
  ct as Icon,
  Du as IconButton,
  Hu as Image,
  Eu as Input,
  Nn as InputAddon,
  jn as InputElement,
  Au as InputGroup,
  Mu as InputLeftAddon,
  Ru as InputLeftElement,
  Ou as InputRightAddon,
  Wu as InputRightElement,
  Nu as Kbd,
  vr as List,
  Xu as ListIcon,
  Qu as ListItem,
  Mp as Menu,
  eg as MenuContent,
  tg as MenuGroup,
  sg as MenuItem,
  ig as MenuLabel,
  lg as MenuTrigger,
  hu as Modal,
  fn as ModalBody,
  hn as ModalCloseButton,
  mu as ModalContent,
  mn as ModalFooter,
  Sn as ModalHeader,
  vu as ModalOverlay,
  ca as Notification,
  ar as NotificationDescription,
  fa as NotificationIcon,
  sr as NotificationTitle,
  Rp as NotificationsProvider,
  Ku as OrderedList,
  Wp as Popover,
  Fp as PopoverAnchor,
  Pg as PopoverArrow,
  Tg as PopoverBody,
  zg as PopoverCloseButton,
  Bg as PopoverContent,
  Lg as PopoverFooter,
  Dg as PopoverHeader,
  Np as PopoverTrigger,
  Rg as Progress,
  Wg as ProgressIndicator,
  Fg as ProgressLabel,
  Zg as Radio,
  jg as RadioGroup,
  tf as Select,
  Ea as SelectContent,
  Oa as SelectIcon,
  sf as SelectLabel,
  Va as SelectListbox,
  nf as SelectOptGroup,
  Ka as SelectOption,
  Xa as SelectOptionIndicator,
  Ya as SelectOptionText,
  Ja as SelectPlaceholder,
  es as SelectTag,
  os as SelectTagCloseButton,
  as as SelectTrigger,
  ss as SelectValue,
  zu as SimpleGrid,
  qp as SimpleOption,
  jp as SimpleSelect,
  Ot as Skeleton,
  hf as SkeletonCircle,
  bf as SkeletonText,
  vf as Spacer,
  Cf as Spinner,
  Sr as Stack,
  Bf as Switch,
  If as SwitchPrimitive,
  Kp as SwitchPrimitiveThumb,
  Zf as Tab,
  Jf as TabList,
  Gf as TabPanel,
  Of as Table,
  Rf as TableCaption,
  Yf as Tabs,
  np as Tag,
  sp as TagCloseButton,
  cp as TagLabel,
  ip as TagLeftIcon,
  lp as TagRightIcon,
  Wf as Tbody,
  Ff as Td,
  dp as Text,
  gp as Textarea,
  Nf as Tfoot,
  Vf as Th,
  qf as Thead,
  pp as Tooltip,
  jf as Tr,
  Uu as UnorderedList,
  ha as VStack,
  Fr as __DEV__,
  xc as accordionButtonStyles,
  Cc as accordionIconStyles,
  Sc as accordionItemStyles,
  $c as accordionPanelStyles,
  Ac as alertDescriptionStyles,
  ye as alertIconStyles,
  Ec as alertStyles,
  Hc as alertTitleStyles,
  Xc as anchorStyles,
  Yc as aspectRatioStyles,
  id as avatarBadgeStyles,
  ad as avatarExcessStyles,
  ld as avatarGroupStyles,
  sd as avatarImageStyles,
  pr as avatarStyles,
  md as badgeStyles,
  Qr as baseDialogStyles,
  lr as baseInputResetStyles,
  Xr as baseModalContainerStyles,
  Ni as baseTheme,
  Cd as breadcrumbItemStyles,
  yd as breadcrumbLinkStyles,
  xd as breadcrumbListStyles,
  $d as breadcrumbSeparatorStyles,
  Sd as breadcrumbStyles,
  td as buttonGroupStyles,
  ed as buttonIconSpinnerStyles,
  Jc as buttonIconStyles,
  Gc as buttonLoaderStyles,
  yo as buttonStyles,
  he as callHandler,
  _p as cast,
  Td as centerStyles,
  me as chainHandlers,
  Dd as checkboxControlStyles,
  Ld as checkboxLabelStyles,
  Bd as checkboxWrapperStyles,
  tu as circularProgressIndicatorContainerStyles,
  ru as circularProgressIndicatorStyles,
  ou as circularProgressLabelStyles,
  Gd as circularProgressStyles,
  eu as circularProgressTrackStyles,
  m as classNames,
  du as closeButtonStyles,
  Lc as collapseStyles,
  ht as colorModeClassNames,
  Ip as config,
  uu as containerStyles,
  at as contains,
  $ as createClassSelector,
  Up as createDisclosure,
  ke as createIcon,
  Vi as createTheme,
  S as css,
  fu as dividerStyles,
  Ji as drawerContainerStyles,
  Gi as drawerDialogStyles,
  G as drawerTransitionName,
  Zi as drawerTransitionStyles,
  Ad as formControlStyles,
  Rd as formErrorMessageStyles,
  Od as formHelperTextStyles,
  Ed as formLabelStyles,
  wc as getActiveElement,
  Qs as getColorModeClassName,
  kp as getCssText,
  Xs as getDefaultColorMode,
  Ht as getNextIndex,
  Et as getOwnerDocument,
  At as getPrevIndex,
  Mt as getRelatedTarget,
  Ne as globalCss,
  Jd as growAndShrink,
  wg as hasTabIndex,
  Bu as headingStyles,
  R as hope,
  gr as hopeButtonClass,
  jt as hopeIconButtonClass,
  ur as hopeIconClass,
  Qt as hopeSkeletonClass,
  kc as iconStyles,
  kl as inputAddonStyles,
  Il as inputElementStyles,
  _l as inputGroupStyles,
  wl as inputStyles,
  pt as isArray,
  kt as isChildrenFunction,
  Ig as isContentEditable,
  _g as isDisabled,
  eo as isElement,
  kg as isFocusable,
  Ae as isFunction,
  yc as isHTMLElement,
  ma as isHidden,
  Nr as isNull,
  Fs as isNumber,
  Ft as isObject,
  ro as isScrollable,
  Ns as isString,
  wp as isUndefined,
  Gt as isValidEvent,
  Fu as kbdStyles,
  bt as keyframes,
  qu as listIconStyles,
  Vu as listStyles,
  oo as maintainScrollVisibility,
  Vs as mapKeys,
  rl as menuContentStyles,
  ol as menuGroupStyles,
  ll as menuItemCommandStyles,
  sl as menuItemIconWrapperStyles,
  al as menuItemStyles,
  il as menuItemTextStyles,
  nl as menuLabelStyles,
  Fe as menuTransitionName,
  el as menuTransitionStyles,
  tl as menuTriggerStyles,
  js as mockBody,
  Xi as modalBodyStyles,
  Yi as modalCloseButtonStyles,
  ji as modalContainerStyles,
  Ki as modalDialogStyles,
  Qi as modalFooterStyles,
  Ui as modalHeaderStyles,
  Ur as modalOverlayStyles,
  fe as modalTransitionName,
  qi as modalTransitionStyles,
  $r as noop,
  to as normalizeEventKey,
  bl as notificationDescriptionStyles,
  pl as notificationIconStyles,
  ul as notificationListStyles,
  fl as notificationLoaderStyles,
  Op as notificationService,
  gl as notificationStyles,
  hl as notificationTitleStyles,
  Te as notificationTransitionName,
  dl as notificationTransitionStyles,
  yl as popoverArrowStyles,
  xl as popoverBodyStyles,
  $l as popoverCloseButtonStyles,
  vl as popoverContentStyles,
  Cl as popoverFooterStyles,
  Sl as popoverHeaderStyles,
  rt as popoverTransitionName,
  ml as popoverTransitionStyles,
  Mg as progressIndicatorStyles,
  Og as progressLabelStyles,
  Eg as progressStyles,
  qg as radioControlStyles,
  Vg as radioLabelStyles,
  Ng as radioWrapperStyles,
  qs as range,
  Md as requiredIndicatorStyles,
  Us as saveColorModeToLocalStorage,
  Al as selectContentStyles,
  Hl as selectIconStyles,
  Ol as selectLabelStyles,
  El as selectListboxStyles,
  zl as selectMultiValueStyles,
  Ml as selectOptGroupStyles,
  Fl as selectOptionIndicatorStyles,
  Rl as selectOptionStyles,
  Wl as selectOptionTextStyles,
  Dl as selectPlaceholderStyles,
  Yr as selectSingleValueStyles,
  Ll as selectTagCloseButtonStyles,
  Bl as selectTagStyles,
  ot as selectTransitionName,
  Pl as selectTransitionStyles,
  Tl as selectTriggerStyles,
  pf as skeletonStyles,
  mf as spacerStyles,
  Sf as spinnerStyles,
  vg as stackStyles,
  wf as switchControlStyles,
  yf as switchLabelStyles,
  $f as switchWrapperStyles,
  Ys as syncBodyColorModeClassName,
  Uf as tabListStyles,
  Qf as tabPanelStyles,
  Xf as tabStyles,
  Hf as tableBodyStyles,
  Df as tableCaptionStyles,
  Mf as tableCellStyles,
  Ef as tableColumnHeaderStyles,
  Af as tableFootStyles,
  Lf as tableStyles,
  Kf as tabsStyles,
  st as tagCloseButtonStyles,
  rp as tagLabelStyles,
  tp as tagLeftIconStyles,
  ep as tagRightIconStyles,
  op as tagStyles,
  En as textStyles,
  up as textareaStyles,
  br as toggleControlLabelStyles,
  mr as toggleControlStyles,
  hr as toggleWrapperStyles,
  ql as tooltipArrowStyles,
  Vl as tooltipStyles,
  nt as tooltipTransitionName,
  Nl as tooltipTransitionStyles,
  vc as useAccordionContext,
  dr as useAccordionItemContext,
  Oc as useAlertContext,
  Lo as useAvatarGroupContext,
  qo as useBreadcrumbContext,
  Io as useButtonGroupContext,
  Zo as useCheckboxGroupContext,
  Vd as useCheckboxPrimitiveContext,
  nn as useCircularProgressContext,
  Gu as useClickOutside,
  Xl as useColorMode,
  zp as useColorModeValue,
  Cn as useDrawerContext,
  Xp as useEvent,
  mt as useFormControlContext,
  Pt as useInputGroupContext,
  Ut as useMenuContext,
  rg as useMenuGroupContext,
  Ve as useModalContext,
  cg as useNotificationContext,
  ut as usePopoverContext,
  ka as useProgressContext,
  Vp as useRadioContext,
  Kg as useRadioGroupContext,
  Re as useSelectContext,
  af as useSelectOptGroupContext,
  lf as useSelectOptionContext,
  _ as useStyleConfig,
  kf as useSwitchPrimitivehContext,
  Yt as useTableContext,
  xr as useTabsContext,
  ap as useTagContext,
  Tp as useTheme,
  Zr as valueToPercent
};
