import React from 'react';
import { useI18next, Link } from 'gatsby-plugin-react-i18next';

const LangSwitcher = () => {
  const { languages, originalPath } = useI18next();
  return (
    <ul className={'flex'}>
      {languages.map(lng => (
        <li key={lng}>
          <Link
            to={originalPath}
            language={lng}
            className="p-4 hover:bg-blue-400"
          >
            {lng}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LangSwitcher;
