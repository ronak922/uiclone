import { forwardRef } from "react";

export const IconTwitter = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    return (
      <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="#000"
        xmlns="http://www.w3.org/2000/svg"
        {...{ ref, ...props }}
      >
        <path
          d="M15.9961 4.4915C16.6854 3.97449 17.3058 3.35409 17.7884 2.63028C17.168 2.90602 16.4442 3.11282 15.7204 3.18176C16.4786 2.73369 17.0301 2.04435 17.3058 1.18267C16.6165 1.59628 15.8238 1.90648 15.031 2.07881C14.3417 1.35501 13.4111 0.941406 12.3771 0.941406C10.378 0.941406 8.75804 2.56135 8.75804 4.56043C8.75804 4.83617 8.79251 5.1119 8.86144 5.38764C5.86282 5.2153 3.1744 3.76769 1.38212 1.59628C1.07192 2.11328 0.899586 2.73369 0.899586 3.42302C0.899586 4.66383 1.51999 5.76677 2.51953 6.42165C1.93359 6.38718 1.34766 6.24931 0.86512 5.97358V6.00804C0.86512 7.76585 2.10593 9.21346 3.76034 9.55813C3.48461 9.62707 3.13994 9.696 2.82973 9.696C2.58847 9.696 2.38166 9.66154 2.1404 9.62707C2.58847 11.0747 3.93267 12.1087 5.51815 12.1432C4.27734 13.1082 2.72633 13.6942 1.03745 13.6942C0.727252 13.6942 0.451517 13.6597 0.175781 13.6252C1.76126 14.6592 3.65694 15.2452 5.72495 15.2452C12.3771 15.2452 15.9961 9.76494 15.9961 4.97403C15.9961 4.8017 15.9961 4.66383 15.9961 4.4915Z"
          fill="inherit"
        />
      </svg>
    );
  }
);
