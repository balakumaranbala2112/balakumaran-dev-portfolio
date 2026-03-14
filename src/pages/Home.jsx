import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Stats from "@/components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import GitHubStats from "../components/home/Githubstats";
import HireMe from "../components/home/HireMe";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <Stats />
      <FeaturedProjects />
      <GitHubStats />
      <Testimonials />
      <HireMe />
    </main>
  );
};

export default Home;
