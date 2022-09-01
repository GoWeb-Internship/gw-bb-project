import Container from 'components/reusable/Container';
import Section from 'components/reusable/Section';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
import StoriesList from './StoriesList';
// import PropTypes from 'prop-types';

const StoriesSection = () => {
  const { content } = useStaticQuery(graphql`
    query {
      content: allMdx(
        filter: { frontmatter: { fieldIdName: { eq: "stories" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            ukName
            ruName
            uk
            ru
            en
            enName
          }
          id
        }
      }
    }
  `);

  const { t } = useTranslation();

  return (
    <Section className="gradient1">
      <Container className="max-w-[460px] pt-11 pb-[72px] md:max-w-full md:py-[80px] lg:pt-[124px] lg:pb-[130px]">
        <h2 className="text-center mb-8 md:mb-[48px] lg:mb-[56px]">
          {t('storiesTitle')}
        </h2>
        <StoriesList data={content.nodes} />
      </Container>
    </Section>
  );
};

export default StoriesSection;
