import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { getVisibleText } from 'services/o';

const TEXT_LIMIT = 200;

const Story = ({
  content = { uk: '', ukName: '', ru: '', ruName: '', en: '', enName: '' },
}) => {
  const { i18n } = useTranslation();

  const [showAllText, setShowAllText] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);

  const textRef = useRef(null);

  useEffect(() => {
    if (content[i18n.language].length > TEXT_LIMIT) {
      setShowReadMore(true);
    }
  }, [content, i18n.language]);

  const toggleText = () => {
    setShowAllText(p => !p);
  };

  const text = getVisibleText(content[i18n.language], TEXT_LIMIT, showAllText);

  return (
    <div className="w-full h-full px-[24px] pt-8 pb-[42px] border-2 border-slate-50 rounded-[20px]">
      <p className="mb-[23px] font-bold text-bb1440 md:text-bb2040 md:mb-[14px] lg:text-[24px] md:leading-none">
        {content[`${i18n.language}Name`]}
      </p>
      <p ref={textRef} className="font-medium text-bb1424 md:text-bb2024">
        {text}
      </p>
      {showReadMore && (
        <button type="button" onClick={toggleText} className={'text-end'}>
          {showAllText ? 'Hide' : 'Read More'}
        </button>
      )}
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
