import * as React from 'react';

const HeroListExperiences = ({ experience }) => {
  return (
    <ul className="grid grid-cols-3 divide-x gap-y-8 border border-slate-50 rounded-2xl py-7 ">
      {experience.items.map(({ id, title, text }) => {
        return (
          <li key={id} className="pl-[110px]">
            <h3 className="text-[40px] leading-6 mb-2 font-bold">{title}</h3>
            <p className="text-base">{text}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default HeroListExperiences;
