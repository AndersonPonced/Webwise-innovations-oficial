import React from "react";
import img from '../img/icon-uno-removebg-preview.png';
import img2 from '../img/icon-dos-removebg-preview.png';
import img3 from '../img/icon-tres-removebg-preview.png';

export const Barra = ()=>{
    return (
        <div className="mb-5 w-screen todoo">
            <div className="linea-verde"></div>

            {/* Utilizamos clases de Tailwind para mostrar en una columna en dispositivos móviles y tabletas */}
            <div className="flex justify-center flex-col md:flex-row md:items-center">
                <div className="flex justify-center ml-5 mb-5 md:mb-0">
                    <img src={img} className="h-28"/>
                    <h3 className="text-2xl text-white mt-10"><span>IMPRESIONA DESDE EL PRIMER  CONTACTO</span></h3>
                </div>
                <div className="flex justify-center ml-5 mb-5 md:mb-0">
                    <img src={img2} className="h-28"/>
                    <h3 className="text-2xl text-white mt-10"><span>NETWORKING SIMPLIFICADO</span></h3>
                </div>
                <div className="flex justify-center ml-5 mb-5 md:mb-0">
                    <img src={img3} className="h-28"/>
                    <h3 className="text-2xl text-white mt-10"><span>POTENCIA TU MARCA PERSONAL</span></h3>
                </div>
            </div>

            <div className="linea-verde-dos"></div>
        </div>
    );
}

export default Barra;
