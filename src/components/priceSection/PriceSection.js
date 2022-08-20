import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Section from 'components/reusable/Section';
import { graphql, useStaticQuery } from 'gatsby';
import PriceCardsList from './PriceCardsList';
import Modal from 'components/reusable/Modal';
import ModalRight from 'components/modalValue/ModalRight';
import Background2 from 'components/reusable/Background2';

const PriceSection = ({ title, charity = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [place, setPlace] = useState('');

  const handleModalOpen = value => {
    setPlace(value);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const { background, cardsList, bgForm } = useStaticQuery(graphql`
    query {
      background: file(name: { eq: "price-bg" }) {
        childImageSharp {
          id
          gatsbyImageData
        }
      }
      cardsList: allMdx(
        filter: { frontmatter: { fieldIdName: { eq: "prices" } } }
        sort: { fields: frontmatter___id, order: ASC }
      ) {
        nodes {
          frontmatter {
            uk
            ukMonth
            ukSessions
            ru
            ruMonth
            ruSessions
            en
            enMonth
            enSessions
            discount
            price
            recommended
          }
        }
      }
      bgForm: file(name: { eq: "fon-form2" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  return (
    <Section id="price">
      <Background2 imageData={background} />
      <div className="relative w-screen mx-auto px-0 pt-9 pb-[70px] md:w-[768px] md:px-0 md:pt-10 md:pb-[74px] lg:w-[1440px] lg:px-20 lg:pt-[124px] lg:pb-[79px]">
        <h2 className="mx-auto text-center text-bb2833 px-8 mb-10 md:px-0 md:max-w-[698px] md:mb-14 lg:mb-[62px]">
          {title}
        </h2>
        <PriceCardsList
          cardsList={cardsList.nodes}
          className="mb-[30px] md:mb-16 lg:mb-[52px]"
          onClick={handleModalOpen}
        />
        {charity && (
          <p className="mx-auto text-center font-normal text-bb1225 px-8 max-w-[430px] md:px-0 md:max-w-[540px] md:text-bb2040">
            {charity}
          </p>
        )}
      </div>
      <Modal isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
        <ModalRight place={place} bg={bgForm} />
      </Modal>
    </Section>
  );
};

PriceSection.propTypes = {
  title: PropTypes.string.isRequired,
  charity: PropTypes.string.isRequired,
};

export default PriceSection;
