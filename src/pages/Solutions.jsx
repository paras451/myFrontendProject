import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import AOS from "aos";

const Solutions = () => {
  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8082/SolutionsTable1")
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
    axios
      .get("http://localhost:8082/SolutionsTable2")
      .then((res) => {
        console.log("API RAW DATA:", res.data);
        setMainsData(res.data);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [mainData, mainsData]);

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20 mt-15">
      <div className="max-w-7xl mx-auto text-center  md:h-80  ">
        <h2
          className="text-3xl md:text-6xl font-bold text-gray-800 mb-6 pt-20"
          data-aos="flip-up"
        >
          {/* Our Tailored  */}
          {mainData?.title.split(" ").slice(0, 2).join(" ")}{" "}
          <span className="text-blue-700">
            {mainData?.title.split(" ").slice(2).join(" ")}
          </span>
        </h2>
        <p
          className="text-gray-600 max-w-3xl mx-auto mb-12 "
          data-aos="fade-up"
        >
          {/* We provide specialized digital solutions that simplify complex
          processes and accelerate growth. */}
          {mainData?.description}
        </p>
      </div>

      <div className="max-w-7xl mx-auto text-center  mt-10 p-5">
        <div className="flex flex-wrap justify-center gap-10 ">
          {mainsData?.map((item, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-blue-50 to-cyan-300 shadow-lg hover:shadow-2xl rounded-2xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-4 duration-300 w-[90%] sm:w-[45%] lg:w-[28%] "
              data-aos="flip-up"
            >
              <div className="bg-blue-600 text-white text-4xl w-16 h-16 flex items-center justify-center rounded-full mb-5 shadow-md">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Solutions;
