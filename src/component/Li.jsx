import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({LiText, className, children}) => {
  return (
    <li className="group">
        <Link className={` hover:text-primary transition-all duration-500 font-dm text-sm font-bold text-[#767676] ${className}`}>
        {LiText} </Link>
        {children}
      </li>
  )
}

export default Li
