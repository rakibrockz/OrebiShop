import React from "react";
import Slider from 'react-slick'
import Container from "./layer/Container";
import TitleHeader from "./layer/TitleHeader";
import Productitem from "./layer/Productitem";
import product1 from "/HomeProducts/plushie.png";
import product2 from "/HomeProducts/p2.png";
import product3 from "/HomeProducts/p3.png";
import product4 from "/HomeProducts/p4.png";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";


const Arrivals = () => {

  
  function SampleNextArrow(props) {
    const {  style, onClick } = props;
    return (
      <div
        className='absolute right-7 top-1/2 -translate-y-1/2 md:w-16 md:h-16 w-9 h-9 rounded-full items-center justify-center'
        style={{ ...style, display: "flex", background: "#979797" }}
        onClick={onClick}
      >
        <div className="">
        <FaLongArrowAltRight className="text-white" />

        </div>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  style, onClick } = props;
    return (
      <div
        className='  absolute left-0 top-1/2 -translate-y-1/2 md:w-16 md:h-16 w-9 h-9 rounded-full items-center justify-center z-10'
        style={{ ...style, display: "flex", background: "#979797" }}
        onClick={onClick}
      >
        <div>
        <FaLongArrowAltLeft className="text-white" />

        </div>
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    responsive: [
      {
        breakpoint: 799,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
     
    ]
    
  };
  return (
    <>
      
      <Container >
      <TitleHeader
          className="text-[20px] md:text-[39px]"
          headText="New Arrivals"
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
  );
};

export default Arrivals;
