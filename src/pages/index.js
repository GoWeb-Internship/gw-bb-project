import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import loadable from '@loadable/component';

import { Toaster } from 'react-hot-toast';
import Seo from 'components/Seo';
import Layout from 'components/Layout';
import Hero from 'components/hero/Hero';
import AboutSection from 'components/aboutSection/AboutSection';
import RoadMapSection from 'components/roadMapSection/RoadMapSection';
// import FeedbackSection from 'components/feedbackSection/FeedbackSection';
import GuaranteeSection from 'components/guaranteeSection/GuaranteeSection';
import WithCoachSection from 'components/withCoachSection/WithCoachSection';
// import PriceSection from 'components/priceSection/PriceSection';
import ImportantResultsSection from 'components/importantResultsSection/ImportantResultsSection';
import InLiveSection from 'components/inLiveSection/InLiveSection';
import SignUpSection from 'components/signUpSection/SignUpSection';
// import ContactSection from 'components/contactSection/ContactSection';
// import Form from 'components/form/Form';
import BeBetterToday from 'components/beBetterToday/BeBetterToday';
import MyFormulaSection from 'components/myFormulaSection/MyFormulaSection';
// import StoriesSection from 'components/storiesSection/StoriesSection';
// import Scripts from 'components/scripts/Scripts';

const Scripts = loadable(() => import('components/scripts/Scripts'));
// const LazyLayout = loadable(() => import('components/Layout'));
// const LazyHero = loadable(() => import('components/hero/Hero'));
// const LazyAboutSection = loadable(() =>
//   import('components/aboutSection/AboutSection'),
// );
// const LazyRoadMapSection = loadable(() =>
//   import('components/roadMapSection/RoadMapSection'),
// );
const FeedbackSection = loadable(() =>
  import('components/feedbackSection/FeedbackSection'),
);
// const LazyGuaranteeSection = loadable(() =>
//   import('components/guaranteeSection/GuaranteeSection'),
// );
// const LazyWithCoachSection = loadable(() =>
//   import('components/withCoachSection/WithCoachSection'),
// );
const PriceSection = loadable(() =>
  import('components/priceSection/PriceSection'),
);
// const LazyImportantResultsSection = loadable(() =>
//   import('components/importantResultsSection/ImportantResultsSection'),
// );
const StoriesSection = loadable(() =>
  import('components/storiesSection/StoriesSection'),
);
// const LazyInLiveSection = loadable(() =>
//   import('components/inLiveSection/InLiveSection'),
// );
// const LazySignUpSection = loadable(() =>
//   import('components/signUpSection/SignUpSection'),
// );
const ContactSection = loadable(() =>
  import('components/contactSection/ContactSection'),
);
const Form = loadable(() => import('components/form/Form'));
// const LazyBeBetterToday = loadable(() =>
//   import('components/beBetterToday/BeBetterToday'),
// );
// const LazyMyFormulaSection = loadable(() =>
//   import('components/myFormulaSection/MyFormulaSection'),
// );

const IndexPage = ({ data }) => {
  const { t } = useTranslation();

  const button = t('button', { returnObjects: true });
  const seo = t('seo', { returnObjects: true });

  const { charity, sale, cost } = data.content.frontmatter;

  return (
    <>
      <Scripts />
      <Seo
        title={seo.title}
        description={seo.description}
        lang={data.locales.edges[0].node.language}
      />
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
        <Toaster position="top-right" reverseOrder={false} />
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
