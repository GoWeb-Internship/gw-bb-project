import React from 'react';
import { Link } from 'react-scroll';

const HeaderNavigation = ({ navConfig }) => {
  return (
    <nav>
      <ul className="flex">
        {navConfig.map(({ id, name }) => (
          <li key={id} className="shrink-0">
            <Link
              to={`${id}`}
              activeClass="bg-blue-400"
              className={`p-4 hover:bg-blue-400`}
              smooth
              spy
              // hashSpy
              offset={-100}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
