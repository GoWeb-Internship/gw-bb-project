import React from 'react';
import { IconContext } from 'react-icons/lib';
import Line from 'images/line.inline.svg';

const SocialGroup = ({ data = [], language }) => {
  return (
    !!data.length && (
      <IconContext.Provider
        value={{
          className:
            'w-6 h-6 duration-200 transition-transform hover:scale-110',
        }}
      >
        <ul className=" text-slate-50 w-9">
          {data.map(item => {
            return (
              <li
                key={item.id}
                className="flex flex-col fill-slate-50 items-center line-hidden"
              >
                <a
                  className="py-3"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name[language]}
                >
                  <item.component />
                </a>
                <Line className="peer" />
              </li>
            );
          })}
        </ul>
      </IconContext.Provider>
    )
  );
};

export default SocialGroup;
