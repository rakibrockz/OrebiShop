import React from 'react'
import Container from './layer/Container'
import TitleHeader from './layer/TitleHeader'
import Productitem from './layer/Productitem'

const Arrivals = () => {
  return (
    <div>
     <Container>
        <TitleHeader className='text-[20px] md:text-[39px]'  headText='New Arrivals'/>
        <Productitem/>

     </Container>
    </div>
  )
}

export default Arrivals
