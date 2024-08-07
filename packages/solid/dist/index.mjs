import { isServer, createComponent, Dynamic, mergeProps as mergeProps$1, template, memo, effect, setAttribute, Portal, insert } from "solid-js/web";
import { createContext, mergeProps, createSignal, createEffect, useContext, splitProps, createMemo, onCleanup, createUniqueId, Show, children, createRenderEffect, Switch as Switch$1, Match, onMount, on, For, Index } from "solid-js";
import { createStore } from "solid-js/store";
import { createStitches, defaultThemeMap } from "@stitches/core";
import merge from "lodash.merge";
import { Transition, TransitionGroup } from "solid-transition-group";
import { createFocusTrap } from "focus-trap";
import { removeScrollableSelector, clearQueueScrollLocks, enablePageScroll, addScrollableSelector, disablePageScroll } from "scroll-lock";
import { autoUpdate, computePosition, offset, flip, shift, inline, arrow, hide as hide$1, size as size$1 } from "@floating-ui/dom";
const __DEV__ = false;
function isNumber(value) {
  return typeof value === "number";
}
function isArray(value) {
  return Array.isArray(value);
}
function isObject(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function") && !isArray(value);
}
function isFunction(value) {
  return typeof value === "function";
}
function isNull(value) {
  return value == null;
}
function isString(value) {
  return Object.prototype.toString.call(value) === "[object String]";
}
function isUndefined(value) {
  return typeof value === "undefined" || value === void 0;
}
function noop() {
  return;
}
function cast(value) {
  return value;
}
function mapKeys(prop, mapper) {
  if (isObject(prop)) {
    return Object.keys(prop).reduce((result, key) => {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }
  if (prop !== null && prop !== void 0) {
    return mapper(prop);
  }
  return null;
}
function callHandler(handler, event) {
  if (handler) {
    if (isFunction(handler)) {
      handler(event);
    } else {
      handler[0](handler[1], event);
    }
  }
  return event == null ? void 0 : event.defaultPrevented;
}
function chainHandlers(...fns) {
  return function(event) {
    fns.some((fn) => {
      return callHandler(fn, event);
    });
  };
}
function range(count) {
  return Array(count).fill(1).map((_, index) => index + 1);
}
const mockBody = {
  classList: { add: noop, remove: noop }
};
const hasLocalStorageSupport = () => typeof Storage !== "undefined";
const COLOR_MODE_STORAGE_KEY = "hope-ui-color-mode";
const colorModeClassNames = {
  light: "hope-ui-light",
  dark: "hope-ui-dark"
};
function getColorModeFromLocalStorage() {
  if (!hasLocalStorageSupport()) {
    return null;
  }
  try {
    return localStorage.getItem(COLOR_MODE_STORAGE_KEY);
  } catch (error) {
    return null;
  }
}
function saveColorModeToLocalStorage(value) {
  if (!hasLocalStorageSupport()) {
    return;
  }
  try {
    localStorage.setItem(COLOR_MODE_STORAGE_KEY, value);
  } catch (error) {
  }
}
function getDefaultColorMode(fallbackValue) {
  const persistedPreference = getColorModeFromLocalStorage();
  if (persistedPreference) {
    return persistedPreference;
  } else if (fallbackValue === "system") {
    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return isSystemDark ? "dark" : "light";
  } else {
    return fallbackValue;
  }
}
function getColorModeClassName(isDark) {
  return isDark ? colorModeClassNames.dark : colorModeClassNames.light;
}
function syncBodyColorModeClassName(isDark) {
  const body = isServer ? mockBody : document.body;
  body.classList.add(getColorModeClassName(isDark));
  body.classList.remove(isDark ? colorModeClassNames.light : colorModeClassNames.dark);
}
const space = {
  px: "1px",
  "0_5": "0.125rem",
  "1": "0.25rem",
  "1_5": "0.375rem",
  "2": "0.5rem",
  "2_5": "0.625rem",
  "3": "0.75rem",
  "3_5": "0.875rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "7": "1.75rem",
  "8": "2rem",
  "9": "2.25rem",
  "10": "2.5rem",
  "12": "3rem",
  "14": "3.5rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "28": "7rem",
  "32": "8rem",
  "36": "9rem",
  "40": "10rem",
  "44": "11rem",
  "48": "12rem",
  "52": "13rem",
  "56": "14rem",
  "60": "15rem",
  "64": "16rem",
  "72": "18rem",
  "80": "20rem",
  "96": "24rem"
};
const sizes = {
  ...space,
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
  containerSm: "640px",
  containerMd: "768px",
  containerLg: "1024px",
  containerXl: "1280px",
  container2xl: "1536px"
};
const baseMedia = {
  sm: `(min-width: ${sizes.containerSm})`,
  md: `(min-width: ${sizes.containerMd})`,
  lg: `(min-width: ${sizes.containerLg})`,
  xl: `(min-width: ${sizes.containerXl})`,
  "2xl": `(min-width: ${sizes.container2xl})`,
  "reduce-motion": "(prefers-reduced-motion: reduce)",
  light: "(prefers-color-scheme: light)",
  dark: "(prefers-color-scheme: dark)"
};
const background = {
  bg: (value) => ({ background: value }),
  bgColor: (value) => ({ backgroundColor: value })
};
const border = {
  borderX: (value) => ({
    borderLeft: value,
    borderRight: value
  }),
  borderY: (value) => ({
    borderTop: value,
    borderBottom: value
  })
};
const display = {
  d: (value) => ({ display: value })
};
const margin = {
  m: (value) => ({ margin: value }),
  mt: (value) => ({ marginTop: value }),
  mr: (value) => ({ marginRight: value }),
  marginStart: (value) => ({ marginInlineStart: value }),
  ms: (value) => ({ marginInlineStart: value }),
  mb: (value) => ({ marginBottom: value }),
  ml: (value) => ({ marginLeft: value }),
  marginEnd: (value) => ({ marginInlineEnd: value }),
  me: (value) => ({ marginInlineEnd: value }),
  mx: (value) => ({
    marginInlineStart: value,
    marginInlineEnd: value
  }),
  my: (value) => ({ marginTop: value, marginBottom: value }),
  spaceX: (value) => ({
    "& > * + *": {
      marginLeft: value
    }
  }),
  spaceY: (value) => ({
    "& > * + *": {
      marginTop: value
    }
  })
};
const padding = {
  p: (value) => ({ padding: value }),
  pt: (value) => ({ paddingTop: value }),
  pr: (value) => ({ paddingRight: value }),
  paddingStart: (value) => ({ paddingInlineStart: value }),
  ps: (value) => ({ paddingInlineStart: value }),
  pb: (value) => ({ paddingBottom: value }),
  pl: (value) => ({ paddingLeft: value }),
  pe: (value) => ({ paddingInlineEnd: value }),
  paddingEnd: (value) => ({ paddingInlineEnd: value }),
  px: (value) => ({
    paddingInlineStart: value,
    paddingInlineEnd: value
  }),
  py: (value) => ({ paddingTop: value, paddingBottom: value })
};
const position = {
  pos: (value) => ({ position: value })
};
function createGroupSelector(...selectors) {
  return selectors.map((item) => `[role=group]${item} &, [data-group]${item} &, .group${item} &`).join(", ");
}
function createPeerSelector(...selectors) {
  return selectors.map((item) => `[data-peer]${item} ~ &, .peer${item} ~ &`).join(", ");
}
const pseudoSelectors = {
  _hover: (value) => ({
    "&:hover, &[data-hover]": value
  }),
  _active: (value) => ({
    "&:active, &[data-active]": value
  }),
  _focus: (value) => ({
    "&:focus, &[data-focus]": value
  }),
  _highlighted: (value) => ({
    "&[data-highlighted]": value
  }),
  _focusWithin: (value) => ({
    "&:focus-within": value
  }),
  _focusVisible: (value) => ({
    "&:focus-visible": value
  }),
  _disabled: (value) => ({
    "&[disabled], &[aria-disabled=true], &[data-disabled]": value
  }),
  _readOnly: (value) => ({
    "&[aria-readonly=true], &[readonly], &[data-readonly]": value
  }),
  _before: (value) => ({
    "&::before": value
  }),
  _after: (value) => ({
    "&::after": value
  }),
  _empty: (value) => ({
    "&:empty": value
  }),
  _expanded: (value) => ({
    "&[aria-expanded=true], &[data-expanded]": value
  }),
  _checked: (value) => ({
    "&[aria-checked=true], &[data-checked]": value
  }),
  _grabbed: (value) => ({
    "&[aria-grabbed=true], &[data-grabbed]": value
  }),
  _pressed: (value) => ({
    "&[aria-pressed=true], &[data-pressed]": value
  }),
  _invalid: (value) => ({
    "&[aria-invalid=true], &[data-invalid]": value
  }),
  _valid: (value) => ({
    "&[data-valid], &[data-state=valid]": value
  }),
  _loading: (value) => ({
    "&[data-loading], &[aria-busy=true]": value
  }),
  _selected: (value) => ({
    "&[aria-selected=true], &[data-selected]": value
  }),
  _hidden: (value) => ({
    "&[hidden], &[data-hidden]": value
  }),
  _even: (value) => ({
    "&:nth-of-type(even)": value
  }),
  _odd: (value) => ({
    "&:nth-of-type(odd)": value
  }),
  _first: (value) => ({
    "&:first-of-type": value
  }),
  _last: (value) => ({
    "&:last-of-type": value
  }),
  _notFirst: (value) => ({
    "&:not(:first-of-type)": value
  }),
  _notLast: (value) => ({
    "&:not(:last-of-type)": value
  }),
  _visited: (value) => ({
    "&:visited": value
  }),
  _activeLink: (value) => ({
    "&[aria-current=page]": value
  }),
  _activeStep: (value) => ({
    "&[aria-current=step]": value
  }),
  _indeterminate: (value) => ({
    "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]": value
  }),
  _groupHover: (value) => ({
    [createGroupSelector(":hover", "[data-hover]")]: value
  }),
  _peerHover: (value) => ({
    [createPeerSelector(":hover", "[data-hover]")]: value
  }),
  _groupFocus: (value) => ({
    [createGroupSelector(":focus", "[data-focus]")]: value
  }),
  _peerFocus: (value) => ({
    [createPeerSelector(":focus", "[data-focus]")]: value
  }),
  _groupFocusVisible: (value) => ({
    [createGroupSelector(":focus-visible")]: value
  }),
  _peerFocusVisible: (value) => ({
    [createPeerSelector(":focus-visible")]: value
  }),
  _groupActive: (value) => ({
    [createGroupSelector(":active", "[data-active]")]: value
  }),
  _peerActive: (value) => ({
    [createPeerSelector(":active", "[data-active]")]: value
  }),
  _groupSelected: (value) => ({
    [createGroupSelector("[aria-selected=true]", "[data-selected]")]: value
  }),
  _peerSelected: (value) => ({
    [createPeerSelector("[aria-selected=true]", "[data-selected]")]: value
  }),
  _groupDisabled: (value) => ({
    [createGroupSelector(":disabled", "[data-disabled]")]: value
  }),
  _peerDisabled: (value) => ({
    [createPeerSelector(":disabled", "[data-disabled]")]: value
  }),
  _groupInvalid: (value) => ({
    [createGroupSelector(":invalid", "[data-invalid]")]: value
  }),
  _peerInvalid: (value) => ({
    [createPeerSelector(":invalid", "[data-invalid]")]: value
  }),
  _groupChecked: (value) => ({
    [createGroupSelector(":checked", "[data-checked]")]: value
  }),
  _peerChecked: (value) => ({
    [createPeerSelector(":checked", "[data-checked]")]: value
  }),
  _groupFocusWithin: (value) => ({
    [createGroupSelector(":focus-within")]: value
  }),
  _peerFocusWithin: (value) => ({
    [createPeerSelector(":focus-within")]: value
  }),
  _peerPlaceholderShown: (value) => ({
    [createPeerSelector(":placeholder-shown")]: value
  }),
  _placeholder: (value) => ({
    "&::placeholder": value
  }),
  _placeholderShown: (value) => ({
    "&:placeholder-shown": value
  }),
  _fullScreen: (value) => ({
    "&:fullscreen": value
  }),
  _selection: (value) => ({
    "&::selection": value
  }),
  _mediaDark: (value) => ({
    "@media (prefers-color-scheme: dark)": value
  }),
  _mediaReduceMotion: (value) => ({
    "@media (prefers-reduced-motion: reduce)": value
  }),
  _dark: (value) => ({
    ".hope-ui-dark &": value
  }),
  _light: (value) => ({
    ".hope-ui-light &": value
  })
};
const radii$1 = {
  borderTopRadius: (value) => ({
    borderTopLeftRadius: value,
    borderTopRightRadius: value
  }),
  borderRightRadius: (value) => ({
    borderTopRightRadius: value,
    borderBottomRightRadius: value
  }),
  borderStartRadius: (value) => ({
    borderStartStartRadius: value,
    borderEndStartRadius: value
  }),
  borderBottomRadius: (value) => ({
    borderBottomLeftRadius: value,
    borderBottomRightRadius: value
  }),
  borderLeftRadius: (value) => ({
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value
  }),
  borderEndRadius: (value) => ({
    borderStartEndRadius: value,
    borderEndEndRadius: value
  }),
  rounded: (value) => ({
    borderRadius: value
  }),
  roundedTop: (value) => ({
    borderTopLeftRadius: value,
    borderTopRightRadius: value
  }),
  roundedRight: (value) => ({
    borderTopRightRadius: value,
    borderBottomRightRadius: value
  }),
  roundedStart: (value) => ({
    borderStartStartRadius: value,
    borderEndStartRadius: value
  }),
  roundedBottom: (value) => ({
    borderBottomLeftRadius: value,
    borderBottomRightRadius: value
  }),
  roundedLeft: (value) => ({
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value
  }),
  roundedEnd: (value) => ({
    borderStartEndRadius: value,
    borderEndEndRadius: value
  })
};
const shadow = {
  shadow: (value) => ({ boxShadow: value })
};
const size = {
  w: (value) => ({ width: value }),
  minW: (value) => ({ minWidth: value }),
  maxW: (value) => ({ maxWidth: value }),
  h: (value) => ({ height: value }),
  minH: (value) => ({ minHeight: value }),
  maxH: (value) => ({ maxHeight: value }),
  boxSize: (value) => ({ width: value, height: value })
};
const typography = {
  noOfLines: (value) => ({
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": value
  })
};
const utils = {
  ...background,
  ...border,
  ...display,
  ...position,
  ...pseudoSelectors,
  ...radii$1,
  ...margin,
  ...padding,
  ...shadow,
  ...size,
  ...typography
};
const blackAlpha = {
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
};
const whiteAlpha = {
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
};
const commonColors = {
  ...blackAlpha,
  ...whiteAlpha
};
const primary = {
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
};
const accent = {
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
};
const neutral = {
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
};
const success = {
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
};
const info = {
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
};
const warning = {
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
};
const danger = {
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
};
const semanticColors = {
  loContrast: "white",
  background: "$loContrast",
  focusRing: "#96c7f2",
  closeButtonHoverBackground: "$blackAlpha4",
  closeButtonActiveBackground: "$blackAlpha5",
  progressStripe: "$whiteAlpha6"
};
const lightColors = {
  ...primary,
  ...accent,
  ...neutral,
  ...success,
  ...info,
  ...warning,
  ...danger,
  ...semanticColors
};
const primaryDark = {
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
};
const accentDark = {
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
};
const neutralDark = {
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
};
const successDark = {
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
};
const infoDark = {
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
};
const warningDark = {
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
};
const dangerDark = {
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
};
const semanticDarkColors = {
  loContrast: "$neutral1",
  background: "$loContrast",
  focusRing: "#0a4481",
  closeButtonHoverBackground: "$whiteAlpha4",
  closeButtonActiveBackground: "$whiteAlpha5",
  progressStripe: "$blackAlpha6"
};
const darkColors = {
  ...primaryDark,
  ...accentDark,
  ...neutralDark,
  ...successDark,
  ...infoDark,
  ...warningDark,
  ...dangerDark,
  ...semanticDarkColors
};
const radii = {
  none: "0",
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
};
const shadows = {
  none: "0 0 #0000",
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  sm: "0 1px 3px 0 rgb(0 0 0 / 0.09), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.09), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.09), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.09), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.24)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.06)",
  outline: "0 0 0 3px $colors$focusRing"
};
const darkShadows = {
  lg: "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
};
const fonts = {
  sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol","Noto Color Emoji"',
  serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
};
const fontSizes = {
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
};
const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900
};
const lineHeights = {
  normal: "normal",
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: 2,
  "3": ".75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "7": "1.75rem",
  "8": "2rem",
  "9": "2.25rem",
  "10": "2.5rem"
};
const letterSpacings = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em"
};
const zIndices = {
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
};
const baseThemeTokens = {
  colors: {
    ...commonColors,
    ...lightColors
  },
  space,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  zIndices
};
const baseDarkThemeTokens = {
  colors: darkColors,
  shadows: darkShadows
};
const {
  theme: baseTheme,
  css,
  globalCss,
  config,
  createTheme,
  getCssText,
  keyframes
} = createStitches({
  prefix: "hope",
  themeMap: {
    ...defaultThemeMap,
    borderWidth: "sizes",
    borderTopWidth: "sizes",
    borderRightWidth: "sizes",
    borderBottomWidth: "sizes",
    borderLeftWidth: "sizes",
    strokeWidth: "sizes"
  },
  theme: baseThemeTokens,
  media: baseMedia,
  utils
});
const modalTransitionName = {
  fade: "hope-modal-fade-transition",
  fadeInBottom: "hope-modal-fade-in-bottom-transition",
  scale: "hope-modal-scale-transition"
};
const modalTransitionStyles = globalCss({
  [`.${modalTransitionName.fade}-enter, .${modalTransitionName.fade}-exit-to`]: {
    opacity: 0
  },
  [`.${modalTransitionName.fade}-enter-to, .${modalTransitionName.fade}-exit`]: {
    opacity: 1
  },
  [`.${modalTransitionName.fade}-enter-active`]: {
    transition: "opacity 300ms ease-out"
  },
  [`.${modalTransitionName.fade}-exit-active`]: {
    transition: "opacity 200ms ease-in"
  },
  [`.${modalTransitionName.fadeInBottom}-enter, .${modalTransitionName.fadeInBottom}-exit-to`]: {
    opacity: 0,
    transform: "translateY(16px)"
  },
  [`.${modalTransitionName.fadeInBottom}-enter-to, .${modalTransitionName.fadeInBottom}-exit`]: {
    opacity: 1,
    transform: "translateY(0)"
  },
  [`.${modalTransitionName.fadeInBottom}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-out"
  },
  [`.${modalTransitionName.fadeInBottom}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-in"
  },
  [`.${modalTransitionName.scale}-enter, .${modalTransitionName.scale}-exit-to`]: {
    opacity: 0,
    transform: "scale(0.95)"
  },
  [`.${modalTransitionName.scale}-enter-to, .${modalTransitionName.scale}-exit`]: {
    opacity: 1,
    transform: "scale(1)"
  },
  [`.${modalTransitionName.scale}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-out"
  },
  [`.${modalTransitionName.scale}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-in"
  }
});
const modalOverlayStyles = css({
  zIndex: "$overlay",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "hsl(0 0% 0% / 65%)"
});
const baseModalContainerStyles = css({
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
});
const modalContainerStyles = css(baseModalContainerStyles, {
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
});
const baseDialogStyles = css({
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
});
const modalDialogStyles = css(baseDialogStyles, {
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
});
const modalHeaderStyles = css({
  flex: 0,
  pt: "$5",
  px: "$5",
  pb: "$3",
  fontSize: "$lg",
  fontWeight: "$medium"
});
const modalBodyStyles = css({
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
});
const modalFooterStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  pt: "$3",
  px: "$5",
  pb: "$5"
});
const modalCloseButtonStyles = css({
  position: "absolute",
  top: "$4",
  insetInlineEnd: "$4"
});
const drawerTransitionName = {
  fade: "hope-drawer-fade-transition",
  slideInTop: "hope-drawer-slide-in-top-transition",
  slideInRight: "hope-drawer-slide-in-right-transition",
  slideInBottom: "hope-drawer-slide-in-bottom-transition",
  slideInLeft: "hope-drawer-slide-in-left-transition"
};
const drawerTransitionStyles = globalCss({
  [`.${drawerTransitionName.fade}-enter, .${drawerTransitionName.fade}-exit-to`]: {
    opacity: 0
  },
  [`.${drawerTransitionName.fade}-enter-to, .${drawerTransitionName.fade}-exit`]: {
    opacity: 1
  },
  [`.${drawerTransitionName.fade}-enter-active, .${drawerTransitionName.fade}-exit-active`]: {
    transition: "opacity 500ms ease-in-out"
  },
  [`.${drawerTransitionName.slideInTop}-enter-active, .${drawerTransitionName.slideInTop}-exit-active,
    .${drawerTransitionName.slideInRight}-enter-active, .${drawerTransitionName.slideInRight}-exit-active,
    .${drawerTransitionName.slideInBottom}-enter-active, .${drawerTransitionName.slideInBottom}-exit-active,
    .${drawerTransitionName.slideInLeft}-enter-active, .${drawerTransitionName.slideInLeft}-exit-active`]: {
    transition: "transform 500ms ease-in-out"
  },
  [`.${drawerTransitionName.slideInTop}-enter, .${drawerTransitionName.slideInTop}-exit-to`]: {
    transform: "translateY(-100%)"
  },
  [`.${drawerTransitionName.slideInTop}-enter-to, .${drawerTransitionName.slideInTop}-exit`]: {
    transform: "translateY(0)"
  },
  [`.${drawerTransitionName.slideInRight}-enter, .${drawerTransitionName.slideInRight}-exit-to`]: {
    transform: "translateX(100%)"
  },
  [`.${drawerTransitionName.slideInRight}-enter-to, .${drawerTransitionName.slideInRight}-exit`]: {
    transform: "translateX(0)"
  },
  [`.${drawerTransitionName.slideInBottom}-enter, .${drawerTransitionName.slideInBottom}-exit-to`]: {
    transform: "translateY(100%)"
  },
  [`.${drawerTransitionName.slideInBottom}-enter-to, .${drawerTransitionName.slideInBottom}-exit`]: {
    transform: "translateY(0)"
  },
  [`.${drawerTransitionName.slideInLeft}-enter, .${drawerTransitionName.slideInLeft}-exit-to`]: {
    transform: "translateX(-100%)"
  },
  [`.${drawerTransitionName.slideInLeft}-enter-to, .${drawerTransitionName.slideInLeft}-exit`]: {
    transform: "translateX(0)"
  }
});
const drawerContainerStyles = css(baseModalContainerStyles, {
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
});
const drawerDialogStyles = css(baseDialogStyles, {
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
});
const menuTransitionName = {
  scaleTopLeft: "hope-menu-scale-top-left-transition",
  scaleTopRight: "hope-menu-scale-top-right-transition",
  scaleBottomLeft: "hope-menu-scale-bottom-left-transition",
  scaleBottomRight: "hope-menu-scale-bottom-right-transition"
};
function createMenuScaleTransition(name, transformOrigin) {
  return {
    [`.${name}-enter, .${name}-exit-to`]: {
      opacity: 0,
      transform: "scale(0.8)"
    },
    [`.${name}-enter-to, .${name}-exit`]: {
      opacity: 1,
      transform: "scale(1)"
    },
    [`.${name}-enter-active`]: {
      transformOrigin,
      transitionProperty: "opacity, transform",
      transitionDuration: "200ms",
      transitionTimingFunction: "ease-out"
    },
    [`.${name}-exit-active`]: {
      transformOrigin,
      transitionProperty: "opacity, transform",
      transitionDuration: "100ms",
      transitionTimingFunction: "ease-in"
    }
  };
}
const menuTransitionStyles = globalCss({
  ...createMenuScaleTransition(menuTransitionName.scaleTopLeft, "top left"),
  ...createMenuScaleTransition(menuTransitionName.scaleTopRight, "top right"),
  ...createMenuScaleTransition(menuTransitionName.scaleBottomLeft, "bottom left"),
  ...createMenuScaleTransition(menuTransitionName.scaleBottomRight, "bottom right")
});
const menuTriggerStyles = css({
  appearance: "none",
  display: "inline-flex",
  alignItems: "center",
  outline: "none"
});
const menuContentStyles = css({
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
});
const menuGroupStyles = css({});
const menuLabelStyles = css({
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
function createColorVariant$1(config2) {
  return {
    color: config2.color,
    [`&[data-active]`]: {
      backgroundColor: config2.bgColorActive
    }
  };
}
const menuItemStyles = css({
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
      primary: createColorVariant$1({ color: "$primary11", bgColorActive: "$primary3" }),
      accent: createColorVariant$1({ color: "$accent11", bgColorActive: "$accent3" }),
      neutral: createColorVariant$1({ color: "$neutral12", bgColorActive: "$neutral4" }),
      success: createColorVariant$1({ color: "$success11", bgColorActive: "$success3" }),
      info: createColorVariant$1({ color: "$info11", bgColorActive: "$info3" }),
      warning: createColorVariant$1({ color: "$warning11", bgColorActive: "$warning3" }),
      danger: createColorVariant$1({ color: "$danger11", bgColorActive: "$danger3" })
    }
  },
  defaultVariants: {
    colorScheme: "neutral"
  }
});
const menuItemIconWrapperStyles = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
});
const menuItemTextStyles = css({
  flexGrow: 1
});
const menuItemCommandStyles = css({
  flexShrink: 0,
  color: "$neutral11",
  fontSize: "$sm",
  lineHeight: "$none"
});
const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
});
const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
});
const notificationTransitionName = {
  slideInTop: "hope-notification-slide-in-top-transition",
  slideInRight: "hope-notification-slide-in-right-transition",
  slideInBottom: "hope-notification-slide-in-bottom-transition",
  slideInLeft: "hope-notification-slide-in-left-transition"
};
function createNotificationSlideTransition(config2) {
  return {
    [`.${config2.name}-enter, .${config2.name}-exit-to`]: {
      opacity: 0,
      transform: config2.enterTransform
    },
    [`.${config2.name}-enter-to, .${config2.name}-exit`]: {
      opacity: 1,
      transform: config2.leaveTransform
    },
    [`.${config2.name}-enter-active`]: {
      transitionProperty: "opacity, transform",
      transitionTimingFunction: "cubic-bezier(.51,.3,0,1.21)",
      transitionDuration: "300ms"
    },
    [`.${config2.name}-exit-active`]: {
      transitionProperty: "opacity, transform",
      transitionTimingFunction: "ease-in",
      transitionDuration: "200ms"
    }
  };
}
const notificationTransitionStyles = globalCss({
  ...createNotificationSlideTransition({
    name: notificationTransitionName.slideInTop,
    enterTransform: "translateY(-100%)",
    leaveTransform: "translateY(0)"
  }),
  ...createNotificationSlideTransition({
    name: notificationTransitionName.slideInRight,
    enterTransform: "translateX(100%)",
    leaveTransform: "translateX(0)"
  }),
  ...createNotificationSlideTransition({
    name: notificationTransitionName.slideInBottom,
    enterTransform: "translateY(100%)",
    leaveTransform: "translateY(0)"
  }),
  ...createNotificationSlideTransition({
    name: notificationTransitionName.slideInLeft,
    enterTransform: "translateX(-100%)",
    leaveTransform: "translateX(0)"
  })
});
const notificationListStyles = css({
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
});
const notificationStyles = css({
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
});
const notificationLoaderStyles = css({
  animation: `1s linear infinite ${spin}`
});
const notificationIconStyles = css({
  flexShrink: 0,
  variants: {
    status: {
      success: { color: "$success9" },
      info: { color: "$info9" },
      warning: { color: "$warning9" },
      danger: { color: "$danger9" }
    }
  }
});
const notificationTitleStyles = css({
  fontWeight: "$medium"
});
const notificationDescriptionStyles = css({
  display: "inline-block",
  color: "$neutral11"
});
const popoverTransitionName = {
  scale: "hope-popover-scale-transition"
};
const popoverTransitionStyles = globalCss({
  [`.${popoverTransitionName.scale}-enter, .${popoverTransitionName.scale}-exit-to`]: {
    opacity: 0,
    transform: "scale(0.95)"
  },
  [`.${popoverTransitionName.scale}-enter-to, .${popoverTransitionName.scale}-exit`]: {
    opacity: 1,
    transform: "scale(1)"
  },
  [`.${popoverTransitionName.scale}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease"
  },
  [`.${popoverTransitionName.scale}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-in-out"
  }
});
const popoverContentStyles = css({
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
});
const popoverHeaderStyles = css({
  display: "flex",
  alignItems: "center",
  flex: 0,
  borderColor: "inherit",
  borderBottomWidth: "1px",
  px: "$3",
  py: "$2",
  fontSize: "$base",
  fontWeight: "$medium"
});
const popoverBodyStyles = css({
  flex: 1,
  px: "$3",
  py: "$2"
});
const popoverFooterStyles = css({
  display: "flex",
  alignItems: "center",
  borderColor: "inherit",
  borderTopWidth: "1px",
  px: "$3",
  py: "$2"
});
const popoverCloseButtonStyles = css({
  position: "absolute",
  top: "$2",
  insetInlineEnd: "$2"
});
const popoverArrowStyles = css({
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
function createInputSizeVariant(config2) {
  return {
    minHeight: config2.minHeight,
    fontSize: config2.fontSize,
    lineHeight: config2.lineHeight
  };
}
const inputSizes = {
  xs: createInputSizeVariant({ fontSize: "$xs", lineHeight: "$4", minHeight: "$6" }),
  sm: createInputSizeVariant({ fontSize: "$sm", lineHeight: "$5", minHeight: "$8" }),
  md: createInputSizeVariant({ fontSize: "$base", lineHeight: "$6", minHeight: "$10" }),
  lg: createInputSizeVariant({ fontSize: "$lg", lineHeight: "$7", minHeight: "$12" })
};
const commonOutlineAndFilledStyles = {
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
};
const baseInputResetStyles = css({
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
        ...commonOutlineAndFilledStyles
      },
      filled: {
        border: "1px solid transparent",
        backgroundColor: "$neutral3",
        "&:hover, &:focus": {
          backgroundColor: "$neutral4"
        },
        ...commonOutlineAndFilledStyles
      },
      unstyled: {
        border: "1px solid transparent",
        backgroundColor: "transparent"
      }
    },
    size: {
      ...inputSizes
    }
  }
});
function createVariantAndSizeCompoundVariant(config2) {
  return [
    {
      variant: config2.variant,
      size: config2.size,
      css: { px: config2.paddingX }
    },
    {
      withLeftElement: true,
      variant: config2.variant,
      size: config2.size,
      css: { paddingInlineStart: config2.paddingWithElement }
    },
    {
      withRightElement: true,
      variant: config2.variant,
      size: config2.size,
      css: { paddingInlineEnd: config2.paddingWithElement }
    }
  ];
}
const inputStyles = css(baseInputResetStyles, {
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
    ...createVariantAndSizeCompoundVariant({
      variant: "outline",
      size: "xs",
      paddingX: "$2",
      paddingWithElement: "$6"
    }),
    ...createVariantAndSizeCompoundVariant({
      variant: "outline",
      size: "sm",
      paddingX: "$2_5",
      paddingWithElement: "$8"
    }),
    ...createVariantAndSizeCompoundVariant({
      variant: "outline",
      size: "md",
      paddingX: "$3",
      paddingWithElement: "$10"
    }),
    ...createVariantAndSizeCompoundVariant({
      variant: "outline",
      size: "lg",
      paddingX: "$4",
      paddingWithElement: "$12"
    }),
    ...createVariantAndSizeCompoundVariant({
      variant: "filled",
      size: "xs",
      paddingX: "$2",
      paddingWithElement: "$6"
    }),
    ...createVariantAndSizeCompoundVariant({
      variant: "filled",
      size: "sm",
      paddingX: "$2_5",
      paddingWithElement: "$8"
    }),
    ...createVariantAndSizeCompoundVariant({
      variant: "filled",
      size: "md",
      paddingX: "$3",
      paddingWithElement: "$10"
    }),
    ...createVariantAndSizeCompoundVariant({
      variant: "filled",
      size: "lg",
      paddingX: "$4",
      paddingWithElement: "$12"
    }),
    ...createVariantAndSizeCompoundVariant({
      variant: "unstyled",
      size: "xs",
      paddingX: 0,
      paddingWithElement: "$6"
    }),
    ...createVariantAndSizeCompoundVariant({
      variant: "unstyled",
      size: "sm",
      paddingX: 0,
      paddingWithElement: "$8"
    }),
    ...createVariantAndSizeCompoundVariant({
      variant: "unstyled",
      size: "md",
      paddingX: 0,
      paddingWithElement: "$10"
    }),
    ...createVariantAndSizeCompoundVariant({
      variant: "unstyled",
      size: "lg",
      paddingX: 0,
      paddingWithElement: "$12"
    })
  ]
});
const inputGroupStyles = css({
  position: "relative",
  display: "flex",
  width: "100%"
});
const inputElementStyles = css({
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
        ...inputSizes.xs,
        width: inputSizes.xs.minHeight
      },
      sm: {
        ...inputSizes.sm,
        width: inputSizes.sm.minHeight
      },
      md: {
        ...inputSizes.md,
        width: inputSizes.md.minHeight
      },
      lg: {
        ...inputSizes.lg,
        width: inputSizes.lg.minHeight
      }
    }
  }
});
function createInputAddonVariantAndSizeCompoundVariant(config2) {
  return {
    variant: config2.variant,
    size: config2.size,
    css: { px: config2.paddingX }
  };
}
const inputAddonStyles = css({
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
      ...inputSizes
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
    createInputAddonVariantAndSizeCompoundVariant({
      variant: "outline",
      size: "xs",
      paddingX: "$2"
    }),
    createInputAddonVariantAndSizeCompoundVariant({
      variant: "outline",
      size: "sm",
      paddingX: "$2_5"
    }),
    createInputAddonVariantAndSizeCompoundVariant({
      variant: "outline",
      size: "md",
      paddingX: "$3"
    }),
    createInputAddonVariantAndSizeCompoundVariant({
      variant: "outline",
      size: "lg",
      paddingX: "$4"
    }),
    createInputAddonVariantAndSizeCompoundVariant({
      variant: "filled",
      size: "xs",
      paddingX: "$2"
    }),
    createInputAddonVariantAndSizeCompoundVariant({
      variant: "filled",
      size: "sm",
      paddingX: "$2_5"
    }),
    createInputAddonVariantAndSizeCompoundVariant({
      variant: "filled",
      size: "md",
      paddingX: "$3"
    }),
    createInputAddonVariantAndSizeCompoundVariant({
      variant: "filled",
      size: "lg",
      paddingX: "$4"
    }),
    createInputAddonVariantAndSizeCompoundVariant({
      variant: "unstyled",
      size: "xs",
      paddingX: 0
    }),
    createInputAddonVariantAndSizeCompoundVariant({
      variant: "unstyled",
      size: "sm",
      paddingX: 0
    }),
    createInputAddonVariantAndSizeCompoundVariant({
      variant: "unstyled",
      size: "md",
      paddingX: 0
    }),
    createInputAddonVariantAndSizeCompoundVariant({
      variant: "unstyled",
      size: "lg",
      paddingX: 0
    })
  ]
});
const selectTransitionName = {
  fadeInTop: "hope-select-fade-in-top-transition"
};
const selectTransitionStyles = globalCss({
  [`.${selectTransitionName.fadeInTop}-enter, .${selectTransitionName.fadeInTop}-exit-to`]: {
    opacity: 0,
    transform: "translateY(-16px)"
  },
  [`.${selectTransitionName.fadeInTop}-enter-to, .${selectTransitionName.fadeInTop}-exit`]: {
    opacity: 1,
    transform: "translateY(0)"
  },
  [`.${selectTransitionName.fadeInTop}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-out"
  },
  [`.${selectTransitionName.fadeInTop}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "100ms",
    transitionTimingFunction: "ease-in"
  }
});
function createVariantAndSizeCompoundVariants$1(variant, paddingStart, paddingEnd) {
  return Object.entries({
    xs: {
      start: paddingStart != null ? paddingStart : "$2",
      end: paddingEnd != null ? paddingEnd : "$1"
    },
    sm: {
      start: paddingStart != null ? paddingStart : "$2_5",
      end: paddingEnd != null ? paddingEnd : "$1_5"
    },
    md: {
      start: paddingStart != null ? paddingStart : "$3",
      end: paddingEnd != null ? paddingEnd : "$2"
    },
    lg: {
      start: paddingStart != null ? paddingStart : "$4",
      end: paddingEnd != null ? paddingEnd : "$3"
    }
  }).map(([key, value]) => ({
    variant,
    size: key,
    css: {
      paddingInlineStart: value.start,
      paddingInlineEnd: value.end
    }
  }));
}
const selectTriggerStyles = css(baseInputResetStyles, {
  appearance: "none",
  display: "inline-flex",
  alignItems: "center",
  outline: "none",
  cursor: "pointer",
  "&:focus": {
    outline: "none"
  },
  compoundVariants: [
    ...createVariantAndSizeCompoundVariants$1("outline"),
    ...createVariantAndSizeCompoundVariants$1("filled"),
    ...createVariantAndSizeCompoundVariants$1("unstyled", 0, 0)
  ]
});
const selectSingleValueStyles = css({
  flexGrow: 1,
  flexShrink: 1,
  textAlign: "start",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
});
const selectMultiValueStyles = css({
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
});
const selectTagStyles = css({
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
});
const selectTagCloseButtonStyles = css({
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
});
const selectPlaceholderStyles = css(selectSingleValueStyles, {
  color: "$neutral9",
  opacity: 1
});
const selectIconStyles = css({
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
});
const selectContentStyles = css({
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
});
const selectListboxStyles = css({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  maxHeight: "$60",
  width: "100%",
  overflowY: "auto",
  margin: 0,
  padding: "$1",
  listStyle: "none"
});
const selectOptGroupStyles = css({});
const selectLabelStyles = css({
  display: "flex",
  alignItems: "center",
  py: "$2",
  px: "$3",
  color: "$neutral11",
  fontSize: "$xs",
  lineHeight: "$4"
});
const selectOptionStyles = css({
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
  [`&[data-active]`]: {
    backgroundColor: "$neutral4"
  }
});
const selectOptionTextStyles = css({
  display: "inline-flex",
  alignItems: "center",
  py: "$2",
  paddingInlineStart: "$3",
  paddingInlineEnd: "$6"
});
const selectOptionIndicatorStyles = css({
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  paddingInlineEnd: "$3",
  color: "$primary10",
  pointerEvents: "none"
});
const tooltipTransitionName = {
  scale: "hope-tooltip-scale-transition"
};
const tooltipTransitionStyles = globalCss({
  [`.${tooltipTransitionName.scale}-enter, .${tooltipTransitionName.scale}-exit-to`]: {
    opacity: 0,
    transform: "scale(0.90)"
  },
  [`.${tooltipTransitionName.scale}-enter-to, .${tooltipTransitionName.scale}-exit`]: {
    opacity: 1,
    transform: "scale(1)"
  },
  [`.${tooltipTransitionName.scale}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease"
  },
  [`.${tooltipTransitionName.scale}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "150ms",
    transitionTimingFunction: "ease-in-out"
  }
});
const tooltipStyles = css({
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
});
const tooltipArrowStyles = css({
  zIndex: "$tooltip",
  position: "absolute",
  boxSize: "8px",
  backgroundColor: "inherit",
  transform: "rotate(45deg)"
});
const globalResetStyles = globalCss({
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
  }
});
function mergeStyleObject(sourceStyleObject, destStyleObject, destResponsiveStyleObject) {
  Object.entries(sourceStyleObject).forEach(([key, value]) => {
    if (isObject(value)) {
      if (key in destResponsiveStyleObject) {
        const atMediaRule = key;
        destResponsiveStyleObject[atMediaRule] = {
          ...destResponsiveStyleObject[atMediaRule],
          ...value
        };
      } else {
        destStyleObject[key] = {
          ...destStyleObject[key],
          ...value
        };
      }
    } else {
      destStyleObject[key] = value;
    }
  });
}
function toCssObject(props, baseStyles) {
  const destStyleObject = {};
  const destResponsiveStyleObject = {
    "@sm": {},
    "@md": {},
    "@lg": {},
    "@xl": {},
    "@2xl": {},
    "@reduce-motion": {},
    "@light": {},
    "@dark": {}
  };
  baseStyles == null ? void 0 : baseStyles.forEach(
    (styles) => styles && mergeStyleObject(styles, destStyleObject, destResponsiveStyleObject)
  );
  Object.entries(props).forEach(([prop, value]) => {
    if (value === null || value === void 0) {
      return;
    }
    if (prop === "css") {
      return;
    }
    if (prop.startsWith("_")) {
      destStyleObject[prop] = value;
    } else if (isObject(value)) {
      Object.keys(value).forEach((key) => {
        if (key === "@initial") {
          destStyleObject[prop] = value[key];
        } else if (key in destResponsiveStyleObject) {
          const atMediaRule = key;
          destResponsiveStyleObject[atMediaRule] = {
            ...destResponsiveStyleObject[atMediaRule],
            [prop]: value[atMediaRule]
          };
        }
      });
    } else {
      destStyleObject[prop] = value;
    }
  });
  props.css && mergeStyleObject(props.css, destStyleObject, destResponsiveStyleObject);
  return { ...destStyleObject, ...destResponsiveStyleObject };
}
function extendBaseTheme(type, themeConfig) {
  const isDark = type === "dark";
  const className = isDark ? colorModeClassNames.dark : colorModeClassNames.light;
  const finalConfig = isDark ? merge({}, baseDarkThemeTokens, themeConfig) : themeConfig;
  const customTheme = createTheme(className, finalConfig);
  return merge({}, baseTheme, customTheme);
}
function mapResponsive(prop, mapper) {
  if (isObject(prop)) {
    return Object.keys(prop).reduce((result, key) => {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }
  if (prop != null) {
    return mapper(prop);
  }
  return null;
}
function colorTokenToCssVar(token) {
  if (!token.startsWith("$")) {
    return token;
  }
  return `var(--hope-colors-${token.substring(1)})`;
}
const visuallyHiddenStyles = css({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0"
});
const HopeContext = createContext();
function applyGlobalTransitionStyles() {
  drawerTransitionStyles();
  menuTransitionStyles();
  modalTransitionStyles();
  notificationTransitionStyles();
  popoverTransitionStyles();
  selectTransitionStyles();
  tooltipTransitionStyles();
}
function HopeProvider(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const defaultProps = {
    enableCssReset: true
  };
  props = mergeProps(defaultProps, props);
  const lightTheme = extendBaseTheme("light", (_b = (_a = props.config) == null ? void 0 : _a.lightTheme) != null ? _b : {});
  const darkTheme = extendBaseTheme("dark", (_d = (_c = props.config) == null ? void 0 : _c.darkTheme) != null ? _d : {});
  const defaultColorMode = getDefaultColorMode((_f = (_e = props.config) == null ? void 0 : _e.initialColorMode) != null ? _f : "light");
  const defaultTheme = defaultColorMode === "dark" ? darkTheme : lightTheme;
  const [colorMode, rawSetColorMode] = createSignal(defaultColorMode);
  const [theme, setTheme] = createSignal(defaultTheme);
  const isDarkMode = () => colorMode() === "dark";
  const setColorMode = (value) => {
    rawSetColorMode(value);
    saveColorModeToLocalStorage(value);
  };
  const toggleColorMode = () => {
    setColorMode(isDarkMode() ? "light" : "dark");
  };
  const context = {
    components: (_h = (_g = props.config) == null ? void 0 : _g.components) != null ? _h : {},
    theme,
    colorMode,
    setColorMode,
    toggleColorMode
  };
  createEffect(() => {
    setTheme(isDarkMode() ? darkTheme : lightTheme);
    syncBodyColorModeClassName(isDarkMode());
  });
  if (props.enableCssReset) {
    globalResetStyles();
  }
  applyGlobalTransitionStyles();
  return createComponent(HopeContext.Provider, {
    value: context,
    get children() {
      return props.children;
    }
  });
}
function useTheme() {
  const context = useContext(HopeContext);
  if (!context) {
    throw new Error("[Hope UI]: useTheme must be used within a HopeProvider");
  }
  return context.theme;
}
function useStyleConfig() {
  const context = useContext(HopeContext);
  if (!context) {
    throw new Error("[Hope UI]: useStyleConfig must be used within a HopeProvider");
  }
  return context.components;
}
function useColorMode() {
  const context = useContext(HopeContext);
  if (!context) {
    throw new Error("[Hope UI]: useColorMode must be used within a HopeProvider");
  }
  return {
    colorMode: context.colorMode,
    setColorMode: context.setColorMode,
    toggleColorMode: context.toggleColorMode
  };
}
function useColorModeValue(light, dark) {
  const {
    colorMode
  } = useColorMode();
  return () => colorMode() === "dark" ? dark : light;
}
function createClassSelector(className) {
  return `.${className}`;
}
function classNames(...classNames2) {
  return classNames2.filter(Boolean).join(" ");
}
function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}
function getNextIndex(current, last, loop) {
  let next = current + 1;
  if (next > last) {
    next = loop ? 0 : last;
  }
  return next;
}
function getPrevIndex(current, last, loop) {
  let next = current - 1;
  if (next < 0) {
    next = loop ? last : 0;
  }
  return next;
}
const borderPropNames = {
  border: true,
  borderWidth: true,
  borderStyle: true,
  borderColor: true,
  borderTop: true,
  borderTopWidth: true,
  borderTopStyle: true,
  borderTopColor: true,
  borderRight: true,
  borderRightWidth: true,
  borderRightStyle: true,
  borderRightColor: true,
  borderBottom: true,
  borderBottomWidth: true,
  borderBottomStyle: true,
  borderBottomColor: true,
  borderLeft: true,
  borderLeftWidth: true,
  borderLeftStyle: true,
  borderLeftColor: true,
  borderX: true,
  borderY: true
};
const colorPropNames = {
  color: true,
  background: true,
  bg: true,
  backgroundColor: true,
  bgColor: true,
  opacity: true
};
const cssPropName = { css: true };
const flexboxPropNames = {
  alignItems: true,
  alignContent: true,
  alignSelf: true,
  justifyItems: true,
  justifyContent: true,
  justifySelf: true,
  flexDirection: true,
  flexWrap: true,
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  order: true
};
const gridLayoutPropNames = {
  gridTemplate: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true,
  gridRow: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridColumn: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true,
  gap: true,
  rowGap: true,
  columnGap: true
};
const interactivityPropNames = {
  appearance: true,
  userSelect: true,
  pointerEvents: true,
  resize: true,
  cursor: true,
  outline: true,
  outlineOffset: true,
  outlineColor: true
};
const layoutPropNames = {
  display: true,
  d: true,
  verticalAlign: true,
  overflow: true,
  overflowX: true,
  overflowY: true,
  objectFit: true,
  objectPosition: true
};
const marginPropNames = {
  margin: true,
  m: true,
  marginTop: true,
  mt: true,
  marginRight: true,
  mr: true,
  marginStart: true,
  ms: true,
  marginBottom: true,
  mb: true,
  marginLeft: true,
  ml: true,
  marginEnd: true,
  me: true,
  mx: true,
  my: true
};
const paddingPropNames = {
  padding: true,
  p: true,
  paddingTop: true,
  pt: true,
  paddingRight: true,
  pr: true,
  paddingStart: true,
  ps: true,
  paddingBottom: true,
  pb: true,
  paddingLeft: true,
  pl: true,
  paddingEnd: true,
  pe: true,
  px: true,
  py: true
};
const positionPropNames = {
  position: true,
  pos: true,
  zIndex: true,
  top: true,
  right: true,
  bottom: true,
  left: true
};
const pseudoSelectorPropNames = {
  _hover: true,
  _active: true,
  _focus: true,
  _highlighted: true,
  _focusWithin: true,
  _focusVisible: true,
  _disabled: true,
  _readOnly: true,
  _before: true,
  _after: true,
  _empty: true,
  _expanded: true,
  _checked: true,
  _grabbed: true,
  _pressed: true,
  _invalid: true,
  _valid: true,
  _loading: true,
  _selected: true,
  _hidden: true,
  _even: true,
  _odd: true,
  _first: true,
  _last: true,
  _notFirst: true,
  _notLast: true,
  _visited: true,
  _activeLink: true,
  _activeStep: true,
  _indeterminate: true,
  _groupHover: true,
  _peerHover: true,
  _groupFocus: true,
  _peerFocus: true,
  _groupFocusVisible: true,
  _peerFocusVisible: true,
  _groupActive: true,
  _peerActive: true,
  _groupSelected: true,
  _peerSelected: true,
  _groupDisabled: true,
  _peerDisabled: true,
  _groupInvalid: true,
  _peerInvalid: true,
  _groupChecked: true,
  _peerChecked: true,
  _groupFocusWithin: true,
  _peerFocusWithin: true,
  _peerPlaceholderShown: true,
  _placeholder: true,
  _placeholderShown: true,
  _fullScreen: true,
  _selection: true,
  _mediaDark: true,
  _mediaReduceMotion: true,
  _dark: true,
  _light: true
};
const radiiPropNames = {
  borderRadius: true,
  borderTopRightRadius: true,
  borderTopLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomLeftRadius: true,
  borderTopRadius: true,
  borderRightRadius: true,
  borderStartRadius: true,
  borderBottomRadius: true,
  borderLeftRadius: true,
  borderEndRadius: true,
  rounded: true,
  roundedTop: true,
  roundedRight: true,
  roundedStart: true,
  roundedBottom: true,
  roundedLeft: true,
  roundedEnd: true
};
const shadowPropNames = {
  textShadow: true,
  boxShadow: true,
  shadow: true
};
const sizePropNames = {
  width: true,
  w: true,
  minWidth: true,
  minW: true,
  maxWidth: true,
  maxW: true,
  height: true,
  h: true,
  minHeight: true,
  minH: true,
  maxHeight: true,
  maxH: true,
  boxSize: true
};
const transformPropNames = {
  transform: true,
  transformOrigin: true,
  clipPath: true
};
const transitionPropNames = {
  transition: true,
  transitionProperty: true,
  transitionTimingFunction: true,
  transitionDuration: true,
  transitionDelay: true,
  animation: true,
  willChange: true
};
const typographyPropNames = {
  fontFamily: true,
  fontSize: true,
  fontWeight: true,
  lineHeight: true,
  letterSpacing: true,
  textAlign: true,
  fontStyle: true,
  textTransform: true,
  textDecoration: true,
  noOfLines: true
};
const stylePropNames = {
  ...borderPropNames,
  ...colorPropNames,
  ...flexboxPropNames,
  ...gridLayoutPropNames,
  ...interactivityPropNames,
  ...layoutPropNames,
  ...marginPropNames,
  ...paddingPropNames,
  ...positionPropNames,
  ...radiiPropNames,
  ...shadowPropNames,
  ...sizePropNames,
  ...transformPropNames,
  ...transitionPropNames,
  ...typographyPropNames,
  ...pseudoSelectorPropNames,
  ...cssPropName
};
const styledSystemStyles = css({});
function createStyledSystemClass(props, baseStyles) {
  return styledSystemStyles({ css: toCssObject(props, baseStyles) });
}
function getUsedStylePropNames(props) {
  return Object.keys(props).filter((key) => key in stylePropNames);
}
const styled = (component, styleOptions) => {
  const hopeComponent = (props) => {
    const usedStylePropNames = getUsedStylePropNames(props);
    const propsWithDefault = mergeProps({
      as: component
    }, props);
    const [local, styleProps, others] = splitProps(propsWithDefault, ["as", "class", "className", "__baseStyle"], usedStylePropNames);
    const __baseStyles = createMemo(() => {
      const factoryBaseStyle = isFunction(styleOptions == null ? void 0 : styleOptions.baseStyle) ? styleOptions == null ? void 0 : styleOptions.baseStyle(props) : styleOptions == null ? void 0 : styleOptions.baseStyle;
      return [factoryBaseStyle, local.__baseStyle];
    });
    const classes = () => {
      return classNames(
        styleOptions == null ? void 0 : styleOptions.baseClass,
        local.class,
        local.className,
        createStyledSystemClass(styleProps, __baseStyles())
      );
    };
    return createComponent(Dynamic, mergeProps$1({
      get component() {
        var _a;
        return (_a = local.as) != null ? _a : "div";
      },
      get ["class"]() {
        return classes();
      }
    }, others));
  };
  hopeComponent.toString = () => (styleOptions == null ? void 0 : styleOptions.baseClass) ? createClassSelector(styleOptions.baseClass) : "";
  return hopeComponent;
};
function factory() {
  const cache = /* @__PURE__ */ new Map();
  return new Proxy(styled, {
    apply(target, thisArg, argArray) {
      return styled(...argArray);
    },
    get(_, element) {
      if (!cache.has(element)) {
        cache.set(element, styled(element));
      }
      return cache.get(element);
    }
  });
}
const hope = factory();
const Box = hope.div;
const hopeAccordionClass = "hope-accordion";
function Accordion(props) {
  var _a;
  const theme = useStyleConfig().Accordion;
  const [buttons, setButtons] = createSignal([]);
  const [state, setState] = createStore({
    _expandedIndex: (_a = props.defaultIndex) != null ? _a : props.allowMultiple ? [] : -1,
    focusedIndex: -1,
    get isControlled() {
      return props.index !== void 0;
    },
    get expandedIndex() {
      return this.isControlled ? props.index : this._expandedIndex;
    }
  });
  const [local, others] = splitProps(props, ["class", "allowMultiple", "index", "defaultIndex", "onChange"]);
  const reverseButtons = createMemo(() => buttons().slice().reverse());
  const setFocusedIndex = (index) => {
    setState("focusedIndex", index);
  };
  const setExpandedIndex = (index, isExpanded) => {
    var _a2;
    let nextState = -1;
    if (local.allowMultiple && isArray(state.expandedIndex)) {
      nextState = isExpanded ? [...state.expandedIndex, index] : state.expandedIndex.filter((idx) => idx !== index);
    } else if (isExpanded) {
      nextState = index;
    } else {
      nextState = -1;
    }
    setState("_expandedIndex", nextState);
    (_a2 = local.onChange) == null ? void 0 : _a2.call(local, nextState);
  };
  const isExpandedIndex = (index) => {
    return isArray(state.expandedIndex) ? state.expandedIndex.includes(index) : state.expandedIndex === index;
  };
  const registerAccordionButton = (node) => {
    return setButtons((prev) => [...prev, node]).length - 1;
  };
  const focusNextAccordionButton = () => {
    const lastIndex = buttons().length - 1;
    let nextIndex = getNextIndex(state.focusedIndex, lastIndex, true);
    let nextButton = buttons()[nextIndex];
    while (nextButton.disabled) {
      nextIndex = getNextIndex(nextIndex, lastIndex, true);
      nextButton = buttons()[nextIndex];
    }
    nextButton.focus();
  };
  const focusPrevAccordionButton = () => {
    const lastIndex = buttons().length - 1;
    let prevIndex = getPrevIndex(state.focusedIndex, lastIndex, true);
    let prevButton = buttons()[prevIndex];
    while (prevButton.disabled) {
      prevIndex = getPrevIndex(prevIndex, lastIndex, true);
      prevButton = buttons()[prevIndex];
    }
    prevButton.focus();
  };
  const focusFirstAccordionButton = () => {
    var _a2;
    (_a2 = buttons().find((button) => !button.disabled)) == null ? void 0 : _a2.focus();
  };
  const focusLastAccordionButton = () => {
    var _a2;
    (_a2 = reverseButtons().find((button) => !button.disabled)) == null ? void 0 : _a2.focus();
  };
  const classes = () => classNames(local.class, hopeAccordionClass);
  onCleanup(() => {
    setFocusedIndex(-1);
  });
  const context = {
    state,
    setFocusedIndex,
    setExpandedIndex,
    isExpandedIndex,
    registerAccordionButton,
    focusNextAccordionButton,
    focusPrevAccordionButton,
    focusFirstAccordionButton,
    focusLastAccordionButton
  };
  return createComponent(AccordionContext.Provider, {
    value: context,
    get children() {
      return createComponent(Box, mergeProps$1({
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a2;
          return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.root;
        }
      }, others));
    }
  });
}
Accordion.toString = () => createClassSelector(hopeAccordionClass);
const AccordionContext = createContext();
function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("[Hope UI]: useAccordionContext must be used within a `<Accordion />` component");
  }
  return context;
}
const accordionItemStyles = css({
  borderTopWidth: "1px",
  borderColor: "$neutral7",
  overflowAnchor: "none",
  "&:last-of-type": {
    borderBottomWidth: "1px"
  }
});
const accordionButtonStyles = css({
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
});
const accordionIconStyles = css({
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
});
const accordionPanelStyles = css({
  pt: "$2",
  px: "$4",
  pb: "$4"
});
function isElement(el) {
  return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}
function isHTMLElement(el) {
  var _a;
  if (!isElement(el)) {
    return false;
  }
  const win = (_a = el.ownerDocument.defaultView) != null ? _a : window;
  return el instanceof win.HTMLElement;
}
function getOwnerDocument(node) {
  var _a;
  return isElement(node) ? (_a = node.ownerDocument) != null ? _a : document : document;
}
function isValidEvent(event, element) {
  const target = event.target;
  if (event.button > 0) {
    return false;
  }
  if (target) {
    const doc = getOwnerDocument(target);
    if (!doc.body.contains(target))
      return false;
  }
  return !(element == null ? void 0 : element.contains(target));
}
function normalizeEventKey(event) {
  const { key, keyCode } = event;
  const isArrowKey = keyCode >= 37 && keyCode <= 40 && key.indexOf("Arrow") !== 0;
  const eventKey = isArrowKey ? `Arrow${key}` : key;
  return eventKey;
}
function getActiveElement(node) {
  const doc = getOwnerDocument(node);
  return doc == null ? void 0 : doc.activeElement;
}
function contains(parent, child) {
  if (!parent) {
    return false;
  }
  return parent === child || parent.contains(child);
}
function getRelatedTarget(event) {
  var _a, _b;
  const target = (_a = event.target) != null ? _a : event.currentTarget;
  const activeElement = getActiveElement(target);
  return (_b = event.relatedTarget) != null ? _b : activeElement;
}
function isScrollable(element) {
  return element && element.clientHeight < element.scrollHeight;
}
function maintainScrollVisibility(activeElement, scrollParent) {
  const { offsetHeight, offsetTop } = activeElement;
  const { offsetHeight: parentOffsetHeight, scrollTop } = scrollParent;
  const isAbove = offsetTop < scrollTop;
  const isBelow = offsetTop + offsetHeight > scrollTop + parentOffsetHeight;
  if (isAbove) {
    scrollParent.scrollTo(0, offsetTop);
  } else if (isBelow) {
    scrollParent.scrollTo(0, offsetTop - parentOffsetHeight + offsetHeight);
  }
}
function isChildrenFunction(props) {
  const childrenProp = Object.getOwnPropertyDescriptor(props, "children");
  if (childrenProp == null) {
    return false;
  }
  return isFunction(childrenProp.value);
}
const hopeAccordionItemClass = "hope-accordion__item";
function AccordionItem(props) {
  const defaultIdPrefix = `hope-accordion-item-${createUniqueId()}`;
  const theme = useStyleConfig().Accordion;
  const accordionContext = useAccordionContext();
  const [state, setState] = createStore({
    index: -1,
    get buttonId() {
      return `${defaultIdPrefix}-button`;
    },
    get panelId() {
      return `${defaultIdPrefix}-panel`;
    },
    get expanded() {
      return accordionContext.isExpandedIndex(this.index);
    },
    get disabled() {
      var _a;
      return (_a = props.disabled) != null ? _a : false;
    }
  });
  const [local, others] = splitProps(props, ["class", "children"]);
  const registerButton = (el) => {
    const index = accordionContext.registerAccordionButton(el);
    setState("index", index);
  };
  const setFocusedIndex = () => {
    accordionContext.setFocusedIndex(state.index);
  };
  const toggleExpandedState = () => {
    accordionContext.setExpandedIndex(state.index, !state.expanded);
  };
  const keyMap = createMemo(() => ({
    ArrowDown: accordionContext.focusNextAccordionButton,
    ArrowUp: accordionContext.focusPrevAccordionButton,
    Home: accordionContext.focusFirstAccordionButton,
    End: accordionContext.focusLastAccordionButton
  }));
  const onButtonKeyDown = (event) => {
    const eventKey = normalizeEventKey(event);
    const action = keyMap()[eventKey];
    if (action) {
      event.preventDefault();
      callHandler(action, event);
    }
  };
  const expandedAccessor = () => state.expanded;
  const disabledAccessor = () => state.disabled;
  const classes = () => classNames(local.class, hopeAccordionItemClass, accordionItemStyles());
  const context = {
    state,
    registerButton,
    setFocusedIndex,
    toggleExpandedState,
    onButtonKeyDown
  };
  return createComponent(AccordionItemContext.Provider, {
    value: context,
    get children() {
      return createComponent(Box, mergeProps$1({
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.item;
        }
      }, others, {
        get children() {
          return createComponent(Show, {
            get when() {
              return isChildrenFunction(local);
            },
            get fallback() {
              return local.children;
            },
            get children() {
              var _a;
              return (_a = local.children) == null ? void 0 : _a.call(local, {
                expanded: expandedAccessor,
                disabled: disabledAccessor
              });
            }
          });
        }
      }));
    }
  });
}
AccordionItem.toString = () => createClassSelector(hopeAccordionItemClass);
const AccordionItemContext = createContext();
function useAccordionItemContext() {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error("[Hope UI]: useAccordionItemContext must be used within a `<AccordionItem />` component");
  }
  return context;
}
const hopeAccordionButtonClass = "hope-accordion__button";
function AccordionButton(props) {
  const theme = useStyleConfig().Accordion;
  const accordionItemContext = useAccordionItemContext();
  const [local, others] = splitProps(props, ["ref", "class", "disabled", "onClick", "onFocus", "onKeyDown"]);
  const assignRef = (el) => {
    accordionItemContext.registerButton(el);
    if (isFunction(local.ref)) {
      local.ref(el);
    } else {
      local.ref = el;
    }
  };
  const onClick = (event) => {
    callHandler(local.onClick, event);
    accordionItemContext.toggleExpandedState();
  };
  const onFocus = (event) => {
    callHandler(local.onFocus, event);
    accordionItemContext.setFocusedIndex();
  };
  const onKeyDown = (event) => {
    chainHandlers(local.onKeyDown, accordionItemContext.onButtonKeyDown)(event);
  };
  const classes = () => classNames(local.class, hopeAccordionButtonClass, accordionButtonStyles());
  return createComponent(hope.button, mergeProps$1({
    role: "button",
    type: "button",
    ref: assignRef,
    get id() {
      return accordionItemContext.state.buttonId;
    },
    get ["aria-controls"]() {
      return accordionItemContext.state.panelId;
    },
    get ["aria-expanded"]() {
      return accordionItemContext.state.expanded;
    },
    get disabled() {
      return accordionItemContext.state.disabled;
    },
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.button;
    },
    onClick,
    onFocus,
    onKeyDown
  }, others));
}
AccordionButton.toString = () => createClassSelector(hopeAccordionButtonClass);
const iconStyles = css({
  display: "inline-block",
  flexShrink: 0,
  boxSize: "1em",
  color: "currentColor",
  lineHeight: "1em",
  verticalAlign: "middle"
});
const _tmpl$$i = /* @__PURE__ */ template(`<svg><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`, 4, true);
const fallbackIcon = {
  viewBox: "0 0 24 24",
  path: () => _tmpl$$i.cloneNode(true)
};
const hopeIconClass = "hope-icon";
function Icon(props) {
  const defaultProps = {
    viewBox: fallbackIcon.viewBox
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["as", "class", "children", "viewBox"]);
  const classes = () => classNames(local.class, hopeIconClass, iconStyles());
  const shouldRenderComponent = () => local.as && !isString(local.as);
  return createComponent(Show, {
    get when() {
      return shouldRenderComponent();
    },
    get fallback() {
      return createComponent(hope.svg, mergeProps$1({
        get ["class"]() {
          return classes();
        },
        get viewBox() {
          return local.viewBox;
        }
      }, others, {
        get children() {
          return createComponent(Show, {
            get when() {
              return local.children;
            },
            get fallback() {
              return fallbackIcon.path;
            },
            get children() {
              return local.children;
            }
          });
        }
      }));
    },
    get children() {
      return createComponent(Box, mergeProps$1({
        get as() {
          return local.as;
        },
        get ["class"]() {
          return classes();
        }
      }, others));
    }
  });
}
Icon.toString = () => createClassSelector(hopeIconClass);
function createIcon(options) {
  const {
    viewBox = "0 0 24 24",
    defaultProps = {}
  } = options;
  const IconComponent = (props) => {
    return createComponent(Icon, mergeProps$1({
      viewBox
    }, defaultProps, props, {
      get children() {
        return options.path;
      }
    }));
  };
  IconComponent.toString = () => createClassSelector(hopeIconClass);
  return IconComponent;
}
const _tmpl$$h = /* @__PURE__ */ template(`<svg><path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`, 4, true);
const IconCaretDown = createIcon({
  viewBox: "0 0 15 15",
  path: () => _tmpl$$h.cloneNode(true)
});
const hopeAccordionIconClass = "hope-accordion__icon";
function AccordionIcon(props) {
  const theme = useStyleConfig().Accordion;
  const accordionItemContext = useAccordionItemContext();
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => {
    return classNames(local.class, hopeAccordionIconClass, accordionIconStyles({
      expanded: accordionItemContext.state.expanded,
      disabled: accordionItemContext.state.disabled
    }));
  };
  return createComponent(IconCaretDown, mergeProps$1({
    "aria-hidden": true,
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.icon;
    }
  }, others));
}
AccordionIcon.toString = () => createClassSelector(hopeAccordionIconClass);
const collapseStyles = css({
  overflow: "hidden"
});
const hopeCollapseClass = "hope-collapse";
function Collapse(props) {
  const defaultProps = {
    animateOpacity: true,
    expandDuration: 300,
    expandTimingFunction: "ease",
    collapseDuration: 300,
    collapseTimingFunction: "ease",
    keepAlive: true
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["class", "children", "expanded", "animateOpacity", "expandDuration", "expandTimingFunction", "collapseDuration", "collapseTimingFunction", "keepAlive"]);
  const resolvedChildren = children(() => local.children);
  const classes = () => {
    return classNames(local.class, hopeCollapseClass, collapseStyles());
  };
  const collapsedStyles = () => {
    const styles = {
      height: 0
    };
    if (local.animateOpacity) {
      return {
        ...styles,
        opacity: 0
      };
    }
    return styles;
  };
  const expandedStyles = (el) => {
    const styles = {
      height: `${el.scrollHeight}px`
    };
    if (local.animateOpacity) {
      return {
        ...styles,
        opacity: 1
      };
    }
    return styles;
  };
  const onEnterTransition = (el, done) => {
    const animation = el.animate([collapsedStyles(), expandedStyles(el)], {
      duration: local.expandDuration,
      easing: local.expandTimingFunction
    });
    animation.finished.then(done);
  };
  const onExitTransition = (el, done) => {
    const animation = el.animate([expandedStyles(el), collapsedStyles()], {
      duration: local.collapseDuration,
      easing: local.collapseTimingFunction
    });
    animation.finished.then(done);
  };
  return createComponent(Transition, {
    onEnter: onEnterTransition,
    onExit: onExitTransition,
    get children() {
      return createComponent(Show, {
        get when() {
          return local.expanded;
        },
        get children() {
          return createComponent(Box, mergeProps$1({
            get ["class"]() {
              return classes();
            }
          }, others, {
            get children() {
              return createComponent(Show, {
                get when() {
                  return local.keepAlive;
                },
                get fallback() {
                  return local.children;
                },
                get children() {
                  return resolvedChildren();
                }
              });
            }
          }));
        }
      });
    }
  });
}
Collapse.toString = () => createClassSelector(hopeCollapseClass);
const hopeAccordionPanelClass = "hope-accordion__panel";
function AccordionPanel(props) {
  const theme = useStyleConfig().Accordion;
  const accordionItemContext = useAccordionItemContext();
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeAccordionPanelClass, accordionPanelStyles());
  return createComponent(Collapse, {
    get expanded() {
      return accordionItemContext.state.expanded;
    },
    get children() {
      return createComponent(Box, mergeProps$1({
        role: "region",
        get id() {
          return accordionItemContext.state.panelId;
        },
        get ["aria-labelledby"]() {
          return accordionItemContext.state.buttonId;
        },
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.panel;
        }
      }, others));
    }
  });
}
AccordionPanel.toString = () => createClassSelector(hopeAccordionPanelClass);
const alertIconStyles = css({
  flexShrink: 0
});
const alertTitleStyles = css({
  fontWeight: "$semibold"
});
const alertDescriptionStyles = css({
  display: "inline-block"
});
const alertStyles = css({
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
        [`& .${alertIconStyles}`]: {
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
        [`& .${alertIconStyles}`]: {
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
        [`& .${alertIconStyles}`]: {
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
        [`& .${alertIconStyles}`]: {
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
        [`& .${alertIconStyles}`]: {
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
        [`& .${alertIconStyles}`]: {
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
        [`& .${alertIconStyles}`]: {
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
        [`& .${alertIconStyles}`]: {
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
        [`& .${alertIconStyles}`]: {
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
        [`& .${alertIconStyles}`]: {
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
        [`& .${alertIconStyles}`]: {
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
        [`& .${alertIconStyles}`]: {
          color: "$danger9"
        }
      }
    }
  ]
});
const hopeAlertClass = "hope-alert";
function Alert(props) {
  var _a, _b, _c, _d, _e, _f;
  const theme = useStyleConfig().Alert;
  const defaultProps = {
    variant: (_c = (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.variant) != null ? _c : "subtle",
    status: (_f = (_e = (_d = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _d.root) == null ? void 0 : _e.status) != null ? _f : "info"
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["class", "variant", "status"]);
  const classes = () => {
    return classNames(local.class, hopeAlertClass, alertStyles({
      variant: local.variant,
      status: local.status
    }));
  };
  const statusAccessor = () => local.status;
  const context = {
    status: statusAccessor
  };
  return createComponent(AlertContext.Provider, {
    value: context,
    get children() {
      return createComponent(Box, mergeProps$1({
        role: "alert",
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a2;
          return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.root;
        }
      }, others));
    }
  });
}
Alert.toString = () => createClassSelector(hopeAlertClass);
const AlertContext = createContext();
function useAlertContext() {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("[Hope UI]: useAlertContext must be used within an `<Alert />` component");
  }
  return context;
}
const hopeAlertDescriptionClass = "hope-alert__description";
function AlertDescription(props) {
  const theme = useStyleConfig().Alert;
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeAlertDescriptionClass, alertDescriptionStyles());
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.description;
    }
  }, others));
}
AlertDescription.toString = () => createClassSelector(hopeAlertDescriptionClass);
const _tmpl$$g = /* @__PURE__ */ template(`<svg><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"></path></svg>`, 4, true), _tmpl$2$3 = /* @__PURE__ */ template(`<svg><path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z"></path></svg>`, 4, true);
const IconCheckCircleSolid = createIcon({
  viewBox: "0 0 32 32",
  path: () => [_tmpl$$g.cloneNode(true), _tmpl$2$3.cloneNode(true)]
});
const _tmpl$$f = /* @__PURE__ */ template(`<svg><path fill="currentColor" d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2zm-1.1 6h2.2v11h-2.2V8zM16 25c-.8 0-1.5-.7-1.5-1.5S15.2 22 16 22s1.5.7 1.5 1.5S16.8 25 16 25z"></path></svg>`, 4, true);
const IconExclamationCircleSolid = createIcon({
  viewBox: "0 0 32 32",
  path: () => _tmpl$$f.cloneNode(true)
});
const _tmpl$$e = /* @__PURE__ */ template(`<svg><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M29.4898 29.8706C29.3402 29.9548 29.1713 29.9991 28.9996 29.9993H2.99961C2.82787 29.9991 2.65905 29.9548 2.5094 29.8706C2.35976 29.7864 2.23433 29.665 2.14521 29.5182C2.05608 29.3713 2.00626 29.2041 2.00055 29.0325C1.99485 28.8608 2.03344 28.6907 2.1126 28.5382L15.1126 3.53821C15.1971 3.37598 15.3245 3.23999 15.4808 3.14514C15.6372 3.05017 15.8167 3 15.9996 3C16.1825 3 16.362 3.05017 16.5184 3.14514C16.6748 3.23999 16.8021 3.37598 16.8866 3.53821L29.8866 28.5382C29.9658 28.6907 30.0044 28.8608 29.9986 29.0325C29.9929 29.2041 29.9431 29.3713 29.854 29.5182C29.7649 29.665 29.6395 29.7864 29.4898 29.8706ZM16.0016 6.16919V6.17029H15.9976V6.16919H16.0016ZM15.9996 25.9993C15.7029 25.9993 15.4129 25.9113 15.1662 25.7465C14.9196 25.5817 14.7273 25.3474 14.6138 25.0734C14.5996 25.0391 14.5867 25.0044 14.5752 24.9694C14.4942 24.724 14.4778 24.4613 14.5284 24.2067C14.5863 23.9156 14.7292 23.6484 14.9389 23.4386C14.9652 23.4124 14.9923 23.3872 15.0202 23.3632C15.2159 23.1945 15.4524 23.0787 15.707 23.0281C15.7433 23.0209 15.7799 23.015 15.8165 23.0105C16.0723 22.979 16.3326 23.014 16.572 23.1129L16.5736 23.1135C16.8477 23.2271 17.082 23.4193 17.2468 23.6659C17.2674 23.6968 17.2868 23.7283 17.305 23.7604C17.4322 23.9852 17.4996 24.2397 17.4996 24.4993C17.4996 24.8971 17.3416 25.2787 17.0603 25.5599C16.7789 25.8413 16.3974 25.9993 15.9996 25.9993ZM17.1246 20.9993H14.8746V11.9993H17.1246V20.9993Z"></path></svg>`, 4, true);
const IconExclamationTriangleSolid = createIcon({
  viewBox: "0 0 32 32",
  path: () => _tmpl$$e.cloneNode(true)
});
const _tmpl$$d = /* @__PURE__ */ template(`<svg><path fill="none" d="M16 8a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8Zm4 13.875h-2.875v-8H13v2.25h1.875v5.75H12v2.25h8Z"></path></svg>`, 4, true), _tmpl$2$2 = /* @__PURE__ */ template(`<svg><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 6a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8Zm4 16.125h-8v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"></path></svg>`, 4, true);
const IconInfoCircleSolid = createIcon({
  viewBox: "0 0 32 32",
  path: () => [_tmpl$$d.cloneNode(true), _tmpl$2$2.cloneNode(true)]
});
const hopeAlertIconClass = "hope-alert__icon";
function AlertIcon(props) {
  const theme = useStyleConfig().Alert;
  const {
    status
  } = useAlertContext();
  const defaultProps = {
    boxSize: "$6"
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["as", "class"]);
  const classes = () => classNames(local.class, hopeAlertIconClass, alertIconStyles());
  const icon = () => {
    if (local.as) {
      return local.as;
    }
    switch (status()) {
      case "success":
        return IconCheckCircleSolid;
      case "info":
        return IconInfoCircleSolid;
      case "warning":
        return IconExclamationTriangleSolid;
      case "danger":
        return IconExclamationCircleSolid;
    }
  };
  return createComponent(Icon, mergeProps$1({
    get as() {
      return icon();
    },
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.icon;
    }
  }, others));
}
AlertIcon.toString = () => createClassSelector(hopeAlertIconClass);
const hopeAlertTitleClass = "hope-alert__title";
function AlertTitle(props) {
  const theme = useStyleConfig().Alert;
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeAlertTitleClass, alertTitleStyles());
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.title;
    }
  }, others));
}
AlertTitle.toString = () => createClassSelector(hopeAlertTitleClass);
const anchorStyles = css({
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
});
const hopeAnchorClass = "hope-anchor";
function Anchor(props) {
  const theme = useStyleConfig().Anchor;
  const [local, others] = splitProps(props, ["class", "external"]);
  const classes = () => classNames(local.class, hopeAnchorClass, anchorStyles());
  return createComponent(hope.a, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      return theme == null ? void 0 : theme.baseStyle;
    },
    get target() {
      return local.external ? "_blank" : void 0;
    },
    get rel() {
      return local.external ? "noopener noreferrer" : void 0;
    }
  }, others));
}
Anchor.toString = () => createClassSelector(hopeAnchorClass);
const aspectRatioStyles = css({
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
});
const hopeAspectRatioClass = "hope-aspect-ratio";
function AspectRatio(props) {
  const defaultProps = {
    ratio: 4 / 3
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["class", "ratio"]);
  const classes = () => classNames(local.class, hopeAspectRatioClass, aspectRatioStyles());
  const paddingBottom = () => mapResponsive(local.ratio, (r) => `${1 / r * 100}%`);
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get _before() {
      return {
        paddingBottom: paddingBottom()
      };
    }
  }, others));
}
AspectRatio.toString = () => createClassSelector(hopeAspectRatioClass);
const hopeIconButtonClass = "hope-icon-button";
const buttonIconStyles = css({
  display: "inline-flex",
  alignSelf: "center",
  flexShrink: 0
});
const buttonLoaderStyles = css({
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
});
const buttonIconSpinnerStyles = css({
  fontSize: "1.3em",
  animation: `1s linear infinite ${spin}`
});
function createSizeVariant$1(config2) {
  return {
    height: config2.height,
    py: 0,
    px: config2.paddingX,
    fontSize: config2.fontSize,
    [`&.${hopeIconButtonClass}`]: {
      width: config2.height,
      padding: "0"
    }
  };
}
function createCompactSizeCompoundVariant(config2) {
  return {
    height: config2.height,
    py: 0,
    px: config2.paddingX,
    [`&.${hopeIconButtonClass}`]: {
      width: config2.height,
      padding: "0"
    }
  };
}
function createSolidCompoundVariant(config2) {
  return {
    backgroundColor: config2.bgColor,
    color: config2.color,
    "&:hover": {
      backgroundColor: config2.bgColorHover
    }
  };
}
function createSubtleCompoundVariant(config2) {
  return {
    backgroundColor: config2.bgColor,
    color: config2.color,
    "&:hover": {
      backgroundColor: config2.bgColorHover
    },
    "&:active": {
      backgroundColor: config2.bgColorActive
    }
  };
}
function createOutlineCompoundVariant(config2) {
  return {
    borderColor: config2.borderColor,
    color: config2.color,
    "&:hover": {
      borderColor: config2.borderColorHover,
      backgroundColor: config2.bgColorHover
    },
    "&:active": {
      backgroundColor: config2.bgColorActive
    }
  };
}
function createGhostCompoundVariant(config2) {
  return {
    color: config2.color,
    "&:hover": {
      backgroundColor: config2.bgColorHover
    },
    "&:active": {
      backgroundColor: config2.bgColorActive
    }
  };
}
const buttonStyles = css({
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
      xs: createSizeVariant$1({
        height: "$6",
        paddingX: "$2",
        fontSize: "$xs",
        spacing: "$1"
      }),
      sm: createSizeVariant$1({
        height: "$8",
        paddingX: "$3",
        fontSize: "$sm",
        spacing: "$1_5"
      }),
      md: createSizeVariant$1({
        height: "$10",
        paddingX: "$4",
        fontSize: "$base",
        spacing: "$1_5"
      }),
      lg: createSizeVariant$1({
        height: "$12",
        paddingX: "$6",
        fontSize: "$lg",
        spacing: "$2"
      }),
      xl: createSizeVariant$1({
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
      css: createSolidCompoundVariant({
        color: "white",
        bgColor: "$primary9",
        bgColorHover: "$primary10"
      })
    },
    {
      variant: "solid",
      colorScheme: "accent",
      css: createSolidCompoundVariant({
        color: "white",
        bgColor: "$accent9",
        bgColorHover: "$accent10"
      })
    },
    {
      variant: "solid",
      colorScheme: "neutral",
      css: createSolidCompoundVariant({
        color: "white",
        bgColor: "$neutral9",
        bgColorHover: "$neutral10"
      })
    },
    {
      variant: "solid",
      colorScheme: "success",
      css: createSolidCompoundVariant({
        color: "white",
        bgColor: "$success9",
        bgColorHover: "$success10"
      })
    },
    {
      variant: "solid",
      colorScheme: "info",
      css: createSolidCompoundVariant({
        color: "white",
        bgColor: "$info9",
        bgColorHover: "$info10"
      })
    },
    {
      variant: "solid",
      colorScheme: "warning",
      css: createSolidCompoundVariant({
        color: "$blackAlpha12",
        bgColor: "$warning9",
        bgColorHover: "$warning10"
      })
    },
    {
      variant: "solid",
      colorScheme: "danger",
      css: createSolidCompoundVariant({
        color: "white",
        bgColor: "$danger9",
        bgColorHover: "$danger10"
      })
    },
    {
      variant: "subtle",
      colorScheme: "primary",
      css: createSubtleCompoundVariant({
        color: "$primary11",
        bgColor: "$primary4",
        bgColorHover: "$primary5",
        bgColorActive: "$primary6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "accent",
      css: createSubtleCompoundVariant({
        color: "$accent11",
        bgColor: "$accent4",
        bgColorHover: "$accent5",
        bgColorActive: "$accent6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "neutral",
      css: createSubtleCompoundVariant({
        color: "$neutral12",
        bgColor: "$neutral4",
        bgColorHover: "$neutral5",
        bgColorActive: "$neutral6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "success",
      css: createSubtleCompoundVariant({
        color: "$success11",
        bgColor: "$success4",
        bgColorHover: "$success5",
        bgColorActive: "$success6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "info",
      css: createSubtleCompoundVariant({
        color: "$info11",
        bgColor: "$info4",
        bgColorHover: "$info5",
        bgColorActive: "$info6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "warning",
      css: createSubtleCompoundVariant({
        color: "$warning11",
        bgColor: "$warning4",
        bgColorHover: "$warning5",
        bgColorActive: "$warning6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "danger",
      css: createSubtleCompoundVariant({
        color: "$danger11",
        bgColor: "$danger4",
        bgColorHover: "$danger5",
        bgColorActive: "$danger6"
      })
    },
    {
      variant: "outline",
      colorScheme: "primary",
      css: createOutlineCompoundVariant({
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
      css: createOutlineCompoundVariant({
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
      css: createOutlineCompoundVariant({
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
      css: createOutlineCompoundVariant({
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
      css: createOutlineCompoundVariant({
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
      css: createOutlineCompoundVariant({
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
      css: createOutlineCompoundVariant({
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
      css: createOutlineCompoundVariant({
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
      css: createOutlineCompoundVariant({
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
      css: createOutlineCompoundVariant({
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
      css: createOutlineCompoundVariant({
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
      css: createOutlineCompoundVariant({
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
      css: createOutlineCompoundVariant({
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
      css: createOutlineCompoundVariant({
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
      css: createGhostCompoundVariant({
        color: "$primary11",
        bgColorHover: "$primary4",
        bgColorActive: "$primary5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "accent",
      css: createGhostCompoundVariant({
        color: "$accent11",
        bgColorHover: "$accent4",
        bgColorActive: "$accent5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "neutral",
      css: createGhostCompoundVariant({
        color: "$neutral12",
        bgColorHover: "$neutral4",
        bgColorActive: "$neutral5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "success",
      css: createGhostCompoundVariant({
        color: "$success11",
        bgColorHover: "$success4",
        bgColorActive: "$success5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "info",
      css: createGhostCompoundVariant({
        color: "$info11",
        bgColorHover: "$info4",
        bgColorActive: "$info5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "warning",
      css: createGhostCompoundVariant({
        color: "$warning11",
        bgColorHover: "$warning4",
        bgColorActive: "$warning5"
      })
    },
    {
      variant: "ghost",
      colorScheme: "danger",
      css: createGhostCompoundVariant({
        color: "$danger11",
        bgColorHover: "$danger4",
        bgColorActive: "$danger5"
      })
    },
    {
      size: "xs",
      compact: "true",
      css: createCompactSizeCompoundVariant({ height: "$5", paddingX: "$1" })
    },
    {
      size: "sm",
      compact: "true",
      css: createCompactSizeCompoundVariant({ height: "$6", paddingX: "$1_5" })
    },
    {
      size: "md",
      compact: "true",
      css: createCompactSizeCompoundVariant({ height: "$7", paddingX: "$2" })
    },
    {
      size: "lg",
      compact: "true",
      css: createCompactSizeCompoundVariant({ height: "$8", paddingX: "$2_5" })
    },
    {
      size: "xl",
      compact: "true",
      css: createCompactSizeCompoundVariant({ height: "$10", paddingX: "$3_5" })
    }
  ]
});
const buttonGroupStyles = css({
  display: "inline-flex",
  [`& .${buttonStyles}:focus`]: {
    zIndex: 1
  }
});
const hopeButtonGroupClass = "hope-button__group";
const ButtonGroupContext = createContext();
function ButtonGroup(props) {
  var _a, _b, _c, _d, _e, _f;
  const theme = useStyleConfig().Button;
  const [state] = createStore({
    get variant() {
      var _a2, _b2, _c2;
      return (_c2 = props.variant) != null ? _c2 : (_b2 = (_a2 = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a2.group) == null ? void 0 : _b2.variant;
    },
    get colorScheme() {
      var _a2, _b2, _c2;
      return (_c2 = props.colorScheme) != null ? _c2 : (_b2 = (_a2 = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a2.group) == null ? void 0 : _b2.colorScheme;
    },
    get size() {
      var _a2, _b2, _c2;
      return (_c2 = props.size) != null ? _c2 : (_b2 = (_a2 = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a2.group) == null ? void 0 : _b2.size;
    },
    get disabled() {
      return props.disabled;
    }
  });
  const defaultProps = {
    attached: (_c = (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.group) == null ? void 0 : _b.attached) != null ? _c : false,
    spacing: (_f = (_e = (_d = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _d.group) == null ? void 0 : _e.spacing) != null ? _f : "0.5rem"
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, _, others] = splitProps(propsWithDefault, ["class", "attached", "spacing"], ["variant", "colorScheme", "size", "disabled"]);
  const classes = () => {
    return classNames(local.class, hopeButtonGroupClass, buttonGroupStyles({
      css: local.attached ? {
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
          marginStart: local.spacing
        }
      }
    }));
  };
  const context = {
    state
  };
  return createComponent(ButtonGroupContext.Provider, {
    value: context,
    get children() {
      return createComponent(Box, mergeProps$1({
        role: "group",
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a2;
          return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.group;
        }
      }, others));
    }
  });
}
ButtonGroup.toString = () => createClassSelector(hopeButtonGroupClass);
function useButtonGroupContext() {
  return useContext(ButtonGroupContext);
}
const hopeButtonIconClass = "hope-button__icon";
function ButtonIcon(props) {
  const [local, others] = splitProps(props, ["class", "children"]);
  const classes = () => classNames(local.class, hopeButtonIconClass, buttonIconStyles());
  return createComponent(hope.span, mergeProps$1({
    get ["class"]() {
      return classes();
    }
  }, others, {
    get children() {
      return local.children;
    }
  }));
}
ButtonIcon.toString = () => createClassSelector(hopeButtonIconClass);
const _tmpl$$c = /* @__PURE__ */ template(`<svg><g fill="none"><path opacity=".2" fill-rule="evenodd" clip-rule="evenodd" d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10z" fill="currentColor"></path><path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2z" fill="currentColor"></path></g></svg>`, 8, true);
const IconSpinner = createIcon({
  path: () => _tmpl$$c.cloneNode(true)
});
const hopeButtonLoaderClass = "hope-button__loader";
function ButtonLoader(props) {
  const defaultProps = {
    spacing: "0.5rem",
    children: createComponent(IconSpinner, {
      get ["class"]() {
        return buttonIconSpinnerStyles();
      }
    })
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["class", "children", "withLoadingText", "placement", "spacing"]);
  const marginProp = () => local.placement === "start" ? "marginEnd" : "marginStart";
  const loaderStyles = () => ({
    [marginProp()]: local.withLoadingText ? local.spacing : 0
  });
  const classes = () => {
    return classNames(local.class, hopeButtonLoaderClass, buttonLoaderStyles({
      withLoadingText: local.withLoadingText
    }));
  };
  return createComponent(hope.div, mergeProps$1({
    get ["class"]() {
      return classes();
    }
  }, loaderStyles, others, {
    get children() {
      return local.children;
    }
  }));
}
ButtonLoader.toString = () => createClassSelector(hopeButtonLoaderClass);
const hopeButtonClass = "hope-button";
function Button(props) {
  var _a, _b, _c;
  const theme = useStyleConfig().Button;
  const buttonGroupContext = useButtonGroupContext();
  const defaultProps = {
    loaderPlacement: (_c = (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.loaderPlacement) != null ? _c : "start",
    iconSpacing: "0.5rem",
    type: "button",
    role: "button"
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, contentProps, others] = splitProps(propsWithDefault, ["class", "disabled", "loadingText", "loader", "loaderPlacement", "variant", "colorScheme", "size", "loading", "compact", "fullWidth"], ["children", "iconSpacing", "leftIcon", "rightIcon"]);
  const disabled = () => {
    var _a2;
    return (_a2 = local.disabled) != null ? _a2 : buttonGroupContext == null ? void 0 : buttonGroupContext.state.disabled;
  };
  const classes = () => {
    var _a2, _b2, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    return classNames(local.class, hopeButtonClass, buttonStyles({
      variant: (_e = (_d = (_a2 = local.variant) != null ? _a2 : buttonGroupContext == null ? void 0 : buttonGroupContext.state.variant) != null ? _d : (_c2 = (_b2 = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _b2.root) == null ? void 0 : _c2.variant) != null ? _e : "solid",
      colorScheme: (_j = (_i = (_f = local.colorScheme) != null ? _f : buttonGroupContext == null ? void 0 : buttonGroupContext.state.colorScheme) != null ? _i : (_h = (_g = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _g.root) == null ? void 0 : _h.colorScheme) != null ? _j : "primary",
      size: (_o = (_n = (_k = local.size) != null ? _k : buttonGroupContext == null ? void 0 : buttonGroupContext.state.size) != null ? _n : (_m = (_l = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _l.root) == null ? void 0 : _m.size) != null ? _o : "md",
      loading: local.loading,
      compact: local.compact,
      fullWidth: local.fullWidth
    }));
  };
  return createComponent(hope.button, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get disabled() {
      return disabled();
    },
    get __baseStyle() {
      var _a2;
      return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.root;
    }
  }, others, {
    get children() {
      return [createComponent(Show, {
        get when() {
          return local.loading && local.loaderPlacement === "start";
        },
        get children() {
          return createComponent(ButtonLoader, {
            "class": "hope-button__loader--start",
            get withLoadingText() {
              return !!local.loadingText;
            },
            placement: "start",
            get spacing() {
              return contentProps.iconSpacing;
            },
            get children() {
              return local.loader;
            }
          });
        }
      }), createComponent(Show, {
        get when() {
          return local.loading;
        },
        get fallback() {
          return createComponent(ButtonContent, contentProps);
        },
        get children() {
          return createComponent(Show, {
            get when() {
              return local.loadingText;
            },
            get fallback() {
              return createComponent(hope.span, {
                opacity: 0,
                get children() {
                  return createComponent(ButtonContent, contentProps);
                }
              });
            },
            get children() {
              return local.loadingText;
            }
          });
        }
      }), createComponent(Show, {
        get when() {
          return local.loading && local.loaderPlacement === "end";
        },
        get children() {
          return createComponent(ButtonLoader, {
            "class": "hope-button__loader--end",
            get withLoadingText() {
              return !!local.loadingText;
            },
            placement: "end",
            get spacing() {
              return contentProps.iconSpacing;
            },
            get children() {
              return local.loader;
            }
          });
        }
      })];
    }
  }));
}
Button.toString = () => createClassSelector(hopeButtonClass);
function ButtonContent(props) {
  return [createComponent(Show, {
    get when() {
      return props.leftIcon;
    },
    get children() {
      return createComponent(ButtonIcon, {
        get marginEnd() {
          return props.iconSpacing;
        },
        get children() {
          return props.leftIcon;
        }
      });
    }
  }), memo(() => props.children), createComponent(Show, {
    get when() {
      return props.rightIcon;
    },
    get children() {
      return createComponent(ButtonIcon, {
        get marginStart() {
          return props.iconSpacing;
        },
        get children() {
          return props.rightIcon;
        }
      });
    }
  })];
}
function AsyncButton(props) {
  const [local, others] = splitProps(props, ["onClick"]);
  const [loading, setLoading] = createSignal(false);
  const onClickInterceptor = (e) => {
    if (local.onClick) {
      setLoading(true);
      local.onClick(e).finally(() => setLoading(false));
    }
  };
  return createComponent(Button, mergeProps$1({
    get loading() {
      return loading();
    }
  }, others, {
    onClick: onClickInterceptor
  }));
}
AsyncButton.toString = () => createClassSelector(hopeButtonClass);
function createSizeVariant(size2) {
  return {
    boxSize: size2,
    fontSize: `calc(${size2} / 2.5)`,
    lineHeight: size2
  };
}
const avatarStyles = css({
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
      "2xs": createSizeVariant("$sizes$4"),
      xs: createSizeVariant("$sizes$6"),
      sm: createSizeVariant("$sizes$8"),
      md: createSizeVariant("$sizes$12"),
      lg: createSizeVariant("$sizes$16"),
      xl: createSizeVariant("$sizes$24"),
      "2xl": createSizeVariant("$sizes$32"),
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
      withBorder: true,
      size: "2xs",
      css: { borderWidth: "1px" }
    },
    {
      withBorder: true,
      size: "xs",
      css: { borderWidth: "1px" }
    },
    {
      withBorder: true,
      size: "sm",
      css: { borderWidth: "2px" }
    },
    {
      withBorder: true,
      size: "md",
      css: { borderWidth: "2px" }
    },
    {
      withBorder: true,
      size: "lg",
      css: { borderWidth: "3px" }
    },
    {
      withBorder: true,
      size: "xl",
      css: { borderWidth: "4px" }
    },
    {
      withBorder: true,
      size: "2xl",
      css: { borderWidth: "5px" }
    },
    {
      withBorder: true,
      size: "full",
      css: { borderWidth: "2px" }
    }
  ]
});
const avatarExcessStyles = css(avatarStyles);
const avatarImageStyles = css({
  boxSize: "$full",
  borderRadius: "$full",
  objectFit: "cover"
});
const avatarBadgeStyles = css({
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
});
const avatarGroupStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
  [`& .${avatarStyles}:first-child`]: {
    marginStart: "0"
  }
});
const _tmpl$$b = /* @__PURE__ */ template(`<svg><path fill="currentColor" d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"></path></svg>`, 4, true), _tmpl$2$1 = /* @__PURE__ */ template(`<svg><path fill="currentColor" d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"></path></svg>`, 4, true);
function initials(name) {
  const [firstName, lastName] = name.split(" ");
  return firstName && lastName ? `${firstName.charAt(0)}${lastName.charAt(0)}` : firstName.charAt(0);
}
function DefaultAvatarIcon(props) {
  return createComponent(hope.svg, mergeProps$1({
    viewBox: "0 0 128 128",
    "class": "hope-avatar__svg",
    color: "$loContrast",
    boxSize: "$full"
  }, props, {
    get children() {
      return [_tmpl$$b.cloneNode(true), _tmpl$2$1.cloneNode(true)];
    }
  }));
}
const AvatarGroupContext = createContext();
const hopeAvatarGroupClass = "hope-avatar__group";
function AvatarGroup(props) {
  const theme = useStyleConfig().Avatar;
  const [state] = createStore({
    get size() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.size) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.group) == null ? void 0 : _b.size) != null ? _d : "md";
    },
    get spacing() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.spacing) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.group) == null ? void 0 : _b.spacing) != null ? _d : "-1em";
    },
    get avatarBorderRadius() {
      var _a, _b, _c;
      return (_c = props.avatarBorderRadius) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.group) == null ? void 0 : _b.avatarBorderRadius;
    },
    get avatarBorderColor() {
      var _a, _b, _c;
      return (_c = props.avatarBorderColor) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.group) == null ? void 0 : _b.avatarBorderColor;
    },
    get avatarBorderWidth() {
      var _a, _b, _c;
      return (_c = props.avatarBorderWidth) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.group) == null ? void 0 : _b.avatarBorderWidth;
    }
  });
  const [local, others] = splitProps(props, ["class", "size", "spacing", "avatarBorderRadius", "avatarBorderColor", "avatarBorderWidth"]);
  const classes = () => classNames(local.class, hopeAvatarGroupClass, avatarGroupStyles());
  const context = {
    state
  };
  return createComponent(AvatarGroupContext.Provider, {
    value: context,
    get children() {
      return createComponent(Box, mergeProps$1({
        role: "group",
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.group;
        }
      }, others));
    }
  });
}
AvatarGroup.toString = () => createClassSelector(hopeAvatarGroupClass);
function useAvatarGroupContext() {
  return useContext(AvatarGroupContext);
}
function createImageLoadingStatus(props) {
  const [statusState, setStatusState] = createSignal("pending");
  const status = () => props.ignoreFallback ? "loaded" : statusState();
  let imageRef = null;
  const flush = () => {
    if (imageRef) {
      imageRef.onload = null;
      imageRef.onerror = null;
      imageRef = null;
    }
  };
  const load = () => {
    if (!props.src) {
      return;
    }
    flush();
    const img = new Image();
    img.src = props.src;
    if (props.crossOrigin) {
      img.crossOrigin = props.crossOrigin;
    }
    if (props.srcSet) {
      img.srcset = props.srcSet;
    }
    if (props.sizes) {
      img.sizes = props.sizes;
    }
    if (props.loading) {
      img.loading = props.loading;
    }
    img.onload = (event) => {
      flush();
      setStatusState("loaded");
      callHandler(props.onLoad, event);
    };
    img.onerror = (error) => {
      flush();
      setStatusState("failed");
      callHandler(props.onError, error);
    };
    imageRef = img;
  };
  createEffect(() => {
    setStatusState(props.src ? "loading" : "pending");
  });
  createRenderEffect(() => {
    if (props.ignoreFallback) {
      return void 0;
    }
    if (statusState() === "loading") {
      load();
    }
    onCleanup(() => {
      flush();
    });
  });
  return status;
}
const hopeAvatarInitialsClass = "hope-avatar__initials";
function AvatarInitials(props) {
  const theme = useStyleConfig().Avatar;
  const [local, others] = splitProps(props, ["class", "getInitials", "name"]);
  const classes = () => classNames(local.class, hopeAvatarInitialsClass);
  const diplayInitials = () => {
    var _a;
    return local.name && ((_a = local.getInitials) == null ? void 0 : _a.call(local, local.name));
  };
  return createComponent(Box, mergeProps$1({
    role: "img",
    get ["aria-label"]() {
      return local.name;
    },
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.initials;
    }
  }, others, {
    get children() {
      return diplayInitials();
    }
  }));
}
AvatarInitials.toString = () => createClassSelector(hopeAvatarInitialsClass);
const hopeAvatarImageClass = "hope-avatar__image";
function AvatarImage(props) {
  const theme = useStyleConfig().Avatar;
  const [local, others] = splitProps(props, ["class", "src", "srcSet", "getInitials", "name", "loading", "iconLabel", "icon", "ignoreFallback", "onError"]);
  const status = createMemo(() => {
    return createImageLoadingStatus({
      src: local.src,
      onError: local.onError,
      ignoreFallback: local.ignoreFallback
    });
  });
  const classes = () => classNames(local.class, hopeAvatarImageClass, avatarImageStyles());
  const hasLoaded = () => !!local.src && status()() === "loaded";
  const iconProps = () => {
    var _a;
    return {
      role: "img",
      "aria-label": (_a = local.iconLabel) != null ? _a : "avatar"
    };
  };
  return createComponent(Show, {
    get when() {
      return hasLoaded();
    },
    get fallback() {
      return createComponent(Show, {
        get when() {
          return local.name;
        },
        get fallback() {
          var _a;
          return (_a = local.icon) == null ? void 0 : _a.call(local, iconProps());
        },
        get children() {
          return createComponent(AvatarInitials, {
            get getInitials() {
              return local.getInitials;
            },
            get name() {
              return local.name;
            }
          });
        }
      });
    },
    get children() {
      return createComponent(hope.img, mergeProps$1({
        get ["class"]() {
          return classes();
        },
        get src() {
          return local.src;
        },
        get srcSet() {
          return local.srcSet;
        },
        get alt() {
          return local.name;
        },
        get loading() {
          return local.loading;
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.image;
        }
      }, others));
    }
  });
}
AvatarImage.toString = () => createClassSelector(hopeAvatarImageClass);
const hopeAvatarClass = "hope-avatar";
function Avatar(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  const theme = useStyleConfig().Avatar;
  const avatarGroupContext = useAvatarGroupContext();
  const defaultProps = {
    icon: (_c = (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.icon) != null ? _c : (props2) => createComponent(DefaultAvatarIcon, props2),
    iconLabel: (_f = (_e = (_d = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _d.root) == null ? void 0 : _e.iconLabel) != null ? _f : "avatar",
    getInitials: (_i = (_h = (_g = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _g.root) == null ? void 0 : _h.getInitials) != null ? _i : initials,
    ignoreFallback: (_l = (_k = (_j = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _j.root) == null ? void 0 : _k.ignoreFallback) != null ? _l : false,
    loading: (_n = (_m = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _m.root) == null ? void 0 : _n.loading
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["class", "children", "size", "withBorder", "src", "srcSet", "name", "borderRadius", "onError", "getInitials", "icon", "iconLabel", "loading", "ignoreFallback", "imageProps"]);
  const classes = () => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
    return classNames(local.class, hopeAvatarClass, avatarStyles({
      size: (_e2 = (_d2 = (_a2 = local.size) != null ? _a2 : avatarGroupContext == null ? void 0 : avatarGroupContext.state.size) != null ? _d2 : (_c2 = (_b2 = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _b2.root) == null ? void 0 : _c2.size) != null ? _e2 : "md",
      withBorder: (_j2 = (_i2 = (_f2 = local.withBorder) != null ? _f2 : !!avatarGroupContext) != null ? _i2 : (_h2 = (_g2 = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _g2.root) == null ? void 0 : _h2.withBorder) != null ? _j2 : false
    }));
  };
  return createComponent(hope.span, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a2;
      return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.root;
    },
    get borderRadius() {
      var _a2;
      return (_a2 = local.borderRadius) != null ? _a2 : avatarGroupContext == null ? void 0 : avatarGroupContext.state.avatarBorderRadius;
    },
    get borderColor() {
      return avatarGroupContext == null ? void 0 : avatarGroupContext.state.avatarBorderColor;
    },
    get borderWidth() {
      return avatarGroupContext == null ? void 0 : avatarGroupContext.state.avatarBorderWidth;
    },
    get marginStart() {
      return avatarGroupContext == null ? void 0 : avatarGroupContext.state.spacing;
    }
  }, others, {
    get children() {
      return [createComponent(AvatarImage, mergeProps$1({
        get src() {
          return local.src;
        },
        get srcSet() {
          return local.srcSet;
        },
        get loading() {
          return local.loading;
        },
        get getInitials() {
          return local.getInitials;
        },
        get name() {
          return local.name;
        },
        get icon() {
          return local.icon;
        },
        get iconLabel() {
          return local.iconLabel;
        },
        get ignoreFallback() {
          return local.ignoreFallback;
        },
        get borderRadius() {
          var _a2;
          return (_a2 = local.borderRadius) != null ? _a2 : avatarGroupContext == null ? void 0 : avatarGroupContext.state.avatarBorderRadius;
        },
        get onError() {
          return local.onError;
        }
      }, () => local.imageProps)), memo(() => local.children)];
    }
  }));
}
Avatar.toString = () => createClassSelector(hopeAvatarClass);
const hopeAvatarBadgeClass = "hope-avatar__badge";
function AvatarBadge(props) {
  const theme = useStyleConfig().Avatar;
  const [local, others] = splitProps(props, ["class", "placement"]);
  const classes = () => {
    var _a;
    return classNames(local.class, hopeAvatarBadgeClass, avatarBadgeStyles({
      placement: (_a = local.placement) != null ? _a : "bottom-end"
    }));
  };
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.badge;
    }
  }, others));
}
AvatarBadge.toString = () => createClassSelector(hopeAvatarBadgeClass);
const hopeAvatarExcessClass = "hope-avatar__excess";
function AvatarExcess(props) {
  const theme = useStyleConfig().Avatar;
  const avatarGroupContext = useAvatarGroupContext();
  const [local, others] = splitProps(props, ["class", "size", "withBorder"]);
  const classes = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    return classNames(local.class, hopeAvatarExcessClass, avatarExcessStyles({
      size: (_e = (_d = (_a = local.size) != null ? _a : avatarGroupContext == null ? void 0 : avatarGroupContext.state.size) != null ? _d : (_c = (_b = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _b.root) == null ? void 0 : _c.size) != null ? _e : "md",
      withBorder: (_j = (_i = (_f = local.withBorder) != null ? _f : !!avatarGroupContext) != null ? _i : (_h = (_g = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _g.root) == null ? void 0 : _h.withBorder) != null ? _j : false
    }));
  };
  return createComponent(hope.span, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.excess;
    },
    get borderRadius() {
      return avatarGroupContext == null ? void 0 : avatarGroupContext.state.avatarBorderRadius;
    },
    get borderColor() {
      return avatarGroupContext == null ? void 0 : avatarGroupContext.state.avatarBorderColor;
    },
    get borderWidth() {
      return avatarGroupContext == null ? void 0 : avatarGroupContext.state.avatarBorderWidth;
    },
    get marginStart() {
      return avatarGroupContext == null ? void 0 : avatarGroupContext.state.spacing;
    }
  }, others));
}
AvatarExcess.toString = () => createClassSelector(hopeAvatarExcessClass);
const badgeStyles = css({
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
});
const hopeBadgeClass = "hope-badge";
function Badge(props) {
  var _a, _b, _c, _d;
  const theme = useStyleConfig().Badge;
  const defaultProps = {
    variant: (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.variant) != null ? _b : "subtle",
    colorScheme: (_d = (_c = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _c.colorScheme) != null ? _d : "neutral"
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, variantProps, others] = splitProps(propsWithDefault, ["class"], ["variant", "colorScheme"]);
  const classes = () => classNames(local.class, hopeBadgeClass, badgeStyles(variantProps));
  return createComponent(hope.span, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      return theme == null ? void 0 : theme.baseStyle;
    }
  }, others));
}
Badge.toString = () => createClassSelector(hopeBadgeClass);
const breadcrumbStyles = css({
  display: "block",
  fontSize: "$base",
  lineHeight: "$6"
});
const breadcrumbListStyles = css({
  display: "flex",
  alignItems: "center",
  margin: 0,
  padding: 0,
  listStyle: "none"
});
const breadcrumbItemStyles = css({
  display: "inline-flex",
  alignItems: "center"
});
const breadcrumbSeparatorStyles = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
});
const breadcrumbLinkStyles = css({
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
});
const BreadcrumbContext = createContext();
const hopeBreadcrumbClass = "hope-breadcrumb";
const hopeBreadcrumbListClass = "hope-breadcrumb__list";
function Breadcrumb(props) {
  const theme = useStyleConfig().Breadcrumb;
  const [state] = createStore({
    get spacing() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.spacing) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.spacing) != null ? _d : "0.5rem";
    },
    get separator() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.separator) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.separator) != null ? _d : "/";
    }
  });
  const [local, others] = splitProps(props, ["class", "children", "separator", "spacing"]);
  const rootClasses = () => classNames(local.class, hopeBreadcrumbClass, breadcrumbStyles());
  const listClasses = () => classNames(hopeBreadcrumbListClass, breadcrumbListStyles());
  const context = {
    state
  };
  return createComponent(BreadcrumbContext.Provider, {
    value: context,
    get children() {
      return createComponent(hope.nav, mergeProps$1({
        "aria-label": "breadcrumb",
        get ["class"]() {
          return rootClasses();
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.root;
        }
      }, others, {
        get children() {
          return createComponent(hope.ol, {
            get ["class"]() {
              return listClasses();
            },
            get gap() {
              return state.spacing;
            },
            get children() {
              return local.children;
            }
          });
        }
      }));
    }
  });
}
Breadcrumb.toString = () => createClassSelector(hopeBreadcrumbClass);
function useBreadcrumbContext() {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error("[Hope UI]: useBreadcrumbContext must be used within a `<Breadcrumb />` component");
  }
  return context;
}
const hopeBreadcrumbItemClass = "hope-breadcrumb__item";
function BreadcrumbItem(props) {
  const theme = useStyleConfig().Breadcrumb;
  const breadcrumbContext = useBreadcrumbContext();
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => {
    return classNames(local.class, hopeBreadcrumbItemClass, breadcrumbItemStyles());
  };
  return createComponent(hope.li, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.item;
    },
    get gap() {
      return breadcrumbContext.state.spacing;
    }
  }, others));
}
BreadcrumbItem.toString = () => createClassSelector(hopeBreadcrumbItemClass);
const hopeBreadcrumbLinkClass = "hope-breadcrumb__link";
function BreadcrumbLink(props) {
  const theme = useStyleConfig().Breadcrumb;
  const [local, others] = splitProps(props, ["class", "currentPage", "href"]);
  const classes = () => {
    return classNames(local.class, hopeBreadcrumbLinkClass, breadcrumbLinkStyles({
      currentPage: local.currentPage === true ? true : false
    }));
  };
  return createComponent(Show, {
    get when() {
      return local.currentPage;
    },
    get fallback() {
      return createComponent(hope.a, mergeProps$1({
        get href() {
          return local.href;
        },
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.link;
        }
      }, others));
    },
    get children() {
      return createComponent(hope.span, mergeProps$1({
        "aria-current": "page",
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.link;
        }
      }, others));
    }
  });
}
BreadcrumbLink.toString = () => createClassSelector(hopeBreadcrumbLinkClass);
const hopeBreadcrumbSeparatorClass = "hope-breadcrumb__separator";
function BreadcrumbSeparator(props) {
  const theme = useStyleConfig().Breadcrumb;
  const breadcrumbContext = useBreadcrumbContext();
  const [local, others] = splitProps(props, ["class", "children"]);
  const classes = () => {
    return classNames(local.class, hopeBreadcrumbSeparatorClass, breadcrumbSeparatorStyles());
  };
  return createComponent(hope.span, mergeProps$1({
    role: "presentation",
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.separator;
    }
  }, others, {
    get children() {
      return createComponent(Show, {
        get when() {
          return local.children;
        },
        get fallback() {
          return breadcrumbContext.state.separator;
        },
        get children() {
          return local.children;
        }
      });
    }
  }));
}
BreadcrumbSeparator.toString = () => createClassSelector(hopeBreadcrumbSeparatorClass);
const centerStyles = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});
const hopeCenterClass = "hope-center";
function Center(props) {
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeCenterClass, centerStyles());
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    }
  }, others));
}
Center.toString = () => createClassSelector(hopeCenterClass);
function createColorVariant(config2) {
  return {
    color: config2.color,
    "&[data-disabled]": {
      color: "$neutral10"
    },
    "&[data-focus]": {
      boxShadow: `0 0 0 3px $colors${config2.boxShadowColorFocus}`,
      borderColor: config2.borderColorFocus
    }
  };
}
const toggleWrapperStyles = css({
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
});
const toggleControlLabelStyles = css({
  cursor: "pointer",
  userSelect: "none",
  "&[data-disabled]": {
    opacity: "0.5",
    cursor: "not-allowed"
  }
});
const toggleControlStyles = css({
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
      primary: createColorVariant({
        color: "$primary9",
        boxShadowColorFocus: "$primary5",
        borderColorFocus: "$primary8"
      }),
      accent: createColorVariant({
        color: "$accent9",
        boxShadowColorFocus: "$accent5",
        borderColorFocus: "$accent8"
      }),
      neutral: createColorVariant({
        color: "$neutral9",
        boxShadowColorFocus: "$neutral5",
        borderColorFocus: "$neutral8"
      }),
      success: createColorVariant({
        color: "$success9",
        boxShadowColorFocus: "$success5",
        borderColorFocus: "$success8"
      }),
      info: createColorVariant({
        color: "$info9",
        boxShadowColorFocus: "$info5",
        borderColorFocus: "$info8"
      }),
      warning: createColorVariant({
        color: "$warning9",
        boxShadowColorFocus: "$warning5",
        borderColorFocus: "$warning8"
      }),
      danger: createColorVariant({
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
});
const checkboxWrapperStyles = css(toggleWrapperStyles, {
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
});
const checkboxLabelStyles = css(toggleControlLabelStyles);
const checkboxControlStyles = css(toggleControlStyles, {
  borderRadius: "$sm",
  "& svg": {
    color: "$loContrast"
  },
  "&[data-indeterminate], &[data-focus][data-indeterminate]": {
    borderColor: "transparent",
    backgroundColor: "currentColor"
  }
});
const hopeCheckboxGroupClass = "hope-checkbox__group";
function CheckboxGroup(props) {
  var _a;
  const defaultName = `hope-checkbox-group-${createUniqueId()}--checkbox`;
  const theme = useStyleConfig().Checkbox;
  const [state, setState] = createStore({
    _value: (_a = props.defaultValue) != null ? _a : [],
    get isControlled() {
      return props.value !== void 0;
    },
    get value() {
      return this.isControlled ? props.value : this._value;
    },
    get name() {
      var _a2;
      return (_a2 = props.name) != null ? _a2 : defaultName;
    },
    get required() {
      return props.required;
    },
    get disabled() {
      return props.disabled;
    },
    get invalid() {
      return props.invalid;
    },
    get readOnly() {
      return props.readOnly;
    },
    get variant() {
      var _a2, _b, _c;
      return (_c = props.variant) != null ? _c : (_b = (_a2 = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a2.group) == null ? void 0 : _b.variant;
    },
    get colorScheme() {
      var _a2, _b, _c;
      return (_c = props.colorScheme) != null ? _c : (_b = (_a2 = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a2.group) == null ? void 0 : _b.colorScheme;
    },
    get size() {
      var _a2, _b, _c;
      return (_c = props.size) != null ? _c : (_b = (_a2 = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a2.group) == null ? void 0 : _b.size;
    },
    get labelPlacement() {
      var _a2, _b, _c;
      return (_c = props.labelPlacement) != null ? _c : (_b = (_a2 = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a2.group) == null ? void 0 : _b.labelPlacement;
    }
  });
  const [local, _, others] = splitProps(props, ["class", "onChange"], ["value", "defaultValue", "name", "required", "disabled", "readOnly", "invalid"]);
  const onChange = (event) => {
    var _a2;
    if (!state.value) {
      return;
    }
    const target = event.target;
    const nextValue = target.checked ? [...state.value, target.value] : state.value.filter((val) => String(val) !== String(target.value));
    setState("_value", nextValue);
    (_a2 = local.onChange) == null ? void 0 : _a2.call(local, nextValue);
  };
  const classes = () => classNames(local.class, hopeCheckboxGroupClass);
  const context = {
    state,
    onChange
  };
  return createComponent(CheckboxGroupContext.Provider, {
    value: context,
    get children() {
      return createComponent(Box, mergeProps$1({
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a2;
          return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.group;
        }
      }, others));
    }
  });
}
CheckboxGroup.toString = () => createClassSelector(hopeCheckboxGroupClass);
const CheckboxGroupContext = createContext();
function useCheckboxGroupContext() {
  return useContext(CheckboxGroupContext);
}
const formControlStyles = css({
  position: "relative",
  width: "$full"
});
const formLabelStyles = css({
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
});
const requiredIndicatorStyles = css({
  marginInlineStart: "$1",
  color: "$danger9",
  fontSize: "$base"
});
const formHelperTextStyles = css({
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
});
const formErrorMessageStyles = css({
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
});
const FormControlContext = createContext();
const hopeFormControlClass = "hope-form-control";
function FormControl(props) {
  const defaultId = `hope-field-${createUniqueId()}`;
  const theme = useStyleConfig().FormControl;
  const [state, setState] = createStore({
    get id() {
      var _a;
      return (_a = props.id) != null ? _a : defaultId;
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
      return props.required;
    },
    get disabled() {
      return props.disabled;
    },
    get invalid() {
      return props.invalid;
    },
    get readOnly() {
      return props.readOnly;
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
    hasHelperText: false,
    hasErrorMessage: false,
    isFocused: false
  });
  const [local, others] = splitProps(props, ["id", "required", "disabled", "invalid", "readOnly", "class"]);
  const setHasHelperText = (value) => setState("hasHelperText", value);
  const setHasErrorMessage = (value) => setState("hasErrorMessage", value);
  const onFocus = () => setState("isFocused", true);
  const onBlur = () => setState("isFocused", false);
  const context = () => ({
    state,
    setHasHelperText,
    setHasErrorMessage,
    onFocus,
    onBlur
  });
  const classes = () => classNames(local.class, hopeFormControlClass, formControlStyles());
  return createComponent(FormControlContext.Provider, {
    get value() {
      return context();
    },
    get children() {
      return createComponent(Box, mergeProps$1({
        role: "group",
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.root;
        }
      }, others));
    }
  });
}
FormControl.toString = () => createClassSelector(hopeFormControlClass);
function useFormControlContext() {
  return useContext(FormControlContext);
}
function useFormControl(props) {
  const formControl = useFormControlContext();
  const focusHandler = createMemo(() => {
    return chainHandlers(formControl == null ? void 0 : formControl.onFocus, props.onFocus);
  });
  const blurHandler = createMemo(() => {
    return chainHandlers(formControl == null ? void 0 : formControl.onBlur, props.onBlur);
  });
  const [state] = createStore({
    get id() {
      var _a;
      return (_a = props.id) != null ? _a : formControl == null ? void 0 : formControl.state.id;
    },
    get required() {
      var _a;
      return (_a = props.required) != null ? _a : formControl == null ? void 0 : formControl.state.required;
    },
    get disabled() {
      var _a;
      return (_a = props.disabled) != null ? _a : formControl == null ? void 0 : formControl.state.disabled;
    },
    get invalid() {
      var _a;
      return (_a = props.invalid) != null ? _a : formControl == null ? void 0 : formControl.state.invalid;
    },
    get readOnly() {
      var _a;
      return (_a = props.readOnly) != null ? _a : formControl == null ? void 0 : formControl.state.readOnly;
    },
    get ["aria-required"]() {
      return this.required ? true : void 0;
    },
    get ["aria-disabled"]() {
      return this.disabled ? true : void 0;
    },
    get ["aria-invalid"]() {
      return this.invalid ? true : void 0;
    },
    get ["aria-readonly"]() {
      return this.readOnly ? true : void 0;
    },
    get ["aria-describedby"]() {
      const labelIds = props["aria-describedby"] ? [props["aria-describedby"]] : [];
      if ((formControl == null ? void 0 : formControl.state.hasErrorMessage) && (formControl == null ? void 0 : formControl.state.invalid)) {
        labelIds.push(formControl.state.errorMessageId);
      }
      if (formControl == null ? void 0 : formControl.state.hasHelperText) {
        labelIds.push(formControl.state.helperTextId);
      }
      return labelIds.join(" ") || void 0;
    },
    get onFocus() {
      return focusHandler;
    },
    get onBlur() {
      return blurHandler;
    }
  });
  return state;
}
const _tmpl$$a = /* @__PURE__ */ template(`<input type="checkbox">`, 1);
function CheckboxPrimitive(props) {
  const defaultId = `hope-checkbox-${createUniqueId()}`;
  const formControlContext = useFormControlContext();
  const checkboxGroupContext = useCheckboxGroupContext();
  const formControlProps = useFormControl(props);
  const [state, setState] = createStore({
    _checked: !!props.defaultChecked,
    isFocused: false,
    get isControlled() {
      return props.checked !== void 0;
    },
    get checked() {
      if (checkboxGroupContext) {
        const checkboxGroupValue = checkboxGroupContext.state.value;
        return checkboxGroupValue != null ? checkboxGroupValue.some((val) => String(props.value) === String(val)) : false;
      }
      return this.isControlled ? !!props.checked : this._checked;
    },
    get id() {
      var _a;
      if (formControlContext && !checkboxGroupContext) {
        return formControlProps.id;
      }
      return (_a = props.id) != null ? _a : defaultId;
    },
    get name() {
      var _a;
      return (_a = props.name) != null ? _a : checkboxGroupContext == null ? void 0 : checkboxGroupContext.state.name;
    },
    get value() {
      return props.value;
    },
    get indeterminate() {
      return props.indeterminate;
    },
    get required() {
      var _a;
      return (_a = formControlProps.required) != null ? _a : checkboxGroupContext == null ? void 0 : checkboxGroupContext.state.required;
    },
    get disabled() {
      var _a;
      return (_a = formControlProps.disabled) != null ? _a : checkboxGroupContext == null ? void 0 : checkboxGroupContext.state.disabled;
    },
    get invalid() {
      var _a;
      return (_a = formControlProps.invalid) != null ? _a : checkboxGroupContext == null ? void 0 : checkboxGroupContext.state.invalid;
    },
    get readOnly() {
      var _a;
      return (_a = formControlProps.readOnly) != null ? _a : checkboxGroupContext == null ? void 0 : checkboxGroupContext.state.readOnly;
    },
    get ["aria-required"]() {
      return this.required ? true : void 0;
    },
    get ["aria-disabled"]() {
      return this.disabled ? true : void 0;
    },
    get ["aria-invalid"]() {
      return this.invalid ? true : void 0;
    },
    get ["aria-readonly"]() {
      return this.readOnly ? true : void 0;
    },
    get ["aria-label"]() {
      return props["aria-label"];
    },
    get ["aria-labelledby"]() {
      return props["aria-labelledby"];
    },
    get ["aria-describedby"]() {
      return props["aria-describedby"];
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
  });
  const [local, _, others] = splitProps(props, ["inputClass", "children", "ref", "tabIndex", "onChange"], ["id", "name", "value", "indeterminate", "checked", "defaultChecked", "required", "disabled", "invalid", "readOnly", "onFocus", "onBlur"]);
  const onChange = (event) => {
    if (state.readOnly || state.disabled) {
      event.preventDefault();
      return;
    }
    if (!state.isControlled) {
      const target = event.target;
      setState("_checked", target.checked);
    }
    chainHandlers(checkboxGroupContext == null ? void 0 : checkboxGroupContext.onChange, local.onChange)(event);
  };
  const onFocus = (event) => {
    setState("isFocused", true);
    callHandler(formControlProps.onFocus, event);
  };
  const onBlur = (event) => {
    setState("isFocused", false);
    callHandler(formControlProps.onBlur, event);
  };
  const inputClasses = () => classNames(local.inputClass, visuallyHiddenStyles());
  const stateAccessor = () => state;
  const context = {
    state
  };
  return createComponent(CheckboxPrimitiveContext.Provider, {
    value: context,
    get children() {
      return createComponent(hope.label, mergeProps$1({
        get ["for"]() {
          return state.id;
        },
        "data-group": true,
        get ["data-indeterminate"]() {
          return state["data-indeterminate"];
        },
        get ["data-focus"]() {
          return state["data-focus"];
        },
        get ["data-checked"]() {
          return state["data-checked"];
        },
        get ["data-required"]() {
          return state["data-required"];
        },
        get ["data-disabled"]() {
          return state["data-disabled"];
        },
        get ["data-invalid"]() {
          return state["data-invalid"];
        },
        get ["data-readonly"]() {
          return state["data-readonly"];
        }
      }, others, {
        get children() {
          return [(() => {
            const _el$ = _tmpl$$a.cloneNode(true);
            _el$.addEventListener("blur", onBlur);
            _el$.addEventListener("focus", onFocus);
            _el$.addEventListener("change", onChange);
            const _ref$ = local.ref;
            typeof _ref$ === "function" ? _ref$(_el$) : local.ref = _el$;
            effect((_p$) => {
              const _v$ = inputClasses(), _v$2 = local.tabIndex, _v$3 = state.value, _v$4 = state.id, _v$5 = state.name, _v$6 = state.checked, _v$7 = state.required, _v$8 = state.disabled, _v$9 = state.readOnly, _v$10 = state["aria-required"], _v$11 = state["aria-disabled"], _v$12 = state["aria-invalid"], _v$13 = state["aria-readonly"], _v$14 = state["aria-label"], _v$15 = state["aria-labelledby"], _v$16 = state["aria-describedby"];
              _v$ !== _p$._v$ && (_el$.className = _p$._v$ = _v$);
              _v$2 !== _p$._v$2 && setAttribute(_el$, "tabindex", _p$._v$2 = _v$2);
              _v$3 !== _p$._v$3 && (_el$.value = _p$._v$3 = _v$3);
              _v$4 !== _p$._v$4 && setAttribute(_el$, "id", _p$._v$4 = _v$4);
              _v$5 !== _p$._v$5 && setAttribute(_el$, "name", _p$._v$5 = _v$5);
              _v$6 !== _p$._v$6 && (_el$.checked = _p$._v$6 = _v$6);
              _v$7 !== _p$._v$7 && (_el$.required = _p$._v$7 = _v$7);
              _v$8 !== _p$._v$8 && (_el$.disabled = _p$._v$8 = _v$8);
              _v$9 !== _p$._v$9 && (_el$.readOnly = _p$._v$9 = _v$9);
              _v$10 !== _p$._v$10 && setAttribute(_el$, "aria-required", _p$._v$10 = _v$10);
              _v$11 !== _p$._v$11 && setAttribute(_el$, "aria-disabled", _p$._v$11 = _v$11);
              _v$12 !== _p$._v$12 && setAttribute(_el$, "aria-invalid", _p$._v$12 = _v$12);
              _v$13 !== _p$._v$13 && setAttribute(_el$, "aria-readonly", _p$._v$13 = _v$13);
              _v$14 !== _p$._v$14 && setAttribute(_el$, "aria-label", _p$._v$14 = _v$14);
              _v$15 !== _p$._v$15 && setAttribute(_el$, "aria-labelledby", _p$._v$15 = _v$15);
              _v$16 !== _p$._v$16 && setAttribute(_el$, "aria-describedby", _p$._v$16 = _v$16);
              return _p$;
            }, {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0,
              _v$4: void 0,
              _v$5: void 0,
              _v$6: void 0,
              _v$7: void 0,
              _v$8: void 0,
              _v$9: void 0,
              _v$10: void 0,
              _v$11: void 0,
              _v$12: void 0,
              _v$13: void 0,
              _v$14: void 0,
              _v$15: void 0,
              _v$16: void 0
            });
            return _el$;
          })(), createComponent(Show, {
            get when() {
              return isFunction(local.children);
            },
            get fallback() {
              return local.children;
            },
            get children() {
              var _a;
              return (_a = local.children) == null ? void 0 : _a.call(local, {
                state: stateAccessor
              });
            }
          })];
        }
      }));
    }
  });
}
const CheckboxPrimitiveContext = createContext();
function useCheckboxPrimitiveContext() {
  const context = useContext(CheckboxPrimitiveContext);
  if (!context) {
    throw new Error("[Hope UI]: useCheckboxPrimitiveContext must be used within a `<CheckboxPrimitive />` component");
  }
  return context;
}
const _tmpl$$9 = /* @__PURE__ */ template(`<svg><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" stroke="currentColor" stroke-width="1" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`, 4, true), _tmpl$2 = /* @__PURE__ */ template(`<svg><path d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z" fill="currentColor" stroke="currentColor" stroke-width="1" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`, 4, true);
const hopeCheckboxClass = "hope-checkbox";
const hopeCheckboxInputClass = "hope-checkbox__input";
const hopeCheckboxControlClass = "hope-checkbox__control";
const hopeCheckboxLabelClass = "hope-checkbox__label";
function Checkbox(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
  const theme = useStyleConfig().Checkbox;
  const checkboxGroupContext = useCheckboxGroupContext();
  const defaultProps = {
    variant: (_e = (_d = (_a = checkboxGroupContext == null ? void 0 : checkboxGroupContext.state) == null ? void 0 : _a.variant) != null ? _d : (_c = (_b = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _b.root) == null ? void 0 : _c.variant) != null ? _e : "outline",
    colorScheme: (_j = (_i = (_f = checkboxGroupContext == null ? void 0 : checkboxGroupContext.state) == null ? void 0 : _f.colorScheme) != null ? _i : (_h = (_g = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _g.root) == null ? void 0 : _h.colorScheme) != null ? _j : "primary",
    size: (_o = (_n = (_k = checkboxGroupContext == null ? void 0 : checkboxGroupContext.state) == null ? void 0 : _k.size) != null ? _n : (_m = (_l = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _l.root) == null ? void 0 : _m.size) != null ? _o : "md",
    labelPlacement: (_t = (_s = (_p = checkboxGroupContext == null ? void 0 : checkboxGroupContext.state) == null ? void 0 : _p.labelPlacement) != null ? _s : (_r = (_q = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _q.root) == null ? void 0 : _r.labelPlacement) != null ? _t : "end"
  };
  const propsWitDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWitDefault, ["children", "class", "variant", "colorScheme", "size", "labelPlacement", "iconChecked", "iconIndeterminate"]);
  const wrapperClasses = () => {
    return classNames(local.class, hopeCheckboxClass, checkboxWrapperStyles({
      size: local.size,
      labelPlacement: local.labelPlacement
    }));
  };
  const controlClasses = () => {
    return classNames(hopeCheckboxControlClass, checkboxControlStyles({
      variant: local.variant,
      colorScheme: local.colorScheme,
      size: local.size
    }));
  };
  const labelClasses = () => {
    return classNames(hopeCheckboxLabelClass, checkboxLabelStyles());
  };
  return createComponent(CheckboxPrimitive, mergeProps$1({
    get ["class"]() {
      return wrapperClasses();
    },
    inputClass: hopeCheckboxInputClass,
    get __baseStyle() {
      var _a2;
      return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.root;
    }
  }, others, {
    children: ({
      state
    }) => [createComponent(hope.span, {
      "aria-hidden": true,
      get ["class"]() {
        return controlClasses();
      },
      get __baseStyle() {
        var _a2;
        return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.control;
      },
      get ["data-indeterminate"]() {
        return state()["data-indeterminate"];
      },
      get ["data-focus"]() {
        return state()["data-focus"];
      },
      get ["data-checked"]() {
        return state()["data-checked"];
      },
      get ["data-required"]() {
        return state()["data-required"];
      },
      get ["data-disabled"]() {
        return state()["data-disabled"];
      },
      get ["data-invalid"]() {
        return state()["data-invalid"];
      },
      get ["data-readonly"]() {
        return state()["data-readonly"];
      },
      get children() {
        return createComponent(Switch$1, {
          get children() {
            return [createComponent(Match, {
              get when() {
                return state().indeterminate;
              },
              get children() {
                return createComponent(Show, {
                  get when() {
                    return local.iconIndeterminate;
                  },
                  get fallback() {
                    return createComponent(CheckboxIconIndeterminate, {});
                  },
                  get children() {
                    return local.iconIndeterminate;
                  }
                });
              }
            }), createComponent(Match, {
              get when() {
                return memo(() => !!state().checked, true)() && !state().indeterminate;
              },
              get children() {
                return createComponent(Show, {
                  get when() {
                    return local.iconChecked;
                  },
                  get fallback() {
                    return createComponent(CheckboxIconCheck, {});
                  },
                  get children() {
                    return local.iconChecked;
                  }
                });
              }
            })];
          }
        });
      }
    }), createComponent(hope.span, {
      get ["class"]() {
        return labelClasses();
      },
      get __baseStyle() {
        var _a2;
        return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.label;
      },
      get ["data-indeterminate"]() {
        return state()["data-indeterminate"];
      },
      get ["data-focus"]() {
        return state()["data-focus"];
      },
      get ["data-checked"]() {
        return state()["data-checked"];
      },
      get ["data-required"]() {
        return state()["data-required"];
      },
      get ["data-disabled"]() {
        return state()["data-disabled"];
      },
      get ["data-invalid"]() {
        return state()["data-invalid"];
      },
      get ["data-readonly"]() {
        return state()["data-readonly"];
      },
      get children() {
        return local.children;
      }
    })]
  }));
}
Checkbox.toString = () => createClassSelector(hopeCheckboxClass);
const CheckboxIconCheck = createIcon({
  viewBox: "0 0 15 15",
  path: () => _tmpl$$9.cloneNode(true)
});
const CheckboxIconIndeterminate = createIcon({
  viewBox: "0 0 15 15",
  path: () => _tmpl$2.cloneNode(true)
});
function CheckboxPrimitiveIndicator(props) {
  const checkboxPrimitiveContext = useCheckboxPrimitiveContext();
  return createComponent(Show, {
    get when() {
      return checkboxPrimitiveContext.state.checked || checkboxPrimitiveContext.state.indeterminate;
    },
    get children() {
      return createComponent(hope.span, mergeProps$1({
        "aria-hidden": true,
        get ["data-indeterminate"]() {
          return checkboxPrimitiveContext.state["data-indeterminate"];
        },
        get ["data-focus"]() {
          return checkboxPrimitiveContext.state["data-focus"];
        },
        get ["data-checked"]() {
          return checkboxPrimitiveContext.state["data-checked"];
        },
        get ["data-required"]() {
          return checkboxPrimitiveContext.state["data-required"];
        },
        get ["data-disabled"]() {
          return checkboxPrimitiveContext.state["data-disabled"];
        },
        get ["data-invalid"]() {
          return checkboxPrimitiveContext.state["data-invalid"];
        },
        get ["data-readonly"]() {
          return checkboxPrimitiveContext.state["data-readonly"];
        }
      }, props));
    }
  });
}
const growAndShrink = keyframes({
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
});
const circularProgressStyles = css({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle"
});
const circularProgressTrackStyles = css({
  fill: "transparent",
  stroke: "currentColor"
});
const circularProgressIndicatorContainerStyles = css({
  position: "absolute",
  top: 0,
  left: 0,
  variants: {
    spin: {
      true: {
        animation: `${spin} 2s linear infinite`
      }
    }
  }
});
const circularProgressIndicatorStyles = css({
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
        animation: `${growAndShrink} 2s linear infinite`
      },
      false: {
        strokeDashoffset: 66,
        transitionProperty: "stroke-dasharray, stroke, opacity",
        transitionDuration: "600ms",
        transitionTimingFunction: "ease"
      }
    }
  }
});
const circularProgressLabelStyles = css({
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
});
const CircularProgressContext = createContext();
const hopeCircularProgressClass = "hope-circular-progress";
const hopeCircularProgressTrackClass = "hope-circular-progress__track";
function CircularProgress(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const theme = useStyleConfig().CircularProgress;
  const [state] = createStore({
    get size() {
      var _a2, _b2, _c2, _d2;
      return (_d2 = (_c2 = props.size) != null ? _c2 : (_b2 = (_a2 = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a2.root) == null ? void 0 : _b2.size) != null ? _d2 : "$12";
    },
    get thickness() {
      var _a2, _b2, _c2, _d2;
      return (_d2 = (_c2 = props.thickness) != null ? _c2 : (_b2 = (_a2 = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a2.root) == null ? void 0 : _b2.thickness) != null ? _d2 : "$2_5";
    },
    get min() {
      var _a2;
      return (_a2 = props.min) != null ? _a2 : 0;
    },
    get max() {
      var _a2;
      return (_a2 = props.max) != null ? _a2 : 100;
    },
    get value() {
      var _a2;
      return (_a2 = props.value) != null ? _a2 : 0;
    },
    get percent() {
      return valueToPercent(this.value, this.min, this.max);
    },
    get indeterminate() {
      var _a2;
      return (_a2 = props.indeterminate) != null ? _a2 : false;
    },
    get ariaValueText() {
      var _a2;
      if (this.indeterminate) {
        return void 0;
      }
      if (isFunction(this.getValueText)) {
        return this.getValueText(this.value, this.percent);
      }
      return (_a2 = props.valueText) != null ? _a2 : `${this.percent}%`;
    },
    get getValueText() {
      return props.getValueText;
    },
    get isIndicatorVisible() {
      return this.value > 0 || this.indeterminate ? true : false;
    }
  });
  const defaultProps = {
    size: (_c = (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.size) != null ? _c : "$12",
    thickness: (_f = (_e = (_d = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _d.root) == null ? void 0 : _e.thickness) != null ? _f : "$2_5",
    trackColor: (_i = (_h = (_g = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _g.root) == null ? void 0 : _h.trackColor) != null ? _i : "$neutral4"
  };
  const propsWithDefaults = mergeProps(defaultProps, props);
  const [local, _, others] = splitProps(propsWithDefaults, ["class", "children", "trackColor"], ["size", "thickness", "min", "max", "getValueText"]);
  const rootClasses = () => classNames(local.class, hopeCircularProgressClass, circularProgressStyles());
  const trackClasses = () => {
    return classNames(hopeCircularProgressTrackClass, circularProgressTrackStyles({
      css: {
        color: local.trackColor,
        strokeWidth: state.thickness
      }
    }));
  };
  const context = {
    state
  };
  return createComponent(CircularProgressContext.Provider, {
    value: context,
    get children() {
      return createComponent(Box, mergeProps$1({
        role: "progressbar",
        get ["data-indeterminate"]() {
          return state.indeterminate ? "" : void 0;
        },
        get ["aria-valuemin"]() {
          return state.min;
        },
        get ["aria-valuemax"]() {
          return state.max;
        },
        get ["aria-valuenow"]() {
          return state.indeterminate ? void 0 : state.value;
        },
        get ["aria-valuetext"]() {
          return state.ariaValueText;
        },
        get ["class"]() {
          return rootClasses();
        },
        get __baseStyle() {
          var _a2;
          return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.root;
        }
      }, others, {
        get children() {
          return [createComponent(hope.svg, {
            viewBox: "0 0 100 100",
            get boxSize() {
              return state.size;
            },
            get children() {
              return createComponent(hope.circle, {
                cx: 50,
                cy: 50,
                r: 42,
                get ["class"]() {
                  return trackClasses();
                },
                get __baseStyle() {
                  var _a2;
                  return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.track;
                }
              });
            }
          }), memo(() => local.children)];
        }
      }));
    }
  });
}
CircularProgress.toString = () => createClassSelector(hopeCircularProgressClass);
function useCircularProgressContext() {
  const context = useContext(CircularProgressContext);
  if (!context) {
    throw new Error("[Hope UI]: useCircularProgressContext must be used within a `<CircularProgress />` component");
  }
  return context;
}
const hopeCircularProgressIndicatorClass = "hope-circular-progress__indicator";
function CircularProgressIndicator(props) {
  var _a, _b, _c, _d, _e, _f;
  const theme = useStyleConfig().CircularProgress;
  const circularProgressContext = useCircularProgressContext();
  const defaultProps = {
    color: (_c = (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.indicator) == null ? void 0 : _b.color) != null ? _c : "$primary9",
    withRoundCaps: (_f = (_e = (_d = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _d.indicator) == null ? void 0 : _e.withRoundCaps) != null ? _f : false
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["class", "children", "color", "withRoundCaps"]);
  const strokeDasharray = () => {
    if (circularProgressContext.state.indeterminate) {
      return void 0;
    }
    const determinant = circularProgressContext.state.percent * 2.64;
    return `${determinant} ${264 - determinant}`;
  };
  const rootClasses = () => {
    return classNames(local.class, hopeCircularProgressIndicatorClass, circularProgressIndicatorContainerStyles({
      spin: circularProgressContext.state.indeterminate
    }));
  };
  const indicatorClasses = () => {
    return circularProgressIndicatorStyles({
      hidden: !circularProgressContext.state.isIndicatorVisible,
      indeterminate: circularProgressContext.state.indeterminate === true ? true : false,
      withRoundCaps: local.withRoundCaps,
      css: {
        color: local.color,
        strokeWidth: circularProgressContext.state.thickness,
        strokeDasharray: strokeDasharray()
      }
    });
  };
  return createComponent(hope.svg, mergeProps$1({
    viewBox: "0 0 100 100",
    get ["class"]() {
      return rootClasses();
    },
    get boxSize() {
      return circularProgressContext.state.size;
    }
  }, others, {
    get children() {
      return createComponent(hope.circle, {
        cx: 50,
        cy: 50,
        r: 42,
        get ["class"]() {
          return indicatorClasses();
        },
        get __baseStyle() {
          var _a2;
          return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.indicator;
        }
      });
    }
  }));
}
CircularProgressIndicator.toString = () => createClassSelector(hopeCircularProgressIndicatorClass);
const hopeCircularProgressLabelClass = "hope-circular-progress__label";
function CircularProgressLabel(props) {
  const theme = useStyleConfig().CircularProgress;
  const circularProgressContext = useCircularProgressContext();
  const [local, others] = splitProps(props, ["class", "children"]);
  const classes = () => {
    return classNames(local.class, hopeCircularProgressLabelClass, circularProgressLabelStyles());
  };
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.label;
    }
  }, others, {
    get children() {
      return createComponent(Show, {
        get when() {
          return local.children;
        },
        get fallback() {
          return circularProgressContext.state.ariaValueText;
        },
        get children() {
          return local.children;
        }
      });
    }
  }));
}
CircularProgressLabel.toString = () => createClassSelector(hopeCircularProgressLabelClass);
const _tmpl$$8 = /* @__PURE__ */ template(`<svg><path fill="currentColor" d="M2.64 1.27L7.5 6.13l4.84-4.84A.92.92 0 0 1 13 1a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l4.89 4.89A.9.9 0 0 1 14 13a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-4.85 4.85A.92.92 0 0 1 2 14a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L1.27 2.61A.9.9 0 0 1 1 2a1 1 0 0 1 1-1c.24.003.47.1.64.27z"></path></svg>`, 4, true);
const IconClose = createIcon({
  viewBox: "0 0 15 15",
  path: () => _tmpl$$8.cloneNode(true)
});
const closeButtonStyles = css({
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
});
const hopeCloseButtonClass = "hope-close-button";
function CloseButton(props) {
  var _a, _b, _c, _d, _e, _f;
  const theme = useStyleConfig().CloseButton;
  const defaultProps = {
    "aria-label": (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a["aria-label"]) != null ? _b : "Close",
    icon: (_d = (_c = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _c.icon) != null ? _d : createComponent(IconClose, {}),
    size: (_f = (_e = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _e.size) != null ? _f : "md"
  };
  const propsWithDefaults = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefaults, ["class", "children", "size", "icon"]);
  const classes = () => {
    return classNames(local.class, hopeCloseButtonClass, closeButtonStyles({
      size: local.size
    }));
  };
  return createComponent(hope.button, mergeProps$1({
    type: "button",
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      return theme == null ? void 0 : theme.baseStyle;
    }
  }, others, {
    get children() {
      return createComponent(Show, {
        get when() {
          return local.children;
        },
        get fallback() {
          return local.icon;
        },
        get children() {
          return local.children;
        }
      });
    }
  }));
}
CloseButton.toString = () => createClassSelector(hopeCloseButtonClass);
const containerStyles = css({
  width: "100%",
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
});
const hopeContainerClass = "hope-container";
function Container(props) {
  const defaultProps = {
    centered: true,
    centerContent: false
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, variantProps, others] = splitProps(propsWithDefault, ["class"], ["centered", "centerContent"]);
  const classes = () => classNames(local.class, hopeContainerClass, containerStyles(variantProps));
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    }
  }, others));
}
Container.toString = () => createClassSelector(hopeContainerClass);
const dividerStyles = css({
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
});
const hopeDividerClass = "hope-divider";
function Divider(props) {
  const defaultProps = {
    as: "div",
    variant: "solid",
    orientation: "horizontal",
    color: "$neutral6",
    thickness: "1px"
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["class", "variant", "orientation", "thickness"]);
  const classes = () => {
    return classNames(local.class, hopeDividerClass, dividerStyles({
      variant: local.variant,
      orientation: local.orientation,
      css: {
        borderLeftWidth: local.orientation === "vertical" ? local.thickness : 0,
        borderBottomWidth: local.orientation === "horizontal" ? local.thickness : 0
      }
    }));
  };
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    }
  }, others));
}
Divider.toString = () => createClassSelector(hopeDividerClass);
function Modal(props) {
  const defaultDialogId = `hope-modal-${createUniqueId()}`;
  const theme = useStyleConfig().Modal;
  const [state, setState] = createStore({
    headerMounted: false,
    bodyMounted: false,
    get opened() {
      return props.opened;
    },
    get dialogId() {
      var _a;
      return (_a = props.id) != null ? _a : defaultDialogId;
    },
    get headerId() {
      return `${this.dialogId}--header`;
    },
    get bodyId() {
      return `${this.dialogId}--body`;
    },
    get initialFocus() {
      return props.initialFocus;
    },
    get motionPreset() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.motionPreset) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.motionPreset) != null ? _d : "scale";
    },
    get size() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.size) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.size) != null ? _d : "md";
    },
    get centered() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.centered) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.centered) != null ? _d : false;
    },
    get scrollBehavior() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.scrollBehavior) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.scrollBehavior) != null ? _d : "outside";
    },
    get closeOnOverlayClick() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.closeOnOverlayClick) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.closeOnOverlayClick) != null ? _d : true;
    },
    get closeOnEsc() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.closeOnEsc) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.closeOnEsc) != null ? _d : true;
    },
    get trapFocus() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.trapFocus) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.trapFocus) != null ? _d : true;
    },
    get blockScrollOnMount() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.blockScrollOnMount) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.blockScrollOnMount) != null ? _d : true;
    },
    get preserveScrollBarGap() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.preserveScrollBarGap) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.preserveScrollBarGap) != null ? _d : false;
    }
  });
  const [isPortalMounted, setIsPortalMounted] = createSignal(false);
  createEffect(() => {
    if (state.opened) {
      setIsPortalMounted(true);
    } else {
      state.motionPreset === "none" && setIsPortalMounted(false);
    }
  });
  const unmountPortal = () => setIsPortalMounted(false);
  const onClose = () => props.onClose();
  const setHeaderMounted = (value) => setState("headerMounted", value);
  const setBodyMounted = (value) => setState("bodyMounted", value);
  let mouseDownTarget = null;
  const onMouseDown = (event) => {
    mouseDownTarget = event.target;
  };
  const onKeyDown = (event) => {
    var _a;
    if (event.key === "Escape") {
      event.stopPropagation();
      if (state.closeOnEsc) {
        onClose();
      }
      (_a = props.onEsc) == null ? void 0 : _a.call(props);
    }
  };
  const onOverlayClick = (event) => {
    var _a;
    event.stopPropagation();
    if (mouseDownTarget !== event.target) {
      return;
    }
    if (state.closeOnOverlayClick) {
      onClose();
    }
    (_a = props.onOverlayClick) == null ? void 0 : _a.call(props);
  };
  const context = {
    state,
    unmountPortal,
    onClose,
    onMouseDown,
    onKeyDown,
    onOverlayClick,
    setHeaderMounted,
    setBodyMounted
  };
  return createComponent(Show, {
    get when() {
      return isPortalMounted();
    },
    get children() {
      return createComponent(ModalContext.Provider, {
        value: context,
        get children() {
          return createComponent(Portal, {
            get children() {
              return props.children;
            }
          });
        }
      });
    }
  });
}
const ModalContext = createContext();
function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("[Hope UI]: useModalContext must be used within a `<Modal />` component");
  }
  return context;
}
const hopeModalBodyClass = "hope-modal__body";
function ModalBody(props) {
  const theme = useStyleConfig().Modal;
  const modalContext = useModalContext();
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => {
    return classNames(local.class, hopeModalBodyClass, modalBodyStyles({
      scrollBehavior: modalContext.state.scrollBehavior
    }));
  };
  onMount(() => modalContext.setBodyMounted(true));
  onCleanup(() => modalContext.setBodyMounted(false));
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get id() {
      return modalContext.state.bodyId;
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.body;
    }
  }, others));
}
ModalBody.toString = () => createClassSelector(hopeModalBodyClass);
const hopeModalCloseButtonClass = "hope-modal__close-button";
function ModalCloseButton(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const theme = useStyleConfig().Modal;
  const modalContext = useModalContext();
  const defaultProps = {
    "aria-label": (_c = (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.closeButton) == null ? void 0 : _b["aria-label"]) != null ? _c : "Close modal",
    size: (_f = (_e = (_d = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _d.closeButton) == null ? void 0 : _e.size) != null ? _f : "md",
    icon: (_h = (_g = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _g.closeButton) == null ? void 0 : _h.icon
  };
  const propsWithDefaults = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefaults, ["class", "onClick"]);
  const classes = () => classNames(local.class, hopeModalCloseButtonClass, modalCloseButtonStyles());
  const onClick = (event) => {
    chainHandlers(local.onClick, (e) => {
      e.stopPropagation();
      modalContext.onClose();
    })(event);
  };
  return createComponent(CloseButton, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a2;
      return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.closeButton;
    },
    onClick
  }, others));
}
ModalCloseButton.toString = () => createClassSelector(hopeModalCloseButtonClass);
const hopeModalFooterClass = "hope-modal__footer";
function ModalFooter(props) {
  const theme = useStyleConfig().Modal;
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeModalFooterClass, modalFooterStyles());
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.footer;
    }
  }, others));
}
ModalFooter.toString = () => createClassSelector(hopeModalFooterClass);
const hopeModalHeaderClass = "hope-modal__header";
function ModalHeader(props) {
  const theme = useStyleConfig().Modal;
  const modalContext = useModalContext();
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeModalHeaderClass, modalHeaderStyles());
  onMount(() => modalContext.setHeaderMounted(true));
  onCleanup(() => modalContext.setHeaderMounted(false));
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get id() {
      return modalContext.state.headerId;
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.header;
    }
  }, others));
}
ModalHeader.toString = () => createClassSelector(hopeModalHeaderClass);
const DrawerContext = createContext();
function Drawer(props) {
  const theme = useStyleConfig().Drawer;
  const [, modalProps] = splitProps(props, ["opened", "onClose", "placement", "size", "fullHeight", "disableMotion"]);
  const [state] = createStore({
    get placement() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.placement) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.placement) != null ? _d : "right";
    },
    get size() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.size) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.size) != null ? _d : "xs";
    },
    get fullHeight() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.fullHeight) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.fullHeight) != null ? _d : false;
    },
    get disableMotion() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.disableMotion) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.disableMotion) != null ? _d : false;
    }
  });
  return createComponent(DrawerContext.Provider, {
    value: state,
    get children() {
      return createComponent(Modal, mergeProps$1({
        scrollBehavior: "inside",
        get blockScrollOnMount() {
          var _a, _b;
          return (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.blockScrollOnMount;
        },
        get closeOnEsc() {
          var _a, _b;
          return (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.closeOnEsc;
        },
        get closeOnOverlayClick() {
          var _a, _b;
          return (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.closeOnOverlayClick;
        },
        get preserveScrollBarGap() {
          var _a, _b;
          return (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.preserveScrollBarGap;
        },
        get trapFocus() {
          var _a, _b;
          return (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.trapFocus;
        },
        get opened() {
          return props.opened;
        },
        get onClose() {
          return props.onClose;
        }
      }, modalProps));
    }
  });
}
function useDrawerContext() {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("[Hope UI]: useDrawerContext must be used within a `<Drawer />` component");
  }
  return context;
}
function DrawerCloseButton(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const theme = useStyleConfig().Drawer;
  const defaultProps = {
    "aria-label": (_c = (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.closeButton) == null ? void 0 : _b["aria-label"]) != null ? _c : "Close drawer",
    size: (_f = (_e = (_d = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _d.closeButton) == null ? void 0 : _e.size) != null ? _f : "md",
    icon: (_h = (_g = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _g.closeButton) == null ? void 0 : _h.icon
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  return createComponent(ModalCloseButton, mergeProps$1({
    get __baseStyle() {
      var _a2;
      return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.closeButton;
    }
  }, propsWithDefault));
}
function DrawerBody(props) {
  const theme = useStyleConfig().Drawer;
  return createComponent(ModalBody, mergeProps$1({
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.body;
    }
  }, props));
}
function DrawerHeader(props) {
  const theme = useStyleConfig().Drawer;
  return createComponent(ModalHeader, mergeProps$1({
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.header;
    }
  }, props));
}
function DrawerFooter(props) {
  const theme = useStyleConfig().Drawer;
  return createComponent(ModalFooter, mergeProps$1({
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.footer;
    }
  }, props));
}
function createModal(props) {
  const modalContext = useModalContext();
  let containerRef;
  let focusTrap;
  const assignContainerRef = (el) => {
    containerRef = el;
  };
  const ariaLabelledBy = () => {
    return modalContext.state.headerMounted ? modalContext.state.headerId : void 0;
  };
  const ariaDescribedBy = () => {
    return modalContext.state.bodyMounted ? modalContext.state.bodyId : void 0;
  };
  const onDialogClick = (event) => {
    chainHandlers(props.onClick, (e) => e.stopPropagation())(event);
  };
  const dialogSelector = () => `[id='${modalContext.state.dialogId}']`;
  const childOfDialogSelector = () => `${dialogSelector()} *`;
  const enableFocusTrapAndScrollLock = () => {
    if (!containerRef) {
      return;
    }
    if (modalContext.state.trapFocus) {
      focusTrap = createFocusTrap(containerRef, {
        initialFocus: modalContext.state.initialFocus,
        fallbackFocus: dialogSelector(),
        allowOutsideClick: true
      });
      focusTrap.activate();
    }
    if (modalContext.state.blockScrollOnMount) {
      addScrollableSelector(childOfDialogSelector());
      disablePageScroll(containerRef);
    }
  };
  const disableFocusTrapAndScrollLock = () => {
    focusTrap == null ? void 0 : focusTrap.deactivate();
    removeScrollableSelector(childOfDialogSelector());
    clearQueueScrollLocks();
    enablePageScroll();
  };
  onMount(() => {
    enableFocusTrapAndScrollLock();
  });
  onCleanup(() => {
    disableFocusTrapAndScrollLock();
  });
  return {
    assignContainerRef,
    ariaLabelledBy,
    ariaDescribedBy,
    onDialogClick
  };
}
const hopeModalContainerClass = "hope-modal__content-container";
const hopeModalContentClass = "hope-modal__content";
function ModalContent(props) {
  const theme = useStyleConfig().Modal;
  const modalContext = useModalContext();
  const [local, others] = splitProps(props, ["ref", "class", "role", "aria-labelledby", "aria-describedby", "onClick"]);
  const {
    assignContainerRef,
    ariaLabelledBy,
    ariaDescribedBy,
    onDialogClick
  } = createModal(local);
  const containerClasses = () => {
    const containerClass = modalContainerStyles({
      centered: modalContext.state.centered,
      scrollBehavior: modalContext.state.scrollBehavior
    });
    return classNames(hopeModalContainerClass, containerClass);
  };
  const dialogClasses = () => {
    const dialogClass = modalDialogStyles({
      size: modalContext.state.size,
      scrollBehavior: modalContext.state.scrollBehavior
    });
    return classNames(local.class, hopeModalContentClass, dialogClass);
  };
  const transitionName = () => {
    switch (modalContext.state.motionPreset) {
      case "fade-in-bottom":
        return modalTransitionName.fadeInBottom;
      case "scale":
        return modalTransitionName.scale;
      case "none":
        return "hope-none";
    }
  };
  return createComponent(Transition, {
    get name() {
      return transitionName();
    },
    appear: true,
    get onAfterExit() {
      return modalContext.unmountPortal;
    },
    get children() {
      return createComponent(Show, {
        get when() {
          return modalContext.state.opened;
        },
        get children() {
          return createComponent(Box, {
            ref: assignContainerRef,
            get ["class"]() {
              return containerClasses();
            },
            tabIndex: -1,
            get onMouseDown() {
              return modalContext.onMouseDown;
            },
            get onKeyDown() {
              return modalContext.onKeyDown;
            },
            get onClick() {
              return modalContext.onOverlayClick;
            },
            get children() {
              return createComponent(hope.section, mergeProps$1({
                get ["class"]() {
                  return dialogClasses();
                },
                get __baseStyle() {
                  var _a;
                  return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.content;
                },
                get id() {
                  return modalContext.state.dialogId;
                },
                get role() {
                  var _a;
                  return (_a = local.role) != null ? _a : "dialog";
                },
                tabIndex: -1,
                "aria-modal": true,
                get ["aria-labelledby"]() {
                  return ariaLabelledBy();
                },
                get ["aria-describedby"]() {
                  return ariaDescribedBy();
                },
                onClick: onDialogClick
              }, others));
            }
          });
        }
      });
    }
  });
}
ModalContent.toString = () => createClassSelector(hopeModalContentClass);
const hopeModalOverlayClass = "hope-modal__overlay";
function ModalOverlay(props) {
  const theme = useStyleConfig().Modal;
  const modalContext = useModalContext();
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeModalOverlayClass, modalOverlayStyles());
  const transitionName = () => {
    return modalContext.state.motionPreset === "none" ? "hope-none" : modalTransitionName.fade;
  };
  return createComponent(Transition, {
    get name() {
      return transitionName();
    },
    appear: true,
    get children() {
      return createComponent(Show, {
        get when() {
          return modalContext.state.opened;
        },
        get children() {
          return createComponent(Box, mergeProps$1({
            get ["class"]() {
              return classes();
            },
            get __baseStyle() {
              var _a;
              return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.overlay;
            }
          }, others));
        }
      });
    }
  });
}
ModalOverlay.toString = () => createClassSelector(hopeModalOverlayClass);
const hopeDrawerContainerClass = "hope-drawer__content-container";
const hopeDrawerContentClass = "hope-drawer__content";
function DrawerContent(props) {
  const theme = useStyleConfig().Drawer;
  const drawerContext = useDrawerContext();
  const modalContext = useModalContext();
  const [local, others] = splitProps(props, ["ref", "class", "role", "aria-labelledby", "aria-describedby", "onClick"]);
  const {
    assignContainerRef,
    ariaLabelledBy,
    ariaDescribedBy,
    onDialogClick
  } = createModal(local);
  const containerClasses = () => {
    return classNames(hopeDrawerContainerClass, drawerContainerStyles({
      placement: drawerContext.placement
    }));
  };
  const dialogClasses = () => {
    const dialogClass = drawerDialogStyles({
      size: drawerContext.size,
      placement: drawerContext.placement,
      fullHeight: drawerContext.fullHeight
    });
    return classNames(local.class, hopeDrawerContentClass, dialogClass);
  };
  const transitionName = () => {
    if (drawerContext.disableMotion) {
      return "hope-none";
    }
    switch (drawerContext.placement) {
      case "top":
        return drawerTransitionName.slideInTop;
      case "right":
        return drawerTransitionName.slideInRight;
      case "bottom":
        return drawerTransitionName.slideInBottom;
      case "left":
        return drawerTransitionName.slideInLeft;
    }
  };
  return createComponent(Transition, {
    get name() {
      return transitionName();
    },
    appear: true,
    get onAfterExit() {
      return modalContext.unmountPortal;
    },
    get children() {
      return createComponent(Show, {
        get when() {
          return modalContext.state.opened;
        },
        get children() {
          return createComponent(Box, {
            ref: assignContainerRef,
            get ["class"]() {
              return containerClasses();
            },
            tabIndex: -1,
            get onMouseDown() {
              return modalContext.onMouseDown;
            },
            get onKeyDown() {
              return modalContext.onKeyDown;
            },
            get onClick() {
              return modalContext.onOverlayClick;
            },
            get children() {
              return createComponent(hope.section, mergeProps$1({
                get ["class"]() {
                  return dialogClasses();
                },
                get __baseStyle() {
                  var _a;
                  return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.content;
                },
                get id() {
                  return modalContext.state.dialogId;
                },
                get role() {
                  var _a;
                  return (_a = local.role) != null ? _a : "dialog";
                },
                tabIndex: -1,
                "aria-modal": true,
                get ["aria-labelledby"]() {
                  return ariaLabelledBy();
                },
                get ["aria-describedby"]() {
                  return ariaDescribedBy();
                },
                onClick: onDialogClick
              }, others));
            }
          });
        }
      });
    }
  });
}
DrawerContent.toString = () => createClassSelector(hopeDrawerContentClass);
const hopeDrawerOverlayClass = "hope-drawer__overlay";
function DrawerOverlay(props) {
  const theme = useStyleConfig().Drawer;
  const drawerContext = useDrawerContext();
  const modalContext = useModalContext();
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeDrawerOverlayClass, modalOverlayStyles());
  const transitionName = () => {
    return drawerContext.disableMotion ? "hope-none" : drawerTransitionName.fade;
  };
  return createComponent(Transition, {
    get name() {
      return transitionName();
    },
    appear: true,
    get children() {
      return createComponent(Show, {
        get when() {
          return modalContext.state.opened;
        },
        get children() {
          return createComponent(Box, mergeProps$1({
            get ["class"]() {
              return classes();
            },
            get __baseStyle() {
              var _a;
              return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.overlay;
            }
          }, others));
        }
      });
    }
  });
}
DrawerOverlay.toString = () => createClassSelector(hopeDrawerOverlayClass);
const hopeFlexClass = "hope-flex";
function Flex(props) {
  const [local, others] = splitProps(props, ["class", "direction", "wrap"]);
  const classes = () => classNames(local.class, hopeFlexClass);
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    display: "flex",
    get flexDirection() {
      return local.direction;
    },
    get flexWrap() {
      return local.wrap;
    }
  }, others));
}
Flex.toString = () => createClassSelector(hopeFlexClass);
const hopeFormErrorMessageClass = "hope-form-error-message";
function FormErrorMessage(props) {
  const theme = useStyleConfig().FormControl;
  const formControl = useFormControlContext();
  const [local, others] = splitProps(props, ["ref", "id", "class"]);
  const id = () => {
    var _a;
    return (_a = local.id) != null ? _a : formControl == null ? void 0 : formControl.state.errorMessageId;
  };
  const classes = () => classNames(local.class, hopeFormErrorMessageClass, formErrorMessageStyles());
  onMount(() => formControl == null ? void 0 : formControl.setHasErrorMessage(true));
  onCleanup(() => formControl == null ? void 0 : formControl.setHasErrorMessage(false));
  return createComponent(Show, {
    get when() {
      return formControl == null ? void 0 : formControl.state.invalid;
    },
    get children() {
      return createComponent(Box, mergeProps$1({
        "aria-live": "polite",
        get id() {
          return id();
        },
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.errorMessage;
        },
        get ["data-disabled"]() {
          return formControl == null ? void 0 : formControl.state["data-disabled"];
        },
        get ["data-readonly"]() {
          return formControl == null ? void 0 : formControl.state["data-readonly"];
        }
      }, others));
    }
  });
}
FormErrorMessage.toString = () => createClassSelector(hopeFormErrorMessageClass);
const hopeFormHelperTextClass = "hope-form-helper-text";
function FormHelperText(props) {
  const theme = useStyleConfig().FormControl;
  const formControl = useFormControlContext();
  const [local, others] = splitProps(props, ["ref", "id", "class"]);
  const id = () => {
    var _a;
    return (_a = local.id) != null ? _a : formControl == null ? void 0 : formControl.state.helperTextId;
  };
  const classes = () => classNames(local.class, hopeFormHelperTextClass, formHelperTextStyles());
  onMount(() => formControl == null ? void 0 : formControl.setHasHelperText(true));
  onCleanup(() => formControl == null ? void 0 : formControl.setHasHelperText(false));
  return createComponent(Box, mergeProps$1({
    get id() {
      return id();
    },
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.helperText;
    },
    get ["data-disabled"]() {
      return formControl == null ? void 0 : formControl.state["data-disabled"];
    },
    get ["data-readonly"]() {
      return formControl == null ? void 0 : formControl.state["data-readonly"];
    }
  }, others));
}
FormHelperText.toString = () => createClassSelector(hopeFormHelperTextClass);
const _tmpl$$7 = /* @__PURE__ */ template(`<span role="presentation" aria-hidden="true">*</span>`, 2);
const hopeFormLabelClass = "hope-form-label";
function FormLabel(props) {
  var _a, _b, _c;
  const theme = useStyleConfig().FormControl;
  const formControl = useFormControlContext();
  const defaultProps = {
    withRequiredIndicator: (_c = (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.label) == null ? void 0 : _b.withRequiredIndicator) != null ? _c : true
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["id", "for", "class", "children", "withRequiredIndicator"]);
  const id = () => {
    var _a2;
    return (_a2 = local.id) != null ? _a2 : formControl == null ? void 0 : formControl.state.labelId;
  };
  const htmlFor = () => {
    var _a2;
    return (_a2 = local.for) != null ? _a2 : formControl == null ? void 0 : formControl.state.id;
  };
  const classes = () => classNames(local.class, hopeFormLabelClass, formLabelStyles());
  return createComponent(hope.label, mergeProps$1({
    get id() {
      return id();
    },
    get ["for"]() {
      return htmlFor();
    },
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a2;
      return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.label;
    },
    get ["data-focus"]() {
      return formControl == null ? void 0 : formControl.state["data-focus"];
    },
    get ["data-disabled"]() {
      return formControl == null ? void 0 : formControl.state["data-disabled"];
    },
    get ["data-invalid"]() {
      return formControl == null ? void 0 : formControl.state["data-invalid"];
    },
    get ["data-readonly"]() {
      return formControl == null ? void 0 : formControl.state["data-readonly"];
    }
  }, others, {
    get children() {
      return [memo(() => local.children), createComponent(Show, {
        get when() {
          return (formControl == null ? void 0 : formControl.state.required) && local.withRequiredIndicator;
        },
        get children() {
          const _el$ = _tmpl$$7.cloneNode(true);
          effect(() => _el$.className = requiredIndicatorStyles());
          return _el$;
        }
      })];
    }
  }));
}
FormLabel.toString = () => createClassSelector(hopeFormLabelClass);
const hopeGridClass = "hope-grid";
function Grid(props) {
  const [local, others] = splitProps(props, ["class", "autoFlow", "autoColumns", "autoRows", "templateAreas", "templateColumns", "templateRows"]);
  const classes = () => classNames(local.class, hopeGridClass);
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    display: "grid",
    get gridAutoFlow() {
      return local.autoFlow;
    },
    get gridAutoColumns() {
      return local.autoColumns;
    },
    get gridAutoRows() {
      return local.autoRows;
    },
    get gridTemplateAreas() {
      return local.templateAreas;
    },
    get gridTemplateColumns() {
      return local.templateColumns;
    },
    get gridTemplateRows() {
      return local.templateRows;
    }
  }, others));
}
Grid.toString = () => createClassSelector(hopeGridClass);
function spanFn(span) {
  if (span === null || span === void 0) {
    return;
  }
  return mapKeys(span, (value) => {
    switch (value) {
      case "auto":
        return "auto";
      case "full":
        return "1 / -1";
      default:
        return `span ${value} / span ${value}`;
    }
  });
}
const hopeGridItemClass = "hope-grid-item";
function GridItem(props) {
  const [local, others] = splitProps(props, ["class", "area", "colSpan", "colStart", "colEnd", "rowSpan", "rowStart", "rowEnd"]);
  const classes = () => classNames(local.class, hopeGridItemClass);
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get gridArea() {
      return local.area;
    },
    get gridColumn() {
      return spanFn(local.colSpan);
    },
    get gridRow() {
      return spanFn(local.rowSpan);
    },
    get gridColumnStart() {
      return local.colStart;
    },
    get gridColumnEnd() {
      return local.colEnd;
    },
    get gridRowStart() {
      return local.rowStart;
    },
    get gridRowEnd() {
      return local.rowEnd;
    }
  }, others));
}
GridItem.toString = () => createClassSelector(hopeGridItemClass);
const hopeSimpleGridClass = "hope-simple-grid";
function toPx(n) {
  return isNumber(n) ? `${n}px` : n;
}
function widthToColumns(width) {
  return mapResponsive(width, (value) => isNull(value) ? null : `repeat(auto-fit, minmax(${toPx(value)}, 1fr))`);
}
function countToColumns(count) {
  return mapResponsive(count, (value) => isNull(value) ? null : `repeat(${value}, minmax(0, 1fr))`);
}
function SimpleGrid(props) {
  const [local, others] = splitProps(props, ["class", "minChildWidth", "columns"]);
  const classes = () => classNames(local.class, hopeSimpleGridClass);
  const templateColumns = () => {
    return local.minChildWidth ? widthToColumns(local.minChildWidth) : countToColumns(local.columns);
  };
  return createComponent(Grid, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get templateColumns() {
      return templateColumns();
    }
  }, others));
}
SimpleGrid.toString = () => createClassSelector(hopeSimpleGridClass);
const textStyles = css({
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
});
const headingStyles = css(textStyles, {
  fontWeight: "$semibold"
});
const hopeHeadingClass = "hope-heading";
function Heading(props) {
  var _a, _b;
  const theme = useStyleConfig().Heading;
  const defaultProps = {
    as: "h2",
    level: (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.level,
    size: (_b = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _b.size
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["class", "as", "level", "size"]);
  const classes = () => classNames(local.class, hopeHeadingClass, headingStyles({
    size: local.size
  }));
  const asProp = () => local.level ? `h${local.level}` : local.as;
  return createComponent(Box, mergeProps$1({
    get as() {
      return asProp();
    },
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      return theme == null ? void 0 : theme.baseStyle;
    }
  }, others));
}
Heading.toString = () => createClassSelector(hopeHeadingClass);
function IconButton(props) {
  const theme = useStyleConfig().IconButton;
  const buttonGroupContext = useButtonGroupContext();
  const [local, others] = splitProps(props, ["class", "children", "icon", "variant", "colorScheme", "size", "disabled"]);
  const variant = () => {
    var _a, _b, _c, _d;
    return (_d = (_c = (_a = local.variant) != null ? _a : buttonGroupContext == null ? void 0 : buttonGroupContext.state.variant) != null ? _c : (_b = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _b.variant) != null ? _d : "solid";
  };
  const colorScheme = () => {
    var _a, _b, _c, _d;
    return (_d = (_c = (_a = local.colorScheme) != null ? _a : buttonGroupContext == null ? void 0 : buttonGroupContext.state.colorScheme) != null ? _c : (_b = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _b.colorScheme) != null ? _d : "primary";
  };
  const size2 = () => {
    var _a, _b, _c, _d;
    return (_d = (_c = (_a = local.size) != null ? _a : buttonGroupContext == null ? void 0 : buttonGroupContext.state.size) != null ? _c : (_b = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _b.size) != null ? _d : "md";
  };
  const disabled = () => {
    var _a;
    return (_a = local.disabled) != null ? _a : buttonGroupContext == null ? void 0 : buttonGroupContext.state.disabled;
  };
  const classes = () => classNames(local.class, hopeIconButtonClass);
  return createComponent(Button, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      return theme == null ? void 0 : theme.baseStyle;
    },
    get variant() {
      return variant();
    },
    get colorScheme() {
      return colorScheme();
    },
    get size() {
      return size2();
    },
    get disabled() {
      return disabled();
    }
  }, others, {
    get children() {
      return createComponent(Show, {
        get when() {
          return local.icon;
        },
        get fallback() {
          return local.children;
        },
        get children() {
          return local.icon;
        }
      });
    }
  }));
}
IconButton.toString = () => createClassSelector(hopeIconButtonClass);
const hopeImageClass = "hope-image";
function Image$1(props) {
  const [local, loadEventProps, others] = splitProps(props, ["class", "htmlWidth", "htmlHeight", "fallbackSrc", "fallback", "src", "srcSet", "align", "fit", "loading", "ignoreFallback", "crossOrigin"], ["onError", "onLoad"]);
  const shouldIgnore = () => {
    return local.loading != null || local.ignoreFallback || local.fallbackSrc === void 0 && local.fallback === void 0;
  };
  const status = createMemo(() => createImageLoadingStatus({
    ...props,
    ignoreFallback: shouldIgnore()
  }));
  const sharedProps = () => ({
    objectFit: local.fit,
    objectPosition: local.align,
    width: local.htmlWidth,
    height: local.htmlHeight,
    ...shouldIgnore() ? loadEventProps : {},
    ...others
  });
  const classes = () => classNames(local.class, hopeImageClass);
  return createComponent(Show, {
    get when() {
      return status()() === "loaded";
    },
    get fallback() {
      return createComponent(Show, {
        get when() {
          return local.fallback;
        },
        get fallback() {
          return createComponent(Box, mergeProps$1({
            as: "img",
            get src() {
              return local.fallbackSrc;
            },
            "class": "hope-image__placeholder"
          }, sharedProps));
        },
        get children() {
          return local.fallback;
        }
      });
    },
    get children() {
      return createComponent(Box, mergeProps$1({
        as: "img",
        get src() {
          return local.src;
        },
        get srcSet() {
          return local.srcSet;
        },
        get crossOrigin() {
          return local.crossOrigin;
        },
        get loading() {
          return local.loading;
        },
        get ["class"]() {
          return classes();
        }
      }, sharedProps));
    }
  });
}
Image$1.toString = () => createClassSelector(hopeImageClass);
const InputGroupContext = createContext();
function useInputGroupContext() {
  return useContext(InputGroupContext);
}
const hopeInputGroupClass = "hope-input-group";
function InputGroup(props) {
  const theme = useStyleConfig().Input;
  const [state, setState] = createStore({
    get variant() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.variant) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.group) == null ? void 0 : _b.variant) != null ? _d : "outline";
    },
    get size() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.size) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.group) == null ? void 0 : _b.size) != null ? _d : "md";
    },
    hasLeftElement: false,
    hasRightElement: false,
    hasLeftAddon: false,
    hasRightAddon: false
  });
  const [local, others] = splitProps(props, ["variant", "size", "class"]);
  const classes = () => classNames(local.class, hopeInputGroupClass, inputGroupStyles());
  const setHasLeftElement = (value) => setState("hasLeftElement", value);
  const setHasRightElement = (value) => setState("hasRightElement", value);
  const setHasLeftAddon = (value) => setState("hasLeftAddon", value);
  const setHasRightAddon = (value) => setState("hasRightAddon", value);
  const context = {
    state,
    setHasLeftElement,
    setHasRightElement,
    setHasLeftAddon,
    setHasRightAddon
  };
  return createComponent(InputGroupContext.Provider, {
    value: context,
    get children() {
      return createComponent(Box, mergeProps$1({
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.group;
        }
      }, others));
    }
  });
}
InputGroup.toString = () => createClassSelector(hopeInputGroupClass);
const hopeInputClass = "hope-input";
function Input(props) {
  const theme = useStyleConfig().Input;
  const inputGroup = useInputGroupContext();
  const formControlProps = useFormControl(props);
  const [local, others] = splitProps(props, ["class", "htmlSize", "variant", "size"]);
  const classes = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    return classNames(local.class, hopeInputClass, inputStyles({
      variant: (_e = (_d = (_a = local.variant) != null ? _a : inputGroup == null ? void 0 : inputGroup.state.variant) != null ? _d : (_c = (_b = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _b.input) == null ? void 0 : _c.variant) != null ? _e : "outline",
      size: (_j = (_i = (_f = local.size) != null ? _f : inputGroup == null ? void 0 : inputGroup.state.size) != null ? _i : (_h = (_g = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _g.input) == null ? void 0 : _h.size) != null ? _j : "md",
      withLeftElement: (_k = inputGroup == null ? void 0 : inputGroup.state.hasLeftElement) != null ? _k : false,
      withRightElement: (_l = inputGroup == null ? void 0 : inputGroup.state.hasRightElement) != null ? _l : false,
      withLeftAddon: (_m = inputGroup == null ? void 0 : inputGroup.state.hasLeftAddon) != null ? _m : false,
      withRightAddon: (_n = inputGroup == null ? void 0 : inputGroup.state.hasRightAddon) != null ? _n : false
    }));
  };
  return createComponent(hope.input, mergeProps$1({
    type: "text",
    get ["class"]() {
      return classes();
    },
    get size() {
      return local.htmlSize;
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.input;
    }
  }, formControlProps, others));
}
Input.toString = () => createClassSelector(hopeInputClass);
function InputAddon(props) {
  const theme = useStyleConfig().Input;
  const [local, variantProps, others] = splitProps(props, ["class"], ["placement", "variant", "size"]);
  const classes = () => classNames(local.class, inputAddonStyles(variantProps));
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.addon;
    }
  }, others));
}
const hopeInputLeftAddonClass = "hope-input-left-addon";
function InputLeftAddon(props) {
  const inputGroup = useInputGroupContext();
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeInputLeftAddonClass);
  onMount(() => inputGroup == null ? void 0 : inputGroup.setHasLeftAddon(true));
  onCleanup(() => inputGroup == null ? void 0 : inputGroup.setHasLeftAddon(false));
  return createComponent(InputAddon, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    placement: "left",
    get variant() {
      var _a;
      return (_a = inputGroup == null ? void 0 : inputGroup.state.variant) != null ? _a : "outline";
    },
    get size() {
      var _a;
      return (_a = inputGroup == null ? void 0 : inputGroup.state.size) != null ? _a : "md";
    }
  }, others));
}
InputLeftAddon.toString = () => createClassSelector(hopeInputLeftAddonClass);
const hopeInputRightAddonClass = "hope-input-right-addon";
function InputRightAddon(props) {
  const inputGroup = useInputGroupContext();
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeInputRightAddonClass);
  onMount(() => inputGroup == null ? void 0 : inputGroup.setHasRightAddon(true));
  onCleanup(() => inputGroup == null ? void 0 : inputGroup.setHasRightAddon(false));
  return createComponent(InputAddon, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    placement: "right",
    get variant() {
      var _a;
      return (_a = inputGroup == null ? void 0 : inputGroup.state.variant) != null ? _a : "outline";
    },
    get size() {
      var _a;
      return (_a = inputGroup == null ? void 0 : inputGroup.state.size) != null ? _a : "md";
    }
  }, others));
}
InputRightAddon.toString = () => createClassSelector(hopeInputRightAddonClass);
function InputElement(props) {
  const theme = useStyleConfig().Input;
  const [local, variantProps, others] = splitProps(props, ["class"], ["placement", "size"]);
  const classes = () => classNames(local.class, inputElementStyles(variantProps));
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.element;
    }
  }, others));
}
const hopeInputLeftElementClass = "hope-input-left-element";
function InputLeftElement(props) {
  const inputGroup = useInputGroupContext();
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeInputLeftElementClass);
  onMount(() => inputGroup == null ? void 0 : inputGroup.setHasLeftElement(true));
  onCleanup(() => inputGroup == null ? void 0 : inputGroup.setHasLeftElement(false));
  return createComponent(InputElement, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    placement: "left",
    get size() {
      var _a;
      return (_a = inputGroup == null ? void 0 : inputGroup.state.size) != null ? _a : "md";
    }
  }, others));
}
InputLeftElement.toString = () => createClassSelector(hopeInputLeftElementClass);
const hopeInputRightElementClass = "hope-input-right-element";
function InputRightElement(props) {
  const inputGroup = useInputGroupContext();
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeInputRightElementClass);
  onMount(() => inputGroup == null ? void 0 : inputGroup.setHasRightElement(true));
  onCleanup(() => inputGroup == null ? void 0 : inputGroup.setHasRightElement(false));
  return createComponent(InputElement, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    placement: "right",
    get size() {
      var _a;
      return (_a = inputGroup == null ? void 0 : inputGroup.state.size) != null ? _a : "md";
    }
  }, others));
}
InputRightElement.toString = () => createClassSelector(hopeInputRightElementClass);
const kbdStyles = css({
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
});
const hopeKbdClass = "hope-kbd";
function Kbd(props) {
  const theme = useStyleConfig().Kbd;
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeKbdClass, kbdStyles());
  return createComponent(hope.kbd, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      return theme == null ? void 0 : theme.baseStyle;
    }
  }, others));
}
Kbd.toString = () => createClassSelector(hopeKbdClass);
const listStyles = css({
  listStyleType: "none"
});
const listIconStyles = css({
  marginEnd: "0.5rem"
});
const hopeListClass = "hope-list";
const descendentSelector = "& > *:not(style) ~ *:not(style)";
function List(props) {
  const [local, others] = splitProps(props, ["class", "styleType", "stylePosition", "spacing"]);
  const spacingStyle = () => local.spacing ? {
    [descendentSelector]: {
      mt: local.spacing
    }
  } : {};
  const classes = () => {
    return classNames(local.class, hopeListClass, listStyles({
      css: {
        listStyleType: local.styleType,
        listStylePosition: local.stylePosition,
        ...spacingStyle()
      }
    }));
  };
  return createComponent(hope.ul, mergeProps$1({
    role: "list",
    get ["class"]() {
      return classes();
    }
  }, others));
}
List.toString = () => createClassSelector(hopeListClass);
const hopeOrderedListClass = "hope-ordered-list";
function OrderedList(props) {
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeOrderedListClass);
  return createComponent(List, mergeProps$1({
    as: "ol",
    get ["class"]() {
      return classes();
    },
    styleType: "decimal",
    marginStart: "1em"
  }, others));
}
OrderedList.toString = () => createClassSelector(hopeOrderedListClass);
const hopeUnorderedListClass = "hope-unordered-list";
function UnorderedList(props) {
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeUnorderedListClass);
  return createComponent(List, mergeProps$1({
    as: "ul",
    get ["class"]() {
      return classes();
    },
    styleType: "initial",
    marginStart: "1em"
  }, others));
}
UnorderedList.toString = () => createClassSelector(hopeUnorderedListClass);
const hopeListIconClass = "hope-list__icon";
function ListIcon(props) {
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeListIconClass, listIconStyles());
  return createComponent(Icon, mergeProps$1({
    role: "presentation",
    get ["class"]() {
      return classes();
    },
    verticalAlign: "text-bottom"
  }, others));
}
ListIcon.toString = () => createClassSelector(hopeListIconClass);
const hopeListItemClass = "hope-list__item";
function ListItem(props) {
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeListItemClass);
  return createComponent(hope.li, mergeProps$1({
    get ["class"]() {
      return classes();
    }
  }, others));
}
ListItem.toString = () => createClassSelector(hopeListItemClass);
var MenuActions = /* @__PURE__ */ ((MenuActions2) => {
  MenuActions2[MenuActions2["Close"] = 0] = "Close";
  MenuActions2[MenuActions2["SelectAndClose"] = 1] = "SelectAndClose";
  MenuActions2[MenuActions2["First"] = 2] = "First";
  MenuActions2[MenuActions2["Last"] = 3] = "Last";
  MenuActions2[MenuActions2["Next"] = 4] = "Next";
  MenuActions2[MenuActions2["Open"] = 5] = "Open";
  MenuActions2[MenuActions2["OpenAndFocusLast"] = 6] = "OpenAndFocusLast";
  MenuActions2[MenuActions2["Previous"] = 7] = "Previous";
  MenuActions2[MenuActions2["Select"] = 8] = "Select";
  MenuActions2[MenuActions2["Type"] = 9] = "Type";
  return MenuActions2;
})(MenuActions || {});
function filterItems(items = [], filter, exclude = []) {
  return items.filter((item) => {
    if (item.disabled) {
      return false;
    }
    const matches = item.textValue.toLowerCase().indexOf(filter.toLowerCase()) === 0;
    return matches && exclude.indexOf(item.textValue) < 0;
  });
}
function getIndexByLetter$1(items, filter, startIndex = 0) {
  const orderedItems = [...items.slice(startIndex), ...items.slice(0, startIndex)];
  const firstMatch = filterItems(orderedItems, filter)[0];
  const allSameLetter = (array) => array.every((letter) => letter === array[0]);
  if (firstMatch) {
    return items.indexOf(firstMatch);
  } else if (allSameLetter(filter.split(""))) {
    const matches = filterItems(orderedItems, filter[0]);
    return items.indexOf(matches[0]);
  } else {
    return -1;
  }
}
function getActionFromKey$1(event, menuOpen) {
  const { key, altKey, ctrlKey, metaKey } = event;
  const openKeys = ["ArrowDown", "Enter", " "];
  if (!menuOpen && openKeys.includes(key)) {
    return 5;
  }
  if (!menuOpen && key === "ArrowUp") {
    return 6;
  }
  if (key === "Home") {
    return 2;
  }
  if (key === "End") {
    return 3;
  }
  if (key === "Backspace" || key === "Clear" || key.length === 1 && key !== " " && !altKey && !ctrlKey && !metaKey) {
    return 9;
  }
  if (menuOpen) {
    if (key === "ArrowDown") {
      return 4;
    } else if (key === "ArrowUp") {
      return 7;
    } else if (key === "Escape") {
      return 0;
    } else if (key === "Enter" || key === " ") {
      return 1;
    }
  }
}
function calculateActiveIndex$1(currentIndex, maxIndex, action) {
  switch (action) {
    case 2:
      return 0;
    case 3:
      return maxIndex;
    case 7:
      return currentIndex - 1 < 0 ? maxIndex : currentIndex - 1;
    case 4:
      return currentIndex + 1 > maxIndex ? 0 : currentIndex + 1;
    default:
      return currentIndex;
  }
}
function getUpdatedIndex$1(params) {
  const { currentIndex, maxIndex, initialAction, isItemDisabled } = params;
  let nextIndex = calculateActiveIndex$1(currentIndex, maxIndex, initialAction);
  while (isItemDisabled(nextIndex)) {
    let nextAction = initialAction;
    const isNextIndexFirst = nextIndex === 0;
    const isNextIndexLast = nextIndex === maxIndex;
    if (initialAction === 2) {
      nextAction = 4;
    }
    if (initialAction === 3) {
      nextAction = 7;
    }
    if (initialAction === 7 && isNextIndexFirst) {
      nextIndex = currentIndex;
      break;
    }
    if (initialAction === 4 && isNextIndexLast) {
      nextIndex = currentIndex;
      break;
    }
    nextIndex = calculateActiveIndex$1(nextIndex, maxIndex, nextAction);
  }
  return nextIndex;
}
function Menu(props) {
  const defaultBaseId = `hope-menu-${createUniqueId()}`;
  const theme = useStyleConfig().Menu;
  const [_items, _setItems] = createSignal([]);
  const [state, setState] = createStore({
    get triggerId() {
      var _a;
      return (_a = props.id) != null ? _a : `${defaultBaseId}-trigger`;
    },
    get menuContentId() {
      return `${defaultBaseId}-content`;
    },
    get labelIdPrefix() {
      return `${defaultBaseId}-label`;
    },
    get itemIdPrefix() {
      return `${defaultBaseId}-item`;
    },
    get activeDescendantId() {
      return this.opened ? `${this.itemIdPrefix}-${this.activeIndex}` : void 0;
    },
    get closeOnSelect() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.closeOnSelect) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.closeOnSelect) != null ? _d : true;
    },
    get motionPreset() {
      var _a, _b, _c, _d, _e;
      if (props.motionPreset) {
        return props.motionPreset;
      }
      if ((_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.motionPreset) {
        return (_d = (_c = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _c.root) == null ? void 0 : _d.motionPreset;
      }
      if ((_e = props.placement) == null ? void 0 : _e.startsWith("top")) {
        return "scale-bottom-left";
      }
      return "scale-top-left";
    },
    get items() {
      return _items();
    },
    opened: false,
    activeIndex: 0,
    ignoreBlur: false,
    searchString: "",
    searchTimeoutId: void 0
  });
  let triggerRef;
  let contentRef;
  let cleanupContentAutoUpdate;
  const updateContentPosition = async () => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (!triggerRef || !contentRef) {
      return;
    }
    const {
      x,
      y
    } = await computePosition(triggerRef, contentRef, {
      placement: (_d = (_c = props.placement) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.placement) != null ? _d : "bottom-start",
      middleware: [offset((_h = (_g = props.offset) != null ? _g : (_f = (_e = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _e.root) == null ? void 0 : _f.offset) != null ? _h : 5), flip(), shift()]
    });
    if (!contentRef) {
      return;
    }
    Object.assign(contentRef.style, {
      left: `${Math.round(x)}px`,
      top: `${Math.round(y)}px`
    });
  };
  const getSearchString = (char) => {
    if (state.searchTimeoutId) {
      window.clearTimeout(state.searchTimeoutId);
    }
    const searchTimeoutId = window.setTimeout(() => {
      setState("searchString", "");
    }, 500);
    setState("searchTimeoutId", searchTimeoutId);
    setState("searchString", (searchString) => searchString += char);
    return state.searchString;
  };
  const onItemChange = (index) => {
    setState("activeIndex", index);
  };
  const isItemDisabledCallback = (index) => {
    return state.items[index].disabled;
  };
  const selectItem = (index) => {
    var _a;
    onItemChange(index);
    const menuItem = state.items[index];
    (_a = menuItem.onSelect) == null ? void 0 : _a.call(menuItem);
    if (menuItem.closeOnSelect) {
      updateOpeningState(false);
    } else {
      focusTrigger();
    }
  };
  const focusTrigger = () => {
    triggerRef == null ? void 0 : triggerRef.focus();
  };
  const onTriggerBlur = (event) => {
    if (contains(triggerRef, getRelatedTarget(event))) {
      return;
    }
    if (state.ignoreBlur) {
      setState("ignoreBlur", false);
      return;
    }
    if (state.opened) {
      updateOpeningState(false, false);
    }
  };
  const onTriggerClick = () => {
    updateOpeningState(!state.opened, false);
  };
  const onTriggerKeyDown = (event) => {
    const {
      key
    } = event;
    const max = state.items.length - 1;
    const action = getActionFromKey$1(event, state.opened);
    switch (action) {
      case MenuActions.Last:
      case MenuActions.First:
      case MenuActions.Next:
      case MenuActions.Previous:
        event.preventDefault();
        return onItemChange(getUpdatedIndex$1({
          currentIndex: state.activeIndex,
          maxIndex: max,
          initialAction: action,
          isItemDisabled: isItemDisabledCallback
        }));
      case MenuActions.SelectAndClose:
        event.preventDefault();
        selectItem(state.activeIndex);
        return;
      case MenuActions.Close:
        event.preventDefault();
        return updateOpeningState(false);
      case MenuActions.Type:
        return onTriggerType(key);
      case MenuActions.Open:
        event.preventDefault();
        return updateOpeningState(true);
      case MenuActions.OpenAndFocusLast:
        event.preventDefault();
        return updateOpeningState(true, true, true);
    }
  };
  const onTriggerType = (letter) => {
    updateOpeningState(true);
    const searchString = getSearchString(letter);
    const searchIndex = getIndexByLetter$1(state.items, searchString, state.activeIndex + 1);
    if (searchIndex >= 0) {
      onItemChange(searchIndex);
    } else {
      window.clearTimeout(state.searchTimeoutId);
      setState("searchString", "");
    }
  };
  const onItemClick = (index) => {
    if (state.items[index].disabled) {
      focusTrigger();
      return;
    }
    selectItem(index);
  };
  const onItemMouseMove = (index) => {
    if (state.activeIndex === index) {
      return;
    }
    onItemChange(index);
  };
  const onItemMouseDown = () => {
    setState("ignoreBlur", true);
  };
  const scheduleContentPositionAutoUpdate = () => {
    if (state.opened) {
      updateContentPosition();
      if (triggerRef && contentRef) {
        cleanupContentAutoUpdate = autoUpdate(triggerRef, contentRef, updateContentPosition);
      }
    } else {
      cleanupContentAutoUpdate == null ? void 0 : cleanupContentAutoUpdate();
    }
  };
  const updateOpeningState = (opened, callFocus = true, lastItemActive = false) => {
    if (state.opened === opened) {
      return;
    }
    setState("opened", opened);
    setState("activeIndex", lastItemActive ? state.items.length - 1 : 0);
    scheduleContentPositionAutoUpdate();
    callFocus && focusTrigger();
  };
  const onContentMouseLeave = () => {
    onItemChange(-1);
  };
  const onContentClickOutside = (target) => {
    if (contains(triggerRef, target)) {
      return;
    }
    updateOpeningState(false, false);
  };
  const isItemActiveDescendant = (index) => {
    return index === state.activeIndex;
  };
  const assignTriggerRef = (el) => {
    triggerRef = el;
  };
  const assignContentRef = (el) => {
    contentRef = el;
  };
  const scrollToItem = (optionRef) => {
    if (!contentRef) {
      return;
    }
    if (isScrollable(contentRef)) {
      maintainScrollVisibility(optionRef, contentRef);
    }
  };
  const registerItem = (itemData) => {
    const index = state.items.findIndex((item) => item.key === itemData.key);
    if (index != -1) {
      return index;
    }
    const updatedItems = _setItems((prev) => [...prev, itemData]);
    return updatedItems.length - 1;
  };
  const openedAccessor = () => state.opened;
  const context = {
    state,
    isItemActiveDescendant,
    assignTriggerRef,
    assignContentRef,
    registerItem,
    scrollToItem,
    onTriggerBlur,
    onTriggerClick,
    onTriggerKeyDown,
    onContentMouseLeave,
    onContentClickOutside,
    onItemClick,
    onItemMouseMove,
    onItemMouseDown
  };
  return createComponent(MenuContext.Provider, {
    value: context,
    get children() {
      return createComponent(Show, {
        get when() {
          return isChildrenFunction(props);
        },
        get fallback() {
          return props.children;
        },
        get children() {
          var _a;
          return (_a = props.children) == null ? void 0 : _a.call(props, {
            opened: openedAccessor
          });
        }
      });
    }
  });
}
const MenuContext = createContext();
function useMenuContext() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("[Hope UI]: useMenuContext must be used within a `<Menu />` component");
  }
  return context;
}
function useClickOutside(props) {
  const [state, setState] = createStore({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false
  });
  const onPointerDown = (e) => {
    if (isValidEvent(e, props.element())) {
      setState("isPointerDown", true);
    }
  };
  const onMouseUp = (event) => {
    if (state.ignoreEmulatedMouseEvents) {
      setState("ignoreEmulatedMouseEvents", false);
      return;
    }
    if (state.isPointerDown && props.handler && isValidEvent(event, props.element())) {
      setState("isPointerDown", false);
      props.handler(event);
    }
  };
  const onTouchEnd = (event) => {
    setState("ignoreEmulatedMouseEvents", true);
    if (props.handler && state.isPointerDown && isValidEvent(event, props.element())) {
      setState("isPointerDown", false);
      props.handler(event);
    }
  };
  onMount(() => {
    const doc = getOwnerDocument(props.element());
    doc.addEventListener("mousedown", onPointerDown, true);
    doc.addEventListener("mouseup", onMouseUp, true);
    doc.addEventListener("touchstart", onPointerDown, true);
    doc.addEventListener("touchend", onTouchEnd, true);
  });
  onCleanup(() => {
    const doc = getOwnerDocument(props.element());
    doc.removeEventListener("mousedown", onPointerDown, true);
    doc.removeEventListener("mouseup", onMouseUp, true);
    doc.removeEventListener("touchstart", onPointerDown, true);
    doc.removeEventListener("touchend", onTouchEnd, true);
  });
}
function ClickOutside(props) {
  const resolvedChildren = children(() => props.children);
  useClickOutside({
    element: () => resolvedChildren(),
    handler: (event) => props.onClickOutside(event)
  });
  return resolvedChildren;
}
const hopeMenuContentClass = "hope-menu__content";
function MenuContent(props) {
  const theme = useStyleConfig().Menu;
  const menuContext = useMenuContext();
  const [local, others] = splitProps(props, ["ref", "class", "children"]);
  const [isPortalMounted, setIsPortalMounted] = createSignal(false);
  createEffect(on(() => menuContext.state.opened, () => {
    if (menuContext.state.opened) {
      setIsPortalMounted(true);
    } else {
      menuContext.state.motionPreset === "none" && setIsPortalMounted(false);
    }
  }));
  const unmountPortal = () => setIsPortalMounted(false);
  const resolvedChildren = children(() => local.children);
  const assignContentRef = (el) => {
    menuContext.assignContentRef(el);
    if (isFunction(local.ref)) {
      local.ref(el);
    } else {
      local.ref = el;
    }
  };
  const onClickOutside = (event) => {
    menuContext.onContentClickOutside(event.target);
  };
  const classes = () => classNames(local.class, hopeMenuContentClass, menuContentStyles());
  const transitionName = () => {
    switch (menuContext.state.motionPreset) {
      case "scale-top-left":
        return menuTransitionName.scaleTopLeft;
      case "scale-top-right":
        return menuTransitionName.scaleTopRight;
      case "scale-bottom-left":
        return menuTransitionName.scaleBottomLeft;
      case "scale-bottom-right":
        return menuTransitionName.scaleBottomRight;
      case "none":
        return "hope-none";
    }
  };
  return createComponent(Show, {
    get when() {
      return isPortalMounted();
    },
    get children() {
      return createComponent(Portal, {
        get children() {
          return createComponent(Transition, {
            get name() {
              return transitionName();
            },
            appear: true,
            onAfterExit: unmountPortal,
            get children() {
              return createComponent(Show, {
                get when() {
                  return menuContext.state.opened;
                },
                get children() {
                  return createComponent(ClickOutside, {
                    onClickOutside,
                    get children() {
                      return createComponent(Box, mergeProps$1({
                        role: "menu",
                        tabindex: "-1",
                        ref: assignContentRef,
                        get id() {
                          return menuContext.state.menuContentId;
                        },
                        get ["aria-activedescendant"]() {
                          return menuContext.state.activeDescendantId;
                        },
                        get ["aria-labelledby"]() {
                          return menuContext.state.triggerId;
                        },
                        "aria-orientation": "vertical",
                        get ["class"]() {
                          return classes();
                        },
                        get __baseStyle() {
                          var _a;
                          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.content;
                        },
                        get onMouseLeave() {
                          return menuContext.onContentMouseLeave;
                        }
                      }, others, {
                        get children() {
                          return resolvedChildren();
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
MenuContent.toString = () => createClassSelector(hopeMenuContentClass);
const MenuGroupContext = createContext();
const hopeMenuGroupClass = "hope-menu__group";
function MenuGroup(props) {
  const theme = useStyleConfig().Menu;
  const [ariaLabelledBy, setAriaLabelledBy] = createSignal();
  const [local, others] = splitProps(props, ["class", "children"]);
  const classes = () => classNames(local.class, hopeMenuGroupClass, menuGroupStyles());
  const context = {
    setAriaLabelledBy
  };
  return createComponent(MenuGroupContext.Provider, {
    value: context,
    get children() {
      return createComponent(Box, mergeProps$1({
        role: "group",
        get ["aria-labelledby"]() {
          return ariaLabelledBy();
        },
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.group;
        }
      }, others, {
        get children() {
          return local.children;
        }
      }));
    }
  });
}
MenuGroup.toString = () => createClassSelector(hopeMenuGroupClass);
function useMenuGroupContext() {
  return useContext(MenuGroupContext);
}
const hopeMenuItemClass = "hope-menu__item";
const hopeMenuItemIconWrapperClass = "hope-menu__item__icon-wrapper";
const hopeMenuItemTextClass = "hope-menu__item__text";
const hopeMenuItemCommandClass = "hope-menu__item__command";
function MenuItem(props) {
  const key = createUniqueId();
  const theme = useStyleConfig().Menu;
  const menuContext = useMenuContext();
  const [index, setIndex] = createSignal(-1);
  let itemRef;
  const [local, others] = splitProps(props, ["ref", "class", "children", "colorScheme", "icon", "iconSpacing", "command", "commandSpacing", "textValue", "disabled", "closeOnSelect", "onSelect", "onClick"]);
  const itemData = () => {
    var _a, _b;
    return {
      key,
      textValue: (_b = (_a = local.textValue) != null ? _a : itemRef == null ? void 0 : itemRef.textContent) != null ? _b : "",
      disabled: !!local.disabled,
      closeOnSelect: local.closeOnSelect != null ? !!local.closeOnSelect : menuContext.state.closeOnSelect,
      onSelect: local.onSelect
    };
  };
  const id = () => `${menuContext.state.itemIdPrefix}-${index()}`;
  const isActiveDescendant = () => menuContext.isItemActiveDescendant(index());
  const assignItemRef = (el) => {
    itemRef = el;
    if (isFunction(local.ref)) {
      local.ref(el);
    } else {
      local.ref = el;
    }
  };
  const onItemClick = (event) => {
    event.stopPropagation();
    menuContext.onItemClick(index());
  };
  const onItemMouseMove = (event) => {
    if (local.disabled) {
      menuContext.onItemMouseMove(-1);
    }
    if (isActiveDescendant() || local.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    menuContext.onItemMouseMove(index());
  };
  const classes = () => {
    return classNames(local.class, hopeMenuItemClass, menuItemStyles({
      colorScheme: local.colorScheme
    }));
  };
  const iconWrapperClasses = () => {
    return classNames(hopeMenuItemIconWrapperClass, menuItemIconWrapperStyles());
  };
  const textClasses = () => {
    return classNames(hopeMenuItemTextClass, menuItemTextStyles());
  };
  const commandClasses = () => {
    return classNames(hopeMenuItemCommandClass, menuItemCommandStyles());
  };
  onMount(() => {
    setIndex(menuContext.registerItem(itemData()));
  });
  createEffect(() => {
    if (isActiveDescendant() && itemRef) {
      menuContext.scrollToItem(itemRef);
    }
  });
  return createComponent(Box, mergeProps$1({
    ref: assignItemRef,
    role: "menuitem",
    get id() {
      return id();
    },
    get ["data-active"]() {
      return isActiveDescendant() ? "" : void 0;
    },
    get ["data-disabled"]() {
      return local.disabled ? "" : void 0;
    },
    "data-group": true,
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.item;
    },
    onClick: onItemClick,
    onMouseMove: onItemMouseMove,
    get onMouseDown() {
      return menuContext.onItemMouseDown;
    }
  }, others, {
    get children() {
      return [createComponent(Show, {
        get when() {
          return local.icon;
        },
        get children() {
          return createComponent(hope.span, {
            "aria-hidden": "true",
            get ["class"]() {
              return iconWrapperClasses();
            },
            get __baseStyle() {
              var _a;
              return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.itemIconWrapper;
            },
            get mr() {
              var _a;
              return (_a = local.iconSpacing) != null ? _a : "0.5rem";
            },
            get children() {
              return local.icon;
            }
          });
        }
      }), createComponent(Show, {
        get when() {
          return local.children;
        },
        get children() {
          return createComponent(hope.span, {
            get ["class"]() {
              return textClasses();
            },
            get __baseStyle() {
              var _a;
              return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.itemText;
            },
            get children() {
              return local.children;
            }
          });
        }
      }), createComponent(Show, {
        get when() {
          return local.command;
        },
        get children() {
          return createComponent(hope.span, {
            get ["class"]() {
              return commandClasses();
            },
            get __baseStyle() {
              var _a;
              return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.itemCommand;
            },
            get ml() {
              var _a;
              return (_a = local.commandSpacing) != null ? _a : "0.5rem";
            },
            get children() {
              return local.command;
            }
          });
        }
      })];
    }
  }));
}
MenuItem.toString = () => createClassSelector(hopeMenuItemClass);
const hopeMenuLabelClass = "hope-menu__label";
function MenuLabel(props) {
  const defaultIdSuffix = createUniqueId();
  const theme = useStyleConfig().Menu;
  const menuContext = useMenuContext();
  const menuGroupContext = useMenuGroupContext();
  const [local, others] = splitProps(props, ["class", "id"]);
  const id = () => {
    var _a;
    return (_a = local.id) != null ? _a : `${menuContext.state.labelIdPrefix}-${defaultIdSuffix}`;
  };
  const classes = () => classNames(local.class, hopeMenuLabelClass, menuLabelStyles());
  onMount(() => {
    menuGroupContext == null ? void 0 : menuGroupContext.setAriaLabelledBy(id());
  });
  return createComponent(Box, mergeProps$1({
    get id() {
      return id();
    },
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.label;
    }
  }, others));
}
MenuLabel.toString = () => createClassSelector(hopeMenuLabelClass);
const hopeMenuTriggerClass = "hope-menu__trigger";
function MenuTrigger(props) {
  const theme = useStyleConfig().Menu;
  const menuContext = useMenuContext();
  const [local, others] = splitProps(props, ["ref", "class", "onClick", "onKeyDown", "onBlur"]);
  const assignTriggerRef = (el) => {
    menuContext.assignTriggerRef(el);
    if (isFunction(local.ref)) {
      local.ref(el);
    } else {
      local.ref = el;
    }
  };
  const onClick = (event) => {
    chainHandlers(menuContext.onTriggerClick, local.onClick)(event);
  };
  const onKeyDown = (event) => {
    chainHandlers(menuContext.onTriggerKeyDown, local.onKeyDown)(event);
  };
  const onBlur = (event) => {
    chainHandlers(menuContext.onTriggerBlur, local.onBlur)(event);
  };
  const classes = () => classNames(local.class, hopeMenuTriggerClass, menuTriggerStyles());
  return createComponent(hope.button, mergeProps$1({
    ref: assignTriggerRef,
    get id() {
      return menuContext.state.triggerId;
    },
    type: "button",
    "aria-haspopup": "menu",
    get ["aria-controls"]() {
      return menuContext.state.menuContentId;
    },
    get ["aria-expanded"]() {
      return menuContext.state.opened;
    },
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.trigger;
    },
    onClick,
    onKeyDown,
    onBlur
  }, others));
}
MenuTrigger.toString = () => createClassSelector(hopeMenuTriggerClass);
const hopeNotificationClass = "hope-notification";
function Notification(props) {
  const theme = useStyleConfig().Notification;
  const defaultProps = {};
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["class", "status"]);
  const classes = () => {
    return classNames(local.class, hopeNotificationClass, notificationStyles({
      status: local.status
    }));
  };
  const statusAccessor = () => local.status;
  const context = {
    status: statusAccessor
  };
  return createComponent(NotificationContext.Provider, {
    value: context,
    get children() {
      return createComponent(Box, mergeProps$1({
        role: "alert",
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.root;
        }
      }, others));
    }
  });
}
Notification.toString = () => createClassSelector(hopeNotificationClass);
const NotificationContext = createContext();
function useNotificationContext() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("[Hope UI]: useNotificationContext must be used within an `<Notification />` component");
  }
  return context;
}
const NOTIFICATIONS_EVENTS = {
  show: "hope-ui:show-notification",
  update: "hope-ui:update-notification",
  hide: "hope-ui:hide-notification",
  clear: "hope-ui:clear-notifications",
  clearQueue: "hope-ui:clear-notifications-queue",
  addToNotificationQueue: "hope-ui:add-to-notification-queue",
  setDebugMode: "hope-ui:set-debug-mode"
};
function createEvent(type, detail) {
  return new CustomEvent(type, { detail });
}
function show(config2) {
  window.dispatchEvent(createEvent(NOTIFICATIONS_EVENTS.show, config2));
}
function update(config2) {
  window.dispatchEvent(createEvent(NOTIFICATIONS_EVENTS.update, config2));
}
function hide(id) {
  window.dispatchEvent(createEvent(NOTIFICATIONS_EVENTS.hide, id));
}
function clear() {
  window.dispatchEvent(createEvent(NOTIFICATIONS_EVENTS.clear));
}
function clearQueue() {
  window.dispatchEvent(createEvent(NOTIFICATIONS_EVENTS.clearQueue));
}
function addToNotificationQueue(config2) {
  window.dispatchEvent(createEvent(NOTIFICATIONS_EVENTS.addToNotificationQueue, config2));
}
function setDebugMode(debugMode) {
  window.dispatchEvent(createEvent(NOTIFICATIONS_EVENTS.setDebugMode, debugMode));
}
const notificationService = {
  show,
  update,
  hide,
  clear,
  clearQueue,
  addToNotificationQueue,
  setDebugMode
};
const hopeNotificationDescriptionClass = "hope-notification__description";
function NotificationDescription(props) {
  const theme = useStyleConfig().Notification;
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeNotificationDescriptionClass, notificationDescriptionStyles());
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.description;
    }
  }, others));
}
NotificationDescription.toString = () => createClassSelector(hopeNotificationDescriptionClass);
const hopeNotificationIconClass = "hope-notification__icon";
function NotificationIcon(props) {
  const theme = useStyleConfig().Notification;
  const {
    status
  } = useNotificationContext();
  const defaultProps = {
    boxSize: "$7"
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["as", "class"]);
  const classes = () => {
    return classNames(local.class, hopeNotificationIconClass, notificationIconStyles({
      status: status()
    }));
  };
  const icon = () => {
    if (local.as) {
      return local.as;
    }
    switch (status()) {
      case "success":
        return IconCheckCircleSolid;
      case "info":
        return IconInfoCircleSolid;
      case "warning":
        return IconExclamationTriangleSolid;
      case "danger":
        return IconExclamationCircleSolid;
    }
  };
  return createComponent(Icon, mergeProps$1({
    get as() {
      return icon();
    },
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.icon;
    }
  }, others));
}
NotificationIcon.toString = () => createClassSelector(hopeNotificationIconClass);
const hopeNotificationTitleClass = "hope-notification__title";
function NotificationTitle(props) {
  const theme = useStyleConfig().Notification;
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeNotificationTitleClass, notificationTitleStyles());
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.title;
    }
  }, others));
}
NotificationTitle.toString = () => createClassSelector(hopeNotificationTitleClass);
function createQueue(props) {
  var _a, _b, _c, _d;
  const [currentState, setCurrentState] = createSignal(
    (_b = (_a = props.initialValues) == null ? void 0 : _a.slice(0, props.limit)) != null ? _b : []
  );
  const [queue, setQueue] = createSignal((_d = (_c = props.initialValues) == null ? void 0 : _c.slice(props.limit)) != null ? _d : []);
  const limit = () => props.limit;
  const add = (...items) => {
    const results = [...currentState(), ...queue(), ...items];
    setCurrentState(results.slice(0, limit()));
    setQueue(results.slice(limit()));
  };
  const update2 = (fn) => {
    const results = fn([...currentState(), ...queue()]);
    setCurrentState(results.slice(0, limit()));
    setQueue(results.slice(limit()));
  };
  const clearQueue2 = () => {
    setQueue([]);
  };
  const state = {
    current: currentState,
    queue,
    limit
  };
  return {
    state,
    add,
    update: update2,
    clearQueue: clearQueue2
  };
}
const stackStyles = css({
  display: "flex"
});
const hopeStackClass = "hope-stack";
function Stack(props) {
  const [local, others] = splitProps(props, ["class", "direction", "wrap", "spacing"]);
  const classes = () => classNames(local.class, hopeStackClass, stackStyles());
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get flexDirection() {
      return local.direction;
    },
    get flexWrap() {
      return local.wrap;
    },
    get gap() {
      return local.spacing;
    }
  }, others));
}
Stack.toString = () => createClassSelector(hopeStackClass);
function HStack(props) {
  const [local, others] = splitProps(props, ["spacing"]);
  return createComponent(Stack, mergeProps$1({
    direction: "row",
    alignItems: "center",
    get columnGap() {
      return local.spacing;
    }
  }, others));
}
HStack.toString = () => createClassSelector(hopeStackClass);
function VStack(props) {
  const [local, others] = splitProps(props, ["spacing"]);
  return createComponent(Stack, mergeProps$1({
    direction: "column",
    alignItems: "center",
    get rowGap() {
      return local.spacing;
    }
  }, others));
}
VStack.toString = () => createClassSelector(hopeStackClass);
const NotificationsProviderContext = createContext();
function useNotificationsProviderContext() {
  const context = useContext(NotificationsProviderContext);
  if (!context) {
    throw new Error(
      "[Hope UI]: useNotificationsProviderContext must be used within a `<NotificationsProvider />` component"
    );
  }
  return context;
}
function NotificationContainer(props) {
  const notificationsProviderContext = useNotificationsProviderContext();
  const [local] = splitProps(props, ["render", "id", "status", "title", "description", "duration", "persistent", "closable", "loading", "onMouseEnter", "onMouseLeave", "queuedNotificationUpdates"]);
  let closeDelayId;
  const _clearCloseDelay = () => {
    window.clearTimeout(closeDelayId);
    closeDelayId = void 0;
  };
  const clearCloseDelay = (force = false) => {
    var _a, _b;
    if (!force && ((_b = (_a = local.queuedNotificationUpdates) == null ? void 0 : _a.length) != null ? _b : 0) > 0)
      return;
    if (closeDelayId) {
      if (notificationsProviderContext.debugMode()) {
        console.log("NotificationContainer: clearTimeout called.", closeDelayId, local.id, {
          ...local
        });
      }
      _clearCloseDelay();
    }
  };
  const _closeNotification = () => {
    var _a;
    _clearCloseDelay();
    if (notificationsProviderContext.debugMode()) {
      console.log("NotificationContainer: [_closeNotification]", local.id, {
        ...local
      });
    }
    notificationsProviderContext.hideNotification(local.id);
    (_a = props.onClose) == null ? void 0 : _a.call(props, local.id);
  };
  const closeNotification = (id) => {
    var _a;
    let queued = local.queuedNotificationUpdates;
    if (queued && queued.length > 0) {
      let next = queued[0];
      let updated = notificationsProviderContext.updateNotification(id != null ? id : local.id, next);
      if (!updated) {
        if (notificationsProviderContext.debugMode())
          console.error("NotificationContainer: Failed to update queued notification", id != null ? id : local.id, next, queued);
        _closeNotification();
        return;
      }
      _clearCloseDelay();
      (_a = props.onCloseWithNotificationQueued) == null ? void 0 : _a.call(props, next);
      if (notificationsProviderContext.debugMode()) {
        console.log("NotificationContainer: Update queued notifications", updated, next, queued);
      }
      closeWithDelay();
    } else {
      _closeNotification();
    }
  };
  const closeWithDelay = () => {
    var _a, _b;
    if (local.persistent && ((_b = (_a = local.queuedNotificationUpdates) == null ? void 0 : _a.length) != null ? _b : 0) > 0 || local.duration == null) {
      if (notificationsProviderContext.debugMode()) {
        console.log("NotificationContainer: Persistent notification - setTimeout not called.", local.id, {
          ...local
        });
      }
      return;
    }
    closeDelayId = window.setTimeout(() => closeNotification(local.id), local.duration);
    if (notificationsProviderContext.debugMode()) {
      console.log("NotificationContainer: [closeWithDelay] setTimeout called.", closeDelayId, local.duration, local.id, {
        ...local
      });
    }
  };
  const showIcon = () => local.status && !local.loading;
  onMount(() => {
    if (notificationsProviderContext.debugMode()) {
      console.log("NotificationContainer: onMount", local.id, {
        ...local
      });
    }
    closeWithDelay();
  });
  onCleanup(() => {
    _clearCloseDelay();
  });
  return createComponent(Show, {
    get when() {
      return local.render;
    },
    get fallback() {
      return createComponent(Notification, {
        get status() {
          return local.status;
        },
        get pr() {
          return local.closable ? "$9" : "$3";
        },
        onMouseEnter: () => clearCloseDelay(),
        onMouseLeave: closeWithDelay,
        get children() {
          return [createComponent(Show, {
            get when() {
              return showIcon();
            },
            get children() {
              return createComponent(NotificationIcon, {
                mr: "$2_5"
              });
            }
          }), createComponent(Show, {
            get when() {
              return local.loading;
            },
            get children() {
              return createComponent(IconSpinner, {
                color: "$primary10",
                boxSize: "$8",
                mr: "$2_5",
                get ["class"]() {
                  return notificationLoaderStyles();
                }
              });
            }
          }), createComponent(Switch$1, {
            get children() {
              return [createComponent(Match, {
                get when() {
                  return local.title && local.description;
                },
                get children() {
                  return createComponent(VStack, {
                    alignItems: "flex-start",
                    spacing: "$1",
                    get children() {
                      return [createComponent(NotificationTitle, {
                        get children() {
                          return local.title;
                        }
                      }), createComponent(NotificationDescription, {
                        get children() {
                          return local.description;
                        }
                      })];
                    }
                  });
                }
              }), createComponent(Match, {
                get when() {
                  return local.title;
                },
                get children() {
                  return createComponent(NotificationTitle, {
                    get children() {
                      return local.title;
                    }
                  });
                }
              }), createComponent(Match, {
                get when() {
                  return local.description;
                },
                get children() {
                  return createComponent(NotificationDescription, {
                    get children() {
                      return local.description;
                    }
                  });
                }
              })];
            }
          }), createComponent(Show, {
            get when() {
              return local.closable;
            },
            get children() {
              return createComponent(CloseButton, {
                size: "sm",
                position: "absolute",
                top: "$1_5",
                right: "$1_5",
                onClick: () => closeNotification()
              });
            }
          })];
        }
      });
    },
    get children() {
      return createComponent(Flex, {
        w: "$full",
        justifyContent: "flex-end",
        onMouseEnter: () => clearCloseDelay(),
        onMouseLeave: closeWithDelay,
        get children() {
          var _a;
          return (_a = local.render) == null ? void 0 : _a.call(local, {
            id: local.id,
            close: closeNotification
          });
        }
      });
    }
  });
}
const hopeNotificationListClass = "hope-notification__list";
const DEFAULT_NOTIFICATION_DURATION = 5e3;
function NotificationsProvider(props) {
  var _a;
  const [debugMode, setDebugMode2] = createSignal((_a = props.debugMode) != null ? _a : false);
  const [local] = splitProps(props, ["children", "placement", "duration", "persistent", "closable", "limit", "zIndex"]);
  const notificationQueue = createMemo(() => {
    var _a2;
    return createQueue({
      initialValues: [],
      limit: (_a2 = local.limit) != null ? _a2 : 10
    });
  });
  const finalPlacement = () => {
    var _a2;
    return (_a2 = local.placement) != null ? _a2 : "top-end";
  };
  const notificationsAccessor = () => notificationQueue().state.current();
  const queueAccessor = () => notificationQueue().state.queue();
  const showNotification = (notification) => {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    const id = (_a2 = notification.id) != null ? _a2 : `hope-notification-${createUniqueId()}`;
    const persistent = (_c = (_b = notification.persistent) != null ? _b : local.persistent) != null ? _c : false;
    const duration = (_e = (_d = notification.duration) != null ? _d : local.duration) != null ? _e : DEFAULT_NOTIFICATION_DURATION;
    const closable = (_g = (_f = notification.closable) != null ? _f : local.closable) != null ? _g : true;
    const queuedNotificationUpdates = (_h = notification.queuedNotificationUpdates) != null ? _h : [];
    notificationQueue().update((notifications) => {
      const newNotification = {
        ...notification,
        queuedNotificationUpdates,
        id,
        persistent,
        duration,
        closable
      };
      if (newNotification.id && notifications.some((n) => n[0].id === newNotification.id)) {
        if (debugMode()) {
          console.log("[showNotification] Notification with the same id already exists, adding to queue", newNotification.id, {
            ...newNotification
          });
        }
        addToNotificationQueue2(newNotification.id, newNotification);
        return notifications;
      }
      if (debugMode()) {
        console.log("[showNotification] Adding to list and showing notification.", {
          ...newNotification
        });
      }
      return [...notifications, createStore(newNotification)];
    });
    return id;
  };
  const updateNotification = (id, notification) => {
    let updated = false;
    notificationQueue().update((notifications) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
      const index = notifications.findIndex((n) => n[0].id === id);
      if (index === -1) {
        return notifications;
      }
      const newNotifications = [...notifications];
      let target = newNotifications[index][0];
      let updateTarget = newNotifications[index][1];
      updateTarget("description", (_a2 = notification.description) != null ? _a2 : target.description);
      updateTarget("title", (_b = notification.title) != null ? _b : target.title);
      updateTarget("status", (_c = notification.status) != null ? _c : target.status);
      updateTarget("loading", (_d = notification.loading) != null ? _d : target.loading);
      updateTarget("persistent", (_e = notification.persistent) != null ? _e : target.persistent);
      updateTarget("duration", (_f = notification.duration) != null ? _f : target.duration);
      updateTarget("closable", (_g = notification.closable) != null ? _g : target.closable);
      updateTarget("onClose", (_h = notification.onClose) != null ? _h : target.onClose);
      updateTarget("render", (_i = notification.render) != null ? _i : target.render);
      if (debugMode()) {
        console.log("[updateNotification] Notification found in list, updating", id, notification);
      }
      updated = true;
      return newNotifications;
    });
    return updated;
  };
  const hideNotification = (id) => {
    let notFoundFlag = false;
    notificationQueue().update((notifications) => {
      return notifications.filter((notification) => {
        var _a2, _b;
        if (notification[0].id === id) {
          if (debugMode()) {
            console.log("[hideNotification] Hiding notification.", id, {
              ...notification[0]
            });
          }
          notification[1]("queuedNotificationUpdates", []);
          (_b = (_a2 = notification[0]).onClose) == null ? void 0 : _b.call(_a2, notification[0].id);
          return false;
        }
        if (!notFoundFlag && debugMode()) {
          console.warn("[hideNotification] Keeping notification since it was not found in list.", id, {
            ...notification[0]
          });
          notFoundFlag = true;
        }
        return true;
      });
    });
  };
  const addToNotificationQueue2 = (id, notification) => {
    if (!id || !notification)
      return;
    notificationQueue().update((notifications) => {
      var _a2;
      const index = notifications.findIndex((n) => n[0].id === id);
      if (index === -1) {
        if (debugMode()) {
          console.log("[addToNotificationQueue] Notification not found in list.", id, notification);
        }
        return notifications;
      }
      let target = notifications[index];
      let updateTarget = target[1];
      updateTarget("queuedNotificationUpdates", [...(_a2 = target[0].queuedNotificationUpdates) != null ? _a2 : [], notification]);
      if (debugMode()) {
        console.log("[addToNotificationQueue] Notification found in list, updating", id, notification);
      }
      return [...notifications];
    });
  };
  const removeNotificationFromQueue = (id) => {
    notificationQueue().update((notifications) => {
      var _a2;
      const index = notifications.findIndex((n) => n[0].id === id);
      if (index === -1) {
        if (debugMode()) {
          console.log("[removeNotificationFromQueue] Notification not found in list.", id);
        }
        return notifications;
      }
      let target = notifications[index];
      let updateTarget = target[1];
      updateTarget("queuedNotificationUpdates", (_a2 = target[0].queuedNotificationUpdates) == null ? void 0 : _a2.slice(1));
      if (debugMode()) {
        console.log("[removeNotificationFromQueue] Queued Notification found in list, removing...", id);
      }
      return [...notifications];
    });
  };
  const clear2 = () => notificationQueue().update(() => []);
  const clearQueue2 = () => notificationQueue().clearQueue();
  const classes = () => {
    return classNames(hopeNotificationListClass, notificationListStyles({
      placement: finalPlacement()
    }));
  };
  const transitionName = () => {
    switch (finalPlacement()) {
      case "top-start":
        return notificationTransitionName.slideInLeft;
      case "top":
        return notificationTransitionName.slideInTop;
      case "top-end":
        return notificationTransitionName.slideInRight;
      case "bottom-start":
        return notificationTransitionName.slideInLeft;
      case "bottom":
        return notificationTransitionName.slideInBottom;
      case "bottom-end":
        return notificationTransitionName.slideInRight;
      default:
        return notificationTransitionName.slideInRight;
    }
  };
  const context = {
    notifications: notificationsAccessor,
    queue: queueAccessor,
    showNotification,
    updateNotification,
    hideNotification,
    clear: clear2,
    clearQueue: clearQueue2,
    addToNotificationQueue: addToNotificationQueue2,
    debugMode
  };
  const showHandler = (event) => showNotification(event.detail);
  const updateHandler = (event) => updateNotification(event.detail.id, event.detail);
  const hideHandler = (event) => hideNotification(event.detail);
  const addToNotificationQueueHandler = (event) => addToNotificationQueue2(event.detail.id, event.detail);
  const setDebugModeHandler = (event) => {
    var _a2;
    setDebugMode2((_a2 = event.detail) != null ? _a2 : false);
  };
  onMount(() => {
    window.addEventListener(NOTIFICATIONS_EVENTS.show, showHandler);
    window.addEventListener(NOTIFICATIONS_EVENTS.update, updateHandler);
    window.addEventListener(NOTIFICATIONS_EVENTS.hide, hideHandler);
    window.addEventListener(NOTIFICATIONS_EVENTS.clear, clear2);
    window.addEventListener(NOTIFICATIONS_EVENTS.clearQueue, clearQueue2);
    window.addEventListener(NOTIFICATIONS_EVENTS.addToNotificationQueue, addToNotificationQueueHandler);
    window.addEventListener(NOTIFICATIONS_EVENTS.setDebugMode, setDebugModeHandler);
  });
  onCleanup(() => {
    window.removeEventListener(NOTIFICATIONS_EVENTS.show, showHandler);
    window.removeEventListener(NOTIFICATIONS_EVENTS.update, updateHandler);
    window.removeEventListener(NOTIFICATIONS_EVENTS.hide, hideHandler);
    window.removeEventListener(NOTIFICATIONS_EVENTS.clear, clear2);
    window.removeEventListener(NOTIFICATIONS_EVENTS.clearQueue, clearQueue2);
    window.removeEventListener(NOTIFICATIONS_EVENTS.addToNotificationQueue, addToNotificationQueueHandler);
    window.removeEventListener(NOTIFICATIONS_EVENTS.setDebugMode, setDebugModeHandler);
  });
  return createComponent(NotificationsProviderContext.Provider, {
    value: context,
    get children() {
      return [createComponent(Portal, {
        get children() {
          return createComponent(Box, {
            get ["class"]() {
              return classes();
            },
            get zIndex() {
              return local.zIndex;
            },
            get children() {
              return createComponent(TransitionGroup, {
                get name() {
                  return transitionName();
                },
                get children() {
                  return createComponent(For, {
                    get each() {
                      return context.notifications();
                    },
                    children: (notification) => createComponent(NotificationContainer, mergeProps$1(() => notification[0], {
                      onCloseWithNotificationQueued: (config2) => {
                        removeNotificationFromQueue(config2.id);
                      },
                      onClose: (id) => {
                      }
                    }))
                  });
                }
              });
            }
          });
        }
      }), memo(() => local.children)];
    }
  });
}
const hasTabIndex = (element) => element.hasAttribute("tabindex");
function isHidden(element) {
  if (element.parentElement && isHidden(element.parentElement)) {
    return true;
  }
  return element.hidden;
}
function isDisabled(element) {
  return Boolean(element.getAttribute("disabled")) === true || Boolean(element.getAttribute("aria-disabled")) === true;
}
function isContentEditable(element) {
  const value = element.getAttribute("contenteditable");
  return value !== "false" && value != null;
}
function isFocusable(element) {
  if (!isHTMLElement(element) || isHidden(element) || isDisabled(element)) {
    return false;
  }
  const { localName } = element;
  const focusableTags = ["input", "select", "textarea", "button"];
  if (focusableTags.indexOf(localName) >= 0) {
    return true;
  }
  const others = {
    a: () => element.hasAttribute("href"),
    audio: () => element.hasAttribute("controls"),
    video: () => element.hasAttribute("controls")
  };
  if (localName in others) {
    return others[localName]();
  }
  if (isContentEditable(element)) {
    return true;
  }
  return hasTabIndex(element);
}
function Popover(props) {
  const defaultContentId = `hope-popover-${createUniqueId()}`;
  const theme = useStyleConfig().Popover;
  const [state, setState] = createStore({
    _opened: !!props.defaultOpened,
    isHovering: false,
    headerMounted: false,
    bodyMounted: false,
    finalPlacement: "bottom",
    get isControlled() {
      return props.opened !== void 0;
    },
    get opened() {
      return this.isControlled ? !!props.opened : this._opened;
    },
    get contentId() {
      var _a;
      return (_a = props.id) != null ? _a : defaultContentId;
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
      var _a;
      return (_a = props.triggerMode) != null ? _a : "click";
    },
    get triggerOnClick() {
      return this.triggerMode === "click";
    },
    get triggerOnHover() {
      return this.triggerMode === "hover";
    },
    get initialFocus() {
      return props.initialFocus;
    },
    get inline() {
      var _a;
      return (_a = props.inline) != null ? _a : false;
    },
    get initialPlacement() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.placement) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.placement) != null ? _d : "bottom";
    },
    get offset() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.offset) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.offset) != null ? _d : 8;
    },
    get arrowPadding() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.arrowPadding) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.arrowPadding) != null ? _d : 8;
    },
    get openDelay() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.openDelay) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.openDelay) != null ? _d : 0;
    },
    get closeDelay() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.closeDelay) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.closeDelay) != null ? _d : 100;
    },
    get motionPreset() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.motionPreset) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.motionPreset) != null ? _d : "scale";
    },
    get closeOnBlur() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.closeOnBlur) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.closeOnBlur) != null ? _d : true;
    },
    get closeOnEsc() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.closeOnEsc) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.closeOnEsc) != null ? _d : true;
    },
    get trapFocus() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.trapFocus) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.trapFocus) != null ? _d : false;
    }
  });
  let anchorRef;
  let triggerRef;
  let popoverRef;
  let arrowRef;
  let focusTrap;
  let enterTimeoutId;
  let exitTimeoutId;
  let cleanupPopoverAutoUpdate;
  const popoverSelector = () => `[id='${state.contentId}']`;
  const assignAnchorRef = (el) => {
    anchorRef = el;
  };
  const assignTriggerRef = (el) => {
    triggerRef = el;
  };
  const assignPopoverRef = (el) => {
    popoverRef = el;
  };
  const assignArrowRef = (el) => {
    arrowRef = el;
  };
  async function updatePopoverPosition() {
    var _a, _b, _c;
    const referenceElement = anchorRef != null ? anchorRef : triggerRef;
    if (!referenceElement || !popoverRef) {
      return;
    }
    const middleware = [offset(state.offset)];
    if (state.inline) {
      middleware.push(inline());
    }
    middleware.push(flip());
    middleware.push(shift({
      padding: props.shiftPadding
    }));
    if (arrowRef) {
      middleware.push(arrow({
        element: arrowRef,
        padding: state.arrowPadding
      }));
    }
    middleware.push(hide$1());
    const {
      x,
      y,
      placement,
      middlewareData
    } = await computePosition(referenceElement, popoverRef, {
      placement: state.initialPlacement,
      middleware
    });
    if (placement !== state.finalPlacement) {
      setState("finalPlacement", placement);
    }
    if (!popoverRef) {
      return;
    }
    const referenceHidden = (_a = middlewareData.hide) == null ? void 0 : _a.referenceHidden;
    Object.assign(popoverRef.style, {
      left: `${Math.round(x)}px`,
      top: `${Math.round(y)}px`,
      visibility: referenceHidden ? "hidden" : "visible"
    });
    if (!arrowRef) {
      return;
    }
    const arrowX = (_b = middlewareData.arrow) == null ? void 0 : _b.x;
    const arrowY = (_c = middlewareData.arrow) == null ? void 0 : _c.y;
    const staticSide = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right"
    }[placement.split("-")[0]];
    const arrowOffset = `${(Math.round(arrowRef.clientWidth / 2) + 1) * -1}px`;
    Object.assign(arrowRef.style, {
      left: arrowX != null ? `${Math.round(arrowX)}px` : "",
      top: arrowY != null ? `${Math.round(arrowY)}px` : "",
      right: "",
      bottom: "",
      [staticSide]: arrowOffset
    });
  }
  const onOpen = () => {
    var _a;
    if (!state.isControlled) {
      setState("_opened", true);
    }
    (_a = props.onOpen) == null ? void 0 : _a.call(props);
    updatePopoverPosition();
  };
  const onClose = () => {
    var _a;
    if (!state.isControlled) {
      setState("_opened", false);
    }
    (_a = props.onClose) == null ? void 0 : _a.call(props);
  };
  const closeIfNotHover = () => {
    !state.isHovering && onClose();
  };
  const openWithDelay = () => {
    enterTimeoutId = window.setTimeout(onOpen, state.openDelay);
  };
  const closeWithDelay = () => {
    if (enterTimeoutId) {
      window.clearTimeout(enterTimeoutId);
    }
    exitTimeoutId = window.setTimeout(onClose, state.closeDelay);
  };
  const setupPopoverAutoUpdate = () => {
    if (isServer) {
      return;
    }
    const referenceElement = anchorRef != null ? anchorRef : triggerRef;
    if (!referenceElement || !popoverRef) {
      return;
    }
    cleanupPopoverAutoUpdate = autoUpdate(referenceElement, popoverRef, updatePopoverPosition);
  };
  const focusInitialElement = () => {
    if (!state.initialFocus) {
      popoverRef == null ? void 0 : popoverRef.focus();
      return;
    }
    const initialFocusRef = document.querySelector(state.initialFocus);
    initialFocusRef && isFocusable(initialFocusRef) && (initialFocusRef == null ? void 0 : initialFocusRef.focus());
  };
  const onTriggerBlur = (event) => {
    const relatedTarget = getRelatedTarget(event);
    const isValidBlur = !contains(popoverRef, relatedTarget);
    if (state.opened && state.closeOnBlur && isValidBlur) {
      closeWithDelay();
    }
  };
  const onTriggerMouseLeave = () => {
    setIsHovering(false);
    if (enterTimeoutId) {
      window.clearTimeout(enterTimeoutId);
    }
    exitTimeoutId = window.setTimeout(closeIfNotHover, state.closeDelay);
  };
  const onPopoverFocusOut = (event) => {
    const relatedTarget = getRelatedTarget(event);
    const targetIsPopover = contains(popoverRef, relatedTarget);
    const targetIsTrigger = contains(triggerRef, relatedTarget);
    const isValidBlur = !targetIsPopover && !targetIsTrigger;
    if (state.opened && state.closeOnBlur && isValidBlur) {
      closeWithDelay();
    }
  };
  const onPopoverMouseLeave = onTriggerMouseLeave;
  const afterPopoverOpen = () => {
    setupPopoverAutoUpdate();
    if (state.trapFocus && popoverRef) {
      focusTrap = createFocusTrap(popoverRef, {
        initialFocus: state.initialFocus,
        fallbackFocus: popoverSelector(),
        allowOutsideClick: false
      });
      focusTrap.activate();
    } else {
      focusInitialElement();
    }
  };
  const afterPopoverClose = () => {
    focusTrap == null ? void 0 : focusTrap.deactivate();
    cleanupPopoverAutoUpdate == null ? void 0 : cleanupPopoverAutoUpdate();
  };
  const setIsHovering = (value) => setState("isHovering", value);
  const setHeaderMounted = (value) => setState("headerMounted", value);
  const setBodyMounted = (value) => setState("bodyMounted", value);
  const openedAccessor = () => state.opened;
  onCleanup(() => {
    window.clearTimeout(enterTimeoutId);
    window.clearTimeout(exitTimeoutId);
  });
  const context = {
    state,
    assignAnchorRef,
    assignTriggerRef,
    assignPopoverRef,
    assignArrowRef,
    openWithDelay,
    closeWithDelay,
    onTriggerBlur,
    onTriggerMouseLeave,
    onPopoverFocusOut,
    onPopoverMouseLeave,
    updatePopoverPosition,
    afterPopoverOpen,
    afterPopoverClose,
    setIsHovering,
    setHeaderMounted,
    setBodyMounted
  };
  return createComponent(PopoverContext.Provider, {
    value: context,
    get children() {
      return createComponent(Show, {
        get when() {
          return isChildrenFunction(props);
        },
        get fallback() {
          return props.children;
        },
        get children() {
          var _a;
          return (_a = props.children) == null ? void 0 : _a.call(props, {
            opened: openedAccessor,
            onClose: closeWithDelay
          });
        }
      });
    }
  });
}
const PopoverContext = createContext();
function usePopoverContext() {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error("[Hope UI]: usePopoverContext must be used within a `<Popover />` component");
  }
  return context;
}
function PopoverAnchor(props) {
  const popoverContext = usePopoverContext();
  const [local, others] = splitProps(props, ["ref", "as"]);
  const assignRef = (el) => {
    popoverContext.assignAnchorRef(el);
    if (isFunction(local.ref)) {
      local.ref(el);
    } else {
      local.ref = el;
    }
  };
  return createComponent(Dynamic, mergeProps$1({
    get component() {
      return local.as;
    },
    ref: assignRef
  }, others));
}
const hopePopoverArrowClass = "hope-popover__arrow";
function PopoverArrow(props) {
  const theme = useStyleConfig().Popover;
  const popoverContext = usePopoverContext();
  const [local, others] = splitProps(props, ["class"]);
  const placement = createMemo(() => {
    return popoverContext.state.finalPlacement.split("-")[0];
  });
  const classes = () => {
    return classNames(local.class, hopePopoverArrowClass, popoverArrowStyles({
      popoverPlacement: placement()
    }));
  };
  return createComponent(Box, mergeProps$1({
    ref(r$) {
      const _ref$ = popoverContext.assignArrowRef;
      typeof _ref$ === "function" ? _ref$(r$) : popoverContext.assignArrowRef = r$;
    },
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.arrow;
    }
  }, others));
}
PopoverArrow.toString = () => createClassSelector(hopePopoverArrowClass);
const hopePopoverBodyClass = "hope-popover__body";
function PopoverBody(props) {
  const theme = useStyleConfig().Popover;
  const popoverContext = usePopoverContext();
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopePopoverBodyClass, popoverBodyStyles());
  onMount(() => popoverContext.setBodyMounted(true));
  onCleanup(() => popoverContext.setBodyMounted(false));
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get id() {
      return popoverContext.state.bodyId;
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.body;
    }
  }, others));
}
PopoverBody.toString = () => createClassSelector(hopePopoverBodyClass);
const hopePopoverCloseButtonClass = "hope-popover__close-button";
function PopoverCloseButton(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const theme = useStyleConfig().Popover;
  const popoverContext = usePopoverContext();
  const defaultProps = {
    "aria-label": (_c = (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.closeButton) == null ? void 0 : _b["aria-label"]) != null ? _c : "Close popover",
    size: (_f = (_e = (_d = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _d.closeButton) == null ? void 0 : _e.size) != null ? _f : "sm",
    icon: (_h = (_g = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _g.closeButton) == null ? void 0 : _h.icon
  };
  const propsWithDefaults = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefaults, ["class", "onClick"]);
  const classes = () => classNames(local.class, hopePopoverCloseButtonClass, popoverCloseButtonStyles());
  const onClick = (event) => {
    chainHandlers(local.onClick, (e) => {
      e.stopPropagation();
      popoverContext.closeWithDelay();
    })(event);
  };
  return createComponent(CloseButton, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a2;
      return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.closeButton;
    },
    onClick
  }, others));
}
PopoverCloseButton.toString = () => createClassSelector(hopePopoverCloseButtonClass);
const hopePopoverContentClass = "hope-popover__content";
function PopoverContent(props) {
  const theme = useStyleConfig().Popover;
  const popoverContext = usePopoverContext();
  const [isPortalMounted, setIsPortalMounted] = createSignal(false);
  const [local, others] = splitProps(props, ["ref", "class", "onKeyDown", "onFocusOut", "onMouseEnter", "onMouseLeave"]);
  const assignRef = (el) => {
    popoverContext.assignPopoverRef(el);
    if (isFunction(local.ref)) {
      local.ref(el);
    } else {
      local.ref = el;
    }
  };
  const closeOnKeyDown = (event) => {
    if (popoverContext.state.closeOnEsc && event.key === "Escape") {
      popoverContext.closeWithDelay();
    }
  };
  const onKeyDown = (event) => {
    chainHandlers(local.onKeyDown, closeOnKeyDown)(event);
  };
  const onFocusOut = (event) => {
    chainHandlers(local.onFocusOut, popoverContext.onPopoverFocusOut)(event);
  };
  const onMouseEnter = (event) => {
    callHandler(local.onMouseEnter, event);
    popoverContext.setIsHovering(true);
  };
  const onMouseLeave = (event) => {
    callHandler(local.onMouseLeave, event);
    popoverContext.onPopoverMouseLeave();
  };
  const afterPopoverEnterTransition = () => {
    if (isServer) {
      return;
    }
    document.addEventListener("keydown", closeOnKeyDown);
    popoverContext.afterPopoverOpen();
  };
  const afterPopoverExitTransition = () => {
    document.removeEventListener("keydown", closeOnKeyDown);
    popoverContext.afterPopoverClose();
    setIsPortalMounted(false);
  };
  const popoverClasses = () => {
    return classNames(local.class, hopePopoverContentClass, popoverContentStyles());
  };
  const transitionName = () => {
    switch (popoverContext.state.motionPreset) {
      case "scale":
        return popoverTransitionName.scale;
      case "none":
        return "hope-none";
    }
  };
  createEffect(() => {
    if (popoverContext.state.opened) {
      setIsPortalMounted(true);
    } else {
      popoverContext.state.motionPreset === "none" && setIsPortalMounted(false);
    }
  });
  return createComponent(Show, {
    get when() {
      return isPortalMounted();
    },
    get children() {
      return createComponent(Portal, {
        get children() {
          return createComponent(Transition, {
            get name() {
              return transitionName();
            },
            appear: true,
            get onBeforeEnter() {
              return popoverContext.updatePopoverPosition;
            },
            onAfterEnter: afterPopoverEnterTransition,
            onAfterExit: afterPopoverExitTransition,
            get children() {
              return createComponent(Show, {
                get when() {
                  return popoverContext.state.opened;
                },
                get children() {
                  return createComponent(hope.section, mergeProps$1({
                    ref: assignRef,
                    tabIndex: -1,
                    get id() {
                      return popoverContext.state.contentId;
                    },
                    get role() {
                      return popoverContext.state.triggerOnHover ? "tooltip" : "dialog";
                    },
                    get ["aria-labelledby"]() {
                      return popoverContext.state.headerMounted ? popoverContext.state.headerId : void 0;
                    },
                    get ["aria-describedby"]() {
                      return popoverContext.state.bodyMounted ? popoverContext.state.bodyId : void 0;
                    },
                    get ["class"]() {
                      return popoverClasses();
                    },
                    get __baseStyle() {
                      var _a;
                      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.content;
                    },
                    onKeyDown,
                    onFocusOut,
                    get onMouseEnter() {
                      return popoverContext.state.triggerOnHover ? onMouseEnter : void 0;
                    },
                    get onMouseLeave() {
                      return popoverContext.state.triggerOnHover ? onMouseLeave : void 0;
                    }
                  }, others));
                }
              });
            }
          });
        }
      });
    }
  });
}
PopoverContent.toString = () => createClassSelector(hopePopoverContentClass);
const hopePopoverFooterClass = "hope-popover__footer";
function PopoverFooter(props) {
  const theme = useStyleConfig().Popover;
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopePopoverFooterClass, popoverFooterStyles());
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.footer;
    }
  }, others));
}
PopoverFooter.toString = () => createClassSelector(hopePopoverFooterClass);
const hopePopoverHeaderClass = "hope-popover__header";
function PopoverHeader(props) {
  const theme = useStyleConfig().Popover;
  const popoverContext = usePopoverContext();
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopePopoverHeaderClass, popoverHeaderStyles());
  onMount(() => popoverContext.setHeaderMounted(true));
  onCleanup(() => popoverContext.setHeaderMounted(false));
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get id() {
      return popoverContext.state.headerId;
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.header;
    }
  }, others));
}
PopoverHeader.toString = () => createClassSelector(hopePopoverHeaderClass);
function PopoverTrigger(props) {
  const popoverContext = usePopoverContext();
  const [local, others] = splitProps(props, ["ref", "onClick", "onKeyDown", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave"]);
  const assignTriggerRef = (el) => {
    popoverContext.assignTriggerRef(el);
    if (isFunction(local.ref)) {
      local.ref(el);
    } else {
      local.ref = el;
    }
  };
  const onClick = (event) => {
    callHandler(local.onClick, event);
    popoverContext.state.opened ? popoverContext.closeWithDelay() : popoverContext.openWithDelay();
  };
  const onKeyDown = (event) => {
    callHandler(local.onKeyDown, event);
    if (event.key === "Escape") {
      popoverContext.closeWithDelay();
    }
  };
  const onFocus = (event) => {
    callHandler(local.onFocus, event);
    popoverContext.openWithDelay();
  };
  const onBlur = (event) => {
    chainHandlers(local.onBlur, popoverContext.onTriggerBlur)(event);
  };
  const onMouseEnter = (event) => {
    callHandler(local.onMouseEnter, event);
    popoverContext.setIsHovering(true);
    popoverContext.openWithDelay();
  };
  const onMouseLeave = (event) => {
    callHandler(local.onMouseLeave, event);
    popoverContext.onTriggerMouseLeave();
  };
  return createComponent(hope.button, mergeProps$1({
    ref: assignTriggerRef,
    get id() {
      return popoverContext.state.triggerId;
    },
    type: "button",
    "aria-haspopup": "dialog",
    get ["aria-controls"]() {
      return popoverContext.state.contentId;
    },
    get ["aria-expanded"]() {
      return popoverContext.state.opened;
    },
    get onClick() {
      return popoverContext.state.triggerOnClick ? onClick : void 0;
    },
    get onKeyDown() {
      return popoverContext.state.triggerOnHover ? onKeyDown : void 0;
    },
    get onFocus() {
      return popoverContext.state.triggerOnHover ? onFocus : void 0;
    },
    get onBlur() {
      return popoverContext.state.triggerOnHover ? onBlur : void 0;
    },
    get onMouseEnter() {
      return popoverContext.state.triggerOnHover ? onMouseEnter : void 0;
    },
    get onMouseLeave() {
      return popoverContext.state.triggerOnHover ? onMouseLeave : void 0;
    }
  }, others));
}
const indeterminateProgress = keyframes({
  "0%": { left: "-40%" },
  "100%": { left: "100%" }
});
const stripe = keyframes({
  from: { backgroundPosition: "1rem 0" },
  to: { backgroundPosition: "0 0" }
});
const progressStyles = css({
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
});
const progressIndicatorStyles = css({
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
        animation: `${indeterminateProgress} 1200ms ease infinite normal none running`
      }
    }
  },
  compoundVariants: [
    {
      indeterminate: false,
      striped: true,
      css: {
        backgroundImage: "linear-gradient(45deg, $colors$progressStripe 25%, transparent 25%, transparent 50%, $colors$progressStripe 50%,  $colors$progressStripe 75%, transparent 75%, transparent)",
        backgroundSize: "1rem 1rem"
      }
    },
    {
      indeterminate: false,
      striped: true,
      animated: true,
      css: {
        animation: `${stripe} 750ms linear infinite`
      }
    }
  ]
});
const progressLabelStyles = css({
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "100%",
  color: "$neutral12",
  lineHeight: "$none",
  fontWeight: "$bold",
  textAlign: "center",
  transform: "translate(-50%, -50%)"
});
const ProgressContext = createContext();
const hopeProgressClass = "hope-progress";
function Progress(props) {
  var _a, _b, _c, _d, _e, _f;
  const theme = useStyleConfig().Progress;
  const [state] = createStore({
    get min() {
      var _a2;
      return (_a2 = props.min) != null ? _a2 : 0;
    },
    get max() {
      var _a2;
      return (_a2 = props.max) != null ? _a2 : 100;
    },
    get value() {
      var _a2;
      return (_a2 = props.value) != null ? _a2 : 0;
    },
    get percent() {
      return valueToPercent(this.value, this.min, this.max);
    },
    get indeterminate() {
      var _a2;
      return (_a2 = props.indeterminate) != null ? _a2 : false;
    },
    get ariaValueText() {
      var _a2;
      if (this.indeterminate) {
        return void 0;
      }
      if (isFunction(this.getValueText)) {
        return this.getValueText(this.value, this.percent);
      }
      return (_a2 = props.valueText) != null ? _a2 : `${this.percent}%`;
    },
    get getValueText() {
      return props.getValueText;
    }
  });
  const defaultProps = {
    size: (_c = (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.size) != null ? _c : "md",
    trackColor: (_f = (_e = (_d = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _d.root) == null ? void 0 : _e.trackColor) != null ? _f : "$neutral4"
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, _, others] = splitProps(propsWithDefault, ["class", "size", "trackColor"], ["min", "max", "value", "indeterminate", "valueText", "getValueText"]);
  const classes = () => {
    return classNames(local.class, hopeProgressClass, progressStyles({
      size: local.size
    }));
  };
  const context = {
    state
  };
  return createComponent(ProgressContext.Provider, {
    value: context,
    get children() {
      return createComponent(Box, mergeProps$1({
        role: "progressbar",
        get ["data-indeterminate"]() {
          return state.indeterminate ? "" : void 0;
        },
        get ["aria-valuemin"]() {
          return state.min;
        },
        get ["aria-valuemax"]() {
          return state.max;
        },
        get ["aria-valuenow"]() {
          return state.indeterminate ? void 0 : state.value;
        },
        get ["aria-valuetext"]() {
          return state.ariaValueText;
        },
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a2;
          return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.root;
        },
        get backgroundColor() {
          return local.trackColor;
        }
      }, others));
    }
  });
}
Progress.toString = () => createClassSelector(hopeProgressClass);
function useProgressContext() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("[Hope UI]: useProgressContext must be used within a `<Progress />` component");
  }
  return context;
}
const hopeProgressIndicatorClass = "hope-progress__indicator";
function ProgressIndicator(props) {
  const theme = useStyleConfig().Progress;
  const progressContext = useProgressContext();
  const defaultProps = {
    color: "$primary9"
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["class", "color", "striped", "animated"]);
  const backgroundStyles = () => {
    if (progressContext.state.indeterminate) {
      return {
        backgroundImage: `linear-gradient(to right, transparent 0%, ${local.color} 50%, transparent 100%)`
      };
    }
    return {
      backgroundColor: local.color
    };
  };
  const classes = () => {
    return classNames(local.class, hopeProgressIndicatorClass, progressIndicatorStyles({
      striped: local.striped,
      animated: local.animated,
      indeterminate: progressContext.state.indeterminate === true ? true : false,
      css: {
        ...backgroundStyles(),
        width: `${progressContext.state.percent}%`
      }
    }));
  };
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.indicator;
    }
  }, others));
}
ProgressIndicator.toString = () => createClassSelector(hopeProgressIndicatorClass);
const hopeProgressLabelClass = "hope-progress__label";
function ProgressLabel(props) {
  const theme = useStyleConfig().Progress;
  const progressContext = useProgressContext();
  const [local, others] = splitProps(props, ["class", "children"]);
  const classes = () => classNames(local.class, hopeProgressLabelClass, progressLabelStyles());
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.label;
    }
  }, others, {
    get children() {
      return createComponent(Show, {
        get when() {
          return local.children;
        },
        get fallback() {
          return progressContext.state.ariaValueText;
        },
        get children() {
          return local.children;
        }
      });
    }
  }));
}
ProgressLabel.toString = () => createClassSelector(hopeProgressLabelClass);
const radioWrapperStyles = css(toggleWrapperStyles, {
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
});
const radioLabelStyles = css(toggleControlLabelStyles);
const radioControlStyles = css(toggleControlStyles, {
  borderRadius: "$full",
  "&[data-checked]::before": {
    content: "",
    display: "inline-block",
    position: "relative",
    boxSize: "calc(50% + 1px)",
    borderRadius: "$full",
    backgroundColor: "$loContrast"
  }
});
const hopeRadioGroupClass = "hope-radio-group";
function RadioGroup(props) {
  const defaultRadioName = `hope-radio-group-${createUniqueId()}--radio`;
  const theme = useStyleConfig().Radio;
  const [state, setState] = createStore({
    _value: props.defaultValue,
    get isControlled() {
      return props.value !== void 0;
    },
    get value() {
      return this.isControlled ? props.value : this._value;
    },
    get name() {
      var _a;
      return (_a = props.name) != null ? _a : defaultRadioName;
    },
    get required() {
      return props.required;
    },
    get disabled() {
      return props.disabled;
    },
    get invalid() {
      return props.invalid;
    },
    get readOnly() {
      return props.readOnly;
    },
    get variant() {
      var _a, _b, _c;
      return (_c = props.variant) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.group) == null ? void 0 : _b.variant;
    },
    get colorScheme() {
      var _a, _b, _c;
      return (_c = props.colorScheme) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.group) == null ? void 0 : _b.colorScheme;
    },
    get size() {
      var _a, _b, _c;
      return (_c = props.size) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.group) == null ? void 0 : _b.size;
    }
  });
  const [local, _, others] = splitProps(props, ["class", "onChange"], ["value", "defaultValue", "name", "required", "disabled", "readOnly", "invalid"]);
  const onChange = (event) => {
    var _a;
    const value = event.target.value;
    setState("_value", value);
    (_a = local.onChange) == null ? void 0 : _a.call(local, String(value));
  };
  const classes = () => classNames(local.class, hopeRadioGroupClass);
  const context = {
    state,
    onChange
  };
  return createComponent(RadioGroupContext.Provider, {
    value: context,
    get children() {
      return createComponent(Box, mergeProps$1({
        role: "radiogroup",
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.group;
        }
      }, others));
    }
  });
}
RadioGroup.toString = () => createClassSelector(hopeRadioGroupClass);
const RadioGroupContext = createContext();
function useRadioGroupContext() {
  return useContext(RadioGroupContext);
}
const _tmpl$$6 = /* @__PURE__ */ template(`<input type="radio">`, 1);
const hopeRadioClass = "hope-radio";
const hopeRadioInputClass = "hope-radio__input";
const hopeRadioControlClass = "hope-radio__control";
const hopeRadioLabelClass = "hope-radio__label";
function Radio(props) {
  const defaultId = `hope-radio-${createUniqueId()}`;
  const theme = useStyleConfig().Radio;
  const formControlContext = useFormControlContext();
  const radioGroupContext = useRadioGroupContext();
  const formControlProps = useFormControl(props);
  const [state, setState] = createStore({
    _checked: !!props.defaultChecked,
    isFocused: false,
    get isControlled() {
      return props.checked !== void 0;
    },
    get checked() {
      if (radioGroupContext) {
        const radioGroupValue = radioGroupContext.state.value;
        return radioGroupValue != null ? String(props.value) === String(radioGroupValue) : false;
      }
      return this.isControlled ? !!props.checked : this._checked;
    },
    get variant() {
      var _a, _b, _c, _d, _e, _f;
      return (_f = (_e = (_b = props.variant) != null ? _b : (_a = radioGroupContext == null ? void 0 : radioGroupContext.state) == null ? void 0 : _a.variant) != null ? _e : (_d = (_c = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _c.root) == null ? void 0 : _d.variant) != null ? _f : "outline";
    },
    get colorScheme() {
      var _a, _b, _c, _d, _e, _f;
      return (_f = (_e = (_b = props.colorScheme) != null ? _b : (_a = radioGroupContext == null ? void 0 : radioGroupContext.state) == null ? void 0 : _a.colorScheme) != null ? _e : (_d = (_c = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _c.root) == null ? void 0 : _d.colorScheme) != null ? _f : "primary";
    },
    get size() {
      var _a, _b, _c, _d, _e, _f;
      return (_f = (_e = (_b = props.size) != null ? _b : (_a = radioGroupContext == null ? void 0 : radioGroupContext.state) == null ? void 0 : _a.size) != null ? _e : (_d = (_c = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _c.root) == null ? void 0 : _d.size) != null ? _f : "md";
    },
    get labelPlacement() {
      var _a, _b, _c, _d, _e, _f;
      return (_f = (_e = (_b = props.labelPlacement) != null ? _b : (_a = radioGroupContext == null ? void 0 : radioGroupContext.state) == null ? void 0 : _a.labelPlacement) != null ? _e : (_d = (_c = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _c.root) == null ? void 0 : _d.labelPlacement) != null ? _f : "end";
    },
    get id() {
      var _a;
      if (formControlContext && !radioGroupContext) {
        return formControlProps.id;
      }
      return (_a = props.id) != null ? _a : defaultId;
    },
    get name() {
      var _a;
      return (_a = props.name) != null ? _a : radioGroupContext == null ? void 0 : radioGroupContext.state.name;
    },
    get value() {
      return props.value;
    },
    get required() {
      var _a;
      return (_a = formControlProps.required) != null ? _a : radioGroupContext == null ? void 0 : radioGroupContext.state.required;
    },
    get disabled() {
      var _a;
      return (_a = formControlProps.disabled) != null ? _a : radioGroupContext == null ? void 0 : radioGroupContext.state.disabled;
    },
    get invalid() {
      var _a;
      return (_a = formControlProps.invalid) != null ? _a : radioGroupContext == null ? void 0 : radioGroupContext.state.invalid;
    },
    get readOnly() {
      var _a;
      return (_a = formControlProps.readOnly) != null ? _a : radioGroupContext == null ? void 0 : radioGroupContext.state.readOnly;
    },
    get ["aria-required"]() {
      return this.required ? true : void 0;
    },
    get ["aria-disabled"]() {
      return this.disabled ? true : void 0;
    },
    get ["aria-invalid"]() {
      return this.invalid ? true : void 0;
    },
    get ["aria-readonly"]() {
      return this.readOnly ? true : void 0;
    },
    get ["aria-label"]() {
      return props["aria-label"];
    },
    get ["aria-labelledby"]() {
      return props["aria-labelledby"];
    },
    get ["aria-describedby"]() {
      return props["aria-describedby"];
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
  });
  const [local, _, others] = splitProps(props, ["class", "children", "ref", "tabIndex", "onChange"], ["variant", "colorScheme", "size", "labelPlacement", "id", "name", "value", "checked", "defaultChecked", "required", "disabled", "invalid", "readOnly", "onFocus", "onBlur"]);
  const onChange = (event) => {
    if (state.readOnly || state.disabled) {
      event.preventDefault();
      return;
    }
    if (!state.isControlled) {
      const target = event.target;
      setState("_checked", target.checked);
    }
    chainHandlers(radioGroupContext == null ? void 0 : radioGroupContext.onChange, local.onChange)(event);
  };
  const onFocus = (event) => {
    setState("isFocused", true);
    callHandler(formControlProps.onFocus, event);
  };
  const onBlur = (event) => {
    setState("isFocused", false);
    callHandler(formControlProps.onBlur, event);
  };
  const wrapperClasses = () => {
    return classNames(local.class, hopeRadioClass, radioWrapperStyles({
      size: state.size,
      labelPlacement: state.labelPlacement
    }));
  };
  const inputClasses = () => classNames(hopeRadioInputClass, visuallyHiddenStyles());
  const controlClasses = () => {
    return classNames(hopeRadioControlClass, radioControlStyles({
      variant: state.variant,
      colorScheme: state.colorScheme,
      size: state.size
    }));
  };
  const labelClasses = () => {
    return classNames(hopeRadioLabelClass, radioLabelStyles());
  };
  const context = {
    state,
    onChange,
    onFocus,
    onBlur
  };
  return createComponent(RadioContext.Provider, {
    value: context,
    get children() {
      return createComponent(hope.label, mergeProps$1({
        get ["class"]() {
          return wrapperClasses();
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.root;
        },
        get ["for"]() {
          return state.id;
        },
        "data-group": true,
        get ["data-focus"]() {
          return state["data-focus"];
        },
        get ["data-checked"]() {
          return state["data-checked"];
        },
        get ["data-required"]() {
          return state["data-required"];
        },
        get ["data-disabled"]() {
          return state["data-disabled"];
        },
        get ["data-invalid"]() {
          return state["data-invalid"];
        },
        get ["data-readonly"]() {
          return state["data-readonly"];
        }
      }, others, {
        get children() {
          return [(() => {
            const _el$ = _tmpl$$6.cloneNode(true);
            _el$.addEventListener("blur", onBlur);
            _el$.addEventListener("focus", onFocus);
            _el$.addEventListener("change", onChange);
            const _ref$ = local.ref;
            typeof _ref$ === "function" ? _ref$(_el$) : local.ref = _el$;
            effect((_p$) => {
              const _v$ = inputClasses(), _v$2 = local.tabIndex, _v$3 = state.value, _v$4 = state.id, _v$5 = state.name, _v$6 = state.checked, _v$7 = state.required, _v$8 = state.disabled, _v$9 = state.readOnly, _v$10 = state["aria-required"], _v$11 = state["aria-disabled"], _v$12 = state["aria-invalid"], _v$13 = state["aria-readonly"], _v$14 = state["aria-label"], _v$15 = state["aria-labelledby"], _v$16 = state["aria-describedby"];
              _v$ !== _p$._v$ && (_el$.className = _p$._v$ = _v$);
              _v$2 !== _p$._v$2 && setAttribute(_el$, "tabindex", _p$._v$2 = _v$2);
              _v$3 !== _p$._v$3 && (_el$.value = _p$._v$3 = _v$3);
              _v$4 !== _p$._v$4 && setAttribute(_el$, "id", _p$._v$4 = _v$4);
              _v$5 !== _p$._v$5 && setAttribute(_el$, "name", _p$._v$5 = _v$5);
              _v$6 !== _p$._v$6 && (_el$.checked = _p$._v$6 = _v$6);
              _v$7 !== _p$._v$7 && (_el$.required = _p$._v$7 = _v$7);
              _v$8 !== _p$._v$8 && (_el$.disabled = _p$._v$8 = _v$8);
              _v$9 !== _p$._v$9 && (_el$.readOnly = _p$._v$9 = _v$9);
              _v$10 !== _p$._v$10 && setAttribute(_el$, "aria-required", _p$._v$10 = _v$10);
              _v$11 !== _p$._v$11 && setAttribute(_el$, "aria-disabled", _p$._v$11 = _v$11);
              _v$12 !== _p$._v$12 && setAttribute(_el$, "aria-invalid", _p$._v$12 = _v$12);
              _v$13 !== _p$._v$13 && setAttribute(_el$, "aria-readonly", _p$._v$13 = _v$13);
              _v$14 !== _p$._v$14 && setAttribute(_el$, "aria-label", _p$._v$14 = _v$14);
              _v$15 !== _p$._v$15 && setAttribute(_el$, "aria-labelledby", _p$._v$15 = _v$15);
              _v$16 !== _p$._v$16 && setAttribute(_el$, "aria-describedby", _p$._v$16 = _v$16);
              return _p$;
            }, {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0,
              _v$4: void 0,
              _v$5: void 0,
              _v$6: void 0,
              _v$7: void 0,
              _v$8: void 0,
              _v$9: void 0,
              _v$10: void 0,
              _v$11: void 0,
              _v$12: void 0,
              _v$13: void 0,
              _v$14: void 0,
              _v$15: void 0,
              _v$16: void 0
            });
            return _el$;
          })(), createComponent(hope.span, mergeProps$1({
            "aria-hidden": true,
            get ["class"]() {
              return controlClasses();
            },
            get __baseStyle() {
              var _a;
              return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.control;
            },
            get ["data-focus"]() {
              return state["data-focus"];
            },
            get ["data-checked"]() {
              return state["data-checked"];
            },
            get ["data-required"]() {
              return state["data-required"];
            },
            get ["data-disabled"]() {
              return state["data-disabled"];
            },
            get ["data-invalid"]() {
              return state["data-invalid"];
            },
            get ["data-readonly"]() {
              return state["data-readonly"];
            }
          }, others)), createComponent(hope.span, {
            get ["class"]() {
              return labelClasses();
            },
            get __baseStyle() {
              var _a;
              return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.label;
            },
            get ["data-focus"]() {
              return state["data-focus"];
            },
            get ["data-checked"]() {
              return state["data-checked"];
            },
            get ["data-required"]() {
              return state["data-required"];
            },
            get ["data-disabled"]() {
              return state["data-disabled"];
            },
            get ["data-invalid"]() {
              return state["data-invalid"];
            },
            get ["data-readonly"]() {
              return state["data-readonly"];
            },
            get children() {
              return createComponent(Show, {
                get when() {
                  return isChildrenFunction(local);
                },
                get fallback() {
                  return local.children;
                },
                get children() {
                  var _a;
                  return (_a = local.children) == null ? void 0 : _a.call(local, {
                    checked: state.checked
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
Radio.toString = () => createClassSelector(hopeRadioClass);
const RadioContext = createContext();
function useRadioContext() {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error("[Hope UI]: useRadioContext must be used within a `<Radio />` component");
  }
  return context;
}
var SelectActions = /* @__PURE__ */ ((SelectActions2) => {
  SelectActions2[SelectActions2["Close"] = 0] = "Close";
  SelectActions2[SelectActions2["SelectAndClose"] = 1] = "SelectAndClose";
  SelectActions2[SelectActions2["First"] = 2] = "First";
  SelectActions2[SelectActions2["Last"] = 3] = "Last";
  SelectActions2[SelectActions2["Next"] = 4] = "Next";
  SelectActions2[SelectActions2["Open"] = 5] = "Open";
  SelectActions2[SelectActions2["Previous"] = 6] = "Previous";
  SelectActions2[SelectActions2["Select"] = 7] = "Select";
  SelectActions2[SelectActions2["Type"] = 8] = "Type";
  return SelectActions2;
})(SelectActions || {});
function filterOptions(options = [], filter, exclude = []) {
  return options.filter((option) => {
    if (option.disabled) {
      return false;
    }
    const matches = option.textValue.toLowerCase().indexOf(filter.toLowerCase()) === 0;
    return matches && exclude.indexOf(option.textValue) < 0;
  });
}
function getIndexByLetter(options, filter, startIndex = 0) {
  const orderedOptions = [...options.slice(startIndex), ...options.slice(0, startIndex)];
  const firstMatch = filterOptions(orderedOptions, filter)[0];
  const allSameLetter = (array) => array.every((letter) => letter === array[0]);
  if (firstMatch) {
    return options.indexOf(firstMatch);
  } else if (allSameLetter(filter.split(""))) {
    const matches = filterOptions(orderedOptions, filter[0]);
    return options.indexOf(matches[0]);
  } else {
    return -1;
  }
}
function getActionFromKey(event, menuOpen) {
  const { key, altKey, ctrlKey, metaKey } = event;
  const openKeys = ["ArrowDown", "ArrowUp", "Enter", " "];
  if (!menuOpen && openKeys.includes(key)) {
    return 5;
  }
  if (key === "Home" || key === "PageUp") {
    return 2;
  }
  if (key === "End" || key === "PageDown") {
    return 3;
  }
  if (key === "Backspace" || key === "Clear" || key.length === 1 && key !== " " && !altKey && !ctrlKey && !metaKey) {
    return 8;
  }
  if (menuOpen) {
    if (key === "ArrowUp" && altKey) {
      return 1;
    } else if (key === "ArrowDown" && !altKey) {
      return 4;
    } else if (key === "ArrowUp") {
      return 6;
    } else if (key === "Escape") {
      return 0;
    } else if (key === "Enter" || key === " ") {
      return 1;
    }
  }
}
function calculateActiveIndex(currentIndex, maxIndex, action) {
  switch (action) {
    case 2:
      return 0;
    case 3:
      return maxIndex;
    case 6:
      return Math.max(0, currentIndex - 1);
    case 4:
      return Math.min(maxIndex, currentIndex + 1);
    default:
      return currentIndex;
  }
}
function getUpdatedIndex(params) {
  const { currentIndex, maxIndex, initialAction, isOptionDisabled } = params;
  let nextIndex = calculateActiveIndex(currentIndex, maxIndex, initialAction);
  while (isOptionDisabled(nextIndex)) {
    let nextAction = initialAction;
    const isNextIndexFirst = nextIndex === 0;
    const isNextIndexLast = nextIndex === maxIndex;
    if (initialAction === 2) {
      nextAction = 4;
    }
    if (initialAction === 3) {
      nextAction = 6;
    }
    if (initialAction === 6 && isNextIndexFirst) {
      nextIndex = currentIndex;
      break;
    }
    if (initialAction === 4 && isNextIndexLast) {
      nextIndex = currentIndex;
      break;
    }
    nextIndex = calculateActiveIndex(nextIndex, maxIndex, nextAction);
  }
  return nextIndex;
}
function isOptionEqual(a, b) {
  return String(a.value) === String(b.value);
}
function Select(props) {
  const defaultBaseId = `hope-select-${createUniqueId()}`;
  const theme = useStyleConfig().Select;
  const formControlProps = useFormControl(props);
  const [initialized, setInitialized] = createSignal(false);
  const [_options, _setOptions] = createSignal([]);
  const [state, setState] = createStore({
    get isControlled() {
      return props.value !== void 0;
    },
    get value() {
      var _a;
      if (this.isControlled) {
        return props.value;
      }
      if (this.multiple) {
        return this.selectedOptions.map((option) => option.value);
      }
      return (_a = this.selectedOptions[0].value) != null ? _a : void 0;
    },
    get multiple() {
      return props.multiple;
    },
    get baseId() {
      var _a, _b;
      return (_b = (_a = props.id) != null ? _a : formControlProps.id) != null ? _b : defaultBaseId;
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
      var _a;
      return (_a = props.disabled) != null ? _a : formControlProps.disabled;
    },
    get invalid() {
      var _a;
      return (_a = props.invalid) != null ? _a : formControlProps.invalid;
    },
    get variant() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.variant) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.variant) != null ? _d : "outline";
    },
    get size() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.size) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.size) != null ? _d : "md";
    },
    get motionPreset() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.motionPreset) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.motionPreset) != null ? _d : "fade-in-top";
    },
    get activeDescendantId() {
      return this.opened ? `${this.optionIdPrefix}-${this.activeIndex}` : void 0;
    },
    get hasSelectedOptions() {
      return this.selectedOptions.length > 0;
    },
    get options() {
      return _options();
    },
    selectedOptions: [],
    opened: false,
    activeIndex: 0,
    ignoreBlur: false,
    searchString: "",
    searchTimeoutId: void 0
  });
  let triggerRef;
  let contentRef;
  let listboxRef;
  let cleanupContentAutoUpdate;
  const updateContentPosition = async () => {
    var _a, _b, _c, _d;
    if (!triggerRef || !contentRef) {
      return;
    }
    const {
      x,
      y
    } = await computePosition(triggerRef, contentRef, {
      placement: "bottom",
      middleware: [offset((_d = (_c = props.offset) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.offset) != null ? _d : 5), flip(), shift(), size$1({
        apply({
          reference
        }) {
          if (!contentRef) {
            return;
          }
          Object.assign(contentRef.style, {
            width: `${reference.width}px`
          });
        }
      })]
    });
    if (!contentRef) {
      return;
    }
    Object.assign(contentRef.style, {
      left: `${Math.round(x)}px`,
      top: `${Math.round(y)}px`
    });
  };
  const getSearchString = (char) => {
    if (state.searchTimeoutId) {
      window.clearTimeout(state.searchTimeoutId);
    }
    const searchTimeoutId = window.setTimeout(() => {
      setState("searchString", "");
    }, 500);
    setState("searchTimeoutId", searchTimeoutId);
    setState("searchString", (searchString) => searchString += char);
    return state.searchString;
  };
  const focusTrigger = () => {
    triggerRef == null ? void 0 : triggerRef.focus();
  };
  const getDefaultSelectedValues = () => {
    if (state.isControlled) {
      if (props.value == null) {
        return [];
      }
      return isArray(props.value) ? props.value : [props.value];
    } else {
      if (props.defaultValue == null) {
        return [];
      }
      return isArray(props.defaultValue) ? props.defaultValue : [props.defaultValue];
    }
  };
  const initSelectedOptions = () => {
    if (initialized()) {
      return;
    }
    const selectedOptions = getDefaultSelectedValues().map((value) => state.options.find((option) => option.value === value)).filter(Boolean);
    setState("selectedOptions", (prev) => [...prev, ...selectedOptions]);
    setInitialized(true);
  };
  const onOptionChange = (index) => {
    setState("activeIndex", index);
  };
  const isOptionSelected = (option) => {
    if (state.selectedOptions.length <= 0) {
      return false;
    }
    if (state.multiple) {
      return !!state.selectedOptions.find((selectedOption) => isOptionEqual(option, selectedOption));
    } else {
      return isOptionEqual(option, state.selectedOptions[0]);
    }
  };
  const removeFromSelectedOptions = (selectedOption) => {
    setState("selectedOptions", (prev) => prev.filter((option) => !isOptionEqual(selectedOption, option)));
  };
  const setSelectedOptions = (index) => {
    const newSelectedOption = state.options[index];
    if (state.multiple) {
      if (isOptionSelected(newSelectedOption)) {
        removeFromSelectedOptions(newSelectedOption);
      } else {
        setState("selectedOptions", (prev) => [...prev, newSelectedOption]);
      }
    } else {
      setState("selectedOptions", [newSelectedOption]);
    }
  };
  const getSelectedValue = () => {
    var _a;
    if (state.multiple) {
      return state.selectedOptions.map((item) => item.value);
    } else {
      return (_a = state.selectedOptions[0].value) != null ? _a : void 0;
    }
  };
  const selectOption = (index) => {
    var _a;
    onOptionChange(index);
    setSelectedOptions(index);
    (_a = props.onChange) == null ? void 0 : _a.call(props, getSelectedValue());
  };
  const unselectOption = (selectedOption) => {
    var _a;
    removeFromSelectedOptions(selectedOption);
    (_a = props.onChange) == null ? void 0 : _a.call(props, getSelectedValue());
    focusTrigger();
  };
  const isOptionDisabledCallback = (index) => {
    return state.options[index].disabled;
  };
  const onTriggerBlur = (event) => {
    if (contains(triggerRef, getRelatedTarget(event))) {
      return;
    }
    if (state.ignoreBlur) {
      setState("ignoreBlur", false);
      return;
    }
    if (state.opened) {
      updateOpeningState(false, false);
    }
  };
  const onTriggerClick = () => {
    if (formControlProps.readOnly) {
      return;
    }
    updateOpeningState(!state.opened, false);
  };
  const onTriggerKeyDown = (event) => {
    if (formControlProps.readOnly) {
      return;
    }
    const {
      key
    } = event;
    if (state.hasSelectedOptions && state.multiple && key === "Backspace") {
      unselectOption(state.selectedOptions[state.selectedOptions.length - 1]);
      return;
    }
    const max = state.options.length - 1;
    const action = getActionFromKey(event, state.opened);
    switch (action) {
      case SelectActions.Last:
      case SelectActions.First:
        updateOpeningState(true);
      case SelectActions.Next:
      case SelectActions.Previous:
        event.preventDefault();
        return onOptionChange(getUpdatedIndex({
          currentIndex: state.activeIndex,
          maxIndex: max,
          initialAction: action,
          isOptionDisabled: isOptionDisabledCallback
        }));
      case SelectActions.SelectAndClose:
        event.preventDefault();
        selectOption(state.activeIndex);
        return state.multiple ? void 0 : updateOpeningState(false);
      case SelectActions.Close:
        event.preventDefault();
        return updateOpeningState(false);
      case SelectActions.Type:
        return onTriggerType(key);
      case SelectActions.Open:
        event.preventDefault();
        return updateOpeningState(true);
    }
  };
  const onTriggerType = (letter) => {
    if (formControlProps.readOnly) {
      return;
    }
    updateOpeningState(true);
    const searchString = getSearchString(letter);
    const searchIndex = getIndexByLetter(state.options, searchString, state.activeIndex + 1);
    if (searchIndex >= 0) {
      onOptionChange(searchIndex);
    } else {
      window.clearTimeout(state.searchTimeoutId);
      setState("searchString", "");
    }
  };
  const onOptionClick = (index) => {
    if (state.options[index].disabled) {
      focusTrigger();
      return;
    }
    selectOption(index);
    if (state.multiple) {
      focusTrigger();
    } else {
      updateOpeningState(false);
    }
  };
  const onOptionMouseMove = (index) => {
    if (state.activeIndex === index) {
      return;
    }
    onOptionChange(index);
  };
  const onOptionMouseDown = () => {
    setState("ignoreBlur", true);
  };
  const setDefaultActiveOption = () => {
    if (state.selectedOptions.length > 0) {
      setState("activeIndex", state.options.findIndex((option) => isOptionSelected(option)));
    } else {
      setState("activeIndex", 0);
    }
  };
  const scheduleContentPositionAutoUpdate = () => {
    if (state.opened) {
      updateContentPosition();
      if (triggerRef && contentRef) {
        cleanupContentAutoUpdate = autoUpdate(triggerRef, contentRef, updateContentPosition);
      }
    } else {
      cleanupContentAutoUpdate == null ? void 0 : cleanupContentAutoUpdate();
    }
  };
  const updateOpeningState = (opened, callFocus = true) => {
    if (state.opened === opened) {
      return;
    }
    setState("opened", opened);
    setDefaultActiveOption();
    scheduleContentPositionAutoUpdate();
    callFocus && focusTrigger();
  };
  const onListboxMouseLeave = () => {
    onOptionChange(-1);
  };
  const onContentClickOutside = (target) => {
    if (contains(triggerRef, target)) {
      return;
    }
    updateOpeningState(false, false);
  };
  const isOptionActiveDescendant = (index) => {
    return index === state.activeIndex;
  };
  const assignTriggerRef = (el) => {
    triggerRef = el;
  };
  const assignContentRef = (el) => {
    contentRef = el;
  };
  const assignListboxRef = (el) => {
    listboxRef = el;
  };
  const scrollToOption = (optionRef) => {
    if (!listboxRef) {
      return;
    }
    if (isScrollable(listboxRef)) {
      maintainScrollVisibility(optionRef, listboxRef);
    }
  };
  const registerOption = (optionData) => {
    const index = state.options.findIndex((option) => isOptionEqual(option, optionData));
    if (index != -1) {
      return index;
    }
    const updatedOptions = _setOptions((prev) => [...prev, optionData]);
    return updatedOptions.length - 1;
  };
  createEffect(on(() => state.options, () => initSelectedOptions(), {
    defer: true
  }));
  createEffect(on(() => props.value, () => {
    if (!state.isControlled) {
      return;
    }
    const controlledValues = isArray(props.value) ? props.value : [props.value];
    const selectedOptions = controlledValues.map((value) => state.options.find((option) => option.value === value)).filter(Boolean);
    setState("selectedOptions", selectedOptions);
  }, {
    defer: true
  }));
  createEffect(on(() => state.opened, (newValue) => {
    if (!newValue) {
      return;
    }
    setTimeout(() => {
      const firstSelectedOption = listboxRef == null ? void 0 : listboxRef.querySelector("[role='option'][aria-selected='true']");
      if (firstSelectedOption) {
        scrollToOption(firstSelectedOption);
      }
    }, 0);
  }));
  const context = {
    state,
    isOptionSelected,
    unselectOption,
    isOptionActiveDescendant,
    formControlProps,
    assignTriggerRef,
    assignContentRef,
    assignListboxRef,
    registerOption,
    scrollToOption,
    onContentClickOutside,
    onTriggerBlur,
    onTriggerClick,
    onTriggerKeyDown,
    onOptionClick,
    onOptionMouseMove,
    onOptionMouseDown,
    onListboxMouseLeave
  };
  return createComponent(SelectContext.Provider, {
    value: context,
    get children() {
      return props.children;
    }
  });
}
const SelectContext = createContext();
function useSelectContext() {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("[Hope UI]: useSelectContext must be used within a `<Select />` component");
  }
  return context;
}
const hopeSelectContentClass = "hope-select__content";
function SelectContent(props) {
  const theme = useStyleConfig().Select;
  const selectContext = useSelectContext();
  const [local, others] = splitProps(props, ["ref", "class", "children"]);
  const [isPortalMounted, setIsPortalMounted] = createSignal(false);
  createEffect(on(() => selectContext.state.opened, () => {
    if (selectContext.state.opened) {
      setIsPortalMounted(true);
    } else {
      selectContext.state.motionPreset === "none" && setIsPortalMounted(false);
    }
  }));
  const unmountPortal = () => setIsPortalMounted(false);
  const classes = () => classNames(local.class, hopeSelectContentClass, selectContentStyles());
  const resolvedChildren = children(() => local.children);
  const assignContentRef = (el) => {
    selectContext.assignContentRef(el);
    if (isFunction(local.ref)) {
      local.ref(el);
    } else {
      local.ref = el;
    }
  };
  const onClickOutside = (event) => {
    selectContext.onContentClickOutside(event.target);
  };
  const transitionName = () => {
    switch (selectContext.state.motionPreset) {
      case "fade-in-top":
        return selectTransitionName.fadeInTop;
      case "none":
        return "hope-none";
    }
  };
  return createComponent(Show, {
    get when() {
      return isPortalMounted();
    },
    get children() {
      return createComponent(Portal, {
        get children() {
          return createComponent(Transition, {
            get name() {
              return transitionName();
            },
            appear: true,
            onAfterExit: unmountPortal,
            get children() {
              return createComponent(Show, {
                get when() {
                  return selectContext.state.opened;
                },
                get children() {
                  return createComponent(ClickOutside, {
                    onClickOutside,
                    get children() {
                      return createComponent(Box, mergeProps$1({
                        ref: assignContentRef,
                        get ["class"]() {
                          return classes();
                        },
                        get __baseStyle() {
                          var _a;
                          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.content;
                        }
                      }, others, {
                        get children() {
                          return resolvedChildren();
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
SelectContent.toString = () => createClassSelector(hopeSelectContentClass);
const _tmpl$$5 = /* @__PURE__ */ template(`<svg><path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`, 4, true);
const IconSelector = createIcon({
  viewBox: "0 0 15 15",
  path: () => _tmpl$$5.cloneNode(true)
});
const hopeSelectIconClass = "hope-select__icon";
function SelectIcon(props) {
  const theme = useStyleConfig().Select;
  const selectContext = useSelectContext();
  const [local, others] = splitProps(props, ["class", "rotateOnOpen"]);
  const classes = () => {
    return classNames(local.class, hopeSelectIconClass, selectIconStyles(local.rotateOnOpen ? {
      opened: selectContext.state.opened
    } : void 0));
  };
  return createComponent(IconSelector, mergeProps$1({
    "aria-hidden": true,
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.icon;
    }
  }, others));
}
SelectIcon.toString = () => createClassSelector(hopeSelectIconClass);
const SelectOptGroupContext = createContext();
const hopeSelectOptGroupClass = "hope-select__optgroup";
function SelectOptGroup(props) {
  const theme = useStyleConfig().Select;
  const [ariaLabelledBy, setAriaLabelledBy] = createSignal();
  const [local, others] = splitProps(props, ["class", "children"]);
  const classes = () => classNames(local.class, hopeSelectOptGroupClass, selectOptGroupStyles());
  const context = {
    setAriaLabelledBy
  };
  return createComponent(SelectOptGroupContext.Provider, {
    value: context,
    get children() {
      return createComponent(Box, mergeProps$1({
        role: "group",
        get ["aria-labelledby"]() {
          return ariaLabelledBy();
        },
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.optgroup;
        }
      }, others, {
        get children() {
          return local.children;
        }
      }));
    }
  });
}
SelectOptGroup.toString = () => createClassSelector(hopeSelectOptGroupClass);
function useSelectOptGroupContext() {
  return useContext(SelectOptGroupContext);
}
const hopeSelectLabelClass = "hope-select__label";
function SelectLabel(props) {
  const defaultIdSuffix = createUniqueId();
  const theme = useStyleConfig().Select;
  const selectContext = useSelectContext();
  const selectOptGroupContext = useSelectOptGroupContext();
  const [local, others] = splitProps(props, ["class", "id"]);
  const id = () => {
    var _a;
    return (_a = local.id) != null ? _a : `${selectContext.state.labelIdPrefix}-${defaultIdSuffix}`;
  };
  const classes = () => classNames(local.class, hopeSelectLabelClass, selectLabelStyles());
  onMount(() => {
    selectOptGroupContext == null ? void 0 : selectOptGroupContext.setAriaLabelledBy(id());
  });
  return createComponent(Box, mergeProps$1({
    get id() {
      return id();
    },
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.label;
    }
  }, others));
}
SelectLabel.toString = () => createClassSelector(hopeSelectLabelClass);
const hopeSelectListboxClass = "hope-select__listbox";
function SelectListbox(props) {
  const theme = useStyleConfig().Select;
  const selectContext = useSelectContext();
  const [local, others] = splitProps(props, ["ref", "class"]);
  const classes = () => classNames(local.class, hopeSelectListboxClass, selectListboxStyles());
  const assignListboxRef = (el) => {
    selectContext.assignListboxRef(el);
    if (isFunction(local.ref)) {
      local.ref(el);
    } else {
      local.ref = el;
    }
  };
  const onMouseDown = (event) => {
    event.preventDefault();
  };
  return createComponent(Box, mergeProps$1({
    ref: assignListboxRef,
    role: "listbox",
    tabindex: "-1",
    get id() {
      return selectContext.state.listboxId;
    },
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.listbox;
    },
    get onMouseLeave() {
      return selectContext.onListboxMouseLeave;
    },
    onMouseDown
  }, others));
}
SelectListbox.toString = () => createClassSelector(hopeSelectListboxClass);
const SelectOptionContext = createContext();
const hopeSelectOptionClass = "hope-select__option";
function SelectOption(props) {
  const theme = useStyleConfig().Select;
  const selectContext = useSelectContext();
  const [index, setIndex] = createSignal(-1);
  let optionRef;
  const [local, others] = splitProps(props, ["ref", "class", "value", "textValue", "disabled"]);
  const optionData = () => {
    var _a, _b;
    return {
      value: local.value,
      textValue: (_b = (_a = local.textValue) != null ? _a : optionRef == null ? void 0 : optionRef.textContent) != null ? _b : String(local.value),
      disabled: !!local.disabled
    };
  };
  const id = () => `${selectContext.state.optionIdPrefix}-${index()}`;
  const isSelected = () => selectContext.isOptionSelected(optionData());
  const isActiveDescendant = () => selectContext.isOptionActiveDescendant(index());
  const classes = () => {
    return classNames(local.class, hopeSelectOptionClass, selectOptionStyles());
  };
  const assignOptionRef = (el) => {
    optionRef = el;
    if (isFunction(local.ref)) {
      local.ref(el);
    } else {
      local.ref = el;
    }
  };
  const onOptionClick = (event) => {
    event.stopPropagation();
    selectContext.onOptionClick(index());
  };
  const onOptionMouseMove = (event) => {
    if (local.disabled) {
      selectContext.onOptionMouseMove(-1);
    }
    if (isActiveDescendant() || local.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    selectContext.onOptionMouseMove(index());
  };
  const context = {
    selected: isSelected
  };
  onMount(() => {
    setIndex(selectContext.registerOption(optionData()));
  });
  createEffect(() => {
    if (isActiveDescendant() && optionRef) {
      selectContext.scrollToOption(optionRef);
    }
  });
  return createComponent(SelectOptionContext.Provider, {
    value: context,
    get children() {
      return createComponent(Box, mergeProps$1({
        ref: assignOptionRef,
        role: "option",
        get id() {
          return id();
        },
        get ["aria-selected"]() {
          return isSelected();
        },
        get ["data-active"]() {
          return isActiveDescendant() ? "" : void 0;
        },
        get ["data-disabled"]() {
          return local.disabled ? "" : void 0;
        },
        "data-group": true,
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.option;
        },
        onClick: onOptionClick,
        onMouseMove: onOptionMouseMove,
        get onMouseDown() {
          return selectContext.onOptionMouseDown;
        }
      }, others));
    }
  });
}
SelectOption.toString = () => createClassSelector(hopeSelectOptionClass);
function useSelectOptionContext() {
  const context = useContext(SelectOptionContext);
  if (!context) {
    throw new Error("[Hope UI]: useSelectOptionContext must be used within a `<Select.Option />` component");
  }
  return context;
}
const _tmpl$$4 = /* @__PURE__ */ template(`<svg><g fill="none"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></g></svg>`, 6, true);
const IconCheck = createIcon({
  viewBox: "0 0 15 15",
  path: () => _tmpl$$4.cloneNode(true)
});
const hopeSelectOptionIndicatorClass = "hope-select__option-indicator";
function SelectOptionIndicator(props) {
  const theme = useStyleConfig().Select;
  const selectOptionContext = useSelectOptionContext();
  const [local, others] = splitProps(props, ["class", "children"]);
  const classes = () => classNames(local.class, hopeSelectOptionIndicatorClass, selectOptionIndicatorStyles());
  return createComponent(Show, {
    get when() {
      return selectOptionContext.selected();
    },
    get children() {
      return createComponent(hope.span, mergeProps$1({
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.optionIndicator;
        }
      }, others, {
        get children() {
          return createComponent(Show, {
            get when() {
              return local.children;
            },
            get fallback() {
              return createComponent(IconCheck, {
                "aria-hidden": "true",
                boxSize: "$5"
              });
            },
            get children() {
              return local.children;
            }
          });
        }
      }));
    }
  });
}
SelectOptionIndicator.toString = () => createClassSelector(hopeSelectOptionIndicatorClass);
const hopeSelectOptionTextClass = "hope-select__option-text";
function SelectOptionText(props) {
  const theme = useStyleConfig().Select;
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeSelectOptionTextClass, selectOptionTextStyles());
  return createComponent(hope.span, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.optionText;
    }
  }, others));
}
SelectOptionText.toString = () => createClassSelector(hopeSelectOptionTextClass);
const hopeSelectPlaceholderClass = "hope-select__placeholder";
function SelectPlaceholder(props) {
  const theme = useStyleConfig().Select;
  const selectContext = useSelectContext();
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeSelectPlaceholderClass, selectPlaceholderStyles());
  return createComponent(Show, {
    get when() {
      return !selectContext.state.hasSelectedOptions;
    },
    get children() {
      return createComponent(hope.span, mergeProps$1({
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.placeholder;
        }
      }, others));
    }
  });
}
SelectPlaceholder.toString = () => createClassSelector(hopeSelectPlaceholderClass);
const hopeSelectTagClass = "hope-select__tag";
function SelectTag(props) {
  const theme = useStyleConfig().Select;
  const selectContext = useSelectContext();
  const [local, others] = splitProps(props, ["class", "size", "variant"]);
  const classes = () => {
    var _a, _b, _c;
    return classNames(local.class, hopeSelectTagClass, selectTagStyles({
      size: (_b = (_a = local.size) != null ? _a : selectContext.state.size) != null ? _b : "md",
      variant: ((_c = local.variant) != null ? _c : selectContext.state.variant === "filled") ? "outline" : "subtle"
    }));
  };
  return createComponent(hope.span, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.tag;
    }
  }, others));
}
SelectTag.toString = () => createClassSelector(hopeSelectTagClass);
const _tmpl$$3 = /* @__PURE__ */ template(`<svg><g fill="none"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></g></svg>`, 6, true);
const IconCloseSmall = createIcon({
  viewBox: "0 0 15 15",
  path: () => _tmpl$$3.cloneNode(true)
});
const hopeSelectTagCloseButtonClass = "hope-select__tag-close-button";
function SelectTagCloseButton(props) {
  const theme = useStyleConfig().Select;
  const [local, others] = splitProps(props, ["class", "children"]);
  const classes = () => classNames(local.class, hopeSelectTagCloseButtonClass, selectTagCloseButtonStyles());
  return createComponent(hope.button, mergeProps$1({
    role: "button",
    type: "button",
    "aria-label": "Delete",
    tabIndex: "-1",
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.tagCloseButton;
    }
  }, others, {
    get children() {
      return createComponent(Show, {
        get when() {
          return local.children;
        },
        get fallback() {
          return createComponent(IconCloseSmall, {});
        },
        get children() {
          return local.children;
        }
      });
    }
  }));
}
SelectTagCloseButton.toString = () => createClassSelector(hopeSelectTagCloseButtonClass);
const hopeSelectTriggerClass = "hope-select__trigger";
function SelectTrigger(props) {
  const theme = useStyleConfig().Select;
  const selectContext = useSelectContext();
  const [local, others] = splitProps(props, ["ref", "class", "onClick", "onKeyDown", "onFocus", "onBlur"]);
  const classes = () => {
    return classNames(local.class, hopeSelectTriggerClass, selectTriggerStyles({
      variant: selectContext.state.variant,
      size: selectContext.state.size
    }));
  };
  const assignTriggerRef = (el) => {
    selectContext.assignTriggerRef(el);
    if (isFunction(local.ref)) {
      local.ref(el);
    } else {
      local.ref = el;
    }
  };
  const onClick = (event) => {
    chainHandlers(selectContext.onTriggerClick, local.onClick)(event);
  };
  const onKeyDown = (event) => {
    chainHandlers(selectContext.onTriggerKeyDown, local.onKeyDown)(event);
  };
  const onFocus = (event) => {
    chainHandlers(selectContext.formControlProps.onFocus, local.onFocus)(event);
  };
  const onBlur = (event) => {
    chainHandlers(selectContext.onTriggerBlur, selectContext.formControlProps.onBlur, local.onBlur)(event);
  };
  return createComponent(hope.button, mergeProps$1({
    ref: assignTriggerRef,
    get id() {
      return selectContext.state.triggerId;
    },
    get disabled() {
      return selectContext.state.disabled;
    },
    role: "combobox",
    type: "button",
    tabindex: "0",
    "aria-haspopup": "listbox",
    get ["aria-activedescendant"]() {
      return selectContext.state.activeDescendantId;
    },
    get ["aria-controls"]() {
      return selectContext.state.listboxId;
    },
    get ["aria-expanded"]() {
      return selectContext.state.opened;
    },
    get ["aria-required"]() {
      return selectContext.formControlProps["aria-required"];
    },
    get ["aria-invalid"]() {
      return selectContext.formControlProps["aria-invalid"];
    },
    get ["aria-readonly"]() {
      return selectContext.formControlProps["aria-readonly"];
    },
    get ["aria-describedby"]() {
      return selectContext.formControlProps["aria-describedby"];
    },
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.trigger;
    },
    onClick,
    onKeyDown,
    onFocus,
    onBlur
  }, others));
}
SelectTrigger.toString = () => createClassSelector(hopeSelectTriggerClass);
const _tmpl$$2 = /* @__PURE__ */ template(`<span></span>`, 2);
const hopeSelectValueClass = "hope-select__value";
function SelectValue(props) {
  const theme = useStyleConfig().Select;
  const selectContext = useSelectContext();
  const [local, others] = splitProps(props, ["class", "children"]);
  const singleValueClasses = () => classNames(local.class, hopeSelectValueClass, selectSingleValueStyles());
  const multiValueClasses = () => {
    return classNames(local.class, hopeSelectValueClass, selectMultiValueStyles({
      size: selectContext.state.size
    }));
  };
  const onTagCloseButtonClick = (event, option) => {
    event.preventDefault();
    event.stopPropagation();
    selectContext.unselectOption(option);
  };
  const resolvedChildren = children(() => {
    var _a;
    if (isChildrenFunction(local)) {
      return (_a = local.children) == null ? void 0 : _a.call(local, {
        selectedOptions: selectContext.state.selectedOptions
      });
    }
    return local.children;
  });
  return createComponent(Show, {
    get when() {
      return selectContext.state.hasSelectedOptions;
    },
    get children() {
      return createComponent(Show, {
        get when() {
          return !resolvedChildren();
        },
        get fallback() {
          return resolvedChildren();
        },
        get children() {
          return createComponent(Show, {
            get when() {
              return selectContext.state.multiple;
            },
            get fallback() {
              return createComponent(Box, mergeProps$1({
                get ["class"]() {
                  return singleValueClasses();
                },
                get __baseStyle() {
                  var _a;
                  return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.singleValue;
                }
              }, others, {
                get children() {
                  return selectContext.state.selectedOptions[0].textValue;
                }
              }));
            },
            get children() {
              return createComponent(Box, mergeProps$1({
                get ["class"]() {
                  return multiValueClasses();
                },
                get __baseStyle() {
                  var _a;
                  return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.multiValue;
                }
              }, others, {
                get children() {
                  return createComponent(For, {
                    get each() {
                      return selectContext.state.selectedOptions;
                    },
                    children: (option) => createComponent(SelectTag, {
                      get children() {
                        return [(() => {
                          const _el$ = _tmpl$$2.cloneNode(true);
                          insert(_el$, () => option.textValue);
                          return _el$;
                        })(), createComponent(SelectTagCloseButton, {
                          onClick: (e) => onTagCloseButtonClick(e, option)
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
SelectValue.toString = () => createClassSelector(hopeSelectValueClass);
function SimpleOption(props) {
  const [local, others] = splitProps(props, ["children", "value"]);
  return createComponent(SelectOption, mergeProps$1({
    get value() {
      return local.value;
    }
  }, others, {
    get children() {
      return [createComponent(SelectOptionText, {
        get children() {
          return local.children;
        }
      }), createComponent(SelectOptionIndicator, {})];
    }
  }));
}
function SimpleSelect(props) {
  const [local, selectProps, others] = splitProps(props, ["children", "placeholder"], ["variant", "size", "offset", "id", "multiple", "value", "defaultValue", "required", "disabled", "invalid", "readOnly", "onChange", "onFocus", "onBlur"]);
  return createComponent(Select, mergeProps$1(selectProps, {
    get children() {
      return [createComponent(SelectTrigger, mergeProps$1(others, {
        get children() {
          return [createComponent(Show, {
            get when() {
              return local.placeholder;
            },
            get children() {
              return createComponent(SelectPlaceholder, {
                get children() {
                  return local.placeholder;
                }
              });
            }
          }), createComponent(SelectValue, {}), createComponent(SelectIcon, {})];
        }
      })), createComponent(SelectContent, {
        get children() {
          return createComponent(SelectListbox, {
            get children() {
              return local.children;
            }
          });
        }
      })];
    }
  }));
}
const skeletonColorFade = keyframes({
  from: {
    borderColor: "$$startColor",
    background: "$$startColor"
  },
  to: {
    borderColor: "$$endColor",
    background: "$$endColor"
  }
});
const skeletonStyles = css({
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
  animationName: `${skeletonColorFade()}`,
  "&::before, &::after, *": {
    visibility: "hidden"
  }
});
const hopeSkeletonClass = "hope-skeleton";
function Skeleton(props) {
  const [loadedAnimation, setLoadedAnimation] = createSignal("none");
  const defaultProps = {
    speed: "800ms",
    fadeDuration: "400ms"
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["class", "startColor", "endColor", "loaded", "speed", "fadeDuration"]);
  const skeletonClasses = () => {
    var _a, _b;
    return classNames(local.class, hopeSkeletonClass, local.loaded ? void 0 : skeletonStyles({
      css: {
        $$startColor: colorTokenToCssVar((_a = local.startColor) != null ? _a : "$neutral2"),
        $$endColor: colorTokenToCssVar((_b = local.endColor) != null ? _b : "$neutral8"),
        animationDuration: local.speed
      }
    }));
  };
  createEffect(on(() => local.loaded, (_, prev) => setLoadedAnimation(prev === true ? "none" : `${fadeIn()} ${local.fadeDuration}`), {
    defer: true
  }));
  return createComponent(Show, {
    get when() {
      return local.loaded;
    },
    get fallback() {
      return createComponent(Box, mergeProps$1({
        get ["class"]() {
          return skeletonClasses();
        }
      }, others));
    },
    get children() {
      return createComponent(Box, mergeProps$1({
        get ["class"]() {
          return skeletonClasses();
        },
        get animation() {
          return loadedAnimation();
        }
      }, others));
    }
  });
}
Skeleton.toString = () => createClassSelector(hopeSkeletonClass);
function SkeletonCircle(props) {
  return createComponent(Skeleton, mergeProps$1({
    borderRadius: "$full",
    get boxSize() {
      var _a;
      return (_a = props.size) != null ? _a : "2rem";
    }
  }, props));
}
SkeletonCircle.toString = () => createClassSelector(hopeSkeletonClass);
function SkeletonText(props) {
  const defaultProps = {
    noOfLines: 3,
    spacing: "0.5rem",
    skeletonHeight: "0.5rem"
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, skeletonProps, others] = splitProps(propsWithDefault, ["class", "children", "noOfLines", "spacing", "skeletonHeight"], ["startColor", "endColor", "loaded", "speed", "fadeDuration", "borderRadius", "rounded"]);
  const noOfLines = () => {
    var _a;
    return (_a = local.noOfLines) != null ? _a : 3;
  };
  const numbers = createMemo(() => range(noOfLines()));
  const getWidth = (index) => {
    if (noOfLines() > 1) {
      return index === numbers().length - 1 ? "80%" : "100%";
    }
    return "100%";
  };
  const classes = () => {
    return classNames(local.class, "hope-skeleton__group");
  };
  return createComponent(Show, {
    get when() {
      return skeletonProps.loaded;
    },
    get fallback() {
      return createComponent(Box, mergeProps$1({
        get ["class"]() {
          return classes();
        },
        d: "flex",
        flexDirection: "column",
        get gap() {
          return local.spacing;
        }
      }, others, {
        get children() {
          return createComponent(Index, {
            get each() {
              return numbers();
            },
            children: (_, index) => createComponent(Skeleton, mergeProps$1({
              get width() {
                return getWidth(index);
              },
              get height() {
                return local.skeletonHeight;
              }
            }, skeletonProps))
          });
        }
      }));
    },
    get children() {
      return createComponent(Skeleton, mergeProps$1({
        get ["class"]() {
          return local.class;
        }
      }, skeletonProps, others, {
        get children() {
          return local.children;
        }
      }));
    }
  });
}
SkeletonText.toString = () => createClassSelector(hopeSkeletonClass);
const spacerStyles = css({
  flex: 1,
  justifySelf: "stretch",
  alignSelf: "stretch"
});
const hopeSpacerClass = "hope-spacer";
function Spacer(props) {
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeSpacerClass, spacerStyles());
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    }
  }, others));
}
Spacer.toString = () => createClassSelector(hopeSpacerClass);
const spinnerStyles = css({
  display: "inline-block",
  borderColor: "currentColor",
  borderStyle: "solid",
  borderRadius: "$full",
  borderWidth: "2px",
  borderBottomColor: "transparent",
  borderLeftColor: "transparent",
  animationName: `${spin}`,
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
const _tmpl$$1 = /* @__PURE__ */ template(`<span></span>`, 2);
const hopeSpinnerClass = "hope-spinner";
function Spinner(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const theme = useStyleConfig().Spinner;
  const defaultProps = {
    label: (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.label) != null ? _b : "Loading...",
    size: (_d = (_c = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _c.size) != null ? _d : "md",
    emptyColor: (_e = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _e.emptyColor,
    color: (_f = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _f.color,
    thickness: (_g = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _g.thickness,
    speed: (_h = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _h.speed
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["class", "children", "label", "size", "emptyColor", "color", "thickness", "speed"]);
  const classes = () => classNames(local.class, hopeSpinnerClass, spinnerStyles({
    size: local.size,
    css: {
      color: local.color,
      borderWidth: local.thickness,
      borderBottomColor: local.emptyColor,
      borderLeftColor: local.emptyColor,
      animationDuration: local.speed
    }
  }));
  return createComponent(Box, mergeProps$1({
    get ["class"]() {
      return classes();
    }
  }, others, {
    get children() {
      return createComponent(Show, {
        get when() {
          return local.label;
        },
        get children() {
          const _el$ = _tmpl$$1.cloneNode(true);
          insert(_el$, () => local.label);
          effect(() => _el$.className = visuallyHiddenStyles());
          return _el$;
        }
      });
    }
  }));
}
Spinner.toString = () => createClassSelector(hopeSpinnerClass);
const switchWrapperStyles = css(toggleWrapperStyles, {
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
});
const switchLabelStyles = css(toggleControlLabelStyles);
const switchControlStyles = css(toggleControlStyles, {
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
const _tmpl$ = /* @__PURE__ */ template(`<input type="checkbox" role="switch">`, 1);
function SwitchPrimitive(props) {
  const defaultId = `hope-switch-${createUniqueId()}`;
  const formControlProps = useFormControl(props);
  const [state, setState] = createStore({
    _checked: !!props.defaultChecked,
    isFocused: false,
    get isControlled() {
      return props.checked !== void 0;
    },
    get checked() {
      return this.isControlled ? !!props.checked : this._checked;
    },
    get id() {
      var _a;
      return (_a = formControlProps.id) != null ? _a : defaultId;
    },
    get name() {
      return props.name;
    },
    get value() {
      return props.value;
    },
    get required() {
      return formControlProps.required;
    },
    get disabled() {
      return formControlProps.disabled;
    },
    get invalid() {
      return formControlProps.invalid;
    },
    get readOnly() {
      return formControlProps.readOnly;
    },
    get ["aria-required"]() {
      return this.required ? true : void 0;
    },
    get ["aria-disabled"]() {
      return this.disabled ? true : void 0;
    },
    get ["aria-invalid"]() {
      return this.invalid ? true : void 0;
    },
    get ["aria-readonly"]() {
      return this.readOnly ? true : void 0;
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
  });
  const [local, _, others] = splitProps(props, ["inputClass", "children", "ref", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "onChange"], ["id", "name", "value", "checked", "defaultChecked", "required", "disabled", "invalid", "readOnly", "onFocus", "onBlur"]);
  const onChange = (event) => {
    if (state.readOnly || state.disabled) {
      event.preventDefault();
      return;
    }
    if (!state.isControlled) {
      const target = event.target;
      setState("_checked", target.checked);
    }
    callHandler(local.onChange, event);
  };
  const onFocus = (event) => {
    setState("isFocused", true);
    callHandler(formControlProps.onFocus, event);
  };
  const onBlur = (event) => {
    setState("isFocused", false);
    callHandler(formControlProps.onBlur, event);
  };
  const inputClasses = () => classNames(local.inputClass, visuallyHiddenStyles());
  const stateAccessor = () => state;
  const context = {
    state
  };
  return createComponent(SwitchPrimitiveContext.Provider, {
    value: context,
    get children() {
      return createComponent(hope.label, mergeProps$1({
        get ["for"]() {
          return state.id;
        },
        "data-group": true,
        get ["data-focus"]() {
          return state["data-focus"];
        },
        get ["data-checked"]() {
          return state["data-checked"];
        },
        get ["data-required"]() {
          return state["data-required"];
        },
        get ["data-disabled"]() {
          return state["data-disabled"];
        },
        get ["data-invalid"]() {
          return state["data-invalid"];
        },
        get ["data-readonly"]() {
          return state["data-readonly"];
        }
      }, others, {
        get children() {
          return [(() => {
            const _el$ = _tmpl$.cloneNode(true);
            _el$.addEventListener("blur", onBlur);
            _el$.addEventListener("focus", onFocus);
            _el$.addEventListener("change", onChange);
            const _ref$ = local.ref;
            typeof _ref$ === "function" ? _ref$(_el$) : local.ref = _el$;
            effect((_p$) => {
              const _v$ = inputClasses(), _v$2 = local.tabIndex, _v$3 = state.value, _v$4 = state.id, _v$5 = state.name, _v$6 = state.checked, _v$7 = state.required, _v$8 = state.disabled, _v$9 = state.readOnly, _v$10 = state["aria-required"], _v$11 = state["aria-disabled"], _v$12 = state["aria-invalid"], _v$13 = state["aria-readonly"], _v$14 = local["aria-label"], _v$15 = local["aria-labelledby"], _v$16 = local["aria-describedby"];
              _v$ !== _p$._v$ && (_el$.className = _p$._v$ = _v$);
              _v$2 !== _p$._v$2 && setAttribute(_el$, "tabindex", _p$._v$2 = _v$2);
              _v$3 !== _p$._v$3 && (_el$.value = _p$._v$3 = _v$3);
              _v$4 !== _p$._v$4 && setAttribute(_el$, "id", _p$._v$4 = _v$4);
              _v$5 !== _p$._v$5 && setAttribute(_el$, "name", _p$._v$5 = _v$5);
              _v$6 !== _p$._v$6 && (_el$.checked = _p$._v$6 = _v$6);
              _v$7 !== _p$._v$7 && (_el$.required = _p$._v$7 = _v$7);
              _v$8 !== _p$._v$8 && (_el$.disabled = _p$._v$8 = _v$8);
              _v$9 !== _p$._v$9 && (_el$.readOnly = _p$._v$9 = _v$9);
              _v$10 !== _p$._v$10 && setAttribute(_el$, "aria-required", _p$._v$10 = _v$10);
              _v$11 !== _p$._v$11 && setAttribute(_el$, "aria-disabled", _p$._v$11 = _v$11);
              _v$12 !== _p$._v$12 && setAttribute(_el$, "aria-invalid", _p$._v$12 = _v$12);
              _v$13 !== _p$._v$13 && setAttribute(_el$, "aria-readonly", _p$._v$13 = _v$13);
              _v$14 !== _p$._v$14 && setAttribute(_el$, "aria-label", _p$._v$14 = _v$14);
              _v$15 !== _p$._v$15 && setAttribute(_el$, "aria-labelledby", _p$._v$15 = _v$15);
              _v$16 !== _p$._v$16 && setAttribute(_el$, "aria-describedby", _p$._v$16 = _v$16);
              return _p$;
            }, {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0,
              _v$4: void 0,
              _v$5: void 0,
              _v$6: void 0,
              _v$7: void 0,
              _v$8: void 0,
              _v$9: void 0,
              _v$10: void 0,
              _v$11: void 0,
              _v$12: void 0,
              _v$13: void 0,
              _v$14: void 0,
              _v$15: void 0,
              _v$16: void 0
            });
            return _el$;
          })(), createComponent(Show, {
            get when() {
              return isFunction(local.children);
            },
            get fallback() {
              return local.children;
            },
            get children() {
              var _a;
              return (_a = local.children) == null ? void 0 : _a.call(local, {
                state: stateAccessor
              });
            }
          })];
        }
      }));
    }
  });
}
const SwitchPrimitiveContext = createContext();
function useSwitchPrimitivehContext() {
  const context = useContext(SwitchPrimitiveContext);
  if (!context) {
    throw new Error("[Hope UI]: useSwitchPrimitivehContext must be used within a `<SwitchPrimitive />` component");
  }
  return context;
}
const hopeSwitchClass = "hope-switch";
const hopeSwitchInputClass = "hope-checkbox__input";
const hopeSwitchControlClass = "hope-switch__control";
const hopeSwitchLabelClass = "hope-switch__label";
function Switch(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const theme = useStyleConfig().Switch;
  const defaultProps = {
    variant: (_c = (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.variant) != null ? _c : "filled",
    colorScheme: (_f = (_e = (_d = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _d.root) == null ? void 0 : _e.colorScheme) != null ? _f : "primary",
    size: (_i = (_h = (_g = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _g.root) == null ? void 0 : _h.size) != null ? _i : "md",
    labelPlacement: (_l = (_k = (_j = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _j.root) == null ? void 0 : _k.labelPlacement) != null ? _l : "start"
  };
  const propsWitDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWitDefault, ["children", "class", "variant", "colorScheme", "size", "labelPlacement"]);
  const wrapperClasses = () => {
    return classNames(local.class, hopeSwitchClass, switchWrapperStyles({
      size: local.size,
      labelPlacement: local.labelPlacement
    }));
  };
  const controlClasses = () => {
    return classNames(hopeSwitchControlClass, switchControlStyles({
      variant: local.variant,
      colorScheme: local.colorScheme,
      size: local.size
    }));
  };
  const labelClasses = () => {
    return classNames(hopeSwitchLabelClass, switchLabelStyles());
  };
  return createComponent(SwitchPrimitive, mergeProps$1({
    get ["class"]() {
      return wrapperClasses();
    },
    inputClass: hopeSwitchInputClass,
    get __baseStyle() {
      var _a2;
      return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.root;
    }
  }, others, {
    children: ({
      state
    }) => [createComponent(hope.span, {
      get ["class"]() {
        return labelClasses();
      },
      get __baseStyle() {
        var _a2;
        return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.label;
      },
      get ["data-focus"]() {
        return state()["data-focus"];
      },
      get ["data-checked"]() {
        return state()["data-checked"];
      },
      get ["data-required"]() {
        return state()["data-required"];
      },
      get ["data-disabled"]() {
        return state()["data-disabled"];
      },
      get ["data-invalid"]() {
        return state()["data-invalid"];
      },
      get ["data-readonly"]() {
        return state()["data-readonly"];
      },
      get children() {
        return local.children;
      }
    }), createComponent(hope.span, {
      "aria-hidden": true,
      get ["class"]() {
        return controlClasses();
      },
      get __baseStyle() {
        var _a2;
        return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.control;
      },
      get ["data-focus"]() {
        return state()["data-focus"];
      },
      get ["data-checked"]() {
        return state()["data-checked"];
      },
      get ["data-required"]() {
        return state()["data-required"];
      },
      get ["data-disabled"]() {
        return state()["data-disabled"];
      },
      get ["data-invalid"]() {
        return state()["data-invalid"];
      },
      get ["data-readonly"]() {
        return state()["data-readonly"];
      }
    })]
  }));
}
Switch.toString = () => createClassSelector(hopeSwitchClass);
function SwitchPrimitiveThumb(props) {
  const switchPrimitiveContext = useSwitchPrimitivehContext();
  return createComponent(hope.span, mergeProps$1({
    "aria-hidden": true,
    get ["data-focus"]() {
      return switchPrimitiveContext.state["data-focus"];
    },
    get ["data-checked"]() {
      return switchPrimitiveContext.state["data-checked"];
    },
    get ["data-required"]() {
      return switchPrimitiveContext.state["data-required"];
    },
    get ["data-disabled"]() {
      return switchPrimitiveContext.state["data-disabled"];
    },
    get ["data-invalid"]() {
      return switchPrimitiveContext.state["data-invalid"];
    },
    get ["data-readonly"]() {
      return switchPrimitiveContext.state["data-readonly"];
    }
  }, props));
}
const tableStyles = css({
  width: "100%",
  borderCollapse: "collapse",
  fontVariantNumeric: "lining-nums tabular-nums"
});
const tableCaptionStyles = css({
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
function createStripedStyles(stripedRow) {
  return {
    "& td": {
      borderBottomWidth: 0
    },
    "& tr:last-of-type td": {
      borderBottomWidth: "1px"
    },
    [`& tr:nth-of-type(${stripedRow}) td`]: {
      backgroundColor: "$neutral3"
    }
  };
}
const tableBodyStyles = css({
  variants: {
    striped: {
      odd: createStripedStyles("odd"),
      even: createStripedStyles("even")
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
      highlightOnHover: true,
      css: {
        "& tr:nth-of-type(odd):hover td": {
          backgroundColor: "$neutral4"
        }
      }
    },
    {
      striped: "even",
      highlightOnHover: true,
      css: {
        "& tr:nth-of-type(even):hover td": {
          backgroundColor: "$neutral4"
        }
      }
    }
  ]
});
const tableFootStyles = css({
  "& tr:last-of-type th": {
    borderBottomWidth: 0
  }
});
const tableColumnHeaderStyles = css({
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
});
const tableCellStyles = css({
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
});
const TableContext = createContext();
const hopeTableClass = "hope-table";
function Table(props) {
  const theme = useStyleConfig().Table;
  const [state] = createStore({
    get striped() {
      var _a, _b, _c;
      return (_c = props.striped) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.striped;
    },
    get dense() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.dense) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.dense) != null ? _d : false;
    },
    get highlightOnHover() {
      var _a, _b, _c, _d;
      return (_d = (_c = props.highlightOnHover) != null ? _c : (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.highlightOnHover) != null ? _d : false;
    }
  });
  const [local, others] = splitProps(props, ["class", "striped", "dense", "highlightOnHover"]);
  const classes = () => classNames(local.class, hopeTableClass, tableStyles(state));
  return createComponent(TableContext.Provider, {
    value: state,
    get children() {
      return createComponent(Box, mergeProps$1({
        as: "table",
        role: "table",
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a;
          return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.root;
        }
      }, others));
    }
  });
}
Table.toString = () => createClassSelector(hopeTableClass);
function useTableContext() {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("[Hope UI]: useTableContext must be used within a `<Table/>` component");
  }
  return context;
}
const hopeTableCaptionClass = "hope-table-caption";
function TableCaption(props) {
  var _a, _b, _c;
  const theme = useStyleConfig().Table;
  const tableContext = useTableContext();
  const defaultProps = {
    placement: (_c = (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.caption) == null ? void 0 : _b.placement) != null ? _c : "bottom"
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["class", "placement"]);
  const classes = () => classNames(local.class, hopeTableCaptionClass, tableCaptionStyles({
    dense: tableContext.dense,
    placement: local.placement
  }));
  return createComponent(hope.caption, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a2;
      return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.caption;
    }
  }, others));
}
TableCaption.toString = () => createClassSelector(hopeTableCaptionClass);
const hopeTbodyClass = "hope-tbody";
function Tbody(props) {
  const theme = useStyleConfig().Table;
  const tableContext = useTableContext();
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeTbodyClass, tableBodyStyles({
    striped: tableContext.striped,
    highlightOnHover: tableContext.highlightOnHover
  }));
  return createComponent(Box, mergeProps$1({
    as: "tbody",
    role: "rowgroup",
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.tbody;
    }
  }, others));
}
Tbody.toString = () => createClassSelector(hopeTbodyClass);
const hopeTdClass = "hope-td";
function Td(props) {
  const theme = useStyleConfig().Table;
  const tableContext = useTableContext();
  const [local, others] = splitProps(props, ["class", "numeric"]);
  const classes = () => classNames(local.class, hopeTdClass, tableCellStyles({
    dense: tableContext.dense,
    numeric: local.numeric
  }));
  return createComponent(Box, mergeProps$1({
    as: "td",
    role: "cell",
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.td;
    }
  }, others));
}
Td.toString = () => createClassSelector(hopeTdClass);
const hopeTfootClass = "hope-tfoot";
function Tfoot(props) {
  const theme = useStyleConfig().Table;
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeTfootClass, tableFootStyles());
  return createComponent(Box, mergeProps$1({
    as: "tfoot",
    role: "rowgroup",
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.tfoot;
    }
  }, others));
}
Tfoot.toString = () => createClassSelector(hopeTfootClass);
const hopeThClass = "hope-th";
function Th(props) {
  const theme = useStyleConfig().Table;
  const tableContext = useTableContext();
  const [local, others] = splitProps(props, ["class", "numeric"]);
  const classes = () => classNames(local.class, hopeThClass, tableColumnHeaderStyles({
    dense: tableContext.dense,
    numeric: local.numeric
  }));
  return createComponent(Box, mergeProps$1({
    as: "th",
    role: "columnheader",
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.th;
    }
  }, others));
}
Th.toString = () => createClassSelector(hopeThClass);
const hopeTheadClass = "hope-thead";
function Thead(props) {
  const theme = useStyleConfig().Table;
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeTheadClass);
  return createComponent(Box, mergeProps$1({
    as: "thead",
    role: "rowgroup",
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.thead;
    }
  }, others));
}
Thead.toString = () => createClassSelector(hopeTheadClass);
const hopeTrClass = "hope-tr";
function Tr(props) {
  const theme = useStyleConfig().Table;
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeTrClass);
  return createComponent(Box, mergeProps$1({
    as: "tr",
    role: "row",
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.tr;
    }
  }, others));
}
Tr.toString = () => createClassSelector(hopeTrClass);
const tabsStyles = css({
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
});
const tabListStyles = css({
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
function createSelectedColorVariant(color) {
  return {
    "&[aria-selected='true']": {
      color
    }
  };
}
function createPillsAndColorVariant(config2) {
  return {
    "&[aria-selected='true']": {
      color: config2.color,
      backgroundColor: config2.bgColor
    },
    "&[aria-selected='true']:hover": {
      backgroundColor: config2.bgColorHover
    }
  };
}
const tabStyles = css({
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
      css: createSelectedColorVariant("$primary11")
    },
    {
      variant: "underline",
      colorScheme: "accent",
      css: createSelectedColorVariant("$accent11")
    },
    {
      variant: "underline",
      colorScheme: "neutral",
      css: createSelectedColorVariant("$neutral12")
    },
    {
      variant: "underline",
      colorScheme: "success",
      css: createSelectedColorVariant("$success11")
    },
    {
      variant: "underline",
      colorScheme: "info",
      css: createSelectedColorVariant("$info11")
    },
    {
      variant: "underline",
      colorScheme: "warning",
      css: createSelectedColorVariant("$warning11")
    },
    {
      variant: "underline",
      colorScheme: "danger",
      css: createSelectedColorVariant("$danger11")
    },
    {
      variant: "outline",
      colorScheme: "primary",
      css: createSelectedColorVariant("$primary11")
    },
    {
      variant: "outline",
      colorScheme: "accent",
      css: createSelectedColorVariant("$accent11")
    },
    {
      variant: "outline",
      colorScheme: "neutral",
      css: createSelectedColorVariant("$neutral12")
    },
    {
      variant: "outline",
      colorScheme: "success",
      css: createSelectedColorVariant("$success11")
    },
    {
      variant: "outline",
      colorScheme: "info",
      css: createSelectedColorVariant("$info11")
    },
    {
      variant: "outline",
      colorScheme: "warning",
      css: createSelectedColorVariant("$warning11")
    },
    {
      variant: "outline",
      colorScheme: "danger",
      css: createSelectedColorVariant("$danger11")
    },
    {
      variant: "cards",
      colorScheme: "primary",
      css: createSelectedColorVariant("$primary11")
    },
    {
      variant: "cards",
      colorScheme: "accent",
      css: createSelectedColorVariant("$accent11")
    },
    {
      variant: "cards",
      colorScheme: "neutral",
      css: createSelectedColorVariant("$neutral12")
    },
    {
      variant: "cards",
      colorScheme: "success",
      css: createSelectedColorVariant("$success11")
    },
    {
      variant: "cards",
      colorScheme: "info",
      css: createSelectedColorVariant("$info11")
    },
    {
      variant: "cards",
      colorScheme: "warning",
      css: createSelectedColorVariant("$warning11")
    },
    {
      variant: "cards",
      colorScheme: "danger",
      css: createSelectedColorVariant("$danger11")
    },
    {
      variant: "pills",
      colorScheme: "primary",
      css: createPillsAndColorVariant({
        color: "$primary11",
        bgColor: "$primary3",
        bgColorHover: "$primary4"
      })
    },
    {
      variant: "pills",
      colorScheme: "accent",
      css: createPillsAndColorVariant({
        color: "$accent11",
        bgColor: "$accent3",
        bgColorHover: "$accent4"
      })
    },
    {
      variant: "pills",
      colorScheme: "neutral",
      css: createPillsAndColorVariant({
        color: "$neutral12",
        bgColor: "$neutral3",
        bgColorHover: "$neutral4"
      })
    },
    {
      variant: "pills",
      colorScheme: "success",
      css: createPillsAndColorVariant({
        color: "$success11",
        bgColor: "$success3",
        bgColorHover: "$success4"
      })
    },
    {
      variant: "pills",
      colorScheme: "info",
      css: createPillsAndColorVariant({
        color: "$info11",
        bgColor: "$info3",
        bgColorHover: "$info4"
      })
    },
    {
      variant: "pills",
      colorScheme: "warning",
      css: createPillsAndColorVariant({
        color: "$warning11",
        bgColor: "$warning3",
        bgColorHover: "$warning4"
      })
    },
    {
      variant: "pills",
      colorScheme: "danger",
      css: createPillsAndColorVariant({
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
});
const tabPanelStyles = css({
  outline: "none",
  padding: "$4"
});
const hopeTabsClass = "hope-tabs";
function Tabs(props) {
  var _a;
  const defaultBaseId = `hope-tabs-${createUniqueId()}`;
  const theme = useStyleConfig().Tabs;
  const [tabs, setTabs] = createSignal([]);
  const [tabPanels, setTabPanels] = createSignal([]);
  const [state, setState] = createStore({
    _selectedIndex: (_a = props.defaultIndex) != null ? _a : 0,
    get isControlled() {
      return props.index !== void 0;
    },
    get selectedIndex() {
      return this.isControlled ? props.index : this._selectedIndex;
    },
    get baseId() {
      var _a2;
      return (_a2 = props.id) != null ? _a2 : defaultBaseId;
    },
    get orientation() {
      var _a2;
      return (_a2 = props.orientation) != null ? _a2 : "horizontal";
    },
    get keepAlive() {
      var _a2, _b, _c, _d;
      return (_d = (_c = props.keepAlive) != null ? _c : (_b = (_a2 = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a2.root) == null ? void 0 : _b.keepAlive) != null ? _d : false;
    },
    get alignment() {
      var _a2, _b, _c, _d;
      return (_d = (_c = props.alignment) != null ? _c : (_b = (_a2 = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a2.root) == null ? void 0 : _b.alignment) != null ? _d : "start";
    },
    get variant() {
      var _a2, _b, _c, _d;
      return (_d = (_c = props.variant) != null ? _c : (_b = (_a2 = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a2.root) == null ? void 0 : _b.variant) != null ? _d : "underline";
    },
    get colorScheme() {
      var _a2, _b, _c, _d;
      return (_d = (_c = props.colorScheme) != null ? _c : (_b = (_a2 = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a2.root) == null ? void 0 : _b.colorScheme) != null ? _d : "primary";
    },
    get size() {
      var _a2, _b, _c, _d;
      return (_d = (_c = props.size) != null ? _c : (_b = (_a2 = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a2.root) == null ? void 0 : _b.size) != null ? _d : "md";
    },
    get fitted() {
      var _a2, _b, _c, _d;
      return (_d = (_c = props.fitted) != null ? _c : (_b = (_a2 = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a2.root) == null ? void 0 : _b.fitted) != null ? _d : false;
    }
  });
  const [local, _, others] = splitProps(props, ["class", "onChange"], ["index", "defaultIndex", "keepAlive", "alignment", "orientation", "variant", "colorScheme", "size", "fitted"]);
  const reverseTabs = createMemo(() => tabs().slice().reverse());
  const setSelectedIndex = (index) => {
    var _a2;
    setState("_selectedIndex", index);
    (_a2 = local.onChange) == null ? void 0 : _a2.call(local, index);
  };
  const isSelectedIndex = (index) => {
    return index === state.selectedIndex;
  };
  const getTabId = (index) => {
    return `${state.baseId}--tab-${index}`;
  };
  const getTabPanelId = (index) => {
    return `${state.baseId}--tabpanel-${index}`;
  };
  const registerTab = (node) => {
    return setTabs((prev) => [...prev, node]).length - 1;
  };
  const registerTabPanel = (node) => {
    return setTabPanels((prev) => [...prev, node]).length - 1;
  };
  const focusNextTab = () => {
    const lastIndex = tabs().length - 1;
    let nextIndex = getNextIndex(state.selectedIndex, lastIndex, true);
    let nextTab = tabs()[nextIndex];
    while (nextTab.disabled) {
      nextIndex = getNextIndex(nextIndex, lastIndex, true);
      nextTab = tabs()[nextIndex];
    }
    nextTab.focus();
  };
  const focusPrevTab = () => {
    const lastIndex = tabs().length - 1;
    let prevIndex = getPrevIndex(state.selectedIndex, lastIndex, true);
    let prevTab = tabs()[prevIndex];
    while (prevTab.disabled) {
      prevIndex = getPrevIndex(prevIndex, lastIndex, true);
      prevTab = tabs()[prevIndex];
    }
    prevTab.focus();
  };
  const focusFirstTab = () => {
    var _a2;
    (_a2 = tabs().find((tab) => !tab.disabled)) == null ? void 0 : _a2.focus();
  };
  const focusLastTab = () => {
    var _a2;
    (_a2 = reverseTabs().find((tab) => !tab.disabled)) == null ? void 0 : _a2.focus();
  };
  const classes = () => {
    return classNames(local.class, hopeTabsClass, tabsStyles({
      orientation: state.orientation
    }));
  };
  const context = {
    state,
    setSelectedIndex,
    isSelectedIndex,
    getTabId,
    getTabPanelId,
    registerTab,
    registerTabPanel,
    focusPrevTab,
    focusNextTab,
    focusFirstTab,
    focusLastTab
  };
  return createComponent(TabsContext.Provider, {
    value: context,
    get children() {
      return createComponent(Box, mergeProps$1({
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a2;
          return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.root;
        }
      }, others));
    }
  });
}
Tabs.toString = () => createClassSelector(hopeTabsClass);
const TabsContext = createContext();
function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("[Hope UI]: useTabsContext must be used within a `<Tabs />` component");
  }
  return context;
}
const hopeTabClass = "hope-tabs__tab";
function Tab(props) {
  const theme = useStyleConfig().Tabs;
  const tabsContext = useTabsContext();
  const [index, setIndex] = createSignal(-1);
  const [local, others] = splitProps(props, ["ref", "class", "disabled", "onClick", "onFocus"]);
  const isSelected = () => tabsContext.isSelectedIndex(index());
  const tabId = () => tabsContext.getTabId(index());
  const tabPanelId = () => tabsContext.getTabPanelId(index());
  const assignTabRef = (el) => {
    setIndex(tabsContext.registerTab(el));
    if (isFunction(local.ref)) {
      local.ref(el);
    } else {
      local.ref = el;
    }
  };
  const onClick = (event) => {
    tabsContext.setSelectedIndex(index());
    callHandler(local.onClick, event);
  };
  const onFocus = (event) => {
    tabsContext.setSelectedIndex(index());
    callHandler(local.onFocus, event);
  };
  const classes = () => {
    return classNames(local.class, hopeTabClass, tabStyles({
      orientation: tabsContext.state.orientation,
      variant: tabsContext.state.variant,
      colorScheme: tabsContext.state.colorScheme,
      size: tabsContext.state.size,
      fitted: tabsContext.state.fitted
    }));
  };
  return createComponent(hope.button, mergeProps$1({
    ref: assignTabRef,
    role: "tab",
    type: "button",
    get id() {
      return tabId();
    },
    get tabIndex() {
      return isSelected() ? 0 : -1;
    },
    get disabled() {
      return local.disabled;
    },
    get ["aria-selected"]() {
      return isSelected();
    },
    get ["aria-controls"]() {
      return tabPanelId();
    },
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.tab;
    },
    onClick,
    onFocus
  }, others));
}
Tab.toString = () => createClassSelector(hopeTabClass);
const hopeTabListClass = "hope-tabs__tablist";
function TabList(props) {
  const theme = useStyleConfig().Tabs;
  const tabsContext = useTabsContext();
  const [local, others] = splitProps(props, ["class", "onKeyDown"]);
  const isHorizontal = () => tabsContext.state.orientation === "horizontal";
  const isVertical = () => tabsContext.state.orientation === "vertical";
  const onArrowLeftKeyDown = () => isHorizontal() && tabsContext.focusPrevTab();
  const onArrowRightKeyDown = () => isHorizontal() && tabsContext.focusNextTab();
  const onArrowDownKeyDown = () => isVertical() && tabsContext.focusNextTab();
  const onArrowUpKeyDown = () => isVertical() && tabsContext.focusPrevTab();
  const keyMap = createMemo(() => ({
    ArrowLeft: onArrowLeftKeyDown,
    ArrowRight: onArrowRightKeyDown,
    ArrowDown: onArrowDownKeyDown,
    ArrowUp: onArrowUpKeyDown,
    Home: tabsContext.focusFirstTab,
    End: tabsContext.focusLastTab
  }));
  const onKeyDown = (event) => {
    callHandler(local.onKeyDown, event);
    const eventKey = normalizeEventKey(event);
    const action = keyMap()[eventKey];
    if (action) {
      event.preventDefault();
      callHandler(action, event);
    }
  };
  const classes = () => {
    return classNames(local.class, hopeTabListClass, tabListStyles({
      alignment: tabsContext.state.alignment,
      orientation: tabsContext.state.orientation,
      variant: tabsContext.state.variant
    }));
  };
  return createComponent(Box, mergeProps$1({
    role: "tablist",
    get ["aria-orientation"]() {
      return tabsContext.state.orientation;
    },
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.tabList;
    },
    onKeyDown
  }, others));
}
TabList.toString = () => createClassSelector(hopeTabListClass);
const hopeTabPanelClass = "hope-tabs__tab-panel";
function TabPanel(props) {
  const theme = useStyleConfig().Tabs;
  const tabsContext = useTabsContext();
  const [index, setIndex] = createSignal(-1);
  const [local, others] = splitProps(props, ["ref", "class", "children"]);
  const isSelected = () => tabsContext.isSelectedIndex(index());
  const tabId = () => tabsContext.getTabId(index());
  const tabPanelId = () => tabsContext.getTabPanelId(index());
  const assignTabPanelRef = (el) => {
    setIndex(tabsContext.registerTabPanel(el));
    if (isFunction(local.ref)) {
      local.ref(el);
    } else {
      local.ref = el;
    }
  };
  const resolvedChildren = children(() => local.children);
  const classes = () => {
    return classNames(local.class, hopeTabPanelClass, tabPanelStyles());
  };
  return createComponent(Box, mergeProps$1({
    ref: assignTabPanelRef,
    role: "tabpanel",
    tabIndex: "0",
    get id() {
      return tabPanelId();
    },
    get ["aria-labelledby"]() {
      return tabId();
    },
    get hidden() {
      return !isSelected();
    },
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.tabPanel;
    }
  }, others, {
    get children() {
      return createComponent(Show, {
        get when() {
          return isSelected();
        },
        get children() {
          return createComponent(Show, {
            get when() {
              return tabsContext.state.keepAlive;
            },
            get fallback() {
              return local.children;
            },
            get children() {
              return resolvedChildren();
            }
          });
        }
      });
    }
  }));
}
TabPanel.toString = () => createClassSelector(hopeTabPanelClass);
const tagRightIconStyles = css({
  marginInlineStart: "$2"
});
const tagLeftIconStyles = css({
  marginInlineEnd: "$2"
});
const tagLabelStyles = css({
  noOfLines: 1
});
const tagCloseButtonStyles = css({
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
function createTagSizeVariant(config2) {
  return {
    height: config2.height,
    py: 0,
    px: config2.paddingX,
    fontSize: config2.fontSize,
    lineHeight: config2.lineHeight,
    [`& .${tagCloseButtonStyles}`]: {
      boxSize: config2.closeButtonSize
    }
  };
}
function createTagSolidCompoundVariant(config2) {
  return {
    backgroundColor: config2.bgColor,
    color: config2.color,
    [`& .${tagCloseButtonStyles}:not(:disabled):hover`]: {
      backgroundColor: config2.closeButtonBgColorHover
    }
  };
}
function createTagSubtleCompoundVariant(config2) {
  return {
    backgroundColor: config2.bgColor,
    color: config2.color,
    [`& .${tagCloseButtonStyles}:not(:disabled):hover`]: {
      backgroundColor: config2.closeButtonBgColorHover
    }
  };
}
function createTagOutlineCompoundVariant(config2) {
  return {
    borderColor: config2.borderColor,
    color: config2.color,
    [`& .${tagCloseButtonStyles}:not(:disabled):hover`]: {
      backgroundColor: config2.closeButtonBgColorHover
    }
  };
}
function createTagDotAndSizeCompoundVariant(size2) {
  return {
    "&::before,  &::after": {
      boxSize: size2
    },
    "&::before": {
      marginRight: size2
    },
    "&::after": {
      marginLeft: size2
    }
  };
}
const tagStyles = css({
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
        [`& .${tagCloseButtonStyles}:not(:disabled):hover`]: {
          backgroundColor: "$neutral4"
        },
        [`& .${tagCloseButtonStyles}:not(:disabled):active`]: {
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
      sm: createTagSizeVariant({
        height: "$5",
        paddingX: "$2",
        fontSize: "$xs",
        lineHeight: "$4",
        closeButtonSize: "$4"
      }),
      md: createTagSizeVariant({
        height: "$6",
        paddingX: "$2",
        fontSize: "$sm",
        lineHeight: "$5",
        closeButtonSize: "$5"
      }),
      lg: createTagSizeVariant({
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
      css: createTagSolidCompoundVariant({
        color: "white",
        bgColor: "$primary9",
        closeButtonBgColorHover: "$primary10"
      })
    },
    {
      variant: "solid",
      colorScheme: "accent",
      css: createTagSolidCompoundVariant({
        color: "white",
        bgColor: "$accent9",
        closeButtonBgColorHover: "$accent10"
      })
    },
    {
      variant: "solid",
      colorScheme: "neutral",
      css: createTagSolidCompoundVariant({
        color: "white",
        bgColor: "$neutral9",
        closeButtonBgColorHover: "$neutral11"
      })
    },
    {
      variant: "solid",
      colorScheme: "success",
      css: createTagSolidCompoundVariant({
        color: "white",
        bgColor: "$success9",
        closeButtonBgColorHover: "$success10"
      })
    },
    {
      variant: "solid",
      colorScheme: "info",
      css: createTagSolidCompoundVariant({
        color: "white",
        bgColor: "$info9",
        closeButtonBgColorHover: "$info10"
      })
    },
    {
      variant: "solid",
      colorScheme: "warning",
      css: createTagSolidCompoundVariant({
        color: "$blackAlpha12",
        bgColor: "$warning9",
        closeButtonBgColorHover: "$warning10"
      })
    },
    {
      variant: "solid",
      colorScheme: "danger",
      css: createTagSolidCompoundVariant({
        color: "white",
        bgColor: "$danger9",
        closeButtonBgColorHover: "$danger10"
      })
    },
    {
      variant: "subtle",
      colorScheme: "primary",
      css: createTagSubtleCompoundVariant({
        color: "$primary11",
        bgColor: "$primary4",
        closeButtonBgColorHover: "$primary6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "accent",
      css: createTagSubtleCompoundVariant({
        color: "$accent11",
        bgColor: "$accent4",
        closeButtonBgColorHover: "$accent6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "neutral",
      css: createTagSubtleCompoundVariant({
        color: "$neutral12",
        bgColor: "$neutral4",
        closeButtonBgColorHover: "$neutral7"
      })
    },
    {
      variant: "subtle",
      colorScheme: "success",
      css: createTagSubtleCompoundVariant({
        color: "$success11",
        bgColor: "$success4",
        closeButtonBgColorHover: "$success6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "info",
      css: createTagSubtleCompoundVariant({
        color: "$info11",
        bgColor: "$info4",
        closeButtonBgColorHover: "$info6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "warning",
      css: createTagSubtleCompoundVariant({
        color: "$warning11",
        bgColor: "$warning4",
        closeButtonBgColorHover: "$warning6"
      })
    },
    {
      variant: "subtle",
      colorScheme: "danger",
      css: createTagSubtleCompoundVariant({
        color: "$danger11",
        bgColor: "$danger4",
        closeButtonBgColorHover: "$danger6"
      })
    },
    {
      variant: "outline",
      colorScheme: "primary",
      css: createTagOutlineCompoundVariant({
        color: "$primary11",
        borderColor: "$primary7",
        closeButtonBgColorHover: "$primary4"
      })
    },
    {
      variant: "outline",
      colorScheme: "accent",
      css: createTagOutlineCompoundVariant({
        color: "$accent11",
        borderColor: "$accent7",
        closeButtonBgColorHover: "$accent4"
      })
    },
    {
      variant: "outline",
      colorScheme: "neutral",
      css: createTagOutlineCompoundVariant({
        color: "$neutral12",
        borderColor: "$neutral7",
        closeButtonBgColorHover: "$neutral4"
      })
    },
    {
      variant: "outline",
      colorScheme: "success",
      css: createTagOutlineCompoundVariant({
        color: "$success11",
        borderColor: "$success7",
        closeButtonBgColorHover: "$success4"
      })
    },
    {
      variant: "outline",
      colorScheme: "info",
      css: createTagOutlineCompoundVariant({
        color: "$info11",
        borderColor: "$info7",
        closeButtonBgColorHover: "$info4"
      })
    },
    {
      variant: "outline",
      colorScheme: "warning",
      css: createTagOutlineCompoundVariant({
        color: "$warning11",
        borderColor: "$warning7",
        closeButtonBgColorHover: "$warning4"
      })
    },
    {
      variant: "outline",
      colorScheme: "danger",
      css: createTagOutlineCompoundVariant({
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
      css: createTagDotAndSizeCompoundVariant("$1_5")
    },
    {
      variant: "dot",
      size: "md",
      css: createTagDotAndSizeCompoundVariant("$2")
    },
    {
      variant: "dot",
      size: "lg",
      css: createTagDotAndSizeCompoundVariant("$2_5")
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
});
const hopeTagClass = "hope-tag";
const TagContext = createContext();
function Tag(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const theme = useStyleConfig().Tag;
  const defaultProps = {
    variant: (_c = (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.root) == null ? void 0 : _b.variant) != null ? _c : "subtle",
    colorScheme: (_f = (_e = (_d = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _d.root) == null ? void 0 : _e.colorScheme) != null ? _f : "neutral",
    size: (_i = (_h = (_g = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _g.root) == null ? void 0 : _h.size) != null ? _i : "md"
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, variantProps, others] = splitProps(propsWithDefault, ["class"], ["variant", "colorScheme", "size", "dotPlacement"]);
  const classes = () => classNames(local.class, hopeTagClass, tagStyles(variantProps));
  const tagSize = () => variantProps.size;
  const context = {
    size: tagSize
  };
  return createComponent(TagContext.Provider, {
    value: context,
    get children() {
      return createComponent(hope.span, mergeProps$1({
        get ["class"]() {
          return classes();
        },
        get __baseStyle() {
          var _a2;
          return (_a2 = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a2.root;
        }
      }, others));
    }
  });
}
Tag.toString = () => createClassSelector(hopeTagClass);
function useTagContext() {
  const context = useContext(TagContext);
  if (!context) {
    throw new Error("[Hope UI]: useTagContext must be used within a `<Tag />` component");
  }
  return context;
}
const hopeTagCloseButtonClass = "hope-tag-close-button";
function TagCloseButton(props) {
  const theme = useStyleConfig().Tag;
  const tagContext = useTagContext();
  const defaultProps = {
    type: "button",
    role: "button",
    "aria-label": "Close"
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["class", "children"]);
  const classes = () => classNames(local.class, hopeTagCloseButtonClass, tagCloseButtonStyles({
    size: tagContext.size()
  }));
  return createComponent(hope.button, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.closeButton;
    }
  }, others, {
    get children() {
      return createComponent(IconCloseSmall, {});
    }
  }));
}
TagCloseButton.toString = () => createClassSelector(hopeTagCloseButtonClass);
const hopeTagLeftIconClass = "hope-tag-left-icon";
function TagLeftIcon(props) {
  const theme = useStyleConfig().Tag;
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeTagLeftIconClass, tagLeftIconStyles());
  return createComponent(Icon, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.icon;
    }
  }, others));
}
TagLeftIcon.toString = () => createClassSelector(hopeTagLeftIconClass);
const hopeTagRightIconClass = "hope-tag-right-icon";
function TagRightIcon(props) {
  const theme = useStyleConfig().Tag;
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeTagRightIconClass, tagRightIconStyles());
  return createComponent(Icon, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.icon;
    }
  }, others));
}
TagRightIcon.toString = () => createClassSelector(hopeTagRightIconClass);
const hopeTagLabelClass = "hope-tag-label";
function TagLabel(props) {
  const theme = useStyleConfig().Tag;
  const [local, others] = splitProps(props, ["class"]);
  const classes = () => classNames(local.class, hopeTagLabelClass, tagLabelStyles());
  return createComponent(hope.span, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      var _a;
      return (_a = theme == null ? void 0 : theme.baseStyle) == null ? void 0 : _a.label;
    }
  }, others));
}
TagLabel.toString = () => createClassSelector(hopeTagLabelClass);
const hopeTextClass = "hope-text";
function Text(props) {
  var _a;
  const theme = useStyleConfig().Text;
  const defaultProps = {
    size: (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.size
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["class", "size"]);
  const classes = () => classNames(local.class, hopeTextClass, textStyles({
    size: local.size
  }));
  return createComponent(hope.p, mergeProps$1({
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      return theme == null ? void 0 : theme.baseStyle;
    }
  }, others));
}
Text.toString = () => createClassSelector(hopeTextClass);
function createVariantAndSizeCompoundVariants(variant, paddingX) {
  return Object.entries({
    xs: paddingX != null ? paddingX : "$2",
    sm: paddingX != null ? paddingX : "$2_5",
    md: paddingX != null ? paddingX : "$3",
    lg: paddingX != null ? paddingX : "$4"
  }).map(([key, value]) => ({
    variant,
    size: key,
    css: { px: value }
  }));
}
const textareaStyles = css(baseInputResetStyles, {
  minHeight: "80px",
  py: "$2",
  compoundVariants: [
    ...createVariantAndSizeCompoundVariants("outline"),
    ...createVariantAndSizeCompoundVariants("filled"),
    ...createVariantAndSizeCompoundVariants("unstyled", 0)
  ]
});
const hopeTextareaClass = "hope-textarea";
function Textarea(props) {
  var _a, _b, _c, _d;
  const theme = useStyleConfig().Textarea;
  const defaultProps = {
    variant: (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.variant) != null ? _b : "outline",
    size: (_d = (_c = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _c.size) != null ? _d : "md"
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["class", "variant", "size"]);
  const formControlProps = useFormControl(props);
  const classes = () => {
    return classNames(local.class, hopeTextareaClass, textareaStyles({
      variant: local.variant,
      size: local.size
    }));
  };
  return createComponent(Box, mergeProps$1({
    as: "textarea",
    get ["class"]() {
      return classes();
    },
    get __baseStyle() {
      return theme == null ? void 0 : theme.baseStyle;
    }
  }, formControlProps, others));
}
Textarea.toString = () => createClassSelector(hopeTextareaClass);
const hopeTooltipClass = "hope-tooltip";
const hopeTooltipArrowClass = "hope-tooltip__arrow";
function Tooltip(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  const defaultId = `hope-tooltip-${createUniqueId()}`;
  const theme = useStyleConfig().Tooltip;
  const defaultProps = {
    id: defaultId,
    placement: (_b = (_a = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _a.placement) != null ? _b : "bottom",
    offset: (_d = (_c = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _c.offset) != null ? _d : 8,
    withArrow: (_f = (_e = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _e.withArrow) != null ? _f : false,
    arrowSize: (_h = (_g = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _g.arrowSize) != null ? _h : 8,
    arrowPadding: (_j = (_i = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _i.arrowPadding) != null ? _j : 8,
    openDelay: (_l = (_k = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _k.openDelay) != null ? _l : 0,
    closeDelay: (_n = (_m = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _m.closeDelay) != null ? _n : 0,
    closeOnClick: (_p = (_o = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _o.closeOnClick) != null ? _p : true,
    closeOnMouseDown: (_r = (_q = theme == null ? void 0 : theme.defaultProps) == null ? void 0 : _q.closeOnMouseDown) != null ? _r : false
  };
  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, ["class", "children", "id", "label", "opened", "defaultOpened", "inline", "disabled", "placement", "offset", "withArrow", "arrowSize", "arrowPadding", "openDelay", "closeDelay", "closeOnClick", "closeOnMouseDown", "onOpen", "onClose"]);
  const [openedState, setOpenedState] = createSignal(!!local.defaultOpened);
  const [isPortalMounted, setIsPortalMounted] = createSignal(false);
  let tooltipElement;
  let arrowElement;
  let enterTimeoutId;
  let exitTimeoutId;
  const isControlled = () => local.opened !== void 0;
  const opened = () => isControlled() ? !!local.opened : openedState();
  const tooltipClasses = () => classNames(local.class, hopeTooltipClass, tooltipStyles());
  const arrowClasses = () => classNames(hopeTooltipArrowClass, tooltipArrowStyles());
  let cleanupTooltipAutoUpdate;
  const resolvedChildren = children(() => local.children);
  const trigger = createMemo(() => {
    let el = resolvedChildren();
    while (isFunction(el)) {
      el = el();
    }
    return el;
  });
  async function updateTooltipPosition() {
    var _a2, _b2, _c2;
    const triggerElement = trigger();
    if (!triggerElement || !tooltipElement) {
      return;
    }
    const middleware = [offset(local.offset)];
    if (local.inline) {
      middleware.push(inline());
    }
    middleware.push(flip());
    middleware.push(shift());
    if (local.withArrow && arrowElement) {
      middleware.push(arrow({
        element: arrowElement,
        padding: local.arrowPadding
      }));
    }
    middleware.push(hide$1());
    const {
      x,
      y,
      placement,
      middlewareData
    } = await computePosition(triggerElement, tooltipElement, {
      placement: local.placement,
      middleware
    });
    if (!tooltipElement) {
      return;
    }
    const referenceHidden = (_a2 = middlewareData.hide) == null ? void 0 : _a2.referenceHidden;
    Object.assign(tooltipElement.style, {
      left: `${Math.round(x)}px`,
      top: `${Math.round(y)}px`,
      visibility: referenceHidden ? "hidden" : "visible"
    });
    if (!arrowElement) {
      return;
    }
    const arrowX = (_b2 = middlewareData.arrow) == null ? void 0 : _b2.x;
    const arrowY = (_c2 = middlewareData.arrow) == null ? void 0 : _c2.y;
    const staticSide = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right"
    }[placement.split("-")[0]];
    const arrowOffset = `${local.arrowSize ? Math.round(local.arrowSize / 2) * -1 : -4}px`;
    Object.assign(arrowElement.style, {
      left: arrowX != null ? `${Math.round(arrowX)}px` : "",
      top: arrowY != null ? `${Math.round(arrowY)}px` : "",
      right: "",
      bottom: "",
      [staticSide]: arrowOffset
    });
  }
  const onOpen = () => {
    var _a2;
    if (!isControlled()) {
      setOpenedState(true);
    }
    (_a2 = local.onOpen) == null ? void 0 : _a2.call(local);
    updateTooltipPosition();
  };
  const onClose = () => {
    var _a2;
    if (!isControlled()) {
      setOpenedState(false);
    }
    (_a2 = local.onClose) == null ? void 0 : _a2.call(local);
  };
  const openWithDelay = () => {
    if (!local.disabled) {
      enterTimeoutId = window.setTimeout(onOpen, local.openDelay);
    }
  };
  const closeWithDelay = () => {
    if (enterTimeoutId) {
      window.clearTimeout(enterTimeoutId);
    }
    exitTimeoutId = window.setTimeout(onClose, local.closeDelay);
  };
  const onClick = () => {
    if (local.closeOnClick) {
      closeWithDelay();
    }
  };
  const onMouseDown = () => {
    if (local.closeOnMouseDown) {
      closeWithDelay();
    }
  };
  const onKeyDown = (event) => {
    if (opened() && event.key === "Escape") {
      closeWithDelay();
    }
  };
  const addTriggerListeners = () => {
    const triggerElement = trigger();
    triggerElement.addEventListener("mouseenter", openWithDelay);
    triggerElement.addEventListener("focus", openWithDelay);
    triggerElement.addEventListener("click", onClick);
    triggerElement.addEventListener("mousedown", onMouseDown);
    triggerElement.addEventListener("mouseleave", closeWithDelay);
    triggerElement.addEventListener("blur", closeWithDelay);
  };
  const removeTriggerListeners = () => {
    const triggerElement = trigger();
    triggerElement.removeEventListener("mouseenter", openWithDelay);
    triggerElement.removeEventListener("focus", openWithDelay);
    triggerElement.removeEventListener("click", onClick);
    triggerElement.removeEventListener("mousedown", onMouseDown);
    triggerElement.removeEventListener("mouseleave", closeWithDelay);
    triggerElement.removeEventListener("blur", closeWithDelay);
  };
  const afterToolipEnterTransition = () => {
    if (isServer || !tooltipElement) {
      return;
    }
    document.addEventListener("keydown", onKeyDown);
    cleanupTooltipAutoUpdate = autoUpdate(trigger(), tooltipElement, updateTooltipPosition);
  };
  const afterToolipExitTransition = () => {
    document.removeEventListener("keydown", onKeyDown);
    cleanupTooltipAutoUpdate == null ? void 0 : cleanupTooltipAutoUpdate();
    setIsPortalMounted(false);
  };
  onMount(() => {
    addTriggerListeners();
  });
  onCleanup(() => {
    removeTriggerListeners();
    window.clearTimeout(enterTimeoutId);
    window.clearTimeout(exitTimeoutId);
  });
  createEffect(() => {
    if (opened()) {
      setIsPortalMounted(true);
      if (local.id) {
        trigger().setAttribute("aria-describedby", local.id);
      }
    } else {
      trigger().removeAttribute("aria-describedby");
    }
  });
  return [trigger, createComponent(Show, {
    get when() {
      return isPortalMounted();
    },
    get children() {
      return createComponent(Portal, {
        get children() {
          return createComponent(Transition, {
            get name() {
              return tooltipTransitionName.scale;
            },
            appear: true,
            onBeforeEnter: updateTooltipPosition,
            onAfterEnter: afterToolipEnterTransition,
            onAfterExit: afterToolipExitTransition,
            get children() {
              return createComponent(Show, {
                get when() {
                  return opened();
                },
                get children() {
                  return createComponent(Box, mergeProps$1({
                    ref(r$) {
                      const _ref$ = tooltipElement;
                      typeof _ref$ === "function" ? _ref$(r$) : tooltipElement = r$;
                    },
                    role: "tooltip",
                    get id() {
                      return local.id;
                    },
                    get ["class"]() {
                      return tooltipClasses();
                    },
                    get __baseStyle() {
                      return theme == null ? void 0 : theme.baseStyle;
                    }
                  }, others, {
                    get children() {
                      return [memo(() => local.label), createComponent(Show, {
                        get when() {
                          return local.withArrow;
                        },
                        get children() {
                          return createComponent(Box, {
                            ref(r$) {
                              const _ref$2 = arrowElement;
                              typeof _ref$2 === "function" ? _ref$2(r$) : arrowElement = r$;
                            },
                            get ["class"]() {
                              return arrowClasses();
                            },
                            get boxSize() {
                              return local.arrowSize;
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
Tooltip.toString = () => createClassSelector(hopeTooltipClass);
function createDisclosure(props = {}) {
  const id = `disclosure-${createUniqueId()}`;
  const [isOpenState, setIsOpenState] = createSignal(props.defaultIsOpen || false);
  const isControlled = () => props.isOpen !== void 0;
  const isOpen = () => isControlled() ? !!props.isOpen : isOpenState();
  const onClose = () => {
    var _a;
    if (!isControlled()) {
      setIsOpenState(false);
    }
    (_a = props.onClose) == null ? void 0 : _a.call(props);
  };
  const onOpen = () => {
    var _a;
    if (!isControlled()) {
      setIsOpenState(true);
    }
    (_a = props.onOpen) == null ? void 0 : _a.call(props);
  };
  const onToggle = () => {
    isOpen() ? onClose() : onOpen();
  };
  const triggerProps = () => ({
    "aria-expanded": isOpen(),
    "aria-controls": id
  });
  const disclosureProps = () => ({
    id,
    hidden: !isOpen()
  });
  return {
    isControlled,
    isOpen,
    onOpen,
    onClose,
    onToggle,
    triggerProps,
    disclosureProps
  };
}
function useEvent(props) {
  let _once = false;
  const onEmit = (event) => {
    var _a;
    const { once } = props;
    if (once && _once) {
      return;
    }
    _once = true;
    (_a = props.handler) == null ? void 0 : _a.call(props, event);
  };
  const _active = (element, key, capture, passive) => {
    if (key && element && element.addEventListener) {
      element.addEventListener(key, onEmit, {
        capture,
        passive
      });
    }
  };
  const active = () => {
    const { element, eventName, capture, passive } = props;
    _active(element, eventName, capture, passive);
  };
  const _inactive = (element, key) => {
    if (key && element && element.removeEventListener) {
      element.removeEventListener(key, onEmit);
    }
  };
  const inactive = () => {
    const { element, eventName } = props;
    _inactive(element, eventName);
  };
  createEffect((prev) => {
    const { element, eventName, capture, passive } = props;
    if (prev) {
      _inactive(prev.element, prev.eventName);
    }
    _active(element, eventName, capture, passive);
    return {
      element,
      eventName
    };
  });
  onCleanup(() => {
    const { element, eventName } = props;
    _inactive(element, eventName);
  });
  return {
    active,
    inactive
  };
}
export { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Alert, AlertDescription, AlertIcon, AlertTitle, Anchor, AspectRatio, AsyncButton, Avatar, AvatarBadge, AvatarExcess, AvatarGroup, Badge, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, Button, ButtonGroup, Center, Checkbox, CheckboxGroup, CheckboxPrimitive, CheckboxPrimitiveIndicator, CircularProgress, CircularProgressIndicator, CircularProgressLabel, CloseButton, Collapse, Container, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormControl, FormControlContext, FormErrorMessage, FormHelperText, FormLabel, Grid, GridItem, HStack, Heading, HopeContext, HopeProvider, Icon, IconButton, Image$1 as Image, Input, InputAddon, InputElement, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement, Kbd, List, ListIcon, ListItem, Menu, MenuContent, MenuGroup, MenuItem, MenuLabel, MenuTrigger, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Notification, NotificationDescription, NotificationIcon, NotificationTitle, NotificationsProvider, OrderedList, Popover, PopoverAnchor, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Progress, ProgressIndicator, ProgressLabel, Radio, RadioGroup, Select, SelectContent, SelectIcon, SelectLabel, SelectListbox, SelectOptGroup, SelectOption, SelectOptionIndicator, SelectOptionText, SelectPlaceholder, SelectTag, SelectTagCloseButton, SelectTrigger, SelectValue, SimpleGrid, SimpleOption, SimpleSelect, Skeleton, SkeletonCircle, SkeletonText, Spacer, Spinner, Stack, Switch, SwitchPrimitive, SwitchPrimitiveThumb, Tab, TabList, TabPanel, Table, TableCaption, Tabs, Tag, TagCloseButton, TagLabel, TagLeftIcon, TagRightIcon, Tbody, Td, Text, Textarea, Tfoot, Th, Thead, Tooltip, Tr, UnorderedList, VStack, __DEV__, accordionButtonStyles, accordionIconStyles, accordionItemStyles, accordionPanelStyles, alertDescriptionStyles, alertIconStyles, alertStyles, alertTitleStyles, anchorStyles, aspectRatioStyles, avatarBadgeStyles, avatarExcessStyles, avatarGroupStyles, avatarImageStyles, avatarStyles, badgeStyles, baseDialogStyles, baseInputResetStyles, baseModalContainerStyles, baseTheme, breadcrumbItemStyles, breadcrumbLinkStyles, breadcrumbListStyles, breadcrumbSeparatorStyles, breadcrumbStyles, buttonGroupStyles, buttonIconSpinnerStyles, buttonIconStyles, buttonLoaderStyles, buttonStyles, callHandler, cast, centerStyles, chainHandlers, checkboxControlStyles, checkboxLabelStyles, checkboxWrapperStyles, circularProgressIndicatorContainerStyles, circularProgressIndicatorStyles, circularProgressLabelStyles, circularProgressStyles, circularProgressTrackStyles, classNames, closeButtonStyles, collapseStyles, colorModeClassNames, config, containerStyles, contains, createClassSelector, createDisclosure, createIcon, createTheme, css, dividerStyles, drawerContainerStyles, drawerDialogStyles, drawerTransitionName, drawerTransitionStyles, formControlStyles, formErrorMessageStyles, formHelperTextStyles, formLabelStyles, getActiveElement, getColorModeClassName, getCssText, getDefaultColorMode, getNextIndex, getOwnerDocument, getPrevIndex, getRelatedTarget, globalCss, growAndShrink, hasTabIndex, headingStyles, hope, hopeButtonClass, hopeIconButtonClass, hopeIconClass, hopeSkeletonClass, iconStyles, inputAddonStyles, inputElementStyles, inputGroupStyles, inputStyles, isArray, isChildrenFunction, isContentEditable, isDisabled, isElement, isFocusable, isFunction, isHTMLElement, isHidden, isNull, isNumber, isObject, isScrollable, isString, isUndefined, isValidEvent, kbdStyles, keyframes, listIconStyles, listStyles, maintainScrollVisibility, mapKeys, menuContentStyles, menuGroupStyles, menuItemCommandStyles, menuItemIconWrapperStyles, menuItemStyles, menuItemTextStyles, menuLabelStyles, menuTransitionName, menuTransitionStyles, menuTriggerStyles, mockBody, modalBodyStyles, modalCloseButtonStyles, modalContainerStyles, modalDialogStyles, modalFooterStyles, modalHeaderStyles, modalOverlayStyles, modalTransitionName, modalTransitionStyles, noop, normalizeEventKey, notificationDescriptionStyles, notificationIconStyles, notificationListStyles, notificationLoaderStyles, notificationService, notificationStyles, notificationTitleStyles, notificationTransitionName, notificationTransitionStyles, popoverArrowStyles, popoverBodyStyles, popoverCloseButtonStyles, popoverContentStyles, popoverFooterStyles, popoverHeaderStyles, popoverTransitionName, popoverTransitionStyles, progressIndicatorStyles, progressLabelStyles, progressStyles, radioControlStyles, radioLabelStyles, radioWrapperStyles, range, requiredIndicatorStyles, saveColorModeToLocalStorage, selectContentStyles, selectIconStyles, selectLabelStyles, selectListboxStyles, selectMultiValueStyles, selectOptGroupStyles, selectOptionIndicatorStyles, selectOptionStyles, selectOptionTextStyles, selectPlaceholderStyles, selectSingleValueStyles, selectTagCloseButtonStyles, selectTagStyles, selectTransitionName, selectTransitionStyles, selectTriggerStyles, skeletonStyles, spacerStyles, spinnerStyles, stackStyles, switchControlStyles, switchLabelStyles, switchWrapperStyles, syncBodyColorModeClassName, tabListStyles, tabPanelStyles, tabStyles, tableBodyStyles, tableCaptionStyles, tableCellStyles, tableColumnHeaderStyles, tableFootStyles, tableStyles, tabsStyles, tagCloseButtonStyles, tagLabelStyles, tagLeftIconStyles, tagRightIconStyles, tagStyles, textStyles, textareaStyles, toggleControlLabelStyles, toggleControlStyles, toggleWrapperStyles, tooltipArrowStyles, tooltipStyles, tooltipTransitionName, tooltipTransitionStyles, useAccordionContext, useAccordionItemContext, useAlertContext, useAvatarGroupContext, useBreadcrumbContext, useButtonGroupContext, useCheckboxGroupContext, useCheckboxPrimitiveContext, useCircularProgressContext, useClickOutside, useColorMode, useColorModeValue, useDrawerContext, useEvent, useFormControlContext, useInputGroupContext, useMenuContext, useMenuGroupContext, useModalContext, useNotificationContext, usePopoverContext, useProgressContext, useRadioContext, useRadioGroupContext, useSelectContext, useSelectOptGroupContext, useSelectOptionContext, useStyleConfig, useSwitchPrimitivehContext, useTableContext, useTabsContext, useTagContext, useTheme, valueToPercent };
