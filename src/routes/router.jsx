import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import Resume from "@/pages/Resume";
import Blogs from "@/pages/Blogs";
import Contact from "@/pages/Contact";
import BlogDetail from "@/pages/BlogDetail";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "/projects/:id", element: <ProjectDetail /> },
      { path: "resume", element: <Resume /> },
      { path: "blogs", element: <Blogs /> },
      { path: "blogs/:id", element: <BlogDetail /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
