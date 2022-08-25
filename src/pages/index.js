import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from 'components/Layout';
import Seo2 from 'components/Seo2';
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

  const { charity, sale, cost } = data.content.frontmatter;

  return (
    <Layout saleText={sale} cost={cost} charity={charity}>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W4T6PP6"
          height="0"
          width="0"
          title="googletagmanager"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
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

      <script
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '5209032532528271'); fbq('track', 'PageView')`,
        }}
      />

      <script type="text/javascript">
        <img
          height="1"
          width="1"
          style={{
            display: 'none',
          }}
          src="https://www.facebook.com/tr?id=5209032532528271&ev=PageView&noscript=1"
          alt=""
        />
      </script>

      <script
        dangerouslySetInnerHTML={{
          __html: `(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-W4T6PP6');
fbq('track', 'PageView');`,
        }}
      />
    </Layout>
  );
};

export const Head = () => <Seo2 title="Home" />;

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
