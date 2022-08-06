import React from 'react';
// import PropTypes from 'prop-types';
import HeaderNavigation from './HeaderNavigation';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Link } from 'gatsby';
import { useMedia } from 'react-use';

import LangSwitcher from './LangSwitcher';
import Container from '../reusable/Container';

import { getMediaVars } from '../../styles/vars';

const Header = () => {
  const { t } = useTranslation();
  const isWide = useMedia(getMediaVars().tablet_desktop);

  const data = t('header', { returnObjects: true });

  return (
    <header>
      <Container className={'flex justify-between align-middle'}>
        <Link to="/" className="p-4 hover:bg-blue-400 font-bold">
          ЛОГО
        </Link>
        {isWide && <HeaderNavigation navConfig={data.nav} />}
        <LangSwitcher />
      </Container>
    </header>
  );
};

// Header.propTypes = {
//   someProp: PropTypes.string,
// };

export default Header;
