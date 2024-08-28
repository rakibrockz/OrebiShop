import React, { useState } from "react";
import Container from "./layer/Container";
import {
  FaBarsProgress,
  FaCaretDown,
  FaCartShopping,
  FaUser,
} from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Li from "./Li";
import { IoClose } from "react-icons/io5";
import Button from "./layer/Button";

const Searchbar = () => {
  let [show, setShow] = useState(false);
  let [cart, setCart] = useState(false);
  let [account, setAccount] = useState(false);
  return (
    <div className="bg-[#F5F5F3] py-3 md:py-6">
      <Container ClassName="relative flex justify-between px-3 md:px-0 gap-3 md:gap-0 ">
        <div
          onClick={() => setShow(!show)}
          className="category flex items-center gap-2.5"
        >
          <FaBarsProgress />
          <p className="hidden md:block"> Shop By Category</p>
        </div>

        {show && (
          <ul className="catddm absolute left-0 top-full bg-slate-100 w-[263px] z-10 ">
            <div className="Li">
              
            <Li
              className="w-full block py-4  px-5 font-DM font-bold text-sm text-white/70 bg-[#262626] hover:text-white hover:pl-[31px] hover:font-bold border-b border-[#2D2D2D] "
              LiText="Home"
            >
              <div className="static md:absolute flex-wrap md:flex-nowrap left-full top-0 hidden group-hover:flex gap-[50px] bg-white border h-full pt-7 pr-[47px] pb-2 md:pb-8 pl-10 ">
                <ul className=" flex flex-col gap-1 md:gap-3">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">Phones</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 7</li>
                </ul>
                <ul className="flex flex-col gap-3">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">Computers</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 7</li>
                  
                </ul>
  
                <ul className="flex flex-col gap-3 w-max">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626] flex">Smart watches</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 7</li>
                </ul>
  
                <ul className="flex flex-col gap-3">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">Cameras</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 7</li>
                </ul>
              </div>
            </Li>
            <Li
              className="w-full block py-4  px-5 font-DM font-bold text-sm text-white/70 bg-[#262626] hover:text-white hover:pl-[31px] hover:font-bold border-b border-[#2D2D2D] "
              LiText="Home"
            >
              <div className="static md:absolute flex-wrap md:flex-nowrap left-full top-0 hidden group-hover:flex gap-[50px] bg-white border h-full pt-7 pr-[47px] pb-2 md:pb-8 pl-10 ">
                <ul className=" flex flex-col gap-1 md:gap-3">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">Phones</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 7</li>
                </ul>
                <ul className="flex flex-col gap-3">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">Computers</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 7</li>
                  
                </ul>
  
                <ul className="flex flex-col gap-3 w-max">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626] flex">Smart watches</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 7</li>
                </ul>
  
                <ul className="flex flex-col gap-3">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">Cameras</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 7</li>
                </ul>
              </div>
            </Li>
            <Li
              className="w-full block py-4  px-5 font-DM font-bold text-sm text-white/70 bg-[#262626] hover:text-white hover:pl-[31px] hover:font-bold border-b border-[#2D2D2D] "
              LiText="Home"
            >
              <div className="static md:absolute flex-wrap md:flex-nowrap left-full top-0 hidden group-hover:flex gap-[50px] bg-white border h-full pt-7 pr-[47px] pb-2 md:pb-8 pl-10 ">
                <ul className=" flex flex-col gap-1 md:gap-3">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">Phones</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 7</li>
                </ul>
                <ul className="flex flex-col gap-3">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">Computers</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 7</li>
                  
                </ul>
  
                <ul className="flex flex-col gap-3 w-max">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626] flex">Smart watches</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 7</li>
                </ul>
  
                <ul className="flex flex-col gap-3">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">Cameras</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 7</li>
                </ul>
              </div>
            </Li>
            <Li
              className="w-full block py-4  px-5 font-DM font-bold text-sm text-white/70 bg-[#262626] hover:text-white hover:pl-[31px] hover:font-bold border-b border-[#2D2D2D] "
              LiText="Home"
            >
              <div className="static md:absolute flex-wrap md:flex-nowrap left-full top-0 hidden group-hover:flex gap-[50px] bg-white border h-full pt-7 pr-[47px] pb-2 md:pb-8 pl-10 ">
                <ul className=" flex flex-col gap-1 md:gap-3">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">Phones</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 7</li>
                </ul>
                <ul className="flex flex-col gap-3">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">Computers</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 7</li>
                  
                </ul>
  
                <ul className="flex flex-col gap-3 w-max">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626] flex">Smart watches</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 7</li>
                </ul>
  
                <ul className="flex flex-col gap-3">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">Cameras</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 7</li>
                </ul>
              </div>
            </Li>
            <Li
              className="w-full block py-4  px-5 font-DM font-bold text-sm text-white/70 bg-[#262626] hover:text-white hover:pl-[31px] hover:font-bold border-b border-[#2D2D2D] "
              LiText="Home"
            >
              <div className="static md:absolute flex-wrap md:flex-nowrap left-full top-0 hidden group-hover:flex gap-[50px] bg-white border h-full pt-7 pr-[47px] pb-2 md:pb-8 pl-10 ">
                <ul className=" flex flex-col gap-1 md:gap-3">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">Phones</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 7</li>
                </ul>
                <ul className="flex flex-col gap-3">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">Computers</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 7</li>
                  
                </ul>
  
                <ul className="flex flex-col gap-3 w-max">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626] flex">Smart watches</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 7</li>
                </ul>
  
                <ul className="flex flex-col gap-3">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">Cameras</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 7</li>
                </ul>
              </div>
            </Li>
            <Li
              className="w-full block py-4  px-5 font-DM font-bold text-sm text-white/70 bg-[#262626] hover:text-white hover:pl-[31px] hover:font-bold border-b border-[#2D2D2D] "
              LiText="Home"
            >
              <div className="static md:absolute flex-wrap md:flex-nowrap left-full top-0 hidden group-hover:flex gap-[50px] bg-white border h-full pt-7 pr-[47px] pb-2 md:pb-8 pl-10 ">
                <ul className=" flex flex-col gap-1 md:gap-3">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">Phones</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Phone 7</li>
                </ul>
                <ul className="flex flex-col gap-3">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">Computers</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Computer 7</li>
                  
                </ul>
  
                <ul className="flex flex-col gap-3 w-max">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626] flex">Smart watches</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Smart watches 7</li>
                </ul>
  
                <ul className="flex flex-col gap-3">
                <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">Cameras</h2>
                <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 1</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 2</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 3</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 4</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 5</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 6</li>
                 <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">Camera 7</li>
                </ul>
              </div>
            </Li>
         
           
            </div>
          </ul>
        )}

        <div className="relative search w-full md:w-auto ">
          <input
            className=" md:w-[601px] w-full md:py-4 py-2 md:px-5 px-3 outline-none bg-white"
            type="text"
            placeholder="Search Product "
          />
          <FaSearch className="absolute md:right-5 right-3 top-1/2 -translate-y-1/2" />
        </div>
        <div className="account  items-center gap-10 hidden md:flex z-10">
          <div onClick={()=> setAccount (!account)}  className="left flex items-center">
            <FaUser />
            <FaCaretDown />
          </div>
          <div onClick={() => setCart(!cart)} className="right">
            <FaCartShopping />
          </div>
        </div>

        {cart && (
          <div className="cart w-[360px]  absolute right-0 top-full z-10">
            <div className="top border flex justify-between items-center p-5 bg-[#f5f5f3]">
              <div className="image flex gap-5 items-center ">
                <img className="w-20 h-20 bg-[#D8D8D8]" src="" alt="" />
                <div className="text">
                  <p className="name">Black Smart Watch</p>
                  <p className="price">44.00$</p>
                </div>
              </div>
              <div className="icons">
                <IoClose />
              </div>
            </div>

            <div className="bottom border bg-white p-5">
              <p className="mb-3">
                Subtotal: <b>$44.00</b>
              </p>
              <div className="flex gap-5">
                <Button ButtonText="View Cart" />
                <Button ButtonText="Checkout" />
              </div>
            </div>
          </div>
        )}

      {
        account && (
          <div className="cart w-[200px] bg-white   absolute right-[58px] top-full flex flex-col z-10">
          <Button className='!w-full border-[#F0F0F0] ' ButtonText='My Account'/>
            <Button className='!w-full border-[#F0F0F0]' ButtonText='Log Out'/>
          </div>
        )
      }

      </Container>
    </div>
  );
};

export default Searchbar;
