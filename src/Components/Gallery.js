import React, { useState } from 'react'
import Card from './Card';

function Gallery({arts,onAddNew}){
  const [formdata,setformdata]=useState({
    title:"",
    genre:"",
    imageUrl:"",
    owner:"",
    rating:""
  })
  const artlist=arts.map(arts=>
  {
    return<Card
    key={arts.id} title={arts.title} genre={arts.genre} imageUrl={arts.imageUrl} owner={arts.owner} rating={arts.rating}
    />
  })
  function handleChange(e){
    setformdata({...formdata, [e.target.name]:e.target.value})

  }
  function handleSubmit(e){
    e.preventDefault()
    // console.log(JSON.stringify(formdata))
    fetch('http://localhost:3000/arts',
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
        <ul>
          {artlist}
        </ul>
      </div>

    )


    }
export default Gallery