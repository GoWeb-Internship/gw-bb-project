import React from 'react';
// import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { FiCalendar } from 'react-icons/fi';
import { FiClock } from 'react-icons/fi';

const PriceCard = ({ cardData, onClick }) => {
  const { i18n, t } = useTranslation();
  const button = t('button', { returnObjects: true });

  const height = cardData.recommended ? 'lg:min-h-[508px]' : 'lg:min-h-[468px]';

  const showDiscount = Boolean(cardData.discount) ? 'opacity-100' : 'opacity-0';
  const handleClick = () => {
    onClick(cardData[i18n.language]);
  };

  return (
    <div
      className={`flex flex-col justify-center items-center pt-[70px] pb-[60px] px-[46px]  text-neutral-700 w-[328px] ${height} rounded-[20px] bg-slate-50 transition duration-200 hover:scale-105 hover:bg-white`}
    >
      <h3 className="font-main font-bold text-bb2040 lg:mb-[2px]">
        {cardData[i18n.language]}
      </h3>
      <p
        className={`${showDiscount} font-main font-bold text-bb2024 lg:mb-[26px]`}
      >
        {t('saving')} {cardData.discount}$
      </p>
      <p className="font-main font-bold text-[32px] leading-none lg:mb-[47px]">
        {cardData.price}$
      </p>
      <div className="text-start inline-block">
        <p className="flex items-center  mb-[19px] font-bold text-bb1625">
          <FiCalendar size={20} className="mr-[22px]" />
          <span>{cardData[`${i18n.language}Month`]}</span>
        </p>
        <p className="flex mb-[50px] font-bold text-bb1625 ">
          <FiClock size={20} className="mr-[22px]" />

          <span>{cardData[`${i18n.language}Sessions`]}</span>
        </p>
      </div>
      <button
        onClick={handleClick}
        type="button"
        className="h-[56px] px-3 w-full flex justify-center items-center bg-orange-400 rounded-xl text-bb2024 text-slate-50 font-bold transition-colors duration-200 hover:bg-orange-500 focus:bg-orange-500"
      >
        {button.textSmallButton}
      </button>
    </div>
  );
};

export default PriceCard;
