import companyAmazonImage from "./assets/images/company-amazon.webp";
import companyDribbbleImage from "./assets/images/company-dribbble.webp";
import companyNetflixImage from "./assets/images/company-netflix.webp";
import companyNotionImage from "./assets/images/company-notion.webp";
import companyZoomImage from "./assets/images/company-zoom.webp";
import companyHubspotImage from "./assets/images/company-hubspot.webp";
import serviceImage1 from "./assets/images/service-magnifier-web-search-with-elements.webp";
import serviceImage2 from "./assets/images/service-selecting-a-value-in-the-browser-window.webp";
import { IconFacebook, IconLinkedIn, IconTwitter } from "./components/icons";

type TData = {
  navlinks: TNavLink[];
  companies: TCompany[];
  services: TService[];
  ourWorkingProcess: TWorkingProcess[];
  team: TTeam[];
  testimonials: TTestimonial[];
  socialMedia: SocialMedia[];
};

const data: TData = {
  navlinks: [
    { title: "About us", url: "#about-us" },
    { title: "Services", url: "#services" },
    { title: "Use Cases", url: "#use-cases" },
    { title: "Pricing", url: "#pricing" },
    { title: "Blog", url: "#blog" },
  ],
  companies: [
    {
      image: companyZoomImage,
      alt: "Zoom",
      width: 110.57,
      height: 48,
      url: "https://zoom.us",
    },
    {
      image: companyNetflixImage,
      alt: "Netflix",
      width: 128.63,
      height: 48,
      url: "https://www.netflix.com",
    },
    {
      image: companyNotionImage,
      alt: "Notion",
      width: 145.55,
      height: 48,
      url: "https://www.notion.so",
    },
    {image: companyHubspotImage,
      alt: "HubSpot",
      width: 128.63,
      height: 48,
      url: "https://www.hubspot.com",

    },
    {image: companyDribbbleImage,
      alt: "Dribbble",
      width: 126.37,
      height: 48,
      url: "https://dribbble.com",

    },
    {
      image: companyAmazonImage,
      alt: "Amazon",
      width: 124.11,
      height: 48,
      url: "https://www.amazon.com",
    },
    
   
    
  ],
  services: [
    {
      card: { variant: "tertiary" },
      header: { titles: ["Search engine", "optimization"], variant: "primary" },
      body: {
        src: serviceImage1,
        alt: "Magnifier Web Search with Elements",
        width: 165,
        height: 129,
      },
      button: { variant: "secondary" },
    },
    {
      card: { variant: "primary" },
      header: { titles: ["Pay-per-click", "advertising"], variant: "ghost" },
      body: {
        src: serviceImage2,
        alt: "Selecting a Value in The Browser Window",
        width: 165,
        height: 166.47,
      },
      button: { variant: "secondary" },
    },
  ],
  ourWorkingProcess: [
    {
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Research and Strategy Development",
      description:
        "After the consultation, we will conduct research to identify the best digital marketing strategies for your business.",
    },
  ],
  team: [],
  testimonials: new Array(5).fill({
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  }),
  socialMedia: [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/",
      icon: <IconLinkedIn width={17} height={17} />,
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/",
      icon: <IconFacebook width={17} height={17} />,
    },
    {
      title: "Twitter",
      url: "https://twitter.com/",
      icon: <IconTwitter width={17} height={17} />,
    },
  ],
} as const;

export const {
  companies: companiesData,
  services: servicesData,
  ourWorkingProcess: ourWorkingProcessData,
  team: teamData,
  testimonials: testimonialsData,
} = data;

export default data;
