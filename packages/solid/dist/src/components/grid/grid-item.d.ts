import { Property } from 'csstype';
import { ResponsiveProps } from '../../styled-system/types';
import { ElementType, HTMLHopeProps } from '../types';
type GridSpanValue = string | number | "auto" | "full";
export type GridItemOptions = ResponsiveProps<{
    area?: Property.GridArea;
    colSpan?: GridSpanValue;
    colStart?: Property.GridColumnStart;
    colEnd?: Property.GridColumnEnd;
    rowSpan?: GridSpanValue;
    rowStart?: Property.GridRowStart;
    rowEnd?: Property.GridRowEnd;
}>;
export type GridItemProps<C extends ElementType = "div"> = HTMLHopeProps<C, GridItemOptions>;
/**
 * Component used as a child of Grid to control the span, and start positions within the grid
 */
export declare function GridItem<C extends ElementType = "div">(props: GridItemProps<C>): import("solid-js").JSX.Element;
export declare namespace GridItem {
    var toString: () => string;
}
export {};
//# sourceMappingURL=grid-item.d.ts.map