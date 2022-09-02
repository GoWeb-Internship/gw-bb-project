import React from 'react';
import PropTypes from 'prop-types';
import Section from 'components/reusable/Section';
import Background from 'components/reusable/Background';
import Button from 'components/reusable/Button';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'components/reusable/Container';

const SignUpSection = ({ saleText = '', cost = '', openModal }) => {
  const { t } = useTranslation();
  const button = t('button', { returnObjects: true });
  const sale = t('modalLeft', { returnObjects: true });

  const handleClick = () => openModal('section Sing Up', false);

  //'section Sing Up'

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
      <Container className="pt-[20px] pb-[62px] md:pb-[62px] md:pt-[20px]">
        <Background imageData={data.background} />
        <h2 className="visually-hidden">Sale</h2>
        <p className="text-neutral-600 mb-[10px] text-bb1422 md:text-bb2040 font-bold mx-auto md:max-w-[570px] md:mb-2 text-center">
          {sale.text}
          <span className="inline-block text-cyan-500 mx-1">{saleText}</span>
          {sale.text2}
        </p>
        <p className="text-neutral-600 mb-[33px] text-bb1222 md:text-bb1625 font-bold mx-auto md:max-w-[570px] md:mb-6 text-center">
          *{cost}
        </p>
        <Button
          id={'signup-button'}
          onClick={handleClick}
          className="bg-cyan-500 transition-colors duration-200 hover:bg-cyan-600 mx-auto py-4 rounded-xl text-xl w-[280px] md:w-[410px] "
        >
          {button.textSmallButton}
        </Button>
      </Container>
    </Section>
  );
};

SignUpSection.propTypes = {
  saleText: PropTypes.string,
  cost: PropTypes.string,
};
export default SignUpSection;
