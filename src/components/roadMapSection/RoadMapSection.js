import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Section from '../reusable/Section';
import Background from '../reusable/Background';
import Container from '../reusable/Container';
import RoadMapList from './RoadMapList';

const RoadMapSection = () => {
  const { t } = useTranslation();
  const imageData = useStaticQuery(graphql`
    query MyQuery {
      file(name: { eq: "road-map" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData
        }
      }
    }
  `);

  const data = t('roadMapSection', { returnObjects: true });

  return (
    <Section>
      <Background imageData={imageData} />
      <Container className="lg:pt-[124px] lg:pb-[142px]">
        <h2 className="text-bbTitle1 max-w-[920px] text-center mx-auto lg:mb-[62px]">
          {data.title}
        </h2>
        {data.list.length ? <RoadMapList listData={data.list} /> : null}
      </Container>
    </Section>
  );
};

export default RoadMapSection;
