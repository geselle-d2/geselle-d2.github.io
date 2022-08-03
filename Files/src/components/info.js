import React from 'react';
import foto from "../img/bild.png"


export default function Info (){
    return (
    <div className='info'>
        <info>
            <img className="image" src={foto} width="160"  alt="palce my foto here" />
                
            <h1>P.  H.</h1>
            <h2>Coder in Training</h2>
            <p className="email">schlachtergeselle@hotmail.de</p>

        </info>
    </div>
    )
}