import { forwardRef, HTMLAttributes } from "react";
import { mcn } from "../../../lib/utils";


import Heading from "../../heading/heading";

import Typography from "../../typography/typography";
import styles from "./case-studies-section.module.css";

type CaseStudiesSectionProps = HTMLAttributes<HTMLDivElement>;

const CaseStudiesSection = forwardRef<HTMLDivElement, CaseStudiesSectionProps>(
  ({ ...restProps }, ref) => {
    const className = mcn([
      styles["case-studies-section"],
      restProps.className,
    ]);

    return (
      <section {...{ ref, ...restProps, className }}>
        <div className={styles["case-studies-section__header"]}>
          <Heading level={2}></Heading>
          <Typography className={styles["case-studies-section__description"]}>
            
          </Typography>
        </div>
        <div className={styles["case-studies-section__list"]}>
          {/* Case studies data would have been mapped here */}
          
        </div>
      </section>
    );
  }
);

CaseStudiesSection.displayName = "CaseStudiesSection";

export default CaseStudiesSection;
