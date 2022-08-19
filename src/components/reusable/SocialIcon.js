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
        <ul className="text-slate-50 w-9 flex flex-row">
          {data.map(item => {
            return (
              <li
                key={item.id}
                className="fill-slate-50 mr-[30px] socialIcon-item"
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
