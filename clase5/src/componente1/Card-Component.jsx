import Image from './image';
import Title from './titulo';
import Details from './detail';
import React from 'react';




const Card = (props) => {
    return (
        <div className='container'>
            <Image url={props.image} />
            <Title title={props.name} />
            <Details genre={props.genre} status={props.status} />


        </div>
    )
}

export default Card;