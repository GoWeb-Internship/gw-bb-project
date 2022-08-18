import React from 'react';
import PropTypes from 'prop-types';

const ImportantResultsList = ({ data }) => {
  return (
    <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-20 gap-y-[60px]">
      {data.list.map(item => (
        <li
          key={item}
          className="lg:w-[360px] lg:h-[186px] border-slate-50 py-7 px-[35px] border rounded-[20px]"
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
