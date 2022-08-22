import React, { useState, useEffect } from 'react';

// import { useI18next } from 'gatsby-plugin-react-i18next';
import { FiX } from 'react-icons/fi';

import Logo from './Logo';
import MobileMenuButtons from './MobileMenuButtons';
import Container from 'components/reusable/Container';
import { Link } from 'react-scroll';

const MobileMenu = ({ navConfig, onClose, showMenu, headerHeight = 0 }) => {
  const [translateY, setTranslateY] = useState('-translate-y-full');

  useEffect(() => {
    showMenu
      ? setTranslateY('translate-y-0')
      : setTranslateY('-translate-y-full');
  }, [showMenu]);

  return (
    <div
      id="mobile-menu"
      className={`${translateY} duration-200 transition-transform fixed top-0 w-full h-full z-30 bg-cyan-600`}
    >
      <Container>
        {/* ----logo------ */}
        <div className="flex justify-between py-3">
          <Logo />
          {/* ---CloseBtn--- */}
          <MobileMenuButtons
            onClick={onClose}
            IconComponent={FiX}
            disabled={!showMenu}
            className="close-btn"
          />
        </div>
        {navConfig.length ? (
          <nav>
            <ul>
              {navConfig.map(({ id, name }) => (
                <li key={id} className="relative text-center overflow-hidden">
                  {' '}
                  <Link
                    to={`${id}`}
                    // className="relative font-main text-bbBase cursor-pointer py-3 after:content-[''] after:absolute after:bottom-1 after:left-0 after:h-1 after:w-full after:bg-slate-50 after:rounded-sm focus:-translate-x-[102%] after:transition-transform after:duration-200 after:hover:translate-x-0 after:focus:translate-x-0 non-active-link2"
                    className="relative font-main text-bb1824 cursor-pointer px-4 py-3 before:content-[''] before:absolute before:bottom-1/2 before:-translate-y-1/2 before:left-11 before:w-11 before:h-[1px] before:bg-slate-50 after:content-[''] after:absolute after:bottom-1/2 after:-translate-y-1/2 after:right-11 after:w-11 after:h-[1px] after:bg-slate-50"
                    smooth
                    spy
                    offset={-headerHeight - 1}
                  >
                    {name}
                  </Link>
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 block mx-auto min-w-200px bg-slate-50 h-full"></span>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </Container>
    </div>
  );
};

export default MobileMenu;
