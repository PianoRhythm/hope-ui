import { isServer as Lt, createComponent as i, Dynamic as Or, mergeProps as p, template as se, memo as nt, use as ar, effect as _e, className as xt, setAttribute as G, Portal as gt, insert as Mr } from "solid-js/web";
import { createContext as te, mergeProps as N, createSignal as re, createEffect as me, useContext as Z, splitProps as S, createMemo as ye, onCleanup as fe, createUniqueId as ue, Show as H, children as ot, createRenderEffect as Ws, Switch as Rr, Match as St, onMount as ge, on as ct, For as Wr, Index as Fs } from "solid-js";
import { createStitches as Ns, defaultThemeMap as Vs } from "@stitches/core";
import $r from "lodash.merge";
import { createStore as ae } from "solid-js/store";
import { Transition as Ee, TransitionGroup as qs } from "solid-transition-group";
import { createFocusTrap as Fr } from "focus-trap";
import { autoUpdate as Ht, computePosition as Dt, offset as Et, flip as At, shift as Ot, inline as Nr, arrow as Vr, hide as qr, size as js } from "@floating-ui/dom";
const jr = process.env.NODE_ENV !== "production";
function Ks(e) {
  return typeof e == "number";
}
function dt(e) {
  return Array.isArray(e);
}
function Mt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !dt(e);
}
function de(e) {
  return typeof e == "function";
}
function Kr(e) {
  return e == null;
}
function Xs(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function Ph(e) {
  return typeof e > "u" || e === void 0;
}
function wr() {
}
function Th(e) {
  return e;
}
function Us(e, t) {
  return Mt(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
function oe(e, t) {
  return e && (de(e) ? e(t) : e[0](e[1], t)), t == null ? void 0 : t.defaultPrevented;
}
function he(...e) {
  return function(t) {
    e.some((r) => oe(r, t));
  };
}
function Qs(e) {
  return Array(e).fill(1).map((t, r) => r + 1);
}
const Ys = {
  classList: { add: wr, remove: wr }
}, Xr = () => typeof Storage < "u", Ur = "hope-ui-color-mode", ut = {
  light: "hope-ui-light",
  dark: "hope-ui-dark"
};
function Zs() {
  if (!Xr())
    return null;
  try {
    return localStorage.getItem(Ur);
  } catch (e) {
    return jr && console.log(e), null;
  }
}
function Js(e) {
  if (Xr())
    try {
      localStorage.setItem(Ur, e);
    } catch (t) {
      jr && console.log(t);
    }
}
function Gs(e) {
  const t = Zs();
  return t || (e === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e);
}
function ei(e) {
  return e ? ut.dark : ut.light;
}
function ti(e) {
  const t = Lt ? Ys : document.body;
  t.classList.add(ei(e)), t.classList.remove(e ? ut.light : ut.dark);
}
const Qr = {
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
}, ze = {
  ...Qr,
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
}, ri = {
  desktop_s: `(min-width: ${ze.containerDesktopS})`,
  mobile_s: `(min-width: ${ze.containerMobileS})`,
  mobile_m: `(min-width: ${ze.containerMobileM})`,
  mobile_l: `(min-width: ${ze.containerMobileL})`,
  sm: `(min-width: ${ze.containerSm})`,
  md: `(min-width: ${ze.containerMd})`,
  lg: `(min-width: ${ze.containerLg})`,
  xl: `(min-width: ${ze.containerXl})`,
  "2xl": `(min-width: ${ze.container2xl})`,
  "reduce-motion": "(prefers-reduced-motion: reduce)",
  light: "(prefers-color-scheme: light)",
  dark: "(prefers-color-scheme: dark)"
}, ni = {
  /**
   * The CSS `background` property
   */
  bg: (e) => ({ background: e }),
  /**
   * The CSS `background-color` property
   */
  bgColor: (e) => ({ backgroundColor: e })
}, oi = {
  /**
   * The CSS `border-right` and `border-left` property
   */
  borderX: (e) => ({
    borderLeft: e,
    borderRight: e
  }),
  /**
   * The CSS `border-top` and `border-bottom` property
   */
  borderY: (e) => ({
    borderTop: e,
    borderBottom: e
  })
}, ai = {
  /**
   * The CSS `display` property
   */
  d: (e) => ({ display: e })
}, si = {
  /**
   * The CSS `margin` property
   */
  m: (e) => ({ margin: e }),
  /**
   * The CSS `margin-top` property
   */
  mt: (e) => ({ marginTop: e }),
  /**
   * The CSS `margin-right` property
   */
  mr: (e) => ({ marginRight: e }),
  /**
   * The CSS `margin-inline-start` property
   */
  marginStart: (e) => ({ marginInlineStart: e }),
  /**
   * The CSS `margin-inline-start` property
   */
  ms: (e) => ({ marginInlineStart: e }),
  /**
   * The CSS `margin-bottom` property
   */
  mb: (e) => ({ marginBottom: e }),
  /**
   * The CSS `margin-left`  property
   */
  ml: (e) => ({ marginLeft: e }),
  /**
   * The CSS `margin-inline-end` property
   */
  marginEnd: (e) => ({ marginInlineEnd: e }),
  /**
   * The CSS `margin-inline-end` property
   */
  me: (e) => ({ marginInlineEnd: e }),
  /**
   * The CSS `margin-inline-start` and `margin-inline-end` property
   */
  mx: (e) => ({
    marginInlineStart: e,
    marginInlineEnd: e
  }),
  /**
   * The CSS `margin-top` and `margin-bottom` property
   */
  my: (e) => ({ marginTop: e, marginBottom: e }),
  /**
   * Utility to space items in a horizontal stack
   */
  spaceX: (e) => ({
    "& > * + *": {
      marginLeft: e
    }
  }),
  /**
   * Utility to space items in a vertial stack
   */
  spaceY: (e) => ({
    "& > * + *": {
      marginTop: e
    }
  })
}, ii = {
  /**
   * The CSS `padding` property
   */
  p: (e) => ({ padding: e }),
  /**
   * The CSS `padding-top` property
   */
  pt: (e) => ({ paddingTop: e }),
  /**
   * The CSS `padding-right` property
   */
  pr: (e) => ({ paddingRight: e }),
  /**
   * The CSS `padding-inline-start` property
   */
  paddingStart: (e) => ({ paddingInlineStart: e }),
  /**
   * The CSS `padding-inline-start` property
   */
  ps: (e) => ({ paddingInlineStart: e }),
  /**
   * The CSS `padding-bottom` property
   */
  pb: (e) => ({ paddingBottom: e }),
  /**
   * The CSS `padding-left`  property
   */
  pl: (e) => ({ paddingLeft: e }),
  /**
   * The CSS `padding-inline-end` property
   */
  pe: (e) => ({ paddingInlineEnd: e }),
  /**
   * The CSS `padding-inline-end` property
   */
  paddingEnd: (e) => ({ paddingInlineEnd: e }),
  /**
   * The CSS `padding-inline-start` and `padding-inline-end` property
   */
  px: (e) => ({
    paddingInlineStart: e,
    paddingInlineEnd: e
  }),
  /**
   * The CSS `padding-top` and `padding-bottom` property
   */
  py: (e) => ({ paddingTop: e, paddingBottom: e })
}, li = {
  /**
   * The CSS `position` property
   */
  pos: (e) => ({ position: e })
};
function He(...e) {
  return e.map((t) => `[role=group]${t} &, [data-group]${t} &, .group${t} &`).join(", ");
}
function Te(...e) {
  return e.map((t) => `[data-peer]${t} ~ &, .peer${t} ~ &`).join(", ");
}
const ci = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: (e) => ({
    "&:hover, &[data-hover]": e
  }),
  /**
   * Styles for CSS Selector `&:active`
   */
  _active: (e) => ({
    "&:active, &[data-active]": e
  }),
  /**
   * Styles for CSS selector `&:focus`
   */
  _focus: (e) => ({
    "&:focus, &[data-focus]": e
  }),
  /**
   * Styles for the highlighted state.
   */
  _highlighted: (e) => ({
    "&[data-highlighted]": e
  }),
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: (e) => ({
    "&:focus-within": e
  }),
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  _focusVisible: (e) => ({
    "&:focus-visible": e
  }),
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   */
  _disabled: (e) => ({
    "&[disabled], &[aria-disabled=true], &[data-disabled]": e
  }),
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: (e) => ({
    "&[aria-readonly=true], &[readonly], &[data-readonly]": e
  }),
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: (e) => ({
    "&::before": e
  }),
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: (e) => ({
    "&::after": e
  }),
  /**
   * Styles for CSS selector `&:empty`
   */
  _empty: (e) => ({
    "&:empty": e
  }),
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: (e) => ({
    "&[aria-expanded=true], &[data-expanded]": e
  }),
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: (e) => ({
    "&[aria-checked=true], &[data-checked]": e
  }),
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: (e) => ({
    "&[aria-grabbed=true], &[data-grabbed]": e
  }),
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: (e) => ({
    "&[aria-pressed=true], &[data-pressed]": e
  }),
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: (e) => ({
    "&[aria-invalid=true], &[data-invalid]": e
  }),
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: (e) => ({
    "&[data-valid], &[data-state=valid]": e
  }),
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: (e) => ({
    "&[data-loading], &[aria-busy=true]": e
  }),
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: (e) => ({
    "&[aria-selected=true], &[data-selected]": e
  }),
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: (e) => ({
    "&[hidden], &[data-hidden]": e
  }),
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: (e) => ({
    "&:nth-of-type(even)": e
  }),
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: (e) => ({
    "&:nth-of-type(odd)": e
  }),
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: (e) => ({
    "&:first-of-type": e
  }),
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: (e) => ({
    "&:last-of-type": e
  }),
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: (e) => ({
    "&:not(:first-of-type)": e
  }),
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: (e) => ({
    "&:not(:last-of-type)": e
  }),
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: (e) => ({
    "&:visited": e
  }),
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: (e) => ({
    "&[aria-current=page]": e
  }),
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: (e) => ({
    "&[aria-current=step]": e
  }),
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: (e) => ({
    "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]": e
  }),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  _groupHover: (e) => ({
    [He(":hover", "[data-hover]")]: e
  }),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: (e) => ({
    [Te(":hover", "[data-hover]")]: e
  }),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: (e) => ({
    [He(":focus", "[data-focus]")]: e
  }),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: (e) => ({
    [Te(":focus", "[data-focus]")]: e
  }),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: (e) => ({
    [He(":focus-visible")]: e
  }),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: (e) => ({
    [Te(":focus-visible")]: e
  }),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: (e) => ({
    [He(":active", "[data-active]")]: e
  }),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: (e) => ({
    [Te(":active", "[data-active]")]: e
  }),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is selected
   */
  _groupSelected: (e) => ({
    [He("[aria-selected=true]", "[data-selected]")]: e
  }),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is selected
   */
  _peerSelected: (e) => ({
    [Te("[aria-selected=true]", "[data-selected]")]: e
  }),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: (e) => ({
    [He(":disabled", "[data-disabled]")]: e
  }),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: (e) => ({
    [Te(":disabled", "[data-disabled]")]: e
  }),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: (e) => ({
    [He(":invalid", "[data-invalid]")]: e
  }),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: (e) => ({
    [Te(":invalid", "[data-invalid]")]: e
  }),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: (e) => ({
    [He(":checked", "[data-checked]")]: e
  }),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: (e) => ({
    [Te(":checked", "[data-checked]")]: e
  }),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: (e) => ({
    [He(":focus-within")]: e
  }),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: (e) => ({
    [Te(":focus-within")]: e
  }),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: (e) => ({
    [Te(":placeholder-shown")]: e
  }),
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholder: (e) => ({
    "&::placeholder": e
  }),
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholderShown: (e) => ({
    "&:placeholder-shown": e
  }),
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: (e) => ({
    "&:fullscreen": e
  }),
  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: (e) => ({
    "&::selection": e
  }),
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  _mediaDark: (e) => ({
    "@media (prefers-color-scheme: dark)": e
  }),
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  _mediaReduceMotion: (e) => ({
    "@media (prefers-reduced-motion: reduce)": e
  }),
  /**
   * Styles for when dark theme is applied to any parent of
   * this component or element.
   */
  _dark: (e) => ({
    ".hope-ui-dark &": e
  }),
  /**
   * Styles for when light theme is applied to any parent of
   * this component or element.
   */
  _light: (e) => ({
    ".hope-ui-light &": e
  })
}, di = {
  /**
   * The CSS `border-top-left-radius` and `border-top-right-radius` property
   */
  borderTopRadius: (e) => ({
    borderTopLeftRadius: e,
    borderTopRightRadius: e
  }),
  /**
   * The CSS `border-top-right-radius` and `border-bottom-right-radius` property
   */
  borderRightRadius: (e) => ({
    borderTopRightRadius: e,
    borderBottomRightRadius: e
  }),
  /**
   * The CSS `border-start-start-radius` and `border-end-start-radius` property
   */
  borderStartRadius: (e) => ({
    borderStartStartRadius: e,
    borderEndStartRadius: e
  }),
  /**
   * The CSS `border-bottom-right-radius` and `border-bottom-left-radius` property
   */
  borderBottomRadius: (e) => ({
    borderBottomLeftRadius: e,
    borderBottomRightRadius: e
  }),
  /**
   * The CSS `border-top-left-radius` and `border-bottom-left-radius` property
   */
  borderLeftRadius: (e) => ({
    borderTopLeftRadius: e,
    borderBottomLeftRadius: e
  }),
  /**
   * The CSS `border-start-end-radius` and `border-end-end-radius` property
   */
  borderEndRadius: (e) => ({
    borderStartEndRadius: e,
    borderEndEndRadius: e
  }),
  /**
   * The CSS `border-radius` property
   */
  rounded: (e) => ({
    borderRadius: e
  }),
  /**
   * The CSS `border-top-left-radius` and `border-top-right-radius` property
   */
  roundedTop: (e) => ({
    borderTopLeftRadius: e,
    borderTopRightRadius: e
  }),
  /**
   * The CSS `border-top-right-radius` and `border-bottom-right-radius` property
   */
  roundedRight: (e) => ({
    borderTopRightRadius: e,
    borderBottomRightRadius: e
  }),
  /**
   * The CSS `border-start-start-radius` and `border-end-start-radius` property
   */
  roundedStart: (e) => ({
    borderStartStartRadius: e,
    borderEndStartRadius: e
  }),
  /**
   * The CSS `border-bottom-right-radius` and `border-bottom-left-radius` property
   */
  roundedBottom: (e) => ({
    borderBottomLeftRadius: e,
    borderBottomRightRadius: e
  }),
  /**
   * The CSS `border-top-left-radius` and `border-bottom-left-radius` property
   */
  roundedLeft: (e) => ({
    borderTopLeftRadius: e,
    borderBottomLeftRadius: e
  }),
  /**
   * The CSS `border-start-end-radius` and `border-end-end-radius` property
   */
  roundedEnd: (e) => ({
    borderStartEndRadius: e,
    borderEndEndRadius: e
  })
}, ui = {
  /**
   * The CSS `box-shadow` property
   */
  shadow: (e) => ({ boxShadow: e })
}, gi = {
  /**
   * The CSS `width` property
   */
  w: (e) => ({ width: e }),
  /**
   * The CSS `min-width` property
   */
  minW: (e) => ({ minWidth: e }),
  /**
   * The CSS `max-width` property
   */
  maxW: (e) => ({ maxWidth: e }),
  /**
   * The CSS `height` property
   */
  h: (e) => ({ height: e }),
  /**
   * The CSS `min-height` property
   */
  minH: (e) => ({ minHeight: e }),
  /**
   * The CSS `max-height` property
   */
  maxH: (e) => ({ maxHeight: e }),
  /**
   * The CSS `width` and `height` property
   */
  boxSize: (e) => ({ width: e, height: e })
}, fi = {
  /**
   * Utility to visually truncating text after a fixed number of lines.
   */
  noOfLines: (e) => ({
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": e
  })
}, hi = {
  ...ni,
  ...oi,
  ...ai,
  ...li,
  ...ci,
  ...di,
  ...si,
  ...ii,
  ...ui,
  ...gi,
  ...fi
}, Yr = {
  tooltipContent: "#00000090",
  tooltipArrow: "#00000090"
}, pi = {
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
}, bi = {
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
}, mi = {
  // transparent: "transparent",
  // current: "currentColor",
  // black: "#000000",
  // white: "#ffffff",
  ...pi,
  ...bi
}, vi = {
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
}, Si = {
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
}, xi = {
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
}, Ci = {
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
}, yi = {
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
}, $i = {
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
}, wi = {
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
}, Ii = {
  loContrast: "white",
  background: "$loContrast",
  focusRing: "#96c7f2",
  closeButtonHoverBackground: "$blackAlpha4",
  closeButtonActiveBackground: "$blackAlpha5",
  progressStripe: "$whiteAlpha6"
}, ki = {
  ...Yr,
  ...vi,
  ...Si,
  ...xi,
  ...Ci,
  ...yi,
  ...$i,
  ...wi,
  ...Ii
}, _i = {
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
}, Pi = {
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
}, Ti = {
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
}, zi = {
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
}, Bi = {
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
}, Li = {
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
}, Hi = {
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
}, Di = {
  loContrast: "$neutral1",
  background: "$loContrast",
  focusRing: "#0a4481",
  closeButtonHoverBackground: "$whiteAlpha4",
  closeButtonActiveBackground: "$whiteAlpha5",
  progressStripe: "$blackAlpha6"
}, Ei = {
  ...Yr,
  ..._i,
  ...Pi,
  ...Ti,
  ...zi,
  ...Bi,
  ...Li,
  ...Hi,
  ...Di
}, Ai = {
  none: "0",
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, Oi = {
  none: "0 0 #0000",
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  sm: "0 1px 3px 0 rgb(0 0 0 / 0.09), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.09), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.09), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.09), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.24)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.06)",
  outline: "0 0 0 3px $colors$focusRing"
}, Mi = {
  lg: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
}, Ri = {
  sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol","Noto Color Emoji"',
  serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
}, Wi = {
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
}, Fi = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
}, Ni = {
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
}, Vi = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em"
}, qi = {
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
}, ji = {
  colors: {
    ...mi,
    ...ki
  },
  space: Qr,
  sizes: ze,
  fonts: Ri,
  fontSizes: Wi,
  fontWeights: Fi,
  letterSpacings: Vi,
  lineHeights: Ni,
  radii: Ai,
  shadows: Oi,
  zIndices: qi
}, Ki = {
  colors: Ei,
  shadows: Mi
}, {
  theme: Xi,
  css: C,
  globalCss: We,
  config: zh,
  createTheme: Ui,
  getCssText: Bh,
  keyframes: ft
} = Ns({
  prefix: "hope",
  themeMap: {
    ...Vs,
    borderWidth: "sizes",
    borderTopWidth: "sizes",
    borderRightWidth: "sizes",
    borderBottomWidth: "sizes",
    borderLeftWidth: "sizes",
    strokeWidth: "sizes"
  },
  theme: ji,
  media: ri,
  utils: hi
}), le = {
  fade: "hope-modal-fade-transition",
  fadeInBottom: "hope-modal-fade-in-bottom-transition",
  scale: "hope-modal-scale-transition"
}, Qi = We({
  /* fade */
  [`.${le.fade}-enter, .${le.fade}-exit-to`]: {
    opacity: 0
  },
  [`.${le.fade}-enter-to, .${le.fade}-exit`]: {
    opacity: 1
  },
  [`.${le.fade}-enter-active`]: {
    transition: "opacity 300ms ease-out"
  },
  [`.${le.fade}-exit-active`]: {
    transition: "opacity 200ms ease-in"
  },
  /* fade-in-bottom */
  [`.${le.fadeInBottom}-enter, .${le.fadeInBottom}-exit-to`]: {
    opacity: 0,
    transform: "translateY(16px)"
  },
  [`.${le.fadeInBottom}-enter-to, .${le.fadeInBottom}-exit`]: {
    opacity: 1,
    transform: "translateY(0)"
  },
  [`.${le.fadeInBottom}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-out"
  },
  [`.${le.fadeInBottom}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-in"
  },
  /* scale */
  [`.${le.scale}-enter, .${le.scale}-exit-to`]: {
    opacity: 0,
    transform: "scale(0.95)"
  },
  [`.${le.scale}-enter-to, .${le.scale}-exit`]: {
    opacity: 1,
    transform: "scale(1)"
  },
  [`.${le.scale}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-out"
  },
  [`.${le.scale}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-in"
  }
}), Zr = C({
  zIndex: "$overlay",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "hsl(0 0% 0% / 65%)"
  //"$blackAlpha11",
}), Jr = C({
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
}), Yi = C(Jr, {
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
}), Gr = C({
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
}), Zi = C(Gr, {
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
}), Ji = C({
  flex: 0,
  pt: "$5",
  px: "$5",
  pb: "$3",
  fontSize: "$lg",
  fontWeight: "$medium"
}), Gi = C({
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
}), el = C({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  pt: "$3",
  px: "$5",
  pb: "$5"
}), tl = C({
  position: "absolute",
  top: "$4",
  insetInlineEnd: "$4"
}), q = {
  fade: "hope-drawer-fade-transition",
  slideInTop: "hope-drawer-slide-in-top-transition",
  slideInRight: "hope-drawer-slide-in-right-transition",
  slideInBottom: "hope-drawer-slide-in-bottom-transition",
  slideInLeft: "hope-drawer-slide-in-left-transition"
}, rl = We({
  /* fade */
  [`.${q.fade}-enter, .${q.fade}-exit-to`]: {
    opacity: 0
  },
  [`.${q.fade}-enter-to, .${q.fade}-exit`]: {
    opacity: 1
  },
  [`.${q.fade}-enter-active, .${q.fade}-exit-active`]: {
    transition: "opacity 500ms ease-in-out"
  },
  /* slide common */
  [`.${q.slideInTop}-enter-active, .${q.slideInTop}-exit-active,
    .${q.slideInRight}-enter-active, .${q.slideInRight}-exit-active,
    .${q.slideInBottom}-enter-active, .${q.slideInBottom}-exit-active,
    .${q.slideInLeft}-enter-active, .${q.slideInLeft}-exit-active`]: {
    transition: "transform 500ms ease-in-out"
  },
  /* slide-in-top */
  [`.${q.slideInTop}-enter, .${q.slideInTop}-exit-to`]: {
    transform: "translateY(-100%)"
  },
  [`.${q.slideInTop}-enter-to, .${q.slideInTop}-exit`]: {
    transform: "translateY(0)"
  },
  /* slide-in-right */
  [`.${q.slideInRight}-enter, .${q.slideInRight}-exit-to`]: {
    transform: "translateX(100%)"
  },
  [`.${q.slideInRight}-enter-to, .${q.slideInRight}-exit`]: {
    transform: "translateX(0)"
  },
  /* slide-in-bottom */
  [`.${q.slideInBottom}-enter, .${q.slideInBottom}-exit-to`]: {
    transform: "translateY(100%)"
  },
  [`.${q.slideInBottom}-enter-to, .${q.slideInBottom}-exit`]: {
    transform: "translateY(0)"
  },
  /* slide-in-left */
  [`.${q.slideInLeft}-enter, .${q.slideInLeft}-exit-to`]: {
    transform: "translateX(-100%)"
  },
  [`.${q.slideInLeft}-enter-to, .${q.slideInLeft}-exit`]: {
    transform: "translateX(0)"
  }
}), nl = C(Jr, {
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
}), ol = C(Gr, {
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
    /* -------------------------------------------------------------------------------------------------
     * Placement - top + size
     * -----------------------------------------------------------------------------------------------*/
    { placement: "top", size: "xs", css: { maxWidth: "100vw" } },
    { placement: "top", size: "sm", css: { maxWidth: "100vw" } },
    { placement: "top", size: "md", css: { maxWidth: "100vw" } },
    { placement: "top", size: "lg", css: { maxWidth: "100vw" } },
    { placement: "top", size: "xl", css: { maxWidth: "100vw" } },
    /* -------------------------------------------------------------------------------------------------
     * Placement - bottom + size
     * -----------------------------------------------------------------------------------------------*/
    { placement: "bottom", size: "xs", css: { maxWidth: "100vw" } },
    { placement: "bottom", size: "sm", css: { maxWidth: "100vw" } },
    { placement: "bottom", size: "md", css: { maxWidth: "100vw" } },
    { placement: "bottom", size: "lg", css: { maxWidth: "100vw" } },
    { placement: "bottom", size: "xl", css: { maxWidth: "100vw" } }
  ]
}), Re = {
  scaleTopLeft: "hope-menu-scale-top-left-transition",
  scaleTopRight: "hope-menu-scale-top-right-transition",
  scaleBottomLeft: "hope-menu-scale-bottom-left-transition",
  scaleBottomRight: "hope-menu-scale-bottom-right-transition"
};
function $t(e, t) {
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
const al = We({
  ...$t(Re.scaleTopLeft, "top left"),
  ...$t(Re.scaleTopRight, "top right"),
  ...$t(Re.scaleBottomLeft, "bottom left"),
  ...$t(Re.scaleBottomRight, "bottom right")
}), sl = C({
  appearance: "none",
  display: "inline-flex",
  alignItems: "center",
  outline: "none"
}), il = C({
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
}), ll = C({}), cl = C({
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
function Ne(e) {
  return {
    color: e.color,
    "&[data-active]": {
      backgroundColor: e.bgColorActive
    }
  };
}
const dl = C({
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
      primary: Ne({ color: "$primary11", bgColorActive: "$primary3" }),
      accent: Ne({ color: "$accent11", bgColorActive: "$accent3" }),
      neutral: Ne({ color: "$neutral12", bgColorActive: "$neutral4" }),
      success: Ne({ color: "$success11", bgColorActive: "$success3" }),
      info: Ne({ color: "$info11", bgColorActive: "$info3" }),
      warning: Ne({ color: "$warning11", bgColorActive: "$warning3" }),
      danger: Ne({ color: "$danger11", bgColorActive: "$danger3" })
    }
  },
  defaultVariants: {
    colorScheme: "neutral"
  }
}), ul = C({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}), gl = C({
  flexGrow: 1
}), fl = C({
  flexShrink: 0,
  color: "$neutral11",
  fontSize: "$sm",
  lineHeight: "$none"
}), Rt = ft({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
}), hl = ft({
  from: { opacity: 0 },
  to: { opacity: 1 }
}), ke = {
  slideInTop: "hope-notification-slide-in-top-transition",
  slideInRight: "hope-notification-slide-in-right-transition",
  slideInBottom: "hope-notification-slide-in-bottom-transition",
  slideInLeft: "hope-notification-slide-in-left-transition"
};
function wt(e) {
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
const pl = We({
  ...wt({
    name: ke.slideInTop,
    enterTransform: "translateY(-100%)",
    leaveTransform: "translateY(0)"
  }),
  ...wt({
    name: ke.slideInRight,
    enterTransform: "translateX(100%)",
    leaveTransform: "translateX(0)"
  }),
  ...wt({
    name: ke.slideInBottom,
    enterTransform: "translateY(100%)",
    leaveTransform: "translateY(0)"
  }),
  ...wt({
    name: ke.slideInLeft,
    enterTransform: "translateX(-100%)",
    leaveTransform: "translateX(0)"
  })
}), bl = C({
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
}), ml = C({
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
}), vl = C({
  animation: `1s linear infinite ${Rt}`
}), Sl = C({
  flexShrink: 0,
  variants: {
    status: {
      success: { color: "$success9" },
      info: { color: "$info9" },
      warning: { color: "$warning9" },
      danger: { color: "$danger9" }
    }
  }
}), xl = C({
  fontWeight: "$medium"
}), Cl = C({
  display: "inline-block",
  color: "$neutral11"
}), Je = {
  scale: "hope-popover-scale-transition"
}, yl = We({
  /* scale */
  [`.${Je.scale}-enter, .${Je.scale}-exit-to`]: {
    opacity: 0,
    transform: "scale(0.95)"
  },
  [`.${Je.scale}-enter-to, .${Je.scale}-exit`]: {
    opacity: 1,
    transform: "scale(1)"
  },
  [`.${Je.scale}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease"
  },
  [`.${Je.scale}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-in-out"
  }
}), $l = C({
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
    //boxShadow: "$outline",
  }
}), wl = C({
  display: "flex",
  alignItems: "center",
  flex: 0,
  borderColor: "inherit",
  borderBottomWidth: "1px",
  px: "$3",
  py: "$2",
  fontSize: "$base",
  fontWeight: "$medium"
}), Il = C({
  flex: 1,
  px: "$3",
  py: "$2"
}), kl = C({
  display: "flex",
  alignItems: "center",
  borderColor: "inherit",
  borderTopWidth: "1px",
  px: "$3",
  py: "$2"
}), _l = C({
  position: "absolute",
  top: "$2",
  insetInlineEnd: "$2"
}), Pl = C({
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
function It(e) {
  return {
    minHeight: e.minHeight,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight
  };
}
const Le = {
  xs: It({ fontSize: "$xs", lineHeight: "$4", minHeight: "$6" }),
  sm: It({ fontSize: "$sm", lineHeight: "$5", minHeight: "$8" }),
  md: It({ fontSize: "$base", lineHeight: "$6", minHeight: "$10" }),
  lg: It({ fontSize: "$lg", lineHeight: "$7", minHeight: "$12" })
}, Ir = {
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
}, sr = C({
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
        ...Ir
      },
      filled: {
        border: "1px solid transparent",
        backgroundColor: "$neutral3",
        "&:hover, &:focus": {
          backgroundColor: "$neutral4"
        },
        ...Ir
      },
      unstyled: {
        border: "1px solid transparent",
        backgroundColor: "transparent"
      }
    },
    size: {
      ...Le
    }
  }
});
function $e(e) {
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
const Tl = C(sr, {
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
    /* -------------------------------------------------------------------------------------------------
     * Variant - outline + size
     * -----------------------------------------------------------------------------------------------*/
    ...$e({
      variant: "outline",
      size: "xs",
      paddingX: "$2",
      paddingWithElement: "$6"
    }),
    ...$e({
      variant: "outline",
      size: "sm",
      paddingX: "$2_5",
      paddingWithElement: "$8"
    }),
    ...$e({
      variant: "outline",
      size: "md",
      paddingX: "$3",
      paddingWithElement: "$10"
    }),
    ...$e({
      variant: "outline",
      size: "lg",
      paddingX: "$4",
      paddingWithElement: "$12"
    }),
    /* -------------------------------------------------------------------------------------------------
     * Variant - filled + size
     * -----------------------------------------------------------------------------------------------*/
    ...$e({
      variant: "filled",
      size: "xs",
      paddingX: "$2",
      paddingWithElement: "$6"
    }),
    ...$e({
      variant: "filled",
      size: "sm",
      paddingX: "$2_5",
      paddingWithElement: "$8"
    }),
    ...$e({
      variant: "filled",
      size: "md",
      paddingX: "$3",
      paddingWithElement: "$10"
    }),
    ...$e({
      variant: "filled",
      size: "lg",
      paddingX: "$4",
      paddingWithElement: "$12"
    }),
    /* -------------------------------------------------------------------------------------------------
     * Variant - unstyled + size
     * -----------------------------------------------------------------------------------------------*/
    ...$e({
      variant: "unstyled",
      size: "xs",
      paddingX: 0,
      paddingWithElement: "$6"
    }),
    ...$e({
      variant: "unstyled",
      size: "sm",
      paddingX: 0,
      paddingWithElement: "$8"
    }),
    ...$e({
      variant: "unstyled",
      size: "md",
      paddingX: 0,
      paddingWithElement: "$10"
    }),
    ...$e({
      variant: "unstyled",
      size: "lg",
      paddingX: 0,
      paddingWithElement: "$12"
    })
  ]
}), zl = C({
  position: "relative",
  display: "flex",
  width: "100%"
}), Bl = C({
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
        ...Le.xs,
        width: Le.xs.minHeight
      },
      sm: {
        ...Le.sm,
        width: Le.sm.minHeight
      },
      md: {
        ...Le.md,
        width: Le.md.minHeight
      },
      lg: {
        ...Le.lg,
        width: Le.lg.minHeight
      }
    }
  }
});
function we(e) {
  return {
    variant: e.variant,
    size: e.size,
    css: { px: e.paddingX }
  };
}
const Ll = C({
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
      ...Le
    }
  },
  compoundVariants: [
    /* -------------------------------------------------------------------------------------------------
     * Variant - outline + placement
     * -----------------------------------------------------------------------------------------------*/
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
    /* -------------------------------------------------------------------------------------------------
     * Variant - filled + placement
     * -----------------------------------------------------------------------------------------------*/
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
    /* -------------------------------------------------------------------------------------------------
     * Variant - outline + size
     * -----------------------------------------------------------------------------------------------*/
    we({
      variant: "outline",
      size: "xs",
      paddingX: "$2"
    }),
    we({
      variant: "outline",
      size: "sm",
      paddingX: "$2_5"
    }),
    we({
      variant: "outline",
      size: "md",
      paddingX: "$3"
    }),
    we({
      variant: "outline",
      size: "lg",
      paddingX: "$4"
    }),
    /* -------------------------------------------------------------------------------------------------
     * Variant - filled + size
     * -----------------------------------------------------------------------------------------------*/
    we({
      variant: "filled",
      size: "xs",
      paddingX: "$2"
    }),
    we({
      variant: "filled",
      size: "sm",
      paddingX: "$2_5"
    }),
    we({
      variant: "filled",
      size: "md",
      paddingX: "$3"
    }),
    we({
      variant: "filled",
      size: "lg",
      paddingX: "$4"
    }),
    /* -------------------------------------------------------------------------------------------------
     * Variant - unstyled + size
     * -----------------------------------------------------------------------------------------------*/
    we({
      variant: "unstyled",
      size: "xs",
      paddingX: 0
    }),
    we({
      variant: "unstyled",
      size: "sm",
      paddingX: 0
    }),
    we({
      variant: "unstyled",
      size: "md",
      paddingX: 0
    }),
    we({
      variant: "unstyled",
      size: "lg",
      paddingX: 0
    })
  ]
}), Ge = {
  fadeInTop: "hope-select-fade-in-top-transition"
}, Hl = We({
  /* fade-in-top */
  [`.${Ge.fadeInTop}-enter, .${Ge.fadeInTop}-exit-to`]: {
    opacity: 0,
    transform: "translateY(-16px)"
  },
  [`.${Ge.fadeInTop}-enter-to, .${Ge.fadeInTop}-exit`]: {
    opacity: 1,
    transform: "translateY(0)"
  },
  [`.${Ge.fadeInTop}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-out"
  },
  [`.${Ge.fadeInTop}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "100ms",
    transitionTimingFunction: "ease-in"
  }
});
function Ut(e, t, r) {
  return Object.entries({
    xs: {
      start: t ?? "$2",
      end: r ?? "$1"
    },
    sm: {
      start: t ?? "$2_5",
      end: r ?? "$1_5"
    },
    md: {
      start: t ?? "$3",
      end: r ?? "$2"
    },
    lg: {
      start: t ?? "$4",
      end: r ?? "$3"
    }
  }).map(([n, a]) => ({
    variant: e,
    size: n,
    css: {
      paddingInlineStart: a.start,
      paddingInlineEnd: a.end
    }
  }));
}
const Dl = C(sr, {
  appearance: "none",
  display: "inline-flex",
  alignItems: "center",
  outline: "none",
  cursor: "pointer",
  "&:focus": {
    outline: "none"
  },
  compoundVariants: [
    ...Ut("outline"),
    ...Ut("filled"),
    ...Ut("unstyled", 0, 0)
  ]
}), en = C({
  flexGrow: 1,
  flexShrink: 1,
  textAlign: "start",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}), El = C({
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
}), Al = C({
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
}), Ol = C({
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
}), Ml = C(en, {
  color: "$neutral9",
  opacity: 1
}), Rl = C({
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
}), Wl = C({
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
}), Fl = C({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  maxHeight: "$60",
  width: "100%",
  overflowY: "auto",
  margin: 0,
  padding: "$1",
  //0,
  listStyle: "none"
}), Nl = C({}), Vl = C({
  display: "flex",
  alignItems: "center",
  py: "$2",
  px: "$3",
  color: "$neutral11",
  fontSize: "$xs",
  lineHeight: "$4"
}), ql = C({
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
  "&[data-active]": {
    backgroundColor: "$neutral4"
  }
}), jl = C({
  display: "inline-flex",
  alignItems: "center",
  py: "$2",
  paddingInlineStart: "$3",
  paddingInlineEnd: "$6"
}), Kl = C({
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  paddingInlineEnd: "$3",
  color: "$primary10",
  pointerEvents: "none"
}), et = {
  scale: "hope-tooltip-scale-transition"
}, Xl = We({
  /* scale */
  [`.${et.scale}-enter, .${et.scale}-exit-to`]: {
    opacity: 0,
    transform: "scale(0.90)"
  },
  [`.${et.scale}-enter-to, .${et.scale}-exit`]: {
    opacity: 1,
    transform: "scale(1)"
  },
  [`.${et.scale}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease"
  },
  [`.${et.scale}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "150ms",
    transitionTimingFunction: "ease-in-out"
  }
}), Ul = C({
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
}), Ql = C({
  zIndex: "$tooltip",
  position: "absolute",
  boxSize: "8px",
  backgroundColor: "inherit",
  transform: "rotate(45deg)"
}), Yl = We({
  /*
    1. Use a more-intuitive box-sizing model.
    2. Set default border width and style to apply border props easily.
  */
  "*, ::before, ::after": {
    boxSizing: "border-box",
    borderWidth: "0",
    borderStyle: "solid"
  },
  /* Remove default margin. */
  "*": {
    margin: 0
  },
  /* Allow percentage-based heights in the application. */
  "html, body": {
    height: "100%"
  },
  /*
    1. Use theme `sans` font-family.
    2. Use theme `base` line height.
  */
  html: {
    fontFamily: "$sans",
    lineHeight: "$base",
    fontSize: "16px"
  },
  /*
    1. Use theme `background` color for background-color.
    2. Use theme `neutral` color for text.
    3. Improve text rendering.
  */
  body: {
    backgroundColor: "$background",
    color: "$neutral12",
    fontFamily: "inherit",
    lineHeight: "inherit",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale"
  },
  /* Headings are unstyled. */
  "h1, h2, h3, h4, h5, h6": {
    fontSize: "inherit",
    fontWeight: "inherit"
  },
  /* Avoid text overflows. */
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word"
  },
  /* Improve media defaults. */
  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%"
  },
  /* Remove built-in form typography styles. */
  "button, input, textarea, select, optgroup": {
    fontFamily: "inherit",
    fontSize: "100%"
  },
  /* Buttons have a default outline. */
  "button:focus": {
    outline: "5px auto -webkit-focus-ring-color"
  },
  /* fieldset have no margin and padding. */
  fieldset: {
    margin: 0,
    padding: 0
  },
  /* List have no margin and padding. */
  "ol, ul": {
    margin: 0,
    padding: 0
  },
  /* Anchor are unstyled. */
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
    // @ts-ignore
    "--tw-enter-opacity": "0.5",
    // @ts-ignore
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
    // @ts-ignore
    "--tw-exit-opacity": "0.5",
    // @ts-ignore
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
function kr(e, t, r) {
  Object.entries(e).forEach(([n, a]) => {
    if (Mt(a))
      if (n in r) {
        const o = n;
        r[o] = {
          ...r[o],
          ...a
        };
      } else
        t[n] = {
          ...t[n],
          ...a
        };
    else
      t[n] = a;
  });
}
function Zl(e, t) {
  const r = {}, n = {
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
    (a) => a && kr(a, r, n)
  ), Object.entries(e).forEach(([a, o]) => {
    o != null && a !== "css" && (a.startsWith("_") ? r[a] = o : Mt(o) ? Object.keys(o).forEach((s) => {
      if (s === "@initial")
        r[a] = o[s];
      else if (s in n) {
        const l = s;
        n[l] = {
          ...n[l],
          [a]: o[l]
        };
      }
    }) : r[a] = o);
  }), e.css && kr(e.css, r, n), { ...r, ...n };
}
function _r(e, t) {
  const r = e === "dark", n = r ? ut.dark : ut.light, a = r ? $r({}, Ki, t) : t, o = Ui(n, a);
  return $r({}, Xi, o);
}
function ir(e, t) {
  return Mt(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
function Pr(e) {
  return e.startsWith("$") ? `var(--hope-colors-${e.substring(1)})` : e;
}
const Wt = C({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0"
}), Ft = te();
function Jl() {
  rl(), al(), Qi(), pl(), yl(), Hl(), Xl();
}
function Lh(e) {
  var b, P, h, x;
  e = N({
    enableCssReset: !0
  }, e);
  const r = _r("light", ((b = e.config) == null ? void 0 : b.lightTheme) ?? {}), n = _r("dark", ((P = e.config) == null ? void 0 : P.darkTheme) ?? {}), a = Gs(((h = e.config) == null ? void 0 : h.initialColorMode) ?? "light"), o = a === "dark" ? n : r, [s, l] = re(a), [c, u] = re(o), f = () => s() === "dark", d = (z) => {
    l(z), Js(z);
  }, g = () => {
    d(f() ? "light" : "dark");
  }, y = {
    components: ((x = e.config) == null ? void 0 : x.components) ?? {},
    theme: c,
    colorMode: s,
    setColorMode: d,
    toggleColorMode: g
  };
  return me(() => {
    u(f() ? n : r), ti(f());
  }), e.enableCssReset && Yl(), Jl(), i(Ft.Provider, {
    value: y,
    get children() {
      return e.children;
    }
  });
}
function Hh() {
  const e = Z(Ft);
  if (!e)
    throw new Error("[Hope UI]: useTheme must be used within a HopeProvider");
  return e.theme;
}
function w() {
  const e = Z(Ft);
  if (!e)
    throw new Error("[Hope UI]: useStyleConfig must be used within a HopeProvider");
  return e.components;
}
function Gl() {
  const e = Z(Ft);
  if (!e)
    throw new Error("[Hope UI]: useColorMode must be used within a HopeProvider");
  return {
    colorMode: e.colorMode,
    setColorMode: e.setColorMode,
    toggleColorMode: e.toggleColorMode
  };
}
function Dh(e, t) {
  const {
    colorMode: r
  } = Gl();
  return () => r() === "dark" ? t : e;
}
function $(e) {
  return `.${e}`;
}
function m(...e) {
  return e.filter(Boolean).join(" ");
}
function tn(e, t, r) {
  return (e - t) * 100 / (r - t);
}
function _t(e, t, r) {
  let n = e + 1;
  return n > t && (n = r ? 0 : t), n;
}
function Pt(e, t, r) {
  let n = e - 1;
  return n < 0 && (n = r ? t : 0), n;
}
const ec = {
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
}, tc = {
  color: !0,
  background: !0,
  bg: !0,
  backgroundColor: !0,
  bgColor: !0,
  opacity: !0
}, rc = { css: !0 }, nc = {
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
}, oc = {
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
}, ac = {
  appearance: !0,
  userSelect: !0,
  pointerEvents: !0,
  resize: !0,
  cursor: !0,
  outline: !0,
  outlineOffset: !0,
  outlineColor: !0
}, sc = {
  display: !0,
  d: !0,
  verticalAlign: !0,
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  objectFit: !0,
  objectPosition: !0
}, ic = {
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
}, lc = {
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
}, cc = {
  position: !0,
  pos: !0,
  zIndex: !0,
  top: !0,
  right: !0,
  bottom: !0,
  left: !0
}, dc = {
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
}, uc = {
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
}, gc = {
  textShadow: !0,
  boxShadow: !0,
  shadow: !0
}, fc = {
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
}, hc = {
  transform: !0,
  transformOrigin: !0,
  clipPath: !0
}, pc = {
  transition: !0,
  transitionProperty: !0,
  transitionTimingFunction: !0,
  transitionDuration: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0
}, bc = {
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
}, mc = {
  ...ec,
  ...tc,
  ...nc,
  ...oc,
  ...ac,
  ...sc,
  ...ic,
  ...lc,
  ...cc,
  ...uc,
  ...gc,
  ...fc,
  ...hc,
  ...pc,
  ...bc,
  ...dc,
  ...rc
}, vc = C({});
function Sc(e, t) {
  return vc({ css: Zl(e, t) });
}
function xc(e) {
  return Object.keys(e).filter((t) => t in mc);
}
const Qt = (e, t) => {
  const r = (n) => {
    const a = xc(n), o = N({
      as: e
    }, n), [s, l, c] = S(o, ["as", "class", "className", "__baseStyle"], a), u = ye(() => [de(t == null ? void 0 : t.baseStyle) ? t == null ? void 0 : t.baseStyle(n) : t == null ? void 0 : t.baseStyle, s.__baseStyle]), f = () => m(
      t == null ? void 0 : t.baseClass,
      // In order to target the component in stitches css method and prop, like any other Hope UI components.
      s.class,
      s.className,
      Sc(l, u())
    );
    return i(Or, p({
      get component() {
        return s.as ?? "div";
      },
      get class() {
        return f();
      }
    }, c));
  };
  return r.toString = () => t != null && t.baseClass ? $(t.baseClass) : "", r;
};
function Cc() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Qt, {
    /**
     * @example
     * const Div = hope("div")
     * const WithHope = hope(AnotherComponent)
     */
    apply(t, r, n) {
      return Qt(...n);
    },
    /**
     * @example
     * <hope.div />
     */
    get(t, r) {
      return e.has(r) || e.set(r, Qt(r)), e.get(r);
    }
  });
}
const A = Cc(), B = A.div, rn = "hope-accordion";
function yc(e) {
  const t = w().Accordion, [r, n] = re([]), [a, o] = ae({
    // eslint-disable-next-line solid/reactivity
    _expandedIndex: e.defaultIndex ?? (e.allowMultiple ? [] : -1),
    focusedIndex: -1,
    //buttons: [],
    get isControlled() {
      return e.index !== void 0;
    },
    get expandedIndex() {
      return this.isControlled ? e.index : this._expandedIndex;
    }
  }), [s, l] = S(e, ["class", "allowMultiple", "index", "defaultIndex", "onChange"]), c = ye(() => r().slice().reverse()), u = (v) => {
    o("focusedIndex", v);
  }, f = (v, D) => {
    var R;
    let _ = -1;
    s.allowMultiple && dt(a.expandedIndex) ? _ = D ? [...a.expandedIndex, v] : a.expandedIndex.filter((j) => j !== v) : D ? _ = v : _ = -1, o("_expandedIndex", _), (R = s.onChange) == null || R.call(s, _);
  }, d = (v) => dt(a.expandedIndex) ? a.expandedIndex.includes(v) : a.expandedIndex === v, g = (v) => n((D) => [...D, v]).length - 1, y = () => {
    const v = r().length - 1;
    let D = _t(a.focusedIndex, v, !0), _ = r()[D];
    for (; _.disabled; )
      D = _t(D, v, !0), _ = r()[D];
    _.focus();
  }, b = () => {
    const v = r().length - 1;
    let D = Pt(a.focusedIndex, v, !0), _ = r()[D];
    for (; _.disabled; )
      D = Pt(D, v, !0), _ = r()[D];
    _.focus();
  }, P = () => {
    var v;
    (v = r().find((D) => !D.disabled)) == null || v.focus();
  }, h = () => {
    var v;
    (v = c().find((D) => !D.disabled)) == null || v.focus();
  }, x = () => m(s.class, rn);
  fe(() => {
    u(-1);
  });
  const z = {
    state: a,
    setFocusedIndex: u,
    setExpandedIndex: f,
    isExpandedIndex: d,
    registerAccordionButton: g,
    focusNextAccordionButton: y,
    focusPrevAccordionButton: b,
    focusFirstAccordionButton: P,
    focusLastAccordionButton: h
  };
  return i(nn.Provider, {
    value: z,
    get children() {
      return i(B, p({
        get class() {
          return x();
        },
        get __baseStyle() {
          var v;
          return (v = t == null ? void 0 : t.baseStyle) == null ? void 0 : v.root;
        }
      }, l));
    }
  });
}
yc.toString = () => $(rn);
const nn = te();
function $c() {
  const e = Z(nn);
  if (!e)
    throw new Error("[Hope UI]: useAccordionContext must be used within a `<Accordion />` component");
  return e;
}
const wc = C({
  borderTopWidth: "1px",
  borderColor: "$neutral7",
  overflowAnchor: "none",
  "&:last-of-type": {
    borderBottomWidth: "1px"
  }
}), Ic = C({
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
}), kc = C({
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
}), _c = C({
  pt: "$2",
  px: "$4",
  pb: "$4"
});
function on(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function Pc(e) {
  if (!on(e))
    return !1;
  const t = e.ownerDocument.defaultView ?? window;
  return e instanceof t.HTMLElement;
}
function Tt(e) {
  return on(e) ? e.ownerDocument ?? document : document;
}
function Yt(e, t) {
  const r = e.target;
  return e.button > 0 || r && !Tt(r).body.contains(r) ? !1 : !(t != null && t.contains(r));
}
function an(e) {
  const { key: t, keyCode: r } = e;
  return r >= 37 && r <= 40 && t.indexOf("Arrow") !== 0 ? `Arrow${t}` : t;
}
function Tc(e) {
  const t = Tt(e);
  return t == null ? void 0 : t.activeElement;
}
function tt(e, t) {
  return e ? e === t || e.contains(t) : !1;
}
function zt(e) {
  const t = e.target ?? e.currentTarget, r = Tc(t);
  return e.relatedTarget ?? r;
}
function sn(e) {
  return e && e.clientHeight < e.scrollHeight;
}
function ln(e, t) {
  const { offsetHeight: r, offsetTop: n } = e, { offsetHeight: a, scrollTop: o } = t, s = n < o, l = n + r > o + a;
  s ? t.scrollTo(0, n) : l && t.scrollTo(0, n - a + r);
}
function Ct(e) {
  const t = Object.getOwnPropertyDescriptor(e, "children");
  return t == null ? !1 : de(t.value);
}
const cn = "hope-accordion__item";
function zc(e) {
  const t = `hope-accordion-item-${ue()}`, r = w().Accordion, n = $c(), [a, o] = ae({
    index: -1,
    get buttonId() {
      return `${t}-button`;
    },
    get panelId() {
      return `${t}-panel`;
    },
    get expanded() {
      return n.isExpandedIndex(this.index);
    },
    get disabled() {
      return e.disabled ?? !1;
    }
  }), [s, l] = S(e, ["class", "children"]), c = (x) => {
    const z = n.registerAccordionButton(x);
    o("index", z);
  }, u = () => {
    n.setFocusedIndex(a.index);
  }, f = () => {
    n.setExpandedIndex(a.index, !a.expanded);
  }, d = ye(() => ({
    ArrowDown: n.focusNextAccordionButton,
    ArrowUp: n.focusPrevAccordionButton,
    Home: n.focusFirstAccordionButton,
    End: n.focusLastAccordionButton
  })), g = (x) => {
    const z = an(x), v = d()[z];
    v && (x.preventDefault(), oe(v, x));
  }, y = () => a.expanded, b = () => a.disabled, P = () => m(s.class, cn, wc()), h = {
    state: a,
    registerButton: c,
    setFocusedIndex: u,
    toggleExpandedState: f,
    onButtonKeyDown: g
  };
  return i(dn.Provider, {
    value: h,
    get children() {
      return i(B, p({
        get class() {
          return P();
        },
        get __baseStyle() {
          var x;
          return (x = r == null ? void 0 : r.baseStyle) == null ? void 0 : x.item;
        }
      }, l, {
        get children() {
          return i(H, {
            get when() {
              return Ct(s);
            },
            get fallback() {
              return s.children;
            },
            get children() {
              var x;
              return (x = s.children) == null ? void 0 : x.call(s, {
                expanded: y,
                disabled: b
              });
            }
          });
        }
      }));
    }
  });
}
zc.toString = () => $(cn);
const dn = te();
function lr() {
  const e = Z(dn);
  if (!e)
    throw new Error("[Hope UI]: useAccordionItemContext must be used within a `<AccordionItem />` component");
  return e;
}
const un = "hope-accordion__button";
function Bc(e) {
  const t = w().Accordion, r = lr(), [n, a] = S(e, ["ref", "class", "disabled", "onClick", "onFocus", "onKeyDown"]), o = (f) => {
    r.registerButton(f), de(n.ref) ? n.ref(f) : n.ref = f;
  }, s = (f) => {
    oe(n.onClick, f), r.toggleExpandedState();
  }, l = (f) => {
    oe(n.onFocus, f), r.setFocusedIndex();
  }, c = (f) => {
    he(n.onKeyDown, r.onButtonKeyDown)(f);
  }, u = () => m(n.class, un, Ic());
  return i(A.button, p({
    role: "button",
    type: "button",
    ref: o,
    get id() {
      return r.state.buttonId;
    },
    get "aria-controls"() {
      return r.state.panelId;
    },
    get "aria-expanded"() {
      return r.state.expanded;
    },
    get disabled() {
      return r.state.disabled;
    },
    get class() {
      return u();
    },
    get __baseStyle() {
      var f;
      return (f = t == null ? void 0 : t.baseStyle) == null ? void 0 : f.button;
    },
    onClick: s,
    onFocus: l,
    onKeyDown: c
  }, a));
}
Bc.toString = () => $(un);
const Lc = C({
  display: "inline-block",
  flexShrink: 0,
  boxSize: "1em",
  color: "currentColor",
  lineHeight: "1em",
  verticalAlign: "middle"
});
var Hc = /* @__PURE__ */ se('<svg><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></svg>', !1, !0);
const Tr = {
  viewBox: "0 0 24 24",
  path: () => Hc()
}, cr = "hope-icon";
function at(e) {
  const t = {
    viewBox: Tr.viewBox
  }, r = N(t, e), [n, a] = S(r, ["as", "class", "children", "viewBox"]), o = () => m(n.class, cr, Lc()), s = () => n.as && !Xs(n.as);
  return i(H, {
    get when() {
      return s();
    },
    get fallback() {
      return i(A.svg, p({
        get class() {
          return o();
        },
        get viewBox() {
          return n.viewBox;
        }
      }, a, {
        get children() {
          return i(H, {
            get when() {
              return n.children;
            },
            get fallback() {
              return Tr.path();
            },
            get children() {
              return n.children;
            }
          });
        }
      }));
    },
    get children() {
      return i(B, p({
        get as() {
          return n.as;
        },
        get class() {
          return o();
        }
      }, a));
    }
  });
}
at.toString = () => $(cr);
function Ie(e) {
  const {
    viewBox: t = "0 0 24 24",
    defaultProps: r = {}
  } = e, n = (a) => i(at, p({
    viewBox: t
  }, r, a, {
    get children() {
      return e.path;
    }
  }));
  return n.toString = () => $(cr), n;
}
var Dc = /* @__PURE__ */ se('<svg><path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"fill=currentColor fill-rule=evenodd clip-rule=evenodd></svg>', !1, !0);
const Ec = Ie({
  viewBox: "0 0 15 15",
  path: () => Dc()
}), gn = "hope-accordion__icon";
function Ac(e) {
  const t = w().Accordion, r = lr(), [n, a] = S(e, ["class"]), o = () => m(n.class, gn, kc({
    expanded: r.state.expanded,
    disabled: r.state.disabled
  }));
  return i(Ec, p({
    "aria-hidden": !0,
    get class() {
      return o();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.icon;
    }
  }, a));
}
Ac.toString = () => $(gn);
const Oc = C({
  overflow: "hidden"
}), fn = "hope-collapse";
function hn(e) {
  const r = N({
    animateOpacity: !0,
    expandDuration: 300,
    expandTimingFunction: "ease",
    collapseDuration: 300,
    collapseTimingFunction: "ease",
    keepAlive: !0
  }, e), [n, a] = S(r, ["class", "children", "expanded", "animateOpacity", "expandDuration", "expandTimingFunction", "collapseDuration", "collapseTimingFunction", "keepAlive"]), o = ot(() => n.children), s = () => m(n.class, fn, Oc()), l = () => {
    const d = {
      height: 0
    };
    return n.animateOpacity ? {
      ...d,
      opacity: 0
    } : d;
  }, c = (d) => {
    const g = {
      height: `${d.scrollHeight}px`
    };
    return n.animateOpacity ? {
      ...g,
      opacity: 1
    } : g;
  };
  return i(Ee, {
    onEnter: (d, g) => {
      d.animate([l(), c(d)], {
        duration: n.expandDuration,
        easing: n.expandTimingFunction
      }).finished.then(g);
    },
    onExit: (d, g) => {
      d.animate([c(d), l()], {
        duration: n.collapseDuration,
        easing: n.collapseTimingFunction
      }).finished.then(g);
    },
    get children() {
      return i(H, {
        get when() {
          return n.expanded;
        },
        get children() {
          return i(B, p({
            get class() {
              return s();
            }
          }, a, {
            get children() {
              return i(H, {
                get when() {
                  return n.keepAlive;
                },
                get fallback() {
                  return n.children;
                },
                get children() {
                  return o();
                }
              });
            }
          }));
        }
      });
    }
  });
}
hn.toString = () => $(fn);
const pn = "hope-accordion__panel";
function Mc(e) {
  const t = w().Accordion, r = lr(), [n, a] = S(e, ["class"]), o = () => m(n.class, pn, _c());
  return i(hn, {
    get expanded() {
      return r.state.expanded;
    },
    get children() {
      return i(B, p({
        role: "region",
        get id() {
          return r.state.panelId;
        },
        get "aria-labelledby"() {
          return r.state.buttonId;
        },
        get class() {
          return o();
        },
        get __baseStyle() {
          var s;
          return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.panel;
        }
      }, a));
    }
  });
}
Mc.toString = () => $(pn);
const Ce = C({
  flexShrink: 0
}), Rc = C({
  fontWeight: "$semibold"
}), Wc = C({
  display: "inline-block"
}), Fc = C({
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
    /* -------------------------------------------------------------------------------------------------
     * Variant - solid
     * -----------------------------------------------------------------------------------------------*/
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
    /* -------------------------------------------------------------------------------------------------
     * Variant - subtle
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "subtle",
      status: "success",
      css: {
        backgroundColor: "$success3",
        color: "$success11",
        [`& .${Ce}`]: {
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
        [`& .${Ce}`]: {
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
        [`& .${Ce}`]: {
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
        [`& .${Ce}`]: {
          color: "$danger9"
        }
      }
    },
    /* -------------------------------------------------------------------------------------------------
     * Variant - "left-accent"
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "left-accent",
      status: "success",
      css: {
        borderLeftColor: "$success9",
        backgroundColor: "$success3",
        color: "$success11",
        [`& .${Ce}`]: {
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
        [`& .${Ce}`]: {
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
        [`& .${Ce}`]: {
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
        [`& .${Ce}`]: {
          color: "$danger9"
        }
      }
    },
    /* -------------------------------------------------------------------------------------------------
     * Variant - "top-accent"
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "top-accent",
      status: "success",
      css: {
        borderTopColor: "$success9",
        backgroundColor: "$success3",
        color: "$success11",
        [`& .${Ce}`]: {
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
        [`& .${Ce}`]: {
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
        [`& .${Ce}`]: {
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
        [`& .${Ce}`]: {
          color: "$danger9"
        }
      }
    }
  ]
}), bn = "hope-alert";
function Nc(e) {
  var u, f, d, g;
  const t = w().Alert, r = {
    variant: ((f = (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.root) == null ? void 0 : f.variant) ?? "subtle",
    status: ((g = (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.root) == null ? void 0 : g.status) ?? "info"
  }, n = N(r, e), [a, o] = S(n, ["class", "variant", "status"]), s = () => m(a.class, bn, Fc({
    variant: a.variant,
    status: a.status
  })), c = {
    status: () => a.status
  };
  return i(mn.Provider, {
    value: c,
    get children() {
      return i(B, p({
        role: "alert",
        get class() {
          return s();
        },
        get __baseStyle() {
          var y;
          return (y = t == null ? void 0 : t.baseStyle) == null ? void 0 : y.root;
        }
      }, o));
    }
  });
}
Nc.toString = () => $(bn);
const mn = te();
function Vc() {
  const e = Z(mn);
  if (!e)
    throw new Error("[Hope UI]: useAlertContext must be used within an `<Alert />` component");
  return e;
}
const vn = "hope-alert__description";
function qc(e) {
  const t = w().Alert, [r, n] = S(e, ["class"]), a = () => m(r.class, vn, Wc());
  return i(B, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var o;
      return (o = t == null ? void 0 : t.baseStyle) == null ? void 0 : o.description;
    }
  }, n));
}
qc.toString = () => $(vn);
var jc = /* @__PURE__ */ se('<svg><path fill=currentColor d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"></svg>', !1, !0), Kc = /* @__PURE__ */ se('<svg><path fill=none d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z"></svg>', !1, !0);
const Sn = Ie({
  viewBox: "0 0 32 32",
  path: () => [jc(), Kc()]
});
var Xc = /* @__PURE__ */ se('<svg><path fill=currentColor d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2zm-1.1 6h2.2v11h-2.2V8zM16 25c-.8 0-1.5-.7-1.5-1.5S15.2 22 16 22s1.5.7 1.5 1.5S16.8 25 16 25z"></svg>', !1, !0);
const xn = Ie({
  viewBox: "0 0 32 32",
  path: () => Xc()
});
var Uc = /* @__PURE__ */ se('<svg><path fill=currentColor fill-rule=evenodd clip-rule=evenodd d="M29.4898 29.8706C29.3402 29.9548 29.1713 29.9991 28.9996 29.9993H2.99961C2.82787 29.9991 2.65905 29.9548 2.5094 29.8706C2.35976 29.7864 2.23433 29.665 2.14521 29.5182C2.05608 29.3713 2.00626 29.2041 2.00055 29.0325C1.99485 28.8608 2.03344 28.6907 2.1126 28.5382L15.1126 3.53821C15.1971 3.37598 15.3245 3.23999 15.4808 3.14514C15.6372 3.05017 15.8167 3 15.9996 3C16.1825 3 16.362 3.05017 16.5184 3.14514C16.6748 3.23999 16.8021 3.37598 16.8866 3.53821L29.8866 28.5382C29.9658 28.6907 30.0044 28.8608 29.9986 29.0325C29.9929 29.2041 29.9431 29.3713 29.854 29.5182C29.7649 29.665 29.6395 29.7864 29.4898 29.8706ZM16.0016 6.16919V6.17029H15.9976V6.16919H16.0016ZM15.9996 25.9993C15.7029 25.9993 15.4129 25.9113 15.1662 25.7465C14.9196 25.5817 14.7273 25.3474 14.6138 25.0734C14.5996 25.0391 14.5867 25.0044 14.5752 24.9694C14.4942 24.724 14.4778 24.4613 14.5284 24.2067C14.5863 23.9156 14.7292 23.6484 14.9389 23.4386C14.9652 23.4124 14.9923 23.3872 15.0202 23.3632C15.2159 23.1945 15.4524 23.0787 15.707 23.0281C15.7433 23.0209 15.7799 23.015 15.8165 23.0105C16.0723 22.979 16.3326 23.014 16.572 23.1129L16.5736 23.1135C16.8477 23.2271 17.082 23.4193 17.2468 23.6659C17.2674 23.6968 17.2868 23.7283 17.305 23.7604C17.4322 23.9852 17.4996 24.2397 17.4996 24.4993C17.4996 24.8971 17.3416 25.2787 17.0603 25.5599C16.7789 25.8413 16.3974 25.9993 15.9996 25.9993ZM17.1246 20.9993H14.8746V11.9993H17.1246V20.9993Z"></svg>', !1, !0);
const Cn = Ie({
  viewBox: "0 0 32 32",
  path: () => Uc()
});
var Qc = /* @__PURE__ */ se('<svg><path fill=none d="M16 8a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8Zm4 13.875h-2.875v-8H13v2.25h1.875v5.75H12v2.25h8Z"></svg>', !1, !0), Yc = /* @__PURE__ */ se('<svg><path fill=currentColor d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 6a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8Zm4 16.125h-8v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"></svg>', !1, !0);
const yn = Ie({
  viewBox: "0 0 32 32",
  path: () => [Qc(), Yc()]
}), $n = "hope-alert__icon";
function Zc(e) {
  const t = w().Alert, {
    status: r
  } = Vc(), a = N({
    boxSize: "$6"
  }, e), [o, s] = S(a, ["as", "class"]), l = () => m(o.class, $n, Ce()), c = () => {
    if (o.as)
      return o.as;
    switch (r()) {
      case "success":
        return Sn;
      case "info":
        return yn;
      case "warning":
        return Cn;
      case "danger":
        return xn;
    }
  };
  return i(at, p({
    get as() {
      return c();
    },
    get class() {
      return l();
    },
    get __baseStyle() {
      var u;
      return (u = t == null ? void 0 : t.baseStyle) == null ? void 0 : u.icon;
    }
  }, s));
}
Zc.toString = () => $($n);
const wn = "hope-alert__title";
function Jc(e) {
  const t = w().Alert, [r, n] = S(e, ["class"]), a = () => m(r.class, wn, Rc());
  return i(B, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var o;
      return (o = t == null ? void 0 : t.baseStyle) == null ? void 0 : o.title;
    }
  }, n));
}
Jc.toString = () => $(wn);
const Gc = C({
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
}), In = "hope-anchor";
function ed(e) {
  const t = w().Anchor, [r, n] = S(e, ["class", "external"]), a = () => m(r.class, In, Gc());
  return i(A.a, p({
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
  }, n));
}
ed.toString = () => $(In);
const td = C({
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
}), kn = "hope-aspect-ratio";
function rd(e) {
  const r = N({
    ratio: 1.3333333333333333
  }, e), [n, a] = S(r, ["class", "ratio"]), o = () => m(n.class, kn, td()), s = () => ir(n.ratio, (l) => `${1 / l * 100}%`);
  return i(B, p({
    get class() {
      return o();
    },
    get _before() {
      return {
        paddingBottom: s()
      };
    }
  }, a));
}
rd.toString = () => $(kn);
const Nt = "hope-icon-button", nd = C({
  display: "inline-flex",
  alignSelf: "center",
  flexShrink: 0
}), od = C({
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
}), ad = C({
  fontSize: "1.3em",
  animation: `1s linear infinite ${Rt}`
});
function mt(e) {
  return {
    height: e.height,
    py: 0,
    px: e.paddingX,
    fontSize: e.fontSize,
    [`&.${Nt}`]: {
      width: e.height,
      padding: "0"
    }
  };
}
function vt(e) {
  return {
    height: e.height,
    py: 0,
    px: e.paddingX,
    [`&.${Nt}`]: {
      width: e.height,
      padding: "0"
    }
  };
}
function Ve(e) {
  return {
    backgroundColor: e.bgColor,
    color: e.color,
    "&:hover": {
      backgroundColor: e.bgColorHover
    }
  };
}
function qe(e) {
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
function Se(e) {
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
function je(e) {
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
const _n = C({
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
      xs: mt({
        height: "$6",
        paddingX: "$2",
        fontSize: "$xs"
      }),
      sm: mt({
        height: "$8",
        paddingX: "$3",
        fontSize: "$sm"
      }),
      md: mt({
        height: "$10",
        paddingX: "$4",
        fontSize: "$base"
      }),
      lg: mt({
        height: "$12",
        paddingX: "$6",
        fontSize: "$lg"
      }),
      xl: mt({
        height: "$16",
        paddingX: "$10",
        fontSize: "$xl"
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
    /* -------------------------------------------------------------------------------------------------
     * Variant - solid
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "solid",
      colorScheme: "primary",
      css: Ve({
        color: "white",
        bgColor: "$primary9",
        bgColorHover: "$primary10"
      })
    },
    {
      variant: "solid",
      colorScheme: "accent",
      css: Ve({
        color: "white",
        bgColor: "$accent9",
        bgColorHover: "$accent10"
      })
    },
    {
      variant: "solid",
      colorScheme: "neutral",
      css: Ve({
        color: "white",
        bgColor: "$neutral9",
        bgColorHover: "$neutral10"
      })
    },
    {
      variant: "solid",
      colorScheme: "success",
      css: Ve({
        color: "white",
        bgColor: "$success9",
        bgColorHover: "$success10"
      })
    },
    {
      variant: "solid",
      colorScheme: "info",
      css: Ve({
        color: "white",
        bgColor: "$info9",
        bgColorHover: "$info10"
      })
    },
    {
      variant: "solid",
      colorScheme: "warning",
      css: Ve({
        color: "$blackAlpha12",
        bgColor: "$warning9",
        bgColorHover: "$warning10"
      })
    },
    {
      variant: "solid",
      colorScheme: "danger",
      css: Ve({
        color: "white",
        bgColor: "$danger9",
        bgColorHover: "$danger10"
      })
    },
    /* -------------------------------------------------------------------------------------------------
     * Variant - subtle
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "subtle",
      colorScheme: "primary",
      css: qe({
        color: "$primary11",
        bgColor: "$primary4",
        bgColorHover: "$primary5",
        bgColorActive: "$primary6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "accent",
      css: qe({
        color: "$accent11",
        bgColor: "$accent4",
        bgColorHover: "$accent5",
        bgColorActive: "$accent6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "neutral",
      css: qe({
        color: "$neutral12",
        bgColor: "$neutral4",
        bgColorHover: "$neutral5",
        bgColorActive: "$neutral6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "success",
      css: qe({
        color: "$success11",
        bgColor: "$success4",
        bgColorHover: "$success5",
        bgColorActive: "$success6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "info",
      css: qe({
        color: "$info11",
        bgColor: "$info4",
        bgColorHover: "$info5",
        bgColorActive: "$info6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "warning",
      css: qe({
        color: "$warning11",
        bgColor: "$warning4",
        bgColorHover: "$warning5",
        bgColorActive: "$warning6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "danger",
      css: qe({
        color: "$danger11",
        bgColor: "$danger4",
        bgColorHover: "$danger5",
        bgColorActive: "$danger6"
      })
    },
    /* -------------------------------------------------------------------------------------------------
     * Variant - outline
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "outline",
      colorScheme: "primary",
      css: Se({
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
      css: Se({
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
      css: Se({
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
      css: Se({
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
      css: Se({
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
      css: Se({
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
      css: Se({
        color: "$danger11",
        borderColor: "$danger7",
        borderColorHover: "$danger8",
        bgColorHover: "$danger4",
        bgColorActive: "$danger5"
      })
    },
    /* -------------------------------------------------------------------------------------------------
     * Variant - dashed
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "dashed",
      colorScheme: "primary",
      css: Se({
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
      css: Se({
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
      css: Se({
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
      css: Se({
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
      css: Se({
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
      css: Se({
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
      css: Se({
        color: "$danger11",
        borderColor: "$danger7",
        borderColorHover: "$danger8",
        bgColorHover: "$danger4",
        bgColorActive: "$danger5"
      })
    },
    /* -------------------------------------------------------------------------------------------------
     * Variant - ghost
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "ghost",
      colorScheme: "primary",
      css: je({
        color: "$primary11",
        bgColorHover: "$primary4",
        bgColorActive: "$primary5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "accent",
      css: je({
        color: "$accent11",
        bgColorHover: "$accent4",
        bgColorActive: "$accent5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "neutral",
      css: je({
        color: "$neutral12",
        bgColorHover: "$neutral4",
        bgColorActive: "$neutral5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "success",
      css: je({
        color: "$success11",
        bgColorHover: "$success4",
        bgColorActive: "$success5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "info",
      css: je({
        color: "$info11",
        bgColorHover: "$info4",
        bgColorActive: "$info5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "warning",
      css: je({
        color: "$warning11",
        bgColorHover: "$warning4",
        bgColorActive: "$warning5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "danger",
      css: je({
        color: "$danger11",
        bgColorHover: "$danger4",
        bgColorActive: "$danger5"
      })
    },
    /* -------------------------------------------------------------------------------------------------
     * Compact sizes
     * -----------------------------------------------------------------------------------------------*/
    {
      size: "xs",
      compact: "true",
      css: vt({ height: "$5", paddingX: "$1" })
    },
    {
      size: "sm",
      compact: "true",
      css: vt({ height: "$6", paddingX: "$1_5" })
    },
    {
      size: "md",
      compact: "true",
      css: vt({ height: "$7", paddingX: "$2" })
    },
    {
      size: "lg",
      compact: "true",
      css: vt({ height: "$8", paddingX: "$2_5" })
    },
    {
      size: "xl",
      compact: "true",
      css: vt({ height: "$10", paddingX: "$3_5" })
    }
  ]
}), sd = C({
  display: "inline-flex",
  [`& .${_n}:focus`]: {
    zIndex: 1
  }
}), Pn = "hope-button__group", Tn = te();
function id(e) {
  var f, d, g, y;
  const t = w().Button, [r] = ae({
    get variant() {
      var b, P;
      return e.variant ?? ((P = (b = t == null ? void 0 : t.defaultProps) == null ? void 0 : b.group) == null ? void 0 : P.variant);
    },
    get colorScheme() {
      var b, P;
      return e.colorScheme ?? ((P = (b = t == null ? void 0 : t.defaultProps) == null ? void 0 : b.group) == null ? void 0 : P.colorScheme);
    },
    get size() {
      var b, P;
      return e.size ?? ((P = (b = t == null ? void 0 : t.defaultProps) == null ? void 0 : b.group) == null ? void 0 : P.size);
    },
    get disabled() {
      return e.disabled;
    }
  }), n = {
    attached: ((d = (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.group) == null ? void 0 : d.attached) ?? !1,
    spacing: ((y = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.group) == null ? void 0 : y.spacing) ?? "0.5rem"
  }, a = N(n, e), [o, s, l] = S(a, ["class", "attached", "spacing"], ["variant", "colorScheme", "size", "disabled"]), c = () => m(o.class, Pn, sd({
    css: o.attached ? {
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
        marginStart: o.spacing
      }
    }
  })), u = {
    state: r
  };
  return i(Tn.Provider, {
    value: u,
    get children() {
      return i(B, p({
        role: "group",
        get class() {
          return c();
        },
        get __baseStyle() {
          var b;
          return (b = t == null ? void 0 : t.baseStyle) == null ? void 0 : b.group;
        }
      }, l));
    }
  });
}
id.toString = () => $(Pn);
function zn() {
  return Z(Tn);
}
const Bn = "hope-button__icon";
function er(e) {
  const [t, r] = S(e, ["class", "children"]), n = () => m(t.class, Bn, nd());
  return i(A.span, p({
    get class() {
      return n();
    }
  }, r, {
    get children() {
      return t.children;
    }
  }));
}
er.toString = () => $(Bn);
var ld = /* @__PURE__ */ se('<svg><g fill=none><path opacity=.2 fill-rule=evenodd clip-rule=evenodd d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z"fill=currentColor></path><path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2z"fill=currentColor></svg>', !1, !0);
const Ln = Ie({
  path: () => ld()
}), Hn = "hope-button__loader";
function tr(e) {
  const t = {
    spacing: "0.5rem",
    children: i(Ln, {
      get class() {
        return ad();
      }
    })
  }, r = N(t, e), [n, a] = S(r, ["class", "children", "withLoadingText", "placement", "spacing"]), o = () => n.placement === "start" ? "marginEnd" : "marginStart", s = () => ({
    [o()]: n.withLoadingText ? n.spacing : 0
  }), l = () => m(n.class, Hn, od({
    withLoadingText: n.withLoadingText
  }));
  return i(A.div, p({
    get class() {
      return l();
    }
  }, s, a, {
    get children() {
      return n.children;
    }
  }));
}
tr.toString = () => $(Hn);
const dr = "hope-button";
function ur(e) {
  var f, d;
  const t = w().Button, r = zn(), n = {
    loaderPlacement: ((d = (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.root) == null ? void 0 : d.loaderPlacement) ?? "start",
    iconSpacing: "0.5rem",
    type: "button",
    role: "button"
  }, a = N(n, e), [o, s, l] = S(a, ["class", "disabled", "loadingText", "loader", "loaderPlacement", "variant", "colorScheme", "size", "loading", "compact", "fullWidth"], ["children", "iconSpacing", "leftIcon", "rightIcon"]), c = () => o.disabled ?? (r == null ? void 0 : r.state.disabled), u = () => {
    var g, y, b, P, h, x;
    return m(o.class, dr, _n({
      variant: o.variant ?? (r == null ? void 0 : r.state.variant) ?? ((y = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.root) == null ? void 0 : y.variant) ?? "solid",
      colorScheme: o.colorScheme ?? (r == null ? void 0 : r.state.colorScheme) ?? ((P = (b = t == null ? void 0 : t.defaultProps) == null ? void 0 : b.root) == null ? void 0 : P.colorScheme) ?? "primary",
      size: o.size ?? (r == null ? void 0 : r.state.size) ?? ((x = (h = t == null ? void 0 : t.defaultProps) == null ? void 0 : h.root) == null ? void 0 : x.size) ?? "md",
      loading: o.loading,
      compact: o.compact,
      fullWidth: o.fullWidth
    }));
  };
  return i(A.button, p({
    get class() {
      return u();
    },
    get disabled() {
      return c();
    },
    get __baseStyle() {
      var g;
      return (g = t == null ? void 0 : t.baseStyle) == null ? void 0 : g.root;
    }
  }, l, {
    get children() {
      return [i(H, {
        get when() {
          return o.loading && o.loaderPlacement === "start";
        },
        get children() {
          return i(tr, {
            class: "hope-button__loader--start",
            get withLoadingText() {
              return !!o.loadingText;
            },
            placement: "start",
            get spacing() {
              return s.iconSpacing;
            },
            get children() {
              return o.loader;
            }
          });
        }
      }), i(H, {
        get when() {
          return o.loading;
        },
        get fallback() {
          return i(zr, s);
        },
        get children() {
          return i(H, {
            get when() {
              return o.loadingText;
            },
            get fallback() {
              return i(A.span, {
                opacity: 0,
                get children() {
                  return i(zr, s);
                }
              });
            },
            get children() {
              return o.loadingText;
            }
          });
        }
      }), i(H, {
        get when() {
          return o.loading && o.loaderPlacement === "end";
        },
        get children() {
          return i(tr, {
            class: "hope-button__loader--end",
            get withLoadingText() {
              return !!o.loadingText;
            },
            placement: "end",
            get spacing() {
              return s.iconSpacing;
            },
            get children() {
              return o.loader;
            }
          });
        }
      })];
    }
  }));
}
ur.toString = () => $(dr);
function zr(e) {
  return [i(H, {
    get when() {
      return e.leftIcon;
    },
    get children() {
      return i(er, {
        get marginEnd() {
          return e.iconSpacing;
        },
        get children() {
          return e.leftIcon;
        }
      });
    }
  }), nt(() => e.children), i(H, {
    get when() {
      return e.rightIcon;
    },
    get children() {
      return i(er, {
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
function cd(e) {
  const [t, r] = S(e, ["onClick"]), [n, a] = re(!1);
  return i(ur, p({
    get loading() {
      return n();
    }
  }, r, {
    onClick: (s) => {
      t.onClick && (a(!0), t.onClick(s).finally(() => a(!1)));
    }
  }));
}
cd.toString = () => $(dr);
function Ke(e) {
  return {
    boxSize: e,
    fontSize: `calc(${e} / 2.5)`,
    lineHeight: e
  };
}
const gr = C({
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
      "2xs": Ke("$sizes$4"),
      xs: Ke("$sizes$6"),
      sm: Ke("$sizes$8"),
      md: Ke("$sizes$12"),
      lg: Ke("$sizes$16"),
      xl: Ke("$sizes$24"),
      "2xl": Ke("$sizes$32"),
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
    /* -------------------------------------------------------------------------------------------------
     * Varaint - border + size
     * -----------------------------------------------------------------------------------------------*/
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
}), dd = C(gr), ud = C({
  boxSize: "$full",
  borderRadius: "$full",
  objectFit: "cover"
}), gd = C({
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
}), fd = C({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  [`& .${gr}:first-child`]: {
    marginStart: "0"
  }
});
var hd = /* @__PURE__ */ se('<svg><path fill=currentColor d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"></svg>', !1, !0), pd = /* @__PURE__ */ se('<svg><path fill=currentColor d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"></svg>', !1, !0);
function bd(e) {
  const [t, r] = e.split(" ");
  return t && r ? `${t.charAt(0)}${r.charAt(0)}` : t.charAt(0);
}
function md(e) {
  return i(A.svg, p({
    viewBox: "0 0 128 128",
    class: "hope-avatar__svg",
    color: "$loContrast",
    boxSize: "$full"
  }, e, {
    get children() {
      return [hd(), pd()];
    }
  }));
}
const Dn = te(), En = "hope-avatar__group";
function vd(e) {
  const t = w().Avatar, [r] = ae({
    get size() {
      var l, c;
      return e.size ?? ((c = (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.group) == null ? void 0 : c.size) ?? "md";
    },
    get spacing() {
      var l, c;
      return e.spacing ?? ((c = (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.group) == null ? void 0 : c.spacing) ?? "-1em";
    },
    get avatarBorderRadius() {
      var l, c;
      return e.avatarBorderRadius ?? ((c = (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.group) == null ? void 0 : c.avatarBorderRadius);
    },
    get avatarBorderColor() {
      var l, c;
      return e.avatarBorderColor ?? ((c = (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.group) == null ? void 0 : c.avatarBorderColor);
    },
    get avatarBorderWidth() {
      var l, c;
      return e.avatarBorderWidth ?? ((c = (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.group) == null ? void 0 : c.avatarBorderWidth);
    }
  }), [n, a] = S(e, ["class", "size", "spacing", "avatarBorderRadius", "avatarBorderColor", "avatarBorderWidth"]), o = () => m(n.class, En, fd()), s = {
    state: r
  };
  return i(Dn.Provider, {
    value: s,
    get children() {
      return i(B, p({
        role: "group",
        get class() {
          return o();
        },
        get __baseStyle() {
          var l;
          return (l = t == null ? void 0 : t.baseStyle) == null ? void 0 : l.group;
        }
      }, a));
    }
  });
}
vd.toString = () => $(En);
function An() {
  return Z(Dn);
}
function On(e) {
  const [t, r] = re("pending"), n = () => e.ignoreFallback ? "loaded" : t();
  let a = null;
  const o = () => {
    a && (a.onload = null, a.onerror = null, a = null);
  }, s = () => {
    if (!e.src)
      return;
    o();
    const l = new Image();
    l.src = e.src, e.crossOrigin && (l.crossOrigin = e.crossOrigin), e.srcSet && (l.srcset = e.srcSet), e.sizes && (l.sizes = e.sizes), e.loading && (l.loading = e.loading), l.onload = (c) => {
      o(), r("loaded"), oe(e.onLoad, c);
    }, l.onerror = (c) => {
      o(), r("failed"), oe(e.onError, c);
    }, a = l;
  };
  return me(() => {
    r(e.src ? "loading" : "pending");
  }), Ws(() => {
    e.ignoreFallback || (t() === "loading" && s(), fe(() => {
      o();
    }));
  }), n;
}
const Mn = "hope-avatar__initials";
function Rn(e) {
  const t = w().Avatar, [r, n] = S(e, ["class", "getInitials", "name"]), a = () => m(r.class, Mn), o = () => {
    var s;
    return r.name && ((s = r.getInitials) == null ? void 0 : s.call(r, r.name));
  };
  return i(B, p({
    role: "img",
    get "aria-label"() {
      return r.name;
    },
    get class() {
      return a();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.initials;
    }
  }, n, {
    get children() {
      return o();
    }
  }));
}
Rn.toString = () => $(Mn);
const Wn = "hope-avatar__image";
function Fn(e) {
  const t = w().Avatar, [r, n] = S(e, ["class", "src", "srcSet", "getInitials", "name", "loading", "iconLabel", "icon", "ignoreFallback", "onError"]), a = ye(() => On({
    src: r.src,
    onError: r.onError,
    ignoreFallback: r.ignoreFallback
  })), o = () => m(r.class, Wn, ud()), s = () => !!r.src && a()() === "loaded", l = () => ({
    role: "img",
    "aria-label": r.iconLabel ?? "avatar"
  });
  return i(H, {
    get when() {
      return s();
    },
    get fallback() {
      return i(H, {
        get when() {
          return r.name;
        },
        get fallback() {
          var c;
          return (c = r.icon) == null ? void 0 : c.call(r, l());
        },
        get children() {
          return i(Rn, {
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
      return i(A.img, p({
        get class() {
          return o();
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
      }, n));
    }
  });
}
Fn.toString = () => $(Wn);
const Nn = "hope-avatar";
function Sd(e) {
  var c, u, f, d, g, y, b, P, h, x;
  const t = w().Avatar, r = An(), n = {
    icon: ((u = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.root) == null ? void 0 : u.icon) ?? ((z) => i(md, z)),
    iconLabel: ((d = (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.root) == null ? void 0 : d.iconLabel) ?? "avatar",
    getInitials: ((y = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.root) == null ? void 0 : y.getInitials) ?? bd,
    ignoreFallback: ((P = (b = t == null ? void 0 : t.defaultProps) == null ? void 0 : b.root) == null ? void 0 : P.ignoreFallback) ?? !1,
    loading: (x = (h = t == null ? void 0 : t.defaultProps) == null ? void 0 : h.root) == null ? void 0 : x.loading
  }, a = N(n, e), [o, s] = S(a, ["class", "children", "size", "withBorder", "src", "srcSet", "name", "borderRadius", "onError", "getInitials", "icon", "iconLabel", "loading", "ignoreFallback", "imageProps"]), l = () => {
    var z, v, D, _;
    return m(o.class, Nn, gr({
      size: o.size ?? (r == null ? void 0 : r.state.size) ?? ((v = (z = t == null ? void 0 : t.defaultProps) == null ? void 0 : z.root) == null ? void 0 : v.size) ?? "md",
      withBorder: o.withBorder ?? !!r ?? ((_ = (D = t == null ? void 0 : t.defaultProps) == null ? void 0 : D.root) == null ? void 0 : _.withBorder) ?? !1
    }));
  };
  return i(A.span, p({
    get class() {
      return l();
    },
    get __baseStyle() {
      var z;
      return (z = t == null ? void 0 : t.baseStyle) == null ? void 0 : z.root;
    },
    get borderRadius() {
      return o.borderRadius ?? (r == null ? void 0 : r.state.avatarBorderRadius);
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
      return [i(Fn, p({
        get src() {
          return o.src;
        },
        get srcSet() {
          return o.srcSet;
        },
        get loading() {
          return o.loading;
        },
        get getInitials() {
          return o.getInitials;
        },
        get name() {
          return o.name;
        },
        get icon() {
          return o.icon;
        },
        get iconLabel() {
          return o.iconLabel;
        },
        get ignoreFallback() {
          return o.ignoreFallback;
        },
        get borderRadius() {
          return o.borderRadius ?? (r == null ? void 0 : r.state.avatarBorderRadius);
        },
        get onError() {
          return o.onError;
        }
      }, () => o.imageProps)), nt(() => o.children)];
    }
  }));
}
Sd.toString = () => $(Nn);
const Vn = "hope-avatar__badge";
function xd(e) {
  const t = w().Avatar, [r, n] = S(e, ["class", "placement"]), a = () => m(r.class, Vn, gd({
    placement: r.placement ?? "bottom-end"
  }));
  return i(B, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var o;
      return (o = t == null ? void 0 : t.baseStyle) == null ? void 0 : o.badge;
    }
  }, n));
}
xd.toString = () => $(Vn);
const qn = "hope-avatar__excess";
function Cd(e) {
  const t = w().Avatar, r = An(), [n, a] = S(e, ["class", "size", "withBorder"]), o = () => {
    var s, l, c, u;
    return m(n.class, qn, dd({
      size: n.size ?? (r == null ? void 0 : r.state.size) ?? ((l = (s = t == null ? void 0 : t.defaultProps) == null ? void 0 : s.root) == null ? void 0 : l.size) ?? "md",
      withBorder: n.withBorder ?? !!r ?? ((u = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.root) == null ? void 0 : u.withBorder) ?? !1
    }));
  };
  return i(A.span, p({
    get class() {
      return o();
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
Cd.toString = () => $(qn);
const yd = C({
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
    /* -------------------------------------------------------------------------------------------------
     * Variant - solid + color
     * -----------------------------------------------------------------------------------------------*/
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
    /* -------------------------------------------------------------------------------------------------
     * Variant - subtle + color
     * -----------------------------------------------------------------------------------------------*/
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
    /* -------------------------------------------------------------------------------------------------
     * Variant - outline + color
     * -----------------------------------------------------------------------------------------------*/
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
}), jn = "hope-badge";
function $d(e) {
  var c, u;
  const t = w().Badge, r = {
    variant: ((c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.variant) ?? "subtle",
    colorScheme: ((u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.colorScheme) ?? "neutral"
  }, n = N(r, e), [a, o, s] = S(n, ["class"], ["variant", "colorScheme"]), l = () => m(a.class, jn, yd(o));
  return i(A.span, p({
    get class() {
      return l();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    }
  }, s));
}
$d.toString = () => $(jn);
const wd = C({
  display: "block",
  fontSize: "$base",
  lineHeight: "$6"
}), Id = C({
  display: "flex",
  alignItems: "center",
  margin: 0,
  padding: 0,
  listStyle: "none"
}), kd = C({
  display: "inline-flex",
  alignItems: "center"
}), _d = C({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
}), Pd = C({
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
}), Kn = te(), Xn = "hope-breadcrumb", Td = "hope-breadcrumb__list";
function zd(e) {
  const t = w().Breadcrumb, [r] = ae({
    get spacing() {
      var c, u;
      return e.spacing ?? ((u = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.root) == null ? void 0 : u.spacing) ?? "0.5rem";
    },
    get separator() {
      var c, u;
      return e.separator ?? ((u = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.root) == null ? void 0 : u.separator) ?? "/";
    }
  }), [n, a] = S(e, ["class", "children", "separator", "spacing"]), o = () => m(n.class, Xn, wd()), s = () => m(Td, Id()), l = {
    state: r
  };
  return i(Kn.Provider, {
    value: l,
    get children() {
      return i(A.nav, p({
        "aria-label": "breadcrumb",
        get class() {
          return o();
        },
        get __baseStyle() {
          var c;
          return (c = t == null ? void 0 : t.baseStyle) == null ? void 0 : c.root;
        }
      }, a, {
        get children() {
          return i(A.ol, {
            get class() {
              return s();
            },
            get gap() {
              return r.spacing;
            },
            get children() {
              return n.children;
            }
          });
        }
      }));
    }
  });
}
zd.toString = () => $(Xn);
function Un() {
  const e = Z(Kn);
  if (!e)
    throw new Error("[Hope UI]: useBreadcrumbContext must be used within a `<Breadcrumb />` component");
  return e;
}
const Qn = "hope-breadcrumb__item";
function Bd(e) {
  const t = w().Breadcrumb, r = Un(), [n, a] = S(e, ["class"]), o = () => m(n.class, Qn, kd());
  return i(A.li, p({
    get class() {
      return o();
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
Bd.toString = () => $(Qn);
const Yn = "hope-breadcrumb__link";
function Ld(e) {
  const t = w().Breadcrumb, [r, n] = S(e, ["class", "currentPage", "href"]), a = () => m(r.class, Yn, Pd({
    currentPage: r.currentPage === !0
    // ensure a boolean is passed so the `true/false` values works correctly
  }));
  return i(H, {
    get when() {
      return r.currentPage;
    },
    get fallback() {
      return i(A.a, p({
        get href() {
          return r.href;
        },
        get class() {
          return a();
        },
        get __baseStyle() {
          var o;
          return (o = t == null ? void 0 : t.baseStyle) == null ? void 0 : o.link;
        }
      }, n));
    },
    get children() {
      return i(A.span, p({
        "aria-current": "page",
        get class() {
          return a();
        },
        get __baseStyle() {
          var o;
          return (o = t == null ? void 0 : t.baseStyle) == null ? void 0 : o.link;
        }
      }, n));
    }
  });
}
Ld.toString = () => $(Yn);
const Zn = "hope-breadcrumb__separator";
function Hd(e) {
  const t = w().Breadcrumb, r = Un(), [n, a] = S(e, ["class", "children"]), o = () => m(n.class, Zn, _d());
  return i(A.span, p({
    role: "presentation",
    get class() {
      return o();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.separator;
    }
  }, a, {
    get children() {
      return i(H, {
        get when() {
          return n.children;
        },
        get fallback() {
          return r.state.separator;
        },
        get children() {
          return n.children;
        }
      });
    }
  }));
}
Hd.toString = () => $(Zn);
const Dd = C({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}), Jn = "hope-center";
function Ed(e) {
  const [t, r] = S(e, ["class"]), n = () => m(t.class, Jn, Dd());
  return i(B, p({
    get class() {
      return n();
    }
  }, r));
}
Ed.toString = () => $(Jn);
function Xe(e) {
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
const fr = C({
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
}), hr = C({
  cursor: "pointer",
  userSelect: "none",
  "&[data-disabled]": {
    opacity: "0.5",
    cursor: "not-allowed"
  }
}), pr = C({
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
      primary: Xe({
        color: "$primary9",
        boxShadowColorFocus: "$primary5",
        borderColorFocus: "$primary8"
      }),
      accent: Xe({
        color: "$accent9",
        boxShadowColorFocus: "$accent5",
        borderColorFocus: "$accent8"
      }),
      neutral: Xe({
        color: "$neutral9",
        boxShadowColorFocus: "$neutral5",
        borderColorFocus: "$neutral8"
      }),
      success: Xe({
        color: "$success9",
        boxShadowColorFocus: "$success5",
        borderColorFocus: "$success8"
      }),
      info: Xe({
        color: "$info9",
        boxShadowColorFocus: "$info5",
        borderColorFocus: "$info8"
      }),
      warning: Xe({
        color: "$warning9",
        boxShadowColorFocus: "$warning5",
        borderColorFocus: "$warning8"
      }),
      danger: Xe({
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
}), Ad = C(fr, {
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
}), Od = C(hr), Md = C(pr, {
  borderRadius: "$sm",
  "& svg": {
    color: "$loContrast"
  },
  "&[data-indeterminate], &[data-focus][data-indeterminate]": {
    borderColor: "transparent",
    backgroundColor: "currentColor"
  }
}), Gn = "hope-checkbox__group";
function Rd(e) {
  const t = `hope-checkbox-group-${ue()}--checkbox`, r = w().Checkbox, [n, a] = ae({
    // eslint-disable-next-line solid/reactivity
    _value: e.defaultValue ?? [],
    get isControlled() {
      return e.value !== void 0;
    },
    get value() {
      return this.isControlled ? e.value : this._value;
    },
    get name() {
      return e.name ?? t;
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
      var d, g;
      return e.variant ?? ((g = (d = r == null ? void 0 : r.defaultProps) == null ? void 0 : d.group) == null ? void 0 : g.variant);
    },
    get colorScheme() {
      var d, g;
      return e.colorScheme ?? ((g = (d = r == null ? void 0 : r.defaultProps) == null ? void 0 : d.group) == null ? void 0 : g.colorScheme);
    },
    get size() {
      var d, g;
      return e.size ?? ((g = (d = r == null ? void 0 : r.defaultProps) == null ? void 0 : d.group) == null ? void 0 : g.size);
    },
    get labelPlacement() {
      var d, g;
      return e.labelPlacement ?? ((g = (d = r == null ? void 0 : r.defaultProps) == null ? void 0 : d.group) == null ? void 0 : g.labelPlacement);
    }
  }), [o, s, l] = S(e, ["class", "onChange"], ["value", "defaultValue", "name", "required", "disabled", "readOnly", "invalid"]), c = (d) => {
    var b;
    if (!n.value)
      return;
    const g = d.target, y = g.checked ? [...n.value, g.value] : n.value.filter((P) => String(P) !== String(g.value));
    a("_value", y), (b = o.onChange) == null || b.call(o, y);
  }, u = () => m(o.class, Gn), f = {
    state: n,
    onChange: c
  };
  return i(eo.Provider, {
    value: f,
    get children() {
      return i(B, p({
        get class() {
          return u();
        },
        get __baseStyle() {
          var d;
          return (d = r == null ? void 0 : r.baseStyle) == null ? void 0 : d.group;
        }
      }, l));
    }
  });
}
Rd.toString = () => $(Gn);
const eo = te();
function to() {
  return Z(eo);
}
const Wd = C({
  position: "relative",
  width: "$full"
}), Fd = C({
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
}), Nd = C({
  marginInlineStart: "$1",
  color: "$danger9",
  fontSize: "$base"
}), Vd = C({
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
}), qd = C({
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
}), ro = te(), no = "hope-form-control";
function jd(e) {
  const t = `hope-field-${ue()}`, r = w().FormControl, [n, a] = ae({
    get id() {
      return e.id ?? t;
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
    get "data-focus"() {
      return this.isFocused ? "" : void 0;
    },
    get "data-disabled"() {
      return this.disabled ? "" : void 0;
    },
    get "data-invalid"() {
      return this.invalid ? "" : void 0;
    },
    get "data-readonly"() {
      return this.readOnly ? "" : void 0;
    },
    hasHelperText: !1,
    hasErrorMessage: !1,
    isFocused: !1
  }), [o, s] = S(e, ["id", "required", "disabled", "invalid", "readOnly", "class"]), l = (y) => a("hasHelperText", y), c = (y) => a("hasErrorMessage", y), u = () => a("isFocused", !0), f = () => a("isFocused", !1), d = () => ({
    state: n,
    setHasHelperText: l,
    setHasErrorMessage: c,
    onFocus: u,
    onBlur: f
  }), g = () => m(o.class, no, Wd());
  return i(ro.Provider, {
    get value() {
      return d();
    },
    get children() {
      return i(B, p({
        role: "group",
        get class() {
          return g();
        },
        get __baseStyle() {
          var y;
          return (y = r == null ? void 0 : r.baseStyle) == null ? void 0 : y.root;
        }
      }, s));
    }
  });
}
jd.toString = () => $(no);
function ht() {
  return Z(ro);
}
function pt(e) {
  const t = ht(), r = ye(() => he(t == null ? void 0 : t.onFocus, e.onFocus)), n = ye(() => he(t == null ? void 0 : t.onBlur, e.onBlur)), [a] = ae({
    get id() {
      return e.id ?? (t == null ? void 0 : t.state.id);
    },
    get required() {
      return e.required ?? (t == null ? void 0 : t.state.required);
    },
    get disabled() {
      return e.disabled ?? (t == null ? void 0 : t.state.disabled);
    },
    get invalid() {
      return e.invalid ?? (t == null ? void 0 : t.state.invalid);
    },
    get readOnly() {
      return e.readOnly ?? (t == null ? void 0 : t.state.readOnly);
    },
    get "aria-required"() {
      return this.required ? !0 : void 0;
    },
    get "aria-disabled"() {
      return this.disabled ? !0 : void 0;
    },
    get "aria-invalid"() {
      return this.invalid ? !0 : void 0;
    },
    get "aria-readonly"() {
      return this.readOnly ? !0 : void 0;
    },
    get "aria-describedby"() {
      const o = e["aria-describedby"] ? [e["aria-describedby"]] : [];
      return t != null && t.state.hasErrorMessage && (t != null && t.state.invalid) && o.push(t.state.errorMessageId), t != null && t.state.hasHelperText && o.push(t.state.helperTextId), o.join(" ") || void 0;
    },
    get onFocus() {
      return r;
    },
    get onBlur() {
      return n;
    }
  });
  return a;
}
var Kd = /* @__PURE__ */ se("<input type=checkbox>");
function Xd(e) {
  const t = `hope-checkbox-${ue()}`, r = ht(), n = to(), a = pt(e), [o, s] = ae({
    // eslint-disable-next-line solid/reactivity
    _checked: !!e.defaultChecked,
    isFocused: !1,
    get isControlled() {
      return e.checked !== void 0;
    },
    get checked() {
      if (n) {
        const h = n.state.value;
        return h != null ? h.some((x) => String(e.value) === String(x)) : !1;
      }
      return this.isControlled ? !!e.checked : this._checked;
    },
    get id() {
      return r && !n ? a.id : e.id ?? t;
    },
    get name() {
      return e.name ?? (n == null ? void 0 : n.state.name);
    },
    get value() {
      return e.value;
    },
    get indeterminate() {
      return e.indeterminate;
    },
    get required() {
      return a.required ?? (n == null ? void 0 : n.state.required);
    },
    get disabled() {
      return a.disabled ?? (n == null ? void 0 : n.state.disabled);
    },
    get invalid() {
      return a.invalid ?? (n == null ? void 0 : n.state.invalid);
    },
    get readOnly() {
      return a.readOnly ?? (n == null ? void 0 : n.state.readOnly);
    },
    get "aria-required"() {
      return this.required ? !0 : void 0;
    },
    get "aria-disabled"() {
      return this.disabled ? !0 : void 0;
    },
    get "aria-invalid"() {
      return this.invalid ? !0 : void 0;
    },
    get "aria-readonly"() {
      return this.readOnly ? !0 : void 0;
    },
    get "aria-label"() {
      return e["aria-label"];
    },
    get "aria-labelledby"() {
      return e["aria-labelledby"];
    },
    get "aria-describedby"() {
      return e["aria-describedby"];
    },
    get "data-indeterminate"() {
      return this.indeterminate ? "" : void 0;
    },
    get "data-focus"() {
      return this.isFocused ? "" : void 0;
    },
    get "data-checked"() {
      return this.checked ? "" : void 0;
    },
    get "data-required"() {
      return this.required ? "" : void 0;
    },
    get "data-disabled"() {
      return this.disabled ? "" : void 0;
    },
    get "data-invalid"() {
      return this.invalid ? "" : void 0;
    },
    get "data-readonly"() {
      return this.readOnly ? "" : void 0;
    }
  }), [l, c, u] = S(e, ["inputClass", "children", "ref", "tabIndex", "onChange"], ["id", "name", "value", "indeterminate", "checked", "defaultChecked", "required", "disabled", "invalid", "readOnly", "onFocus", "onBlur"]), f = (h) => {
    if (o.readOnly || o.disabled) {
      h.preventDefault();
      return;
    }
    if (!o.isControlled) {
      const x = h.target;
      s("_checked", x.checked);
    }
    he(n == null ? void 0 : n.onChange, l.onChange)(h);
  }, d = (h) => {
    s("isFocused", !0), oe(a.onFocus, h);
  }, g = (h) => {
    s("isFocused", !1), oe(a.onBlur, h);
  }, y = () => m(l.inputClass, Wt()), b = () => o, P = {
    state: o
  };
  return i(oo.Provider, {
    value: P,
    get children() {
      return i(A.label, p({
        get for() {
          return o.id;
        },
        "data-group": !0,
        get "data-indeterminate"() {
          return o["data-indeterminate"];
        },
        get "data-focus"() {
          return o["data-focus"];
        },
        get "data-checked"() {
          return o["data-checked"];
        },
        get "data-required"() {
          return o["data-required"];
        },
        get "data-disabled"() {
          return o["data-disabled"];
        },
        get "data-invalid"() {
          return o["data-invalid"];
        },
        get "data-readonly"() {
          return o["data-readonly"];
        }
      }, u, {
        get children() {
          return [(() => {
            var h = Kd();
            h.addEventListener("blur", g), h.addEventListener("focus", d), h.addEventListener("change", f);
            var x = l.ref;
            return typeof x == "function" ? ar(x, h) : l.ref = h, _e((z) => {
              var v = y(), D = l.tabIndex, _ = o.id, R = o.name, j = o.required, ee = o.disabled, I = o.readOnly, k = o["aria-required"], W = o["aria-disabled"], V = o["aria-invalid"], Q = o["aria-readonly"], J = o["aria-label"], Y = o["aria-labelledby"], K = o["aria-describedby"];
              return v !== z.e && xt(h, z.e = v), D !== z.t && G(h, "tabindex", z.t = D), _ !== z.a && G(h, "id", z.a = _), R !== z.o && G(h, "name", z.o = R), j !== z.i && (h.required = z.i = j), ee !== z.n && (h.disabled = z.n = ee), I !== z.s && (h.readOnly = z.s = I), k !== z.h && G(h, "aria-required", z.h = k), W !== z.r && G(h, "aria-disabled", z.r = W), V !== z.d && G(h, "aria-invalid", z.d = V), Q !== z.l && G(h, "aria-readonly", z.l = Q), J !== z.u && G(h, "aria-label", z.u = J), Y !== z.c && G(h, "aria-labelledby", z.c = Y), K !== z.w && G(h, "aria-describedby", z.w = K), z;
            }, {
              e: void 0,
              t: void 0,
              a: void 0,
              o: void 0,
              i: void 0,
              n: void 0,
              s: void 0,
              h: void 0,
              r: void 0,
              d: void 0,
              l: void 0,
              u: void 0,
              c: void 0,
              w: void 0
            }), _e(() => h.value = o.value), _e(() => h.checked = o.checked), h;
          })(), i(H, {
            get when() {
              return de(l.children);
            },
            get fallback() {
              return l.children;
            },
            get children() {
              var h;
              return (h = l.children) == null ? void 0 : h.call(l, {
                state: b
              });
            }
          })];
        }
      }));
    }
  });
}
const oo = te();
function Ud() {
  const e = Z(oo);
  if (!e)
    throw new Error("[Hope UI]: useCheckboxPrimitiveContext must be used within a `<CheckboxPrimitive />` component");
  return e;
}
var Qd = /* @__PURE__ */ se('<svg><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"fill=currentColor stroke=currentColor stroke-width=1 fill-rule=evenodd clip-rule=evenodd></svg>', !1, !0), Yd = /* @__PURE__ */ se('<svg><path d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"fill=currentColor stroke=currentColor stroke-width=1 fill-rule=evenodd clip-rule=evenodd></svg>', !1, !0);
const ao = "hope-checkbox", Zd = "hope-checkbox__input", Jd = "hope-checkbox__control", Gd = "hope-checkbox__label";
function eu(e) {
  var f, d, g, y, b, P, h, x, z, v, D, _;
  const t = w().Checkbox, r = to(), n = {
    variant: ((f = r == null ? void 0 : r.state) == null ? void 0 : f.variant) ?? ((g = (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.root) == null ? void 0 : g.variant) ?? "outline",
    colorScheme: ((y = r == null ? void 0 : r.state) == null ? void 0 : y.colorScheme) ?? ((P = (b = t == null ? void 0 : t.defaultProps) == null ? void 0 : b.root) == null ? void 0 : P.colorScheme) ?? "primary",
    size: ((h = r == null ? void 0 : r.state) == null ? void 0 : h.size) ?? ((z = (x = t == null ? void 0 : t.defaultProps) == null ? void 0 : x.root) == null ? void 0 : z.size) ?? "md",
    labelPlacement: ((v = r == null ? void 0 : r.state) == null ? void 0 : v.labelPlacement) ?? ((_ = (D = t == null ? void 0 : t.defaultProps) == null ? void 0 : D.root) == null ? void 0 : _.labelPlacement) ?? "end"
  }, a = N(n, e), [o, s] = S(a, ["children", "class", "variant", "colorScheme", "size", "labelPlacement", "iconChecked", "iconIndeterminate"]), l = () => m(o.class, ao, Ad({
    size: o.size,
    labelPlacement: o.labelPlacement
  })), c = () => m(Jd, Md({
    variant: o.variant,
    colorScheme: o.colorScheme,
    size: o.size
  })), u = () => m(Gd, Od());
  return i(Xd, p({
    get class() {
      return l();
    },
    inputClass: Zd,
    get __baseStyle() {
      var R;
      return (R = t == null ? void 0 : t.baseStyle) == null ? void 0 : R.root;
    }
  }, s, {
    children: ({
      state: R
    }) => [i(A.span, {
      "aria-hidden": !0,
      get class() {
        return c();
      },
      get __baseStyle() {
        var j;
        return (j = t == null ? void 0 : t.baseStyle) == null ? void 0 : j.control;
      },
      get "data-indeterminate"() {
        return R()["data-indeterminate"];
      },
      get "data-focus"() {
        return R()["data-focus"];
      },
      get "data-checked"() {
        return R()["data-checked"];
      },
      get "data-required"() {
        return R()["data-required"];
      },
      get "data-disabled"() {
        return R()["data-disabled"];
      },
      get "data-invalid"() {
        return R()["data-invalid"];
      },
      get "data-readonly"() {
        return R()["data-readonly"];
      },
      get children() {
        return i(Rr, {
          get children() {
            return [i(St, {
              get when() {
                return R().indeterminate;
              },
              get children() {
                return i(H, {
                  get when() {
                    return o.iconIndeterminate;
                  },
                  get fallback() {
                    return i(ru, {});
                  },
                  get children() {
                    return o.iconIndeterminate;
                  }
                });
              }
            }), i(St, {
              get when() {
                return nt(() => !!R().checked)() && !R().indeterminate;
              },
              get children() {
                return i(H, {
                  get when() {
                    return o.iconChecked;
                  },
                  get fallback() {
                    return i(tu, {});
                  },
                  get children() {
                    return o.iconChecked;
                  }
                });
              }
            })];
          }
        });
      }
    }), i(A.span, {
      get class() {
        return u();
      },
      get __baseStyle() {
        var j;
        return (j = t == null ? void 0 : t.baseStyle) == null ? void 0 : j.label;
      },
      get "data-indeterminate"() {
        return R()["data-indeterminate"];
      },
      get "data-focus"() {
        return R()["data-focus"];
      },
      get "data-checked"() {
        return R()["data-checked"];
      },
      get "data-required"() {
        return R()["data-required"];
      },
      get "data-disabled"() {
        return R()["data-disabled"];
      },
      get "data-invalid"() {
        return R()["data-invalid"];
      },
      get "data-readonly"() {
        return R()["data-readonly"];
      },
      get children() {
        return o.children;
      }
    })]
  }));
}
eu.toString = () => $(ao);
const tu = Ie({
  viewBox: "0 0 15 15",
  path: () => Qd()
}), ru = Ie({
  viewBox: "0 0 15 15",
  path: () => Yd()
});
function Eh(e) {
  const t = Ud();
  return i(H, {
    get when() {
      return t.state.checked || t.state.indeterminate;
    },
    get children() {
      return i(A.span, p({
        "aria-hidden": !0,
        get "data-indeterminate"() {
          return t.state["data-indeterminate"];
        },
        get "data-focus"() {
          return t.state["data-focus"];
        },
        get "data-checked"() {
          return t.state["data-checked"];
        },
        get "data-required"() {
          return t.state["data-required"];
        },
        get "data-disabled"() {
          return t.state["data-disabled"];
        },
        get "data-invalid"() {
          return t.state["data-invalid"];
        },
        get "data-readonly"() {
          return t.state["data-readonly"];
        }
      }, e));
    }
  });
}
const nu = ft({
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
}), ou = C({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle"
}), au = C({
  fill: "transparent",
  stroke: "currentColor"
}), su = C({
  position: "absolute",
  top: 0,
  left: 0,
  variants: {
    spin: {
      true: {
        animation: `${Rt} 2s linear infinite`
      }
    }
  }
}), iu = C({
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
        animation: `${nu} 2s linear infinite`
      },
      false: {
        strokeDashoffset: 66,
        transitionProperty: "stroke-dasharray, stroke, opacity",
        transitionDuration: "600ms",
        transitionTimingFunction: "ease"
      }
    }
  }
}), lu = C({
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
}), so = te(), io = "hope-circular-progress", cu = "hope-circular-progress__track";
function du(e) {
  var d, g, y, b, P, h;
  const t = w().CircularProgress, [r] = ae({
    get size() {
      var x, z;
      return e.size ?? ((z = (x = t == null ? void 0 : t.defaultProps) == null ? void 0 : x.root) == null ? void 0 : z.size) ?? "$12";
    },
    get thickness() {
      var x, z;
      return e.thickness ?? ((z = (x = t == null ? void 0 : t.defaultProps) == null ? void 0 : x.root) == null ? void 0 : z.thickness) ?? "$2_5";
    },
    get min() {
      return e.min ?? 0;
    },
    get max() {
      return e.max ?? 100;
    },
    get value() {
      return e.value ?? 0;
    },
    get percent() {
      return tn(this.value, this.min, this.max);
    },
    get indeterminate() {
      return e.indeterminate ?? !1;
    },
    get ariaValueText() {
      if (!this.indeterminate)
        return de(this.getValueText) ? this.getValueText(this.value, this.percent) : e.valueText ?? `${this.percent}%`;
    },
    get getValueText() {
      return e.getValueText;
    },
    get isIndicatorVisible() {
      return !!(this.value > 0 || this.indeterminate);
    }
  }), n = {
    size: ((g = (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.root) == null ? void 0 : g.size) ?? "$12",
    thickness: ((b = (y = t == null ? void 0 : t.defaultProps) == null ? void 0 : y.root) == null ? void 0 : b.thickness) ?? "$2_5",
    trackColor: ((h = (P = t == null ? void 0 : t.defaultProps) == null ? void 0 : P.root) == null ? void 0 : h.trackColor) ?? "$neutral4"
  }, a = N(n, e), [o, s, l] = S(a, ["class", "children", "trackColor"], ["size", "thickness", "min", "max", "getValueText"]), c = () => m(o.class, io, ou()), u = () => m(cu, au({
    css: {
      color: o.trackColor,
      strokeWidth: r.thickness
    }
  })), f = {
    state: r
  };
  return i(so.Provider, {
    value: f,
    get children() {
      return i(B, p({
        role: "progressbar",
        get "data-indeterminate"() {
          return r.indeterminate ? "" : void 0;
        },
        get "aria-valuemin"() {
          return r.min;
        },
        get "aria-valuemax"() {
          return r.max;
        },
        get "aria-valuenow"() {
          return r.indeterminate ? void 0 : r.value;
        },
        get "aria-valuetext"() {
          return r.ariaValueText;
        },
        get class() {
          return c();
        },
        get __baseStyle() {
          var x;
          return (x = t == null ? void 0 : t.baseStyle) == null ? void 0 : x.root;
        }
      }, l, {
        get children() {
          return [i(A.svg, {
            viewBox: "0 0 100 100",
            get boxSize() {
              return r.size;
            },
            get children() {
              return i(A.circle, {
                cx: 50,
                cy: 50,
                r: 42,
                get class() {
                  return u();
                },
                get __baseStyle() {
                  var x;
                  return (x = t == null ? void 0 : t.baseStyle) == null ? void 0 : x.track;
                }
              });
            }
          }), nt(() => o.children)];
        }
      }));
    }
  });
}
du.toString = () => $(io);
function lo() {
  const e = Z(so);
  if (!e)
    throw new Error("[Hope UI]: useCircularProgressContext must be used within a `<CircularProgress />` component");
  return e;
}
const co = "hope-circular-progress__indicator";
function uu(e) {
  var f, d, g, y;
  const t = w().CircularProgress, r = lo(), n = {
    color: ((d = (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.indicator) == null ? void 0 : d.color) ?? "$primary9",
    withRoundCaps: ((y = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.indicator) == null ? void 0 : y.withRoundCaps) ?? !1
  }, a = N(n, e), [o, s] = S(a, ["class", "children", "color", "withRoundCaps"]), l = () => {
    if (r.state.indeterminate)
      return;
    const b = r.state.percent * 2.64;
    return `${b} ${264 - b}`;
  }, c = () => m(o.class, co, su({
    spin: r.state.indeterminate
  })), u = () => iu({
    hidden: !r.state.isIndicatorVisible,
    indeterminate: r.state.indeterminate === !0,
    // ensure a boolean is passed so the `true/false` values works correctly
    withRoundCaps: o.withRoundCaps,
    css: {
      color: o.color,
      strokeWidth: r.state.thickness,
      strokeDasharray: l()
    }
  });
  return i(A.svg, p({
    viewBox: "0 0 100 100",
    get class() {
      return c();
    },
    get boxSize() {
      return r.state.size;
    }
  }, s, {
    get children() {
      return i(A.circle, {
        cx: 50,
        cy: 50,
        r: 42,
        get class() {
          return u();
        },
        get __baseStyle() {
          var b;
          return (b = t == null ? void 0 : t.baseStyle) == null ? void 0 : b.indicator;
        }
      });
    }
  }));
}
uu.toString = () => $(co);
const uo = "hope-circular-progress__label";
function gu(e) {
  const t = w().CircularProgress, r = lo(), [n, a] = S(e, ["class", "children"]), o = () => m(n.class, uo, lu());
  return i(B, p({
    get class() {
      return o();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.label;
    }
  }, a, {
    get children() {
      return i(H, {
        get when() {
          return n.children;
        },
        get fallback() {
          return r.state.ariaValueText;
        },
        get children() {
          return n.children;
        }
      });
    }
  }));
}
gu.toString = () => $(uo);
var fu = /* @__PURE__ */ se('<svg><path fill=currentColor d="M2.64 1.27L7.5 6.13l4.84-4.84A.92.92 0 0 1 13 1a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l4.89 4.89A.9.9 0 0 1 14 13a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-4.85 4.85A.92.92 0 0 1 2 14a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L1.27 2.61A.9.9 0 0 1 1 2a1 1 0 0 1 1-1c.24.003.47.1.64.27z"></svg>', !1, !0);
const hu = Ie({
  viewBox: "0 0 15 15",
  path: () => fu()
}), pu = C({
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
}), go = "hope-close-button";
function Vt(e) {
  var l, c, u;
  const t = w().CloseButton, r = {
    "aria-label": ((l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l["aria-label"]) ?? "Close",
    icon: ((c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.icon) ?? i(hu, {}),
    size: ((u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.size) ?? "md"
  }, n = N(r, e), [a, o] = S(n, ["class", "children", "size", "icon"]), s = () => m(a.class, go, pu({
    size: a.size
  }));
  return i(A.button, p({
    type: "button",
    get class() {
      return s();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    }
  }, o, {
    get children() {
      return i(H, {
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
Vt.toString = () => $(go);
const bu = C({
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
    /**
     * If `true`, container itself will be centered on the page.
     */
    centered: {
      true: {
        mx: "auto"
      }
    },
    /**
     * If `true`, container will center its children regardless of their width.
     */
    centerContent: {
      true: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }
  }
}), fo = "hope-container";
function mu(e) {
  const r = N({
    centered: !0,
    centerContent: !1
  }, e), [n, a, o] = S(r, ["class"], ["centered", "centerContent"]), s = () => m(n.class, fo, bu(a));
  return i(B, p({
    get class() {
      return s();
    }
  }, o));
}
mu.toString = () => $(fo);
const vu = C({
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
}), ho = "hope-divider";
function Su(e) {
  const r = N({
    as: "div",
    variant: "solid",
    orientation: "horizontal",
    color: "$neutral6",
    thickness: "1px"
  }, e), [n, a] = S(r, ["class", "variant", "orientation", "thickness"]), o = () => m(n.class, ho, vu({
    variant: n.variant,
    orientation: n.orientation,
    css: {
      borderLeftWidth: n.orientation === "vertical" ? n.thickness : 0,
      borderBottomWidth: n.orientation === "horizontal" ? n.thickness : 0
    }
  }));
  return i(B, p({
    get class() {
      return o();
    }
  }, a));
}
Su.toString = () => $(ho);
function xu(e) {
  const t = `hope-modal-${ue()}`, r = w().Modal, [n, a] = ae({
    headerMounted: !1,
    bodyMounted: !1,
    get opened() {
      return e.opened;
    },
    get dialogId() {
      return e.id ?? t;
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
      var h, x;
      return e.motionPreset ?? ((x = (h = r == null ? void 0 : r.defaultProps) == null ? void 0 : h.root) == null ? void 0 : x.motionPreset) ?? "scale";
    },
    get size() {
      var h, x;
      return e.size ?? ((x = (h = r == null ? void 0 : r.defaultProps) == null ? void 0 : h.root) == null ? void 0 : x.size) ?? "md";
    },
    get centered() {
      var h, x;
      return e.centered ?? ((x = (h = r == null ? void 0 : r.defaultProps) == null ? void 0 : h.root) == null ? void 0 : x.centered) ?? !1;
    },
    get scrollBehavior() {
      var h, x;
      return e.scrollBehavior ?? ((x = (h = r == null ? void 0 : r.defaultProps) == null ? void 0 : h.root) == null ? void 0 : x.scrollBehavior) ?? "outside";
    },
    get closeOnOverlayClick() {
      var h, x;
      return e.closeOnOverlayClick ?? ((x = (h = r == null ? void 0 : r.defaultProps) == null ? void 0 : h.root) == null ? void 0 : x.closeOnOverlayClick) ?? !0;
    },
    get closeOnEsc() {
      var h, x;
      return e.closeOnEsc ?? ((x = (h = r == null ? void 0 : r.defaultProps) == null ? void 0 : h.root) == null ? void 0 : x.closeOnEsc) ?? !0;
    },
    get trapFocus() {
      var h, x;
      return e.trapFocus ?? ((x = (h = r == null ? void 0 : r.defaultProps) == null ? void 0 : h.root) == null ? void 0 : x.trapFocus) ?? !0;
    },
    get blockScrollOnMount() {
      var h, x;
      return e.blockScrollOnMount ?? ((x = (h = r == null ? void 0 : r.defaultProps) == null ? void 0 : h.root) == null ? void 0 : x.blockScrollOnMount) ?? !0;
    },
    get preserveScrollBarGap() {
      var h, x;
      return e.preserveScrollBarGap ?? ((x = (h = r == null ? void 0 : r.defaultProps) == null ? void 0 : h.root) == null ? void 0 : x.preserveScrollBarGap) ?? !1;
    }
  }), [o, s] = re(!1);
  me(() => {
    n.opened ? s(!0) : n.motionPreset === "none" && s(!1);
  });
  const l = () => s(!1), c = () => e.onClose(), u = (h) => a("headerMounted", h), f = (h) => a("bodyMounted", h);
  let d = null;
  const P = {
    state: n,
    unmountPortal: l,
    onClose: c,
    onMouseDown: (h) => {
      d = h.target;
    },
    onKeyDown: (h) => {
      var x;
      h.key === "Escape" && (h.stopPropagation(), n.closeOnEsc && c(), (x = e.onEsc) == null || x.call(e));
    },
    onOverlayClick: (h) => {
      var x;
      h.stopPropagation(), d === h.target && (n.closeOnOverlayClick && c(), (x = e.onOverlayClick) == null || x.call(e));
    },
    setHeaderMounted: u,
    setBodyMounted: f
  };
  return i(H, {
    get when() {
      return o();
    },
    get children() {
      return i(po.Provider, {
        value: P,
        get children() {
          return i(gt, {
            get children() {
              return e.children;
            }
          });
        }
      });
    }
  });
}
const po = te();
function Fe() {
  const e = Z(po);
  if (!e)
    throw new Error("[Hope UI]: useModalContext must be used within a `<Modal />` component");
  return e;
}
const bo = "hope-modal__body";
function mo(e) {
  const t = w().Modal, r = Fe(), [n, a] = S(e, ["class"]), o = () => m(n.class, bo, Gi({
    scrollBehavior: r.state.scrollBehavior
  }));
  return ge(() => r.setBodyMounted(!0)), fe(() => r.setBodyMounted(!1)), i(B, p({
    get class() {
      return o();
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
mo.toString = () => $(bo);
const vo = "hope-modal__close-button";
function So(e) {
  var u, f, d, g, y, b;
  const t = w().Modal, r = Fe(), n = {
    "aria-label": ((f = (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.closeButton) == null ? void 0 : f["aria-label"]) ?? "Close modal",
    size: ((g = (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.closeButton) == null ? void 0 : g.size) ?? "md",
    icon: (b = (y = t == null ? void 0 : t.defaultProps) == null ? void 0 : y.closeButton) == null ? void 0 : b.icon
  }, a = N(n, e), [o, s] = S(a, ["class", "onClick"]), l = () => m(o.class, vo, tl());
  return i(Vt, p({
    get class() {
      return l();
    },
    get __baseStyle() {
      var P;
      return (P = t == null ? void 0 : t.baseStyle) == null ? void 0 : P.closeButton;
    },
    onClick: (P) => {
      he(o.onClick, (h) => {
        h.stopPropagation(), r.onClose();
      })(P);
    }
  }, s));
}
So.toString = () => $(vo);
const xo = "hope-modal__footer";
function Co(e) {
  const t = w().Modal, [r, n] = S(e, ["class"]), a = () => m(r.class, xo, el());
  return i(B, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var o;
      return (o = t == null ? void 0 : t.baseStyle) == null ? void 0 : o.footer;
    }
  }, n));
}
Co.toString = () => $(xo);
const yo = "hope-modal__header";
function $o(e) {
  const t = w().Modal, r = Fe(), [n, a] = S(e, ["class"]), o = () => m(n.class, yo, Ji());
  return ge(() => r.setHeaderMounted(!0)), fe(() => r.setHeaderMounted(!1)), i(B, p({
    get class() {
      return o();
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
$o.toString = () => $(yo);
const wo = te();
function Ah(e) {
  const t = w().Drawer, [, r] = S(e, ["opened", "onClose", "placement", "size", "fullHeight", "disableMotion"]), [n] = ae({
    get placement() {
      var a, o;
      return e.placement ?? ((o = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : o.placement) ?? "right";
    },
    get size() {
      var a, o;
      return e.size ?? ((o = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : o.size) ?? "xs";
    },
    get fullHeight() {
      var a, o;
      return e.fullHeight ?? ((o = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : o.fullHeight) ?? !1;
    },
    get disableMotion() {
      var a, o;
      return e.disableMotion ?? ((o = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : o.disableMotion) ?? !1;
    }
  });
  return i(wo.Provider, {
    value: n,
    get children() {
      return i(xu, p({
        scrollBehavior: "inside",
        get blockScrollOnMount() {
          var a, o;
          return (o = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : o.blockScrollOnMount;
        },
        get closeOnEsc() {
          var a, o;
          return (o = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : o.closeOnEsc;
        },
        get closeOnOverlayClick() {
          var a, o;
          return (o = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : o.closeOnOverlayClick;
        },
        get preserveScrollBarGap() {
          var a, o;
          return (o = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : o.preserveScrollBarGap;
        },
        get trapFocus() {
          var a, o;
          return (o = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : o.trapFocus;
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
function Io() {
  const e = Z(wo);
  if (!e)
    throw new Error("[Hope UI]: useDrawerContext must be used within a `<Drawer />` component");
  return e;
}
function Oh(e) {
  var a, o, s, l, c, u;
  const t = w().Drawer, r = {
    "aria-label": ((o = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.closeButton) == null ? void 0 : o["aria-label"]) ?? "Close drawer",
    size: ((l = (s = t == null ? void 0 : t.defaultProps) == null ? void 0 : s.closeButton) == null ? void 0 : l.size) ?? "md",
    icon: (u = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.closeButton) == null ? void 0 : u.icon
  }, n = N(r, e);
  return i(So, p({
    get __baseStyle() {
      var f;
      return (f = t == null ? void 0 : t.baseStyle) == null ? void 0 : f.closeButton;
    }
  }, n));
}
function Mh(e) {
  const t = w().Drawer;
  return i(mo, p({
    get __baseStyle() {
      var r;
      return (r = t == null ? void 0 : t.baseStyle) == null ? void 0 : r.body;
    }
  }, e));
}
function Rh(e) {
  const t = w().Drawer;
  return i($o, p({
    get __baseStyle() {
      var r;
      return (r = t == null ? void 0 : t.baseStyle) == null ? void 0 : r.header;
    }
  }, e));
}
function Wh(e) {
  const t = w().Drawer;
  return i(Co, p({
    get __baseStyle() {
      var r;
      return (r = t == null ? void 0 : t.baseStyle) == null ? void 0 : r.footer;
    }
  }, e));
}
function ko(e) {
  const t = Fe();
  let r, n;
  const a = (d) => {
    r = d;
  }, o = () => t.state.headerMounted ? t.state.headerId : void 0, s = () => t.state.bodyMounted ? t.state.bodyId : void 0, l = (d) => {
    he(e.onClick, (g) => g.stopPropagation())(d);
  }, c = () => `[id='${t.state.dialogId}']`, u = () => {
    r && (t.state.trapFocus && (n = Fr(r, {
      initialFocus: t.state.initialFocus,
      fallbackFocus: c(),
      allowOutsideClick: !0
    }), n.activate()), t.state.blockScrollOnMount);
  }, f = () => {
    n == null || n.deactivate();
  };
  return ge(() => {
    u();
  }), fe(() => {
    f();
  }), {
    assignContainerRef: a,
    ariaLabelledBy: o,
    ariaDescribedBy: s,
    onDialogClick: l
  };
}
const Cu = "hope-modal__content-container", _o = "hope-modal__content";
function yu(e) {
  const t = w().Modal, r = Fe(), [n, a] = S(e, ["ref", "class", "role", "aria-labelledby", "aria-describedby", "onClick"]), {
    assignContainerRef: o,
    ariaLabelledBy: s,
    ariaDescribedBy: l,
    onDialogClick: c
  } = ko(n), u = () => {
    const g = Yi({
      centered: r.state.centered,
      scrollBehavior: r.state.scrollBehavior
    });
    return m(Cu, g);
  }, f = () => {
    const g = Zi({
      size: r.state.size,
      scrollBehavior: r.state.scrollBehavior
    });
    return m(n.class, _o, g);
  }, d = () => {
    switch (r.state.motionPreset) {
      case "fade-in-bottom":
        return le.fadeInBottom;
      case "scale":
        return le.scale;
      case "none":
        return "hope-none";
    }
  };
  return i(Ee, {
    get name() {
      return d();
    },
    appear: !0,
    get onAfterExit() {
      return r.unmountPortal;
    },
    get children() {
      return i(H, {
        get when() {
          return r.state.opened;
        },
        get children() {
          return i(B, {
            ref: o,
            get class() {
              return u();
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
              return i(A.section, p({
                get class() {
                  return f();
                },
                get __baseStyle() {
                  var g;
                  return (g = t == null ? void 0 : t.baseStyle) == null ? void 0 : g.content;
                },
                get id() {
                  return r.state.dialogId;
                },
                get role() {
                  return n.role ?? "dialog";
                },
                tabIndex: -1,
                "aria-modal": !0,
                get "aria-labelledby"() {
                  return s();
                },
                get "aria-describedby"() {
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
yu.toString = () => $(_o);
const Po = "hope-modal__overlay";
function $u(e) {
  const t = w().Modal, r = Fe(), [n, a] = S(e, ["class"]), o = () => m(n.class, Po, Zr()), s = () => r.state.motionPreset === "none" ? "hope-none" : le.fade;
  return i(Ee, {
    get name() {
      return s();
    },
    appear: !0,
    get children() {
      return i(H, {
        get when() {
          return r.state.opened;
        },
        get children() {
          return i(B, p({
            get class() {
              return o();
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
$u.toString = () => $(Po);
const wu = "hope-drawer__content-container", To = "hope-drawer__content";
function Iu(e) {
  const t = w().Drawer, r = Io(), n = Fe(), [a, o] = S(e, ["ref", "class", "role", "aria-labelledby", "aria-describedby", "onClick"]), {
    assignContainerRef: s,
    ariaLabelledBy: l,
    ariaDescribedBy: c,
    onDialogClick: u
  } = ko(a), f = () => m(wu, nl({
    placement: r.placement
  })), d = () => {
    const y = ol({
      size: r.size,
      placement: r.placement,
      fullHeight: r.fullHeight
    });
    return m(a.class, To, y);
  }, g = () => {
    if (r.disableMotion)
      return "hope-none";
    switch (r.placement) {
      case "top":
        return q.slideInTop;
      case "right":
        return q.slideInRight;
      case "bottom":
        return q.slideInBottom;
      case "left":
        return q.slideInLeft;
    }
  };
  return i(Ee, {
    get name() {
      return g();
    },
    appear: !0,
    get onAfterExit() {
      return n.unmountPortal;
    },
    get children() {
      return i(H, {
        get when() {
          return n.state.opened;
        },
        get children() {
          return i(B, {
            ref: s,
            get class() {
              return f();
            },
            tabIndex: -1,
            get onMouseDown() {
              return n.onMouseDown;
            },
            get onKeyDown() {
              return n.onKeyDown;
            },
            get onClick() {
              return n.onOverlayClick;
            },
            get children() {
              return i(A.section, p({
                get class() {
                  return d();
                },
                get __baseStyle() {
                  var y;
                  return (y = t == null ? void 0 : t.baseStyle) == null ? void 0 : y.content;
                },
                get id() {
                  return n.state.dialogId;
                },
                get role() {
                  return a.role ?? "dialog";
                },
                tabIndex: -1,
                "aria-modal": !0,
                get "aria-labelledby"() {
                  return l();
                },
                get "aria-describedby"() {
                  return c();
                },
                onClick: u
              }, o));
            }
          });
        }
      });
    }
  });
}
Iu.toString = () => $(To);
const zo = "hope-drawer__overlay";
function ku(e) {
  const t = w().Drawer, r = Io(), n = Fe(), [a, o] = S(e, ["class"]), s = () => m(a.class, zo, Zr()), l = () => r.disableMotion ? "hope-none" : q.fade;
  return i(Ee, {
    get name() {
      return l();
    },
    appear: !0,
    get children() {
      return i(H, {
        get when() {
          return n.state.opened;
        },
        get children() {
          return i(B, p({
            get class() {
              return s();
            },
            get __baseStyle() {
              var c;
              return (c = t == null ? void 0 : t.baseStyle) == null ? void 0 : c.overlay;
            }
          }, o));
        }
      });
    }
  });
}
ku.toString = () => $(zo);
const Bo = "hope-flex";
function Lo(e) {
  const [t, r] = S(e, ["class", "direction", "wrap"]), n = () => m(t.class, Bo);
  return i(B, p({
    get class() {
      return n();
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
Lo.toString = () => $(Bo);
const Ho = "hope-form-error-message";
function _u(e) {
  const t = w().FormControl, r = ht(), [n, a] = S(e, ["ref", "id", "class"]), o = () => n.id ?? (r == null ? void 0 : r.state.errorMessageId), s = () => m(n.class, Ho, qd());
  return ge(() => r == null ? void 0 : r.setHasErrorMessage(!0)), fe(() => r == null ? void 0 : r.setHasErrorMessage(!1)), i(H, {
    get when() {
      return r == null ? void 0 : r.state.invalid;
    },
    get children() {
      return i(B, p({
        "aria-live": "polite",
        get id() {
          return o();
        },
        get class() {
          return s();
        },
        get __baseStyle() {
          var l;
          return (l = t == null ? void 0 : t.baseStyle) == null ? void 0 : l.errorMessage;
        },
        get "data-disabled"() {
          return r == null ? void 0 : r.state["data-disabled"];
        },
        get "data-readonly"() {
          return r == null ? void 0 : r.state["data-readonly"];
        }
      }, a));
    }
  });
}
_u.toString = () => $(Ho);
const Do = "hope-form-helper-text";
function Pu(e) {
  const t = w().FormControl, r = ht(), [n, a] = S(e, ["ref", "id", "class"]), o = () => n.id ?? (r == null ? void 0 : r.state.helperTextId), s = () => m(n.class, Do, Vd());
  return ge(() => r == null ? void 0 : r.setHasHelperText(!0)), fe(() => r == null ? void 0 : r.setHasHelperText(!1)), i(B, p({
    get id() {
      return o();
    },
    get class() {
      return s();
    },
    get __baseStyle() {
      var l;
      return (l = t == null ? void 0 : t.baseStyle) == null ? void 0 : l.helperText;
    },
    get "data-disabled"() {
      return r == null ? void 0 : r.state["data-disabled"];
    },
    get "data-readonly"() {
      return r == null ? void 0 : r.state["data-readonly"];
    }
  }, a));
}
Pu.toString = () => $(Do);
var Tu = /* @__PURE__ */ se("<span role=presentation aria-hidden=true>*");
const Eo = "hope-form-label";
function zu(e) {
  var f, d;
  const t = w().FormControl, r = ht(), n = {
    withRequiredIndicator: ((d = (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.label) == null ? void 0 : d.withRequiredIndicator) ?? !0
  }, a = N(n, e), [o, s] = S(a, ["id", "for", "class", "children", "withRequiredIndicator"]), l = () => o.id ?? (r == null ? void 0 : r.state.labelId), c = () => o.for ?? (r == null ? void 0 : r.state.id), u = () => m(o.class, Eo, Fd());
  return i(A.label, p({
    get id() {
      return l();
    },
    get for() {
      return c();
    },
    get class() {
      return u();
    },
    get __baseStyle() {
      var g;
      return (g = t == null ? void 0 : t.baseStyle) == null ? void 0 : g.label;
    },
    get "data-focus"() {
      return r == null ? void 0 : r.state["data-focus"];
    },
    get "data-disabled"() {
      return r == null ? void 0 : r.state["data-disabled"];
    },
    get "data-invalid"() {
      return r == null ? void 0 : r.state["data-invalid"];
    },
    get "data-readonly"() {
      return r == null ? void 0 : r.state["data-readonly"];
    }
  }, s, {
    get children() {
      return [nt(() => o.children), i(H, {
        get when() {
          return (r == null ? void 0 : r.state.required) && o.withRequiredIndicator;
        },
        get children() {
          var g = Tu();
          return _e(() => xt(g, Nd())), g;
        }
      })];
    }
  }));
}
zu.toString = () => $(Eo);
const Ao = "hope-grid";
function Oo(e) {
  const [t, r] = S(e, ["class", "autoFlow", "autoColumns", "autoRows", "templateAreas", "templateColumns", "templateRows"]), n = () => m(t.class, Ao);
  return i(B, p({
    get class() {
      return n();
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
Oo.toString = () => $(Ao);
function Br(e) {
  if (e != null)
    return Us(e, (t) => {
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
const Mo = "hope-grid-item";
function Bu(e) {
  const [t, r] = S(e, ["class", "area", "colSpan", "colStart", "colEnd", "rowSpan", "rowStart", "rowEnd"]), n = () => m(t.class, Mo);
  return i(B, p({
    get class() {
      return n();
    },
    get gridArea() {
      return t.area;
    },
    get gridColumn() {
      return Br(t.colSpan);
    },
    get gridRow() {
      return Br(t.rowSpan);
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
Bu.toString = () => $(Mo);
const Ro = "hope-simple-grid";
function Lu(e) {
  return Ks(e) ? `${e}px` : e;
}
function Hu(e) {
  return ir(e, (t) => Kr(t) ? null : `repeat(auto-fit, minmax(${Lu(t)}, 1fr))`);
}
function Du(e) {
  return ir(e, (t) => Kr(t) ? null : `repeat(${t}, minmax(0, 1fr))`);
}
function Eu(e) {
  const [t, r] = S(e, ["class", "minChildWidth", "columns"]), n = () => m(t.class, Ro), a = () => t.minChildWidth ? Hu(t.minChildWidth) : Du(t.columns);
  return i(Oo, p({
    get class() {
      return n();
    },
    get templateColumns() {
      return a();
    }
  }, r));
}
Eu.toString = () => $(Ro);
const Wo = C({
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
}), Au = C(Wo, {
  fontWeight: "$semibold"
}), Fo = "hope-heading";
function Ou(e) {
  var c, u;
  const t = w().Heading, r = {
    as: "h2",
    level: (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.level,
    size: (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.size
  }, n = N(r, e), [a, o] = S(n, ["class", "as", "level", "size"]), s = () => m(a.class, Fo, Au({
    size: a.size
  })), l = () => a.level ? `h${a.level}` : a.as;
  return i(B, p({
    get as() {
      return l();
    },
    get class() {
      return s();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    }
  }, o));
}
Ou.toString = () => $(Fo);
function Mu(e) {
  const t = w().IconButton, r = zn(), [n, a] = S(e, ["class", "className", "children", "icon", "variant", "colorScheme", "size", "disabled"]), o = () => {
    var f;
    return n.variant ?? (r == null ? void 0 : r.state.variant) ?? ((f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.variant) ?? "solid";
  }, s = () => {
    var f;
    return n.colorScheme ?? (r == null ? void 0 : r.state.colorScheme) ?? ((f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.colorScheme) ?? "primary";
  }, l = () => {
    var f;
    return n.size ?? (r == null ? void 0 : r.state.size) ?? ((f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.size) ?? "md";
  }, c = () => n.disabled ?? (r == null ? void 0 : r.state.disabled), u = () => m(n.class, Nt);
  return i(ur, p({
    get class() {
      return u();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    },
    get variant() {
      return o();
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
      return i(H, {
        get when() {
          return n.icon;
        },
        get fallback() {
          return n.children;
        },
        get children() {
          return n.icon;
        }
      });
    }
  }));
}
Mu.toString = () => $(Nt);
const No = "hope-image";
function Ru(e) {
  const [t, r, n] = S(e, ["class", "htmlWidth", "htmlHeight", "fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin"], ["onError", "onLoad"]), a = () => t.loading != null || // Defer to native `img` tag if `loading` prop is passed.
  t.ignoreFallback || t.fallbackSrc === void 0 && t.fallback === void 0, o = ye(() => On({
    ...e,
    ignoreFallback: a()
  })), s = () => ({
    objectFit: t.fit,
    objectPosition: t.align,
    width: t.htmlWidth,
    height: t.htmlHeight,
    ...a() ? r : {},
    ...n
  }), l = () => m(t.class, No);
  return i(H, {
    get when() {
      return o()() === "loaded";
    },
    get fallback() {
      return i(H, {
        get when() {
          return t.fallback;
        },
        get fallback() {
          return i(B, p({
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
      return i(B, p({
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
Ru.toString = () => $(No);
const Vo = te();
function yt() {
  return Z(Vo);
}
const qo = "hope-input-group";
function Wu(e) {
  const t = w().Input, [r, n] = ae({
    get variant() {
      var g, y;
      return e.variant ?? ((y = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.group) == null ? void 0 : y.variant) ?? "outline";
    },
    get size() {
      var g, y;
      return e.size ?? ((y = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.group) == null ? void 0 : y.size) ?? "md";
    },
    hasLeftElement: !1,
    hasRightElement: !1,
    hasLeftAddon: !1,
    hasRightAddon: !1
  }), [a, o] = S(e, ["variant", "size", "class"]), s = () => m(a.class, qo, zl()), d = {
    state: r,
    setHasLeftElement: (g) => n("hasLeftElement", g),
    setHasRightElement: (g) => n("hasRightElement", g),
    setHasLeftAddon: (g) => n("hasLeftAddon", g),
    setHasRightAddon: (g) => n("hasRightAddon", g)
  };
  return i(Vo.Provider, {
    value: d,
    get children() {
      return i(B, p({
        get class() {
          return s();
        },
        get __baseStyle() {
          var g;
          return (g = t == null ? void 0 : t.baseStyle) == null ? void 0 : g.group;
        }
      }, o));
    }
  });
}
Wu.toString = () => $(qo);
const jo = "hope-input";
function Fu(e) {
  const t = w().Input, r = yt(), n = pt(e), [a, o] = S(e, ["class", "htmlSize", "variant", "size"]), s = () => {
    var l, c, u, f;
    return m(a.class, jo, Tl({
      variant: a.variant ?? (r == null ? void 0 : r.state.variant) ?? ((c = (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.input) == null ? void 0 : c.variant) ?? "outline",
      size: a.size ?? (r == null ? void 0 : r.state.size) ?? ((f = (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.input) == null ? void 0 : f.size) ?? "md",
      withLeftElement: (r == null ? void 0 : r.state.hasLeftElement) ?? !1,
      withRightElement: (r == null ? void 0 : r.state.hasRightElement) ?? !1,
      withLeftAddon: (r == null ? void 0 : r.state.hasLeftAddon) ?? !1,
      withRightAddon: (r == null ? void 0 : r.state.hasRightAddon) ?? !1
    }));
  };
  return i(A.input, p({
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
  }, n, o));
}
Fu.toString = () => $(jo);
function Ko(e) {
  const t = w().Input, [r, n, a] = S(e, ["class"], ["placement", "variant", "size"]), o = () => m(r.class, Ll(n));
  return i(B, p({
    get class() {
      return o();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.addon;
    }
  }, a));
}
const Xo = "hope-input-left-addon";
function Nu(e) {
  const t = yt(), [r, n] = S(e, ["class"]), a = () => m(r.class, Xo);
  return ge(() => t == null ? void 0 : t.setHasLeftAddon(!0)), fe(() => t == null ? void 0 : t.setHasLeftAddon(!1)), i(Ko, p({
    get class() {
      return a();
    },
    placement: "left",
    get variant() {
      return (t == null ? void 0 : t.state.variant) ?? "outline";
    },
    get size() {
      return (t == null ? void 0 : t.state.size) ?? "md";
    }
  }, n));
}
Nu.toString = () => $(Xo);
const Uo = "hope-input-right-addon";
function Vu(e) {
  const t = yt(), [r, n] = S(e, ["class"]), a = () => m(r.class, Uo);
  return ge(() => t == null ? void 0 : t.setHasRightAddon(!0)), fe(() => t == null ? void 0 : t.setHasRightAddon(!1)), i(Ko, p({
    get class() {
      return a();
    },
    placement: "right",
    get variant() {
      return (t == null ? void 0 : t.state.variant) ?? "outline";
    },
    get size() {
      return (t == null ? void 0 : t.state.size) ?? "md";
    }
  }, n));
}
Vu.toString = () => $(Uo);
function Qo(e) {
  const t = w().Input, [r, n, a] = S(e, ["class"], ["placement", "size"]), o = () => m(r.class, Bl(n));
  return i(B, p({
    get class() {
      return o();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.element;
    }
  }, a));
}
const Yo = "hope-input-left-element";
function qu(e) {
  const t = yt(), [r, n] = S(e, ["class"]), a = () => m(r.class, Yo);
  return ge(() => t == null ? void 0 : t.setHasLeftElement(!0)), fe(() => t == null ? void 0 : t.setHasLeftElement(!1)), i(Qo, p({
    get class() {
      return a();
    },
    placement: "left",
    get size() {
      return (t == null ? void 0 : t.state.size) ?? "md";
    }
  }, n));
}
qu.toString = () => $(Yo);
const Zo = "hope-input-right-element";
function ju(e) {
  const t = yt(), [r, n] = S(e, ["class"]), a = () => m(r.class, Zo);
  return ge(() => t == null ? void 0 : t.setHasRightElement(!0)), fe(() => t == null ? void 0 : t.setHasRightElement(!1)), i(Qo, p({
    get class() {
      return a();
    },
    placement: "right",
    get size() {
      return (t == null ? void 0 : t.state.size) ?? "md";
    }
  }, n));
}
ju.toString = () => $(Zo);
const Ku = C({
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
}), Jo = "hope-kbd";
function Xu(e) {
  const t = w().Kbd, [r, n] = S(e, ["class"]), a = () => m(r.class, Jo, Ku());
  return i(A.kbd, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    }
  }, n));
}
Xu.toString = () => $(Jo);
const Uu = C({
  listStyleType: "none"
}), Qu = C({
  marginEnd: "0.5rem"
}), Go = "hope-list", Yu = "& > *:not(style) ~ *:not(style)";
function br(e) {
  const [t, r] = S(e, ["class", "styleType", "stylePosition", "spacing"]), n = () => t.spacing ? {
    [Yu]: {
      mt: t.spacing
    }
  } : {}, a = () => m(t.class, Go, Uu({
    css: {
      listStyleType: t.styleType,
      listStylePosition: t.stylePosition,
      ...n()
    }
  }));
  return i(A.ul, p({
    role: "list",
    get class() {
      return a();
    }
  }, r));
}
br.toString = () => $(Go);
const ea = "hope-ordered-list";
function Zu(e) {
  const [t, r] = S(e, ["class"]), n = () => m(t.class, ea);
  return i(br, p({
    as: "ol",
    get class() {
      return n();
    },
    styleType: "decimal",
    marginStart: "1em"
  }, r));
}
Zu.toString = () => $(ea);
const ta = "hope-unordered-list";
function Ju(e) {
  const [t, r] = S(e, ["class"]), n = () => m(t.class, ta);
  return i(br, p({
    as: "ul",
    get class() {
      return n();
    },
    styleType: "initial",
    marginStart: "1em"
  }, r));
}
Ju.toString = () => $(ta);
const ra = "hope-list__icon";
function Gu(e) {
  const [t, r] = S(e, ["class"]), n = () => m(t.class, ra, Qu());
  return i(at, p({
    role: "presentation",
    get class() {
      return n();
    },
    verticalAlign: "text-bottom"
  }, r));
}
Gu.toString = () => $(ra);
const na = "hope-list__item";
function eg(e) {
  const [t, r] = S(e, ["class"]), n = () => m(t.class, na);
  return i(A.li, p({
    get class() {
      return n();
    }
  }, r));
}
eg.toString = () => $(na);
var Be = /* @__PURE__ */ ((e) => (e[e.Close = 0] = "Close", e[e.SelectAndClose = 1] = "SelectAndClose", e[e.First = 2] = "First", e[e.Last = 3] = "Last", e[e.Next = 4] = "Next", e[e.Open = 5] = "Open", e[e.OpenAndFocusLast = 6] = "OpenAndFocusLast", e[e.Previous = 7] = "Previous", e[e.Select = 8] = "Select", e[e.Type = 9] = "Type", e))(Be || {});
function Lr(e = [], t, r = []) {
  return e.filter((n) => n.disabled ? !1 : n.textValue.toLowerCase().indexOf(t.toLowerCase()) === 0 && r.indexOf(n.textValue) < 0);
}
function tg(e, t, r = 0) {
  const n = [...e.slice(r), ...e.slice(0, r)], a = Lr(n, t)[0], o = (s) => s.every((l) => l === s[0]);
  if (a)
    return e.indexOf(a);
  if (o(t.split(""))) {
    const s = Lr(n, t[0]);
    return e.indexOf(s[0]);
  } else
    return -1;
}
function rg(e, t) {
  const { key: r, altKey: n, ctrlKey: a, metaKey: o } = e;
  if (!t && ["ArrowDown", "Enter", " "].includes(r))
    return 5;
  if (!t && r === "ArrowUp")
    return 6;
  if (r === "Home")
    return 2;
  if (r === "End")
    return 3;
  if (r === "Backspace" || r === "Clear" || r.length === 1 && r !== " " && !n && !a && !o)
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
function Hr(e, t, r) {
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
function ng(e) {
  const { currentIndex: t, maxIndex: r, initialAction: n, isItemDisabled: a } = e;
  let o = Hr(t, r, n);
  for (; a(o); ) {
    let s = n;
    const l = o === 0, c = o === r;
    if (n === 2 && (s = 4), n === 3 && (s = 7), n === 7 && l) {
      o = t;
      break;
    }
    if (n === 4 && c) {
      o = t;
      break;
    }
    o = Hr(o, r, s);
  }
  return o;
}
function Fh(e) {
  const t = `hope-menu-${ue()}`, r = w().Menu, [n, a] = re([]), [o, s] = ae({
    get triggerId() {
      return e.id ?? `${t}-trigger`;
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
      var E, X;
      return e.closeOnSelect ?? ((X = (E = r == null ? void 0 : r.defaultProps) == null ? void 0 : E.root) == null ? void 0 : X.closeOnSelect) ?? !0;
    },
    get motionPreset() {
      var E, X, U, T, M;
      return e.motionPreset ? e.motionPreset : (X = (E = r == null ? void 0 : r.defaultProps) == null ? void 0 : E.root) != null && X.motionPreset ? (T = (U = r == null ? void 0 : r.defaultProps) == null ? void 0 : U.root) == null ? void 0 : T.motionPreset : (M = e.placement) != null && M.startsWith("top") ? "scale-bottom-left" : "scale-top-left";
    },
    get items() {
      return n();
    },
    opened: !1,
    activeIndex: 0,
    ignoreBlur: !1,
    searchString: "",
    searchTimeoutId: void 0
  });
  let l, c, u;
  const f = async () => {
    var U, T, M, xe;
    if (!l || !c)
      return;
    const {
      x: E,
      y: X
    } = await Dt(l, c, {
      placement: e.placement ?? ((T = (U = r == null ? void 0 : r.defaultProps) == null ? void 0 : U.root) == null ? void 0 : T.placement) ?? "bottom-start",
      middleware: [Et(e.offset ?? ((xe = (M = r == null ? void 0 : r.defaultProps) == null ? void 0 : M.root) == null ? void 0 : xe.offset) ?? 5), At(), Ot()]
    });
    c && Object.assign(c.style, {
      left: `${Math.round(E)}px`,
      top: `${Math.round(X)}px`
    });
  }, d = (E) => {
    o.searchTimeoutId && window.clearTimeout(o.searchTimeoutId);
    const X = window.setTimeout(() => {
      s("searchString", "");
    }, 500);
    return s("searchTimeoutId", X), s("searchString", (U) => U += E), o.searchString;
  }, g = (E) => {
    s("activeIndex", E);
  }, y = (E) => o.items[E].disabled, b = (E) => {
    var U;
    g(E);
    const X = o.items[E];
    (U = X.onSelect) == null || U.call(X), X.closeOnSelect ? ee(!1) : P();
  }, P = () => {
    l == null || l.focus();
  }, h = (E) => {
    if (!tt(l, zt(E))) {
      if (o.ignoreBlur) {
        s("ignoreBlur", !1);
        return;
      }
      o.opened && ee(!1, !1);
    }
  }, x = () => {
    ee(!o.opened, !1);
  }, z = (E) => {
    const {
      key: X
    } = E, U = o.items.length - 1, T = rg(E, o.opened);
    switch (T) {
      case Be.Last:
      case Be.First:
      case Be.Next:
      case Be.Previous:
        return E.preventDefault(), g(ng({
          currentIndex: o.activeIndex,
          maxIndex: U,
          initialAction: T,
          isItemDisabled: y
        }));
      case Be.SelectAndClose:
        E.preventDefault(), b(o.activeIndex);
        return;
      case Be.Close:
        return E.preventDefault(), ee(!1);
      case Be.Type:
        return v(X);
      case Be.Open:
        return E.preventDefault(), ee(!0);
      case Be.OpenAndFocusLast:
        return E.preventDefault(), ee(!0, !0, !0);
    }
  }, v = (E) => {
    ee(!0);
    const X = d(E), U = tg(o.items, X, o.activeIndex + 1);
    U >= 0 ? g(U) : (window.clearTimeout(o.searchTimeoutId), s("searchString", ""));
  }, D = (E) => {
    if (o.items[E].disabled) {
      P();
      return;
    }
    b(E);
  }, _ = (E) => {
    o.activeIndex !== E && g(E);
  }, R = () => {
    s("ignoreBlur", !0);
  }, j = () => {
    o.opened ? (f(), l && c && (u = Ht(l, c, f))) : u == null || u();
  }, ee = (E, X = !0, U = !1) => {
    o.opened !== E && (s("opened", E), s("activeIndex", U ? o.items.length - 1 : 0), j(), X && P());
  }, I = () => {
    g(-1);
  }, k = (E) => {
    tt(l, E) || ee(!1, !1);
  }, W = (E) => E === o.activeIndex, V = (E) => {
    l = E;
  }, Q = (E) => {
    c = E;
  }, J = (E) => {
    c && sn(c) && ln(E, c);
  }, Y = (E) => {
    const X = o.items.findIndex((T) => T.key === E.key);
    return X != -1 ? X : a((T) => [...T, E]).length - 1;
  }, K = () => o.opened, ve = {
    state: o,
    isItemActiveDescendant: W,
    assignTriggerRef: V,
    assignContentRef: Q,
    registerItem: Y,
    scrollToItem: J,
    onTriggerBlur: h,
    onTriggerClick: x,
    onTriggerKeyDown: z,
    onContentMouseLeave: I,
    onContentClickOutside: k,
    onItemClick: D,
    onItemMouseMove: _,
    onItemMouseDown: R
  };
  return i(oa.Provider, {
    value: ve,
    get children() {
      return i(H, {
        get when() {
          return Ct(e);
        },
        get fallback() {
          return e.children;
        },
        get children() {
          var E;
          return (E = e.children) == null ? void 0 : E.call(e, {
            opened: K
          });
        }
      });
    }
  });
}
const oa = te();
function qt() {
  const e = Z(oa);
  if (!e)
    throw new Error("[Hope UI]: useMenuContext must be used within a `<Menu />` component");
  return e;
}
function og(e) {
  const [t, r] = ae({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), n = (s) => {
    Yt(s, e.element()) && r("isPointerDown", !0);
  }, a = (s) => {
    if (t.ignoreEmulatedMouseEvents) {
      r("ignoreEmulatedMouseEvents", !1);
      return;
    }
    t.isPointerDown && e.handler && Yt(s, e.element()) && (r("isPointerDown", !1), e.handler(s));
  }, o = (s) => {
    r("ignoreEmulatedMouseEvents", !0), e.handler && t.isPointerDown && Yt(s, e.element()) && (r("isPointerDown", !1), e.handler(s));
  };
  ge(() => {
    const s = Tt(e.element());
    s.addEventListener("mousedown", n, !0), s.addEventListener("mouseup", a, !0), s.addEventListener("touchstart", n, !0), s.addEventListener("touchend", o, !0);
  }), fe(() => {
    const s = Tt(e.element());
    s.removeEventListener("mousedown", n, !0), s.removeEventListener("mouseup", a, !0), s.removeEventListener("touchstart", n, !0), s.removeEventListener("touchend", o, !0);
  });
}
function aa(e) {
  const t = ot(() => e.children);
  return og({
    element: () => t(),
    handler: (r) => e.onClickOutside(r)
  }), t;
}
const sa = "hope-menu__content";
function ag(e) {
  const t = w().Menu, r = qt(), [n, a] = S(e, ["ref", "class", "children"]), [o, s] = re(!1);
  me(ct(() => r.state.opened, () => {
    r.state.opened ? s(!0) : r.state.motionPreset === "none" && s(!1);
  }));
  const l = () => s(!1), c = ot(() => n.children), u = (y) => {
    r.assignContentRef(y), de(n.ref) ? n.ref(y) : n.ref = y;
  }, f = (y) => {
    r.onContentClickOutside(y.target);
  }, d = () => m(n.class, sa, il()), g = () => {
    switch (r.state.motionPreset) {
      case "scale-top-left":
        return Re.scaleTopLeft;
      case "scale-top-right":
        return Re.scaleTopRight;
      case "scale-bottom-left":
        return Re.scaleBottomLeft;
      case "scale-bottom-right":
        return Re.scaleBottomRight;
      case "none":
        return "hope-none";
    }
  };
  return i(H, {
    get when() {
      return o();
    },
    get children() {
      return i(gt, {
        get children() {
          return i(Ee, {
            get name() {
              return g();
            },
            appear: !0,
            onAfterExit: l,
            get children() {
              return i(H, {
                get when() {
                  return r.state.opened;
                },
                get children() {
                  return i(aa, {
                    onClickOutside: f,
                    get children() {
                      return i(B, p({
                        role: "menu",
                        tabindex: "-1",
                        ref: u,
                        get id() {
                          return r.state.menuContentId;
                        },
                        get "aria-activedescendant"() {
                          return r.state.activeDescendantId;
                        },
                        get "aria-labelledby"() {
                          return r.state.triggerId;
                        },
                        "aria-orientation": "vertical",
                        get class() {
                          return d();
                        },
                        get __baseStyle() {
                          var y;
                          return (y = t == null ? void 0 : t.baseStyle) == null ? void 0 : y.content;
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
ag.toString = () => $(sa);
const ia = te(), la = "hope-menu__group";
function sg(e) {
  const t = w().Menu, [r, n] = re(), [a, o] = S(e, ["class", "children"]), s = () => m(a.class, la, ll()), l = {
    setAriaLabelledBy: n
  };
  return i(ia.Provider, {
    value: l,
    get children() {
      return i(B, p({
        role: "group",
        get "aria-labelledby"() {
          return r();
        },
        get class() {
          return s();
        },
        get __baseStyle() {
          var c;
          return (c = t == null ? void 0 : t.baseStyle) == null ? void 0 : c.group;
        }
      }, o, {
        get children() {
          return a.children;
        }
      }));
    }
  });
}
sg.toString = () => $(la);
function ig() {
  return Z(ia);
}
const ca = "hope-menu__item", lg = "hope-menu__item__icon-wrapper", cg = "hope-menu__item__text", dg = "hope-menu__item__command";
function ug(e) {
  const t = ue(), r = w().Menu, n = qt(), [a, o] = re(-1);
  let s;
  const [l, c] = S(e, ["ref", "class", "children", "colorScheme", "icon", "iconSpacing", "command", "commandSpacing", "textValue", "disabled", "closeOnSelect", "onSelect", "onClick"]), u = () => ({
    key: t,
    textValue: l.textValue ?? (s == null ? void 0 : s.textContent) ?? "",
    disabled: !!l.disabled,
    closeOnSelect: l.closeOnSelect != null ? !!l.closeOnSelect : n.state.closeOnSelect,
    onSelect: l.onSelect
  }), f = () => `${n.state.itemIdPrefix}-${a()}`, d = () => n.isItemActiveDescendant(a()), g = (v) => {
    s = v, de(l.ref) ? l.ref(v) : l.ref = v;
  }, y = (v) => {
    v.stopPropagation(), n.onItemClick(a());
  }, b = (v) => {
    if (l.disabled && n.onItemMouseMove(-1), d() || l.disabled) {
      v.preventDefault(), v.stopPropagation();
      return;
    }
    n.onItemMouseMove(a());
  }, P = () => m(l.class, ca, dl({
    colorScheme: l.colorScheme
  })), h = () => m(lg, ul()), x = () => m(cg, gl()), z = () => m(dg, fl());
  return ge(() => {
    o(n.registerItem(u()));
  }), me(() => {
    d() && s && n.scrollToItem(s);
  }), i(B, p({
    ref: g,
    role: "menuitem",
    get id() {
      return f();
    },
    get "data-active"() {
      return d() ? "" : void 0;
    },
    get "data-disabled"() {
      return l.disabled ? "" : void 0;
    },
    "data-group": !0,
    get class() {
      return P();
    },
    get __baseStyle() {
      var v;
      return (v = r == null ? void 0 : r.baseStyle) == null ? void 0 : v.item;
    },
    onClick: y,
    onMouseMove: b,
    get onMouseDown() {
      return n.onItemMouseDown;
    }
  }, c, {
    get children() {
      return [i(H, {
        get when() {
          return l.icon;
        },
        get children() {
          return i(A.span, {
            "aria-hidden": "true",
            get class() {
              return h();
            },
            get __baseStyle() {
              var v;
              return (v = r == null ? void 0 : r.baseStyle) == null ? void 0 : v.itemIconWrapper;
            },
            get mr() {
              return l.iconSpacing ?? "0.5rem";
            },
            get children() {
              return l.icon;
            }
          });
        }
      }), i(H, {
        get when() {
          return l.children;
        },
        get children() {
          return i(A.span, {
            get class() {
              return x();
            },
            get __baseStyle() {
              var v;
              return (v = r == null ? void 0 : r.baseStyle) == null ? void 0 : v.itemText;
            },
            get children() {
              return l.children;
            }
          });
        }
      }), i(H, {
        get when() {
          return l.command;
        },
        get children() {
          return i(A.span, {
            get class() {
              return z();
            },
            get __baseStyle() {
              var v;
              return (v = r == null ? void 0 : r.baseStyle) == null ? void 0 : v.itemCommand;
            },
            get ml() {
              return l.commandSpacing ?? "0.5rem";
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
ug.toString = () => $(ca);
const da = "hope-menu__label";
function gg(e) {
  const t = ue(), r = w().Menu, n = qt(), a = ig(), [o, s] = S(e, ["class", "id"]), l = () => o.id ?? `${n.state.labelIdPrefix}-${t}`, c = () => m(o.class, da, cl());
  return ge(() => {
    a == null || a.setAriaLabelledBy(l());
  }), i(B, p({
    get id() {
      return l();
    },
    get class() {
      return c();
    },
    get __baseStyle() {
      var u;
      return (u = r == null ? void 0 : r.baseStyle) == null ? void 0 : u.label;
    }
  }, s));
}
gg.toString = () => $(da);
const ua = "hope-menu__trigger";
function fg(e) {
  const t = w().Menu, r = qt(), [n, a] = S(e, ["ref", "class", "onClick", "onKeyDown", "onBlur"]), o = (f) => {
    r.assignTriggerRef(f), de(n.ref) ? n.ref(f) : n.ref = f;
  }, s = (f) => {
    he(r.onTriggerClick, n.onClick)(f);
  }, l = (f) => {
    he(r.onTriggerKeyDown, n.onKeyDown)(f);
  }, c = (f) => {
    he(r.onTriggerBlur, n.onBlur)(f);
  }, u = () => m(n.class, ua, sl());
  return i(A.button, p({
    ref: o,
    get id() {
      return r.state.triggerId;
    },
    type: "button",
    "aria-haspopup": "menu",
    get "aria-controls"() {
      return r.state.menuContentId;
    },
    get "aria-expanded"() {
      return r.state.opened;
    },
    get class() {
      return u();
    },
    get __baseStyle() {
      var f;
      return (f = t == null ? void 0 : t.baseStyle) == null ? void 0 : f.trigger;
    },
    onClick: s,
    onKeyDown: l,
    onBlur: c
  }, a));
}
fg.toString = () => $(ua);
const ga = "hope-notification";
function fa(e) {
  const t = w().Notification, n = N({}, e), [a, o] = S(n, ["class", "status"]), s = () => m(a.class, ga, ml({
    status: a.status
  })), c = {
    status: () => a.status
  };
  return i(ha.Provider, {
    value: c,
    get children() {
      return i(B, p({
        role: "alert",
        get class() {
          return s();
        },
        get __baseStyle() {
          var u;
          return (u = t == null ? void 0 : t.baseStyle) == null ? void 0 : u.root;
        }
      }, o));
    }
  });
}
fa.toString = () => $(ga);
const ha = te();
function hg() {
  const e = Z(ha);
  if (!e)
    throw new Error("[Hope UI]: useNotificationContext must be used within an `<Notification />` component");
  return e;
}
const ce = {
  show: "hope-ui:show-notification",
  update: "hope-ui:update-notification",
  hide: "hope-ui:hide-notification",
  clear: "hope-ui:clear-notifications",
  clearQueue: "hope-ui:clear-notifications-queue",
  addToNotificationQueue: "hope-ui:add-to-notification-queue",
  setDebugMode: "hope-ui:set-debug-mode"
};
function st(e, t) {
  return new CustomEvent(e, { detail: t });
}
function pg(e) {
  window.dispatchEvent(st(ce.show, e));
}
function bg(e) {
  window.dispatchEvent(st(ce.update, e));
}
function mg(e) {
  window.dispatchEvent(st(ce.hide, e));
}
function vg() {
  window.dispatchEvent(st(ce.clear));
}
function Sg() {
  window.dispatchEvent(st(ce.clearQueue));
}
function xg(e) {
  window.dispatchEvent(st(ce.addToNotificationQueue, e));
}
function Cg(e) {
  window.dispatchEvent(st(ce.setDebugMode, e));
}
const Nh = {
  show: pg,
  update: bg,
  hide: mg,
  clear: vg,
  clearQueue: Sg,
  addToNotificationQueue: xg,
  setDebugMode: Cg
}, pa = "hope-notification__description";
function rr(e) {
  const t = w().Notification, [r, n] = S(e, ["class"]), a = () => m(r.class, pa, Cl());
  return i(B, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var o;
      return (o = t == null ? void 0 : t.baseStyle) == null ? void 0 : o.description;
    }
  }, n));
}
rr.toString = () => $(pa);
const ba = "hope-notification__icon";
function ma(e) {
  const t = w().Notification, {
    status: r
  } = hg(), a = N({
    boxSize: "$7"
  }, e), [o, s] = S(a, ["as", "class"]), l = () => m(o.class, ba, Sl({
    status: r()
  })), c = () => {
    if (o.as)
      return o.as;
    switch (r()) {
      case "success":
        return Sn;
      case "info":
        return yn;
      case "warning":
        return Cn;
      case "danger":
        return xn;
    }
  };
  return i(at, p({
    get as() {
      return c();
    },
    get class() {
      return l();
    },
    get __baseStyle() {
      var u;
      return (u = t == null ? void 0 : t.baseStyle) == null ? void 0 : u.icon;
    }
  }, s));
}
ma.toString = () => $(ba);
const va = "hope-notification__title";
function nr(e) {
  const t = w().Notification, [r, n] = S(e, ["class"]), a = () => m(r.class, va, xl());
  return i(B, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var o;
      return (o = t == null ? void 0 : t.baseStyle) == null ? void 0 : o.title;
    }
  }, n));
}
nr.toString = () => $(va);
function yg(e) {
  var f, d;
  const [t, r] = re(
    ((f = e.initialValues) == null ? void 0 : f.slice(0, e.limit)) ?? []
  ), [n, a] = re(((d = e.initialValues) == null ? void 0 : d.slice(e.limit)) ?? []), o = () => e.limit;
  return {
    state: {
      current: t,
      queue: n,
      limit: o
    },
    add: (...g) => {
      const y = [...t(), ...n(), ...g];
      r(y.slice(0, o())), a(y.slice(o()));
    },
    update: (g) => {
      const y = g([...t(), ...n()]);
      r(y.slice(0, o())), a(y.slice(o()));
    },
    clearQueue: () => {
      a([]);
    }
  };
}
const $g = C({
  display: "flex"
}), jt = "hope-stack";
function mr(e) {
  const [t, r] = S(e, ["class", "direction", "wrap", "spacing"]), n = () => m(t.class, jt, $g());
  return i(B, p({
    get class() {
      return n();
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
mr.toString = () => $(jt);
function wg(e) {
  const [t, r] = S(e, ["spacing"]);
  return i(mr, p({
    direction: "row",
    alignItems: "center",
    get columnGap() {
      return t.spacing;
    }
  }, r));
}
wg.toString = () => $(jt);
function Sa(e) {
  const [t, r] = S(e, ["spacing"]);
  return i(mr, p({
    direction: "column",
    alignItems: "center",
    get rowGap() {
      return t.spacing;
    }
  }, r));
}
Sa.toString = () => $(jt);
const xa = te();
function Ig() {
  const e = Z(xa);
  if (!e)
    throw new Error(
      "[Hope UI]: useNotificationsProviderContext must be used within a `<NotificationsProvider />` component"
    );
  return e;
}
function kg(e) {
  const t = Ig(), [r] = S(e, ["render", "id", "status", "title", "description", "duration", "persistent", "closable", "loading", "onMouseEnter", "onMouseLeave", "queuedNotificationUpdates"]);
  let n;
  const a = () => {
    window.clearTimeout(n), n = void 0;
  }, o = (d = !1) => {
    var g;
    !d && (((g = r.queuedNotificationUpdates) == null ? void 0 : g.length) ?? 0) > 0 || n && (t.debugMode() && console.log("NotificationContainer: clearTimeout called.", n, r.id, {
      ...r
    }), a());
  }, s = () => {
    var d;
    a(), t.debugMode() && console.log("NotificationContainer: [_closeNotification]", r.id, {
      ...r
    }), t.hideNotification(r.id), (d = e.onClose) == null || d.call(e, r.id);
  }, l = (d) => {
    var y;
    let g = r.queuedNotificationUpdates;
    if (g && g.length > 0) {
      let b = g[0], P = t.updateNotification(d ?? r.id, b);
      if (!P) {
        t.debugMode() && console.error("NotificationContainer: Failed to update queued notification", d ?? r.id, b, g), s();
        return;
      }
      a(), (y = e.onCloseWithNotificationQueued) == null || y.call(e, b), t.debugMode() && console.log("NotificationContainer: Update queued notifications", P, b, g), c();
    } else
      s();
  }, c = () => {
    var d;
    if (r.persistent && (((d = r.queuedNotificationUpdates) == null ? void 0 : d.length) ?? 0) > 0 || r.duration == null) {
      t.debugMode() && console.log("NotificationContainer: Persistent notification - setTimeout not called.", r.id, {
        ...r
      });
      return;
    }
    if (document.hidden) {
      t.debugMode() && console.log("NotificationContainer: tab hidden - deferring dismiss timer.", r.id, {
        ...r
      });
      return;
    }
    n = window.setTimeout(() => l(r.id), r.duration), t.debugMode() && console.log("NotificationContainer: [closeWithDelay] setTimeout called.", n, r.duration, r.id, {
      ...r
    });
  }, u = () => {
    document.hidden ? o(!0) : c();
  }, f = () => r.status && !r.loading;
  return ge(() => {
    t.debugMode() && console.log("NotificationContainer: onMount", r.id, {
      ...r
    }), c(), document.addEventListener("visibilitychange", u);
  }), fe(() => {
    a(), document.removeEventListener("visibilitychange", u);
  }), i(H, {
    get when() {
      return r.render;
    },
    get fallback() {
      return i(fa, {
        get status() {
          return r.status;
        },
        get pr() {
          return r.closable ? "$9" : "$3";
        },
        onMouseEnter: () => o(),
        onMouseLeave: c,
        get children() {
          return [i(H, {
            get when() {
              return f();
            },
            get children() {
              return i(ma, {
                mr: "$2_5"
              });
            }
          }), i(H, {
            get when() {
              return r.loading;
            },
            get children() {
              return i(Ln, {
                color: "$primary10",
                boxSize: "$8",
                mr: "$2_5",
                get class() {
                  return vl();
                }
              });
            }
          }), i(Rr, {
            get children() {
              return [i(St, {
                get when() {
                  return r.title && r.description;
                },
                get children() {
                  return i(Sa, {
                    alignItems: "flex-start",
                    spacing: "$1",
                    get children() {
                      return [i(nr, {
                        get children() {
                          return r.title;
                        }
                      }), i(rr, {
                        get children() {
                          return r.description;
                        }
                      })];
                    }
                  });
                }
              }), i(St, {
                get when() {
                  return r.title;
                },
                get children() {
                  return i(nr, {
                    get children() {
                      return r.title;
                    }
                  });
                }
              }), i(St, {
                get when() {
                  return r.description;
                },
                get children() {
                  return i(rr, {
                    get children() {
                      return r.description;
                    }
                  });
                }
              })];
            }
          }), i(H, {
            get when() {
              return r.closable;
            },
            get children() {
              return i(Vt, {
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
      return i(Lo, {
        w: "$full",
        justifyContent: "flex-end",
        onMouseEnter: () => o(),
        onMouseLeave: c,
        get children() {
          var d;
          return (d = r.render) == null ? void 0 : d.call(r, {
            id: r.id,
            close: l
          });
        }
      });
    }
  });
}
const _g = "hope-notification__list", Pg = 5e3;
function Vh(e) {
  const [t, r] = re(e.debugMode ?? !1), [n] = S(e, ["children", "placement", "duration", "persistent", "closable", "limit", "zIndex"]), a = ye(() => yg({
    initialValues: [],
    limit: n.limit ?? 10
  })), o = () => n.placement ?? "top-end", s = () => a().state.current(), l = () => s().map(([I]) => I), c = () => a().state.queue().map(([I]) => I), u = (I) => {
    const k = I.id ?? `hope-notification-${ue()}`, W = I.persistent ?? n.persistent ?? !1, V = I.duration ?? n.duration ?? Pg, Q = I.closable ?? n.closable ?? !0, J = I.queuedNotificationUpdates ?? [];
    return a().update((Y) => {
      const K = {
        ...I,
        queuedNotificationUpdates: J,
        id: k,
        persistent: W,
        duration: V,
        closable: Q
      };
      return K.id && Y.some((ve) => ve[0].id === K.id) ? (t() && console.log("[showNotification] Notification with the same id already exists, adding to queue", K.id, {
        ...K
      }), g(K.id, K), Y) : (t() && console.log("[showNotification] Adding to list and showing notification.", {
        ...K
      }), [...Y, ae(K)]);
    }), k;
  }, f = (I, k) => {
    let W = !1;
    return a().update((V) => {
      const Q = V.findIndex((ve) => ve[0].id === I);
      if (Q === -1)
        return V;
      const J = [...V];
      let Y = J[Q][0], K = J[Q][1];
      return K("description", k.description ?? Y.description), K("title", k.title ?? Y.title), K("status", k.status ?? Y.status), K("loading", k.loading ?? Y.loading), K("persistent", k.persistent ?? Y.persistent), K("duration", k.duration ?? Y.duration), K("closable", k.closable ?? Y.closable), K("onClose", k.onClose ?? Y.onClose), K("render", k.render ?? Y.render), t() && console.log("[updateNotification] Notification found in list, updating", I, k), W = !0, J;
    }), W;
  }, d = (I) => {
    let k = !1;
    a().update((W) => W.filter((V) => {
      var Q, J;
      return V[0].id === I ? (t() && console.log("[hideNotification] Hiding notification.", I, {
        ...V[0]
      }), V[1]("queuedNotificationUpdates", []), (J = (Q = V[0]).onClose) == null || J.call(Q, V[0].id), !1) : (!k && t() && (console.warn("[hideNotification] Keeping notification since it was not found in list.", I, {
        ...V[0]
      }), k = !0), !0);
    }));
  }, g = (I, k) => {
    !I || !k || a().update((W) => {
      const V = W.findIndex((Y) => Y[0].id === I);
      if (V === -1)
        return t() && console.log("[addToNotificationQueue] Notification not found in list.", I, k), W;
      let Q = W[V], J = Q[1];
      return J("queuedNotificationUpdates", [...Q[0].queuedNotificationUpdates ?? [], k]), t() && console.log("[addToNotificationQueue] Notification found in list, updating", I, k), [...W];
    });
  }, y = (I) => {
    a().update((k) => {
      var J;
      const W = k.findIndex((Y) => Y[0].id === I);
      if (W === -1)
        return t() && console.log("[removeNotificationFromQueue] Notification not found in list.", I), k;
      let V = k[W], Q = V[1];
      return Q("queuedNotificationUpdates", (J = V[0].queuedNotificationUpdates) == null ? void 0 : J.slice(1)), t() && console.log("[removeNotificationFromQueue] Queued Notification found in list, removing...", I), [...k];
    });
  }, b = () => a().update(() => []), P = () => a().clearQueue(), h = () => m(_g, bl({
    placement: o()
  })), x = () => {
    switch (o()) {
      case "top-start":
        return ke.slideInLeft;
      case "top":
        return ke.slideInTop;
      case "top-end":
        return ke.slideInRight;
      case "bottom-start":
        return ke.slideInLeft;
      case "bottom":
        return ke.slideInBottom;
      case "bottom-end":
        return ke.slideInRight;
      default:
        return ke.slideInRight;
    }
  }, z = {
    notifications: l,
    queue: c,
    showNotification: u,
    updateNotification: f,
    hideNotification: d,
    clear: b,
    clearQueue: P,
    addToNotificationQueue: g,
    debugMode: t
  }, v = (I) => I.detail, D = (I) => u(v(I)), _ = (I) => {
    const k = v(I);
    f(k.id, k);
  }, R = (I) => d(v(I)), j = (I) => {
    const k = v(I);
    g(k.id, k);
  }, ee = (I) => {
    r(v(I) ?? !1);
  };
  return ge(() => {
    window.addEventListener(ce.show, D), window.addEventListener(ce.update, _), window.addEventListener(ce.hide, R), window.addEventListener(ce.clear, b), window.addEventListener(ce.clearQueue, P), window.addEventListener(ce.addToNotificationQueue, j), window.addEventListener(ce.setDebugMode, ee);
  }), fe(() => {
    window.removeEventListener(ce.show, D), window.removeEventListener(ce.update, _), window.removeEventListener(ce.hide, R), window.removeEventListener(ce.clear, b), window.removeEventListener(ce.clearQueue, P), window.removeEventListener(ce.addToNotificationQueue, j), window.removeEventListener(ce.setDebugMode, ee);
  }), i(xa.Provider, {
    value: z,
    get children() {
      return [i(gt, {
        get children() {
          return i(B, {
            get class() {
              return h();
            },
            get zIndex() {
              return n.zIndex;
            },
            get children() {
              return i(qs, {
                get name() {
                  return x();
                },
                get children() {
                  return i(Wr, {
                    get each() {
                      return s();
                    },
                    children: (I) => i(kg, p(() => I[0], {
                      onCloseWithNotificationQueued: (k) => {
                        y(k.id);
                      },
                      onClose: () => {
                      }
                    }))
                  });
                }
              });
            }
          });
        }
      }), nt(() => n.children)];
    }
  });
}
const Tg = (e) => e.hasAttribute("tabindex");
function Ca(e) {
  return e.parentElement && Ca(e.parentElement) ? !0 : e.hidden;
}
function zg(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function Bg(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function Lg(e) {
  if (!Pc(e) || Ca(e) || zg(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : Bg(e) ? !0 : Tg(e);
}
function qh(e) {
  const t = `hope-popover-${ue()}`, r = w().Popover, [n, a] = ae({
    // eslint-disable-next-line solid/reactivity
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
      return e.id ?? t;
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
      return e.triggerMode ?? "click";
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
      return e.inline ?? !1;
    },
    get initialPlacement() {
      var T, M;
      return e.placement ?? ((M = (T = r == null ? void 0 : r.defaultProps) == null ? void 0 : T.root) == null ? void 0 : M.placement) ?? "bottom";
    },
    get offset() {
      var T, M;
      return e.offset ?? ((M = (T = r == null ? void 0 : r.defaultProps) == null ? void 0 : T.root) == null ? void 0 : M.offset) ?? 8;
    },
    get arrowPadding() {
      var T, M;
      return e.arrowPadding ?? ((M = (T = r == null ? void 0 : r.defaultProps) == null ? void 0 : T.root) == null ? void 0 : M.arrowPadding) ?? 8;
    },
    get openDelay() {
      var T, M;
      return e.openDelay ?? ((M = (T = r == null ? void 0 : r.defaultProps) == null ? void 0 : T.root) == null ? void 0 : M.openDelay) ?? 0;
    },
    get closeDelay() {
      var T, M;
      return e.closeDelay ?? ((M = (T = r == null ? void 0 : r.defaultProps) == null ? void 0 : T.root) == null ? void 0 : M.closeDelay) ?? 100;
    },
    get motionPreset() {
      var T, M;
      return e.motionPreset ?? ((M = (T = r == null ? void 0 : r.defaultProps) == null ? void 0 : T.root) == null ? void 0 : M.motionPreset) ?? "scale";
    },
    get closeOnBlur() {
      var T, M;
      return e.closeOnBlur ?? ((M = (T = r == null ? void 0 : r.defaultProps) == null ? void 0 : T.root) == null ? void 0 : M.closeOnBlur) ?? !0;
    },
    get closeOnEsc() {
      var T, M;
      return e.closeOnEsc ?? ((M = (T = r == null ? void 0 : r.defaultProps) == null ? void 0 : T.root) == null ? void 0 : M.closeOnEsc) ?? !0;
    },
    get trapFocus() {
      var T, M;
      return e.trapFocus ?? ((M = (T = r == null ? void 0 : r.defaultProps) == null ? void 0 : T.root) == null ? void 0 : M.trapFocus) ?? !1;
    }
  });
  let o, s, l, c, u, f, d, g;
  const y = () => `[id='${n.contentId}']`, b = (T) => {
    o = T;
  }, P = (T) => {
    s = T;
  }, h = (T) => {
    l = T;
  }, x = (T) => {
    c = T;
  };
  async function z() {
    var ne, be, bt;
    const T = o ?? s;
    if (!T || !l)
      return;
    const M = [Et(n.offset)];
    n.inline && M.push(Nr()), M.push(At()), M.push(Ot({
      padding: e.shiftPadding
    })), c && M.push(Vr({
      element: c,
      padding: n.arrowPadding
    })), M.push(qr());
    const {
      x: xe,
      y: Oe,
      placement: Pe,
      middlewareData: Me
    } = await Dt(T, l, {
      placement: n.initialPlacement,
      middleware: M
    });
    if (Pe !== n.finalPlacement && a("finalPlacement", Pe), !l)
      return;
    const F = (ne = Me.hide) == null ? void 0 : ne.referenceHidden;
    if (Object.assign(l.style, {
      left: `${Math.round(xe)}px`,
      top: `${Math.round(Oe)}px`,
      visibility: F ? "hidden" : "visible"
    }), !c)
      return;
    const pe = (be = Me.arrow) == null ? void 0 : be.x, lt = (bt = Me.arrow) == null ? void 0 : bt.y, L = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right"
    }[Pe.split("-")[0]], O = `${(Math.round(c.clientWidth / 2) + 1) * -1}px`;
    Object.assign(c.style, {
      left: pe != null ? `${Math.round(pe)}px` : "",
      top: lt != null ? `${Math.round(lt)}px` : "",
      right: "",
      bottom: "",
      [L]: O
    });
  }
  const v = () => {
    var T;
    n.isControlled || a("_opened", !0), (T = e.onOpen) == null || T.call(e), z();
  }, D = () => {
    var T;
    n.isControlled || a("_opened", !1), (T = e.onClose) == null || T.call(e);
  }, _ = () => {
    !n.isHovering && D();
  }, R = () => {
    f = window.setTimeout(v, n.openDelay);
  }, j = () => {
    f && window.clearTimeout(f), d = window.setTimeout(D, n.closeDelay);
  }, ee = () => {
    if (Lt)
      return;
    const T = o ?? s;
    !T || !l || (g = Ht(T, l, z));
  }, I = () => {
    if (!n.initialFocus) {
      l == null || l.focus();
      return;
    }
    const T = document.querySelector(n.initialFocus);
    T && Lg(T) && (T == null || T.focus());
  }, k = (T) => {
    const M = zt(T), xe = !tt(l, M);
    n.opened && n.closeOnBlur && xe && j();
  }, W = () => {
    K(!1), f && window.clearTimeout(f), d = window.setTimeout(_, n.closeDelay);
  }, V = (T) => {
    const M = zt(T), xe = tt(l, M), Oe = tt(s, M), Pe = !xe && !Oe;
    n.opened && n.closeOnBlur && Pe && j();
  }, Q = W, J = () => {
    ee(), n.trapFocus && l ? (u = Fr(l, {
      initialFocus: n.initialFocus,
      fallbackFocus: y(),
      allowOutsideClick: !1
    }), u.activate()) : I();
  }, Y = () => {
    u == null || u.deactivate(), g == null || g();
  }, K = (T) => a("isHovering", T), ve = (T) => a("headerMounted", T), E = (T) => a("bodyMounted", T), X = () => n.opened;
  fe(() => {
    window.clearTimeout(f), window.clearTimeout(d);
  });
  const U = {
    state: n,
    assignAnchorRef: b,
    assignTriggerRef: P,
    assignPopoverRef: h,
    assignArrowRef: x,
    openWithDelay: R,
    closeWithDelay: j,
    onTriggerBlur: k,
    onTriggerMouseLeave: W,
    onPopoverFocusOut: V,
    onPopoverMouseLeave: Q,
    updatePopoverPosition: z,
    afterPopoverOpen: J,
    afterPopoverClose: Y,
    setIsHovering: K,
    setHeaderMounted: ve,
    setBodyMounted: E
  };
  return i(ya.Provider, {
    value: U,
    get children() {
      return i(H, {
        get when() {
          return Ct(e);
        },
        get fallback() {
          return e.children;
        },
        get children() {
          var T;
          return (T = e.children) == null ? void 0 : T.call(e, {
            opened: X,
            onClose: j
          });
        }
      });
    }
  });
}
const ya = te();
function it() {
  const e = Z(ya);
  if (!e)
    throw new Error("[Hope UI]: usePopoverContext must be used within a `<Popover />` component");
  return e;
}
function jh(e) {
  const t = it(), [r, n] = S(e, ["ref", "as"]);
  return i(Or, p({
    get component() {
      return r.as;
    },
    ref: (o) => {
      t.assignAnchorRef(o), de(r.ref) ? r.ref(o) : r.ref = o;
    }
  }, n));
}
const $a = "hope-popover__arrow";
function Hg(e) {
  const t = w().Popover, r = it(), [n, a] = S(e, ["class"]), o = ye(() => r.state.finalPlacement.split("-")[0]), s = () => m(n.class, $a, Pl({
    popoverPlacement: o()
  }));
  return i(B, p({
    ref(l) {
      var c = r.assignArrowRef;
      typeof c == "function" ? c(l) : r.assignArrowRef = l;
    },
    get class() {
      return s();
    },
    get __baseStyle() {
      var l;
      return (l = t == null ? void 0 : t.baseStyle) == null ? void 0 : l.arrow;
    }
  }, a));
}
Hg.toString = () => $($a);
const wa = "hope-popover__body";
function Dg(e) {
  const t = w().Popover, r = it(), [n, a] = S(e, ["class"]), o = () => m(n.class, wa, Il());
  return ge(() => r.setBodyMounted(!0)), fe(() => r.setBodyMounted(!1)), i(B, p({
    get class() {
      return o();
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
Dg.toString = () => $(wa);
const Ia = "hope-popover__close-button";
function Eg(e) {
  var u, f, d, g, y, b;
  const t = w().Popover, r = it(), n = {
    "aria-label": ((f = (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.closeButton) == null ? void 0 : f["aria-label"]) ?? "Close popover",
    size: ((g = (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.closeButton) == null ? void 0 : g.size) ?? "sm",
    icon: (b = (y = t == null ? void 0 : t.defaultProps) == null ? void 0 : y.closeButton) == null ? void 0 : b.icon
  }, a = N(n, e), [o, s] = S(a, ["class", "onClick"]), l = () => m(o.class, Ia, _l());
  return i(Vt, p({
    get class() {
      return l();
    },
    get __baseStyle() {
      var P;
      return (P = t == null ? void 0 : t.baseStyle) == null ? void 0 : P.closeButton;
    },
    onClick: (P) => {
      he(o.onClick, (h) => {
        h.stopPropagation(), r.closeWithDelay();
      })(P);
    }
  }, s));
}
Eg.toString = () => $(Ia);
const ka = "hope-popover__content";
function Ag(e) {
  const t = w().Popover, r = it(), [n, a] = re(!1), [o, s] = S(e, ["ref", "class", "onKeyDown", "onFocusOut", "onMouseEnter", "onMouseLeave"]), l = (x) => {
    r.assignPopoverRef(x), de(o.ref) ? o.ref(x) : o.ref = x;
  }, c = (x) => {
    r.state.closeOnEsc && x.key === "Escape" && r.closeWithDelay();
  }, u = (x) => {
    he(o.onKeyDown, c)(x);
  }, f = (x) => {
    he(o.onFocusOut, r.onPopoverFocusOut)(x);
  }, d = (x) => {
    oe(o.onMouseEnter, x), r.setIsHovering(!0);
  }, g = (x) => {
    oe(o.onMouseLeave, x), r.onPopoverMouseLeave();
  }, y = () => {
    Lt || (document.addEventListener("keydown", c), r.afterPopoverOpen());
  }, b = () => {
    document.removeEventListener("keydown", c), r.afterPopoverClose(), a(!1);
  }, P = () => m(o.class, ka, $l()), h = () => {
    switch (r.state.motionPreset) {
      case "scale":
        return Je.scale;
      case "none":
        return "hope-none";
    }
  };
  return me(() => {
    r.state.opened ? a(!0) : r.state.motionPreset === "none" && a(!1);
  }), i(H, {
    get when() {
      return n();
    },
    get children() {
      return i(gt, {
        get children() {
          return i(Ee, {
            get name() {
              return h();
            },
            appear: !0,
            get onBeforeEnter() {
              return r.updatePopoverPosition;
            },
            onAfterEnter: y,
            onAfterExit: b,
            get children() {
              return i(H, {
                get when() {
                  return r.state.opened;
                },
                get children() {
                  return i(A.section, p({
                    ref: l,
                    tabIndex: -1,
                    get id() {
                      return r.state.contentId;
                    },
                    get role() {
                      return r.state.triggerOnHover ? "tooltip" : "dialog";
                    },
                    get "aria-labelledby"() {
                      return r.state.headerMounted ? r.state.headerId : void 0;
                    },
                    get "aria-describedby"() {
                      return r.state.bodyMounted ? r.state.bodyId : void 0;
                    },
                    get class() {
                      return P();
                    },
                    get __baseStyle() {
                      var x;
                      return (x = t == null ? void 0 : t.baseStyle) == null ? void 0 : x.content;
                    },
                    onKeyDown: u,
                    onFocusOut: f,
                    get onMouseEnter() {
                      return r.state.triggerOnHover ? d : void 0;
                    },
                    get onMouseLeave() {
                      return r.state.triggerOnHover ? g : void 0;
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
Ag.toString = () => $(ka);
const _a = "hope-popover__footer";
function Og(e) {
  const t = w().Popover, [r, n] = S(e, ["class"]), a = () => m(r.class, _a, kl());
  return i(B, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var o;
      return (o = t == null ? void 0 : t.baseStyle) == null ? void 0 : o.footer;
    }
  }, n));
}
Og.toString = () => $(_a);
const Pa = "hope-popover__header";
function Mg(e) {
  const t = w().Popover, r = it(), [n, a] = S(e, ["class"]), o = () => m(n.class, Pa, wl());
  return ge(() => r.setHeaderMounted(!0)), fe(() => r.setHeaderMounted(!1)), i(B, p({
    get class() {
      return o();
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
Mg.toString = () => $(Pa);
function Kh(e) {
  const t = it(), [r, n] = S(e, ["ref", "onClick", "onKeyDown", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave"]), a = (d) => {
    t.assignTriggerRef(d), de(r.ref) ? r.ref(d) : r.ref = d;
  }, o = (d) => {
    oe(r.onClick, d), t.state.opened ? t.closeWithDelay() : t.openWithDelay();
  }, s = (d) => {
    oe(r.onKeyDown, d), d.key === "Escape" && t.closeWithDelay();
  }, l = (d) => {
    oe(r.onFocus, d), t.openWithDelay();
  }, c = (d) => {
    he(r.onBlur, t.onTriggerBlur)(d);
  }, u = (d) => {
    oe(r.onMouseEnter, d), t.setIsHovering(!0), t.openWithDelay();
  }, f = (d) => {
    oe(r.onMouseLeave, d), t.onTriggerMouseLeave();
  };
  return i(A.button, p({
    ref: a,
    get id() {
      return t.state.triggerId;
    },
    type: "button",
    "aria-haspopup": "dialog",
    get "aria-controls"() {
      return t.state.contentId;
    },
    get "aria-expanded"() {
      return t.state.opened;
    },
    get onClick() {
      return t.state.triggerOnClick ? o : void 0;
    },
    get onKeyDown() {
      return t.state.triggerOnHover ? s : void 0;
    },
    get onFocus() {
      return t.state.triggerOnHover ? l : void 0;
    },
    get onBlur() {
      return t.state.triggerOnHover ? c : void 0;
    },
    get onMouseEnter() {
      return t.state.triggerOnHover ? u : void 0;
    },
    get onMouseLeave() {
      return t.state.triggerOnHover ? f : void 0;
    }
  }, n));
}
const Rg = ft({
  "0%": { left: "-40%" },
  "100%": { left: "100%" }
}), Wg = ft({
  from: { backgroundPosition: "1rem 0" },
  to: { backgroundPosition: "0 0" }
}), Fg = C({
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
}), Ng = C({
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
        animation: `${Rg} 1200ms ease infinite normal none running`
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
        animation: `${Wg} 750ms linear infinite`
      }
    }
  ]
}), Vg = C({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  color: "$neutral12",
  lineHeight: "$none",
  fontWeight: "$bold",
  textAlign: "center",
  transform: "translate(-50%, -50%)"
}), Ta = te(), za = "hope-progress";
function qg(e) {
  var f, d, g, y;
  const t = w().Progress, [r] = ae({
    get min() {
      return e.min ?? 0;
    },
    get max() {
      return e.max ?? 100;
    },
    get value() {
      return e.value ?? 0;
    },
    get percent() {
      return tn(this.value, this.min, this.max);
    },
    get indeterminate() {
      return e.indeterminate ?? !1;
    },
    get ariaValueText() {
      if (!this.indeterminate)
        return de(this.getValueText) ? this.getValueText(this.value, this.percent) : e.valueText ?? `${this.percent}%`;
    },
    get getValueText() {
      return e.getValueText;
    }
  }), n = {
    size: ((d = (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.root) == null ? void 0 : d.size) ?? "md",
    trackColor: ((y = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.root) == null ? void 0 : y.trackColor) ?? "$neutral4"
  }, a = N(n, e), [o, s, l] = S(a, ["class", "size", "trackColor"], ["min", "max", "value", "indeterminate", "valueText", "getValueText"]), c = () => m(o.class, za, Fg({
    size: o.size
  })), u = {
    state: r
  };
  return i(Ta.Provider, {
    value: u,
    get children() {
      return i(B, p({
        role: "progressbar",
        get "data-indeterminate"() {
          return r.indeterminate ? "" : void 0;
        },
        get "aria-valuemin"() {
          return r.min;
        },
        get "aria-valuemax"() {
          return r.max;
        },
        get "aria-valuenow"() {
          return r.indeterminate ? void 0 : r.value;
        },
        get "aria-valuetext"() {
          return r.ariaValueText;
        },
        get class() {
          return c();
        },
        get __baseStyle() {
          var b;
          return (b = t == null ? void 0 : t.baseStyle) == null ? void 0 : b.root;
        },
        get backgroundColor() {
          return o.trackColor;
        }
      }, l));
    }
  });
}
qg.toString = () => $(za);
function Ba() {
  const e = Z(Ta);
  if (!e)
    throw new Error("[Hope UI]: useProgressContext must be used within a `<Progress />` component");
  return e;
}
const La = "hope-progress__indicator";
function jg(e) {
  const t = w().Progress, r = Ba(), a = N({
    color: "$primary9"
  }, e), [o, s] = S(a, ["class", "color", "striped", "animated"]), l = () => r.state.indeterminate ? {
    backgroundImage: `linear-gradient(to right, transparent 0%, ${o.color} 50%, transparent 100%)`
  } : {
    backgroundColor: o.color
  }, c = () => m(o.class, La, Ng({
    striped: o.striped,
    animated: o.animated,
    indeterminate: r.state.indeterminate === !0,
    // ensure a boolean is passed so compound variants works correctly
    css: {
      ...l(),
      width: `${r.state.percent}%`
    }
  }));
  return i(B, p({
    get class() {
      return c();
    },
    get __baseStyle() {
      var u;
      return (u = t == null ? void 0 : t.baseStyle) == null ? void 0 : u.indicator;
    }
  }, s));
}
jg.toString = () => $(La);
const Ha = "hope-progress__label";
function Kg(e) {
  const t = w().Progress, r = Ba(), [n, a] = S(e, ["class", "children"]), o = () => m(n.class, Ha, Vg());
  return i(B, p({
    get class() {
      return o();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.label;
    }
  }, a, {
    get children() {
      return i(H, {
        get when() {
          return n.children;
        },
        get fallback() {
          return r.state.ariaValueText;
        },
        get children() {
          return n.children;
        }
      });
    }
  }));
}
Kg.toString = () => $(Ha);
const Xg = C(fr, {
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
}), Ug = C(hr), Qg = C(pr, {
  borderRadius: "$full",
  "&[data-checked]::before": {
    content: "",
    display: "inline-block",
    position: "relative",
    boxSize: "calc(50% + 1px)",
    // beacause of the 1px border
    borderRadius: "$full",
    backgroundColor: "$loContrast"
  }
}), Da = "hope-radio-group";
function Yg(e) {
  const t = `hope-radio-group-${ue()}--radio`, r = w().Radio, [n, a] = ae({
    // eslint-disable-next-line solid/reactivity
    _value: e.defaultValue,
    get isControlled() {
      return e.value !== void 0;
    },
    get value() {
      return this.isControlled ? e.value : this._value;
    },
    get name() {
      return e.name ?? t;
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
      var d, g;
      return e.variant ?? ((g = (d = r == null ? void 0 : r.defaultProps) == null ? void 0 : d.group) == null ? void 0 : g.variant);
    },
    get colorScheme() {
      var d, g;
      return e.colorScheme ?? ((g = (d = r == null ? void 0 : r.defaultProps) == null ? void 0 : d.group) == null ? void 0 : g.colorScheme);
    },
    get size() {
      var d, g;
      return e.size ?? ((g = (d = r == null ? void 0 : r.defaultProps) == null ? void 0 : d.group) == null ? void 0 : g.size);
    }
  }), [o, s, l] = S(e, ["class", "onChange"], ["value", "defaultValue", "name", "required", "disabled", "readOnly", "invalid"]), c = (d) => {
    var y;
    const g = d.target.value;
    a("_value", g), (y = o.onChange) == null || y.call(o, String(g));
  }, u = () => m(o.class, Da), f = {
    state: n,
    onChange: c
  };
  return i(Ea.Provider, {
    value: f,
    get children() {
      return i(B, p({
        role: "radiogroup",
        get class() {
          return u();
        },
        get __baseStyle() {
          var d;
          return (d = r == null ? void 0 : r.baseStyle) == null ? void 0 : d.group;
        }
      }, l));
    }
  });
}
Yg.toString = () => $(Da);
const Ea = te();
function Zg() {
  return Z(Ea);
}
var Jg = /* @__PURE__ */ se("<input type=radio>");
const Aa = "hope-radio", Gg = "hope-radio__input", ef = "hope-radio__control", tf = "hope-radio__label";
function rf(e) {
  const t = `hope-radio-${ue()}`, r = w().Radio, n = ht(), a = Zg(), o = pt(e), [s, l] = ae({
    // eslint-disable-next-line solid/reactivity
    _checked: !!e.defaultChecked,
    isFocused: !1,
    get isControlled() {
      return e.checked !== void 0;
    },
    get checked() {
      if (a) {
        const v = a.state.value;
        return v != null ? String(e.value) === String(v) : !1;
      }
      return this.isControlled ? !!e.checked : this._checked;
    },
    get variant() {
      var v, D, _;
      return e.variant ?? ((v = a == null ? void 0 : a.state) == null ? void 0 : v.variant) ?? ((_ = (D = r == null ? void 0 : r.defaultProps) == null ? void 0 : D.root) == null ? void 0 : _.variant) ?? "outline";
    },
    get colorScheme() {
      var v, D, _;
      return e.colorScheme ?? ((v = a == null ? void 0 : a.state) == null ? void 0 : v.colorScheme) ?? ((_ = (D = r == null ? void 0 : r.defaultProps) == null ? void 0 : D.root) == null ? void 0 : _.colorScheme) ?? "primary";
    },
    get size() {
      var v, D, _;
      return e.size ?? ((v = a == null ? void 0 : a.state) == null ? void 0 : v.size) ?? ((_ = (D = r == null ? void 0 : r.defaultProps) == null ? void 0 : D.root) == null ? void 0 : _.size) ?? "md";
    },
    get labelPlacement() {
      var v, D, _;
      return e.labelPlacement ?? ((v = a == null ? void 0 : a.state) == null ? void 0 : v.labelPlacement) ?? ((_ = (D = r == null ? void 0 : r.defaultProps) == null ? void 0 : D.root) == null ? void 0 : _.labelPlacement) ?? "end";
    },
    get id() {
      return n && !a ? o.id : e.id ?? t;
    },
    get name() {
      return e.name ?? (a == null ? void 0 : a.state.name);
    },
    get value() {
      return e.value;
    },
    get required() {
      return o.required ?? (a == null ? void 0 : a.state.required);
    },
    get disabled() {
      return o.disabled ?? (a == null ? void 0 : a.state.disabled);
    },
    get invalid() {
      return o.invalid ?? (a == null ? void 0 : a.state.invalid);
    },
    get readOnly() {
      return o.readOnly ?? (a == null ? void 0 : a.state.readOnly);
    },
    get "aria-required"() {
      return this.required ? !0 : void 0;
    },
    get "aria-disabled"() {
      return this.disabled ? !0 : void 0;
    },
    get "aria-invalid"() {
      return this.invalid ? !0 : void 0;
    },
    get "aria-readonly"() {
      return this.readOnly ? !0 : void 0;
    },
    get "aria-label"() {
      return e["aria-label"];
    },
    get "aria-labelledby"() {
      return e["aria-labelledby"];
    },
    get "aria-describedby"() {
      return e["aria-describedby"];
    },
    get "data-focus"() {
      return this.isFocused ? "" : void 0;
    },
    get "data-checked"() {
      return this.checked ? "" : void 0;
    },
    get "data-required"() {
      return this.required ? "" : void 0;
    },
    get "data-disabled"() {
      return this.disabled ? "" : void 0;
    },
    get "data-invalid"() {
      return this.invalid ? "" : void 0;
    },
    get "data-readonly"() {
      return this.readOnly ? "" : void 0;
    }
  }), [c, u, f] = S(e, ["class", "children", "ref", "tabIndex", "onChange"], ["variant", "colorScheme", "size", "labelPlacement", "id", "name", "value", "checked", "defaultChecked", "required", "disabled", "invalid", "readOnly", "onFocus", "onBlur"]), d = (v) => {
    if (s.readOnly || s.disabled) {
      v.preventDefault();
      return;
    }
    if (!s.isControlled) {
      const D = v.target;
      l("_checked", D.checked);
    }
    he(a == null ? void 0 : a.onChange, c.onChange)(v);
  }, g = (v) => {
    l("isFocused", !0), oe(o.onFocus, v);
  }, y = (v) => {
    l("isFocused", !1), oe(o.onBlur, v);
  }, b = () => m(c.class, Aa, Xg({
    size: s.size,
    labelPlacement: s.labelPlacement
  })), P = () => m(Gg, Wt()), h = () => m(ef, Qg({
    variant: s.variant,
    colorScheme: s.colorScheme,
    size: s.size
  })), x = () => m(tf, Ug()), z = {
    state: s,
    onChange: d,
    onFocus: g,
    onBlur: y
  };
  return i(Oa.Provider, {
    value: z,
    get children() {
      return i(A.label, p({
        get class() {
          return b();
        },
        get __baseStyle() {
          var v;
          return (v = r == null ? void 0 : r.baseStyle) == null ? void 0 : v.root;
        },
        get for() {
          return s.id;
        },
        "data-group": !0,
        get "data-focus"() {
          return s["data-focus"];
        },
        get "data-checked"() {
          return s["data-checked"];
        },
        get "data-required"() {
          return s["data-required"];
        },
        get "data-disabled"() {
          return s["data-disabled"];
        },
        get "data-invalid"() {
          return s["data-invalid"];
        },
        get "data-readonly"() {
          return s["data-readonly"];
        }
      }, f, {
        get children() {
          return [(() => {
            var v = Jg();
            v.addEventListener("blur", y), v.addEventListener("focus", g), v.addEventListener("change", d);
            var D = c.ref;
            return typeof D == "function" ? ar(D, v) : c.ref = v, _e((_) => {
              var R = P(), j = c.tabIndex, ee = s.id, I = s.name, k = s.required, W = s.disabled, V = s.readOnly, Q = s["aria-required"], J = s["aria-disabled"], Y = s["aria-invalid"], K = s["aria-readonly"], ve = s["aria-label"], E = s["aria-labelledby"], X = s["aria-describedby"];
              return R !== _.e && xt(v, _.e = R), j !== _.t && G(v, "tabindex", _.t = j), ee !== _.a && G(v, "id", _.a = ee), I !== _.o && G(v, "name", _.o = I), k !== _.i && (v.required = _.i = k), W !== _.n && (v.disabled = _.n = W), V !== _.s && (v.readOnly = _.s = V), Q !== _.h && G(v, "aria-required", _.h = Q), J !== _.r && G(v, "aria-disabled", _.r = J), Y !== _.d && G(v, "aria-invalid", _.d = Y), K !== _.l && G(v, "aria-readonly", _.l = K), ve !== _.u && G(v, "aria-label", _.u = ve), E !== _.c && G(v, "aria-labelledby", _.c = E), X !== _.w && G(v, "aria-describedby", _.w = X), _;
            }, {
              e: void 0,
              t: void 0,
              a: void 0,
              o: void 0,
              i: void 0,
              n: void 0,
              s: void 0,
              h: void 0,
              r: void 0,
              d: void 0,
              l: void 0,
              u: void 0,
              c: void 0,
              w: void 0
            }), _e(() => v.value = s.value), _e(() => v.checked = s.checked), v;
          })(), i(A.span, p({
            "aria-hidden": !0,
            get class() {
              return h();
            },
            get __baseStyle() {
              var v;
              return (v = r == null ? void 0 : r.baseStyle) == null ? void 0 : v.control;
            },
            get "data-focus"() {
              return s["data-focus"];
            },
            get "data-checked"() {
              return s["data-checked"];
            },
            get "data-required"() {
              return s["data-required"];
            },
            get "data-disabled"() {
              return s["data-disabled"];
            },
            get "data-invalid"() {
              return s["data-invalid"];
            },
            get "data-readonly"() {
              return s["data-readonly"];
            }
          }, f)), i(A.span, {
            get class() {
              return x();
            },
            get __baseStyle() {
              var v;
              return (v = r == null ? void 0 : r.baseStyle) == null ? void 0 : v.label;
            },
            get "data-focus"() {
              return s["data-focus"];
            },
            get "data-checked"() {
              return s["data-checked"];
            },
            get "data-required"() {
              return s["data-required"];
            },
            get "data-disabled"() {
              return s["data-disabled"];
            },
            get "data-invalid"() {
              return s["data-invalid"];
            },
            get "data-readonly"() {
              return s["data-readonly"];
            },
            get children() {
              return i(H, {
                get when() {
                  return Ct(c);
                },
                get fallback() {
                  return c.children;
                },
                get children() {
                  var v;
                  return (v = c.children) == null ? void 0 : v.call(c, {
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
rf.toString = () => $(Aa);
const Oa = te();
function Xh() {
  const e = Z(Oa);
  if (!e)
    throw new Error("[Hope UI]: useRadioContext must be used within a `<Radio />` component");
  return e;
}
var De = /* @__PURE__ */ ((e) => (e[e.Close = 0] = "Close", e[e.SelectAndClose = 1] = "SelectAndClose", e[e.First = 2] = "First", e[e.Last = 3] = "Last", e[e.Next = 4] = "Next", e[e.Open = 5] = "Open", e[e.Previous = 6] = "Previous", e[e.Select = 7] = "Select", e[e.Type = 8] = "Type", e))(De || {});
function Dr(e = [], t, r = []) {
  return e.filter((n) => n.disabled ? !1 : n.textValue.toLowerCase().indexOf(t.toLowerCase()) === 0 && r.indexOf(n.textValue) < 0);
}
function nf(e, t, r = 0) {
  const n = [...e.slice(r), ...e.slice(0, r)], a = Dr(n, t)[0], o = (s) => s.every((l) => l === s[0]);
  if (a)
    return e.indexOf(a);
  if (o(t.split(""))) {
    const s = Dr(n, t[0]);
    return e.indexOf(s[0]);
  } else
    return -1;
}
function of(e, t) {
  const { key: r, altKey: n, ctrlKey: a, metaKey: o } = e;
  if (!t && ["ArrowDown", "ArrowUp", "Enter", " "].includes(r))
    return 5;
  if (r === "Home" || r === "PageUp")
    return 2;
  if (r === "End" || r === "PageDown")
    return 3;
  if (r === "Backspace" || r === "Clear" || r.length === 1 && r !== " " && !n && !a && !o)
    return 8;
  if (t) {
    if (r === "ArrowUp" && n)
      return 1;
    if (r === "ArrowDown" && !n)
      return 4;
    if (r === "ArrowUp")
      return 6;
    if (r === "Escape")
      return 0;
    if (r === "Enter" || r === " ")
      return 1;
  }
}
function Er(e, t, r) {
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
function af(e) {
  const { currentIndex: t, maxIndex: r, initialAction: n, isOptionDisabled: a } = e;
  let o = Er(t, r, n);
  for (; a(o); ) {
    let s = n;
    const l = o === 0, c = o === r;
    if (n === 2 && (s = 4), n === 3 && (s = 6), n === 6 && l) {
      o = t;
      break;
    }
    if (n === 4 && c) {
      o = t;
      break;
    }
    o = Er(o, r, s);
  }
  return o;
}
function kt(e, t) {
  return String(e.value) === String(t.value);
}
function sf(e) {
  const t = `hope-select-${ue()}`, r = w().Select, n = pt(e), [a, o] = re(!1), [s, l] = re([]), [c, u] = ae({
    get isControlled() {
      return e.value !== void 0;
    },
    get value() {
      return this.isControlled ? e.value : this.multiple ? this.selectedOptions.map((L) => L.value) : this.selectedOptions[0].value ?? void 0;
    },
    get multiple() {
      return e.multiple;
    },
    get baseId() {
      return e.id ?? n.id ?? t;
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
      return e.disabled ?? n.disabled;
    },
    get invalid() {
      return e.invalid ?? n.invalid;
    },
    get variant() {
      var L, O;
      return e.variant ?? ((O = (L = r == null ? void 0 : r.defaultProps) == null ? void 0 : L.root) == null ? void 0 : O.variant) ?? "outline";
    },
    get size() {
      var L, O;
      return e.size ?? ((O = (L = r == null ? void 0 : r.defaultProps) == null ? void 0 : L.root) == null ? void 0 : O.size) ?? "md";
    },
    get motionPreset() {
      var L, O;
      return e.motionPreset ?? ((O = (L = r == null ? void 0 : r.defaultProps) == null ? void 0 : L.root) == null ? void 0 : O.motionPreset) ?? "fade-in-top";
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
  let f, d, g, y;
  const b = async () => {
    var O, ne;
    if (!f || !d)
      return;
    const L = await Dt(f, d, {
      placement: "bottom",
      middleware: [Et(e.offset ?? ((ne = (O = r == null ? void 0 : r.defaultProps) == null ? void 0 : O.root) == null ? void 0 : ne.offset) ?? 5), At(), Ot(), js({
        apply(be) {
          d && Object.assign(d.style, {
            width: `${be.rects.reference.width}px`
          });
        }
      })]
    });
    d && Object.assign(d.style, {
      left: `${Math.round(L.x)}px`,
      top: `${Math.round(L.y)}px`
    });
  }, P = (L) => {
    c.searchTimeoutId && window.clearTimeout(c.searchTimeoutId);
    const O = window.setTimeout(() => {
      u("searchString", "");
    }, 500);
    return u("searchTimeoutId", O), u("searchString", (ne) => ne += L), c.searchString;
  }, h = () => {
    f == null || f.focus();
  }, x = () => c.isControlled ? e.value == null ? [] : dt(e.value) ? e.value : [e.value] : e.defaultValue == null ? [] : dt(e.defaultValue) ? e.defaultValue : [e.defaultValue], z = () => {
    if (a())
      return;
    const L = x().map((O) => c.options.find((ne) => ne.value === O)).filter(Boolean);
    u("selectedOptions", (O) => [...O, ...L]), o(!0);
  }, v = (L) => {
    u("activeIndex", L);
  }, D = (L) => c.selectedOptions.length <= 0 ? !1 : c.multiple ? !!c.selectedOptions.find((O) => kt(L, O)) : kt(L, c.selectedOptions[0]), _ = (L) => {
    u("selectedOptions", (O) => O.filter((ne) => !kt(L, ne)));
  }, R = (L) => {
    const O = c.options[L];
    c.multiple ? D(O) ? _(O) : u("selectedOptions", (ne) => [...ne, O]) : u("selectedOptions", [O]);
  }, j = () => c.multiple ? c.selectedOptions.map((L) => L.value) : c.selectedOptions[0].value ?? void 0, ee = (L) => {
    var O;
    v(L), R(L), (O = e.onChange) == null || O.call(e, j());
  }, I = (L) => {
    var O;
    _(L), (O = e.onChange) == null || O.call(e, j()), h();
  }, k = (L) => c.options[L].disabled, W = (L) => {
    if (!tt(f, zt(L))) {
      if (c.ignoreBlur) {
        u("ignoreBlur", !1);
        return;
      }
      c.opened && U(!1, !1);
    }
  }, V = () => {
    n.readOnly || U(!c.opened, !1);
  }, Q = (L) => {
    if (n.readOnly)
      return;
    const {
      key: O
    } = L;
    if (c.hasSelectedOptions && c.multiple && O === "Backspace") {
      I(c.selectedOptions[c.selectedOptions.length - 1]);
      return;
    }
    const ne = c.options.length - 1, be = of(L, c.opened);
    switch (be) {
      case De.Last:
      case De.First:
        U(!0);
      case De.Next:
      case De.Previous:
        return L.preventDefault(), v(af({
          currentIndex: c.activeIndex,
          maxIndex: ne,
          initialAction: be,
          isOptionDisabled: k
        }));
      case De.SelectAndClose:
        return L.preventDefault(), ee(c.activeIndex), c.multiple ? void 0 : U(!1);
      case De.Close:
        return L.preventDefault(), U(!1);
      case De.Type:
        return J(O);
      case De.Open:
        return L.preventDefault(), U(!0);
    }
  }, J = (L) => {
    if (n.readOnly)
      return;
    U(!0);
    const O = P(L), ne = nf(c.options, O, c.activeIndex + 1);
    ne >= 0 ? v(ne) : (window.clearTimeout(c.searchTimeoutId), u("searchString", ""));
  }, Y = (L) => {
    if (c.options[L].disabled) {
      h();
      return;
    }
    ee(L), c.multiple ? h() : U(!1);
  }, K = (L) => {
    c.activeIndex !== L && v(L);
  }, ve = () => {
    u("ignoreBlur", !0);
  }, E = () => {
    c.selectedOptions.length > 0 ? u("activeIndex", c.options.findIndex((L) => D(L))) : u("activeIndex", 0);
  }, X = () => {
    c.opened ? (b(), f && d && (y = Ht(f, d, b))) : y == null || y();
  }, U = (L, O = !0) => {
    c.opened !== L && (u("opened", L), E(), X(), O && h());
  }, T = () => {
    v(-1);
  }, M = (L) => {
    tt(f, L) || U(!1, !1);
  }, xe = (L) => L === c.activeIndex, Oe = (L) => {
    f = L;
  }, Pe = (L) => {
    d = L;
  }, Me = (L) => {
    g = L;
  }, F = (L) => {
    g && sn(g) && ln(L, g);
  }, pe = (L) => {
    const O = c.options.findIndex((be) => kt(be, L));
    return O != -1 ? O : l((be) => [...be, L]).length - 1;
  };
  me(ct(() => c.options, () => z(), {
    defer: !0
  })), me(ct(() => e.value, () => {
    if (!c.isControlled)
      return;
    const O = (dt(e.value) ? e.value : [e.value]).map((ne) => c.options.find((be) => be.value === ne)).filter(Boolean);
    u("selectedOptions", O);
  }, {
    defer: !0
  })), me(ct(() => c.opened, (L) => {
    L && setTimeout(() => {
      const O = g == null ? void 0 : g.querySelector("[role='option'][aria-selected='true']");
      O && F(O);
    }, 0);
  }));
  const lt = {
    state: c,
    isOptionSelected: D,
    unselectOption: I,
    isOptionActiveDescendant: xe,
    formControlProps: n,
    assignTriggerRef: Oe,
    assignContentRef: Pe,
    assignListboxRef: Me,
    registerOption: pe,
    scrollToOption: F,
    onContentClickOutside: M,
    onTriggerBlur: W,
    onTriggerClick: V,
    onTriggerKeyDown: Q,
    onOptionClick: Y,
    onOptionMouseMove: K,
    onOptionMouseDown: ve,
    onListboxMouseLeave: T
  };
  return i(Ma.Provider, {
    value: lt,
    get children() {
      return e.children;
    }
  });
}
const Ma = te();
function Ae() {
  const e = Z(Ma);
  if (!e)
    throw new Error("[Hope UI]: useSelectContext must be used within a `<Select />` component");
  return e;
}
const Ra = "hope-select__content";
function Wa(e) {
  let t = ue();
  const r = w().Select, n = Ae(), [a, o] = S(e, ["ref", "class", "children"]), [s, l] = re(!1);
  me(ct(() => n.state.opened, () => {
    n.state.opened ? l(!0) : n.state.motionPreset === "none" && l(!1);
  }));
  const c = () => l(!1), u = () => m(a.class, Ra, Wl()), f = ot(() => a.children), d = (b) => {
    b && (n.assignContentRef(b), de(a.ref) ? a.ref(b) : a.ref = b);
  };
  me(() => {
    s() && d(document.querySelector(`[unique-id="${t}"]`));
  });
  const g = (b) => {
    n.onContentClickOutside(b.target);
  }, y = () => {
    switch (n.state.motionPreset) {
      case "fade-in-top":
        return Ge.fadeInTop;
      case "none":
        return "hope-none";
    }
  };
  return i(H, {
    get when() {
      return s();
    },
    get children() {
      return i(gt, {
        get children() {
          return i(Ee, {
            get name() {
              return y();
            },
            appear: !0,
            onAfterExit: c,
            get children() {
              return i(H, {
                get when() {
                  return n.state.opened;
                },
                get children() {
                  return i(aa, {
                    onClickOutside: g,
                    get children() {
                      return i(B, p({
                        ref: d,
                        get class() {
                          return u();
                        },
                        get __baseStyle() {
                          var b;
                          return (b = r == null ? void 0 : r.baseStyle) == null ? void 0 : b.content;
                        },
                        "unique-id": t
                      }, o, {
                        get children() {
                          return f();
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
Wa.toString = () => $(Ra);
var lf = /* @__PURE__ */ se('<svg><path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"fill=currentColor fill-rule=evenodd clip-rule=evenodd></svg>', !1, !0);
const cf = Ie({
  viewBox: "0 0 15 15",
  path: () => lf()
}), Fa = "hope-select__icon";
function Na(e) {
  const t = w().Select, r = Ae(), [n, a] = S(e, ["class", "rotateOnOpen"]), o = () => m(n.class, Fa, Rl(n.rotateOnOpen ? {
    opened: r.state.opened
  } : void 0));
  return i(cf, p({
    "aria-hidden": !0,
    get class() {
      return o();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.icon;
    }
  }, a));
}
Na.toString = () => $(Fa);
const Va = te(), qa = "hope-select__optgroup";
function df(e) {
  const t = w().Select, [r, n] = re(), [a, o] = S(e, ["class", "children"]), s = () => m(a.class, qa, Nl()), l = {
    setAriaLabelledBy: n
  };
  return i(Va.Provider, {
    value: l,
    get children() {
      return i(B, p({
        role: "group",
        get "aria-labelledby"() {
          return r();
        },
        get class() {
          return s();
        },
        get __baseStyle() {
          var c;
          return (c = t == null ? void 0 : t.baseStyle) == null ? void 0 : c.optgroup;
        }
      }, o, {
        get children() {
          return a.children;
        }
      }));
    }
  });
}
df.toString = () => $(qa);
function uf() {
  return Z(Va);
}
const ja = "hope-select__label";
function gf(e) {
  const t = ue(), r = w().Select, n = Ae(), a = uf(), [o, s] = S(e, ["class", "id"]), l = () => o.id ?? `${n.state.labelIdPrefix}-${t}`, c = () => m(o.class, ja, Vl());
  return ge(() => {
    a == null || a.setAriaLabelledBy(l());
  }), i(B, p({
    get id() {
      return l();
    },
    get class() {
      return c();
    },
    get __baseStyle() {
      var u;
      return (u = r == null ? void 0 : r.baseStyle) == null ? void 0 : u.label;
    }
  }, s));
}
gf.toString = () => $(ja);
const Ka = "hope-select__listbox";
function Xa(e) {
  const t = w().Select, r = Ae(), [n, a] = S(e, ["ref", "class"]), o = () => m(n.class, Ka, Fl());
  return i(B, p({
    ref: (c) => {
      r.assignListboxRef(c), de(n.ref) ? n.ref(c) : n.ref = c;
    },
    role: "listbox",
    tabindex: "-1",
    get id() {
      return r.state.listboxId;
    },
    get class() {
      return o();
    },
    get __baseStyle() {
      var c;
      return (c = t == null ? void 0 : t.baseStyle) == null ? void 0 : c.listbox;
    },
    get onMouseLeave() {
      return r.onListboxMouseLeave;
    },
    onMouseDown: (c) => {
      c.preventDefault();
    }
  }, a));
}
Xa.toString = () => $(Ka);
const Ua = te(), Qa = "hope-select__option";
function Ya(e) {
  const t = w().Select, r = Ae(), [n, a] = re(-1);
  let o;
  const [s, l] = S(e, ["ref", "class", "value", "textValue", "disabled"]), c = () => ({
    value: s.value,
    textValue: s.textValue ?? (o == null ? void 0 : o.textContent) ?? String(s.value),
    disabled: !!s.disabled
  }), u = () => `${r.state.optionIdPrefix}-${n()}`, f = () => r.isOptionSelected(c()), d = () => r.isOptionActiveDescendant(n()), g = () => m(s.class, Qa, ql()), y = (x) => {
    o = x, de(s.ref) ? s.ref(x) : s.ref = x;
  }, b = (x) => {
    x.stopPropagation(), r.onOptionClick(n());
  }, P = (x) => {
    if (s.disabled && r.onOptionMouseMove(-1), d() || s.disabled) {
      x.preventDefault(), x.stopPropagation();
      return;
    }
    r.onOptionMouseMove(n());
  }, h = {
    selected: f
  };
  return ge(() => {
    a(r.registerOption(c()));
  }), me(() => {
    d() && o && r.scrollToOption(o);
  }), i(Ua.Provider, {
    value: h,
    get children() {
      return i(B, p({
        ref: y,
        role: "option",
        get id() {
          return u();
        },
        get "aria-selected"() {
          return f();
        },
        get "data-active"() {
          return d() ? "" : void 0;
        },
        get "data-disabled"() {
          return s.disabled ? "" : void 0;
        },
        "data-group": !0,
        get class() {
          return g();
        },
        get __baseStyle() {
          var x;
          return (x = t == null ? void 0 : t.baseStyle) == null ? void 0 : x.option;
        },
        onClick: b,
        onMouseMove: P,
        get onMouseDown() {
          return r.onOptionMouseDown;
        }
      }, l));
    }
  });
}
Ya.toString = () => $(Qa);
function ff() {
  const e = Z(Ua);
  if (!e)
    throw new Error("[Hope UI]: useSelectOptionContext must be used within a `<Select.Option />` component");
  return e;
}
var hf = /* @__PURE__ */ se('<svg><g fill=none><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"fill=currentColor fill-rule=evenodd clip-rule=evenodd></svg>', !1, !0);
const pf = Ie({
  viewBox: "0 0 15 15",
  path: () => hf()
}), Za = "hope-select__option-indicator";
function Ja(e) {
  const t = w().Select, r = ff(), [n, a] = S(e, ["class", "children"]), o = () => m(n.class, Za, Kl());
  return i(H, {
    get when() {
      return r.selected();
    },
    get children() {
      return i(A.span, p({
        get class() {
          return o();
        },
        get __baseStyle() {
          var s;
          return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.optionIndicator;
        }
      }, a, {
        get children() {
          return i(H, {
            get when() {
              return n.children;
            },
            get fallback() {
              return i(pf, {
                "aria-hidden": "true",
                boxSize: "$5"
              });
            },
            get children() {
              return n.children;
            }
          });
        }
      }));
    }
  });
}
Ja.toString = () => $(Za);
const Ga = "hope-select__option-text";
function es(e) {
  const t = w().Select, [r, n] = S(e, ["class"]), a = () => m(r.class, Ga, jl());
  return i(A.span, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var o;
      return (o = t == null ? void 0 : t.baseStyle) == null ? void 0 : o.optionText;
    }
  }, n));
}
es.toString = () => $(Ga);
const ts = "hope-select__placeholder";
function rs(e) {
  const t = w().Select, r = Ae(), [n, a] = S(e, ["class"]), o = () => m(n.class, ts, Ml());
  return i(H, {
    get when() {
      return !r.state.hasSelectedOptions;
    },
    get children() {
      return i(A.span, p({
        get class() {
          return o();
        },
        get __baseStyle() {
          var s;
          return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.placeholder;
        }
      }, a));
    }
  });
}
rs.toString = () => $(ts);
const ns = "hope-select__tag";
function os(e) {
  const t = w().Select, r = Ae(), [n, a] = S(e, ["class", "size", "variant"]), o = () => m(n.class, ns, Al({
    size: n.size ?? r.state.size ?? "md",
    variant: n.variant ?? r.state.variant === "filled" ? "outline" : "subtle"
  }));
  return i(A.span, p({
    get class() {
      return o();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.tag;
    }
  }, a));
}
os.toString = () => $(ns);
var bf = /* @__PURE__ */ se('<svg><g fill=none><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"fill=currentColor fill-rule=evenodd clip-rule=evenodd></svg>', !1, !0);
const as = Ie({
  viewBox: "0 0 15 15",
  path: () => bf()
}), ss = "hope-select__tag-close-button";
function is(e) {
  const t = w().Select, [r, n] = S(e, ["class", "children"]), a = () => m(r.class, ss, Ol());
  return i(A.button, p({
    role: "button",
    type: "button",
    "aria-label": "Delete",
    tabIndex: "-1",
    get class() {
      return a();
    },
    get __baseStyle() {
      var o;
      return (o = t == null ? void 0 : t.baseStyle) == null ? void 0 : o.tagCloseButton;
    }
  }, n, {
    get children() {
      return i(H, {
        get when() {
          return r.children;
        },
        get fallback() {
          return i(as, {});
        },
        get children() {
          return r.children;
        }
      });
    }
  }));
}
is.toString = () => $(ss);
const ls = "hope-select__trigger";
function cs(e) {
  let t = ue();
  const r = w().Select, n = Ae(), [a, o] = S(e, ["ref", "class", "onClick", "onKeyDown", "onFocus", "onBlur"]), s = () => m(a.class, ls, Dl({
    variant: n.state.variant,
    size: n.state.size
  })), l = (g) => {
    g && (n.assignTriggerRef(g), de(a.ref) ? a.ref(g) : a.ref = g);
  };
  ge(() => {
    l(document.querySelector(`[unique-id="${t}"]`));
  });
  const c = (g) => {
    he(n.onTriggerClick, a.onClick)(g);
  }, u = (g) => {
    he(n.onTriggerKeyDown, a.onKeyDown)(g);
  }, f = (g) => {
    he(n.formControlProps.onFocus, a.onFocus)(g);
  }, d = (g) => {
    he(n.onTriggerBlur, n.formControlProps.onBlur, a.onBlur)(g);
  };
  return i(A.button, p({
    ref: l,
    get id() {
      return n.state.triggerId;
    },
    "unique-id": t,
    get disabled() {
      return n.state.disabled;
    },
    role: "combobox",
    type: "button",
    tabindex: "0",
    "aria-haspopup": "listbox",
    get "aria-activedescendant"() {
      return n.state.activeDescendantId;
    },
    get "aria-controls"() {
      return n.state.listboxId;
    },
    get "aria-expanded"() {
      return n.state.opened;
    },
    get "aria-required"() {
      return n.formControlProps["aria-required"];
    },
    get "aria-invalid"() {
      return n.formControlProps["aria-invalid"];
    },
    get "aria-readonly"() {
      return n.formControlProps["aria-readonly"];
    },
    get "aria-describedby"() {
      return n.formControlProps["aria-describedby"];
    },
    get class() {
      return s();
    },
    get __baseStyle() {
      var g;
      return (g = r == null ? void 0 : r.baseStyle) == null ? void 0 : g.trigger;
    },
    onClick: c,
    onKeyDown: u,
    onFocus: f,
    onBlur: d
  }, o));
}
cs.toString = () => $(ls);
var mf = /* @__PURE__ */ se("<span>");
const or = "hope-select__value";
function ds(e) {
  const t = w().Select, r = Ae(), [n, a] = S(e, ["class", "children"]), o = () => m(n.class, or, en()), s = () => m(n.class, or, El({
    size: r.state.size
  })), l = (u, f) => {
    u.preventDefault(), u.stopPropagation(), r.unselectOption(f);
  }, c = ot(() => {
    var u;
    return Ct(n) ? (u = n.children) == null ? void 0 : u.call(n, {
      selectedOptions: r.state.selectedOptions
    }) : n.children;
  });
  return i(H, {
    get when() {
      return r.state.hasSelectedOptions;
    },
    get children() {
      return i(H, {
        get when() {
          return !c();
        },
        get fallback() {
          return c();
        },
        get children() {
          return i(H, {
            get when() {
              return r.state.multiple;
            },
            get fallback() {
              return i(B, p({
                get class() {
                  return o();
                },
                get __baseStyle() {
                  var u;
                  return (u = t == null ? void 0 : t.baseStyle) == null ? void 0 : u.singleValue;
                }
              }, a, {
                get children() {
                  return r.state.selectedOptions[0].textValue;
                }
              }));
            },
            get children() {
              return i(B, p({
                get class() {
                  return s();
                },
                get __baseStyle() {
                  var u;
                  return (u = t == null ? void 0 : t.baseStyle) == null ? void 0 : u.multiValue;
                }
              }, a, {
                get children() {
                  return i(Wr, {
                    get each() {
                      return r.state.selectedOptions;
                    },
                    children: (u) => i(os, {
                      get children() {
                        return [(() => {
                          var f = mf();
                          return Mr(f, () => u.textValue), f;
                        })(), i(is, {
                          onClick: (f) => l(f, u)
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
ds.toString = () => $(or);
function Uh(e) {
  const [t, r] = S(e, ["children", "value"]);
  return i(Ya, p({
    get value() {
      return t.value;
    }
  }, r, {
    get children() {
      return [i(es, {
        get children() {
          return t.children;
        }
      }), i(Ja, {})];
    }
  }));
}
function Qh(e) {
  const [t, r, n] = S(e, ["children", "placeholder"], ["variant", "size", "offset", "id", "multiple", "value", "defaultValue", "required", "disabled", "invalid", "readOnly", "onChange", "onFocus", "onBlur"]);
  return i(sf, p(r, {
    get children() {
      return [i(cs, p(n, {
        get children() {
          return [i(H, {
            get when() {
              return t.placeholder;
            },
            get children() {
              return i(rs, {
                get children() {
                  return t.placeholder;
                }
              });
            }
          }), i(ds, {}), i(Na, {})];
        }
      })), i(Wa, {
        get children() {
          return i(Xa, {
            get children() {
              return t.children;
            }
          });
        }
      })];
    }
  }));
}
const vf = ft({
  from: {
    borderColor: "$$startColor",
    background: "$$startColor"
  },
  to: {
    borderColor: "$$endColor",
    background: "$$endColor"
  }
}), Sf = C({
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
  animationName: `${vf()}`,
  "&::before, &::after, *": {
    visibility: "hidden"
  }
}), Kt = "hope-skeleton";
function Bt(e) {
  const [t, r] = re("none"), a = N({
    speed: "800ms",
    fadeDuration: "400ms"
  }, e), [o, s] = S(a, ["class", "startColor", "endColor", "loaded", "speed", "fadeDuration"]), l = () => m(o.class, Kt, o.loaded ? void 0 : Sf({
    css: {
      $$startColor: Pr(o.startColor ?? "$neutral2"),
      $$endColor: Pr(o.endColor ?? "$neutral8"),
      animationDuration: o.speed
    }
  }));
  return me(ct(() => o.loaded, (c, u) => r(u === !0 ? "none" : `${hl()} ${o.fadeDuration}`), {
    defer: !0
  })), i(H, {
    get when() {
      return o.loaded;
    },
    get fallback() {
      return i(B, p({
        get class() {
          return l();
        }
      }, s));
    },
    get children() {
      return i(B, p({
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
Bt.toString = () => $(Kt);
function xf(e) {
  return i(Bt, p({
    borderRadius: "$full",
    get boxSize() {
      return e.size ?? "2rem";
    }
  }, e));
}
xf.toString = () => $(Kt);
function Cf(e) {
  const r = N({
    noOfLines: 3,
    spacing: "0.5rem",
    skeletonHeight: "0.5rem"
  }, e), [n, a, o] = S(r, ["class", "children", "noOfLines", "spacing", "skeletonHeight"], ["startColor", "endColor", "loaded", "speed", "fadeDuration", "borderRadius", "rounded"]), s = () => n.noOfLines ?? 3, l = ye(() => Qs(s())), c = (f) => s() > 1 && f === l().length - 1 ? "80%" : "100%", u = () => m(n.class, "hope-skeleton__group");
  return i(H, {
    get when() {
      return a.loaded;
    },
    get fallback() {
      return i(B, p({
        get class() {
          return u();
        },
        d: "flex",
        flexDirection: "column",
        get gap() {
          return n.spacing;
        }
      }, o, {
        get children() {
          return i(Fs, {
            get each() {
              return l();
            },
            children: (f, d) => i(Bt, p({
              get width() {
                return c(d);
              },
              get height() {
                return n.skeletonHeight;
              }
            }, a))
          });
        }
      }));
    },
    get children() {
      return i(Bt, p({
        get class() {
          return n.class;
        }
      }, a, o, {
        get children() {
          return n.children;
        }
      }));
    }
  });
}
Cf.toString = () => $(Kt);
const yf = C({
  flex: 1,
  justifySelf: "stretch",
  alignSelf: "stretch"
}), us = "hope-spacer";
function $f(e) {
  const [t, r] = S(e, ["class"]), n = () => m(t.class, us, yf());
  return i(B, p({
    get class() {
      return n();
    }
  }, r));
}
$f.toString = () => $(us);
const wf = C({
  display: "inline-block",
  borderColor: "currentColor",
  borderStyle: "solid",
  borderRadius: "$full",
  borderWidth: "2px",
  borderBottomColor: "transparent",
  borderLeftColor: "transparent",
  animationName: `${Rt}`,
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
var If = /* @__PURE__ */ se("<span>");
const gs = "hope-spinner";
function kf(e) {
  var l, c, u, f, d, g;
  const t = w().Spinner, r = {
    label: ((l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.label) ?? "Loading...",
    size: ((c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.size) ?? "md",
    emptyColor: (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.emptyColor,
    color: (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.color,
    thickness: (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.thickness,
    speed: (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.speed
  }, n = N(r, e), [a, o] = S(n, ["class", "children", "label", "size", "emptyColor", "color", "thickness", "speed"]), s = () => m(a.class, gs, wf({
    size: a.size,
    css: {
      color: a.color,
      borderWidth: a.thickness,
      borderBottomColor: a.emptyColor,
      borderLeftColor: a.emptyColor,
      animationDuration: a.speed
    }
  }));
  return i(B, p({
    get class() {
      return s();
    }
  }, o, {
    get children() {
      return i(H, {
        get when() {
          return a.label;
        },
        get children() {
          var y = If();
          return Mr(y, () => a.label), _e(() => xt(y, Wt())), y;
        }
      });
    }
  }));
}
kf.toString = () => $(gs);
const _f = C(fr, {
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
}), Pf = C(hr), Tf = C(pr, {
  borderRadius: "$full",
  transition: "background-color 250ms, border-color 250ms, box-shadow 250ms",
  // Switch trackball
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
var zf = /* @__PURE__ */ se("<input type=checkbox role=switch>");
function Bf(e) {
  const t = `hope-switch-${ue()}`, r = pt(e), [n, a] = ae({
    // eslint-disable-next-line solid/reactivity
    _checked: !!e.defaultChecked,
    isFocused: !1,
    get isControlled() {
      return e.checked !== void 0;
    },
    get checked() {
      return this.isControlled ? !!e.checked : this._checked;
    },
    get id() {
      return r.id ?? t;
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
    get "aria-required"() {
      return this.required ? !0 : void 0;
    },
    get "aria-disabled"() {
      return this.disabled ? !0 : void 0;
    },
    get "aria-invalid"() {
      return this.invalid ? !0 : void 0;
    },
    get "aria-readonly"() {
      return this.readOnly ? !0 : void 0;
    },
    get "data-focus"() {
      return this.isFocused ? "" : void 0;
    },
    get "data-checked"() {
      return this.checked ? "" : void 0;
    },
    get "data-required"() {
      return this.required ? "" : void 0;
    },
    get "data-disabled"() {
      return this.disabled ? "" : void 0;
    },
    get "data-invalid"() {
      return this.invalid ? "" : void 0;
    },
    get "data-readonly"() {
      return this.readOnly ? "" : void 0;
    }
  }), [o, s, l] = S(e, ["inputClass", "children", "ref", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "onChange"], ["id", "name", "value", "checked", "defaultChecked", "required", "disabled", "invalid", "readOnly", "onFocus", "onBlur"]), c = (b) => {
    if (n.readOnly || n.disabled) {
      b.preventDefault();
      return;
    }
    if (!n.isControlled) {
      const P = b.target;
      a("_checked", P.checked);
    }
    oe(o.onChange, b);
  }, u = (b) => {
    a("isFocused", !0), oe(r.onFocus, b);
  }, f = (b) => {
    a("isFocused", !1), oe(r.onBlur, b);
  }, d = () => m(o.inputClass, Wt()), g = () => n, y = {
    state: n
  };
  return i(fs.Provider, {
    value: y,
    get children() {
      return i(A.label, p({
        get for() {
          return n.id;
        },
        "data-group": !0,
        get "data-focus"() {
          return n["data-focus"];
        },
        get "data-checked"() {
          return n["data-checked"];
        },
        get "data-required"() {
          return n["data-required"];
        },
        get "data-disabled"() {
          return n["data-disabled"];
        },
        get "data-invalid"() {
          return n["data-invalid"];
        },
        get "data-readonly"() {
          return n["data-readonly"];
        }
      }, l, {
        get children() {
          return [(() => {
            var b = zf();
            b.addEventListener("blur", f), b.addEventListener("focus", u), b.addEventListener("change", c);
            var P = o.ref;
            return typeof P == "function" ? ar(P, b) : o.ref = b, _e((h) => {
              var x = d(), z = o.tabIndex, v = n.id, D = n.name, _ = n.required, R = n.disabled, j = n.readOnly, ee = n["aria-required"], I = n["aria-disabled"], k = n["aria-invalid"], W = n["aria-readonly"], V = o["aria-label"], Q = o["aria-labelledby"], J = o["aria-describedby"];
              return x !== h.e && xt(b, h.e = x), z !== h.t && G(b, "tabindex", h.t = z), v !== h.a && G(b, "id", h.a = v), D !== h.o && G(b, "name", h.o = D), _ !== h.i && (b.required = h.i = _), R !== h.n && (b.disabled = h.n = R), j !== h.s && (b.readOnly = h.s = j), ee !== h.h && G(b, "aria-required", h.h = ee), I !== h.r && G(b, "aria-disabled", h.r = I), k !== h.d && G(b, "aria-invalid", h.d = k), W !== h.l && G(b, "aria-readonly", h.l = W), V !== h.u && G(b, "aria-label", h.u = V), Q !== h.c && G(b, "aria-labelledby", h.c = Q), J !== h.w && G(b, "aria-describedby", h.w = J), h;
            }, {
              e: void 0,
              t: void 0,
              a: void 0,
              o: void 0,
              i: void 0,
              n: void 0,
              s: void 0,
              h: void 0,
              r: void 0,
              d: void 0,
              l: void 0,
              u: void 0,
              c: void 0,
              w: void 0
            }), _e(() => b.value = n.value), _e(() => b.checked = n.checked), b;
          })(), i(H, {
            get when() {
              return de(o.children);
            },
            get fallback() {
              return o.children;
            },
            get children() {
              var b;
              return (b = o.children) == null ? void 0 : b.call(o, {
                state: g
              });
            }
          })];
        }
      }));
    }
  });
}
const fs = te();
function Lf() {
  const e = Z(fs);
  if (!e)
    throw new Error("[Hope UI]: useSwitchPrimitivehContext must be used within a `<SwitchPrimitive />` component");
  return e;
}
const hs = "hope-switch", Hf = "hope-checkbox__input", Df = "hope-switch__control", Ef = "hope-switch__label";
function Af(e) {
  var u, f, d, g, y, b, P, h;
  const t = w().Switch, r = {
    variant: ((f = (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.root) == null ? void 0 : f.variant) ?? "filled",
    colorScheme: ((g = (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.root) == null ? void 0 : g.colorScheme) ?? "primary",
    size: ((b = (y = t == null ? void 0 : t.defaultProps) == null ? void 0 : y.root) == null ? void 0 : b.size) ?? "md",
    labelPlacement: ((h = (P = t == null ? void 0 : t.defaultProps) == null ? void 0 : P.root) == null ? void 0 : h.labelPlacement) ?? "start"
  }, n = N(r, e), [a, o] = S(n, ["children", "class", "variant", "colorScheme", "size", "labelPlacement"]), s = () => m(a.class, hs, _f({
    size: a.size,
    labelPlacement: a.labelPlacement
  })), l = () => m(Df, Tf({
    variant: a.variant,
    colorScheme: a.colorScheme,
    size: a.size
  })), c = () => m(Ef, Pf());
  return i(Bf, p({
    get class() {
      return s();
    },
    inputClass: Hf,
    get __baseStyle() {
      var x;
      return (x = t == null ? void 0 : t.baseStyle) == null ? void 0 : x.root;
    }
  }, o, {
    children: ({
      state: x
    }) => [i(A.span, {
      get class() {
        return c();
      },
      get __baseStyle() {
        var z;
        return (z = t == null ? void 0 : t.baseStyle) == null ? void 0 : z.label;
      },
      get "data-focus"() {
        return x()["data-focus"];
      },
      get "data-checked"() {
        return x()["data-checked"];
      },
      get "data-required"() {
        return x()["data-required"];
      },
      get "data-disabled"() {
        return x()["data-disabled"];
      },
      get "data-invalid"() {
        return x()["data-invalid"];
      },
      get "data-readonly"() {
        return x()["data-readonly"];
      },
      get children() {
        return a.children;
      }
    }), i(A.span, {
      "aria-hidden": !0,
      get class() {
        return l();
      },
      get __baseStyle() {
        var z;
        return (z = t == null ? void 0 : t.baseStyle) == null ? void 0 : z.control;
      },
      get "data-focus"() {
        return x()["data-focus"];
      },
      get "data-checked"() {
        return x()["data-checked"];
      },
      get "data-required"() {
        return x()["data-required"];
      },
      get "data-disabled"() {
        return x()["data-disabled"];
      },
      get "data-invalid"() {
        return x()["data-invalid"];
      },
      get "data-readonly"() {
        return x()["data-readonly"];
      }
    })]
  }));
}
Af.toString = () => $(hs);
function Yh(e) {
  const t = Lf();
  return i(A.span, p({
    "aria-hidden": !0,
    get "data-focus"() {
      return t.state["data-focus"];
    },
    get "data-checked"() {
      return t.state["data-checked"];
    },
    get "data-required"() {
      return t.state["data-required"];
    },
    get "data-disabled"() {
      return t.state["data-disabled"];
    },
    get "data-invalid"() {
      return t.state["data-invalid"];
    },
    get "data-readonly"() {
      return t.state["data-readonly"];
    }
  }, e));
}
const Of = C({
  width: "100%",
  borderCollapse: "collapse",
  fontVariantNumeric: "lining-nums tabular-nums"
}), Mf = C({
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
function Ar(e) {
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
const Rf = C({
  variants: {
    striped: {
      odd: Ar("odd"),
      even: Ar("even")
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
}), Wf = C({
  "& tr:last-of-type th": {
    borderBottomWidth: 0
  }
}), Ff = C({
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
}), Nf = C({
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
}), ps = te(), bs = "hope-table";
function Vf(e) {
  const t = w().Table, [r] = ae({
    get striped() {
      var s, l;
      return e.striped ?? ((l = (s = t == null ? void 0 : t.defaultProps) == null ? void 0 : s.root) == null ? void 0 : l.striped);
    },
    get dense() {
      var s, l;
      return e.dense ?? ((l = (s = t == null ? void 0 : t.defaultProps) == null ? void 0 : s.root) == null ? void 0 : l.dense) ?? !1;
    },
    get highlightOnHover() {
      var s, l;
      return e.highlightOnHover ?? ((l = (s = t == null ? void 0 : t.defaultProps) == null ? void 0 : s.root) == null ? void 0 : l.highlightOnHover) ?? !1;
    }
  }), [n, a] = S(e, ["class", "striped", "dense", "highlightOnHover"]), o = () => m(n.class, bs, Of(r));
  return i(ps.Provider, {
    value: r,
    get children() {
      return i(B, p({
        as: "table",
        role: "table",
        get class() {
          return o();
        },
        get __baseStyle() {
          var s;
          return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.root;
        }
      }, a));
    }
  });
}
Vf.toString = () => $(bs);
function Xt() {
  const e = Z(ps);
  if (!e)
    throw new Error("[Hope UI]: useTableContext must be used within a `<Table/>` component");
  return e;
}
const ms = "hope-table-caption";
function qf(e) {
  var c, u;
  const t = w().Table, r = Xt(), n = {
    placement: ((u = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.caption) == null ? void 0 : u.placement) ?? "bottom"
  }, a = N(n, e), [o, s] = S(a, ["class", "placement"]), l = () => m(o.class, ms, Mf({
    dense: r.dense,
    placement: o.placement
  }));
  return i(A.caption, p({
    get class() {
      return l();
    },
    get __baseStyle() {
      var f;
      return (f = t == null ? void 0 : t.baseStyle) == null ? void 0 : f.caption;
    }
  }, s));
}
qf.toString = () => $(ms);
const vs = "hope-tbody";
function jf(e) {
  const t = w().Table, r = Xt(), [n, a] = S(e, ["class"]), o = () => m(n.class, vs, Rf({
    striped: r.striped,
    highlightOnHover: r.highlightOnHover
  }));
  return i(B, p({
    as: "tbody",
    role: "rowgroup",
    get class() {
      return o();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.tbody;
    }
  }, a));
}
jf.toString = () => $(vs);
const Ss = "hope-td";
function Kf(e) {
  const t = w().Table, r = Xt(), [n, a] = S(e, ["class", "numeric"]), o = () => m(n.class, Ss, Nf({
    dense: r.dense,
    numeric: n.numeric
  }));
  return i(B, p({
    as: "td",
    role: "cell",
    get class() {
      return o();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.td;
    }
  }, a));
}
Kf.toString = () => $(Ss);
const xs = "hope-tfoot";
function Xf(e) {
  const t = w().Table, [r, n] = S(e, ["class"]), a = () => m(r.class, xs, Wf());
  return i(B, p({
    as: "tfoot",
    role: "rowgroup",
    get class() {
      return a();
    },
    get __baseStyle() {
      var o;
      return (o = t == null ? void 0 : t.baseStyle) == null ? void 0 : o.tfoot;
    }
  }, n));
}
Xf.toString = () => $(xs);
const Cs = "hope-th";
function Uf(e) {
  const t = w().Table, r = Xt(), [n, a] = S(e, ["class", "numeric"]), o = () => m(n.class, Cs, Ff({
    dense: r.dense,
    numeric: n.numeric
  }));
  return i(B, p({
    as: "th",
    role: "columnheader",
    get class() {
      return o();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.th;
    }
  }, a));
}
Uf.toString = () => $(Cs);
const ys = "hope-thead";
function Qf(e) {
  const t = w().Table, [r, n] = S(e, ["class"]), a = () => m(r.class, ys);
  return i(B, p({
    as: "thead",
    role: "rowgroup",
    get class() {
      return a();
    },
    get __baseStyle() {
      var o;
      return (o = t == null ? void 0 : t.baseStyle) == null ? void 0 : o.thead;
    }
  }, n));
}
Qf.toString = () => $(ys);
const $s = "hope-tr";
function Yf(e) {
  const t = w().Table, [r, n] = S(e, ["class"]), a = () => m(r.class, $s);
  return i(B, p({
    as: "tr",
    role: "row",
    get class() {
      return a();
    },
    get __baseStyle() {
      var o;
      return (o = t == null ? void 0 : t.baseStyle) == null ? void 0 : o.tr;
    }
  }, n));
}
Yf.toString = () => $($s);
const Zf = C({
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
}), Jf = C({
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
    /* -------------------------------------------------------------------------------------------------
     * Variant - underline + orientation
     * -----------------------------------------------------------------------------------------------*/
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
    /* -------------------------------------------------------------------------------------------------
     * Variant - outline + orientation
     * -----------------------------------------------------------------------------------------------*/
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
    /* -------------------------------------------------------------------------------------------------
     * Variant - cards + orientation
     * -----------------------------------------------------------------------------------------------*/
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
function ie(e) {
  return {
    "&[aria-selected='true']": {
      color: e
    }
  };
}
function Ue(e) {
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
const Gf = C({
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
    /* -------------------------------------------------------------------------------------------------
     * Variant - underline + colorScheme
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "underline",
      colorScheme: "primary",
      css: ie("$primary11")
    },
    {
      variant: "underline",
      colorScheme: "accent",
      css: ie("$accent11")
    },
    {
      variant: "underline",
      colorScheme: "neutral",
      css: ie("$neutral12")
    },
    {
      variant: "underline",
      colorScheme: "success",
      css: ie("$success11")
    },
    {
      variant: "underline",
      colorScheme: "info",
      css: ie("$info11")
    },
    {
      variant: "underline",
      colorScheme: "warning",
      css: ie("$warning11")
    },
    {
      variant: "underline",
      colorScheme: "danger",
      css: ie("$danger11")
    },
    /* -------------------------------------------------------------------------------------------------
     * Variant - outline + colorScheme
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "outline",
      colorScheme: "primary",
      css: ie("$primary11")
    },
    {
      variant: "outline",
      colorScheme: "accent",
      css: ie("$accent11")
    },
    {
      variant: "outline",
      colorScheme: "neutral",
      css: ie("$neutral12")
    },
    {
      variant: "outline",
      colorScheme: "success",
      css: ie("$success11")
    },
    {
      variant: "outline",
      colorScheme: "info",
      css: ie("$info11")
    },
    {
      variant: "outline",
      colorScheme: "warning",
      css: ie("$warning11")
    },
    {
      variant: "outline",
      colorScheme: "danger",
      css: ie("$danger11")
    },
    /* -------------------------------------------------------------------------------------------------
     * Variant - cards + colorScheme
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "cards",
      colorScheme: "primary",
      css: ie("$primary11")
    },
    {
      variant: "cards",
      colorScheme: "accent",
      css: ie("$accent11")
    },
    {
      variant: "cards",
      colorScheme: "neutral",
      css: ie("$neutral12")
    },
    {
      variant: "cards",
      colorScheme: "success",
      css: ie("$success11")
    },
    {
      variant: "cards",
      colorScheme: "info",
      css: ie("$info11")
    },
    {
      variant: "cards",
      colorScheme: "warning",
      css: ie("$warning11")
    },
    {
      variant: "cards",
      colorScheme: "danger",
      css: ie("$danger11")
    },
    /* -------------------------------------------------------------------------------------------------
     * Variant - pills + colorScheme
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "pills",
      colorScheme: "primary",
      css: Ue({
        color: "$primary11",
        bgColor: "$primary3",
        bgColorHover: "$primary4"
      })
    },
    {
      variant: "pills",
      colorScheme: "accent",
      css: Ue({
        color: "$accent11",
        bgColor: "$accent3",
        bgColorHover: "$accent4"
      })
    },
    {
      variant: "pills",
      colorScheme: "neutral",
      css: Ue({
        color: "$neutral12",
        bgColor: "$neutral3",
        bgColorHover: "$neutral4"
      })
    },
    {
      variant: "pills",
      colorScheme: "success",
      css: Ue({
        color: "$success11",
        bgColor: "$success3",
        bgColorHover: "$success4"
      })
    },
    {
      variant: "pills",
      colorScheme: "info",
      css: Ue({
        color: "$info11",
        bgColor: "$info3",
        bgColorHover: "$info4"
      })
    },
    {
      variant: "pills",
      colorScheme: "warning",
      css: Ue({
        color: "$warning11",
        bgColor: "$warning3",
        bgColorHover: "$warning4"
      })
    },
    {
      variant: "pills",
      colorScheme: "danger",
      css: Ue({
        color: "$danger11",
        bgColor: "$danger3",
        bgColorHover: "$danger4"
      })
    },
    /* -------------------------------------------------------------------------------------------------
     * Variant - underline + orientation
     * -----------------------------------------------------------------------------------------------*/
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
    /* -------------------------------------------------------------------------------------------------
     * Variant - outline + orientation
     * -----------------------------------------------------------------------------------------------*/
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
    /* -------------------------------------------------------------------------------------------------
     * Variant - cards + orientation
     * -----------------------------------------------------------------------------------------------*/
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
}), eh = C({
  outline: "none",
  padding: "$4"
}), ws = "hope-tabs";
function th(e) {
  const t = `hope-tabs-${ue()}`, r = w().Tabs, [n, a] = re([]), [o, s] = re([]), [l, c] = ae({
    // eslint-disable-next-line solid/reactivity
    _selectedIndex: e.defaultIndex ?? 0,
    //tabs: [],
    //tabPanels: [],
    get isControlled() {
      return e.index !== void 0;
    },
    get selectedIndex() {
      return this.isControlled ? e.index : this._selectedIndex;
    },
    get baseId() {
      return e.id ?? t;
    },
    get orientation() {
      return e.orientation ?? "horizontal";
    },
    get keepAlive() {
      var I, k;
      return e.keepAlive ?? ((k = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : k.keepAlive) ?? !1;
    },
    get alignment() {
      var I, k;
      return e.alignment ?? ((k = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : k.alignment) ?? "start";
    },
    get variant() {
      var I, k;
      return e.variant ?? ((k = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : k.variant) ?? "underline";
    },
    get colorScheme() {
      var I, k;
      return e.colorScheme ?? ((k = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : k.colorScheme) ?? "primary";
    },
    get size() {
      var I, k;
      return e.size ?? ((k = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : k.size) ?? "md";
    },
    get fitted() {
      var I, k;
      return e.fitted ?? ((k = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : k.fitted) ?? !1;
    }
  }), [u, f, d] = S(e, ["class", "onChange"], ["index", "defaultIndex", "keepAlive", "alignment", "orientation", "variant", "colorScheme", "size", "fitted"]), g = ye(() => n().slice().reverse()), y = (I) => {
    var k;
    c("_selectedIndex", I), (k = u.onChange) == null || k.call(u, I);
  }, b = (I) => I === l.selectedIndex, P = (I) => `${l.baseId}--tab-${I}`, h = (I) => `${l.baseId}--tabpanel-${I}`, x = (I) => a((k) => [...k, I]).length - 1, z = (I) => s((k) => [...k, I]).length - 1, v = () => {
    const I = n().length - 1;
    let k = _t(l.selectedIndex, I, !0), W = n()[k];
    for (; W.disabled; )
      k = _t(k, I, !0), W = n()[k];
    W.focus();
  }, D = () => {
    const I = n().length - 1;
    let k = Pt(l.selectedIndex, I, !0), W = n()[k];
    for (; W.disabled; )
      k = Pt(k, I, !0), W = n()[k];
    W.focus();
  }, _ = () => {
    var I;
    (I = n().find((k) => !k.disabled)) == null || I.focus();
  }, R = () => {
    var I;
    (I = g().find((k) => !k.disabled)) == null || I.focus();
  }, j = () => m(u.class, ws, Zf({
    orientation: l.orientation
  })), ee = {
    state: l,
    setSelectedIndex: y,
    isSelectedIndex: b,
    getTabId: P,
    getTabPanelId: h,
    registerTab: x,
    registerTabPanel: z,
    focusPrevTab: D,
    focusNextTab: v,
    focusFirstTab: _,
    focusLastTab: R
  };
  return i(Is.Provider, {
    value: ee,
    get children() {
      return i(B, p({
        get class() {
          return j();
        },
        get __baseStyle() {
          var I;
          return (I = r == null ? void 0 : r.baseStyle) == null ? void 0 : I.root;
        }
      }, d));
    }
  });
}
th.toString = () => $(ws);
const Is = te();
function vr() {
  const e = Z(Is);
  if (!e)
    throw new Error("[Hope UI]: useTabsContext must be used within a `<Tabs />` component");
  return e;
}
const ks = "hope-tabs__tab";
function rh(e) {
  const t = w().Tabs, r = vr(), [n, a] = re(-1), [o, s] = S(e, ["ref", "class", "disabled", "onClick", "onFocus"]), l = () => r.isSelectedIndex(n()), c = () => r.getTabId(n()), u = () => r.getTabPanelId(n()), f = (b) => {
    a(r.registerTab(b)), de(o.ref) ? o.ref(b) : o.ref = b;
  }, d = (b) => {
    r.setSelectedIndex(n()), oe(o.onClick, b);
  }, g = (b) => {
    r.setSelectedIndex(n()), oe(o.onFocus, b);
  }, y = () => m(o.class, ks, Gf({
    orientation: r.state.orientation,
    variant: r.state.variant,
    colorScheme: r.state.colorScheme,
    size: r.state.size,
    fitted: r.state.fitted
  }));
  return i(A.button, p({
    ref: f,
    role: "tab",
    type: "button",
    get id() {
      return c();
    },
    get tabIndex() {
      return l() ? 0 : -1;
    },
    get disabled() {
      return o.disabled;
    },
    get "aria-selected"() {
      return l();
    },
    get "aria-controls"() {
      return u();
    },
    get class() {
      return y();
    },
    get __baseStyle() {
      var b;
      return (b = t == null ? void 0 : t.baseStyle) == null ? void 0 : b.tab;
    },
    onClick: d,
    onFocus: g
  }, s));
}
rh.toString = () => $(ks);
const _s = "hope-tabs__tablist";
function nh(e) {
  const t = w().Tabs, r = vr(), [n, a] = S(e, ["class", "onKeyDown"]), o = () => r.state.orientation === "horizontal", s = () => r.state.orientation === "vertical", l = () => o() && r.focusPrevTab(), c = () => o() && r.focusNextTab(), u = () => s() && r.focusNextTab(), f = () => s() && r.focusPrevTab(), d = ye(() => ({
    ArrowLeft: l,
    ArrowRight: c,
    ArrowDown: u,
    ArrowUp: f,
    Home: r.focusFirstTab,
    End: r.focusLastTab
  })), g = (b) => {
    oe(n.onKeyDown, b);
    const P = an(b), h = d()[P];
    h && (b.preventDefault(), oe(h, b));
  }, y = () => m(n.class, _s, Jf({
    alignment: r.state.alignment,
    orientation: r.state.orientation,
    variant: r.state.variant
  }));
  return i(B, p({
    role: "tablist",
    get "aria-orientation"() {
      return r.state.orientation;
    },
    get class() {
      return y();
    },
    get __baseStyle() {
      var b;
      return (b = t == null ? void 0 : t.baseStyle) == null ? void 0 : b.tabList;
    },
    onKeyDown: g
  }, a));
}
nh.toString = () => $(_s);
const Ps = "hope-tabs__tab-panel";
function oh(e) {
  const t = w().Tabs, r = vr(), [n, a] = re(-1), [o, s] = S(e, ["ref", "class", "children"]), l = () => r.isSelectedIndex(n()), c = () => r.getTabId(n()), u = () => r.getTabPanelId(n()), f = (y) => {
    a(r.registerTabPanel(y)), de(o.ref) ? o.ref(y) : o.ref = y;
  }, d = ot(() => o.children), g = () => m(o.class, Ps, eh());
  return i(B, p({
    ref: f,
    role: "tabpanel",
    tabIndex: "0",
    get id() {
      return u();
    },
    get "aria-labelledby"() {
      return c();
    },
    get hidden() {
      return !l();
    },
    get class() {
      return g();
    },
    get __baseStyle() {
      var y;
      return (y = t == null ? void 0 : t.baseStyle) == null ? void 0 : y.tabPanel;
    }
  }, s, {
    get children() {
      return i(H, {
        get when() {
          return l();
        },
        get children() {
          return i(H, {
            get when() {
              return r.state.keepAlive;
            },
            get fallback() {
              return o.children;
            },
            get children() {
              return d();
            }
          });
        }
      });
    }
  }));
}
oh.toString = () => $(Ps);
const ah = C({
  marginInlineStart: "$2"
}), sh = C({
  marginInlineEnd: "$2"
}), ih = C({
  noOfLines: 1
}), rt = C({
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
function Zt(e) {
  return {
    height: e.height,
    py: 0,
    px: e.paddingX,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    [`& .${rt}`]: {
      boxSize: e.closeButtonSize
    }
  };
}
function Qe(e) {
  return {
    backgroundColor: e.bgColor,
    color: e.color,
    [`& .${rt}:not(:disabled):hover`]: {
      backgroundColor: e.closeButtonBgColorHover
    }
  };
}
function Ye(e) {
  return {
    backgroundColor: e.bgColor,
    color: e.color,
    [`& .${rt}:not(:disabled):hover`]: {
      backgroundColor: e.closeButtonBgColorHover
    }
  };
}
function Ze(e) {
  return {
    borderColor: e.borderColor,
    color: e.color,
    [`& .${rt}:not(:disabled):hover`]: {
      backgroundColor: e.closeButtonBgColorHover
    }
  };
}
function Jt(e) {
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
const lh = C({
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
        [`& .${rt}:not(:disabled):hover`]: {
          backgroundColor: "$neutral4"
        },
        [`& .${rt}:not(:disabled):active`]: {
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
      sm: Zt({
        height: "$5",
        paddingX: "$2",
        fontSize: "$xs",
        lineHeight: "$4",
        closeButtonSize: "$4"
      }),
      md: Zt({
        height: "$6",
        paddingX: "$2",
        fontSize: "$sm",
        lineHeight: "$5",
        closeButtonSize: "$5"
      }),
      lg: Zt({
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
    /* -------------------------------------------------------------------------------------------------
     * Variant - solid + color
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "solid",
      colorScheme: "primary",
      css: Qe({
        color: "white",
        bgColor: "$primary9",
        closeButtonBgColorHover: "$primary10"
      })
    },
    {
      variant: "solid",
      colorScheme: "accent",
      css: Qe({
        color: "white",
        bgColor: "$accent9",
        closeButtonBgColorHover: "$accent10"
      })
    },
    {
      variant: "solid",
      colorScheme: "neutral",
      css: Qe({
        color: "white",
        bgColor: "$neutral9",
        closeButtonBgColorHover: "$neutral11"
      })
    },
    {
      variant: "solid",
      colorScheme: "success",
      css: Qe({
        color: "white",
        bgColor: "$success9",
        closeButtonBgColorHover: "$success10"
      })
    },
    {
      variant: "solid",
      colorScheme: "info",
      css: Qe({
        color: "white",
        bgColor: "$info9",
        closeButtonBgColorHover: "$info10"
      })
    },
    {
      variant: "solid",
      colorScheme: "warning",
      css: Qe({
        color: "$blackAlpha12",
        bgColor: "$warning9",
        closeButtonBgColorHover: "$warning10"
      })
    },
    {
      variant: "solid",
      colorScheme: "danger",
      css: Qe({
        color: "white",
        bgColor: "$danger9",
        closeButtonBgColorHover: "$danger10"
      })
    },
    /* -------------------------------------------------------------------------------------------------
     * Variant - subtle + color
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "subtle",
      colorScheme: "primary",
      css: Ye({
        color: "$primary11",
        bgColor: "$primary4",
        closeButtonBgColorHover: "$primary6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "accent",
      css: Ye({
        color: "$accent11",
        bgColor: "$accent4",
        closeButtonBgColorHover: "$accent6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "neutral",
      css: Ye({
        color: "$neutral12",
        bgColor: "$neutral4",
        closeButtonBgColorHover: "$neutral7"
      })
    },
    {
      variant: "subtle",
      colorScheme: "success",
      css: Ye({
        color: "$success11",
        bgColor: "$success4",
        closeButtonBgColorHover: "$success6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "info",
      css: Ye({
        color: "$info11",
        bgColor: "$info4",
        closeButtonBgColorHover: "$info6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "warning",
      css: Ye({
        color: "$warning11",
        bgColor: "$warning4",
        closeButtonBgColorHover: "$warning6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "danger",
      css: Ye({
        color: "$danger11",
        bgColor: "$danger4",
        closeButtonBgColorHover: "$danger6"
      })
    },
    /* -------------------------------------------------------------------------------------------------
     * Variant - outline + color
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "outline",
      colorScheme: "primary",
      css: Ze({
        color: "$primary11",
        borderColor: "$primary7",
        closeButtonBgColorHover: "$primary4"
      })
    },
    {
      variant: "outline",
      colorScheme: "accent",
      css: Ze({
        color: "$accent11",
        borderColor: "$accent7",
        closeButtonBgColorHover: "$accent4"
      })
    },
    {
      variant: "outline",
      colorScheme: "neutral",
      css: Ze({
        color: "$neutral12",
        borderColor: "$neutral7",
        closeButtonBgColorHover: "$neutral4"
      })
    },
    {
      variant: "outline",
      colorScheme: "success",
      css: Ze({
        color: "$success11",
        borderColor: "$success7",
        closeButtonBgColorHover: "$success4"
      })
    },
    {
      variant: "outline",
      colorScheme: "info",
      css: Ze({
        color: "$info11",
        borderColor: "$info7",
        closeButtonBgColorHover: "$info4"
      })
    },
    {
      variant: "outline",
      colorScheme: "warning",
      css: Ze({
        color: "$warning11",
        borderColor: "$warning7",
        closeButtonBgColorHover: "$warning4"
      })
    },
    {
      variant: "outline",
      colorScheme: "danger",
      css: Ze({
        color: "$danger11",
        borderColor: "$danger7",
        closeButtonBgColorHover: "$danger4"
      })
    },
    /* -------------------------------------------------------------------------------------------------
     * Variant - dot + color
     * -----------------------------------------------------------------------------------------------*/
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
    /* -------------------------------------------------------------------------------------------------
     * Variant - dot + size
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "dot",
      size: "sm",
      css: Jt("$1_5")
    },
    {
      variant: "dot",
      size: "md",
      css: Jt("$2")
    },
    {
      variant: "dot",
      size: "lg",
      css: Jt("$2_5")
    },
    /* -------------------------------------------------------------------------------------------------
     * Variant - dot + dot placement
     * -----------------------------------------------------------------------------------------------*/
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
}), Ts = "hope-tag", zs = te();
function ch(e) {
  var f, d, g, y, b, P;
  const t = w().Tag, r = {
    variant: ((d = (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.root) == null ? void 0 : d.variant) ?? "subtle",
    colorScheme: ((y = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.root) == null ? void 0 : y.colorScheme) ?? "neutral",
    size: ((P = (b = t == null ? void 0 : t.defaultProps) == null ? void 0 : b.root) == null ? void 0 : P.size) ?? "md"
  }, n = N(r, e), [a, o, s] = S(n, ["class"], ["variant", "colorScheme", "size", "dotPlacement"]), l = () => m(a.class, Ts, lh(o)), u = {
    size: () => o.size
  };
  return i(zs.Provider, {
    value: u,
    get children() {
      return i(A.span, p({
        get class() {
          return l();
        },
        get __baseStyle() {
          var h;
          return (h = t == null ? void 0 : t.baseStyle) == null ? void 0 : h.root;
        }
      }, s));
    }
  });
}
ch.toString = () => $(Ts);
function dh() {
  const e = Z(zs);
  if (!e)
    throw new Error("[Hope UI]: useTagContext must be used within a `<Tag />` component");
  return e;
}
const Bs = "hope-tag-close-button";
function uh(e) {
  const t = w().Tag, r = dh(), a = N({
    type: "button",
    role: "button",
    "aria-label": "Close"
  }, e), [o, s] = S(a, ["class", "children"]), l = () => m(o.class, Bs, rt({
    size: r.size()
  }));
  return i(A.button, p({
    get class() {
      return l();
    },
    get __baseStyle() {
      var c;
      return (c = t == null ? void 0 : t.baseStyle) == null ? void 0 : c.closeButton;
    }
  }, s, {
    get children() {
      return i(as, {});
    }
  }));
}
uh.toString = () => $(Bs);
const Ls = "hope-tag-left-icon";
function gh(e) {
  const t = w().Tag, [r, n] = S(e, ["class"]), a = () => m(r.class, Ls, sh());
  return i(at, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var o;
      return (o = t == null ? void 0 : t.baseStyle) == null ? void 0 : o.icon;
    }
  }, n));
}
gh.toString = () => $(Ls);
const Hs = "hope-tag-right-icon";
function fh(e) {
  const t = w().Tag, [r, n] = S(e, ["class"]), a = () => m(r.class, Hs, ah());
  return i(at, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var o;
      return (o = t == null ? void 0 : t.baseStyle) == null ? void 0 : o.icon;
    }
  }, n));
}
fh.toString = () => $(Hs);
const Ds = "hope-tag-label";
function hh(e) {
  const t = w().Tag, [r, n] = S(e, ["class"]), a = () => m(r.class, Ds, ih());
  return i(A.span, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var o;
      return (o = t == null ? void 0 : t.baseStyle) == null ? void 0 : o.label;
    }
  }, n));
}
hh.toString = () => $(Ds);
const Es = "hope-text";
function ph(e) {
  var l;
  const t = w().Text, r = {
    size: (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.size
  }, n = N(r, e), [a, o] = S(n, ["class", "size"]), s = () => m(a.class, Es, Wo({
    size: a.size
  }));
  return i(A.p, p({
    get class() {
      return s();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    }
  }, o));
}
ph.toString = () => $(Es);
function Gt(e, t) {
  return Object.entries({
    xs: t ?? "$2",
    sm: t ?? "$2_5",
    md: t ?? "$3",
    lg: t ?? "$4"
  }).map(([r, n]) => ({
    variant: e,
    size: r,
    css: { px: n }
  }));
}
const bh = C(sr, {
  minHeight: "80px",
  py: "$2",
  compoundVariants: [
    ...Gt("outline"),
    ...Gt("filled"),
    ...Gt("unstyled", 0)
  ]
}), As = "hope-textarea";
function mh(e) {
  var c, u;
  const t = w().Textarea, r = {
    variant: ((c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.variant) ?? "outline",
    size: ((u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.size) ?? "md"
  }, n = N(r, e), [a, o] = S(n, ["class", "variant", "size"]), s = pt(e), l = () => m(a.class, As, bh({
    variant: a.variant,
    size: a.size
  }));
  return i(B, p({
    as: "textarea",
    get class() {
      return l();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    }
  }, s, o));
}
mh.toString = () => $(As);
const Os = "hope-tooltip", vh = "hope-tooltip__arrow";
function Sh(e) {
  var E, X, U, T, M, xe, Oe, Pe, Me;
  const t = `hope-tooltip-${ue()}`, r = w().Tooltip, n = {
    id: t,
    placement: ((E = r == null ? void 0 : r.defaultProps) == null ? void 0 : E.placement) ?? "bottom",
    offset: ((X = r == null ? void 0 : r.defaultProps) == null ? void 0 : X.offset) ?? 8,
    withArrow: ((U = r == null ? void 0 : r.defaultProps) == null ? void 0 : U.withArrow) ?? !1,
    arrowSize: ((T = r == null ? void 0 : r.defaultProps) == null ? void 0 : T.arrowSize) ?? 8,
    arrowPadding: ((M = r == null ? void 0 : r.defaultProps) == null ? void 0 : M.arrowPadding) ?? 8,
    openDelay: ((xe = r == null ? void 0 : r.defaultProps) == null ? void 0 : xe.openDelay) ?? 0,
    closeDelay: ((Oe = r == null ? void 0 : r.defaultProps) == null ? void 0 : Oe.closeDelay) ?? 0,
    closeOnClick: ((Pe = r == null ? void 0 : r.defaultProps) == null ? void 0 : Pe.closeOnClick) ?? !0,
    closeOnMouseDown: ((Me = r == null ? void 0 : r.defaultProps) == null ? void 0 : Me.closeOnMouseDown) ?? !1
  }, a = N(n, e), [o, s] = S(a, ["class", "children", "id", "label", "opened", "defaultOpened", "inline", "disabled", "placement", "offset", "withArrow", "arrowSize", "arrowPadding", "openDelay", "closeDelay", "closeOnClick", "closeOnMouseDown", "onOpen", "onClose"]), [l, c] = re(!!o.defaultOpened), [u, f] = re(!1);
  let d, g, y, b;
  const P = () => o.opened !== void 0, h = () => P() ? !!o.opened : l(), x = () => m(o.class, Os, Ul()), z = () => m(vh, Ql());
  let v;
  const D = ot(() => o.children), _ = ye(() => {
    let F = D();
    for (; de(F); )
      F = F();
    return F;
  });
  async function R() {
    var xr, Cr, yr;
    const F = _();
    if (!F || !d)
      return;
    const pe = [Et(o.offset)];
    o.inline && pe.push(Nr()), pe.push(At()), pe.push(Ot()), o.withArrow && g && pe.push(Vr({
      element: g,
      padding: o.arrowPadding
    })), pe.push(qr());
    const {
      x: lt,
      y: L,
      placement: O,
      middlewareData: ne
    } = await Dt(F, d, {
      placement: o.placement,
      middleware: pe
    });
    if (!d)
      return;
    const be = (xr = ne.hide) == null ? void 0 : xr.referenceHidden;
    if (Object.assign(d.style, {
      left: `${Math.round(lt)}px`,
      top: `${Math.round(L)}px`,
      visibility: be ? "hidden" : "visible"
    }), !g)
      return;
    const bt = (Cr = ne.arrow) == null ? void 0 : Cr.x, Sr = (yr = ne.arrow) == null ? void 0 : yr.y, Ms = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right"
    }[O.split("-")[0]], Rs = `${o.arrowSize ? Math.round(o.arrowSize / 2) * -1 : -4}px`;
    Object.assign(g.style, {
      left: bt != null ? `${Math.round(bt)}px` : "",
      top: Sr != null ? `${Math.round(Sr)}px` : "",
      right: "",
      bottom: "",
      [Ms]: Rs
    });
  }
  const j = () => {
    var F;
    P() || c(!0), (F = o.onOpen) == null || F.call(o), R();
  }, ee = () => {
    var F;
    P() || c(!1), (F = o.onClose) == null || F.call(o);
  }, I = () => {
    o.disabled || (y = window.setTimeout(j, o.openDelay));
  }, k = () => {
    y && window.clearTimeout(y), b = window.setTimeout(ee, o.closeDelay);
  }, W = () => {
    o.closeOnClick && k();
  }, V = () => {
    o.closeOnMouseDown && k();
  }, Q = (F) => {
    h() && F.key === "Escape" && k();
  }, J = () => {
    const F = _();
    F.addEventListener("mouseenter", I), F.addEventListener("focus", I), F.addEventListener("click", W), F.addEventListener("mousedown", V), F.addEventListener("mouseleave", k), F.addEventListener("blur", k);
  }, Y = () => {
    const F = _();
    F.removeEventListener("mouseenter", I), F.removeEventListener("focus", I), F.removeEventListener("click", W), F.removeEventListener("mousedown", V), F.removeEventListener("mouseleave", k), F.removeEventListener("blur", k);
  }, K = () => {
    Lt || !d || (document.addEventListener("keydown", Q), v = Ht(_(), d, R));
  }, ve = () => {
    document.removeEventListener("keydown", Q), v == null || v(), f(!1);
  };
  return ge(() => {
    J();
  }), fe(() => {
    Y(), window.clearTimeout(y), window.clearTimeout(b);
  }), me(() => {
    h() ? (f(!0), o.id && _().setAttribute("aria-describedby", o.id)) : _().removeAttribute("aria-describedby");
  }), [_, i(H, {
    get when() {
      return u();
    },
    get children() {
      return i(gt, {
        get children() {
          return i(Ee, {
            get name() {
              return et.scale;
            },
            appear: !0,
            onBeforeEnter: R,
            onAfterEnter: K,
            onAfterExit: ve,
            get children() {
              return i(H, {
                get when() {
                  return h();
                },
                get children() {
                  return i(B, p({
                    ref(F) {
                      var pe = d;
                      typeof pe == "function" ? pe(F) : d = F;
                    },
                    role: "tooltip",
                    get id() {
                      return o.id;
                    },
                    get class() {
                      return x();
                    },
                    get __baseStyle() {
                      return r == null ? void 0 : r.baseStyle;
                    }
                  }, s, {
                    get children() {
                      return [nt(() => o.label), i(H, {
                        get when() {
                          return o.withArrow;
                        },
                        get children() {
                          return i(B, {
                            ref(F) {
                              var pe = g;
                              typeof pe == "function" ? pe(F) : g = F;
                            },
                            get class() {
                              return z();
                            },
                            get boxSize() {
                              return o.arrowSize;
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
Sh.toString = () => $(Os);
function Zh(e = {}) {
  const t = `disclosure-${ue()}`, [r, n] = re(e.defaultIsOpen || !1), a = () => e.isOpen !== void 0, o = () => a() ? !!e.isOpen : r(), s = () => {
    var d;
    a() || n(!1), (d = e.onClose) == null || d.call(e);
  }, l = () => {
    var d;
    a() || n(!0), (d = e.onOpen) == null || d.call(e);
  };
  return {
    isControlled: a,
    isOpen: o,
    onOpen: l,
    onClose: s,
    onToggle: () => {
      o() ? s() : l();
    },
    triggerProps: () => ({
      "aria-expanded": o(),
      "aria-controls": t
    }),
    disclosureProps: () => ({
      id: t,
      hidden: !o()
    })
  };
}
function Jh(e) {
  let t = !1;
  const r = (l) => {
    var u;
    const { once: c } = e;
    c && t || (t = !0, (u = e.handler) == null || u.call(e, l));
  }, n = (l, c, u, f) => {
    c && l && l.addEventListener && l.addEventListener(c, r, {
      capture: u,
      passive: f
    });
  }, a = () => {
    const { element: l, eventName: c, capture: u, passive: f } = e;
    n(l, c, u, f);
  }, o = (l, c) => {
    c && l && l.removeEventListener && l.removeEventListener(c, r);
  }, s = () => {
    const { element: l, eventName: c } = e;
    o(l, c);
  };
  return me((l) => {
    const { element: c, eventName: u, capture: f, passive: d } = e;
    return l && o(l.element, l.eventName), n(c, u, f, d), {
      element: c,
      eventName: u
    };
  }), fe(() => {
    const { element: l, eventName: c } = e;
    o(l, c);
  }), {
    active: a,
    inactive: s
  };
}
export {
  yc as Accordion,
  Bc as AccordionButton,
  Ac as AccordionIcon,
  zc as AccordionItem,
  Mc as AccordionPanel,
  Nc as Alert,
  qc as AlertDescription,
  Zc as AlertIcon,
  Jc as AlertTitle,
  ed as Anchor,
  rd as AspectRatio,
  cd as AsyncButton,
  Sd as Avatar,
  xd as AvatarBadge,
  Cd as AvatarExcess,
  vd as AvatarGroup,
  $d as Badge,
  B as Box,
  zd as Breadcrumb,
  Bd as BreadcrumbItem,
  Ld as BreadcrumbLink,
  Hd as BreadcrumbSeparator,
  ur as Button,
  id as ButtonGroup,
  Ed as Center,
  eu as Checkbox,
  Rd as CheckboxGroup,
  Xd as CheckboxPrimitive,
  Eh as CheckboxPrimitiveIndicator,
  du as CircularProgress,
  uu as CircularProgressIndicator,
  gu as CircularProgressLabel,
  Vt as CloseButton,
  hn as Collapse,
  mu as Container,
  Su as Divider,
  Ah as Drawer,
  Mh as DrawerBody,
  Oh as DrawerCloseButton,
  Iu as DrawerContent,
  Wh as DrawerFooter,
  Rh as DrawerHeader,
  ku as DrawerOverlay,
  Lo as Flex,
  jd as FormControl,
  ro as FormControlContext,
  _u as FormErrorMessage,
  Pu as FormHelperText,
  zu as FormLabel,
  Oo as Grid,
  Bu as GridItem,
  wg as HStack,
  Ou as Heading,
  Ft as HopeContext,
  Lh as HopeProvider,
  at as Icon,
  Mu as IconButton,
  Ru as Image,
  Fu as Input,
  Ko as InputAddon,
  Qo as InputElement,
  Wu as InputGroup,
  Nu as InputLeftAddon,
  qu as InputLeftElement,
  Vu as InputRightAddon,
  ju as InputRightElement,
  Xu as Kbd,
  br as List,
  Gu as ListIcon,
  eg as ListItem,
  Fh as Menu,
  ag as MenuContent,
  sg as MenuGroup,
  ug as MenuItem,
  gg as MenuLabel,
  fg as MenuTrigger,
  xu as Modal,
  mo as ModalBody,
  So as ModalCloseButton,
  yu as ModalContent,
  Co as ModalFooter,
  $o as ModalHeader,
  $u as ModalOverlay,
  fa as Notification,
  rr as NotificationDescription,
  ma as NotificationIcon,
  nr as NotificationTitle,
  Vh as NotificationsProvider,
  Zu as OrderedList,
  qh as Popover,
  jh as PopoverAnchor,
  Hg as PopoverArrow,
  Dg as PopoverBody,
  Eg as PopoverCloseButton,
  Ag as PopoverContent,
  Og as PopoverFooter,
  Mg as PopoverHeader,
  Kh as PopoverTrigger,
  qg as Progress,
  jg as ProgressIndicator,
  Kg as ProgressLabel,
  rf as Radio,
  Yg as RadioGroup,
  sf as Select,
  Wa as SelectContent,
  Na as SelectIcon,
  gf as SelectLabel,
  Xa as SelectListbox,
  df as SelectOptGroup,
  Ya as SelectOption,
  Ja as SelectOptionIndicator,
  es as SelectOptionText,
  rs as SelectPlaceholder,
  os as SelectTag,
  is as SelectTagCloseButton,
  cs as SelectTrigger,
  ds as SelectValue,
  Eu as SimpleGrid,
  Uh as SimpleOption,
  Qh as SimpleSelect,
  Bt as Skeleton,
  xf as SkeletonCircle,
  Cf as SkeletonText,
  $f as Spacer,
  kf as Spinner,
  mr as Stack,
  Af as Switch,
  Bf as SwitchPrimitive,
  Yh as SwitchPrimitiveThumb,
  rh as Tab,
  nh as TabList,
  oh as TabPanel,
  Vf as Table,
  qf as TableCaption,
  th as Tabs,
  ch as Tag,
  uh as TagCloseButton,
  hh as TagLabel,
  gh as TagLeftIcon,
  fh as TagRightIcon,
  jf as Tbody,
  Kf as Td,
  ph as Text,
  mh as Textarea,
  Xf as Tfoot,
  Uf as Th,
  Qf as Thead,
  Sh as Tooltip,
  Yf as Tr,
  Ju as UnorderedList,
  Sa as VStack,
  jr as __DEV__,
  Ic as accordionButtonStyles,
  kc as accordionIconStyles,
  wc as accordionItemStyles,
  _c as accordionPanelStyles,
  Wc as alertDescriptionStyles,
  Ce as alertIconStyles,
  Fc as alertStyles,
  Rc as alertTitleStyles,
  Gc as anchorStyles,
  td as aspectRatioStyles,
  gd as avatarBadgeStyles,
  dd as avatarExcessStyles,
  fd as avatarGroupStyles,
  ud as avatarImageStyles,
  gr as avatarStyles,
  yd as badgeStyles,
  Gr as baseDialogStyles,
  sr as baseInputResetStyles,
  Jr as baseModalContainerStyles,
  Xi as baseTheme,
  kd as breadcrumbItemStyles,
  Pd as breadcrumbLinkStyles,
  Id as breadcrumbListStyles,
  _d as breadcrumbSeparatorStyles,
  wd as breadcrumbStyles,
  sd as buttonGroupStyles,
  ad as buttonIconSpinnerStyles,
  nd as buttonIconStyles,
  od as buttonLoaderStyles,
  _n as buttonStyles,
  oe as callHandler,
  Th as cast,
  Dd as centerStyles,
  he as chainHandlers,
  Md as checkboxControlStyles,
  Od as checkboxLabelStyles,
  Ad as checkboxWrapperStyles,
  su as circularProgressIndicatorContainerStyles,
  iu as circularProgressIndicatorStyles,
  lu as circularProgressLabelStyles,
  ou as circularProgressStyles,
  au as circularProgressTrackStyles,
  m as classNames,
  pu as closeButtonStyles,
  Oc as collapseStyles,
  ut as colorModeClassNames,
  zh as config,
  bu as containerStyles,
  tt as contains,
  $ as createClassSelector,
  Zh as createDisclosure,
  Ie as createIcon,
  Ui as createTheme,
  C as css,
  vu as dividerStyles,
  nl as drawerContainerStyles,
  ol as drawerDialogStyles,
  q as drawerTransitionName,
  rl as drawerTransitionStyles,
  Wd as formControlStyles,
  qd as formErrorMessageStyles,
  Vd as formHelperTextStyles,
  Fd as formLabelStyles,
  Tc as getActiveElement,
  ei as getColorModeClassName,
  Bh as getCssText,
  Gs as getDefaultColorMode,
  _t as getNextIndex,
  Tt as getOwnerDocument,
  Pt as getPrevIndex,
  zt as getRelatedTarget,
  We as globalCss,
  nu as growAndShrink,
  Tg as hasTabIndex,
  Au as headingStyles,
  A as hope,
  dr as hopeButtonClass,
  Nt as hopeIconButtonClass,
  cr as hopeIconClass,
  Kt as hopeSkeletonClass,
  Lc as iconStyles,
  Ll as inputAddonStyles,
  Bl as inputElementStyles,
  zl as inputGroupStyles,
  Tl as inputStyles,
  dt as isArray,
  Ct as isChildrenFunction,
  Bg as isContentEditable,
  zg as isDisabled,
  on as isElement,
  Lg as isFocusable,
  de as isFunction,
  Pc as isHTMLElement,
  Ca as isHidden,
  Kr as isNull,
  Ks as isNumber,
  Mt as isObject,
  sn as isScrollable,
  Xs as isString,
  Ph as isUndefined,
  Yt as isValidEvent,
  Ku as kbdStyles,
  ft as keyframes,
  Qu as listIconStyles,
  Uu as listStyles,
  ln as maintainScrollVisibility,
  Us as mapKeys,
  il as menuContentStyles,
  ll as menuGroupStyles,
  fl as menuItemCommandStyles,
  ul as menuItemIconWrapperStyles,
  dl as menuItemStyles,
  gl as menuItemTextStyles,
  cl as menuLabelStyles,
  Re as menuTransitionName,
  al as menuTransitionStyles,
  sl as menuTriggerStyles,
  Ys as mockBody,
  Gi as modalBodyStyles,
  tl as modalCloseButtonStyles,
  Yi as modalContainerStyles,
  Zi as modalDialogStyles,
  el as modalFooterStyles,
  Ji as modalHeaderStyles,
  Zr as modalOverlayStyles,
  le as modalTransitionName,
  Qi as modalTransitionStyles,
  wr as noop,
  an as normalizeEventKey,
  Cl as notificationDescriptionStyles,
  Sl as notificationIconStyles,
  bl as notificationListStyles,
  vl as notificationLoaderStyles,
  Nh as notificationService,
  ml as notificationStyles,
  xl as notificationTitleStyles,
  ke as notificationTransitionName,
  pl as notificationTransitionStyles,
  Pl as popoverArrowStyles,
  Il as popoverBodyStyles,
  _l as popoverCloseButtonStyles,
  $l as popoverContentStyles,
  kl as popoverFooterStyles,
  wl as popoverHeaderStyles,
  Je as popoverTransitionName,
  yl as popoverTransitionStyles,
  Ng as progressIndicatorStyles,
  Vg as progressLabelStyles,
  Fg as progressStyles,
  Qg as radioControlStyles,
  Ug as radioLabelStyles,
  Xg as radioWrapperStyles,
  Qs as range,
  Nd as requiredIndicatorStyles,
  Js as saveColorModeToLocalStorage,
  Wl as selectContentStyles,
  Rl as selectIconStyles,
  Vl as selectLabelStyles,
  Fl as selectListboxStyles,
  El as selectMultiValueStyles,
  Nl as selectOptGroupStyles,
  Kl as selectOptionIndicatorStyles,
  ql as selectOptionStyles,
  jl as selectOptionTextStyles,
  Ml as selectPlaceholderStyles,
  en as selectSingleValueStyles,
  Ol as selectTagCloseButtonStyles,
  Al as selectTagStyles,
  Ge as selectTransitionName,
  Hl as selectTransitionStyles,
  Dl as selectTriggerStyles,
  Sf as skeletonStyles,
  yf as spacerStyles,
  wf as spinnerStyles,
  $g as stackStyles,
  Tf as switchControlStyles,
  Pf as switchLabelStyles,
  _f as switchWrapperStyles,
  ti as syncBodyColorModeClassName,
  Jf as tabListStyles,
  eh as tabPanelStyles,
  Gf as tabStyles,
  Rf as tableBodyStyles,
  Mf as tableCaptionStyles,
  Nf as tableCellStyles,
  Ff as tableColumnHeaderStyles,
  Wf as tableFootStyles,
  Of as tableStyles,
  Zf as tabsStyles,
  rt as tagCloseButtonStyles,
  ih as tagLabelStyles,
  sh as tagLeftIconStyles,
  ah as tagRightIconStyles,
  lh as tagStyles,
  Wo as textStyles,
  bh as textareaStyles,
  hr as toggleControlLabelStyles,
  pr as toggleControlStyles,
  fr as toggleWrapperStyles,
  Ql as tooltipArrowStyles,
  Ul as tooltipStyles,
  et as tooltipTransitionName,
  Xl as tooltipTransitionStyles,
  $c as useAccordionContext,
  lr as useAccordionItemContext,
  Vc as useAlertContext,
  An as useAvatarGroupContext,
  Un as useBreadcrumbContext,
  zn as useButtonGroupContext,
  to as useCheckboxGroupContext,
  Ud as useCheckboxPrimitiveContext,
  lo as useCircularProgressContext,
  og as useClickOutside,
  Gl as useColorMode,
  Dh as useColorModeValue,
  Io as useDrawerContext,
  Jh as useEvent,
  ht as useFormControlContext,
  yt as useInputGroupContext,
  qt as useMenuContext,
  ig as useMenuGroupContext,
  Fe as useModalContext,
  hg as useNotificationContext,
  it as usePopoverContext,
  Ba as useProgressContext,
  Xh as useRadioContext,
  Zg as useRadioGroupContext,
  Ae as useSelectContext,
  uf as useSelectOptGroupContext,
  ff as useSelectOptionContext,
  w as useStyleConfig,
  Lf as useSwitchPrimitivehContext,
  Xt as useTableContext,
  vr as useTabsContext,
  dh as useTagContext,
  Hh as useTheme,
  tn as valueToPercent
};
