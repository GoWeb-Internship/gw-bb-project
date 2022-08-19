import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

const FooterNavigation = ({ navConfig = [], className = '' }) => {
  return (
    <>
      {navConfig.length ? (
        <nav className={className}>
          <ul className="flex">
            {navConfig.map(({ id, name }) => (
              <li
                key={id}
                className="overflow-hidden shrink-0 last:mr-0 md:mr-8 lg:mr-9 footer-item "
              >
                <Link
                  to={`${id}`}
                  activeClass="after:translate-x-0"
                  className="relative font-main font-light text-bb1424 cursor-pointer py-3 "
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
      ) : null}
    </>
  );
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