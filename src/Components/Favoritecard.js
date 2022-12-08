import React from 'react'

const Favoritecard=({id,title,imageUrl,genre,owner,rating})=> {
  return (
    <li className='cardlist'>
    <img src= {imageUrl}/>
    <div className='content'>
    <h2>{title}</h2> 
    <h3>{genre}</h3> 
    <p>{owner}</p>
    <p>{rating}</p>
    <button>Remove from liked</button>
    </div>
    </li>
  )
}

export default Favoritecard

