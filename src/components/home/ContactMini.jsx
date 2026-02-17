import "../../styles/components/ContactMini.css";
const ContactMini = () => {
  return (
    <section id="contact" className="contactMini">
      <div className="contactMini__container">
        <h2 className="contactMini__title">Let’s build something amazing.</h2>

        <p className="contactMini__text">
          I am currently looking for an internship or full-time developer role.
          If you have an exciting opportunity, I'm just one email away.
        </p>
      </div>
      <a href="mailto:test@gmail.com" className="contactMini__btn">
        Say Hello 👋
      </a>
    </section>
  );
};

export default ContactMini;
