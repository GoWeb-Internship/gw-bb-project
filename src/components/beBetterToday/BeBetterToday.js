import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';

import Section from '../reusable/Section';
import Background from '../reusable/Background';
import Container from '../reusable/Container';
import List from 'components/reusable/List';

const BeBetterToday = () => {
  const { t } = useTranslation();
  const beBetterToday = t('beBetterToday', {
    returnObjects: true,
  });

  const imageData = useStaticQuery(graphql`
    query {
      bg: file(name: { eq: "fon-be-better-today-2" }) {
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
        <div className="lg:pt-[124px] lg:pb-[68px]">
          <h2 className="text-orange-400 pb-[46px]">
            {beBetterToday.title}
            <span className="block">{beBetterToday.subTitle}</span>
          </h2>
          <p className="text-neutral-600 font-bold leading-10 mb-2">
            {beBetterToday.textSupItems}:
          </p>
          <List items={beBetterToday.items} />
          <p className="text-neutral-600 font-bold leading-10 mt-3">
            {beBetterToday.textSubItems}
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default BeBetterToday;
