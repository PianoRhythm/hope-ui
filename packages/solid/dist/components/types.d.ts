import { Component, ComponentProps, JSX, ParentProps } from "solid-js";
import { StyleProps } from "../styled-system/system";
import { SystemStyleObject } from "../styled-system/types";
import { OverrideProps } from "../utils/types";
/**
 * All HTML and SVG elements.
 */
export declare type DOMElements = keyof JSX.IntrinsicElements;
/**
 * Represent any HTML element or SolidJS component.
 */
export declare type ElementType<Props = any> = DOMElements | Component<Props>;
/**
 * Take the props of the passed HTML element or component and returns its type.
 */
export declare type PropsOf<C extends ElementType> = ComponentProps<C>;
/**
 * All SolidJS props that apply css classes.
 */
export interface ClassProps {
    class?: string;
    className?: string;
    classList?: {
        [key: string]: boolean;
    };
}
/**
 * Tag or component that should be used as root element.
 */
export interface AsProp<C extends ElementType> {
    as?: C;
}
/**
 * Hope UI specific props.
 */
export declare type HopeProps = StyleProps & ClassProps & {
    __baseStyle?: SystemStyleObject;
};
/**
 * Enhance props of a SolidJS component or JSX element with Hope UI props.
 */
export declare type HTMLHopeProps<C extends ElementType, AdditionalProps = {}> = OverrideProps<ParentProps<PropsOf<C>>, HopeProps & AdditionalProps & {
    as?: C;
}>;
/**
 * A hope-enabled component that accept style props.
 */
export declare type HopeComponent<T extends ElementType, P = {}> = <C extends ElementType = T>(props: HTMLHopeProps<C, P>) => JSX.Element;
/**
 * All html and svg elements for hope components.
 * This is mostly for `hope.<element>` syntax.
 */
export declare type HTMLHopeComponents = {
    [Tag in DOMElements]: HopeComponent<Tag>;
};
export interface HopeFactoryStyleOptions<T extends ElementType> {
    /**
     * Base CSS class applied to the component.
     * This class will be used when targeting the component in a css selector.
     */
    baseClass?: string;
    /**
     * Base style applied to the component.
     */
    baseStyle?: SystemStyleObject | ((props: HTMLHopeProps<T>) => SystemStyleObject);
}
/**
 * Factory function that converts non-hope components or jsx element
 * to hope-enabled components so you can pass style props to them.
 */
export declare type HopeFactory = <T extends ElementType>(component: T, styleOptions?: HopeFactoryStyleOptions<T>) => HopeComponent<T>;
/**
 * Style configuration for Hope UI single-part component.
 */
export interface SinglePartComponentStyleConfig<Props> {
    /**
     * Style object for base or default style
     */
    baseStyle?: SystemStyleObject;
    /**
     * Default component props values.
     */
    defaultProps?: Props;
}
//# sourceMappingURL=types.d.ts.map