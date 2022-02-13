import { Accessor, createContext, createUniqueId, splitProps, useContext } from "solid-js";
import { createStore } from "solid-js/store";

import { classNames, createCssSelector } from "@/utils/css";

import { Box } from "../box/box";
import { ElementType, HopeComponentProps } from "../types";
import { formControlStyles } from "./form-control.styles";

export interface FormControlOptions {
  /**
   * The custom `id` to use for the form control. This is passed directly to the form element (e.g, Input).
   * - The form element (e.g Input) gets the `id`
   * - The form label id: `${id}-label`
   * - The form error text id: `${id}-error-message`
   * - The form helper text id: `${id}-helper-text`
   */
  id?: string;

  /**
   * If `true`, the form control will be required. This has 2 side effects:
   * - The `FormLabel` will show a required indicator
   * - The form element (e.g, Input) will have `aria-required` set to `true`
   */
  required?: boolean;

  /**
   * If `true`, the form control will be disabled. This has 2 side effects:
   * - The `FormLabel` will have `data-disabled` attribute
   * - The form element (e.g, Input) will be disabled
   */
  disabled?: boolean;

  /**
   * If `true`, the form control will be invalid. This has 2 side effects:
   * - The `FormLabel` and `FormErrorIcon` will have `data-invalid` set to `true`
   * - The form element (e.g, Input) will have `aria-invalid` set to `true`
   */
  invalid?: boolean;

  /**
   * If `true`, the form control will be readonly
   */
  readOnly?: boolean;
}

export interface FormControlState extends FormControlOptions {
  /**
   * The custom `id` passed to the form label (e.g, FormLabel).
   */
  labelId: string;

  /**
   * The custom `id` passed to the form helper text (e.g, FormHelperText).
   */
  helperTextId: string;

  /**
   * The custom `id` passed to the form error message (e.g, FormErrorMessage).
   */
  errorMessageId: string;

  /**
   * Track whether the `FormHelperText` has been rendered.
   * We use this to append its id the the `aria-describedby` of the `input`.
   */
  hasHelperText: boolean;

  /**
   * Track whether the `FormErrorMessage` has been rendered.
   * We use this to append its id the the `aria-describedby` of the `input`.
   */
  hasErrorMessage: boolean;

  /**
   * Track whether the form element (e.g, `input`) has focus.
   */
  isFocused: boolean;
}

export interface FormControlContextValue {
  state: FormControlState;
  /**
   * Action to change form control state `hasHelperText`.
   */
  setHasHelperText: (value: boolean) => void;

  /**
   * Action to change form control state `hasErrorMessage`.
   */
  setHasErrorMessage: (value: boolean) => void;

  /**
   * Action to change form control state `isFocused`.
   */
  setIsFocused: (value: boolean) => void;
}

export const FormControlContext = createContext<FormControlContextValue>();

export type FormControlProps<C extends ElementType> = HopeComponentProps<C, FormControlOptions>;

const hopeFormControlClass = "hope-form-control";

export function FormControl<C extends ElementType = "div">(props: FormControlProps<C>) {
  const defaultId = `field-${createUniqueId()}`;

  const [state, setState] = createStore<FormControlState>({
    get id() {
      return props.id || defaultId;
    },
    get labelId() {
      return `${this.id}-label`;
    },
    get helperTextId() {
      return `${this.id}-helper-text`;
    },
    get errorMessageId() {
      return `${this.id}-error-message`;
    },
    get required() {
      return props.required;
    },
    get disabled() {
      return props.disabled;
    },
    get invalid() {
      return props.invalid;
    },
    get readOnly() {
      return props.readOnly;
    },
    hasHelperText: false,
    hasErrorMessage: false,
    isFocused: false,
  });

  const [local, others] = splitProps(props, [
    "id",
    "required",
    "disabled",
    "invalid",
    "readOnly",
    "class",
  ]);

  const setHasHelperText = (value: boolean) => setState("hasHelperText", value);

  const setHasErrorMessage = (value: boolean) => setState("hasErrorMessage", value);

  const setIsFocused = (value: boolean) => setState("isFocused", value);

  const context: Accessor<FormControlContextValue> = () => ({
    state,
    setHasHelperText,
    setHasErrorMessage,
    setIsFocused,
  });

  const classes = () => classNames(local.class, hopeFormControlClass, formControlStyles());

  return (
    <FormControlContext.Provider value={context()}>
      <Box role="group" class={classes()} {...others} />
    </FormControlContext.Provider>
  );
}

FormControl.toString = () => createCssSelector(hopeFormControlClass);

export function useFormControlContext() {
  return useContext(FormControlContext);
}