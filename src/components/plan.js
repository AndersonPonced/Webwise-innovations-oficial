import React from "react";
import img from '../img/producc.jpg';
import imgg from '../img/producct.jpg';
import imggg from '../img/productct.jpg';

export const Plan = () => {
  const handleWhatsAppButtonClick = () => {
    const phoneNumber = '+5491134674195';
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div id="planes-section" className="bg-black text-white ">
      <h1 className="text-6xl text-center m-4"><span>Planes de trabajo</span></h1>
      <div className= " flex flex-col items-center">
        <div className="derechaa flex flex-col md:flex-row items-center justify-between p-4 w-full">
          <div className="mb-4 md:mb-0 md:w-1/2 text-center">
            <div className="flex flex-col items-center">
              <div className="cuadrado w-20 h-20 rounded-lg flex items-center justify-center">01</div>
              <h2 className="mt-4 text-3xl"><span>Plan Completo</span></h2>
            </div>
            <p className="m-2">¿Estás listo para destacar en el nuevo mundo digital? Nuestro equipo de expertos en diseño web está aquí para transformar tu emprendimiento en una realidad visualmente impactante.</p>
            <button onClick={handleWhatsAppButtonClick} className="h-14 text-2xl w-80 rounded-full button">CONTÁCTANOS POR WHATSAPP</button>
          </div>
          <img src={img} alt="Emprendedores" className="sombra w-full md:w-1/2 h-96 rounded-lg shadow-lg mt-4 md:mt-0"/>
        </div>
        <div className="izquierda flex flex-col md:flex-row items-center justify-between p-4 w-full">
          <img src={imgg} alt="Emprendedores" className="sombra w-full md:w-1/2 h-80 rounded-lg shadow-lg mb-4 md:mb-0"/>
          <div className="text-center md:w-1/2">
            <div className="flex flex-col items-center">
              <div className="cuadrado w-20 h-20 rounded-lg flex items-center justify-center">02</div>
              <h2 className="mt-4 text-3xl"><span>Plan presencia en redes</span></h2>
            </div>
            <p className="m-2">En el universo de las marcas personales, la autenticidad es clave. En WebWise Innovation, fusionamos creatividad y estrategia para construir una identidad visual que no solo te represente, ¡sino que te distinga!</p>
            <button onClick={handleWhatsAppButtonClick} className="h-14 text-2xl w-80 rounded-full button">CONTÁCTANOS POR WHATSAPP</button>
          </div>
        </div>
        <div className="derecha flex flex-col md:flex-row items-center justify-between p-4 w-full">
          <div className="text-center md:w-1/2 mb-4 md:mb-0">
            <div className="flex flex-col items-center">
              <div className="cuadrado w-20 h-20 rounded-lg flex items-center justify-center">03</div>
              <h2 className="mt-4 text-3xl"><span>Plan presencia en la web</span></h2>
            </div>
            <p className="m-2">Eleva tu marca, atrae a nuevos clientes y deslumbra en el mundo digital. Con WebWise Innovation, no solo creamos páginas web, ¡construimos tu legado online!</p>
            <button onClick={handleWhatsAppButtonClick} className="h-14 text-2xl w-80 rounded-full button">CONTÁCTANOS POR WHATSAPP</button>
          </div>
          <img src={imggg} alt="Emprendedores" className="sombra w-full md:w-1/2 h-96 rounded-lg shadow-lg"/>
        </div>
      </div>
    </div>
  );
};

export default Plan;
