import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: "60vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
