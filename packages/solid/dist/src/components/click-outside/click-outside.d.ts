import { ParentProps } from 'solid-js';
export type ClickOutsideProps = ParentProps<{
    /**
     * Callback invoked when the user click outside.
     */
    onClickOutside: (event: Event) => void;
}>;
/**
 * Renderless component that manage outside click on its children.
 * It accepts one `JSX.Element` as children, no `Fragment`.
 */
export declare function ClickOutside(props: ClickOutsideProps): import('solid-js').ChildrenReturn;
//# sourceMappingURL=click-outside.d.ts.map