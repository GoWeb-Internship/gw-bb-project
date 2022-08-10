import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Container from '../components/reusable/Container';
import Seo from '../components/Seo';
import TestForm from '../components/testForm/TestForm';

// get API_KEYS
// const KEY_FROM_ENV_EXAMPLE = process.env.GATSBY_TELEGRAM_BOT_ID
// KEYS must be started with GATSBY_

const IndexPage = () => (
  <Layout>
    <Container>
      <section>
        {/* пропс place используется в скрытом инпуте для того чтобы указать откуда пришла форма.*/}
        <TestForm place="Home page" />
        <p className={'mt-10'}>
          <Link to={'example-page'}>Example Page</Link>
          <Link to={'policy'}>Policy Page</Link>
        </p>
      </section>
    </Container>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
