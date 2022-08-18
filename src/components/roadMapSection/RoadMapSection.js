import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Section from '../reusable/Section';
import Background from '../reusable/Background';
import Container from '../reusable/Container';
import RoadMapList from './RoadMapList';

const RoadMapSection = ({ title = '' }) => {
  const { background, roadMapList } = useStaticQuery(graphql`
    query RoadMapList {
      background: file(name: { eq: "road-map-1" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData
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
          {title}
        </h2>
        {roadMapList.nodes.length ? (
          <RoadMapList listData={roadMapList.nodes} />
        ) : null}
      </Container>
    </Section>
  );
};

RoadMapSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default RoadMapSection;
