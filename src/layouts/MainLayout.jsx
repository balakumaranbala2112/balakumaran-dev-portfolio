// src/layouts/MainLayout.jsx
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

// Prevent browser from restoring scroll position on navigation
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
