import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, type, className, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Button.protoTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
