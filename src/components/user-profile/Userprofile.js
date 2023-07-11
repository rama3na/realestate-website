import React,{useContext} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {loginContext} from '../../contexts/loginContext'
import './Userprofile.css'

function Userprofile() {
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
    <div>       
      <div className="row justify-content-center mt-5">
            <div className="col-6 border border-black px-4 py-4">
                  <img src={currentUser.image} className='border-square mt-3 mb-3' width='50px' alt="" />
                  <h4 className='mt-3'>{currentUser.username}</h4>
                  <p className='mt-3'>{currentUser.email}</p>
                  <p className='mt-3'>{currentUser.dateofbirth}</p>
 
            </div>
      </div>
     
    </div>
  )
}

export default Userprofile