import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

const HeaderNavigation = ({
  navConfig = [],
  className = '',
  headerHeight = 0,
}) => {
  return (
    <>
      {navConfig.length ? (
        <nav className={className}>
          <ul className="flex">
            {navConfig.map(({ id, name }) => (
              <li
                key={id}
                className="overflow-hidden shrink-0 last:mr-0 md:mr-6 lg:mr-[56px]"
              >
                <Link
                  to={`${id}`}
                  className="relative font-main text-bbBase cursor-pointer py-3 after:content-[''] after:absolute after:bottom-1 after:left-0 after:h-1 after:w-full after:bg-slate-50 after:rounded-sm focus:-translate-x-[102%] after:transition-transform after:duration-200 after:hover:translate-x-0 after:focus:translate-x-0 non-active-link"
                  activeClass="after:translate-x-0"
                  smooth
                  spy
                  offset={-headerHeight - 1}
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

HeaderNavigation.propTypes = {
  navConfig: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  className: PropTypes.string,
  headerHeight: PropTypes.number.isRequired,
};

export default HeaderNavigation;
