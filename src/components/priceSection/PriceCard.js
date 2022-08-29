import { PageFormatContext } from 'context/PageFormatContext';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { FiCalendar } from 'react-icons/fi';
import { FiClock } from 'react-icons/fi';

const PriceCard = ({ cardData, onClick, isActive, id }) => {
  const pageFormat = useContext(PageFormatContext);
  const { i18n, t } = useTranslation();
  const button = t('button', { returnObjects: true });

  const handleClick = () => {
    onClick(cardData[i18n.language]);
  };

  const isDesktop = pageFormat === 'desktop';

  const height =
    cardData.recommended && isDesktop ? 'md:min-h-[508px]' : 'md:min-h-[468px]';
  const pt =
    cardData.recommended && isDesktop ? 'md:pt-[85px]' : 'md:pt-[70px]';
  const recommendedColor =
    cardData.recommended && pageFormat !== 'tablet'
      ? 'lg:bg-[#FBDEBB]'
      : 'lg:bg-slate-50';
  const opacity = isActive || isDesktop ? 'opacity-100' : 'opacity-50';
  const scale = isActive && !isDesktop ? 'scale-105 ' : 'scale-100';

  const showDiscount = Boolean(cardData.discount) ? 'opacity-100' : 'opacity-0';

  return (
    <div
      className={`${opacity} ${height} ${scale} mx-auto rounded-2xl w-[264px] min-h-[372px] px-[20px] py-9 text-neutral-700 text-center md:rounded-[20px] ${pt} md:pb-[60px] md:px-[46px] md:w-[328px] bg-slate-50 transition duration-200 lg:hover:scale-105 ${recommendedColor}`}
    >
      <h3 className="font-main font-bold text-bb2040 md:text-bb2440 mb-2 md:mb-[2px]">
        {cardData.title}
      </h3>
      <p
        className={`${showDiscount} font-main font-bold text-bb2024 mb-3 md:mb-[26px] text-orange-500`}
      >
        {t('saving')} {cardData.discount}$
      </p>
      <p className="mb-8 font-main font-bold text-[24px] leading-none md:text-[32px] md:mb-[47px]">
        {cardData.price}$
      </p>
      <div className="text-start inline-block">
        <p className="flex items-center mb-5 font-bold text-bb1625">
          <FiCalendar size={20} className="mr-[14px] md:mr-[22px]" />
          <span>{cardData[`${i18n.language}Month`]}</span>
        </p>
        <p className="flex mb-10 md:mb-[50px] font-bold text-bb1625 ">
          <FiClock size={20} className="mr-[14px] md:mr-[22px]" />

          <span>{cardData[`${i18n.language}Sessions`]}</span>
        </p>
      </div>
      <button
        id={`price-card-button-${id}`}
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
