import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import loadable from '@loadable/component';

import Section from '../reusable/Section';
// import Background from 'components/reusable/Background';
import Container from '../reusable/Container';
import ImportantResultsList from './ImportantResultsList';

const Background = loadable(() => import('components/reusable/Background'));

const ImportantResultsSection = () => {
  const { t } = useTranslation();
  const importantResul = t('importantResultsSection', {
    returnObjects: true,
  });

  const imageData = useStaticQuery(graphql`
    query {
      bg: file(name: { eq: "fon-six-main-results" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData
        }
      }
    }
  `);

  return (
    <Section>
      <Background imageData={imageData.bg} />
      <Container className="max-w-[490px] md:max-w-[720px] lg:max-w-full">
        <div className="pt-9 pb-[72px] md:py-20 lg:pt-[104px] lg:pb-[90px]">
          <h2 className="text-center mx-auto mb-6 md:mb-12 lg:mb-14">
            {importantResul.title}
          </h2>
          <ImportantResultsList data={importantResul} />
        </div>
      </Container>
    </Section>
  );
};

export default ImportantResultsSection;
