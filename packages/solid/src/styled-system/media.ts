import { sizes } from "./tokens/sizes";

export const baseMedia = {
  desktop_s: `(min-width: ${sizes.containerDesktopS})`,
  mobile_s: `(min-width: ${sizes.containerMobileS})`,
  mobile_m: `(min-width: ${sizes.containerMobileM})`,
  mobile_l: `(min-width: ${sizes.containerMobileL})`,
  sm: `(min-width: ${sizes.containerSm})`,
  md: `(min-width: ${sizes.containerMd})`,
  lg: `(min-width: ${sizes.containerLg})`,
  xl: `(min-width: ${sizes.containerXl})`,
  "2xl": `(min-width: ${sizes.container2xl})`,
  "reduce-motion": "(prefers-reduced-motion: reduce)",
  light: "(prefers-color-scheme: light)",
  dark: "(prefers-color-scheme: dark)",
};
