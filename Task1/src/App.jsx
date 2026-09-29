import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer';
import solar from "./assets/—Pngtree—solar panels glisten on a_16392009.webp";
import "./components/header.css";
import solar400 from "./assets/w-400_Pngtree—solar panels glisten on a_16392009.webp";
import solar800 from "./assets/w-400_Pngtree—solar panels glisten on a_16392009.webp";
import "./index.css";
import { Outlet } from 'react-router-dom';
export default function App() {
  return (
    <>
    <div className="headerHero">
      <img
        src={solar}
        srcSet={`${solar400} 400w, ${solar800} 800w`}
        sizes="100vw"
        className="heroBackground"
        alt="img not found"
      />

<div className='HomeSection'>
 <Header />
    <Hero />
</div>
     
    </div>

    <Outlet/> 
    <Footer />
   
    </>

    
  )
}
