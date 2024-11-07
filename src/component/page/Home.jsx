import React from 'react'
import Banner from '../Banner'
import Shipping from './Shipping'
import SaleOffer from '../SaleOffer'
import Arrivals from '../Arrivals'
import BestSeller from '../BestSeller'
import Phone from '../Phone'
import SpecialOffer from '../SpecialOffer'

const Home = () => {
  return (
    <>
       <Banner/>
       <Shipping/>
      <SaleOffer/>
      <Arrivals/>
      <BestSeller/>
      <Phone/>
      <SpecialOffer/>
    </>
  )
}

export default Home
