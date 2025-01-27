import React from 'react'
import { TOKEN_DATA } from '../../utils/Helper'

const TokenInfo = () => {
  return (
      <div className="bg-token bg-cover bg-no-repeat bg-center xl:pt-[176px] xl:pb-[114px] lg:py-12 md:py-9 py-6 -mt-[2px]" id="staking">
          <div className="container max-w-[1360px] mx-auto">
              <h2 className="font-Josefin font-bold text-5xl leading-[61.2px] max-md:text-3xl max-md:leading-10 text-white text-center lg:pb-[59px] pb-10">
                  <span className="text-gradient">$GILD </span>Token Info
              </h2>
              <div className="flex gap-6 lg:flex-row flex-wrap justify-center">
                  {TOKEN_DATA.map((obj, index) => (
                      <div
                          key={index}
                          className="max-w-[312px] w-full hover:bg-gradient-to-t from-sky-blue to-light-purple hover:shadow-custom-3xl rounded-[13px] h-full transition-all duration-500"
                      >
                          <div className="max-w-[312px] w-full rounded-[13px] flex items-center flex-col justify-center bg-gradient-to-t from-custom-black to-custom-dark-black border border-border-gray h-[181px]">
                              <img src={obj.img} alt={obj.alt} />
                              <h4 className="text-white font-Josefin font-bold md:text-3xl text-2xl leading-[38.25px] pt-[9px]">
                                  {obj.title}
                              </h4>
                              {obj.subTitle && (
                                  <p className="font-Josefin text-lg font-normal leading-custom-4xl text-white text-nowrap pt-2">
                                      {obj.subTitle}
                                  </p>
                              )}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  )
}

export default TokenInfo