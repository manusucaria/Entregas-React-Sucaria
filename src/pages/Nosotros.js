import React, { useEffect, useState } from 'react';
import '../styles/Nosotros.css';
import video from '../assets/video/nosotros.mp4';

const texto = "En Dulce Capricho priorizamos el sabor y la calidad desde hace más de 20 años, para acompañar a cada familia en los placeres del día a día.";
const Nosotros = () => {
  const [text1, setText1] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setText1(texto.slice(0, text1.length + 1));
    }, 70);
    return () => clearTimeout(timeout);
  }, [text1]);
  return (
    <div className='body-nosotros'>
      <h2 className='titulo-nosotros'>Nosotros</h2>
      <div className='contenedor-vid'>
        <p className='texto-vid'>{text1}</p>
        <video className='vid' loop autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Nosotros