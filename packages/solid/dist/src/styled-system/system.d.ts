import { BorderProps } from './props/border';
import { ColorProps } from './props/color';
import { CSSProp } from './props/css';
import { FlexboxProps } from './props/flexbox';
import { GridLayoutProps } from './props/grid';
import { InteractivityProps } from './props/interactivity';
import { LayoutProps } from './props/layout';
import { MarginProps } from './props/margin';
import { PaddingProps } from './props/padding';
import { PositionProps } from './props/position';
import { PseudoSelectorProps } from './props/pseudo-selector';
import { RadiiProps } from './props/radii';
import { ShadowProps } from './props/shadow';
import { SizeProps } from './props/size';
import { TransformProps } from './props/transform';
import { TransitionProps } from './props/transition';
import { TypographyProps } from './props/typography';
import { KeysOf, ResponsiveProps, SystemStyleObject } from './types';
/**
 * All styled system props.
 */
export type StyleProps = ResponsiveProps<BorderProps & ColorProps & FlexboxProps & GridLayoutProps & InteractivityProps & LayoutProps & MarginProps & PaddingProps & PositionProps & RadiiProps & ShadowProps & SizeProps & TransformProps & TransitionProps & TypographyProps & PseudoSelectorProps> & CSSProp;
export declare const stylePropNames: KeysOf<StyleProps>;
/**
 * Generate a css class based on style props and optional `baseStyles`.
 * `baseStyles` objects should be declared in the order of desired style override.
 */
export declare function createStyledSystemClass(props: StyleProps, baseStyles?: Array<SystemStyleObject | undefined>): string & {
    className: string;
    selector: string;
    props: {};
};
/**
 * Take a props object and return only the keys that match a style prop.
 */
export declare function getUsedStylePropNames(props: Record<string | number, any>): Array<keyof StyleProps>;
//# sourceMappingURL=system.d.ts.map