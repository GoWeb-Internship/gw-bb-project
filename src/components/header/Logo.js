import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Link } from 'react-scroll';

import LogoIcon from 'images/logo.inline.svg';

const Logo = ({ onClick, onFooter = false }) => {
  const { t } = useTranslation();

  const { topLink } = t('aria', { returnObjects: true });

  const sizes = onFooter ? 'w-[96px] h-[56px]' : 'w-[84px] h-[48px]';
  return (
    <Link
      to={'home'}
      className={`${sizes} flex justify-center items-center duration-200 transition-transform hover:scale-110`}
      smooth
      spy
      // hashSpy
      onClick={onClick}
      href=""
    >
      <span className="visually-hidden">{topLink}</span>
      <LogoIcon className="fill-slate-50 w-full h-full" />
    </Link>
  );
};

export default Logo;
