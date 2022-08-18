import React from 'react';

const Section = ({ className = '', id = '', style = {}, children }) => {
  return (
    <section className={`${className} relative`} style={style} id={id}>
      {children}
    </section>
  );
};

export default Section;
