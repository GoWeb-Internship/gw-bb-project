import React, { useEffect, useRef, useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

// import Scripts from 'components/scripts/Scripts';
import Seo from 'components/Seo';
import Layout from 'components/Layout';
import Hero from 'components/hero/Hero';
import AboutSection from 'components/aboutSection/AboutSection';
import RoadMapSection from 'components/roadMapSection/RoadMapSection';
import FeedbackSection from 'components/feedbackSection/FeedbackSection';
import GuaranteeSection from 'components/guaranteeSection/GuaranteeSection';
import WithCoachSection from 'components/withCoachSection/WithCoachSection';
import PriceSection from 'components/priceSection/PriceSection';
import ImportantResultsSection from 'components/importantResultsSection/ImportantResultsSection';
import StoriesSection from 'components/storiesSection/StoriesSection';
import InLiveSection from 'components/inLiveSection/InLiveSection';
import SignUpSection from 'components/signUpSection/SignUpSection';
import ContactSection from 'components/contactSection/ContactSection';
import Form from 'components/form/Form';
import BeBetterToday from 'components/beBetterToday/BeBetterToday';
import MyFormulaSection from 'components/myFormulaSection/MyFormulaSection';
import Modal from 'components/reusable/Modal';
import ModalLeft from 'components/modalValue/ModalLeft';
import ModalRight from 'components/modalValue/ModalRight';
import { Toaster } from 'react-hot-toast';

const IndexPage = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLeftModal, setIsLeftModal] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [place, setPlace] = useState('');
  const observer = useRef();
  const container = useRef(null);

  const onFormIntersection = entries => {
    if (!entries || entries.length <= 0) {
      return;
    }

    if (entries[0].isIntersecting) {
      setShowForm(true);
      observer.current.disconnect();
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(onFormIntersection, {
      rootMargin: '100px 0px',
      threshold: 0.25,
    });
  }, []);

  useEffect(() => {
    if (window && 'IntersectionObserver' in window) {
      if (container && container.current) {
        observer.current.observe(container.current);
      }
    } else {
      showForm(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container]);

  const handleModalOpen = (place, isLeft = true) => {
    document.body.style.overflow = 'hidden';
    setIsModalOpen(true);
    setPlace(place);
    setIsLeftModal(isLeft);
  };

  const handleModalClose = () => {
    document.body.style.overflow = '';
    setIsModalOpen(false);
  };

  const { t } = useTranslation();
  const button = t('button', { returnObjects: true });
  const seo = t('seo', { returnObjects: true });

  const { charity, sale, cost } = data.content.frontmatter;

  return (
    <>
      {/* <Scripts /> */}
      <Seo
        title={seo.title}
        description={seo.description}
        lang={data.locales.edges[0].node.language}
      />
      <Layout
        saleText={sale}
        cost={cost}
        charity={charity}
        openModal={handleModalOpen}
      >
        <Hero openModal={handleModalOpen} />
        <AboutSection />
        <RoadMapSection />
        <FeedbackSection />
        <GuaranteeSection />
        <WithCoachSection />
        <PriceSection charity={charity} openModal={handleModalOpen} />
        <ImportantResultsSection />
        <StoriesSection />
        <InLiveSection />
        <SignUpSection
          saleText={sale}
          cost={cost}
          openModal={handleModalOpen}
        />
        <ContactSection saleText={sale} cost={cost} sectionRef={container}>
          <div ref={container}>
            {showForm && (
              <Form
                place="section Contact"
                buttonText={button.textBigButton}
                buttonClassName="bg-orange-400 hover:bg-orange-500"
              />
            )}
          </div>
        </ContactSection>
        <BeBetterToday />
        <MyFormulaSection />
      </Layout>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
          {isLeftModal ? (
            <ModalLeft
              bg={data.bgFormL}
              place={place}
              saleText={sale}
              cost={cost}
            />
          ) : (
            <ModalRight place={place} bg={data.bgFormR} />
          )}
        </Modal>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    content: mdx(
      frontmatter: { fieldIdName: { eq: "main" }, language: { eq: $language } }
    ) {
      frontmatter {
        charity
        sale
        cost
      }
    }
    bgFormL: file(name: { eq: "fon-form1" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
      }
    }
    bgFormR: file(name: { eq: "fon-form2" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
