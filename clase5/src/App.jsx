
import Card from './componente1/Card-Component';
import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [pagina, setPagina] = useState(1)
  //const [paginaMenos, setPaginaMenos] = useState ()
  const [personajes, setPersonajes] = useState([])
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .then((response) => response.json())
      .then((data) => setPersonajes(data.results))
  }, [pagina])
  console.log(personajes)
  const incrementarPagina = () => {
    setPagina(pagina + 1)
  }
  const decrementarPagina = () => {
    setPagina(pagina - 1)
  }

  return (
    <>
    <h1>PERSONAJES DE RICK AND MORTY</h1>
    <div className='botones'>
    <button className='button1'  onClick={incrementarPagina} >siguiente pagina</button>
    <h4> PAGINA:{pagina}</h4>
    <button className='button2' onClick={decrementarPagina} >pagina anterior</button>
    </div>
    
    <div className='max-container'>
    {personajes.length !== 0 && personajes.map((personaje) => (
        <Card key={personaje.id} name={personaje.name} image={personaje.image} 
        genre={personaje.gender} status={personaje.status}/>
      )) }
    </div>
      
      
      
    
    </>
  
  )
}

export default App
