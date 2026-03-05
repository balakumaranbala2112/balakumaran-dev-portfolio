// src/pages/Home.jsx
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ContactMini from "@/components/home/ContactMini";
import Stats from "@/components/home/Stats";

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <AboutPreview />
      <FeaturedProjects />
      <ContactMini />
    </main>
  );
};

export default Home;
