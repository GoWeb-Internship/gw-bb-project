import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PriceCard from './PriceCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import { PageFormatContext } from 'context/PageFormatContext';

const PriceCardsList = ({ cardsList = [], className = '', onClick }) => {
  const pageFormat = useContext(PageFormatContext);

  if (pageFormat === 'desktop') {
    return (
      <ul className={`${className} lg:flex lg:justify-center items-center`}>
        {!!cardsList.length &&
          cardsList.map(({ frontmatter }, id) => (
            <li key={`price-${id}`} className="lg:mr-[40px] lg:last:mr-0">
              <PriceCard cardData={frontmatter} onClick={onClick} id={id} />
            </li>
          ))}
      </ul>
    );
  } else {
    return (
      <div className={`${className} max-w-full overflow-hidden py-4`}>
        <Swiper
          className={'max-w-[264px] md:max-w-[328px]'}
          spaceBetween={38}
          slidesPerView={1}
          initialSlide={1}
          style={{ overflow: 'visible' }}
        >
          {!!cardsList.length &&
            cardsList.map(({ frontmatter }, id) => (
              <SwiperSlide key={`price-${id}`}>
                {({ isActive }) => (
                  <PriceCard
                    cardData={frontmatter}
                    onClick={onClick}
                    isActive={isActive}
                    id={id}
                  />
                )}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    );
  }
};

PriceCardsList.propTypes = {
  cardsList: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default PriceCardsList;
