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
    <Section>
      <Container className="gradient1 pt-[124px] pb-[130px]">
        <h2 className="text-center lg:mb-[56px]">{t('storiesTitle')}</h2>
        <StoriesList data={content.nodes} />
      </Container>
    </Section>
  );
};

export default StoriesSection;
