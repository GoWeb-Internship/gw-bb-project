import * as React from 'react';
// import { Link, graphql } from 'gatsby';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
// import Container from 'components/reusable/Container';
import Seo from 'components/Seo';
// import TestForm from 'components/testForm/TestForm';
// import useClientLocation from 'hooks/useClientLocation';
import AboutSection from 'components/aboutSection/AboutSection';
import RoadMapSection from 'components/roadMapSection/RoadMapSection';
import WithCoachSection from 'components/withCoachSection/WithCoachSection';
import Hero from 'components/hero/Hero';

import PriceSection from 'components/priceSection/PriceSection';

import ImportantResultsSection from 'components/importantResultsSection/ImportantResultsSection';
import InLiveSection from 'components/inLiveSection/InLiveSection';
import SignUpSection from 'components/signUpSection/SignUpSection';
import BeBetterToday from 'components/beBetterToday/BeBetterToday';

// get API_KEYS
// const KEY_FROM_ENV_EXAMPLE = process.env.GATSBY_TELEGRAM_BOT_ID
// KEYS must be started with GATSBY_

const IndexPage = ({ data }) => {
  // const clientLocation = useClientLocation();
  const { charity, pricesTitle, roadMapTitle, sale } = data.content.frontmatter;

  return (
    <Layout>
      <Hero />
      <AboutSection />
      <RoadMapSection title={roadMapTitle} />
      <WithCoachSection />
      <PriceSection title={pricesTitle} charity={charity} />
      <ImportantResultsSection />
      <InLiveSection />
      <SignUpSection saleText={sale} />
      <BeBetterToday />
      {/* <section>
        <Container>
          <TestForm place="Home page" country={clientLocation} />
          <p className={'mt-10'}>
            <Link to={'example-page'}>Example Page</Link>
            <Link to={'policy'}>Policy Page</Link>
          </p>
        </Container>
      </section> */}
    </Layout>
  );
};

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
    content: mdx(
      frontmatter: { fieldIdName: { eq: "main" }, language: { eq: $language } }
    ) {
      frontmatter {
        pricesTitle
        roadMapTitle
        charity
        sale
      }
    }
  }
`;
