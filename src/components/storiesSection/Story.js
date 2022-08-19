import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Story = ({
  content = { uk: '', ukName: '', ru: '', ruName: '', en: '', enName: '' },
}) => {
  const { i18n } = useTranslation();
  return (
    <div className="lg:w-[510px] h-full px-[38px] pt-8 pb-[42px] border-2 border-slate-50 rounded-[20px]">
      <p className="mb-[14px] font-bold text-bb2040">
        {content[`${i18n.language}Name`]}
      </p>
      <p className="font-medium text-bb2024">{content[i18n.language]}</p>
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
