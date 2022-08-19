import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Feedback = ({
  content = { uk: '', ukName: '', ru: '', ruName: '', en: '', enName: '' },
  image,
}) => {
  const { i18n } = useTranslation();
  return (
    <div className="h-full lg:w-[510px] px-[40px] pt-8 pb-[42px] bg-[#f8fafc33] rounded-[20px]">
      <div className="flex items-center mb-7">
        <div className="shrink-0 w-[50px] h-[50px] mr-[21px] rounded-full border border-slate-50 overflow-hidden">
          {image && (
            <GatsbyImage
              image={image}
              alt={content[`${i18n.language}Name`]}
              className="max-w-full max-h-full"
            />
          )}
        </div>
        <p className="font-bold text-24 leading-none">
          {content[`${i18n.language}Name`]}
        </p>
      </div>
      <p className="font-medium text-bb2024">{content[i18n.language]}</p>
    </div>
  );
};

Feedback.propTypes = {
  content: PropTypes.shape({
    en: PropTypes.string,
    enName: PropTypes.string,
    ru: PropTypes.string,
    ruName: PropTypes.string,
    uk: PropTypes.string,
    ukName: PropTypes.string,
  }).isRequired,
  image: PropTypes.object.isRequired,
};

export default Feedback;
