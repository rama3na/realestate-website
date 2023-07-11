import React,{useContext} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {loginContext} from '../../contexts/loginContext'
import './PostLand.css' 


function PostLand() {
   let [currentUser]=useContext(loginContext)

   const activeLink={
    color:"black",
    fontSize:"1.2rem",
    fontWeight:'bold'
  };

  const inactiveLink={
    color:"black",
    fontSize:"1.2rem"
  };


  return (
    <div className='image'> 
 
      <ul className='nav justify-content-between'>
      <li className="nav-item">
            <NavLink className="nav-link   "   to="General" style={({isActive})=>{
              return isActive ? activeLink :inactiveLink;
            }} >Land Details</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link   "   to="Dashboard" style={({isActive})=>{
              return isActive ? activeLink :inactiveLink;
            }} >Dashboard</NavLink>
          </li>

      </ul>
      <div className='image'>
      <Outlet/>
      </div>

    </div>
  )
}

export default PostLand