import React from "react";
import img from '../img/produc.jpg';
import imgg from '../img/product.jpg';
import imggg from '../img/productt.jpg';

export const Plan = () => {
  return (
    <div className="todo flex flex-col ">
      <div className="fondoPlan flex-grow">
        <h1 className="text-6xl font-bold text-center m-4"><span>Planes de trabajo</span></h1>
      </div>
      <div className="todo h-full">
        <div className="derecha flex flex-col md:flex-row items-center justify-between p-4 text-center">
          <div className="mb-4 md:mb-0">
            <div className="cuadrado w-20 h-20 rounded-lg relative left">01</div>
            <h2 className="mt-4 text-5xl text-center m-2"><span>Plan Completo</span></h2>
            <p className="text-white m-2">¿Estás listo para destacar en el nuevo mundo digital? Nuestro equipo de expertos en diseño web está aquí para transformar tu emprendimiento en una realidad visualmente impactante.</p>
            <button className='h-14 text-2xl text-white w-80 rounded-full button'>ELEVA TU PRESENCIA</button>
          </div>
          <img src={img} alt="Emprendedores" className="mt-4 md:mt-0 md:w-1/2 lg:w-auto h-96 rounded-lg" />
        </div>
        <div className="izquierda  flex flex-col md:flex-row items-center justify-between p-4 text-center">
          <img src={imgg} alt="Emprendedores" className="mt-4 md:mt-0 md:w-1/2 lg:w-auto h-80 rounded-lg" />
          <div className="mb-4 md:mb-0">
            <div className="cuadrado w-20 h-20 rounded-lg relative left">02</div>
            <h2 className="mt-4 text-5xl text-center m-2"><span>Plan presencia en redes</span></h2>
            <p className="text-white m-2">En el universo de las marcas personales, la autenticidad es clave. En WebWise Innovation, fusionamos creatividad y estrategia para construir una identidad visual que no solo te represente, ¡sino que te distinga!</p>
            <button className='h-14 text-2xl text-white w-80 rounded-full button'>ELEVA TU PRESENCIA</button>
          </div>
        </div>
        <div className="derecha  flex flex-col md:flex-row items-center justify-between p-4 text-center">
          <div className="mb-4 md:mb-0">
            <div className="cuadrado w-20 h-20 rounded-lg relative left">03</div>
            <h2 className="mt-4 text-5xl m-2"><span>Plan presencia en la web</span></h2>
            <p className="text-white m-2">Eleva tu marca, atrae a nuevos clientes y deslumbra en el mundo digital. Con WebWise Innovation, no solo creamos páginas web, ¡construimos tu legado online!</p>
            <button className='h-14 text-2xl text-white w-80 rounded-full button'>ELEVA TU PRESENCIA</button>
          </div>
          <img src={imggg} alt="Emprendedores" className="mt-4 md:mt-0 md:w-1/2 lg:w-auto h-96 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Plan;
