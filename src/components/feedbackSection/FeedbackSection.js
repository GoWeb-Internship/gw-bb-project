import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Section from 'components/reusable/Section';
import Container from 'components/reusable/Container';
import FeedbackList from './FeedbackList';
import Background from 'components/reusable/Background';

// import PropTypes from 'prop-types'

const normalizeContentData = (content, images) => {
  return content.map((item, id) => ({
    ...item,
    ...images[id].cloudinaryImg.childrenImageSharp[0],
  }));
};

const FeedbackSection = () => {
  const { content, images, background } = useStaticQuery(graphql`
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
        }
      }
      images: allMdx(
        filter: { frontmatter: { fieldIdName: { eq: "feedbacks" } } }
      ) {
        nodes {
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

  const normalizedData = normalizeContentData(content.nodes, images.nodes);

  const { t } = useTranslation();
  return (
    <Section id={'reviews'}>
      <Background imageData={background} />
      <Container className="gradient2 pt-[124px] pb-[130px]">
        <h2 className="text-center lg:mb-[48px]">{t('feedbacksTitle')}</h2>
        <FeedbackList data={normalizedData} />
      </Container>
    </Section>
  );
};

export default FeedbackSection;
