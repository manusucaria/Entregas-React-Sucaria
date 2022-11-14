import React from 'react';
import '../styles/Nosotros.css';
import video from '../assets/video/nosotros.mp4'

const Nosotros = () => {
  return (
    <div className='body-nosotros'>
      <h2 className='titulo-nosotros'>Nosotros</h2>
      <div className='contenedor-vid'>
        <p className='texto-vid'>En Dulce Capricho priorizamos el sabor y la calidad desde hace más de 20 años, para acompañar a cada familia en el día a día.</p>
        <video className='vid' loop autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Nosotros