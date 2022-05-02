import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import CardNovedad from './Card';

const SliderNovedades = () => {
  const options = {
    type: 'loop',
    autoplay: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    resetProgress: true,
    pagination: false,
    speed: 1000,
  };
  return (
    <Splide className="w-full" options={options}>
      <SplideSlide>
        <CardNovedad display="extended" />
      </SplideSlide>
      <SplideSlide>
        <CardNovedad display="extended" />
      </SplideSlide>
      <SplideSlide>
        <CardNovedad display="extended" />
      </SplideSlide>
    </Splide>
  );
};

export default SliderNovedades;
