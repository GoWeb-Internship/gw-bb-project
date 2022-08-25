import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Section from '../reusable/Section';
import Container from '../reusable/Container';
import RoadMapList from './RoadMapList';
import Background2 from 'components/reusable/Background2';
import { useTranslation } from 'react-i18next';

const RoadMapSection = () => {
  const { t } = useTranslation();
  const { background } = useStaticQuery(graphql`
    query RoadMapList {
      background: file(name: { eq: "road-map" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData
        }
      }
    }
  `);

  const { title, list } = t('roadMapSection', { returnObjects: true });

  return (
    <Section>
      <Background2 imageData={background} />
      <Container className="pt-9 pb-[72px] md:pt-20 md:pb-20 lg:pt-[124px] lg:pb-[133px]">
        <h2 className="text-center mx-auto text-bb2830 mb-6 md:max-w-[700px] md:mb-[48px] lg:max-w-[920px]">
          {title}
        </h2>
        {list.length ? <RoadMapList listData={list} /> : null}
      </Container>
    </Section>
  );
};

export default RoadMapSection;
