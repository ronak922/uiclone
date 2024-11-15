import { forwardRef, HTMLAttributes } from "react";

import { mcn } from "../../../lib/utils";

import styles from "./cta-section.module.css";

type CtaSectionProps = HTMLAttributes<HTMLDivElement>;

const CtaSection = forwardRef<HTMLDivElement, CtaSectionProps>(
  ({ ...restProps }, ref) => {
    const className = mcn([styles["cta-section"], restProps.className]);

    return (
      <section {...{ ref, ...restProps, className }}>
        
      </section>
    );
  }
);

CtaSection.displayName = "CtaSection";

export default CtaSection;
