import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import ImageWrapper from './ImageWrapper';
import List from '../reusable/List';
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
      file(name: { eq: "fon-about" }) {
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
      <Background imageData={data} />
      <div className="relative w-screen mx-auto py-10 md:py-20 lg:py-32 md:w-[768px] lg:w-[1440px]">
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div className=" mt-5 lg:mt-0 ml-5 lg:w-2/4 md:ml-10 md:mr-5 lg:ml-20 lg:mr-10">
            <TextContainer title={about.title} text={about.text} />
          </div>
          <div className="flex justify-end lg:block">
            <ImageWrapper
              imageData={imageData1}
              imageAlt={imageAlt1}
              rounded="rounded-l-[20px]"
            />
          </div>
        </div>
        <div className=" mt-5 md:inline-flex md:flex-row md:mt-10 lg:mt-20">
          <ImageWrapper
            imageData={imageData2}
            imageAlt={imageAlt2}
            rounded="rounded-r-[20px]"
          />
          <div className="lg:ml-28 ml-5 mr-5 md:mr-10 lg:mr-20 lg:block ">
            <h3 className="mb-5 mt-5 md:mt-0 lg:mt-0 lg:mb-12 text-xl lg:text-3xl text-orange-400 font-semibold">
              {about.caption}
            </h3>
            <List items={about.items} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
