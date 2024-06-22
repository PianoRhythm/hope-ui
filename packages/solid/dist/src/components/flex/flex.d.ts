import { Property } from 'csstype';
import { ResponsiveProps } from '../../styled-system/types';
import { ElementType, HTMLHopeProps } from '../types';
export type FlexOptions = ResponsiveProps<{
    direction?: Property.FlexDirection;
    wrap?: Property.FlexWrap;
}>;
export type FlexProps<C extends ElementType = "div"> = HTMLHopeProps<C, FlexOptions>;
/**
 * Hope UI component used to create flexbox layouts.
 * It renders a `div` with `display: flex` and comes with helpful style shorthand.
 */
export declare function Flex<C extends ElementType = "div">(props: FlexProps<C>): import("solid-js").JSX.Element;
export declare namespace Flex {
    var toString: () => string;
}
//# sourceMappingURL=flex.d.ts.map