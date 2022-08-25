import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Container from 'components/reusable/Container';
import Logo from 'components/header/Logo';
import Button from 'components/reusable/Button';
import { fullSocial } from 'data/social/social';
import FooterNavigation from './FooterNavigation';
import { graphql, useStaticQuery } from 'gatsby';
import Modal from 'components/reusable/Modal';
import ModalRight from 'components/modalValue/ModalRight';
import SocialIconsList from 'components/reusable/SocialIconsList';
import { useContext } from 'react';
import { PageFormatContext } from 'context/PageFormatContext';

const Footer = ({ saleText = '', charity = '', cost = '' }) => {
  const { t, i18n } = useTranslation();
  const button = t('button', { returnObjects: true });
  const footer = t('footer', { returnObjects: true });
  const sale = t('modalLeft', { returnObjects: true });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pageFormat = useContext(PageFormatContext);

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
    <footer className="max-w-[1440px] bg-neutral-600 mx-auto my-0 pt-11 pb-16 md:pb-[50px] md:pt-20 ">
      <Container>
        <div className="flex justify-between mx-auto mb-5 md:justify-start md:items-center md:mb-6 lg:mb-0 lg:mx-0 lg:justify-between">
          <Logo onFooter />

          <FooterNavigation
            navConfig={footer.nav}
            navPubl={footer.navPubl}
            lang={i18n.language}
            className="pt-5 md:pt-0 md:ml-[86px] lg:ml-0 lg:flex"
          />
          {pageFormat && pageFormat === 'desktop' && (
            <SocialIconsList
              data={fullSocial}
              language={i18n.language}
              className="mx-auto mb-5 md:absolute md:top-0 md:right-9 lg:static lg:mb-0 lg:mx-0"
              vertical={pageFormat === 'tablet'}
            />
          )}
        </div>
        {pageFormat && pageFormat !== 'desktop' && (
          <SocialIconsList
            data={fullSocial}
            language={i18n.language}
            className="mx-auto mb-5 md:absolute md:top-0 md:right-9 lg:static lg:mb-0 lg:mx-0"
            vertical={pageFormat === 'tablet'}
          />
        )}

        <p className="text-bb1222 font-bold md:text-bb2040 mx-auto mb-6 md:mb-2 text-center md:tracking-normal md:w-[548px] lg:tracking-[0.02em] lg:w-full">
          {sale.text}
          <span className="inline-block text-cyan-500 mx-1">{saleText}</span>
          {sale.text2}
        </p>
        <p className="text-bb1222 font-bold  mx-auto mb-6 md:mb-8 text-center md:text-bb1625 md:tracking-normal md:w-[548px] lg:tracking-[0.02em] lg:w-full">
          *{cost}
        </p>
        <Button
          onClick={handleModalOpen}
          className="bg-cyan-500 w-[280px] hover:bg-cyan-600 mx-auto py-4 rounded-xl font-bold leading-6 text-bb2040 md:w-[410px] lg:mb-[70px]"
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
