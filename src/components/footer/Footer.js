import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import loadable from '@loadable/component';
import Container from 'components/reusable/Container';
import Logo from 'components/header/Logo';
import Button from 'components/reusable/Button';
import { getSocialData } from 'data/social/social';
import FooterNavigation from './FooterNavigation';
import { graphql, useStaticQuery } from 'gatsby';
// import Modal from 'components/reusable/Modal';
import ModalRight from 'components/modalValue/ModalRight';
import SocialIconsList from 'components/reusable/SocialIconsList';
import { useContext } from 'react';
import { PageFormatContext } from 'context/PageFormatContext';

const Modal = loadable(() => import('components/reusable/Modal'));

const Footer = ({ saleText = '', charity = '', cost = '' }) => {
  const { t, i18n } = useTranslation();
  const button = t('button', { returnObjects: true });
  const footer = t('footer', { returnObjects: true });
  const sale = t('modalLeft', { returnObjects: true });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pageFormat = useContext(PageFormatContext);

  const handleModalOpen = () => {
    document.body.style.overflow = 'hidden';
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    document.body.style.overflow = '';
    setIsModalOpen(false);
  };

  const { bgForm, contacts } = useStaticQuery(graphql`
    query {
      bgForm: file(name: { eq: "fon-form2" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      contacts: mdx(frontmatter: { fieldIdName: { eq: "contacts" } }) {
        frontmatter {
          _1
          _2
          _3
        }
      }
    }
  `);

  const socials = getSocialData(contacts.frontmatter);

  return (
    <footer className="max-w-[1440px] bg-neutral-600 mx-auto my-0 pt-11 pb-16 md:pb-[50px] md:pt-20 ">
      <Container>
        <div className="flex justify-between mx-auto mb-5 md:items-center md:mb-6 lg:mb-0 lg:mx-0 lg:justify-between">
          <Logo onFooter />

          <FooterNavigation
            navConfig={footer.nav}
            navPubl={footer.navPubl}
            lang={i18n.language}
            className="pt-5 xs:pt-0 lg:ml-0 lg:flex"
          />
          {pageFormat && pageFormat !== 'mobile' && (
            <SocialIconsList
              data={socials}
              language={i18n.language}
              className=""
            />
          )}
        </div>
        {pageFormat && pageFormat === 'mobile' && (
          <SocialIconsList
            data={socials}
            language={i18n.language}
            className="mx-auto mb-5"
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
          id={'footer-button'}
          onClick={handleModalOpen}
          className="bg-cyan-500 w-[280px] hover:bg-cyan-600 transition-colors mx-auto py-4 rounded-xl font-bold leading-6 text-bb2040 md:w-[410px] lg:mb-[70px]"
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
        <ModalRight place="section footer" bg={bgForm} />
      </Modal>
    </footer>
  );
};

export default Footer;
