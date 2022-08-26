import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Story = ({
  content = { uk: '', ukName: '', ru: '', ruName: '', en: '', enName: '' },
}) => {
  const { i18n } = useTranslation();
  return (
    <div className="w-full h-full px-[24px] pt-8 pb-[42px] border-2 border-slate-50 rounded-[20px]">
      <p className="mb-[23px] font-bold text-bb1440 md:text-bb2040 md:mb-[14px] lg:text-[24px] md:leading-none">
        {content[`${i18n.language}Name`]}
      </p>
      <p className="font-medium text-bb1424 md:text-bb2024">
        {content[i18n.language]}
      </p>
    </div>
  );
};

Story.propTypes = {
  content: PropTypes.shape({
    en: PropTypes.string,
    enName: PropTypes.string,
    ru: PropTypes.string,
    ruName: PropTypes.string,
    uk: PropTypes.string,
    ukName: PropTypes.string,
  }).isRequired,
};

export default Story;
