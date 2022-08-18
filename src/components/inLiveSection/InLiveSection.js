import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import ImageContent from 'components/reusable/ImageContent';
import TextContainer from 'components/reusable/TextContainer';
import Section from 'components/reusable/Section';
import Background from 'components/reusable/Background';

const InLiveSection = () => {
  const { t, i18n } = useTranslation();
  const inLive = t('inLive', { returnObjects: true });

  const data = useStaticQuery(graphql`
    query {
      photo: mdx(frontmatter: { title: { eq: "onBeach" } }) {
        cloudinaryImg {
          childImageSharp {
            gatsbyImageData(width: 700)
          }
        }
        frontmatter {
          en
          ru
          uk
        }
      }
      background: file(name: { eq: "fon-in-live" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  const imageData = data.photo.cloudinaryImg.childImageSharp.gatsbyImageData;
  const imageAlt = data.photo.frontmatter[i18n.language];
  return (
    <Section>
      <Background imageData={data.background} />
      <div className="relative w-screen mx-auto md:w-[768px] lg:w-[1440px] lg:pt-[124px] lg:pb-[126px]">
        <div className="lg:flex lg:flex-row-reverse lg:justify-between">
          <TextContainer
            title={inLive.title}
            text={inLive.text}
            className="mt-5 pl-5 md:pl-0 md:ml-10 md:pr-5 lg:ml-[41px] lg:pr-[85px] lg:mt-0 lg:w-2/4"
          />
          <ImageContent
            imageData={imageData}
            imageAlt={imageAlt}
            rounded="lg:rounded-r-[20px]"
            width="w-[700px]"
            height="h-[790px]"
          />
        </div>
      </div>
    </Section>
  );
};

export default InLiveSection;
