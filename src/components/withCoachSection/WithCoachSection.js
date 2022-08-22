import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import Section from 'components/reusable/Section';
import Background2 from 'components/reusable/Background2';
import ImageContent from 'components/reusable/ImageContent';
import TextContainer from 'components/reusable/TextContainer';

const WithCoachSection = () => {
  const { t, i18n } = useTranslation();
  const withCoach = t('withCoach', { returnObjects: true });
  const data = useStaticQuery(graphql`
    query {
      background: file(name: { eq: "fon-with-coach-2" }) {
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
            gatsbyImageData(width: 768)
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
      <Background2 imageData={data.background} objectPosition="center" />
      <div className="relative w-screen mx-auto pt-10 md:w-[768px] lg:w-[1440px] lg:pt-[124px] lg:pb-[98px] lg:flex lg:flex-row lg:justify-between">
        <TextContainer
          title={withCoach.title}
          text={withCoach.text}
          titlePosition="text-center lg:text-start"
          className="max-w-sm(384px) px-[20px] md:px-[35px] mb-[64px] lg:mt-0 lg:w-3/5 lg:pl-20 lg:mr-[149px]"
        />
        <ImageContent
          imageData={imageData}
          imageAlt={imageAlt}
          className="lg:rounded-l-[20px]"
          imgClassName="md:object-top lg:object-center"
          width="lg:w-[520px]"
          height=" md:h-[522px] lg:w-[518px]"
        />
      </div>
    </Section>
  );
};

export default WithCoachSection;
