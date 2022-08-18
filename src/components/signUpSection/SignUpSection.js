import React from 'react';
import Section from 'components/reusable/Section';
import Background from 'components/reusable/Background';
import Button from 'components/reusable/Button';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from 'components/reusable/Container';

const SignUpSection = () => {
  const { t, i18n } = useTranslation();
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
      <Container>
        <Background imageData={data.background} />
        <Button className="bg-cyan-500 hover:bg-cyan-600 mx-auto py-4 rounded-xl text-xl lg:w-[410px] ">
          {button.textSmallButton}
        </Button>
      </Container>
    </Section>
  );
};

export default SignUpSection;
