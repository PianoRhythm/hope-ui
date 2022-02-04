import { mergeProps, splitProps } from "solid-js";

import { useTheme } from "@/theme/provider";
import { classNames, createCssSelector } from "@/utils/css";

import { Box } from "../box/box";
import { ElementType, HopeComponentProps } from "../types";
import { baseTextStyles, BaseTextVariants } from "./text.styles";

export type BaseTextProps<C extends ElementType> = HopeComponentProps<C, BaseTextVariants>;

/**
 * [Internal] Foundation of <Text /> and <Heading /> components.
 */
export function BaseText<C extends ElementType = "p">(props: BaseTextProps<C>) {
  const defaultProps: BaseTextProps<"p"> = {
    as: "p",
  };

  const propsWithDefault: BaseTextProps<"p"> = mergeProps(defaultProps, props);
  const [local, variantProps, others] = splitProps(propsWithDefault, ["class"], ["size"]);

  const classes = () => classNames(local.class, baseTextStyles(variantProps));

  return <Box class={classes()} {...others} />;
}

/* -------------------------------------------------------------------------------------------------
 * Text
 * -----------------------------------------------------------------------------------------------*/

const hopeTextClass = "hope-text";

/**
 * Text component is the used to render text and paragraphs within an interface.
 * It renders a <p> tag by default.
 */
export function Text<C extends ElementType = "p">(props: BaseTextProps<C>) {
  const baseStyle = useTheme().components.Text?.baseStyle;

  const [local, others] = splitProps(props, ["class"]);

  const classes = () => classNames(local.class, hopeTextClass);

  return <BaseText class={classes()} __baseStyle={baseStyle} {...others} />;
}

Text.toString = () => createCssSelector(hopeTextClass);