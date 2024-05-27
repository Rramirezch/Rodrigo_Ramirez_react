import React from 'react';

function Details(props) {
    return (
        <div className='texto'>
            <p>
                <b>Genero:</b> {props.genre}
            </p>
            <p>
                <b>Estado:</b> {props.status}
            </p>
        </div>
    );
}


export default Details;