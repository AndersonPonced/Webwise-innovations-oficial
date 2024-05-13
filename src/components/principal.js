import React from 'react';
import Navbar from './navbar';
import videoLink from '../videos/webwise.mp4';

export const Principal = () => {

  const handleWhatsAppButtonClick = () => {
    // Reemplaza "123456789" con el número de teléfono al que deseas enviar el mensaje de WhatsApp
    const phoneNumber = '+5491134674195';
    // Construye el enlace de WhatsApp con el número de teléfono
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    // Redirecciona a la página de WhatsApp
    window.open(whatsappLink, '_blank');
  };

  return (
    <div  className='fondo h-screen w-screen flex flex-col'>
      <Navbar />
      <div className='principal flex flex-col md:flex-row justify-between flex-grow  '>
        <div className='flex flex-col justify-center px-4 text-white font-bold md:w-1/2'>
          {/* Aquí debe de haber un texto que pondrás después, este es la izquierda */}
          <h1 className='text-4xl min-text-2xl md:text-6xl text-center mt-5 md:mt-10'>EN <span>WEBWISE INNOVATIONS</span> NO SOLO CONSTRUIMOS TU PÁGINA WEB, CREAMOS TU PRESENCIA DIGITAL EXTRAORDINARIA</h1>
          <p className='text-center mt-2  md:mb-10'>Aprovecha al máximo las oportunidades digitales y abre las puertas a nuevos clientes, socios y colaboradores.</p>
          {/* Mostrar el logo en el centro con animación cuando el video está pausado */}
        </div>
        <div className='w-full md:w-1/2 p-5 min-p-10 md:p-8'>
          {/* Aquí debe de estar el video y este contenedor va a la derecha */}
          <video autoPlay controls preload="metadata" className="w-full">
            <source src={videoLink} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className='flex justify-center mb-20'>
        {/* Agregué la clase 'mb-8' para agregar un espacio entre el botón y el contenido principal */}
        <button onClick={handleWhatsAppButtonClick} className='h-14 text-2xl text-white w-80 rounded-full button'>CONTÁCTANOS POR WHATSAPP</button>
      </div>
    </div>
  );
};

export default Principal;
