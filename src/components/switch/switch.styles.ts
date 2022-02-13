import { VariantProps } from "@stitches/core";

import { createStyles } from "@/styled-system/stitches.config";
import { SystemStyleObject } from "@/styled-system/types";
import { visuallyHiddenStyles } from "@/theme/utils";

/* -------------------------------------------------------------------------------------------------
 * Switch - input
 * -----------------------------------------------------------------------------------------------*/

export const switchInputStyles = createStyles(visuallyHiddenStyles);

/* -------------------------------------------------------------------------------------------------
 * Switch - container
 * -----------------------------------------------------------------------------------------------*/

export const switchContainerStyles = createStyles({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",

  borderColor: "$neutral8",

  cursor: "pointer",
  userSelect: "none",

  "&[data-disabled]": {
    opacity: "0.4",
    cursor: "not-allowed",
  },

  variants: {
    size: {
      sm: {
        fontSize: "$sm",
        lineHeight: "$5",
      },
      md: {
        fontSize: "$base",
        lineHeight: "$6",
      },
      lg: {
        fontSize: "$lg",
        lineHeight: "$7",
      },
    },
    labelPosition: {
      left: {
        flexDirection: "row-reverse",
      },
      right: {
        flexDirection: "row",
      },
    },
  },
});

export type SwitchContainerVariants = VariantProps<typeof switchContainerStyles>;

/* -------------------------------------------------------------------------------------------------
 * Switch - control
 * -----------------------------------------------------------------------------------------------*/

interface ColorVariantConfig {
  color: string;
  boxShadowColorFocus: string;
  borderColorFocus: string;
}

function createColorVariant(config: ColorVariantConfig): SystemStyleObject {
  return {
    color: config.color,

    [`.${switchInputStyles}:focus + &`]: {
      boxShadow: `0 0 0 3px $colors${config.boxShadowColorFocus}`,
      borderColor: config.borderColorFocus,
    },
  };
}

export const switchControlStyles = createStyles({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "start",
  flexShrink: 0,

  height: "100%",

  outline: "none",

  borderRadius: "$full",

  padding: 0,

  verticalAlign: "middle",
  userSelect: "none",
  transition: "background-color 250ms, border-color 250ms, box-shadow 250ms",

  "&[data-disabled]": {
    opacity: "0.4",
    cursor: "not-allowed",
  },

  "&[data-invalid]": {
    borderColor: "$danger8",
    color: "$danger9",
  },

  [`.${switchInputStyles}:focus + &[data-invalid]`]: {
    boxShadow: "0 0 0 3px $colors$danger5",
    borderColor: "$danger8",
  },

  [`&[data-checked], 
    .${switchInputStyles}:focus + &[data-checked]`]: {
    borderColor: "transparent",
    backgroundColor: "currentColor",
  },

  // Switch trackball
  "&::before": {
    content: "''",
    position: "absolute",
    top: "1px",
    left: "1px",
    zIndex: "1",
    borderRadius: "$full",
    transition: "250ms",
  },

  variants: {
    hasIconOn: {
      true: {},
    },
    hasIconOff: {
      true: {
        justifyContent: "end",
      },
    },
    variant: {
      outline: {
        border: "1px solid",
        borderColor: "inherit", // allow passing borderColor style props to parent container
        backgroundColor: "transparent",

        "& svg": {
          color: "$neutral7",
        },

        "&[data-checked] svg": {
          color: "$switchTrackBg",
        },

        "&::before": {
          backgroundColor: "$neutral7",
        },

        "&[data-checked]::before": {
          backgroundColor: "$switchTrackBg",
        },
      },
      filled: {
        border: "1px solid transparent",
        backgroundColor: "$neutral7",

        "& svg": {
          color: "$switchTrackBg",
        },

        "&::before": {
          backgroundColor: "$switchTrackBg",
        },
      },
    },
    colorScheme: {
      primary: createColorVariant({
        color: "$primary9",
        boxShadowColorFocus: "$primary5",
        borderColorFocus: "$primary8",
      }),
      neutral: createColorVariant({
        color: "$neutral9",
        boxShadowColorFocus: "$neutral5",
        borderColorFocus: "$neutral8",
      }),
      success: createColorVariant({
        color: "$success9",
        boxShadowColorFocus: "$success5",
        borderColorFocus: "$success8",
      }),
      info: createColorVariant({
        color: "$info9",
        boxShadowColorFocus: "$info5",
        borderColorFocus: "$info8",
      }),
      warning: createColorVariant({
        color: "$warning9",
        boxShadowColorFocus: "$warning5",
        borderColorFocus: "$warning8",
      }),
      danger: createColorVariant({
        color: "$danger9",
        boxShadowColorFocus: "$danger5",
        borderColorFocus: "$danger8",
      }),
    },
    size: {
      sm: {
        height: "16px",
        width: "28px",

        "& svg": {
          boxSize: "12px",
        },

        "&::before": {
          boxSize: "12px",
        },

        "&[data-checked]::before": {
          transform: "translateX(12px)",
        },
      },
      md: {
        columnGap: "2px",
        height: "20px",
        width: "36px",

        "& svg": {
          boxSize: "16px",
        },

        "&::before": {
          boxSize: "16px",
        },

        "&[data-checked]::before": {
          transform: "translateX(16px)",
        },
      },
      lg: {
        columnGap: "4px",
        height: "28px",
        width: "52px",

        "& svg": {
          boxSize: "24px",
        },

        "&::before": {
          boxSize: "24px",
        },

        "&[data-checked]::before": {
          transform: "translateX(24px)",
        },
      },
    },
  },
  compoundVariants: [
    {
      hasIconOn: true,
      hasIconOff: true,
      css: { justifyContent: "space-around" },
    },
  ],
});

export type SwitchControlVariants = VariantProps<typeof switchControlStyles>;

/* -------------------------------------------------------------------------------------------------
 * Switch - span containing the text label
 * -----------------------------------------------------------------------------------------------*/

function createSizeAndLabelPositionCompoundVariants() {
  return Object.entries({
    sm: "$1_5",
    md: "$2",
    lg: "$2",
  }).flatMap(([key, value]) => [
    {
      labelPosition: "left",
      size: key,
      css: { marginInlineEnd: value },
    },
    {
      labelPosition: "right",
      size: key,
      css: { marginInlineStart: value },
    },
  ]);
}

export const switchLabelStyles = createStyles({
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {},
    },
    labelPosition: {
      left: {},
      right: {},
    },
  },
  compoundVariants: createSizeAndLabelPositionCompoundVariants(),
});
