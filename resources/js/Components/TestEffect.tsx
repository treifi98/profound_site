// src/rotate-effect.js

import Swiper from 'swiper/react';

const rotateEffect = {
  name: 'rotate',
  params: {
    rotate: 50,
  },
  create() {
    const swiper = this;

    swiper.$wrapperEl.css({
      'transform-origin': '50% 50%',
    });

    swiper.on('slideNextTransitionStart', () => {
      swiper.$wrapperEl.css({
        transform: `rotate(${swiper.params.rotate}deg)`,
      });
    });

    swiper.on('slidePrevTransitionStart', () => {
      swiper.$wrapperEl.css({
        transform: `rotate(-${swiper.params.rotate}deg)`,
      });
    });

    swiper.on('slideNextTransitionEnd slidePrevTransitionEnd', () => {
      swiper.$wrapperEl.css({
        transform: '',
      });
    });
  },
  on: {
    init() {
      const swiper = this;

      swiper.emit('rotateSetTranslate');
    },
    setTranslate() {
      const swiper = this;

      if (swiper.params.effect !== 'rotate') return;

      swiper.$wrapperEl.css({
        transform: `rotate(${swiper.params.rotate * swiper.progress}deg)`,
      });
    },
  },
};

export default rotateEffect;
