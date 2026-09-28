import React from 'react'
import CompanyLogo from './CompanyLogo'
import logo2 from "../assets/logo2.webp"
import logo from "../assets/logo.webp"
import logo4 from "../assets/logo4.webp"
import logo5 from "../assets/logo5.webp"
import logo3 from "../assets/screen.webp"
import "./company.css"
export default function Company() {
  return (
    <div className='compnaylogo'>
        <CompanyLogo logo={logo} text={"logoIpsum"}/>
        <CompanyLogo logo={logo} text={"logoIpsum"}/>
        <CompanyLogo logo={logo2} text={"logoIpsum"}/>
        <CompanyLogo logo={logo4} text={"logoIpsum"}/>
        <CompanyLogo logo={logo5} text={"logoIpsum"}/>
        <CompanyLogo logo={logo3} text={"logoIpsum"}/> 

    </div>
   
  )
}
