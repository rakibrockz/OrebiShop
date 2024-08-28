import React, { useState } from 'react'
import Slider from 'react-slick'
import Image from './layer/Image';
import banner01 from '/banner1.png'
import banner02 from '/banner2.png'
import banner03 from '/banner3.png'

const Banner = () => {
let [active, setActive] = useState(0)
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    fade:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "",
          padding: "",
          position: 'absolute',
          left: '12%',
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className={`transition-all duration-500 text-[10px] font-dm border-r-2 flex items-center ${active == i ? "text-primary border-primary" :" text-transparent border-white"}`}
        style={{
          width: "22px",
          height:'30px',
          
        }}
      >
        {i + 1}
      </div>
    ),
    beforeChange: (item, i)=>{
      setActive(i)
    },

    responsive: [
      
      {
        breakpoint: 680,
        settings: {
          appendDots: dots => (
            <div
              style={{
                backgroundColor: "transparent",
                borderRadius: "",
                padding: "",
                position: 'absolute',
                left: '50%',
                bottom: '10px',
                transform: 'translateX(-50%)'
              }}
            >
              <ul className='flex' style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div className={`transition-all duration-500 text-[9px] font-dm border-b-2 flex justify-center ${active == i ? "text-primary border-primary" :" text-transparent border-white"}`}
              style={{
                width: "20px",
                height:'15px',
                
              }}
            >
              {i + 1}
            </div>
          ),
        }
      }
    ]
    
  };


  return (
    <Slider {...settings}>
   <Image imageClass='w-full' src={banner01}/>
   <Image imageClass='w-full' src={banner02}/>
   <Image imageClass='w-full' src={banner03}/>

    </Slider>
  );
}

export default Banner
