import React from 'react';
import PropTypes from 'prop-types';

const RoadMapList = ({ listData }) => {
  return (
    <ul className="md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-x-[52px] lg:gap-y-[60px]">
      {listData.map((item, id) => (
        <li
          key={`road-${id}`}
          className="flex lg:min-h-[124px] before:content-['HELLO'] before:block"
        >
          <span
            aria-hidden="true"
            className="mr-[42px] text-[80px] leading-none font-bold text-slate-50 opacity-20 pointer-events-none select-none"
          >
            {id + 1}
          </span>
          <span className="v text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
};

RoadMapList.propTypes = {
  listData: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default RoadMapList;
