import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({href,src,alt,ClassName, imageClass}) => {
  return (
    <Link className={`${ClassName}`} to={href}>
         <picture>
            <img className={`block ${imageClass}`}  src={src} alt={alt} />
        </picture>
    </Link>
     
  )
}

export default Image
