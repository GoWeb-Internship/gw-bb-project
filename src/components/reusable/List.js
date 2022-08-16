import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items = [] }) => {
  return (
    <div>
      {!!items.length && (
        <ul className=" list-disc list-outside">
          {items.map(item => {
            return (
              <li key={item} className="">
                <p className=" text-neutral-700">{item}</p>
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
};
export default List;
