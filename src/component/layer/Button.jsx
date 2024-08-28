import React from 'react'

const Button = ({className, ButtonText}) => {
  return (
    <button className={`border border-black py-4 w-1/2 text-[14px] hover:bg-[#2B2B2B] hover:text-white transition-all duration-300 font-dm font-bold
        ${className}`}>{ButtonText}</button>
  )
}

export default Button
