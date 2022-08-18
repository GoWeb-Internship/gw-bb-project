import React from 'react';
import PriceCard from './PriceCard';

const PriceCardsList = ({ cardsList = [], className = '' }) => {
  return (
    <ul className={`${className} lg:flex lg:justify-center items-center`}>
      {!!cardsList.length &&
        cardsList.map(({ frontmatter }, id) => (
          <li key={`price-${id}`} className="lg:mr-[38px] lg:last:mr-0">
            <PriceCard cardData={frontmatter} />
          </li>
        ))}
    </ul>
  );
};

export default PriceCardsList;
