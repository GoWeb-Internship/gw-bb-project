import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className = '' }) => {
  return (
    <div
      className={`relative w-screen mx-auto px-5 sm:w-[480px] md:w-[768px] lg:w-[1280px] ${className}`}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
