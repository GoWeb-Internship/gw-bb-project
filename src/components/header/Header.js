import React from 'react';
// import PropTypes from 'prop-types';
import HeaderNavigation from './HeaderNavigation';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Link } from 'gatsby';
import { useMedia } from 'react-use';

import LangSwitcher from './LangSwitcher';
import Container from 'components/reusable/Container';

import { getMediaVars } from 'styles/vars';

const Header = () => {
  const { t } = useTranslation();
  const isWide = useMedia(getMediaVars().tablet_desktop);

  const { nav } = t('header', { returnObjects: true });

  return (
    <header className="fixed top-0 z-10">
      <Container className={'flex justify-between align-middle'}>
        <Link to="/" className="p-4 hover:bg-blue-400 font-bold">
          ЛОГО
        </Link>
        {isWide && <HeaderNavigation navConfig={nav} />}
        <LangSwitcher />
      </Container>
    </header>
  );
};

export default Header;
