import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Stats from "@/components/home/Stats";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <Stats />
      <FeaturedProjects />
    </main>
  );
};

export default Home;
