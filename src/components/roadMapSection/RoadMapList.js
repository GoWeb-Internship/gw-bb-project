import React from 'react';
import PropTypes from 'prop-types';

const RoadMapList = ({ listData }) => {
  return (
    <ul className="md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-x-[55px] lg:gap-y-[92px]">
      {listData.map((item, id) => (
        <li key={`road-${id}`} className="flex items-center lg:min-h-[124px]">
          <span
            aria-hidden="true"
            className="mr-[38px] text-[80px] font-main leading-none font-bold text-slate-50 opacity-20 pointer-events-none select-none"
          >
            {id + 1}
          </span>
          <span className="text-bb1625 font-bold font-main">{item}</span>
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
