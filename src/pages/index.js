import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Seo from 'components/Seo';
import Layout from 'components/Layout';
import Hero from 'components/hero/Hero';
import AboutSection from 'components/aboutSection/AboutSection';
import RoadMapSection from 'components/roadMapSection/RoadMapSection';
import FeedbackSection from 'components/feedbackSection/FeedbackSection';
import GuaranteeSection from 'components/guaranteeSection/GuaranteeSection';
import WithCoachSection from 'components/withCoachSection/WithCoachSection';
import PriceSection from 'components/priceSection/PriceSection';
import ImportantResultsSection from 'components/importantResultsSection/ImportantResultsSection';
import InLiveSection from 'components/inLiveSection/InLiveSection';
import SignUpSection from 'components/signUpSection/SignUpSection';
import ContactSection from 'components/contactSection/ContactSection';
import Form from 'components/form/Form';
import BeBetterToday from 'components/beBetterToday/BeBetterToday';
import MyFormulaSection from 'components/myFormulaSection/MyFormulaSection';
import StoriesSection from 'components/storiesSection/StoriesSection';

// get API_KEYS
// const KEY_FROM_ENV_EXAMPLE = process.env.GATSBY_TELEGRAM_BOT_ID
// KEYS must be started with GATSBY_

const IndexPage = ({ data }) => {
  const { t } = useTranslation();

  const button = t('button', { returnObjects: true });
  const seo = t('seo', { returnObjects: true });

  const { charity, sale, cost } = data.content.frontmatter;

  return (
    <>
      <Seo title={seo.title} description={seo.description} lang={seo.lang} />
      <Layout saleText={sale} cost={cost} charity={charity}>
        <Hero saleText={sale} cost={cost} />
        <AboutSection />
        <RoadMapSection />
        <FeedbackSection />
        <GuaranteeSection />
        <WithCoachSection />
        <PriceSection charity={charity} />
        <ImportantResultsSection />
        <StoriesSection />
        <InLiveSection />
        <SignUpSection saleText={sale} cost={cost} />
        <ContactSection saleText={sale} cost={cost}>
          <Form
            place="section Contact"
            buttonText={button.textBigButton}
            buttonClassName="bg-orange-400 hover:bg-orange-500"
          />
        </ContactSection>
        <BeBetterToday />
        <MyFormulaSection />
      </Layout>
    </>
  );
};

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
        charity
        sale
        cost
      }
    }
  }
`;
