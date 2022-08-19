import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';

import Section from '../reusable/Section';
import Background from '../reusable/Background';
import Container from '../reusable/Container';
import ImportantResultsList from './ImportantResultsList';

const ImportantResultsSection = () => {
  const { t } = useTranslation();
  const importantResul = t('importantResultsSection', {
    returnObjects: true,
  });

  const imageData = useStaticQuery(graphql`
    query {
      bg: file(name: { eq: "fon-six-main-results-2" }) {
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
      <Container>
        <div className="lg:pt-[104px] lg:pb-[90px] md:py-20">
          <h2 className="text-center mx-auto lg:mb-14 md:mb-12">
            {importantResul.title}
          </h2>
          <ImportantResultsList data={importantResul} />
        </div>
      </Container>
    </Section>
  );
};

export default ImportantResultsSection;
