import React, { useContext, useEffect, useRef, useState } from 'react';
import HeaderNavigation from './HeaderNavigation';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { PageFormatContext } from 'context/PageFormatContext';
import { FiMenu } from 'react-icons/fi';

import LangSwitcher from './LangSwitcher';
import Container from 'components/reusable/Container';
import Logo from './Logo';
import MobileMenuButtons from './MobileMenuButtons';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const { t } = useTranslation();

  const pageFormat = useContext(PageFormatContext);

  const isMobile = pageFormat === 'mobile';

  useEffect(() => {
    setHeaderHeight(headerRef?.current.offsetHeight);
  }, []);

  const { nav } = t('header', { returnObjects: true });

  const [renderMenu, setRenderMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const onOpen = () => {
    setRenderMenu(true);
    setShowMenu(true);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);
  };

  const onClose = () => {
    setShowMenu(false);
    document.body.style.overflow = '';
    setTimeout(() => {
      setRenderMenu(false);
    }, 200 * 2);
  };

  const handleEscape = e => {
    if (e.code !== 'Escape') return;
    onClose();
    window.removeEventListener('keydown', handleEscape);
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 z-[9000] w-full bg-[#0891b2cc] shadow-bb1"
    >
      <Container className={'flex items-center py-3'}>
        <Logo />

        {!isMobile && (
          <HeaderNavigation
            navConfig={nav}
            className="ml-auto md:mr-6 lg:mr-12 "
            headerHeight={headerHeight}
          />
        )}

        <LangSwitcher className="ml-auto md:ml-0" />
        {isMobile && (
          <MobileMenuButtons
            onClick={onOpen}
            IconComponent={FiMenu}
            disabled={renderMenu}
          />
        )}
      </Container>
      {isMobile && renderMenu && (
        <MobileMenu
          onClose={onClose}
          showMenu={showMenu}
          navConfig={nav}
          headerHeight={headerHeight}
        />
      )}
    </header>
  );
};

export default Header;
