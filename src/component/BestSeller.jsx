import React from "react";
import Slider from 'react-slick'
import Container from "./layer/Container";
import TitleHeader from "./layer/TitleHeader";
import Productitem from "./layer/Productitem";
import product1 from "/HomeProducts/plushie.png";
import product2 from "/HomeProducts/p2.png";
import product3 from "/HomeProducts/p3.png";
import product4 from "/HomeProducts/p4.png";
const BestSeller = () => {
    var settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
              arrows:false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: false,
              arrows:false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows:false,
            }
          }
        ]
        
      };
  return (
    <>
       <Container className='pt-[119px] ' >
      <TitleHeader
          className="text-[20px] md:text-[39px] mb-[48px]"
          headText="Best Seller"
        />
        
        <div className="flex flex-col gap-10">
        <div>
        <Slider {...settings}>
        <Productitem
          pname="Cute Fluffy Plushie"
          pprice="$44.00"
          pdetails="Black"
          oprice="10%"
          src={product1}
          OfferEye={true}
        />

        <Productitem
          pname="Basic Crew Neck Tee"
          pprice="$44.00"
          oprice="10%"
          pdetails="Black"
          src={product2}
          OfferEye={false}
        />
          <Productitem
          pname="Cute Fluffy Plushie"
          pprice="$44.00"
          pdetails="Black"
          oprice="10%"
          src={product1}
          OfferEye={true}
        />

        <Productitem
          pname="Basic Crew Neck Tee"
          pprice="$44.00"
          oprice="10%"
          pdetails="Black"
          src={product2}
          OfferEye={false}
        />
        <Productitem
          pname="Basic Crew Neck Tee"
          pprice="$44.00"
          oprice="10%"
          pdetails="Black"
          src={product3}
          OfferEye={true}
        />
        <Productitem
          pname="Basic Crew Neck Tee"
          pprice="$44.00"
          oprice="10%"
          pdetails="Black"
          src={product4}
          OfferEye={true}
        />
        <Productitem
          pname="Basic Crew Neck Tee"
          pprice="$44.00"
          oprice="10%"
          pdetails="Black"
          src={product3}
          OfferEye={true}
        />
        <Productitem
          pname="Basic Crew Neck Tee"
          pprice="$44.00"
          oprice="10%"
          pdetails="Black"
          src={product4}
          OfferEye={true}
        />
    </Slider>
        </div>
        </div>
      </Container>
    </>
  )
}

export default BestSeller
