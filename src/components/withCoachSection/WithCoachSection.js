import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Section from '../reusable/Section';
import Background from '../reusable/Background';

const WithCoachSection = () => {
  const imageData = useStaticQuery(graphql`
    query {
      file(name: { eq: "fon-with-coach" }) {
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
      <Background imageData={imageData} />
      <div className="relative w-screen mx-auto pl-5 md:w-[768px] md:pl-10 lg:w-[1440px] lg:pl-20 lg:pt-[124px] lg:pb-[98px]">
        <p className="text-neutral-700 text-bbBase">hello</p>
      </div>
    </Section>
  );
};

export default WithCoachSection;
