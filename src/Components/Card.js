import React from 'react'
import { json } from 'react-router-dom'

const Card = ({id,title,imageUrl,genre,owner,rating,onDelete,like, onUpdate})=> {

  function handleDelete(data){
    console.log(data)
    fetch(`http://localhost:8000/arts/${data}`,
    {
      method:"DELETE",
    })
    .then(res=>res.json())
    .then(()=>onDelete(data))
    .catch(console.error)
    
  }
  function handleAddArt(data){
    fetch(`http://localhost:8000/arts/${data}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({like:!like})
    })
    .then((response)=>response.json())
    .then((data)=> onUpdate(data))
  }

  return (
    <li className='cardlist'>
    <img src= {imageUrl}/>
    <div className='content'>
     <h2>{title}</h2> 
     <h3>{genre}</h3> 
     <p>{owner}</p>
     <p>{rating} ⭐⭐⭐⭐</p>
     <button className="btn" onClick={() => handleDelete(id)} >Delete</button>
     <button className='btn' onClick={()=> handleAddArt(id)}>{like?"liked":"like"}</button>
     </div>
</li>
  )
}

export default Card;