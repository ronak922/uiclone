import { forwardRef, HTMLAttributes } from "react";
import { mcn } from "../../../lib/utils";
import ButtonIcon from "../../button-icon/button-icon";

import Card from "../../card/card";

import { IconLinkedIn } from "../../icons";
import Typography from "../../typography/typography";
import styles from "./team-section.module.css";

type TeamSectionProps = {
  data: TTeam[];
} & HTMLAttributes<HTMLDivElement>;

const TeamSection = forwardRef<HTMLDivElement, TeamSectionProps>(
  ({ data, ...restProps }, ref) => {
    const className = mcn([styles["team-section"], restProps.className]);

    return (
      <section {...{ ref, ...restProps, className }}>
        <div className={styles["team-section__header"]}>
          
          
        </div>
        <div className={styles["team-section__list"]}>
          {data.map(({ name, title, about, picture, linkedin }) => (
            <Card
              key={`team-${name}-${title}`}
              variant="tertiary"
              className={styles["team-section__item"]}
              withBorder
              withShadow
            >
              <div className={styles["team-section__profile"]}>
                <img
                  style={{
                    height: `103px`,
                    width: `auto`,
                  }}
                  src={picture}
                  width={103}
                  height={103}
                  alt={`${name} profile picture`}
                  loading="lazy"
                />
                <div className={styles["team-section__info"]}>
                  <ButtonIcon
                    icon={<IconLinkedIn />}
                    variant="secondary"
                    iconOnly
                    asChild
                    aria-label={`Visit ${name}'s LinkedIn profile`}
                  >
                    <a href={linkedin} target="_blank" rel="noreferrer" />
                  </ButtonIcon>

                  <div className={styles["team-section__details"]}>
                    <Typography level={4}>{name}</Typography>
                    <Typography>{title}</Typography>
                  </div>
                </div>
              </div>
              <Typography>{about}</Typography>
            </Card>
          ))}
        </div>
        <div className={styles["team-section__button-container"]}>
         
        </div>
      </section>
    );
  }
);

TeamSection.displayName = "TeamSection";

export default TeamSection;
