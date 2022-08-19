import React from 'react';
import PropTypes from 'prop-types';
import Background from 'components/reusable/Background';
import Form from 'components/form/Form';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import useClientLocation from 'hooks/useClientLocation';

const ModalLeft = ({ bg, place, saleText }) => {
  const { t } = useTranslation();
  const button = t('button', { returnObjects: true });
  const clientLocation = useClientLocation();

  return (
    <div className="lg:w-[934px] lg:h-[614px] lg:pt-[60px] lg:pl-[56px] lg:pb-[68px]">
      <Background className="h-full lg:w-[934px]" imageData={bg} />
      <div className=" lg:w-[410px]">
        <p className="font-main font-bolt text-bb1625 mb-10">{saleText}</p>
        <Form
          place={place}
          country={clientLocation}
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
