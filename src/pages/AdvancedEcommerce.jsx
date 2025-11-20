import React from "react";
// import image from "../assets/ecommerce.png";

export default function AdvancedEcommerce() {
  return (
    <div className="px-8 md:px-20 py-16 mt-18 ">

      {/* Hero Section */}
      <div className=" relative text-center mb-16  w-full  md:h-[200px] bg-[url('/ecommerce.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center " data-aos="fade-up" >

        <div className="absolute inset-0 bg-black/50"></div>
        
        <h1 className="text-4xl font-extrabold mb-4 drop-shadow-lg text-white" data-aos="flip-right"> 
        <span className="text-blue-700"> Advanced</span>  E-Commerce Development
        </h1>
        <p className="text-lg max-w-2xl mx-auto drop-shadow-2xl text-white"  data-aos="flip-left">
          We build custom digital commerce platforms designed for performance,
          flexibility, and long-term growth.
        </p>
      </div>

      {/* Core Features */}
      <h2 className="text-2xl font-bold mb-6" data-aos="zoom-out">Core <span className="text-blue-700"> Features </span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" data-aos="fade-down">
        <Feature title="Custom eCommerce platform development" />
        <Feature title="AI-powered product search & recommendations" />
        <Feature title="Secure multi-currency payment integration" />
        <Feature title="Inventory, order & subscription management" />
        <Feature title="Mobile app integration for iOS & Android" />
        <Feature title="High-performance, scalable architecture" />
      </div>

      {/* Advanced Modules */}
      <h2 className="text-2xl font-bold mb-6" data-aos="zoom-out">Advanced <span className="text-blue-700"> Modules </span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16" data-aos="fade-down">
        <Feature title="Custom admin panel with role-based access"  />
        <Feature title="Warehouse management system (WMS)"  />
        <Feature title="Influencer & affiliate management"  />
        <Feature title="Loyalty, wallet & rewards system" />
        <Feature title="CRM & marketing automation" />
        <Feature title="B2B, B2C & multi-vendor capabilities"  />
      </div>

      {/* CTA */}
      <div className="text-center">
        <button className="bg-black text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 font-semibold" data-aos="zoom-in">
          Start Your Project
        </button>
      </div>
    </div>
  );
}

function Feature({ title }) {
  return (
    <div className="p-5 border rounded-2xl shadow-sm hover:shadow transition bg-blue-50 hover:bg-blue-200" >
      <p className="font-semibold">{title}</p>
    </div>
  );
}
