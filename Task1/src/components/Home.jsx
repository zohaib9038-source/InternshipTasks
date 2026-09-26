import React from 'react'
import CompanyLogo from './CompanyLogo'
import Hero from './Hero'
import ServiceCardParent from './ServiceCardParent'
import solar from "../assets/—Pngtree—solar panels glisten on a_16392009.jpg";
import AdvantageParent from './AdvantageParent'
import Header from './Header';
import Company from './Company';
import SkillComp from './SkillComp';

export default function Home() {
  return (
    <>
     {/* <div className='headerHero' style={{backgroundImage:`url(${solar})`}}>
        <Header />
        <Hero />
    </div> */}
     <Company/>
     <AdvantageParent />
     <SkillComp/>
     <ServiceCardParent/>
    </>
  )
}
