import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const ImageWrapper = ({ imageData, imageAlt, rounded, width, height }) => {
  return (
    <div className={`${rounded} overflow-hidden h-full `}>
      <GatsbyImage
        image={imageData}
        alt={imageAlt}
        className={`${width} ${height}`}
      />
    </div>
  );
};

ImageWrapper.propTypes = {
  imageData: PropTypes.object,
  imageAlt: PropTypes.string,
};

export default ImageWrapper;
