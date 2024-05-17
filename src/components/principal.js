import React from 'react';
import Navbar from './navbar';
import videoLink from '../videos/webwiseinn.mp4';
import videoFondo from '../videos/nave.mp4';

export const Principal = () => {
  const handleWhatsAppButtonClick = () => {
    const phoneNumber = '+5491134674195';
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className='fondo relative h-screen w-screen overflow-hidden'>
      {/* Video de fondo */}
      <video autoPlay loop muted preload="metadata" className="absolute top-0 left-0 min-w-full min-h-full  object-cover">
        <source src={videoFondo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Contenido */}
      <div className='relative z-10'>
      <Navbar />
      </div>
      <div className='principal flex flex-col md:flex-row justify-between flex-grow relative z-10'>
        <div className='flex flex-col justify-center px-4 text-white font-bold md:w-1/2'>
          <h1 className='text-4xl min-text-2xl md:text-6xl text-center mt-5 md:mt-10'>EN <span>WEBWISE INNOVATIONS</span> NO SOLO CONSTRUIMOS TU PÁGINA WEB, CREAMOS TU PRESENCIA DIGITAL EXTRAORDINARIA</h1>
          <p className='text-center mt-2 md:mb-10'>Aprovecha al máximo las oportunidades digitales y abre las puertas a nuevos clientes, socios y colaboradores.</p>
        </div>
        <div className='w-full md:w-1/2 p-5 min-p-10 md:p-8'>
          {/* Video principal */}
          <video autoPlay controls preload="metadata" className="w-full relative z-10 object-cover">
            <source src={videoLink} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className='flex justify-center mb-20'>
        <button onClick={handleWhatsAppButtonClick} className='h-14 text-2xl text-white w-80 rounded-full button'>CONTÁCTANOS POR WHATSAPP</button>
      </div>
    </div>
  );
};

export default Principal;
