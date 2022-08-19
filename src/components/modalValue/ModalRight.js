import React from 'react';
import PropTypes from 'prop-types';
import Background from 'components/reusable/Background';
import Form from 'components/form/Form';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const ModalRight = ({ bg, place }) => {
  const { t } = useTranslation();
  const button = t('button', { returnObjects: true });
  const modal = t('modalRight', { returnObjects: true });
  return (
    <div className="lg:w-[934px] lg:h-[614px] lg:flex lg:justify-end lg:pt-[60px] lg:pr-[96px] lg:pb-[48px]">
      <Background className="h-full lg:w-[934px]" imageData={bg} />
      <div className=" lg:w-[410px]">
        <h3 className="text-bb2040 font-bold font-main mb-[8px]">
          {modal.title}
        </h3>
        <p className="font-main font-light text-bb1424 mb-8">{modal.text}</p>
        <Form
          place={place}
          buttonText={button.textSmallButton}
          buttonClassName="bg-cyan-500 hover:bg-cyan-600"
        />
      </div>
    </div>
  );
};

ModalRight.propTypes = {
  bg: PropTypes.object,
  place: PropTypes.string,
};

export default ModalRight;
