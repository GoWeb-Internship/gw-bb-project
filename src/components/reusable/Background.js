import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Background = ({ imageData = {}, className = '' }) => {
  const image = getImage(imageData.childImageSharp.gatsbyImageData);

  return (
    <GatsbyImage
      image={image}
      alt=""
      layout="fulconstrainedlWidth"
      formats={['auto', 'webp', 'avif']}
      className={`-z-10 absolute top-0 left-1/2 -translate-x-1/2 max-h-full mx-auto md:w-[768px] lg:w-[1440px] ${className}`}
      style={{ position: 'absolute' }}
    />
  );
};

Background.propTypes = {
  imageData: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Background;
