import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Button from 'components/reusable/Button';
import SocialGroup from 'components/reusable/SocialGroup';
import { fullSocial } from 'data/social/social';

import Section from '../reusable/Section';
import Background from '../reusable/Background';
import Container from '../reusable/Container';

import HeroDataTitle from './HeroDataTitle';
import HeroListExperiences from './HeroListExperiences';
import HeroDataList from './HeroDataList';

const Hero = ({ data = [] }) => {
  const { t, i18n } = useTranslation();

  const imageData = useStaticQuery(graphql`
    query MyQueryHero {
      bg: file(name: { eq: "hero" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData
        }
      }
    }
  `);

  const button = t('button', { returnObjects: true });
  const experience = t('heroExpirience', { returnObjects: true });
  const heroList = t('heroListBlock', { returnObjects: true });
  const heroTitle = t('heroTitle', { returnObjects: true });

  return (
    <Section>
      <Background imageData={imageData.bg} />
      <Container>
        <div className="pt-[174px] pb-10 font-main">
          <div className="flex justify-between items-start">
            <div className="">
              <HeroDataTitle heroTitle={heroTitle} />
              <Button
                type="button"
                className="bg-orange-400 rounded-xl py-4 px-[100px] text-xl leading-6 transition-colors duration-200 hover:bg-orange-500 focus:bg-orange-500"
              >
                {button.textBigButton}
              </Button>
            </div>
            <SocialGroup data={fullSocial} language={i18n.language} />
          </div>
          <HeroDataList heroDataList={heroList} />
          <HeroListExperiences experience={experience} />
        </div>
      </Container>
    </Section>
  );
};
export default Hero;
