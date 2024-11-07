import React, { useState } from "react";
import product1 from "../../../public/HomeProducts/plushie.png";
import product2 from "../../../public/HomeProducts/p2.png";
import { FaHeart } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { IoCart } from "react-icons/io5";

const Li = ({ name, className, icon }) => {
  return (
    <li className="flex justify-end gap-3 items-center font-dm text-p-primary text-[16px] font-bold hover:text-primary transition-all duration-500">
      {" "}
      {name} {icon}{" "}
    </li>
  );
};

const Productitem = ({ pname, pprice, pdetails, src, oprice, OfferEye }) => {

  let [offerShow , setOfferShow] = useState(OfferEye)

  return (
    <div className=" px-2.5 md:px-4 lg:px-5 ">
      <div className="imagew-[370px] h-[370px] bg-slate-300 relative group">
        <img className="w-full h-full object-cover" src={src} alt="" />
        <div className="overlay absolute left-0 bottom-0 w-full px-7 py-6 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <ul className="flex flex-col gap-4 cursor-pointer">
            <Li
              name="Add to Wish List"
              icon={<FaHeart className="text-primary" />}
            />
            <Li name="Compare" icon={<TbReload className="text-primary" />} />
            <Li name="Add To Cart" icon={<IoCart className="text-primary" />} />
          </ul>
        </div>
       {offerShow?(
         <button
          className={`absolute top-5 left-5 w-[92px] py-2  ${offerShow?"py-2":"py-0"} text-white bg-primary font-dm font-bold text-sm`}
        >
          {oprice}
        </button>
       ):""}
      </div>
      <div className="text pt-6">
        <div className="flex justify-between mb-[15px] ">
          <p className="font-dm text-primary text-xl font-bold">{pname}</p>
          <span className="font-dm text-p-primary  text-[16px]">{pprice}</span>
        </div>
        <p className="font-dm text-p-primary">{pdetails}</p>
      </div>
    </div>
  );
};

export default Productitem;
