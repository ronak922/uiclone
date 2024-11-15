import { forwardRef, HTMLAttributes } from "react";
import ctaIllustrationImage from "../../../assets/images/cta-illustration.webp";
import { mcn } from "../../../lib/utils";
import Button from "../../button/button";
import Card from "../../card/card";
import Typography from "../../typography/typography";
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
