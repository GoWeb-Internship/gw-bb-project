import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Section from '../reusable/Section';
import Background from '../reusable/Background';
import Container from '../reusable/Container';
import RoadMapList from './RoadMapList';

const RoadMapSection = () => {
  const { i18n } = useTranslation();
  const { background, title, roadMapList } = useStaticQuery(graphql`
    query RoadMapList {
      background: file(name: { eq: "road-map" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData
        }
      }
      title: mdx(frontmatter: { fieldIdName: { eq: "road-map" } }) {
        frontmatter {
          ru
          uk
          en
        }
      }
      roadMapList: allMdx(
        filter: { frontmatter: { fieldIdName: { eq: "road-map-step" } } }
      ) {
        nodes {
          frontmatter {
            ru
            uk
            en
          }
        }
      }
    }
  `);

  return (
    <Section>
      <Background imageData={background} />
      <Container className="lg:pt-[124px] lg:pb-[133px]">
        <h2 className="text-center mx-auto lg:max-w-[920px] lg:mb-[48px]">
          {title.frontmatter[i18n.language]}
        </h2>
        {roadMapList.nodes.length ? (
          <RoadMapList listData={roadMapList.nodes} />
        ) : null}
      </Container>
    </Section>
  );
};

export default RoadMapSection;