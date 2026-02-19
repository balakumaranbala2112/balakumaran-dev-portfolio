import "@/styles/pages/About.css";
import AboutHero from "@/components/about/AboutHero";
import Hobbies from "@/components/about/Hobbies";
import Skills from "@/components/about/Skills";
import Timeline from "@/components/about/Timeline";

const About = () => {
  return (
    <>
      <AboutHero />
      <Timeline />
      <Hobbies />
    </>
  );
};

export default About;
