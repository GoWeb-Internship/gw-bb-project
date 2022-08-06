import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Container from '../components/reusable/Container';
import Seo from '../components/Seo';

const NotFoundPage = () => (
  <Layout>
    <section>
      <Container>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </section>
  </Layout>
);

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;

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
