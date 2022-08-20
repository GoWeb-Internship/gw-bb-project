import React from 'react';

const Section = ({ className = '', id = '', style = {}, children }) => {
  return (
    <section
      className={`${className} mx-auto relative lg:w-[1440px]`}
      style={style}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
