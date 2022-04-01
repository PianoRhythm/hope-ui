import { css, globalCss } from "@/styled-system/stitches.config";

/* -------------------------------------------------------------------------------------------------
 * Popover - solid-transition-group classes
 * -----------------------------------------------------------------------------------------------*/

export const popoverTransitionName = {
  scale: "hope-popover-scale-transition",
};

export const popoverTransitionStyles = globalCss({
  /* scale */
  [`.${popoverTransitionName.scale}-enter, .${popoverTransitionName.scale}-exit-to`]: {
    opacity: 0,
    transform: "scale(0.95)",
  },
  [`.${popoverTransitionName.scale}-enter-to, .${popoverTransitionName.scale}-exit`]: {
    opacity: 1,
    transform: "scale(1)",
  },
  [`.${popoverTransitionName.scale}-enter-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease",
  },
  [`.${popoverTransitionName.scale}-exit-active`]: {
    transitionProperty: "opacity, transform",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-in-out",
  },
});

/* -------------------------------------------------------------------------------------------------
 * Popover - content
 * -----------------------------------------------------------------------------------------------*/

export const popoverContentStyles = css({
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
    outline: "none",
    //boxShadow: "$outline",
  },
});

/* -------------------------------------------------------------------------------------------------
 * Popover - header
 * -----------------------------------------------------------------------------------------------*/

export const popoverHeaderStyles = css({
  flex: 0,
  borderColor: "inherit",
  borderBottomWidth: "1px",
  pt: "$2",
  px: "$3",
  pb: "$1",
  fontSize: "$base",
  fontWeight: "$medium",
});

/* -------------------------------------------------------------------------------------------------
 * Popover - body
 * -----------------------------------------------------------------------------------------------*/

export const popoverBodyStyles = css({
  flex: 1,
  px: "$3",
  py: "$1",
});

/* -------------------------------------------------------------------------------------------------
 * Popover - footer
 * -----------------------------------------------------------------------------------------------*/

export const popoverFooterStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  borderColor: "inherit",
  borderTopWidth: "1px",
  pt: "$1",
  px: "$3",
  pb: "$2",
});

/* -------------------------------------------------------------------------------------------------
 * Popover - close button
 * -----------------------------------------------------------------------------------------------*/

export const popoverCloseButtonStyles = css({
  position: "absolute",
  top: "$1_5",
  insetInlineEnd: "$1_5",
});

/* -------------------------------------------------------------------------------------------------
 * Popover - arrow
 * -----------------------------------------------------------------------------------------------*/

export const popoverArrowStyles = css({
  zIndex: "$popover",
  position: "absolute",
  boxSize: "8px",
  border: "1px solid inherit",
  backgroundColor: "inherit",
  transform: "rotate(45deg)",
});