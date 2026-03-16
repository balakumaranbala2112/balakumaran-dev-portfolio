import React from "react";
import { Link } from "react-router-dom";
import AboutImage from "@/assets/images/profile/profile-about.webp";
import { FaArrowRight, FaUser } from "react-icons/fa";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import "../../styles/components/home/HomeAbout.css";

const AboutPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <section
      className={`home-about ${inView ? "home-about--visible" : ""}`}
      ref={ref}
    >
      <div className="home-about__container">
        {/* Left — Profile Image */}
        <div className="home-about__image">
          <img src={AboutImage} alt="About BK" className="home-about__img" />
        </div>

        {/* Right — Content */}
        <div className="home-about__content">
          <h2 className="home-about__title">
            <FaUser />
            About Me
          </h2>
          <p className="home-about__text">
            I'm Balakumaran — a final-year B.E. student and self-driven MERN
            Stack developer from Ariyalur. I don't just build things that work;
            I build things that are readable, scalable, and worth showing.
          </p>
          <p className="home-about__text">
            My journey started with curiosity, moved through dozens of real
            projects, and is now aimed at one goal — joining a team where I can
            grow fast and contribute from day one.
          </p>
          <p className="home-about__text">
            Outside of code, I'm deep into DSA with Java, exploring system
            design patterns, and documenting what I learn to help others catch
            up faster.
          </p>
          <Link to="/about" className="home-about__link">
            More about me <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
