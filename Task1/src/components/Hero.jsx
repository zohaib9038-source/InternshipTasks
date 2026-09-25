import React from 'react'
import bgc from "../assets/bgc.png";
import herosection from "../assets/image copy.png";

import "./hero.css"
export default function Hero() {
  return (
    <div>
        <div className='hero_section' >
            <h1>Use Energy from The Sunand <span style={{color:"green"}}>Save Money</span></h1>
            <p>solar panels are perfect if you are looking for reliable source of additional power and energy for your home or office</p>
            <div className='searching'>
                <input type="text" placeholder='Enter your email...' />
                <button>I Need a Quote</button>
            </div>
            <p>looking for help?<span style={{color:""}}>get in touch with us</span></p>
        </div>
       
    </div>
   
  )
}
