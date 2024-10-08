import { CSS } from '@stitches/core';
export declare const pseudoSelectors: {
    /**
     * Styles for CSS selector `&:hover`
     */
    _hover: (value: CSS) => {
        "&:hover, &[data-hover]": CSS;
    };
    /**
     * Styles for CSS Selector `&:active`
     */
    _active: (value: CSS) => {
        "&:active, &[data-active]": CSS;
    };
    /**
     * Styles for CSS selector `&:focus`
     */
    _focus: (value: CSS) => {
        "&:focus, &[data-focus]": CSS;
    };
    /**
     * Styles for the highlighted state.
     */
    _highlighted: (value: CSS) => {
        "&[data-highlighted]": CSS;
    };
    /**
     * Styles to apply when a child of this element has received focus
     * - CSS Selector `&:focus-within`
     */
    _focusWithin: (value: CSS) => {
        "&:focus-within": CSS;
    };
    /**
     * Styles to apply when this element has received focus via tabbing
     * - CSS Selector `&:focus-visible`
     */
    _focusVisible: (value: CSS) => {
        "&:focus-visible": CSS;
    };
    /**
     * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
     * - `&[aria-disabled=true]`
     * - `&:disabled`
     * - `&[data-disabled]`
     */
    _disabled: (value: CSS) => {
        "&[disabled], &[aria-disabled=true], &[data-disabled]": CSS;
    };
    /**
     * Styles for CSS Selector `&:readonly`
     */
    _readOnly: (value: CSS) => {
        "&[aria-readonly=true], &[readonly], &[data-readonly]": CSS;
    };
    /**
     * Styles for CSS selector `&::before`
     *
     * NOTE:When using this, ensure the `content` is wrapped in a backtick.
     * @example
     * ```jsx
     * <Box _before={{content:`""` }}/>
     * ```
     */
    _before: (value: CSS) => {
        "&::before": CSS;
    };
    /**
     * Styles for CSS selector `&::after`
     *
     * NOTE:When using this, ensure the `content` is wrapped in a backtick.
     * @example
     * ```jsx
     * <Box _after={{content:`""` }}/>
     * ```
     */
    _after: (value: CSS) => {
        "&::after": CSS;
    };
    /**
     * Styles for CSS selector `&:empty`
     */
    _empty: (value: CSS) => {
        "&:empty": CSS;
    };
    /**
     * Styles to apply when the ARIA attribute `aria-expanded` is `true`
     * - CSS selector `&[aria-expanded=true]`
     */
    _expanded: (value: CSS) => {
        "&[aria-expanded=true], &[data-expanded]": CSS;
    };
    /**
     * Styles to apply when the ARIA attribute `aria-checked` is `true`
     * - CSS selector `&[aria-checked=true]`
     */
    _checked: (value: CSS) => {
        "&[aria-checked=true], &[data-checked]": CSS;
    };
    /**
     * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
     * - CSS selector `&[aria-grabbed=true]`
     */
    _grabbed: (value: CSS) => {
        "&[aria-grabbed=true], &[data-grabbed]": CSS;
    };
    /**
     * Styles for CSS Selector `&[aria-pressed=true]`
     * Typically used to style the current "pressed" state of toggle buttons
     */
    _pressed: (value: CSS) => {
        "&[aria-pressed=true], &[data-pressed]": CSS;
    };
    /**
     * Styles to apply when the ARIA attribute `aria-invalid` is `true`
     * - CSS selector `&[aria-invalid=true]`
     */
    _invalid: (value: CSS) => {
        "&[aria-invalid=true], &[data-invalid]": CSS;
    };
    /**
     * Styles for the valid state
     * - CSS selector `&[data-valid], &[data-state=valid]`
     */
    _valid: (value: CSS) => {
        "&[data-valid], &[data-state=valid]": CSS;
    };
    /**
     * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
     * Useful for styling loading states
     */
    _loading: (value: CSS) => {
        "&[data-loading], &[aria-busy=true]": CSS;
    };
    /**
     * Styles to apply when the ARIA attribute `aria-selected` is `true`
     *
     * - CSS selector `&[aria-selected=true]`
     */
    _selected: (value: CSS) => {
        "&[aria-selected=true], &[data-selected]": CSS;
    };
    /**
     * Styles for CSS Selector `[hidden=true]`
     */
    _hidden: (value: CSS) => {
        "&[hidden], &[data-hidden]": CSS;
    };
    /**
     * Styles for CSS Selector `&:nth-child(even)`
     */
    _even: (value: CSS) => {
        "&:nth-of-type(even)": CSS;
    };
    /**
     * Styles for CSS Selector `&:nth-child(odd)`
     */
    _odd: (value: CSS) => {
        "&:nth-of-type(odd)": CSS;
    };
    /**
     * Styles for CSS Selector `&:first-of-type`
     */
    _first: (value: CSS) => {
        "&:first-of-type": CSS;
    };
    /**
     * Styles for CSS Selector `&:last-of-type`
     */
    _last: (value: CSS) => {
        "&:last-of-type": CSS;
    };
    /**
     * Styles for CSS Selector `&:not(:first-of-type)`
     */
    _notFirst: (value: CSS) => {
        "&:not(:first-of-type)": CSS;
    };
    /**
     * Styles for CSS Selector `&:not(:last-of-type)`
     */
    _notLast: (value: CSS) => {
        "&:not(:last-of-type)": CSS;
    };
    /**
     * Styles for CSS Selector `&:visited`
     */
    _visited: (value: CSS) => {
        "&:visited": CSS;
    };
    /**
     * Used to style the active link in a navigation
     * Styles for CSS Selector `&[aria-current=page]`
     */
    _activeLink: (value: CSS) => {
        "&[aria-current=page]": CSS;
    };
    /**
     * Used to style the current step within a process
     * Styles for CSS Selector `&[aria-current=step]`
     */
    _activeStep: (value: CSS) => {
        "&[aria-current=step]": CSS;
    };
    /**
     * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
     * - CSS selector `&[aria-checked=mixed]`
     */
    _indeterminate: (value: CSS) => {
        "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]": CSS;
    };
    /**
     * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
     */
    _groupHover: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
     */
    _peerHover: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
     */
    _groupFocus: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
     */
    _peerFocus: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
     */
    _groupFocusVisible: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
     */
    _peerFocusVisible: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
     */
    _groupActive: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     * Styles to apply when a sibling element with `.peer` or `data-peer` is active
     */
    _peerActive: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is selected
     */
    _groupSelected: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     * Styles to apply when a sibling element with `.peer` or `data-peer` is selected
     */
    _peerSelected: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
     */
    _groupDisabled: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
     */
    _peerDisabled: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
     */
    _groupInvalid: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
     */
    _peerInvalid: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
     */
    _groupChecked: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
     */
    _peerChecked: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
     */
    _groupFocusWithin: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
     */
    _peerFocusWithin: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
     */
    _peerPlaceholderShown: (value: CSS) => {
        [x: string]: CSS;
    };
    /**
     * Styles for CSS Selector `&:placeholder-shown`.
     */
    _placeholder: (value: CSS) => {
        "&::placeholder": CSS;
    };
    /**
     * Styles for CSS Selector `&:placeholder-shown`.
     */
    _placeholderShown: (value: CSS) => {
        "&:placeholder-shown": CSS;
    };
    /**
     * Styles for CSS Selector `&:fullscreen`.
     */
    _fullScreen: (value: CSS) => {
        "&:fullscreen": CSS;
    };
    /**
     * Styles for CSS Selector `&::selection`
     */
    _selection: (value: CSS) => {
        "&::selection": CSS;
    };
    /**
     * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
     * It is used when the user has requested the system use a light or dark color theme.
     */
    _mediaDark: (value: CSS) => {
        "@media (prefers-color-scheme: dark)": CSS;
    };
    /**
     * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
     * It is used when the user has requested the system to reduce the amount of animations.
     */
    _mediaReduceMotion: (value: CSS) => {
        "@media (prefers-reduced-motion: reduce)": CSS;
    };
    /**
     * Styles for when dark theme is applied to any parent of
     * this component or element.
     */
    _dark: (value: CSS) => {
        ".hope-ui-dark &": CSS;
    };
    /**
     * Styles for when light theme is applied to any parent of
     * this component or element.
     */
    _light: (value: CSS) => {
        ".hope-ui-light &": CSS;
    };
};
export type PseudoSelector = typeof pseudoSelectors;
//# sourceMappingURL=pseudo-selector.d.ts.map