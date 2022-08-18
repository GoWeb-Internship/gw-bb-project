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
            gatsbyImageData(width: 700)
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
            gatsbyImageData(width: 700)
          }
        }
        frontmatter {
          en
          ru
          uk
        }
      }
      background: file(name: { eq: "about" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  const imageData1 = data.photo1.cloudinaryImg.childImageSharp.gatsbyImageData;
  const imageAlt1 = data.photo1.frontmatter[i18n.language];
  const imageData2 = data.photo2.cloudinaryImg.childImageSharp.gatsbyImageData;
  const imageAlt2 = data.photo2.frontmatter[i18n.language];
  return (
    <Section id="about">
      <Background imageData={data.background} />
      <div className="relative w-screen mx-auto py-10 md:py-20 lg:py-32 md:w-[768px] lg:w-[1440px]">
        <div className="lg:flex lg:flex-row lg:justify-between">
          <TextContainer
            title={about.title}
            text={about.text}
            className=" mb-5 lg:mb-0 ml-5 lg:w-2/4 md:ml-10 md:mr-5 lg:ml-20 lg:mr-[90px]"
          />

          <div className="flex justify-end lg:block">
            <ImageContent
              imageData={imageData1}
              imageAlt={imageAlt1}
              rounded="lg:rounded-l-[20px]"
            />
          </div>
        </div>
        <div className=" mt-5 md:inline-flex md:flex-row-reverse md:mt-10 lg:mt-20">
          <div className="lg:ml-28 ml-5 mr-5 md:mr-10 lg:mr-20 lg:block ">
            <h2 className="mb-5 mt-5 md:mt-0 lg:mt-0 lg:mb-10 font-heads text-xl lg:text-bb3237 text-orange-400 font-medium">
              {about.caption}
            </h2>
            <List items={about.items} />
          </div>
          <ImageContent
            imageData={imageData2}
            imageAlt={imageAlt2}
            rounded="lg:rounded-r-[20px]"
            height="lg:h-[309px]"
          />
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
