import React from 'react'
import Heading from '../../common/Heading'
import Description from '../../common/Description'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {SWITCH_LIST} from '../../utils/Helper'

const SimpleSteps = () => {
  return (
    <div className='xl:py-20 md:py-10 py-6 xl:max-w-[1920] mx-auto'>
      <div className='container'>
        <Heading text="Simple Steps to " textbold="Switch" />
        <Description text="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum"
          classStyle="max-w-[506px] pt-4 lg:pb-[58px] pb-8" />
      </div>
      <div className='lg:block hidden'>
        <div className='flex w-full'>
          {SWITCH_LIST.map((obj, item) => (
            <div className='relative group w-full ma x-w-[360px]'>
              <div className='relative'>
                <img key={item} src={obj.src} alt={obj.alt} className='w-full ma x-w-[360px]' />
                <div className='bg-deep-blue xl:px-[42px] xl:py-8 p-6 w-full z-10 absolute bottom-0 left-0 opacity-0 hover:opacity-[1] duration-700 flex flex-col'>
                  <p className='pb-[14px] text-white font-normal xl:text-custom-xl text-2xl xl:leading-custom-7xl'>{obj.cardContent}</p>
                  <p className='font-normal xl:text-base text-sm xl:leading-custom-5xl text-white opacity-90 max-w-[286px]'>{obj.cardOverView}</p></div>
              </div>
              <div className='absolute w-full h-full bg-light-blue z-10 top-0 left-0 group-hover:w-0 transition-all duration-600'>
              </div>
              <p className='absolute !whitespace-nowrap 2xl:bottom-64 xl:bottom-48 bottom-40 font-normal xl:text-custom-xl text-xl xl:leading-custom-7xl text-dark-blue z-20 -rotate-90 w-full group-hover:opacity-0 transition-all duration-600'>{obj.cardText}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='lg:hidden block'>
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Pagination,Autoplay]}
          breakpoints={{
            375: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1023: {
              slidesPerView: 4,
            },
          }}
        >
          {SWITCH_LIST.map((obj, item) => (
            <SwiperSlide key={item}> {/* Each item will be wrapped in a SwiperSlide */}
              <div className='relative group w-full max-w-[360px]'>
                <div className='relative'>
                  <img key={item} src={obj.src} alt={obj.alt} className='w-full max-w-[360px]' />
                  <div className='bg-deep-blue xl:px-[42px] p-5 w-full z-10 absolute bottom-0 left-0 opacity-0 hover:opacity-[1] duration-700 flex flex-col'>
                    <p className='pb-2 text-white font-normal text-lg'>{obj.cardContent}</p>
                    <p className='font-normal text-sm text-white opacity-90'>{obj.cardOverView}</p></div>
                </div>
                <div className='absolute w-full h-full bg-light-blue z-10 top-0 left-0 group-hover:w-0 transition-all duration-600'></div>
                <p className='absolute !whitespace-nowrap 2xl:bottom-64 xl:bottom-48 sm:bottom-40 bottom-28 font-normal xl:text-custom-xl md:text-xl text-base xl:leading-custom-7xl text-dark-blue z-20 -rotate-90 w-full group-hover:opacity-0 transition-all duration-600'>
                  {obj.cardText}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default SimpleSteps