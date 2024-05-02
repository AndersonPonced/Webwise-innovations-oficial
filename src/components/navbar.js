import React from "react";
import logo from "../iconos/logo-removebg-preview.png"


export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 nav">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-20 mr-4" />
      </div>

      {/* Botones */}
      <div className="flex items-center space-x-4 p-4">
        <button className="text-white text-1xl">Planes</button>
        <button className="text-white text-1xl">Servicios</button>
        <button className="text-white text-1xl">Saber más</button>
        <button className="text-white text-1xl">Blog</button>
      </div>
    </nav>
  );
};

export default Navbar;
