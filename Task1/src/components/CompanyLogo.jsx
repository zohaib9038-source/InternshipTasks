import React from 'react'

export default function CompanyLogo({logo,text=''}) {
  return (
    <>
        <img src={logo} alt="" />
        <span>{text}</span>
    </>
   
  )
}
