import React from "react";
import product1 from "../../../public/HomeProducts/plushie.png";
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

const Productitem = ({pname,pprice,pdetails}) => {
  return (
    <div className=" w-[370px]">
      <div className="image w-full h-[370px] bg-slate-300 relative group">
        <img className="w-full h-full object-cover" src={product1} alt="" />
        <div className="overlay absolute left-0 bottom-0 w-full px-7 py-6 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <ul className="flex flex-col gap-4">
            <Li
              name="Add to Wish List"
              icon={<FaHeart className="text-primary" />}
            />
            <Li name="Compare" icon={<TbReload className="text-primary" />} />
            <Li name="Add To Cart" icon={<IoCart className="text-primary" />} />
          </ul>
        </div>
      </div>
      <div className="text pt-6">
        <div className="flex justify-between mb-[15px] ">
          <p className="font-dm text-primary text-xl font-bold">
           {pname}
          </p>
          <span className="font-dm text-p-primary  text-[16px]">{pprice}</span>
        </div>
        <p className="font-dm text-p-primary">{pdetails}</p>
      </div>
    </div>
  );
};

export default Productitem;
