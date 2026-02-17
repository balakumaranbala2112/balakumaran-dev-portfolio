import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaDatabase,
  FaFire,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import "../../../styles/components/Skills.css";

const skillsData = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
  { name: "MongoDB", icon: <FaDatabase />, color: "#47A248" },
  { name: "Firebase", icon: <FaFire />, color: "#FFCA28" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
];

const Skills = () => {
  return (
    <section className="skills-section section-pad">
      <div className="container">
        <div className="section-title center">
          <h3>My Stack</h3>
          <h2>Tools & Technologies</h2>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>

              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
