import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Section from '../reusable/Section';
import Container from '../reusable/Container';
import RoadMapList from './RoadMapList';
import Background2 from 'components/reusable/Background2';

const RoadMapSection = ({ title = '' }) => {
  const { background, roadMapList } = useStaticQuery(graphql`
    query RoadMapList {
      background: file(name: { eq: "road-map-tablet" }) {
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
      <Background2 imageData={background} />
      <Container className="pt-9 pb-[72px] md:pt-20 md:pb-20 lg:pt-[124px] lg:pb-[133px]">
        <h2 className="text-center mx-auto text-bb2830 mb-6 md:max-w-[700px] md:mb-[48px] lg:max-w-[920px]">
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
