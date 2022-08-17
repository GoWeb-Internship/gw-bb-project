import React from 'react';

const Section = ({ className = '', style = {}, children }) => {
  return (
    <section className={`${className} relative`} style={style}>
      {children}
    </section>
  );
};

export default Section;
