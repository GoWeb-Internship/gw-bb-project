import React from 'react';
import PropTypes from 'prop-types';
import LampIcon from 'images/lamp.inline.svg';
import LampInHandIcon from 'images/lampInHand.inline.svg';
import LampWithArrowIcon from 'images/lampWithArrow.inline.svg';

const MyFormulaList = ({ data }) => {
  return (
    <ul className="grid grid-rows-3 grid-flow-col md:gap-x-16 lg:gap-x-[156px]">
      <li className="text-center md:row-end-3 md:row-span-2 lg:row-start-2 lg:row-span-2">
        <LampIcon className="duration-200 transition-transform hover:scale-125 w-[108px] mb-3.5 md:w-full md:pb-6 lg:pb-8" />
        <p className="leading-10 text-[16px] font-bold md:text-[20px]">
          {data.textUnderstand}
        </p>
      </li>
      <li className="text-center md:row-start-2 md:row-span-2 lg:row-end-3 lg:row-span-2">
        <LampInHandIcon className="duration-200 transition-transform hover:scale-125 w-[108px] mb-3.5 md:w-full md:pb-6 lg:pb-8" />
        <p className="leading-10 text-[16px] font-bold md:text-[20px]">
          {data.textHowGet}
        </p>
      </li>
      <li className="text-center md:row-end-3 md:row-span-2 lg:row-start-2 lg:row-span-2">
        <LampWithArrowIcon className="duration-200 transition-transform hover:scale-125 w-[108px] mb-3.5 md:w-full md:pb-6 lg:pb-8" />
        <p className="leading-10 text-[16px] font-bold md:text-[20px]">
          {data.textStartDoing}
        </p>
      </li>
    </ul>
  );
};

MyFormulaList.protoTypes = {
  data: PropTypes.object,
};

export default MyFormulaList;
