import React from 'react';
import { IconContext } from 'react-icons/lib';
import Line from 'images/line.inline.svg';

const SocialGroup = ({ data = [], language }) => {
  return (
    <ul className=" text-slate-50 w-9">
      {data.map(({ id, href, name, Component }) => {
        return (
          <li
            key={id}
            className="flex flex-col fill-slate-50 items-center line-hidden"
          >
            <a
              className="py-3"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name[language]}
            >
              <Component className="w-6 h-6 duration-200 transition-transform hover:scale-110" />
            </a>
            <Line className="peer" />
          </li>
        );
      })}
    </ul>
  );
};

export default SocialGroup;
