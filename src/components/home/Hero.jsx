import { FaArrowRight } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import TerminalHero from "@/components/home/TerminalHero";
import "../../styles/components/home/Hero.css";
const SOCIAL_LINKS = [
  {
    href: "https://github.com/balakumaranbala2112",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "https://twitter.com/balakumaran_dev",
    icon: <FaXTwitter />,
    label: "X (Twitter)",
  },
  {
    href: "https://linkedin.com/in/balakumaran2112",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
  },
];

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        {/* Left Content */}
        <div className="hero__content">
          <p className="hero__intro">
            HELLO, I'M <span className="hero__highlight">BK 👋</span>
          </p>

          <h1 className="hero__title">
            Full-Stack <br />
            <span className="hero__title-accent">MERN</span> Developer
          </h1>

          <p className="hero__description">
            I build scalable React web applications with clean UI architecture,
            reusable components, secure REST APIs, MongoDB integration, and
            authentication systems (JWT / Firebase).
          </p>

          <div className="hero__actions">
            <Link to="/projects" className="hero__btn hero__btn--primary">
              View Projects
              <FaArrowRight size={18} className="hero__btn-icon" />
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hero__btn hero__btn--secondary"
            >
              Resume
              <HiDocumentDownload size={20} className="hero__btn-icon" />
            </Link>
          </div>

          <div className="hero__follow">
            <span className="hero__follow-text">FOLLOW ME ON</span>
            <span className="hero__follow-line" aria-hidden="true"></span>

            <div className="hero__socials">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hero__social-icon"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Terminal */}
        <div className="hero__terminal">
          <TerminalHero />
        </div>
      </div>
    </section>
  );
};

export default Hero;
