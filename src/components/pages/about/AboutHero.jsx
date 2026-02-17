import "../../../styles/components/AboutHero.css";
import AboutImg from "../../../assets/images/profile/profile-about.jpeg";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="container about-grid">
        {/* LEFT IMAGE SIDE */}
        <div className="about-img-wrapper fade-in-up">
          <div className="img-frame">
            <img src={AboutImg} alt="Balakumaran" />
          </div>

          <div className="floater-card">
            <i className="fa-solid fa-code"></i>
            <div>
              <strong>4+ Years</strong>
              <span>Coding Experience</span>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT SIDE */}
        <div className="about-content fade-in-up delay-200">
          <div className="badge">Who I am</div>

          <h1>
            Architecting the <span className="highlight">Future Web</span>.
          </h1>

          <p className="lead">
            I’m Balakumaran, a Full-Stack Developer based in India. I don't just
            write code; I solve complex problems with simple, scalable
            solutions.
          </p>

          <p>
            My journey started with a curiosity for how things work on the
            internet. Fast forward to today, I build scalable web applications
            using the MERN stack. I care deeply about performance,
            accessibility, and writing clean, maintainable code.
          </p>

          <div className="signature">Balakumaran.</div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
