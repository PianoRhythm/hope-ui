import { mergeProps, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import type { ElementType } from "@/components";
import type { PaperProps } from "@/components/Paper/types";
import { useHopeTheme } from "@/contexts";

export function Paper<C extends ElementType = "div">(props: PaperProps<C>) {
  const paperTheme = useHopeTheme().components?.Paper;

  const defaultProps: PaperProps<"div"> = {
    as: "div",
    padding: paperTheme?.padding ?? "sm",
    radius: paperTheme?.radius ?? "sm",
    shadow: paperTheme?.shadow ?? "sm",
    withBorder: paperTheme?.withBorder ?? false,
  };

  const propsWithDefault = mergeProps(defaultProps, props);
  const [local, others] = splitProps(propsWithDefault, [
    "as",
    "class",
    "className",
    "classList",
    "padding",
    "radius",
    "shadow",
    "withBorder",
  ]);

  const rootClassList = () => ({
    "h-paper": true,
    "h-paper--with-border": local.withBorder,
    [`h-paper--padding-${local.padding}`]: true,
    [`h-paper--radius-${local.radius}`]: true,
    [`h-paper--shadow-${local.shadow}`]: true,
    [local.class || ""]: true,
    [local.className || ""]: true,
    ...local.classList,
  });

  return <Dynamic component={local.as} classList={rootClassList()} {...others} />;
}
