import './App.css';
import React, { useState, useEffect } from "react";
import Header from './Components/Header';
import Signup from './Components/Signup';
import Addart from './Components/Addart';
import Navbar from './Components/Navbar';
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Gallery from './Components/Gallery';


function App() {
  const [cards, setCards] = useState([]);
  const [reading, setReading] = useState([]);

  useEffect(() => {
    fetch(``)
    .then((res) => res.json())
    .then((bookInfo) => {
      setCards(bookInfo);
    });
  }, []);

  const handleAddBooks = (book) =>{
    const BookExist = reading.find((item) => item.id === book.id);
    if (!BookExist){
      setReading([...reading, book])
    }
  }
  return (
<div className='App'>

  {/* <Header/>
  <Signup/> */}
  <Navbar/>
  <Routes>
  <Route path="/gallery" element={<Gallery
          cards={cards}
          setCards={setCards}
          handleAddBooks={handleAddBooks} />}></Route>
  <Route path="/Addart" element={<Addart/>}></Route>
  </Routes>
  <Footer/>


</div>
  );
}

export default App;
