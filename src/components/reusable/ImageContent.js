import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const ImageContext = ({
  imageData,
  imageAlt,
  rounded = '',
  width = '',
  height = '',
}) => {
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

ImageContext.propTypes = {
  imageData: PropTypes.object,
  imageAlt: PropTypes.string,
  rounded: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ImageContext;
