import { FaCloud, FaReact, FaServer } from "react-icons/fa";
import "@/components/home/MyExpertise.css";

const Services = () => {
  const services = [
    {
      serviceInfoName: "Frontend Engineering",
      icon: <FaReact />,
      serviceDesc:
        "Building responsive, accessible, and performant UIs using React, Tailwind, and Modern JavaScript.",
    },
    {
      serviceInfoName: "Backend Systems",
      icon: <FaServer />,
      serviceDesc:
        "Designing RESTful APIs, handling database schemas (MongoDB/SQL), and secure authentication flows.",
    },
    {
      serviceInfoName: "Cloud & Deployment",
      icon: <FaCloud />,
      serviceDesc:
        "Deploying apps via Vercel/Netlify, managing Firebase backends, and setting up CI/CD pipelines.",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>My Expertise</h2>
          <h3>Full Stack & Beyond</h3>
        </div>

        <div className="services">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-item">
                <div className="icon-box">{service.icon}</div>

                <div className="service-info">
                  <h4>{service.serviceInfoName}</h4>
                  <p>{service.serviceDesc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
