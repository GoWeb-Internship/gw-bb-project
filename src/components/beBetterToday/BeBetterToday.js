import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';

import Section from '../reusable/Section';
import Background2 from 'components/reusable/Background2';
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
      <Background2 imageData={imageData.bg} />
      <Container>
        <div className="pt-9 pb-[72px] md:py-20 lg:pt-[124px] lg:pb-[68px]">
          <h2 className="text-orange-400 mb-6 md:mb-[46px] md:text-center lg:text-start">
            {beBetterToday.title}
            <span className="block">{beBetterToday.subTitle}</span>
          </h2>
          <p className="text-neutral-600 text-[14px] font-bold leading-10 mb-2 md:text-[20px] ">
            {beBetterToday.textSupItems}:
          </p>
          <List items={beBetterToday.items} />
          <p className="text-neutral-600 font-bold text-[14px] leading-[22px] md:text-[20px] md:leading-10 mt-3 md:mt-5 md:text-center lg:text-start lg:mt-3">
            {beBetterToday.textSubItems}
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default BeBetterToday;
