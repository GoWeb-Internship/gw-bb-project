import React from 'react';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';

import Slider from 'components/reusable/Slider';
import Story from './Story';

const StoriesList = ({ data = [], className = '' }) => {
  return (
    <Slider slidesPerView={2} className={className}>
      {!!data.length &&
        data.map(({ frontmatter, id }) => (
          <SwiperSlide
            key={id}
            className="slide h-auto max-w-[510px] mx-[20px]"
          >
            <Story content={frontmatter} />
          </SwiperSlide>
        ))}
    </Slider>
  );
};

StoriesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        en: PropTypes.string,
        enName: PropTypes.string,
        ru: PropTypes.string,
        ruName: PropTypes.string,
        uk: PropTypes.string,
        ukName: PropTypes.string,
      }),
      id: PropTypes.string,
    }).isRequired,
  ).isRequired,
  className: PropTypes.string,
};

export default StoriesList;
