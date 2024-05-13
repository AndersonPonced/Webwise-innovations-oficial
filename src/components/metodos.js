import React from "react";
import img from '../iconos/lemon.webp';
import img2 from '../iconos/paypal.png';
import img3 from '../iconos/mercado.png';


export const Metodos = () => {

    return (
        <div className="w-full mb-10 "> {/* Contenedor flex para centrar horizontalmente */}
            <h2 className="text-center text-6xl m-10"><span>Metodos de pago</span></h2>

            <div className="w-full flex items-center justify-center"> {/* Contenedor flex para centrar horizontalmente */}


                <div className="w-1/2 h-16 flex justify-around items-center rounded-lg" style={{ background: ' linear-gradient(to right, rgba(0, 151, 178, 0.5), rgba(126, 217, 87, 0.5))' }}> {/* Aplicación de justify-around e items-center */}
                    <img src={img} title="lemon cash" />
                    <img src={img2} className="h-10" title="Paypal" />
                    <img src={img3}  title="Mercado Pago"/>
                </div>
            </div>
        </div>

    )

}

export default Metodos;
