import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import Section from '../reusable/Section';
import Background from '../reusable/Background';
import ImageWrapper from './ImageWrapper';
import TextContainer from 'components/reusable/TextContainer';

const WithCoachSection = () => {
  const { t, i18n } = useTranslation();
  const withCoach = t('withCoach', { returnObjects: true });
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "fon-with-coach" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData
        }
      }
      photo: mdx(frontmatter: { title: { eq: "coach" } }) {
        cloudinaryImg {
          childImageSharp {
            gatsbyImageData(width: 600)
          }
        }
        frontmatter {
          en
          ru
          uk
        }
      }
    }
  `);

  const imageData = data.photo.cloudinaryImg.childImageSharp.gatsbyImageData;
  const imageAlt = data.photo.frontmatter[i18n.language];

  return (
    <Section>
      <Background imageData={data} />
      <div className="relative w-screen mx-auto pl-5 md:w-[768px] md:pl-10 lg:w-[1440px] lg:pl-20 lg:pt-[124px] lg:pb-[98px]">
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div className="flex justify-end lg:block">
            <ImageWrapper
              imageData={imageData}
              imageAlt={imageAlt}
              rounded="rounded-l-[20px]"
            />
          </div>
          <div className=" mt-5 lg:mt-0 ml-5 lg:w-2/4 md:ml-10 md:mr-5 lg:ml-20 lg:mr-10">
            <TextContainer title={withCoach.title} text={withCoach.text} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WithCoachSection;
