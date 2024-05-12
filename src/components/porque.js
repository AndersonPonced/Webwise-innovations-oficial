import React from "react";
import img from '../iconos/money.png'
import img2 from '../iconos/lupa.png'
import img3 from '../iconos/cerebro.png'
import img4 from '../iconos/contacto.png'
import img5 from '../iconos/imagen.png'
import img6 from '../iconos/reloj.png'

export const Porque = () => {
  return (
    <div id="saber-mas-section" className="bg-black min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl md:text-6xl text-white m-3 text-center"><span>¿Por qué Webwiseinn?</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
        <div className="h-80 md:h-96 p-4 flex flex-col justify-center items-center rounded-lg border-solid border-2  border-white hover:scale-105 transition-transform" style={{ background: ' linear-gradient(to right, rgba(0, 151, 178, 0.4), rgba(126, 217, 87, 0.4))' }}>
          <h2 className="text-white text-lg md:text-3xl text-center">Precio Fijo Mensual</h2>
          <p className="text-white mt-10">Un solo precio para que sepas cuándo debes pagar.</p>
          <img src={img} alt="icono" className="mt-auto mb-auto w-16 h-16 md:w-40 md:h-24" />
        </div>
        <div className="h-80 md:h-96 p-4 flex flex-col justify-center items-center rounded-lg border-solid border-2  border-white hover:scale-105 transition-transform" style={{ background: ' linear-gradient(to right, rgba(0, 151, 178, 0.4), rgba(126, 217, 87, 0.4))' }}>
          <h2 className="text-white text-lg md:text-3xl text-center">Revisiones Ilimitadas</h2>
          <p className="text-white text-sm md:text-base mt-10">Sin límites, para asegurar que tu proyecto alcance la perfección.</p>
          <img src={img2} alt="icono" className="mt-auto mb-auto w-16 h-16 md:w-24 md:h-24" />
        </div>
        <div className="h-80 md:h-96 p-4 flex flex-col justify-center items-center rounded-lg border-solid border-2  border-white hover:scale-105 transition-transform" style={{ background: ' linear-gradient(to right, rgba(0, 151, 178, 0.4), rgba(126, 217, 87, 0.4))' }}>
          <h2 className="text-white text-lg md:text-3xl text-center">Tu equipo creativo</h2>
          <p className="text-white text-sm md:text-base mt-10">página web, creación y gestión de contenidos en redes sociales y creación de logo.</p>
          <img src={img3} alt="icono" className="mt-auto mb-auto" />
        </div>
        <div className="h-80 md:h-96 p-4 flex flex-col justify-center items-center rounded-lg border-solid border-2  border-white hover:scale-105 transition-transform" style={{ background: ' linear-gradient(to right, rgba(0, 151, 178, 0.4), rgba(126, 217, 87, 0.4))' }}>
          <h2 className="text-white text-lg md:text-3xl text-center">Comunicación</h2>
          <p className="text-white text-sm md:text-base mt-10">Vas a tener comunicación constante con nosotros para que estés al día con el proyecto.</p>
          <img src={img4} alt="icono" className="mt-auto mb-auto" />
        </div>
        <div className="h-80 md:h-96 p-4 flex flex-col justify-center items-center rounded-lg border-solid border-2  border-white hover:scale-105 transition-transform" style={{ background: ' linear-gradient(to right, rgba(0, 151, 178, 0.4), rgba(126, 217, 87, 0.4))' }}>
          <h2 className="text-white text-lg md:text-3xl text-center">Creamos tu imagen digital</h2>
          <p className="text-white text-sm md:text-base mt-10">Colores, frase, eslogan.</p>
          <img src={img5} alt="icono" className="mt-auto mb-auto" />
        </div>
        <div className="h-80 md:h-96 p-4 flex flex-col justify-center items-center rounded-lg border-solid border-2  border-white hover:scale-105 transition-transform" style={{ background: ' linear-gradient(to right, rgba(0, 151, 178, 0.4), rgba(126, 217, 87, 0.4))' }}>
          <h2 className="text-white text-lg md:text-3xl text-center">Ejecución Rápida</h2>
          <p className="text-white text-sm md:text-base mt-10">Semanalmente vas a tener resultados</p>
          <img src={img6} alt="icono" className="mt-auto mb-auto" />
        </div>
      </div>
    </div>
  );
};

export default Porque;
