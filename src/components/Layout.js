/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import useMedia from 'hooks/useMedia';
import { getMediaQueries } from 'styles/vars';
import { PageFormatContext } from 'context/PageFormatContext';
import useClientLocation from 'hooks/useClientLocation';
import { ClientLocationContext } from 'context/ClientLocationContext';

const mediaQueries = getMediaQueries();

const Layout = ({ children, saleText, charity, cost }) => {
  const pageFormat = useMedia(
    Object.values(mediaQueries),
    Object.keys(mediaQueries),
    null,
  );

  const clientLocation = useClientLocation();

  return (
    <>
      <ClientLocationContext.Provider value={clientLocation}>
        <PageFormatContext.Provider value={pageFormat}>
          <Header />
          <Main>{children}</Main>
          <Footer saleText={saleText} charity={charity} cost={cost} />
        </PageFormatContext.Provider>
      </ClientLocationContext.Provider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  cost: PropTypes.string,
  saleText: PropTypes.string,
  charity: PropTypes.string,
};

export default Layout;
