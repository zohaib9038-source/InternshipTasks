import React, { lazy, Suspense } from 'react'
const ServiceCardParent=lazy(()=>import('./ServiceCardParent')); 
const AdvantageParent=lazy(()=>import('./AdvantageParent'));
const  Company=lazy(()=>import('./Company')) ;
const SkillComp =lazy(()=>import('./SkillComp'));

export default function Home() {
  return (
    <>
     {/* <div className='headerHero' style={{backgroundImage:`url(${solar})`}}>
        <Header />
        <Hero />
    </div> */}
    <Suspense fallback={'data is loaiding...'}>
      <Company/>
      <AdvantageParent />
      <SkillComp/>
      <ServiceCardParent/>
     </Suspense>
    </>
  )
}
