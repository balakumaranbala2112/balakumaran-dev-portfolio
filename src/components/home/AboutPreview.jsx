import { Link } from "react-router-dom";
import AboutImage from "@/assets/images/profile/profile-about.jpeg";
import "@/styles/components/HomeAbout.css";
import { FaArrowRight, FaUser } from "react-icons/fa";

const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="home-about__container">
        {/* Left Image */}
        <div className="home-about__image">
          <img src={AboutImage} alt="About BK" className="home-about__img" />
        </div>

        {/* Right Content */}
        <div className="home-about__content">
          <h2 className="home-about__title">
            <FaUser />
            About Me
          </h2>

          <p className="home-about__text">
            Final-year CSE student focused on{" "}
            <span className="highlight">modern MERN stack engineering</span>,
            creating responsive React interfaces, secure authentication flows,
            and scalable RESTful backend services. Experienced in building
            real-world full-stack projects with clean code, reusable components,
            and performance in mind. Actively preparing for software development
            roles through internships, portfolio applications, and strong CS
            fundamentals.
          </p>

          <Link to="/about" className="home-about__link">
            Read More <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
