import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const FooterNavigation = ({ navConfig = [], navPubl = [], className = '' }) => {
  return navConfig.length ? (
    <nav className={className}>
      <ul className="flex-col-reverse text-end w-[196px] flex md:ml-[10px] md:flex-row md:justify-around mb-5 md:mb-0 lg:ml-0 lg:justify-around md:w-full">
        {navPubl.map(({ id, name }) => {
          console.log(id);
          return (
            <li key={id} className="overflow-hidden last:mr-0 lg:mr-9 ">
              <Link
                to={id}
                className="font-main font-light text-bb1224 md:text-bb1424 cursor-pointer pb-3"
                smooth
                spy
                // hashSpy
                offset={-100}
                href=" "
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="hidden md:flex md:flex-wrap md:justify-around lg:flex-nowrap lg:justify-evenly md:w-full">
        {navConfig.map(({ id, name }) => (
          <li key={id} className="overflow-hidden last:mr-0 lg:mr-9">
            <Link
              to={`${id}`}
              className="font-main font-light text-bb1424 cursor-pointer py-3 "
              smooth
              spy
              // hashSpy
              offset={-100}
              href=""
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  ) : null;
};

FooterNavigation.propTypes = {
  navConfig: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  className: PropTypes.string,
};

export default FooterNavigation;
