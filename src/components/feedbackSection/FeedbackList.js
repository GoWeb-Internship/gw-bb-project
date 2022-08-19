import Slider from 'components/reusable/Slider';
import React from 'react';
import PropTypes from 'prop-types';
import { SwiperSlide } from 'swiper/react';

import Feedback from './Feedback';

const FeedbackList = ({ data = [], className = '' }) => {
  return (
    <Slider slidesPerView={2} className={className}>
      {!!data.length &&
        data.map(({ frontmatter, gatsbyImageData, id }) => (
          <SwiperSlide
            key={id}
            className="slide h-auto max-w-[510px] mx-[20px]"
          >
            <Feedback content={frontmatter} image={gatsbyImageData} />
          </SwiperSlide>
        ))}
    </Slider>
  );
};

FeedbackList.propTypes = {
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
      gatsbyImageData: PropTypes.object,
    }).isRequired,
  ).isRequired,
  className: PropTypes.string,
};

export default FeedbackList;
