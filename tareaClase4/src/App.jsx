import { useEffect, useState } from 'react';
import CharacterCards from './components/CharacterCard';
import RickAndMortyCharacterCard from './components/RickAndMortyCharacterCard1';
import React from 'react';
import './App.css';


  
function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("");

  const rickAndMortyCharacterId = 5;

    useEffect( () => {
      fetch("https://rickandmortyapi.com/api/character/"+rickAndMortyCharacterId)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setName(result.name);
        setImage(result.image);
        setGenre(result.gender);
        setStatus(result.status);
        
      });
    }, [])


  return (
    <>
    <div className='principal-container'>
      <div className='card-container'>
        <h1 className='title'>Personajes de <br /><span>rick and Morty</span></h1>
      
        <CharacterCards
        name={name}
        image={image}
        genre={genre}
        status={status}
        />
      </div>

      <div className='card-container'>
      <h1 className='title'>Personajes de <br /><span>rick and Morty</span></h1>
        <RickAndMortyCharacterCard id={1}/>
      </div>
      <div className='card-container'>
        <h1 className='title'>Personajes de <br /><span>rick and Morty</span></h1>
        <RickAndMortyCharacterCard id={2}/>
      </div>
        
      <div className='card-container'>
        <h1 className='title'>Personajes de <br /><span>rick and Morty</span></h1>
        <RickAndMortyCharacterCard id={3}/>
      </div>
        
      <div className='card-container'>
        <h1 className='title'>Personajes de <br /><span>rick and Morty</span></h1>
        <RickAndMortyCharacterCard id={10}/>
      </div>

      <div className='card-container'>
        <h1 className='title'>Personajes de <br /><span>rick and Morty</span></h1>
        <RickAndMortyCharacterCard id={12}/>
      </div>
        
      <div className='card-container'>
        <h1 className='title'>Personajes de <br /><span>rick and Morty</span></h1>
        <RickAndMortyCharacterCard id={13}/>
      </div>
        
      <div className='card-container'>
        <h1 className='title'>Personajes de <br /><span>rick and Morty</span></h1>
        <RickAndMortyCharacterCard id={20}/>
      </div>

      <div className='card-container'>
        <h1 className='title'>Personajes de <br /><span>rick and Morty</span></h1>
         <RickAndMortyCharacterCard id={23}/>
      </div>
        
      <div className='card-container'>
        <h1 className='title'>Personajes de <br /><span>rick and Morty</span></h1>
        <RickAndMortyCharacterCard id={32}/>
      </div>
    </div>
    </>
  );
}




export default App
