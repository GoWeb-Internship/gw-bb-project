import React from 'react';
import PropTypes from 'prop-types';

const TextContainer = ({ title, text = [], className = '' }) => {
  return (
    <div className={`${className}`}>
      <h2 className="mb-5 lg:mb-12 text-orange-400">{title}</h2>
      {!!text.length &&
        text.map(item => {
          return (
            <p key={item} className="mt-6 text-neutral-700">
              {item}
            </p>
          );
        })}
    </div>
  );
};

TextContainer.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default TextContainer;
