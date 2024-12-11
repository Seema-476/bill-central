import React from 'react'
import Heading from '../../common/Heading'
import Description from '../../common/Description'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {SWITCH_LIST} from '../../utils/Helper'

const SimpleSteps = () => {
  return (
    <div className='py-16 xl:max-w-[1920] mx-auto'>
      <div className='container'>
        <Heading text="Simple Steps to " textbold="Switch" />
        <Description text="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum"
          classStyle="max-w-[506px] pt-4 lg:pb-[58px] pb-8" />
      </div>
      <div className='lg:block hidden'>
        <div className='flex w-full'>
          {SWITCH_LIST.map((obj, item) => (
            <div className='relative group w-full ma x-w-[360px]'>
              <img key={item} src={obj.src} alt={obj.alt} className='w-full ma x-w-[360px]' />
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
          modules={[Pagination]}
          breakpoints={{
            375: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide className='group'><img src="/assets/images/webp/location-card.webp" alt="location" className=' w-full max-w-[360px]' /></SwiperSlide>
          <SwiperSlide><img src="/assets/images/webp/providers-card.webp" alt="providers" className=' w-full max-w-[360px]' /></SwiperSlide>
          <SwiperSlide><img src="/assets/images/webp/switch-easily.webp" alt="switch" className=' w-full max-w-[360px]' /></SwiperSlide>
          <SwiperSlide><img src="/assets/images/webp/planning-card.webp" alt="planning" className=' w-full max-w-[360px]' /></SwiperSlide>
          <SwiperSlide><img src="/assets/images/webp/location-card.webp" alt="location" className=' w-full max-w-[360px]' /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default SimpleSteps