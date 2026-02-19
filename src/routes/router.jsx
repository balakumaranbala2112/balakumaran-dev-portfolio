import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Blogs from "@/pages/Blogs";
import Contact from "@/pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "blogs", element: <Blogs /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
