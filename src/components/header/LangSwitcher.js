import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useI18next, Link } from 'gatsby-plugin-react-i18next';

import { FiChevronDown } from 'react-icons/fi';

const getNormalizeData = lang => ({
  label: (lang === 'uk' ? 'ua' : lang).toUpperCase(),
  value: lang,
});

const LangSwitcher = ({ className = '' }) => {
  const { languages, language, originalPath } = useI18next();
  const [opacity, setOpacity] = useState('opacity-0');
  const [isHidden, setIsHidden] = useState('hidden');
  const [pointerEvents, setPointerEvents] = useState('pointer-events-none');
  const [rotate, setRotate] = useState('rotate-0');
  const [fill, setFill] = useState('stroke-slate-50');

  // this handler show language selector list

  const onOpen = () => {
    setIsHidden('block');
    setOpacity('opacity-100');
    setPointerEvents('pointer-events-auto');
    setRotate('rotate-180');
    setFill('stroke-cyan-600');
  };

  const onClose = () => {
    setOpacity('opacity-0');
    setIsHidden('hidden');
    setPointerEvents('pointer-events-none');
    setRotate('rotate-0');
    setFill('stroke-slate-50');
  };

  const handleClick = () => {
    if (isHidden === 'hidden') {
      onOpen();
      window.addEventListener('keydown', handleEscape);
    } else {
      onClose();
      window.removeEventListener('keydown', handleEscape);
    }
  };

  const handleEscape = e => {
    if (e.code !== 'Escape') return;
    onClose();
    window.removeEventListener('keydown', handleEscape);
  };

  const langData = [
    getNormalizeData(language),
    ...languages.filter(lng => lng !== language).map(getNormalizeData),
  ];

  return (
    <>
      <div
        className={`relative cursor-pointer ${className}`}
        onClick={handleClick}
      >
        <button
          id={'lang-switcher-button'}
          type="button"
          className="flex items-center px-2 py-1 font-main text-bbBase font-medium transition-colors hover:text-slate-200 focus:text-slate-200"
        >
          {getNormalizeData(language).label}
          <FiChevronDown
            className={`icon ml-1 ${rotate} ${fill} transition duration-200 relative z-30`}
          />
        </button>
        {/* language selector list */}
        <ul
          className={`absolute top-0 left-0 w-full transition duration-200 ${isHidden} ${opacity} ${pointerEvents} rounded-md bg-slate-50 z-20`}
        >
          {langData.map(({ label, value }) => (
            <li
              key={value}
              className="0 border-b border-b-[#0891b2cc] last:border-b-0"
            >
              <Link
                to={originalPath}
                language={value}
                className="px-2 py-1 font-main text-bbBase font-medium text-cyan-600"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isHidden !== 'hidden' && (
        <div
          className="fixed top-0 left-0 w-full h-full z-10"
          onClick={handleClick}
        ></div>
      )}
    </>
  );
};

LangSwitcher.propTypes = {
  className: PropTypes.string,
};

export default LangSwitcher;
