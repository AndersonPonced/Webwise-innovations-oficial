import React from "react";

export const Contenido = () => {
    const tarjetas = [
        {
            tituloPrincipal: "Creación de Imagen",
            subtitulos: [
                { titulo: "Logo Básico:", texto: "Desarrollamos un logo que captura la esencia de tu marca de manera minimalista, duradero y fácil identificación." },
                { titulo: "Colores de Marca:", texto: "Diseñamos una paleta de colores exclusiva que refleja la personalidad y valores de tu marca, creando coherencia visual en todos tus elementos gráficos." },
                { titulo: "Feed de Instagram:", texto: "Creamos un feed visualmente atractivo y cohesivo en Instagram, que no solo resalta tus productos o servicios, sino que cuenta la historia única de tu marca." }
            ]
        },
        {
            tituloPrincipal: "Creación de Página Web",
            subtitulos: [
                { titulo: "Presentación:", texto: "Una introducción cautivadora que capta la atención de tus visitantes desde el primer momento." },
                { titulo: "Descripción:", texto: "Detalles atractivos sobre tu marca, productos o servicios, presentados de manera clara y persuasiva." },
                { titulo: "Contacto:", texto: "Facilitamos la comunicación con tus clientes potenciales proporcionando información de contacto fácilmente accesible.", sigue: "Se pueden agregar mas secciones y funciones." }
            ]
        },
        {
            tituloPrincipal: "Contenidos en Redes Sociales",
            subtitulos: [
                { titulo: "Gráficas al Feed:", texto: "Imágenes llamativas que resaltan tus productos, servicios o mensajes clave, manteniendo la coherencia con tu identidad de marca." },
                { titulo: "Gráficas a las Historias:", texto: "Contenidos efímeros que generan engagement y mantienen a tu audiencia comprometida, construyendo una conexión más cercana." },
                { titulo: "", texto: "¡Eleva tu presencia digital con nuestro Servicio Estrella! En Web Wise Innovation, transformamos ideas en impactantes realidades digitales." }
            ]
        }
    ];

    return (

        <div className="bg-black  h-full w-full text-white p-4">
            <div className="circulo-con-sombra "></div>
            <h2 className="text-center text-6xl m-3"><span>Contenido del plan</span></h2>
            <div className="flex flex-wrap justify-around text-center">
                {tarjetas.map((tarjeta, index) => (
                    <div key={index} className="w-full  m-1 md:w-96 relative p-4  border border-white rounded-lg" >
                        <h3 className="text-4xl text-white mb-4"><span>{tarjeta.tituloPrincipal}</span></h3>
                        <div className="  rounded-lg p-2" style={{ background: ' linear-gradient(to right, rgba(0, 151, 178, 0.5), rgba(126, 217, 87, 0.5))' }}>
                            {tarjeta.subtitulos.map((subtitulo, subIndex) => (
                                <div key={subIndex} className="mb-4">
                                    <h4 className="text-xl text-white">{subtitulo.titulo}</h4>
                                    <p>{subtitulo.texto}</p>
                                    <p>{subtitulo.sigue}</p>

                                </div>
                            ))}

                        </div>

                    </div>
                ))}


            </div>

            <div className='flex justify-center mt-10 mb-2'>
                {/* Agregué la clase 'mb-8' para agregar un espacio entre el botón y el contenido principal */}
                <button className='h-14 text-2xl text-white w-80 rounded-full button'>ELEVA TU PRESENCIA</button>
            </div>

            <div className="circulo-con-sombraa "></div>

        </div>



    )

}


export default Contenido;
