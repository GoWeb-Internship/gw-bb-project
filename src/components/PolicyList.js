import React from 'react';
import { useTranslation } from 'react-i18next';

const PolicyList = ({ policyItems }) => {
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

export default PolicyList;
