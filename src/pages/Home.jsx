import React from "react";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/MyExpertise";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Stats from "@/components/home/Stats";
import ContactMini from "@/components/home/ContactMini";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProjects />
      <Stats />
      <ContactMini />
    </main>
  );
};

export default Home;
