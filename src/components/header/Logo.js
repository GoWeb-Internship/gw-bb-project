import React from 'react';
import { Link } from 'react-scroll';

import LogoIcon from 'images/logo.inline.svg';

const Logo = ({ onClick }) => {
  return (
    <Link
      to={'home'}
      className={
        'flex justify-center items-center duration-200 transition-transform hover:scale-110'
      }
      smooth
      spy
      // hashSpy
      onClick={onClick}
    >
      <LogoIcon className="fill-slate-50" />
    </Link>
  );
};

export default Logo;
