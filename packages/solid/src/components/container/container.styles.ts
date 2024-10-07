import { VariantProps } from "@stitches/core";

import { css } from "../../styled-system/stitches.config";

export const containerStyles = css({
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
        mx: "auto",
      },
    },

    /**
     * If `true`, container will center its children regardless of their width.
     */
    centerContent: {
      true: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
  },
});

export type ContainerVariants = VariantProps<typeof containerStyles>;
