import * as React from 'react';

const HeroDataTitle = ({ heroTitle }) => {
  return (
    <>
      <p className="mb-4 text-lg leading-6">{heroTitle.supTitle}</p>
      <h1 className="font-heads font-bold text-5xl leading-[58px] mb-2">
        {heroTitle.title}
      </h1>
      <p className="font-heads mb-16 text-[32px] leading-9">
        {heroTitle.subTitle}
      </p>
    </>
  );
};
export default HeroDataTitle;
