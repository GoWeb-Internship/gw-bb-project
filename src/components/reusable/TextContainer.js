import React from 'react';
import PropTypes from 'prop-types';

const TextContainer = ({ title, text = [] }) => {
  return (
    <div className="lg:max-w-xl">
      <h2 className="mb-5 lg:mb-12">{title}</h2>
      {!!text.length &&
        text.map(item => {
          return (
            <p key={item} className="mt-6">
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
};

export default TextContainer;
