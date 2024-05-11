import React from "react";
import img from '../clientes/LOGOS DS CYBER-07.png';
import img2 from '../clientes/security.png';

export const Clientes = () => {
  return (
    <div className="clientes w-full h-64 flex justify-around items-center">
      <img src={img} className="h-28" />
      <img src={img2} className="h-28" />
    </div>
  );
}

export default Clientes;
