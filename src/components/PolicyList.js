import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const PolicyList = ({ policyItems = [] }) => {
  const { i18n } = useTranslation();

  return (
    <ul>
      {policyItems.map(({ frontmatter }) => (
        <li key={frontmatter.policyItemNumber}>
          <span>{frontmatter.policyItemNumber}. </span>
          {frontmatter[i18n.language]}
        </li>
      ))}
    </ul>
  );
};

PolicyList.propTypes = {
  policyItems: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        policyItemNumber: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        uk: PropTypes.string.isRequired,
        ru: PropTypes.string.isRequired,
        en: PropTypes.string.isRequired,
      }),
    }),
  ),
};

export default PolicyList;