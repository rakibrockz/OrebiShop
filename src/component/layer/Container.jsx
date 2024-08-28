import React from 'react'

const Container = ({children, ClassName}) => {
  return (
    <div className={`max-w-[1600px] mx-auto ${ClassName}`}>
     {children}
    </div>
  )
}

export default Container
