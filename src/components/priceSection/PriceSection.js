import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Section from 'components/reusable/Section';
import Container from 'components/reusable/Container';
import { graphql, useStaticQuery } from 'gatsby';
import Background from 'components/reusable/Background';
import PriceCardsList from './PriceCardsList';
import Modal from 'components/reusable/Modal';
import ModalRight from 'components/modalValue/ModalRight';

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
      <Background imageData={background} />
      <Container className="lg:pt-[124px] lg:pb-[79px]">
        <h2 className="lg:mb-[62px] text-center">{title}</h2>
        <PriceCardsList
          cardsList={cardsList.nodes}
          className="lg:mb-[52px]"
          onClick={handleModalOpen}
        />
        {charity && (
          <p className="text-center font-normal text-bb2040">{charity}</p>
        )}
      </Container>
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
