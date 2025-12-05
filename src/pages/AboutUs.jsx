import React from "react";
import axios from "axios";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Target, Eye, User, UserRound } from "lucide-react";
import AOS from "aos";
import api from "../axiosConfig";

export default function AboutUs() {
  const [mainData, setMainData] = useState(null);

  useEffect(() => {
    api
      .get("/AboutT1")
      .then((res) => {
        console.log("API RAW DATA:", res.data);
        setMainData(res.data[0]);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  const [mainsData, setMainsData] = useState(null);

  useEffect(() => {
    api
      .get("/AboutT2")
      .then((res) => {
        console.log("API RAW DATA:", res.data);
        setMainsData(res.data[0]);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  const [mainssData, setMainssData] = useState(null);

  useEffect(() => {
    api
      .get("/AboutT3")
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

  return (
    <section className="mt-24 px-6 md:px-16 py-20 bg-gray-50 text-gray-800">
      {/* Heading */}

      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-700">
          {/* About Us */} {mainData?.title}
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          {/* We build scalable and modern digital solutions that empower businesses
          across the globe to grow, innovate, and succeed. */}{" "}
          {mainData?.descriptions}
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">
            {mainData?.sub_title1}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {/* Our mission is simple — help brands convert ideas into powerful,
            high-performing digital products. We focus on building software that
            creates real business value, enhances user experiences, and lasts long
            term. */}{" "}
            {mainData?.sub_description1}
          </p>
        </div>

        <div data-aos="zoom-out">
          <div className="w-full h-64  rounded-2xl  flex items-center justify-center">
            <Target className="text-blue-600" size={270} />
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="md:order-2" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">
            {mainData?.sub_title2}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {/* We envision a future where technology becomes accessible, scalable,
            and impactful for every business. Our goal is to be a global leader
            in delivering digital transformation through innovation and
            excellence. */}{" "}
            {mainData?.sub_description2}
          </p>
        </div>

        <div className="md:order-1" data-aos="zoom-out">
          <div className="w-full h-64   rounded-2xl flex items-center justify-center">
            <Eye className="text-purple-600" size={270} />
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          {mainsData?.title}
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-white rounded-xl shadow-md p-8" data-aos="zoom-in">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            {mainsData?.sub_title1}
          </h3>
          <p className="text-gray-600">
            {/* We embrace new technologies and create cutting-edge solutions that
            stay ahead of trends. */}{" "}
            {mainsData?.sub_description1}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8" data-aos="zoom-in">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            {mainsData?.sub_title2}
          </h3>
          <p className="text-gray-600">
            {/* We ensure our products meet the highest standards — from design to
            deployment. */}{" "}
            {mainsData?.sub_description2}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8" data-aos="zoom-in">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">
            {mainsData?.sub_title3}
          </h3>
          <p className="text-gray-600">
            {/* We believe in long-term partnerships and deliver consistent,
            dependable results. */}{" "}
            {mainsData?.sub_description3}
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mt-20 mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          {mainssData?.title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {/* A passionate group of developers, designers, analysts, and strategists
          working together to bring your ideas to life. */}{" "}
          {mainssData?.description}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div
          className="bg-white shadow-md rounded-xl p-6 text-center"
          data-aos="flip-up"
        >
          <div className="w-28 h-28 mx-auto bg-blue-300 rounded-full mb-4 flex items-center justify-center">
            <User size={80} className="text-blue-600" />
            {/* <Male size={24} className="text-blue-600" /> */}
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            {mainssData?.sub_title1}
          </h3>
          <p className="text-gray-500">{mainssData?.sub_description1}</p>
        </div>

        <div
          className="bg-white shadow-md rounded-xl p-6 text-center"
          data-aos="flip-up"
        >
          <div className="w-28 h-28 mx-auto bg-purple-300 rounded-full mb-4 flex items-center justify-center ">
            <UserRound size={80} className="text-pink-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            {mainssData?.sub_title2}
          </h3>
          <p className="text-gray-500">{mainssData?.sub_description2}</p>
        </div>

        <div
          className="bg-white shadow-md rounded-xl p-6 text-center"
          data-aos="flip-up"
        >
          <div className="w-28 h-28 mx-auto bg-pink-300 rounded-full mb-4 flex items-center justify-center">
            <User size={80} className="text-cyan-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            {mainssData?.sub_title3}
          </h3>
          <p className="text-gray-500">{mainssData?.sub_description3}</p>
        </div>
      </div>
    </section>
  );
}
