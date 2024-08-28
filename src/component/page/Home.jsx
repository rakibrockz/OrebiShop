import React from 'react'
import Banner from '../Banner'
import Shipping from './Shipping'
import SaleOffer from '../SaleOffer'
import Arrivals from '../Arrivals'

const Home = () => {
  return (
    <>
       <Banner/>
       <Shipping/>
      <SaleOffer/>
      <Arrivals/>
    </>
  )
}

export default Home
