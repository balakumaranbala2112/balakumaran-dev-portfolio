import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFire,
  FaFolderOpen,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiBootstrap,
  SiMui,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiDocker,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

import "@/styles/components/Skills.css";

const skillsGrouped = [
  /* ============================
     FRONTEND
  ============================ */
  {
    category: "Frontend",
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
        name: "TypeScript",
        icon: <SiTypescript />,
        color: "#3178C6",
        url: "https://www.typescriptlang.org/",
      },
      {
        name: "React.js",
        icon: <FaReact />,
        color: "#61DAFB",
        url: "https://react.dev/",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "#000000",
        url: "https://nextjs.org/",
      },
      {
        name: "Redux",
        icon: <SiRedux />,
        color: "#764ABC",
        url: "https://redux.js.org/",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "#06B6D4",
        url: "https://tailwindcss.com/",
      },
      {
        name: "SASS",
        icon: <SiSass />,
        color: "#CC6699",
        url: "https://sass-lang.com/",
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap />,
        color: "#7952B3",
        url: "https://getbootstrap.com/",
      },
      {
        name: "Material UI",
        icon: <SiMui />,
        color: "#007FFF",
        url: "https://mui.com/",
      },
    ],
  },

  /* ============================
     BACKEND & APIs
  ============================ */
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

  /* ============================
     DATABASE & TOOLS
  ============================ */
  {
    category: "Database & Tools",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        color: "#47A248",
        url: "https://www.mongodb.com/",
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
        color: "#4479A1",
        url: "https://www.mysql.com/",
      },
      {
        name: "Firebase",
        icon: <FaFire />,
        color: "#FFCA28",
        url: "https://firebase.google.com/",
      },
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
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section section-pad">
      <div className="skills-tools">
        {/* Title */}
        <div className="section-title">
          <h3 className="section__title-name">
            <FaFolderOpen /> Skill Stack
          </h3>
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
