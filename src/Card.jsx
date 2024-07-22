import React from 'react'

function Card({Title, Year, Type, Poster, onClick}) {
  return (
  
    <div className='card' onClick={onClick}>
        <img src= {Poster} alt='poster'></img>
        <div className='card-body'>
            <h2> {Title} </h2>
            <p>Release Year : {Year} </p>
            <p>Type : {Type} </p>
        </div>
    </div>
 
  )
}

export default Card