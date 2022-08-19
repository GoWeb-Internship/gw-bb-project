import React from 'react';
import PropTypes from 'prop-types';
import LampIcon from 'images/lamp.inline.svg';
import LampInHandIcon from 'images/lampInHand.inline.svg';
import LampWithArrowIcon from 'images/lampWithArrow.inline.svg';

const MyFormulaList = ({ data }) => {
  return (
    <ul className="grid grid-rows-3 grid-flow-col gap-x-[156px]">
      <li className="row-start-2 row-span-2 text-center">
        <LampIcon className="hover:scale-125 pb-8" />
        <p className="leading-10 font-bold">{data.textUnderstand}</p>
      </li>
      <li className="row-end-3 row-span-2 text-center">
        <LampInHandIcon className="hover:scale-125 pb-8" />
        <p className="leading-10 font-bold">{data.textHowGet}</p>
      </li>
      <li className="row-start-2 row-span-2 text-center">
        <LampWithArrowIcon className="hover:scale-125 pb-8" />
        <p className="leading-10 font-bold">{data.textStartDoing}</p>
      </li>
    </ul>
  );
};

MyFormulaList.protoTypes = {
  data: PropTypes.object,
};

export default MyFormulaList;
