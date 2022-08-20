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
    <div className="  py-[40px] px-[20px] h-full lg:w-[934px] lg:h-[614px] lg:flex lg:justify-end lg:pt-[60px] lg:pr-[96px] lg:pb-[48px]">
      <Background className=" w-full h-full lg:w-[934px]" imageData={bg} />
      <div className=" max-w-sm(384px) md:w-[410px] md:mx-auto lg:mx-0">
        <h3 className="text-bb1622 md:text-bb2040 font-bold font-main mb-[8px]">
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
