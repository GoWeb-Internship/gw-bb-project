import React from 'react';
import PropTypes from 'prop-types';
import Section from 'components/reusable/Section';
import Background from 'components/reusable/Background';
import Button from 'components/reusable/Button';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import Container from 'components/reusable/Container';

const SignUpSection = ({ saleText = '' }) => {
  const { t } = useTranslation();
  const button = t('button', { returnObjects: true });
  const data = useStaticQuery(graphql`
    query {
      background: file(name: { eq: "sand" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <Section>
      <Container className="lg:pb-[62px] lg:pt-[32px]">
        <Background imageData={data.background} />
        <h2 className="visually-hidden">Sale</h2>
        <p className="text-neutral-600 font-bold leading-10 mx-auto lg:max-w-[570px] lg:mb-6 text-center">
          {saleText}
        </p>
        <Button className="bg-cyan-500 hover:bg-cyan-600 mx-auto py-4 rounded-xl text-xl lg:w-[410px] ">
          {button.textSmallButton}
        </Button>
      </Container>
    </Section>
  );
};

SignUpSection.propTypes = {
  saleText: PropTypes.string,
};
export default SignUpSection;
