import React, { useRef, useState } from 'react'
import image from "../assets/image.png";
import "./header.css"
import { Link } from 'react-router-dom';
export default function 
() {
    const refvariable=useRef();
    const[open,setOpen]=useState(false);
    function Toggle(){
       setOpen(true);
    }
    function Cross(){
        setOpen(false);
    }
  return (
    <header>
        <div className="logo">
            
            <div>
              <h2>Solar Energy</h2>
              <p className='electricSource'>Electricity from the sun</p>
            </div>
            </div>
            <nav>
              <ul ref={refvariable} className={open? "active":""}>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/services"}>Services</Link></li>
              <li><Link to={"/work"}>Work</Link></li>
              <li><Link to={"/portfolio"}>Portfolio</Link></li>
              <li><Link to={"/faq"}>FAQ</Link></li>
              <li><Link to={"/team"}>Team</Link></li>
              <li><Link to={"/blog"}>Blog</Link></li>
              <li><Link to={"/contact"}>Contact</Link></li>
              </ul>
                <p className={open? "cross":""} onClick={Toggle}>≡</p>
                <p className={open? 'true' : "cross"} onClick={Cross}>x</p>
            </nav>
           
        
    </header>
  )
}