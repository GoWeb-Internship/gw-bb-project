import * as React from 'react';
// import { Link, graphql } from 'gatsby';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
// import Container from 'components/reusable/Container';
import Seo from 'components/Seo';
import Form from 'components/form/Form';
import useClientLocation from 'hooks/useClientLocation';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import AboutSection from 'components/aboutSection/AboutSection';
import RoadMapSection from 'components/roadMapSection/RoadMapSection';
import WithCoachSection from 'components/withCoachSection/WithCoachSection';
import Hero from 'components/hero/Hero';
import PriceSection from 'components/priceSection/PriceSection';
import ImportantResultsSection from 'components/importantResultsSection/ImportantResultsSection';
import InLiveSection from 'components/inLiveSection/InLiveSection';
import SignUpSection from 'components/signUpSection/SignUpSection';
import BeBetterToday from 'components/beBetterToday/BeBetterToday';
import ContactSection from 'components/contactSection/ContactSection';
import GuaranteeSection from 'components/guaranteeSection/GuaranteeSection';
import MyFormulaSection from 'components/myFormulaSection/MyFormulaSection';
// get API_KEYS
// const KEY_FROM_ENV_EXAMPLE = process.env.GATSBY_TELEGRAM_BOT_ID
// KEYS must be started with GATSBY_

const IndexPage = ({ data }) => {
  const { t } = useTranslation();
  const button = t('button', { returnObjects: true });
  const clientLocation = useClientLocation();
  const { charity, pricesTitle, roadMapTitle, sale } = data.content.frontmatter;

  return (
    <Layout>
      <Hero saleText={sale} />
      <AboutSection />
      <RoadMapSection title={roadMapTitle} />
      <GuaranteeSection />
      <WithCoachSection />
      <PriceSection title={pricesTitle} charity={charity} />
      <ImportantResultsSection />
      <InLiveSection />
      <SignUpSection saleText={sale} />
      <ContactSection saleText={sale}>
        <Form
          place=" section Contact"
          country={clientLocation}
          buttonText={button.textBigButton}
          buttonClassName="bg-orange-400 hover:bg-orange-500"
        />
      </ContactSection>
      <BeBetterToday />
      <MyFormulaSection />
      {/* <section>
        <Container>
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
