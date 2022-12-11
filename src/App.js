import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar"
import Navbar from "./Components/Navbar";
import Stats from "./Components/Stats";
import Addart from "./Components/Addart"
import Gallery from "./Components/Gallery"
import Favourite from "./Components/Favourite"
import React, { useState, useEffect } from "react";
import Homepage from "./Components/Homepage"
import { Home } from "react-hero-icon/solid";
import {Routes, Route,useNavigate} from 'react-router-dom'
import Signup from "./Components/Signup";
import Login from "./Components/Login"

function App() {
  const [arts, setArts]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/arts')
    .then(res=>res.json())
    .then(data=>setArts(data))
  },[])


  function onAddNew(data){
    setArts([...arts,data])
  }

  function onUpdate(data){
    const upd = arts.map((item)=>{
      if(item.id===data.id){
        return data
      }
      return item
    })
    setArts(upd)
  }
  function onDelete(data){
    const filtered=arts.filter((art)=>art.id!==data)
    setArts(filtered)
    
  }



  return (
    <div>
      <Navbar/>
      {/* <Hero/>
      <Stats/> */}

   {/* <NavBar/> */}
    <Routes>  
    <Route path="/gallery" element={<Gallery arts={arts} onAddNew={onAddNew} onDelete={onDelete} onUpdate={onUpdate}/>}/> 
    <Route path="/favourite" element={<Favourite  arts={arts} onUpdate={onUpdate}/>}></Route> 
    <Route path="/addart" element={<Addart/>}/> 
    <Route path="/" element={<Hero/>}/> 
    <Route path="/signup" element={<Signup/>} />
    <Route path="/login" element={<Login/>}/>
               

  
    </Routes> 
    </div>
  );
}

export default App;
