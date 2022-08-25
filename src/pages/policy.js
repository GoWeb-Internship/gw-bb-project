import React from 'react';
import { graphql } from 'gatsby';
import Seo from 'components/Seo';
import Politic from 'components/reusable/Politic';

const PolicyPage = ({ data }) => {
  const title = data.mdx.frontmatter.policyTitle;
  const text = data.mdx.body;

  return <Politic text={text} title={title} />;
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
    mdx(
      frontmatter: {
        fieldIdName: { eq: "policy" }
        language: { eq: $language }
      }
    ) {
      frontmatter {
        policyTitle
      }
      body
    }
  }
`;
