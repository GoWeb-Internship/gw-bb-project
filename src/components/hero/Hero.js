import * as React from 'react';
import Button from 'components/reusable/Button';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = ({
  data = [],
  heroDataTitle = [],
  heroDataList = [],
  language,
  children,
}) => {
  console.log('dataHero', data);
  return (
    <section
    // className="bg-gray-400 pt-48 pb-20"
    >
      <div className="grid">
        <StaticImage
          style={{
            gridArea: '1/1',
            maxHeight: 1170,
          }}
          layout="fullWidth"
          alt=""
          src={'../../images/jcob-nasyr-rK2HPIseisA-unsplash.jpg'}
          formats={['auto', 'webp', 'avif']}
        />
        <div
          style={{
            gridArea: '1/1',
            position: 'relative',
            // placeItems: 'center',
            display: 'grid',
          }}
        >
          <div className="pt-48 pb-20 px-20">
            <div className="flex justify-between items-center">
              <div>
                {data.map(({ supTitle, title, subTitle }) => {
                  return (
                    <>
                      <h3 className="mb-8">{supTitle[language]}</h3>
                      <h1>{title[language]}</h1>
                      <p className="mb-12">{subTitle[language]}</p>
                    </>
                  );
                })}
                <Button
                  type="button"
                  className="bg-orange-400 rounded-xl py-4 px-14"
                >
                  Сделать первый шаг
                </Button>
              </div>
              {children}
            </div>
            {heroDataTitle.map(({ title }) => (
              <h2 className="mb-14">{title[language]}:</h2>
            ))}
            <ul className="grid grid-cols-3 gap-x-9 gap-y-9 relative">
              {heroDataList.map(({ id, text }) => (
                <li
                  key={id}
                  className="border-t-2 border-slate-50 py-6"
                  // className="before:content-[``] before:w-full before:-mt-6 before:absolute before:border-1 before:h-px before:bg-orange-400"
                >
                  {text[language]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
