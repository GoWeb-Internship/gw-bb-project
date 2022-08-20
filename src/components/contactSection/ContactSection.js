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
      <Container className="pt-9 pb-[72px] md:flex md:justify-center lg:justify-end md:pt-[96px] md:pb-[104px]">
        <h2 className="visually-hidden">Contacts</h2>
        <div className="bg-none md:bg-slate-50/[.3] md:rounded-[20px] md:w-[602px] md:h-[707px] md:px-[74px] md:py-[109px]">
          <p className="text-bb1225 text-center text-bold mb-6 md:text-bb1625 md: md:mb-[46px]">
            {saleText}
          </p>
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
