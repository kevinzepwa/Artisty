import React from 'react'


const Favouritecard = ({art,onUpdate}) =>{

  function handleAddArt(data){
    fetch(`http://localhost:8000/arts/${data}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({like:!art.like})
    })
    .then((response)=>response.json())
    .then((data)=> onUpdate(data))
  }
  // const handleRemove = (art) =>{
  //   const ArtExist = favourite.find((arts) =>arts.id!==art.id );
  //   if (ArtExist){
  //     setFavourite(favourite.filter((arts)=> arts.id!==art.id));
      
  //   }
  // }


  return (
    <li className='cardlist'>
    <img src= {art.imageUrl}/>
    <div className='content'>
    <h2>{art.title}</h2> 
    <h3>{art.genre}</h3> 
    <p>{art.owner}</p>
    <p>{art.rating}⭐⭐⭐⭐</p>
    <button className='btn' onClick={()=>handleAddArt(art.id)}>Remove from liked</button>
    </div>
    </li>
  )
}

export default Favouritecard

