import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "./TerminalHero.css";

const codeSnippets = [
  `const aboutMe = () => ({
  name: "Balakumaran",
  role: "MERN Stack Developer",
  location: "India",
  mindset: "Product-focused developer",
  codingStyle: "Clean, scalable, maintainable",
  availability: "Open for Internship / Full-Time",
});`,

  `const myProjects = () => ({
  focus: "Real-world web applications",
  stack: ["React", "Node.js", "Express", "MongoDB"],
  goal: "Build scalable products with smooth UX",
  deployment: ["Vercel", "Netlify", "Render"],
});`,

  `const futureGoal = () => ({
  vision: "Become a high-impact Full Stack Engineer",
  projectsPlan: "Build 3-5 production-level applications",
  longTermGoal: "Lead development of real-world products",
  mindset: "Consistency + discipline + continuous learning",
  mission: "Build software that scales and creates real impact",
});`,
];

const TerminalHero = () => {
  const [text, setText] = useState("");
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [highlightedCode, setHighlightedCode] = useState("");

  // Typing effect
  useEffect(() => {
    const currentSnippet = codeSnippets[snippetIndex];

    if (charIndex < currentSnippet.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentSnippet[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 18);

      return () => clearTimeout(timeout);
    }

    const pauseTimeout = setTimeout(() => {
      setText("");
      setCharIndex(0);
      setSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 1500);

    return () => clearTimeout(pauseTimeout);
  }, [charIndex, snippetIndex]);

  // Prism highlight safely (convert to HTML string)
  useEffect(() => {
    const html = Prism.highlight(
      text,
      Prism.languages.javascript,
      "javascript",
    );
    setHighlightedCode(html);
  }, [text]);

  return (
    <div className="terminal-window">
      {/* Header */}
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="terminal-filename">developer.config.js</div>
      </div>

      {/* Body */}
      <div className="terminal-body">
        <pre className="terminal-pre">
          <code
            className="language-javascript"
            dangerouslySetInnerHTML={{
              __html: highlightedCode + `<span class="cursor">|</span>`,
            }}
          />
        </pre>
      </div>
    </div>
  );
};

export default TerminalHero;
