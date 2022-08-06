import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import Container from '../components/reusable/Container';
import Seo from '../components/Seo';

const PolicyPage = () => {
  return (
    <Layout>
      <section>
        <Container>
          <h1>Policy</h1>
          <Link to="/">Go back to the homepage</Link>
        </Container>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Policy" />;

export default PolicyPage;

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
