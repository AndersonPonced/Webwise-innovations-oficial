import React from "react";

export const Contenido = () => {
    const tarjetas = [
        {
            tituloPrincipal: "Plan presencia en redes",
            subtitulos: [
                { titulo: "Gráficas al Feed:", texto: "Imágenes llamativas que resaltan tus productos, servicios o mensajes clave, manteniendo la coherencia con tu identidad de marca." },
                { titulo: "Gráficas a las Historias:", texto: "Contenidos efímeros que generan engagement y mantienen a tu audiencia comprometida, construyendo una conexión más cercana." },
                { titulo: "", texto: "¡Eleva tu presencia digital con nuestro Servicio Estrella! En Web Wise Innovation, transformamos ideas en impactantes realidades digitales." }
            ]
        },
        {
            tituloPrincipal: "Plan presencia en la web",
            subtitulos: [
                { titulo: "Presentación:", texto: "Una introducción cautivadora que capta la atención de tus visitantes desde el primer momento." },
                { titulo: "Descripción:", texto: "Detalles atractivos sobre tu marca, productos o servicios, presentados de manera clara y persuasiva." },
                { titulo: "Contacto:", texto: "Facilitamos la comunicación con tus clientes potenciales proporcionando información de contacto fácilmente accesible.", sigue: "Se pueden agregar más secciones y funciones." }
            ]
        },
        {
            tituloPrincipal: "Plan completo",
            subtitulos: [
                { titulo: "Página Web", texto: "Nos encargaremos de diseñar y desarrollar tu página web de acuerdo con el plan que discutimos anteriormente. Nuestro equipo de expertos se dedicará a crear un sitio web que cumpla con tus requisitos y expectativas." },
                { titulo: "Redes Sociales:", texto: "Nos encargaremos de elaborar contenido para tus redes sociales siguiendo el plan que ya establecimos anteriormente." },
                { titulo: "Feed de Instagram:", texto: "Creamos un feed visualmente atractivo y cohesivo en Instagram, que no solo resalta tus productos o servicios, sino que cuenta la historia única de tu marca." }
            ]
        },
    ];

    const handleWhatsAppButtonClick = () => {
        const phoneNumber = '+5491134674195';
        const whatsappLink = `https://wa.me/${phoneNumber}`;
        window.open(whatsappLink, '_blank');
    };

    return (
        <div id="servicios-section" className="bg-black w-full text-white p-4">
            <h2 className="text-center text-6xl m-5"><span>Contenido del plan</span></h2>
            <div className="flex flex-wrap justify-center">
                {tarjetas.map((tarjeta, index) => (
                    <div key={index} className="w-full md:w-96 p-4 m-4 border border-white rounded-lg hover:scale-105 transition-transform">
                        <h3 className="text-4xl mb-4 text-center"><span>{tarjeta.tituloPrincipal}</span></h3>
                        <div className="p-4" style={{ background: 'linear-gradient(to right, rgba(0, 151, 178, 0.5), rgba(126, 217, 87, 0.5))' }}>
                            {tarjeta.subtitulos.map((subtitulo, subIndex) => (
                                <div key={subIndex} className="mb-4 text-center">
                                    {subtitulo.titulo && <h4 className="text-xl">{subtitulo.titulo}</h4>}
                                    <p>{subtitulo.texto}</p>
                                    {subtitulo.sigue && <p>{subtitulo.sigue}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <button onClick={handleWhatsAppButtonClick} className="h-14 text-2xl text-white w-80 rounded-full button bg-gradient-to-r from-green-400 to-blue-500">CONTÁCTANOS POR WHATSAPP</button>
            </div>
        </div>
    );
}

export default Contenido;
