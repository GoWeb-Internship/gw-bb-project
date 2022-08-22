import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Button from 'components/reusable/Button';
import SocialGroup from 'components/reusable/SocialGroup';
import { fullSocial } from 'data/social/social';
import Section from '../reusable/Section';
// import Background from '../reusable/Background';
import Background2 from 'components/reusable/Background2';
import Container from '../reusable/Container';
import HeroDataTitle from './HeroDataTitle';
import HeroListExperiences from './HeroListExperiences';
import HeroDataList from './HeroDataList';
import Modal from 'components/reusable/Modal';
import ModalLeft from 'components/modalValue/ModalLeft';
import SocialIcon from 'components/reusable/SocialIcon';
//
import { PageFormatContext } from 'context/PageFormatContext';

const Hero = ({ saleText = '', cost = '' }) => {
  const pageFormat = useContext(PageFormatContext);
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
      bg: file(name: { eq: "test" }) {
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
      {/* <Background imageData={imageData.bg} /> */}
      <Background2 imageData={imageData.bg} />
      <Container>
        <div className="pt-[128px] pb-[70px] md:pt-[156px] md:pb-2 lg:pt-[174px] lg:pb-10 font-main">
          <div className="md:flex justify-between items-start mb-[50px] md:mb-[54px] lg:mb-[94px]">
            <div className="mb-20 md:mb-0">
              <HeroDataTitle heroTitle={heroTitle} />
              <Button
                onClick={handleModalOpen}
                type="button"
                className="min-w-[280px] bg-orange-400 rounded-xl py-4 md:w-[410px] text-xl leading-6 transition-colors duration-200 hover:bg-orange-500 focus:bg-orange-500"
              >
                {button.textBigButton}
              </Button>
            </div>
            {pageFormat === 'mobile' ? (
              <SocialIcon data={fullSocial} language={i18n.language} />
            ) : (
              <SocialGroup data={fullSocial} language={i18n.language} />
            )}
            {/* <SocialGroup data={fullSocial} language={i18n.language} /> */}
          </div>
          <HeroDataList heroDataList={heroList} />
          <HeroListExperiences experience={experience} />
        </div>
      </Container>
      {/* <HeroDataList />
      <HeroListExperiences /> */}
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
