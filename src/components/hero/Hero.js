import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
import Modal from 'components/reusable/Modal';
import ModalLeft from 'components/modalValue/ModalLeft';

const Hero = ({ saleText = '', cost = '' }) => {
  const { t, i18n } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const imageData = useStaticQuery(graphql`
    query MyQueryHero {
      bg: file(name: { eq: "hero-1" }) {
        id
        publicURL
        childImageSharp {
          id
          gatsbyImageData
        }
      }
      bgForm: file(name: { eq: "fon-form1" }) {
        childImageSharp {
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
    <Section id={'home'}>
      <Background imageData={imageData.bg} />
      <Container>
        <div className="pt-[174px] pb-10 font-main">
          <div className="flex justify-between items-start">
            <div className="">
              <HeroDataTitle heroTitle={heroTitle} />
              <Button
                onClick={handleModalOpen}
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
      <Modal isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
        <ModalLeft
          bg={imageData.bgForm}
          place="section Hero"
          saleText={saleText}
          cost={cost}
        />
      </Modal>
    </Section>
  );
};

Hero.propTypes = {
  saleText: PropTypes.string,
};
export default Hero;
