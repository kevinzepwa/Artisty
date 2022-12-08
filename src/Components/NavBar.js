import React from 'react'
import "./navbar.css";
import { NavLink} from "react-router-dom"
function NavBar() {
  return (
<nav className='nav'>
      <h1 className='navh1'>artisty</h1>  
      <div className='nav-list'>
       <ul>
       <NavLink to='/'><li>Home</li>
       </NavLink>

       <NavLink to='/gallery'><li>Gallery</li>
       </NavLink>

       <NavLink to='/favorite'><li>Favorite</li>
       </NavLink>

       <NavLink to='addart'><li>Add art</li>
       </NavLink>
   
       </ul>
   </div>
  </nav>
    
  )
}

export default NavBar