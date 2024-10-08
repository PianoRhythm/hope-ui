import { autoUpdate, flip, offset, shift } from "@floating-ui/dom";
import { useFloating } from 'solid-floating-ui';
import { Component, createEffect, createMemo, createSignal, createUniqueId, mergeProps, onMount, Show, splitProps } from "solid-js";
import { Dynamic, Portal } from "solid-js/web";
import { createStyledSystemClass, getUsedStylePropNames } from "../styled-system/system";
import { isFunction } from "../utils/assertion";
import { classNames, createClassSelector } from "../utils/css";
import {
  DOMElements,
  ElementType,
  HopeComponent,
  HopeFactory,
  HopeFactoryStyleOptions,
  HTMLHopeComponents,
  HTMLHopeProps,
} from "./types";
// TODO: add stitches variant support

const styled: HopeFactory = <T extends ElementType>(
  component: T,
  styleOptions?: HopeFactoryStyleOptions<T>
) => {
  const hopeComponent: HopeComponent<T> = props => {
    const usedStylePropNames = getUsedStylePropNames(props);

    const propsWithDefault = mergeProps({ as: component }, props);

    const [local, styleProps, others] = splitProps(
      propsWithDefault as HTMLHopeProps<any>,
      [
        "__tooltip_title",
        "__tooltip_show_arrow",
        "__tooltip_placement",
        "__tooltip_id",
        "__tooltip_context_id",
        "__tooltip_open_delay",
        "__tooltip_close_delay",
        "__tooltip_open_on_focus",
        "__tooltip_skip_delay_duration",
        "__tooltip_open_on_hover",
        "__tooltip_close_on_escape",
        "__tooltip_close_on_pointer_down",
        "__tooltip_open",
        "__tooltip_close_on_scroll",
        "__tooltip_hoverable_content",
        "as", "class", "className", "__baseStyle"
      ],
      usedStylePropNames
    );

    const __baseStyles = createMemo(() => {
      const factoryBaseStyle = isFunction(styleOptions?.baseStyle)
        ? styleOptions?.baseStyle(props as any)
        : styleOptions?.baseStyle;

      // order is important for css override
      return [factoryBaseStyle, local.__baseStyle];
    });

    const classes = () => {
      return classNames(
        styleOptions?.baseClass, // In order to target the component in stitches css method and prop, like any other Hope UI components.
        local.class,
        local.className,
        createStyledSystemClass(styleProps, __baseStyles())
      );
    };

    let DynamicComponent = () =>
      <Dynamic component={local.as ?? "div"} class={classes()} {...others} />;

    let DynamicComponentWithTooltip: Component = () => {
      const [onOpen, setOpen] = createSignal(false);
      const [reference, setReference] = createSignal<HTMLElement>();
      const [floating, setFloating] = createSignal<HTMLElement>();
      let referenceElementID = createUniqueId();

      let placement = (local.__tooltip_placement ?? "top").toLowerCase();
      let position = useFloating(reference, floating, {
        open: onOpen,
        // @ts-ignore
        placement: placement,
        middleware: [
          offset(10),
          flip(),
          shift()
        ],
        whileElementsMounted: autoUpdate,
      });

      onMount(() => {
        setReference(document.querySelector(`[unique-id="${referenceElementID}"]`) as HTMLElement);
      });

      const onCloseEvent = (event: Event) => {
        // event.stopPropagation();
        setOpen(false);
      };

      const DynamicTooltip = () => {
        let element!: HTMLDivElement;
        onMount(() => { setFloating(element); });

        return <Dynamic
          component="div"
          ref={element}
          style={{
            position: position.strategy,
            "z-index": "var(--hope-zIndices-tooltip, 1000)",
            top: `${position.y ?? 0}px`,
            left: `${position.x ?? 0}px`,
            width: "max-content"
          }}
          onMouseOver={() => setOpen(true)}
          onMouseOut={onCloseEvent}
          onBlur={onCloseEvent}
          onClick={onCloseEvent}
          onMouseDown={onCloseEvent}
          data-open={onOpen()}
          data-corvu-tooltip-content
        >
          {local.__tooltip_title}
          {(local.__tooltip_show_arrow ?? true) && <Dynamic
            component="div"
            style={{ "z-index": "var(--hope-zIndices-tooltip, 1000)" }}
            data-corvu-tooltip-arrow
            arrow-left={placement == "left"}
            arrow-top={placement == "top"}
            arrow-right={placement == "right"}
            arrow-bottom={placement == "bottom"}
          />
          }
        </Dynamic>;
      };

      return (<>
        <Dynamic
          component={local.as ?? "div"}
          class={classes()}
          {...others}
          unique-id={referenceElementID}
          onMouseOver={(evt: MouseEvent) => {
            setOpen(true);
            (others.onMouseOver ?? others.onmouseover)?.(evt);
          }}
          onMouseLeave={(evt: MouseEvent) => {
            setOpen(false);
            (others.onMouseLeave ?? others.onmouseleave)?.(evt);
          }}
          onBlur={(event: FocusEvent) => {
            if (!(event.currentTarget as HTMLElement)?.contains(event.relatedTarget as any)) {
              setOpen(false);
            }
            (others.onBlur ?? others.onblur)?.(event);
          }}
          onClick={(evt: MouseEvent) => {
            setOpen(false);
            (others.onClick ?? others.onclick)?.(evt);
          }}
          onMouseDown={(evt: MouseEvent) => {
            setOpen(false);
            (others.onMouseDown ?? others.onmousedown)?.(evt);
          }}
        />
        <Portal>
          {onOpen() && <DynamicTooltip />}
        </Portal >
      </>);
    };

    return <Show when={local.__tooltip_title} fallback={<DynamicComponent />}>
      <DynamicComponentWithTooltip />
    </Show>;
  };

  // In order to target the component in stitches css method and prop, like any other Hope UI components.
  hopeComponent.toString = () =>
    styleOptions?.baseClass ? createClassSelector(styleOptions.baseClass) : "";

  return hopeComponent;
};

function factory() {
  const cache = new Map<DOMElements, HopeComponent<DOMElements>>();

  return new Proxy(styled, {
    /**
     * @example
     * const Div = hope("div")
     * const WithHope = hope(AnotherComponent)
     */
    apply(target, thisArg, argArray: [ElementType, HopeFactoryStyleOptions<ElementType>]) {
      return styled(...argArray);
    },

    /**
     * @example
     * <hope.div />
     */
    get(_, element: DOMElements) {
      if (!cache.has(element)) {
        cache.set(element, styled(element));
      }
      return cache.get(element);
    },
  }) as HopeFactory & HTMLHopeComponents;
}

export const hope = factory();