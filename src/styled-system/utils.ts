/**
 * Thanks Chakra UI (https://github.com/chakra-ui/chakra-ui/blob/main/packages/system/src/system.utils.ts)
 *
 * Carefully selected html elements for hope components.
 * This is mostly for `hope.<element>` syntax.
 */
export const domElements = [
  "a",
  "b",
  "article",
  "aside",
  "blockquote",
  "button",
  "caption",
  "cite",
  "circle",
  "code",
  "dd",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hr",
  "img",
  "input",
  "kbd",
  "label",
  "li",
  "main",
  "mark",
  "nav",
  "ol",
  "p",
  "path",
  "pre",
  "q",
  "rect",
  "s",
  "svg",
  "section",
  "select",
  "strong",
  "small",
  "span",
  "sub",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "tr",
  "ul",
] as const;

// Convert the array into string literal union type
export type DOMElements = typeof domElements[number];
