import { Property } from "csstype";

import { ColorTokens } from "../tokens/colors";

export type OtherCSSProps = Partial<{
  animation: Property.Animation;
  appearance: Property.Appearance;
  transform: Property.Transform;
  transformOrigin: Property.TransformOrigin;
  visibility: Property.Visibility;
  whiteSpace: Property.WhiteSpace;
  userSelect: Property.UserSelect;
  pointerEvents: Property.PointerEvents;
  wordBreak: Property.WordBreak;
  overflowWrap: Property.OverflowWrap;
  textOverflow: Property.TextOverflow;
  boxSizing: Property.BoxSizing;
  cursor: Property.Cursor;
  resize: Property.Resize;
  transition: Property.Transition;
  objectFit: Property.ObjectFit;
  objectPosition: Property.ObjectPosition;
  float: Property.Float;
  fill: Property.Fill | ColorTokens;
  stroke: Property.Stroke | ColorTokens;
  outline: Property.Outline;
}>;

export type OtherCSSPropsKeys = keyof OtherCSSProps;

/**
 * Array based on the `OtherCSSProps`.
 * Used to splitProps in SolidJS components
 */
export const otherCSSPropsKeys: OtherCSSPropsKeys[] = [
  "animation",
  "appearance",
  "transform",
  "transformOrigin",
  "visibility",
  "whiteSpace",
  "userSelect",
  "pointerEvents",
  "wordBreak",
  "overflowWrap",
  "textOverflow",
  "boxSizing",
  "cursor",
  "resize",
  "transition",
  "objectFit",
  "objectPosition",
  "float",
  "fill",
  "stroke",
  "outline",
];
