import React from 'react';
import { IconContext } from 'react-icons/lib';
import Line from 'images/line.inline.svg';

const SocialGroup = ({ data = [], language }) => {
  return (
    !!data.length && (
      <IconContext.Provider value={{ className: 'w-6 h-6' }}>
        <ul className="bg-blue-400 text-slate-50 w-9">
          {data.map(item => {
            return (
              <li
                key={item.id}
                className="flex flex-col fill-slate-50 items-center"
              >
                <Line />
                <a
                  className="py-3"
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
          <li className="flex flex-col fill-slate-50 items-center">
            <Line />
          </li>
        </ul>
      </IconContext.Provider>
    )
  );
};

export default SocialGroup;
