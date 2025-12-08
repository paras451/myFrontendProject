import React, { useState } from "react";
import logo from "../assets/logo (1).png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50 sm:w-full md:w-full ">
      {/* Logo */}
      <div className="flex items-center rounded-full  ">
        <img
          src={logo}
          alt="Logo"
          className="w-auto  md:h-14 lg:h-14 object-scale-down transition-transform duration-200 hover:scale-150 "
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium">
        <li>
          <Link to="/" className="hover:text-sky-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-sky-500">
            Services
          </Link>
        </li>
        <li>
          <Link to="/about-us" className="hover:text-sky-500">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/solutions" className="hover:text-sky-500">
            Solutions
          </Link>
        </li>
        <li>
          <Link to="/industries" className="hover:text-sky-500">
            Industries
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-sky-500">
            Contact
          </Link>
        </li>
      </ul>

      {/* Right side buttons */}
      <div className="flex items-center gap-3">
        <Link to="/admin-login">
          <button className="bg-sky-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all w-full">
            Login Admin Panel
          </button>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-gray-900 flex flex-col items-center gap-5 py-6 md:hidden shadow-lg z-40">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-sky-500"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-sky-500"
          >
            Services
          </Link>
          <Link
            to="/about-us"
            onClick={() => setMenuOpen(false)}
            className="hover:text-sky-500"
          >
            About Us
          </Link>
          <Link
            to="/solutions"
            onClick={() => setMenuOpen(false)}
            className="hover:text-sky-500"
          >
            Solutions
          </Link>
          <Link
            to="/industries"
            onClick={() => setMenuOpen(false)}
            className="hover:text-sky-500"
          >
            Industries
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-sky-500"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
