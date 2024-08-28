import React from 'react'

const TitleHeader = ({headText, className}) => {
  return (
    <h2 className={`font-dm  text-[#262626] ${className} font-bold`}>{headText}</h2>
  )
}

export default TitleHeader
