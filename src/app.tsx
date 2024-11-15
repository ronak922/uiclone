import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import CompanySection from "./components/sections/company-section/company-section";
import ContactUsSection from "./components/sections/contact-us-section/contact-us-section";
import CtaSection from "./components/sections/cta-section/cta-section";
import HeroSection from "./components/sections/hero-section/hero-section";
import OurWorkingProcessSection from "./components/sections/our-working-process-section/our-working-process-section";
import ServicesSection from "./components/sections/services-section/services-section";
import TeamSection from "./components/sections/team-section/team-section";
import TestimonialsSection from "./components/sections/testimonials-section/testimonials-section";
import data from "./data";

const sections = [
  { id: "hero", component: HeroSection, className: styles["hero-section"] },
  { id: "company", component: CompanySection, className: styles["company-section"], data: data.companies },
  { id: "services", component: ServicesSection, className: styles["services-section"], data: data.services },
  { id: "cta", component: CtaSection, className: styles["cta-section"] },
  { id: "our-working-process", component: OurWorkingProcessSection, className: styles["our-working-process-section"], data: data.ourWorkingProcess },
  { id: "team", component: TeamSection, className: styles["team-section"], data: data.team },
  { id: "testimonials", component: TestimonialsSection, className: styles["testimonials-section"], data: data.testimonials },
  { id: "contact-us", component: ContactUsSection, className: styles["contact-us-section"] },
];

const App = () => {
  return (
    <>
      <Navbar data={data.navlinks} />
      {sections.map((section) => (
        <section.component key={section.id} className={section.className} data={section.data} />
      ))}
      <Footer navLinks={data.navlinks} socialMedia={data.socialMedia} />
    </>
  );
};

export default App;
