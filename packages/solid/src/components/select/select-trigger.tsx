import { createUniqueId, JSX, onMount, splitProps } from "solid-js";

import { useStyleConfig } from "../../hope-provider";
import { isFunction } from "../../utils/assertion";
import { classNames, createClassSelector } from "../../utils/css";
import { chainHandlers } from "../../utils/function";
import { hope } from "../factory";
import { ElementType, HTMLHopeProps } from "../types";
import { useSelectContext } from "./select";
import { selectTriggerStyles } from "./select.styles";

export type SelectTriggerProps<C extends ElementType = "button"> = HTMLHopeProps<C>;

const hopeSelectTriggerClass = "hope-select__trigger";

/**
 * The trigger that toggles the select.
 */
export function SelectTrigger<C extends ElementType = "button">(props: SelectTriggerProps<C>) {
  let referenceElementID = createUniqueId();
  const theme = useStyleConfig().Select;

  const selectContext = useSelectContext();

  const [local, others] = splitProps(props as SelectTriggerProps<"button">, [
    "ref",
    "class",
    "onClick",
    "onKeyDown",
    "onFocus",
    "onBlur",
  ]);

  const classes = () => {
    return classNames(
      local.class,
      hopeSelectTriggerClass,
      selectTriggerStyles({
        variant: selectContext.state.variant,
        size: selectContext.state.size,
      })
    );
  };

  const assignTriggerRef = (el: HTMLButtonElement) => {
    if (!el) return;
    selectContext.assignTriggerRef(el);

    if (isFunction(local.ref)) {
      local.ref(el);
    } else {
      // eslint-disable-next-line solid/reactivity
      local.ref = el;
    }
  };

  onMount(() => {
    assignTriggerRef(document.querySelector(`[unique-id="${referenceElementID}"]`) as HTMLButtonElement);
  });

  const onClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> = event => {
    chainHandlers(selectContext.onTriggerClick, local.onClick)(event);
  };

  const onKeyDown: JSX.EventHandlerUnion<HTMLButtonElement, KeyboardEvent> = event => {
    chainHandlers(selectContext.onTriggerKeyDown, local.onKeyDown)(event);
  };

  const onFocus: JSX.EventHandlerUnion<HTMLButtonElement, FocusEvent> = event => {
    chainHandlers(selectContext.formControlProps.onFocus, local.onFocus)(event);
  };

  const onBlur: JSX.EventHandlerUnion<HTMLButtonElement, FocusEvent> = event => {
    chainHandlers(
      selectContext.onTriggerBlur,
      selectContext.formControlProps.onBlur,
      local.onBlur
    )(event);
  };

  return (
    <hope.button
      ref={assignTriggerRef}
      id={selectContext.state.triggerId}
      unique-id={referenceElementID}
      disabled={selectContext.state.disabled}
      role="combobox"
      type="button"
      tabindex="0"
      aria-haspopup="listbox"
      aria-activedescendant={selectContext.state.activeDescendantId}
      aria-controls={selectContext.state.listboxId}
      aria-expanded={selectContext.state.opened}
      aria-required={selectContext.formControlProps["aria-required"]}
      aria-invalid={selectContext.formControlProps["aria-invalid"]}
      aria-readonly={selectContext.formControlProps["aria-readonly"]}
      aria-describedby={selectContext.formControlProps["aria-describedby"]}
      class={classes()}
      __baseStyle={theme?.baseStyle?.trigger}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      {...others}
    />
  );
}

SelectTrigger.toString = () => createClassSelector(hopeSelectTriggerClass);
