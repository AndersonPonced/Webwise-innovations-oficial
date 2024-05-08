import React from "react";

export const SomosLaSolucion = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-6xl text-white m-3"><span>Somos la solución</span></h2>
      <div className="flex flex-col md:flex-row justify-around p-10 text-white">
        <div className="w-full md:w-1/3 rounded-lg p-10 mt-5 md:mt-0" style={{ background: ' linear-gradient(to right, rgba(0, 151, 178, 0.5), rgba(126, 217, 87, 0.5))' }}>
          <h2 className="text-3xl text-center m-4">¡Dile adiós al antiguo modelo!</h2>
          <p className="text-xl m-2">❌ No más búsqueda interminable de Freelancers o Agencias</p>
          <p className="text-xl m-2">❌ Olvídate de contratar personal sin experiencia comprobada</p>
          <p className="text-xl m-2">❌ Deja de perder tiempo navegando por innumerables portafolios</p>
          <p className="text-xl m-2">❌ Di adiós a las horas perdidas en entrevistas de reclutamiento</p>
          <p className="text-xl m-2">❌ No más presupuestar proyecto por proyecto</p>
          <p className="text-xl m-2">🚀 ¡Obtén el equipo perfecto para tus proyectos de desarrollo web y alcanza tus objetivos más rápido que nunca!</p>
        </div>
        <div className="w-full md:w-1/3 rounded-lg p-10 mt-5 md:mt-0" style={{ background: ' linear-gradient(to right, rgba(0, 151, 178, 0.5), rgba(126, 217, 87, 0.5))' }}>
          <h2 className="text-3xl text-center m-4">¡Dile sí al nuevo modelo!</h2>
          <p className="text-xl m-2">✅ Contratación especializada en desarrollo web</p>
          <p className="text-xl m-2">✅ Equipo de expertos con experiencia comprobada</p>
          <p className="text-xl m-2">✅ Acceso directo a un portafolio de proyectos exitosos</p>
          <p className="text-xl m-2">✅ Ahorra tiempo con procesos de reclutamiento eficientes</p>
          <p className="text-xl m-2">✅ Modelos de colaboración flexibles y adaptados a tus necesidades</p>
          <p className="text-xl m-2">🚀 ¡Obtén el equipo perfecto para tus proyectos de desarrollo web y alcanza tus objetivos más rápido que nunca!</p>
        </div>
      </div>
    </div>
  );
};

export default SomosLaSolucion;
