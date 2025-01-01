import React from 'react'
import Description from '../../common/Description'
import { PARMS_DATA } from '../../utils/Helper'
import Heading from '../../common/Heading';
import { NavLink } from 'react-router-dom';

const PracticePrams = () => {
  return (
      <div className="flex min-h-screen justify-center items-center">
          <div className="container">
              <h3 className='text-3xl text-center pb-12'>Parms</h3>
              <div className="flex justify-between gap-4 max-lg:flex-wrap">
                  {PARMS_DATA.map((obj, index) => (
                      <NavLink to={`/about?${obj.id}`} >
                      <div
                          key={index}
                          className="border border-grayish-blue p-6 max-w-[400px] max-lg:max-w-[300px] bg-red-600 cursor-pointer">
                          <Heading classStyle={'text-center text-white opacity-90'} text={obj.title} />
                          <Description
                                  classStyle={'text-center text-base text-white pt-2 max-w-[400px] mx-auto opacity-60'}
                              text={obj.text} />
                      </div>
                      </NavLink>
                  ))}
              </div>
          </div>
      </div>
  )
}

export default PracticePrams