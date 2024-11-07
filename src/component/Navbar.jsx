import React, { useState } from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import logo from '/Logo.png'
import { Link } from 'react-router-dom'
import Li from './Li'
import { FaBars, FaCaretDown, FaCartShopping, FaUser } from "react-icons/fa6";
import { useEffect } from 'react'
const Navbar = () => {
  let [show, setShow] = useState(false);

  useEffect(()=> {

    function resize(){
      if (window.innerWidth > 735.98){
        setShow(true)
      }else{
        setShow(false)
      }
      
    }
    resize()
    window.addEventListener("resize", resize)
  }, []

  );

  return (
    <nav className='bg-white'>
      <Container className='py-8 px-3 flex relative items-center md:justify-center justify-end gap-5 md:gap-0'>
        <Image ClassName='absolute left-0 top-1/2 -translate-y-1/2' href='/' src={logo}/>
   {
    show && (
      <ul className='flex md:flex-row flex-col md:gap-10 gap-4 z-10 bg-slate-400 md:bg-transparent absolute top-full left-0 md:static
      w-full md:w-auto p-4 md:p-0 transition-all duration-500 '>
        <Li LiText='Home'/>
        <Li LiText='Shop'/>
        <Li LiText='About'/>
        <Li LiText='Contacts'/>
        <Li LiText='Journal'/>
      </ul>

      

    )
   }
   <div className="account flex items-center gap-5 md:hidden">
            <div className="left flex items-center">
                <FaUser />
                <FaCaretDown />

            </div>
            <div className="right">
            <FaCartShopping />
            </div>
        </div>
    <div onClick={()=> setShow(!show)} className='block md:hidden'>
    <FaBars />
    </div>
      </Container>
      
    </nav>
  )
}

export default Navbar
