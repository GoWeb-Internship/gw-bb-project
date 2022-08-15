import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
//
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({ images }) => {
  const { i18n } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { fieldIdName: { eq: "policy" } } }
        sort: { fields: frontmatter___title, order: ASC }
      ) {
        nodes {
          frontmatter {
            title
            uk
            ru
            en
            date
          }
          id
        }
      }
    }
  `);

  const mdxData = data.allMdx.nodes;
  console.log('mdxData', mdxData);

  // const swiper = new Swiper('.swiper', {
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });

  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log('test>>', swiper)}
        navigation={true}
        pagination={{ clickable: true }}
      >
        {mdxData.map(({ frontmatter }) => {
          console.log(frontmatter);
          return (
            <SwiperSlide key={frontmatter.id}>
              <h3>{frontmatter.title}</h3>
              <p>{frontmatter.date}</p>
              <p>{frontmatter[i18n.language]}</p>
            </SwiperSlide>
          );
        })}
        {images.map(item => {
          const imageData = item.cloudinaryImg.childImageSharp.gatsbyImageData;
          const imageAlt = item.frontmatter[i18n.language];
          return (
            <SwiperSlide key={item.id}>
              <GatsbyImage image={imageData} alt={imageAlt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default Slider;
