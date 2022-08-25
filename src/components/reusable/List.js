import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items = [], className = '' }) => {
  return (
    <div>
      {!!items.length && (
        <ul className={className}>
          {items.map(item => {
            return (
              <li key={item} className="">
                <p className="text-neutral-700  mt-3 flex">
                  <span className="text-orange-400 mr-4 " aria-hidden="true">
                    ●
                  </span>
                  {item}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};
export default List;
