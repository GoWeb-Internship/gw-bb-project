import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Background2 = ({
  imageData = {},
  className = '',
  objectPosition = 'top center',
}) => {
  const image = getImage(imageData.childImageSharp.gatsbyImageData);

  return (
    <GatsbyImage
      image={image}
      alt=""
      layout="fullWidth"
      quality={100}
      formats={['auto', 'webp', 'avif']}
      className={`-z-10 absolute top-0 left-1/2 -translate-x-1/2 max-h-full mx-auto w-[1440px] ${className}`}
      style={{ position: 'absolute' }}
      objectPosition={objectPosition}
      // breakpoints={[768, 1440]}
    />
  );
};

Background2.propTypes = {
  imageData: PropTypes.object.isRequired,
  className: PropTypes.string,
  objectPosition: PropTypes.string,
};

export default Background2;
