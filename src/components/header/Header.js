import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useMedia } from 'react-use';

import LangSwitcher from './LangSwitcher';
import Container from 'components/reusable/Container';

import { getMediaVars } from 'styles/vars';
import Logo from './Logo';

const Header = () => {
  const { t } = useTranslation();
  const isWide = useMedia(getMediaVars().tablet_desktop);

  const { nav } = t('header', { returnObjects: true });

  return (
    <header className="fixed top-0 z-10 w-full py-3 bg-[#0891b2cc] shadow-bb1">
      <Container className={'flex items-center'}>
        <Logo />
        {isWide && (
          <HeaderNavigation
            navConfig={nav}
            className="ml-auto md:mr-7 lg:mr-[53px] "
          />
        )}
        <LangSwitcher className="ml-auto md:ml-0" />
      </Container>
    </header>
  );
};

export default Header;
