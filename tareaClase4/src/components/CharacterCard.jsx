import React from 'react';
import Title from './Titulo';
import Image from './Imagen';
import Details from './Details';

function CharacterCards(props) {
  return (
    <div>
      <Title Title={props.name}/>
      <Image url={props.image} />
      <Details
        genre={props.genre}
        status={props.status}
      />  
    </div>
  );
}

export default CharacterCards;