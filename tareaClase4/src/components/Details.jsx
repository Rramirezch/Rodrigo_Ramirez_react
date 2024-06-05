import React from 'react';

function Details(props) {
    return (
        <div className='detail'>
            <p>
                <b>Genero:</b> {props.genre} 
                <b className='estado'>Estado:</b> {props.status}
            </p>
        </div>
    );
}


export default Details;