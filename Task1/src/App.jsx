import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import solar from "./assets/—Pngtree—solar panels glisten on a_16392009.webp";
import "./components/header.css";
import Company from './components/Company';
import AdvantageParent from './components/AdvantageParent';
import SkillComp from './components/SkillComp';
import ServiceCardParent from './components/ServiceCardParent';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import "./index.css";
export default function App() {
  return (
    <>
    <div className='headerHero' style={{backgroundImage:`url(${solar})`}}>
      <Header />
      <Hero/>
    </div>
     <Outlet/>
     <Footer />
   
    </>

    
  )
}
