import React from "react";
import Container from "./layer/Container";
import { Link } from "react-router-dom";
import footerLogo from '../assets/footerlogo.png';
import Image from "./layer/Image";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Li = ({ href, liText }) => {
  return (
    <Link to={href}>
      <li className="font-dm text-xs leading-5 md:text-sm md:leading-6 text-[#6D6D6D]">{liText}</li>
    </Link>
  );
};

const Footer = () => {
  return (
    <div className="bg-[#F5F5F3] mx-auto">
        <Container className="lg:pt-14 mt-10 lg:mt-[6.625rem] bg-[#F5F5F3]">
      <div className="main py-5 md:py-14 flex md:justify-between gap-y-5 flex-col-reverse md:flex-row">
        <div className="left flex flex-col gap-y-5 lg:gap-y-16">
          <div className="up flex flex-wrap justify-between md:justify-normal gap-y-8 md:gap-x-16 xl:gap-x-36">
            <ul>
              <p className="font-dm font-bold leading-6 text-primary text-xs md:text-base">MENU</p>
              <Li liText="Home" />
              <Li liText="Shop" />
              <Li liText="About" />
              <Li liText="Contact" />
              <Li liText="Journal" />
            </ul>
            <ul>
              <p className="font-dm font-bold leading-6 text-primary text-xs md:text-base">SHOP</p>
              <Li liText="Category 1" />
              <Li liText="Category 2" />
              <Li liText="Category 3" />
              <Li liText="Category 4" />
              <Li liText="Category 5" />
            </ul>
            <ul>
              <p className="font-dm font-bold leading-6 text-primary text-xs md:text-base">HELP</p>
              <Li liText="Privacy Policy" />
              <Li liText="Terms & Conditions" />
              <Li liText="Special E-shop" />
              <Li liText="Shipping" />
              <Li liText="Secure Payments" />
            </ul>
            <ul className="font-dm font-bold lg:leading-7 text-sm md:text-base text-primary">
              <Link>(052) 611-5711</Link>
              <br />
              <Link>company@domain.com</Link>
              <p className="font-dm text-xs md:text-sm leading-6  text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </ul>
          </div>
          <div className="down flex gap-x-6 text-[#373737]">
            <Link>
              <FaFacebookF/>
            </Link>
            <Link>
              <FaLinkedinIn/>
            </Link>
            <Link>
            <IoLogoInstagram/>
            </Link>
          </div>
          <div className=" md:hidden  down font-dm text-xs md:text-sm leading-6 text-[#6D6D6D]">
            <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </div>
        </div>
        <div className="right flex flex-col justify-between ">
          <div className="up">
            <Image imageClass=" w-[20vw] md:w-[auto]" src={footerLogo} href={'/'} />
          </div>
          <div className="hidden md:flex down font-dm text-sm leading-6 text-[#6D6D6D]">
            <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </div>
        </div>
      </div>
    </Container>
    </div>
  );
};

export default Footer;