import { forwardRef, HTMLAttributes } from "react";
import { mcn } from "../../../lib/utils";
import Marquee from "../../marquee/marquee";
import styles from "./company-section.module.css";

type CompanySectionProps = {
  data: TCompany[];
} & HTMLAttributes<HTMLDivElement>;

const CompanySection = forwardRef<HTMLDivElement, CompanySectionProps>(
  ({ data, ...restProps }, ref) => {
    const className = mcn([styles["company-section"], restProps.className]);

    const renderCompanyList = (direction: 'to-left' | 'to-right') => (
      <Marquee
        className={styles["company-section__list"]}
        speed={25}
        direction={direction}
        pauseOnHover
      >
        {data.map(({ image, width, height, alt, url }, index) => (
          <a
            key={`company-list-${direction}-${alt}-${index}`}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{
                width: `auto`,
                height: `${height}px`,
              }}
              {...{ src: image, width, height, alt }}
            />
          </a>
        ))}
      </Marquee>
    );

    return (
      <section {...{ ref, ...restProps, className }}>
        {renderCompanyList('to-left')}
        {renderCompanyList('to-right')}
      </section>
    );
  }
);

CompanySection.displayName = "CompanySection";

export default CompanySection;