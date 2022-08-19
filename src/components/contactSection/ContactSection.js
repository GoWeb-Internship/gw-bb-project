import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Section from 'components/reusable/Section';
import Background from 'components/reusable/Background';
import Form from 'components/form/Form';
import Container from 'components/reusable/Container';

const ContactSection = ({ saleText = '', children }) => {
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
      <Container className="lg:flex lg:justify-end pt-[96px] pb-[104px]">
        <h2 className="visually-hidden">Contacts</h2>
        <div className="bg-slate-50/[.3] rounded-[20px] lg:w-[602px] lg:h-[707px] lg:px-[74px] lg:py-[109px]">
          <p className="text-bb1625 text-bold lg:mb-[46px]">{saleText}</p>
          {children}
        </div>
      </Container>
    </Section>
  );
};
Form.propTypes = {
  saleText: PropTypes.string,
};

export default ContactSection;
