import { isServer as tr, createComponent as i, Dynamic as ht, mergeProps as p, Portal as tt, ssr as re, ssrHydrationKey as oe, ssrAttribute as R, escape as V } from "solid-js/web";
import { createContext as J, mergeProps as q, createSignal as Z, createEffect as pe, useContext as Q, splitProps as b, createMemo as Se, Show as D, createUniqueId as ne, onMount as ae, onCleanup as ge, children as rt, createRenderEffect as Ps, Switch as Lr, Match as bt, on as st, For as Dr, Index as Ts } from "solid-js";
import { createStitches as zs, defaultThemeMap as Bs } from "@stitches/core";
import vr from "lodash.merge";
import { createStore as te } from "solid-js/store";
import { offset as Bt, flip as Lt, shift as Dt, autoUpdate as rr, computePosition as or, inline as Ls, arrow as Ds, hide as Hs, size as As } from "@floating-ui/dom";
import { useFloating as Es } from "solid-floating-ui";
import { Transition as De, TransitionGroup as Ms } from "solid-transition-group";
import { createFocusTrap as Hr } from "focus-trap";
const Ar = process.env.NODE_ENV !== "production";
function Os(e) {
  return typeof e == "number";
}
function it(e) {
  return Array.isArray(e);
}
function Ht(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !it(e);
}
function Te(e) {
  return typeof e == "function";
}
function Er(e) {
  return e == null;
}
function Rs(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function Cp(e) {
  return typeof e > "u" || e === void 0;
}
function Sr() {
}
function yp(e) {
  return e;
}
function Ws(e, t) {
  return Ht(e) ? Object.keys(e).reduce((r, o) => (r[o] = t(e[o]), r), {}) : e != null ? t(e) : null;
}
function ue(e, t) {
  return e && (Te(e) ? e(t) : e[0](e[1], t)), t == null ? void 0 : t.defaultPrevented;
}
function fe(...e) {
  return function(t) {
    e.some((r) => ue(r, t));
  };
}
function Fs(e) {
  return Array(e).fill(1).map((t, r) => r + 1);
}
const Ns = {
  classList: { add: Sr, remove: Sr }
}, Mr = () => typeof Storage < "u", Or = "hope-ui-color-mode", lt = {
  light: "hope-ui-light",
  dark: "hope-ui-dark"
};
function Vs() {
  if (!Mr())
    return null;
  try {
    return localStorage.getItem(Or);
  } catch (e) {
    return Ar && console.log(e), null;
  }
}
function qs(e) {
  if (Mr())
    try {
      localStorage.setItem(Or, e);
    } catch (t) {
      Ar && console.log(t);
    }
}
function js(e) {
  const t = Vs();
  return t || (e === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e);
}
function Ks(e) {
  return e ? lt.dark : lt.light;
}
function Xs(e) {
  const t = tr ? Ns : document.body;
  t.classList.add(Ks(e)), t.classList.remove(e ? lt.light : lt.dark);
}
const Rr = {
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
}, Ie = {
  ...Rr,
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
}, Us = {
  desktop_s: `(min-width: ${Ie.containerDesktopS})`,
  mobile_s: `(min-width: ${Ie.containerMobileS})`,
  mobile_m: `(min-width: ${Ie.containerMobileM})`,
  mobile_l: `(min-width: ${Ie.containerMobileL})`,
  sm: `(min-width: ${Ie.containerSm})`,
  md: `(min-width: ${Ie.containerMd})`,
  lg: `(min-width: ${Ie.containerLg})`,
  xl: `(min-width: ${Ie.containerXl})`,
  "2xl": `(min-width: ${Ie.container2xl})`,
  "reduce-motion": "(prefers-reduced-motion: reduce)",
  light: "(prefers-color-scheme: light)",
  dark: "(prefers-color-scheme: dark)"
}, Qs = {
  /**
   * The CSS `background` property
   */
  bg: (e) => ({ background: e }),
  /**
   * The CSS `background-color` property
   */
  bgColor: (e) => ({ backgroundColor: e })
}, Ys = {
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
}, Zs = {
  /**
   * The CSS `display` property
   */
  d: (e) => ({ display: e })
}, Js = {
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
}, Gs = {
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
}, ei = {
  /**
   * The CSS `position` property
   */
  pos: (e) => ({ position: e })
};
function Be(...e) {
  return e.map((t) => `[role=group]${t} &, [data-group]${t} &, .group${t} &`).join(", ");
}
function _e(...e) {
  return e.map((t) => `[data-peer]${t} ~ &, .peer${t} ~ &`).join(", ");
}
const ti = {
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
    [Be(":hover", "[data-hover]")]: e
  }),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: (e) => ({
    [_e(":hover", "[data-hover]")]: e
  }),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: (e) => ({
    [Be(":focus", "[data-focus]")]: e
  }),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: (e) => ({
    [_e(":focus", "[data-focus]")]: e
  }),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: (e) => ({
    [Be(":focus-visible")]: e
  }),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: (e) => ({
    [_e(":focus-visible")]: e
  }),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: (e) => ({
    [Be(":active", "[data-active]")]: e
  }),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: (e) => ({
    [_e(":active", "[data-active]")]: e
  }),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is selected
   */
  _groupSelected: (e) => ({
    [Be("[aria-selected=true]", "[data-selected]")]: e
  }),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is selected
   */
  _peerSelected: (e) => ({
    [_e("[aria-selected=true]", "[data-selected]")]: e
  }),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: (e) => ({
    [Be(":disabled", "[data-disabled]")]: e
  }),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: (e) => ({
    [_e(":disabled", "[data-disabled]")]: e
  }),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: (e) => ({
    [Be(":invalid", "[data-invalid]")]: e
  }),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: (e) => ({
    [_e(":invalid", "[data-invalid]")]: e
  }),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: (e) => ({
    [Be(":checked", "[data-checked]")]: e
  }),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: (e) => ({
    [_e(":checked", "[data-checked]")]: e
  }),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: (e) => ({
    [Be(":focus-within")]: e
  }),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: (e) => ({
    [_e(":focus-within")]: e
  }),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: (e) => ({
    [_e(":placeholder-shown")]: e
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
}, ri = {
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
}, oi = {
  /**
   * The CSS `box-shadow` property
   */
  shadow: (e) => ({ boxShadow: e })
}, ni = {
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
}, ai = {
  /**
   * Utility to visually truncating text after a fixed number of lines.
   */
  noOfLines: (e) => ({
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": e
  })
}, si = {
  ...Qs,
  ...Ys,
  ...Zs,
  ...ei,
  ...ti,
  ...ri,
  ...Js,
  ...Gs,
  ...oi,
  ...ni,
  ...ai
}, Wr = {
  tooltipContent: "#00000090",
  tooltipArrow: "#00000090"
}, ii = {
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
}, li = {
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
}, ci = {
  // transparent: "transparent",
  // current: "currentColor",
  // black: "#000000",
  // white: "#ffffff",
  ...ii,
  ...li
}, di = {
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
}, ui = {
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
}, gi = {
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
}, fi = {
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
}, pi = {
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
}, hi = {
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
}, bi = {
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
}, mi = {
  loContrast: "white",
  background: "$loContrast",
  focusRing: "#96c7f2",
  closeButtonHoverBackground: "$blackAlpha4",
  closeButtonActiveBackground: "$blackAlpha5",
  progressStripe: "$whiteAlpha6"
}, vi = {
  ...Wr,
  ...di,
  ...ui,
  ...gi,
  ...fi,
  ...pi,
  ...hi,
  ...bi,
  ...mi
}, Si = {
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
}, xi = {
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
}, Ci = {
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
}, yi = {
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
}, $i = {
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
}, wi = {
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
}, _i = {
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
}, Ii = {
  loContrast: "$neutral1",
  background: "$loContrast",
  focusRing: "#0a4481",
  closeButtonHoverBackground: "$whiteAlpha4",
  closeButtonActiveBackground: "$whiteAlpha5",
  progressStripe: "$blackAlpha6"
}, ki = {
  ...Wr,
  ...Si,
  ...xi,
  ...Ci,
  ...yi,
  ...$i,
  ...wi,
  ..._i,
  ...Ii
}, Pi = {
  none: "0",
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, Ti = {
  none: "0 0 #0000",
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  sm: "0 1px 3px 0 rgb(0 0 0 / 0.09), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.09), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.09), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.09), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.24)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.06)",
  outline: "0 0 0 3px $colors$focusRing"
}, zi = {
  lg: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
}, Bi = {
  sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol","Noto Color Emoji"',
  serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
}, Li = {
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
}, Di = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
}, Hi = {
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
}, Ai = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em"
}, Ei = {
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
}, Mi = {
  colors: {
    ...ci,
    ...vi
  },
  space: Rr,
  sizes: Ie,
  fonts: Bi,
  fontSizes: Li,
  fontWeights: Di,
  letterSpacings: Ai,
  lineHeights: Hi,
  radii: Pi,
  shadows: Ti,
  zIndices: Ei
}, Oi = {
  colors: ki,
  shadows: zi
}, {
  theme: Ri,
  css: m,
  globalCss: Me,
  config: $p,
  createTheme: Wi,
  getCssText: wp,
  keyframes: ct
} = zs({
  prefix: "hope",
  themeMap: {
    ...Bs,
    borderWidth: "sizes",
    borderTopWidth: "sizes",
    borderRightWidth: "sizes",
    borderBottomWidth: "sizes",
    borderLeftWidth: "sizes",
    strokeWidth: "sizes"
  },
  theme: Mi,
  media: Us,
  utils: si
}), ce = {
  fade: "hope-modal-fade-transition",
  fadeInBottom: "hope-modal-fade-in-bottom-transition",
  scale: "hope-modal-scale-transition"
}, Fi = Me({
  /* fade */
  [`.${ce.fade}-enter, .${ce.fade}-exit-to`]: {
    opacity: 0
  },
  [`.${ce.fade}-enter-to, .${ce.fade}-exit`]: {
    opacity: 1
  },
  [`.${ce.fade}-enter-active`]: {
    transition: "opacity 300ms ease-out"
  },
  [`.${ce.fade}-exit-active`]: {
    transition: "opacity 200ms ease-in"
  },
  /* fade-in-bottom */
  [`.${ce.fadeInBottom}-enter, .${ce.fadeInBottom}-exit-to`]: {
    opacity: 0,
    transform: "translateY(16px)"
  },
  [`.${ce.fadeInBottom}-enter-to, .${ce.fadeInBottom}-exit`]: {
    opacity: 1,
    transform: "translateY(0)"
  },
  [`.${ce.fadeInBottom}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-out"
  },
  [`.${ce.fadeInBottom}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-in"
  },
  /* scale */
  [`.${ce.scale}-enter, .${ce.scale}-exit-to`]: {
    opacity: 0,
    transform: "scale(0.95)"
  },
  [`.${ce.scale}-enter-to, .${ce.scale}-exit`]: {
    opacity: 1,
    transform: "scale(1)"
  },
  [`.${ce.scale}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-out"
  },
  [`.${ce.scale}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-in"
  }
}), Fr = m({
  zIndex: "$overlay",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "hsl(0 0% 0% / 65%)"
  //"$blackAlpha11",
}), Nr = m({
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
}), Ni = m(Nr, {
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
}), Vr = m({
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
}), Vi = m(Vr, {
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
}), qi = m({
  flex: 0,
  pt: "$5",
  px: "$5",
  pb: "$3",
  fontSize: "$lg",
  fontWeight: "$medium"
}), ji = m({
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
}), Ki = m({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  pt: "$3",
  px: "$5",
  pb: "$5"
}), Xi = m({
  position: "absolute",
  top: "$4",
  insetInlineEnd: "$4"
}), j = {
  fade: "hope-drawer-fade-transition",
  slideInTop: "hope-drawer-slide-in-top-transition",
  slideInRight: "hope-drawer-slide-in-right-transition",
  slideInBottom: "hope-drawer-slide-in-bottom-transition",
  slideInLeft: "hope-drawer-slide-in-left-transition"
}, Ui = Me({
  /* fade */
  [`.${j.fade}-enter, .${j.fade}-exit-to`]: {
    opacity: 0
  },
  [`.${j.fade}-enter-to, .${j.fade}-exit`]: {
    opacity: 1
  },
  [`.${j.fade}-enter-active, .${j.fade}-exit-active`]: {
    transition: "opacity 500ms ease-in-out"
  },
  /* slide common */
  [`.${j.slideInTop}-enter-active, .${j.slideInTop}-exit-active,
    .${j.slideInRight}-enter-active, .${j.slideInRight}-exit-active,
    .${j.slideInBottom}-enter-active, .${j.slideInBottom}-exit-active,
    .${j.slideInLeft}-enter-active, .${j.slideInLeft}-exit-active`]: {
    transition: "transform 500ms ease-in-out"
  },
  /* slide-in-top */
  [`.${j.slideInTop}-enter, .${j.slideInTop}-exit-to`]: {
    transform: "translateY(-100%)"
  },
  [`.${j.slideInTop}-enter-to, .${j.slideInTop}-exit`]: {
    transform: "translateY(0)"
  },
  /* slide-in-right */
  [`.${j.slideInRight}-enter, .${j.slideInRight}-exit-to`]: {
    transform: "translateX(100%)"
  },
  [`.${j.slideInRight}-enter-to, .${j.slideInRight}-exit`]: {
    transform: "translateX(0)"
  },
  /* slide-in-bottom */
  [`.${j.slideInBottom}-enter, .${j.slideInBottom}-exit-to`]: {
    transform: "translateY(100%)"
  },
  [`.${j.slideInBottom}-enter-to, .${j.slideInBottom}-exit`]: {
    transform: "translateY(0)"
  },
  /* slide-in-left */
  [`.${j.slideInLeft}-enter, .${j.slideInLeft}-exit-to`]: {
    transform: "translateX(-100%)"
  },
  [`.${j.slideInLeft}-enter-to, .${j.slideInLeft}-exit`]: {
    transform: "translateX(0)"
  }
}), Qi = m(Nr, {
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
}), Yi = m(Vr, {
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
}), Ee = {
  scaleTopLeft: "hope-menu-scale-top-left-transition",
  scaleTopRight: "hope-menu-scale-top-right-transition",
  scaleBottomLeft: "hope-menu-scale-bottom-left-transition",
  scaleBottomRight: "hope-menu-scale-bottom-right-transition"
};
function yt(e, t) {
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
const Zi = Me({
  ...yt(Ee.scaleTopLeft, "top left"),
  ...yt(Ee.scaleTopRight, "top right"),
  ...yt(Ee.scaleBottomLeft, "bottom left"),
  ...yt(Ee.scaleBottomRight, "bottom right")
}), Ji = m({
  appearance: "none",
  display: "inline-flex",
  alignItems: "center",
  outline: "none"
}), Gi = m({
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
}), el = m({}), tl = m({
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
function We(e) {
  return {
    color: e.color,
    "&[data-active]": {
      backgroundColor: e.bgColorActive
    }
  };
}
const rl = m({
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
      primary: We({ color: "$primary11", bgColorActive: "$primary3" }),
      accent: We({ color: "$accent11", bgColorActive: "$accent3" }),
      neutral: We({ color: "$neutral12", bgColorActive: "$neutral4" }),
      success: We({ color: "$success11", bgColorActive: "$success3" }),
      info: We({ color: "$info11", bgColorActive: "$info3" }),
      warning: We({ color: "$warning11", bgColorActive: "$warning3" }),
      danger: We({ color: "$danger11", bgColorActive: "$danger3" })
    }
  },
  defaultVariants: {
    colorScheme: "neutral"
  }
}), ol = m({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}), nl = m({
  flexGrow: 1
}), al = m({
  flexShrink: 0,
  color: "$neutral11",
  fontSize: "$sm",
  lineHeight: "$none"
}), At = ct({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
}), sl = ct({
  from: { opacity: 0 },
  to: { opacity: 1 }
}), we = {
  slideInTop: "hope-notification-slide-in-top-transition",
  slideInRight: "hope-notification-slide-in-right-transition",
  slideInBottom: "hope-notification-slide-in-bottom-transition",
  slideInLeft: "hope-notification-slide-in-left-transition"
};
function $t(e) {
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
const il = Me({
  ...$t({
    name: we.slideInTop,
    enterTransform: "translateY(-100%)",
    leaveTransform: "translateY(0)"
  }),
  ...$t({
    name: we.slideInRight,
    enterTransform: "translateX(100%)",
    leaveTransform: "translateX(0)"
  }),
  ...$t({
    name: we.slideInBottom,
    enterTransform: "translateY(100%)",
    leaveTransform: "translateY(0)"
  }),
  ...$t({
    name: we.slideInLeft,
    enterTransform: "translateX(-100%)",
    leaveTransform: "translateX(0)"
  })
}), ll = m({
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
}), cl = m({
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
}), dl = m({
  animation: `1s linear infinite ${At}`
}), ul = m({
  flexShrink: 0,
  variants: {
    status: {
      success: { color: "$success9" },
      info: { color: "$info9" },
      warning: { color: "$warning9" },
      danger: { color: "$danger9" }
    }
  }
}), gl = m({
  fontWeight: "$medium"
}), fl = m({
  display: "inline-block",
  color: "$neutral11"
}), Ye = {
  scale: "hope-popover-scale-transition"
}, pl = Me({
  /* scale */
  [`.${Ye.scale}-enter, .${Ye.scale}-exit-to`]: {
    opacity: 0,
    transform: "scale(0.95)"
  },
  [`.${Ye.scale}-enter-to, .${Ye.scale}-exit`]: {
    opacity: 1,
    transform: "scale(1)"
  },
  [`.${Ye.scale}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease"
  },
  [`.${Ye.scale}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-in-out"
  }
}), hl = m({
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
}), bl = m({
  display: "flex",
  alignItems: "center",
  flex: 0,
  borderColor: "inherit",
  borderBottomWidth: "1px",
  px: "$3",
  py: "$2",
  fontSize: "$base",
  fontWeight: "$medium"
}), ml = m({
  flex: 1,
  px: "$3",
  py: "$2"
}), vl = m({
  display: "flex",
  alignItems: "center",
  borderColor: "inherit",
  borderTopWidth: "1px",
  px: "$3",
  py: "$2"
}), Sl = m({
  position: "absolute",
  top: "$2",
  insetInlineEnd: "$2"
}), xl = m({
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
function wt(e) {
  return {
    minHeight: e.minHeight,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight
  };
}
const Pe = {
  xs: wt({ fontSize: "$xs", lineHeight: "$4", minHeight: "$6" }),
  sm: wt({ fontSize: "$sm", lineHeight: "$5", minHeight: "$8" }),
  md: wt({ fontSize: "$base", lineHeight: "$6", minHeight: "$10" }),
  lg: wt({ fontSize: "$lg", lineHeight: "$7", minHeight: "$12" })
}, xr = {
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
}, nr = m({
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
        ...xr
      },
      filled: {
        border: "1px solid transparent",
        backgroundColor: "$neutral3",
        "&:hover, &:focus": {
          backgroundColor: "$neutral4"
        },
        ...xr
      },
      unstyled: {
        border: "1px solid transparent",
        backgroundColor: "transparent"
      }
    },
    size: {
      ...Pe
    }
  }
});
function Ce(e) {
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
const Cl = m(nr, {
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
    ...Ce({
      variant: "outline",
      size: "xs",
      paddingX: "$2",
      paddingWithElement: "$6"
    }),
    ...Ce({
      variant: "outline",
      size: "sm",
      paddingX: "$2_5",
      paddingWithElement: "$8"
    }),
    ...Ce({
      variant: "outline",
      size: "md",
      paddingX: "$3",
      paddingWithElement: "$10"
    }),
    ...Ce({
      variant: "outline",
      size: "lg",
      paddingX: "$4",
      paddingWithElement: "$12"
    }),
    /* -------------------------------------------------------------------------------------------------
     * Variant - filled + size
     * -----------------------------------------------------------------------------------------------*/
    ...Ce({
      variant: "filled",
      size: "xs",
      paddingX: "$2",
      paddingWithElement: "$6"
    }),
    ...Ce({
      variant: "filled",
      size: "sm",
      paddingX: "$2_5",
      paddingWithElement: "$8"
    }),
    ...Ce({
      variant: "filled",
      size: "md",
      paddingX: "$3",
      paddingWithElement: "$10"
    }),
    ...Ce({
      variant: "filled",
      size: "lg",
      paddingX: "$4",
      paddingWithElement: "$12"
    }),
    /* -------------------------------------------------------------------------------------------------
     * Variant - unstyled + size
     * -----------------------------------------------------------------------------------------------*/
    ...Ce({
      variant: "unstyled",
      size: "xs",
      paddingX: 0,
      paddingWithElement: "$6"
    }),
    ...Ce({
      variant: "unstyled",
      size: "sm",
      paddingX: 0,
      paddingWithElement: "$8"
    }),
    ...Ce({
      variant: "unstyled",
      size: "md",
      paddingX: 0,
      paddingWithElement: "$10"
    }),
    ...Ce({
      variant: "unstyled",
      size: "lg",
      paddingX: 0,
      paddingWithElement: "$12"
    })
  ]
}), yl = m({
  position: "relative",
  display: "flex",
  width: "100%"
}), $l = m({
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
        ...Pe.xs,
        width: Pe.xs.minHeight
      },
      sm: {
        ...Pe.sm,
        width: Pe.sm.minHeight
      },
      md: {
        ...Pe.md,
        width: Pe.md.minHeight
      },
      lg: {
        ...Pe.lg,
        width: Pe.lg.minHeight
      }
    }
  }
});
function ye(e) {
  return {
    variant: e.variant,
    size: e.size,
    css: { px: e.paddingX }
  };
}
const wl = m({
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
      ...Pe
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
    ye({
      variant: "outline",
      size: "xs",
      paddingX: "$2"
    }),
    ye({
      variant: "outline",
      size: "sm",
      paddingX: "$2_5"
    }),
    ye({
      variant: "outline",
      size: "md",
      paddingX: "$3"
    }),
    ye({
      variant: "outline",
      size: "lg",
      paddingX: "$4"
    }),
    /* -------------------------------------------------------------------------------------------------
     * Variant - filled + size
     * -----------------------------------------------------------------------------------------------*/
    ye({
      variant: "filled",
      size: "xs",
      paddingX: "$2"
    }),
    ye({
      variant: "filled",
      size: "sm",
      paddingX: "$2_5"
    }),
    ye({
      variant: "filled",
      size: "md",
      paddingX: "$3"
    }),
    ye({
      variant: "filled",
      size: "lg",
      paddingX: "$4"
    }),
    /* -------------------------------------------------------------------------------------------------
     * Variant - unstyled + size
     * -----------------------------------------------------------------------------------------------*/
    ye({
      variant: "unstyled",
      size: "xs",
      paddingX: 0
    }),
    ye({
      variant: "unstyled",
      size: "sm",
      paddingX: 0
    }),
    ye({
      variant: "unstyled",
      size: "md",
      paddingX: 0
    }),
    ye({
      variant: "unstyled",
      size: "lg",
      paddingX: 0
    })
  ]
}), Ze = {
  fadeInTop: "hope-select-fade-in-top-transition"
}, _l = Me({
  /* fade-in-top */
  [`.${Ze.fadeInTop}-enter, .${Ze.fadeInTop}-exit-to`]: {
    opacity: 0,
    transform: "translateY(-16px)"
  },
  [`.${Ze.fadeInTop}-enter-to, .${Ze.fadeInTop}-exit`]: {
    opacity: 1,
    transform: "translateY(0)"
  },
  [`.${Ze.fadeInTop}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-out"
  },
  [`.${Ze.fadeInTop}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "100ms",
    transitionTimingFunction: "ease-in"
  }
});
function qt(e, t, r) {
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
  }).map(([o, a]) => ({
    variant: e,
    size: o,
    css: {
      paddingInlineStart: a.start,
      paddingInlineEnd: a.end
    }
  }));
}
const Il = m(nr, {
  appearance: "none",
  display: "inline-flex",
  alignItems: "center",
  outline: "none",
  cursor: "pointer",
  "&:focus": {
    outline: "none"
  },
  compoundVariants: [
    ...qt("outline"),
    ...qt("filled"),
    ...qt("unstyled", 0, 0)
  ]
}), qr = m({
  flexGrow: 1,
  flexShrink: 1,
  textAlign: "start",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}), kl = m({
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
}), Pl = m({
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
}), Tl = m({
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
}), zl = m(qr, {
  color: "$neutral9",
  opacity: 1
}), Bl = m({
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
}), Ll = m({
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
}), Dl = m({
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
}), Hl = m({}), Al = m({
  display: "flex",
  alignItems: "center",
  py: "$2",
  px: "$3",
  color: "$neutral11",
  fontSize: "$xs",
  lineHeight: "$4"
}), El = m({
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
}), Ml = m({
  display: "inline-flex",
  alignItems: "center",
  py: "$2",
  paddingInlineStart: "$3",
  paddingInlineEnd: "$6"
}), Ol = m({
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  paddingInlineEnd: "$3",
  color: "$primary10",
  pointerEvents: "none"
}), Je = {
  scale: "hope-tooltip-scale-transition"
}, Rl = Me({
  /* scale */
  [`.${Je.scale}-enter, .${Je.scale}-exit-to`]: {
    opacity: 0,
    transform: "scale(0.90)"
  },
  [`.${Je.scale}-enter-to, .${Je.scale}-exit`]: {
    opacity: 1,
    transform: "scale(1)"
  },
  [`.${Je.scale}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease"
  },
  [`.${Je.scale}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "150ms",
    transitionTimingFunction: "ease-in-out"
  }
}), Wl = m({
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
}), Fl = m({
  zIndex: "$tooltip",
  position: "absolute",
  boxSize: "8px",
  backgroundColor: "inherit",
  transform: "rotate(45deg)"
}), Nl = Me({
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
function Cr(e, t, r) {
  Object.entries(e).forEach(([o, a]) => {
    if (Ht(a))
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
function Vl(e, t) {
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
    (a) => a && Cr(a, r, o)
  ), Object.entries(e).forEach(([a, n]) => {
    n != null && a !== "css" && (a.startsWith("_") ? r[a] = n : Ht(n) ? Object.keys(n).forEach((s) => {
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
  }), e.css && Cr(e.css, r, o), { ...r, ...o };
}
function yr(e, t) {
  const r = e === "dark", o = r ? lt.dark : lt.light, a = r ? vr({}, Oi, t) : t, n = Wi(o, a);
  return vr({}, Ri, n);
}
function ar(e, t) {
  return Ht(e) ? Object.keys(e).reduce((r, o) => (r[o] = t(e[o]), r), {}) : e != null ? t(e) : null;
}
function $r(e) {
  return e.startsWith("$") ? `var(--hope-colors-${e.substring(1)})` : e;
}
const Et = m({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0"
}), Mt = J();
function ql() {
  Ui(), Zi(), Fi(), il(), pl(), _l(), Rl();
}
function _p(e) {
  var x, z, C, $;
  e = q({
    enableCssReset: !0
  }, e);
  const r = yr("light", ((x = e.config) == null ? void 0 : x.lightTheme) ?? {}), o = yr("dark", ((z = e.config) == null ? void 0 : z.darkTheme) ?? {}), a = js(((C = e.config) == null ? void 0 : C.initialColorMode) ?? "light"), n = a === "dark" ? o : r, [s, l] = Z(a), [c, d] = Z(n), f = () => s() === "dark", u = (B) => {
    l(B), qs(B);
  }, g = () => {
    u(f() ? "light" : "dark");
  }, S = {
    components: (($ = e.config) == null ? void 0 : $.components) ?? {},
    theme: c,
    colorMode: s,
    setColorMode: u,
    toggleColorMode: g
  };
  return pe(() => {
    d(f() ? o : r), Xs(f());
  }), e.enableCssReset && Nl(), ql(), i(Mt.Provider, {
    value: S,
    get children() {
      return e.children;
    }
  });
}
function Ip() {
  const e = Q(Mt);
  if (!e)
    throw new Error("[Hope UI]: useTheme must be used within a HopeProvider");
  return e.theme;
}
function y() {
  const e = Q(Mt);
  if (!e)
    throw new Error("[Hope UI]: useStyleConfig must be used within a HopeProvider");
  return e.components;
}
function jl() {
  const e = Q(Mt);
  if (!e)
    throw new Error("[Hope UI]: useColorMode must be used within a HopeProvider");
  return {
    colorMode: e.colorMode,
    setColorMode: e.setColorMode,
    toggleColorMode: e.toggleColorMode
  };
}
function kp(e, t) {
  const {
    colorMode: r
  } = jl();
  return () => r() === "dark" ? t : e;
}
function v(e) {
  return `.${e}`;
}
function h(...e) {
  return e.filter(Boolean).join(" ");
}
function jr(e, t, r) {
  return (e - t) * 100 / (r - t);
}
function It(e, t, r) {
  let o = e + 1;
  return o > t && (o = r ? 0 : t), o;
}
function kt(e, t, r) {
  let o = e - 1;
  return o < 0 && (o = r ? t : 0), o;
}
const Kl = {
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
}, Xl = {
  color: !0,
  background: !0,
  bg: !0,
  backgroundColor: !0,
  bgColor: !0,
  opacity: !0
}, Ul = { css: !0 }, Ql = {
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
}, Yl = {
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
}, Zl = {
  appearance: !0,
  userSelect: !0,
  pointerEvents: !0,
  resize: !0,
  cursor: !0,
  outline: !0,
  outlineOffset: !0,
  outlineColor: !0
}, Jl = {
  display: !0,
  d: !0,
  verticalAlign: !0,
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  objectFit: !0,
  objectPosition: !0
}, Gl = {
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
}, ec = {
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
}, tc = {
  position: !0,
  pos: !0,
  zIndex: !0,
  top: !0,
  right: !0,
  bottom: !0,
  left: !0
}, rc = {
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
}, oc = {
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
}, nc = {
  textShadow: !0,
  boxShadow: !0,
  shadow: !0
}, ac = {
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
}, sc = {
  transform: !0,
  transformOrigin: !0,
  clipPath: !0
}, ic = {
  transition: !0,
  transitionProperty: !0,
  transitionTimingFunction: !0,
  transitionDuration: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0
}, lc = {
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
}, cc = {
  ...Kl,
  ...Xl,
  ...Ql,
  ...Yl,
  ...Zl,
  ...Jl,
  ...Gl,
  ...ec,
  ...tc,
  ...oc,
  ...nc,
  ...ac,
  ...sc,
  ...ic,
  ...lc,
  ...rc,
  ...Ul
}, dc = m({});
function uc(e, t) {
  return dc({ css: Vl(e, t) });
}
function gc(e) {
  return Object.keys(e).filter((t) => t in cc);
}
const jt = (e, t) => {
  const r = (o) => {
    const a = gc(o), n = q({
      as: e
    }, o), [s, l, c] = b(n, ["__tooltip_title", "__tooltip_show_arrow", "__tooltip_placement", "__tooltip_id", "__tooltip_context_id", "__tooltip_open_delay", "__tooltip_close_delay", "__tooltip_open_on_focus", "__tooltip_skip_delay_duration", "__tooltip_open_on_hover", "__tooltip_close_on_escape", "__tooltip_close_on_pointer_down", "__tooltip_open", "__tooltip_close_on_scroll", "__tooltip_hoverable_content", "as", "class", "className", "__baseStyle"], a), d = Se(() => [Te(t == null ? void 0 : t.baseStyle) ? t == null ? void 0 : t.baseStyle(o) : t == null ? void 0 : t.baseStyle, s.__baseStyle]), f = () => h(
      t == null ? void 0 : t.baseClass,
      // In order to target the component in stitches css method and prop, like any other Hope UI components.
      s.class,
      s.className,
      uc(l, d())
    );
    let u = () => i(ht, p({
      get component() {
        return s.as ?? "div";
      },
      get class() {
        return f();
      }
    }, c)), g = () => {
      const [S, x] = Z(!1), [z, C] = Z(), [$, B] = Z();
      let w = ne(), E = ne(), M = (s.__tooltip_placement ?? "top").toLowerCase(), N = Es(z, $, {
        open: S,
        // @ts-ignore
        placement: M,
        middleware: [Bt(10), Lt(), Dt()]
        // whileElementsMounted: autoUpdate,
      });
      ae(() => {
        C(document.querySelector(`[unique-id="${w}"]`));
      });
      const L = (_) => {
        x(!1);
      }, O = () => (ae(() => {
        B(document.getElementById(E));
      }), i(ht, {
        component: "div",
        id: E,
        get style() {
          return {
            position: N.strategy,
            "z-index": "var(--hope-zIndices-tooltip, 1000)",
            top: `${N.y ?? 0}px`,
            left: `${N.x ?? 0}px`,
            width: "max-content"
          };
        },
        onMouseOver: () => x(!0),
        onMouseOut: L,
        onBlur: L,
        onClick: L,
        onMouseDown: L,
        get "data-open"() {
          return S();
        },
        "data-corvu-tooltip-content": !0,
        get children() {
          return [s.__tooltip_title, (s.__tooltip_show_arrow ?? !0) && i(ht, {
            component: "div",
            style: {
              "z-index": "var(--hope-zIndices-tooltip, 1000)"
            },
            "data-corvu-tooltip-arrow": !0,
            "arrow-left": M == "left",
            "arrow-top": M == "top",
            "arrow-right": M == "right",
            "arrow-bottom": M == "bottom"
          })];
        }
      }));
      return [i(ht, p({
        get component() {
          return s.as ?? "div";
        },
        get class() {
          return f();
        }
      }, c, {
        "unique-id": w,
        onMouseOver: (_) => {
          var k;
          x(!0), (k = c.onMouseOver ?? c.onmouseover) == null || k(_);
        },
        onMouseLeave: (_) => {
          var k;
          x(!1), (k = c.onMouseLeave ?? c.onmouseleave) == null || k(_);
        },
        onBlur: (_) => {
          var k, K;
          (k = _.currentTarget) != null && k.contains(_.relatedTarget) || x(!1), (K = c.onBlur ?? c.onblur) == null || K(_);
        },
        onClick: (_) => {
          var k;
          x(!1), (k = c.onClick ?? c.onclick) == null || k(_);
        },
        onMouseDown: (_) => {
          var k;
          x(!1), (k = c.onMouseDown ?? c.onmousedown) == null || k(_);
        }
      })), i(tt, {
        get children() {
          return S() && i(O, {});
        }
      })];
    };
    return i(D, {
      get when() {
        return s.__tooltip_title;
      },
      get fallback() {
        return i(u, {});
      },
      get children() {
        return i(g, {});
      }
    });
  };
  return r.toString = () => t != null && t.baseClass ? v(t.baseClass) : "", r;
};
function fc() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(jt, {
    /**
     * @example
     * const Div = hope("div")
     * const WithHope = hope(AnotherComponent)
     */
    apply(t, r, o) {
      return jt(...o);
    },
    /**
     * @example
     * <hope.div />
     */
    get(t, r) {
      return e.has(r) || e.set(r, jt(r)), e.get(r);
    }
  });
}
const A = fc(), P = A.div, Kr = "hope-accordion";
function pc(e) {
  const t = y().Accordion, [r, o] = Z([]), [a, n] = te({
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
  }), [s, l] = b(e, ["class", "allowMultiple", "index", "defaultIndex", "onChange"]), c = Se(() => r().slice().reverse()), d = (w) => {
    n("focusedIndex", w);
  }, f = (w, E) => {
    var N;
    let M = -1;
    s.allowMultiple && it(a.expandedIndex) ? M = E ? [...a.expandedIndex, w] : a.expandedIndex.filter((L) => L !== w) : E ? M = w : M = -1, n("_expandedIndex", M), (N = s.onChange) == null || N.call(s, M);
  }, u = (w) => it(a.expandedIndex) ? a.expandedIndex.includes(w) : a.expandedIndex === w, g = (w) => o((E) => [...E, w]).length - 1, S = () => {
    const w = r().length - 1;
    let E = It(a.focusedIndex, w, !0), M = r()[E];
    for (; M.disabled; )
      E = It(E, w, !0), M = r()[E];
    M.focus();
  }, x = () => {
    const w = r().length - 1;
    let E = kt(a.focusedIndex, w, !0), M = r()[E];
    for (; M.disabled; )
      E = kt(E, w, !0), M = r()[E];
    M.focus();
  }, z = () => {
    var w;
    (w = r().find((E) => !E.disabled)) == null || w.focus();
  }, C = () => {
    var w;
    (w = c().find((E) => !E.disabled)) == null || w.focus();
  }, $ = () => h(s.class, Kr);
  ge(() => {
    d(-1);
  });
  const B = {
    state: a,
    setFocusedIndex: d,
    setExpandedIndex: f,
    isExpandedIndex: u,
    registerAccordionButton: g,
    focusNextAccordionButton: S,
    focusPrevAccordionButton: x,
    focusFirstAccordionButton: z,
    focusLastAccordionButton: C
  };
  return i(Xr.Provider, {
    value: B,
    get children() {
      return i(P, p({
        get class() {
          return $();
        },
        get __baseStyle() {
          var w;
          return (w = t == null ? void 0 : t.baseStyle) == null ? void 0 : w.root;
        }
      }, l));
    }
  });
}
pc.toString = () => v(Kr);
const Xr = J();
function hc() {
  const e = Q(Xr);
  if (!e)
    throw new Error("[Hope UI]: useAccordionContext must be used within a `<Accordion />` component");
  return e;
}
const bc = m({
  borderTopWidth: "1px",
  borderColor: "$neutral7",
  overflowAnchor: "none",
  "&:last-of-type": {
    borderBottomWidth: "1px"
  }
}), mc = m({
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
}), vc = m({
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
}), Sc = m({
  pt: "$2",
  px: "$4",
  pb: "$4"
});
function Ur(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function xc(e) {
  if (!Ur(e))
    return !1;
  const t = e.ownerDocument.defaultView ?? window;
  return e instanceof t.HTMLElement;
}
function Pt(e) {
  return Ur(e) ? e.ownerDocument ?? document : document;
}
function Kt(e, t) {
  const r = e.target;
  return e.button > 0 || r && !Pt(r).body.contains(r) ? !1 : !(t != null && t.contains(r));
}
function Qr(e) {
  const { key: t, keyCode: r } = e;
  return r >= 37 && r <= 40 && t.indexOf("Arrow") !== 0 ? `Arrow${t}` : t;
}
function Cc(e) {
  const t = Pt(e);
  return t == null ? void 0 : t.activeElement;
}
function Ge(e, t) {
  return e ? e === t || e.contains(t) : !1;
}
function Tt(e) {
  const t = e.target ?? e.currentTarget, r = Cc(t);
  return e.relatedTarget ?? r;
}
function Yr(e) {
  return e && e.clientHeight < e.scrollHeight;
}
function Zr(e, t) {
  const { offsetHeight: r, offsetTop: o } = e, { offsetHeight: a, scrollTop: n } = t, s = o < n, l = o + r > n + a;
  s ? t.scrollTo(0, o) : l && t.scrollTo(0, o - a + r);
}
function mt(e) {
  const t = Object.getOwnPropertyDescriptor(e, "children");
  return t == null ? !1 : Te(t.value);
}
const Jr = "hope-accordion__item";
function yc(e) {
  const t = `hope-accordion-item-${ne()}`, r = y().Accordion, o = hc(), [a, n] = te({
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
      return e.disabled ?? !1;
    }
  }), [s, l] = b(e, ["class", "children"]), c = ($) => {
    const B = o.registerAccordionButton($);
    n("index", B);
  }, d = () => {
    o.setFocusedIndex(a.index);
  }, f = () => {
    o.setExpandedIndex(a.index, !a.expanded);
  }, u = Se(() => ({
    ArrowDown: o.focusNextAccordionButton,
    ArrowUp: o.focusPrevAccordionButton,
    Home: o.focusFirstAccordionButton,
    End: o.focusLastAccordionButton
  })), g = ($) => {
    const B = Qr($), w = u()[B];
    w && ($.preventDefault(), ue(w, $));
  }, S = () => a.expanded, x = () => a.disabled, z = () => h(s.class, Jr, bc()), C = {
    state: a,
    registerButton: c,
    setFocusedIndex: d,
    toggleExpandedState: f,
    onButtonKeyDown: g
  };
  return i(Gr.Provider, {
    value: C,
    get children() {
      return i(P, p({
        get class() {
          return z();
        },
        get __baseStyle() {
          var $;
          return ($ = r == null ? void 0 : r.baseStyle) == null ? void 0 : $.item;
        }
      }, l, {
        get children() {
          return i(D, {
            get when() {
              return mt(s);
            },
            get fallback() {
              return s.children;
            },
            get children() {
              var $;
              return ($ = s.children) == null ? void 0 : $.call(s, {
                expanded: S,
                disabled: x
              });
            }
          });
        }
      }));
    }
  });
}
yc.toString = () => v(Jr);
const Gr = J();
function sr() {
  const e = Q(Gr);
  if (!e)
    throw new Error("[Hope UI]: useAccordionItemContext must be used within a `<AccordionItem />` component");
  return e;
}
const eo = "hope-accordion__button";
function $c(e) {
  const t = y().Accordion, r = sr(), [o, a] = b(e, ["ref", "class", "disabled", "onClick", "onFocus", "onKeyDown"]), n = (d) => {
    ue(o.onClick, d), r.toggleExpandedState();
  }, s = (d) => {
    ue(o.onFocus, d), r.setFocusedIndex();
  }, l = (d) => {
    fe(o.onKeyDown, r.onButtonKeyDown)(d);
  }, c = () => h(o.class, eo, mc());
  return i(A.button, p({
    role: "button",
    type: "button",
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
$c.toString = () => v(eo);
const wc = m({
  display: "inline-block",
  flexShrink: 0,
  boxSize: "1em",
  color: "currentColor",
  lineHeight: "1em",
  verticalAlign: "middle"
});
var _c = ["<path", ' stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>'];
const wr = {
  viewBox: "0 0 24 24",
  path: () => re(_c, oe())
}, ir = "hope-icon";
function ot(e) {
  const t = {
    viewBox: wr.viewBox
  }, r = q(t, e), [o, a] = b(r, ["as", "class", "children", "viewBox"]), n = () => h(o.class, ir, wc()), s = () => o.as && !Rs(o.as);
  return i(D, {
    get when() {
      return s();
    },
    get fallback() {
      return i(A.svg, p({
        get class() {
          return n();
        },
        get viewBox() {
          return o.viewBox;
        }
      }, a, {
        get children() {
          return i(D, {
            get when() {
              return o.children;
            },
            get fallback() {
              return wr.path();
            },
            get children() {
              return o.children;
            }
          });
        }
      }));
    },
    get children() {
      return i(P, p({
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
ot.toString = () => v(ir);
function $e(e) {
  const {
    viewBox: t = "0 0 24 24",
    defaultProps: r = {}
  } = e, o = (a) => i(ot, p({
    viewBox: t
  }, r, a, {
    get children() {
      return e.path;
    }
  }));
  return o.toString = () => v(ir), o;
}
var Ic = ["<path", ' d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>'];
const kc = $e({
  viewBox: "0 0 15 15",
  path: () => re(Ic, oe())
}), to = "hope-accordion__icon";
function Pc(e) {
  const t = y().Accordion, r = sr(), [o, a] = b(e, ["class"]), n = () => h(o.class, to, vc({
    expanded: r.state.expanded,
    disabled: r.state.disabled
  }));
  return i(kc, p({
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
Pc.toString = () => v(to);
const Tc = m({
  overflow: "hidden"
}), ro = "hope-collapse";
function oo(e) {
  const r = q({
    animateOpacity: !0,
    expandDuration: 300,
    expandTimingFunction: "ease",
    collapseDuration: 300,
    collapseTimingFunction: "ease",
    keepAlive: !0
  }, e), [o, a] = b(r, ["class", "children", "expanded", "animateOpacity", "expandDuration", "expandTimingFunction", "collapseDuration", "collapseTimingFunction", "keepAlive"]), n = rt(() => o.children), s = () => h(o.class, ro, Tc()), l = () => {
    const u = {
      height: 0
    };
    return o.animateOpacity ? {
      ...u,
      opacity: 0
    } : u;
  }, c = (u) => {
    const g = {
      height: `${u.scrollHeight}px`
    };
    return o.animateOpacity ? {
      ...g,
      opacity: 1
    } : g;
  };
  return i(De, {
    onEnter: (u, g) => {
      u.animate([l(), c(u)], {
        duration: o.expandDuration,
        easing: o.expandTimingFunction
      }).finished.then(g);
    },
    onExit: (u, g) => {
      u.animate([c(u), l()], {
        duration: o.collapseDuration,
        easing: o.collapseTimingFunction
      }).finished.then(g);
    },
    get children() {
      return i(D, {
        get when() {
          return o.expanded;
        },
        get children() {
          return i(P, p({
            get class() {
              return s();
            }
          }, a, {
            get children() {
              return i(D, {
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
oo.toString = () => v(ro);
const no = "hope-accordion__panel";
function zc(e) {
  const t = y().Accordion, r = sr(), [o, a] = b(e, ["class"]), n = () => h(o.class, no, Sc());
  return i(oo, {
    get expanded() {
      return r.state.expanded;
    },
    get children() {
      return i(P, p({
        role: "region",
        get id() {
          return r.state.panelId;
        },
        get "aria-labelledby"() {
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
zc.toString = () => v(no);
const ve = m({
  flexShrink: 0
}), Bc = m({
  fontWeight: "$semibold"
}), Lc = m({
  display: "inline-block"
}), Dc = m({
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
        [`& .${ve}`]: {
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
        [`& .${ve}`]: {
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
        [`& .${ve}`]: {
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
        [`& .${ve}`]: {
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
        [`& .${ve}`]: {
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
        [`& .${ve}`]: {
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
        [`& .${ve}`]: {
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
        [`& .${ve}`]: {
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
        [`& .${ve}`]: {
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
        [`& .${ve}`]: {
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
        [`& .${ve}`]: {
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
        [`& .${ve}`]: {
          color: "$danger9"
        }
      }
    }
  ]
}), ao = "hope-alert";
function Hc(e) {
  var d, f, u, g;
  const t = y().Alert, r = {
    variant: ((f = (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.root) == null ? void 0 : f.variant) ?? "subtle",
    status: ((g = (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.root) == null ? void 0 : g.status) ?? "info"
  }, o = q(r, e), [a, n] = b(o, ["class", "variant", "status"]), s = () => h(a.class, ao, Dc({
    variant: a.variant,
    status: a.status
  })), c = {
    status: () => a.status
  };
  return i(so.Provider, {
    value: c,
    get children() {
      return i(P, p({
        role: "alert",
        get class() {
          return s();
        },
        get __baseStyle() {
          var S;
          return (S = t == null ? void 0 : t.baseStyle) == null ? void 0 : S.root;
        }
      }, n));
    }
  });
}
Hc.toString = () => v(ao);
const so = J();
function Ac() {
  const e = Q(so);
  if (!e)
    throw new Error("[Hope UI]: useAlertContext must be used within an `<Alert />` component");
  return e;
}
const io = "hope-alert__description";
function Ec(e) {
  const t = y().Alert, [r, o] = b(e, ["class"]), a = () => h(r.class, io, Lc());
  return i(P, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.description;
    }
  }, o));
}
Ec.toString = () => v(io);
var Mc = ["<path", ' fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"></path>'], Oc = ["<path", ' fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z"></path>'];
const lo = $e({
  viewBox: "0 0 32 32",
  path: () => [re(Mc, oe()), re(Oc, oe())]
});
var Rc = ["<path", ' fill="currentColor" d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2zm-1.1 6h2.2v11h-2.2V8zM16 25c-.8 0-1.5-.7-1.5-1.5S15.2 22 16 22s1.5.7 1.5 1.5S16.8 25 16 25z"></path>'];
const co = $e({
  viewBox: "0 0 32 32",
  path: () => re(Rc, oe())
});
var Wc = ["<path", ' fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M29.4898 29.8706C29.3402 29.9548 29.1713 29.9991 28.9996 29.9993H2.99961C2.82787 29.9991 2.65905 29.9548 2.5094 29.8706C2.35976 29.7864 2.23433 29.665 2.14521 29.5182C2.05608 29.3713 2.00626 29.2041 2.00055 29.0325C1.99485 28.8608 2.03344 28.6907 2.1126 28.5382L15.1126 3.53821C15.1971 3.37598 15.3245 3.23999 15.4808 3.14514C15.6372 3.05017 15.8167 3 15.9996 3C16.1825 3 16.362 3.05017 16.5184 3.14514C16.6748 3.23999 16.8021 3.37598 16.8866 3.53821L29.8866 28.5382C29.9658 28.6907 30.0044 28.8608 29.9986 29.0325C29.9929 29.2041 29.9431 29.3713 29.854 29.5182C29.7649 29.665 29.6395 29.7864 29.4898 29.8706ZM16.0016 6.16919V6.17029H15.9976V6.16919H16.0016ZM15.9996 25.9993C15.7029 25.9993 15.4129 25.9113 15.1662 25.7465C14.9196 25.5817 14.7273 25.3474 14.6138 25.0734C14.5996 25.0391 14.5867 25.0044 14.5752 24.9694C14.4942 24.724 14.4778 24.4613 14.5284 24.2067C14.5863 23.9156 14.7292 23.6484 14.9389 23.4386C14.9652 23.4124 14.9923 23.3872 15.0202 23.3632C15.2159 23.1945 15.4524 23.0787 15.707 23.0281C15.7433 23.0209 15.7799 23.015 15.8165 23.0105C16.0723 22.979 16.3326 23.014 16.572 23.1129L16.5736 23.1135C16.8477 23.2271 17.082 23.4193 17.2468 23.6659C17.2674 23.6968 17.2868 23.7283 17.305 23.7604C17.4322 23.9852 17.4996 24.2397 17.4996 24.4993C17.4996 24.8971 17.3416 25.2787 17.0603 25.5599C16.7789 25.8413 16.3974 25.9993 15.9996 25.9993ZM17.1246 20.9993H14.8746V11.9993H17.1246V20.9993Z"></path>'];
const uo = $e({
  viewBox: "0 0 32 32",
  path: () => re(Wc, oe())
});
var Fc = ["<path", ' fill="none" d="M16 8a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8Zm4 13.875h-2.875v-8H13v2.25h1.875v5.75H12v2.25h8Z"></path>'], Nc = ["<path", ' fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 6a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8Zm4 16.125h-8v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"></path>'];
const go = $e({
  viewBox: "0 0 32 32",
  path: () => [re(Fc, oe()), re(Nc, oe())]
}), fo = "hope-alert__icon";
function Vc(e) {
  const t = y().Alert, {
    status: r
  } = Ac(), a = q({
    boxSize: "$6"
  }, e), [n, s] = b(a, ["as", "class"]), l = () => h(n.class, fo, ve()), c = () => {
    if (n.as)
      return n.as;
    switch (r()) {
      case "success":
        return lo;
      case "info":
        return go;
      case "warning":
        return uo;
      case "danger":
        return co;
    }
  };
  return i(ot, p({
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
Vc.toString = () => v(fo);
const po = "hope-alert__title";
function qc(e) {
  const t = y().Alert, [r, o] = b(e, ["class"]), a = () => h(r.class, po, Bc());
  return i(P, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.title;
    }
  }, o));
}
qc.toString = () => v(po);
const jc = m({
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
}), ho = "hope-anchor";
function Kc(e) {
  const t = y().Anchor, [r, o] = b(e, ["class", "external"]), a = () => h(r.class, ho, jc());
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
  }, o));
}
Kc.toString = () => v(ho);
const Xc = m({
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
}), bo = "hope-aspect-ratio";
function Uc(e) {
  const r = q({
    ratio: 1.3333333333333333
  }, e), [o, a] = b(r, ["class", "ratio"]), n = () => h(o.class, bo, Xc()), s = () => ar(o.ratio, (l) => `${1 / l * 100}%`);
  return i(P, p({
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
Uc.toString = () => v(bo);
const Ot = "hope-icon-button", Qc = m({
  display: "inline-flex",
  alignSelf: "center",
  flexShrink: 0
}), Yc = m({
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
}), Zc = m({
  fontSize: "1.3em",
  animation: `1s linear infinite ${At}`
});
function ft(e) {
  return {
    height: e.height,
    py: 0,
    px: e.paddingX,
    fontSize: e.fontSize,
    [`&.${Ot}`]: {
      width: e.height,
      padding: "0"
    }
  };
}
function pt(e) {
  return {
    height: e.height,
    py: 0,
    px: e.paddingX,
    [`&.${Ot}`]: {
      width: e.height,
      padding: "0"
    }
  };
}
function Fe(e) {
  return {
    backgroundColor: e.bgColor,
    color: e.color,
    "&:hover": {
      backgroundColor: e.bgColorHover
    }
  };
}
function Ne(e) {
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
function he(e) {
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
function Ve(e) {
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
const mo = m({
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
      xs: ft({
        height: "$6",
        paddingX: "$2",
        fontSize: "$xs"
      }),
      sm: ft({
        height: "$8",
        paddingX: "$3",
        fontSize: "$sm"
      }),
      md: ft({
        height: "$10",
        paddingX: "$4",
        fontSize: "$base"
      }),
      lg: ft({
        height: "$12",
        paddingX: "$6",
        fontSize: "$lg"
      }),
      xl: ft({
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
      css: Fe({
        color: "white",
        bgColor: "$primary9",
        bgColorHover: "$primary10"
      })
    },
    {
      variant: "solid",
      colorScheme: "accent",
      css: Fe({
        color: "white",
        bgColor: "$accent9",
        bgColorHover: "$accent10"
      })
    },
    {
      variant: "solid",
      colorScheme: "neutral",
      css: Fe({
        color: "white",
        bgColor: "$neutral9",
        bgColorHover: "$neutral10"
      })
    },
    {
      variant: "solid",
      colorScheme: "success",
      css: Fe({
        color: "white",
        bgColor: "$success9",
        bgColorHover: "$success10"
      })
    },
    {
      variant: "solid",
      colorScheme: "info",
      css: Fe({
        color: "white",
        bgColor: "$info9",
        bgColorHover: "$info10"
      })
    },
    {
      variant: "solid",
      colorScheme: "warning",
      css: Fe({
        color: "$blackAlpha12",
        bgColor: "$warning9",
        bgColorHover: "$warning10"
      })
    },
    {
      variant: "solid",
      colorScheme: "danger",
      css: Fe({
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
      css: Ne({
        color: "$primary11",
        bgColor: "$primary4",
        bgColorHover: "$primary5",
        bgColorActive: "$primary6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "accent",
      css: Ne({
        color: "$accent11",
        bgColor: "$accent4",
        bgColorHover: "$accent5",
        bgColorActive: "$accent6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "neutral",
      css: Ne({
        color: "$neutral12",
        bgColor: "$neutral4",
        bgColorHover: "$neutral5",
        bgColorActive: "$neutral6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "success",
      css: Ne({
        color: "$success11",
        bgColor: "$success4",
        bgColorHover: "$success5",
        bgColorActive: "$success6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "info",
      css: Ne({
        color: "$info11",
        bgColor: "$info4",
        bgColorHover: "$info5",
        bgColorActive: "$info6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "warning",
      css: Ne({
        color: "$warning11",
        bgColor: "$warning4",
        bgColorHover: "$warning5",
        bgColorActive: "$warning6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "danger",
      css: Ne({
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
      css: he({
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
      css: he({
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
      css: he({
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
      css: he({
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
      css: he({
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
      css: he({
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
      css: he({
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
      css: he({
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
      css: he({
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
      css: he({
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
      css: he({
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
      css: he({
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
      css: he({
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
      css: he({
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
      css: Ve({
        color: "$primary11",
        bgColorHover: "$primary4",
        bgColorActive: "$primary5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "accent",
      css: Ve({
        color: "$accent11",
        bgColorHover: "$accent4",
        bgColorActive: "$accent5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "neutral",
      css: Ve({
        color: "$neutral12",
        bgColorHover: "$neutral4",
        bgColorActive: "$neutral5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "success",
      css: Ve({
        color: "$success11",
        bgColorHover: "$success4",
        bgColorActive: "$success5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "info",
      css: Ve({
        color: "$info11",
        bgColorHover: "$info4",
        bgColorActive: "$info5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "warning",
      css: Ve({
        color: "$warning11",
        bgColorHover: "$warning4",
        bgColorActive: "$warning5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "danger",
      css: Ve({
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
      css: pt({ height: "$5", paddingX: "$1" })
    },
    {
      size: "sm",
      compact: "true",
      css: pt({ height: "$6", paddingX: "$1_5" })
    },
    {
      size: "md",
      compact: "true",
      css: pt({ height: "$7", paddingX: "$2" })
    },
    {
      size: "lg",
      compact: "true",
      css: pt({ height: "$8", paddingX: "$2_5" })
    },
    {
      size: "xl",
      compact: "true",
      css: pt({ height: "$10", paddingX: "$3_5" })
    }
  ]
}), Jc = m({
  display: "inline-flex",
  [`& .${mo}:focus`]: {
    zIndex: 1
  }
}), vo = "hope-button__group", So = J();
function Gc(e) {
  var f, u, g, S;
  const t = y().Button, [r] = te({
    get variant() {
      var x, z;
      return e.variant ?? ((z = (x = t == null ? void 0 : t.defaultProps) == null ? void 0 : x.group) == null ? void 0 : z.variant);
    },
    get colorScheme() {
      var x, z;
      return e.colorScheme ?? ((z = (x = t == null ? void 0 : t.defaultProps) == null ? void 0 : x.group) == null ? void 0 : z.colorScheme);
    },
    get size() {
      var x, z;
      return e.size ?? ((z = (x = t == null ? void 0 : t.defaultProps) == null ? void 0 : x.group) == null ? void 0 : z.size);
    },
    get disabled() {
      return e.disabled;
    }
  }), o = {
    attached: ((u = (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.group) == null ? void 0 : u.attached) ?? !1,
    spacing: ((S = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.group) == null ? void 0 : S.spacing) ?? "0.5rem"
  }, a = q(o, e), [n, s, l] = b(a, ["class", "attached", "spacing"], ["variant", "colorScheme", "size", "disabled"]), c = () => h(n.class, vo, Jc({
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
  return i(So.Provider, {
    value: d,
    get children() {
      return i(P, p({
        role: "group",
        get class() {
          return c();
        },
        get __baseStyle() {
          var x;
          return (x = t == null ? void 0 : t.baseStyle) == null ? void 0 : x.group;
        }
      }, l));
    }
  });
}
Gc.toString = () => v(vo);
function xo() {
  return Q(So);
}
const Co = "hope-button__icon";
function Yt(e) {
  const [t, r] = b(e, ["class", "children"]), o = () => h(t.class, Co, Qc());
  return i(A.span, p({
    get class() {
      return o();
    }
  }, r, {
    get children() {
      return t.children;
    }
  }));
}
Yt.toString = () => v(Co);
var ed = ["<g", ' fill="none"><path opacity=".2" fill-rule="evenodd" clip-rule="evenodd" d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z" fill="currentColor"></path><path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2z" fill="currentColor"></path></g>'];
const yo = $e({
  path: () => re(ed, oe())
}), $o = "hope-button__loader";
function Zt(e) {
  const t = {
    spacing: "0.5rem",
    children: i(yo, {
      get class() {
        return Zc();
      }
    })
  }, r = q(t, e), [o, a] = b(r, ["class", "children", "withLoadingText", "placement", "spacing"]), n = () => o.placement === "start" ? "marginEnd" : "marginStart", s = () => ({
    [n()]: o.withLoadingText ? o.spacing : 0
  }), l = () => h(o.class, $o, Yc({
    withLoadingText: o.withLoadingText
  }));
  return i(A.div, p({
    get class() {
      return l();
    }
  }, s, a, {
    get children() {
      return o.children;
    }
  }));
}
Zt.toString = () => v($o);
const lr = "hope-button";
function cr(e) {
  var f, u;
  const t = y().Button, r = xo(), o = {
    loaderPlacement: ((u = (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.root) == null ? void 0 : u.loaderPlacement) ?? "start",
    iconSpacing: "0.5rem",
    type: "button",
    role: "button"
  }, a = q(o, e), [n, s, l] = b(a, ["class", "disabled", "loadingText", "loader", "loaderPlacement", "variant", "colorScheme", "size", "loading", "compact", "fullWidth"], ["children", "iconSpacing", "leftIcon", "rightIcon"]), c = () => n.disabled ?? (r == null ? void 0 : r.state.disabled), d = () => {
    var g, S, x, z, C, $;
    return h(n.class, lr, mo({
      variant: n.variant ?? (r == null ? void 0 : r.state.variant) ?? ((S = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.root) == null ? void 0 : S.variant) ?? "solid",
      colorScheme: n.colorScheme ?? (r == null ? void 0 : r.state.colorScheme) ?? ((z = (x = t == null ? void 0 : t.defaultProps) == null ? void 0 : x.root) == null ? void 0 : z.colorScheme) ?? "primary",
      size: n.size ?? (r == null ? void 0 : r.state.size) ?? (($ = (C = t == null ? void 0 : t.defaultProps) == null ? void 0 : C.root) == null ? void 0 : $.size) ?? "md",
      loading: n.loading,
      compact: n.compact,
      fullWidth: n.fullWidth
    }));
  };
  return i(A.button, p({
    get class() {
      return d();
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
      return [i(D, {
        get when() {
          return n.loading && n.loaderPlacement === "start";
        },
        get children() {
          return i(Zt, {
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
      }), i(D, {
        get when() {
          return n.loading;
        },
        get fallback() {
          return i(_r, s);
        },
        get children() {
          return i(D, {
            get when() {
              return n.loadingText;
            },
            get fallback() {
              return i(A.span, {
                opacity: 0,
                get children() {
                  return i(_r, s);
                }
              });
            },
            get children() {
              return n.loadingText;
            }
          });
        }
      }), i(D, {
        get when() {
          return n.loading && n.loaderPlacement === "end";
        },
        get children() {
          return i(Zt, {
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
cr.toString = () => v(lr);
function _r(e) {
  return [i(D, {
    get when() {
      return e.leftIcon;
    },
    get children() {
      return i(Yt, {
        get marginEnd() {
          return e.iconSpacing;
        },
        get children() {
          return e.leftIcon;
        }
      });
    }
  }), e.children, i(D, {
    get when() {
      return e.rightIcon;
    },
    get children() {
      return i(Yt, {
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
function td(e) {
  const [t, r] = b(e, ["onClick"]), [o, a] = Z(!1);
  return i(cr, p({
    get loading() {
      return o();
    }
  }, r, {
    onClick: (s) => {
      t.onClick && (a(!0), t.onClick(s).finally(() => a(!1)));
    }
  }));
}
td.toString = () => v(lr);
function qe(e) {
  return {
    boxSize: e,
    fontSize: `calc(${e} / 2.5)`,
    lineHeight: e
  };
}
const dr = m({
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
      "2xs": qe("$sizes$4"),
      xs: qe("$sizes$6"),
      sm: qe("$sizes$8"),
      md: qe("$sizes$12"),
      lg: qe("$sizes$16"),
      xl: qe("$sizes$24"),
      "2xl": qe("$sizes$32"),
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
}), rd = m(dr), od = m({
  boxSize: "$full",
  borderRadius: "$full",
  objectFit: "cover"
}), nd = m({
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
}), ad = m({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  [`& .${dr}:first-child`]: {
    marginStart: "0"
  }
});
var sd = ["<path", ' fill="currentColor" d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"></path>'], id = ["<path", ' fill="currentColor" d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"></path>'];
function ld(e) {
  const [t, r] = e.split(" ");
  return t && r ? `${t.charAt(0)}${r.charAt(0)}` : t.charAt(0);
}
function cd(e) {
  return i(A.svg, p({
    viewBox: "0 0 128 128",
    class: "hope-avatar__svg",
    color: "$loContrast",
    boxSize: "$full"
  }, e, {
    get children() {
      return [re(sd, oe()), re(id, oe())];
    }
  }));
}
const wo = J(), _o = "hope-avatar__group";
function dd(e) {
  const t = y().Avatar, [r] = te({
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
  }), [o, a] = b(e, ["class", "size", "spacing", "avatarBorderRadius", "avatarBorderColor", "avatarBorderWidth"]), n = () => h(o.class, _o, ad()), s = {
    state: r
  };
  return i(wo.Provider, {
    value: s,
    get children() {
      return i(P, p({
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
dd.toString = () => v(_o);
function Io() {
  return Q(wo);
}
function ko(e) {
  const [t, r] = Z("pending"), o = () => e.ignoreFallback ? "loaded" : t();
  let a = null;
  const n = () => {
    a && (a.onload = null, a.onerror = null, a = null);
  }, s = () => {
    if (!e.src)
      return;
    n();
    const l = new Image();
    l.src = e.src, e.crossOrigin && (l.crossOrigin = e.crossOrigin), e.srcSet && (l.srcset = e.srcSet), e.sizes && (l.sizes = e.sizes), e.loading && (l.loading = e.loading), l.onload = (c) => {
      n(), r("loaded"), ue(e.onLoad, c);
    }, l.onerror = (c) => {
      n(), r("failed"), ue(e.onError, c);
    }, a = l;
  };
  return pe(() => {
    r(e.src ? "loading" : "pending");
  }), Ps(() => {
    e.ignoreFallback || (t() === "loading" && s(), ge(() => {
      n();
    }));
  }), o;
}
const Po = "hope-avatar__initials";
function To(e) {
  const t = y().Avatar, [r, o] = b(e, ["class", "getInitials", "name"]), a = () => h(r.class, Po), n = () => {
    var s;
    return r.name && ((s = r.getInitials) == null ? void 0 : s.call(r, r.name));
  };
  return i(P, p({
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
  }, o, {
    get children() {
      return n();
    }
  }));
}
To.toString = () => v(Po);
const zo = "hope-avatar__image";
function Bo(e) {
  const t = y().Avatar, [r, o] = b(e, ["class", "src", "srcSet", "getInitials", "name", "loading", "iconLabel", "icon", "ignoreFallback", "onError"]), a = Se(() => ko({
    src: r.src,
    onError: r.onError,
    ignoreFallback: r.ignoreFallback
  })), n = () => h(r.class, zo, od()), s = () => !!r.src && a()() === "loaded", l = () => ({
    role: "img",
    "aria-label": r.iconLabel ?? "avatar"
  });
  return i(D, {
    get when() {
      return s();
    },
    get fallback() {
      return i(D, {
        get when() {
          return r.name;
        },
        get fallback() {
          var c;
          return (c = r.icon) == null ? void 0 : c.call(r, l());
        },
        get children() {
          return i(To, {
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
Bo.toString = () => v(zo);
const Lo = "hope-avatar";
function ud(e) {
  var c, d, f, u, g, S, x, z, C, $;
  const t = y().Avatar, r = Io(), o = {
    icon: ((d = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.root) == null ? void 0 : d.icon) ?? ((B) => i(cd, B)),
    iconLabel: ((u = (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.root) == null ? void 0 : u.iconLabel) ?? "avatar",
    getInitials: ((S = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.root) == null ? void 0 : S.getInitials) ?? ld,
    ignoreFallback: ((z = (x = t == null ? void 0 : t.defaultProps) == null ? void 0 : x.root) == null ? void 0 : z.ignoreFallback) ?? !1,
    loading: ($ = (C = t == null ? void 0 : t.defaultProps) == null ? void 0 : C.root) == null ? void 0 : $.loading
  }, a = q(o, e), [n, s] = b(a, ["class", "children", "size", "withBorder", "src", "srcSet", "name", "borderRadius", "onError", "getInitials", "icon", "iconLabel", "loading", "ignoreFallback", "imageProps"]), l = () => {
    var B, w, E, M;
    return h(n.class, Lo, dr({
      size: n.size ?? (r == null ? void 0 : r.state.size) ?? ((w = (B = t == null ? void 0 : t.defaultProps) == null ? void 0 : B.root) == null ? void 0 : w.size) ?? "md",
      withBorder: n.withBorder ?? !!r ?? ((M = (E = t == null ? void 0 : t.defaultProps) == null ? void 0 : E.root) == null ? void 0 : M.withBorder) ?? !1
    }));
  };
  return i(A.span, p({
    get class() {
      return l();
    },
    get __baseStyle() {
      var B;
      return (B = t == null ? void 0 : t.baseStyle) == null ? void 0 : B.root;
    },
    get borderRadius() {
      return n.borderRadius ?? (r == null ? void 0 : r.state.avatarBorderRadius);
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
      return [i(Bo, p({
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
          return n.borderRadius ?? (r == null ? void 0 : r.state.avatarBorderRadius);
        },
        get onError() {
          return n.onError;
        }
      }, () => n.imageProps)), n.children];
    }
  }));
}
ud.toString = () => v(Lo);
const Do = "hope-avatar__badge";
function gd(e) {
  const t = y().Avatar, [r, o] = b(e, ["class", "placement"]), a = () => h(r.class, Do, nd({
    placement: r.placement ?? "bottom-end"
  }));
  return i(P, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.badge;
    }
  }, o));
}
gd.toString = () => v(Do);
const Ho = "hope-avatar__excess";
function fd(e) {
  const t = y().Avatar, r = Io(), [o, a] = b(e, ["class", "size", "withBorder"]), n = () => {
    var s, l, c, d;
    return h(o.class, Ho, rd({
      size: o.size ?? (r == null ? void 0 : r.state.size) ?? ((l = (s = t == null ? void 0 : t.defaultProps) == null ? void 0 : s.root) == null ? void 0 : l.size) ?? "md",
      withBorder: o.withBorder ?? !!r ?? ((d = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.root) == null ? void 0 : d.withBorder) ?? !1
    }));
  };
  return i(A.span, p({
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
fd.toString = () => v(Ho);
const pd = m({
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
}), Ao = "hope-badge";
function hd(e) {
  var c, d;
  const t = y().Badge, r = {
    variant: ((c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.variant) ?? "subtle",
    colorScheme: ((d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.colorScheme) ?? "neutral"
  }, o = q(r, e), [a, n, s] = b(o, ["class"], ["variant", "colorScheme"]), l = () => h(a.class, Ao, pd(n));
  return i(A.span, p({
    get class() {
      return l();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    }
  }, s));
}
hd.toString = () => v(Ao);
const bd = m({
  display: "block",
  fontSize: "$base",
  lineHeight: "$6"
}), md = m({
  display: "flex",
  alignItems: "center",
  margin: 0,
  padding: 0,
  listStyle: "none"
}), vd = m({
  display: "inline-flex",
  alignItems: "center"
}), Sd = m({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
}), xd = m({
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
}), Eo = J(), Mo = "hope-breadcrumb", Cd = "hope-breadcrumb__list";
function yd(e) {
  const t = y().Breadcrumb, [r] = te({
    get spacing() {
      var c, d;
      return e.spacing ?? ((d = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.root) == null ? void 0 : d.spacing) ?? "0.5rem";
    },
    get separator() {
      var c, d;
      return e.separator ?? ((d = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.root) == null ? void 0 : d.separator) ?? "/";
    }
  }), [o, a] = b(e, ["class", "children", "separator", "spacing"]), n = () => h(o.class, Mo, bd()), s = () => h(Cd, md()), l = {
    state: r
  };
  return i(Eo.Provider, {
    value: l,
    get children() {
      return i(A.nav, p({
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
          return i(A.ol, {
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
yd.toString = () => v(Mo);
function Oo() {
  const e = Q(Eo);
  if (!e)
    throw new Error("[Hope UI]: useBreadcrumbContext must be used within a `<Breadcrumb />` component");
  return e;
}
const Ro = "hope-breadcrumb__item";
function $d(e) {
  const t = y().Breadcrumb, r = Oo(), [o, a] = b(e, ["class"]), n = () => h(o.class, Ro, vd());
  return i(A.li, p({
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
$d.toString = () => v(Ro);
const Wo = "hope-breadcrumb__link";
function wd(e) {
  const t = y().Breadcrumb, [r, o] = b(e, ["class", "currentPage", "href"]), a = () => h(r.class, Wo, xd({
    currentPage: r.currentPage === !0
    // ensure a boolean is passed so the `true/false` values works correctly
  }));
  return i(D, {
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
          var n;
          return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.link;
        }
      }, o));
    },
    get children() {
      return i(A.span, p({
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
wd.toString = () => v(Wo);
const Fo = "hope-breadcrumb__separator";
function _d(e) {
  const t = y().Breadcrumb, r = Oo(), [o, a] = b(e, ["class", "children"]), n = () => h(o.class, Fo, Sd());
  return i(A.span, p({
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
      return i(D, {
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
_d.toString = () => v(Fo);
const Id = m({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}), No = "hope-center";
function kd(e) {
  const [t, r] = b(e, ["class"]), o = () => h(t.class, No, Id());
  return i(P, p({
    get class() {
      return o();
    }
  }, r));
}
kd.toString = () => v(No);
function je(e) {
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
const ur = m({
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
}), gr = m({
  cursor: "pointer",
  userSelect: "none",
  "&[data-disabled]": {
    opacity: "0.5",
    cursor: "not-allowed"
  }
}), fr = m({
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
      primary: je({
        color: "$primary9",
        boxShadowColorFocus: "$primary5",
        borderColorFocus: "$primary8"
      }),
      accent: je({
        color: "$accent9",
        boxShadowColorFocus: "$accent5",
        borderColorFocus: "$accent8"
      }),
      neutral: je({
        color: "$neutral9",
        boxShadowColorFocus: "$neutral5",
        borderColorFocus: "$neutral8"
      }),
      success: je({
        color: "$success9",
        boxShadowColorFocus: "$success5",
        borderColorFocus: "$success8"
      }),
      info: je({
        color: "$info9",
        boxShadowColorFocus: "$info5",
        borderColorFocus: "$info8"
      }),
      warning: je({
        color: "$warning9",
        boxShadowColorFocus: "$warning5",
        borderColorFocus: "$warning8"
      }),
      danger: je({
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
}), Pd = m(ur, {
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
}), Td = m(gr), zd = m(fr, {
  borderRadius: "$sm",
  "& svg": {
    color: "$loContrast"
  },
  "&[data-indeterminate], &[data-focus][data-indeterminate]": {
    borderColor: "transparent",
    backgroundColor: "currentColor"
  }
}), Vo = "hope-checkbox__group";
function Bd(e) {
  const t = `hope-checkbox-group-${ne()}--checkbox`, r = y().Checkbox, [o, a] = te({
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
      var u, g;
      return e.variant ?? ((g = (u = r == null ? void 0 : r.defaultProps) == null ? void 0 : u.group) == null ? void 0 : g.variant);
    },
    get colorScheme() {
      var u, g;
      return e.colorScheme ?? ((g = (u = r == null ? void 0 : r.defaultProps) == null ? void 0 : u.group) == null ? void 0 : g.colorScheme);
    },
    get size() {
      var u, g;
      return e.size ?? ((g = (u = r == null ? void 0 : r.defaultProps) == null ? void 0 : u.group) == null ? void 0 : g.size);
    },
    get labelPlacement() {
      var u, g;
      return e.labelPlacement ?? ((g = (u = r == null ? void 0 : r.defaultProps) == null ? void 0 : u.group) == null ? void 0 : g.labelPlacement);
    }
  }), [n, s, l] = b(e, ["class", "onChange"], ["value", "defaultValue", "name", "required", "disabled", "readOnly", "invalid"]), c = (u) => {
    var x;
    if (!o.value)
      return;
    const g = u.target, S = g.checked ? [...o.value, g.value] : o.value.filter((z) => String(z) !== String(g.value));
    a("_value", S), (x = n.onChange) == null || x.call(n, S);
  }, d = () => h(n.class, Vo), f = {
    state: o,
    onChange: c
  };
  return i(qo.Provider, {
    value: f,
    get children() {
      return i(P, p({
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
Bd.toString = () => v(Vo);
const qo = J();
function jo() {
  return Q(qo);
}
const Ld = m({
  position: "relative",
  width: "$full"
}), Dd = m({
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
}), Hd = m({
  marginInlineStart: "$1",
  color: "$danger9",
  fontSize: "$base"
}), Ad = m({
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
}), Ed = m({
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
}), Ko = J(), Xo = "hope-form-control";
function Md(e) {
  const t = `hope-field-${ne()}`, r = y().FormControl, [o, a] = te({
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
  }), [n, s] = b(e, ["id", "required", "disabled", "invalid", "readOnly", "class"]), l = (S) => a("hasHelperText", S), c = (S) => a("hasErrorMessage", S), d = () => a("isFocused", !0), f = () => a("isFocused", !1), u = () => ({
    state: o,
    setHasHelperText: l,
    setHasErrorMessage: c,
    onFocus: d,
    onBlur: f
  }), g = () => h(n.class, Xo, Ld());
  return i(Ko.Provider, {
    get value() {
      return u();
    },
    get children() {
      return i(P, p({
        role: "group",
        get class() {
          return g();
        },
        get __baseStyle() {
          var S;
          return (S = r == null ? void 0 : r.baseStyle) == null ? void 0 : S.root;
        }
      }, s));
    }
  });
}
Md.toString = () => v(Xo);
function dt() {
  return Q(Ko);
}
function ut(e) {
  const t = dt(), r = Se(() => fe(t == null ? void 0 : t.onFocus, e.onFocus)), o = Se(() => fe(t == null ? void 0 : t.onBlur, e.onBlur)), [a] = te({
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
      const n = e["aria-describedby"] ? [e["aria-describedby"]] : [];
      return t != null && t.state.hasErrorMessage && (t != null && t.state.invalid) && n.push(t.state.errorMessageId), t != null && t.state.hasHelperText && n.push(t.state.helperTextId), n.join(" ") || void 0;
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
var Od = ["<input", ' type="checkbox"', "", "", "", ">"];
function Rd(e) {
  const t = `hope-checkbox-${ne()}`, r = dt(), o = jo(), a = ut(e), [n, s] = te({
    // eslint-disable-next-line solid/reactivity
    _checked: !!e.defaultChecked,
    isFocused: !1,
    get isControlled() {
      return e.checked !== void 0;
    },
    get checked() {
      if (o) {
        const S = o.state.value;
        return S != null ? S.some((x) => String(e.value) === String(x)) : !1;
      }
      return this.isControlled ? !!e.checked : this._checked;
    },
    get id() {
      return r && !o ? a.id : e.id ?? t;
    },
    get name() {
      return e.name ?? (o == null ? void 0 : o.state.name);
    },
    get value() {
      return e.value;
    },
    get indeterminate() {
      return e.indeterminate;
    },
    get required() {
      return a.required ?? (o == null ? void 0 : o.state.required);
    },
    get disabled() {
      return a.disabled ?? (o == null ? void 0 : o.state.disabled);
    },
    get invalid() {
      return a.invalid ?? (o == null ? void 0 : o.state.invalid);
    },
    get readOnly() {
      return a.readOnly ?? (o == null ? void 0 : o.state.readOnly);
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
  }), [l, c, d] = b(e, ["inputClass", "children", "ref", "tabIndex", "onChange"], ["id", "name", "value", "indeterminate", "checked", "defaultChecked", "required", "disabled", "invalid", "readOnly", "onFocus", "onBlur"]), f = () => h(l.inputClass, Et()), u = () => n, g = {
    state: n
  };
  return i(Uo.Provider, {
    value: g,
    get children() {
      return i(A.label, p({
        get for() {
          return n.id;
        },
        "data-group": !0,
        get "data-indeterminate"() {
          return n["data-indeterminate"];
        },
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
      }, d, {
        get children() {
          return [re(Od, oe(), R("class", V(f(), !0), !1) + R("tabindex", V(l.tabIndex, !0), !1) + R("value", V(n.value, !0), !1) + R("id", V(n.id, !0), !1) + R("name", V(n.name, !0), !1), R("checked", n.checked, !0), R("required", n.required, !0), R("disabled", n.disabled, !0) + R("readonly", V(n.readOnly, !0), !1) + R("aria-required", V(n["aria-required"], !0), !1) + R("aria-disabled", V(n["aria-disabled"], !0), !1) + R("aria-invalid", V(n["aria-invalid"], !0), !1) + R("aria-readonly", V(n["aria-readonly"], !0), !1) + R("aria-label", V(n["aria-label"], !0), !1) + R("aria-labelledby", V(n["aria-labelledby"], !0), !1) + R("aria-describedby", V(n["aria-describedby"], !0), !1)), i(D, {
            get when() {
              return Te(l.children);
            },
            get fallback() {
              return l.children;
            },
            get children() {
              var S;
              return (S = l.children) == null ? void 0 : S.call(l, {
                state: u
              });
            }
          })];
        }
      }));
    }
  });
}
const Uo = J();
function Wd() {
  const e = Q(Uo);
  if (!e)
    throw new Error("[Hope UI]: useCheckboxPrimitiveContext must be used within a `<CheckboxPrimitive />` component");
  return e;
}
var Fd = ["<path", ' d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" stroke="currentColor" stroke-width="1" fill-rule="evenodd" clip-rule="evenodd"></path>'], Nd = ["<path", ' d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z" fill="currentColor" stroke="currentColor" stroke-width="1" fill-rule="evenodd" clip-rule="evenodd"></path>'];
const Qo = "hope-checkbox", Vd = "hope-checkbox__input", qd = "hope-checkbox__control", jd = "hope-checkbox__label";
function Kd(e) {
  var f, u, g, S, x, z, C, $, B, w, E, M;
  const t = y().Checkbox, r = jo(), o = {
    variant: ((f = r == null ? void 0 : r.state) == null ? void 0 : f.variant) ?? ((g = (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.root) == null ? void 0 : g.variant) ?? "outline",
    colorScheme: ((S = r == null ? void 0 : r.state) == null ? void 0 : S.colorScheme) ?? ((z = (x = t == null ? void 0 : t.defaultProps) == null ? void 0 : x.root) == null ? void 0 : z.colorScheme) ?? "primary",
    size: ((C = r == null ? void 0 : r.state) == null ? void 0 : C.size) ?? ((B = ($ = t == null ? void 0 : t.defaultProps) == null ? void 0 : $.root) == null ? void 0 : B.size) ?? "md",
    labelPlacement: ((w = r == null ? void 0 : r.state) == null ? void 0 : w.labelPlacement) ?? ((M = (E = t == null ? void 0 : t.defaultProps) == null ? void 0 : E.root) == null ? void 0 : M.labelPlacement) ?? "end"
  }, a = q(o, e), [n, s] = b(a, ["children", "class", "variant", "colorScheme", "size", "labelPlacement", "iconChecked", "iconIndeterminate"]), l = () => h(n.class, Qo, Pd({
    size: n.size,
    labelPlacement: n.labelPlacement
  })), c = () => h(qd, zd({
    variant: n.variant,
    colorScheme: n.colorScheme,
    size: n.size
  })), d = () => h(jd, Td());
  return i(Rd, p({
    get class() {
      return l();
    },
    inputClass: Vd,
    get __baseStyle() {
      var N;
      return (N = t == null ? void 0 : t.baseStyle) == null ? void 0 : N.root;
    }
  }, s, {
    children: ({
      state: N
    }) => [i(A.span, {
      "aria-hidden": !0,
      get class() {
        return c();
      },
      get __baseStyle() {
        var L;
        return (L = t == null ? void 0 : t.baseStyle) == null ? void 0 : L.control;
      },
      get "data-indeterminate"() {
        return N()["data-indeterminate"];
      },
      get "data-focus"() {
        return N()["data-focus"];
      },
      get "data-checked"() {
        return N()["data-checked"];
      },
      get "data-required"() {
        return N()["data-required"];
      },
      get "data-disabled"() {
        return N()["data-disabled"];
      },
      get "data-invalid"() {
        return N()["data-invalid"];
      },
      get "data-readonly"() {
        return N()["data-readonly"];
      },
      get children() {
        return i(Lr, {
          get children() {
            return [i(bt, {
              get when() {
                return N().indeterminate;
              },
              get children() {
                return i(D, {
                  get when() {
                    return n.iconIndeterminate;
                  },
                  get fallback() {
                    return i(Ud, {});
                  },
                  get children() {
                    return n.iconIndeterminate;
                  }
                });
              }
            }), i(bt, {
              get when() {
                return N().checked && !N().indeterminate;
              },
              get children() {
                return i(D, {
                  get when() {
                    return n.iconChecked;
                  },
                  get fallback() {
                    return i(Xd, {});
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
    }), i(A.span, {
      get class() {
        return d();
      },
      get __baseStyle() {
        var L;
        return (L = t == null ? void 0 : t.baseStyle) == null ? void 0 : L.label;
      },
      get "data-indeterminate"() {
        return N()["data-indeterminate"];
      },
      get "data-focus"() {
        return N()["data-focus"];
      },
      get "data-checked"() {
        return N()["data-checked"];
      },
      get "data-required"() {
        return N()["data-required"];
      },
      get "data-disabled"() {
        return N()["data-disabled"];
      },
      get "data-invalid"() {
        return N()["data-invalid"];
      },
      get "data-readonly"() {
        return N()["data-readonly"];
      },
      get children() {
        return n.children;
      }
    })]
  }));
}
Kd.toString = () => v(Qo);
const Xd = $e({
  viewBox: "0 0 15 15",
  path: () => re(Fd, oe())
}), Ud = $e({
  viewBox: "0 0 15 15",
  path: () => re(Nd, oe())
});
function Pp(e) {
  const t = Wd();
  return i(D, {
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
const Qd = ct({
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
}), Yd = m({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle"
}), Zd = m({
  fill: "transparent",
  stroke: "currentColor"
}), Jd = m({
  position: "absolute",
  top: 0,
  left: 0,
  variants: {
    spin: {
      true: {
        animation: `${At} 2s linear infinite`
      }
    }
  }
}), Gd = m({
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
        animation: `${Qd} 2s linear infinite`
      },
      false: {
        strokeDashoffset: 66,
        transitionProperty: "stroke-dasharray, stroke, opacity",
        transitionDuration: "600ms",
        transitionTimingFunction: "ease"
      }
    }
  }
}), eu = m({
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
}), Yo = J(), Zo = "hope-circular-progress", tu = "hope-circular-progress__track";
function ru(e) {
  var u, g, S, x, z, C;
  const t = y().CircularProgress, [r] = te({
    get size() {
      var $, B;
      return e.size ?? ((B = ($ = t == null ? void 0 : t.defaultProps) == null ? void 0 : $.root) == null ? void 0 : B.size) ?? "$12";
    },
    get thickness() {
      var $, B;
      return e.thickness ?? ((B = ($ = t == null ? void 0 : t.defaultProps) == null ? void 0 : $.root) == null ? void 0 : B.thickness) ?? "$2_5";
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
      return jr(this.value, this.min, this.max);
    },
    get indeterminate() {
      return e.indeterminate ?? !1;
    },
    get ariaValueText() {
      if (!this.indeterminate)
        return Te(this.getValueText) ? this.getValueText(this.value, this.percent) : e.valueText ?? `${this.percent}%`;
    },
    get getValueText() {
      return e.getValueText;
    },
    get isIndicatorVisible() {
      return !!(this.value > 0 || this.indeterminate);
    }
  }), o = {
    size: ((g = (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.root) == null ? void 0 : g.size) ?? "$12",
    thickness: ((x = (S = t == null ? void 0 : t.defaultProps) == null ? void 0 : S.root) == null ? void 0 : x.thickness) ?? "$2_5",
    trackColor: ((C = (z = t == null ? void 0 : t.defaultProps) == null ? void 0 : z.root) == null ? void 0 : C.trackColor) ?? "$neutral4"
  }, a = q(o, e), [n, s, l] = b(a, ["class", "children", "trackColor"], ["size", "thickness", "min", "max", "getValueText"]), c = () => h(n.class, Zo, Yd()), d = () => h(tu, Zd({
    css: {
      color: n.trackColor,
      strokeWidth: r.thickness
    }
  })), f = {
    state: r
  };
  return i(Yo.Provider, {
    value: f,
    get children() {
      return i(P, p({
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
          var $;
          return ($ = t == null ? void 0 : t.baseStyle) == null ? void 0 : $.root;
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
                  return d();
                },
                get __baseStyle() {
                  var $;
                  return ($ = t == null ? void 0 : t.baseStyle) == null ? void 0 : $.track;
                }
              });
            }
          }), n.children];
        }
      }));
    }
  });
}
ru.toString = () => v(Zo);
function Jo() {
  const e = Q(Yo);
  if (!e)
    throw new Error("[Hope UI]: useCircularProgressContext must be used within a `<CircularProgress />` component");
  return e;
}
const Go = "hope-circular-progress__indicator";
function ou(e) {
  var f, u, g, S;
  const t = y().CircularProgress, r = Jo(), o = {
    color: ((u = (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.indicator) == null ? void 0 : u.color) ?? "$primary9",
    withRoundCaps: ((S = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.indicator) == null ? void 0 : S.withRoundCaps) ?? !1
  }, a = q(o, e), [n, s] = b(a, ["class", "children", "color", "withRoundCaps"]), l = () => {
    if (r.state.indeterminate)
      return;
    const x = r.state.percent * 2.64;
    return `${x} ${264 - x}`;
  }, c = () => h(n.class, Go, Jd({
    spin: r.state.indeterminate
  })), d = () => Gd({
    hidden: !r.state.isIndicatorVisible,
    indeterminate: r.state.indeterminate === !0,
    // ensure a boolean is passed so the `true/false` values works correctly
    withRoundCaps: n.withRoundCaps,
    css: {
      color: n.color,
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
          return d();
        },
        get __baseStyle() {
          var x;
          return (x = t == null ? void 0 : t.baseStyle) == null ? void 0 : x.indicator;
        }
      });
    }
  }));
}
ou.toString = () => v(Go);
const en = "hope-circular-progress__label";
function nu(e) {
  const t = y().CircularProgress, r = Jo(), [o, a] = b(e, ["class", "children"]), n = () => h(o.class, en, eu());
  return i(P, p({
    get class() {
      return n();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.label;
    }
  }, a, {
    get children() {
      return i(D, {
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
nu.toString = () => v(en);
var au = ["<path", ' fill="currentColor" d="M2.64 1.27L7.5 6.13l4.84-4.84A.92.92 0 0 1 13 1a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l4.89 4.89A.9.9 0 0 1 14 13a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-4.85 4.85A.92.92 0 0 1 2 14a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L1.27 2.61A.9.9 0 0 1 1 2a1 1 0 0 1 1-1c.24.003.47.1.64.27z"></path>'];
const su = $e({
  viewBox: "0 0 15 15",
  path: () => re(au, oe())
}), iu = m({
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
}), tn = "hope-close-button";
function Rt(e) {
  var l, c, d;
  const t = y().CloseButton, r = {
    "aria-label": ((l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l["aria-label"]) ?? "Close",
    icon: ((c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.icon) ?? i(su, {}),
    size: ((d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.size) ?? "md"
  }, o = q(r, e), [a, n] = b(o, ["class", "children", "size", "icon"]), s = () => h(a.class, tn, iu({
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
  }, n, {
    get children() {
      return i(D, {
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
Rt.toString = () => v(tn);
const lu = m({
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
}), rn = "hope-container";
function cu(e) {
  const r = q({
    centered: !0,
    centerContent: !1
  }, e), [o, a, n] = b(r, ["class"], ["centered", "centerContent"]), s = () => h(o.class, rn, lu(a));
  return i(P, p({
    get class() {
      return s();
    }
  }, n));
}
cu.toString = () => v(rn);
const du = m({
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
}), on = "hope-divider";
function uu(e) {
  const r = q({
    as: "div",
    variant: "solid",
    orientation: "horizontal",
    color: "$neutral6",
    thickness: "1px"
  }, e), [o, a] = b(r, ["class", "variant", "orientation", "thickness"]), n = () => h(o.class, on, du({
    variant: o.variant,
    orientation: o.orientation,
    css: {
      borderLeftWidth: o.orientation === "vertical" ? o.thickness : 0,
      borderBottomWidth: o.orientation === "horizontal" ? o.thickness : 0
    }
  }));
  return i(P, p({
    get class() {
      return n();
    }
  }, a));
}
uu.toString = () => v(on);
function gu(e) {
  const t = `hope-modal-${ne()}`, r = y().Modal, [o, a] = te({
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
      var C, $;
      return e.motionPreset ?? (($ = (C = r == null ? void 0 : r.defaultProps) == null ? void 0 : C.root) == null ? void 0 : $.motionPreset) ?? "scale";
    },
    get size() {
      var C, $;
      return e.size ?? (($ = (C = r == null ? void 0 : r.defaultProps) == null ? void 0 : C.root) == null ? void 0 : $.size) ?? "md";
    },
    get centered() {
      var C, $;
      return e.centered ?? (($ = (C = r == null ? void 0 : r.defaultProps) == null ? void 0 : C.root) == null ? void 0 : $.centered) ?? !1;
    },
    get scrollBehavior() {
      var C, $;
      return e.scrollBehavior ?? (($ = (C = r == null ? void 0 : r.defaultProps) == null ? void 0 : C.root) == null ? void 0 : $.scrollBehavior) ?? "outside";
    },
    get closeOnOverlayClick() {
      var C, $;
      return e.closeOnOverlayClick ?? (($ = (C = r == null ? void 0 : r.defaultProps) == null ? void 0 : C.root) == null ? void 0 : $.closeOnOverlayClick) ?? !0;
    },
    get closeOnEsc() {
      var C, $;
      return e.closeOnEsc ?? (($ = (C = r == null ? void 0 : r.defaultProps) == null ? void 0 : C.root) == null ? void 0 : $.closeOnEsc) ?? !0;
    },
    get trapFocus() {
      var C, $;
      return e.trapFocus ?? (($ = (C = r == null ? void 0 : r.defaultProps) == null ? void 0 : C.root) == null ? void 0 : $.trapFocus) ?? !0;
    },
    get blockScrollOnMount() {
      var C, $;
      return e.blockScrollOnMount ?? (($ = (C = r == null ? void 0 : r.defaultProps) == null ? void 0 : C.root) == null ? void 0 : $.blockScrollOnMount) ?? !0;
    },
    get preserveScrollBarGap() {
      var C, $;
      return e.preserveScrollBarGap ?? (($ = (C = r == null ? void 0 : r.defaultProps) == null ? void 0 : C.root) == null ? void 0 : $.preserveScrollBarGap) ?? !1;
    }
  }), [n, s] = Z(!1);
  pe(() => {
    o.opened ? s(!0) : o.motionPreset === "none" && s(!1);
  });
  const l = () => s(!1), c = () => e.onClose(), d = (C) => a("headerMounted", C), f = (C) => a("bodyMounted", C);
  let u = null;
  const z = {
    state: o,
    unmountPortal: l,
    onClose: c,
    onMouseDown: (C) => {
      u = C.target;
    },
    onKeyDown: (C) => {
      var $;
      C.key === "Escape" && (C.stopPropagation(), o.closeOnEsc && c(), ($ = e.onEsc) == null || $.call(e));
    },
    onOverlayClick: (C) => {
      var $;
      C.stopPropagation(), u === C.target && (o.closeOnOverlayClick && c(), ($ = e.onOverlayClick) == null || $.call(e));
    },
    setHeaderMounted: d,
    setBodyMounted: f
  };
  return i(D, {
    get when() {
      return n();
    },
    get children() {
      return i(nn.Provider, {
        value: z,
        get children() {
          return i(tt, {
            get children() {
              return e.children;
            }
          });
        }
      });
    }
  });
}
const nn = J();
function Oe() {
  const e = Q(nn);
  if (!e)
    throw new Error("[Hope UI]: useModalContext must be used within a `<Modal />` component");
  return e;
}
const an = "hope-modal__body";
function sn(e) {
  const t = y().Modal, r = Oe(), [o, a] = b(e, ["class"]), n = () => h(o.class, an, ji({
    scrollBehavior: r.state.scrollBehavior
  }));
  return ae(() => r.setBodyMounted(!0)), ge(() => r.setBodyMounted(!1)), i(P, p({
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
sn.toString = () => v(an);
const ln = "hope-modal__close-button";
function cn(e) {
  var d, f, u, g, S, x;
  const t = y().Modal, r = Oe(), o = {
    "aria-label": ((f = (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.closeButton) == null ? void 0 : f["aria-label"]) ?? "Close modal",
    size: ((g = (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.closeButton) == null ? void 0 : g.size) ?? "md",
    icon: (x = (S = t == null ? void 0 : t.defaultProps) == null ? void 0 : S.closeButton) == null ? void 0 : x.icon
  }, a = q(o, e), [n, s] = b(a, ["class", "onClick"]), l = () => h(n.class, ln, Xi());
  return i(Rt, p({
    get class() {
      return l();
    },
    get __baseStyle() {
      var z;
      return (z = t == null ? void 0 : t.baseStyle) == null ? void 0 : z.closeButton;
    },
    onClick: (z) => {
      fe(n.onClick, (C) => {
        C.stopPropagation(), r.onClose();
      })(z);
    }
  }, s));
}
cn.toString = () => v(ln);
const dn = "hope-modal__footer";
function un(e) {
  const t = y().Modal, [r, o] = b(e, ["class"]), a = () => h(r.class, dn, Ki());
  return i(P, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.footer;
    }
  }, o));
}
un.toString = () => v(dn);
const gn = "hope-modal__header";
function fn(e) {
  const t = y().Modal, r = Oe(), [o, a] = b(e, ["class"]), n = () => h(o.class, gn, qi());
  return ae(() => r.setHeaderMounted(!0)), ge(() => r.setHeaderMounted(!1)), i(P, p({
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
fn.toString = () => v(gn);
const pn = J();
function Tp(e) {
  const t = y().Drawer, [, r] = b(e, ["opened", "onClose", "placement", "size", "fullHeight", "disableMotion"]), [o] = te({
    get placement() {
      var a, n;
      return e.placement ?? ((n = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : n.placement) ?? "right";
    },
    get size() {
      var a, n;
      return e.size ?? ((n = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : n.size) ?? "xs";
    },
    get fullHeight() {
      var a, n;
      return e.fullHeight ?? ((n = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : n.fullHeight) ?? !1;
    },
    get disableMotion() {
      var a, n;
      return e.disableMotion ?? ((n = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.root) == null ? void 0 : n.disableMotion) ?? !1;
    }
  });
  return i(pn.Provider, {
    value: o,
    get children() {
      return i(gu, p({
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
function hn() {
  const e = Q(pn);
  if (!e)
    throw new Error("[Hope UI]: useDrawerContext must be used within a `<Drawer />` component");
  return e;
}
function zp(e) {
  var a, n, s, l, c, d;
  const t = y().Drawer, r = {
    "aria-label": ((n = (a = t == null ? void 0 : t.defaultProps) == null ? void 0 : a.closeButton) == null ? void 0 : n["aria-label"]) ?? "Close drawer",
    size: ((l = (s = t == null ? void 0 : t.defaultProps) == null ? void 0 : s.closeButton) == null ? void 0 : l.size) ?? "md",
    icon: (d = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.closeButton) == null ? void 0 : d.icon
  }, o = q(r, e);
  return i(cn, p({
    get __baseStyle() {
      var f;
      return (f = t == null ? void 0 : t.baseStyle) == null ? void 0 : f.closeButton;
    }
  }, o));
}
function Bp(e) {
  const t = y().Drawer;
  return i(sn, p({
    get __baseStyle() {
      var r;
      return (r = t == null ? void 0 : t.baseStyle) == null ? void 0 : r.body;
    }
  }, e));
}
function Lp(e) {
  const t = y().Drawer;
  return i(fn, p({
    get __baseStyle() {
      var r;
      return (r = t == null ? void 0 : t.baseStyle) == null ? void 0 : r.header;
    }
  }, e));
}
function Dp(e) {
  const t = y().Drawer;
  return i(un, p({
    get __baseStyle() {
      var r;
      return (r = t == null ? void 0 : t.baseStyle) == null ? void 0 : r.footer;
    }
  }, e));
}
function bn(e) {
  const t = Oe();
  let r, o;
  const a = (u) => {
    r = u;
  }, n = () => t.state.headerMounted ? t.state.headerId : void 0, s = () => t.state.bodyMounted ? t.state.bodyId : void 0, l = (u) => {
    fe(e.onClick, (g) => g.stopPropagation())(u);
  }, c = () => `[id='${t.state.dialogId}']`, d = () => {
    r && (t.state.trapFocus && (o = Hr(r, {
      initialFocus: t.state.initialFocus,
      fallbackFocus: c(),
      allowOutsideClick: !0
    }), o.activate()), t.state.blockScrollOnMount);
  }, f = () => {
    o == null || o.deactivate();
  };
  return ae(() => {
    d();
  }), ge(() => {
    f();
  }), {
    assignContainerRef: a,
    ariaLabelledBy: n,
    ariaDescribedBy: s,
    onDialogClick: l
  };
}
const fu = "hope-modal__content-container", mn = "hope-modal__content";
function pu(e) {
  const t = y().Modal, r = Oe(), [o, a] = b(e, ["ref", "class", "role", "aria-labelledby", "aria-describedby", "onClick"]), {
    ariaLabelledBy: n,
    ariaDescribedBy: s,
    onDialogClick: l
  } = bn(o), c = () => {
    const u = Ni({
      centered: r.state.centered,
      scrollBehavior: r.state.scrollBehavior
    });
    return h(fu, u);
  }, d = () => {
    const u = Vi({
      size: r.state.size,
      scrollBehavior: r.state.scrollBehavior
    });
    return h(o.class, mn, u);
  }, f = () => {
    switch (r.state.motionPreset) {
      case "fade-in-bottom":
        return ce.fadeInBottom;
      case "scale":
        return ce.scale;
      case "none":
        return "hope-none";
    }
  };
  return i(De, {
    get name() {
      return f();
    },
    appear: !0,
    get onAfterExit() {
      return r.unmountPortal;
    },
    get children() {
      return i(D, {
        get when() {
          return r.state.opened;
        },
        get children() {
          return i(P, {
            get class() {
              return c();
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
                  return d();
                },
                get __baseStyle() {
                  var u;
                  return (u = t == null ? void 0 : t.baseStyle) == null ? void 0 : u.content;
                },
                get id() {
                  return r.state.dialogId;
                },
                get role() {
                  return o.role ?? "dialog";
                },
                tabIndex: -1,
                "aria-modal": !0,
                get "aria-labelledby"() {
                  return n();
                },
                get "aria-describedby"() {
                  return s();
                },
                onClick: l
              }, a));
            }
          });
        }
      });
    }
  });
}
pu.toString = () => v(mn);
const vn = "hope-modal__overlay";
function hu(e) {
  const t = y().Modal, r = Oe(), [o, a] = b(e, ["class"]), n = () => h(o.class, vn, Fr()), s = () => r.state.motionPreset === "none" ? "hope-none" : ce.fade;
  return i(De, {
    get name() {
      return s();
    },
    appear: !0,
    get children() {
      return i(D, {
        get when() {
          return r.state.opened;
        },
        get children() {
          return i(P, p({
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
hu.toString = () => v(vn);
const bu = "hope-drawer__content-container", Sn = "hope-drawer__content";
function mu(e) {
  const t = y().Drawer, r = hn(), o = Oe(), [a, n] = b(e, ["ref", "class", "role", "aria-labelledby", "aria-describedby", "onClick"]), {
    ariaLabelledBy: s,
    ariaDescribedBy: l,
    onDialogClick: c
  } = bn(a), d = () => h(bu, Qi({
    placement: r.placement
  })), f = () => {
    const g = Yi({
      size: r.size,
      placement: r.placement,
      fullHeight: r.fullHeight
    });
    return h(a.class, Sn, g);
  }, u = () => {
    if (r.disableMotion)
      return "hope-none";
    switch (r.placement) {
      case "top":
        return j.slideInTop;
      case "right":
        return j.slideInRight;
      case "bottom":
        return j.slideInBottom;
      case "left":
        return j.slideInLeft;
    }
  };
  return i(De, {
    get name() {
      return u();
    },
    appear: !0,
    get onAfterExit() {
      return o.unmountPortal;
    },
    get children() {
      return i(D, {
        get when() {
          return o.state.opened;
        },
        get children() {
          return i(P, {
            get class() {
              return d();
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
              return i(A.section, p({
                get class() {
                  return f();
                },
                get __baseStyle() {
                  var g;
                  return (g = t == null ? void 0 : t.baseStyle) == null ? void 0 : g.content;
                },
                get id() {
                  return o.state.dialogId;
                },
                get role() {
                  return a.role ?? "dialog";
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
              }, n));
            }
          });
        }
      });
    }
  });
}
mu.toString = () => v(Sn);
const xn = "hope-drawer__overlay";
function vu(e) {
  const t = y().Drawer, r = hn(), o = Oe(), [a, n] = b(e, ["class"]), s = () => h(a.class, xn, Fr()), l = () => r.disableMotion ? "hope-none" : j.fade;
  return i(De, {
    get name() {
      return l();
    },
    appear: !0,
    get children() {
      return i(D, {
        get when() {
          return o.state.opened;
        },
        get children() {
          return i(P, p({
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
vu.toString = () => v(xn);
const Cn = "hope-flex";
function yn(e) {
  const [t, r] = b(e, ["class", "direction", "wrap"]), o = () => h(t.class, Cn);
  return i(P, p({
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
yn.toString = () => v(Cn);
const $n = "hope-form-error-message";
function Su(e) {
  const t = y().FormControl, r = dt(), [o, a] = b(e, ["ref", "id", "class"]), n = () => o.id ?? (r == null ? void 0 : r.state.errorMessageId), s = () => h(o.class, $n, Ed());
  return ae(() => r == null ? void 0 : r.setHasErrorMessage(!0)), ge(() => r == null ? void 0 : r.setHasErrorMessage(!1)), i(D, {
    get when() {
      return r == null ? void 0 : r.state.invalid;
    },
    get children() {
      return i(P, p({
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
Su.toString = () => v($n);
const wn = "hope-form-helper-text";
function xu(e) {
  const t = y().FormControl, r = dt(), [o, a] = b(e, ["ref", "id", "class"]), n = () => o.id ?? (r == null ? void 0 : r.state.helperTextId), s = () => h(o.class, wn, Ad());
  return ae(() => r == null ? void 0 : r.setHasHelperText(!0)), ge(() => r == null ? void 0 : r.setHasHelperText(!1)), i(P, p({
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
    get "data-disabled"() {
      return r == null ? void 0 : r.state["data-disabled"];
    },
    get "data-readonly"() {
      return r == null ? void 0 : r.state["data-readonly"];
    }
  }, a));
}
xu.toString = () => v(wn);
var Cu = ["<span", ' role="presentation" aria-hidden="true">*</span>'];
const _n = "hope-form-label";
function yu(e) {
  var f, u;
  const t = y().FormControl, r = dt(), o = {
    withRequiredIndicator: ((u = (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.label) == null ? void 0 : u.withRequiredIndicator) ?? !0
  }, a = q(o, e), [n, s] = b(a, ["id", "for", "class", "children", "withRequiredIndicator"]), l = () => n.id ?? (r == null ? void 0 : r.state.labelId), c = () => n.for ?? (r == null ? void 0 : r.state.id), d = () => h(n.class, _n, Dd());
  return i(A.label, p({
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
      return [n.children, i(D, {
        get when() {
          return (r == null ? void 0 : r.state.required) && n.withRequiredIndicator;
        },
        get children() {
          return re(Cu, oe() + R("class", V(Hd(), !0), !1));
        }
      })];
    }
  }));
}
yu.toString = () => v(_n);
const In = "hope-grid";
function kn(e) {
  const [t, r] = b(e, ["class", "autoFlow", "autoColumns", "autoRows", "templateAreas", "templateColumns", "templateRows"]), o = () => h(t.class, In);
  return i(P, p({
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
kn.toString = () => v(In);
function Ir(e) {
  if (e != null)
    return Ws(e, (t) => {
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
const Pn = "hope-grid-item";
function $u(e) {
  const [t, r] = b(e, ["class", "area", "colSpan", "colStart", "colEnd", "rowSpan", "rowStart", "rowEnd"]), o = () => h(t.class, Pn);
  return i(P, p({
    get class() {
      return o();
    },
    get gridArea() {
      return t.area;
    },
    get gridColumn() {
      return Ir(t.colSpan);
    },
    get gridRow() {
      return Ir(t.rowSpan);
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
$u.toString = () => v(Pn);
const Tn = "hope-simple-grid";
function wu(e) {
  return Os(e) ? `${e}px` : e;
}
function _u(e) {
  return ar(e, (t) => Er(t) ? null : `repeat(auto-fit, minmax(${wu(t)}, 1fr))`);
}
function Iu(e) {
  return ar(e, (t) => Er(t) ? null : `repeat(${t}, minmax(0, 1fr))`);
}
function ku(e) {
  const [t, r] = b(e, ["class", "minChildWidth", "columns"]), o = () => h(t.class, Tn), a = () => t.minChildWidth ? _u(t.minChildWidth) : Iu(t.columns);
  return i(kn, p({
    get class() {
      return o();
    },
    get templateColumns() {
      return a();
    }
  }, r));
}
ku.toString = () => v(Tn);
const zn = m({
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
}), Pu = m(zn, {
  fontWeight: "$semibold"
}), Bn = "hope-heading";
function Tu(e) {
  var c, d;
  const t = y().Heading, r = {
    as: "h2",
    level: (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.level,
    size: (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.size
  }, o = q(r, e), [a, n] = b(o, ["class", "as", "level", "size"]), s = () => h(a.class, Bn, Pu({
    size: a.size
  })), l = () => a.level ? `h${a.level}` : a.as;
  return i(P, p({
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
Tu.toString = () => v(Bn);
function zu(e) {
  const t = y().IconButton, r = xo(), [o, a] = b(e, ["class", "className", "children", "icon", "variant", "colorScheme", "size", "disabled"]), n = () => {
    var f;
    return o.variant ?? (r == null ? void 0 : r.state.variant) ?? ((f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.variant) ?? "solid";
  }, s = () => {
    var f;
    return o.colorScheme ?? (r == null ? void 0 : r.state.colorScheme) ?? ((f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.colorScheme) ?? "primary";
  }, l = () => {
    var f;
    return o.size ?? (r == null ? void 0 : r.state.size) ?? ((f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.size) ?? "md";
  }, c = () => o.disabled ?? (r == null ? void 0 : r.state.disabled), d = () => h(o.class, Ot);
  return i(cr, p({
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
      return i(D, {
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
zu.toString = () => v(Ot);
const Ln = "hope-image";
function Bu(e) {
  const [t, r, o] = b(e, ["class", "htmlWidth", "htmlHeight", "fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin"], ["onError", "onLoad"]), a = () => t.loading != null || // Defer to native `img` tag if `loading` prop is passed.
  t.ignoreFallback || t.fallbackSrc === void 0 && t.fallback === void 0, n = Se(() => ko({
    ...e,
    ignoreFallback: a()
  })), s = () => ({
    objectFit: t.fit,
    objectPosition: t.align,
    width: t.htmlWidth,
    height: t.htmlHeight,
    ...a() ? r : {},
    ...o
  }), l = () => h(t.class, Ln);
  return i(D, {
    get when() {
      return n()() === "loaded";
    },
    get fallback() {
      return i(D, {
        get when() {
          return t.fallback;
        },
        get fallback() {
          return i(P, p({
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
      return i(P, p({
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
Bu.toString = () => v(Ln);
const Dn = J();
function vt() {
  return Q(Dn);
}
const Hn = "hope-input-group";
function Lu(e) {
  const t = y().Input, [r, o] = te({
    get variant() {
      var g, S;
      return e.variant ?? ((S = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.group) == null ? void 0 : S.variant) ?? "outline";
    },
    get size() {
      var g, S;
      return e.size ?? ((S = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.group) == null ? void 0 : S.size) ?? "md";
    },
    hasLeftElement: !1,
    hasRightElement: !1,
    hasLeftAddon: !1,
    hasRightAddon: !1
  }), [a, n] = b(e, ["variant", "size", "class"]), s = () => h(a.class, Hn, yl()), u = {
    state: r,
    setHasLeftElement: (g) => o("hasLeftElement", g),
    setHasRightElement: (g) => o("hasRightElement", g),
    setHasLeftAddon: (g) => o("hasLeftAddon", g),
    setHasRightAddon: (g) => o("hasRightAddon", g)
  };
  return i(Dn.Provider, {
    value: u,
    get children() {
      return i(P, p({
        get class() {
          return s();
        },
        get __baseStyle() {
          var g;
          return (g = t == null ? void 0 : t.baseStyle) == null ? void 0 : g.group;
        }
      }, n));
    }
  });
}
Lu.toString = () => v(Hn);
const An = "hope-input";
function Du(e) {
  const t = y().Input, r = vt(), o = ut(e), [a, n] = b(e, ["class", "htmlSize", "variant", "size"]), s = () => {
    var l, c, d, f;
    return h(a.class, An, Cl({
      variant: a.variant ?? (r == null ? void 0 : r.state.variant) ?? ((c = (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.input) == null ? void 0 : c.variant) ?? "outline",
      size: a.size ?? (r == null ? void 0 : r.state.size) ?? ((f = (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.input) == null ? void 0 : f.size) ?? "md",
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
  }, o, n));
}
Du.toString = () => v(An);
function En(e) {
  const t = y().Input, [r, o, a] = b(e, ["class"], ["placement", "variant", "size"]), n = () => h(r.class, wl(o));
  return i(P, p({
    get class() {
      return n();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.addon;
    }
  }, a));
}
const Mn = "hope-input-left-addon";
function Hu(e) {
  const t = vt(), [r, o] = b(e, ["class"]), a = () => h(r.class, Mn);
  return ae(() => t == null ? void 0 : t.setHasLeftAddon(!0)), ge(() => t == null ? void 0 : t.setHasLeftAddon(!1)), i(En, p({
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
  }, o));
}
Hu.toString = () => v(Mn);
const On = "hope-input-right-addon";
function Au(e) {
  const t = vt(), [r, o] = b(e, ["class"]), a = () => h(r.class, On);
  return ae(() => t == null ? void 0 : t.setHasRightAddon(!0)), ge(() => t == null ? void 0 : t.setHasRightAddon(!1)), i(En, p({
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
  }, o));
}
Au.toString = () => v(On);
function Rn(e) {
  const t = y().Input, [r, o, a] = b(e, ["class"], ["placement", "size"]), n = () => h(r.class, $l(o));
  return i(P, p({
    get class() {
      return n();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.element;
    }
  }, a));
}
const Wn = "hope-input-left-element";
function Eu(e) {
  const t = vt(), [r, o] = b(e, ["class"]), a = () => h(r.class, Wn);
  return ae(() => t == null ? void 0 : t.setHasLeftElement(!0)), ge(() => t == null ? void 0 : t.setHasLeftElement(!1)), i(Rn, p({
    get class() {
      return a();
    },
    placement: "left",
    get size() {
      return (t == null ? void 0 : t.state.size) ?? "md";
    }
  }, o));
}
Eu.toString = () => v(Wn);
const Fn = "hope-input-right-element";
function Mu(e) {
  const t = vt(), [r, o] = b(e, ["class"]), a = () => h(r.class, Fn);
  return ae(() => t == null ? void 0 : t.setHasRightElement(!0)), ge(() => t == null ? void 0 : t.setHasRightElement(!1)), i(Rn, p({
    get class() {
      return a();
    },
    placement: "right",
    get size() {
      return (t == null ? void 0 : t.state.size) ?? "md";
    }
  }, o));
}
Mu.toString = () => v(Fn);
const Ou = m({
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
}), Nn = "hope-kbd";
function Ru(e) {
  const t = y().Kbd, [r, o] = b(e, ["class"]), a = () => h(r.class, Nn, Ou());
  return i(A.kbd, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    }
  }, o));
}
Ru.toString = () => v(Nn);
const Wu = m({
  listStyleType: "none"
}), Fu = m({
  marginEnd: "0.5rem"
}), Vn = "hope-list", Nu = "& > *:not(style) ~ *:not(style)";
function pr(e) {
  const [t, r] = b(e, ["class", "styleType", "stylePosition", "spacing"]), o = () => t.spacing ? {
    [Nu]: {
      mt: t.spacing
    }
  } : {}, a = () => h(t.class, Vn, Wu({
    css: {
      listStyleType: t.styleType,
      listStylePosition: t.stylePosition,
      ...o()
    }
  }));
  return i(A.ul, p({
    role: "list",
    get class() {
      return a();
    }
  }, r));
}
pr.toString = () => v(Vn);
const qn = "hope-ordered-list";
function Vu(e) {
  const [t, r] = b(e, ["class"]), o = () => h(t.class, qn);
  return i(pr, p({
    as: "ol",
    get class() {
      return o();
    },
    styleType: "decimal",
    marginStart: "1em"
  }, r));
}
Vu.toString = () => v(qn);
const jn = "hope-unordered-list";
function qu(e) {
  const [t, r] = b(e, ["class"]), o = () => h(t.class, jn);
  return i(pr, p({
    as: "ul",
    get class() {
      return o();
    },
    styleType: "initial",
    marginStart: "1em"
  }, r));
}
qu.toString = () => v(jn);
const Kn = "hope-list__icon";
function ju(e) {
  const [t, r] = b(e, ["class"]), o = () => h(t.class, Kn, Fu());
  return i(ot, p({
    role: "presentation",
    get class() {
      return o();
    },
    verticalAlign: "text-bottom"
  }, r));
}
ju.toString = () => v(Kn);
const Xn = "hope-list__item";
function Ku(e) {
  const [t, r] = b(e, ["class"]), o = () => h(t.class, Xn);
  return i(A.li, p({
    get class() {
      return o();
    }
  }, r));
}
Ku.toString = () => v(Xn);
var ke = /* @__PURE__ */ ((e) => (e[e.Close = 0] = "Close", e[e.SelectAndClose = 1] = "SelectAndClose", e[e.First = 2] = "First", e[e.Last = 3] = "Last", e[e.Next = 4] = "Next", e[e.Open = 5] = "Open", e[e.OpenAndFocusLast = 6] = "OpenAndFocusLast", e[e.Previous = 7] = "Previous", e[e.Select = 8] = "Select", e[e.Type = 9] = "Type", e))(ke || {});
function kr(e = [], t, r = []) {
  return e.filter((o) => o.disabled ? !1 : o.textValue.toLowerCase().indexOf(t.toLowerCase()) === 0 && r.indexOf(o.textValue) < 0);
}
function Xu(e, t, r = 0) {
  const o = [...e.slice(r), ...e.slice(0, r)], a = kr(o, t)[0], n = (s) => s.every((l) => l === s[0]);
  if (a)
    return e.indexOf(a);
  if (n(t.split(""))) {
    const s = kr(o, t[0]);
    return e.indexOf(s[0]);
  } else
    return -1;
}
function Uu(e, t) {
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
function Pr(e, t, r) {
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
function Qu(e) {
  const { currentIndex: t, maxIndex: r, initialAction: o, isItemDisabled: a } = e;
  let n = Pr(t, r, o);
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
    n = Pr(n, r, s);
  }
  return n;
}
function Hp(e) {
  const t = `hope-menu-${ne()}`, r = y().Menu, [o, a] = Z([]), [n, s] = te({
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
      var H, Y;
      return e.closeOnSelect ?? ((Y = (H = r == null ? void 0 : r.defaultProps) == null ? void 0 : H.root) == null ? void 0 : Y.closeOnSelect) ?? !0;
    },
    get motionPreset() {
      var H, Y, X, I, W;
      return e.motionPreset ? e.motionPreset : (Y = (H = r == null ? void 0 : r.defaultProps) == null ? void 0 : H.root) != null && Y.motionPreset ? (I = (X = r == null ? void 0 : r.defaultProps) == null ? void 0 : X.root) == null ? void 0 : I.motionPreset : (W = e.placement) != null && W.startsWith("top") ? "scale-bottom-left" : "scale-top-left";
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
  const f = async () => {
    var X, I, W, be;
    if (!l || !c)
      return;
    const {
      x: H,
      y: Y
    } = await or(l, c, {
      placement: e.placement ?? ((I = (X = r == null ? void 0 : r.defaultProps) == null ? void 0 : X.root) == null ? void 0 : I.placement) ?? "bottom-start",
      middleware: [Bt(e.offset ?? ((be = (W = r == null ? void 0 : r.defaultProps) == null ? void 0 : W.root) == null ? void 0 : be.offset) ?? 5), Lt(), Dt()]
    });
    c && Object.assign(c.style, {
      left: `${Math.round(H)}px`,
      top: `${Math.round(Y)}px`
    });
  }, u = (H) => {
    n.searchTimeoutId && window.clearTimeout(n.searchTimeoutId);
    const Y = window.setTimeout(() => {
      s("searchString", "");
    }, 500);
    return s("searchTimeoutId", Y), s("searchString", (X) => X += H), n.searchString;
  }, g = (H) => {
    s("activeIndex", H);
  }, S = (H) => n.items[H].disabled, x = (H) => {
    var X;
    g(H);
    const Y = n.items[H];
    (X = Y.onSelect) == null || X.call(Y), Y.closeOnSelect ? O(!1) : z();
  }, z = () => {
    l == null || l.focus();
  }, C = (H) => {
    if (!Ge(l, Tt(H))) {
      if (n.ignoreBlur) {
        s("ignoreBlur", !1);
        return;
      }
      n.opened && O(!1, !1);
    }
  }, $ = () => {
    O(!n.opened, !1);
  }, B = (H) => {
    const {
      key: Y
    } = H, X = n.items.length - 1, I = Uu(H, n.opened);
    switch (I) {
      case ke.Last:
      case ke.First:
      case ke.Next:
      case ke.Previous:
        return H.preventDefault(), g(Qu({
          currentIndex: n.activeIndex,
          maxIndex: X,
          initialAction: I,
          isItemDisabled: S
        }));
      case ke.SelectAndClose:
        H.preventDefault(), x(n.activeIndex);
        return;
      case ke.Close:
        return H.preventDefault(), O(!1);
      case ke.Type:
        return w(Y);
      case ke.Open:
        return H.preventDefault(), O(!0);
      case ke.OpenAndFocusLast:
        return H.preventDefault(), O(!0, !0, !0);
    }
  }, w = (H) => {
    O(!0);
    const Y = u(H), X = Xu(n.items, Y, n.activeIndex + 1);
    X >= 0 ? g(X) : (window.clearTimeout(n.searchTimeoutId), s("searchString", ""));
  }, E = (H) => {
    if (n.items[H].disabled) {
      z();
      return;
    }
    x(H);
  }, M = (H) => {
    n.activeIndex !== H && g(H);
  }, N = () => {
    s("ignoreBlur", !0);
  }, L = () => {
    n.opened ? (f(), l && c && (d = rr(l, c, f))) : d == null || d();
  }, O = (H, Y = !0, X = !1) => {
    n.opened !== H && (s("opened", H), s("activeIndex", X ? n.items.length - 1 : 0), L(), Y && z());
  }, _ = () => {
    g(-1);
  }, k = (H) => {
    Ge(l, H) || O(!1, !1);
  }, K = (H) => H === n.activeIndex, se = (H) => {
    l = H;
  }, ee = (H) => {
    c = H;
  }, G = (H) => {
    c && Yr(c) && Zr(H, c);
  }, xe = (H) => {
    const Y = n.items.findIndex((I) => I.key === H.key);
    return Y != -1 ? Y : a((I) => [...I, H]).length - 1;
  }, ze = () => n.opened, Ae = {
    state: n,
    isItemActiveDescendant: K,
    assignTriggerRef: se,
    assignContentRef: ee,
    registerItem: xe,
    scrollToItem: G,
    onTriggerBlur: C,
    onTriggerClick: $,
    onTriggerKeyDown: B,
    onContentMouseLeave: _,
    onContentClickOutside: k,
    onItemClick: E,
    onItemMouseMove: M,
    onItemMouseDown: N
  };
  return i(Un.Provider, {
    value: Ae,
    get children() {
      return i(D, {
        get when() {
          return mt(e);
        },
        get fallback() {
          return e.children;
        },
        get children() {
          var H;
          return (H = e.children) == null ? void 0 : H.call(e, {
            opened: ze
          });
        }
      });
    }
  });
}
const Un = J();
function Wt() {
  const e = Q(Un);
  if (!e)
    throw new Error("[Hope UI]: useMenuContext must be used within a `<Menu />` component");
  return e;
}
function Yu(e) {
  const [t, r] = te({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }), o = (s) => {
    Kt(s, e.element()) && r("isPointerDown", !0);
  }, a = (s) => {
    if (t.ignoreEmulatedMouseEvents) {
      r("ignoreEmulatedMouseEvents", !1);
      return;
    }
    t.isPointerDown && e.handler && Kt(s, e.element()) && (r("isPointerDown", !1), e.handler(s));
  }, n = (s) => {
    r("ignoreEmulatedMouseEvents", !0), e.handler && t.isPointerDown && Kt(s, e.element()) && (r("isPointerDown", !1), e.handler(s));
  };
  ae(() => {
    const s = Pt(e.element());
    s.addEventListener("mousedown", o, !0), s.addEventListener("mouseup", a, !0), s.addEventListener("touchstart", o, !0), s.addEventListener("touchend", n, !0);
  }), ge(() => {
    const s = Pt(e.element());
    s.removeEventListener("mousedown", o, !0), s.removeEventListener("mouseup", a, !0), s.removeEventListener("touchstart", o, !0), s.removeEventListener("touchend", n, !0);
  });
}
function Qn(e) {
  const t = rt(() => e.children);
  return Yu({
    element: () => t(),
    handler: (r) => e.onClickOutside(r)
  }), t;
}
const Yn = "hope-menu__content";
function Zu(e) {
  const t = y().Menu, r = Wt(), [o, a] = b(e, ["ref", "class", "children"]), [n, s] = Z(!1);
  pe(st(() => r.state.opened, () => {
    r.state.opened ? s(!0) : r.state.motionPreset === "none" && s(!1);
  }));
  const l = () => s(!1), c = rt(() => o.children), d = (g) => {
    r.onContentClickOutside(g.target);
  }, f = () => h(o.class, Yn, Gi()), u = () => {
    switch (r.state.motionPreset) {
      case "scale-top-left":
        return Ee.scaleTopLeft;
      case "scale-top-right":
        return Ee.scaleTopRight;
      case "scale-bottom-left":
        return Ee.scaleBottomLeft;
      case "scale-bottom-right":
        return Ee.scaleBottomRight;
      case "none":
        return "hope-none";
    }
  };
  return i(D, {
    get when() {
      return n();
    },
    get children() {
      return i(tt, {
        get children() {
          return i(De, {
            get name() {
              return u();
            },
            appear: !0,
            onAfterExit: l,
            get children() {
              return i(D, {
                get when() {
                  return r.state.opened;
                },
                get children() {
                  return i(Qn, {
                    onClickOutside: d,
                    get children() {
                      return i(P, p({
                        role: "menu",
                        tabindex: "-1",
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
                          return f();
                        },
                        get __baseStyle() {
                          var g;
                          return (g = t == null ? void 0 : t.baseStyle) == null ? void 0 : g.content;
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
Zu.toString = () => v(Yn);
const Zn = J(), Jn = "hope-menu__group";
function Ju(e) {
  const t = y().Menu, [r, o] = Z(), [a, n] = b(e, ["class", "children"]), s = () => h(a.class, Jn, el()), l = {
    setAriaLabelledBy: o
  };
  return i(Zn.Provider, {
    value: l,
    get children() {
      return i(P, p({
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
      }, n, {
        get children() {
          return a.children;
        }
      }));
    }
  });
}
Ju.toString = () => v(Jn);
function Gu() {
  return Q(Zn);
}
const Gn = "hope-menu__item", eg = "hope-menu__item__icon-wrapper", tg = "hope-menu__item__text", rg = "hope-menu__item__command";
function og(e) {
  const t = ne(), r = y().Menu, o = Wt(), [a, n] = Z(-1);
  let s;
  const [l, c] = b(e, ["ref", "class", "children", "colorScheme", "icon", "iconSpacing", "command", "commandSpacing", "textValue", "disabled", "closeOnSelect", "onSelect", "onClick"]), d = () => ({
    key: t,
    textValue: l.textValue ?? (s == null ? void 0 : s.textContent) ?? "",
    disabled: !!l.disabled,
    closeOnSelect: l.closeOnSelect != null ? !!l.closeOnSelect : o.state.closeOnSelect,
    onSelect: l.onSelect
  }), f = () => `${o.state.itemIdPrefix}-${a()}`, u = () => o.isItemActiveDescendant(a()), g = (B) => {
    B.stopPropagation(), o.onItemClick(a());
  }, S = (B) => {
    if (l.disabled && o.onItemMouseMove(-1), u() || l.disabled) {
      B.preventDefault(), B.stopPropagation();
      return;
    }
    o.onItemMouseMove(a());
  }, x = () => h(l.class, Gn, rl({
    colorScheme: l.colorScheme
  })), z = () => h(eg, ol()), C = () => h(tg, nl()), $ = () => h(rg, al());
  return ae(() => {
    n(o.registerItem(d()));
  }), pe(() => {
    u();
  }), i(P, p({
    role: "menuitem",
    get id() {
      return f();
    },
    get "data-active"() {
      return u() ? "" : void 0;
    },
    get "data-disabled"() {
      return l.disabled ? "" : void 0;
    },
    "data-group": !0,
    get class() {
      return x();
    },
    get __baseStyle() {
      var B;
      return (B = r == null ? void 0 : r.baseStyle) == null ? void 0 : B.item;
    },
    onClick: g,
    onMouseMove: S,
    get onMouseDown() {
      return o.onItemMouseDown;
    }
  }, c, {
    get children() {
      return [i(D, {
        get when() {
          return l.icon;
        },
        get children() {
          return i(A.span, {
            "aria-hidden": "true",
            get class() {
              return z();
            },
            get __baseStyle() {
              var B;
              return (B = r == null ? void 0 : r.baseStyle) == null ? void 0 : B.itemIconWrapper;
            },
            get mr() {
              return l.iconSpacing ?? "0.5rem";
            },
            get children() {
              return l.icon;
            }
          });
        }
      }), i(D, {
        get when() {
          return l.children;
        },
        get children() {
          return i(A.span, {
            get class() {
              return C();
            },
            get __baseStyle() {
              var B;
              return (B = r == null ? void 0 : r.baseStyle) == null ? void 0 : B.itemText;
            },
            get children() {
              return l.children;
            }
          });
        }
      }), i(D, {
        get when() {
          return l.command;
        },
        get children() {
          return i(A.span, {
            get class() {
              return $();
            },
            get __baseStyle() {
              var B;
              return (B = r == null ? void 0 : r.baseStyle) == null ? void 0 : B.itemCommand;
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
og.toString = () => v(Gn);
const ea = "hope-menu__label";
function ng(e) {
  const t = ne(), r = y().Menu, o = Wt(), a = Gu(), [n, s] = b(e, ["class", "id"]), l = () => n.id ?? `${o.state.labelIdPrefix}-${t}`, c = () => h(n.class, ea, tl());
  return ae(() => {
    a == null || a.setAriaLabelledBy(l());
  }), i(P, p({
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
ng.toString = () => v(ea);
const ta = "hope-menu__trigger";
function ag(e) {
  const t = y().Menu, r = Wt(), [o, a] = b(e, ["ref", "class", "onClick", "onKeyDown", "onBlur"]), n = (d) => {
    fe(r.onTriggerClick, o.onClick)(d);
  }, s = (d) => {
    fe(r.onTriggerKeyDown, o.onKeyDown)(d);
  }, l = (d) => {
    fe(r.onTriggerBlur, o.onBlur)(d);
  }, c = () => h(o.class, ta, Ji());
  return i(A.button, p({
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
ag.toString = () => v(ta);
const ra = "hope-notification";
function oa(e) {
  const t = y().Notification, o = q({}, e), [a, n] = b(o, ["class", "status"]), s = () => h(a.class, ra, cl({
    status: a.status
  })), c = {
    status: () => a.status
  };
  return i(na.Provider, {
    value: c,
    get children() {
      return i(P, p({
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
oa.toString = () => v(ra);
const na = J();
function sg() {
  const e = Q(na);
  if (!e)
    throw new Error("[Hope UI]: useNotificationContext must be used within an `<Notification />` component");
  return e;
}
const de = {
  show: "hope-ui:show-notification",
  update: "hope-ui:update-notification",
  hide: "hope-ui:hide-notification",
  clear: "hope-ui:clear-notifications",
  clearQueue: "hope-ui:clear-notifications-queue",
  addToNotificationQueue: "hope-ui:add-to-notification-queue",
  setDebugMode: "hope-ui:set-debug-mode"
};
function nt(e, t) {
  return new CustomEvent(e, { detail: t });
}
function ig(e) {
  window.dispatchEvent(nt(de.show, e));
}
function lg(e) {
  window.dispatchEvent(nt(de.update, e));
}
function cg(e) {
  window.dispatchEvent(nt(de.hide, e));
}
function dg() {
  window.dispatchEvent(nt(de.clear));
}
function ug() {
  window.dispatchEvent(nt(de.clearQueue));
}
function gg(e) {
  window.dispatchEvent(nt(de.addToNotificationQueue, e));
}
function fg(e) {
  window.dispatchEvent(nt(de.setDebugMode, e));
}
const Ap = {
  show: ig,
  update: lg,
  hide: cg,
  clear: dg,
  clearQueue: ug,
  addToNotificationQueue: gg,
  setDebugMode: fg
}, aa = "hope-notification__description";
function Jt(e) {
  const t = y().Notification, [r, o] = b(e, ["class"]), a = () => h(r.class, aa, fl());
  return i(P, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.description;
    }
  }, o));
}
Jt.toString = () => v(aa);
const sa = "hope-notification__icon";
function ia(e) {
  const t = y().Notification, {
    status: r
  } = sg(), a = q({
    boxSize: "$7"
  }, e), [n, s] = b(a, ["as", "class"]), l = () => h(n.class, sa, ul({
    status: r()
  })), c = () => {
    if (n.as)
      return n.as;
    switch (r()) {
      case "success":
        return lo;
      case "info":
        return go;
      case "warning":
        return uo;
      case "danger":
        return co;
    }
  };
  return i(ot, p({
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
ia.toString = () => v(sa);
const la = "hope-notification__title";
function Gt(e) {
  const t = y().Notification, [r, o] = b(e, ["class"]), a = () => h(r.class, la, gl());
  return i(P, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.title;
    }
  }, o));
}
Gt.toString = () => v(la);
function pg(e) {
  var f, u;
  const [t, r] = Z(
    ((f = e.initialValues) == null ? void 0 : f.slice(0, e.limit)) ?? []
  ), [o, a] = Z(((u = e.initialValues) == null ? void 0 : u.slice(e.limit)) ?? []), n = () => e.limit;
  return {
    state: {
      current: t,
      queue: o,
      limit: n
    },
    add: (...g) => {
      const S = [...t(), ...o(), ...g];
      r(S.slice(0, n())), a(S.slice(n()));
    },
    update: (g) => {
      const S = g([...t(), ...o()]);
      r(S.slice(0, n())), a(S.slice(n()));
    },
    clearQueue: () => {
      a([]);
    }
  };
}
const hg = m({
  display: "flex"
}), Ft = "hope-stack";
function hr(e) {
  const [t, r] = b(e, ["class", "direction", "wrap", "spacing"]), o = () => h(t.class, Ft, hg());
  return i(P, p({
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
hr.toString = () => v(Ft);
function bg(e) {
  const [t, r] = b(e, ["spacing"]);
  return i(hr, p({
    direction: "row",
    alignItems: "center",
    get columnGap() {
      return t.spacing;
    }
  }, r));
}
bg.toString = () => v(Ft);
function ca(e) {
  const [t, r] = b(e, ["spacing"]);
  return i(hr, p({
    direction: "column",
    alignItems: "center",
    get rowGap() {
      return t.spacing;
    }
  }, r));
}
ca.toString = () => v(Ft);
const da = J();
function mg() {
  const e = Q(da);
  if (!e)
    throw new Error(
      "[Hope UI]: useNotificationsProviderContext must be used within a `<NotificationsProvider />` component"
    );
  return e;
}
function vg(e) {
  const t = mg(), [r] = b(e, ["render", "id", "status", "title", "description", "duration", "persistent", "closable", "loading", "onMouseEnter", "onMouseLeave", "queuedNotificationUpdates"]);
  let o;
  const a = () => {
    window.clearTimeout(o), o = void 0;
  }, n = (f = !1) => {
    var u;
    !f && (((u = r.queuedNotificationUpdates) == null ? void 0 : u.length) ?? 0) > 0 || o && (t.debugMode() && console.log("NotificationContainer: clearTimeout called.", o, r.id, {
      ...r
    }), a());
  }, s = () => {
    var f;
    a(), t.debugMode() && console.log("NotificationContainer: [_closeNotification]", r.id, {
      ...r
    }), t.hideNotification(r.id), (f = e.onClose) == null || f.call(e, r.id);
  }, l = (f) => {
    var g;
    let u = r.queuedNotificationUpdates;
    if (u && u.length > 0) {
      let S = u[0], x = t.updateNotification(f ?? r.id, S);
      if (!x) {
        t.debugMode() && console.error("NotificationContainer: Failed to update queued notification", f ?? r.id, S, u), s();
        return;
      }
      a(), (g = e.onCloseWithNotificationQueued) == null || g.call(e, S), t.debugMode() && console.log("NotificationContainer: Update queued notifications", x, S, u), c();
    } else
      s();
  }, c = () => {
    var f;
    if (r.persistent && (((f = r.queuedNotificationUpdates) == null ? void 0 : f.length) ?? 0) > 0 || r.duration == null) {
      t.debugMode() && console.log("NotificationContainer: Persistent notification - setTimeout not called.", r.id, {
        ...r
      });
      return;
    }
    o = window.setTimeout(() => l(r.id), r.duration), t.debugMode() && console.log("NotificationContainer: [closeWithDelay] setTimeout called.", o, r.duration, r.id, {
      ...r
    });
  }, d = () => r.status && !r.loading;
  return ae(() => {
    t.debugMode() && console.log("NotificationContainer: onMount", r.id, {
      ...r
    }), c();
  }), ge(() => {
    a();
  }), i(D, {
    get when() {
      return r.render;
    },
    get fallback() {
      return i(oa, {
        get status() {
          return r.status;
        },
        get pr() {
          return r.closable ? "$9" : "$3";
        },
        onMouseEnter: () => n(),
        onMouseLeave: c,
        get children() {
          return [i(D, {
            get when() {
              return d();
            },
            get children() {
              return i(ia, {
                mr: "$2_5"
              });
            }
          }), i(D, {
            get when() {
              return r.loading;
            },
            get children() {
              return i(yo, {
                color: "$primary10",
                boxSize: "$8",
                mr: "$2_5",
                get class() {
                  return dl();
                }
              });
            }
          }), i(Lr, {
            get children() {
              return [i(bt, {
                get when() {
                  return r.title && r.description;
                },
                get children() {
                  return i(ca, {
                    alignItems: "flex-start",
                    spacing: "$1",
                    get children() {
                      return [i(Gt, {
                        get children() {
                          return r.title;
                        }
                      }), i(Jt, {
                        get children() {
                          return r.description;
                        }
                      })];
                    }
                  });
                }
              }), i(bt, {
                get when() {
                  return r.title;
                },
                get children() {
                  return i(Gt, {
                    get children() {
                      return r.title;
                    }
                  });
                }
              }), i(bt, {
                get when() {
                  return r.description;
                },
                get children() {
                  return i(Jt, {
                    get children() {
                      return r.description;
                    }
                  });
                }
              })];
            }
          }), i(D, {
            get when() {
              return r.closable;
            },
            get children() {
              return i(Rt, {
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
      return i(yn, {
        w: "$full",
        justifyContent: "flex-end",
        onMouseEnter: () => n(),
        onMouseLeave: c,
        get children() {
          var f;
          return (f = r.render) == null ? void 0 : f.call(r, {
            id: r.id,
            close: l
          });
        }
      });
    }
  });
}
const Sg = "hope-notification__list", xg = 5e3;
function Ep(e) {
  const [t, r] = Z(e.debugMode ?? !1), [o] = b(e, ["children", "placement", "duration", "persistent", "closable", "limit", "zIndex"]), a = Se(() => pg({
    initialValues: [],
    limit: o.limit ?? 10
  })), n = () => o.placement ?? "top-end", s = () => a().state.current(), l = () => a().state.queue(), c = (L) => {
    const O = L.id ?? `hope-notification-${ne()}`, _ = L.persistent ?? o.persistent ?? !1, k = L.duration ?? o.duration ?? xg, K = L.closable ?? o.closable ?? !0, se = L.queuedNotificationUpdates ?? [];
    return a().update((ee) => {
      const G = {
        ...L,
        queuedNotificationUpdates: se,
        id: O,
        persistent: _,
        duration: k,
        closable: K
      };
      return G.id && ee.some((xe) => xe[0].id === G.id) ? (t() && console.log("[showNotification] Notification with the same id already exists, adding to queue", G.id, {
        ...G
      }), u(G.id, G), ee) : (t() && console.log("[showNotification] Adding to list and showing notification.", {
        ...G
      }), [...ee, te(G)]);
    }), O;
  }, d = (L, O) => {
    let _ = !1;
    return a().update((k) => {
      const K = k.findIndex((xe) => xe[0].id === L);
      if (K === -1)
        return k;
      const se = [...k];
      let ee = se[K][0], G = se[K][1];
      return G("description", O.description ?? ee.description), G("title", O.title ?? ee.title), G("status", O.status ?? ee.status), G("loading", O.loading ?? ee.loading), G("persistent", O.persistent ?? ee.persistent), G("duration", O.duration ?? ee.duration), G("closable", O.closable ?? ee.closable), G("onClose", O.onClose ?? ee.onClose), G("render", O.render ?? ee.render), t() && console.log("[updateNotification] Notification found in list, updating", L, O), _ = !0, se;
    }), _;
  }, f = (L) => {
    let O = !1;
    a().update((_) => _.filter((k) => {
      var K, se;
      return k[0].id === L ? (t() && console.log("[hideNotification] Hiding notification.", L, {
        ...k[0]
      }), k[1]("queuedNotificationUpdates", []), (se = (K = k[0]).onClose) == null || se.call(K, k[0].id), !1) : (!O && t() && (console.warn("[hideNotification] Keeping notification since it was not found in list.", L, {
        ...k[0]
      }), O = !0), !0);
    }));
  }, u = (L, O) => {
    !L || !O || a().update((_) => {
      const k = _.findIndex((ee) => ee[0].id === L);
      if (k === -1)
        return t() && console.log("[addToNotificationQueue] Notification not found in list.", L, O), _;
      let K = _[k], se = K[1];
      return se("queuedNotificationUpdates", [...K[0].queuedNotificationUpdates ?? [], O]), t() && console.log("[addToNotificationQueue] Notification found in list, updating", L, O), [..._];
    });
  }, g = (L) => {
    a().update((O) => {
      var se;
      const _ = O.findIndex((ee) => ee[0].id === L);
      if (_ === -1)
        return t() && console.log("[removeNotificationFromQueue] Notification not found in list.", L), O;
      let k = O[_], K = k[1];
      return K("queuedNotificationUpdates", (se = k[0].queuedNotificationUpdates) == null ? void 0 : se.slice(1)), t() && console.log("[removeNotificationFromQueue] Queued Notification found in list, removing...", L), [...O];
    });
  }, S = () => a().update(() => []), x = () => a().clearQueue(), z = () => h(Sg, ll({
    placement: n()
  })), C = () => {
    switch (n()) {
      case "top-start":
        return we.slideInLeft;
      case "top":
        return we.slideInTop;
      case "top-end":
        return we.slideInRight;
      case "bottom-start":
        return we.slideInLeft;
      case "bottom":
        return we.slideInBottom;
      case "bottom-end":
        return we.slideInRight;
      default:
        return we.slideInRight;
    }
  }, $ = {
    //@ts-ignore
    notifications: s,
    //@ts-ignore
    queue: l,
    showNotification: c,
    updateNotification: d,
    hideNotification: f,
    clear: S,
    clearQueue: x,
    addToNotificationQueue: u,
    debugMode: t
  }, B = (L) => c(L.detail), w = (L) => d(L.detail.id, L.detail), E = (L) => f(L.detail), M = (L) => u(L.detail.id, L.detail), N = (L) => {
    r(L.detail ?? !1);
  };
  return ae(() => {
    window.addEventListener(de.show, B), window.addEventListener(de.update, w), window.addEventListener(de.hide, E), window.addEventListener(de.clear, S), window.addEventListener(de.clearQueue, x), window.addEventListener(de.addToNotificationQueue, M), window.addEventListener(de.setDebugMode, N);
  }), ge(() => {
    window.removeEventListener(de.show, B), window.removeEventListener(de.update, w), window.removeEventListener(de.hide, E), window.removeEventListener(de.clear, S), window.removeEventListener(de.clearQueue, x), window.removeEventListener(de.addToNotificationQueue, M), window.removeEventListener(de.setDebugMode, N);
  }), i(da.Provider, {
    value: $,
    get children() {
      return [i(tt, {
        get children() {
          return i(P, {
            get class() {
              return z();
            },
            get zIndex() {
              return o.zIndex;
            },
            get children() {
              return i(Ms, {
                get name() {
                  return C();
                },
                get children() {
                  return i(Dr, {
                    get each() {
                      return $.notifications();
                    },
                    children: (L) => (
                      // @ts-ignore
                      i(vg, p(() => L[0], {
                        onCloseWithNotificationQueued: (O) => {
                          g(O.id);
                        },
                        onClose: (O) => {
                        }
                      }))
                    )
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
const Cg = (e) => e.hasAttribute("tabindex");
function ua(e) {
  return e.parentElement && ua(e.parentElement) ? !0 : e.hidden;
}
function yg(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function $g(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function wg(e) {
  if (!xc(e) || ua(e) || yg(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const o = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in o ? o[t]() : $g(e) ? !0 : Cg(e);
}
function Mp(e) {
  const t = `hope-popover-${ne()}`, r = y().Popover, [o, a] = te({
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
      var I, W;
      return e.placement ?? ((W = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : W.placement) ?? "bottom";
    },
    get offset() {
      var I, W;
      return e.offset ?? ((W = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : W.offset) ?? 8;
    },
    get arrowPadding() {
      var I, W;
      return e.arrowPadding ?? ((W = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : W.arrowPadding) ?? 8;
    },
    get openDelay() {
      var I, W;
      return e.openDelay ?? ((W = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : W.openDelay) ?? 0;
    },
    get closeDelay() {
      var I, W;
      return e.closeDelay ?? ((W = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : W.closeDelay) ?? 100;
    },
    get motionPreset() {
      var I, W;
      return e.motionPreset ?? ((W = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : W.motionPreset) ?? "scale";
    },
    get closeOnBlur() {
      var I, W;
      return e.closeOnBlur ?? ((W = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : W.closeOnBlur) ?? !0;
    },
    get closeOnEsc() {
      var I, W;
      return e.closeOnEsc ?? ((W = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : W.closeOnEsc) ?? !0;
    },
    get trapFocus() {
      var I, W;
      return e.trapFocus ?? ((W = (I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.root) == null ? void 0 : W.trapFocus) ?? !1;
    }
  });
  let n, s, l, c, d, f, u, g;
  const S = () => `[id='${o.contentId}']`, x = (I) => {
    n = I;
  }, z = (I) => {
    s = I;
  }, C = (I) => {
    l = I;
  }, $ = (I) => {
    c = I;
  };
  async function B() {
    var ie, me, mr;
    const I = n ?? s;
    if (!I || !l)
      return;
    const W = [Bt(o.offset)];
    o.inline && W.push(Ls()), W.push(Lt()), W.push(Dt({
      padding: e.shiftPadding
    })), c && W.push(Ds({
      element: c,
      padding: o.arrowPadding
    })), W.push(Hs());
    const {
      x: be,
      y: U,
      placement: Re,
      middlewareData: gt
    } = await or(I, l, {
      placement: o.initialPlacement,
      middleware: W
    });
    if (Re !== o.finalPlacement && a("finalPlacement", Re), !l)
      return;
    const St = (ie = gt.hide) == null ? void 0 : ie.referenceHidden;
    if (Object.assign(l.style, {
      left: `${Math.round(be)}px`,
      top: `${Math.round(U)}px`,
      visibility: St ? "hidden" : "visible"
    }), !c)
      return;
    const xt = (me = gt.arrow) == null ? void 0 : me.x, Ct = (mr = gt.arrow) == null ? void 0 : mr.y, T = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right"
    }[Re.split("-")[0]], F = `${(Math.round(c.clientWidth / 2) + 1) * -1}px`;
    Object.assign(c.style, {
      left: xt != null ? `${Math.round(xt)}px` : "",
      top: Ct != null ? `${Math.round(Ct)}px` : "",
      right: "",
      bottom: "",
      [T]: F
    });
  }
  const w = () => {
    var I;
    o.isControlled || a("_opened", !0), (I = e.onOpen) == null || I.call(e), B();
  }, E = () => {
    var I;
    o.isControlled || a("_opened", !1), (I = e.onClose) == null || I.call(e);
  }, M = () => {
    !o.isHovering && E();
  }, N = () => {
    f = window.setTimeout(w, o.openDelay);
  }, L = () => {
    f && window.clearTimeout(f), u = window.setTimeout(E, o.closeDelay);
  }, O = () => {
    if (tr)
      return;
    const I = n ?? s;
    !I || !l || (g = rr(I, l, B));
  }, _ = () => {
    if (!o.initialFocus) {
      l == null || l.focus();
      return;
    }
    const I = document.querySelector(o.initialFocus);
    I && wg(I) && (I == null || I.focus());
  }, k = (I) => {
    const W = Tt(I), be = !Ge(l, W);
    o.opened && o.closeOnBlur && be && L();
  }, K = () => {
    ze(!1), f && window.clearTimeout(f), u = window.setTimeout(M, o.closeDelay);
  }, se = (I) => {
    const W = Tt(I), be = Ge(l, W), U = Ge(s, W), Re = !be && !U;
    o.opened && o.closeOnBlur && Re && L();
  }, ee = K, G = () => {
    O(), o.trapFocus && l ? (d = Hr(l, {
      initialFocus: o.initialFocus,
      fallbackFocus: S(),
      allowOutsideClick: !1
    }), d.activate()) : _();
  }, xe = () => {
    d == null || d.deactivate(), g == null || g();
  }, ze = (I) => a("isHovering", I), Ae = (I) => a("headerMounted", I), H = (I) => a("bodyMounted", I), Y = () => o.opened;
  ge(() => {
    window.clearTimeout(f), window.clearTimeout(u);
  });
  const X = {
    state: o,
    assignAnchorRef: x,
    assignTriggerRef: z,
    assignPopoverRef: C,
    assignArrowRef: $,
    openWithDelay: N,
    closeWithDelay: L,
    onTriggerBlur: k,
    onTriggerMouseLeave: K,
    onPopoverFocusOut: se,
    onPopoverMouseLeave: ee,
    updatePopoverPosition: B,
    afterPopoverOpen: G,
    afterPopoverClose: xe,
    setIsHovering: ze,
    setHeaderMounted: Ae,
    setBodyMounted: H
  };
  return i(ga.Provider, {
    value: X,
    get children() {
      return i(D, {
        get when() {
          return mt(e);
        },
        get fallback() {
          return e.children;
        },
        get children() {
          var I;
          return (I = e.children) == null ? void 0 : I.call(e, {
            opened: Y,
            onClose: L
          });
        }
      });
    }
  });
}
const ga = J();
function at() {
  const e = Q(ga);
  if (!e)
    throw new Error("[Hope UI]: usePopoverContext must be used within a `<Popover />` component");
  return e;
}
function Op(e) {
  at();
  const [t, r] = b(e, ["ref", "as"]);
  return i(ht, p({
    get component() {
      return t.as;
    }
  }, r));
}
const fa = "hope-popover__arrow";
function _g(e) {
  const t = y().Popover, r = at(), [o, a] = b(e, ["class"]), n = Se(() => r.state.finalPlacement.split("-")[0]), s = () => h(o.class, fa, xl({
    popoverPlacement: n()
  }));
  return i(P, p({
    get class() {
      return s();
    },
    get __baseStyle() {
      var l;
      return (l = t == null ? void 0 : t.baseStyle) == null ? void 0 : l.arrow;
    }
  }, a));
}
_g.toString = () => v(fa);
const pa = "hope-popover__body";
function Ig(e) {
  const t = y().Popover, r = at(), [o, a] = b(e, ["class"]), n = () => h(o.class, pa, ml());
  return ae(() => r.setBodyMounted(!0)), ge(() => r.setBodyMounted(!1)), i(P, p({
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
Ig.toString = () => v(pa);
const ha = "hope-popover__close-button";
function kg(e) {
  var d, f, u, g, S, x;
  const t = y().Popover, r = at(), o = {
    "aria-label": ((f = (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.closeButton) == null ? void 0 : f["aria-label"]) ?? "Close popover",
    size: ((g = (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.closeButton) == null ? void 0 : g.size) ?? "sm",
    icon: (x = (S = t == null ? void 0 : t.defaultProps) == null ? void 0 : S.closeButton) == null ? void 0 : x.icon
  }, a = q(o, e), [n, s] = b(a, ["class", "onClick"]), l = () => h(n.class, ha, Sl());
  return i(Rt, p({
    get class() {
      return l();
    },
    get __baseStyle() {
      var z;
      return (z = t == null ? void 0 : t.baseStyle) == null ? void 0 : z.closeButton;
    },
    onClick: (z) => {
      fe(n.onClick, (C) => {
        C.stopPropagation(), r.closeWithDelay();
      })(z);
    }
  }, s));
}
kg.toString = () => v(ha);
const ba = "hope-popover__content";
function Pg(e) {
  const t = y().Popover, r = at(), [o, a] = Z(!1), [n, s] = b(e, ["ref", "class", "onKeyDown", "onFocusOut", "onMouseEnter", "onMouseLeave"]), l = (C) => {
    r.state.closeOnEsc && C.key === "Escape" && r.closeWithDelay();
  }, c = (C) => {
    fe(n.onKeyDown, l)(C);
  }, d = (C) => {
    fe(n.onFocusOut, r.onPopoverFocusOut)(C);
  }, f = (C) => {
    ue(n.onMouseEnter, C), r.setIsHovering(!0);
  }, u = (C) => {
    ue(n.onMouseLeave, C), r.onPopoverMouseLeave();
  }, g = () => {
    tr || (document.addEventListener("keydown", l), r.afterPopoverOpen());
  }, S = () => {
    document.removeEventListener("keydown", l), r.afterPopoverClose(), a(!1);
  }, x = () => h(n.class, ba, hl()), z = () => {
    switch (r.state.motionPreset) {
      case "scale":
        return Ye.scale;
      case "none":
        return "hope-none";
    }
  };
  return pe(() => {
    r.state.opened ? a(!0) : r.state.motionPreset === "none" && a(!1);
  }), i(D, {
    get when() {
      return o();
    },
    get children() {
      return i(tt, {
        get children() {
          return i(De, {
            get name() {
              return z();
            },
            appear: !0,
            get onBeforeEnter() {
              return r.updatePopoverPosition;
            },
            onAfterEnter: g,
            onAfterExit: S,
            get children() {
              return i(D, {
                get when() {
                  return r.state.opened;
                },
                get children() {
                  return i(A.section, p({
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
                      return x();
                    },
                    get __baseStyle() {
                      var C;
                      return (C = t == null ? void 0 : t.baseStyle) == null ? void 0 : C.content;
                    },
                    onKeyDown: c,
                    onFocusOut: d,
                    get onMouseEnter() {
                      return r.state.triggerOnHover ? f : void 0;
                    },
                    get onMouseLeave() {
                      return r.state.triggerOnHover ? u : void 0;
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
Pg.toString = () => v(ba);
const ma = "hope-popover__footer";
function Tg(e) {
  const t = y().Popover, [r, o] = b(e, ["class"]), a = () => h(r.class, ma, vl());
  return i(P, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.footer;
    }
  }, o));
}
Tg.toString = () => v(ma);
const va = "hope-popover__header";
function zg(e) {
  const t = y().Popover, r = at(), [o, a] = b(e, ["class"]), n = () => h(o.class, va, bl());
  return ae(() => r.setHeaderMounted(!0)), ge(() => r.setHeaderMounted(!1)), i(P, p({
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
zg.toString = () => v(va);
function Rp(e) {
  const t = at(), [r, o] = b(e, ["ref", "onClick", "onKeyDown", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave"]), a = (f) => {
    ue(r.onClick, f), t.state.opened ? t.closeWithDelay() : t.openWithDelay();
  }, n = (f) => {
    ue(r.onKeyDown, f), f.key === "Escape" && t.closeWithDelay();
  }, s = (f) => {
    ue(r.onFocus, f), t.openWithDelay();
  }, l = (f) => {
    fe(r.onBlur, t.onTriggerBlur)(f);
  }, c = (f) => {
    ue(r.onMouseEnter, f), t.setIsHovering(!0), t.openWithDelay();
  }, d = (f) => {
    ue(r.onMouseLeave, f), t.onTriggerMouseLeave();
  };
  return i(A.button, p({
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
const Bg = ct({
  "0%": { left: "-40%" },
  "100%": { left: "100%" }
}), Lg = ct({
  from: { backgroundPosition: "1rem 0" },
  to: { backgroundPosition: "0 0" }
}), Dg = m({
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
}), Hg = m({
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
        animation: `${Bg} 1200ms ease infinite normal none running`
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
        animation: `${Lg} 750ms linear infinite`
      }
    }
  ]
}), Ag = m({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  color: "$neutral12",
  lineHeight: "$none",
  fontWeight: "$bold",
  textAlign: "center",
  transform: "translate(-50%, -50%)"
}), Sa = J(), xa = "hope-progress";
function Eg(e) {
  var f, u, g, S;
  const t = y().Progress, [r] = te({
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
      return jr(this.value, this.min, this.max);
    },
    get indeterminate() {
      return e.indeterminate ?? !1;
    },
    get ariaValueText() {
      if (!this.indeterminate)
        return Te(this.getValueText) ? this.getValueText(this.value, this.percent) : e.valueText ?? `${this.percent}%`;
    },
    get getValueText() {
      return e.getValueText;
    }
  }), o = {
    size: ((u = (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.root) == null ? void 0 : u.size) ?? "md",
    trackColor: ((S = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.root) == null ? void 0 : S.trackColor) ?? "$neutral4"
  }, a = q(o, e), [n, s, l] = b(a, ["class", "size", "trackColor"], ["min", "max", "value", "indeterminate", "valueText", "getValueText"]), c = () => h(n.class, xa, Dg({
    size: n.size
  })), d = {
    state: r
  };
  return i(Sa.Provider, {
    value: d,
    get children() {
      return i(P, p({
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
        },
        get backgroundColor() {
          return n.trackColor;
        }
      }, l));
    }
  });
}
Eg.toString = () => v(xa);
function Ca() {
  const e = Q(Sa);
  if (!e)
    throw new Error("[Hope UI]: useProgressContext must be used within a `<Progress />` component");
  return e;
}
const ya = "hope-progress__indicator";
function Mg(e) {
  const t = y().Progress, r = Ca(), a = q({
    color: "$primary9"
  }, e), [n, s] = b(a, ["class", "color", "striped", "animated"]), l = () => r.state.indeterminate ? {
    backgroundImage: `linear-gradient(to right, transparent 0%, ${n.color} 50%, transparent 100%)`
  } : {
    backgroundColor: n.color
  }, c = () => h(n.class, ya, Hg({
    striped: n.striped,
    animated: n.animated,
    indeterminate: r.state.indeterminate === !0,
    // ensure a boolean is passed so compound variants works correctly
    css: {
      ...l(),
      width: `${r.state.percent}%`
    }
  }));
  return i(P, p({
    get class() {
      return c();
    },
    get __baseStyle() {
      var d;
      return (d = t == null ? void 0 : t.baseStyle) == null ? void 0 : d.indicator;
    }
  }, s));
}
Mg.toString = () => v(ya);
const $a = "hope-progress__label";
function Og(e) {
  const t = y().Progress, r = Ca(), [o, a] = b(e, ["class", "children"]), n = () => h(o.class, $a, Ag());
  return i(P, p({
    get class() {
      return n();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.label;
    }
  }, a, {
    get children() {
      return i(D, {
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
Og.toString = () => v($a);
const Rg = m(ur, {
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
}), Wg = m(gr), Fg = m(fr, {
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
}), wa = "hope-radio-group";
function Ng(e) {
  const t = `hope-radio-group-${ne()}--radio`, r = y().Radio, [o, a] = te({
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
      var u, g;
      return e.variant ?? ((g = (u = r == null ? void 0 : r.defaultProps) == null ? void 0 : u.group) == null ? void 0 : g.variant);
    },
    get colorScheme() {
      var u, g;
      return e.colorScheme ?? ((g = (u = r == null ? void 0 : r.defaultProps) == null ? void 0 : u.group) == null ? void 0 : g.colorScheme);
    },
    get size() {
      var u, g;
      return e.size ?? ((g = (u = r == null ? void 0 : r.defaultProps) == null ? void 0 : u.group) == null ? void 0 : g.size);
    }
  }), [n, s, l] = b(e, ["class", "onChange"], ["value", "defaultValue", "name", "required", "disabled", "readOnly", "invalid"]), c = (u) => {
    var S;
    const g = u.target.value;
    a("_value", g), (S = n.onChange) == null || S.call(n, String(g));
  }, d = () => h(n.class, wa), f = {
    state: o,
    onChange: c
  };
  return i(_a.Provider, {
    value: f,
    get children() {
      return i(P, p({
        role: "radiogroup",
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
Ng.toString = () => v(wa);
const _a = J();
function Vg() {
  return Q(_a);
}
var qg = ["<input", ' type="radio"', "", "", "", ">"];
const Ia = "hope-radio", jg = "hope-radio__input", Kg = "hope-radio__control", Xg = "hope-radio__label";
function Ug(e) {
  const t = `hope-radio-${ne()}`, r = y().Radio, o = dt(), a = Vg(), n = ut(e), [s, l] = te({
    // eslint-disable-next-line solid/reactivity
    _checked: !!e.defaultChecked,
    isFocused: !1,
    get isControlled() {
      return e.checked !== void 0;
    },
    get checked() {
      if (a) {
        const w = a.state.value;
        return w != null ? String(e.value) === String(w) : !1;
      }
      return this.isControlled ? !!e.checked : this._checked;
    },
    get variant() {
      var w, E, M;
      return e.variant ?? ((w = a == null ? void 0 : a.state) == null ? void 0 : w.variant) ?? ((M = (E = r == null ? void 0 : r.defaultProps) == null ? void 0 : E.root) == null ? void 0 : M.variant) ?? "outline";
    },
    get colorScheme() {
      var w, E, M;
      return e.colorScheme ?? ((w = a == null ? void 0 : a.state) == null ? void 0 : w.colorScheme) ?? ((M = (E = r == null ? void 0 : r.defaultProps) == null ? void 0 : E.root) == null ? void 0 : M.colorScheme) ?? "primary";
    },
    get size() {
      var w, E, M;
      return e.size ?? ((w = a == null ? void 0 : a.state) == null ? void 0 : w.size) ?? ((M = (E = r == null ? void 0 : r.defaultProps) == null ? void 0 : E.root) == null ? void 0 : M.size) ?? "md";
    },
    get labelPlacement() {
      var w, E, M;
      return e.labelPlacement ?? ((w = a == null ? void 0 : a.state) == null ? void 0 : w.labelPlacement) ?? ((M = (E = r == null ? void 0 : r.defaultProps) == null ? void 0 : E.root) == null ? void 0 : M.labelPlacement) ?? "end";
    },
    get id() {
      return o && !a ? n.id : e.id ?? t;
    },
    get name() {
      return e.name ?? (a == null ? void 0 : a.state.name);
    },
    get value() {
      return e.value;
    },
    get required() {
      return n.required ?? (a == null ? void 0 : a.state.required);
    },
    get disabled() {
      return n.disabled ?? (a == null ? void 0 : a.state.disabled);
    },
    get invalid() {
      return n.invalid ?? (a == null ? void 0 : a.state.invalid);
    },
    get readOnly() {
      return n.readOnly ?? (a == null ? void 0 : a.state.readOnly);
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
  }), [c, d, f] = b(e, ["class", "children", "ref", "tabIndex", "onChange"], ["variant", "colorScheme", "size", "labelPlacement", "id", "name", "value", "checked", "defaultChecked", "required", "disabled", "invalid", "readOnly", "onFocus", "onBlur"]), u = (w) => {
    if (s.readOnly || s.disabled) {
      w.preventDefault();
      return;
    }
    if (!s.isControlled) {
      const E = w.target;
      l("_checked", E.checked);
    }
    fe(a == null ? void 0 : a.onChange, c.onChange)(w);
  }, g = (w) => {
    l("isFocused", !0), ue(n.onFocus, w);
  }, S = (w) => {
    l("isFocused", !1), ue(n.onBlur, w);
  }, x = () => h(c.class, Ia, Rg({
    size: s.size,
    labelPlacement: s.labelPlacement
  })), z = () => h(jg, Et()), C = () => h(Kg, Fg({
    variant: s.variant,
    colorScheme: s.colorScheme,
    size: s.size
  })), $ = () => h(Xg, Wg()), B = {
    state: s,
    onChange: u,
    onFocus: g,
    onBlur: S
  };
  return i(ka.Provider, {
    value: B,
    get children() {
      return i(A.label, p({
        get class() {
          return x();
        },
        get __baseStyle() {
          var w;
          return (w = r == null ? void 0 : r.baseStyle) == null ? void 0 : w.root;
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
          return [re(qg, oe(), R("class", V(z(), !0), !1) + R("tabindex", V(c.tabIndex, !0), !1) + R("value", V(s.value, !0), !1) + R("id", V(s.id, !0), !1) + R("name", V(s.name, !0), !1), R("checked", s.checked, !0), R("required", s.required, !0), R("disabled", s.disabled, !0) + R("readonly", V(s.readOnly, !0), !1) + R("aria-required", V(s["aria-required"], !0), !1) + R("aria-disabled", V(s["aria-disabled"], !0), !1) + R("aria-invalid", V(s["aria-invalid"], !0), !1) + R("aria-readonly", V(s["aria-readonly"], !0), !1) + R("aria-label", V(s["aria-label"], !0), !1) + R("aria-labelledby", V(s["aria-labelledby"], !0), !1) + R("aria-describedby", V(s["aria-describedby"], !0), !1)), i(A.span, p({
            "aria-hidden": !0,
            get class() {
              return C();
            },
            get __baseStyle() {
              var w;
              return (w = r == null ? void 0 : r.baseStyle) == null ? void 0 : w.control;
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
              return $();
            },
            get __baseStyle() {
              var w;
              return (w = r == null ? void 0 : r.baseStyle) == null ? void 0 : w.label;
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
              return i(D, {
                get when() {
                  return mt(c);
                },
                get fallback() {
                  return c.children;
                },
                get children() {
                  var w;
                  return (w = c.children) == null ? void 0 : w.call(c, {
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
Ug.toString = () => v(Ia);
const ka = J();
function Wp() {
  const e = Q(ka);
  if (!e)
    throw new Error("[Hope UI]: useRadioContext must be used within a `<Radio />` component");
  return e;
}
var Le = /* @__PURE__ */ ((e) => (e[e.Close = 0] = "Close", e[e.SelectAndClose = 1] = "SelectAndClose", e[e.First = 2] = "First", e[e.Last = 3] = "Last", e[e.Next = 4] = "Next", e[e.Open = 5] = "Open", e[e.Previous = 6] = "Previous", e[e.Select = 7] = "Select", e[e.Type = 8] = "Type", e))(Le || {});
function Tr(e = [], t, r = []) {
  return e.filter((o) => o.disabled ? !1 : o.textValue.toLowerCase().indexOf(t.toLowerCase()) === 0 && r.indexOf(o.textValue) < 0);
}
function Qg(e, t, r = 0) {
  const o = [...e.slice(r), ...e.slice(0, r)], a = Tr(o, t)[0], n = (s) => s.every((l) => l === s[0]);
  if (a)
    return e.indexOf(a);
  if (n(t.split(""))) {
    const s = Tr(o, t[0]);
    return e.indexOf(s[0]);
  } else
    return -1;
}
function Yg(e, t) {
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
function zr(e, t, r) {
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
function Zg(e) {
  const { currentIndex: t, maxIndex: r, initialAction: o, isOptionDisabled: a } = e;
  let n = zr(t, r, o);
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
    n = zr(n, r, s);
  }
  return n;
}
function _t(e, t) {
  return String(e.value) === String(t.value);
}
function Jg(e) {
  const t = `hope-select-${ne()}`, r = y().Select, o = ut(e), [a, n] = Z(!1), [s, l] = Z([]), [c, d] = te({
    get isControlled() {
      return e.value !== void 0;
    },
    get value() {
      return this.isControlled ? e.value : this.multiple ? this.selectedOptions.map((T) => T.value) : this.selectedOptions[0].value ?? void 0;
    },
    get multiple() {
      return e.multiple;
    },
    get baseId() {
      return e.id ?? o.id ?? t;
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
      return e.disabled ?? o.disabled;
    },
    get invalid() {
      return e.invalid ?? o.invalid;
    },
    get variant() {
      var T, F;
      return e.variant ?? ((F = (T = r == null ? void 0 : r.defaultProps) == null ? void 0 : T.root) == null ? void 0 : F.variant) ?? "outline";
    },
    get size() {
      var T, F;
      return e.size ?? ((F = (T = r == null ? void 0 : r.defaultProps) == null ? void 0 : T.root) == null ? void 0 : F.size) ?? "md";
    },
    get motionPreset() {
      var T, F;
      return e.motionPreset ?? ((F = (T = r == null ? void 0 : r.defaultProps) == null ? void 0 : T.root) == null ? void 0 : F.motionPreset) ?? "fade-in-top";
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
  let f, u, g, S;
  const x = async () => {
    var F, ie;
    if (!f || !u)
      return;
    const T = await or(f, u, {
      placement: "bottom",
      middleware: [Bt(e.offset ?? ((ie = (F = r == null ? void 0 : r.defaultProps) == null ? void 0 : F.root) == null ? void 0 : ie.offset) ?? 5), Lt(), Dt(), As({
        apply(me) {
          u && Object.assign(u.style, {
            width: `${me.rects.reference.width}px`
          });
        }
      })]
    });
    u && Object.assign(u.style, {
      left: `${Math.round(T.x)}px`,
      top: `${Math.round(T.y)}px`
    });
  }, z = (T) => {
    c.searchTimeoutId && window.clearTimeout(c.searchTimeoutId);
    const F = window.setTimeout(() => {
      d("searchString", "");
    }, 500);
    return d("searchTimeoutId", F), d("searchString", (ie) => ie += T), c.searchString;
  }, C = () => {
    f == null || f.focus();
  }, $ = () => c.isControlled ? e.value == null ? [] : it(e.value) ? e.value : [e.value] : e.defaultValue == null ? [] : it(e.defaultValue) ? e.defaultValue : [e.defaultValue], B = () => {
    if (a())
      return;
    const T = $().map((F) => c.options.find((ie) => ie.value === F)).filter(Boolean);
    d("selectedOptions", (F) => [...F, ...T]), n(!0);
  }, w = (T) => {
    d("activeIndex", T);
  }, E = (T) => c.selectedOptions.length <= 0 ? !1 : c.multiple ? !!c.selectedOptions.find((F) => _t(T, F)) : _t(T, c.selectedOptions[0]), M = (T) => {
    d("selectedOptions", (F) => F.filter((ie) => !_t(T, ie)));
  }, N = (T) => {
    const F = c.options[T];
    c.multiple ? E(F) ? M(F) : d("selectedOptions", (ie) => [...ie, F]) : d("selectedOptions", [F]);
  }, L = () => c.multiple ? c.selectedOptions.map((T) => T.value) : c.selectedOptions[0].value ?? void 0, O = (T) => {
    var F;
    w(T), N(T), (F = e.onChange) == null || F.call(e, L());
  }, _ = (T) => {
    var F;
    M(T), (F = e.onChange) == null || F.call(e, L()), C();
  }, k = (T) => c.options[T].disabled, K = (T) => {
    if (!Ge(f, Tt(T))) {
      if (c.ignoreBlur) {
        d("ignoreBlur", !1);
        return;
      }
      c.opened && X(!1, !1);
    }
  }, se = () => {
    o.readOnly || X(!c.opened, !1);
  }, ee = (T) => {
    if (o.readOnly)
      return;
    const {
      key: F
    } = T;
    if (c.hasSelectedOptions && c.multiple && F === "Backspace") {
      _(c.selectedOptions[c.selectedOptions.length - 1]);
      return;
    }
    const ie = c.options.length - 1, me = Yg(T, c.opened);
    switch (me) {
      case Le.Last:
      case Le.First:
        X(!0);
      case Le.Next:
      case Le.Previous:
        return T.preventDefault(), w(Zg({
          currentIndex: c.activeIndex,
          maxIndex: ie,
          initialAction: me,
          isOptionDisabled: k
        }));
      case Le.SelectAndClose:
        return T.preventDefault(), O(c.activeIndex), c.multiple ? void 0 : X(!1);
      case Le.Close:
        return T.preventDefault(), X(!1);
      case Le.Type:
        return G(F);
      case Le.Open:
        return T.preventDefault(), X(!0);
    }
  }, G = (T) => {
    if (o.readOnly)
      return;
    X(!0);
    const F = z(T), ie = Qg(c.options, F, c.activeIndex + 1);
    ie >= 0 ? w(ie) : (window.clearTimeout(c.searchTimeoutId), d("searchString", ""));
  }, xe = (T) => {
    if (c.options[T].disabled) {
      C();
      return;
    }
    O(T), c.multiple ? C() : X(!1);
  }, ze = (T) => {
    c.activeIndex !== T && w(T);
  }, Ae = () => {
    d("ignoreBlur", !0);
  }, H = () => {
    c.selectedOptions.length > 0 ? d("activeIndex", c.options.findIndex((T) => E(T))) : d("activeIndex", 0);
  }, Y = () => {
    c.opened ? (x(), f && u && (S = rr(f, u, x))) : S == null || S();
  }, X = (T, F = !0) => {
    c.opened !== T && (d("opened", T), H(), Y(), F && C());
  }, I = () => {
    w(-1);
  }, W = (T) => {
    Ge(f, T) || X(!1, !1);
  }, be = (T) => T === c.activeIndex, U = (T) => {
    f = T;
  }, Re = (T) => {
    u = T;
  }, gt = (T) => {
    g = T;
  }, St = (T) => {
    g && Yr(g) && Zr(T, g);
  }, xt = (T) => {
    const F = c.options.findIndex((me) => _t(me, T));
    return F != -1 ? F : l((me) => [...me, T]).length - 1;
  };
  pe(st(() => c.options, () => B(), {
    defer: !0
  })), pe(st(() => e.value, () => {
    if (!c.isControlled)
      return;
    const F = (it(e.value) ? e.value : [e.value]).map((ie) => c.options.find((me) => me.value === ie)).filter(Boolean);
    d("selectedOptions", F);
  }, {
    defer: !0
  })), pe(st(() => c.opened, (T) => {
    T && setTimeout(() => {
      const F = g == null ? void 0 : g.querySelector("[role='option'][aria-selected='true']");
      F && St(F);
    }, 0);
  }));
  const Ct = {
    state: c,
    isOptionSelected: E,
    unselectOption: _,
    isOptionActiveDescendant: be,
    formControlProps: o,
    assignTriggerRef: U,
    assignContentRef: Re,
    assignListboxRef: gt,
    registerOption: xt,
    scrollToOption: St,
    onContentClickOutside: W,
    onTriggerBlur: K,
    onTriggerClick: se,
    onTriggerKeyDown: ee,
    onOptionClick: xe,
    onOptionMouseMove: ze,
    onOptionMouseDown: Ae,
    onListboxMouseLeave: I
  };
  return i(Pa.Provider, {
    value: Ct,
    get children() {
      return e.children;
    }
  });
}
const Pa = J();
function He() {
  const e = Q(Pa);
  if (!e)
    throw new Error("[Hope UI]: useSelectContext must be used within a `<Select />` component");
  return e;
}
const Ta = "hope-select__content";
function za(e) {
  let t = ne();
  const r = y().Select, o = He(), [a, n] = b(e, ["ref", "class", "children"]), [s, l] = Z(!1);
  pe(st(() => o.state.opened, () => {
    o.state.opened ? l(!0) : o.state.motionPreset === "none" && l(!1);
  }));
  const c = () => l(!1), d = () => h(a.class, Ta, Ll()), f = rt(() => a.children), u = (x) => {
    x && (o.assignContentRef(x), Te(a.ref) ? a.ref(x) : a.ref = x);
  };
  pe(() => {
    s() && u(document.querySelector(`[unique-id="${t}"]`));
  });
  const g = (x) => {
    o.onContentClickOutside(x.target);
  }, S = () => {
    switch (o.state.motionPreset) {
      case "fade-in-top":
        return Ze.fadeInTop;
      case "none":
        return "hope-none";
    }
  };
  return i(D, {
    get when() {
      return s();
    },
    get children() {
      return i(tt, {
        get children() {
          return i(De, {
            get name() {
              return S();
            },
            appear: !0,
            onAfterExit: c,
            get children() {
              return i(D, {
                get when() {
                  return o.state.opened;
                },
                get children() {
                  return i(Qn, {
                    onClickOutside: g,
                    get children() {
                      return i(P, p({
                        get class() {
                          return d();
                        },
                        get __baseStyle() {
                          var x;
                          return (x = r == null ? void 0 : r.baseStyle) == null ? void 0 : x.content;
                        },
                        "unique-id": t
                      }, n, {
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
za.toString = () => v(Ta);
var Gg = ["<path", ' d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>'];
const ef = $e({
  viewBox: "0 0 15 15",
  path: () => re(Gg, oe())
}), Ba = "hope-select__icon";
function La(e) {
  const t = y().Select, r = He(), [o, a] = b(e, ["class", "rotateOnOpen"]), n = () => h(o.class, Ba, Bl(o.rotateOnOpen ? {
    opened: r.state.opened
  } : void 0));
  return i(ef, p({
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
La.toString = () => v(Ba);
const Da = J(), Ha = "hope-select__optgroup";
function tf(e) {
  const t = y().Select, [r, o] = Z(), [a, n] = b(e, ["class", "children"]), s = () => h(a.class, Ha, Hl()), l = {
    setAriaLabelledBy: o
  };
  return i(Da.Provider, {
    value: l,
    get children() {
      return i(P, p({
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
      }, n, {
        get children() {
          return a.children;
        }
      }));
    }
  });
}
tf.toString = () => v(Ha);
function rf() {
  return Q(Da);
}
const Aa = "hope-select__label";
function of(e) {
  const t = ne(), r = y().Select, o = He(), a = rf(), [n, s] = b(e, ["class", "id"]), l = () => n.id ?? `${o.state.labelIdPrefix}-${t}`, c = () => h(n.class, Aa, Al());
  return ae(() => {
    a == null || a.setAriaLabelledBy(l());
  }), i(P, p({
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
of.toString = () => v(Aa);
const Ea = "hope-select__listbox";
function Ma(e) {
  const t = y().Select, r = He(), [o, a] = b(e, ["ref", "class"]), n = () => h(o.class, Ea, Dl());
  return i(P, p({
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
Ma.toString = () => v(Ea);
const Oa = J(), Ra = "hope-select__option";
function Wa(e) {
  const t = y().Select, r = He(), [o, a] = Z(-1);
  let n;
  const [s, l] = b(e, ["ref", "class", "value", "textValue", "disabled"]), c = () => ({
    value: s.value,
    textValue: s.textValue ?? (n == null ? void 0 : n.textContent) ?? String(s.value),
    disabled: !!s.disabled
  }), d = () => `${r.state.optionIdPrefix}-${o()}`, f = () => r.isOptionSelected(c()), u = () => r.isOptionActiveDescendant(o()), g = () => h(s.class, Ra, El()), S = (C) => {
    C.stopPropagation(), r.onOptionClick(o());
  }, x = (C) => {
    if (s.disabled && r.onOptionMouseMove(-1), u() || s.disabled) {
      C.preventDefault(), C.stopPropagation();
      return;
    }
    r.onOptionMouseMove(o());
  }, z = {
    selected: f
  };
  return ae(() => {
    a(r.registerOption(c()));
  }), pe(() => {
    u();
  }), i(Oa.Provider, {
    value: z,
    get children() {
      return i(P, p({
        role: "option",
        get id() {
          return d();
        },
        get "aria-selected"() {
          return f();
        },
        get "data-active"() {
          return u() ? "" : void 0;
        },
        get "data-disabled"() {
          return s.disabled ? "" : void 0;
        },
        "data-group": !0,
        get class() {
          return g();
        },
        get __baseStyle() {
          var C;
          return (C = t == null ? void 0 : t.baseStyle) == null ? void 0 : C.option;
        },
        onClick: S,
        onMouseMove: x,
        get onMouseDown() {
          return r.onOptionMouseDown;
        }
      }, l));
    }
  });
}
Wa.toString = () => v(Ra);
function nf() {
  const e = Q(Oa);
  if (!e)
    throw new Error("[Hope UI]: useSelectOptionContext must be used within a `<Select.Option />` component");
  return e;
}
var af = ["<g", ' fill="none"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></g>'];
const sf = $e({
  viewBox: "0 0 15 15",
  path: () => re(af, oe())
}), Fa = "hope-select__option-indicator";
function Na(e) {
  const t = y().Select, r = nf(), [o, a] = b(e, ["class", "children"]), n = () => h(o.class, Fa, Ol());
  return i(D, {
    get when() {
      return r.selected();
    },
    get children() {
      return i(A.span, p({
        get class() {
          return n();
        },
        get __baseStyle() {
          var s;
          return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.optionIndicator;
        }
      }, a, {
        get children() {
          return i(D, {
            get when() {
              return o.children;
            },
            get fallback() {
              return i(sf, {
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
Na.toString = () => v(Fa);
const Va = "hope-select__option-text";
function qa(e) {
  const t = y().Select, [r, o] = b(e, ["class"]), a = () => h(r.class, Va, Ml());
  return i(A.span, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.optionText;
    }
  }, o));
}
qa.toString = () => v(Va);
const ja = "hope-select__placeholder";
function Ka(e) {
  const t = y().Select, r = He(), [o, a] = b(e, ["class"]), n = () => h(o.class, ja, zl());
  return i(D, {
    get when() {
      return !r.state.hasSelectedOptions;
    },
    get children() {
      return i(A.span, p({
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
Ka.toString = () => v(ja);
const Xa = "hope-select__tag";
function Ua(e) {
  const t = y().Select, r = He(), [o, a] = b(e, ["class", "size", "variant"]), n = () => h(o.class, Xa, Pl({
    size: o.size ?? r.state.size ?? "md",
    variant: o.variant ?? r.state.variant === "filled" ? "outline" : "subtle"
  }));
  return i(A.span, p({
    get class() {
      return n();
    },
    get __baseStyle() {
      var s;
      return (s = t == null ? void 0 : t.baseStyle) == null ? void 0 : s.tag;
    }
  }, a));
}
Ua.toString = () => v(Xa);
var lf = ["<g", ' fill="none"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></g>'];
const Qa = $e({
  viewBox: "0 0 15 15",
  path: () => re(lf, oe())
}), Ya = "hope-select__tag-close-button";
function Za(e) {
  const t = y().Select, [r, o] = b(e, ["class", "children"]), a = () => h(r.class, Ya, Tl());
  return i(A.button, p({
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
      return i(D, {
        get when() {
          return r.children;
        },
        get fallback() {
          return i(Qa, {});
        },
        get children() {
          return r.children;
        }
      });
    }
  }));
}
Za.toString = () => v(Ya);
const Ja = "hope-select__trigger";
function Ga(e) {
  let t = ne();
  const r = y().Select, o = He(), [a, n] = b(e, ["ref", "class", "onClick", "onKeyDown", "onFocus", "onBlur"]), s = () => h(a.class, Ja, Il({
    variant: o.state.variant,
    size: o.state.size
  })), l = (g) => {
    g && (o.assignTriggerRef(g), Te(a.ref) ? a.ref(g) : a.ref = g);
  };
  ae(() => {
    l(document.querySelector(`[unique-id="${t}"]`));
  });
  const c = (g) => {
    fe(o.onTriggerClick, a.onClick)(g);
  }, d = (g) => {
    fe(o.onTriggerKeyDown, a.onKeyDown)(g);
  }, f = (g) => {
    fe(o.formControlProps.onFocus, a.onFocus)(g);
  }, u = (g) => {
    fe(o.onTriggerBlur, o.formControlProps.onBlur, a.onBlur)(g);
  };
  return i(A.button, p({
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
    get "aria-activedescendant"() {
      return o.state.activeDescendantId;
    },
    get "aria-controls"() {
      return o.state.listboxId;
    },
    get "aria-expanded"() {
      return o.state.opened;
    },
    get "aria-required"() {
      return o.formControlProps["aria-required"];
    },
    get "aria-invalid"() {
      return o.formControlProps["aria-invalid"];
    },
    get "aria-readonly"() {
      return o.formControlProps["aria-readonly"];
    },
    get "aria-describedby"() {
      return o.formControlProps["aria-describedby"];
    },
    get class() {
      return s();
    },
    get __baseStyle() {
      var g;
      return (g = r == null ? void 0 : r.baseStyle) == null ? void 0 : g.trigger;
    },
    onClick: c,
    onKeyDown: d,
    onFocus: f,
    onBlur: u
  }, n));
}
Ga.toString = () => v(Ja);
var cf = ["<span", ">", "</span>"];
const er = "hope-select__value";
function es(e) {
  const t = y().Select, r = He(), [o, a] = b(e, ["class", "children"]), n = () => h(o.class, er, qr()), s = () => h(o.class, er, kl({
    size: r.state.size
  })), l = (d, f) => {
    d.preventDefault(), d.stopPropagation(), r.unselectOption(f);
  }, c = rt(() => {
    var d;
    return mt(o) ? (d = o.children) == null ? void 0 : d.call(o, {
      selectedOptions: r.state.selectedOptions
    }) : o.children;
  });
  return i(D, {
    get when() {
      return r.state.hasSelectedOptions;
    },
    get children() {
      return i(D, {
        get when() {
          return !c();
        },
        get fallback() {
          return c();
        },
        get children() {
          return i(D, {
            get when() {
              return r.state.multiple;
            },
            get fallback() {
              return i(P, p({
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
              return i(P, p({
                get class() {
                  return s();
                },
                get __baseStyle() {
                  var d;
                  return (d = t == null ? void 0 : t.baseStyle) == null ? void 0 : d.multiValue;
                }
              }, a, {
                get children() {
                  return i(Dr, {
                    get each() {
                      return r.state.selectedOptions;
                    },
                    children: (d) => i(Ua, {
                      get children() {
                        return [re(cf, oe(), V(d.textValue)), i(Za, {
                          onClick: (f) => l(f, d)
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
es.toString = () => v(er);
function Fp(e) {
  const [t, r] = b(e, ["children", "value"]);
  return i(Wa, p({
    get value() {
      return t.value;
    }
  }, r, {
    get children() {
      return [i(qa, {
        get children() {
          return t.children;
        }
      }), i(Na, {})];
    }
  }));
}
function Np(e) {
  const [t, r, o] = b(e, ["children", "placeholder"], ["variant", "size", "offset", "id", "multiple", "value", "defaultValue", "required", "disabled", "invalid", "readOnly", "onChange", "onFocus", "onBlur"]);
  return i(Jg, p(r, {
    get children() {
      return [i(Ga, p(o, {
        get children() {
          return [i(D, {
            get when() {
              return t.placeholder;
            },
            get children() {
              return i(Ka, {
                get children() {
                  return t.placeholder;
                }
              });
            }
          }), i(es, {}), i(La, {})];
        }
      })), i(za, {
        get children() {
          return i(Ma, {
            get children() {
              return t.children;
            }
          });
        }
      })];
    }
  }));
}
const df = ct({
  from: {
    borderColor: "$$startColor",
    background: "$$startColor"
  },
  to: {
    borderColor: "$$endColor",
    background: "$$endColor"
  }
}), uf = m({
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
  animationName: `${df()}`,
  "&::before, &::after, *": {
    visibility: "hidden"
  }
}), Nt = "hope-skeleton";
function zt(e) {
  const [t, r] = Z("none"), a = q({
    speed: "800ms",
    fadeDuration: "400ms"
  }, e), [n, s] = b(a, ["class", "startColor", "endColor", "loaded", "speed", "fadeDuration"]), l = () => h(n.class, Nt, n.loaded ? void 0 : uf({
    css: {
      $$startColor: $r(n.startColor ?? "$neutral2"),
      $$endColor: $r(n.endColor ?? "$neutral8"),
      animationDuration: n.speed
    }
  }));
  return pe(st(() => n.loaded, (c, d) => r(d === !0 ? "none" : `${sl()} ${n.fadeDuration}`), {
    defer: !0
  })), i(D, {
    get when() {
      return n.loaded;
    },
    get fallback() {
      return i(P, p({
        get class() {
          return l();
        }
      }, s));
    },
    get children() {
      return i(P, p({
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
zt.toString = () => v(Nt);
function gf(e) {
  return i(zt, p({
    borderRadius: "$full",
    get boxSize() {
      return e.size ?? "2rem";
    }
  }, e));
}
gf.toString = () => v(Nt);
function ff(e) {
  const r = q({
    noOfLines: 3,
    spacing: "0.5rem",
    skeletonHeight: "0.5rem"
  }, e), [o, a, n] = b(r, ["class", "children", "noOfLines", "spacing", "skeletonHeight"], ["startColor", "endColor", "loaded", "speed", "fadeDuration", "borderRadius", "rounded"]), s = () => o.noOfLines ?? 3, l = Se(() => Fs(s())), c = (f) => s() > 1 && f === l().length - 1 ? "80%" : "100%", d = () => h(o.class, "hope-skeleton__group");
  return i(D, {
    get when() {
      return a.loaded;
    },
    get fallback() {
      return i(P, p({
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
          return i(Ts, {
            get each() {
              return l();
            },
            children: (f, u) => i(zt, p({
              get width() {
                return c(u);
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
      return i(zt, p({
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
ff.toString = () => v(Nt);
const pf = m({
  flex: 1,
  justifySelf: "stretch",
  alignSelf: "stretch"
}), ts = "hope-spacer";
function hf(e) {
  const [t, r] = b(e, ["class"]), o = () => h(t.class, ts, pf());
  return i(P, p({
    get class() {
      return o();
    }
  }, r));
}
hf.toString = () => v(ts);
const bf = m({
  display: "inline-block",
  borderColor: "currentColor",
  borderStyle: "solid",
  borderRadius: "$full",
  borderWidth: "2px",
  borderBottomColor: "transparent",
  borderLeftColor: "transparent",
  animationName: `${At}`,
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
var mf = ["<span", ">", "</span>"];
const rs = "hope-spinner";
function vf(e) {
  var l, c, d, f, u, g;
  const t = y().Spinner, r = {
    label: ((l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.label) ?? "Loading...",
    size: ((c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.size) ?? "md",
    emptyColor: (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.emptyColor,
    color: (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.color,
    thickness: (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.thickness,
    speed: (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.speed
  }, o = q(r, e), [a, n] = b(o, ["class", "children", "label", "size", "emptyColor", "color", "thickness", "speed"]), s = () => h(a.class, rs, bf({
    size: a.size,
    css: {
      color: a.color,
      borderWidth: a.thickness,
      borderBottomColor: a.emptyColor,
      borderLeftColor: a.emptyColor,
      animationDuration: a.speed
    }
  }));
  return i(P, p({
    get class() {
      return s();
    }
  }, n, {
    get children() {
      return i(D, {
        get when() {
          return a.label;
        },
        get children() {
          return re(mf, oe() + R("class", V(Et(), !0), !1), V(a.label));
        }
      });
    }
  }));
}
vf.toString = () => v(rs);
const Sf = m(ur, {
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
}), xf = m(gr), Cf = m(fr, {
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
var yf = ["<input", ' type="checkbox" role="switch"', "", "", "", ">"];
function $f(e) {
  const t = `hope-switch-${ne()}`, r = ut(e), [o, a] = te({
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
  }), [n, s, l] = b(e, ["inputClass", "children", "ref", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "onChange"], ["id", "name", "value", "checked", "defaultChecked", "required", "disabled", "invalid", "readOnly", "onFocus", "onBlur"]), c = () => h(n.inputClass, Et()), d = () => o, f = {
    state: o
  };
  return i(os.Provider, {
    value: f,
    get children() {
      return i(A.label, p({
        get for() {
          return o.id;
        },
        "data-group": !0,
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
      }, l, {
        get children() {
          return [re(yf, oe(), R("class", V(c(), !0), !1) + R("tabindex", V(n.tabIndex, !0), !1) + R("value", V(o.value, !0), !1) + R("id", V(o.id, !0), !1) + R("name", V(o.name, !0), !1), R("checked", o.checked, !0), R("required", o.required, !0), R("disabled", o.disabled, !0) + R("readonly", V(o.readOnly, !0), !1) + R("aria-required", V(o["aria-required"], !0), !1) + R("aria-disabled", V(o["aria-disabled"], !0), !1) + R("aria-invalid", V(o["aria-invalid"], !0), !1) + R("aria-readonly", V(o["aria-readonly"], !0), !1) + R("aria-label", V(n["aria-label"], !0), !1) + R("aria-labelledby", V(n["aria-labelledby"], !0), !1) + R("aria-describedby", V(n["aria-describedby"], !0), !1)), i(D, {
            get when() {
              return Te(n.children);
            },
            get fallback() {
              return n.children;
            },
            get children() {
              var u;
              return (u = n.children) == null ? void 0 : u.call(n, {
                state: d
              });
            }
          })];
        }
      }));
    }
  });
}
const os = J();
function wf() {
  const e = Q(os);
  if (!e)
    throw new Error("[Hope UI]: useSwitchPrimitivehContext must be used within a `<SwitchPrimitive />` component");
  return e;
}
const ns = "hope-switch", _f = "hope-checkbox__input", If = "hope-switch__control", kf = "hope-switch__label";
function Pf(e) {
  var d, f, u, g, S, x, z, C;
  const t = y().Switch, r = {
    variant: ((f = (d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.root) == null ? void 0 : f.variant) ?? "filled",
    colorScheme: ((g = (u = t == null ? void 0 : t.defaultProps) == null ? void 0 : u.root) == null ? void 0 : g.colorScheme) ?? "primary",
    size: ((x = (S = t == null ? void 0 : t.defaultProps) == null ? void 0 : S.root) == null ? void 0 : x.size) ?? "md",
    labelPlacement: ((C = (z = t == null ? void 0 : t.defaultProps) == null ? void 0 : z.root) == null ? void 0 : C.labelPlacement) ?? "start"
  }, o = q(r, e), [a, n] = b(o, ["children", "class", "variant", "colorScheme", "size", "labelPlacement"]), s = () => h(a.class, ns, Sf({
    size: a.size,
    labelPlacement: a.labelPlacement
  })), l = () => h(If, Cf({
    variant: a.variant,
    colorScheme: a.colorScheme,
    size: a.size
  })), c = () => h(kf, xf());
  return i($f, p({
    get class() {
      return s();
    },
    inputClass: _f,
    get __baseStyle() {
      var $;
      return ($ = t == null ? void 0 : t.baseStyle) == null ? void 0 : $.root;
    }
  }, n, {
    children: ({
      state: $
    }) => [i(A.span, {
      get class() {
        return c();
      },
      get __baseStyle() {
        var B;
        return (B = t == null ? void 0 : t.baseStyle) == null ? void 0 : B.label;
      },
      get "data-focus"() {
        return $()["data-focus"];
      },
      get "data-checked"() {
        return $()["data-checked"];
      },
      get "data-required"() {
        return $()["data-required"];
      },
      get "data-disabled"() {
        return $()["data-disabled"];
      },
      get "data-invalid"() {
        return $()["data-invalid"];
      },
      get "data-readonly"() {
        return $()["data-readonly"];
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
        var B;
        return (B = t == null ? void 0 : t.baseStyle) == null ? void 0 : B.control;
      },
      get "data-focus"() {
        return $()["data-focus"];
      },
      get "data-checked"() {
        return $()["data-checked"];
      },
      get "data-required"() {
        return $()["data-required"];
      },
      get "data-disabled"() {
        return $()["data-disabled"];
      },
      get "data-invalid"() {
        return $()["data-invalid"];
      },
      get "data-readonly"() {
        return $()["data-readonly"];
      }
    })]
  }));
}
Pf.toString = () => v(ns);
function Vp(e) {
  const t = wf();
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
const Tf = m({
  width: "100%",
  borderCollapse: "collapse",
  fontVariantNumeric: "lining-nums tabular-nums"
}), zf = m({
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
function Br(e) {
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
const Bf = m({
  variants: {
    striped: {
      odd: Br("odd"),
      even: Br("even")
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
}), Lf = m({
  "& tr:last-of-type th": {
    borderBottomWidth: 0
  }
}), Df = m({
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
}), Hf = m({
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
}), as = J(), ss = "hope-table";
function Af(e) {
  const t = y().Table, [r] = te({
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
  }), [o, a] = b(e, ["class", "striped", "dense", "highlightOnHover"]), n = () => h(o.class, ss, Tf(r));
  return i(as.Provider, {
    value: r,
    get children() {
      return i(P, p({
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
Af.toString = () => v(ss);
function Vt() {
  const e = Q(as);
  if (!e)
    throw new Error("[Hope UI]: useTableContext must be used within a `<Table/>` component");
  return e;
}
const is = "hope-table-caption";
function Ef(e) {
  var c, d;
  const t = y().Table, r = Vt(), o = {
    placement: ((d = (c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.caption) == null ? void 0 : d.placement) ?? "bottom"
  }, a = q(o, e), [n, s] = b(a, ["class", "placement"]), l = () => h(n.class, is, zf({
    dense: r.dense,
    placement: n.placement
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
Ef.toString = () => v(is);
const ls = "hope-tbody";
function Mf(e) {
  const t = y().Table, r = Vt(), [o, a] = b(e, ["class"]), n = () => h(o.class, ls, Bf({
    striped: r.striped,
    highlightOnHover: r.highlightOnHover
  }));
  return i(P, p({
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
Mf.toString = () => v(ls);
const cs = "hope-td";
function Of(e) {
  const t = y().Table, r = Vt(), [o, a] = b(e, ["class", "numeric"]), n = () => h(o.class, cs, Hf({
    dense: r.dense,
    numeric: o.numeric
  }));
  return i(P, p({
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
Of.toString = () => v(cs);
const ds = "hope-tfoot";
function Rf(e) {
  const t = y().Table, [r, o] = b(e, ["class"]), a = () => h(r.class, ds, Lf());
  return i(P, p({
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
Rf.toString = () => v(ds);
const us = "hope-th";
function Wf(e) {
  const t = y().Table, r = Vt(), [o, a] = b(e, ["class", "numeric"]), n = () => h(o.class, us, Df({
    dense: r.dense,
    numeric: o.numeric
  }));
  return i(P, p({
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
Wf.toString = () => v(us);
const gs = "hope-thead";
function Ff(e) {
  const t = y().Table, [r, o] = b(e, ["class"]), a = () => h(r.class, gs);
  return i(P, p({
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
Ff.toString = () => v(gs);
const fs = "hope-tr";
function Nf(e) {
  const t = y().Table, [r, o] = b(e, ["class"]), a = () => h(r.class, fs);
  return i(P, p({
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
Nf.toString = () => v(fs);
const Vf = m({
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
}), qf = m({
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
function le(e) {
  return {
    "&[aria-selected='true']": {
      color: e
    }
  };
}
function Ke(e) {
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
const jf = m({
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
      css: le("$primary11")
    },
    {
      variant: "underline",
      colorScheme: "accent",
      css: le("$accent11")
    },
    {
      variant: "underline",
      colorScheme: "neutral",
      css: le("$neutral12")
    },
    {
      variant: "underline",
      colorScheme: "success",
      css: le("$success11")
    },
    {
      variant: "underline",
      colorScheme: "info",
      css: le("$info11")
    },
    {
      variant: "underline",
      colorScheme: "warning",
      css: le("$warning11")
    },
    {
      variant: "underline",
      colorScheme: "danger",
      css: le("$danger11")
    },
    /* -------------------------------------------------------------------------------------------------
     * Variant - outline + colorScheme
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "outline",
      colorScheme: "primary",
      css: le("$primary11")
    },
    {
      variant: "outline",
      colorScheme: "accent",
      css: le("$accent11")
    },
    {
      variant: "outline",
      colorScheme: "neutral",
      css: le("$neutral12")
    },
    {
      variant: "outline",
      colorScheme: "success",
      css: le("$success11")
    },
    {
      variant: "outline",
      colorScheme: "info",
      css: le("$info11")
    },
    {
      variant: "outline",
      colorScheme: "warning",
      css: le("$warning11")
    },
    {
      variant: "outline",
      colorScheme: "danger",
      css: le("$danger11")
    },
    /* -------------------------------------------------------------------------------------------------
     * Variant - cards + colorScheme
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "cards",
      colorScheme: "primary",
      css: le("$primary11")
    },
    {
      variant: "cards",
      colorScheme: "accent",
      css: le("$accent11")
    },
    {
      variant: "cards",
      colorScheme: "neutral",
      css: le("$neutral12")
    },
    {
      variant: "cards",
      colorScheme: "success",
      css: le("$success11")
    },
    {
      variant: "cards",
      colorScheme: "info",
      css: le("$info11")
    },
    {
      variant: "cards",
      colorScheme: "warning",
      css: le("$warning11")
    },
    {
      variant: "cards",
      colorScheme: "danger",
      css: le("$danger11")
    },
    /* -------------------------------------------------------------------------------------------------
     * Variant - pills + colorScheme
     * -----------------------------------------------------------------------------------------------*/
    {
      variant: "pills",
      colorScheme: "primary",
      css: Ke({
        color: "$primary11",
        bgColor: "$primary3",
        bgColorHover: "$primary4"
      })
    },
    {
      variant: "pills",
      colorScheme: "accent",
      css: Ke({
        color: "$accent11",
        bgColor: "$accent3",
        bgColorHover: "$accent4"
      })
    },
    {
      variant: "pills",
      colorScheme: "neutral",
      css: Ke({
        color: "$neutral12",
        bgColor: "$neutral3",
        bgColorHover: "$neutral4"
      })
    },
    {
      variant: "pills",
      colorScheme: "success",
      css: Ke({
        color: "$success11",
        bgColor: "$success3",
        bgColorHover: "$success4"
      })
    },
    {
      variant: "pills",
      colorScheme: "info",
      css: Ke({
        color: "$info11",
        bgColor: "$info3",
        bgColorHover: "$info4"
      })
    },
    {
      variant: "pills",
      colorScheme: "warning",
      css: Ke({
        color: "$warning11",
        bgColor: "$warning3",
        bgColorHover: "$warning4"
      })
    },
    {
      variant: "pills",
      colorScheme: "danger",
      css: Ke({
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
}), Kf = m({
  outline: "none",
  padding: "$4"
}), ps = "hope-tabs";
function Xf(e) {
  const t = `hope-tabs-${ne()}`, r = y().Tabs, [o, a] = Z([]), [n, s] = Z([]), [l, c] = te({
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
      var _, k;
      return e.keepAlive ?? ((k = (_ = r == null ? void 0 : r.defaultProps) == null ? void 0 : _.root) == null ? void 0 : k.keepAlive) ?? !1;
    },
    get alignment() {
      var _, k;
      return e.alignment ?? ((k = (_ = r == null ? void 0 : r.defaultProps) == null ? void 0 : _.root) == null ? void 0 : k.alignment) ?? "start";
    },
    get variant() {
      var _, k;
      return e.variant ?? ((k = (_ = r == null ? void 0 : r.defaultProps) == null ? void 0 : _.root) == null ? void 0 : k.variant) ?? "underline";
    },
    get colorScheme() {
      var _, k;
      return e.colorScheme ?? ((k = (_ = r == null ? void 0 : r.defaultProps) == null ? void 0 : _.root) == null ? void 0 : k.colorScheme) ?? "primary";
    },
    get size() {
      var _, k;
      return e.size ?? ((k = (_ = r == null ? void 0 : r.defaultProps) == null ? void 0 : _.root) == null ? void 0 : k.size) ?? "md";
    },
    get fitted() {
      var _, k;
      return e.fitted ?? ((k = (_ = r == null ? void 0 : r.defaultProps) == null ? void 0 : _.root) == null ? void 0 : k.fitted) ?? !1;
    }
  }), [d, f, u] = b(e, ["class", "onChange"], ["index", "defaultIndex", "keepAlive", "alignment", "orientation", "variant", "colorScheme", "size", "fitted"]), g = Se(() => o().slice().reverse()), S = (_) => {
    var k;
    c("_selectedIndex", _), (k = d.onChange) == null || k.call(d, _);
  }, x = (_) => _ === l.selectedIndex, z = (_) => `${l.baseId}--tab-${_}`, C = (_) => `${l.baseId}--tabpanel-${_}`, $ = (_) => a((k) => [...k, _]).length - 1, B = (_) => s((k) => [...k, _]).length - 1, w = () => {
    const _ = o().length - 1;
    let k = It(l.selectedIndex, _, !0), K = o()[k];
    for (; K.disabled; )
      k = It(k, _, !0), K = o()[k];
    K.focus();
  }, E = () => {
    const _ = o().length - 1;
    let k = kt(l.selectedIndex, _, !0), K = o()[k];
    for (; K.disabled; )
      k = kt(k, _, !0), K = o()[k];
    K.focus();
  }, M = () => {
    var _;
    (_ = o().find((k) => !k.disabled)) == null || _.focus();
  }, N = () => {
    var _;
    (_ = g().find((k) => !k.disabled)) == null || _.focus();
  }, L = () => h(d.class, ps, Vf({
    orientation: l.orientation
  })), O = {
    state: l,
    setSelectedIndex: S,
    isSelectedIndex: x,
    getTabId: z,
    getTabPanelId: C,
    registerTab: $,
    registerTabPanel: B,
    focusPrevTab: E,
    focusNextTab: w,
    focusFirstTab: M,
    focusLastTab: N
  };
  return i(hs.Provider, {
    value: O,
    get children() {
      return i(P, p({
        get class() {
          return L();
        },
        get __baseStyle() {
          var _;
          return (_ = r == null ? void 0 : r.baseStyle) == null ? void 0 : _.root;
        }
      }, u));
    }
  });
}
Xf.toString = () => v(ps);
const hs = J();
function br() {
  const e = Q(hs);
  if (!e)
    throw new Error("[Hope UI]: useTabsContext must be used within a `<Tabs />` component");
  return e;
}
const bs = "hope-tabs__tab";
function Uf(e) {
  const t = y().Tabs, r = br(), [o, a] = Z(-1), [n, s] = b(e, ["ref", "class", "disabled", "onClick", "onFocus"]), l = () => r.isSelectedIndex(o()), c = () => r.getTabId(o()), d = () => r.getTabPanelId(o()), f = (S) => {
    r.setSelectedIndex(o()), ue(n.onClick, S);
  }, u = (S) => {
    r.setSelectedIndex(o()), ue(n.onFocus, S);
  }, g = () => h(n.class, bs, jf({
    orientation: r.state.orientation,
    variant: r.state.variant,
    colorScheme: r.state.colorScheme,
    size: r.state.size,
    fitted: r.state.fitted
  }));
  return i(A.button, p({
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
    get "aria-selected"() {
      return l();
    },
    get "aria-controls"() {
      return d();
    },
    get class() {
      return g();
    },
    get __baseStyle() {
      var S;
      return (S = t == null ? void 0 : t.baseStyle) == null ? void 0 : S.tab;
    },
    onClick: f,
    onFocus: u
  }, s));
}
Uf.toString = () => v(bs);
const ms = "hope-tabs__tablist";
function Qf(e) {
  const t = y().Tabs, r = br(), [o, a] = b(e, ["class", "onKeyDown"]), n = () => r.state.orientation === "horizontal", s = () => r.state.orientation === "vertical", l = () => n() && r.focusPrevTab(), c = () => n() && r.focusNextTab(), d = () => s() && r.focusNextTab(), f = () => s() && r.focusPrevTab(), u = Se(() => ({
    ArrowLeft: l,
    ArrowRight: c,
    ArrowDown: d,
    ArrowUp: f,
    Home: r.focusFirstTab,
    End: r.focusLastTab
  })), g = (x) => {
    ue(o.onKeyDown, x);
    const z = Qr(x), C = u()[z];
    C && (x.preventDefault(), ue(C, x));
  }, S = () => h(o.class, ms, qf({
    alignment: r.state.alignment,
    orientation: r.state.orientation,
    variant: r.state.variant
  }));
  return i(P, p({
    role: "tablist",
    get "aria-orientation"() {
      return r.state.orientation;
    },
    get class() {
      return S();
    },
    get __baseStyle() {
      var x;
      return (x = t == null ? void 0 : t.baseStyle) == null ? void 0 : x.tabList;
    },
    onKeyDown: g
  }, a));
}
Qf.toString = () => v(ms);
const vs = "hope-tabs__tab-panel";
function Yf(e) {
  const t = y().Tabs, r = br(), [o, a] = Z(-1), [n, s] = b(e, ["ref", "class", "children"]), l = () => r.isSelectedIndex(o()), c = () => r.getTabId(o()), d = () => r.getTabPanelId(o()), f = rt(() => n.children), u = () => h(n.class, vs, Kf());
  return i(P, p({
    role: "tabpanel",
    tabIndex: "0",
    get id() {
      return d();
    },
    get "aria-labelledby"() {
      return c();
    },
    get hidden() {
      return !l();
    },
    get class() {
      return u();
    },
    get __baseStyle() {
      var g;
      return (g = t == null ? void 0 : t.baseStyle) == null ? void 0 : g.tabPanel;
    }
  }, s, {
    get children() {
      return i(D, {
        get when() {
          return l();
        },
        get children() {
          return i(D, {
            get when() {
              return r.state.keepAlive;
            },
            get fallback() {
              return n.children;
            },
            get children() {
              return f();
            }
          });
        }
      });
    }
  }));
}
Yf.toString = () => v(vs);
const Zf = m({
  marginInlineStart: "$2"
}), Jf = m({
  marginInlineEnd: "$2"
}), Gf = m({
  noOfLines: 1
}), et = m({
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
function Xt(e) {
  return {
    height: e.height,
    py: 0,
    px: e.paddingX,
    fontSize: e.fontSize,
    lineHeight: e.lineHeight,
    [`& .${et}`]: {
      boxSize: e.closeButtonSize
    }
  };
}
function Xe(e) {
  return {
    backgroundColor: e.bgColor,
    color: e.color,
    [`& .${et}:not(:disabled):hover`]: {
      backgroundColor: e.closeButtonBgColorHover
    }
  };
}
function Ue(e) {
  return {
    backgroundColor: e.bgColor,
    color: e.color,
    [`& .${et}:not(:disabled):hover`]: {
      backgroundColor: e.closeButtonBgColorHover
    }
  };
}
function Qe(e) {
  return {
    borderColor: e.borderColor,
    color: e.color,
    [`& .${et}:not(:disabled):hover`]: {
      backgroundColor: e.closeButtonBgColorHover
    }
  };
}
function Ut(e) {
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
const ep = m({
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
        [`& .${et}:not(:disabled):hover`]: {
          backgroundColor: "$neutral4"
        },
        [`& .${et}:not(:disabled):active`]: {
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
      sm: Xt({
        height: "$5",
        paddingX: "$2",
        fontSize: "$xs",
        lineHeight: "$4",
        closeButtonSize: "$4"
      }),
      md: Xt({
        height: "$6",
        paddingX: "$2",
        fontSize: "$sm",
        lineHeight: "$5",
        closeButtonSize: "$5"
      }),
      lg: Xt({
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
      css: Xe({
        color: "white",
        bgColor: "$primary9",
        closeButtonBgColorHover: "$primary10"
      })
    },
    {
      variant: "solid",
      colorScheme: "accent",
      css: Xe({
        color: "white",
        bgColor: "$accent9",
        closeButtonBgColorHover: "$accent10"
      })
    },
    {
      variant: "solid",
      colorScheme: "neutral",
      css: Xe({
        color: "white",
        bgColor: "$neutral9",
        closeButtonBgColorHover: "$neutral11"
      })
    },
    {
      variant: "solid",
      colorScheme: "success",
      css: Xe({
        color: "white",
        bgColor: "$success9",
        closeButtonBgColorHover: "$success10"
      })
    },
    {
      variant: "solid",
      colorScheme: "info",
      css: Xe({
        color: "white",
        bgColor: "$info9",
        closeButtonBgColorHover: "$info10"
      })
    },
    {
      variant: "solid",
      colorScheme: "warning",
      css: Xe({
        color: "$blackAlpha12",
        bgColor: "$warning9",
        closeButtonBgColorHover: "$warning10"
      })
    },
    {
      variant: "solid",
      colorScheme: "danger",
      css: Xe({
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
      css: Ue({
        color: "$primary11",
        bgColor: "$primary4",
        closeButtonBgColorHover: "$primary6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "accent",
      css: Ue({
        color: "$accent11",
        bgColor: "$accent4",
        closeButtonBgColorHover: "$accent6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "neutral",
      css: Ue({
        color: "$neutral12",
        bgColor: "$neutral4",
        closeButtonBgColorHover: "$neutral7"
      })
    },
    {
      variant: "subtle",
      colorScheme: "success",
      css: Ue({
        color: "$success11",
        bgColor: "$success4",
        closeButtonBgColorHover: "$success6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "info",
      css: Ue({
        color: "$info11",
        bgColor: "$info4",
        closeButtonBgColorHover: "$info6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "warning",
      css: Ue({
        color: "$warning11",
        bgColor: "$warning4",
        closeButtonBgColorHover: "$warning6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "danger",
      css: Ue({
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
      css: Qe({
        color: "$primary11",
        borderColor: "$primary7",
        closeButtonBgColorHover: "$primary4"
      })
    },
    {
      variant: "outline",
      colorScheme: "accent",
      css: Qe({
        color: "$accent11",
        borderColor: "$accent7",
        closeButtonBgColorHover: "$accent4"
      })
    },
    {
      variant: "outline",
      colorScheme: "neutral",
      css: Qe({
        color: "$neutral12",
        borderColor: "$neutral7",
        closeButtonBgColorHover: "$neutral4"
      })
    },
    {
      variant: "outline",
      colorScheme: "success",
      css: Qe({
        color: "$success11",
        borderColor: "$success7",
        closeButtonBgColorHover: "$success4"
      })
    },
    {
      variant: "outline",
      colorScheme: "info",
      css: Qe({
        color: "$info11",
        borderColor: "$info7",
        closeButtonBgColorHover: "$info4"
      })
    },
    {
      variant: "outline",
      colorScheme: "warning",
      css: Qe({
        color: "$warning11",
        borderColor: "$warning7",
        closeButtonBgColorHover: "$warning4"
      })
    },
    {
      variant: "outline",
      colorScheme: "danger",
      css: Qe({
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
      css: Ut("$1_5")
    },
    {
      variant: "dot",
      size: "md",
      css: Ut("$2")
    },
    {
      variant: "dot",
      size: "lg",
      css: Ut("$2_5")
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
}), Ss = "hope-tag", xs = J();
function tp(e) {
  var f, u, g, S, x, z;
  const t = y().Tag, r = {
    variant: ((u = (f = t == null ? void 0 : t.defaultProps) == null ? void 0 : f.root) == null ? void 0 : u.variant) ?? "subtle",
    colorScheme: ((S = (g = t == null ? void 0 : t.defaultProps) == null ? void 0 : g.root) == null ? void 0 : S.colorScheme) ?? "neutral",
    size: ((z = (x = t == null ? void 0 : t.defaultProps) == null ? void 0 : x.root) == null ? void 0 : z.size) ?? "md"
  }, o = q(r, e), [a, n, s] = b(o, ["class"], ["variant", "colorScheme", "size", "dotPlacement"]), l = () => h(a.class, Ss, ep(n)), d = {
    size: () => n.size
  };
  return i(xs.Provider, {
    value: d,
    get children() {
      return i(A.span, p({
        get class() {
          return l();
        },
        get __baseStyle() {
          var C;
          return (C = t == null ? void 0 : t.baseStyle) == null ? void 0 : C.root;
        }
      }, s));
    }
  });
}
tp.toString = () => v(Ss);
function rp() {
  const e = Q(xs);
  if (!e)
    throw new Error("[Hope UI]: useTagContext must be used within a `<Tag />` component");
  return e;
}
const Cs = "hope-tag-close-button";
function op(e) {
  const t = y().Tag, r = rp(), a = q({
    type: "button",
    role: "button",
    "aria-label": "Close"
  }, e), [n, s] = b(a, ["class", "children"]), l = () => h(n.class, Cs, et({
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
      return i(Qa, {});
    }
  }));
}
op.toString = () => v(Cs);
const ys = "hope-tag-left-icon";
function np(e) {
  const t = y().Tag, [r, o] = b(e, ["class"]), a = () => h(r.class, ys, Jf());
  return i(ot, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.icon;
    }
  }, o));
}
np.toString = () => v(ys);
const $s = "hope-tag-right-icon";
function ap(e) {
  const t = y().Tag, [r, o] = b(e, ["class"]), a = () => h(r.class, $s, Zf());
  return i(ot, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.icon;
    }
  }, o));
}
ap.toString = () => v($s);
const ws = "hope-tag-label";
function sp(e) {
  const t = y().Tag, [r, o] = b(e, ["class"]), a = () => h(r.class, ws, Gf());
  return i(A.span, p({
    get class() {
      return a();
    },
    get __baseStyle() {
      var n;
      return (n = t == null ? void 0 : t.baseStyle) == null ? void 0 : n.label;
    }
  }, o));
}
sp.toString = () => v(ws);
const _s = "hope-text";
function ip(e) {
  var l;
  const t = y().Text, r = {
    size: (l = t == null ? void 0 : t.defaultProps) == null ? void 0 : l.size
  }, o = q(r, e), [a, n] = b(o, ["class", "size"]), s = () => h(a.class, _s, zn({
    size: a.size
  }));
  return i(A.p, p({
    get class() {
      return s();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    }
  }, n));
}
ip.toString = () => v(_s);
function Qt(e, t) {
  return Object.entries({
    xs: t ?? "$2",
    sm: t ?? "$2_5",
    md: t ?? "$3",
    lg: t ?? "$4"
  }).map(([r, o]) => ({
    variant: e,
    size: r,
    css: { px: o }
  }));
}
const lp = m(nr, {
  minHeight: "80px",
  py: "$2",
  compoundVariants: [
    ...Qt("outline"),
    ...Qt("filled"),
    ...Qt("unstyled", 0)
  ]
}), Is = "hope-textarea";
function cp(e) {
  var c, d;
  const t = y().Textarea, r = {
    variant: ((c = t == null ? void 0 : t.defaultProps) == null ? void 0 : c.variant) ?? "outline",
    size: ((d = t == null ? void 0 : t.defaultProps) == null ? void 0 : d.size) ?? "md"
  }, o = q(r, e), [a, n] = b(o, ["class", "variant", "size"]), s = ut(e), l = () => h(a.class, Is, lp({
    variant: a.variant,
    size: a.size
  }));
  return i(P, p({
    as: "textarea",
    get class() {
      return l();
    },
    get __baseStyle() {
      return t == null ? void 0 : t.baseStyle;
    }
  }, s, n));
}
cp.toString = () => v(Is);
const ks = "hope-tooltip", dp = "hope-tooltip__arrow";
function up(e) {
  var xe, ze, Ae, H, Y, X, I, W, be;
  const t = `hope-tooltip-${ne()}`, r = y().Tooltip, o = {
    id: t,
    placement: ((xe = r == null ? void 0 : r.defaultProps) == null ? void 0 : xe.placement) ?? "bottom",
    offset: ((ze = r == null ? void 0 : r.defaultProps) == null ? void 0 : ze.offset) ?? 8,
    withArrow: ((Ae = r == null ? void 0 : r.defaultProps) == null ? void 0 : Ae.withArrow) ?? !1,
    arrowSize: ((H = r == null ? void 0 : r.defaultProps) == null ? void 0 : H.arrowSize) ?? 8,
    arrowPadding: ((Y = r == null ? void 0 : r.defaultProps) == null ? void 0 : Y.arrowPadding) ?? 8,
    openDelay: ((X = r == null ? void 0 : r.defaultProps) == null ? void 0 : X.openDelay) ?? 0,
    closeDelay: ((I = r == null ? void 0 : r.defaultProps) == null ? void 0 : I.closeDelay) ?? 0,
    closeOnClick: ((W = r == null ? void 0 : r.defaultProps) == null ? void 0 : W.closeOnClick) ?? !0,
    closeOnMouseDown: ((be = r == null ? void 0 : r.defaultProps) == null ? void 0 : be.closeOnMouseDown) ?? !1
  }, a = q(o, e), [n, s] = b(a, ["class", "children", "id", "label", "opened", "defaultOpened", "inline", "disabled", "placement", "offset", "withArrow", "arrowSize", "arrowPadding", "openDelay", "closeDelay", "closeOnClick", "closeOnMouseDown", "onOpen", "onClose"]), [l, c] = Z(!!n.defaultOpened), [d, f] = Z(!1);
  let u, g;
  const S = () => n.opened !== void 0, x = () => S() ? !!n.opened : l(), z = () => h(n.class, ks, Wl()), C = () => h(dp, Fl()), $ = rt(() => n.children), B = Se(() => {
    let U = $();
    for (; Te(U); )
      U = U();
    return U;
  });
  async function w() {
    B();
  }
  const E = () => {
    var U;
    S() || c(!0), (U = n.onOpen) == null || U.call(n), w();
  }, M = () => {
    var U;
    S() || c(!1), (U = n.onClose) == null || U.call(n);
  }, N = () => {
    n.disabled || (u = window.setTimeout(E, n.openDelay));
  }, L = () => {
    u && window.clearTimeout(u), g = window.setTimeout(M, n.closeDelay);
  }, O = () => {
    n.closeOnClick && L();
  }, _ = () => {
    n.closeOnMouseDown && L();
  }, k = (U) => {
    x() && U.key === "Escape" && L();
  }, K = () => {
    const U = B();
    U.addEventListener("mouseenter", N), U.addEventListener("focus", N), U.addEventListener("click", O), U.addEventListener("mousedown", _), U.addEventListener("mouseleave", L), U.addEventListener("blur", L);
  }, se = () => {
    const U = B();
    U.removeEventListener("mouseenter", N), U.removeEventListener("focus", N), U.removeEventListener("click", O), U.removeEventListener("mousedown", _), U.removeEventListener("mouseleave", L), U.removeEventListener("blur", L);
  }, ee = () => {
  }, G = () => {
    document.removeEventListener("keydown", k), f(!1);
  };
  return ae(() => {
    K();
  }), ge(() => {
    se(), window.clearTimeout(u), window.clearTimeout(g);
  }), pe(() => {
    x() ? (f(!0), n.id && B().setAttribute("aria-describedby", n.id)) : B().removeAttribute("aria-describedby");
  }), [B, i(D, {
    get when() {
      return d();
    },
    get children() {
      return i(tt, {
        get children() {
          return i(De, {
            get name() {
              return Je.scale;
            },
            appear: !0,
            onBeforeEnter: w,
            onAfterEnter: ee,
            onAfterExit: G,
            get children() {
              return i(D, {
                get when() {
                  return x();
                },
                get children() {
                  return i(P, p({
                    role: "tooltip",
                    get id() {
                      return n.id;
                    },
                    get class() {
                      return z();
                    },
                    get __baseStyle() {
                      return r == null ? void 0 : r.baseStyle;
                    }
                  }, s, {
                    get children() {
                      return [n.label, i(D, {
                        get when() {
                          return n.withArrow;
                        },
                        get children() {
                          return i(P, {
                            get class() {
                              return C();
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
up.toString = () => v(ks);
function qp(e = {}) {
  const t = `disclosure-${ne()}`, [r, o] = Z(e.defaultIsOpen || !1), a = () => e.isOpen !== void 0, n = () => a() ? !!e.isOpen : r(), s = () => {
    var u;
    a() || o(!1), (u = e.onClose) == null || u.call(e);
  }, l = () => {
    var u;
    a() || o(!0), (u = e.onOpen) == null || u.call(e);
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
function jp(e) {
  let t = !1;
  const r = (l) => {
    var d;
    const { once: c } = e;
    c && t || (t = !0, (d = e.handler) == null || d.call(e, l));
  }, o = (l, c, d, f) => {
    c && l && l.addEventListener && l.addEventListener(c, r, {
      capture: d,
      passive: f
    });
  }, a = () => {
    const { element: l, eventName: c, capture: d, passive: f } = e;
    o(l, c, d, f);
  }, n = (l, c) => {
    c && l && l.removeEventListener && l.removeEventListener(c, r);
  }, s = () => {
    const { element: l, eventName: c } = e;
    n(l, c);
  };
  return pe((l) => {
    const { element: c, eventName: d, capture: f, passive: u } = e;
    return l && n(l.element, l.eventName), o(c, d, f, u), {
      element: c,
      eventName: d
    };
  }), ge(() => {
    const { element: l, eventName: c } = e;
    n(l, c);
  }), {
    active: a,
    inactive: s
  };
}
export {
  pc as Accordion,
  $c as AccordionButton,
  Pc as AccordionIcon,
  yc as AccordionItem,
  zc as AccordionPanel,
  Hc as Alert,
  Ec as AlertDescription,
  Vc as AlertIcon,
  qc as AlertTitle,
  Kc as Anchor,
  Uc as AspectRatio,
  td as AsyncButton,
  ud as Avatar,
  gd as AvatarBadge,
  fd as AvatarExcess,
  dd as AvatarGroup,
  hd as Badge,
  P as Box,
  yd as Breadcrumb,
  $d as BreadcrumbItem,
  wd as BreadcrumbLink,
  _d as BreadcrumbSeparator,
  cr as Button,
  Gc as ButtonGroup,
  kd as Center,
  Kd as Checkbox,
  Bd as CheckboxGroup,
  Rd as CheckboxPrimitive,
  Pp as CheckboxPrimitiveIndicator,
  ru as CircularProgress,
  ou as CircularProgressIndicator,
  nu as CircularProgressLabel,
  Rt as CloseButton,
  oo as Collapse,
  cu as Container,
  uu as Divider,
  Tp as Drawer,
  Bp as DrawerBody,
  zp as DrawerCloseButton,
  mu as DrawerContent,
  Dp as DrawerFooter,
  Lp as DrawerHeader,
  vu as DrawerOverlay,
  yn as Flex,
  Md as FormControl,
  Ko as FormControlContext,
  Su as FormErrorMessage,
  xu as FormHelperText,
  yu as FormLabel,
  kn as Grid,
  $u as GridItem,
  bg as HStack,
  Tu as Heading,
  Mt as HopeContext,
  _p as HopeProvider,
  ot as Icon,
  zu as IconButton,
  Bu as Image,
  Du as Input,
  En as InputAddon,
  Rn as InputElement,
  Lu as InputGroup,
  Hu as InputLeftAddon,
  Eu as InputLeftElement,
  Au as InputRightAddon,
  Mu as InputRightElement,
  Ru as Kbd,
  pr as List,
  ju as ListIcon,
  Ku as ListItem,
  Hp as Menu,
  Zu as MenuContent,
  Ju as MenuGroup,
  og as MenuItem,
  ng as MenuLabel,
  ag as MenuTrigger,
  gu as Modal,
  sn as ModalBody,
  cn as ModalCloseButton,
  pu as ModalContent,
  un as ModalFooter,
  fn as ModalHeader,
  hu as ModalOverlay,
  oa as Notification,
  Jt as NotificationDescription,
  ia as NotificationIcon,
  Gt as NotificationTitle,
  Ep as NotificationsProvider,
  Vu as OrderedList,
  Mp as Popover,
  Op as PopoverAnchor,
  _g as PopoverArrow,
  Ig as PopoverBody,
  kg as PopoverCloseButton,
  Pg as PopoverContent,
  Tg as PopoverFooter,
  zg as PopoverHeader,
  Rp as PopoverTrigger,
  Eg as Progress,
  Mg as ProgressIndicator,
  Og as ProgressLabel,
  Ug as Radio,
  Ng as RadioGroup,
  Jg as Select,
  za as SelectContent,
  La as SelectIcon,
  of as SelectLabel,
  Ma as SelectListbox,
  tf as SelectOptGroup,
  Wa as SelectOption,
  Na as SelectOptionIndicator,
  qa as SelectOptionText,
  Ka as SelectPlaceholder,
  Ua as SelectTag,
  Za as SelectTagCloseButton,
  Ga as SelectTrigger,
  es as SelectValue,
  ku as SimpleGrid,
  Fp as SimpleOption,
  Np as SimpleSelect,
  zt as Skeleton,
  gf as SkeletonCircle,
  ff as SkeletonText,
  hf as Spacer,
  vf as Spinner,
  hr as Stack,
  Pf as Switch,
  $f as SwitchPrimitive,
  Vp as SwitchPrimitiveThumb,
  Uf as Tab,
  Qf as TabList,
  Yf as TabPanel,
  Af as Table,
  Ef as TableCaption,
  Xf as Tabs,
  tp as Tag,
  op as TagCloseButton,
  sp as TagLabel,
  np as TagLeftIcon,
  ap as TagRightIcon,
  Mf as Tbody,
  Of as Td,
  ip as Text,
  cp as Textarea,
  Rf as Tfoot,
  Wf as Th,
  Ff as Thead,
  up as Tooltip,
  Nf as Tr,
  qu as UnorderedList,
  ca as VStack,
  Ar as __DEV__,
  mc as accordionButtonStyles,
  vc as accordionIconStyles,
  bc as accordionItemStyles,
  Sc as accordionPanelStyles,
  Lc as alertDescriptionStyles,
  ve as alertIconStyles,
  Dc as alertStyles,
  Bc as alertTitleStyles,
  jc as anchorStyles,
  Xc as aspectRatioStyles,
  nd as avatarBadgeStyles,
  rd as avatarExcessStyles,
  ad as avatarGroupStyles,
  od as avatarImageStyles,
  dr as avatarStyles,
  pd as badgeStyles,
  Vr as baseDialogStyles,
  nr as baseInputResetStyles,
  Nr as baseModalContainerStyles,
  Ri as baseTheme,
  vd as breadcrumbItemStyles,
  xd as breadcrumbLinkStyles,
  md as breadcrumbListStyles,
  Sd as breadcrumbSeparatorStyles,
  bd as breadcrumbStyles,
  Jc as buttonGroupStyles,
  Zc as buttonIconSpinnerStyles,
  Qc as buttonIconStyles,
  Yc as buttonLoaderStyles,
  mo as buttonStyles,
  ue as callHandler,
  yp as cast,
  Id as centerStyles,
  fe as chainHandlers,
  zd as checkboxControlStyles,
  Td as checkboxLabelStyles,
  Pd as checkboxWrapperStyles,
  Jd as circularProgressIndicatorContainerStyles,
  Gd as circularProgressIndicatorStyles,
  eu as circularProgressLabelStyles,
  Yd as circularProgressStyles,
  Zd as circularProgressTrackStyles,
  h as classNames,
  iu as closeButtonStyles,
  Tc as collapseStyles,
  lt as colorModeClassNames,
  $p as config,
  lu as containerStyles,
  Ge as contains,
  v as createClassSelector,
  qp as createDisclosure,
  $e as createIcon,
  Wi as createTheme,
  m as css,
  du as dividerStyles,
  Qi as drawerContainerStyles,
  Yi as drawerDialogStyles,
  j as drawerTransitionName,
  Ui as drawerTransitionStyles,
  Ld as formControlStyles,
  Ed as formErrorMessageStyles,
  Ad as formHelperTextStyles,
  Dd as formLabelStyles,
  Cc as getActiveElement,
  Ks as getColorModeClassName,
  wp as getCssText,
  js as getDefaultColorMode,
  It as getNextIndex,
  Pt as getOwnerDocument,
  kt as getPrevIndex,
  Tt as getRelatedTarget,
  Me as globalCss,
  Qd as growAndShrink,
  Cg as hasTabIndex,
  Pu as headingStyles,
  A as hope,
  lr as hopeButtonClass,
  Ot as hopeIconButtonClass,
  ir as hopeIconClass,
  Nt as hopeSkeletonClass,
  wc as iconStyles,
  wl as inputAddonStyles,
  $l as inputElementStyles,
  yl as inputGroupStyles,
  Cl as inputStyles,
  it as isArray,
  mt as isChildrenFunction,
  $g as isContentEditable,
  yg as isDisabled,
  Ur as isElement,
  wg as isFocusable,
  Te as isFunction,
  xc as isHTMLElement,
  ua as isHidden,
  Er as isNull,
  Os as isNumber,
  Ht as isObject,
  Yr as isScrollable,
  Rs as isString,
  Cp as isUndefined,
  Kt as isValidEvent,
  Ou as kbdStyles,
  ct as keyframes,
  Fu as listIconStyles,
  Wu as listStyles,
  Zr as maintainScrollVisibility,
  Ws as mapKeys,
  Gi as menuContentStyles,
  el as menuGroupStyles,
  al as menuItemCommandStyles,
  ol as menuItemIconWrapperStyles,
  rl as menuItemStyles,
  nl as menuItemTextStyles,
  tl as menuLabelStyles,
  Ee as menuTransitionName,
  Zi as menuTransitionStyles,
  Ji as menuTriggerStyles,
  Ns as mockBody,
  ji as modalBodyStyles,
  Xi as modalCloseButtonStyles,
  Ni as modalContainerStyles,
  Vi as modalDialogStyles,
  Ki as modalFooterStyles,
  qi as modalHeaderStyles,
  Fr as modalOverlayStyles,
  ce as modalTransitionName,
  Fi as modalTransitionStyles,
  Sr as noop,
  Qr as normalizeEventKey,
  fl as notificationDescriptionStyles,
  ul as notificationIconStyles,
  ll as notificationListStyles,
  dl as notificationLoaderStyles,
  Ap as notificationService,
  cl as notificationStyles,
  gl as notificationTitleStyles,
  we as notificationTransitionName,
  il as notificationTransitionStyles,
  xl as popoverArrowStyles,
  ml as popoverBodyStyles,
  Sl as popoverCloseButtonStyles,
  hl as popoverContentStyles,
  vl as popoverFooterStyles,
  bl as popoverHeaderStyles,
  Ye as popoverTransitionName,
  pl as popoverTransitionStyles,
  Hg as progressIndicatorStyles,
  Ag as progressLabelStyles,
  Dg as progressStyles,
  Fg as radioControlStyles,
  Wg as radioLabelStyles,
  Rg as radioWrapperStyles,
  Fs as range,
  Hd as requiredIndicatorStyles,
  qs as saveColorModeToLocalStorage,
  Ll as selectContentStyles,
  Bl as selectIconStyles,
  Al as selectLabelStyles,
  Dl as selectListboxStyles,
  kl as selectMultiValueStyles,
  Hl as selectOptGroupStyles,
  Ol as selectOptionIndicatorStyles,
  El as selectOptionStyles,
  Ml as selectOptionTextStyles,
  zl as selectPlaceholderStyles,
  qr as selectSingleValueStyles,
  Tl as selectTagCloseButtonStyles,
  Pl as selectTagStyles,
  Ze as selectTransitionName,
  _l as selectTransitionStyles,
  Il as selectTriggerStyles,
  uf as skeletonStyles,
  pf as spacerStyles,
  bf as spinnerStyles,
  hg as stackStyles,
  Cf as switchControlStyles,
  xf as switchLabelStyles,
  Sf as switchWrapperStyles,
  Xs as syncBodyColorModeClassName,
  qf as tabListStyles,
  Kf as tabPanelStyles,
  jf as tabStyles,
  Bf as tableBodyStyles,
  zf as tableCaptionStyles,
  Hf as tableCellStyles,
  Df as tableColumnHeaderStyles,
  Lf as tableFootStyles,
  Tf as tableStyles,
  Vf as tabsStyles,
  et as tagCloseButtonStyles,
  Gf as tagLabelStyles,
  Jf as tagLeftIconStyles,
  Zf as tagRightIconStyles,
  ep as tagStyles,
  zn as textStyles,
  lp as textareaStyles,
  gr as toggleControlLabelStyles,
  fr as toggleControlStyles,
  ur as toggleWrapperStyles,
  Fl as tooltipArrowStyles,
  Wl as tooltipStyles,
  Je as tooltipTransitionName,
  Rl as tooltipTransitionStyles,
  hc as useAccordionContext,
  sr as useAccordionItemContext,
  Ac as useAlertContext,
  Io as useAvatarGroupContext,
  Oo as useBreadcrumbContext,
  xo as useButtonGroupContext,
  jo as useCheckboxGroupContext,
  Wd as useCheckboxPrimitiveContext,
  Jo as useCircularProgressContext,
  Yu as useClickOutside,
  jl as useColorMode,
  kp as useColorModeValue,
  hn as useDrawerContext,
  jp as useEvent,
  dt as useFormControlContext,
  vt as useInputGroupContext,
  Wt as useMenuContext,
  Gu as useMenuGroupContext,
  Oe as useModalContext,
  sg as useNotificationContext,
  at as usePopoverContext,
  Ca as useProgressContext,
  Wp as useRadioContext,
  Vg as useRadioGroupContext,
  He as useSelectContext,
  rf as useSelectOptGroupContext,
  nf as useSelectOptionContext,
  y as useStyleConfig,
  wf as useSwitchPrimitivehContext,
  Vt as useTableContext,
  br as useTabsContext,
  rp as useTagContext,
  Ip as useTheme,
  jr as valueToPercent
};
