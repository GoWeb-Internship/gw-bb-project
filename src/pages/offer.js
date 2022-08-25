import React from 'react';
import { graphql } from 'gatsby';
import Seo from 'components/Seo';
import Politic from 'components/reusable/Politic';

const OfferPage = ({ data }) => {
  const title = data.mdx.frontmatter.offerTitle;
  const text = data.mdx.body;
  return <Politic text={text} title={title} />;
};

export const Head = () => <Seo title="Policy" />;

export default OfferPage;

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
      frontmatter: { fieldIdName: { eq: "offer" }, language: { eq: $language } }
    ) {
      frontmatter {
        offerTitle
      }
      body
    }
  }
`;
