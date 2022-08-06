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

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
