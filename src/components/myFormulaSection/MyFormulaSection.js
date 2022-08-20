import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import MyFormulaList from './MyFormulaList';
import Section from '../reusable/Section';

const MyFormulaSection = () => {
  const { t } = useTranslation();
  const myFormula = t('myFormula', {
    returnObjects: true,
  });

  return (
    <Section>
      <div className="bg-orange-300 pt-9 pb-[72px] mx-auto my-0 h-full md:py-20 md:px-[34px] lg:pt-[124px] lg:pb-[64px] lg:px-[190px] text-slate-50 lg:w-[1440px]">
        <h2 className="mb-6 md:mb-8 lg:mb-14 text-center">{myFormula.title}</h2>
        <MyFormulaList data={myFormula} />
      </div>
    </Section>
  );
};

export default MyFormulaSection;
