import { AddStitchesTokenPrefix } from "../stitches.config";

export const radii = {
  none: 0,
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
};

export type RadiiTokens = AddStitchesTokenPrefix<keyof typeof radii>;
