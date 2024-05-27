import React, { Componente } from 'react';



const NuevoComponente = (props) => {

    const { Title, image, genre, status } = props
    return (
      <>
        <div className='container1'>
        <h2>{Title}</h2>
          <img src={image} />
          <p className='texto'><b>Genero:</b>{genre}</p>
          <p className='texto'><b>Estado:</b>{status}</p>
        </div>
        
      </>
    )
  }

export default NuevoComponente;