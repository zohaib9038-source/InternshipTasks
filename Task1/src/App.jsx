import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer';
import solar from "./assets/—Pngtree—solar panels glisten on a_16392009.webp";
import "./components/header.css";
import solar400 from "./assets/w-400_Pngtree—solar panels glisten on a_16392009.webp";
import solar800 from "./assets/w-400_Pngtree—solar panels glisten on a_16392009.webp";
import "./index.css";
import { json, Outlet } from 'react-router-dom';
export default function App() {
    const[theme,setTheme]=useState(localStorage.getItem("Theme") ? JSON.parse(localStorage.getItem("Theme")): false);
  return (
    <>
    <div className="headerHero">
      <img
        src={solar}
        srcSet={`${solar400} 400w, ${solar800} 800w`}
        sizes="100vw"
        className="heroBackground"
        loading="lazy"
        alt="img not found"
      />

      <div className={`HomeSection ${theme? "dark": ("")}`}>
        <Header themetoggle={{theme,setTheme}}/>
        <Hero />
      </div>
    </div>
<div className={theme?("dark"):("")}>
    <Outlet /> 
    <Footer />
</div>
   
   
    </>

    
  )
}
