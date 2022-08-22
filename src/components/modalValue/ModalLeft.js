import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Background2 from 'components/reusable/Background2';
import Form from 'components/form/Form';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { PageFormatContext } from 'context/PageFormatContext';

const ModalLeft = ({ bg, place, saleText, cost }) => {
  const { t } = useTranslation();
  const button = t('button', { returnObjects: true });
  const pageFormat = useContext(PageFormatContext);

  return (
    <div className="max-w-sm(384px) py-[42px] px-[20px] h-full lg:w-[934px] lg:h-[614px] lg:pt-[60px] lg:pl-[56px] lg:pb-[68px]">
      {pageFormat === 'desktop' ? (
        <Background2
          className=" w-full h-full lg:w-[934px]"
          imageData={bg}
          objectPosition="center top"
        />
      ) : (
        <Background2
          className="w-full h-full lg:w-[934px]"
          imageData={bg}
          objectPosition="150px top"
        />
      )}
      <div className="max-w-sm(384px) md:w-[450px] md:mx-auto lg:mx-0">
        <p className="font-main text-bb1422 font-bolt md:text-bb1625 mb-4">
          {saleText}
        </p>
        <p className="font-main text-bb1222 font-bolt md:text-bb1425 mb-6 ">
          *{cost}
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
  cost: PropTypes.string,
};

export default ModalLeft;
