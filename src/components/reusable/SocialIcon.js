import React from 'react';
import { IconContext } from 'react-icons/lib';

const SocialIcon = ({ data = [], language }) => {
  return (
    !!data.length && (
      <IconContext.Provider
        value={{
          className:
            'w-6 h-6 duration-200 transition-transform hover:scale-110',
        }}
      >
        <ul className="text-slate-50 w-9 flex md:absolute md:right-[5%] md:top-0 md:flex-col md:items-center lg:flex-row lg:relative lg:right-0">
          {data.map(item => {
            return (
              <li
                key={item.id}
                className="fill-slate-50 md:mb-5 lg:mr-[30px] lg:mb-0 socialIcon-item"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name[language]}
                >
                  <item.component />
                </a>
              </li>
            );
          })}
        </ul>
      </IconContext.Provider>
    )
  );
};

export default SocialIcon;
