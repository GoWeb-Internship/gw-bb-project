import * as React from 'react';

const HeroDataList = ({ heroDataList }) => {
  return (
    <>
      <h2 className="font-heads mb-[38px] text-[28px] leading-8 font-bold tracking-tight lg:-mt-12">
        {heroDataList.title}:
      </h2>
      <ul className="grid gap-x-10 gap-y-10 relative mb-9 md:grid-cols-2 lg:grid-cols-3">
        {heroDataList.list.map((item, id) => (
          <li key={`hero-${id}`} className="border-t border-slate-50 py-6">
            <p className="text-lg leading-[25px]">{item}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HeroDataList;
