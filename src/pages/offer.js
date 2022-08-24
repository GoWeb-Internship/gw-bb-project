import React from 'react';
import { graphql, Link } from 'gatsby';

import Container from 'components/reusable/Container';
import Seo from 'components/Seo';

const OfferPage = ({ data }) => {
  // const title = data.frontmatter.offerTitle;

  return (
    <main>
      <Container>
        {/* <h1>{title}</h1> */}
        <Link to="/">Go back to the homepage</Link>
        {/* <p>{data.body}</p> */}
      </Container>
    </main>
  );
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
  }
`;

// content: mdx(
//   frontmatter: { fieldIdName: { eq: "offer" }, language: { eq: $language } }
// ) {
//   frontmatter {
//     offerTitle
//   }
//   body
// }
