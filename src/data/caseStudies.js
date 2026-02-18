export const caseStudies = [
  {
    slug: "studybuddy-ai",
    title: "StudyBuddy.AI",
    subtitle:
      "An AI-powered study platform designed for productivity, realtime collaboration, and smart learning workflows.",

    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",

    role: "Full Stack Developer",
    timeline: "3 Weeks",
    type: "MERN + Socket.io",

    contents: [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Solution" },
      { id: "tech", label: "Tech Stack" },
      { id: "results", label: "Results" },
    ],

    sections: {
      overview:
        "StudyBuddy.AI is a productivity-focused web platform built for students. The goal was to combine AI assistance with realtime collaboration and a distraction-free UI.",

      problem:
        "Students struggle with fragmented tools: notes in one app, tasks in another, discussions in WhatsApp, and resources scattered everywhere.",

      solution:
        "I designed a unified platform that includes task tracking, realtime chat rooms, and AI study assistance in a single dashboard.",

      highlight: {
        title: "Key Feature",
        text: "Realtime collaboration using Socket.io with persistent messages stored in MongoDB.",
      },

      techStack: ["React", "Node.js", "MongoDB", "Socket.io", "JWT Auth"],

      results:
        "The final system achieved smooth realtime chat performance and a clean workflow. The architecture is scalable and modular for future AI features.",
    },

    nextProject: {
      name: "Modern Book Store",
      slug: "modern-book-store",
    },
  },
];
