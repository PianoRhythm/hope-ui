import { ElementType, HTMLHopeProps } from '../types';
import { TableCaptionVariants } from './table.styles';
export type ThemeableTableCaptionOptions = Pick<TableCaptionVariants, "placement">;
export type TableCaptionProps<C extends ElementType = "caption"> = HTMLHopeProps<C, ThemeableTableCaptionOptions>;
export declare function TableCaption<C extends ElementType = "caption">(props: TableCaptionProps<C>): import("solid-js").JSX.Element;
export declare namespace TableCaption {
    var toString: () => string;
}
//# sourceMappingURL=table-caption.d.ts.map