import React from 'react';

const SocialIconsList = ({ data = [], language, className = '' }) => {
  return (
    <ul
      className={`${className} w-[152px] h-6 flex  justify-between text-slate-50 md:w-[128px]`}
    >
      {data.map(({ id, href, name, Component }) => {
        return (
          <li
            key={`${id}-socicons-group`}
            className="fill-slate-50 md:mb-5 lg:mr-[30px] lg:mb-0 socialIcon-item"
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
