import React from 'react'
import Container from './layer/Container'
import ad1 from '/ad1.png'
import ad2 from '/ad2.png'
import ad3 from '/ad3.png'
import Image from './layer/Image'
import { useNavigate } from 'react-router-dom'

const SaleOffer = () => {

    let navigate = useNavigate()

  return (
    <div className='my-5 md:my-32'>
        <Container className='lg:h-[780px]  lg:gap-5 lg:grid lg:grid-cols-2 lg:grid-rows-2 md:grid md:grid-cols-2 md:grid-rows-2  md:gap-5  '>

        <img onClick={()=> navigate("/product")} className=' cursor-pointer w-full h-full object-contain row-span-2 mb-5 lg:mb-0' src={ad1} alt="" />
        <img onClick={()=> navigate("/product")} className=' cursor-pointer w-full h-full object-contain mb-5 lg:mb-0  ' src={ad2} alt="" />
        <img onClick={()=> navigate("/product")} className='cursor-pointer w-full h-full object-contain  mb-5 lg:mb-0' src={ad3} alt="" />


        </Container>

    </div>
  )
}

export default SaleOffer
