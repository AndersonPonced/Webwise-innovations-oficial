import React from "react";
import videoLink from '../videos/planeta.mp4';
import videoLink2 from '../videos/profesional.mp4';
import videoLink3 from '../videos/grafica.mp4';
import videoLink4 from '../videos/audiencia.mp4';
import videoLink5 from '../videos/competitividad.mp4';
import videoLink6 from '../videos/comprar.mp4';
import videoLink7 from '../videos/mapa.mp4';

import icon from '../iconos/mundo.svg'
import icon2 from '../iconos/estrella.svg'
import icon3 from '../iconos/cohete.svg'
import icon4 from '../iconos/manos.svg'
import icon5 from '../iconos/trofeo.svg'
import icon6 from '../iconos/moneda.svg'
import icon7 from '../iconos/flecha.svg'

export const Importancia = () => {
  return (
    <div className="bg-black w-full flex flex-col justify-center items-center">
      <h2 className="text-4xl md:text-6xl text-white m-10 mb-3 text-center"><span>Importancia de la presencia digital</span></h2>
      <h3 className="text-4xl md:text-4xl text-white m-3 text-center"><span className="span">EN EL 2024</span></h3>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-between p-4 text-center relative w-full">
          <div className="mb-4 md:mb-0 w-full md:w-1/2">
            <h2 className="mt-4 text-5xl md:text-right m-2"><span>Acceso Global:</span></h2>
            <h3 className="text-white m-2 md:text-right text-3xl ">La presencia digital te permite alcanzar a una audiencia global. Con un sitio web, redes sociales y otras plataformas en línea, puedes llegar a clientes potenciales en todo el mundo, expandiendo significativamente tu alcance.</h3>
          </div>
          {/* Esta línea se mantiene */}
          <div className="linea-y absolute"></div>
          <div className="cuadradoo elemento"><img src={icon} alt="icon" /></div>
          <div className='w-full md:w-2/5 p-8'>
            {/* Aquí debe de estar el video y este contenedor va a la derecha */}
            <video autoPlay loop preload="metadata" className="w-full">
              <source src={videoLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      {/* Video y texto para "Credibilidad y Profesionalismo" */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-between p-4 text-center relative w-full">
          <div className='w-full md:w-2/5 p-8'>
            <video autoPlay loop preload="metadata" className="w-full">
              <source src={videoLink2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="linea-y absolute"></div>
          <div className="cuadradooo elemento"><img src={icon2} alt="icon" /></div>
          <div className="mb-4 md:mb-0 w-full md:w-1/2">
            <h2 className="mt-4 text-5xl md:text-left m-2 ml-20"><span>Credibilidad y Profesionalismo:</span></h2>
            <h3 className="text-white m-2 md:text-left text-3xl ml-20 ">En la era digital, la mayoría de las personas busca información en línea antes de tomar decisiones. Tener una presencia digital sólida, como un sitio web profesional y perfiles activos en redes sociales, construye credibilidad y transmite una imagen de profesionalismo.</h3>
          </div>
        </div>
      </div>
      {/* Video y texto para "Generación de Leads" */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-between p-4 text-center relative w-full">
          <div className="mb-4 md:mb-0 w-full md:w-1/2">
            <h2 className="mt-4 text-5xl md:text-right m-2"><span>Generación de Leads:</span></h2>
            <h3 className="text-white m-2 md:text-right text-3xl ">Una presencia digital efectiva es una herramienta poderosa para la generación de leads. Las estrategias de marketing digital, como el SEO, las redes sociales y el marketing de contenidos, te ayudan a atraer y convertir clientes potenciales de manera más eficiente.</h3>
          </div>
          <div className="linea-y absolute"></div>
          <div className="cuadradoo elemento"><img src={icon3} alt="icon" /></div>
          <div className='w-full md:w-2/5 p-8'>
            <video autoPlay loop preload="metadata" className="w-full">
              <source src={videoLink3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      {/* Video y texto para "Interacción con la Audiencia" */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-between p-4 text-center relative w-full">
          <div className='w-full md:w-2/5 p-8'>
            <video autoPlay loop preload="metadata" className="w-full">
              <source src={videoLink4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="linea-y absolute"></div>
          <div className="cuadradooo elemento"><img src={icon4} alt="icon" /></div>
          <div className="mb-4 md:mb-0 w-full md:w-1/2">
            <h2 className="mt-4 text-5xl md:text-left m-2 ml-20"><span>Interacción con la Audiencia:</span></h2>
            <h3 className="text-white m-2 md:text-left text-3xl ml-20 ">Las redes sociales y otros canales digitales ofrecen oportunidades para interactuar directamente con tu audiencia. Esto no solo construye una comunidad leal, sino que también te brinda información valiosa sobre las preferencias y necesidades de tus clientes.</h3>
          </div>
        </div>
      </div>
      {/* Video y texto para "Competitividad" */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-between p-4 text-center relative w-full">
          <div className="mb-4 md:mb-0 w-full md:w-1/2">
            <h2 className="mt-4 text-5xl md:text-right m-2"><span>Competitividad:</span></h2>
            <h3 className="text-white m-2 md:text-right text-3xl ">En la actualidad, la mayoría de los negocios, independientemente de su tamaño, tienen una presencia digital. Para mantenerse competitivo, es esencial no solo tener presencia, sino también destacar. Una estrategia digital bien ejecutada puede diferenciarte de la competencia.</h3>
          </div>
          <div className="linea-y absolute"></div>
          <div className="cuadradooo elemento"><img src={icon5} alt="icon" /></div>
          <div className='w-full md:w-2/5 p-8'>
            <video autoPlay loop preload="metadata" className="w-full">
              <source src={videoLink5} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      {/* Video y texto para "Facilita el Proceso de Compra" */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-between p-4 text-center relative w-full">
          <div className='w-full md:w-2/5 p-8'>
            <video autoPlay loop preload="metadata" className="w-full">
              <source src={videoLink6} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="linea-y absolute"></div>
          <div className="cuadradooo elemento"><img src={icon6} alt="icon" /></div>
          <div className="mb-4 md:mb-0 w-full md:w-1/2">
            <h2 className="mt-4 text-5xl md:text-left m-2 ml-20"><span>Facilita el Proceso de Compra:</span></h2>
            <h3 className="text-white m-2 md:text-left text-3xl ml-20">Los consumidores modernos buscan información en línea antes de realizar una compra. Tener una presencia digital sólida proporciona a los clientes la información que necesitan, facilitando el proceso de toma de decisiones y aumentando las posibilidades de conversión.</h3>
          </div>
        </div>
      </div>
      {/* Video y texto para "Adaptación a las Tendencias" */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-between p-4 text-center relative w-full">
          <div className="mb-4 md:mb-0 w-full md:w-1/2">
            <h2 className="mt-4 text-5xl md:text-right m-2"><span>Adaptación a las Tendencias:</span></h2>
            <h3 className="text-white m-2 md:text-right text-3xl "> En el mundo digital, las tendencias y tecnologías evolucionan constantemente. Mantener una presencia digital te permite adaptarte rápidamente a estas tendencias, lo que es esencial para seguir siendo relevante y atractivo para tu audiencia.</h3>
          </div>
          <div className="linea-y absolute"></div>
          <div className="cuadradoo elemento"><img src={icon7} alt="icon" /></div>
          <div className='w-full md:w-2/5 p-8'>
            <video autoPlay loop preload="metadata" className="w-full">
              <source src={videoLink7} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Importancia;
