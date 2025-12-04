import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 - Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Custom<span className="text-blue-700">Tech</span>Labs
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Building innovative digital experiences that transform your ideas
            into reality.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="services" className="hover:text-blue-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="solutions" className="hover:text-blue-400 transition">
                Solutions
              </a>
            </li>
            <li>
              <a href="contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="about-us" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="industries" className="hover:text-blue-400 transition">
                Industries
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-4">
            Stay updated with our latest news and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="  Enter Your email"
              className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200 w-full"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-row sm:flex-row justify-between items-center text-sm text-gray-500 max-w-7xl mx-auto cursor-not-allowed">
        <p className="items-center justify-center select-none">
          © {new Date().getFullYear()} CustomTechLabs. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-blue-400">
            <Facebook size={30} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <Instagram size={30} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <Linkedin size={30} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <Twitter size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
