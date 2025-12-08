import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import AOS from "aos";
import api from "../axiosConfig";

const Contact = () => {
  // UI Render for Table 1
  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    api
      .get("/ContactT1")
      .then((res) => {
        console.log("API RAW DATA:", res.data);
        setMainData(res.data[0]);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  // UI Render for Table 2
  const [mainsData, setMainsData] = useState(null);
  useEffect(() => {
    api
      .get("/ContactT2")
      .then((res) => {
        console.log("API RAW DATA:", res.data);
        setMainsData(res.data[0]);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  // UI Render for Table 3
  const [mainssData, setMainssData] = useState(null);
  useEffect(() => {
    api
      .get("/ContactT3")
      .then((res) => {
        console.log("API RAW DATA:", res.data);
        setMainssData(res.data[0]);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [mainData, mainsData, mainssData]);

  // form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
    /* Combined animation: float + sway */
    @keyframes floatUpAndSway {
      0% { 
        transform: translateY(100vh) translateX(0px) scale(0.6);
        opacity: 0; 
      }
      50% {
        transform: translateY(0vh) translateX(20px) scale(0.8);
        opacity: 0.7;
      }
      100% { 
        transform: translateY(-280vh) translateX(-20px) scale(1);
        opacity: 1; 
      }
    }

  `;
    document.head.appendChild(style);
  }, []);

  // Submit handler (POST API)
  const handleSubmit = async (e) => {
    e.preventDefault(); // form submit roko, but validation check ke baad

    const form = e.target;

    // browser validation
    if (!form.checkValidity()) {
      form.reportValidity(); // force browser warnings to show
      return;
    }

    console.log("form submitting....");

    try {
      const res = await api.post("/contact", {
        name,
        email,
        message,
      });

      console.log("Saved:", res.data);
      alert("Message Sent Successfully!");

      // reset form
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Failed to send message!");
    }
  };

  return (
    <div className="min-h-screen relative  overflow-hidden bg-gray-50 flex flex-col items-center px-4 py-12 ">
      {/* --- BIG VISIBLE BUBBLES --- */}
      <div className="absolute inset-0 h-full overflow-hidden pointer-events-none ">
        {[...Array(50)].map((_, i) => {
          const hue = Math.random() * 360;

          return (
            <span
              key={i}
              className="absolute rounded-full backdrop-blur-xl"
              style={{
                width: `${10 + Math.random() * 15}px`,
                height: `${10 + Math.random() * 15}px`,
                left: `${Math.random() * 100}%`,
                bottom: `-${Math.random() * 200}px`,

                // gradient + shine
                background: `
            radial-gradient(circle at 30% 30%, 
              hsla(${hue}, 100%, 85%, 0.9), 
              hsla(${hue}, 100%, 50%, 0.4)
            )
          `,

                // soft border glow
                boxShadow: `0 0 20px hsla(${hue}, 100%, 75%, 0.6)`,

                // movement
                animation: `floatUpAndSway ${
                  6 + Math.random() * 4
                }s linear infinite`,
                animationDelay: `${Math.random() * 20}s`,
              }}
            ></span>
          );
        })}
      </div>

      <h1
        className="text-[48px] font-extrabold text-center  mt-40 mb-10"
        data-aos="fade-down"
      >
        {/* Get in  */}
        {mainData?.title?.split("").slice(0, 6).join("")}{" "}
        <span className="text-sky-500">
          {/* Touch  */}
          {mainData?.title?.split("").slice("6").join("")}
        </span>
      </h1>
      <p
        className="text-gray-600 text-center max-w-2xl mb-20"
        data-aos="fade-up"
      >
        {/* We'd love to hear from you! Whether you have a question, feedback, or a
        project idea — we're here for you. */}
        {mainData?.description}
      </p>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl z-40">
        {/* Left Panel */}
        <div
          className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200"
          data-aos="flip-right"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {/* Send a Message */}
            {mainsData?.title}
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                {/* Name */}
                {mainsData?.name}
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                data-aos="fade-right"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                {/* Email */}
                {mainsData?.email}
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-aos="fade-right"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                {/* Message */}
                {mainsData?.message}
              </label>
              <textarea
                className="w-full p-3 rounded-xl border border-gray-300 h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Write something..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                data-aos="fade-right"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-sky-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all"
              data-aos="fade-up"
            >
              {/* Send Message */}
              {mainsData?.button_text}
            </button>
          </form>
        </div>

        {/* Right Panel */}
        <div
          className="flex flex-col justify-center bg-sky-500 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden"
          data-aos="flip-left"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>

          <h2 className="text-3xl font-bold mb-6">
            {/* Contact Information */}
            {mainssData?.title}
          </h2>

          <div className="space-y-6 text-lg">
            <div>
              <p className="font-semibold">📍 Address</p>
              <p className="opacity-90" data-aos="fade-down">
                {/* Jaipur, India */}
                {mainssData?.text_1}
              </p>
            </div>

            <div>
              <p className="font-semibold">📞 Phone</p>
              <p className="opacity-90" data-aos="fade-down">
                {/* +91 98765 4**** */}
                {mainssData?.text_2}
              </p>
            </div>

            <div>
              <p className="font-semibold">📧 Email</p>
              <p className="opacity-90" data-aos="fade-down">
                {/* support@CustomTechLabs.com */}
                {mainssData?.text_3}
              </p>
            </div>

            <div>
              <p className="font-semibold">🌐 Website</p>
              <p className="opacity-90" data-aos="fade-down">
                {/* www.CustomTechLabs.com */}
                {mainssData?.text_4}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
