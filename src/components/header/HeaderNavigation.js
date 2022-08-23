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
              <li key={id} className="shrink-0 last:mr-0 md:mr-6 lg:mr-[56px]">
                <Link
                  to={`${id}`}
                  activeClass="after:translate-x-0"
                  className="overflow-hidden relative font-main text-bbBase cursor-pointer py-3 after:content-[''] after:absolute after:bottom-1 after:left-0 after:h-1 after:w-full after:bg-slate-50 after:transition-transform after:duration-200 after:rounded-sm after:translate-x-[102%] hover:after:translate-x-0 focus:after:translate-x-0"
                  smooth
                  spy
                  offset={-headerHeight - 1}
                  href=""
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
