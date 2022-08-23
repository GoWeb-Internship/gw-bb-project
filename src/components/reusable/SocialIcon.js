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
        <ul className="text-slate-50 w-full flex mb-9 mx-auto justify-center md:w-auto md:justify-start md:mb-0 md:absolute md:right-[5%] md:top-0 md:flex-col lg:mx-0 lg:flex-row lg:relative lg:right-0">
          {data.map(item => {
            return (
              <li
                key={item.id}
                className="mr-10 fill-slate-50 md:mb-5 lg:mr-[30px] lg:mb-0 socialIcon-item"
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
