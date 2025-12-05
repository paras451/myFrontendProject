import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import api from "../axiosConfig";

const Services = () => {
  const [mainData, setMainData] = useState(null);

  useEffect(() => {
    api
      .get("/service")
      .then((res) => {
        console.log("API RAW DATA:", res.data);
        setMainData(res.data[0]);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  //for items data services ke divs ke liye get request
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    api
      .get("/services")
      .then((res) => {
        console.log("API RAW DATA:", res.data);
        const sorted = res.data.sort((a, b) => a.position - b.position);
        setItemData(sorted);
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.refresh();
  }, [mainData, itemData]);

  return (
    <section className="py-20 bg-blue-50 px-6 mt-10">
      <div className="relative max-w-6xl mx-auto text-center pt-10 justify-center items-center  h-80 overflow-hidden rounded-3xl">
        <div className="animated-bg"></div>
        <style>{`
.animated-bg {
position: absolute;
inset: 0;
background: linear-gradient(120deg, #ff8a8a, #8ab6ff, #ffd18a);
background-size: 300% 300%;
animation: gradientMove 10s ease infinite;
opacity: 0.6;
}


@keyframes gradientMove {
0% { background-position: 0% 50%; }
50% { background-position: 100% 50%; }
100% { background-position: 0% 50%; }
}
`}</style>

        <h2
          className="text-[60px] font-bold text-gray-800 mb-4 relative"
          data-aos="flip-up"
        >
          {/* Our  */}
          {mainData?.mainTitle.split(" ").slice(0, 1).join(" ")}{" "}
          {/* <br className="hidden sm:inline" /> */}
          <span className="text-blue-700">
            {/* Services */}
            {mainData?.mainTitle.split(" ").slice(1).join(" ")}
          </span>
        </h2>

        <p
          className="text-gray-600 max-w-2xl mx-auto relative"
          data-aos="fade-up"
        >
          {mainData?.description}
          {/* We craft high-performance, scalable digital solutions designed to
          transform ideas into real-world impact. Explore what we offer. */}
        </p>
      </div>
      <div className="max-w-6xl mx-auto text-center p-5  mt-30 md:h-140  sm:h-full ">
        {/* === Services Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* === Service Card 1 === */}
          {itemData
            .filter((itemData) => itemData.position === 1)
            .map((itemData) => (
              <div
                key={itemData.id}
                className="bg-white shadow-md rounded-2xl p-8 h-60  hover:shadow-[0_0_25px_#3b82f6] transition-all duration-300"
                data-aos="fade-down"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  {/* Web App Development */} {itemData?.mainTitle}
                </h3>
                <p className="text-gray-600">
                  {/* Custom, responsive, and high-performing web apps built using the
              latest technologies for seamless digital experiences. */}{" "}
                  {itemData?.description}
                </p>
              </div>
            ))}

          {/* === Service Card 2 === */}
          {itemData
            .filter((itemData) => itemData.position === 2)
            .map((itemData) => (
              <div
                key={itemData.id}
                className="bg-white shadow-md rounded-2xl p-8 hover:shadow-[0_0_25px_#3b82f6] transition-all duration-300"
                data-aos="fade-down"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  {/* Mobile App Development */} {itemData?.mainTitle}
                </h3>
                <p className="text-gray-600">
                  {/* Scalable iOS and Android applications designed to deliver smooth,
              secure, and modern user experiences. */}{" "}
                  {itemData?.description}
                </p>
              </div>
            ))}

          {/* === Service Card 3 === */}

          {itemData
            .filter((itemData) => itemData.position === 3)
            .map((itemData) => (
              <div
                key={itemData.id}
                className="bg-white shadow-md rounded-2xl p-8 hover:shadow-[0_0_25px_#3b82f6] transition-all duration-300"
                data-aos="fade-down"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  {/* UI / UX Design */}
                  {itemData?.mainTitle}
                </h3>
                <p className="text-gray-600">
                  {/* Clean, intuitive, and conversion-focused design systems that
                  bring life and clarity to your product. */}
                  {itemData?.description}
                </p>
              </div>
            ))}

          {/* === Service Card 4 === */}

          {itemData
            .filter((itemData) => itemData.position === 4)
            .map((itemData) => (
              <div
                key={itemData.id}
                className="bg-white shadow-md rounded-2xl h-60 p-8 hover:shadow-[0_0_25px_#3b82f6] transition-all duration-300"
                data-aos="fade-down"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  {/* Custom Software Solutions */}
                  {itemData?.mainTitle}
                </h3>
                <p className="text-gray-600">
                  {/* Tailored software applications that fit your business workflows
              and boost operational efficiency. */}
                  {itemData?.description}
                </p>
              </div>
            ))}

          {/* === Service Card 5 === */}
          {itemData
            .filter((itemData) => itemData.position === 5)
            .map((itemData) => (
              <div
                key={itemData.id}
                className="bg-white shadow-md rounded-2xl p-8 hover:shadow-[0_0_25px_#3b82f6] transition-all duration-300"
                data-aos="fade-down"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  {/* API & Integration */}
                  {itemData?.mainTitle}
                </h3>
                <p className="text-gray-600">
                  {/* Seamless integrations and scalable API solutions that connect
                  your systems and automate complex tasks. */}
                  {itemData?.description}
                </p>
              </div>
            ))}
          {/* === Service Card 6 === */}
          {itemData
            .filter((itemData) => itemData.position === 6)
            .map((itemData) => (
              <div
                key={itemData.id}
                className="bg-white shadow-md rounded-2xl p-8 hover:shadow-[0_0_25px_#3b82f6] transition-all duration-300"
                data-aos="fade-down"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  {/* Maintenance & Support */} {itemData?.mainTitle}
                </h3>
                <p className="text-gray-600">
                  {/* Long-term support, optimization, and upgrades to ensure your
              product stays future-ready and secure. */}{" "}
                  {itemData?.description}
                </p>
              </div>
            ))}
        </div>
      </div>

      <div
        className="flex items-center justify-center mx-auto text-center p-5 mt-20 "
        data-aos="fade-up"
      >
        {/* Advanced eCommerce Development Card */}
        {itemData
          .filter((itemData) => itemData.position === 7)
          .map((itemData) => (
            <div
              key={itemData.id}
              onClick={() => navigate("/services/advanced-ecommerce")}
              className="cursor-pointer md:h-60 p-8 border rounded-xl shadow  bg-white hover:shadow-[0_0_25px_#3b82f6] transition-all duration-300 items-center md:w-90  "
              data-aos="flip-right"
            >
              <h2 className="text-xl font-bold mb-2 text-blue-700">
                {/* Advanced ECommerce Development */} {itemData?.mainTitle}
              </h2>
              <p className="text-gray-600">
                {/* Custom-built eCommerce platforms with AI search, secure
                payments, and advanced modules. */}{" "}
                {itemData?.description}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Services;
