import React from 'react'

const Description = ({text,classStyle}) => {
  return (
      <p className={`font-normal lg:text-base text-sm lg:leading-6 text-dusk-black opacity-90 text-center mx-auto ${classStyle}`}>{text}</p>
  )
}

export default Description