import React, { useState, useEffect } from "react";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import api from "../axiosConfig";

const Industries = () => {
  // UI Render for Table 1
  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    api
      .get("/IndustriesT1")
      .then((res) => {
        console.log("API RAW DATA:", res.data);
        setMainData(res.data[0]);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  // UI Render for Table 2
  const [mainsData, setMainsData] = useState([]);
  useEffect(() => {
    api
      .get("/IndustriesT2")
      .then((res) => {
        console.log("API RAW DATA:", res.data);

        setMainsData(res.data);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  // UI Render for Table 3
  const [mainssData, setMainssData] = useState([]);
  useEffect(() => {
    api
      .get("/IndustriesT3")
      .then((res) => {
        console.log("API RAW DATA:", res.data);

        setMainssData(res.data);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [mainData, mainsData, mainssData]);

  const [showOther, setShowOther] = useState(false);

  return (
    <section className="py-16 bg-gray-50 px-6 mt-15">
      <div className="max-w-6xl mx-auto text-center ">
        {/* Section Title */}
        <h2
          className="text-6xl font-bold text-gray-800 mb-4"
          data-aos="flip-up"
        >
          <span className="text-blue-700">
            {mainData?.title?.split("").slice(0, 10).join("")}{" "}
          </span>
          {mainData?.title?.split(" ").slice(1).join(" ")}
          {/* We Serve */}
        </h2>
        <p
          className="text-cyan-500 max-w-3xl mx-auto mb-10 hover:underline cusror-pointer"
          data-aos="flip-down"
        >
          {/* We specialize in building scalable, high-performance digital solutions
          across key industries. */}
          {mainData?.description}
        </p>
      </div>

      <div className=" md:h-full md:w-full md:flex md:gap-y-6 md:gap-x-4 md:justify-evenly p-4 ">
        {/* === Healthcare === */}
        <div className="  md:w-120">
          <div
            className="bg-white rounded-2xl shadow-md p-10 mb-10 text-left w-full md:w-auto hover:shadow-xl transition-shadow"
            data-aos="flip-right"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              {/* Healthcare */}
              {mainData?.sub_title1}
            </h3>

            <p className="text-gray-600 mb-6">
              {/* Bringing innovation and precision to healthcare technology. Our
              solutions empower hospitals, assisted living facilities, and
              pharmacies with scalable and compliant digital systems. */}
              {mainData?.sub_description1}
            </p>
          </div>
          {/* Small Divs (Vertical Only) */}
          <div className="space-y-3">
            <div className="p-6 bg-blue-50 rounded-lg" data-aos="fade-up">
              {/* Custom EMAR Software Development */}
              {mainsData[0]?.column1}
            </div>
            <div className="p-6 bg-blue-50 rounded-lg" data-aos="fade-down">
              {/* Pharmacy Management Platforms */}
              {mainsData[1]?.column1}
            </div>
            <div className="p-6 bg-blue-50 rounded-lg" data-aos="fade-up">
              {/* Medicine Search & Inventory Systems */}
              {mainsData[2]?.column1}
            </div>
            <div className="p-6 bg-blue-50 rounded-lg" data-aos="fade-down">
              {/* Appointment & Patient Tracking Portals */}
              {mainsData[3]?.column1}
            </div>
            <div className="p-6 bg-blue-50 rounded-lg" data-aos="fade-up">
              {/* Healthcare Staff Coordination Apps */}
              {mainsData[4]?.column1}
            </div>
          </div>
        </div>

        {/* === E-Commerce === */}
        <div className=" md:w-120  mt-4 md:mt-0 lg:mt-0">
          <div
            className="bg-white rounded-2xl shadow-md p-10 mb-10 text-left md:h-73 w-full md:w-auto hover:shadow-xl transition-shadow lg:h-63"
            data-aos="flip-left"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              {/* E-Commerce */}
              {mainData?.sub_title2}
            </h3>

            <p className="text-gray-600 mb-4">
              {/* We build robust eCommerce platforms optimized for performance,
              usability, and conversions — empowering brands to grow and scale
              digitally. */}
              {mainData?.sub_description2}
            </p>
          </div>

          {/* Small Divs (Vertical Only) */}
          <div className="space-y-3">
            <div className="p-6 bg-blue-50 rounded-lg" data-aos="fade-up">
              {/* Advanced E-commerce & Custom Stores */}
              {mainsData[0]?.column2}
            </div>
            <div className="p-6 bg-blue-50 rounded-lg" data-aos="fade-down">
              {/* Product Search & Recommendation Systems */}
              {mainsData[1]?.column2}
            </div>
            <div className="p-6 bg-blue-50 rounded-lg" data-aos="fade-up">
              {/* Secure Payment Gateway Integration */}
              {mainsData[2]?.column2}
            </div>
            <div className="p-6 bg-blue-50 rounded-lg" data-aos="fade-down">
              {/* Inventory, Order & Subscription Management */}
              {mainsData[3]?.column2}
            </div>
            <div className="p-6 bg-blue-50 rounded-lg" data-aos="fade-up">
              {/* Mobile App Integration (iOS & Android) */}
              {mainsData[4]?.column2}
            </div>
          </div>
        </div>
      </div>

      {/* === Toggle Button === */}
      <button
        onClick={() => setShowOther(!showOther)}
        className="bg-blue-600 text-white px-10 py-3 md:justify-center md:items-center rounded-full font-medium hover:bg-blue-500 transition-all mt-0 mx-auto block"
      >
        {showOther ? "Hide  Other Industries" : "Our Other Industries"}
      </button>

      {showOther && (
        <div className="mt-10 bg-white rounded-2xl shadow-md p-8 w-full">
          <h3
            className="text-2xl font-semibold text-blue-700 mb-4"
            data-aos="zoom-in"
          >
            {/* Our Other Industries */}
            {mainssData[0]?.title}
          </h3>

          <p className="text-gray-600 mb-6" data-aos="zoom-out">
            {/* Apart from Healthcare and eCommerce, we have extensive experience
            building solutions across multiple domains. */}
            {mainssData[0]?.description}
          </p>

          {/* MAIN PARENT */}
          <div className="space-y-10">
            {/* ITEM 1 */}
            <div className="flex items-start gap-6"></div>

            {/* ITEM 2 */}
            <div className="flex items-start gap-6">
              <div
                className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-4xl text-blue-700 shadow"
                data-aos="fade-down"
              >
                {/* 📦 */}
                {mainssData[0]?.icon}
              </div>
              <div
                className="bg-gray-50 p-5 rounded-xl shadow flex-1 text-lg font-medium text-gray-800"
                data-aos="fade-up"
              >
                {/* Wellness & Fitness Applications */}
                {mainssData[0]?.icon_desc}
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex items-start gap-6">
              <div
                className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-4xl text-blue-700 shadow"
                data-aos="fade-down"
              >
                {/* 🧠 */}
                {mainssData[1]?.icon}
              </div>
              <div
                className="bg-gray-50 p-5 rounded-xl shadow flex-1 text-lg font-medium text-gray-800"
                data-aos="fade-up"
              >
                {/* Learning & Quiz Platforms */}
                {mainssData[1]?.icon_desc}
              </div>
            </div>

            {/* ITEM 4 */}
            <div className="flex items-start gap-6">
              <div
                className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-4xl text-blue-700 shadow"
                data-aos="fade-down"
              >
                {/* 🛒 */}
                {mainssData[2]?.icon}
              </div>
              <div
                className="bg-gray-50 p-5 rounded-xl shadow flex-1 text-lg font-medium text-gray-800"
                data-aos="fade-up"
              >
                {/* B2B and B2C Portals */}
                {mainssData[2]?.icon_desc}
              </div>
            </div>

            {/* ITEM 5 */}
            <div className="flex items-start gap-6">
              <div
                className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-4xl text-blue-700 shadow"
                data-aos="fade-down"
              >
                {/* 🚀 */}
                {mainssData[3]?.icon}
              </div>
              <div
                className="bg-gray-50 p-5 rounded-xl shadow flex-1 text-lg font-medium text-gray-800"
                data-aos="fade-up"
              >
                {/* SaaS & Automation Systems */}
                {mainssData[3]?.icon_desc}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Industries;
