import { globalCss } from "./stitches.config";

/**
 * Hope UI global css reset
 */
export const globalResetStyles = globalCss({
  /*
    1. Use a more-intuitive box-sizing model.
    2. Set default border width and style to apply border props easily.
  */
  "*, ::before, ::after": {
    boxSizing: "border-box" /* 1 */,
    borderWidth: "0" /* 2  */,
    borderStyle: "solid" /* 2  */,
  },

  /* Remove default margin. */
  "*": {
    margin: 0,
  },

  /* Allow percentage-based heights in the application. */
  "html, body": {
    height: "100%",
  },

  /*
    1. Use theme `sans` font-family.
    2. Use theme `base` line height.
  */
  html: {
    fontFamily: "$sans" /* 1 */,
    lineHeight: "$base" /* 2 */,
    fontSize: "16px",
  },

  /*
    1. Use theme `background` color for background-color.
    2. Use theme `neutral` color for text.
    3. Improve text rendering.
  */
  body: {
    backgroundColor: "$background" /* 1 */,
    color: "$neutral12" /* 2 */,
    fontFamily: "inherit",
    lineHeight: "inherit",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },

  /* Headings are unstyled. */
  "h1, h2, h3, h4, h5, h6": {
    fontSize: "inherit",
    fontWeight: "inherit",
  },

  /* Avoid text overflows. */
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },

  /* Improve media defaults. */
  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },

  /* Remove built-in form typography styles. */
  "button, input, textarea, select, optgroup": {
    fontFamily: "inherit",
    fontSize: "100%",
  },

  /* Buttons have a default outline. */
  "button:focus": {
    outline: "5px auto -webkit-focus-ring-color",
  },

  /* fieldset have no margin and padding. */
  fieldset: {
    margin: 0,
    padding: 0,
  },

  /* List have no margin and padding. */
  "ol, ul": {
    margin: 0,
    padding: 0,
  },

  /* Anchor are unstyled. */
  a: {
    backgroundColor: "transparent",
    color: "inherit",
    textDecoration: "inherit",
  },

  "[data-corvu-tooltip-content]": {
    "border-radius": "0.25rem",
    "background-color": "var(--hope-colors-tooltipContent)",
    "padding-left": "0.25rem",
    "padding-right": "0.25rem",
    "padding-top": "0.15rem",
    "padding-bottom": "0.15rem",
  },

  "[data-corvu-tooltip-arrow][arrow-top='true']": {
    width: 0,
    height: 0,
    "border-left": "10px solid transparent",
    "border-right": "10px solid transparent",
    "border-top": "10px solid var(--hope-colors-tooltipArrow)",
    "left": "calc(50% - 10px)",
    "bottom": "-10px",
  },

  "[data-corvu-tooltip-arrow][arrow-bottom='true']": {
    width: 0,
    height: 0,
    "border-left": "10px solid transparent",
    "border-right": "10px solid transparent",
    "border-bottom": "10px solid var(--hope-colors-tooltipArrow)",
    "left": "calc(50% - 10px)",
    "top": "-10px",
  },

  "[data-corvu-tooltip-arrow][arrow-left='true']": {
    width: 0,
    height: 0,
    "border-top": "10px solid transparent",
    "border-bottom": "10px solid transparent",
    "border-left": "10px solid var(--hope-colors-tooltipArrow)",
    "right": "-10px",
    "top": "calc(50% - 10px)",
  },

  "[data-corvu-tooltip-arrow][arrow-right='true']": {
    width: 0,
    height: 0,
    "border-top": "10px solid transparent",
    "border-bottom": "10px solid transparent",
    "border-right": "10px solid var(--hope-colors-tooltipArrow)",
    "left": "-10px",
    "top": "calc(50% - 10px)",
  },

  "[data-corvu-tooltip-arrow]": {
    "position": "absolute",
    color: "var(--hope-colors-tooltipArrow)",
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
    "--tw-enter-translate-y": "0.25rem",
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
    "--tw-exit-translate-y": "0.25rem",
  },

  "@keyframes corvu-tooltip-enter": {
    "from": {
      opacity: "var(--tw-enter-opacity, 1)",
      transform: "translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))"
    }
  },
  "@keyframes corvu-tooltip-exit": {
    "to": {
      opacity: "var(--tw-exit-opacity, 1)",
      transform: "translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))"
    }
  }
});
