import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// import image from "../assets/ecommerce.png";
import api from "../axiosConfig";

const AdvancedEcommerce = () => {
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    api
      .get("/Table1")
      .then((res) => {
        console.log("API RAW DATA:", res.data);
        setMainData(res.data[0]);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  const [mainss, setMainss] = useState([]);

  useEffect(() => {
    api
      .get("/Table2")
      .then((res) => {
        console.log("API RAW DATA:", res.data);
        const sorted = res.data.sort((a, b) => a.position - b.position);
        setMainss(sorted);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  const [mainsss, setMainsss] = useState([]);

  useEffect(() => {
    api
      .get("/Table3")
      .then((res) => {
        console.log("API RAW DATA:", res.data);
        const sorted = res.data.sort((a, b) => a.position - b.position);
        setMainsss(sorted);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  return (
    <div className="px-8 md:px-20 py-16 mt-18 ">
      {/* Hero Section */}
      {}
      <div
        className=" relative text-center mb-16  w-full  md:h-[200px] bg-[url(/ecommerce.png)] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center "
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <h1
          className="text-4xl font-extrabold mb-4 drop-shadow-lg text-white"
          data-aos="flip-right"
        >
          <span className="text-sky-500">
            {mainData?.mainTitle?.split(" ").slice(0, 1).join(" ")}{" "}
          </span>

          {/* E-Commerce
           Development */}
          {mainData?.mainTitle?.split(" ").slice(1).join(" ")}
        </h1>
        <p
          className="text-lg max-w-2xl mx-auto drop-shadow-2xl text-white"
          data-aos="flip-left"
        >
          {/* We build custom digital commerce platforms designed for performance,
          flexibility, and long-term growth. */}{" "}
          {mainData?.description}
        </p>
      </div>

      {/* Core Features */}
      <h2 className="text-2xl font-bold mb-6" data-aos="zoom-out">
        <span className="text-sky-500">
          {" "}
          {mainss.find((i) => i.position === 1)?.title}{" "}
        </span>
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        data-aos="fade-down"
      >
        <Feature title={mainss.find((i) => i.position === 1)?.description} />
        <Feature title={mainss.find((i) => i.position === 2)?.description} />
        <Feature title={mainss.find((i) => i.position === 3)?.description} />
        <Feature title={mainss.find((i) => i.position === 4)?.description} />
        <Feature title={mainss.find((i) => i.position === 5)?.description} />
        <Feature title={mainss.find((i) => i.position === 6)?.description} />
      </div>

      {/* Advanced Modules */}
      <h2 className="text-2xl font-bold mb-6" data-aos="zoom-out">
        <span className="text-sky-500">
          {" "}
          {mainsss.find((i) => i.position === 1)?.title}{" "}
        </span>
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        data-aos="fade-down"
      >
        <Feature title={mainsss.find((i) => i.position === 1)?.description} />
        <Feature title={mainsss.find((i) => i.position === 2)?.description} />
        <Feature title={mainsss.find((i) => i.position === 3)?.description} />
        <Feature title={mainsss.find((i) => i.position === 4)?.description} />
        <Feature title={mainsss.find((i) => i.position === 5)?.description} />
        <Feature title={mainsss.find((i) => i.position === 6)?.description} />
      </div>

      {/* CTA */}
      {mainsss
        .filter((mainsss) => mainsss.position === 6)
        .map((mainsss) => (
          <div className="text-center" key={mainsss.id}>
            <button
              className="bg-black text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 font-semibold"
              data-aos="zoom-in"
            >
              {/* <Feature  title={mainsss.find((i) => i.position === 6)?.button_text} /> */}
              {/* Start Your Project */} {mainsss?.button_text}
            </button>
          </div>
        ))}
    </div>
  );
};

function Feature({ title }) {
  return (
    <div className="p-5 border rounded-2xl shadow-sm hover:shadow transition bg-blue-50 hover:bg-blue-200">
      <p className="font-semibold">{title}</p>
    </div>
  );
}
export default AdvancedEcommerce;
