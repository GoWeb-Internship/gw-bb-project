import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import ImageWrapper from './ImageWrapper';
import List from '../reusable/List';
import TextContainer from 'components/reusable/TextContainer';

const About = () => {
  const { t } = useTranslation();
  const about = t('about', { returnObjects: true });
  return (
    <section
      id="#about"
      className="my-10 md:my-20 lg:my-32 mx-5 md:mx-10 lg:mx-20"
    >
      <div className="md:flex md:flex-row-reverse">
        <ImageWrapper imageData="" imageAlt="" />
        <TextContainer title={about.title} text={about.text} />
      </div>
      <div>
        <ImageWrapper imageData="" imageAlt="" />
        <div className="md:flex md:flex-row">
          <h3 className="mb-5 lg:mb-12">{about.caption}</h3>
          <List items={about.items} />
        </div>
      </div>
    </section>
  );
};

export default About;
