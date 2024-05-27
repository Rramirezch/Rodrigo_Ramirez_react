import React from 'react';
import Title from './components/Titulo';
import Image from './components/Imagen';
import Details from './components/Details';
import NuevoComponente from './components/CharacterCard';

import './App.css'

const data = [
  {
    Title: 'St. Gloopy Noops Hospital',
    image: 'https://rickandmortyapi.com/api/character/avatar/383.jpeg',
    genre: 'Masculino',
    status:'Vivo'
  },
  {
    Title: 'Uncle Steve',
    image: 'https://rickandmortyapi.com/api/character/avatar/391.jpeg',
    genre: 'Masculino',
    status:'Vivo'
  },
  {
    Title: 'Michaels Lawyer',
    image: 'https://rickandmortyapi.com/api/character/avatar/438.jpeg',
    genre: 'Masculino',
    status:'Vivo'
  }
]



function App() {

  return (
    <> 
       <div className='container'>
        <Title
          Title="Summer Smith"
        />
        <Image
          url="https://rickandmortyapi.com/api/character/avatar/339.jpeg"
         alt="Foto de Summer Smith"
        />
        <Details
          genre="Femenino"
          status="Vivo"
        />
        </div>
        <div>
        {data.map((elm) => (
          <NuevoComponente Title={elm.Title} image={elm.image} genre={elm.genre} status={elm.status}/>
        ))}

        </div>
      </>        

          
        
      
  );
}


export default App;
