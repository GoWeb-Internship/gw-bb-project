import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import Section from 'components/reusable/Section';
import Background from 'components/reusable/Background';
import ImageContent from 'components/reusable/ImageContent';
import TextContainer from 'components/reusable/TextContainer';

const WithCoachSection = () => {
  const { t, i18n } = useTranslation();
  const withCoach = t('withCoach', { returnObjects: true });
  const data = useStaticQuery(graphql`
    query {
      background: file(name: { eq: "fon-with-coach" }) {
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
      <Background imageData={data.background} />
      <div className="relative w-screen mx-auto md:w-[768px] lg:w-[1440px] lg:pt-[124px] lg:pb-[98px]">
        <div className="lg:flex lg:flex-row lg:justify-between">
          <TextContainer
            title={withCoach.title}
            text={withCoach.text}
            className="mt-5 lg:mt-0 pl-5 lg:w-3/5 md:pl-10 md:mr-5 lg:pl-20 lg:mr-[149px]"
          />
          <div className="">
            <ImageContent
              imageData={imageData}
              imageAlt={imageAlt}
              rounded="lg:rounded-l-[20px]"
              width="lg:w-[518px]"
              height="lg:w-[520px]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WithCoachSection;
