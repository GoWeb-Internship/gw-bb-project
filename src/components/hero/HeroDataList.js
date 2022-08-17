import * as React from 'react';

const HeroDataList = ({ heroDataList }) => {
  return (
    <>
      <h2 className="mb-[38px] text-[28px] leading-8 font-bold tracking-tight">
        {heroDataList.title}:
      </h2>
      <ul className="grid grid-cols-3 gap-x-10 gap-y-10 relative mb-9">
        {heroDataList.list.map(item => (
          <li key={item} className="border-t-2 border-slate-50 py-6">
            <p className="text-lg leading-[25px]">{item}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HeroDataList;
