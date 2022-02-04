import { Accessor } from "solid-js";

import { ThemeableButtonOptions } from "@/components/button/button";
import { ThemeableIconButtonOptions } from "@/components/icon-button/icon-button";
import { theme } from "@/styled-system/stitches.config";
import { SystemStyleObject } from "@/styled-system/types";

export type ColorMode = "light" | "dark" | "system";

/**
 * Hope UI - Stitches theme interface.
 */
export type HopeTheme = typeof theme;

/**
 * Stitches theme config interface.
 */
export type ThemeConfig = {
  [Scale in keyof HopeTheme]?: {
    [Token in keyof HopeTheme[Scale]]?: boolean | number | string;
  };
} & {
  [scale in string]: {
    [token in number | string]: boolean | number | string;
  };
};

/**
 * Theme configuration for Hope UI component.
 */
export interface ComponentStyle<Props> {
  /**
   * Style object for base or default style
   */
  baseStyle?: SystemStyleObject;

  /**
   * Default component props values.
   */
  defaultProps?: Props;
}

export interface ComponentsStyles {
  Button?: ComponentStyle<ThemeableButtonOptions>;
  IconButton?: ComponentStyle<ThemeableIconButtonOptions>;
  Heading?: ComponentStyle<void>;
  Text?: ComponentStyle<void>;
  // Tag?: ComponentStyle<ThemeableTagOptions>;
}

/**
 * Hope UI theme override configuration.
 */
export interface HopeThemeConfig {
  initialColorMode?: ColorMode;
  lightTheme?: ThemeConfig;
  darkTheme?: ThemeConfig;
  components?: ComponentsStyles;
}

export interface HopeContextValue {
  theme: Accessor<HopeTheme>;
  components: ComponentsStyles;
  colorMode: Accessor<ColorMode>;
  setColorMode: (value: ColorMode) => void;
  toggleColorMode: () => void;
}
