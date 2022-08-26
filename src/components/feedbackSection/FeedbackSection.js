import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Section from 'components/reusable/Section';
import Container from 'components/reusable/Container';
import FeedbackList from './FeedbackList';
import Background2 from 'components/reusable/Background2';

// import PropTypes from 'prop-types'

const normalizeContentData = content => {
  return content.map(({ frontmatter, cloudinaryImg, id }) => {
    const data = {
      content: frontmatter,
      imageData: cloudinaryImg.childrenImageSharp[0].gatsbyImageData,
      id,
    };
    return data;
  });
};

const FeedbackSection = () => {
  const { content, background } = useStaticQuery(graphql`
    query {
      content: allMdx(
        filter: { frontmatter: { fieldIdName: { eq: "feedbacks" } } }
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
            imageUrl
          }
          id
          cloudinaryImg {
            childrenImageSharp {
              gatsbyImageData(width: 60, aspectRatio: 1)
            }
          }
        }
      }
      background: file(name: { eq: "bg-feedback" }) {
        childImageSharp {
          id
          gatsbyImageData
        }
      }
    }
  `);

  const normalizedData = normalizeContentData(content.nodes);

  const { t } = useTranslation();
  return (
    <Section id={'reviews'} className="gradient2">
      <Background2 imageData={background} />
      <Container className="pt-11 pb-[72px] md:py-[80px] lg:pt-[124px] lg:pb-[130px]">
        <h2 className="text-center mb-8 md:mb-[48px]">{t('feedbacksTitle')}</h2>
        <FeedbackList data={normalizedData} />
      </Container>
    </Section>
  );
};

export default FeedbackSection;
