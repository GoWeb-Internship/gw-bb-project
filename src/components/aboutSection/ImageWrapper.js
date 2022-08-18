import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const ImageWrapper = ({ imageData, imageAlt, rounded }) => {
  return (
    <div className={`${rounded} overflow-hidden `}>
      <GatsbyImage image={imageData} alt={imageAlt} />
    </div>
  );
};

ImageWrapper.propTypes = {
  imageData: PropTypes.object,
  imageAlt: PropTypes.string,
};

export default ImageWrapper;
