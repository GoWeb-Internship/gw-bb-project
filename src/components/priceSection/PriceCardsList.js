import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PriceCard from './PriceCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import { PageFormatContext } from 'context/PageFormatContext';

const fakeCard = {
  frontmatter: {
    uk: '',
    ukMonth: '',
    ukSessions: '',
    ru: '',
    ruMonth: '',
    ruSessions: '',
    en: '',
    enMonth: '',
    enSessions: '',
    discount: 0,
    price: -1,
    recommended: false,
  },
};

const PriceCardsList = ({ cardsList = [], className = '', onClick }) => {
  const pageFormat = useContext(PageFormatContext);

  if (pageFormat === 'desktop') {
    return (
      <ul className={`${className} lg:flex lg:justify-center items-center`}>
        {!!cardsList.length &&
          cardsList.map(({ frontmatter }, id) => (
            <li key={`price-${id}`} className="lg:mr-[40px] lg:last:mr-0">
              <PriceCard cardData={frontmatter} onClick={onClick} />
            </li>
          ))}
      </ul>
    );
  } else {
    return (
      <Swiper
        className={`${className} w-[912px] ${
          pageFormat === 'mobile' ? 'swiper-mobile-translate' : ''
        } md:w-[1104px] md:translate-x-[200px]`}
        style={{ overflow: 'visible' }}
        slidesPerView={3}
        initialSlide={1}
      >
        {!!cardsList.length &&
          [...cardsList, fakeCard, fakeCard].map(({ frontmatter }, id) => (
            <SwiperSlide
              key={id}
              className="slide h-auto mx-[20px] max-w-[264px]  md:max-w-[328px] shrink-0"
            >
              {({ isActive }) => (
                <PriceCard
                  cardData={frontmatter}
                  onClick={onClick}
                  isActive={isActive}
                />
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    );
  }
};

PriceCardsList.propTypes = {
  cardsList: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default PriceCardsList;
