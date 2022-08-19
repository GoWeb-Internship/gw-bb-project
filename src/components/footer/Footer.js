import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Container from 'components/reusable/Container';
import Logo from 'components/header/Logo';
import Button from 'components/reusable/Button';
import { fullSocial } from 'data/social/social';
import FooterNavigation from './FooterNavigation';
import SocialIcon from 'components/reusable/SocialIcon';
import { graphql, useStaticQuery } from 'gatsby';
import Modal from 'components/reusable/Modal';
import ModalRight from 'components/modalValue/ModalRight';

const Footer = ({ saleText = '', charity = '' }) => {
  const { t, i18n } = useTranslation();
  const button = t('button', { returnObjects: true });
  const footer = t('footer', { returnObjects: true });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const data = useStaticQuery(graphql`
    query {
      bgForm: file(name: { eq: "fon-form2" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  return (
    <footer className="bg-neutral-600 mx-auto my-0 pt-11 pb-16 md:pb-[50px] md:pt-20 md:w-[768px] lg:w-[1440px]">
      <Container>
        <div className="flex  lg:items-center lg:mb-4 ">
          <div className="md: flex md:items-start">
            <Logo />
            <FooterNavigation
              navConfig={footer.nav}
              navPubl={footer.navPubl}
              className="md:ml-[86px] lg:ml-[134px] lg:mr-20 lg:flex "
            />
          </div>
          <SocialIcon data={fullSocial} language={i18n.language} />
        </div>
        <p className="font-bold leading-10 mx-auto mb-8 text-center md:tracking-normal md:w-[548px] lg:tracking-[0.02em] lg:w-full">
          {saleText}
        </p>
        <Button
          onClick={handleModalOpen}
          className="bg-cyan-500 hover:bg-cyan-600 mx-auto py-4 rounded-xl font-bold leading-6 text-bb2040 w-[410px] lg:mb-[70px]"
        >
          {button.textSmallButton}
        </Button>
        {charity && (
          <p className="hidden text-center font-bold lg:block lg:leading-6 lg:text-bb2040">
            {charity}
          </p>
        )}
      </Container>
      <Modal isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
        <ModalRight place="section footer" bg={data.bgForm} />
      </Modal>
    </footer>
  );
};

export default Footer;
