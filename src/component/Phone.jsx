import React from 'react'
import phone from '../../public/phone.png'
import Container from './layer/Container'
import { useNavigate } from 'react-router-dom'
const Phone = () => {
    let navigate= useNavigate()
  return (
    

    <>
      <Container className=' pt-[130px]'>
        <div className=''>
            <img  onClick={()=> navigate("/product")} className='cursor-pointer' src={phone} alt="" />
        </div>
      </Container>
    </>
  )
}

export default Phone
