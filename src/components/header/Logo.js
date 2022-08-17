import React from 'react';
import { Link } from 'react-scroll';

import LogoIcon from 'images/logo.inline.svg';

const Logo = () => {
  return (
    <Link
      to={'home'}
      className={
        'flex justify-center items-center duration-200 transition-transform hover:scale-110'
      }
      smooth
      spy
      // hashSpy
      offset={-73}
    >
      <LogoIcon className="fill-slate-50" />
    </Link>
  );
};

export default Logo;
