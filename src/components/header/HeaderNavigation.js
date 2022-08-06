import React from 'react';

const HeaderNavigation = ({ navConfig }) => {
  return (
    <nav>
      <ul className="flex">
        {navConfig.map(({ id, name }) => (
          <li key={id} className="shrink-0">
            <a href={`#${id}`} className={'p-4 hover:bg-blue-400'}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
