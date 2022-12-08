import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar"
import Navbar from "./Components/Navbar";
import Stats from "./Components/Stats";
import { Route, Routes } from "react-router-dom";
import Addart from "./Components/Addart"
import Gallery from "./Components/Gallery"
import React, { useState, useEffect } from "react";
import Homepage from "./Components/Homepage"





function App() {
  const [arts, setArts]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/arts')
    .then(res=>res.json())
    .then(data=>setArts(data))
  },[])
  function onAddNew(data){
    setArts([...arts,data])
  }
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Stats/>
    
   {/* <NavBar/>
    <Routes>  
    <Route path="/gallery" element={<Gallery arts={arts} onAddNew={onAddNew}/>}/> */}
    {/* <Route path="/favorite" element={<Favorite />}/> */}
    {/* <Route path="/addart" element={<Addart/>}/> */}
    {/* <Route path="/" element={<Hero/>}/> */}

  
    {/* </Routes> */}
    </div>
  );
}

export default App;
