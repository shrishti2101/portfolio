import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose ,IoMenu} from "react-icons/io5";
import './Navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    function handletoggle(){
        setOpen(!open);
    }
  return (
    <>
    <nav className="navbar container mx-auto flex justify-around py-5 text-[#D6B69B] md:text-xl font-bold">
    <div className="nav-brand">
    <NavLink to='/' className="logo"><h3>Portfolio</h3></NavLink> 
    <button onClick={handletoggle} className={`navbar-toggler ${open ?"open": ""}`} type="button">
        <img src={`${!open?<IoMenu />:<IoClose />}`} alt="" />
    </button>
    </div> 
    <div className="nav-menu ">
    <ul className={`navlinks  flex ${open ?"open":""}`}>
        <li className='mx-3'>
            < NavLink to="/about" className="">About</ NavLink>
        </li>
        <li  className='mx-3'>
            < NavLink to="/project" className="">Project</ NavLink>
        </li>
        <li  className='mx-3'>
            < NavLink to="/contact" className="">Contact</ NavLink>
        </li>
    </ul>
    </div>
    
    </nav>
    
    </>
  )
}

export default Navbar