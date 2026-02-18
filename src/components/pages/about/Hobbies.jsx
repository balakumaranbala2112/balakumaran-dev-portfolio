import {
  FaChessKnight,
  FaCameraRetro,
  FaBookOpen,
  FaGlobeAsia,
  FaLightbulb,
  FaPodcast,
} from "react-icons/fa";

import "../../../styles/components/Hobbies.css";

const hobbiesData = [
  {
    title: "Chess",
    desc: "Strategic thinking and problem-solving through regular games.",
    icon: <FaChessKnight />,
    color: "#2563eb",
  },
  {
    title: "Photography",
    desc: "Capturing stories, moments, and moods through the lens.",
    icon: <FaCameraRetro />,
    color: "#f97316",
  },
  {
    title: "Reading",
    desc: "Exploring biographies, tech, and self-growth books constantly.",
    icon: <FaBookOpen />,
    color: "#16a34a",
  },
  {
    title: "Traveling",
    desc: "Discovering cultures and environments that fuel creativity.",
    icon: <FaGlobeAsia />,
    color: "#0ea5e9",
  },
  {
    title: "Learning New Things",
    desc: "Always diving into new tools, ideas, and development skills.",
    icon: <FaLightbulb />,
    color: "#eab308",
  },
  {
    title: "Tech Talks & Docs",
    desc: "Staying inspired through real-world innovations and stories.",
    icon: <FaPodcast />,
    color: "#a855f7",
  },
];

const Hobbies = () => {
  return (
    <section className="hobbies-section section-pad">
      <div className="container">
        {/* Title */}
        <div className="hobbies-header">
          <h2>
            <span className="hobbies-bulb">
              <FaLightbulb />
            </span>
            Hobbies & Interests
          </h2>

          <p>
            Outside of development, these activities keep me balanced, curious,
            and creatively inspired.
          </p>
        </div>

        {/* Grid */}
        {/* <div className="hobbies-grid"> */}
          {hobbiesData.map((item, index) => (
            <div key={index} className="hobby-card">
              <span className="hobby-icon" style={{ color: item.color }}>
                {item.icon}
              </span>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
