import React, { useState } from 'react'
import Card from './Card';

function Gallery({arts,onAddNew,onDelete,onUpdate}){
  const [formdata,setformdata]=useState({
    title:"",
    genre:"",
    imageUrl:"",
    owner:"",
    rating:"",
    like:false
  })
  const artlist=arts.map(arts=>
  {
    return<Card
    key={arts.id} 
    id={arts.id}
    title={arts.title} 
    genre={arts.genre} 
    imageUrl={arts.imageUrl} 
    owner={arts.owner} 
    rating={arts.rating}
    like={arts.like}
    onDelete={onDelete}
    onUpdate={onUpdate}

    />
  })
  function handleChange(e){
    setformdata({...formdata, [e.target.name]:e.target.value})

  }

  function handleSubmit(e){
    e.preventDefault()
    // console.log(JSON.stringify(formdata))
    fetch('http://localhost:8000/arts',
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Application":"application/json"
      },
      body:JSON.stringify(formdata)
      }
    )
    .then(res=>res.json())
    .then(data=>{
      onAddNew(data)
    })
    }

    return(
      <div>
        <ul className='cards3'>
          {artlist}
        </ul>
      </div>

    )


    }
export default Gallery