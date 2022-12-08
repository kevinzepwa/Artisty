import React from 'react'

const Card = ({id,title,imageUrl,genre,owner,rating, cards, setCards, art, handleLikeArt})=> {
  function handleDelete(){
    fetch('http://localhost:3000/arts')
  }
  return (
    <li className='cardlist'>
    <img src= {imageUrl}/>
    <div className='content'>
     <h2>{title}</h2> 
     <h3>{genre}</h3> 
     <p>{owner}</p>
     <p>{rating}</p>
     <button>Delete</button>
     <button>Select</button>
     </div>
</li>
  )
}

export default Card;