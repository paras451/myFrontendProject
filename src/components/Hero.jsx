import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import api from "../axiosConfig";

// import heroImage from "../assets/hero.jpeg";
import banner from "../assets/videos/banner.mp4";

function Hero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    api
      .get("/home")
      .then((res) => {
        console.log("API RAW DATA:", res.data);
        setHeroData(res.data[0]);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  // if (!heroData) {
  //   return (
  //     <section className="text-white mt-[5.8rem] px-6 py-24 text-center">
  //       <h1 className="text-3xl">Loading...</h1>
  //     </section>
  //   );
  // }

  return (
    <section className=" relative text-white flex flex-col items-center justify-center px-6 md:px-16 py-24 md:py-32 overflow-hidden mt-[5.8rem] shadow-[0_-4px_6px_rgba(0,0,0,0.2),0_4px_6px_rgba(0,0,0,0.15)] shadow-cyan-400">
      {/* Background Image with zoom animation */}
      <video
        autoPlay
        loop
        muted
        src={banner}
        className="absolute inset-0 w-full h-full object-cover  opacity-90"
      ></video>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl" data-aos="fade-up">
        <h1
          className="
    text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-glow 
    animate-glow animate-float"
          data-aos="flip-down"
        > 
        {heroData?.title.split(" ").slice(0,1).join(" ")}{" "}

          <span className="text-sky-300">
            {heroData?.title.split(" ").slice(1,2).join(" ")}{" "}
            {/* Build <span className="text-blue-200">Powerful</span> Digital
            Solutions
            <br /> for Web & Mobile */}
          </span>
           {heroData?.title.split(" ").slice(2).join(" ")}
        </h1>

        <p
          className="text-lg md:text-xl text-gray-300 mb-8 animate-float"
          data-aos="fade-in"
        >
          {heroData?.description}
          {/* Transform your business ideas into world-class digital experiences
          with our expert team of developers, designers, and innovators. */}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-float ">
          <button className="bg-sky-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-blue-400/30 transition-all">
            Get Started
          </button>

          <button className="border border-gray-300 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold hover:text-blue-300 transition-all">
            <Link to="/services">View Services</Link>
          </button>
        </div>
      </div>

      {/* Floating light effect */}
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute w-64 h-64 bg-blue-500/30 blur-3xl rounded-full top-20 left-10"
      />
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, delay: 1 }}
        className="absolute w-72 h-72 bg-cyan-400/30 blur-3xl rounded-full bottom-10 right-10 "
      />
    </section>
  );
}

export default Hero;
