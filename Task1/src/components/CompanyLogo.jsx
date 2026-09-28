import React from 'react'

export default function CompanyLogo({logo,text=''}) {
  return (
    <>
        <img src={logo}  loading="lazy" alt= 'img not found'/>
        <span>{text}</span>
    </>
   
  )
}
