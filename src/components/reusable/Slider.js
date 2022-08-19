import React from 'react';

import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper';

const Slider = ({
  children,
  className,
  slidesPerView = 1,
  onSlideChange,
  onSwiper,
}) => {
  return (
    <div className={`relative ${className}`}>
      <Swiper
        className={`max-w-[1100px]`}
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        onSlideChange={onSlideChange}
        onSwiper={onSwiper}
        navigation={{
          nextEl: '.next-slider',
          prevEl: '.prev-slider',
        }}
      >
        {children}
      </Swiper>

      <div className="prev-slider swiper-button-disabled" role={'button'}>
        <BsArrowLeftCircle size={40} />
      </div>
      <div className="next-slider swiper-button-disabled" role={'button'}>
        <BsArrowRightCircle size={40} />
      </div>
    </div>
  );
};

export default Slider;
