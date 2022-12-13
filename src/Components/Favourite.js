import React from 'react'
import Favouritecard from './Favouritecard'


const Favourite=({arts, onUpdate})=> {
  const favourite=(arts.filter((item)=>item.like===true))
  const displayCards = favourite.map((art)=>(
    <Favouritecard
    key={art.id}
    art={art}
    onUpdate={onUpdate}

    />

  ));

  return (
    <div><h2>Currently liked</h2>
    {displayCards}
    </div>
    
  )
}

export default Favourite