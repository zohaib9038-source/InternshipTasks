import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import solar from "./assets/—Pngtree—solar panels glisten on a_16392009.jpg";
import "./components/header.css";
import Company from './components/Company';
import AdvantageParent from './components/AdvantageParent';
import SkillComp from './components/SkillComp';
import ServiceCardParent from './components/ServiceCardParent';
export default function App() {
  return (
    <>
    <div className='headerHero' style={{backgroundImage:`url(${solar})`}}>
      <Header />
      <Hero />
    </div>
     <Company/>
     <AdvantageParent />
     <SkillComp/>
     <ServiceCardParent/>
   
    </>

    
  )
}
