import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
//
import { useTranslation } from 'react-i18next';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';
//

import 'swiper/css';
import 'swiper/css/navigation';
//

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

  const swiperNavPrevRefs = useRef(null);
  const swiperNavNextRefs = useRef(null);

  return (
    <div className="relative">
      <Swiper
        className="w-4/5"
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log('test>>', swiper)}
        navigation={{
          prevEl: swiperNavPrevRefs.current,
          nextEl: swiperNavNextRefs.current,
        }}
        pagination={{ clickable: true }}
      >
        {mdxData.map(({ frontmatter }) => {
          console.log(frontmatter);
          return (
            <SwiperSlide
              key={frontmatter.title}
              className="border-2 border-orange-600 text-center"
            >
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
            <SwiperSlide key={item.id} className="border-2 border-orange-600 ">
              <GatsbyImage
                image={imageData}
                alt={imageAlt}
                className="my-0 mx-auto"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-button-prev" ref={swiperNavPrevRefs}>
        <BsArrowLeftCircle className="w-12 h-12 fill-orange-600" />
      </div>
      <div className="swiper-button-next" ref={swiperNavNextRefs}>
        <BsArrowRightCircle className="w-12 h-12 fill-orange-600" />
      </div>
    </div>
  );
};
export default Slider;
