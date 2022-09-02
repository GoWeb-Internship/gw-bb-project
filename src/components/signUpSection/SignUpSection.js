import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Section from 'components/reusable/Section';
import Background from 'components/reusable/Background';
import Button from 'components/reusable/Button';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'components/reusable/Container';
import Modal from 'components/reusable/Modal';
import ModalRight from 'components/modalValue/ModalRight';

const SignUpSection = ({ saleText = '', cost = '' }) => {
  const { t } = useTranslation();
  const button = t('button', { returnObjects: true });
  const sale = t('modalLeft', { returnObjects: true });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    document.body.style.overflow = 'hidden';
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    document.body.style.overflow = '';
    setIsModalOpen(false);
  };

  const data = useStaticQuery(graphql`
    query {
      background: file(name: { eq: "sand" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
      bgForm: file(name: { eq: "fon-form2" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);

  return (
    <Section>
      <Container className="pt-[26px] pb-[63px] md:pt-[42px] md:pb-[62px] lg:pb-[70px] lg:pt-[24px]">
        <Background imageData={data.background} />
        <h2 className="visually-hidden">Sale</h2>
        <p className="text-neutral-600 mb-[10px] text-bb1422 md:text-bb2030 font-bold mx-auto md:max-w-[570px] md:mb-2 text-center">
          {sale.text}
          <span className="inline-block text-cyan-500 mx-1">{saleText}</span>
          {sale.text2}
        </p>
        <p className="text-neutral-600 mb-[33px] text-bb1222 md:text-bb1625 font-bold mx-auto md:max-w-[570px] md:mb-6 text-center">
          *{cost}
        </p>
        <Button
          id={'signup-button'}
          onClick={handleModalOpen}
          className="bg-cyan-500 transition-colors duration-200 hover:bg-cyan-600 mx-auto py-4 rounded-xl text-xl w-[280px] md:w-[410px] "
        >
          {button.textSmallButton}
        </Button>
      </Container>
      <Modal isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
        <ModalRight place="section Sing Up" bg={data.bgForm} />
      </Modal>
    </Section>
  );
};

SignUpSection.propTypes = {
  saleText: PropTypes.string,
  cost: PropTypes.string,
};
export default SignUpSection;
