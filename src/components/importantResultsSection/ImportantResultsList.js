import React from 'react';
import PropTypes from 'prop-types';

const ImportantResultsList = ({ data }) => {
  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-6 lg:gap-x-20 lg:gap-y-[60px] md:gap-y-9">
      {data.list.map(item => (
        <li
          key={item}
          className="lg:w-[360px] md:w-[338px] md:h-[186px] lg:h-[186px] border-slate-50 py-7 lg:px-[35px] md:px-8 border rounded-[20px]"
        >
          <p className="text-bb1625 font-bold">{item}</p>
        </li>
      ))}
    </ul>
  );
};

ImportantResultsList.protoTypes = {
  data: PropTypes.object,
};

export default ImportantResultsList;
