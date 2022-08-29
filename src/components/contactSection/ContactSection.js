import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Section from 'components/reusable/Section';
import Background2 from 'components/reusable/Background2';
import Form from 'components/form/Form';
import Container from 'components/reusable/Container';

const ContactSection = ({ saleText = '', cost = '', children }) => {
  const { t } = useTranslation();
  const sale = t('modalLeft', { returnObjects: true });
  const data = useStaticQuery(graphql`
    query {
      background: file(name: { eq: "fon-contacts" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `);
  return (
    <Section id="contacts">
      <Background2 objectPosition="right bottom" imageData={data.background} />
      <Container className="pt-9 pb-[72px] md:flex md:justify-center lg:justify-end md:pt-[96px] md:pb-[104px]">
        <h2 className="visually-hidden">Contacts</h2>
        <div className="bg-none md:bg-slate-50/[.3] md:rounded-[20px] md:w-[602px] md:h-[707px] md:px-[74px] md:py-[109px]">
          <p className="text-bb1225 text-center text-bold mb-4 md:text-bb1625 md:mb-[20px]">
            {sale.text}
            <span className="inline-block text-orange-400 mx-1">
              {saleText}
            </span>
            {sale.text2}
          </p>
          <p className="text-bb1222 text-center text-bold mb-6 md:text-bb1422 md:mb-[46px]">
            *{cost}
          </p>
          {children}
        </div>
      </Container>
    </Section>
  );
};
Form.propTypes = {
  saleText: PropTypes.string,
  cost: PropTypes.string,
};

export default ContactSection;
