import React, { useRef, useState } from 'react'
import image from "../assets/image.png";
import "./header.css"
import { json, Link } from 'react-router-dom';
export default function 
({themetoggle}) {
  const actualTheme=themetoggle.theme;
  const setTheme=themetoggle.setTheme;
 

  function set_theme(){
    setTheme(!actualTheme);
    localStorage.setItem("Theme",JSON.stringify(!actualTheme));

  }
    const refvariable=useRef();
    const[open,setOpen]=useState(false);
    function Toggle(){
      setOpen(true);
      
    }
    function Cross(){
        setOpen(false);
    }
    return(
         <header>
        <div className="logo">
            
            <div>
              <h2>Solar Energy</h2>
              <p className='electricSource'>Electricity from the sun</p>
            </div>
            </div>
            <nav className='navbar'>
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
                  <div className="theme" onClick={set_theme}>
            <span  className="material-symbols-outlined"> 
             {actualTheme? "dark_mode":"sunny"}
            </span>
            <span>
               {actualTheme? "sunny":"dark"} mode
            </span>
            </div>
            </nav>
          
         
        
    </header>
    )
  
}