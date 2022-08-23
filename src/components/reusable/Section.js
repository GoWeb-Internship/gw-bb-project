import React from 'react';

const Section = ({ className = '', id = '', style = {}, children }) => {
  return (
    <section
      className={`${className} mx-auto relative max-w-767 lg:w-[1440px]`}
      style={style}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
