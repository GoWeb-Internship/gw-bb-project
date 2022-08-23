import React from 'react';
import { graphql, Link } from 'gatsby';

import Container from 'components/reusable/Container';
import PolicyList from 'components/PolicyList';
import Seo from 'components/Seo';

const PolicyPage = ({ data }) => {
  const policyItems = data.allMdx.nodes;

  return (
    <Container>
      <h1>Policy</h1>
      <Link to="/">Go back to the homepage</Link>
      {!!policyItems.length && <PolicyList policyItems={policyItems} />}
    </Container>
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
    allMdx(
      filter: { frontmatter: { fieldIdName: { eq: "policy" } } }
      sort: { fields: frontmatter___title, order: ASC }
    ) {
      nodes {
        frontmatter {
          title
          uk
          ru
          en
          date
        }
      }
    }
  }
`;
