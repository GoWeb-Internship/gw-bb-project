import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import loadable from '@loadable/component';
import Section from 'components/reusable/Section';
// import Background from 'components/reusable/Background';
import ImageContent from 'components/reusable/ImageContent';
import TextContainer from 'components/reusable/TextContainer';

const Background = loadable(() => import('components/reusable/Background'));

const WithCoachSection = () => {
  const { t, i18n } = useTranslation();
  const withCoach = t('withCoach', { returnObjects: true });
  const data = useStaticQuery(graphql`
    query {
      background: file(name: { eq: "fon-with-coach-2" }) {
        id
        publicURL
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
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
      <Background imageData={data.background} objectPosition="center" />
      <div className="relative w-screen mx-auto pt-10 md:w-[768px] md:py-[80px] lg:w-[1440px] lg:pt-[124px] lg:pb-[98px] lg:flex lg:flex-row lg:justify-between">
        <TextContainer
          title={withCoach.title}
          text={withCoach.text}
          titlePosition="text-center lg:text-start"
          className="max-w-[480px] mx-auto px-[20px] md:px-[35px] mb-[64px] md:max-w-[720px] lg:max-w-full lg:mt-0 lg:w-3/5 lg:pl-20 lg:mr-[149px] lg:mb-0 lg:mx-0"
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
