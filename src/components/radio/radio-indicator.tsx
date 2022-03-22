import { splitProps } from "solid-js";

import { useComponentStyleConfigs } from "@/theme/provider";
import { classNames, createClassSelector } from "@/utils/css";

import { hope } from "../factory";
import { ElementType, HTMLHopeProps } from "../types";
import { useRadioContext } from "./radio";
import { radioIndicatorStyles } from "./radio.styles";

export type RadioIndicatorProp<C extends ElementType = "input"> = HTMLHopeProps<C>;

const hopeRadioIndicatorClass = "hope-radio__indicator";

/**
 * The visual indicator that represents a `radio`.
 */
export function RadioIndicator<C extends ElementType = "input">(props: RadioIndicatorProp<C>) {
  const theme = useComponentStyleConfigs().Radio;

  const radioContext = useRadioContext();

  const [local, others] = splitProps(props as RadioIndicatorProp<"input">, ["class"]);

  const classes = () => {
    return classNames(
      local.class,
      hopeRadioIndicatorClass,
      radioIndicatorStyles({
        variant: radioContext.state.variant,
        colorScheme: radioContext.state.colorScheme,
        size: radioContext.state.size,
      })
    );
  };

  return (
    <hope.span
      aria-hidden={true}
      class={classes()}
      __baseStyle={theme?.baseStyle?.indicator}
      data-focus={radioContext.state["data-focus"]}
      data-checked={radioContext.state["data-checked"]}
      data-required={radioContext.state["data-required"]}
      data-disabled={radioContext.state["data-disabled"]}
      data-invalid={radioContext.state["data-invalid"]}
      data-readonly={radioContext.state["data-readonly"]}
      {...others}
    />
  );
}

RadioIndicator.toString = () => createClassSelector(hopeRadioIndicatorClass);
