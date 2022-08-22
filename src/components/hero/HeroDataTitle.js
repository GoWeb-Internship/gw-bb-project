import * as React from 'react';

const HeroDataTitle = ({ heroTitle }) => {
  return (
    <>
      <p className="text-bb1424 mb-3 md:mb-4 lg:text-lg leading-6 md:text-bb1824">
        {heroTitle.supTitle}
      </p>
      <h1 className="text-bb3030 mb-3 font-heads font-bold md:text-5xl leading-[58px] lg:mb-2 md:mb-4">
        {heroTitle.title}
      </h1>
      <p className="font-heads mb-20 lg:mb-16 text-bb1618 md:text-bb3237 md:mb-12">
        {heroTitle.subTitle}
      </p>
    </>
  );
};
export default HeroDataTitle;
