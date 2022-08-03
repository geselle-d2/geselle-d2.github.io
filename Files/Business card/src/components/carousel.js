import React from 'react';


export default function Carousel(data)
{
    return(
        <can>
            <img src={data.cover} className="carousel"/>
            <h3 className="carousel--h3">{data.title}</h3>
            <p className="carousel--p">{data.subtitle}</p>
        </can>
    )
}
