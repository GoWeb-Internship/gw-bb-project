import React from 'react';
import PropTypes from 'prop-types';
import Background from 'components/reusable/Background';
import Form from 'components/form/Form';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const ModalLeft = ({ bg, place, saleText }) => {
  const { t } = useTranslation();
  const button = t('button', { returnObjects: true });

  return (
    <div className="max-w-sm(384px) py-[40px] px-[20px] h-full lg:w-[934px] lg:h-[614px] lg:pt-[60px] lg:pl-[56px] lg:pb-[68px]">
      <Background className="w-full h-full lg:w-[934px]" imageData={bg} />
      <div className="max-w-sm(384px) md:w-[410px] md:mx-auto lg:mx-0">
        <p className="font-main text-bb1422 font-bolt md:text-bb1625 mb-10">
          {saleText}
        </p>
        <Form
          place={place}
          buttonText={button.textSmallButton}
          buttonClassName="bg-orange-400 hover:bg-orange-500 focus:bg-orange-500"
        />
      </div>
    </div>
  );
};

ModalLeft.propTypes = {
  bg: PropTypes.object,
  place: PropTypes.string,
  saleText: PropTypes.string,
};

export default ModalLeft;
