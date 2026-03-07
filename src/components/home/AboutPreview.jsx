import React from "react";
import { Link } from "react-router-dom";
import AboutImage from "@/assets/images/profile/profile-about.jpeg";
import "@/styles/components/HomeAbout.css";
import { FaArrowRight, FaUser } from "react-icons/fa";
import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import "@/styles/components/HomeAbout.css";

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
            I'm <span className="">Balakumaran</span>, a Full-Stack MERN developer based in
            Ariyalur, India. I focus on writing clean, maintainable code and
            building interfaces that are fast, accessible, and genuinely useful.
          </p>
          <p className="home-about__text">
            Currently looking for internship and full-time opportunities where I
            can contribute to a real product and grow alongside a strong team.
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
