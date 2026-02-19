import Navbar from "@/layouts/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "./Footer";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
