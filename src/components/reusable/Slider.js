import React, { useContext } from 'react';

import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper';
import { PageFormatContext } from 'context/PageFormatContext';

const Slider = ({
  children,
  className,
  slidesPerView = 1,
  onSlideChange,
  onSwiper,
  style,
  spaceBetween = 0,
}) => {
  const pageFormat = useContext(PageFormatContext);

  const isMobile = pageFormat === 'mobile';

  return (
    <div className={`relative  ${className}`}>
      <Swiper
        className={`mx-auto sm:max-w-[420px] md:max-w-[550px] lg:max-w-[1100px]`}
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        onSlideChange={onSlideChange}
        onSwiper={onSwiper}
        style={style}
        navigation={{
          nextEl: '.next-slider',
          prevEl: '.prev-slider',
        }}
        loop={true}
      >
        {children}
      </Swiper>

      {!isMobile && (
        <>
          <div className="prev-slider swiper-button-disabled" role={'button'}>
            <BsArrowLeftCircle size={40} />
          </div>
          <div className="next-slider swiper-button-disabled" role={'button'}>
            <BsArrowRightCircle size={40} />
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
