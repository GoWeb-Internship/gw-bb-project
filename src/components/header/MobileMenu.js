import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import Container from 'components/reusable/Container';
import Logo from './Logo';
import MobileMenuButtons from './MobileMenuButtons';

import { FiX } from 'react-icons/fi';

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
      className={`${translateY} duration-500 transition-transform fixed top-0 w-full h-full z-30 bg-cyan-600/90`}
    >
      <Container>
        <div className="flex justify-between py-3 mb-[51px]">
          <Logo onClick={onClose} />
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
                <li
                  key={id}
                  className="relative flex flex-col items-center text-center mb-3"
                >
                  <Link
                    to={`${id}`}
                    onClick={onClose}
                    className="relative font-main text-bb1824 cursor-pointer px-5 py-3 transition-transform hover:scale-110 before:content-[''] before:absolute before:bottom-1/2 before:-translate-y-1/2 before:-left-11 before:w-11 before:h-[1px] before:bg-slate-50 before:opacity-0 before:transition-opacity before:duration-300 after:content-[''] after:absolute after:bottom-1/2 after:-translate-y-1/2 after:-right-11 after:w-11 after:h-[1px] after:bg-slate-50 after:opacity-0 after:transition-opacity after:duration-300 hover:before:opacity-100 hover:after:opacity-100 focus:before:opacity-100 focus:after:opacity-100"
                    smooth
                    spy
                    href=""
                    offset={-headerHeight - 1}
                  >
                    {name}
                  </Link>
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
