import React from 'react'
import { RiNumber2 } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";


const Shipping = () => {
  return (
    <div className='mt-2 font-dm flex text-[8px] gap-x-12 justify-center  md:text-[16px] md:justify-center py-4  md:py-[30px] lg:gap-x-[200px] xl:gap-x-[535px] border-b-[1px] md:border-b-2 border-[#F0F0F0]'>
      <div className='flex items-center gap-x-2 md:gap-x-4 '>
        <RiNumber2 /> 
      <p>Two years warranty</p>
      </div>
      <div  className='flex items-center gap-x-2 md:gap-x-4'>
      <MdLocalShipping />
      <p>Free Shipping</p>
      </div>

      <div  className='flex items-center gap-x-2 md:gap-x-4'>
      <GiReturnArrow />

      <p>Return policy in 30 days</p>

      </div>

    </div>
  )
}

export default Shipping
