import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const ImageWrapper = ({ imageData, imageAlt }) => {
  return (
    <div className="">
      <GatsbyImage image={imageData} alt={imageAlt} />
    </div>
  );
};

ImageWrapper.propTypes = {
  imageData: PropTypes.object,
  imageAlt: PropTypes.string,
};

export default ImageWrapper;
