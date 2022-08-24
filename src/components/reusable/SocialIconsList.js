import React from 'react';
import { IconContext } from 'react-icons/lib';

const SocialIconsList = ({
  data = [],
  language,
  vertical = false,
  className = '',
}) => {
  const verticalClasses = vertical ? 'flex-col' : 'flex-row';
  const sizes = vertical ? 'w-6 h-[112px]' : 'w-[152px] lg:w-[128px] h-6';

  return (
    <ul
      className={`${className} ${sizes} flex ${verticalClasses} justify-between text-slate-50`}
    >
      {data.map(({ id, href, name, Component }) => {
        return (
          <li
            key={id}
            className="mr-10 fill-slate-50 md:mb-5 lg:mr-[30px] lg:mb-0 socialIcon-item"
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name[language]}
            >
              <Component className="w-6 h-6 duration-200 transition-transform hover:scale-110" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIconsList;
