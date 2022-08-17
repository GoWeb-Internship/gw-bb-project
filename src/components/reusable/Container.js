import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className = '' }) => {
  return (
    <div
      className={`relative w-screen mx-auto px-5 md:w-[768px] md:px-10 lg:w-[1240px] lg:px-20 ${className}`}
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
