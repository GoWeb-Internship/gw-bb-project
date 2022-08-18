import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import MyFormulaList from './MyFormulaList';

const MyFormulaSection = () => {
  const { t } = useTranslation();
  const myFormula = t('myFormula', {
    returnObjects: true,
  });

  console.log('myFormula.items', myFormula.items);
  return (
    <>
      <div className="bg-[#FFBD87] w-full h-full pt-[124px] pb-[64px] px-[190px] text-slate-50">
        <h2 className="mb-14 text-center">{myFormula.title}</h2>
        <MyFormulaList data={myFormula} />
      </div>
    </>
  );
};

export default MyFormulaSection;
