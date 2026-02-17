import React from "react";
import Hero from "../home/Hero";
import Services from "../home/MyExpertise";
import FeaturedProjects from "../home/FeaturedProjects";
import Stats from "../home/Stats";
import ContactMini from "../home/ContactMini";

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
