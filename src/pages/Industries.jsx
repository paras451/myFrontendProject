import React, { useState } from "react";

const Industries = () => {
  const [showOther, setShowOther] = useState(false);

  return (
    <section  className="py-16 bg-gray-50 px-6 mt-15">
      <div className="max-w-6xl mx-auto text-center ">
        {/* Section Title */}
        <h2 className="text-6xl font-bold text-gray-800 mb-4" data-aos="flip-up" ><span className="text-blue-700">Industries</span> We Serve</h2>
        <p className="text-cyan-500 max-w-3xl mx-auto mb-10 hover:underline cusror-pointer" data-aos="flip-down">
          We specialize in building scalable, high-performance digital solutions across key industries.
        </p>
        </div>


      <div className=" md:h-full md:w-full md:flex md:gap-y-6  md:justify-evenly p-4 ">

  {/* === Healthcare === */}
  <div className="  md:w-120">
  <div className="bg-white rounded-2xl shadow-md p-10 mb-10 text-left w-full md:w-auto hover:shadow-xl transition-shadow" data-aos="flip-right">
    <h3 className="text-2xl font-semibold text-blue-700 mb-4">
      Healthcare
    </h3>

    <p className="text-gray-600 mb-6">
      Bringing innovation and precision to healthcare technology. Our solutions empower hospitals,
      assisted living facilities, and pharmacies with scalable and compliant digital systems.
    </p>
</div>
    {/* Small Divs (Vertical Only) */}
    <div className="space-y-3">
      <div className="p-6 bg-blue-50 rounded-lg"  data-aos="fade-up">Custom EMAR Software Development</div>
      <div className="p-6 bg-blue-50 rounded-lg" data-aos="fade-down">Pharmacy Management Platforms</div>
      <div className="p-6 bg-blue-50 rounded-lg" data-aos="fade-up">Medicine Search & Inventory Systems</div>
      <div className="p-6 bg-blue-50 rounded-lg" data-aos="fade-down">Appointment & Patient Tracking Portals</div>
      <div className="p-6 bg-blue-50 rounded-lg" data-aos="fade-up">Healthcare Staff Coordination Apps</div>
    </div>
  </div>


  {/* === E-Commerce === */}
  <div className=" md:w-120 mt-0">
  <div className="bg-white rounded-2xl shadow-md p-10 mb-10 text-left md:h-60 w-full md:w-auto hover:shadow-xl transition-shadow" data-aos="flip-left">
    <h3 className="text-2xl font-semibold text-blue-700 mb-4">
      E-Commerce
    </h3>

    <p className="text-gray-600 mb-4">
      We build robust eCommerce platforms optimized for performance, usability, and conversions —
      empowering brands to grow and scale digitally.
    </p>
    </div>

    {/* Small Divs (Vertical Only) */}
    <div className="space-y-3">
      <div className="p-6 bg-blue-50 rounded-lg" data-aos="fade-up" >Advanced E-commerce & Custom Stores</div>
      <div className="p-6 bg-blue-50 rounded-lg" data-aos="fade-down" >Product Search & Recommendation Systems</div>
      <div className="p-6 bg-blue-50 rounded-lg"  data-aos="fade-up" >Secure Payment Gateway Integration</div>
      <div className="p-6 bg-blue-50 rounded-lg" data-aos="fade-down" >Inventory, Order & Subscription Management</div>
      <div className="p-6 bg-blue-50 rounded-lg" data-aos="fade-up" >Mobile App Integration (iOS & Android)</div>
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
  <div className="mt-10 bg-white rounded-2xl shadow-md p-8">

    <h3 className="text-2xl font-semibold text-blue-700 mb-4" data-aos="fade-right">
     Our Other Industries
    </h3>

    <p className="text-gray-600 mb-6" data-aos="fade-left">
      Apart from Healthcare and eCommerce, we have extensive experience building solutions across multiple domains.
    </p>

    {/* MAIN PARENT */}
    <div className="space-y-10">

      {/* ITEM 1 */}
      <div className="flex items-start gap-6">

        {/* ICON DIV (pure alag) */}
        {/* <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-4xl text-blue-700 shadow" data-aos="fade-down">
          ⚙️
        </div> */}

        {/* TEXT DIV (pure alag) */}
        {/* <div className="bg-gray-50 p-5 rounded-xl shadow flex-1 text-lg font-medium text-gray-800" data-aos="fade-up">
          CRM, HRMS, and ATS Platforms
        </div> */}
      </div>

      {/* ITEM 2 */}
      <div className="flex items-start gap-6">
        <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-4xl text-blue-700 shadow" data-aos="fade-down">
          📦
        </div>
        <div className="bg-gray-50 p-5 rounded-xl shadow flex-1 text-lg font-medium text-gray-800" data-aos="fade-up">
          Wellness & Fitness Applications
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="flex items-start gap-6">
        <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-4xl text-blue-700 shadow" data-aos="fade-down">
          🧠
        </div>
        <div className="bg-gray-50 p-5 rounded-xl shadow flex-1 text-lg font-medium text-gray-800" data-aos="fade-up">
          Learning & Quiz Platforms
        </div>
      </div>

      {/* ITEM 4 */}
      <div className="flex items-start gap-6">
        <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-4xl text-blue-700 shadow" data-aos="fade-down">
          🛒
        </div>
        <div className="bg-gray-50 p-5 rounded-xl shadow flex-1 text-lg font-medium text-gray-800" data-aos="fade-up">
          B2B and B2C Portals
        </div>
      </div>

      {/* ITEM 5 */}
      <div className="flex items-start gap-6">
        <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-4xl text-blue-700 shadow" data-aos="fade-down">
          🚀
        </div>
        <div className="bg-gray-50 p-5 rounded-xl shadow flex-1 text-lg font-medium text-gray-800" data-aos="fade-up">
          SaaS & Automation Systems
        </div>
      </div>

    </div>
  </div>
        )}
    
    </section>
  );
};

export default Industries;