import React from 'react'
import logowhite from "../assets/logo-white.webp"
import downarrow from "../assets/down-chevron.png"
export default function Header() {
  return (
    <header className='px-16 flex justify-between  items-center py-8 text-white bg-black'>
        <div>
            <img src={logowhite} alt="logo not found" />
        </div>
        <nav>
            <ul className='flex space-x-12 text-white'>
                <li className='flex items-center'>
                    Home 
                    <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                </li>
                <li className='flex cursor-pointer items-center group relative'>Services
                     <svg  className='mt-1' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                    <div className=' bg-black  py-2.5 z-10 absolute top-6 hidden group-hover:block'>
                        <div className='py-[5px]'>
                        <li className='py-[5px] px-4 hover:bg-red-500'>Services1</li>
                         <li className='py-[5px] px-4 hover:bg-red-500'>Services1</li>
                          <li className='py-[5px] px-4 hover:bg-red-500'>Services1</li>
                     </div>
                    </div>
                    
                </li>
                <li className='flex items-center'>Pages
                     <svg  className='mt-1' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                </li>
                <li className='flex items-center'>Shop
                    {/* <svg  className='mt-1' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>  */}
                </li>
                <li className='flex items-center'>Listing
                     <svg  className='mt-1' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                </li>
                <li className='flex items-center'>Galary
                    <svg  className='mt-1' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                </li>
                <li className='flex items-center'>WorksShop
                     <svg  className='mt-1' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                </li>
            </ul>
        </nav>
        <div className='flex   gap-5'>
            <button className='px-4 py-2 rounded-[5px] bg-[#E9021E]'>Make Appointment</button>
            <p className='text-2xl font-bold'>≡</p>
        </div>
    </header>
  )
}
