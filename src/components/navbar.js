import React, { useState } from "react";
import logo from "../iconos/logo-removebg-preview.png";

export const Navbar = () => {
  // State to toggle the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle the toggle of the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle smooth scrolling to sections
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
    // Close the mobile menu after clicking on a link
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-between md:p-4 nav ">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/">
          <img src={logo} alt="Logo" className="h-24 mr-4" />
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-xl">
          {/* Display hamburger icon if menu is closed, close icon if menu is open */}
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4 p-4">
        <button onClick={() => scrollToSection("planes-section")} className="text-white text-xl">Planes</button>
        <button onClick={() => scrollToSection("servicios-section")} className="text-white text-xl">Contenidos</button>
        <button onClick={() => scrollToSection("saber-mas-section")} className="text-white text-xl">Nosotros</button>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-black p-4 rounded-md">
          <button onClick={() => scrollToSection("planes-section")} className="block text-white text-xl mb-2">Planes</button>
          <button onClick={() => scrollToSection("servicios-section")} className="block text-white text-xl mb-2">Contenidos</button>
          <button onClick={() => scrollToSection("saber-mas-section")} className="block text-white text-xl">Nosotros</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
