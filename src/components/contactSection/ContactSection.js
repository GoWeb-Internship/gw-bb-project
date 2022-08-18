import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Section from 'components/reusable/Section';
import Background from 'components/reusable/Background';
import Form from 'components/form/Form';
import useClientLocation from 'hooks/useClientLocation';
import Container from 'components/reusable/Container';

const ContactSection = ({ saleText = '' }) => {
  const clientLocation = useClientLocation();

  const data = useStaticQuery(graphql`
    query {
      background: file(name: { eq: "fon-contacts" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <Section id="contacts">
      <Background imageData={data.background} />
      <Container>
        <h2 className="visually-hidden">Contacts</h2>
        <div className="bg-slate-50 opacity-30 rounded-[20px] lg:w-[602px] lg:h-[707px] lg:px-[96px] lg:py-[109px]">
          <p className="text-bb1625 text-bold lg:mb-[46px]">{saleText}</p>
          <Form place="Home page" country={clientLocation} buttonText="" />
        </div>
      </Container>
    </Section>
  );
};
Form.propTypes = {
  saleText: PropTypes.string,
};

export default ContactSection;
