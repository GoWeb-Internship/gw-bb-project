import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import LangSwitcher from './LangSwitcher';
import Container from 'components/reusable/Container';

import Logo from './Logo';

const Header = () => {
  const { t } = useTranslation();

  const { nav } = t('header', { returnObjects: true });

  return (
    <header className="fixed top-0 z-[2000] w-full py-3 bg-[#0891b2cc] shadow-bb1">
      <Container className={'flex items-center'}>
        <Logo />
        <HeaderNavigation
          navConfig={nav}
          className="ml-auto md:mr-7 lg:mr-12 "
        />
        <LangSwitcher className="ml-auto md:ml-0" />
      </Container>
    </header>
  );
};

export default Header;
