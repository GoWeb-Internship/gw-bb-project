import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import ImageContent from 'components/reusable/ImageContent';
import List from 'components/reusable/List';
import TextContainer from 'components/reusable/TextContainer';
import Section from 'components/reusable/Section';
import Background from 'components/reusable/Background';

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const about = t('about', { returnObjects: true });

  const data = useStaticQuery(graphql`
    query {
      photo1: mdx(frontmatter: { title: { eq: "about1" } }) {
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
      photo2: mdx(frontmatter: { title: { eq: "about2" } }) {
        cloudinaryImg {
          childImageSharp {
            gatsbyImageData
          }
        }
        frontmatter {
          en
          ru
          uk
        }
      }
      background: file(name: { eq: "about-1" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);

  const imageData1 =
    data.photo1?.cloudinaryImg.childImageSharp.gatsbyImageData ?? {};
  const imageAlt1 = data.photo1?.frontmatter[i18n.language];
  const imageData2 =
    data.photo2?.cloudinaryImg.childImageSharp.gatsbyImageData ?? {};
  const imageAlt2 = data.photo2?.frontmatter[i18n.language];

  return (
    <Section id="about">
      <Background imageData={data.background} />
      <div className="relative w-screen mx-auto pt-10 md:pt-[48px] md:pb-[34px] lg:py-32 md:w-[768px] lg:w-[1440px]">
        <div className="lg:flex lg:flex-row lg:justify-between">
          <TextContainer
            title={about.title}
            text={about.text}
            titlePosition="text-center lg:text-start"
            className="max-w-[480px] mb-11 px-[20px] mx-auto md:px-[35px] md:max-w-[720px] lg:max-w-full lg:mx-0 lg:mb-0 lg:w-2/4 lg:pl-20 lg:pr-0 lg:mr-[90px]"
          />

          <div className="lg:block">
            <ImageContent
              imageData={imageData1}
              imageAlt={imageAlt1}
              className="lg:rounded-l-[20px]"
              height="h-[320px] md:h-[437px] lg:h-full"
            />
          </div>
        </div>
        <div className=" mt-5 lg:inline-flex lg:flex-row-reverse md:mt-8 lg:mt-20">
          <div className="max-w-[460px] md:max-w-[700px] md:w-[534px] px-5 mb-[52px] md:mb-[22px] mx-auto lg:max-w-full lg:mx-0 lg:mb-0 lg:ml-28 lg:px-0 lg:block">
            <h3 className="mb-4 mt-9 text-center font-heads text-bb2225 md:mt-0 md:text-bb3237 md:mb-5 lg:text-start text-orange-400 font-medium">
              {about.caption}
            </h3>
            <List items={about.items} />
          </div>
          <ImageContent
            imageData={imageData2}
            imageAlt={imageAlt2}
            className="lg:rounded-r-[20px]"
            width="lg:w-[701px]"
            height="h-[320px] lg:h-[309px]"
          />
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
