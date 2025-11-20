import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import AOSController from "./components/AosController";

function App() {
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
      {/* <DotLottieReact
      src="path/to/animation.lottie"
      loop
      autoplay
    /> */}
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
