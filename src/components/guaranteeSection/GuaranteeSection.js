import * as React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Section from '../reusable/Section';
import video from '../../video/sea.mp4';

const GuaranteeSection = () => {
  const { t } = useTranslation();
  const guarantee = t('guarantee', { returnObjects: true });

  return (
    <Section>
      <div className="lg:max-h-[540px] overflow-y-hidden md:max-h-[382px]">
        <video
          className="relative my-0 mx-auto lg:max-w-[1440px] md:max-w-[768px]"
          autoPlay={true}
          muted
          loop
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute lg:left-[50%] lg:top-1/3 origin-top-left text-slate-50 md:top-[18%] md:left-[40%]">
          <h2 className="mb-12">{guarantee.title}</h2>
          <p className="lg:w-[620px] md:w-[424px]">{guarantee.text}</p>
        </div>
      </div>
    </Section>
  );
};

export default GuaranteeSection;
