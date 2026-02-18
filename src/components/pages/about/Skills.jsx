import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFire,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiRedux,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiRender,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

import "../../../styles/components/Skills.css";

const skillsGrouped = [
  {
    category: "Languages & Frontend",
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        color: "#E34F26",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        color: "#1572B6",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        icon: <FaJsSquare />,
        color: "#F7DF1E",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "React.js",
        icon: <FaReact />,
        color: "#61DAFB",
        url: "https://react.dev/",
      },
      {
        name: "Redux",
        icon: <SiRedux />,
        color: "#764ABC",
        url: "https://redux.js.org/",
      },
    ],
  },

  {
    category: "Backend & APIs",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        color: "#339933",
        url: "https://nodejs.org/",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        color: "#111827",
        url: "https://expressjs.com/",
      },
      {
        name: "REST API",
        icon: <TbApi />,
        color: "#3B82F6",
        url: "https://restfulapi.net/",
      },
    ],
  },

  {
    category: "Database & Auth",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "#47A248",
        url: "https://www.mongodb.com/",
      },
      {
        name: "Firebase",
        icon: <FaFire />,
        color: "#FFCA28",
        url: "https://firebase.google.com/",
      },
    ],
  },

  {
    category: "Tools & DevOps",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt />,
        color: "#F05032",
        url: "https://git-scm.com/",
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        color: "#111827",
        url: "https://github.com/",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        color: "#FF6C37",
        url: "https://www.postman.com/",
      },
      {
        name: "Docker",
        icon: <SiDocker />,
        color: "#2496ED",
        url: "https://www.docker.com/",
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
        color: "#000000",
        url: "https://vercel.com/",
      },
      {
        name: "Netlify",
        icon: <SiNetlify />,
        color: "#00C7B7",
        url: "https://www.netlify.com/",
      },
      {
        name: "Render",
        icon: <SiRender />,
        color: "#4F46E5",
        url: "https://render.com/",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section section-pad">
      <div className="container">
        {/* Title */}
        <div className="section-title center">
          <h3>My Stack</h3>
          <h2>Tools & Technologies</h2>
        </div>

        {/* Cards Layout */}
        <div className="skills-cards">
          {skillsGrouped.map((group, index) => (
            <div className="skills-card" key={index}>
              <h3 className="skills-card-title">{group.category}</h3>

              <div className="skills-card-grid">
                {group.skills.map((skill, idx) => (
                  <a
                    key={idx}
                    href={skill.url}
                    target="_blank"
                    rel="noreferrer"
                    className="skill-cell"
                  >
                    <span
                      className="skill-cell-icon"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>

                    <span className="skill-cell-name">{skill.name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
