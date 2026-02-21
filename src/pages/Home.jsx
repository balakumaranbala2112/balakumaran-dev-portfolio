import React from "react";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ContactMini from "@/components/home/ContactMini";
import Skills from "@/components/about/Skills";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <Skills />
      <FeaturedProjects />
      <ContactMini />
    </main>
  );
};

export default Home;
