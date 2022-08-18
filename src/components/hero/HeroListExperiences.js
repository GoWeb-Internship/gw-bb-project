import * as React from 'react';

const HeroListExperiences = ({ experience }) => {
  return (
    <div className="relative">
      <ul className="grid grid-cols-3 divide-x border border-slate-50 rounded-2xl py-7 relative ">
        {experience.items.map(({ id, title, text }) => {
          return (
            <li
              key={id}
              className="pl-[110px] text-slate-50 hero-expirience-line"
            >
              <h3 className="text-[40px] leading-6 mb-2 font-bold">{title}</h3>
              <p className="text-base">{text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default HeroListExperiences;
