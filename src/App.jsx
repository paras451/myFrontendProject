import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import AOSController from "./components/AosController";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
      once: false,
    });
  }, []);

  return (
    <>
      <AOSController />
      <ScrollToTop />

      <div>
        <Navbar />
        <main>
          <Outlet /> {/* Yahan routes render honge */}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
