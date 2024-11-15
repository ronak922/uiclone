import { cva, VariantProps } from "class-variance-authority";
import {
  ButtonHTMLAttributes,
  cloneElement,
  FC,
  forwardRef,
  LegacyRef,
  ReactElement,
  ReactNode,
} from "react";
import { mcn } from "../../lib/utils";
import styles from "./button.module.css";

const buttonClasses = cva(styles.button, {
  variants: {
    variant: {
      primary: styles["button--primary"],
      secondary: styles["button--secondary"],
      outline: styles["button--outline"],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = {
  asChild?: boolean;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonClasses>;

const Button: FC<ButtonProps> = forwardRef(
  (
    { asChild, children, variant, ...restProps },
    ref: LegacyRef<HTMLButtonElement>
  ) => {
    const className = mcn([buttonClasses({ variant }), restProps.className]);

    if (asChild) {
      if (typeof children === "string")
        throw new Error(
          "Children must be a React element when using the `asChild` prop."
        );
      return cloneElement(children as ReactElement, {
        ref,
        ...restProps,
        className: mcn([className, (children as ReactElement).props.className]),
      });
    }

    return <button {...{ ref, ...restProps, className }}>{children}</button>;
  }
);

/**
 * `displayName` is very useful for displaying the correct name for
 * a component when displaying a code snippet of a component in a storybook.
 */
Button.displayName = "Button";

export default Button;
