import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import ImageWrapper from './ImageWrapper';
import List from '../reusable/List';
import TextContainer from 'components/reusable/TextContainer';

const About = () => {
  const { t, i18n } = useTranslation();
  const about = t('about', { returnObjects: true });

  const data = useStaticQuery(graphql`
    query {
      photo1: mdx(id: { eq: "0f40f8c6-f891-537e-b6bb-d1ed0d672592" }) {
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
      photo2: mdx(id: { eq: "ae724ba2-4b72-581b-841d-008c9ff96a21" }) {
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
    }
  `); //в запросе вытянула фото пока через id  нужно поменять структуру на админке тогда изменю

  const imageData1 = data.photo1.cloudinaryImg.childImageSharp.gatsbyImageData;
  const imageAlt1 = data.photo1.frontmatter[i18n.language];
  const imageData2 = data.photo2.cloudinaryImg.childImageSharp.gatsbyImageData;
  const imageAlt2 = data.photo2.frontmatter[i18n.language];
  return (
    <section id="#about" className="my-10 md:my-20 lg:my-32   ">
      <div className="lg:flex lg:flex-row-reverse lg:justify-between">
        <div className="flex justify-end lg:block">
          <ImageWrapper imageData={imageData1} imageAlt={imageAlt1} />
        </div>
        <div className=" mt-5 lg:mt-0 ml-5 lg:w-2/4 md:ml-10 md:mr-5 lg:ml-20 lg:mr-10">
          <TextContainer title={about.title} text={about.text} />
        </div>
      </div>
      <div className=" mt-5 md:flex md:flex-row md:mt-10 lg:mt-20">
        <ImageWrapper imageData={imageData2} imageAlt={imageAlt2} />
        <div className="lg:ml-28 ml-5 mr-5 md:mr-10 lg:mr-20 lg:block ">
          <h3 className="mb-5 mt-5 md:mt-0 lg:mt-0 lg:mb-12 text-xl lg:text-3xl text-orange-400 font-semibold">
            {about.caption}
          </h3>
          <List items={about.items} />
        </div>
      </div>
    </section>
  );
};

export default About;
